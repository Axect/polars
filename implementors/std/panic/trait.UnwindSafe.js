(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T&gt; !UnwindSafe for ChunkedArray&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for NoNull&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FillNoneStrategy","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for NumTakeRandomChunked&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for NumTakeRandomCont&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InitFold","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for PrimitiveArrayBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for PrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8ChunkedBuilderCow","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for AlignedVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ListPrimitiveChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ListUtf8ChunkedBuilder","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for NumIterSingleChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for NumIterSingleChunkNullCheck&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as ArrowPrimitiveType&gt;::Native: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for NumIterManyChunk&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for NumIterManyChunkNullCheck&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Utf8IterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Utf8IterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8IterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8IterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for BooleanIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for BooleanIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListIterSingleChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListIterSingleChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListIterManyChunk&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListIterManyChunkNullCheck&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for BooleanNoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ListNoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8ParIterSingleChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8ParIterSingleChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8ParIterManyChunkReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8ParIterManyChunkNullCheckReturnOption&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8ParIterSingleChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8ParIterManyChunkReturnUnwrapped&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8ParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Utf8NoNullParIterDispatcher&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ObjectArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ObjectChunkedBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Utf8Type","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ListType","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ObjectType&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for AnyType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PolarsError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for DataFrame","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for RecordBatchIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; !UnwindSafe for GroupBy&lt;'df, 'selection_str&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'df, 'selection_str&gt; !UnwindSafe for Pivot&lt;'df, 'selection_str&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; !UnwindSafe for CsvWriter&lt;'a, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; UnwindSafe for CsvReader&lt;'a, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CsvEncoding","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; UnwindSafe for IPCReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, W&gt; !UnwindSafe for IPCWriter&lt;'a, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; UnwindSafe for JsonReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; UnwindSafe for ParquetReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for When","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for WhenThen","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Expr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Operator","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for LazyCsvReader&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for JoinOptions","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for LazyFrame","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for LazyGroupBy","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Series","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()