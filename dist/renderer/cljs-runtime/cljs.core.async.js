goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31996 = (function (f,blockable,meta31997){
this.f = f;
this.blockable = blockable;
this.meta31997 = meta31997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31998,meta31997__$1){
var self__ = this;
var _31998__$1 = this;
return (new cljs.core.async.t_cljs$core$async31996(self__.f,self__.blockable,meta31997__$1));
}));

(cljs.core.async.t_cljs$core$async31996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31998){
var self__ = this;
var _31998__$1 = this;
return self__.meta31997;
}));

(cljs.core.async.t_cljs$core$async31996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31997","meta31997",-632409520,null)], null);
}));

(cljs.core.async.t_cljs$core$async31996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31996");

(cljs.core.async.t_cljs$core$async31996.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31996.
 */
cljs.core.async.__GT_t_cljs$core$async31996 = (function cljs$core$async$__GT_t_cljs$core$async31996(f,blockable,meta31997){
return (new cljs.core.async.t_cljs$core$async31996(f,blockable,meta31997));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31991 = arguments.length;
switch (G__31991) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31996(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32031 = arguments.length;
switch (G__32031) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32054 = arguments.length;
switch (G__32054) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32066 = arguments.length;
switch (G__32066) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35444 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35444) : fn1.call(null,val_35444));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35444) : fn1.call(null,val_35444));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32096 = arguments.length;
switch (G__32096) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___35455 = n;
var x_35456 = (0);
while(true){
if((x_35456 < n__5593__auto___35455)){
(a[x_35456] = x_35456);

var G__35458 = (x_35456 + (1));
x_35456 = G__35458;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32104 = (function (flag,meta32105){
this.flag = flag;
this.meta32105 = meta32105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32106,meta32105__$1){
var self__ = this;
var _32106__$1 = this;
return (new cljs.core.async.t_cljs$core$async32104(self__.flag,meta32105__$1));
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32106){
var self__ = this;
var _32106__$1 = this;
return self__.meta32105;
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32105","meta32105",171609721,null)], null);
}));

(cljs.core.async.t_cljs$core$async32104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32104");

(cljs.core.async.t_cljs$core$async32104.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32104.
 */
cljs.core.async.__GT_t_cljs$core$async32104 = (function cljs$core$async$__GT_t_cljs$core$async32104(flag,meta32105){
return (new cljs.core.async.t_cljs$core$async32104(flag,meta32105));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32104(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32128 = (function (flag,cb,meta32129){
this.flag = flag;
this.cb = cb;
this.meta32129 = meta32129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32130,meta32129__$1){
var self__ = this;
var _32130__$1 = this;
return (new cljs.core.async.t_cljs$core$async32128(self__.flag,self__.cb,meta32129__$1));
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32130){
var self__ = this;
var _32130__$1 = this;
return self__.meta32129;
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32129","meta32129",756680363,null)], null);
}));

(cljs.core.async.t_cljs$core$async32128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32128");

(cljs.core.async.t_cljs$core$async32128.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32128.
 */
cljs.core.async.__GT_t_cljs$core$async32128 = (function cljs$core$async$__GT_t_cljs$core$async32128(flag,cb,meta32129){
return (new cljs.core.async.t_cljs$core$async32128(flag,cb,meta32129));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32128(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32140_SHARP_){
var G__32143 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32140_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32143) : fret.call(null,G__32143));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32141_SHARP_){
var G__32144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32141_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32144) : fret.call(null,G__32144));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35468 = (i + (1));
i = G__35468;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35469 = arguments.length;
var i__5727__auto___35470 = (0);
while(true){
if((i__5727__auto___35470 < len__5726__auto___35469)){
args__5732__auto__.push((arguments[i__5727__auto___35470]));

var G__35471 = (i__5727__auto___35470 + (1));
i__5727__auto___35470 = G__35471;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32165){
var map__32166 = p__32165;
var map__32166__$1 = cljs.core.__destructure_map(map__32166);
var opts = map__32166__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32158){
var G__32159 = cljs.core.first(seq32158);
var seq32158__$1 = cljs.core.next(seq32158);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32159,seq32158__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32205 = arguments.length;
switch (G__32205) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31897__auto___35475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_32305){
var state_val_32307 = (state_32305[(1)]);
if((state_val_32307 === (7))){
var inst_32299 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32333_35477 = state_32305__$1;
(statearr_32333_35477[(2)] = inst_32299);

(statearr_32333_35477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (1))){
var state_32305__$1 = state_32305;
var statearr_32334_35478 = state_32305__$1;
(statearr_32334_35478[(2)] = null);

(statearr_32334_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (4))){
var inst_32255 = (state_32305[(7)]);
var inst_32255__$1 = (state_32305[(2)]);
var inst_32270 = (inst_32255__$1 == null);
var state_32305__$1 = (function (){var statearr_32335 = state_32305;
(statearr_32335[(7)] = inst_32255__$1);

return statearr_32335;
})();
if(cljs.core.truth_(inst_32270)){
var statearr_32336_35479 = state_32305__$1;
(statearr_32336_35479[(1)] = (5));

} else {
var statearr_32337_35480 = state_32305__$1;
(statearr_32337_35480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (13))){
var state_32305__$1 = state_32305;
var statearr_32347_35482 = state_32305__$1;
(statearr_32347_35482[(2)] = null);

(statearr_32347_35482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (6))){
var inst_32255 = (state_32305[(7)]);
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32305__$1,(11),to,inst_32255);
} else {
if((state_val_32307 === (3))){
var inst_32301 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32305__$1,inst_32301);
} else {
if((state_val_32307 === (12))){
var state_32305__$1 = state_32305;
var statearr_32369_35483 = state_32305__$1;
(statearr_32369_35483[(2)] = null);

(statearr_32369_35483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (2))){
var state_32305__$1 = state_32305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32305__$1,(4),from);
} else {
if((state_val_32307 === (11))){
var inst_32289 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
if(cljs.core.truth_(inst_32289)){
var statearr_32372_35484 = state_32305__$1;
(statearr_32372_35484[(1)] = (12));

} else {
var statearr_32373_35485 = state_32305__$1;
(statearr_32373_35485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (9))){
var state_32305__$1 = state_32305;
var statearr_32374_35487 = state_32305__$1;
(statearr_32374_35487[(2)] = null);

(statearr_32374_35487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (5))){
var state_32305__$1 = state_32305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32375_35488 = state_32305__$1;
(statearr_32375_35488[(1)] = (8));

} else {
var statearr_32383_35489 = state_32305__$1;
(statearr_32383_35489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (14))){
var inst_32297 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32389_35490 = state_32305__$1;
(statearr_32389_35490[(2)] = inst_32297);

(statearr_32389_35490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (10))){
var inst_32284 = (state_32305[(2)]);
var state_32305__$1 = state_32305;
var statearr_32393_35491 = state_32305__$1;
(statearr_32393_35491[(2)] = inst_32284);

(statearr_32393_35491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (8))){
var inst_32281 = cljs.core.async.close_BANG_(to);
var state_32305__$1 = state_32305;
var statearr_32401_35493 = state_32305__$1;
(statearr_32401_35493[(2)] = inst_32281);

(statearr_32401_35493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_32406 = [null,null,null,null,null,null,null,null];
(statearr_32406[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_32406[(1)] = (1));

return statearr_32406;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_32305){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_32305);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e32412){var ex__31628__auto__ = e32412;
var statearr_32415_35500 = state_32305;
(statearr_32415_35500[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_32305[(4)]))){
var statearr_32418_35501 = state_32305;
(statearr_32418_35501[(1)] = cljs.core.first((state_32305[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35502 = state_32305;
state_32305 = G__35502;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_32305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_32305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_32431 = f__31898__auto__();
(statearr_32431[(6)] = c__31897__auto___35475);

return statearr_32431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__32445){
var vec__32446 = p__32445;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32446,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32446,(1),null);
var job = vec__32446;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31897__auto___35512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_32456){
var state_val_32457 = (state_32456[(1)]);
if((state_val_32457 === (1))){
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32456__$1,(2),res,v);
} else {
if((state_val_32457 === (2))){
var inst_32453 = (state_32456[(2)]);
var inst_32454 = cljs.core.async.close_BANG_(res);
var state_32456__$1 = (function (){var statearr_32458 = state_32456;
(statearr_32458[(7)] = inst_32453);

return statearr_32458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32456__$1,inst_32454);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0 = (function (){
var statearr_32459 = [null,null,null,null,null,null,null,null];
(statearr_32459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__);

(statearr_32459[(1)] = (1));

return statearr_32459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1 = (function (state_32456){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_32456);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e32460){var ex__31628__auto__ = e32460;
var statearr_32461_35517 = state_32456;
(statearr_32461_35517[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_32456[(4)]))){
var statearr_32463_35518 = state_32456;
(statearr_32463_35518[(1)] = cljs.core.first((state_32456[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35519 = state_32456;
state_32456 = G__35519;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = function(state_32456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1.call(this,state_32456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_32464 = f__31898__auto__();
(statearr_32464[(6)] = c__31897__auto___35512);

return statearr_32464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32474){
var vec__32475 = p__32474;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32475,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32475,(1),null);
var job = vec__32475;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___35521 = n;
var __35522 = (0);
while(true){
if((__35522 < n__5593__auto___35521)){
var G__32482_35523 = type;
var G__32482_35524__$1 = (((G__32482_35523 instanceof cljs.core.Keyword))?G__32482_35523.fqn:null);
switch (G__32482_35524__$1) {
case "compute":
var c__31897__auto___35526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35522,c__31897__auto___35526,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async){
return (function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = ((function (__35522,c__31897__auto___35526,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async){
return (function (state_32498){
var state_val_32499 = (state_32498[(1)]);
if((state_val_32499 === (1))){
var state_32498__$1 = state_32498;
var statearr_32505_35531 = state_32498__$1;
(statearr_32505_35531[(2)] = null);

(statearr_32505_35531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (2))){
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32498__$1,(4),jobs);
} else {
if((state_val_32499 === (3))){
var inst_32496 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32498__$1,inst_32496);
} else {
if((state_val_32499 === (4))){
var inst_32488 = (state_32498[(2)]);
var inst_32489 = process__$1(inst_32488);
var state_32498__$1 = state_32498;
if(cljs.core.truth_(inst_32489)){
var statearr_32513_35532 = state_32498__$1;
(statearr_32513_35532[(1)] = (5));

} else {
var statearr_32514_35533 = state_32498__$1;
(statearr_32514_35533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (5))){
var state_32498__$1 = state_32498;
var statearr_32526_35534 = state_32498__$1;
(statearr_32526_35534[(2)] = null);

(statearr_32526_35534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (6))){
var state_32498__$1 = state_32498;
var statearr_32533_35535 = state_32498__$1;
(statearr_32533_35535[(2)] = null);

(statearr_32533_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32499 === (7))){
var inst_32494 = (state_32498[(2)]);
var state_32498__$1 = state_32498;
var statearr_32537_35538 = state_32498__$1;
(statearr_32537_35538[(2)] = inst_32494);

(statearr_32537_35538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35522,c__31897__auto___35526,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async))
;
return ((function (__35522,switch__31624__auto__,c__31897__auto___35526,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0 = (function (){
var statearr_32538 = [null,null,null,null,null,null,null];
(statearr_32538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__);

(statearr_32538[(1)] = (1));

return statearr_32538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1 = (function (state_32498){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_32498);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e32543){var ex__31628__auto__ = e32543;
var statearr_32544_35543 = state_32498;
(statearr_32544_35543[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_32498[(4)]))){
var statearr_32545_35544 = state_32498;
(statearr_32545_35544[(1)] = cljs.core.first((state_32498[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35545 = state_32498;
state_32498 = G__35545;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = function(state_32498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1.call(this,state_32498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__;
})()
;})(__35522,switch__31624__auto__,c__31897__auto___35526,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async))
})();
var state__31899__auto__ = (function (){var statearr_32549 = f__31898__auto__();
(statearr_32549[(6)] = c__31897__auto___35526);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
});})(__35522,c__31897__auto___35526,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async))
);


break;
case "async":
var c__31897__auto___35548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35522,c__31897__auto___35548,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async){
return (function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = ((function (__35522,c__31897__auto___35548,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async){
return (function (state_32595){
var state_val_32596 = (state_32595[(1)]);
if((state_val_32596 === (1))){
var state_32595__$1 = state_32595;
var statearr_32600_35549 = state_32595__$1;
(statearr_32600_35549[(2)] = null);

(statearr_32600_35549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (2))){
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32595__$1,(4),jobs);
} else {
if((state_val_32596 === (3))){
var inst_32591 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32595__$1,inst_32591);
} else {
if((state_val_32596 === (4))){
var inst_32579 = (state_32595[(2)]);
var inst_32581 = async(inst_32579);
var state_32595__$1 = state_32595;
if(cljs.core.truth_(inst_32581)){
var statearr_32618_35558 = state_32595__$1;
(statearr_32618_35558[(1)] = (5));

} else {
var statearr_32619_35559 = state_32595__$1;
(statearr_32619_35559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (5))){
var state_32595__$1 = state_32595;
var statearr_32622_35560 = state_32595__$1;
(statearr_32622_35560[(2)] = null);

(statearr_32622_35560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (6))){
var state_32595__$1 = state_32595;
var statearr_32626_35562 = state_32595__$1;
(statearr_32626_35562[(2)] = null);

(statearr_32626_35562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (7))){
var inst_32589 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
var statearr_32631_35567 = state_32595__$1;
(statearr_32631_35567[(2)] = inst_32589);

(statearr_32631_35567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35522,c__31897__auto___35548,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async))
;
return ((function (__35522,switch__31624__auto__,c__31897__auto___35548,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0 = (function (){
var statearr_32634 = [null,null,null,null,null,null,null];
(statearr_32634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__);

(statearr_32634[(1)] = (1));

return statearr_32634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1 = (function (state_32595){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_32595);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e32648){var ex__31628__auto__ = e32648;
var statearr_32649_35573 = state_32595;
(statearr_32649_35573[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_32595[(4)]))){
var statearr_32654_35574 = state_32595;
(statearr_32654_35574[(1)] = cljs.core.first((state_32595[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35579 = state_32595;
state_32595 = G__35579;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = function(state_32595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1.call(this,state_32595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__;
})()
;})(__35522,switch__31624__auto__,c__31897__auto___35548,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async))
})();
var state__31899__auto__ = (function (){var statearr_32666 = f__31898__auto__();
(statearr_32666[(6)] = c__31897__auto___35548);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
});})(__35522,c__31897__auto___35548,G__32482_35523,G__32482_35524__$1,n__5593__auto___35521,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32482_35524__$1)].join('')));

}

var G__35583 = (__35522 + (1));
__35522 = G__35583;
continue;
} else {
}
break;
}

var c__31897__auto___35584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_32717){
var state_val_32718 = (state_32717[(1)]);
if((state_val_32718 === (7))){
var inst_32713 = (state_32717[(2)]);
var state_32717__$1 = state_32717;
var statearr_32772_35585 = state_32717__$1;
(statearr_32772_35585[(2)] = inst_32713);

(statearr_32772_35585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (1))){
var state_32717__$1 = state_32717;
var statearr_32775_35591 = state_32717__$1;
(statearr_32775_35591[(2)] = null);

(statearr_32775_35591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (4))){
var inst_32681 = (state_32717[(7)]);
var inst_32681__$1 = (state_32717[(2)]);
var inst_32682 = (inst_32681__$1 == null);
var state_32717__$1 = (function (){var statearr_32780 = state_32717;
(statearr_32780[(7)] = inst_32681__$1);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32682)){
var statearr_32781_35594 = state_32717__$1;
(statearr_32781_35594[(1)] = (5));

} else {
var statearr_32782_35595 = state_32717__$1;
(statearr_32782_35595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (6))){
var inst_32681 = (state_32717[(7)]);
var inst_32687 = (state_32717[(8)]);
var inst_32687__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32698 = [inst_32681,inst_32687__$1];
var inst_32699 = (new cljs.core.PersistentVector(null,2,(5),inst_32697,inst_32698,null));
var state_32717__$1 = (function (){var statearr_32785 = state_32717;
(statearr_32785[(8)] = inst_32687__$1);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32717__$1,(8),jobs,inst_32699);
} else {
if((state_val_32718 === (3))){
var inst_32715 = (state_32717[(2)]);
var state_32717__$1 = state_32717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32717__$1,inst_32715);
} else {
if((state_val_32718 === (2))){
var state_32717__$1 = state_32717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32717__$1,(4),from);
} else {
if((state_val_32718 === (9))){
var inst_32710 = (state_32717[(2)]);
var state_32717__$1 = (function (){var statearr_32789 = state_32717;
(statearr_32789[(9)] = inst_32710);

return statearr_32789;
})();
var statearr_32790_35601 = state_32717__$1;
(statearr_32790_35601[(2)] = null);

(statearr_32790_35601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (5))){
var inst_32685 = cljs.core.async.close_BANG_(jobs);
var state_32717__$1 = state_32717;
var statearr_32792_35602 = state_32717__$1;
(statearr_32792_35602[(2)] = inst_32685);

(statearr_32792_35602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (8))){
var inst_32687 = (state_32717[(8)]);
var inst_32702 = (state_32717[(2)]);
var state_32717__$1 = (function (){var statearr_32798 = state_32717;
(statearr_32798[(10)] = inst_32702);

return statearr_32798;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32717__$1,(9),results,inst_32687);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0 = (function (){
var statearr_32803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__);

(statearr_32803[(1)] = (1));

return statearr_32803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1 = (function (state_32717){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_32717);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e32808){var ex__31628__auto__ = e32808;
var statearr_32809_35607 = state_32717;
(statearr_32809_35607[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_32717[(4)]))){
var statearr_32888_35612 = state_32717;
(statearr_32888_35612[(1)] = cljs.core.first((state_32717[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35613 = state_32717;
state_32717 = G__35613;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = function(state_32717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1.call(this,state_32717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_32891 = f__31898__auto__();
(statearr_32891[(6)] = c__31897__auto___35584);

return statearr_32891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


var c__31897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_33000){
var state_val_33001 = (state_33000[(1)]);
if((state_val_33001 === (7))){
var inst_32995 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
var statearr_33007_35614 = state_33000__$1;
(statearr_33007_35614[(2)] = inst_32995);

(statearr_33007_35614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (20))){
var state_33000__$1 = state_33000;
var statearr_33009_35615 = state_33000__$1;
(statearr_33009_35615[(2)] = null);

(statearr_33009_35615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (1))){
var state_33000__$1 = state_33000;
var statearr_33013_35616 = state_33000__$1;
(statearr_33013_35616[(2)] = null);

(statearr_33013_35616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (4))){
var inst_32900 = (state_33000[(7)]);
var inst_32900__$1 = (state_33000[(2)]);
var inst_32901 = (inst_32900__$1 == null);
var state_33000__$1 = (function (){var statearr_33015 = state_33000;
(statearr_33015[(7)] = inst_32900__$1);

return statearr_33015;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_33016_35618 = state_33000__$1;
(statearr_33016_35618[(1)] = (5));

} else {
var statearr_33017_35619 = state_33000__$1;
(statearr_33017_35619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (15))){
var inst_32974 = (state_33000[(8)]);
var state_33000__$1 = state_33000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33000__$1,(18),to,inst_32974);
} else {
if((state_val_33001 === (21))){
var inst_32990 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
var statearr_33019_35620 = state_33000__$1;
(statearr_33019_35620[(2)] = inst_32990);

(statearr_33019_35620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (13))){
var inst_32992 = (state_33000[(2)]);
var state_33000__$1 = (function (){var statearr_33023 = state_33000;
(statearr_33023[(9)] = inst_32992);

return statearr_33023;
})();
var statearr_33025_35621 = state_33000__$1;
(statearr_33025_35621[(2)] = null);

(statearr_33025_35621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (6))){
var inst_32900 = (state_33000[(7)]);
var state_33000__$1 = state_33000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33000__$1,(11),inst_32900);
} else {
if((state_val_33001 === (17))){
var inst_32985 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
if(cljs.core.truth_(inst_32985)){
var statearr_33030_35622 = state_33000__$1;
(statearr_33030_35622[(1)] = (19));

} else {
var statearr_33031_35623 = state_33000__$1;
(statearr_33031_35623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (3))){
var inst_32997 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33000__$1,inst_32997);
} else {
if((state_val_33001 === (12))){
var inst_32935 = (state_33000[(10)]);
var state_33000__$1 = state_33000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33000__$1,(14),inst_32935);
} else {
if((state_val_33001 === (2))){
var state_33000__$1 = state_33000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33000__$1,(4),results);
} else {
if((state_val_33001 === (19))){
var state_33000__$1 = state_33000;
var statearr_33040_35624 = state_33000__$1;
(statearr_33040_35624[(2)] = null);

(statearr_33040_35624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (11))){
var inst_32935 = (state_33000[(2)]);
var state_33000__$1 = (function (){var statearr_33042 = state_33000;
(statearr_33042[(10)] = inst_32935);

return statearr_33042;
})();
var statearr_33054_35627 = state_33000__$1;
(statearr_33054_35627[(2)] = null);

(statearr_33054_35627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (9))){
var state_33000__$1 = state_33000;
var statearr_33060_35629 = state_33000__$1;
(statearr_33060_35629[(2)] = null);

(statearr_33060_35629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (5))){
var state_33000__$1 = state_33000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33064_35630 = state_33000__$1;
(statearr_33064_35630[(1)] = (8));

} else {
var statearr_33065_35631 = state_33000__$1;
(statearr_33065_35631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (14))){
var inst_32977 = (state_33000[(11)]);
var inst_32974 = (state_33000[(8)]);
var inst_32974__$1 = (state_33000[(2)]);
var inst_32975 = (inst_32974__$1 == null);
var inst_32977__$1 = cljs.core.not(inst_32975);
var state_33000__$1 = (function (){var statearr_33070 = state_33000;
(statearr_33070[(11)] = inst_32977__$1);

(statearr_33070[(8)] = inst_32974__$1);

return statearr_33070;
})();
if(inst_32977__$1){
var statearr_33073_35632 = state_33000__$1;
(statearr_33073_35632[(1)] = (15));

} else {
var statearr_33077_35633 = state_33000__$1;
(statearr_33077_35633[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (16))){
var inst_32977 = (state_33000[(11)]);
var state_33000__$1 = state_33000;
var statearr_33081_35634 = state_33000__$1;
(statearr_33081_35634[(2)] = inst_32977);

(statearr_33081_35634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (10))){
var inst_32931 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
var statearr_33084_35635 = state_33000__$1;
(statearr_33084_35635[(2)] = inst_32931);

(statearr_33084_35635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (18))){
var inst_32982 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
var statearr_33089_35636 = state_33000__$1;
(statearr_33089_35636[(2)] = inst_32982);

(statearr_33089_35636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (8))){
var inst_32928 = cljs.core.async.close_BANG_(to);
var state_33000__$1 = state_33000;
var statearr_33090_35637 = state_33000__$1;
(statearr_33090_35637[(2)] = inst_32928);

(statearr_33090_35637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0 = (function (){
var statearr_33091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__);

(statearr_33091[(1)] = (1));

return statearr_33091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1 = (function (state_33000){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_33000);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e33092){var ex__31628__auto__ = e33092;
var statearr_33093_35641 = state_33000;
(statearr_33093_35641[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_33000[(4)]))){
var statearr_33094_35642 = state_33000;
(statearr_33094_35642[(1)] = cljs.core.first((state_33000[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35643 = state_33000;
state_33000 = G__35643;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__ = function(state_33000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1.call(this,state_33000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31625__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_33095 = f__31898__auto__();
(statearr_33095[(6)] = c__31897__auto__);

return statearr_33095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));

return c__31897__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33097 = arguments.length;
switch (G__33097) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33099 = arguments.length;
switch (G__33099) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33107 = arguments.length;
switch (G__33107) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31897__auto___35650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_33141){
var state_val_33143 = (state_33141[(1)]);
if((state_val_33143 === (7))){
var inst_33135 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
var statearr_33146_35651 = state_33141__$1;
(statearr_33146_35651[(2)] = inst_33135);

(statearr_33146_35651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (1))){
var state_33141__$1 = state_33141;
var statearr_33147_35652 = state_33141__$1;
(statearr_33147_35652[(2)] = null);

(statearr_33147_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (4))){
var inst_33113 = (state_33141[(7)]);
var inst_33113__$1 = (state_33141[(2)]);
var inst_33114 = (inst_33113__$1 == null);
var state_33141__$1 = (function (){var statearr_33148 = state_33141;
(statearr_33148[(7)] = inst_33113__$1);

return statearr_33148;
})();
if(cljs.core.truth_(inst_33114)){
var statearr_33150_35653 = state_33141__$1;
(statearr_33150_35653[(1)] = (5));

} else {
var statearr_33151_35654 = state_33141__$1;
(statearr_33151_35654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (13))){
var state_33141__$1 = state_33141;
var statearr_33153_35655 = state_33141__$1;
(statearr_33153_35655[(2)] = null);

(statearr_33153_35655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (6))){
var inst_33113 = (state_33141[(7)]);
var inst_33120 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33113) : p.call(null,inst_33113));
var state_33141__$1 = state_33141;
if(cljs.core.truth_(inst_33120)){
var statearr_33155_35656 = state_33141__$1;
(statearr_33155_35656[(1)] = (9));

} else {
var statearr_33156_35657 = state_33141__$1;
(statearr_33156_35657[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (3))){
var inst_33137 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33141__$1,inst_33137);
} else {
if((state_val_33143 === (12))){
var state_33141__$1 = state_33141;
var statearr_33157_35658 = state_33141__$1;
(statearr_33157_35658[(2)] = null);

(statearr_33157_35658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (2))){
var state_33141__$1 = state_33141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33141__$1,(4),ch);
} else {
if((state_val_33143 === (11))){
var inst_33113 = (state_33141[(7)]);
var inst_33124 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33141__$1,(8),inst_33124,inst_33113);
} else {
if((state_val_33143 === (9))){
var state_33141__$1 = state_33141;
var statearr_33158_35659 = state_33141__$1;
(statearr_33158_35659[(2)] = tc);

(statearr_33158_35659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (5))){
var inst_33116 = cljs.core.async.close_BANG_(tc);
var inst_33117 = cljs.core.async.close_BANG_(fc);
var state_33141__$1 = (function (){var statearr_33159 = state_33141;
(statearr_33159[(8)] = inst_33116);

return statearr_33159;
})();
var statearr_33160_35660 = state_33141__$1;
(statearr_33160_35660[(2)] = inst_33117);

(statearr_33160_35660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (14))){
var inst_33133 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
var statearr_33162_35661 = state_33141__$1;
(statearr_33162_35661[(2)] = inst_33133);

(statearr_33162_35661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (10))){
var state_33141__$1 = state_33141;
var statearr_33163_35664 = state_33141__$1;
(statearr_33163_35664[(2)] = fc);

(statearr_33163_35664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (8))){
var inst_33126 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
if(cljs.core.truth_(inst_33126)){
var statearr_33164_35665 = state_33141__$1;
(statearr_33164_35665[(1)] = (12));

} else {
var statearr_33165_35666 = state_33141__$1;
(statearr_33165_35666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_33170 = [null,null,null,null,null,null,null,null,null];
(statearr_33170[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_33170[(1)] = (1));

return statearr_33170;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_33141){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_33141);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e33171){var ex__31628__auto__ = e33171;
var statearr_33172_35669 = state_33141;
(statearr_33172_35669[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_33141[(4)]))){
var statearr_33173_35670 = state_33141;
(statearr_33173_35670[(1)] = cljs.core.first((state_33141[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35671 = state_33141;
state_33141 = G__35671;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_33141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_33141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_33178 = f__31898__auto__();
(statearr_33178[(6)] = c__31897__auto___35650);

return statearr_33178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_33208){
var state_val_33209 = (state_33208[(1)]);
if((state_val_33209 === (7))){
var inst_33200 = (state_33208[(2)]);
var state_33208__$1 = state_33208;
var statearr_33212_35672 = state_33208__$1;
(statearr_33212_35672[(2)] = inst_33200);

(statearr_33212_35672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (1))){
var inst_33179 = init;
var inst_33180 = inst_33179;
var state_33208__$1 = (function (){var statearr_33213 = state_33208;
(statearr_33213[(7)] = inst_33180);

return statearr_33213;
})();
var statearr_33214_35673 = state_33208__$1;
(statearr_33214_35673[(2)] = null);

(statearr_33214_35673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (4))){
var inst_33187 = (state_33208[(8)]);
var inst_33187__$1 = (state_33208[(2)]);
var inst_33188 = (inst_33187__$1 == null);
var state_33208__$1 = (function (){var statearr_33219 = state_33208;
(statearr_33219[(8)] = inst_33187__$1);

return statearr_33219;
})();
if(cljs.core.truth_(inst_33188)){
var statearr_33220_35681 = state_33208__$1;
(statearr_33220_35681[(1)] = (5));

} else {
var statearr_33221_35682 = state_33208__$1;
(statearr_33221_35682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (6))){
var inst_33187 = (state_33208[(8)]);
var inst_33191 = (state_33208[(9)]);
var inst_33180 = (state_33208[(7)]);
var inst_33191__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33180,inst_33187) : f.call(null,inst_33180,inst_33187));
var inst_33192 = cljs.core.reduced_QMARK_(inst_33191__$1);
var state_33208__$1 = (function (){var statearr_33226 = state_33208;
(statearr_33226[(9)] = inst_33191__$1);

return statearr_33226;
})();
if(inst_33192){
var statearr_33227_35687 = state_33208__$1;
(statearr_33227_35687[(1)] = (8));

} else {
var statearr_33228_35688 = state_33208__$1;
(statearr_33228_35688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (3))){
var inst_33202 = (state_33208[(2)]);
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33208__$1,inst_33202);
} else {
if((state_val_33209 === (2))){
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33208__$1,(4),ch);
} else {
if((state_val_33209 === (9))){
var inst_33191 = (state_33208[(9)]);
var inst_33180 = inst_33191;
var state_33208__$1 = (function (){var statearr_33236 = state_33208;
(statearr_33236[(7)] = inst_33180);

return statearr_33236;
})();
var statearr_33237_35693 = state_33208__$1;
(statearr_33237_35693[(2)] = null);

(statearr_33237_35693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (5))){
var inst_33180 = (state_33208[(7)]);
var state_33208__$1 = state_33208;
var statearr_33238_35694 = state_33208__$1;
(statearr_33238_35694[(2)] = inst_33180);

(statearr_33238_35694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (10))){
var inst_33198 = (state_33208[(2)]);
var state_33208__$1 = state_33208;
var statearr_33243_35695 = state_33208__$1;
(statearr_33243_35695[(2)] = inst_33198);

(statearr_33243_35695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (8))){
var inst_33191 = (state_33208[(9)]);
var inst_33194 = cljs.core.deref(inst_33191);
var state_33208__$1 = state_33208;
var statearr_33247_35703 = state_33208__$1;
(statearr_33247_35703[(2)] = inst_33194);

(statearr_33247_35703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31625__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31625__auto____0 = (function (){
var statearr_33248 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33248[(0)] = cljs$core$async$reduce_$_state_machine__31625__auto__);

(statearr_33248[(1)] = (1));

return statearr_33248;
});
var cljs$core$async$reduce_$_state_machine__31625__auto____1 = (function (state_33208){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_33208);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e33252){var ex__31628__auto__ = e33252;
var statearr_33255_35704 = state_33208;
(statearr_33255_35704[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_33208[(4)]))){
var statearr_33256_35705 = state_33208;
(statearr_33256_35705[(1)] = cljs.core.first((state_33208[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35709 = state_33208;
state_33208 = G__35709;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31625__auto__ = function(state_33208){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31625__auto____1.call(this,state_33208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31625__auto____0;
cljs$core$async$reduce_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31625__auto____1;
return cljs$core$async$reduce_$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_33257 = f__31898__auto__();
(statearr_33257[(6)] = c__31897__auto__);

return statearr_33257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));

return c__31897__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_33268){
var state_val_33269 = (state_33268[(1)]);
if((state_val_33269 === (1))){
var inst_33263 = cljs.core.async.reduce(f__$1,init,ch);
var state_33268__$1 = state_33268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33268__$1,(2),inst_33263);
} else {
if((state_val_33269 === (2))){
var inst_33265 = (state_33268[(2)]);
var inst_33266 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33265) : f__$1.call(null,inst_33265));
var state_33268__$1 = state_33268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33268__$1,inst_33266);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31625__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31625__auto____0 = (function (){
var statearr_33279 = [null,null,null,null,null,null,null];
(statearr_33279[(0)] = cljs$core$async$transduce_$_state_machine__31625__auto__);

(statearr_33279[(1)] = (1));

return statearr_33279;
});
var cljs$core$async$transduce_$_state_machine__31625__auto____1 = (function (state_33268){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_33268);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e33283){var ex__31628__auto__ = e33283;
var statearr_33284_35713 = state_33268;
(statearr_33284_35713[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_33268[(4)]))){
var statearr_33285_35714 = state_33268;
(statearr_33285_35714[(1)] = cljs.core.first((state_33268[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35715 = state_33268;
state_33268 = G__35715;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31625__auto__ = function(state_33268){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31625__auto____1.call(this,state_33268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31625__auto____0;
cljs$core$async$transduce_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31625__auto____1;
return cljs$core$async$transduce_$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_33290 = f__31898__auto__();
(statearr_33290[(6)] = c__31897__auto__);

return statearr_33290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));

return c__31897__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33298 = arguments.length;
switch (G__33298) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_33324){
var state_val_33327 = (state_33324[(1)]);
if((state_val_33327 === (7))){
var inst_33306 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33334_35717 = state_33324__$1;
(statearr_33334_35717[(2)] = inst_33306);

(statearr_33334_35717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (1))){
var inst_33300 = cljs.core.seq(coll);
var inst_33301 = inst_33300;
var state_33324__$1 = (function (){var statearr_33337 = state_33324;
(statearr_33337[(7)] = inst_33301);

return statearr_33337;
})();
var statearr_33338_35719 = state_33324__$1;
(statearr_33338_35719[(2)] = null);

(statearr_33338_35719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (4))){
var inst_33301 = (state_33324[(7)]);
var inst_33304 = cljs.core.first(inst_33301);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33324__$1,(7),ch,inst_33304);
} else {
if((state_val_33327 === (13))){
var inst_33318 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33344_35723 = state_33324__$1;
(statearr_33344_35723[(2)] = inst_33318);

(statearr_33344_35723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (6))){
var inst_33309 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
if(cljs.core.truth_(inst_33309)){
var statearr_33346_35724 = state_33324__$1;
(statearr_33346_35724[(1)] = (8));

} else {
var statearr_33348_35725 = state_33324__$1;
(statearr_33348_35725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (3))){
var inst_33322 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33324__$1,inst_33322);
} else {
if((state_val_33327 === (12))){
var state_33324__$1 = state_33324;
var statearr_33355_35727 = state_33324__$1;
(statearr_33355_35727[(2)] = null);

(statearr_33355_35727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (2))){
var inst_33301 = (state_33324[(7)]);
var state_33324__$1 = state_33324;
if(cljs.core.truth_(inst_33301)){
var statearr_33356_35728 = state_33324__$1;
(statearr_33356_35728[(1)] = (4));

} else {
var statearr_33357_35729 = state_33324__$1;
(statearr_33357_35729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (11))){
var inst_33315 = cljs.core.async.close_BANG_(ch);
var state_33324__$1 = state_33324;
var statearr_33361_35730 = state_33324__$1;
(statearr_33361_35730[(2)] = inst_33315);

(statearr_33361_35730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (9))){
var state_33324__$1 = state_33324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33363_35731 = state_33324__$1;
(statearr_33363_35731[(1)] = (11));

} else {
var statearr_33364_35732 = state_33324__$1;
(statearr_33364_35732[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (5))){
var inst_33301 = (state_33324[(7)]);
var state_33324__$1 = state_33324;
var statearr_33372_35733 = state_33324__$1;
(statearr_33372_35733[(2)] = inst_33301);

(statearr_33372_35733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (10))){
var inst_33320 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33373_35734 = state_33324__$1;
(statearr_33373_35734[(2)] = inst_33320);

(statearr_33373_35734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (8))){
var inst_33301 = (state_33324[(7)]);
var inst_33311 = cljs.core.next(inst_33301);
var inst_33301__$1 = inst_33311;
var state_33324__$1 = (function (){var statearr_33374 = state_33324;
(statearr_33374[(7)] = inst_33301__$1);

return statearr_33374;
})();
var statearr_33376_35735 = state_33324__$1;
(statearr_33376_35735[(2)] = null);

(statearr_33376_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_33379 = [null,null,null,null,null,null,null,null];
(statearr_33379[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_33379[(1)] = (1));

return statearr_33379;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_33324){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_33324);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e33380){var ex__31628__auto__ = e33380;
var statearr_33381_35736 = state_33324;
(statearr_33381_35736[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_33324[(4)]))){
var statearr_33382_35737 = state_33324;
(statearr_33382_35737[(1)] = cljs.core.first((state_33324[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35738 = state_33324;
state_33324 = G__35738;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_33324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_33324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_33383 = f__31898__auto__();
(statearr_33383[(6)] = c__31897__auto__);

return statearr_33383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));

return c__31897__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33399 = arguments.length;
switch (G__33399) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35740 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35740(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35741 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35741(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35742 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35742(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35745 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35745(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33420 = (function (ch,cs,meta33421){
this.ch = ch;
this.cs = cs;
this.meta33421 = meta33421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33422,meta33421__$1){
var self__ = this;
var _33422__$1 = this;
return (new cljs.core.async.t_cljs$core$async33420(self__.ch,self__.cs,meta33421__$1));
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33422){
var self__ = this;
var _33422__$1 = this;
return self__.meta33421;
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33421","meta33421",-1833738382,null)], null);
}));

(cljs.core.async.t_cljs$core$async33420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33420");

(cljs.core.async.t_cljs$core$async33420.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33420.
 */
cljs.core.async.__GT_t_cljs$core$async33420 = (function cljs$core$async$__GT_t_cljs$core$async33420(ch,cs,meta33421){
return (new cljs.core.async.t_cljs$core$async33420(ch,cs,meta33421));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async33420(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31897__auto___35746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_33614){
var state_val_33615 = (state_33614[(1)]);
if((state_val_33615 === (7))){
var inst_33609 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33616_35748 = state_33614__$1;
(statearr_33616_35748[(2)] = inst_33609);

(statearr_33616_35748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (20))){
var inst_33475 = (state_33614[(7)]);
var inst_33491 = cljs.core.first(inst_33475);
var inst_33492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33491,(0),null);
var inst_33493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33491,(1),null);
var state_33614__$1 = (function (){var statearr_33617 = state_33614;
(statearr_33617[(8)] = inst_33492);

return statearr_33617;
})();
if(cljs.core.truth_(inst_33493)){
var statearr_33619_35749 = state_33614__$1;
(statearr_33619_35749[(1)] = (22));

} else {
var statearr_33620_35750 = state_33614__$1;
(statearr_33620_35750[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (27))){
var inst_33538 = (state_33614[(9)]);
var inst_33540 = (state_33614[(10)]);
var inst_33431 = (state_33614[(11)]);
var inst_33547 = (state_33614[(12)]);
var inst_33547__$1 = cljs.core._nth(inst_33538,inst_33540);
var inst_33548 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33547__$1,inst_33431,done);
var state_33614__$1 = (function (){var statearr_33624 = state_33614;
(statearr_33624[(12)] = inst_33547__$1);

return statearr_33624;
})();
if(cljs.core.truth_(inst_33548)){
var statearr_33625_35751 = state_33614__$1;
(statearr_33625_35751[(1)] = (30));

} else {
var statearr_33631_35752 = state_33614__$1;
(statearr_33631_35752[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (1))){
var state_33614__$1 = state_33614;
var statearr_33633_35753 = state_33614__$1;
(statearr_33633_35753[(2)] = null);

(statearr_33633_35753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (24))){
var inst_33475 = (state_33614[(7)]);
var inst_33512 = (state_33614[(2)]);
var inst_33513 = cljs.core.next(inst_33475);
var inst_33448 = inst_33513;
var inst_33449 = null;
var inst_33450 = (0);
var inst_33451 = (0);
var state_33614__$1 = (function (){var statearr_33640 = state_33614;
(statearr_33640[(13)] = inst_33512);

(statearr_33640[(14)] = inst_33451);

(statearr_33640[(15)] = inst_33449);

(statearr_33640[(16)] = inst_33448);

(statearr_33640[(17)] = inst_33450);

return statearr_33640;
})();
var statearr_33643_35754 = state_33614__$1;
(statearr_33643_35754[(2)] = null);

(statearr_33643_35754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (39))){
var state_33614__$1 = state_33614;
var statearr_33653_35755 = state_33614__$1;
(statearr_33653_35755[(2)] = null);

(statearr_33653_35755[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (4))){
var inst_33431 = (state_33614[(11)]);
var inst_33431__$1 = (state_33614[(2)]);
var inst_33433 = (inst_33431__$1 == null);
var state_33614__$1 = (function (){var statearr_33655 = state_33614;
(statearr_33655[(11)] = inst_33431__$1);

return statearr_33655;
})();
if(cljs.core.truth_(inst_33433)){
var statearr_33656_35756 = state_33614__$1;
(statearr_33656_35756[(1)] = (5));

} else {
var statearr_33657_35757 = state_33614__$1;
(statearr_33657_35757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (15))){
var inst_33451 = (state_33614[(14)]);
var inst_33449 = (state_33614[(15)]);
var inst_33448 = (state_33614[(16)]);
var inst_33450 = (state_33614[(17)]);
var inst_33469 = (state_33614[(2)]);
var inst_33470 = (inst_33451 + (1));
var tmp33648 = inst_33449;
var tmp33649 = inst_33448;
var tmp33650 = inst_33450;
var inst_33448__$1 = tmp33649;
var inst_33449__$1 = tmp33648;
var inst_33450__$1 = tmp33650;
var inst_33451__$1 = inst_33470;
var state_33614__$1 = (function (){var statearr_33658 = state_33614;
(statearr_33658[(14)] = inst_33451__$1);

(statearr_33658[(18)] = inst_33469);

(statearr_33658[(15)] = inst_33449__$1);

(statearr_33658[(16)] = inst_33448__$1);

(statearr_33658[(17)] = inst_33450__$1);

return statearr_33658;
})();
var statearr_33662_35758 = state_33614__$1;
(statearr_33662_35758[(2)] = null);

(statearr_33662_35758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (21))){
var inst_33516 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33666_35759 = state_33614__$1;
(statearr_33666_35759[(2)] = inst_33516);

(statearr_33666_35759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (31))){
var inst_33547 = (state_33614[(12)]);
var inst_33551 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33547);
var state_33614__$1 = state_33614;
var statearr_33667_35760 = state_33614__$1;
(statearr_33667_35760[(2)] = inst_33551);

(statearr_33667_35760[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (32))){
var inst_33539 = (state_33614[(19)]);
var inst_33538 = (state_33614[(9)]);
var inst_33540 = (state_33614[(10)]);
var inst_33537 = (state_33614[(20)]);
var inst_33553 = (state_33614[(2)]);
var inst_33554 = (inst_33540 + (1));
var tmp33663 = inst_33539;
var tmp33664 = inst_33538;
var tmp33665 = inst_33537;
var inst_33537__$1 = tmp33665;
var inst_33538__$1 = tmp33664;
var inst_33539__$1 = tmp33663;
var inst_33540__$1 = inst_33554;
var state_33614__$1 = (function (){var statearr_33668 = state_33614;
(statearr_33668[(19)] = inst_33539__$1);

(statearr_33668[(9)] = inst_33538__$1);

(statearr_33668[(10)] = inst_33540__$1);

(statearr_33668[(21)] = inst_33553);

(statearr_33668[(20)] = inst_33537__$1);

return statearr_33668;
})();
var statearr_33682_35765 = state_33614__$1;
(statearr_33682_35765[(2)] = null);

(statearr_33682_35765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (40))){
var inst_33569 = (state_33614[(22)]);
var inst_33585 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33569);
var state_33614__$1 = state_33614;
var statearr_33684_35766 = state_33614__$1;
(statearr_33684_35766[(2)] = inst_33585);

(statearr_33684_35766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (33))){
var inst_33557 = (state_33614[(23)]);
var inst_33560 = cljs.core.chunked_seq_QMARK_(inst_33557);
var state_33614__$1 = state_33614;
if(inst_33560){
var statearr_33685_35767 = state_33614__$1;
(statearr_33685_35767[(1)] = (36));

} else {
var statearr_33686_35768 = state_33614__$1;
(statearr_33686_35768[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (13))){
var inst_33462 = (state_33614[(24)]);
var inst_33465 = cljs.core.async.close_BANG_(inst_33462);
var state_33614__$1 = state_33614;
var statearr_33693_35769 = state_33614__$1;
(statearr_33693_35769[(2)] = inst_33465);

(statearr_33693_35769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (22))){
var inst_33492 = (state_33614[(8)]);
var inst_33509 = cljs.core.async.close_BANG_(inst_33492);
var state_33614__$1 = state_33614;
var statearr_33694_35770 = state_33614__$1;
(statearr_33694_35770[(2)] = inst_33509);

(statearr_33694_35770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (36))){
var inst_33557 = (state_33614[(23)]);
var inst_33563 = cljs.core.chunk_first(inst_33557);
var inst_33564 = cljs.core.chunk_rest(inst_33557);
var inst_33565 = cljs.core.count(inst_33563);
var inst_33537 = inst_33564;
var inst_33538 = inst_33563;
var inst_33539 = inst_33565;
var inst_33540 = (0);
var state_33614__$1 = (function (){var statearr_33696 = state_33614;
(statearr_33696[(19)] = inst_33539);

(statearr_33696[(9)] = inst_33538);

(statearr_33696[(10)] = inst_33540);

(statearr_33696[(20)] = inst_33537);

return statearr_33696;
})();
var statearr_33697_35774 = state_33614__$1;
(statearr_33697_35774[(2)] = null);

(statearr_33697_35774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (41))){
var inst_33557 = (state_33614[(23)]);
var inst_33587 = (state_33614[(2)]);
var inst_33589 = cljs.core.next(inst_33557);
var inst_33537 = inst_33589;
var inst_33538 = null;
var inst_33539 = (0);
var inst_33540 = (0);
var state_33614__$1 = (function (){var statearr_33698 = state_33614;
(statearr_33698[(19)] = inst_33539);

(statearr_33698[(25)] = inst_33587);

(statearr_33698[(9)] = inst_33538);

(statearr_33698[(10)] = inst_33540);

(statearr_33698[(20)] = inst_33537);

return statearr_33698;
})();
var statearr_33699_35775 = state_33614__$1;
(statearr_33699_35775[(2)] = null);

(statearr_33699_35775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (43))){
var state_33614__$1 = state_33614;
var statearr_33709_35776 = state_33614__$1;
(statearr_33709_35776[(2)] = null);

(statearr_33709_35776[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (29))){
var inst_33597 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33713_35777 = state_33614__$1;
(statearr_33713_35777[(2)] = inst_33597);

(statearr_33713_35777[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (44))){
var inst_33606 = (state_33614[(2)]);
var state_33614__$1 = (function (){var statearr_33714 = state_33614;
(statearr_33714[(26)] = inst_33606);

return statearr_33714;
})();
var statearr_33715_35783 = state_33614__$1;
(statearr_33715_35783[(2)] = null);

(statearr_33715_35783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (6))){
var inst_33528 = (state_33614[(27)]);
var inst_33527 = cljs.core.deref(cs);
var inst_33528__$1 = cljs.core.keys(inst_33527);
var inst_33529 = cljs.core.count(inst_33528__$1);
var inst_33530 = cljs.core.reset_BANG_(dctr,inst_33529);
var inst_33536 = cljs.core.seq(inst_33528__$1);
var inst_33537 = inst_33536;
var inst_33538 = null;
var inst_33539 = (0);
var inst_33540 = (0);
var state_33614__$1 = (function (){var statearr_33716 = state_33614;
(statearr_33716[(19)] = inst_33539);

(statearr_33716[(9)] = inst_33538);

(statearr_33716[(10)] = inst_33540);

(statearr_33716[(20)] = inst_33537);

(statearr_33716[(27)] = inst_33528__$1);

(statearr_33716[(28)] = inst_33530);

return statearr_33716;
})();
var statearr_33720_35785 = state_33614__$1;
(statearr_33720_35785[(2)] = null);

(statearr_33720_35785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (28))){
var inst_33537 = (state_33614[(20)]);
var inst_33557 = (state_33614[(23)]);
var inst_33557__$1 = cljs.core.seq(inst_33537);
var state_33614__$1 = (function (){var statearr_33725 = state_33614;
(statearr_33725[(23)] = inst_33557__$1);

return statearr_33725;
})();
if(inst_33557__$1){
var statearr_33726_35787 = state_33614__$1;
(statearr_33726_35787[(1)] = (33));

} else {
var statearr_33727_35788 = state_33614__$1;
(statearr_33727_35788[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (25))){
var inst_33539 = (state_33614[(19)]);
var inst_33540 = (state_33614[(10)]);
var inst_33544 = (inst_33540 < inst_33539);
var inst_33545 = inst_33544;
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33545)){
var statearr_33728_35789 = state_33614__$1;
(statearr_33728_35789[(1)] = (27));

} else {
var statearr_33729_35790 = state_33614__$1;
(statearr_33729_35790[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (34))){
var state_33614__$1 = state_33614;
var statearr_33730_35791 = state_33614__$1;
(statearr_33730_35791[(2)] = null);

(statearr_33730_35791[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (17))){
var state_33614__$1 = state_33614;
var statearr_33731_35792 = state_33614__$1;
(statearr_33731_35792[(2)] = null);

(statearr_33731_35792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (3))){
var inst_33611 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33614__$1,inst_33611);
} else {
if((state_val_33615 === (12))){
var inst_33522 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33732_35793 = state_33614__$1;
(statearr_33732_35793[(2)] = inst_33522);

(statearr_33732_35793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (2))){
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33614__$1,(4),ch);
} else {
if((state_val_33615 === (23))){
var state_33614__$1 = state_33614;
var statearr_33733_35795 = state_33614__$1;
(statearr_33733_35795[(2)] = null);

(statearr_33733_35795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (35))){
var inst_33595 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33738_35796 = state_33614__$1;
(statearr_33738_35796[(2)] = inst_33595);

(statearr_33738_35796[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (19))){
var inst_33475 = (state_33614[(7)]);
var inst_33479 = cljs.core.chunk_first(inst_33475);
var inst_33484 = cljs.core.chunk_rest(inst_33475);
var inst_33485 = cljs.core.count(inst_33479);
var inst_33448 = inst_33484;
var inst_33449 = inst_33479;
var inst_33450 = inst_33485;
var inst_33451 = (0);
var state_33614__$1 = (function (){var statearr_33739 = state_33614;
(statearr_33739[(14)] = inst_33451);

(statearr_33739[(15)] = inst_33449);

(statearr_33739[(16)] = inst_33448);

(statearr_33739[(17)] = inst_33450);

return statearr_33739;
})();
var statearr_33740_35797 = state_33614__$1;
(statearr_33740_35797[(2)] = null);

(statearr_33740_35797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (11))){
var inst_33448 = (state_33614[(16)]);
var inst_33475 = (state_33614[(7)]);
var inst_33475__$1 = cljs.core.seq(inst_33448);
var state_33614__$1 = (function (){var statearr_33741 = state_33614;
(statearr_33741[(7)] = inst_33475__$1);

return statearr_33741;
})();
if(inst_33475__$1){
var statearr_33742_35798 = state_33614__$1;
(statearr_33742_35798[(1)] = (16));

} else {
var statearr_33743_35799 = state_33614__$1;
(statearr_33743_35799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (9))){
var inst_33524 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33744_35800 = state_33614__$1;
(statearr_33744_35800[(2)] = inst_33524);

(statearr_33744_35800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (5))){
var inst_33441 = cljs.core.deref(cs);
var inst_33442 = cljs.core.seq(inst_33441);
var inst_33448 = inst_33442;
var inst_33449 = null;
var inst_33450 = (0);
var inst_33451 = (0);
var state_33614__$1 = (function (){var statearr_33749 = state_33614;
(statearr_33749[(14)] = inst_33451);

(statearr_33749[(15)] = inst_33449);

(statearr_33749[(16)] = inst_33448);

(statearr_33749[(17)] = inst_33450);

return statearr_33749;
})();
var statearr_33750_35802 = state_33614__$1;
(statearr_33750_35802[(2)] = null);

(statearr_33750_35802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (14))){
var state_33614__$1 = state_33614;
var statearr_33753_35803 = state_33614__$1;
(statearr_33753_35803[(2)] = null);

(statearr_33753_35803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (45))){
var inst_33603 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33755_35804 = state_33614__$1;
(statearr_33755_35804[(2)] = inst_33603);

(statearr_33755_35804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (26))){
var inst_33528 = (state_33614[(27)]);
var inst_33599 = (state_33614[(2)]);
var inst_33600 = cljs.core.seq(inst_33528);
var state_33614__$1 = (function (){var statearr_33757 = state_33614;
(statearr_33757[(29)] = inst_33599);

return statearr_33757;
})();
if(inst_33600){
var statearr_33758_35806 = state_33614__$1;
(statearr_33758_35806[(1)] = (42));

} else {
var statearr_33759_35807 = state_33614__$1;
(statearr_33759_35807[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (16))){
var inst_33475 = (state_33614[(7)]);
var inst_33477 = cljs.core.chunked_seq_QMARK_(inst_33475);
var state_33614__$1 = state_33614;
if(inst_33477){
var statearr_33760_35811 = state_33614__$1;
(statearr_33760_35811[(1)] = (19));

} else {
var statearr_33761_35812 = state_33614__$1;
(statearr_33761_35812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (38))){
var inst_33592 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33762_35814 = state_33614__$1;
(statearr_33762_35814[(2)] = inst_33592);

(statearr_33762_35814[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (30))){
var state_33614__$1 = state_33614;
var statearr_33763_35816 = state_33614__$1;
(statearr_33763_35816[(2)] = null);

(statearr_33763_35816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (10))){
var inst_33451 = (state_33614[(14)]);
var inst_33449 = (state_33614[(15)]);
var inst_33461 = cljs.core._nth(inst_33449,inst_33451);
var inst_33462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33461,(0),null);
var inst_33463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33461,(1),null);
var state_33614__$1 = (function (){var statearr_33764 = state_33614;
(statearr_33764[(24)] = inst_33462);

return statearr_33764;
})();
if(cljs.core.truth_(inst_33463)){
var statearr_33765_35817 = state_33614__$1;
(statearr_33765_35817[(1)] = (13));

} else {
var statearr_33766_35818 = state_33614__$1;
(statearr_33766_35818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (18))){
var inst_33519 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33767_35819 = state_33614__$1;
(statearr_33767_35819[(2)] = inst_33519);

(statearr_33767_35819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (42))){
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33614__$1,(45),dchan);
} else {
if((state_val_33615 === (37))){
var inst_33569 = (state_33614[(22)]);
var inst_33431 = (state_33614[(11)]);
var inst_33557 = (state_33614[(23)]);
var inst_33569__$1 = cljs.core.first(inst_33557);
var inst_33572 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33569__$1,inst_33431,done);
var state_33614__$1 = (function (){var statearr_33768 = state_33614;
(statearr_33768[(22)] = inst_33569__$1);

return statearr_33768;
})();
if(cljs.core.truth_(inst_33572)){
var statearr_33769_35822 = state_33614__$1;
(statearr_33769_35822[(1)] = (39));

} else {
var statearr_33770_35823 = state_33614__$1;
(statearr_33770_35823[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33615 === (8))){
var inst_33451 = (state_33614[(14)]);
var inst_33450 = (state_33614[(17)]);
var inst_33453 = (inst_33451 < inst_33450);
var inst_33454 = inst_33453;
var state_33614__$1 = state_33614;
if(cljs.core.truth_(inst_33454)){
var statearr_33771_35824 = state_33614__$1;
(statearr_33771_35824[(1)] = (10));

} else {
var statearr_33772_35825 = state_33614__$1;
(statearr_33772_35825[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31625__auto__ = null;
var cljs$core$async$mult_$_state_machine__31625__auto____0 = (function (){
var statearr_33791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33791[(0)] = cljs$core$async$mult_$_state_machine__31625__auto__);

(statearr_33791[(1)] = (1));

return statearr_33791;
});
var cljs$core$async$mult_$_state_machine__31625__auto____1 = (function (state_33614){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_33614);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e33797){var ex__31628__auto__ = e33797;
var statearr_33798_35828 = state_33614;
(statearr_33798_35828[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_33614[(4)]))){
var statearr_33799_35829 = state_33614;
(statearr_33799_35829[(1)] = cljs.core.first((state_33614[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35830 = state_33614;
state_33614 = G__35830;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31625__auto__ = function(state_33614){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31625__auto____1.call(this,state_33614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31625__auto____0;
cljs$core$async$mult_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31625__auto____1;
return cljs$core$async$mult_$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_33832 = f__31898__auto__();
(statearr_33832[(6)] = c__31897__auto___35746);

return statearr_33832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33834 = arguments.length;
switch (G__33834) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35836 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35836(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35837 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35837(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35839 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35839(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35840 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35840(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35846 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35846(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35848 = arguments.length;
var i__5727__auto___35849 = (0);
while(true){
if((i__5727__auto___35849 < len__5726__auto___35848)){
args__5732__auto__.push((arguments[i__5727__auto___35849]));

var G__35853 = (i__5727__auto___35849 + (1));
i__5727__auto___35849 = G__35853;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33898){
var map__33899 = p__33898;
var map__33899__$1 = cljs.core.__destructure_map(map__33899);
var opts = map__33899__$1;
var statearr_33900_35856 = state;
(statearr_33900_35856[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33901_35857 = state;
(statearr_33901_35857[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33902_35859 = state;
(statearr_33902_35859[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33884){
var G__33885 = cljs.core.first(seq33884);
var seq33884__$1 = cljs.core.next(seq33884);
var G__33886 = cljs.core.first(seq33884__$1);
var seq33884__$2 = cljs.core.next(seq33884__$1);
var G__33887 = cljs.core.first(seq33884__$2);
var seq33884__$3 = cljs.core.next(seq33884__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33885,G__33886,G__33887,seq33884__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33906 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33907){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33907 = meta33907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33908,meta33907__$1){
var self__ = this;
var _33908__$1 = this;
return (new cljs.core.async.t_cljs$core$async33906(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33907__$1));
}));

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33908){
var self__ = this;
var _33908__$1 = this;
return self__.meta33907;
}));

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33906.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33907","meta33907",-1420516850,null)], null);
}));

(cljs.core.async.t_cljs$core$async33906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33906");

(cljs.core.async.t_cljs$core$async33906.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33906.
 */
cljs.core.async.__GT_t_cljs$core$async33906 = (function cljs$core$async$__GT_t_cljs$core$async33906(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33907){
return (new cljs.core.async.t_cljs$core$async33906(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33907));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33906(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31897__auto___35872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_33984){
var state_val_33985 = (state_33984[(1)]);
if((state_val_33985 === (7))){
var inst_33944 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
if(cljs.core.truth_(inst_33944)){
var statearr_33986_35873 = state_33984__$1;
(statearr_33986_35873[(1)] = (8));

} else {
var statearr_33995_35874 = state_33984__$1;
(statearr_33995_35874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (20))){
var inst_33937 = (state_33984[(7)]);
var state_33984__$1 = state_33984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33984__$1,(23),out,inst_33937);
} else {
if((state_val_33985 === (1))){
var inst_33920 = calc_state();
var inst_33921 = cljs.core.__destructure_map(inst_33920);
var inst_33922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33921,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33921,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33921,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33925 = inst_33920;
var state_33984__$1 = (function (){var statearr_34008 = state_33984;
(statearr_34008[(8)] = inst_33924);

(statearr_34008[(9)] = inst_33923);

(statearr_34008[(10)] = inst_33922);

(statearr_34008[(11)] = inst_33925);

return statearr_34008;
})();
var statearr_34009_35875 = state_33984__$1;
(statearr_34009_35875[(2)] = null);

(statearr_34009_35875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (24))){
var inst_33928 = (state_33984[(12)]);
var inst_33925 = inst_33928;
var state_33984__$1 = (function (){var statearr_34010 = state_33984;
(statearr_34010[(11)] = inst_33925);

return statearr_34010;
})();
var statearr_34011_35877 = state_33984__$1;
(statearr_34011_35877[(2)] = null);

(statearr_34011_35877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (4))){
var inst_33937 = (state_33984[(7)]);
var inst_33939 = (state_33984[(13)]);
var inst_33936 = (state_33984[(2)]);
var inst_33937__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33936,(0),null);
var inst_33938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33936,(1),null);
var inst_33939__$1 = (inst_33937__$1 == null);
var state_33984__$1 = (function (){var statearr_34026 = state_33984;
(statearr_34026[(14)] = inst_33938);

(statearr_34026[(7)] = inst_33937__$1);

(statearr_34026[(13)] = inst_33939__$1);

return statearr_34026;
})();
if(cljs.core.truth_(inst_33939__$1)){
var statearr_34033_35879 = state_33984__$1;
(statearr_34033_35879[(1)] = (5));

} else {
var statearr_34034_35880 = state_33984__$1;
(statearr_34034_35880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (15))){
var inst_33929 = (state_33984[(15)]);
var inst_33958 = (state_33984[(16)]);
var inst_33958__$1 = cljs.core.empty_QMARK_(inst_33929);
var state_33984__$1 = (function (){var statearr_34035 = state_33984;
(statearr_34035[(16)] = inst_33958__$1);

return statearr_34035;
})();
if(inst_33958__$1){
var statearr_34036_35881 = state_33984__$1;
(statearr_34036_35881[(1)] = (17));

} else {
var statearr_34037_35882 = state_33984__$1;
(statearr_34037_35882[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (21))){
var inst_33928 = (state_33984[(12)]);
var inst_33925 = inst_33928;
var state_33984__$1 = (function (){var statearr_34040 = state_33984;
(statearr_34040[(11)] = inst_33925);

return statearr_34040;
})();
var statearr_34041_35883 = state_33984__$1;
(statearr_34041_35883[(2)] = null);

(statearr_34041_35883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (13))){
var inst_33951 = (state_33984[(2)]);
var inst_33952 = calc_state();
var inst_33925 = inst_33952;
var state_33984__$1 = (function (){var statearr_34042 = state_33984;
(statearr_34042[(17)] = inst_33951);

(statearr_34042[(11)] = inst_33925);

return statearr_34042;
})();
var statearr_34043_35884 = state_33984__$1;
(statearr_34043_35884[(2)] = null);

(statearr_34043_35884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (22))){
var inst_33978 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_34045_35885 = state_33984__$1;
(statearr_34045_35885[(2)] = inst_33978);

(statearr_34045_35885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (6))){
var inst_33938 = (state_33984[(14)]);
var inst_33942 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33938,change);
var state_33984__$1 = state_33984;
var statearr_34046_35886 = state_33984__$1;
(statearr_34046_35886[(2)] = inst_33942);

(statearr_34046_35886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (25))){
var state_33984__$1 = state_33984;
var statearr_34047_35887 = state_33984__$1;
(statearr_34047_35887[(2)] = null);

(statearr_34047_35887[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (17))){
var inst_33938 = (state_33984[(14)]);
var inst_33930 = (state_33984[(18)]);
var inst_33960 = (inst_33930.cljs$core$IFn$_invoke$arity$1 ? inst_33930.cljs$core$IFn$_invoke$arity$1(inst_33938) : inst_33930.call(null,inst_33938));
var inst_33961 = cljs.core.not(inst_33960);
var state_33984__$1 = state_33984;
var statearr_34048_35888 = state_33984__$1;
(statearr_34048_35888[(2)] = inst_33961);

(statearr_34048_35888[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (3))){
var inst_33982 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33984__$1,inst_33982);
} else {
if((state_val_33985 === (12))){
var state_33984__$1 = state_33984;
var statearr_34049_35889 = state_33984__$1;
(statearr_34049_35889[(2)] = null);

(statearr_34049_35889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (2))){
var inst_33925 = (state_33984[(11)]);
var inst_33928 = (state_33984[(12)]);
var inst_33928__$1 = cljs.core.__destructure_map(inst_33925);
var inst_33929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33928__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33928__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33928__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33984__$1 = (function (){var statearr_34050 = state_33984;
(statearr_34050[(18)] = inst_33930);

(statearr_34050[(15)] = inst_33929);

(statearr_34050[(12)] = inst_33928__$1);

return statearr_34050;
})();
return cljs.core.async.ioc_alts_BANG_(state_33984__$1,(4),inst_33931);
} else {
if((state_val_33985 === (23))){
var inst_33969 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
if(cljs.core.truth_(inst_33969)){
var statearr_34051_35894 = state_33984__$1;
(statearr_34051_35894[(1)] = (24));

} else {
var statearr_34052_35895 = state_33984__$1;
(statearr_34052_35895[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (19))){
var inst_33964 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_34053_35896 = state_33984__$1;
(statearr_34053_35896[(2)] = inst_33964);

(statearr_34053_35896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (11))){
var inst_33938 = (state_33984[(14)]);
var inst_33948 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33938);
var state_33984__$1 = state_33984;
var statearr_34057_35897 = state_33984__$1;
(statearr_34057_35897[(2)] = inst_33948);

(statearr_34057_35897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (9))){
var inst_33955 = (state_33984[(19)]);
var inst_33938 = (state_33984[(14)]);
var inst_33929 = (state_33984[(15)]);
var inst_33955__$1 = (inst_33929.cljs$core$IFn$_invoke$arity$1 ? inst_33929.cljs$core$IFn$_invoke$arity$1(inst_33938) : inst_33929.call(null,inst_33938));
var state_33984__$1 = (function (){var statearr_34058 = state_33984;
(statearr_34058[(19)] = inst_33955__$1);

return statearr_34058;
})();
if(cljs.core.truth_(inst_33955__$1)){
var statearr_34059_35899 = state_33984__$1;
(statearr_34059_35899[(1)] = (14));

} else {
var statearr_34060_35900 = state_33984__$1;
(statearr_34060_35900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (5))){
var inst_33939 = (state_33984[(13)]);
var state_33984__$1 = state_33984;
var statearr_34061_35901 = state_33984__$1;
(statearr_34061_35901[(2)] = inst_33939);

(statearr_34061_35901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (14))){
var inst_33955 = (state_33984[(19)]);
var state_33984__$1 = state_33984;
var statearr_34062_35902 = state_33984__$1;
(statearr_34062_35902[(2)] = inst_33955);

(statearr_34062_35902[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (26))){
var inst_33974 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_34063_35903 = state_33984__$1;
(statearr_34063_35903[(2)] = inst_33974);

(statearr_34063_35903[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (16))){
var inst_33966 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
if(cljs.core.truth_(inst_33966)){
var statearr_34064_35904 = state_33984__$1;
(statearr_34064_35904[(1)] = (20));

} else {
var statearr_34065_35905 = state_33984__$1;
(statearr_34065_35905[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (10))){
var inst_33980 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_34066_35906 = state_33984__$1;
(statearr_34066_35906[(2)] = inst_33980);

(statearr_34066_35906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (18))){
var inst_33958 = (state_33984[(16)]);
var state_33984__$1 = state_33984;
var statearr_34067_35907 = state_33984__$1;
(statearr_34067_35907[(2)] = inst_33958);

(statearr_34067_35907[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (8))){
var inst_33937 = (state_33984[(7)]);
var inst_33946 = (inst_33937 == null);
var state_33984__$1 = state_33984;
if(cljs.core.truth_(inst_33946)){
var statearr_34068_35908 = state_33984__$1;
(statearr_34068_35908[(1)] = (11));

} else {
var statearr_34069_35909 = state_33984__$1;
(statearr_34069_35909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31625__auto__ = null;
var cljs$core$async$mix_$_state_machine__31625__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$mix_$_state_machine__31625__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$mix_$_state_machine__31625__auto____1 = (function (state_33984){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_33984);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e34071){var ex__31628__auto__ = e34071;
var statearr_34072_35910 = state_33984;
(statearr_34072_35910[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_33984[(4)]))){
var statearr_34073_35911 = state_33984;
(statearr_34073_35911[(1)] = cljs.core.first((state_33984[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35912 = state_33984;
state_33984 = G__35912;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31625__auto__ = function(state_33984){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31625__auto____1.call(this,state_33984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31625__auto____0;
cljs$core$async$mix_$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31625__auto____1;
return cljs$core$async$mix_$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_34074 = f__31898__auto__();
(statearr_34074[(6)] = c__31897__auto___35872);

return statearr_34074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35914 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35914(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35916 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35916(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35921 = (function() {
var G__35922 = null;
var G__35922__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35922__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35922 = function(p,v){
switch(arguments.length){
case 1:
return G__35922__1.call(this,p);
case 2:
return G__35922__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35922.cljs$core$IFn$_invoke$arity$1 = G__35922__1;
G__35922.cljs$core$IFn$_invoke$arity$2 = G__35922__2;
return G__35922;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34095 = arguments.length;
switch (G__34095) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35921(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35921(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34118 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34119){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34119 = meta34119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34120,meta34119__$1){
var self__ = this;
var _34120__$1 = this;
return (new cljs.core.async.t_cljs$core$async34118(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34119__$1));
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34120){
var self__ = this;
var _34120__$1 = this;
return self__.meta34119;
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34119","meta34119",-1482079878,null)], null);
}));

(cljs.core.async.t_cljs$core$async34118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34118");

(cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34118.
 */
cljs.core.async.__GT_t_cljs$core$async34118 = (function cljs$core$async$__GT_t_cljs$core$async34118(ch,topic_fn,buf_fn,mults,ensure_mult,meta34119){
return (new cljs.core.async.t_cljs$core$async34118(ch,topic_fn,buf_fn,mults,ensure_mult,meta34119));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34101 = arguments.length;
switch (G__34101) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34099_SHARP_){
if(cljs.core.truth_((p1__34099_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34099_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34099_SHARP_.call(null,topic)))){
return p1__34099_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34099_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async34118(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31897__auto___35933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_34246){
var state_val_34247 = (state_34246[(1)]);
if((state_val_34247 === (7))){
var inst_34229 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34248_35935 = state_34246__$1;
(statearr_34248_35935[(2)] = inst_34229);

(statearr_34248_35935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (20))){
var state_34246__$1 = state_34246;
var statearr_34249_35936 = state_34246__$1;
(statearr_34249_35936[(2)] = null);

(statearr_34249_35936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (1))){
var state_34246__$1 = state_34246;
var statearr_34250_35937 = state_34246__$1;
(statearr_34250_35937[(2)] = null);

(statearr_34250_35937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (24))){
var inst_34212 = (state_34246[(7)]);
var inst_34221 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34212);
var state_34246__$1 = state_34246;
var statearr_34251_35938 = state_34246__$1;
(statearr_34251_35938[(2)] = inst_34221);

(statearr_34251_35938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (4))){
var inst_34149 = (state_34246[(8)]);
var inst_34149__$1 = (state_34246[(2)]);
var inst_34150 = (inst_34149__$1 == null);
var state_34246__$1 = (function (){var statearr_34252 = state_34246;
(statearr_34252[(8)] = inst_34149__$1);

return statearr_34252;
})();
if(cljs.core.truth_(inst_34150)){
var statearr_34253_35939 = state_34246__$1;
(statearr_34253_35939[(1)] = (5));

} else {
var statearr_34254_35940 = state_34246__$1;
(statearr_34254_35940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (15))){
var inst_34206 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34255_35941 = state_34246__$1;
(statearr_34255_35941[(2)] = inst_34206);

(statearr_34255_35941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (21))){
var inst_34226 = (state_34246[(2)]);
var state_34246__$1 = (function (){var statearr_34256 = state_34246;
(statearr_34256[(9)] = inst_34226);

return statearr_34256;
})();
var statearr_34257_35942 = state_34246__$1;
(statearr_34257_35942[(2)] = null);

(statearr_34257_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (13))){
var inst_34175 = (state_34246[(10)]);
var inst_34177 = cljs.core.chunked_seq_QMARK_(inst_34175);
var state_34246__$1 = state_34246;
if(inst_34177){
var statearr_34258_35943 = state_34246__$1;
(statearr_34258_35943[(1)] = (16));

} else {
var statearr_34259_35945 = state_34246__$1;
(statearr_34259_35945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (22))){
var inst_34218 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34218)){
var statearr_34262_35949 = state_34246__$1;
(statearr_34262_35949[(1)] = (23));

} else {
var statearr_34263_35950 = state_34246__$1;
(statearr_34263_35950[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (6))){
var inst_34149 = (state_34246[(8)]);
var inst_34212 = (state_34246[(7)]);
var inst_34214 = (state_34246[(11)]);
var inst_34212__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34149) : topic_fn.call(null,inst_34149));
var inst_34213 = cljs.core.deref(mults);
var inst_34214__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34213,inst_34212__$1);
var state_34246__$1 = (function (){var statearr_34264 = state_34246;
(statearr_34264[(7)] = inst_34212__$1);

(statearr_34264[(11)] = inst_34214__$1);

return statearr_34264;
})();
if(cljs.core.truth_(inst_34214__$1)){
var statearr_34265_35951 = state_34246__$1;
(statearr_34265_35951[(1)] = (19));

} else {
var statearr_34266_35952 = state_34246__$1;
(statearr_34266_35952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (25))){
var inst_34223 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34268_35953 = state_34246__$1;
(statearr_34268_35953[(2)] = inst_34223);

(statearr_34268_35953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (17))){
var inst_34175 = (state_34246[(10)]);
var inst_34184 = cljs.core.first(inst_34175);
var inst_34185 = cljs.core.async.muxch_STAR_(inst_34184);
var inst_34186 = cljs.core.async.close_BANG_(inst_34185);
var inst_34200 = cljs.core.next(inst_34175);
var inst_34159 = inst_34200;
var inst_34160 = null;
var inst_34161 = (0);
var inst_34162 = (0);
var state_34246__$1 = (function (){var statearr_34270 = state_34246;
(statearr_34270[(12)] = inst_34160);

(statearr_34270[(13)] = inst_34161);

(statearr_34270[(14)] = inst_34186);

(statearr_34270[(15)] = inst_34159);

(statearr_34270[(16)] = inst_34162);

return statearr_34270;
})();
var statearr_34271_35954 = state_34246__$1;
(statearr_34271_35954[(2)] = null);

(statearr_34271_35954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (3))){
var inst_34231 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34246__$1,inst_34231);
} else {
if((state_val_34247 === (12))){
var inst_34208 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34272_35955 = state_34246__$1;
(statearr_34272_35955[(2)] = inst_34208);

(statearr_34272_35955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (2))){
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34246__$1,(4),ch);
} else {
if((state_val_34247 === (23))){
var state_34246__$1 = state_34246;
var statearr_34273_35956 = state_34246__$1;
(statearr_34273_35956[(2)] = null);

(statearr_34273_35956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (19))){
var inst_34149 = (state_34246[(8)]);
var inst_34214 = (state_34246[(11)]);
var inst_34216 = cljs.core.async.muxch_STAR_(inst_34214);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34246__$1,(22),inst_34216,inst_34149);
} else {
if((state_val_34247 === (11))){
var inst_34175 = (state_34246[(10)]);
var inst_34159 = (state_34246[(15)]);
var inst_34175__$1 = cljs.core.seq(inst_34159);
var state_34246__$1 = (function (){var statearr_34281 = state_34246;
(statearr_34281[(10)] = inst_34175__$1);

return statearr_34281;
})();
if(inst_34175__$1){
var statearr_34282_35957 = state_34246__$1;
(statearr_34282_35957[(1)] = (13));

} else {
var statearr_34283_35959 = state_34246__$1;
(statearr_34283_35959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (9))){
var inst_34210 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34285_35960 = state_34246__$1;
(statearr_34285_35960[(2)] = inst_34210);

(statearr_34285_35960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (5))){
var inst_34156 = cljs.core.deref(mults);
var inst_34157 = cljs.core.vals(inst_34156);
var inst_34158 = cljs.core.seq(inst_34157);
var inst_34159 = inst_34158;
var inst_34160 = null;
var inst_34161 = (0);
var inst_34162 = (0);
var state_34246__$1 = (function (){var statearr_34286 = state_34246;
(statearr_34286[(12)] = inst_34160);

(statearr_34286[(13)] = inst_34161);

(statearr_34286[(15)] = inst_34159);

(statearr_34286[(16)] = inst_34162);

return statearr_34286;
})();
var statearr_34296_35962 = state_34246__$1;
(statearr_34296_35962[(2)] = null);

(statearr_34296_35962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (14))){
var state_34246__$1 = state_34246;
var statearr_34304_35963 = state_34246__$1;
(statearr_34304_35963[(2)] = null);

(statearr_34304_35963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (16))){
var inst_34175 = (state_34246[(10)]);
var inst_34179 = cljs.core.chunk_first(inst_34175);
var inst_34180 = cljs.core.chunk_rest(inst_34175);
var inst_34181 = cljs.core.count(inst_34179);
var inst_34159 = inst_34180;
var inst_34160 = inst_34179;
var inst_34161 = inst_34181;
var inst_34162 = (0);
var state_34246__$1 = (function (){var statearr_34312 = state_34246;
(statearr_34312[(12)] = inst_34160);

(statearr_34312[(13)] = inst_34161);

(statearr_34312[(15)] = inst_34159);

(statearr_34312[(16)] = inst_34162);

return statearr_34312;
})();
var statearr_34313_35964 = state_34246__$1;
(statearr_34313_35964[(2)] = null);

(statearr_34313_35964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (10))){
var inst_34160 = (state_34246[(12)]);
var inst_34161 = (state_34246[(13)]);
var inst_34159 = (state_34246[(15)]);
var inst_34162 = (state_34246[(16)]);
var inst_34169 = cljs.core._nth(inst_34160,inst_34162);
var inst_34170 = cljs.core.async.muxch_STAR_(inst_34169);
var inst_34171 = cljs.core.async.close_BANG_(inst_34170);
var inst_34172 = (inst_34162 + (1));
var tmp34301 = inst_34160;
var tmp34302 = inst_34161;
var tmp34303 = inst_34159;
var inst_34159__$1 = tmp34303;
var inst_34160__$1 = tmp34301;
var inst_34161__$1 = tmp34302;
var inst_34162__$1 = inst_34172;
var state_34246__$1 = (function (){var statearr_34315 = state_34246;
(statearr_34315[(17)] = inst_34171);

(statearr_34315[(12)] = inst_34160__$1);

(statearr_34315[(13)] = inst_34161__$1);

(statearr_34315[(15)] = inst_34159__$1);

(statearr_34315[(16)] = inst_34162__$1);

return statearr_34315;
})();
var statearr_34316_35967 = state_34246__$1;
(statearr_34316_35967[(2)] = null);

(statearr_34316_35967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (18))){
var inst_34203 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34319_35968 = state_34246__$1;
(statearr_34319_35968[(2)] = inst_34203);

(statearr_34319_35968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (8))){
var inst_34161 = (state_34246[(13)]);
var inst_34162 = (state_34246[(16)]);
var inst_34166 = (inst_34162 < inst_34161);
var inst_34167 = inst_34166;
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34167)){
var statearr_34325_35971 = state_34246__$1;
(statearr_34325_35971[(1)] = (10));

} else {
var statearr_34326_35972 = state_34246__$1;
(statearr_34326_35972[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_34332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34332[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_34332[(1)] = (1));

return statearr_34332;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_34246){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_34246);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e34333){var ex__31628__auto__ = e34333;
var statearr_34334_35976 = state_34246;
(statearr_34334_35976[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_34246[(4)]))){
var statearr_34335_35977 = state_34246;
(statearr_34335_35977[(1)] = cljs.core.first((state_34246[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35978 = state_34246;
state_34246 = G__35978;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_34246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_34246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_34337 = f__31898__auto__();
(statearr_34337[(6)] = c__31897__auto___35933);

return statearr_34337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34347 = arguments.length;
switch (G__34347) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34355 = arguments.length;
switch (G__34355) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34362 = arguments.length;
switch (G__34362) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31897__auto___35987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_34424){
var state_val_34425 = (state_34424[(1)]);
if((state_val_34425 === (7))){
var state_34424__$1 = state_34424;
var statearr_34432_35988 = state_34424__$1;
(statearr_34432_35988[(2)] = null);

(statearr_34432_35988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (1))){
var state_34424__$1 = state_34424;
var statearr_34433_35990 = state_34424__$1;
(statearr_34433_35990[(2)] = null);

(statearr_34433_35990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (4))){
var inst_34379 = (state_34424[(7)]);
var inst_34378 = (state_34424[(8)]);
var inst_34381 = (inst_34379 < inst_34378);
var state_34424__$1 = state_34424;
if(cljs.core.truth_(inst_34381)){
var statearr_34434_35991 = state_34424__$1;
(statearr_34434_35991[(1)] = (6));

} else {
var statearr_34435_35992 = state_34424__$1;
(statearr_34435_35992[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (15))){
var inst_34410 = (state_34424[(9)]);
var inst_34415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34410);
var state_34424__$1 = state_34424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34424__$1,(17),out,inst_34415);
} else {
if((state_val_34425 === (13))){
var inst_34410 = (state_34424[(9)]);
var inst_34410__$1 = (state_34424[(2)]);
var inst_34411 = cljs.core.some(cljs.core.nil_QMARK_,inst_34410__$1);
var state_34424__$1 = (function (){var statearr_34437 = state_34424;
(statearr_34437[(9)] = inst_34410__$1);

return statearr_34437;
})();
if(cljs.core.truth_(inst_34411)){
var statearr_34438_35996 = state_34424__$1;
(statearr_34438_35996[(1)] = (14));

} else {
var statearr_34439_35997 = state_34424__$1;
(statearr_34439_35997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (6))){
var state_34424__$1 = state_34424;
var statearr_34441_35998 = state_34424__$1;
(statearr_34441_35998[(2)] = null);

(statearr_34441_35998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (17))){
var inst_34417 = (state_34424[(2)]);
var state_34424__$1 = (function (){var statearr_34443 = state_34424;
(statearr_34443[(10)] = inst_34417);

return statearr_34443;
})();
var statearr_34444_36000 = state_34424__$1;
(statearr_34444_36000[(2)] = null);

(statearr_34444_36000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (3))){
var inst_34422 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34424__$1,inst_34422);
} else {
if((state_val_34425 === (12))){
var _ = (function (){var statearr_34450 = state_34424;
(statearr_34450[(4)] = cljs.core.rest((state_34424[(4)])));

return statearr_34450;
})();
var state_34424__$1 = state_34424;
var ex34442 = (state_34424__$1[(2)]);
var statearr_34456_36001 = state_34424__$1;
(statearr_34456_36001[(5)] = ex34442);


if((ex34442 instanceof Object)){
var statearr_34457_36006 = state_34424__$1;
(statearr_34457_36006[(1)] = (11));

(statearr_34457_36006[(5)] = null);

} else {
throw ex34442;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (2))){
var inst_34377 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34378 = cnt;
var inst_34379 = (0);
var state_34424__$1 = (function (){var statearr_34460 = state_34424;
(statearr_34460[(11)] = inst_34377);

(statearr_34460[(7)] = inst_34379);

(statearr_34460[(8)] = inst_34378);

return statearr_34460;
})();
var statearr_34461_36010 = state_34424__$1;
(statearr_34461_36010[(2)] = null);

(statearr_34461_36010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (11))){
var inst_34383 = (state_34424[(2)]);
var inst_34384 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34424__$1 = (function (){var statearr_34467 = state_34424;
(statearr_34467[(12)] = inst_34383);

return statearr_34467;
})();
var statearr_34468_36012 = state_34424__$1;
(statearr_34468_36012[(2)] = inst_34384);

(statearr_34468_36012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (9))){
var inst_34379 = (state_34424[(7)]);
var _ = (function (){var statearr_34469 = state_34424;
(statearr_34469[(4)] = cljs.core.cons((12),(state_34424[(4)])));

return statearr_34469;
})();
var inst_34396 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34379) : chs__$1.call(null,inst_34379));
var inst_34397 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34379) : done.call(null,inst_34379));
var inst_34398 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34396,inst_34397);
var ___$1 = (function (){var statearr_34470 = state_34424;
(statearr_34470[(4)] = cljs.core.rest((state_34424[(4)])));

return statearr_34470;
})();
var state_34424__$1 = state_34424;
var statearr_34471_36016 = state_34424__$1;
(statearr_34471_36016[(2)] = inst_34398);

(statearr_34471_36016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (5))){
var inst_34408 = (state_34424[(2)]);
var state_34424__$1 = (function (){var statearr_34472 = state_34424;
(statearr_34472[(13)] = inst_34408);

return statearr_34472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34424__$1,(13),dchan);
} else {
if((state_val_34425 === (14))){
var inst_34413 = cljs.core.async.close_BANG_(out);
var state_34424__$1 = state_34424;
var statearr_34473_36018 = state_34424__$1;
(statearr_34473_36018[(2)] = inst_34413);

(statearr_34473_36018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (16))){
var inst_34420 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
var statearr_34474_36023 = state_34424__$1;
(statearr_34474_36023[(2)] = inst_34420);

(statearr_34474_36023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (10))){
var inst_34379 = (state_34424[(7)]);
var inst_34401 = (state_34424[(2)]);
var inst_34402 = (inst_34379 + (1));
var inst_34379__$1 = inst_34402;
var state_34424__$1 = (function (){var statearr_34475 = state_34424;
(statearr_34475[(7)] = inst_34379__$1);

(statearr_34475[(14)] = inst_34401);

return statearr_34475;
})();
var statearr_34476_36025 = state_34424__$1;
(statearr_34476_36025[(2)] = null);

(statearr_34476_36025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34425 === (8))){
var inst_34406 = (state_34424[(2)]);
var state_34424__$1 = state_34424;
var statearr_34477_36027 = state_34424__$1;
(statearr_34477_36027[(2)] = inst_34406);

(statearr_34477_36027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_34478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34478[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_34478[(1)] = (1));

return statearr_34478;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_34424){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_34424);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e34479){var ex__31628__auto__ = e34479;
var statearr_34480_36032 = state_34424;
(statearr_34480_36032[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_34424[(4)]))){
var statearr_34485_36033 = state_34424;
(statearr_34485_36033[(1)] = cljs.core.first((state_34424[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36035 = state_34424;
state_34424 = G__36035;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_34424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_34424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_34486 = f__31898__auto__();
(statearr_34486[(6)] = c__31897__auto___35987);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34499 = arguments.length;
switch (G__34499) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31897__auto___36039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_34534){
var state_val_34535 = (state_34534[(1)]);
if((state_val_34535 === (7))){
var inst_34513 = (state_34534[(7)]);
var inst_34514 = (state_34534[(8)]);
var inst_34513__$1 = (state_34534[(2)]);
var inst_34514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34513__$1,(0),null);
var inst_34515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34513__$1,(1),null);
var inst_34516 = (inst_34514__$1 == null);
var state_34534__$1 = (function (){var statearr_34536 = state_34534;
(statearr_34536[(7)] = inst_34513__$1);

(statearr_34536[(9)] = inst_34515);

(statearr_34536[(8)] = inst_34514__$1);

return statearr_34536;
})();
if(cljs.core.truth_(inst_34516)){
var statearr_34537_36045 = state_34534__$1;
(statearr_34537_36045[(1)] = (8));

} else {
var statearr_34538_36046 = state_34534__$1;
(statearr_34538_36046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34535 === (1))){
var inst_34503 = cljs.core.vec(chs);
var inst_34504 = inst_34503;
var state_34534__$1 = (function (){var statearr_34539 = state_34534;
(statearr_34539[(10)] = inst_34504);

return statearr_34539;
})();
var statearr_34540_36048 = state_34534__$1;
(statearr_34540_36048[(2)] = null);

(statearr_34540_36048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34535 === (4))){
var inst_34504 = (state_34534[(10)]);
var state_34534__$1 = state_34534;
return cljs.core.async.ioc_alts_BANG_(state_34534__$1,(7),inst_34504);
} else {
if((state_val_34535 === (6))){
var inst_34530 = (state_34534[(2)]);
var state_34534__$1 = state_34534;
var statearr_34542_36050 = state_34534__$1;
(statearr_34542_36050[(2)] = inst_34530);

(statearr_34542_36050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34535 === (3))){
var inst_34532 = (state_34534[(2)]);
var state_34534__$1 = state_34534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34534__$1,inst_34532);
} else {
if((state_val_34535 === (2))){
var inst_34504 = (state_34534[(10)]);
var inst_34506 = cljs.core.count(inst_34504);
var inst_34507 = (inst_34506 > (0));
var state_34534__$1 = state_34534;
if(cljs.core.truth_(inst_34507)){
var statearr_34544_36051 = state_34534__$1;
(statearr_34544_36051[(1)] = (4));

} else {
var statearr_34545_36052 = state_34534__$1;
(statearr_34545_36052[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34535 === (11))){
var inst_34504 = (state_34534[(10)]);
var inst_34523 = (state_34534[(2)]);
var tmp34543 = inst_34504;
var inst_34504__$1 = tmp34543;
var state_34534__$1 = (function (){var statearr_34546 = state_34534;
(statearr_34546[(11)] = inst_34523);

(statearr_34546[(10)] = inst_34504__$1);

return statearr_34546;
})();
var statearr_34550_36053 = state_34534__$1;
(statearr_34550_36053[(2)] = null);

(statearr_34550_36053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34535 === (9))){
var inst_34514 = (state_34534[(8)]);
var state_34534__$1 = state_34534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34534__$1,(11),out,inst_34514);
} else {
if((state_val_34535 === (5))){
var inst_34528 = cljs.core.async.close_BANG_(out);
var state_34534__$1 = state_34534;
var statearr_34554_36054 = state_34534__$1;
(statearr_34554_36054[(2)] = inst_34528);

(statearr_34554_36054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34535 === (10))){
var inst_34526 = (state_34534[(2)]);
var state_34534__$1 = state_34534;
var statearr_34555_36055 = state_34534__$1;
(statearr_34555_36055[(2)] = inst_34526);

(statearr_34555_36055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34535 === (8))){
var inst_34513 = (state_34534[(7)]);
var inst_34515 = (state_34534[(9)]);
var inst_34514 = (state_34534[(8)]);
var inst_34504 = (state_34534[(10)]);
var inst_34518 = (function (){var cs = inst_34504;
var vec__34509 = inst_34513;
var v = inst_34514;
var c = inst_34515;
return (function (p1__34487_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34487_SHARP_);
});
})();
var inst_34519 = cljs.core.filterv(inst_34518,inst_34504);
var inst_34504__$1 = inst_34519;
var state_34534__$1 = (function (){var statearr_34556 = state_34534;
(statearr_34556[(10)] = inst_34504__$1);

return statearr_34556;
})();
var statearr_34557_36058 = state_34534__$1;
(statearr_34557_36058[(2)] = null);

(statearr_34557_36058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_34558 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34558[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_34558[(1)] = (1));

return statearr_34558;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_34534){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_34534);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e34559){var ex__31628__auto__ = e34559;
var statearr_34560_36065 = state_34534;
(statearr_34560_36065[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_34534[(4)]))){
var statearr_34561_36067 = state_34534;
(statearr_34561_36067[(1)] = cljs.core.first((state_34534[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36068 = state_34534;
state_34534 = G__36068;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_34534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_34534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_34562 = f__31898__auto__();
(statearr_34562[(6)] = c__31897__auto___36039);

return statearr_34562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34565 = arguments.length;
switch (G__34565) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31897__auto___36076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_34597){
var state_val_34598 = (state_34597[(1)]);
if((state_val_34598 === (7))){
var inst_34575 = (state_34597[(7)]);
var inst_34575__$1 = (state_34597[(2)]);
var inst_34576 = (inst_34575__$1 == null);
var inst_34577 = cljs.core.not(inst_34576);
var state_34597__$1 = (function (){var statearr_34599 = state_34597;
(statearr_34599[(7)] = inst_34575__$1);

return statearr_34599;
})();
if(inst_34577){
var statearr_34600_36077 = state_34597__$1;
(statearr_34600_36077[(1)] = (8));

} else {
var statearr_34601_36078 = state_34597__$1;
(statearr_34601_36078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (1))){
var inst_34570 = (0);
var state_34597__$1 = (function (){var statearr_34602 = state_34597;
(statearr_34602[(8)] = inst_34570);

return statearr_34602;
})();
var statearr_34603_36080 = state_34597__$1;
(statearr_34603_36080[(2)] = null);

(statearr_34603_36080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (4))){
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34597__$1,(7),ch);
} else {
if((state_val_34598 === (6))){
var inst_34592 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34604_36083 = state_34597__$1;
(statearr_34604_36083[(2)] = inst_34592);

(statearr_34604_36083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (3))){
var inst_34594 = (state_34597[(2)]);
var inst_34595 = cljs.core.async.close_BANG_(out);
var state_34597__$1 = (function (){var statearr_34605 = state_34597;
(statearr_34605[(9)] = inst_34594);

return statearr_34605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34597__$1,inst_34595);
} else {
if((state_val_34598 === (2))){
var inst_34570 = (state_34597[(8)]);
var inst_34572 = (inst_34570 < n);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34572)){
var statearr_34606_36086 = state_34597__$1;
(statearr_34606_36086[(1)] = (4));

} else {
var statearr_34607_36087 = state_34597__$1;
(statearr_34607_36087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (11))){
var inst_34570 = (state_34597[(8)]);
var inst_34580 = (state_34597[(2)]);
var inst_34581 = (inst_34570 + (1));
var inst_34570__$1 = inst_34581;
var state_34597__$1 = (function (){var statearr_34608 = state_34597;
(statearr_34608[(8)] = inst_34570__$1);

(statearr_34608[(10)] = inst_34580);

return statearr_34608;
})();
var statearr_34609_36089 = state_34597__$1;
(statearr_34609_36089[(2)] = null);

(statearr_34609_36089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (9))){
var state_34597__$1 = state_34597;
var statearr_34610_36090 = state_34597__$1;
(statearr_34610_36090[(2)] = null);

(statearr_34610_36090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (5))){
var state_34597__$1 = state_34597;
var statearr_34613_36091 = state_34597__$1;
(statearr_34613_36091[(2)] = null);

(statearr_34613_36091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (10))){
var inst_34585 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34614_36092 = state_34597__$1;
(statearr_34614_36092[(2)] = inst_34585);

(statearr_34614_36092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (8))){
var inst_34575 = (state_34597[(7)]);
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34597__$1,(11),out,inst_34575);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_34615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34615[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_34615[(1)] = (1));

return statearr_34615;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_34597){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_34597);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e34616){var ex__31628__auto__ = e34616;
var statearr_34617_36093 = state_34597;
(statearr_34617_36093[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_34597[(4)]))){
var statearr_34618_36094 = state_34597;
(statearr_34618_36094[(1)] = cljs.core.first((state_34597[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36095 = state_34597;
state_34597 = G__36095;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_34597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_34597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_34619 = f__31898__auto__();
(statearr_34619[(6)] = c__31897__auto___36076);

return statearr_34619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34624 = (function (f,ch,meta34622,_,fn1,meta34625){
this.f = f;
this.ch = ch;
this.meta34622 = meta34622;
this._ = _;
this.fn1 = fn1;
this.meta34625 = meta34625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34626,meta34625__$1){
var self__ = this;
var _34626__$1 = this;
return (new cljs.core.async.t_cljs$core$async34624(self__.f,self__.ch,self__.meta34622,self__._,self__.fn1,meta34625__$1));
}));

(cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34626){
var self__ = this;
var _34626__$1 = this;
return self__.meta34625;
}));

(cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34620_SHARP_){
var G__34627 = (((p1__34620_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34620_SHARP_) : self__.f.call(null,p1__34620_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34627) : f1.call(null,G__34627));
});
}));

(cljs.core.async.t_cljs$core$async34624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34622","meta34622",697153054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34621","cljs.core.async/t_cljs$core$async34621",951968432,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34625","meta34625",1420737460,null)], null);
}));

(cljs.core.async.t_cljs$core$async34624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34624");

(cljs.core.async.t_cljs$core$async34624.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34624.
 */
cljs.core.async.__GT_t_cljs$core$async34624 = (function cljs$core$async$__GT_t_cljs$core$async34624(f,ch,meta34622,_,fn1,meta34625){
return (new cljs.core.async.t_cljs$core$async34624(f,ch,meta34622,_,fn1,meta34625));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34621 = (function (f,ch,meta34622){
this.f = f;
this.ch = ch;
this.meta34622 = meta34622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34623,meta34622__$1){
var self__ = this;
var _34623__$1 = this;
return (new cljs.core.async.t_cljs$core$async34621(self__.f,self__.ch,meta34622__$1));
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34623){
var self__ = this;
var _34623__$1 = this;
return self__.meta34622;
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34624(self__.f,self__.ch,self__.meta34622,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34628 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34628) : self__.f.call(null,G__34628));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34622","meta34622",697153054,null)], null);
}));

(cljs.core.async.t_cljs$core$async34621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34621");

(cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34621.
 */
cljs.core.async.__GT_t_cljs$core$async34621 = (function cljs$core$async$__GT_t_cljs$core$async34621(f,ch,meta34622){
return (new cljs.core.async.t_cljs$core$async34621(f,ch,meta34622));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34621(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34629 = (function (f,ch,meta34630){
this.f = f;
this.ch = ch;
this.meta34630 = meta34630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34631,meta34630__$1){
var self__ = this;
var _34631__$1 = this;
return (new cljs.core.async.t_cljs$core$async34629(self__.f,self__.ch,meta34630__$1));
}));

(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34631){
var self__ = this;
var _34631__$1 = this;
return self__.meta34630;
}));

(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34630","meta34630",-1080849325,null)], null);
}));

(cljs.core.async.t_cljs$core$async34629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34629");

(cljs.core.async.t_cljs$core$async34629.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34629.
 */
cljs.core.async.__GT_t_cljs$core$async34629 = (function cljs$core$async$__GT_t_cljs$core$async34629(f,ch,meta34630){
return (new cljs.core.async.t_cljs$core$async34629(f,ch,meta34630));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34629(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34636 = (function (p,ch,meta34637){
this.p = p;
this.ch = ch;
this.meta34637 = meta34637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34638,meta34637__$1){
var self__ = this;
var _34638__$1 = this;
return (new cljs.core.async.t_cljs$core$async34636(self__.p,self__.ch,meta34637__$1));
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34638){
var self__ = this;
var _34638__$1 = this;
return self__.meta34637;
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34637","meta34637",561371421,null)], null);
}));

(cljs.core.async.t_cljs$core$async34636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34636");

(cljs.core.async.t_cljs$core$async34636.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34636.
 */
cljs.core.async.__GT_t_cljs$core$async34636 = (function cljs$core$async$__GT_t_cljs$core$async34636(p,ch,meta34637){
return (new cljs.core.async.t_cljs$core$async34636(p,ch,meta34637));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34636(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34644 = arguments.length;
switch (G__34644) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31897__auto___36132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_34668){
var state_val_34669 = (state_34668[(1)]);
if((state_val_34669 === (7))){
var inst_34664 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34670_36137 = state_34668__$1;
(statearr_34670_36137[(2)] = inst_34664);

(statearr_34670_36137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (1))){
var state_34668__$1 = state_34668;
var statearr_34671_36138 = state_34668__$1;
(statearr_34671_36138[(2)] = null);

(statearr_34671_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (4))){
var inst_34647 = (state_34668[(7)]);
var inst_34647__$1 = (state_34668[(2)]);
var inst_34651 = (inst_34647__$1 == null);
var state_34668__$1 = (function (){var statearr_34672 = state_34668;
(statearr_34672[(7)] = inst_34647__$1);

return statearr_34672;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34673_36140 = state_34668__$1;
(statearr_34673_36140[(1)] = (5));

} else {
var statearr_34674_36141 = state_34668__$1;
(statearr_34674_36141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (6))){
var inst_34647 = (state_34668[(7)]);
var inst_34655 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34647) : p.call(null,inst_34647));
var state_34668__$1 = state_34668;
if(cljs.core.truth_(inst_34655)){
var statearr_34675_36147 = state_34668__$1;
(statearr_34675_36147[(1)] = (8));

} else {
var statearr_34676_36148 = state_34668__$1;
(statearr_34676_36148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (3))){
var inst_34666 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34668__$1,inst_34666);
} else {
if((state_val_34669 === (2))){
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34668__$1,(4),ch);
} else {
if((state_val_34669 === (11))){
var inst_34658 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34677_36153 = state_34668__$1;
(statearr_34677_36153[(2)] = inst_34658);

(statearr_34677_36153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (9))){
var state_34668__$1 = state_34668;
var statearr_34678_36164 = state_34668__$1;
(statearr_34678_36164[(2)] = null);

(statearr_34678_36164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(out);
var state_34668__$1 = state_34668;
var statearr_34679_36165 = state_34668__$1;
(statearr_34679_36165[(2)] = inst_34653);

(statearr_34679_36165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (10))){
var inst_34661 = (state_34668[(2)]);
var state_34668__$1 = (function (){var statearr_34680 = state_34668;
(statearr_34680[(8)] = inst_34661);

return statearr_34680;
})();
var statearr_34681_36166 = state_34668__$1;
(statearr_34681_36166[(2)] = null);

(statearr_34681_36166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (8))){
var inst_34647 = (state_34668[(7)]);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34668__$1,(11),out,inst_34647);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_34682 = [null,null,null,null,null,null,null,null,null];
(statearr_34682[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_34682[(1)] = (1));

return statearr_34682;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_34668){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_34668);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e34683){var ex__31628__auto__ = e34683;
var statearr_34684_36174 = state_34668;
(statearr_34684_36174[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_34668[(4)]))){
var statearr_34685_36175 = state_34668;
(statearr_34685_36175[(1)] = cljs.core.first((state_34668[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36183 = state_34668;
state_34668 = G__36183;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_34668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_34668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_34686 = f__31898__auto__();
(statearr_34686[(6)] = c__31897__auto___36132);

return statearr_34686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34691 = arguments.length;
switch (G__34691) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_34753){
var state_val_34754 = (state_34753[(1)]);
if((state_val_34754 === (7))){
var inst_34749 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
var statearr_34755_36192 = state_34753__$1;
(statearr_34755_36192[(2)] = inst_34749);

(statearr_34755_36192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (20))){
var inst_34719 = (state_34753[(7)]);
var inst_34730 = (state_34753[(2)]);
var inst_34731 = cljs.core.next(inst_34719);
var inst_34705 = inst_34731;
var inst_34706 = null;
var inst_34707 = (0);
var inst_34708 = (0);
var state_34753__$1 = (function (){var statearr_34756 = state_34753;
(statearr_34756[(8)] = inst_34730);

(statearr_34756[(9)] = inst_34706);

(statearr_34756[(10)] = inst_34708);

(statearr_34756[(11)] = inst_34707);

(statearr_34756[(12)] = inst_34705);

return statearr_34756;
})();
var statearr_34757_36194 = state_34753__$1;
(statearr_34757_36194[(2)] = null);

(statearr_34757_36194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (1))){
var state_34753__$1 = state_34753;
var statearr_34758_36195 = state_34753__$1;
(statearr_34758_36195[(2)] = null);

(statearr_34758_36195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (4))){
var inst_34694 = (state_34753[(13)]);
var inst_34694__$1 = (state_34753[(2)]);
var inst_34695 = (inst_34694__$1 == null);
var state_34753__$1 = (function (){var statearr_34759 = state_34753;
(statearr_34759[(13)] = inst_34694__$1);

return statearr_34759;
})();
if(cljs.core.truth_(inst_34695)){
var statearr_34760_36196 = state_34753__$1;
(statearr_34760_36196[(1)] = (5));

} else {
var statearr_34761_36197 = state_34753__$1;
(statearr_34761_36197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (15))){
var state_34753__$1 = state_34753;
var statearr_34765_36198 = state_34753__$1;
(statearr_34765_36198[(2)] = null);

(statearr_34765_36198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (21))){
var state_34753__$1 = state_34753;
var statearr_34770_36199 = state_34753__$1;
(statearr_34770_36199[(2)] = null);

(statearr_34770_36199[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (13))){
var inst_34706 = (state_34753[(9)]);
var inst_34708 = (state_34753[(10)]);
var inst_34707 = (state_34753[(11)]);
var inst_34705 = (state_34753[(12)]);
var inst_34715 = (state_34753[(2)]);
var inst_34716 = (inst_34708 + (1));
var tmp34762 = inst_34706;
var tmp34763 = inst_34707;
var tmp34764 = inst_34705;
var inst_34705__$1 = tmp34764;
var inst_34706__$1 = tmp34762;
var inst_34707__$1 = tmp34763;
var inst_34708__$1 = inst_34716;
var state_34753__$1 = (function (){var statearr_34771 = state_34753;
(statearr_34771[(9)] = inst_34706__$1);

(statearr_34771[(10)] = inst_34708__$1);

(statearr_34771[(14)] = inst_34715);

(statearr_34771[(11)] = inst_34707__$1);

(statearr_34771[(12)] = inst_34705__$1);

return statearr_34771;
})();
var statearr_34772_36200 = state_34753__$1;
(statearr_34772_36200[(2)] = null);

(statearr_34772_36200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (22))){
var state_34753__$1 = state_34753;
var statearr_34777_36201 = state_34753__$1;
(statearr_34777_36201[(2)] = null);

(statearr_34777_36201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (6))){
var inst_34694 = (state_34753[(13)]);
var inst_34703 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34694) : f.call(null,inst_34694));
var inst_34704 = cljs.core.seq(inst_34703);
var inst_34705 = inst_34704;
var inst_34706 = null;
var inst_34707 = (0);
var inst_34708 = (0);
var state_34753__$1 = (function (){var statearr_34778 = state_34753;
(statearr_34778[(9)] = inst_34706);

(statearr_34778[(10)] = inst_34708);

(statearr_34778[(11)] = inst_34707);

(statearr_34778[(12)] = inst_34705);

return statearr_34778;
})();
var statearr_34779_36202 = state_34753__$1;
(statearr_34779_36202[(2)] = null);

(statearr_34779_36202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (17))){
var inst_34719 = (state_34753[(7)]);
var inst_34723 = cljs.core.chunk_first(inst_34719);
var inst_34724 = cljs.core.chunk_rest(inst_34719);
var inst_34725 = cljs.core.count(inst_34723);
var inst_34705 = inst_34724;
var inst_34706 = inst_34723;
var inst_34707 = inst_34725;
var inst_34708 = (0);
var state_34753__$1 = (function (){var statearr_34780 = state_34753;
(statearr_34780[(9)] = inst_34706);

(statearr_34780[(10)] = inst_34708);

(statearr_34780[(11)] = inst_34707);

(statearr_34780[(12)] = inst_34705);

return statearr_34780;
})();
var statearr_34781_36203 = state_34753__$1;
(statearr_34781_36203[(2)] = null);

(statearr_34781_36203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (3))){
var inst_34751 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34753__$1,inst_34751);
} else {
if((state_val_34754 === (12))){
var inst_34739 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
var statearr_34782_36204 = state_34753__$1;
(statearr_34782_36204[(2)] = inst_34739);

(statearr_34782_36204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (2))){
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34753__$1,(4),in$);
} else {
if((state_val_34754 === (23))){
var inst_34747 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
var statearr_34783_36206 = state_34753__$1;
(statearr_34783_36206[(2)] = inst_34747);

(statearr_34783_36206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (19))){
var inst_34734 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
var statearr_34784_36207 = state_34753__$1;
(statearr_34784_36207[(2)] = inst_34734);

(statearr_34784_36207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (11))){
var inst_34719 = (state_34753[(7)]);
var inst_34705 = (state_34753[(12)]);
var inst_34719__$1 = cljs.core.seq(inst_34705);
var state_34753__$1 = (function (){var statearr_34787 = state_34753;
(statearr_34787[(7)] = inst_34719__$1);

return statearr_34787;
})();
if(inst_34719__$1){
var statearr_34788_36208 = state_34753__$1;
(statearr_34788_36208[(1)] = (14));

} else {
var statearr_34789_36209 = state_34753__$1;
(statearr_34789_36209[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (9))){
var inst_34741 = (state_34753[(2)]);
var inst_34742 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34753__$1 = (function (){var statearr_34790 = state_34753;
(statearr_34790[(15)] = inst_34741);

return statearr_34790;
})();
if(cljs.core.truth_(inst_34742)){
var statearr_34791_36210 = state_34753__$1;
(statearr_34791_36210[(1)] = (21));

} else {
var statearr_34792_36211 = state_34753__$1;
(statearr_34792_36211[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (5))){
var inst_34697 = cljs.core.async.close_BANG_(out);
var state_34753__$1 = state_34753;
var statearr_34793_36212 = state_34753__$1;
(statearr_34793_36212[(2)] = inst_34697);

(statearr_34793_36212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (14))){
var inst_34719 = (state_34753[(7)]);
var inst_34721 = cljs.core.chunked_seq_QMARK_(inst_34719);
var state_34753__$1 = state_34753;
if(inst_34721){
var statearr_34798_36213 = state_34753__$1;
(statearr_34798_36213[(1)] = (17));

} else {
var statearr_34799_36214 = state_34753__$1;
(statearr_34799_36214[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (16))){
var inst_34737 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
var statearr_34800_36215 = state_34753__$1;
(statearr_34800_36215[(2)] = inst_34737);

(statearr_34800_36215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (10))){
var inst_34706 = (state_34753[(9)]);
var inst_34708 = (state_34753[(10)]);
var inst_34713 = cljs.core._nth(inst_34706,inst_34708);
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34753__$1,(13),out,inst_34713);
} else {
if((state_val_34754 === (18))){
var inst_34719 = (state_34753[(7)]);
var inst_34728 = cljs.core.first(inst_34719);
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34753__$1,(20),out,inst_34728);
} else {
if((state_val_34754 === (8))){
var inst_34708 = (state_34753[(10)]);
var inst_34707 = (state_34753[(11)]);
var inst_34710 = (inst_34708 < inst_34707);
var inst_34711 = inst_34710;
var state_34753__$1 = state_34753;
if(cljs.core.truth_(inst_34711)){
var statearr_34801_36219 = state_34753__$1;
(statearr_34801_36219[(1)] = (10));

} else {
var statearr_34802_36221 = state_34753__$1;
(statearr_34802_36221[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31625__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31625__auto____0 = (function (){
var statearr_34804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34804[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31625__auto__);

(statearr_34804[(1)] = (1));

return statearr_34804;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31625__auto____1 = (function (state_34753){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_34753);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e34806){var ex__31628__auto__ = e34806;
var statearr_34807_36224 = state_34753;
(statearr_34807_36224[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_34753[(4)]))){
var statearr_34808_36225 = state_34753;
(statearr_34808_36225[(1)] = cljs.core.first((state_34753[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36228 = state_34753;
state_34753 = G__36228;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31625__auto__ = function(state_34753){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31625__auto____1.call(this,state_34753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31625__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31625__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_34815 = f__31898__auto__();
(statearr_34815[(6)] = c__31897__auto__);

return statearr_34815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));

return c__31897__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34823 = arguments.length;
switch (G__34823) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34847 = arguments.length;
switch (G__34847) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31897__auto___36238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_34980){
var state_val_34981 = (state_34980[(1)]);
if((state_val_34981 === (7))){
var inst_34975 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_34992_36240 = state_34980__$1;
(statearr_34992_36240[(2)] = inst_34975);

(statearr_34992_36240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (1))){
var inst_34935 = null;
var state_34980__$1 = (function (){var statearr_34993 = state_34980;
(statearr_34993[(7)] = inst_34935);

return statearr_34993;
})();
var statearr_34994_36242 = state_34980__$1;
(statearr_34994_36242[(2)] = null);

(statearr_34994_36242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (4))){
var inst_34951 = (state_34980[(8)]);
var inst_34951__$1 = (state_34980[(2)]);
var inst_34957 = (inst_34951__$1 == null);
var inst_34958 = cljs.core.not(inst_34957);
var state_34980__$1 = (function (){var statearr_34996 = state_34980;
(statearr_34996[(8)] = inst_34951__$1);

return statearr_34996;
})();
if(inst_34958){
var statearr_34997_36243 = state_34980__$1;
(statearr_34997_36243[(1)] = (5));

} else {
var statearr_34998_36244 = state_34980__$1;
(statearr_34998_36244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (6))){
var state_34980__$1 = state_34980;
var statearr_34999_36246 = state_34980__$1;
(statearr_34999_36246[(2)] = null);

(statearr_34999_36246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (3))){
var inst_34977 = (state_34980[(2)]);
var inst_34978 = cljs.core.async.close_BANG_(out);
var state_34980__$1 = (function (){var statearr_35000 = state_34980;
(statearr_35000[(9)] = inst_34977);

return statearr_35000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34980__$1,inst_34978);
} else {
if((state_val_34981 === (2))){
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34980__$1,(4),ch);
} else {
if((state_val_34981 === (11))){
var inst_34951 = (state_34980[(8)]);
var inst_34969 = (state_34980[(2)]);
var inst_34935 = inst_34951;
var state_34980__$1 = (function (){var statearr_35004 = state_34980;
(statearr_35004[(10)] = inst_34969);

(statearr_35004[(7)] = inst_34935);

return statearr_35004;
})();
var statearr_35005_36251 = state_34980__$1;
(statearr_35005_36251[(2)] = null);

(statearr_35005_36251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (9))){
var inst_34951 = (state_34980[(8)]);
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34980__$1,(11),out,inst_34951);
} else {
if((state_val_34981 === (5))){
var inst_34951 = (state_34980[(8)]);
var inst_34935 = (state_34980[(7)]);
var inst_34964 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34951,inst_34935);
var state_34980__$1 = state_34980;
if(inst_34964){
var statearr_35010_36252 = state_34980__$1;
(statearr_35010_36252[(1)] = (8));

} else {
var statearr_35011_36253 = state_34980__$1;
(statearr_35011_36253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (10))){
var inst_34972 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_35013_36254 = state_34980__$1;
(statearr_35013_36254[(2)] = inst_34972);

(statearr_35013_36254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (8))){
var inst_34935 = (state_34980[(7)]);
var tmp35009 = inst_34935;
var inst_34935__$1 = tmp35009;
var state_34980__$1 = (function (){var statearr_35014 = state_34980;
(statearr_35014[(7)] = inst_34935__$1);

return statearr_35014;
})();
var statearr_35015_36258 = state_34980__$1;
(statearr_35015_36258[(2)] = null);

(statearr_35015_36258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_35016 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35016[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_35016[(1)] = (1));

return statearr_35016;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_34980){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_34980);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e35018){var ex__31628__auto__ = e35018;
var statearr_35019_36269 = state_34980;
(statearr_35019_36269[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_34980[(4)]))){
var statearr_35024_36274 = state_34980;
(statearr_35024_36274[(1)] = cljs.core.first((state_34980[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36279 = state_34980;
state_34980 = G__36279;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_34980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_34980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_35030 = f__31898__auto__();
(statearr_35030[(6)] = c__31897__auto___36238);

return statearr_35030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35046 = arguments.length;
switch (G__35046) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31897__auto___36303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_35106){
var state_val_35107 = (state_35106[(1)]);
if((state_val_35107 === (7))){
var inst_35102 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35141_36308 = state_35106__$1;
(statearr_35141_36308[(2)] = inst_35102);

(statearr_35141_36308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (1))){
var inst_35069 = (new Array(n));
var inst_35070 = inst_35069;
var inst_35071 = (0);
var state_35106__$1 = (function (){var statearr_35155 = state_35106;
(statearr_35155[(7)] = inst_35070);

(statearr_35155[(8)] = inst_35071);

return statearr_35155;
})();
var statearr_35160_36311 = state_35106__$1;
(statearr_35160_36311[(2)] = null);

(statearr_35160_36311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (4))){
var inst_35074 = (state_35106[(9)]);
var inst_35074__$1 = (state_35106[(2)]);
var inst_35075 = (inst_35074__$1 == null);
var inst_35076 = cljs.core.not(inst_35075);
var state_35106__$1 = (function (){var statearr_35166 = state_35106;
(statearr_35166[(9)] = inst_35074__$1);

return statearr_35166;
})();
if(inst_35076){
var statearr_35169_36315 = state_35106__$1;
(statearr_35169_36315[(1)] = (5));

} else {
var statearr_35173_36316 = state_35106__$1;
(statearr_35173_36316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (15))){
var inst_35096 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35184_36318 = state_35106__$1;
(statearr_35184_36318[(2)] = inst_35096);

(statearr_35184_36318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (13))){
var state_35106__$1 = state_35106;
var statearr_35185_36319 = state_35106__$1;
(statearr_35185_36319[(2)] = null);

(statearr_35185_36319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (6))){
var inst_35071 = (state_35106[(8)]);
var inst_35092 = (inst_35071 > (0));
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35092)){
var statearr_35190_36323 = state_35106__$1;
(statearr_35190_36323[(1)] = (12));

} else {
var statearr_35192_36324 = state_35106__$1;
(statearr_35192_36324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (3))){
var inst_35104 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35106__$1,inst_35104);
} else {
if((state_val_35107 === (12))){
var inst_35070 = (state_35106[(7)]);
var inst_35094 = cljs.core.vec(inst_35070);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35106__$1,(15),out,inst_35094);
} else {
if((state_val_35107 === (2))){
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35106__$1,(4),ch);
} else {
if((state_val_35107 === (11))){
var inst_35086 = (state_35106[(2)]);
var inst_35087 = (new Array(n));
var inst_35070 = inst_35087;
var inst_35071 = (0);
var state_35106__$1 = (function (){var statearr_35196 = state_35106;
(statearr_35196[(7)] = inst_35070);

(statearr_35196[(8)] = inst_35071);

(statearr_35196[(10)] = inst_35086);

return statearr_35196;
})();
var statearr_35197_36325 = state_35106__$1;
(statearr_35197_36325[(2)] = null);

(statearr_35197_36325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (9))){
var inst_35070 = (state_35106[(7)]);
var inst_35084 = cljs.core.vec(inst_35070);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35106__$1,(11),out,inst_35084);
} else {
if((state_val_35107 === (5))){
var inst_35070 = (state_35106[(7)]);
var inst_35074 = (state_35106[(9)]);
var inst_35079 = (state_35106[(11)]);
var inst_35071 = (state_35106[(8)]);
var inst_35078 = (inst_35070[inst_35071] = inst_35074);
var inst_35079__$1 = (inst_35071 + (1));
var inst_35080 = (inst_35079__$1 < n);
var state_35106__$1 = (function (){var statearr_35206 = state_35106;
(statearr_35206[(11)] = inst_35079__$1);

(statearr_35206[(12)] = inst_35078);

return statearr_35206;
})();
if(cljs.core.truth_(inst_35080)){
var statearr_35207_36327 = state_35106__$1;
(statearr_35207_36327[(1)] = (8));

} else {
var statearr_35208_36328 = state_35106__$1;
(statearr_35208_36328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (14))){
var inst_35099 = (state_35106[(2)]);
var inst_35100 = cljs.core.async.close_BANG_(out);
var state_35106__$1 = (function (){var statearr_35210 = state_35106;
(statearr_35210[(13)] = inst_35099);

return statearr_35210;
})();
var statearr_35212_36329 = state_35106__$1;
(statearr_35212_36329[(2)] = inst_35100);

(statearr_35212_36329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (10))){
var inst_35090 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35218_36330 = state_35106__$1;
(statearr_35218_36330[(2)] = inst_35090);

(statearr_35218_36330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (8))){
var inst_35070 = (state_35106[(7)]);
var inst_35079 = (state_35106[(11)]);
var tmp35209 = inst_35070;
var inst_35070__$1 = tmp35209;
var inst_35071 = inst_35079;
var state_35106__$1 = (function (){var statearr_35219 = state_35106;
(statearr_35219[(7)] = inst_35070__$1);

(statearr_35219[(8)] = inst_35071);

return statearr_35219;
})();
var statearr_35220_36332 = state_35106__$1;
(statearr_35220_36332[(2)] = null);

(statearr_35220_36332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_35221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35221[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_35221[(1)] = (1));

return statearr_35221;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_35106){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_35106);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e35226){var ex__31628__auto__ = e35226;
var statearr_35227_36346 = state_35106;
(statearr_35227_36346[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_35106[(4)]))){
var statearr_35228_36347 = state_35106;
(statearr_35228_36347[(1)] = cljs.core.first((state_35106[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36348 = state_35106;
state_35106 = G__36348;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_35106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_35106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_35230 = f__31898__auto__();
(statearr_35230[(6)] = c__31897__auto___36303);

return statearr_35230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35237 = arguments.length;
switch (G__35237) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31897__auto___36350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31898__auto__ = (function (){var switch__31624__auto__ = (function (state_35294){
var state_val_35295 = (state_35294[(1)]);
if((state_val_35295 === (7))){
var inst_35290 = (state_35294[(2)]);
var state_35294__$1 = state_35294;
var statearr_35296_36351 = state_35294__$1;
(statearr_35296_36351[(2)] = inst_35290);

(statearr_35296_36351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (1))){
var inst_35245 = [];
var inst_35246 = inst_35245;
var inst_35247 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35294__$1 = (function (){var statearr_35299 = state_35294;
(statearr_35299[(7)] = inst_35247);

(statearr_35299[(8)] = inst_35246);

return statearr_35299;
})();
var statearr_35301_36355 = state_35294__$1;
(statearr_35301_36355[(2)] = null);

(statearr_35301_36355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (4))){
var inst_35250 = (state_35294[(9)]);
var inst_35250__$1 = (state_35294[(2)]);
var inst_35251 = (inst_35250__$1 == null);
var inst_35252 = cljs.core.not(inst_35251);
var state_35294__$1 = (function (){var statearr_35305 = state_35294;
(statearr_35305[(9)] = inst_35250__$1);

return statearr_35305;
})();
if(inst_35252){
var statearr_35307_36356 = state_35294__$1;
(statearr_35307_36356[(1)] = (5));

} else {
var statearr_35308_36357 = state_35294__$1;
(statearr_35308_36357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (15))){
var inst_35246 = (state_35294[(8)]);
var inst_35282 = cljs.core.vec(inst_35246);
var state_35294__$1 = state_35294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35294__$1,(18),out,inst_35282);
} else {
if((state_val_35295 === (13))){
var inst_35277 = (state_35294[(2)]);
var state_35294__$1 = state_35294;
var statearr_35315_36358 = state_35294__$1;
(statearr_35315_36358[(2)] = inst_35277);

(statearr_35315_36358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (6))){
var inst_35246 = (state_35294[(8)]);
var inst_35279 = inst_35246.length;
var inst_35280 = (inst_35279 > (0));
var state_35294__$1 = state_35294;
if(cljs.core.truth_(inst_35280)){
var statearr_35317_36359 = state_35294__$1;
(statearr_35317_36359[(1)] = (15));

} else {
var statearr_35318_36360 = state_35294__$1;
(statearr_35318_36360[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (17))){
var inst_35287 = (state_35294[(2)]);
var inst_35288 = cljs.core.async.close_BANG_(out);
var state_35294__$1 = (function (){var statearr_35322 = state_35294;
(statearr_35322[(10)] = inst_35287);

return statearr_35322;
})();
var statearr_35324_36361 = state_35294__$1;
(statearr_35324_36361[(2)] = inst_35288);

(statearr_35324_36361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (3))){
var inst_35292 = (state_35294[(2)]);
var state_35294__$1 = state_35294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35294__$1,inst_35292);
} else {
if((state_val_35295 === (12))){
var inst_35246 = (state_35294[(8)]);
var inst_35270 = cljs.core.vec(inst_35246);
var state_35294__$1 = state_35294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35294__$1,(14),out,inst_35270);
} else {
if((state_val_35295 === (2))){
var state_35294__$1 = state_35294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35294__$1,(4),ch);
} else {
if((state_val_35295 === (11))){
var inst_35250 = (state_35294[(9)]);
var inst_35255 = (state_35294[(11)]);
var inst_35246 = (state_35294[(8)]);
var inst_35267 = inst_35246.push(inst_35250);
var tmp35325 = inst_35246;
var inst_35246__$1 = tmp35325;
var inst_35247 = inst_35255;
var state_35294__$1 = (function (){var statearr_35340 = state_35294;
(statearr_35340[(7)] = inst_35247);

(statearr_35340[(8)] = inst_35246__$1);

(statearr_35340[(12)] = inst_35267);

return statearr_35340;
})();
var statearr_35343_36363 = state_35294__$1;
(statearr_35343_36363[(2)] = null);

(statearr_35343_36363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (9))){
var inst_35247 = (state_35294[(7)]);
var inst_35263 = cljs.core.keyword_identical_QMARK_(inst_35247,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35294__$1 = state_35294;
var statearr_35352_36364 = state_35294__$1;
(statearr_35352_36364[(2)] = inst_35263);

(statearr_35352_36364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (5))){
var inst_35250 = (state_35294[(9)]);
var inst_35247 = (state_35294[(7)]);
var inst_35255 = (state_35294[(11)]);
var inst_35260 = (state_35294[(13)]);
var inst_35255__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35250) : f.call(null,inst_35250));
var inst_35260__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35255__$1,inst_35247);
var state_35294__$1 = (function (){var statearr_35358 = state_35294;
(statearr_35358[(11)] = inst_35255__$1);

(statearr_35358[(13)] = inst_35260__$1);

return statearr_35358;
})();
if(inst_35260__$1){
var statearr_35361_36366 = state_35294__$1;
(statearr_35361_36366[(1)] = (8));

} else {
var statearr_35362_36367 = state_35294__$1;
(statearr_35362_36367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (14))){
var inst_35250 = (state_35294[(9)]);
var inst_35255 = (state_35294[(11)]);
var inst_35272 = (state_35294[(2)]);
var inst_35273 = [];
var inst_35274 = inst_35273.push(inst_35250);
var inst_35246 = inst_35273;
var inst_35247 = inst_35255;
var state_35294__$1 = (function (){var statearr_35364 = state_35294;
(statearr_35364[(7)] = inst_35247);

(statearr_35364[(14)] = inst_35274);

(statearr_35364[(8)] = inst_35246);

(statearr_35364[(15)] = inst_35272);

return statearr_35364;
})();
var statearr_35366_36368 = state_35294__$1;
(statearr_35366_36368[(2)] = null);

(statearr_35366_36368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (16))){
var state_35294__$1 = state_35294;
var statearr_35367_36369 = state_35294__$1;
(statearr_35367_36369[(2)] = null);

(statearr_35367_36369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (10))){
var inst_35265 = (state_35294[(2)]);
var state_35294__$1 = state_35294;
if(cljs.core.truth_(inst_35265)){
var statearr_35368_36370 = state_35294__$1;
(statearr_35368_36370[(1)] = (11));

} else {
var statearr_35369_36371 = state_35294__$1;
(statearr_35369_36371[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (18))){
var inst_35284 = (state_35294[(2)]);
var state_35294__$1 = state_35294;
var statearr_35370_36372 = state_35294__$1;
(statearr_35370_36372[(2)] = inst_35284);

(statearr_35370_36372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35295 === (8))){
var inst_35260 = (state_35294[(13)]);
var state_35294__$1 = state_35294;
var statearr_35371_36374 = state_35294__$1;
(statearr_35371_36374[(2)] = inst_35260);

(statearr_35371_36374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31625__auto__ = null;
var cljs$core$async$state_machine__31625__auto____0 = (function (){
var statearr_35372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35372[(0)] = cljs$core$async$state_machine__31625__auto__);

(statearr_35372[(1)] = (1));

return statearr_35372;
});
var cljs$core$async$state_machine__31625__auto____1 = (function (state_35294){
while(true){
var ret_value__31626__auto__ = (function (){try{while(true){
var result__31627__auto__ = switch__31624__auto__(state_35294);
if(cljs.core.keyword_identical_QMARK_(result__31627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31627__auto__;
}
break;
}
}catch (e35373){var ex__31628__auto__ = e35373;
var statearr_35374_36379 = state_35294;
(statearr_35374_36379[(2)] = ex__31628__auto__);


if(cljs.core.seq((state_35294[(4)]))){
var statearr_35375_36380 = state_35294;
(statearr_35375_36380[(1)] = cljs.core.first((state_35294[(4)])));

} else {
throw ex__31628__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31626__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36381 = state_35294;
state_35294 = G__36381;
continue;
} else {
return ret_value__31626__auto__;
}
break;
}
});
cljs$core$async$state_machine__31625__auto__ = function(state_35294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31625__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31625__auto____1.call(this,state_35294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31625__auto____0;
cljs$core$async$state_machine__31625__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31625__auto____1;
return cljs$core$async$state_machine__31625__auto__;
})()
})();
var state__31899__auto__ = (function (){var statearr_35376 = f__31898__auto__();
(statearr_35376[(6)] = c__31897__auto___36350);

return statearr_35376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31899__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
