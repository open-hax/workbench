goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__22250){
var map__22251 = p__22250;
var map__22251__$1 = cljs.core.__destructure_map(map__22251);
var runtime = map__22251__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22251__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_22545 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_22545)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__22270 = runtime;
var G__22271 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_22545);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__22270,G__22271) : shadow.remote.runtime.shared.process.call(null,G__22270,G__22271));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__22275,res){
var map__22277 = p__22275;
var map__22277__$1 = cljs.core.__destructure_map(map__22277);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22277__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22277__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__22278 = res;
var G__22278__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22278,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__22278);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22278__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__22278__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__22291 = arguments.length;
switch (G__22291) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__22326,msg,handlers,timeout_after_ms){
var map__22330 = p__22326;
var map__22330__$1 = cljs.core.__destructure_map(map__22330);
var runtime = map__22330__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22330__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___22550 = arguments.length;
var i__5727__auto___22551 = (0);
while(true){
if((i__5727__auto___22551 < len__5726__auto___22550)){
args__5732__auto__.push((arguments[i__5727__auto___22551]));

var G__22552 = (i__5727__auto___22551 + (1));
i__5727__auto___22551 = G__22552;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22344,ev,args){
var map__22347 = p__22344;
var map__22347__$1 = cljs.core.__destructure_map(map__22347);
var runtime = map__22347__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22347__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__22351 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__22354 = null;
var count__22355 = (0);
var i__22356 = (0);
while(true){
if((i__22356 < count__22355)){
var ext = chunk__22354.cljs$core$IIndexed$_nth$arity$2(null,i__22356);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__22554 = seq__22351;
var G__22555 = chunk__22354;
var G__22556 = count__22355;
var G__22557 = (i__22356 + (1));
seq__22351 = G__22554;
chunk__22354 = G__22555;
count__22355 = G__22556;
i__22356 = G__22557;
continue;
} else {
var G__22558 = seq__22351;
var G__22559 = chunk__22354;
var G__22560 = count__22355;
var G__22561 = (i__22356 + (1));
seq__22351 = G__22558;
chunk__22354 = G__22559;
count__22355 = G__22560;
i__22356 = G__22561;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22351);
if(temp__5804__auto__){
var seq__22351__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22351__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22351__$1);
var G__22563 = cljs.core.chunk_rest(seq__22351__$1);
var G__22564 = c__5525__auto__;
var G__22565 = cljs.core.count(c__5525__auto__);
var G__22566 = (0);
seq__22351 = G__22563;
chunk__22354 = G__22564;
count__22355 = G__22565;
i__22356 = G__22566;
continue;
} else {
var ext = cljs.core.first(seq__22351__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__22568 = cljs.core.next(seq__22351__$1);
var G__22569 = null;
var G__22570 = (0);
var G__22571 = (0);
seq__22351 = G__22568;
chunk__22354 = G__22569;
count__22355 = G__22570;
i__22356 = G__22571;
continue;
} else {
var G__22572 = cljs.core.next(seq__22351__$1);
var G__22573 = null;
var G__22574 = (0);
var G__22575 = (0);
seq__22351 = G__22572;
chunk__22354 = G__22573;
count__22355 = G__22574;
i__22356 = G__22575;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq22339){
var G__22340 = cljs.core.first(seq22339);
var seq22339__$1 = cljs.core.next(seq22339);
var G__22341 = cljs.core.first(seq22339__$1);
var seq22339__$2 = cljs.core.next(seq22339__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22340,G__22341,seq22339__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__22369,p__22370){
var map__22371 = p__22369;
var map__22371__$1 = cljs.core.__destructure_map(map__22371);
var runtime = map__22371__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22371__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__22372 = p__22370;
var map__22372__$1 = cljs.core.__destructure_map(map__22372);
var msg = map__22372__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22372__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__22373 = cljs.core.deref(state_ref);
var map__22373__$1 = cljs.core.__destructure_map(map__22373);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22373__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22373__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__22376,msg){
var map__22379 = p__22376;
var map__22379__$1 = cljs.core.__destructure_map(map__22379);
var runtime = map__22379__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22379__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__22410,key,p__22411){
var map__22412 = p__22410;
var map__22412__$1 = cljs.core.__destructure_map(map__22412);
var state = map__22412__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22412__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__22413 = p__22411;
var map__22413__$1 = cljs.core.__destructure_map(map__22413);
var spec = map__22413__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22413__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22413__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__22430,key,spec){
var map__22431 = p__22430;
var map__22431__$1 = cljs.core.__destructure_map(map__22431);
var runtime = map__22431__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___22583 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___22583 == null)){
} else {
var on_welcome_22587 = temp__5808__auto___22583;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_22587.cljs$core$IFn$_invoke$arity$0 ? on_welcome_22587.cljs$core$IFn$_invoke$arity$0() : on_welcome_22587.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__22453_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__22453_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__22454_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__22454_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__22455_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__22455_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__22456_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__22456_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__22461_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__22461_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__22484,key){
var map__22485 = p__22484;
var map__22485__$1 = cljs.core.__destructure_map(map__22485);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22485__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__22503,msg){
var map__22504 = p__22503;
var map__22504__$1 = cljs.core.__destructure_map(map__22504);
var runtime = map__22504__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22504__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__22508,p__22511){
var map__22512 = p__22508;
var map__22512__$1 = cljs.core.__destructure_map(map__22512);
var runtime = map__22512__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22512__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__22513 = p__22511;
var map__22513__$1 = cljs.core.__destructure_map(map__22513);
var msg = map__22513__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__22514 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__22516 = null;
var count__22517 = (0);
var i__22518 = (0);
while(true){
if((i__22518 < count__22517)){
var map__22526 = chunk__22516.cljs$core$IIndexed$_nth$arity$2(null,i__22518);
var map__22526__$1 = cljs.core.__destructure_map(map__22526);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__22601 = seq__22514;
var G__22602 = chunk__22516;
var G__22603 = count__22517;
var G__22604 = (i__22518 + (1));
seq__22514 = G__22601;
chunk__22516 = G__22602;
count__22517 = G__22603;
i__22518 = G__22604;
continue;
} else {
var G__22605 = seq__22514;
var G__22606 = chunk__22516;
var G__22607 = count__22517;
var G__22608 = (i__22518 + (1));
seq__22514 = G__22605;
chunk__22516 = G__22606;
count__22517 = G__22607;
i__22518 = G__22608;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22514);
if(temp__5804__auto__){
var seq__22514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22514__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22514__$1);
var G__22609 = cljs.core.chunk_rest(seq__22514__$1);
var G__22610 = c__5525__auto__;
var G__22611 = cljs.core.count(c__5525__auto__);
var G__22612 = (0);
seq__22514 = G__22609;
chunk__22516 = G__22610;
count__22517 = G__22611;
i__22518 = G__22612;
continue;
} else {
var map__22532 = cljs.core.first(seq__22514__$1);
var map__22532__$1 = cljs.core.__destructure_map(map__22532);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22532__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__22615 = cljs.core.next(seq__22514__$1);
var G__22616 = null;
var G__22617 = (0);
var G__22618 = (0);
seq__22514 = G__22615;
chunk__22516 = G__22616;
count__22517 = G__22617;
i__22518 = G__22618;
continue;
} else {
var G__22619 = cljs.core.next(seq__22514__$1);
var G__22620 = null;
var G__22621 = (0);
var G__22622 = (0);
seq__22514 = G__22619;
chunk__22516 = G__22620;
count__22517 = G__22621;
i__22518 = G__22622;
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
