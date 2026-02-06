goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8960__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8961__i = 0, G__8961__a = new Array(arguments.length -  0);
while (G__8961__i < G__8961__a.length) {G__8961__a[G__8961__i] = arguments[G__8961__i + 0]; ++G__8961__i;}
  args = new cljs.core.IndexedSeq(G__8961__a,0,null);
} 
return G__8960__delegate.call(this,args);};
G__8960.cljs$lang$maxFixedArity = 0;
G__8960.cljs$lang$applyTo = (function (arglist__8963){
var args = cljs.core.seq(arglist__8963);
return G__8960__delegate(args);
});
G__8960.cljs$core$IFn$_invoke$arity$variadic = G__8960__delegate;
return G__8960;
})()
);

(o.error = (function() { 
var G__8964__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8965__i = 0, G__8965__a = new Array(arguments.length -  0);
while (G__8965__i < G__8965__a.length) {G__8965__a[G__8965__i] = arguments[G__8965__i + 0]; ++G__8965__i;}
  args = new cljs.core.IndexedSeq(G__8965__a,0,null);
} 
return G__8964__delegate.call(this,args);};
G__8964.cljs$lang$maxFixedArity = 0;
G__8964.cljs$lang$applyTo = (function (arglist__8966){
var args = cljs.core.seq(arglist__8966);
return G__8964__delegate(args);
});
G__8964.cljs$core$IFn$_invoke$arity$variadic = G__8964__delegate;
return G__8964;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
