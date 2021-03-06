from typing import Union, List, Callable, Optional, Dict

from pypolars import Series
from pypolars.frame import DataFrame, wrap_df
from pypolars import datatypes

try:
    from ..pypolars import (
        PyLazyFrame,
        col as pycol,
        lit as pylit,
        binary_expr,
        PyExpr,
        PyLazyGroupBy,
        when as pywhen,
    )
except:
    import warnings

    warnings.warn("binary files missing")

    __pdoc__ = {"wrap_ldf": False, "wrap_expr": False}


def _selection_to_pyexpr_list(exprs) -> "List[PyExpr]":
    if not isinstance(exprs, List):
        if isinstance(exprs, str):
            exprs = col(exprs)
        exprs = [exprs._pyexpr]
    else:
        new = []
        for expr in exprs:
            if isinstance(expr, str):
                expr = col(expr)
            new.append(expr._pyexpr)
        exprs = new
    return exprs


def wrap_ldf(ldf: "PyLazyFrame") -> "LazyFrame":
    return LazyFrame.from_pyldf(ldf)


class LazyGroupBy:
    def __init__(self, lgb: "PyLazyGroupBy"):
        self.lgb = lgb

    def agg(self, aggs: "Union[List[Expr], Expr]") -> "LazyFrame":
        aggs = _selection_to_pyexpr_list(aggs)
        return wrap_ldf(self.lgb.agg(aggs))


class LazyFrame:
    def __init__(self):
        self._ldf = None

    @staticmethod
    def from_pyldf(ldf: "PyLazyFrame") -> "LazyFrame":
        self = LazyFrame.__new__(LazyFrame)
        self._ldf = ldf
        return self

    @staticmethod
    def scan_csv(
        file: str,
        has_headers: bool = True,
        ignore_errors: bool = False,
        sep: str = ",",
        skip_rows: int = 0,
        stop_after_n_rows: "Optional[int]" = None,
        cache: bool = True,
        dtype: "Optional[Dict[str, DataType]]" = None,
    ):
        if dtype is not None:
            new_dtype = []
            for k, v in dtype.items():
                new_dtype.append((k, datatypes.pytype_to_polars_type(v)))
            dtype = new_dtype

        self = LazyFrame.__new__(LazyFrame)
        self._ldf = PyLazyFrame.new_from_csv(
            file,
            sep,
            has_headers,
            ignore_errors,
            skip_rows,
            stop_after_n_rows,
            cache,
            dtype,
        )
        return self

    @staticmethod
    def scan_parquet(
        file: str, stop_after_n_rows: "Optional[int]" = None, cache: bool = True
    ):

        self = LazyFrame.__new__(LazyFrame)
        self._ldf = PyLazyFrame.new_from_parquet(file, stop_after_n_rows, cache)
        return self

    def pipe(self, func: Callable, *args, **kwargs):
        """
        Apply a function on Self

        Parameters
        ----------
        func
            Callable
        args
            Arguments
        kwargs
            Keyword arguments
        """
        return func(self, *args, **kwargs)

    def describe_plan(self) -> str:
        return self._ldf.describe_plan()

    def describe_optimized_plan(
        self,
        type_coercion: bool = True,
        predicate_pushdown: bool = True,
        projection_pushdown: bool = True,
        simplify_expression: bool = True,
    ) -> str:

        ldf = self._ldf.optimization_toggle(
            type_coercion, predicate_pushdown, projection_pushdown, simplify_expression
        )

        return ldf.describe_optimized_plan()

    def sort(self, by_column: str, reverse: bool = False) -> "LazyFrame":
        return wrap_ldf(self._ldf.sort(by_column, reverse))

    def collect(
        self,
        type_coercion: bool = True,
        predicate_pushdown: bool = True,
        projection_pushdown: bool = True,
        simplify_expression: bool = True,
    ) -> DataFrame:
        """
        Collect into a DataFrame

        Parameters
        ----------
        type_coercion
            do type coercion optimization
        predicate_pushdown
            do predicate pushdown optimization
        projection_pushdown
            do projection pushdown optimization
        simplify_expression
            run simplify expressions optimization

        Returns
        -------
        DataFrame
        """

        ldf = self._ldf.optimization_toggle(
            type_coercion, predicate_pushdown, projection_pushdown, simplify_expression
        )
        return wrap_df(ldf.collect())

    def fetch(
        self,
        n_rows: int = 500,
        type_coercion: bool = True,
        predicate_pushdown: bool = True,
        projection_pushdown: bool = True,
        simplify_expression: bool = True,
    ) -> DataFrame:
        """
        Fetch is like a collect operation, but it overwrites the number of rows read by every scan
        operation. This is a utility that helps debug a query on a smaller number of rows.

        Note that the fetch does not guarantee the final number of rows in the DataFrame.
        Filter, join operations and a lower number of rows available in the scanned file influence
        the final number of rows.

        Parameters
        ----------
        n_rows
            Collect n_rows from the data sources.

        type_coercion
            run type coercion optimization
        predicate_pushdown
            run predicate pushdown optimization
        projection_pushdown
            run projection pushdown optimization
        simplify_expression
            run simplify expressions optimization

        Returns
        -------
        DataFrame
        """
        ldf = self._ldf.optimization_toggle(
            type_coercion, predicate_pushdown, projection_pushdown, simplify_expression
        )
        return wrap_df(ldf.fetch(n_rows))

    def cache(
        self,
    ) -> "LazyFrame":
        """
        Cache the result once Physical plan hits this node.
        """
        return wrap_ldf(self._ldf.cache())

    def filter(self, predicate: "Expr") -> "LazyFrame":
        return wrap_ldf(self._ldf.filter(predicate._pyexpr))

    def select(self, exprs: "Union[str, Expr, List[str], List[Expr]]") -> "LazyFrame":
        exprs = _selection_to_pyexpr_list(exprs)
        return wrap_ldf(self._ldf.select(exprs))

    def groupby(self, by: Union[str, List[str]]) -> LazyGroupBy:
        """
        Start a groupby operation

        Parameters
        ----------
        by
            Column(s) to group by.
        """
        if isinstance(by, str):
            by = [by]
        lgb = self._ldf.groupby(by)
        return LazyGroupBy(lgb)

    def join(
        self,
        ldf: "LazyFrame",
        left_on: "Union[Optional[Expr], str]" = None,
        right_on: "Union[Optional[Expr], str]" = None,
        on: "Union[Optional[Expr], str]" = None,
        how="inner",
        allow_parallel: bool = True,
        force_parallel: bool = False,
    ) -> "LazyFrame":
        """
        Add a join operation to the Logical Plan.

        Parameters
        ----------
        ldf
            Lazy DataFrame to join with
        left_on
            Join column of the left DataFrame.
        right_on
            Join column of the right DataFrame.
        on
            Join column of both DataFrames. If set, `left_on` and `right_on` should be None.
        how
            one of:
                "inner"
                "left"
                "outer"
        allow_parallel
            Allow the physical plan to optionally evaluate the computation of both DataFrames up to the join in parallel.
        force_parallel
            Force the physical plan evaluate the computation of both DataFrames up to the join in parallel.
        """
        if isinstance(left_on, str):
            left_on = col(left_on)
        if isinstance(right_on, str):
            right_on = col(right_on)
        if isinstance(on, str):
            left_on = col(on)
            right_on = col(on)
        if left_on is None or right_on is None:
            raise ValueError("you should pass the column to join on as an argument")
        left_on = left_on._pyexpr
        right_on = right_on._pyexpr
        if how == "inner":
            inner = self._ldf.inner_join(
                ldf._ldf, left_on, right_on, allow_parallel, force_parallel
            )
        elif how == "left":
            inner = self._ldf.left_join(
                ldf._ldf, left_on, right_on, allow_parallel, force_parallel
            )
        elif how == "outer":
            inner = self._ldf.outer_join(
                ldf._ldf, left_on, right_on, allow_parallel, force_parallel
            )
        else:
            return NotImplemented
        return wrap_ldf(inner)

    def with_columns(self, exprs: "List[Expr]") -> "LazyFrame":
        """
        Add or overwrite multiple columns in a DataFrame

        Parameters
        ----------
        exprs
            List of Expressions that evaluate to columns
        """
        exprs = [e._pyexpr for e in exprs]
        return wrap_ldf(self._ldf.with_columns(exprs))

    def with_column(self, expr: "Expr") -> "LazyFrame":
        """
        Add or overwrite column in a DataFrame

        Parameters
        ----------
        expr
            Expression that evaluates to column
        """
        return self.with_columns([expr])

    def with_column_renamed(self, existing_name: str, new_name: str) -> "LazyFrame":
        """
        Rename a column in the DataFrame
        """
        return wrap_ldf(self._ldf.with_column_renamed(existing_name, new_name))

    def reverse(self) -> "LazyFrame":
        """
        Reverse the DataFrame.
        """
        return wrap_ldf(self._ldf.reverse())

    def shift(self, periods: int):
        """
        Shift the values by a given period and fill the parts that will be empty due to this operation
        with `Nones`.

        Parameters
        ----------
        periods
            Number of places to shift (may be negative).
        """
        return wrap_ldf(self._ldf.shift(periods))

    def slice(self, offset: int, length: int):
        """
        Slice the DataFrame

        Parameters
        ----------
        offset
            Start index
        length
            Length of the slice
        """
        return wrap_ldf(self._ldf.slice(offset, length))

    def limit(self, n: int):
        """
        Limit the DataFrame to the first `n` rows. Note if you don't want the rows to be scanned,
        use the `fetch` operation.

        Parameters
        ----------
        n
            Number of rows.
        """
        return self.slice(0, n)

    def fill_none(self, fill_value: "Union[int, str, Expr]"):
        if not isinstance(fill_value, Expr):
            fill_value = lit(fill_value)
        return wrap_ldf(self._ldf.fill_none(fill_value._pyexpr))

    def std(self) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their standard deviation value
        """
        return wrap_ldf(self._ldf.std())

    def var(self) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their variance value
        """
        return wrap_ldf(self._ldf.var())

    def max(self) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their maximum value
        """
        return wrap_ldf(self._ldf.max())

    def min(self) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their minimum value
        """
        return wrap_ldf(self._ldf.min())

    def sum(self) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their sum value
        """
        return wrap_ldf(self._ldf.sum())

    def mean(self) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their mean value
        """
        return wrap_ldf(self._ldf.mean())

    def median(self) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their median value
        """
        return wrap_ldf(self._ldf.median())

    def quantile(self, quantile: float) -> "LazyFrame":
        """
        Aggregate the columns in the DataFrame to their quantile value
        """
        return wrap_ldf(self._ldf.quantile(quantile))

    def explode(self, column: str) -> "LazyFrame":
        """
        Explode lists to long format
        """
        return wrap_ldf(self._ldf.explode(column))

    def drop_duplicates(
        self,
        maintain_order: bool = False,
        subset: "Optional[Union[List[str], str]]" = None,
    ) -> "LazyFrame":
        """
        Drop duplicate rows from this DataFrame.
        Note that this fails if there is a column of type `List` in the DataFrame.
        """
        if subset is not None and not isinstance(subset, List):
            subset = [subset]
        return wrap_ldf(self._ldf.drop_duplicates(maintain_order, subset))

    def drop_nulls(
        self, subset: "Optional[Union[List[str], str]]" = None
    ) -> "LazyFrame":
        """
        Drop rows with null values from this DataFrame.
        """
        if subset is not None and not isinstance(subset, List):
            subset = [subset]
        return wrap_ldf(self._ldf.drop_nulls(subset))


def wrap_expr(pyexpr: "PyExpr") -> "Expr":
    return Expr.from_pyexpr(pyexpr)


class Expr:
    def __init__(self):
        self._pyexpr = None

    @staticmethod
    def from_pyexpr(pyexpr: "PyExpr") -> "Expr":
        self = Expr.__new__(Expr)
        self._pyexpr = pyexpr
        return self

    def __to_pyexpr(self, other):
        if isinstance(other, PyExpr):
            return other
        if isinstance(other, Expr):
            return other._pyexpr
        return lit(other)._pyexpr

    def __to_expr(self, other):
        if isinstance(other, Expr):
            return other
        return lit(other)

    def __and__(self, other):
        return wrap_expr(self._pyexpr._and(other._pyexpr))

    def __add__(self, other):
        return wrap_expr(self._pyexpr + self.__to_pyexpr(other))

    def __sub__(self, other):
        return wrap_expr(self._pyexpr - self.__to_pyexpr(other))

    def __mul__(self, other):
        return wrap_expr(self._pyexpr * self.__to_pyexpr(other))

    def __truediv__(self, other):
        return wrap_expr(self._pyexpr / self.__to_pyexpr(other))

    def __ge__(self, other):
        return self.gt_eq(self.__to_expr(other))

    def __le__(self, other):
        return self.lt_eq(self.__to_expr(other))

    def __eq__(self, other):
        return self.eq(self.__to_expr(other))

    def __ne__(self, other):
        return self.neq(self.__to_expr(other))

    def __lt__(self, other):
        return self.lt(self.__to_expr(other))

    def __gt__(self, other):
        return self.gt(self.__to_expr(other))

    def eq(self, other: "Expr") -> "Expr":
        return wrap_expr(self._pyexpr.eq(other._pyexpr))

    def neq(self, other: "Expr") -> "Expr":
        return wrap_expr(self._pyexpr.neq(other._pyexpr))

    def gt(self, other: "Expr") -> "Expr":
        return wrap_expr(self._pyexpr.gt(other._pyexpr))

    def gt_eq(self, other: "Expr") -> "Expr":
        return wrap_expr(self._pyexpr.gt_eq(other._pyexpr))

    def lt_eq(self, other: "Expr") -> "Expr":
        return wrap_expr(self._pyexpr.lt_eq(other._pyexpr))

    def lt(self, other: "Expr") -> "Expr":
        return wrap_expr(self._pyexpr.lt(other._pyexpr))

    def alias(self, name: str) -> "Expr":
        return wrap_expr(self._pyexpr.alias(name))

    def is_not(self) -> "Expr":
        return wrap_expr(self._pyexpr.is_not())

    def is_null(self) -> "Expr":
        return wrap_expr(self._pyexpr.is_null())

    def is_not_null(self) -> "Expr":
        return wrap_expr(self._pyexpr.is_not_null())

    def agg_groups(self) -> "Expr":
        return wrap_expr(self._pyexpr.agg_groups())

    def count(self) -> "Expr":
        return wrap_expr(self._pyexpr.count())

    def cast(self, dtype: "DataType") -> "Expr":
        if dtype == str:
            dtype = datatypes.Utf8
        elif dtype == bool:
            dtype = datatypes.Boolean
        elif dtype == float:
            dtype = datatypes.Float64
        elif dtype == int:
            dtype = datatypes.Int64
        return wrap_expr(self._pyexpr.cast(dtype))

    def sort(self, reverse: bool) -> "Expr":
        return wrap_expr(self._pyexpr.sort(reverse))

    def shift(self, periods: int) -> "Expr":
        return wrap_expr(self._pyexpr.shift(periods))

    def fill_none(self, fill_value: "Union[str, int, float, Expr]") -> "Expr":
        if not isinstance(fill_value, Expr):
            fill_value = lit(fill_value)
        return wrap_expr(self._pyexpr.fill_none(fill_value))

    def reverse(self) -> "Expr":
        """
        Reverse the selection
        """
        return wrap_expr(self._pyexpr.reverse())

    def std(self) -> "Expr":
        """
        Get standard deviation
        """
        return wrap_expr(self._pyexpr.std())

    def var(self) -> "Expr":
        """
        Get variance
        """
        return wrap_expr(self._pyexpr.var())

    def max(self) -> "Expr":
        """
        Get maximum value
        """
        return wrap_expr(self._pyexpr.max())

    def min(self) -> "Expr":
        """
        Get minimum value
        """
        return wrap_expr(self._pyexpr.min())

    def sum(self) -> "Expr":
        """
        Get sum value
        """
        return wrap_expr(self._pyexpr.sum())

    def mean(self) -> "Expr":
        """
        Get mean value
        """
        return wrap_expr(self._pyexpr.mean())

    def median(self) -> "Expr":
        """
        Get median value
        """
        return wrap_expr(self._pyexpr.mean())

    def n_unique(self) -> "Expr":
        """Count unique values"""
        return wrap_expr(self._pyexpr.n_unique())

    def first(self) -> "Expr":
        """
        Get first value
        """
        return wrap_expr(self._pyexpr.first())

    def last(self) -> "Expr":
        """
        Get last value
        """
        return wrap_expr(self._pyexpr.last())

    def list(self) -> "Expr":
        """
        Aggregate to list
        """
        return wrap_expr(self._pyexpr.list())

    def over(self, expr: "Union[str, Expr]") -> "Expr":
        """
        Apply window function over a subgroup.
        This is similar to a groupby + aggregation + self join.
        Or similar to [window functions in Postgres](https://www.postgresql.org/docs/9.1/tutorial-window.html).Do

        Parameters
        ----------
        expr
            Expression that evaluates to a column of groups

        Examples
        --------

        ``` python
        df = DataFrame({
            "groups": [1, 1, 2, 2, 1, 2, 3, 3, 1],
            "values": [1, 2, 3, 4, 5, 6, 7, 8, 8]
        })
        print(df.lazy()
            .select([
                col("groups")
                sum("values").over("groups"))
            ]).collect())

        ```

        outputs:

        ``` text
            ╭────────┬────────╮
            │ groups ┆ values │
            │ ---    ┆ ---    │
            │ i32    ┆ i32    │
            ╞════════╪════════╡
            │ 1      ┆ 16     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 1      ┆ 16     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 2      ┆ 13     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 2      ┆ 13     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ ...    ┆ ...    │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 1      ┆ 16     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 2      ┆ 13     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 3      ┆ 15     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 3      ┆ 15     │
            ├╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌┤
            │ 1      ┆ 16     │
            ╰────────┴────────╯

        ```
        """
        if isinstance(expr, str):
            expr = col(expr)

        return wrap_expr(self._pyexpr.over(expr._pyexpr))

    def is_unique(self) -> "Expr":
        """
        Get mask of unique values
        """
        return wrap_expr(self._pyexpr.is_unique())

    def is_duplicated(self) -> "Expr":
        """
        Get mask of duplicated values
        """
        return wrap_expr(self._pyexpr.is_duplicated())

    def quantile(self, quantile: float) -> "Expr":
        """
        Get quantile value
        """
        return wrap_expr(self._pyexpr.quantile(quantile))

    def str_parse_date(self, datatype: "DataType", fmt: Optional[str] = None) -> "Expr":
        """
        Parse utf8 expression as a Date32/Date64 type.

        Parameters
        ----------
        datatype
            Date32 | Date64
        fmt
            "yyyy-mm-dd"
        """
        if datatype == datatypes.Date32:
            return wrap_expr(self._pyexpr.str_parse_dat32(fmt))
        if datatype == datatypes.Date64:
            return wrap_expr(self._pyexpr.str_parse_dat32(fmt))
        raise NotImplementedError

    def str_lengths(self) -> "Expr":
        """
        Get the length of the Strings as UInt32
        """
        return wrap_expr(self._pyexpr.str_lengths())

    def str_to_uppercase(self) -> "Expr":
        """
        Transform to uppercase variant
        """
        return wrap_expr(self._pyexpr.str_to_uppercase())

    def str_to_lowercase(self) -> "Expr":
        """
        Transform to lowercase variant
        """
        return wrap_expr(self._pyexpr.str_to_lowercase())

    def str_contains(self, pattern: str) -> "Expr":
        """
        Check if string contains regex.

        Parameters
        ----------
        pattern
            regex pattern
        """
        return wrap_expr(self._pyexpr.str_contains(pattern))

    def str_replace(self, pattern: str, value: str) -> "Expr":
        """
        Replace substring where regex pattern first matches.

        Parameters
        ----------
        pattern
            regex pattern
        value
            replacement string
        """
        return wrap_expr(self._pyexpr.str_replace(pattern, value))

    def str_replace_all(self, pattern: str, value: str) -> "Expr":
        """
        Replace substring on all regex pattern matches.

        Parameters
        ----------
        pattern
            regex pattern
        value
            replacement string
        """
        return wrap_expr(self._pyexpr.str_replace_all(pattern, value))

    def apply(
        self,
        f: "Union[UDF, Callable[[Series], Series]]",
        dtype_out: Optional["DataType"] = None,
    ) -> "Expr":
        if isinstance(f, UDF):
            dtype_out = f.output_type
            f = f.f
        if dtype_out == str:
            dtype_out = datatypes.Utf8
        elif dtype_out == int:
            dtype_out = datatypes.Int64
        elif dtype_out == float:
            dtype_out = datatypes.Float64
        elif dtype_out == bool:
            dtype_out = datatypes.Boolean
        return wrap_expr(self._pyexpr.apply(f, dtype_out))


def expr_to_lit_or_expr(expr: Union["Expr", int, float, str]) -> "Expr":
    if isinstance(expr, (int, float, str)):
        return lit(expr)
    return expr


class WhenThen:
    def __init__(self, pywhenthen: "PyWhenThen"):
        self._pywhenthen = pywhenthen

    def otherwise(self, expr: "Expr") -> "Expr":
        expr = expr_to_lit_or_expr(expr)
        return wrap_expr(self._pywhenthen.otherwise(expr._pyexpr))


class When:
    def __init__(self, pywhen: "PyWhen"):
        self._pywhen = pywhen

    def then(self, expr: "Expr") -> WhenThen:
        expr = expr_to_lit_or_expr(expr)
        whenthen = self._pywhen.then(expr._pyexpr)
        return WhenThen(whenthen)


def when(expr: "Expr") -> When:
    expr = expr_to_lit_or_expr(expr)
    pw = pywhen(expr._pyexpr)
    return When(pw)


def col(name: str) -> "Expr":
    """
    A column in a DataFrame
    """
    return wrap_expr(pycol(name))


def count(name: str) -> "Expr":
    """
    Count the number of values in this column
    """
    return col(name).count()


def list(name: str) -> "Expr":
    """
    Aggregate to list
    """
    return col(name).list()


def std(name: str) -> "Expr":
    """
    Get standard deviation
    """
    return col(name).std()


def var(name: str) -> "Expr":
    """
    Get variance
    """
    return col(name).var()


def max(name: str) -> "Expr":
    """
    Get maximum value
    """
    return col(name).max()


def min(name: str) -> "Expr":
    """
    Get minimum value
    """
    return col(name).min()


def sum(name: str) -> "Expr":
    """
    Get sum value
    """
    return col(name).sum()


def mean(name: str) -> "Expr":
    """
    Get mean value
    """
    return col(name).mean()


def avg(name: str) -> "Expr":
    """
    Alias for mean
    """
    return col(name).mean()


def median(name: str) -> "Expr":
    """
    Get median value
    """
    return col(name).median()


def n_unique(name: str) -> "Expr":
    """Count unique values"""
    return col(name).n_unique()


def first(name: str) -> "Expr":
    """
    Get first value
    """
    return col(name).first()


def last(name: str) -> "Expr":
    """
    Get last value
    """
    return col(name).last()


def lit(value: Union[float, int, str]) -> "Expr":
    return wrap_expr(pylit(value))


class UDF:
    def __init__(self, f: Callable[[Series], Series], output_type: "DataType"):
        self.f = f
        self.output_type = output_type


def udf(f: Callable[[Series], Series], output_type: "DataType"):
    return UDF(f, output_type)
