goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37040 = arguments.length;
var i__5727__auto___37041 = (0);
while(true){
if((i__5727__auto___37041 < len__5726__auto___37040)){
args__5732__auto__.push((arguments[i__5727__auto___37041]));

var G__37042 = (i__5727__auto___37041 + (1));
i__5727__auto___37041 = G__37042;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36754){
var G__36755 = cljs.core.first(seq36754);
var seq36754__$1 = cljs.core.next(seq36754);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36755,seq36754__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36758 = cljs.core.seq(sources);
var chunk__36759 = null;
var count__36760 = (0);
var i__36761 = (0);
while(true){
if((i__36761 < count__36760)){
var map__36766 = chunk__36759.cljs$core$IIndexed$_nth$arity$2(null,i__36761);
var map__36766__$1 = cljs.core.__destructure_map(map__36766);
var src = map__36766__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36767){var e_37043 = e36767;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37043);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37043.message)].join('')));
}

var G__37044 = seq__36758;
var G__37045 = chunk__36759;
var G__37046 = count__36760;
var G__37047 = (i__36761 + (1));
seq__36758 = G__37044;
chunk__36759 = G__37045;
count__36760 = G__37046;
i__36761 = G__37047;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36758);
if(temp__5804__auto__){
var seq__36758__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36758__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36758__$1);
var G__37048 = cljs.core.chunk_rest(seq__36758__$1);
var G__37049 = c__5525__auto__;
var G__37050 = cljs.core.count(c__5525__auto__);
var G__37051 = (0);
seq__36758 = G__37048;
chunk__36759 = G__37049;
count__36760 = G__37050;
i__36761 = G__37051;
continue;
} else {
var map__36768 = cljs.core.first(seq__36758__$1);
var map__36768__$1 = cljs.core.__destructure_map(map__36768);
var src = map__36768__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36768__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36768__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36768__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36768__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36769){var e_37052 = e36769;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37052);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37052.message)].join('')));
}

var G__37053 = cljs.core.next(seq__36758__$1);
var G__37054 = null;
var G__37055 = (0);
var G__37056 = (0);
seq__36758 = G__37053;
chunk__36759 = G__37054;
count__36760 = G__37055;
i__36761 = G__37056;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36770 = cljs.core.seq(js_requires);
var chunk__36771 = null;
var count__36772 = (0);
var i__36773 = (0);
while(true){
if((i__36773 < count__36772)){
var js_ns = chunk__36771.cljs$core$IIndexed$_nth$arity$2(null,i__36773);
var require_str_37057 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37057);


var G__37058 = seq__36770;
var G__37059 = chunk__36771;
var G__37060 = count__36772;
var G__37061 = (i__36773 + (1));
seq__36770 = G__37058;
chunk__36771 = G__37059;
count__36772 = G__37060;
i__36773 = G__37061;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36770);
if(temp__5804__auto__){
var seq__36770__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36770__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36770__$1);
var G__37062 = cljs.core.chunk_rest(seq__36770__$1);
var G__37063 = c__5525__auto__;
var G__37064 = cljs.core.count(c__5525__auto__);
var G__37065 = (0);
seq__36770 = G__37062;
chunk__36771 = G__37063;
count__36772 = G__37064;
i__36773 = G__37065;
continue;
} else {
var js_ns = cljs.core.first(seq__36770__$1);
var require_str_37066 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37066);


var G__37067 = cljs.core.next(seq__36770__$1);
var G__37068 = null;
var G__37069 = (0);
var G__37070 = (0);
seq__36770 = G__37067;
chunk__36771 = G__37068;
count__36772 = G__37069;
i__36773 = G__37070;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36775){
var map__36776 = p__36775;
var map__36776__$1 = cljs.core.__destructure_map(map__36776);
var msg = map__36776__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36776__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36776__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36777(s__36778){
return (new cljs.core.LazySeq(null,(function (){
var s__36778__$1 = s__36778;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36778__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__36783 = cljs.core.first(xs__6360__auto__);
var map__36783__$1 = cljs.core.__destructure_map(map__36783);
var src = map__36783__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__36778__$1,map__36783,map__36783__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36776,map__36776__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36777_$_iter__36779(s__36780){
return (new cljs.core.LazySeq(null,((function (s__36778__$1,map__36783,map__36783__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36776,map__36776__$1,msg,info,reload_info){
return (function (){
var s__36780__$1 = s__36780;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36780__$1);
if(temp__5804__auto____$1){
var s__36780__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36780__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__36780__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__36782 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__36781 = (0);
while(true){
if((i__36781 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__36781);
cljs.core.chunk_append(b__36782,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37071 = (i__36781 + (1));
i__36781 = G__37071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36782),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36777_$_iter__36779(cljs.core.chunk_rest(s__36780__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36782),null);
}
} else {
var warning = cljs.core.first(s__36780__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36777_$_iter__36779(cljs.core.rest(s__36780__$2)));
}
} else {
return null;
}
break;
}
});})(s__36778__$1,map__36783,map__36783__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36776,map__36776__$1,msg,info,reload_info))
,null,null));
});})(s__36778__$1,map__36783,map__36783__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36776,map__36776__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36777(cljs.core.rest(s__36778__$1)));
} else {
var G__37072 = cljs.core.rest(s__36778__$1);
s__36778__$1 = G__37072;
continue;
}
} else {
var G__37073 = cljs.core.rest(s__36778__$1);
s__36778__$1 = G__37073;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36784_37074 = cljs.core.seq(warnings);
var chunk__36785_37075 = null;
var count__36786_37076 = (0);
var i__36787_37077 = (0);
while(true){
if((i__36787_37077 < count__36786_37076)){
var map__36790_37078 = chunk__36785_37075.cljs$core$IIndexed$_nth$arity$2(null,i__36787_37077);
var map__36790_37079__$1 = cljs.core.__destructure_map(map__36790_37078);
var w_37080 = map__36790_37079__$1;
var msg_37081__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790_37079__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790_37079__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790_37079__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790_37079__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37084)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37082),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37083),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37081__$1)].join(''));


var G__37085 = seq__36784_37074;
var G__37086 = chunk__36785_37075;
var G__37087 = count__36786_37076;
var G__37088 = (i__36787_37077 + (1));
seq__36784_37074 = G__37085;
chunk__36785_37075 = G__37086;
count__36786_37076 = G__37087;
i__36787_37077 = G__37088;
continue;
} else {
var temp__5804__auto___37089 = cljs.core.seq(seq__36784_37074);
if(temp__5804__auto___37089){
var seq__36784_37090__$1 = temp__5804__auto___37089;
if(cljs.core.chunked_seq_QMARK_(seq__36784_37090__$1)){
var c__5525__auto___37091 = cljs.core.chunk_first(seq__36784_37090__$1);
var G__37092 = cljs.core.chunk_rest(seq__36784_37090__$1);
var G__37093 = c__5525__auto___37091;
var G__37094 = cljs.core.count(c__5525__auto___37091);
var G__37095 = (0);
seq__36784_37074 = G__37092;
chunk__36785_37075 = G__37093;
count__36786_37076 = G__37094;
i__36787_37077 = G__37095;
continue;
} else {
var map__36791_37096 = cljs.core.first(seq__36784_37090__$1);
var map__36791_37097__$1 = cljs.core.__destructure_map(map__36791_37096);
var w_37098 = map__36791_37097__$1;
var msg_37099__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791_37097__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791_37097__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791_37097__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36791_37097__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37102)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37100),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37101),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37099__$1)].join(''));


var G__37103 = cljs.core.next(seq__36784_37090__$1);
var G__37104 = null;
var G__37105 = (0);
var G__37106 = (0);
seq__36784_37074 = G__37103;
chunk__36785_37075 = G__37104;
count__36786_37076 = G__37105;
i__36787_37077 = G__37106;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36774_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36774_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__36793 = node_uri;
G__36793.setQuery(null);

G__36793.setPath(new$);

return G__36793;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36794){
var map__36795 = p__36794;
var map__36795__$1 = cljs.core.__destructure_map(map__36795);
var msg = map__36795__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36795__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36795__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36796 = cljs.core.seq(updates);
var chunk__36798 = null;
var count__36799 = (0);
var i__36800 = (0);
while(true){
if((i__36800 < count__36799)){
var path = chunk__36798.cljs$core$IIndexed$_nth$arity$2(null,i__36800);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36910_37107 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36914_37108 = null;
var count__36915_37109 = (0);
var i__36916_37110 = (0);
while(true){
if((i__36916_37110 < count__36915_37109)){
var node_37111 = chunk__36914_37108.cljs$core$IIndexed$_nth$arity$2(null,i__36916_37110);
if(cljs.core.not(node_37111.shadow$old)){
var path_match_37112 = shadow.cljs.devtools.client.browser.match_paths(node_37111.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37112)){
var new_link_37113 = (function (){var G__36942 = node_37111.cloneNode(true);
G__36942.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37112),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36942;
})();
(node_37111.shadow$old = true);

(new_link_37113.onload = ((function (seq__36910_37107,chunk__36914_37108,count__36915_37109,i__36916_37110,seq__36796,chunk__36798,count__36799,i__36800,new_link_37113,path_match_37112,node_37111,path,map__36795,map__36795__$1,msg,updates,reload_info){
return (function (e){
var seq__36943_37114 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36945_37115 = null;
var count__36946_37116 = (0);
var i__36947_37117 = (0);
while(true){
if((i__36947_37117 < count__36946_37116)){
var map__36951_37118 = chunk__36945_37115.cljs$core$IIndexed$_nth$arity$2(null,i__36947_37117);
var map__36951_37119__$1 = cljs.core.__destructure_map(map__36951_37118);
var task_37120 = map__36951_37119__$1;
var fn_str_37121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951_37119__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951_37119__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37123 = goog.getObjectByName(fn_str_37121,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37122)].join(''));

(fn_obj_37123.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37123.cljs$core$IFn$_invoke$arity$2(path,new_link_37113) : fn_obj_37123.call(null,path,new_link_37113));


var G__37124 = seq__36943_37114;
var G__37125 = chunk__36945_37115;
var G__37126 = count__36946_37116;
var G__37127 = (i__36947_37117 + (1));
seq__36943_37114 = G__37124;
chunk__36945_37115 = G__37125;
count__36946_37116 = G__37126;
i__36947_37117 = G__37127;
continue;
} else {
var temp__5804__auto___37128 = cljs.core.seq(seq__36943_37114);
if(temp__5804__auto___37128){
var seq__36943_37129__$1 = temp__5804__auto___37128;
if(cljs.core.chunked_seq_QMARK_(seq__36943_37129__$1)){
var c__5525__auto___37130 = cljs.core.chunk_first(seq__36943_37129__$1);
var G__37131 = cljs.core.chunk_rest(seq__36943_37129__$1);
var G__37132 = c__5525__auto___37130;
var G__37133 = cljs.core.count(c__5525__auto___37130);
var G__37134 = (0);
seq__36943_37114 = G__37131;
chunk__36945_37115 = G__37132;
count__36946_37116 = G__37133;
i__36947_37117 = G__37134;
continue;
} else {
var map__36952_37135 = cljs.core.first(seq__36943_37129__$1);
var map__36952_37136__$1 = cljs.core.__destructure_map(map__36952_37135);
var task_37137 = map__36952_37136__$1;
var fn_str_37138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36952_37136__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36952_37136__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37140 = goog.getObjectByName(fn_str_37138,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37139)].join(''));

(fn_obj_37140.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37140.cljs$core$IFn$_invoke$arity$2(path,new_link_37113) : fn_obj_37140.call(null,path,new_link_37113));


var G__37141 = cljs.core.next(seq__36943_37129__$1);
var G__37142 = null;
var G__37143 = (0);
var G__37144 = (0);
seq__36943_37114 = G__37141;
chunk__36945_37115 = G__37142;
count__36946_37116 = G__37143;
i__36947_37117 = G__37144;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37111);
});})(seq__36910_37107,chunk__36914_37108,count__36915_37109,i__36916_37110,seq__36796,chunk__36798,count__36799,i__36800,new_link_37113,path_match_37112,node_37111,path,map__36795,map__36795__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37112], 0));

goog.dom.insertSiblingAfter(new_link_37113,node_37111);


var G__37145 = seq__36910_37107;
var G__37146 = chunk__36914_37108;
var G__37147 = count__36915_37109;
var G__37148 = (i__36916_37110 + (1));
seq__36910_37107 = G__37145;
chunk__36914_37108 = G__37146;
count__36915_37109 = G__37147;
i__36916_37110 = G__37148;
continue;
} else {
var G__37149 = seq__36910_37107;
var G__37150 = chunk__36914_37108;
var G__37151 = count__36915_37109;
var G__37152 = (i__36916_37110 + (1));
seq__36910_37107 = G__37149;
chunk__36914_37108 = G__37150;
count__36915_37109 = G__37151;
i__36916_37110 = G__37152;
continue;
}
} else {
var G__37153 = seq__36910_37107;
var G__37154 = chunk__36914_37108;
var G__37155 = count__36915_37109;
var G__37156 = (i__36916_37110 + (1));
seq__36910_37107 = G__37153;
chunk__36914_37108 = G__37154;
count__36915_37109 = G__37155;
i__36916_37110 = G__37156;
continue;
}
} else {
var temp__5804__auto___37157 = cljs.core.seq(seq__36910_37107);
if(temp__5804__auto___37157){
var seq__36910_37158__$1 = temp__5804__auto___37157;
if(cljs.core.chunked_seq_QMARK_(seq__36910_37158__$1)){
var c__5525__auto___37159 = cljs.core.chunk_first(seq__36910_37158__$1);
var G__37160 = cljs.core.chunk_rest(seq__36910_37158__$1);
var G__37161 = c__5525__auto___37159;
var G__37162 = cljs.core.count(c__5525__auto___37159);
var G__37163 = (0);
seq__36910_37107 = G__37160;
chunk__36914_37108 = G__37161;
count__36915_37109 = G__37162;
i__36916_37110 = G__37163;
continue;
} else {
var node_37164 = cljs.core.first(seq__36910_37158__$1);
if(cljs.core.not(node_37164.shadow$old)){
var path_match_37165 = shadow.cljs.devtools.client.browser.match_paths(node_37164.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37165)){
var new_link_37166 = (function (){var G__36953 = node_37164.cloneNode(true);
G__36953.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37165),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36953;
})();
(node_37164.shadow$old = true);

(new_link_37166.onload = ((function (seq__36910_37107,chunk__36914_37108,count__36915_37109,i__36916_37110,seq__36796,chunk__36798,count__36799,i__36800,new_link_37166,path_match_37165,node_37164,seq__36910_37158__$1,temp__5804__auto___37157,path,map__36795,map__36795__$1,msg,updates,reload_info){
return (function (e){
var seq__36954_37167 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36956_37168 = null;
var count__36957_37169 = (0);
var i__36958_37170 = (0);
while(true){
if((i__36958_37170 < count__36957_37169)){
var map__36962_37171 = chunk__36956_37168.cljs$core$IIndexed$_nth$arity$2(null,i__36958_37170);
var map__36962_37172__$1 = cljs.core.__destructure_map(map__36962_37171);
var task_37173 = map__36962_37172__$1;
var fn_str_37174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36962_37172__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36962_37172__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37176 = goog.getObjectByName(fn_str_37174,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37175)].join(''));

(fn_obj_37176.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37176.cljs$core$IFn$_invoke$arity$2(path,new_link_37166) : fn_obj_37176.call(null,path,new_link_37166));


var G__37177 = seq__36954_37167;
var G__37178 = chunk__36956_37168;
var G__37179 = count__36957_37169;
var G__37180 = (i__36958_37170 + (1));
seq__36954_37167 = G__37177;
chunk__36956_37168 = G__37178;
count__36957_37169 = G__37179;
i__36958_37170 = G__37180;
continue;
} else {
var temp__5804__auto___37181__$1 = cljs.core.seq(seq__36954_37167);
if(temp__5804__auto___37181__$1){
var seq__36954_37182__$1 = temp__5804__auto___37181__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36954_37182__$1)){
var c__5525__auto___37183 = cljs.core.chunk_first(seq__36954_37182__$1);
var G__37184 = cljs.core.chunk_rest(seq__36954_37182__$1);
var G__37185 = c__5525__auto___37183;
var G__37186 = cljs.core.count(c__5525__auto___37183);
var G__37187 = (0);
seq__36954_37167 = G__37184;
chunk__36956_37168 = G__37185;
count__36957_37169 = G__37186;
i__36958_37170 = G__37187;
continue;
} else {
var map__36963_37188 = cljs.core.first(seq__36954_37182__$1);
var map__36963_37189__$1 = cljs.core.__destructure_map(map__36963_37188);
var task_37190 = map__36963_37189__$1;
var fn_str_37191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36963_37189__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36963_37189__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37193 = goog.getObjectByName(fn_str_37191,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37192)].join(''));

(fn_obj_37193.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37193.cljs$core$IFn$_invoke$arity$2(path,new_link_37166) : fn_obj_37193.call(null,path,new_link_37166));


var G__37194 = cljs.core.next(seq__36954_37182__$1);
var G__37195 = null;
var G__37196 = (0);
var G__37197 = (0);
seq__36954_37167 = G__37194;
chunk__36956_37168 = G__37195;
count__36957_37169 = G__37196;
i__36958_37170 = G__37197;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37164);
});})(seq__36910_37107,chunk__36914_37108,count__36915_37109,i__36916_37110,seq__36796,chunk__36798,count__36799,i__36800,new_link_37166,path_match_37165,node_37164,seq__36910_37158__$1,temp__5804__auto___37157,path,map__36795,map__36795__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37165], 0));

goog.dom.insertSiblingAfter(new_link_37166,node_37164);


var G__37198 = cljs.core.next(seq__36910_37158__$1);
var G__37199 = null;
var G__37200 = (0);
var G__37201 = (0);
seq__36910_37107 = G__37198;
chunk__36914_37108 = G__37199;
count__36915_37109 = G__37200;
i__36916_37110 = G__37201;
continue;
} else {
var G__37202 = cljs.core.next(seq__36910_37158__$1);
var G__37203 = null;
var G__37204 = (0);
var G__37205 = (0);
seq__36910_37107 = G__37202;
chunk__36914_37108 = G__37203;
count__36915_37109 = G__37204;
i__36916_37110 = G__37205;
continue;
}
} else {
var G__37206 = cljs.core.next(seq__36910_37158__$1);
var G__37207 = null;
var G__37208 = (0);
var G__37209 = (0);
seq__36910_37107 = G__37206;
chunk__36914_37108 = G__37207;
count__36915_37109 = G__37208;
i__36916_37110 = G__37209;
continue;
}
}
} else {
}
}
break;
}


var G__37210 = seq__36796;
var G__37211 = chunk__36798;
var G__37212 = count__36799;
var G__37213 = (i__36800 + (1));
seq__36796 = G__37210;
chunk__36798 = G__37211;
count__36799 = G__37212;
i__36800 = G__37213;
continue;
} else {
var G__37214 = seq__36796;
var G__37215 = chunk__36798;
var G__37216 = count__36799;
var G__37217 = (i__36800 + (1));
seq__36796 = G__37214;
chunk__36798 = G__37215;
count__36799 = G__37216;
i__36800 = G__37217;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36796);
if(temp__5804__auto__){
var seq__36796__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36796__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36796__$1);
var G__37218 = cljs.core.chunk_rest(seq__36796__$1);
var G__37219 = c__5525__auto__;
var G__37220 = cljs.core.count(c__5525__auto__);
var G__37221 = (0);
seq__36796 = G__37218;
chunk__36798 = G__37219;
count__36799 = G__37220;
i__36800 = G__37221;
continue;
} else {
var path = cljs.core.first(seq__36796__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36964_37222 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36968_37223 = null;
var count__36969_37224 = (0);
var i__36970_37225 = (0);
while(true){
if((i__36970_37225 < count__36969_37224)){
var node_37226 = chunk__36968_37223.cljs$core$IIndexed$_nth$arity$2(null,i__36970_37225);
if(cljs.core.not(node_37226.shadow$old)){
var path_match_37227 = shadow.cljs.devtools.client.browser.match_paths(node_37226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37227)){
var new_link_37228 = (function (){var G__36996 = node_37226.cloneNode(true);
G__36996.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36996;
})();
(node_37226.shadow$old = true);

(new_link_37228.onload = ((function (seq__36964_37222,chunk__36968_37223,count__36969_37224,i__36970_37225,seq__36796,chunk__36798,count__36799,i__36800,new_link_37228,path_match_37227,node_37226,path,seq__36796__$1,temp__5804__auto__,map__36795,map__36795__$1,msg,updates,reload_info){
return (function (e){
var seq__36997_37229 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36999_37230 = null;
var count__37000_37231 = (0);
var i__37001_37232 = (0);
while(true){
if((i__37001_37232 < count__37000_37231)){
var map__37005_37233 = chunk__36999_37230.cljs$core$IIndexed$_nth$arity$2(null,i__37001_37232);
var map__37005_37234__$1 = cljs.core.__destructure_map(map__37005_37233);
var task_37235 = map__37005_37234__$1;
var fn_str_37236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37005_37234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37005_37234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37238 = goog.getObjectByName(fn_str_37236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37237)].join(''));

(fn_obj_37238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37238.cljs$core$IFn$_invoke$arity$2(path,new_link_37228) : fn_obj_37238.call(null,path,new_link_37228));


var G__37239 = seq__36997_37229;
var G__37240 = chunk__36999_37230;
var G__37241 = count__37000_37231;
var G__37242 = (i__37001_37232 + (1));
seq__36997_37229 = G__37239;
chunk__36999_37230 = G__37240;
count__37000_37231 = G__37241;
i__37001_37232 = G__37242;
continue;
} else {
var temp__5804__auto___37243__$1 = cljs.core.seq(seq__36997_37229);
if(temp__5804__auto___37243__$1){
var seq__36997_37244__$1 = temp__5804__auto___37243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36997_37244__$1)){
var c__5525__auto___37245 = cljs.core.chunk_first(seq__36997_37244__$1);
var G__37246 = cljs.core.chunk_rest(seq__36997_37244__$1);
var G__37247 = c__5525__auto___37245;
var G__37248 = cljs.core.count(c__5525__auto___37245);
var G__37249 = (0);
seq__36997_37229 = G__37246;
chunk__36999_37230 = G__37247;
count__37000_37231 = G__37248;
i__37001_37232 = G__37249;
continue;
} else {
var map__37006_37250 = cljs.core.first(seq__36997_37244__$1);
var map__37006_37251__$1 = cljs.core.__destructure_map(map__37006_37250);
var task_37252 = map__37006_37251__$1;
var fn_str_37253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006_37251__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006_37251__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37255 = goog.getObjectByName(fn_str_37253,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37254)].join(''));

(fn_obj_37255.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37255.cljs$core$IFn$_invoke$arity$2(path,new_link_37228) : fn_obj_37255.call(null,path,new_link_37228));


var G__37256 = cljs.core.next(seq__36997_37244__$1);
var G__37257 = null;
var G__37258 = (0);
var G__37259 = (0);
seq__36997_37229 = G__37256;
chunk__36999_37230 = G__37257;
count__37000_37231 = G__37258;
i__37001_37232 = G__37259;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37226);
});})(seq__36964_37222,chunk__36968_37223,count__36969_37224,i__36970_37225,seq__36796,chunk__36798,count__36799,i__36800,new_link_37228,path_match_37227,node_37226,path,seq__36796__$1,temp__5804__auto__,map__36795,map__36795__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37227], 0));

goog.dom.insertSiblingAfter(new_link_37228,node_37226);


var G__37260 = seq__36964_37222;
var G__37261 = chunk__36968_37223;
var G__37262 = count__36969_37224;
var G__37263 = (i__36970_37225 + (1));
seq__36964_37222 = G__37260;
chunk__36968_37223 = G__37261;
count__36969_37224 = G__37262;
i__36970_37225 = G__37263;
continue;
} else {
var G__37264 = seq__36964_37222;
var G__37265 = chunk__36968_37223;
var G__37266 = count__36969_37224;
var G__37267 = (i__36970_37225 + (1));
seq__36964_37222 = G__37264;
chunk__36968_37223 = G__37265;
count__36969_37224 = G__37266;
i__36970_37225 = G__37267;
continue;
}
} else {
var G__37268 = seq__36964_37222;
var G__37269 = chunk__36968_37223;
var G__37270 = count__36969_37224;
var G__37271 = (i__36970_37225 + (1));
seq__36964_37222 = G__37268;
chunk__36968_37223 = G__37269;
count__36969_37224 = G__37270;
i__36970_37225 = G__37271;
continue;
}
} else {
var temp__5804__auto___37272__$1 = cljs.core.seq(seq__36964_37222);
if(temp__5804__auto___37272__$1){
var seq__36964_37273__$1 = temp__5804__auto___37272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36964_37273__$1)){
var c__5525__auto___37274 = cljs.core.chunk_first(seq__36964_37273__$1);
var G__37275 = cljs.core.chunk_rest(seq__36964_37273__$1);
var G__37276 = c__5525__auto___37274;
var G__37277 = cljs.core.count(c__5525__auto___37274);
var G__37278 = (0);
seq__36964_37222 = G__37275;
chunk__36968_37223 = G__37276;
count__36969_37224 = G__37277;
i__36970_37225 = G__37278;
continue;
} else {
var node_37279 = cljs.core.first(seq__36964_37273__$1);
if(cljs.core.not(node_37279.shadow$old)){
var path_match_37280 = shadow.cljs.devtools.client.browser.match_paths(node_37279.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37280)){
var new_link_37281 = (function (){var G__37007 = node_37279.cloneNode(true);
G__37007.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37280),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37007;
})();
(node_37279.shadow$old = true);

(new_link_37281.onload = ((function (seq__36964_37222,chunk__36968_37223,count__36969_37224,i__36970_37225,seq__36796,chunk__36798,count__36799,i__36800,new_link_37281,path_match_37280,node_37279,seq__36964_37273__$1,temp__5804__auto___37272__$1,path,seq__36796__$1,temp__5804__auto__,map__36795,map__36795__$1,msg,updates,reload_info){
return (function (e){
var seq__37008_37282 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37010_37283 = null;
var count__37011_37284 = (0);
var i__37012_37285 = (0);
while(true){
if((i__37012_37285 < count__37011_37284)){
var map__37016_37286 = chunk__37010_37283.cljs$core$IIndexed$_nth$arity$2(null,i__37012_37285);
var map__37016_37287__$1 = cljs.core.__destructure_map(map__37016_37286);
var task_37288 = map__37016_37287__$1;
var fn_str_37289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37016_37287__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37016_37287__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37291 = goog.getObjectByName(fn_str_37289,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37290)].join(''));

(fn_obj_37291.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37291.cljs$core$IFn$_invoke$arity$2(path,new_link_37281) : fn_obj_37291.call(null,path,new_link_37281));


var G__37292 = seq__37008_37282;
var G__37293 = chunk__37010_37283;
var G__37294 = count__37011_37284;
var G__37295 = (i__37012_37285 + (1));
seq__37008_37282 = G__37292;
chunk__37010_37283 = G__37293;
count__37011_37284 = G__37294;
i__37012_37285 = G__37295;
continue;
} else {
var temp__5804__auto___37296__$2 = cljs.core.seq(seq__37008_37282);
if(temp__5804__auto___37296__$2){
var seq__37008_37297__$1 = temp__5804__auto___37296__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37008_37297__$1)){
var c__5525__auto___37298 = cljs.core.chunk_first(seq__37008_37297__$1);
var G__37299 = cljs.core.chunk_rest(seq__37008_37297__$1);
var G__37300 = c__5525__auto___37298;
var G__37301 = cljs.core.count(c__5525__auto___37298);
var G__37302 = (0);
seq__37008_37282 = G__37299;
chunk__37010_37283 = G__37300;
count__37011_37284 = G__37301;
i__37012_37285 = G__37302;
continue;
} else {
var map__37017_37303 = cljs.core.first(seq__37008_37297__$1);
var map__37017_37304__$1 = cljs.core.__destructure_map(map__37017_37303);
var task_37305 = map__37017_37304__$1;
var fn_str_37306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017_37304__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017_37304__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37308 = goog.getObjectByName(fn_str_37306,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37307)].join(''));

(fn_obj_37308.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37308.cljs$core$IFn$_invoke$arity$2(path,new_link_37281) : fn_obj_37308.call(null,path,new_link_37281));


var G__37309 = cljs.core.next(seq__37008_37297__$1);
var G__37310 = null;
var G__37311 = (0);
var G__37312 = (0);
seq__37008_37282 = G__37309;
chunk__37010_37283 = G__37310;
count__37011_37284 = G__37311;
i__37012_37285 = G__37312;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37279);
});})(seq__36964_37222,chunk__36968_37223,count__36969_37224,i__36970_37225,seq__36796,chunk__36798,count__36799,i__36800,new_link_37281,path_match_37280,node_37279,seq__36964_37273__$1,temp__5804__auto___37272__$1,path,seq__36796__$1,temp__5804__auto__,map__36795,map__36795__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37280], 0));

goog.dom.insertSiblingAfter(new_link_37281,node_37279);


var G__37313 = cljs.core.next(seq__36964_37273__$1);
var G__37314 = null;
var G__37315 = (0);
var G__37316 = (0);
seq__36964_37222 = G__37313;
chunk__36968_37223 = G__37314;
count__36969_37224 = G__37315;
i__36970_37225 = G__37316;
continue;
} else {
var G__37317 = cljs.core.next(seq__36964_37273__$1);
var G__37318 = null;
var G__37319 = (0);
var G__37320 = (0);
seq__36964_37222 = G__37317;
chunk__36968_37223 = G__37318;
count__36969_37224 = G__37319;
i__36970_37225 = G__37320;
continue;
}
} else {
var G__37321 = cljs.core.next(seq__36964_37273__$1);
var G__37322 = null;
var G__37323 = (0);
var G__37324 = (0);
seq__36964_37222 = G__37321;
chunk__36968_37223 = G__37322;
count__36969_37224 = G__37323;
i__36970_37225 = G__37324;
continue;
}
}
} else {
}
}
break;
}


var G__37325 = cljs.core.next(seq__36796__$1);
var G__37326 = null;
var G__37327 = (0);
var G__37328 = (0);
seq__36796 = G__37325;
chunk__36798 = G__37326;
count__36799 = G__37327;
i__36800 = G__37328;
continue;
} else {
var G__37329 = cljs.core.next(seq__36796__$1);
var G__37330 = null;
var G__37331 = (0);
var G__37332 = (0);
seq__36796 = G__37329;
chunk__36798 = G__37330;
count__36799 = G__37331;
i__36800 = G__37332;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__37019 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37019) : success.call(null,G__37019));
}catch (e37018){var e = e37018;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__37020,success,fail){
var map__37021 = p__37020;
var map__37021__$1 = cljs.core.__destructure_map(map__37021);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__37023 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37023) : success.call(null,G__37023));
}catch (e37022){var e = e37022;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37024,done,error){
var map__37025 = p__37024;
var map__37025__$1 = cljs.core.__destructure_map(map__37025);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37025__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37026,done,error){
var map__37027 = p__37026;
var map__37027__$1 = cljs.core.__destructure_map(map__37027);
var msg = map__37027__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37027__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37028){
var map__37029 = p__37028;
var map__37029__$1 = cljs.core.__destructure_map(map__37029);
var src = map__37029__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37030 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37030) : done.call(null,G__37030));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37031){
var map__37032 = p__37031;
var map__37032__$1 = cljs.core.__destructure_map(map__37032);
var msg__$1 = map__37032__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37032__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37033){var ex = e37033;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37034){
var map__37035 = p__37034;
var map__37035__$1 = cljs.core.__destructure_map(map__37035);
var env = map__37035__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37035__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37036){
var map__37037 = p__37036;
var map__37037__$1 = cljs.core.__destructure_map(map__37037);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37037__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37038){
var map__37039 = p__37038;
var map__37039__$1 = cljs.core.__destructure_map(map__37039);
var svc = map__37039__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37039__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
