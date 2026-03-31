goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16357){
var map__16358 = p__16357;
var map__16358__$1 = cljs.core.__destructure_map(map__16358);
var runtime = map__16358__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16358__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_16610 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_16610)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__16360 = runtime;
var G__16361 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_16610);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__16360,G__16361) : shadow.remote.runtime.shared.process.call(null,G__16360,G__16361));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16364,res){
var map__16365 = p__16364;
var map__16365__$1 = cljs.core.__destructure_map(map__16365);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16365__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16365__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16367 = res;
var G__16367__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16367,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16367);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16367__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16367__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16377 = arguments.length;
switch (G__16377) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16385,msg,handlers,timeout_after_ms){
var map__16386 = p__16385;
var map__16386__$1 = cljs.core.__destructure_map(map__16386);
var runtime = map__16386__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16386__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16621 = arguments.length;
var i__5727__auto___16622 = (0);
while(true){
if((i__5727__auto___16622 < len__5726__auto___16621)){
args__5732__auto__.push((arguments[i__5727__auto___16622]));

var G__16624 = (i__5727__auto___16622 + (1));
i__5727__auto___16622 = G__16624;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16405,ev,args){
var map__16406 = p__16405;
var map__16406__$1 = cljs.core.__destructure_map(map__16406);
var runtime = map__16406__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16410 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16413 = null;
var count__16414 = (0);
var i__16415 = (0);
while(true){
if((i__16415 < count__16414)){
var ext = chunk__16413.cljs$core$IIndexed$_nth$arity$2(null,i__16415);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16628 = seq__16410;
var G__16629 = chunk__16413;
var G__16630 = count__16414;
var G__16631 = (i__16415 + (1));
seq__16410 = G__16628;
chunk__16413 = G__16629;
count__16414 = G__16630;
i__16415 = G__16631;
continue;
} else {
var G__16632 = seq__16410;
var G__16633 = chunk__16413;
var G__16634 = count__16414;
var G__16635 = (i__16415 + (1));
seq__16410 = G__16632;
chunk__16413 = G__16633;
count__16414 = G__16634;
i__16415 = G__16635;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16410);
if(temp__5804__auto__){
var seq__16410__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16410__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16410__$1);
var G__16664 = cljs.core.chunk_rest(seq__16410__$1);
var G__16665 = c__5525__auto__;
var G__16666 = cljs.core.count(c__5525__auto__);
var G__16667 = (0);
seq__16410 = G__16664;
chunk__16413 = G__16665;
count__16414 = G__16666;
i__16415 = G__16667;
continue;
} else {
var ext = cljs.core.first(seq__16410__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16669 = cljs.core.next(seq__16410__$1);
var G__16670 = null;
var G__16671 = (0);
var G__16672 = (0);
seq__16410 = G__16669;
chunk__16413 = G__16670;
count__16414 = G__16671;
i__16415 = G__16672;
continue;
} else {
var G__16673 = cljs.core.next(seq__16410__$1);
var G__16674 = null;
var G__16675 = (0);
var G__16676 = (0);
seq__16410 = G__16673;
chunk__16413 = G__16674;
count__16414 = G__16675;
i__16415 = G__16676;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16396){
var G__16397 = cljs.core.first(seq16396);
var seq16396__$1 = cljs.core.next(seq16396);
var G__16398 = cljs.core.first(seq16396__$1);
var seq16396__$2 = cljs.core.next(seq16396__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16397,G__16398,seq16396__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16434,p__16435){
var map__16436 = p__16434;
var map__16436__$1 = cljs.core.__destructure_map(map__16436);
var runtime = map__16436__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16436__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16437 = p__16435;
var map__16437__$1 = cljs.core.__destructure_map(map__16437);
var msg = map__16437__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16437__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__16443 = cljs.core.deref(state_ref);
var map__16443__$1 = cljs.core.__destructure_map(map__16443);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16443__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16443__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16453,msg){
var map__16455 = p__16453;
var map__16455__$1 = cljs.core.__destructure_map(map__16455);
var runtime = map__16455__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16455__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16468,key,p__16469){
var map__16470 = p__16468;
var map__16470__$1 = cljs.core.__destructure_map(map__16470);
var state = map__16470__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16470__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16471 = p__16469;
var map__16471__$1 = cljs.core.__destructure_map(map__16471);
var spec = map__16471__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16471__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16471__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16494,key,spec){
var map__16495 = p__16494;
var map__16495__$1 = cljs.core.__destructure_map(map__16495);
var runtime = map__16495__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___16713 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___16713 == null)){
} else {
var on_welcome_16714 = temp__5808__auto___16713;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_16714.cljs$core$IFn$_invoke$arity$0 ? on_welcome_16714.cljs$core$IFn$_invoke$arity$0() : on_welcome_16714.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16525_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16525_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16527_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16527_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16528_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16528_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16529_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16529_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16530_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16530_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16552,key){
var map__16553 = p__16552;
var map__16553__$1 = cljs.core.__destructure_map(map__16553);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16553__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16558,msg){
var map__16559 = p__16558;
var map__16559__$1 = cljs.core.__destructure_map(map__16559);
var runtime = map__16559__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16559__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16566,p__16567){
var map__16568 = p__16566;
var map__16568__$1 = cljs.core.__destructure_map(map__16568);
var runtime = map__16568__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16568__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16569 = p__16567;
var map__16569__$1 = cljs.core.__destructure_map(map__16569);
var msg = map__16569__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16569__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16569__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16577 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16579 = null;
var count__16580 = (0);
var i__16581 = (0);
while(true){
if((i__16581 < count__16580)){
var map__16592 = chunk__16579.cljs$core$IIndexed$_nth$arity$2(null,i__16581);
var map__16592__$1 = cljs.core.__destructure_map(map__16592);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16592__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16732 = seq__16577;
var G__16733 = chunk__16579;
var G__16734 = count__16580;
var G__16735 = (i__16581 + (1));
seq__16577 = G__16732;
chunk__16579 = G__16733;
count__16580 = G__16734;
i__16581 = G__16735;
continue;
} else {
var G__16740 = seq__16577;
var G__16741 = chunk__16579;
var G__16742 = count__16580;
var G__16743 = (i__16581 + (1));
seq__16577 = G__16740;
chunk__16579 = G__16741;
count__16580 = G__16742;
i__16581 = G__16743;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16577);
if(temp__5804__auto__){
var seq__16577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16577__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16577__$1);
var G__16747 = cljs.core.chunk_rest(seq__16577__$1);
var G__16748 = c__5525__auto__;
var G__16749 = cljs.core.count(c__5525__auto__);
var G__16750 = (0);
seq__16577 = G__16747;
chunk__16579 = G__16748;
count__16580 = G__16749;
i__16581 = G__16750;
continue;
} else {
var map__16596 = cljs.core.first(seq__16577__$1);
var map__16596__$1 = cljs.core.__destructure_map(map__16596);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16596__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16755 = cljs.core.next(seq__16577__$1);
var G__16756 = null;
var G__16757 = (0);
var G__16758 = (0);
seq__16577 = G__16755;
chunk__16579 = G__16756;
count__16580 = G__16757;
i__16581 = G__16758;
continue;
} else {
var G__16759 = cljs.core.next(seq__16577__$1);
var G__16760 = null;
var G__16761 = (0);
var G__16762 = (0);
seq__16577 = G__16759;
chunk__16579 = G__16760;
count__16580 = G__16761;
i__16581 = G__16762;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
