goog.provide('opencode_unified.persistence');
opencode_unified.persistence.prefix = "opencode.workbench.";
opencode_unified.persistence.save_state_BANG_ = (function opencode_unified$persistence$save_state_BANG_(key,value){
try{return localStorage.setItem([opencode_unified.persistence.prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}catch (e12120){if((e12120 instanceof Error)){
var e = e12120;
return console.error("Failed to save state:",key,e);
} else {
throw e12120;

}
}});
opencode_unified.persistence.load_state = (function opencode_unified$persistence$load_state(key,default_value){
try{var temp__5802__auto__ = localStorage.getItem([opencode_unified.persistence.prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
if(cljs.core.truth_(temp__5802__auto__)){
var stored = temp__5802__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(stored);
} else {
return default_value;
}
}catch (e12141){if((e12141 instanceof Error)){
var e = e12141;
console.error("Failed to load state:",key,e);

return default_value;
} else {
throw e12141;

}
}});

//# sourceMappingURL=opencode_unified.persistence.js.map
