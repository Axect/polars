(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T&gt; Freeze for ChunkedArray&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NoNull&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for FillNoneStrategy","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for NumTakeRandomChunked&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for NumTakeRandomCont&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for InitFold","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PrimitiveArrayBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PrimitiveChunkedBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Utf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Utf8ChunkedBuilderCow","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for AlignedVec&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ListPrimitiveChunkedBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ListUtf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for NumIterSingleChunk&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for NumIterSingleChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for NumIterManyChunk&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for NumIterManyChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8IterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8IterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8IterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8IterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BooleanNoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ListNoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8ParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8ParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8ParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8ParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8ParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8ParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8ParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Utf8NoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ObjectArray&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ObjectChunkedBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Utf8Type","synthetic":true,"types":[]},{"text":"impl Freeze for ListType","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ObjectType&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for AnyType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PolarsError","synthetic":true,"types":[]},{"text":"impl Freeze for DataFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for RecordBatchIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; Freeze for GroupBy&lt;'df, 'selection_str&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; Freeze for Pivot&lt;'df, 'selection_str&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Freeze for CsvWriter&lt;'a, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; Freeze for CsvReader&lt;'a, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for CsvEncoding","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for IPCReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Freeze for IPCWriter&lt;'a, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for JsonReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for ParquetReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for When","synthetic":true,"types":[]},{"text":"impl Freeze for WhenThen","synthetic":true,"types":[]},{"text":"impl Freeze for Expr","synthetic":true,"types":[]},{"text":"impl Freeze for Operator","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for LazyCsvReader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for JoinOptions","synthetic":true,"types":[]},{"text":"impl Freeze for LazyFrame","synthetic":true,"types":[]},{"text":"impl Freeze for LazyGroupBy","synthetic":true,"types":[]},{"text":"impl Freeze for Series","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()