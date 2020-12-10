(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T&gt; Unpin for ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for NoNull&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for FillNoneStrategy","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for NumTakeRandomChunked&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for NumTakeRandomCont&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for InitFold","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PrimitiveArrayBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Utf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for Utf8ChunkedBuilderCow","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for AlignedVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ListPrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ListUtf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for NumIterSingleChunk&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for NumIterSingleChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for NumIterManyChunk&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for NumIterManyChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8IterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8IterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8IterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8IterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for BooleanNoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ListNoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8ParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8ParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8ParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8ParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8ParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8ParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8ParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for Utf8NoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ObjectArray&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ObjectChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Utf8Type","synthetic":true,"types":[]},{"text":"impl Unpin for ListType","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ObjectType&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for AnyType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for PolarsError","synthetic":true,"types":[]},{"text":"impl Unpin for DataFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for RecordBatchIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; Unpin for GroupBy&lt;'df, 'selection_str&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; Unpin for Pivot&lt;'df, 'selection_str&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'selection_str: 'df,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Unpin for CsvWriter&lt;'a, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; Unpin for CsvReader&lt;'a, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for CsvEncoding","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Unpin for IPCReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; Unpin for IPCWriter&lt;'a, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Unpin for JsonReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Unpin for ParquetReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for When","synthetic":true,"types":[]},{"text":"impl Unpin for WhenThen","synthetic":true,"types":[]},{"text":"impl Unpin for Expr","synthetic":true,"types":[]},{"text":"impl Unpin for Operator","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for LazyCsvReader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for JoinOptions","synthetic":true,"types":[]},{"text":"impl Unpin for LazyFrame","synthetic":true,"types":[]},{"text":"impl Unpin for LazyGroupBy","synthetic":true,"types":[]},{"text":"impl Unpin for Series","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()