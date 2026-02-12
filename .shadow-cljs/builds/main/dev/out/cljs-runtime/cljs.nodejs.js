goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__18538__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__18538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18540__i = 0, G__18540__a = new Array(arguments.length -  0);
while (G__18540__i < G__18540__a.length) {G__18540__a[G__18540__i] = arguments[G__18540__i + 0]; ++G__18540__i;}
  args = new cljs.core.IndexedSeq(G__18540__a,0,null);
} 
return G__18538__delegate.call(this,args);};
G__18538.cljs$lang$maxFixedArity = 0;
G__18538.cljs$lang$applyTo = (function (arglist__18542){
var args = cljs.core.seq(arglist__18542);
return G__18538__delegate(args);
});
G__18538.cljs$core$IFn$_invoke$arity$variadic = G__18538__delegate;
return G__18538;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__18543__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__18543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18545__i = 0, G__18545__a = new Array(arguments.length -  0);
while (G__18545__i < G__18545__a.length) {G__18545__a[G__18545__i] = arguments[G__18545__i + 0]; ++G__18545__i;}
  args = new cljs.core.IndexedSeq(G__18545__a,0,null);
} 
return G__18543__delegate.call(this,args);};
G__18543.cljs$lang$maxFixedArity = 0;
G__18543.cljs$lang$applyTo = (function (arglist__18546){
var args = cljs.core.seq(arglist__18546);
return G__18543__delegate(args);
});
G__18543.cljs$core$IFn$_invoke$arity$variadic = G__18543__delegate;
return G__18543;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map
