// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27007 = [];
var len__25865__auto___27013 = arguments.length;
var i__25866__auto___27014 = (0);
while(true){
if((i__25866__auto___27014 < len__25865__auto___27013)){
args27007.push((arguments[i__25866__auto___27014]));

var G__27015 = (i__25866__auto___27014 + (1));
i__25866__auto___27014 = G__27015;
continue;
} else {
}
break;
}

var G__27009 = args27007.length;
switch (G__27009) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27007.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27010 = (function (f,blockable,meta27011){
this.f = f;
this.blockable = blockable;
this.meta27011 = meta27011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27012,meta27011__$1){
var self__ = this;
var _27012__$1 = this;
return (new cljs.core.async.t_cljs$core$async27010(self__.f,self__.blockable,meta27011__$1));
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27012){
var self__ = this;
var _27012__$1 = this;
return self__.meta27011;
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27011","meta27011",-1143005826,null)], null);
});

cljs.core.async.t_cljs$core$async27010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27010";

cljs.core.async.t_cljs$core$async27010.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27010");
});

cljs.core.async.__GT_t_cljs$core$async27010 = (function cljs$core$async$__GT_t_cljs$core$async27010(f__$1,blockable__$1,meta27011){
return (new cljs.core.async.t_cljs$core$async27010(f__$1,blockable__$1,meta27011));
});

}

return (new cljs.core.async.t_cljs$core$async27010(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args27019 = [];
var len__25865__auto___27022 = arguments.length;
var i__25866__auto___27023 = (0);
while(true){
if((i__25866__auto___27023 < len__25865__auto___27022)){
args27019.push((arguments[i__25866__auto___27023]));

var G__27024 = (i__25866__auto___27023 + (1));
i__25866__auto___27023 = G__27024;
continue;
} else {
}
break;
}

var G__27021 = args27019.length;
switch (G__27021) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27019.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27026 = [];
var len__25865__auto___27029 = arguments.length;
var i__25866__auto___27030 = (0);
while(true){
if((i__25866__auto___27030 < len__25865__auto___27029)){
args27026.push((arguments[i__25866__auto___27030]));

var G__27031 = (i__25866__auto___27030 + (1));
i__25866__auto___27030 = G__27031;
continue;
} else {
}
break;
}

var G__27028 = args27026.length;
switch (G__27028) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27026.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args27033 = [];
var len__25865__auto___27036 = arguments.length;
var i__25866__auto___27037 = (0);
while(true){
if((i__25866__auto___27037 < len__25865__auto___27036)){
args27033.push((arguments[i__25866__auto___27037]));

var G__27038 = (i__25866__auto___27037 + (1));
i__25866__auto___27037 = G__27038;
continue;
} else {
}
break;
}

var G__27035 = args27033.length;
switch (G__27035) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27033.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27040 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27040);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27040,ret){
return (function (){
return fn1.call(null,val_27040);
});})(val_27040,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27041 = [];
var len__25865__auto___27044 = arguments.length;
var i__25866__auto___27045 = (0);
while(true){
if((i__25866__auto___27045 < len__25865__auto___27044)){
args27041.push((arguments[i__25866__auto___27045]));

var G__27046 = (i__25866__auto___27045 + (1));
i__25866__auto___27045 = G__27046;
continue;
} else {
}
break;
}

var G__27043 = args27041.length;
switch (G__27043) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27041.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25705__auto___27048 = n;
var x_27049 = (0);
while(true){
if((x_27049 < n__25705__auto___27048)){
(a[x_27049] = (0));

var G__27050 = (x_27049 + (1));
x_27049 = G__27050;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27051 = (i + (1));
i = G__27051;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27055 = (function (alt_flag,flag,meta27056){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27056 = meta27056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27057,meta27056__$1){
var self__ = this;
var _27057__$1 = this;
return (new cljs.core.async.t_cljs$core$async27055(self__.alt_flag,self__.flag,meta27056__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27057){
var self__ = this;
var _27057__$1 = this;
return self__.meta27056;
});})(flag))
;

cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27055.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27056","meta27056",-1493380663,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27055";

cljs.core.async.t_cljs$core$async27055.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27055");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27055 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27055(alt_flag__$1,flag__$1,meta27056){
return (new cljs.core.async.t_cljs$core$async27055(alt_flag__$1,flag__$1,meta27056));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27055(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27061 = (function (alt_handler,flag,cb,meta27062){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27062 = meta27062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27063,meta27062__$1){
var self__ = this;
var _27063__$1 = this;
return (new cljs.core.async.t_cljs$core$async27061(self__.alt_handler,self__.flag,self__.cb,meta27062__$1));
});

cljs.core.async.t_cljs$core$async27061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27063){
var self__ = this;
var _27063__$1 = this;
return self__.meta27062;
});

cljs.core.async.t_cljs$core$async27061.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27062","meta27062",1703324151,null)], null);
});

cljs.core.async.t_cljs$core$async27061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27061";

cljs.core.async.t_cljs$core$async27061.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27061");
});

cljs.core.async.__GT_t_cljs$core$async27061 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27061(alt_handler__$1,flag__$1,cb__$1,meta27062){
return (new cljs.core.async.t_cljs$core$async27061(alt_handler__$1,flag__$1,cb__$1,meta27062));
});

}

return (new cljs.core.async.t_cljs$core$async27061(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27064_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27064_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27065_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27065_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27066 = (i + (1));
i = G__27066;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__25872__auto__ = [];
var len__25865__auto___27072 = arguments.length;
var i__25866__auto___27073 = (0);
while(true){
if((i__25866__auto___27073 < len__25865__auto___27072)){
args__25872__auto__.push((arguments[i__25866__auto___27073]));

var G__27074 = (i__25866__auto___27073 + (1));
i__25866__auto___27073 = G__27074;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27069){
var map__27070 = p__27069;
var map__27070__$1 = ((((!((map__27070 == null)))?((((map__27070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27070):map__27070);
var opts = map__27070__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27067){
var G__27068 = cljs.core.first.call(null,seq27067);
var seq27067__$1 = cljs.core.next.call(null,seq27067);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27068,seq27067__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args27075 = [];
var len__25865__auto___27125 = arguments.length;
var i__25866__auto___27126 = (0);
while(true){
if((i__25866__auto___27126 < len__25865__auto___27125)){
args27075.push((arguments[i__25866__auto___27126]));

var G__27127 = (i__25866__auto___27126 + (1));
i__25866__auto___27126 = G__27127;
continue;
} else {
}
break;
}

var G__27077 = args27075.length;
switch (G__27077) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27075.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26962__auto___27129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___27129){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___27129){
return (function (state_27101){
var state_val_27102 = (state_27101[(1)]);
if((state_val_27102 === (7))){
var inst_27097 = (state_27101[(2)]);
var state_27101__$1 = state_27101;
var statearr_27103_27130 = state_27101__$1;
(statearr_27103_27130[(2)] = inst_27097);

(statearr_27103_27130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (1))){
var state_27101__$1 = state_27101;
var statearr_27104_27131 = state_27101__$1;
(statearr_27104_27131[(2)] = null);

(statearr_27104_27131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (4))){
var inst_27080 = (state_27101[(7)]);
var inst_27080__$1 = (state_27101[(2)]);
var inst_27081 = (inst_27080__$1 == null);
var state_27101__$1 = (function (){var statearr_27105 = state_27101;
(statearr_27105[(7)] = inst_27080__$1);

return statearr_27105;
})();
if(cljs.core.truth_(inst_27081)){
var statearr_27106_27132 = state_27101__$1;
(statearr_27106_27132[(1)] = (5));

} else {
var statearr_27107_27133 = state_27101__$1;
(statearr_27107_27133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (13))){
var state_27101__$1 = state_27101;
var statearr_27108_27134 = state_27101__$1;
(statearr_27108_27134[(2)] = null);

(statearr_27108_27134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (6))){
var inst_27080 = (state_27101[(7)]);
var state_27101__$1 = state_27101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27101__$1,(11),to,inst_27080);
} else {
if((state_val_27102 === (3))){
var inst_27099 = (state_27101[(2)]);
var state_27101__$1 = state_27101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27101__$1,inst_27099);
} else {
if((state_val_27102 === (12))){
var state_27101__$1 = state_27101;
var statearr_27109_27135 = state_27101__$1;
(statearr_27109_27135[(2)] = null);

(statearr_27109_27135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (2))){
var state_27101__$1 = state_27101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27101__$1,(4),from);
} else {
if((state_val_27102 === (11))){
var inst_27090 = (state_27101[(2)]);
var state_27101__$1 = state_27101;
if(cljs.core.truth_(inst_27090)){
var statearr_27110_27136 = state_27101__$1;
(statearr_27110_27136[(1)] = (12));

} else {
var statearr_27111_27137 = state_27101__$1;
(statearr_27111_27137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (9))){
var state_27101__$1 = state_27101;
var statearr_27112_27138 = state_27101__$1;
(statearr_27112_27138[(2)] = null);

(statearr_27112_27138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (5))){
var state_27101__$1 = state_27101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27113_27139 = state_27101__$1;
(statearr_27113_27139[(1)] = (8));

} else {
var statearr_27114_27140 = state_27101__$1;
(statearr_27114_27140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (14))){
var inst_27095 = (state_27101[(2)]);
var state_27101__$1 = state_27101;
var statearr_27115_27141 = state_27101__$1;
(statearr_27115_27141[(2)] = inst_27095);

(statearr_27115_27141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (10))){
var inst_27087 = (state_27101[(2)]);
var state_27101__$1 = state_27101;
var statearr_27116_27142 = state_27101__$1;
(statearr_27116_27142[(2)] = inst_27087);

(statearr_27116_27142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (8))){
var inst_27084 = cljs.core.async.close_BANG_.call(null,to);
var state_27101__$1 = state_27101;
var statearr_27117_27143 = state_27101__$1;
(statearr_27117_27143[(2)] = inst_27084);

(statearr_27117_27143[(1)] = (10));


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
});})(c__26962__auto___27129))
;
return ((function (switch__26808__auto__,c__26962__auto___27129){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_27121 = [null,null,null,null,null,null,null,null];
(statearr_27121[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_27121[(1)] = (1));

return statearr_27121;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_27101){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27122){if((e27122 instanceof Object)){
var ex__26812__auto__ = e27122;
var statearr_27123_27144 = state_27101;
(statearr_27123_27144[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27145 = state_27101;
state_27101 = G__27145;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_27101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_27101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___27129))
})();
var state__26964__auto__ = (function (){var statearr_27124 = f__26963__auto__.call(null);
(statearr_27124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___27129);

return statearr_27124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___27129))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27333){
var vec__27334 = p__27333;
var v = cljs.core.nth.call(null,vec__27334,(0),null);
var p = cljs.core.nth.call(null,vec__27334,(1),null);
var job = vec__27334;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26962__auto___27520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___27520,res,vec__27334,v,p,job,jobs,results){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___27520,res,vec__27334,v,p,job,jobs,results){
return (function (state_27341){
var state_val_27342 = (state_27341[(1)]);
if((state_val_27342 === (1))){
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27341__$1,(2),res,v);
} else {
if((state_val_27342 === (2))){
var inst_27338 = (state_27341[(2)]);
var inst_27339 = cljs.core.async.close_BANG_.call(null,res);
var state_27341__$1 = (function (){var statearr_27343 = state_27341;
(statearr_27343[(7)] = inst_27338);

return statearr_27343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27341__$1,inst_27339);
} else {
return null;
}
}
});})(c__26962__auto___27520,res,vec__27334,v,p,job,jobs,results))
;
return ((function (switch__26808__auto__,c__26962__auto___27520,res,vec__27334,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27347 = [null,null,null,null,null,null,null,null];
(statearr_27347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27347[(1)] = (1));

return statearr_27347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27341){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27348){if((e27348 instanceof Object)){
var ex__26812__auto__ = e27348;
var statearr_27349_27521 = state_27341;
(statearr_27349_27521[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27522 = state_27341;
state_27341 = G__27522;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___27520,res,vec__27334,v,p,job,jobs,results))
})();
var state__26964__auto__ = (function (){var statearr_27350 = f__26963__auto__.call(null);
(statearr_27350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___27520);

return statearr_27350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___27520,res,vec__27334,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27351){
var vec__27352 = p__27351;
var v = cljs.core.nth.call(null,vec__27352,(0),null);
var p = cljs.core.nth.call(null,vec__27352,(1),null);
var job = vec__27352;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25705__auto___27523 = n;
var __27524 = (0);
while(true){
if((__27524 < n__25705__auto___27523)){
var G__27355_27525 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27355_27525) {
case "compute":
var c__26962__auto___27527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27524,c__26962__auto___27527,G__27355_27525,n__25705__auto___27523,jobs,results,process,async){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (__27524,c__26962__auto___27527,G__27355_27525,n__25705__auto___27523,jobs,results,process,async){
return (function (state_27368){
var state_val_27369 = (state_27368[(1)]);
if((state_val_27369 === (1))){
var state_27368__$1 = state_27368;
var statearr_27370_27528 = state_27368__$1;
(statearr_27370_27528[(2)] = null);

(statearr_27370_27528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (2))){
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27368__$1,(4),jobs);
} else {
if((state_val_27369 === (3))){
var inst_27366 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27368__$1,inst_27366);
} else {
if((state_val_27369 === (4))){
var inst_27358 = (state_27368[(2)]);
var inst_27359 = process.call(null,inst_27358);
var state_27368__$1 = state_27368;
if(cljs.core.truth_(inst_27359)){
var statearr_27371_27529 = state_27368__$1;
(statearr_27371_27529[(1)] = (5));

} else {
var statearr_27372_27530 = state_27368__$1;
(statearr_27372_27530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (5))){
var state_27368__$1 = state_27368;
var statearr_27373_27531 = state_27368__$1;
(statearr_27373_27531[(2)] = null);

(statearr_27373_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (6))){
var state_27368__$1 = state_27368;
var statearr_27374_27532 = state_27368__$1;
(statearr_27374_27532[(2)] = null);

(statearr_27374_27532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (7))){
var inst_27364 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
var statearr_27375_27533 = state_27368__$1;
(statearr_27375_27533[(2)] = inst_27364);

(statearr_27375_27533[(1)] = (3));


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
});})(__27524,c__26962__auto___27527,G__27355_27525,n__25705__auto___27523,jobs,results,process,async))
;
return ((function (__27524,switch__26808__auto__,c__26962__auto___27527,G__27355_27525,n__25705__auto___27523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27379 = [null,null,null,null,null,null,null];
(statearr_27379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27379[(1)] = (1));

return statearr_27379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27368){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27380){if((e27380 instanceof Object)){
var ex__26812__auto__ = e27380;
var statearr_27381_27534 = state_27368;
(statearr_27381_27534[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27535 = state_27368;
state_27368 = G__27535;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(__27524,switch__26808__auto__,c__26962__auto___27527,G__27355_27525,n__25705__auto___27523,jobs,results,process,async))
})();
var state__26964__auto__ = (function (){var statearr_27382 = f__26963__auto__.call(null);
(statearr_27382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___27527);

return statearr_27382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(__27524,c__26962__auto___27527,G__27355_27525,n__25705__auto___27523,jobs,results,process,async))
);


break;
case "async":
var c__26962__auto___27536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27524,c__26962__auto___27536,G__27355_27525,n__25705__auto___27523,jobs,results,process,async){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (__27524,c__26962__auto___27536,G__27355_27525,n__25705__auto___27523,jobs,results,process,async){
return (function (state_27395){
var state_val_27396 = (state_27395[(1)]);
if((state_val_27396 === (1))){
var state_27395__$1 = state_27395;
var statearr_27397_27537 = state_27395__$1;
(statearr_27397_27537[(2)] = null);

(statearr_27397_27537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (2))){
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(4),jobs);
} else {
if((state_val_27396 === (3))){
var inst_27393 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27395__$1,inst_27393);
} else {
if((state_val_27396 === (4))){
var inst_27385 = (state_27395[(2)]);
var inst_27386 = async.call(null,inst_27385);
var state_27395__$1 = state_27395;
if(cljs.core.truth_(inst_27386)){
var statearr_27398_27538 = state_27395__$1;
(statearr_27398_27538[(1)] = (5));

} else {
var statearr_27399_27539 = state_27395__$1;
(statearr_27399_27539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (5))){
var state_27395__$1 = state_27395;
var statearr_27400_27540 = state_27395__$1;
(statearr_27400_27540[(2)] = null);

(statearr_27400_27540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (6))){
var state_27395__$1 = state_27395;
var statearr_27401_27541 = state_27395__$1;
(statearr_27401_27541[(2)] = null);

(statearr_27401_27541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (7))){
var inst_27391 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27402_27542 = state_27395__$1;
(statearr_27402_27542[(2)] = inst_27391);

(statearr_27402_27542[(1)] = (3));


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
});})(__27524,c__26962__auto___27536,G__27355_27525,n__25705__auto___27523,jobs,results,process,async))
;
return ((function (__27524,switch__26808__auto__,c__26962__auto___27536,G__27355_27525,n__25705__auto___27523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27406 = [null,null,null,null,null,null,null];
(statearr_27406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27406[(1)] = (1));

return statearr_27406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27395){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27407){if((e27407 instanceof Object)){
var ex__26812__auto__ = e27407;
var statearr_27408_27543 = state_27395;
(statearr_27408_27543[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27544 = state_27395;
state_27395 = G__27544;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(__27524,switch__26808__auto__,c__26962__auto___27536,G__27355_27525,n__25705__auto___27523,jobs,results,process,async))
})();
var state__26964__auto__ = (function (){var statearr_27409 = f__26963__auto__.call(null);
(statearr_27409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___27536);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(__27524,c__26962__auto___27536,G__27355_27525,n__25705__auto___27523,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27545 = (__27524 + (1));
__27524 = G__27545;
continue;
} else {
}
break;
}

var c__26962__auto___27546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___27546,jobs,results,process,async){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___27546,jobs,results,process,async){
return (function (state_27431){
var state_val_27432 = (state_27431[(1)]);
if((state_val_27432 === (1))){
var state_27431__$1 = state_27431;
var statearr_27433_27547 = state_27431__$1;
(statearr_27433_27547[(2)] = null);

(statearr_27433_27547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (2))){
var state_27431__$1 = state_27431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27431__$1,(4),from);
} else {
if((state_val_27432 === (3))){
var inst_27429 = (state_27431[(2)]);
var state_27431__$1 = state_27431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27431__$1,inst_27429);
} else {
if((state_val_27432 === (4))){
var inst_27412 = (state_27431[(7)]);
var inst_27412__$1 = (state_27431[(2)]);
var inst_27413 = (inst_27412__$1 == null);
var state_27431__$1 = (function (){var statearr_27434 = state_27431;
(statearr_27434[(7)] = inst_27412__$1);

return statearr_27434;
})();
if(cljs.core.truth_(inst_27413)){
var statearr_27435_27548 = state_27431__$1;
(statearr_27435_27548[(1)] = (5));

} else {
var statearr_27436_27549 = state_27431__$1;
(statearr_27436_27549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (5))){
var inst_27415 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27431__$1 = state_27431;
var statearr_27437_27550 = state_27431__$1;
(statearr_27437_27550[(2)] = inst_27415);

(statearr_27437_27550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (6))){
var inst_27412 = (state_27431[(7)]);
var inst_27417 = (state_27431[(8)]);
var inst_27417__$1 = cljs.core.async.chan.call(null,(1));
var inst_27418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27419 = [inst_27412,inst_27417__$1];
var inst_27420 = (new cljs.core.PersistentVector(null,2,(5),inst_27418,inst_27419,null));
var state_27431__$1 = (function (){var statearr_27438 = state_27431;
(statearr_27438[(8)] = inst_27417__$1);

return statearr_27438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27431__$1,(8),jobs,inst_27420);
} else {
if((state_val_27432 === (7))){
var inst_27427 = (state_27431[(2)]);
var state_27431__$1 = state_27431;
var statearr_27439_27551 = state_27431__$1;
(statearr_27439_27551[(2)] = inst_27427);

(statearr_27439_27551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (8))){
var inst_27417 = (state_27431[(8)]);
var inst_27422 = (state_27431[(2)]);
var state_27431__$1 = (function (){var statearr_27440 = state_27431;
(statearr_27440[(9)] = inst_27422);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27431__$1,(9),results,inst_27417);
} else {
if((state_val_27432 === (9))){
var inst_27424 = (state_27431[(2)]);
var state_27431__$1 = (function (){var statearr_27441 = state_27431;
(statearr_27441[(10)] = inst_27424);

return statearr_27441;
})();
var statearr_27442_27552 = state_27431__$1;
(statearr_27442_27552[(2)] = null);

(statearr_27442_27552[(1)] = (2));


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
});})(c__26962__auto___27546,jobs,results,process,async))
;
return ((function (switch__26808__auto__,c__26962__auto___27546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27446[(1)] = (1));

return statearr_27446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27431){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27447){if((e27447 instanceof Object)){
var ex__26812__auto__ = e27447;
var statearr_27448_27553 = state_27431;
(statearr_27448_27553[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27554 = state_27431;
state_27431 = G__27554;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___27546,jobs,results,process,async))
})();
var state__26964__auto__ = (function (){var statearr_27449 = f__26963__auto__.call(null);
(statearr_27449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___27546);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___27546,jobs,results,process,async))
);


var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__,jobs,results,process,async){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__,jobs,results,process,async){
return (function (state_27487){
var state_val_27488 = (state_27487[(1)]);
if((state_val_27488 === (7))){
var inst_27483 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27489_27555 = state_27487__$1;
(statearr_27489_27555[(2)] = inst_27483);

(statearr_27489_27555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (20))){
var state_27487__$1 = state_27487;
var statearr_27490_27556 = state_27487__$1;
(statearr_27490_27556[(2)] = null);

(statearr_27490_27556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (1))){
var state_27487__$1 = state_27487;
var statearr_27491_27557 = state_27487__$1;
(statearr_27491_27557[(2)] = null);

(statearr_27491_27557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (4))){
var inst_27452 = (state_27487[(7)]);
var inst_27452__$1 = (state_27487[(2)]);
var inst_27453 = (inst_27452__$1 == null);
var state_27487__$1 = (function (){var statearr_27492 = state_27487;
(statearr_27492[(7)] = inst_27452__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27453)){
var statearr_27493_27558 = state_27487__$1;
(statearr_27493_27558[(1)] = (5));

} else {
var statearr_27494_27559 = state_27487__$1;
(statearr_27494_27559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (15))){
var inst_27465 = (state_27487[(8)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27487__$1,(18),to,inst_27465);
} else {
if((state_val_27488 === (21))){
var inst_27478 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27495_27560 = state_27487__$1;
(statearr_27495_27560[(2)] = inst_27478);

(statearr_27495_27560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (13))){
var inst_27480 = (state_27487[(2)]);
var state_27487__$1 = (function (){var statearr_27496 = state_27487;
(statearr_27496[(9)] = inst_27480);

return statearr_27496;
})();
var statearr_27497_27561 = state_27487__$1;
(statearr_27497_27561[(2)] = null);

(statearr_27497_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (6))){
var inst_27452 = (state_27487[(7)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(11),inst_27452);
} else {
if((state_val_27488 === (17))){
var inst_27473 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
if(cljs.core.truth_(inst_27473)){
var statearr_27498_27562 = state_27487__$1;
(statearr_27498_27562[(1)] = (19));

} else {
var statearr_27499_27563 = state_27487__$1;
(statearr_27499_27563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (3))){
var inst_27485 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27487__$1,inst_27485);
} else {
if((state_val_27488 === (12))){
var inst_27462 = (state_27487[(10)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(14),inst_27462);
} else {
if((state_val_27488 === (2))){
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(4),results);
} else {
if((state_val_27488 === (19))){
var state_27487__$1 = state_27487;
var statearr_27500_27564 = state_27487__$1;
(statearr_27500_27564[(2)] = null);

(statearr_27500_27564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (11))){
var inst_27462 = (state_27487[(2)]);
var state_27487__$1 = (function (){var statearr_27501 = state_27487;
(statearr_27501[(10)] = inst_27462);

return statearr_27501;
})();
var statearr_27502_27565 = state_27487__$1;
(statearr_27502_27565[(2)] = null);

(statearr_27502_27565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (9))){
var state_27487__$1 = state_27487;
var statearr_27503_27566 = state_27487__$1;
(statearr_27503_27566[(2)] = null);

(statearr_27503_27566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (5))){
var state_27487__$1 = state_27487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27504_27567 = state_27487__$1;
(statearr_27504_27567[(1)] = (8));

} else {
var statearr_27505_27568 = state_27487__$1;
(statearr_27505_27568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (14))){
var inst_27467 = (state_27487[(11)]);
var inst_27465 = (state_27487[(8)]);
var inst_27465__$1 = (state_27487[(2)]);
var inst_27466 = (inst_27465__$1 == null);
var inst_27467__$1 = cljs.core.not.call(null,inst_27466);
var state_27487__$1 = (function (){var statearr_27506 = state_27487;
(statearr_27506[(11)] = inst_27467__$1);

(statearr_27506[(8)] = inst_27465__$1);

return statearr_27506;
})();
if(inst_27467__$1){
var statearr_27507_27569 = state_27487__$1;
(statearr_27507_27569[(1)] = (15));

} else {
var statearr_27508_27570 = state_27487__$1;
(statearr_27508_27570[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (16))){
var inst_27467 = (state_27487[(11)]);
var state_27487__$1 = state_27487;
var statearr_27509_27571 = state_27487__$1;
(statearr_27509_27571[(2)] = inst_27467);

(statearr_27509_27571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (10))){
var inst_27459 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27510_27572 = state_27487__$1;
(statearr_27510_27572[(2)] = inst_27459);

(statearr_27510_27572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (18))){
var inst_27470 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27511_27573 = state_27487__$1;
(statearr_27511_27573[(2)] = inst_27470);

(statearr_27511_27573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (8))){
var inst_27456 = cljs.core.async.close_BANG_.call(null,to);
var state_27487__$1 = state_27487;
var statearr_27512_27574 = state_27487__$1;
(statearr_27512_27574[(2)] = inst_27456);

(statearr_27512_27574[(1)] = (10));


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
});})(c__26962__auto__,jobs,results,process,async))
;
return ((function (switch__26808__auto__,c__26962__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27516[(1)] = (1));

return statearr_27516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27487){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27517){if((e27517 instanceof Object)){
var ex__26812__auto__ = e27517;
var statearr_27518_27575 = state_27487;
(statearr_27518_27575[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27576 = state_27487;
state_27487 = G__27576;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__,jobs,results,process,async))
})();
var state__26964__auto__ = (function (){var statearr_27519 = f__26963__auto__.call(null);
(statearr_27519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_27519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__,jobs,results,process,async))
);

return c__26962__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27577 = [];
var len__25865__auto___27580 = arguments.length;
var i__25866__auto___27581 = (0);
while(true){
if((i__25866__auto___27581 < len__25865__auto___27580)){
args27577.push((arguments[i__25866__auto___27581]));

var G__27582 = (i__25866__auto___27581 + (1));
i__25866__auto___27581 = G__27582;
continue;
} else {
}
break;
}

var G__27579 = args27577.length;
switch (G__27579) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27577.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args27584 = [];
var len__25865__auto___27587 = arguments.length;
var i__25866__auto___27588 = (0);
while(true){
if((i__25866__auto___27588 < len__25865__auto___27587)){
args27584.push((arguments[i__25866__auto___27588]));

var G__27589 = (i__25866__auto___27588 + (1));
i__25866__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var G__27586 = args27584.length;
switch (G__27586) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27584.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args27591 = [];
var len__25865__auto___27644 = arguments.length;
var i__25866__auto___27645 = (0);
while(true){
if((i__25866__auto___27645 < len__25865__auto___27644)){
args27591.push((arguments[i__25866__auto___27645]));

var G__27646 = (i__25866__auto___27645 + (1));
i__25866__auto___27645 = G__27646;
continue;
} else {
}
break;
}

var G__27593 = args27591.length;
switch (G__27593) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27591.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26962__auto___27648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___27648,tc,fc){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___27648,tc,fc){
return (function (state_27619){
var state_val_27620 = (state_27619[(1)]);
if((state_val_27620 === (7))){
var inst_27615 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
var statearr_27621_27649 = state_27619__$1;
(statearr_27621_27649[(2)] = inst_27615);

(statearr_27621_27649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (1))){
var state_27619__$1 = state_27619;
var statearr_27622_27650 = state_27619__$1;
(statearr_27622_27650[(2)] = null);

(statearr_27622_27650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (4))){
var inst_27596 = (state_27619[(7)]);
var inst_27596__$1 = (state_27619[(2)]);
var inst_27597 = (inst_27596__$1 == null);
var state_27619__$1 = (function (){var statearr_27623 = state_27619;
(statearr_27623[(7)] = inst_27596__$1);

return statearr_27623;
})();
if(cljs.core.truth_(inst_27597)){
var statearr_27624_27651 = state_27619__$1;
(statearr_27624_27651[(1)] = (5));

} else {
var statearr_27625_27652 = state_27619__$1;
(statearr_27625_27652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (13))){
var state_27619__$1 = state_27619;
var statearr_27626_27653 = state_27619__$1;
(statearr_27626_27653[(2)] = null);

(statearr_27626_27653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (6))){
var inst_27596 = (state_27619[(7)]);
var inst_27602 = p.call(null,inst_27596);
var state_27619__$1 = state_27619;
if(cljs.core.truth_(inst_27602)){
var statearr_27627_27654 = state_27619__$1;
(statearr_27627_27654[(1)] = (9));

} else {
var statearr_27628_27655 = state_27619__$1;
(statearr_27628_27655[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (3))){
var inst_27617 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27619__$1,inst_27617);
} else {
if((state_val_27620 === (12))){
var state_27619__$1 = state_27619;
var statearr_27629_27656 = state_27619__$1;
(statearr_27629_27656[(2)] = null);

(statearr_27629_27656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (2))){
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27619__$1,(4),ch);
} else {
if((state_val_27620 === (11))){
var inst_27596 = (state_27619[(7)]);
var inst_27606 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27619__$1,(8),inst_27606,inst_27596);
} else {
if((state_val_27620 === (9))){
var state_27619__$1 = state_27619;
var statearr_27630_27657 = state_27619__$1;
(statearr_27630_27657[(2)] = tc);

(statearr_27630_27657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (5))){
var inst_27599 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27600 = cljs.core.async.close_BANG_.call(null,fc);
var state_27619__$1 = (function (){var statearr_27631 = state_27619;
(statearr_27631[(8)] = inst_27599);

return statearr_27631;
})();
var statearr_27632_27658 = state_27619__$1;
(statearr_27632_27658[(2)] = inst_27600);

(statearr_27632_27658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (14))){
var inst_27613 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
var statearr_27633_27659 = state_27619__$1;
(statearr_27633_27659[(2)] = inst_27613);

(statearr_27633_27659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (10))){
var state_27619__$1 = state_27619;
var statearr_27634_27660 = state_27619__$1;
(statearr_27634_27660[(2)] = fc);

(statearr_27634_27660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (8))){
var inst_27608 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
if(cljs.core.truth_(inst_27608)){
var statearr_27635_27661 = state_27619__$1;
(statearr_27635_27661[(1)] = (12));

} else {
var statearr_27636_27662 = state_27619__$1;
(statearr_27636_27662[(1)] = (13));

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
});})(c__26962__auto___27648,tc,fc))
;
return ((function (switch__26808__auto__,c__26962__auto___27648,tc,fc){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_27640 = [null,null,null,null,null,null,null,null,null];
(statearr_27640[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_27640[(1)] = (1));

return statearr_27640;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_27619){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27641){if((e27641 instanceof Object)){
var ex__26812__auto__ = e27641;
var statearr_27642_27663 = state_27619;
(statearr_27642_27663[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27664 = state_27619;
state_27619 = G__27664;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_27619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_27619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___27648,tc,fc))
})();
var state__26964__auto__ = (function (){var statearr_27643 = f__26963__auto__.call(null);
(statearr_27643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___27648);

return statearr_27643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___27648,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__){
return (function (state_27728){
var state_val_27729 = (state_27728[(1)]);
if((state_val_27729 === (7))){
var inst_27724 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27730_27751 = state_27728__$1;
(statearr_27730_27751[(2)] = inst_27724);

(statearr_27730_27751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (1))){
var inst_27708 = init;
var state_27728__$1 = (function (){var statearr_27731 = state_27728;
(statearr_27731[(7)] = inst_27708);

return statearr_27731;
})();
var statearr_27732_27752 = state_27728__$1;
(statearr_27732_27752[(2)] = null);

(statearr_27732_27752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (4))){
var inst_27711 = (state_27728[(8)]);
var inst_27711__$1 = (state_27728[(2)]);
var inst_27712 = (inst_27711__$1 == null);
var state_27728__$1 = (function (){var statearr_27733 = state_27728;
(statearr_27733[(8)] = inst_27711__$1);

return statearr_27733;
})();
if(cljs.core.truth_(inst_27712)){
var statearr_27734_27753 = state_27728__$1;
(statearr_27734_27753[(1)] = (5));

} else {
var statearr_27735_27754 = state_27728__$1;
(statearr_27735_27754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (6))){
var inst_27708 = (state_27728[(7)]);
var inst_27711 = (state_27728[(8)]);
var inst_27715 = (state_27728[(9)]);
var inst_27715__$1 = f.call(null,inst_27708,inst_27711);
var inst_27716 = cljs.core.reduced_QMARK_.call(null,inst_27715__$1);
var state_27728__$1 = (function (){var statearr_27736 = state_27728;
(statearr_27736[(9)] = inst_27715__$1);

return statearr_27736;
})();
if(inst_27716){
var statearr_27737_27755 = state_27728__$1;
(statearr_27737_27755[(1)] = (8));

} else {
var statearr_27738_27756 = state_27728__$1;
(statearr_27738_27756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (3))){
var inst_27726 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27728__$1,inst_27726);
} else {
if((state_val_27729 === (2))){
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27728__$1,(4),ch);
} else {
if((state_val_27729 === (9))){
var inst_27715 = (state_27728[(9)]);
var inst_27708 = inst_27715;
var state_27728__$1 = (function (){var statearr_27739 = state_27728;
(statearr_27739[(7)] = inst_27708);

return statearr_27739;
})();
var statearr_27740_27757 = state_27728__$1;
(statearr_27740_27757[(2)] = null);

(statearr_27740_27757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (5))){
var inst_27708 = (state_27728[(7)]);
var state_27728__$1 = state_27728;
var statearr_27741_27758 = state_27728__$1;
(statearr_27741_27758[(2)] = inst_27708);

(statearr_27741_27758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (10))){
var inst_27722 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27742_27759 = state_27728__$1;
(statearr_27742_27759[(2)] = inst_27722);

(statearr_27742_27759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (8))){
var inst_27715 = (state_27728[(9)]);
var inst_27718 = cljs.core.deref.call(null,inst_27715);
var state_27728__$1 = state_27728;
var statearr_27743_27760 = state_27728__$1;
(statearr_27743_27760[(2)] = inst_27718);

(statearr_27743_27760[(1)] = (10));


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
});})(c__26962__auto__))
;
return ((function (switch__26808__auto__,c__26962__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26809__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26809__auto____0 = (function (){
var statearr_27747 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27747[(0)] = cljs$core$async$reduce_$_state_machine__26809__auto__);

(statearr_27747[(1)] = (1));

return statearr_27747;
});
var cljs$core$async$reduce_$_state_machine__26809__auto____1 = (function (state_27728){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27748){if((e27748 instanceof Object)){
var ex__26812__auto__ = e27748;
var statearr_27749_27761 = state_27728;
(statearr_27749_27761[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27762 = state_27728;
state_27728 = G__27762;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26809__auto__ = function(state_27728){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26809__auto____1.call(this,state_27728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26809__auto____0;
cljs$core$async$reduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26809__auto____1;
return cljs$core$async$reduce_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__))
})();
var state__26964__auto__ = (function (){var statearr_27750 = f__26963__auto__.call(null);
(statearr_27750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_27750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__))
);

return c__26962__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27763 = [];
var len__25865__auto___27815 = arguments.length;
var i__25866__auto___27816 = (0);
while(true){
if((i__25866__auto___27816 < len__25865__auto___27815)){
args27763.push((arguments[i__25866__auto___27816]));

var G__27817 = (i__25866__auto___27816 + (1));
i__25866__auto___27816 = G__27817;
continue;
} else {
}
break;
}

var G__27765 = args27763.length;
switch (G__27765) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27763.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__){
return (function (state_27790){
var state_val_27791 = (state_27790[(1)]);
if((state_val_27791 === (7))){
var inst_27772 = (state_27790[(2)]);
var state_27790__$1 = state_27790;
var statearr_27792_27819 = state_27790__$1;
(statearr_27792_27819[(2)] = inst_27772);

(statearr_27792_27819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (1))){
var inst_27766 = cljs.core.seq.call(null,coll);
var inst_27767 = inst_27766;
var state_27790__$1 = (function (){var statearr_27793 = state_27790;
(statearr_27793[(7)] = inst_27767);

return statearr_27793;
})();
var statearr_27794_27820 = state_27790__$1;
(statearr_27794_27820[(2)] = null);

(statearr_27794_27820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (4))){
var inst_27767 = (state_27790[(7)]);
var inst_27770 = cljs.core.first.call(null,inst_27767);
var state_27790__$1 = state_27790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27790__$1,(7),ch,inst_27770);
} else {
if((state_val_27791 === (13))){
var inst_27784 = (state_27790[(2)]);
var state_27790__$1 = state_27790;
var statearr_27795_27821 = state_27790__$1;
(statearr_27795_27821[(2)] = inst_27784);

(statearr_27795_27821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (6))){
var inst_27775 = (state_27790[(2)]);
var state_27790__$1 = state_27790;
if(cljs.core.truth_(inst_27775)){
var statearr_27796_27822 = state_27790__$1;
(statearr_27796_27822[(1)] = (8));

} else {
var statearr_27797_27823 = state_27790__$1;
(statearr_27797_27823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (3))){
var inst_27788 = (state_27790[(2)]);
var state_27790__$1 = state_27790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27790__$1,inst_27788);
} else {
if((state_val_27791 === (12))){
var state_27790__$1 = state_27790;
var statearr_27798_27824 = state_27790__$1;
(statearr_27798_27824[(2)] = null);

(statearr_27798_27824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (2))){
var inst_27767 = (state_27790[(7)]);
var state_27790__$1 = state_27790;
if(cljs.core.truth_(inst_27767)){
var statearr_27799_27825 = state_27790__$1;
(statearr_27799_27825[(1)] = (4));

} else {
var statearr_27800_27826 = state_27790__$1;
(statearr_27800_27826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (11))){
var inst_27781 = cljs.core.async.close_BANG_.call(null,ch);
var state_27790__$1 = state_27790;
var statearr_27801_27827 = state_27790__$1;
(statearr_27801_27827[(2)] = inst_27781);

(statearr_27801_27827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (9))){
var state_27790__$1 = state_27790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27802_27828 = state_27790__$1;
(statearr_27802_27828[(1)] = (11));

} else {
var statearr_27803_27829 = state_27790__$1;
(statearr_27803_27829[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (5))){
var inst_27767 = (state_27790[(7)]);
var state_27790__$1 = state_27790;
var statearr_27804_27830 = state_27790__$1;
(statearr_27804_27830[(2)] = inst_27767);

(statearr_27804_27830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (10))){
var inst_27786 = (state_27790[(2)]);
var state_27790__$1 = state_27790;
var statearr_27805_27831 = state_27790__$1;
(statearr_27805_27831[(2)] = inst_27786);

(statearr_27805_27831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27791 === (8))){
var inst_27767 = (state_27790[(7)]);
var inst_27777 = cljs.core.next.call(null,inst_27767);
var inst_27767__$1 = inst_27777;
var state_27790__$1 = (function (){var statearr_27806 = state_27790;
(statearr_27806[(7)] = inst_27767__$1);

return statearr_27806;
})();
var statearr_27807_27832 = state_27790__$1;
(statearr_27807_27832[(2)] = null);

(statearr_27807_27832[(1)] = (2));


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
});})(c__26962__auto__))
;
return ((function (switch__26808__auto__,c__26962__auto__){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_27811 = [null,null,null,null,null,null,null,null];
(statearr_27811[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_27811[(1)] = (1));

return statearr_27811;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_27790){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27812){if((e27812 instanceof Object)){
var ex__26812__auto__ = e27812;
var statearr_27813_27833 = state_27790;
(statearr_27813_27833[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27834 = state_27790;
state_27790 = G__27834;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_27790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_27790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__))
})();
var state__26964__auto__ = (function (){var statearr_27814 = f__26963__auto__.call(null);
(statearr_27814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_27814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__))
);

return c__26962__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28060 = (function (mult,ch,cs,meta28061){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28061 = meta28061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28062,meta28061__$1){
var self__ = this;
var _28062__$1 = this;
return (new cljs.core.async.t_cljs$core$async28060(self__.mult,self__.ch,self__.cs,meta28061__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28062){
var self__ = this;
var _28062__$1 = this;
return self__.meta28061;
});})(cs))
;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28060.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28060.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28061","meta28061",-929459553,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28060";

cljs.core.async.t_cljs$core$async28060.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28060");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28060 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28060(mult__$1,ch__$1,cs__$1,meta28061){
return (new cljs.core.async.t_cljs$core$async28060(mult__$1,ch__$1,cs__$1,meta28061));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28060(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26962__auto___28285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___28285,cs,m,dchan,dctr,done){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___28285,cs,m,dchan,dctr,done){
return (function (state_28197){
var state_val_28198 = (state_28197[(1)]);
if((state_val_28198 === (7))){
var inst_28193 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28199_28286 = state_28197__$1;
(statearr_28199_28286[(2)] = inst_28193);

(statearr_28199_28286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (20))){
var inst_28096 = (state_28197[(7)]);
var inst_28108 = cljs.core.first.call(null,inst_28096);
var inst_28109 = cljs.core.nth.call(null,inst_28108,(0),null);
var inst_28110 = cljs.core.nth.call(null,inst_28108,(1),null);
var state_28197__$1 = (function (){var statearr_28200 = state_28197;
(statearr_28200[(8)] = inst_28109);

return statearr_28200;
})();
if(cljs.core.truth_(inst_28110)){
var statearr_28201_28287 = state_28197__$1;
(statearr_28201_28287[(1)] = (22));

} else {
var statearr_28202_28288 = state_28197__$1;
(statearr_28202_28288[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (27))){
var inst_28065 = (state_28197[(9)]);
var inst_28140 = (state_28197[(10)]);
var inst_28138 = (state_28197[(11)]);
var inst_28145 = (state_28197[(12)]);
var inst_28145__$1 = cljs.core._nth.call(null,inst_28138,inst_28140);
var inst_28146 = cljs.core.async.put_BANG_.call(null,inst_28145__$1,inst_28065,done);
var state_28197__$1 = (function (){var statearr_28203 = state_28197;
(statearr_28203[(12)] = inst_28145__$1);

return statearr_28203;
})();
if(cljs.core.truth_(inst_28146)){
var statearr_28204_28289 = state_28197__$1;
(statearr_28204_28289[(1)] = (30));

} else {
var statearr_28205_28290 = state_28197__$1;
(statearr_28205_28290[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (1))){
var state_28197__$1 = state_28197;
var statearr_28206_28291 = state_28197__$1;
(statearr_28206_28291[(2)] = null);

(statearr_28206_28291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (24))){
var inst_28096 = (state_28197[(7)]);
var inst_28115 = (state_28197[(2)]);
var inst_28116 = cljs.core.next.call(null,inst_28096);
var inst_28074 = inst_28116;
var inst_28075 = null;
var inst_28076 = (0);
var inst_28077 = (0);
var state_28197__$1 = (function (){var statearr_28207 = state_28197;
(statearr_28207[(13)] = inst_28074);

(statearr_28207[(14)] = inst_28076);

(statearr_28207[(15)] = inst_28075);

(statearr_28207[(16)] = inst_28115);

(statearr_28207[(17)] = inst_28077);

return statearr_28207;
})();
var statearr_28208_28292 = state_28197__$1;
(statearr_28208_28292[(2)] = null);

(statearr_28208_28292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (39))){
var state_28197__$1 = state_28197;
var statearr_28212_28293 = state_28197__$1;
(statearr_28212_28293[(2)] = null);

(statearr_28212_28293[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (4))){
var inst_28065 = (state_28197[(9)]);
var inst_28065__$1 = (state_28197[(2)]);
var inst_28066 = (inst_28065__$1 == null);
var state_28197__$1 = (function (){var statearr_28213 = state_28197;
(statearr_28213[(9)] = inst_28065__$1);

return statearr_28213;
})();
if(cljs.core.truth_(inst_28066)){
var statearr_28214_28294 = state_28197__$1;
(statearr_28214_28294[(1)] = (5));

} else {
var statearr_28215_28295 = state_28197__$1;
(statearr_28215_28295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (15))){
var inst_28074 = (state_28197[(13)]);
var inst_28076 = (state_28197[(14)]);
var inst_28075 = (state_28197[(15)]);
var inst_28077 = (state_28197[(17)]);
var inst_28092 = (state_28197[(2)]);
var inst_28093 = (inst_28077 + (1));
var tmp28209 = inst_28074;
var tmp28210 = inst_28076;
var tmp28211 = inst_28075;
var inst_28074__$1 = tmp28209;
var inst_28075__$1 = tmp28211;
var inst_28076__$1 = tmp28210;
var inst_28077__$1 = inst_28093;
var state_28197__$1 = (function (){var statearr_28216 = state_28197;
(statearr_28216[(13)] = inst_28074__$1);

(statearr_28216[(14)] = inst_28076__$1);

(statearr_28216[(18)] = inst_28092);

(statearr_28216[(15)] = inst_28075__$1);

(statearr_28216[(17)] = inst_28077__$1);

return statearr_28216;
})();
var statearr_28217_28296 = state_28197__$1;
(statearr_28217_28296[(2)] = null);

(statearr_28217_28296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (21))){
var inst_28119 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28221_28297 = state_28197__$1;
(statearr_28221_28297[(2)] = inst_28119);

(statearr_28221_28297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (31))){
var inst_28145 = (state_28197[(12)]);
var inst_28149 = done.call(null,null);
var inst_28150 = cljs.core.async.untap_STAR_.call(null,m,inst_28145);
var state_28197__$1 = (function (){var statearr_28222 = state_28197;
(statearr_28222[(19)] = inst_28149);

return statearr_28222;
})();
var statearr_28223_28298 = state_28197__$1;
(statearr_28223_28298[(2)] = inst_28150);

(statearr_28223_28298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (32))){
var inst_28139 = (state_28197[(20)]);
var inst_28140 = (state_28197[(10)]);
var inst_28138 = (state_28197[(11)]);
var inst_28137 = (state_28197[(21)]);
var inst_28152 = (state_28197[(2)]);
var inst_28153 = (inst_28140 + (1));
var tmp28218 = inst_28139;
var tmp28219 = inst_28138;
var tmp28220 = inst_28137;
var inst_28137__$1 = tmp28220;
var inst_28138__$1 = tmp28219;
var inst_28139__$1 = tmp28218;
var inst_28140__$1 = inst_28153;
var state_28197__$1 = (function (){var statearr_28224 = state_28197;
(statearr_28224[(20)] = inst_28139__$1);

(statearr_28224[(10)] = inst_28140__$1);

(statearr_28224[(22)] = inst_28152);

(statearr_28224[(11)] = inst_28138__$1);

(statearr_28224[(21)] = inst_28137__$1);

return statearr_28224;
})();
var statearr_28225_28299 = state_28197__$1;
(statearr_28225_28299[(2)] = null);

(statearr_28225_28299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (40))){
var inst_28165 = (state_28197[(23)]);
var inst_28169 = done.call(null,null);
var inst_28170 = cljs.core.async.untap_STAR_.call(null,m,inst_28165);
var state_28197__$1 = (function (){var statearr_28226 = state_28197;
(statearr_28226[(24)] = inst_28169);

return statearr_28226;
})();
var statearr_28227_28300 = state_28197__$1;
(statearr_28227_28300[(2)] = inst_28170);

(statearr_28227_28300[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (33))){
var inst_28156 = (state_28197[(25)]);
var inst_28158 = cljs.core.chunked_seq_QMARK_.call(null,inst_28156);
var state_28197__$1 = state_28197;
if(inst_28158){
var statearr_28228_28301 = state_28197__$1;
(statearr_28228_28301[(1)] = (36));

} else {
var statearr_28229_28302 = state_28197__$1;
(statearr_28229_28302[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (13))){
var inst_28086 = (state_28197[(26)]);
var inst_28089 = cljs.core.async.close_BANG_.call(null,inst_28086);
var state_28197__$1 = state_28197;
var statearr_28230_28303 = state_28197__$1;
(statearr_28230_28303[(2)] = inst_28089);

(statearr_28230_28303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (22))){
var inst_28109 = (state_28197[(8)]);
var inst_28112 = cljs.core.async.close_BANG_.call(null,inst_28109);
var state_28197__$1 = state_28197;
var statearr_28231_28304 = state_28197__$1;
(statearr_28231_28304[(2)] = inst_28112);

(statearr_28231_28304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (36))){
var inst_28156 = (state_28197[(25)]);
var inst_28160 = cljs.core.chunk_first.call(null,inst_28156);
var inst_28161 = cljs.core.chunk_rest.call(null,inst_28156);
var inst_28162 = cljs.core.count.call(null,inst_28160);
var inst_28137 = inst_28161;
var inst_28138 = inst_28160;
var inst_28139 = inst_28162;
var inst_28140 = (0);
var state_28197__$1 = (function (){var statearr_28232 = state_28197;
(statearr_28232[(20)] = inst_28139);

(statearr_28232[(10)] = inst_28140);

(statearr_28232[(11)] = inst_28138);

(statearr_28232[(21)] = inst_28137);

return statearr_28232;
})();
var statearr_28233_28305 = state_28197__$1;
(statearr_28233_28305[(2)] = null);

(statearr_28233_28305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (41))){
var inst_28156 = (state_28197[(25)]);
var inst_28172 = (state_28197[(2)]);
var inst_28173 = cljs.core.next.call(null,inst_28156);
var inst_28137 = inst_28173;
var inst_28138 = null;
var inst_28139 = (0);
var inst_28140 = (0);
var state_28197__$1 = (function (){var statearr_28234 = state_28197;
(statearr_28234[(20)] = inst_28139);

(statearr_28234[(10)] = inst_28140);

(statearr_28234[(11)] = inst_28138);

(statearr_28234[(27)] = inst_28172);

(statearr_28234[(21)] = inst_28137);

return statearr_28234;
})();
var statearr_28235_28306 = state_28197__$1;
(statearr_28235_28306[(2)] = null);

(statearr_28235_28306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (43))){
var state_28197__$1 = state_28197;
var statearr_28236_28307 = state_28197__$1;
(statearr_28236_28307[(2)] = null);

(statearr_28236_28307[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (29))){
var inst_28181 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28237_28308 = state_28197__$1;
(statearr_28237_28308[(2)] = inst_28181);

(statearr_28237_28308[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (44))){
var inst_28190 = (state_28197[(2)]);
var state_28197__$1 = (function (){var statearr_28238 = state_28197;
(statearr_28238[(28)] = inst_28190);

return statearr_28238;
})();
var statearr_28239_28309 = state_28197__$1;
(statearr_28239_28309[(2)] = null);

(statearr_28239_28309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (6))){
var inst_28129 = (state_28197[(29)]);
var inst_28128 = cljs.core.deref.call(null,cs);
var inst_28129__$1 = cljs.core.keys.call(null,inst_28128);
var inst_28130 = cljs.core.count.call(null,inst_28129__$1);
var inst_28131 = cljs.core.reset_BANG_.call(null,dctr,inst_28130);
var inst_28136 = cljs.core.seq.call(null,inst_28129__$1);
var inst_28137 = inst_28136;
var inst_28138 = null;
var inst_28139 = (0);
var inst_28140 = (0);
var state_28197__$1 = (function (){var statearr_28240 = state_28197;
(statearr_28240[(20)] = inst_28139);

(statearr_28240[(30)] = inst_28131);

(statearr_28240[(10)] = inst_28140);

(statearr_28240[(29)] = inst_28129__$1);

(statearr_28240[(11)] = inst_28138);

(statearr_28240[(21)] = inst_28137);

return statearr_28240;
})();
var statearr_28241_28310 = state_28197__$1;
(statearr_28241_28310[(2)] = null);

(statearr_28241_28310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (28))){
var inst_28156 = (state_28197[(25)]);
var inst_28137 = (state_28197[(21)]);
var inst_28156__$1 = cljs.core.seq.call(null,inst_28137);
var state_28197__$1 = (function (){var statearr_28242 = state_28197;
(statearr_28242[(25)] = inst_28156__$1);

return statearr_28242;
})();
if(inst_28156__$1){
var statearr_28243_28311 = state_28197__$1;
(statearr_28243_28311[(1)] = (33));

} else {
var statearr_28244_28312 = state_28197__$1;
(statearr_28244_28312[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (25))){
var inst_28139 = (state_28197[(20)]);
var inst_28140 = (state_28197[(10)]);
var inst_28142 = (inst_28140 < inst_28139);
var inst_28143 = inst_28142;
var state_28197__$1 = state_28197;
if(cljs.core.truth_(inst_28143)){
var statearr_28245_28313 = state_28197__$1;
(statearr_28245_28313[(1)] = (27));

} else {
var statearr_28246_28314 = state_28197__$1;
(statearr_28246_28314[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (34))){
var state_28197__$1 = state_28197;
var statearr_28247_28315 = state_28197__$1;
(statearr_28247_28315[(2)] = null);

(statearr_28247_28315[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (17))){
var state_28197__$1 = state_28197;
var statearr_28248_28316 = state_28197__$1;
(statearr_28248_28316[(2)] = null);

(statearr_28248_28316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (3))){
var inst_28195 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28197__$1,inst_28195);
} else {
if((state_val_28198 === (12))){
var inst_28124 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28249_28317 = state_28197__$1;
(statearr_28249_28317[(2)] = inst_28124);

(statearr_28249_28317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (2))){
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28197__$1,(4),ch);
} else {
if((state_val_28198 === (23))){
var state_28197__$1 = state_28197;
var statearr_28250_28318 = state_28197__$1;
(statearr_28250_28318[(2)] = null);

(statearr_28250_28318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (35))){
var inst_28179 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28251_28319 = state_28197__$1;
(statearr_28251_28319[(2)] = inst_28179);

(statearr_28251_28319[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (19))){
var inst_28096 = (state_28197[(7)]);
var inst_28100 = cljs.core.chunk_first.call(null,inst_28096);
var inst_28101 = cljs.core.chunk_rest.call(null,inst_28096);
var inst_28102 = cljs.core.count.call(null,inst_28100);
var inst_28074 = inst_28101;
var inst_28075 = inst_28100;
var inst_28076 = inst_28102;
var inst_28077 = (0);
var state_28197__$1 = (function (){var statearr_28252 = state_28197;
(statearr_28252[(13)] = inst_28074);

(statearr_28252[(14)] = inst_28076);

(statearr_28252[(15)] = inst_28075);

(statearr_28252[(17)] = inst_28077);

return statearr_28252;
})();
var statearr_28253_28320 = state_28197__$1;
(statearr_28253_28320[(2)] = null);

(statearr_28253_28320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (11))){
var inst_28074 = (state_28197[(13)]);
var inst_28096 = (state_28197[(7)]);
var inst_28096__$1 = cljs.core.seq.call(null,inst_28074);
var state_28197__$1 = (function (){var statearr_28254 = state_28197;
(statearr_28254[(7)] = inst_28096__$1);

return statearr_28254;
})();
if(inst_28096__$1){
var statearr_28255_28321 = state_28197__$1;
(statearr_28255_28321[(1)] = (16));

} else {
var statearr_28256_28322 = state_28197__$1;
(statearr_28256_28322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (9))){
var inst_28126 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28257_28323 = state_28197__$1;
(statearr_28257_28323[(2)] = inst_28126);

(statearr_28257_28323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (5))){
var inst_28072 = cljs.core.deref.call(null,cs);
var inst_28073 = cljs.core.seq.call(null,inst_28072);
var inst_28074 = inst_28073;
var inst_28075 = null;
var inst_28076 = (0);
var inst_28077 = (0);
var state_28197__$1 = (function (){var statearr_28258 = state_28197;
(statearr_28258[(13)] = inst_28074);

(statearr_28258[(14)] = inst_28076);

(statearr_28258[(15)] = inst_28075);

(statearr_28258[(17)] = inst_28077);

return statearr_28258;
})();
var statearr_28259_28324 = state_28197__$1;
(statearr_28259_28324[(2)] = null);

(statearr_28259_28324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (14))){
var state_28197__$1 = state_28197;
var statearr_28260_28325 = state_28197__$1;
(statearr_28260_28325[(2)] = null);

(statearr_28260_28325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (45))){
var inst_28187 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28261_28326 = state_28197__$1;
(statearr_28261_28326[(2)] = inst_28187);

(statearr_28261_28326[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (26))){
var inst_28129 = (state_28197[(29)]);
var inst_28183 = (state_28197[(2)]);
var inst_28184 = cljs.core.seq.call(null,inst_28129);
var state_28197__$1 = (function (){var statearr_28262 = state_28197;
(statearr_28262[(31)] = inst_28183);

return statearr_28262;
})();
if(inst_28184){
var statearr_28263_28327 = state_28197__$1;
(statearr_28263_28327[(1)] = (42));

} else {
var statearr_28264_28328 = state_28197__$1;
(statearr_28264_28328[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (16))){
var inst_28096 = (state_28197[(7)]);
var inst_28098 = cljs.core.chunked_seq_QMARK_.call(null,inst_28096);
var state_28197__$1 = state_28197;
if(inst_28098){
var statearr_28265_28329 = state_28197__$1;
(statearr_28265_28329[(1)] = (19));

} else {
var statearr_28266_28330 = state_28197__$1;
(statearr_28266_28330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (38))){
var inst_28176 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28267_28331 = state_28197__$1;
(statearr_28267_28331[(2)] = inst_28176);

(statearr_28267_28331[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (30))){
var state_28197__$1 = state_28197;
var statearr_28268_28332 = state_28197__$1;
(statearr_28268_28332[(2)] = null);

(statearr_28268_28332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (10))){
var inst_28075 = (state_28197[(15)]);
var inst_28077 = (state_28197[(17)]);
var inst_28085 = cljs.core._nth.call(null,inst_28075,inst_28077);
var inst_28086 = cljs.core.nth.call(null,inst_28085,(0),null);
var inst_28087 = cljs.core.nth.call(null,inst_28085,(1),null);
var state_28197__$1 = (function (){var statearr_28269 = state_28197;
(statearr_28269[(26)] = inst_28086);

return statearr_28269;
})();
if(cljs.core.truth_(inst_28087)){
var statearr_28270_28333 = state_28197__$1;
(statearr_28270_28333[(1)] = (13));

} else {
var statearr_28271_28334 = state_28197__$1;
(statearr_28271_28334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (18))){
var inst_28122 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28272_28335 = state_28197__$1;
(statearr_28272_28335[(2)] = inst_28122);

(statearr_28272_28335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (42))){
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28197__$1,(45),dchan);
} else {
if((state_val_28198 === (37))){
var inst_28165 = (state_28197[(23)]);
var inst_28065 = (state_28197[(9)]);
var inst_28156 = (state_28197[(25)]);
var inst_28165__$1 = cljs.core.first.call(null,inst_28156);
var inst_28166 = cljs.core.async.put_BANG_.call(null,inst_28165__$1,inst_28065,done);
var state_28197__$1 = (function (){var statearr_28273 = state_28197;
(statearr_28273[(23)] = inst_28165__$1);

return statearr_28273;
})();
if(cljs.core.truth_(inst_28166)){
var statearr_28274_28336 = state_28197__$1;
(statearr_28274_28336[(1)] = (39));

} else {
var statearr_28275_28337 = state_28197__$1;
(statearr_28275_28337[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (8))){
var inst_28076 = (state_28197[(14)]);
var inst_28077 = (state_28197[(17)]);
var inst_28079 = (inst_28077 < inst_28076);
var inst_28080 = inst_28079;
var state_28197__$1 = state_28197;
if(cljs.core.truth_(inst_28080)){
var statearr_28276_28338 = state_28197__$1;
(statearr_28276_28338[(1)] = (10));

} else {
var statearr_28277_28339 = state_28197__$1;
(statearr_28277_28339[(1)] = (11));

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
});})(c__26962__auto___28285,cs,m,dchan,dctr,done))
;
return ((function (switch__26808__auto__,c__26962__auto___28285,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26809__auto__ = null;
var cljs$core$async$mult_$_state_machine__26809__auto____0 = (function (){
var statearr_28281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28281[(0)] = cljs$core$async$mult_$_state_machine__26809__auto__);

(statearr_28281[(1)] = (1));

return statearr_28281;
});
var cljs$core$async$mult_$_state_machine__26809__auto____1 = (function (state_28197){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28282){if((e28282 instanceof Object)){
var ex__26812__auto__ = e28282;
var statearr_28283_28340 = state_28197;
(statearr_28283_28340[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28341 = state_28197;
state_28197 = G__28341;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26809__auto__ = function(state_28197){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26809__auto____1.call(this,state_28197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26809__auto____0;
cljs$core$async$mult_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26809__auto____1;
return cljs$core$async$mult_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___28285,cs,m,dchan,dctr,done))
})();
var state__26964__auto__ = (function (){var statearr_28284 = f__26963__auto__.call(null);
(statearr_28284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___28285);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___28285,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28342 = [];
var len__25865__auto___28345 = arguments.length;
var i__25866__auto___28346 = (0);
while(true){
if((i__25866__auto___28346 < len__25865__auto___28345)){
args28342.push((arguments[i__25866__auto___28346]));

var G__28347 = (i__25866__auto___28346 + (1));
i__25866__auto___28346 = G__28347;
continue;
} else {
}
break;
}

var G__28344 = args28342.length;
switch (G__28344) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28342.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___28359 = arguments.length;
var i__25866__auto___28360 = (0);
while(true){
if((i__25866__auto___28360 < len__25865__auto___28359)){
args__25872__auto__.push((arguments[i__25866__auto___28360]));

var G__28361 = (i__25866__auto___28360 + (1));
i__25866__auto___28360 = G__28361;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28353){
var map__28354 = p__28353;
var map__28354__$1 = ((((!((map__28354 == null)))?((((map__28354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28354):map__28354);
var opts = map__28354__$1;
var statearr_28356_28362 = state;
(statearr_28356_28362[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28354,map__28354__$1,opts){
return (function (val){
var statearr_28357_28363 = state;
(statearr_28357_28363[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28354,map__28354__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28358_28364 = state;
(statearr_28358_28364[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28349){
var G__28350 = cljs.core.first.call(null,seq28349);
var seq28349__$1 = cljs.core.next.call(null,seq28349);
var G__28351 = cljs.core.first.call(null,seq28349__$1);
var seq28349__$2 = cljs.core.next.call(null,seq28349__$1);
var G__28352 = cljs.core.first.call(null,seq28349__$2);
var seq28349__$3 = cljs.core.next.call(null,seq28349__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28350,G__28351,G__28352,seq28349__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28530 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28531){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28531 = meta28531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28532,meta28531__$1){
var self__ = this;
var _28532__$1 = this;
return (new cljs.core.async.t_cljs$core$async28530(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28531__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28532){
var self__ = this;
var _28532__$1 = this;
return self__.meta28531;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28531","meta28531",-1792328145,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28530";

cljs.core.async.t_cljs$core$async28530.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28530");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28530 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28530(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28531){
return (new cljs.core.async.t_cljs$core$async28530(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28531));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28530(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26962__auto___28695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___28695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___28695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28632){
var state_val_28633 = (state_28632[(1)]);
if((state_val_28633 === (7))){
var inst_28548 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28634_28696 = state_28632__$1;
(statearr_28634_28696[(2)] = inst_28548);

(statearr_28634_28696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (20))){
var inst_28560 = (state_28632[(7)]);
var state_28632__$1 = state_28632;
var statearr_28635_28697 = state_28632__$1;
(statearr_28635_28697[(2)] = inst_28560);

(statearr_28635_28697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (27))){
var state_28632__$1 = state_28632;
var statearr_28636_28698 = state_28632__$1;
(statearr_28636_28698[(2)] = null);

(statearr_28636_28698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (1))){
var inst_28536 = (state_28632[(8)]);
var inst_28536__$1 = calc_state.call(null);
var inst_28538 = (inst_28536__$1 == null);
var inst_28539 = cljs.core.not.call(null,inst_28538);
var state_28632__$1 = (function (){var statearr_28637 = state_28632;
(statearr_28637[(8)] = inst_28536__$1);

return statearr_28637;
})();
if(inst_28539){
var statearr_28638_28699 = state_28632__$1;
(statearr_28638_28699[(1)] = (2));

} else {
var statearr_28639_28700 = state_28632__$1;
(statearr_28639_28700[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (24))){
var inst_28592 = (state_28632[(9)]);
var inst_28606 = (state_28632[(10)]);
var inst_28583 = (state_28632[(11)]);
var inst_28606__$1 = inst_28583.call(null,inst_28592);
var state_28632__$1 = (function (){var statearr_28640 = state_28632;
(statearr_28640[(10)] = inst_28606__$1);

return statearr_28640;
})();
if(cljs.core.truth_(inst_28606__$1)){
var statearr_28641_28701 = state_28632__$1;
(statearr_28641_28701[(1)] = (29));

} else {
var statearr_28642_28702 = state_28632__$1;
(statearr_28642_28702[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (4))){
var inst_28551 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28551)){
var statearr_28643_28703 = state_28632__$1;
(statearr_28643_28703[(1)] = (8));

} else {
var statearr_28644_28704 = state_28632__$1;
(statearr_28644_28704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (15))){
var inst_28577 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28577)){
var statearr_28645_28705 = state_28632__$1;
(statearr_28645_28705[(1)] = (19));

} else {
var statearr_28646_28706 = state_28632__$1;
(statearr_28646_28706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (21))){
var inst_28582 = (state_28632[(12)]);
var inst_28582__$1 = (state_28632[(2)]);
var inst_28583 = cljs.core.get.call(null,inst_28582__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28584 = cljs.core.get.call(null,inst_28582__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28585 = cljs.core.get.call(null,inst_28582__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28632__$1 = (function (){var statearr_28647 = state_28632;
(statearr_28647[(12)] = inst_28582__$1);

(statearr_28647[(13)] = inst_28584);

(statearr_28647[(11)] = inst_28583);

return statearr_28647;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28632__$1,(22),inst_28585);
} else {
if((state_val_28633 === (31))){
var inst_28614 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28614)){
var statearr_28648_28707 = state_28632__$1;
(statearr_28648_28707[(1)] = (32));

} else {
var statearr_28649_28708 = state_28632__$1;
(statearr_28649_28708[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (32))){
var inst_28591 = (state_28632[(14)]);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28632__$1,(35),out,inst_28591);
} else {
if((state_val_28633 === (33))){
var inst_28582 = (state_28632[(12)]);
var inst_28560 = inst_28582;
var state_28632__$1 = (function (){var statearr_28650 = state_28632;
(statearr_28650[(7)] = inst_28560);

return statearr_28650;
})();
var statearr_28651_28709 = state_28632__$1;
(statearr_28651_28709[(2)] = null);

(statearr_28651_28709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (13))){
var inst_28560 = (state_28632[(7)]);
var inst_28567 = inst_28560.cljs$lang$protocol_mask$partition0$;
var inst_28568 = (inst_28567 & (64));
var inst_28569 = inst_28560.cljs$core$ISeq$;
var inst_28570 = (inst_28568) || (inst_28569);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28570)){
var statearr_28652_28710 = state_28632__$1;
(statearr_28652_28710[(1)] = (16));

} else {
var statearr_28653_28711 = state_28632__$1;
(statearr_28653_28711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (22))){
var inst_28592 = (state_28632[(9)]);
var inst_28591 = (state_28632[(14)]);
var inst_28590 = (state_28632[(2)]);
var inst_28591__$1 = cljs.core.nth.call(null,inst_28590,(0),null);
var inst_28592__$1 = cljs.core.nth.call(null,inst_28590,(1),null);
var inst_28593 = (inst_28591__$1 == null);
var inst_28594 = cljs.core._EQ_.call(null,inst_28592__$1,change);
var inst_28595 = (inst_28593) || (inst_28594);
var state_28632__$1 = (function (){var statearr_28654 = state_28632;
(statearr_28654[(9)] = inst_28592__$1);

(statearr_28654[(14)] = inst_28591__$1);

return statearr_28654;
})();
if(cljs.core.truth_(inst_28595)){
var statearr_28655_28712 = state_28632__$1;
(statearr_28655_28712[(1)] = (23));

} else {
var statearr_28656_28713 = state_28632__$1;
(statearr_28656_28713[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (36))){
var inst_28582 = (state_28632[(12)]);
var inst_28560 = inst_28582;
var state_28632__$1 = (function (){var statearr_28657 = state_28632;
(statearr_28657[(7)] = inst_28560);

return statearr_28657;
})();
var statearr_28658_28714 = state_28632__$1;
(statearr_28658_28714[(2)] = null);

(statearr_28658_28714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (29))){
var inst_28606 = (state_28632[(10)]);
var state_28632__$1 = state_28632;
var statearr_28659_28715 = state_28632__$1;
(statearr_28659_28715[(2)] = inst_28606);

(statearr_28659_28715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (6))){
var state_28632__$1 = state_28632;
var statearr_28660_28716 = state_28632__$1;
(statearr_28660_28716[(2)] = false);

(statearr_28660_28716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (28))){
var inst_28602 = (state_28632[(2)]);
var inst_28603 = calc_state.call(null);
var inst_28560 = inst_28603;
var state_28632__$1 = (function (){var statearr_28661 = state_28632;
(statearr_28661[(7)] = inst_28560);

(statearr_28661[(15)] = inst_28602);

return statearr_28661;
})();
var statearr_28662_28717 = state_28632__$1;
(statearr_28662_28717[(2)] = null);

(statearr_28662_28717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (25))){
var inst_28628 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28663_28718 = state_28632__$1;
(statearr_28663_28718[(2)] = inst_28628);

(statearr_28663_28718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (34))){
var inst_28626 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28664_28719 = state_28632__$1;
(statearr_28664_28719[(2)] = inst_28626);

(statearr_28664_28719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (17))){
var state_28632__$1 = state_28632;
var statearr_28665_28720 = state_28632__$1;
(statearr_28665_28720[(2)] = false);

(statearr_28665_28720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (3))){
var state_28632__$1 = state_28632;
var statearr_28666_28721 = state_28632__$1;
(statearr_28666_28721[(2)] = false);

(statearr_28666_28721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (12))){
var inst_28630 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28632__$1,inst_28630);
} else {
if((state_val_28633 === (2))){
var inst_28536 = (state_28632[(8)]);
var inst_28541 = inst_28536.cljs$lang$protocol_mask$partition0$;
var inst_28542 = (inst_28541 & (64));
var inst_28543 = inst_28536.cljs$core$ISeq$;
var inst_28544 = (inst_28542) || (inst_28543);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28544)){
var statearr_28667_28722 = state_28632__$1;
(statearr_28667_28722[(1)] = (5));

} else {
var statearr_28668_28723 = state_28632__$1;
(statearr_28668_28723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (23))){
var inst_28591 = (state_28632[(14)]);
var inst_28597 = (inst_28591 == null);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28597)){
var statearr_28669_28724 = state_28632__$1;
(statearr_28669_28724[(1)] = (26));

} else {
var statearr_28670_28725 = state_28632__$1;
(statearr_28670_28725[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (35))){
var inst_28617 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
if(cljs.core.truth_(inst_28617)){
var statearr_28671_28726 = state_28632__$1;
(statearr_28671_28726[(1)] = (36));

} else {
var statearr_28672_28727 = state_28632__$1;
(statearr_28672_28727[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (19))){
var inst_28560 = (state_28632[(7)]);
var inst_28579 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28560);
var state_28632__$1 = state_28632;
var statearr_28673_28728 = state_28632__$1;
(statearr_28673_28728[(2)] = inst_28579);

(statearr_28673_28728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (11))){
var inst_28560 = (state_28632[(7)]);
var inst_28564 = (inst_28560 == null);
var inst_28565 = cljs.core.not.call(null,inst_28564);
var state_28632__$1 = state_28632;
if(inst_28565){
var statearr_28674_28729 = state_28632__$1;
(statearr_28674_28729[(1)] = (13));

} else {
var statearr_28675_28730 = state_28632__$1;
(statearr_28675_28730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (9))){
var inst_28536 = (state_28632[(8)]);
var state_28632__$1 = state_28632;
var statearr_28676_28731 = state_28632__$1;
(statearr_28676_28731[(2)] = inst_28536);

(statearr_28676_28731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (5))){
var state_28632__$1 = state_28632;
var statearr_28677_28732 = state_28632__$1;
(statearr_28677_28732[(2)] = true);

(statearr_28677_28732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (14))){
var state_28632__$1 = state_28632;
var statearr_28678_28733 = state_28632__$1;
(statearr_28678_28733[(2)] = false);

(statearr_28678_28733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (26))){
var inst_28592 = (state_28632[(9)]);
var inst_28599 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28592);
var state_28632__$1 = state_28632;
var statearr_28679_28734 = state_28632__$1;
(statearr_28679_28734[(2)] = inst_28599);

(statearr_28679_28734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (16))){
var state_28632__$1 = state_28632;
var statearr_28680_28735 = state_28632__$1;
(statearr_28680_28735[(2)] = true);

(statearr_28680_28735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (38))){
var inst_28622 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28681_28736 = state_28632__$1;
(statearr_28681_28736[(2)] = inst_28622);

(statearr_28681_28736[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (30))){
var inst_28592 = (state_28632[(9)]);
var inst_28584 = (state_28632[(13)]);
var inst_28583 = (state_28632[(11)]);
var inst_28609 = cljs.core.empty_QMARK_.call(null,inst_28583);
var inst_28610 = inst_28584.call(null,inst_28592);
var inst_28611 = cljs.core.not.call(null,inst_28610);
var inst_28612 = (inst_28609) && (inst_28611);
var state_28632__$1 = state_28632;
var statearr_28682_28737 = state_28632__$1;
(statearr_28682_28737[(2)] = inst_28612);

(statearr_28682_28737[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (10))){
var inst_28536 = (state_28632[(8)]);
var inst_28556 = (state_28632[(2)]);
var inst_28557 = cljs.core.get.call(null,inst_28556,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28558 = cljs.core.get.call(null,inst_28556,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28559 = cljs.core.get.call(null,inst_28556,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28560 = inst_28536;
var state_28632__$1 = (function (){var statearr_28683 = state_28632;
(statearr_28683[(7)] = inst_28560);

(statearr_28683[(16)] = inst_28557);

(statearr_28683[(17)] = inst_28559);

(statearr_28683[(18)] = inst_28558);

return statearr_28683;
})();
var statearr_28684_28738 = state_28632__$1;
(statearr_28684_28738[(2)] = null);

(statearr_28684_28738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (18))){
var inst_28574 = (state_28632[(2)]);
var state_28632__$1 = state_28632;
var statearr_28685_28739 = state_28632__$1;
(statearr_28685_28739[(2)] = inst_28574);

(statearr_28685_28739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (37))){
var state_28632__$1 = state_28632;
var statearr_28686_28740 = state_28632__$1;
(statearr_28686_28740[(2)] = null);

(statearr_28686_28740[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28633 === (8))){
var inst_28536 = (state_28632[(8)]);
var inst_28553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28536);
var state_28632__$1 = state_28632;
var statearr_28687_28741 = state_28632__$1;
(statearr_28687_28741[(2)] = inst_28553);

(statearr_28687_28741[(1)] = (10));


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
});})(c__26962__auto___28695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26808__auto__,c__26962__auto___28695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26809__auto__ = null;
var cljs$core$async$mix_$_state_machine__26809__auto____0 = (function (){
var statearr_28691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28691[(0)] = cljs$core$async$mix_$_state_machine__26809__auto__);

(statearr_28691[(1)] = (1));

return statearr_28691;
});
var cljs$core$async$mix_$_state_machine__26809__auto____1 = (function (state_28632){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28692){if((e28692 instanceof Object)){
var ex__26812__auto__ = e28692;
var statearr_28693_28742 = state_28632;
(statearr_28693_28742[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28743 = state_28632;
state_28632 = G__28743;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26809__auto__ = function(state_28632){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26809__auto____1.call(this,state_28632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26809__auto____0;
cljs$core$async$mix_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26809__auto____1;
return cljs$core$async$mix_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___28695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26964__auto__ = (function (){var statearr_28694 = f__26963__auto__.call(null);
(statearr_28694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___28695);

return statearr_28694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___28695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28744 = [];
var len__25865__auto___28747 = arguments.length;
var i__25866__auto___28748 = (0);
while(true){
if((i__25866__auto___28748 < len__25865__auto___28747)){
args28744.push((arguments[i__25866__auto___28748]));

var G__28749 = (i__25866__auto___28748 + (1));
i__25866__auto___28748 = G__28749;
continue;
} else {
}
break;
}

var G__28746 = args28744.length;
switch (G__28746) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28744.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args28752 = [];
var len__25865__auto___28877 = arguments.length;
var i__25866__auto___28878 = (0);
while(true){
if((i__25866__auto___28878 < len__25865__auto___28877)){
args28752.push((arguments[i__25866__auto___28878]));

var G__28879 = (i__25866__auto___28878 + (1));
i__25866__auto___28878 = G__28879;
continue;
} else {
}
break;
}

var G__28754 = args28752.length;
switch (G__28754) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28752.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__28751_SHARP_){
if(cljs.core.truth_(p1__28751_SHARP_.call(null,topic))){
return p1__28751_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28751_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28755 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28756){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28756 = meta28756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28757,meta28756__$1){
var self__ = this;
var _28757__$1 = this;
return (new cljs.core.async.t_cljs$core$async28755(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28756__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28757){
var self__ = this;
var _28757__$1 = this;
return self__.meta28756;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28756","meta28756",830528522,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28755";

cljs.core.async.t_cljs$core$async28755.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28755");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28755 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28756){
return (new cljs.core.async.t_cljs$core$async28755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28756));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28755(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26962__auto___28881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___28881,mults,ensure_mult,p){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___28881,mults,ensure_mult,p){
return (function (state_28829){
var state_val_28830 = (state_28829[(1)]);
if((state_val_28830 === (7))){
var inst_28825 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28831_28882 = state_28829__$1;
(statearr_28831_28882[(2)] = inst_28825);

(statearr_28831_28882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (20))){
var state_28829__$1 = state_28829;
var statearr_28832_28883 = state_28829__$1;
(statearr_28832_28883[(2)] = null);

(statearr_28832_28883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (1))){
var state_28829__$1 = state_28829;
var statearr_28833_28884 = state_28829__$1;
(statearr_28833_28884[(2)] = null);

(statearr_28833_28884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (24))){
var inst_28808 = (state_28829[(7)]);
var inst_28817 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28808);
var state_28829__$1 = state_28829;
var statearr_28834_28885 = state_28829__$1;
(statearr_28834_28885[(2)] = inst_28817);

(statearr_28834_28885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (4))){
var inst_28760 = (state_28829[(8)]);
var inst_28760__$1 = (state_28829[(2)]);
var inst_28761 = (inst_28760__$1 == null);
var state_28829__$1 = (function (){var statearr_28835 = state_28829;
(statearr_28835[(8)] = inst_28760__$1);

return statearr_28835;
})();
if(cljs.core.truth_(inst_28761)){
var statearr_28836_28886 = state_28829__$1;
(statearr_28836_28886[(1)] = (5));

} else {
var statearr_28837_28887 = state_28829__$1;
(statearr_28837_28887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (15))){
var inst_28802 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28838_28888 = state_28829__$1;
(statearr_28838_28888[(2)] = inst_28802);

(statearr_28838_28888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (21))){
var inst_28822 = (state_28829[(2)]);
var state_28829__$1 = (function (){var statearr_28839 = state_28829;
(statearr_28839[(9)] = inst_28822);

return statearr_28839;
})();
var statearr_28840_28889 = state_28829__$1;
(statearr_28840_28889[(2)] = null);

(statearr_28840_28889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (13))){
var inst_28784 = (state_28829[(10)]);
var inst_28786 = cljs.core.chunked_seq_QMARK_.call(null,inst_28784);
var state_28829__$1 = state_28829;
if(inst_28786){
var statearr_28841_28890 = state_28829__$1;
(statearr_28841_28890[(1)] = (16));

} else {
var statearr_28842_28891 = state_28829__$1;
(statearr_28842_28891[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (22))){
var inst_28814 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
if(cljs.core.truth_(inst_28814)){
var statearr_28843_28892 = state_28829__$1;
(statearr_28843_28892[(1)] = (23));

} else {
var statearr_28844_28893 = state_28829__$1;
(statearr_28844_28893[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (6))){
var inst_28810 = (state_28829[(11)]);
var inst_28808 = (state_28829[(7)]);
var inst_28760 = (state_28829[(8)]);
var inst_28808__$1 = topic_fn.call(null,inst_28760);
var inst_28809 = cljs.core.deref.call(null,mults);
var inst_28810__$1 = cljs.core.get.call(null,inst_28809,inst_28808__$1);
var state_28829__$1 = (function (){var statearr_28845 = state_28829;
(statearr_28845[(11)] = inst_28810__$1);

(statearr_28845[(7)] = inst_28808__$1);

return statearr_28845;
})();
if(cljs.core.truth_(inst_28810__$1)){
var statearr_28846_28894 = state_28829__$1;
(statearr_28846_28894[(1)] = (19));

} else {
var statearr_28847_28895 = state_28829__$1;
(statearr_28847_28895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (25))){
var inst_28819 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28848_28896 = state_28829__$1;
(statearr_28848_28896[(2)] = inst_28819);

(statearr_28848_28896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (17))){
var inst_28784 = (state_28829[(10)]);
var inst_28793 = cljs.core.first.call(null,inst_28784);
var inst_28794 = cljs.core.async.muxch_STAR_.call(null,inst_28793);
var inst_28795 = cljs.core.async.close_BANG_.call(null,inst_28794);
var inst_28796 = cljs.core.next.call(null,inst_28784);
var inst_28770 = inst_28796;
var inst_28771 = null;
var inst_28772 = (0);
var inst_28773 = (0);
var state_28829__$1 = (function (){var statearr_28849 = state_28829;
(statearr_28849[(12)] = inst_28773);

(statearr_28849[(13)] = inst_28770);

(statearr_28849[(14)] = inst_28771);

(statearr_28849[(15)] = inst_28795);

(statearr_28849[(16)] = inst_28772);

return statearr_28849;
})();
var statearr_28850_28897 = state_28829__$1;
(statearr_28850_28897[(2)] = null);

(statearr_28850_28897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (3))){
var inst_28827 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28829__$1,inst_28827);
} else {
if((state_val_28830 === (12))){
var inst_28804 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28851_28898 = state_28829__$1;
(statearr_28851_28898[(2)] = inst_28804);

(statearr_28851_28898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (2))){
var state_28829__$1 = state_28829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28829__$1,(4),ch);
} else {
if((state_val_28830 === (23))){
var state_28829__$1 = state_28829;
var statearr_28852_28899 = state_28829__$1;
(statearr_28852_28899[(2)] = null);

(statearr_28852_28899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (19))){
var inst_28810 = (state_28829[(11)]);
var inst_28760 = (state_28829[(8)]);
var inst_28812 = cljs.core.async.muxch_STAR_.call(null,inst_28810);
var state_28829__$1 = state_28829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28829__$1,(22),inst_28812,inst_28760);
} else {
if((state_val_28830 === (11))){
var inst_28770 = (state_28829[(13)]);
var inst_28784 = (state_28829[(10)]);
var inst_28784__$1 = cljs.core.seq.call(null,inst_28770);
var state_28829__$1 = (function (){var statearr_28853 = state_28829;
(statearr_28853[(10)] = inst_28784__$1);

return statearr_28853;
})();
if(inst_28784__$1){
var statearr_28854_28900 = state_28829__$1;
(statearr_28854_28900[(1)] = (13));

} else {
var statearr_28855_28901 = state_28829__$1;
(statearr_28855_28901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (9))){
var inst_28806 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28856_28902 = state_28829__$1;
(statearr_28856_28902[(2)] = inst_28806);

(statearr_28856_28902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (5))){
var inst_28767 = cljs.core.deref.call(null,mults);
var inst_28768 = cljs.core.vals.call(null,inst_28767);
var inst_28769 = cljs.core.seq.call(null,inst_28768);
var inst_28770 = inst_28769;
var inst_28771 = null;
var inst_28772 = (0);
var inst_28773 = (0);
var state_28829__$1 = (function (){var statearr_28857 = state_28829;
(statearr_28857[(12)] = inst_28773);

(statearr_28857[(13)] = inst_28770);

(statearr_28857[(14)] = inst_28771);

(statearr_28857[(16)] = inst_28772);

return statearr_28857;
})();
var statearr_28858_28903 = state_28829__$1;
(statearr_28858_28903[(2)] = null);

(statearr_28858_28903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (14))){
var state_28829__$1 = state_28829;
var statearr_28862_28904 = state_28829__$1;
(statearr_28862_28904[(2)] = null);

(statearr_28862_28904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (16))){
var inst_28784 = (state_28829[(10)]);
var inst_28788 = cljs.core.chunk_first.call(null,inst_28784);
var inst_28789 = cljs.core.chunk_rest.call(null,inst_28784);
var inst_28790 = cljs.core.count.call(null,inst_28788);
var inst_28770 = inst_28789;
var inst_28771 = inst_28788;
var inst_28772 = inst_28790;
var inst_28773 = (0);
var state_28829__$1 = (function (){var statearr_28863 = state_28829;
(statearr_28863[(12)] = inst_28773);

(statearr_28863[(13)] = inst_28770);

(statearr_28863[(14)] = inst_28771);

(statearr_28863[(16)] = inst_28772);

return statearr_28863;
})();
var statearr_28864_28905 = state_28829__$1;
(statearr_28864_28905[(2)] = null);

(statearr_28864_28905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (10))){
var inst_28773 = (state_28829[(12)]);
var inst_28770 = (state_28829[(13)]);
var inst_28771 = (state_28829[(14)]);
var inst_28772 = (state_28829[(16)]);
var inst_28778 = cljs.core._nth.call(null,inst_28771,inst_28773);
var inst_28779 = cljs.core.async.muxch_STAR_.call(null,inst_28778);
var inst_28780 = cljs.core.async.close_BANG_.call(null,inst_28779);
var inst_28781 = (inst_28773 + (1));
var tmp28859 = inst_28770;
var tmp28860 = inst_28771;
var tmp28861 = inst_28772;
var inst_28770__$1 = tmp28859;
var inst_28771__$1 = tmp28860;
var inst_28772__$1 = tmp28861;
var inst_28773__$1 = inst_28781;
var state_28829__$1 = (function (){var statearr_28865 = state_28829;
(statearr_28865[(12)] = inst_28773__$1);

(statearr_28865[(13)] = inst_28770__$1);

(statearr_28865[(17)] = inst_28780);

(statearr_28865[(14)] = inst_28771__$1);

(statearr_28865[(16)] = inst_28772__$1);

return statearr_28865;
})();
var statearr_28866_28906 = state_28829__$1;
(statearr_28866_28906[(2)] = null);

(statearr_28866_28906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (18))){
var inst_28799 = (state_28829[(2)]);
var state_28829__$1 = state_28829;
var statearr_28867_28907 = state_28829__$1;
(statearr_28867_28907[(2)] = inst_28799);

(statearr_28867_28907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28830 === (8))){
var inst_28773 = (state_28829[(12)]);
var inst_28772 = (state_28829[(16)]);
var inst_28775 = (inst_28773 < inst_28772);
var inst_28776 = inst_28775;
var state_28829__$1 = state_28829;
if(cljs.core.truth_(inst_28776)){
var statearr_28868_28908 = state_28829__$1;
(statearr_28868_28908[(1)] = (10));

} else {
var statearr_28869_28909 = state_28829__$1;
(statearr_28869_28909[(1)] = (11));

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
});})(c__26962__auto___28881,mults,ensure_mult,p))
;
return ((function (switch__26808__auto__,c__26962__auto___28881,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28873[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28873[(1)] = (1));

return statearr_28873;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28829){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28874){if((e28874 instanceof Object)){
var ex__26812__auto__ = e28874;
var statearr_28875_28910 = state_28829;
(statearr_28875_28910[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28911 = state_28829;
state_28829 = G__28911;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___28881,mults,ensure_mult,p))
})();
var state__26964__auto__ = (function (){var statearr_28876 = f__26963__auto__.call(null);
(statearr_28876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___28881);

return statearr_28876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___28881,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28912 = [];
var len__25865__auto___28915 = arguments.length;
var i__25866__auto___28916 = (0);
while(true){
if((i__25866__auto___28916 < len__25865__auto___28915)){
args28912.push((arguments[i__25866__auto___28916]));

var G__28917 = (i__25866__auto___28916 + (1));
i__25866__auto___28916 = G__28917;
continue;
} else {
}
break;
}

var G__28914 = args28912.length;
switch (G__28914) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28912.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28919 = [];
var len__25865__auto___28922 = arguments.length;
var i__25866__auto___28923 = (0);
while(true){
if((i__25866__auto___28923 < len__25865__auto___28922)){
args28919.push((arguments[i__25866__auto___28923]));

var G__28924 = (i__25866__auto___28923 + (1));
i__25866__auto___28923 = G__28924;
continue;
} else {
}
break;
}

var G__28921 = args28919.length;
switch (G__28921) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28919.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args28926 = [];
var len__25865__auto___28997 = arguments.length;
var i__25866__auto___28998 = (0);
while(true){
if((i__25866__auto___28998 < len__25865__auto___28997)){
args28926.push((arguments[i__25866__auto___28998]));

var G__28999 = (i__25866__auto___28998 + (1));
i__25866__auto___28998 = G__28999;
continue;
} else {
}
break;
}

var G__28928 = args28926.length;
switch (G__28928) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28926.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26962__auto___29001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___29001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___29001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28967){
var state_val_28968 = (state_28967[(1)]);
if((state_val_28968 === (7))){
var state_28967__$1 = state_28967;
var statearr_28969_29002 = state_28967__$1;
(statearr_28969_29002[(2)] = null);

(statearr_28969_29002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (1))){
var state_28967__$1 = state_28967;
var statearr_28970_29003 = state_28967__$1;
(statearr_28970_29003[(2)] = null);

(statearr_28970_29003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (4))){
var inst_28931 = (state_28967[(7)]);
var inst_28933 = (inst_28931 < cnt);
var state_28967__$1 = state_28967;
if(cljs.core.truth_(inst_28933)){
var statearr_28971_29004 = state_28967__$1;
(statearr_28971_29004[(1)] = (6));

} else {
var statearr_28972_29005 = state_28967__$1;
(statearr_28972_29005[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (15))){
var inst_28963 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
var statearr_28973_29006 = state_28967__$1;
(statearr_28973_29006[(2)] = inst_28963);

(statearr_28973_29006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (13))){
var inst_28956 = cljs.core.async.close_BANG_.call(null,out);
var state_28967__$1 = state_28967;
var statearr_28974_29007 = state_28967__$1;
(statearr_28974_29007[(2)] = inst_28956);

(statearr_28974_29007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (6))){
var state_28967__$1 = state_28967;
var statearr_28975_29008 = state_28967__$1;
(statearr_28975_29008[(2)] = null);

(statearr_28975_29008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (3))){
var inst_28965 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28967__$1,inst_28965);
} else {
if((state_val_28968 === (12))){
var inst_28953 = (state_28967[(8)]);
var inst_28953__$1 = (state_28967[(2)]);
var inst_28954 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28953__$1);
var state_28967__$1 = (function (){var statearr_28976 = state_28967;
(statearr_28976[(8)] = inst_28953__$1);

return statearr_28976;
})();
if(cljs.core.truth_(inst_28954)){
var statearr_28977_29009 = state_28967__$1;
(statearr_28977_29009[(1)] = (13));

} else {
var statearr_28978_29010 = state_28967__$1;
(statearr_28978_29010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (2))){
var inst_28930 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28931 = (0);
var state_28967__$1 = (function (){var statearr_28979 = state_28967;
(statearr_28979[(7)] = inst_28931);

(statearr_28979[(9)] = inst_28930);

return statearr_28979;
})();
var statearr_28980_29011 = state_28967__$1;
(statearr_28980_29011[(2)] = null);

(statearr_28980_29011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (11))){
var inst_28931 = (state_28967[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28967,(10),Object,null,(9));
var inst_28940 = chs__$1.call(null,inst_28931);
var inst_28941 = done.call(null,inst_28931);
var inst_28942 = cljs.core.async.take_BANG_.call(null,inst_28940,inst_28941);
var state_28967__$1 = state_28967;
var statearr_28981_29012 = state_28967__$1;
(statearr_28981_29012[(2)] = inst_28942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (9))){
var inst_28931 = (state_28967[(7)]);
var inst_28944 = (state_28967[(2)]);
var inst_28945 = (inst_28931 + (1));
var inst_28931__$1 = inst_28945;
var state_28967__$1 = (function (){var statearr_28982 = state_28967;
(statearr_28982[(7)] = inst_28931__$1);

(statearr_28982[(10)] = inst_28944);

return statearr_28982;
})();
var statearr_28983_29013 = state_28967__$1;
(statearr_28983_29013[(2)] = null);

(statearr_28983_29013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (5))){
var inst_28951 = (state_28967[(2)]);
var state_28967__$1 = (function (){var statearr_28984 = state_28967;
(statearr_28984[(11)] = inst_28951);

return statearr_28984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28967__$1,(12),dchan);
} else {
if((state_val_28968 === (14))){
var inst_28953 = (state_28967[(8)]);
var inst_28958 = cljs.core.apply.call(null,f,inst_28953);
var state_28967__$1 = state_28967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28967__$1,(16),out,inst_28958);
} else {
if((state_val_28968 === (16))){
var inst_28960 = (state_28967[(2)]);
var state_28967__$1 = (function (){var statearr_28985 = state_28967;
(statearr_28985[(12)] = inst_28960);

return statearr_28985;
})();
var statearr_28986_29014 = state_28967__$1;
(statearr_28986_29014[(2)] = null);

(statearr_28986_29014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (10))){
var inst_28935 = (state_28967[(2)]);
var inst_28936 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28967__$1 = (function (){var statearr_28987 = state_28967;
(statearr_28987[(13)] = inst_28935);

return statearr_28987;
})();
var statearr_28988_29015 = state_28967__$1;
(statearr_28988_29015[(2)] = inst_28936);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28968 === (8))){
var inst_28949 = (state_28967[(2)]);
var state_28967__$1 = state_28967;
var statearr_28989_29016 = state_28967__$1;
(statearr_28989_29016[(2)] = inst_28949);

(statearr_28989_29016[(1)] = (5));


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
});})(c__26962__auto___29001,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26808__auto__,c__26962__auto___29001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28993[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28993[(1)] = (1));

return statearr_28993;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28967){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28994){if((e28994 instanceof Object)){
var ex__26812__auto__ = e28994;
var statearr_28995_29017 = state_28967;
(statearr_28995_29017[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29018 = state_28967;
state_28967 = G__29018;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___29001,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26964__auto__ = (function (){var statearr_28996 = f__26963__auto__.call(null);
(statearr_28996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___29001);

return statearr_28996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___29001,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29020 = [];
var len__25865__auto___29078 = arguments.length;
var i__25866__auto___29079 = (0);
while(true){
if((i__25866__auto___29079 < len__25865__auto___29078)){
args29020.push((arguments[i__25866__auto___29079]));

var G__29080 = (i__25866__auto___29079 + (1));
i__25866__auto___29079 = G__29080;
continue;
} else {
}
break;
}

var G__29022 = args29020.length;
switch (G__29022) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29020.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26962__auto___29082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___29082,out){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___29082,out){
return (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (7))){
var inst_29034 = (state_29054[(7)]);
var inst_29033 = (state_29054[(8)]);
var inst_29033__$1 = (state_29054[(2)]);
var inst_29034__$1 = cljs.core.nth.call(null,inst_29033__$1,(0),null);
var inst_29035 = cljs.core.nth.call(null,inst_29033__$1,(1),null);
var inst_29036 = (inst_29034__$1 == null);
var state_29054__$1 = (function (){var statearr_29056 = state_29054;
(statearr_29056[(7)] = inst_29034__$1);

(statearr_29056[(9)] = inst_29035);

(statearr_29056[(8)] = inst_29033__$1);

return statearr_29056;
})();
if(cljs.core.truth_(inst_29036)){
var statearr_29057_29083 = state_29054__$1;
(statearr_29057_29083[(1)] = (8));

} else {
var statearr_29058_29084 = state_29054__$1;
(statearr_29058_29084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (1))){
var inst_29023 = cljs.core.vec.call(null,chs);
var inst_29024 = inst_29023;
var state_29054__$1 = (function (){var statearr_29059 = state_29054;
(statearr_29059[(10)] = inst_29024);

return statearr_29059;
})();
var statearr_29060_29085 = state_29054__$1;
(statearr_29060_29085[(2)] = null);

(statearr_29060_29085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (4))){
var inst_29024 = (state_29054[(10)]);
var state_29054__$1 = state_29054;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29054__$1,(7),inst_29024);
} else {
if((state_val_29055 === (6))){
var inst_29050 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29061_29086 = state_29054__$1;
(statearr_29061_29086[(2)] = inst_29050);

(statearr_29061_29086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (3))){
var inst_29052 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29054__$1,inst_29052);
} else {
if((state_val_29055 === (2))){
var inst_29024 = (state_29054[(10)]);
var inst_29026 = cljs.core.count.call(null,inst_29024);
var inst_29027 = (inst_29026 > (0));
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29027)){
var statearr_29063_29087 = state_29054__$1;
(statearr_29063_29087[(1)] = (4));

} else {
var statearr_29064_29088 = state_29054__$1;
(statearr_29064_29088[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (11))){
var inst_29024 = (state_29054[(10)]);
var inst_29043 = (state_29054[(2)]);
var tmp29062 = inst_29024;
var inst_29024__$1 = tmp29062;
var state_29054__$1 = (function (){var statearr_29065 = state_29054;
(statearr_29065[(10)] = inst_29024__$1);

(statearr_29065[(11)] = inst_29043);

return statearr_29065;
})();
var statearr_29066_29089 = state_29054__$1;
(statearr_29066_29089[(2)] = null);

(statearr_29066_29089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (9))){
var inst_29034 = (state_29054[(7)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29054__$1,(11),out,inst_29034);
} else {
if((state_val_29055 === (5))){
var inst_29048 = cljs.core.async.close_BANG_.call(null,out);
var state_29054__$1 = state_29054;
var statearr_29067_29090 = state_29054__$1;
(statearr_29067_29090[(2)] = inst_29048);

(statearr_29067_29090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (10))){
var inst_29046 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29068_29091 = state_29054__$1;
(statearr_29068_29091[(2)] = inst_29046);

(statearr_29068_29091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (8))){
var inst_29024 = (state_29054[(10)]);
var inst_29034 = (state_29054[(7)]);
var inst_29035 = (state_29054[(9)]);
var inst_29033 = (state_29054[(8)]);
var inst_29038 = (function (){var cs = inst_29024;
var vec__29029 = inst_29033;
var v = inst_29034;
var c = inst_29035;
return ((function (cs,vec__29029,v,c,inst_29024,inst_29034,inst_29035,inst_29033,state_val_29055,c__26962__auto___29082,out){
return (function (p1__29019_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29019_SHARP_);
});
;})(cs,vec__29029,v,c,inst_29024,inst_29034,inst_29035,inst_29033,state_val_29055,c__26962__auto___29082,out))
})();
var inst_29039 = cljs.core.filterv.call(null,inst_29038,inst_29024);
var inst_29024__$1 = inst_29039;
var state_29054__$1 = (function (){var statearr_29069 = state_29054;
(statearr_29069[(10)] = inst_29024__$1);

return statearr_29069;
})();
var statearr_29070_29092 = state_29054__$1;
(statearr_29070_29092[(2)] = null);

(statearr_29070_29092[(1)] = (2));


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
});})(c__26962__auto___29082,out))
;
return ((function (switch__26808__auto__,c__26962__auto___29082,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29074[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29074[(1)] = (1));

return statearr_29074;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29054){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29075){if((e29075 instanceof Object)){
var ex__26812__auto__ = e29075;
var statearr_29076_29093 = state_29054;
(statearr_29076_29093[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29094 = state_29054;
state_29054 = G__29094;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___29082,out))
})();
var state__26964__auto__ = (function (){var statearr_29077 = f__26963__auto__.call(null);
(statearr_29077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___29082);

return statearr_29077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___29082,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29095 = [];
var len__25865__auto___29144 = arguments.length;
var i__25866__auto___29145 = (0);
while(true){
if((i__25866__auto___29145 < len__25865__auto___29144)){
args29095.push((arguments[i__25866__auto___29145]));

var G__29146 = (i__25866__auto___29145 + (1));
i__25866__auto___29145 = G__29146;
continue;
} else {
}
break;
}

var G__29097 = args29095.length;
switch (G__29097) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29095.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26962__auto___29148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___29148,out){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___29148,out){
return (function (state_29121){
var state_val_29122 = (state_29121[(1)]);
if((state_val_29122 === (7))){
var inst_29103 = (state_29121[(7)]);
var inst_29103__$1 = (state_29121[(2)]);
var inst_29104 = (inst_29103__$1 == null);
var inst_29105 = cljs.core.not.call(null,inst_29104);
var state_29121__$1 = (function (){var statearr_29123 = state_29121;
(statearr_29123[(7)] = inst_29103__$1);

return statearr_29123;
})();
if(inst_29105){
var statearr_29124_29149 = state_29121__$1;
(statearr_29124_29149[(1)] = (8));

} else {
var statearr_29125_29150 = state_29121__$1;
(statearr_29125_29150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (1))){
var inst_29098 = (0);
var state_29121__$1 = (function (){var statearr_29126 = state_29121;
(statearr_29126[(8)] = inst_29098);

return statearr_29126;
})();
var statearr_29127_29151 = state_29121__$1;
(statearr_29127_29151[(2)] = null);

(statearr_29127_29151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (4))){
var state_29121__$1 = state_29121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29121__$1,(7),ch);
} else {
if((state_val_29122 === (6))){
var inst_29116 = (state_29121[(2)]);
var state_29121__$1 = state_29121;
var statearr_29128_29152 = state_29121__$1;
(statearr_29128_29152[(2)] = inst_29116);

(statearr_29128_29152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (3))){
var inst_29118 = (state_29121[(2)]);
var inst_29119 = cljs.core.async.close_BANG_.call(null,out);
var state_29121__$1 = (function (){var statearr_29129 = state_29121;
(statearr_29129[(9)] = inst_29118);

return statearr_29129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29121__$1,inst_29119);
} else {
if((state_val_29122 === (2))){
var inst_29098 = (state_29121[(8)]);
var inst_29100 = (inst_29098 < n);
var state_29121__$1 = state_29121;
if(cljs.core.truth_(inst_29100)){
var statearr_29130_29153 = state_29121__$1;
(statearr_29130_29153[(1)] = (4));

} else {
var statearr_29131_29154 = state_29121__$1;
(statearr_29131_29154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (11))){
var inst_29098 = (state_29121[(8)]);
var inst_29108 = (state_29121[(2)]);
var inst_29109 = (inst_29098 + (1));
var inst_29098__$1 = inst_29109;
var state_29121__$1 = (function (){var statearr_29132 = state_29121;
(statearr_29132[(10)] = inst_29108);

(statearr_29132[(8)] = inst_29098__$1);

return statearr_29132;
})();
var statearr_29133_29155 = state_29121__$1;
(statearr_29133_29155[(2)] = null);

(statearr_29133_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (9))){
var state_29121__$1 = state_29121;
var statearr_29134_29156 = state_29121__$1;
(statearr_29134_29156[(2)] = null);

(statearr_29134_29156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (5))){
var state_29121__$1 = state_29121;
var statearr_29135_29157 = state_29121__$1;
(statearr_29135_29157[(2)] = null);

(statearr_29135_29157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (10))){
var inst_29113 = (state_29121[(2)]);
var state_29121__$1 = state_29121;
var statearr_29136_29158 = state_29121__$1;
(statearr_29136_29158[(2)] = inst_29113);

(statearr_29136_29158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (8))){
var inst_29103 = (state_29121[(7)]);
var state_29121__$1 = state_29121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29121__$1,(11),out,inst_29103);
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
});})(c__26962__auto___29148,out))
;
return ((function (switch__26808__auto__,c__26962__auto___29148,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29140[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29140[(1)] = (1));

return statearr_29140;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29121){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29141){if((e29141 instanceof Object)){
var ex__26812__auto__ = e29141;
var statearr_29142_29159 = state_29121;
(statearr_29142_29159[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29160 = state_29121;
state_29121 = G__29160;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___29148,out))
})();
var state__26964__auto__ = (function (){var statearr_29143 = f__26963__auto__.call(null);
(statearr_29143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___29148);

return statearr_29143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___29148,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29168 = (function (map_LT_,f,ch,meta29169){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29169 = meta29169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29170,meta29169__$1){
var self__ = this;
var _29170__$1 = this;
return (new cljs.core.async.t_cljs$core$async29168(self__.map_LT_,self__.f,self__.ch,meta29169__$1));
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29170){
var self__ = this;
var _29170__$1 = this;
return self__.meta29169;
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29171 = (function (map_LT_,f,ch,meta29169,_,fn1,meta29172){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29169 = meta29169;
this._ = _;
this.fn1 = fn1;
this.meta29172 = meta29172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29173,meta29172__$1){
var self__ = this;
var _29173__$1 = this;
return (new cljs.core.async.t_cljs$core$async29171(self__.map_LT_,self__.f,self__.ch,self__.meta29169,self__._,self__.fn1,meta29172__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29173){
var self__ = this;
var _29173__$1 = this;
return self__.meta29172;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29161_SHARP_){
return f1.call(null,(((p1__29161_SHARP_ == null))?null:self__.f.call(null,p1__29161_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29171.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29169","meta29169",-1148610246,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29168","cljs.core.async/t_cljs$core$async29168",-1102025369,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29172","meta29172",1761526210,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29171";

cljs.core.async.t_cljs$core$async29171.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29171");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29171 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29171(map_LT___$1,f__$1,ch__$1,meta29169__$1,___$2,fn1__$1,meta29172){
return (new cljs.core.async.t_cljs$core$async29171(map_LT___$1,f__$1,ch__$1,meta29169__$1,___$2,fn1__$1,meta29172));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29171(self__.map_LT_,self__.f,self__.ch,self__.meta29169,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29169","meta29169",-1148610246,null)], null);
});

cljs.core.async.t_cljs$core$async29168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29168";

cljs.core.async.t_cljs$core$async29168.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29168");
});

cljs.core.async.__GT_t_cljs$core$async29168 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29168(map_LT___$1,f__$1,ch__$1,meta29169){
return (new cljs.core.async.t_cljs$core$async29168(map_LT___$1,f__$1,ch__$1,meta29169));
});

}

return (new cljs.core.async.t_cljs$core$async29168(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29177 = (function (map_GT_,f,ch,meta29178){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29178 = meta29178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29179,meta29178__$1){
var self__ = this;
var _29179__$1 = this;
return (new cljs.core.async.t_cljs$core$async29177(self__.map_GT_,self__.f,self__.ch,meta29178__$1));
});

cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29179){
var self__ = this;
var _29179__$1 = this;
return self__.meta29178;
});

cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29178","meta29178",472023513,null)], null);
});

cljs.core.async.t_cljs$core$async29177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29177";

cljs.core.async.t_cljs$core$async29177.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29177");
});

cljs.core.async.__GT_t_cljs$core$async29177 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29177(map_GT___$1,f__$1,ch__$1,meta29178){
return (new cljs.core.async.t_cljs$core$async29177(map_GT___$1,f__$1,ch__$1,meta29178));
});

}

return (new cljs.core.async.t_cljs$core$async29177(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29183 = (function (filter_GT_,p,ch,meta29184){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29184 = meta29184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29185,meta29184__$1){
var self__ = this;
var _29185__$1 = this;
return (new cljs.core.async.t_cljs$core$async29183(self__.filter_GT_,self__.p,self__.ch,meta29184__$1));
});

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29185){
var self__ = this;
var _29185__$1 = this;
return self__.meta29184;
});

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29184","meta29184",1205971066,null)], null);
});

cljs.core.async.t_cljs$core$async29183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29183";

cljs.core.async.t_cljs$core$async29183.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29183");
});

cljs.core.async.__GT_t_cljs$core$async29183 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29183(filter_GT___$1,p__$1,ch__$1,meta29184){
return (new cljs.core.async.t_cljs$core$async29183(filter_GT___$1,p__$1,ch__$1,meta29184));
});

}

return (new cljs.core.async.t_cljs$core$async29183(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29186 = [];
var len__25865__auto___29230 = arguments.length;
var i__25866__auto___29231 = (0);
while(true){
if((i__25866__auto___29231 < len__25865__auto___29230)){
args29186.push((arguments[i__25866__auto___29231]));

var G__29232 = (i__25866__auto___29231 + (1));
i__25866__auto___29231 = G__29232;
continue;
} else {
}
break;
}

var G__29188 = args29186.length;
switch (G__29188) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29186.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26962__auto___29234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___29234,out){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___29234,out){
return (function (state_29209){
var state_val_29210 = (state_29209[(1)]);
if((state_val_29210 === (7))){
var inst_29205 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29211_29235 = state_29209__$1;
(statearr_29211_29235[(2)] = inst_29205);

(statearr_29211_29235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (1))){
var state_29209__$1 = state_29209;
var statearr_29212_29236 = state_29209__$1;
(statearr_29212_29236[(2)] = null);

(statearr_29212_29236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (4))){
var inst_29191 = (state_29209[(7)]);
var inst_29191__$1 = (state_29209[(2)]);
var inst_29192 = (inst_29191__$1 == null);
var state_29209__$1 = (function (){var statearr_29213 = state_29209;
(statearr_29213[(7)] = inst_29191__$1);

return statearr_29213;
})();
if(cljs.core.truth_(inst_29192)){
var statearr_29214_29237 = state_29209__$1;
(statearr_29214_29237[(1)] = (5));

} else {
var statearr_29215_29238 = state_29209__$1;
(statearr_29215_29238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (6))){
var inst_29191 = (state_29209[(7)]);
var inst_29196 = p.call(null,inst_29191);
var state_29209__$1 = state_29209;
if(cljs.core.truth_(inst_29196)){
var statearr_29216_29239 = state_29209__$1;
(statearr_29216_29239[(1)] = (8));

} else {
var statearr_29217_29240 = state_29209__$1;
(statearr_29217_29240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (3))){
var inst_29207 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29209__$1,inst_29207);
} else {
if((state_val_29210 === (2))){
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29209__$1,(4),ch);
} else {
if((state_val_29210 === (11))){
var inst_29199 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29218_29241 = state_29209__$1;
(statearr_29218_29241[(2)] = inst_29199);

(statearr_29218_29241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (9))){
var state_29209__$1 = state_29209;
var statearr_29219_29242 = state_29209__$1;
(statearr_29219_29242[(2)] = null);

(statearr_29219_29242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (5))){
var inst_29194 = cljs.core.async.close_BANG_.call(null,out);
var state_29209__$1 = state_29209;
var statearr_29220_29243 = state_29209__$1;
(statearr_29220_29243[(2)] = inst_29194);

(statearr_29220_29243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (10))){
var inst_29202 = (state_29209[(2)]);
var state_29209__$1 = (function (){var statearr_29221 = state_29209;
(statearr_29221[(8)] = inst_29202);

return statearr_29221;
})();
var statearr_29222_29244 = state_29209__$1;
(statearr_29222_29244[(2)] = null);

(statearr_29222_29244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (8))){
var inst_29191 = (state_29209[(7)]);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29209__$1,(11),out,inst_29191);
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
});})(c__26962__auto___29234,out))
;
return ((function (switch__26808__auto__,c__26962__auto___29234,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29226 = [null,null,null,null,null,null,null,null,null];
(statearr_29226[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29226[(1)] = (1));

return statearr_29226;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29209){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29227){if((e29227 instanceof Object)){
var ex__26812__auto__ = e29227;
var statearr_29228_29245 = state_29209;
(statearr_29228_29245[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29246 = state_29209;
state_29209 = G__29246;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___29234,out))
})();
var state__26964__auto__ = (function (){var statearr_29229 = f__26963__auto__.call(null);
(statearr_29229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___29234);

return statearr_29229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___29234,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29247 = [];
var len__25865__auto___29250 = arguments.length;
var i__25866__auto___29251 = (0);
while(true){
if((i__25866__auto___29251 < len__25865__auto___29250)){
args29247.push((arguments[i__25866__auto___29251]));

var G__29252 = (i__25866__auto___29251 + (1));
i__25866__auto___29251 = G__29252;
continue;
} else {
}
break;
}

var G__29249 = args29247.length;
switch (G__29249) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29247.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__){
return (function (state_29419){
var state_val_29420 = (state_29419[(1)]);
if((state_val_29420 === (7))){
var inst_29415 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29421_29462 = state_29419__$1;
(statearr_29421_29462[(2)] = inst_29415);

(statearr_29421_29462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (20))){
var inst_29385 = (state_29419[(7)]);
var inst_29396 = (state_29419[(2)]);
var inst_29397 = cljs.core.next.call(null,inst_29385);
var inst_29371 = inst_29397;
var inst_29372 = null;
var inst_29373 = (0);
var inst_29374 = (0);
var state_29419__$1 = (function (){var statearr_29422 = state_29419;
(statearr_29422[(8)] = inst_29374);

(statearr_29422[(9)] = inst_29372);

(statearr_29422[(10)] = inst_29371);

(statearr_29422[(11)] = inst_29396);

(statearr_29422[(12)] = inst_29373);

return statearr_29422;
})();
var statearr_29423_29463 = state_29419__$1;
(statearr_29423_29463[(2)] = null);

(statearr_29423_29463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (1))){
var state_29419__$1 = state_29419;
var statearr_29424_29464 = state_29419__$1;
(statearr_29424_29464[(2)] = null);

(statearr_29424_29464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (4))){
var inst_29360 = (state_29419[(13)]);
var inst_29360__$1 = (state_29419[(2)]);
var inst_29361 = (inst_29360__$1 == null);
var state_29419__$1 = (function (){var statearr_29425 = state_29419;
(statearr_29425[(13)] = inst_29360__$1);

return statearr_29425;
})();
if(cljs.core.truth_(inst_29361)){
var statearr_29426_29465 = state_29419__$1;
(statearr_29426_29465[(1)] = (5));

} else {
var statearr_29427_29466 = state_29419__$1;
(statearr_29427_29466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (15))){
var state_29419__$1 = state_29419;
var statearr_29431_29467 = state_29419__$1;
(statearr_29431_29467[(2)] = null);

(statearr_29431_29467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (21))){
var state_29419__$1 = state_29419;
var statearr_29432_29468 = state_29419__$1;
(statearr_29432_29468[(2)] = null);

(statearr_29432_29468[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (13))){
var inst_29374 = (state_29419[(8)]);
var inst_29372 = (state_29419[(9)]);
var inst_29371 = (state_29419[(10)]);
var inst_29373 = (state_29419[(12)]);
var inst_29381 = (state_29419[(2)]);
var inst_29382 = (inst_29374 + (1));
var tmp29428 = inst_29372;
var tmp29429 = inst_29371;
var tmp29430 = inst_29373;
var inst_29371__$1 = tmp29429;
var inst_29372__$1 = tmp29428;
var inst_29373__$1 = tmp29430;
var inst_29374__$1 = inst_29382;
var state_29419__$1 = (function (){var statearr_29433 = state_29419;
(statearr_29433[(8)] = inst_29374__$1);

(statearr_29433[(9)] = inst_29372__$1);

(statearr_29433[(14)] = inst_29381);

(statearr_29433[(10)] = inst_29371__$1);

(statearr_29433[(12)] = inst_29373__$1);

return statearr_29433;
})();
var statearr_29434_29469 = state_29419__$1;
(statearr_29434_29469[(2)] = null);

(statearr_29434_29469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (22))){
var state_29419__$1 = state_29419;
var statearr_29435_29470 = state_29419__$1;
(statearr_29435_29470[(2)] = null);

(statearr_29435_29470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (6))){
var inst_29360 = (state_29419[(13)]);
var inst_29369 = f.call(null,inst_29360);
var inst_29370 = cljs.core.seq.call(null,inst_29369);
var inst_29371 = inst_29370;
var inst_29372 = null;
var inst_29373 = (0);
var inst_29374 = (0);
var state_29419__$1 = (function (){var statearr_29436 = state_29419;
(statearr_29436[(8)] = inst_29374);

(statearr_29436[(9)] = inst_29372);

(statearr_29436[(10)] = inst_29371);

(statearr_29436[(12)] = inst_29373);

return statearr_29436;
})();
var statearr_29437_29471 = state_29419__$1;
(statearr_29437_29471[(2)] = null);

(statearr_29437_29471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (17))){
var inst_29385 = (state_29419[(7)]);
var inst_29389 = cljs.core.chunk_first.call(null,inst_29385);
var inst_29390 = cljs.core.chunk_rest.call(null,inst_29385);
var inst_29391 = cljs.core.count.call(null,inst_29389);
var inst_29371 = inst_29390;
var inst_29372 = inst_29389;
var inst_29373 = inst_29391;
var inst_29374 = (0);
var state_29419__$1 = (function (){var statearr_29438 = state_29419;
(statearr_29438[(8)] = inst_29374);

(statearr_29438[(9)] = inst_29372);

(statearr_29438[(10)] = inst_29371);

(statearr_29438[(12)] = inst_29373);

return statearr_29438;
})();
var statearr_29439_29472 = state_29419__$1;
(statearr_29439_29472[(2)] = null);

(statearr_29439_29472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (3))){
var inst_29417 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29419__$1,inst_29417);
} else {
if((state_val_29420 === (12))){
var inst_29405 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29440_29473 = state_29419__$1;
(statearr_29440_29473[(2)] = inst_29405);

(statearr_29440_29473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (2))){
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29419__$1,(4),in$);
} else {
if((state_val_29420 === (23))){
var inst_29413 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29441_29474 = state_29419__$1;
(statearr_29441_29474[(2)] = inst_29413);

(statearr_29441_29474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (19))){
var inst_29400 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29442_29475 = state_29419__$1;
(statearr_29442_29475[(2)] = inst_29400);

(statearr_29442_29475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (11))){
var inst_29371 = (state_29419[(10)]);
var inst_29385 = (state_29419[(7)]);
var inst_29385__$1 = cljs.core.seq.call(null,inst_29371);
var state_29419__$1 = (function (){var statearr_29443 = state_29419;
(statearr_29443[(7)] = inst_29385__$1);

return statearr_29443;
})();
if(inst_29385__$1){
var statearr_29444_29476 = state_29419__$1;
(statearr_29444_29476[(1)] = (14));

} else {
var statearr_29445_29477 = state_29419__$1;
(statearr_29445_29477[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (9))){
var inst_29407 = (state_29419[(2)]);
var inst_29408 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29419__$1 = (function (){var statearr_29446 = state_29419;
(statearr_29446[(15)] = inst_29407);

return statearr_29446;
})();
if(cljs.core.truth_(inst_29408)){
var statearr_29447_29478 = state_29419__$1;
(statearr_29447_29478[(1)] = (21));

} else {
var statearr_29448_29479 = state_29419__$1;
(statearr_29448_29479[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (5))){
var inst_29363 = cljs.core.async.close_BANG_.call(null,out);
var state_29419__$1 = state_29419;
var statearr_29449_29480 = state_29419__$1;
(statearr_29449_29480[(2)] = inst_29363);

(statearr_29449_29480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (14))){
var inst_29385 = (state_29419[(7)]);
var inst_29387 = cljs.core.chunked_seq_QMARK_.call(null,inst_29385);
var state_29419__$1 = state_29419;
if(inst_29387){
var statearr_29450_29481 = state_29419__$1;
(statearr_29450_29481[(1)] = (17));

} else {
var statearr_29451_29482 = state_29419__$1;
(statearr_29451_29482[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (16))){
var inst_29403 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29452_29483 = state_29419__$1;
(statearr_29452_29483[(2)] = inst_29403);

(statearr_29452_29483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (10))){
var inst_29374 = (state_29419[(8)]);
var inst_29372 = (state_29419[(9)]);
var inst_29379 = cljs.core._nth.call(null,inst_29372,inst_29374);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29419__$1,(13),out,inst_29379);
} else {
if((state_val_29420 === (18))){
var inst_29385 = (state_29419[(7)]);
var inst_29394 = cljs.core.first.call(null,inst_29385);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29419__$1,(20),out,inst_29394);
} else {
if((state_val_29420 === (8))){
var inst_29374 = (state_29419[(8)]);
var inst_29373 = (state_29419[(12)]);
var inst_29376 = (inst_29374 < inst_29373);
var inst_29377 = inst_29376;
var state_29419__$1 = state_29419;
if(cljs.core.truth_(inst_29377)){
var statearr_29453_29484 = state_29419__$1;
(statearr_29453_29484[(1)] = (10));

} else {
var statearr_29454_29485 = state_29419__$1;
(statearr_29454_29485[(1)] = (11));

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
});})(c__26962__auto__))
;
return ((function (switch__26808__auto__,c__26962__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_29458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29458[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__);

(statearr_29458[(1)] = (1));

return statearr_29458;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1 = (function (state_29419){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29459){if((e29459 instanceof Object)){
var ex__26812__auto__ = e29459;
var statearr_29460_29486 = state_29419;
(statearr_29460_29486[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29487 = state_29419;
state_29419 = G__29487;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__ = function(state_29419){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1.call(this,state_29419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__))
})();
var state__26964__auto__ = (function (){var statearr_29461 = f__26963__auto__.call(null);
(statearr_29461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_29461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__))
);

return c__26962__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29488 = [];
var len__25865__auto___29491 = arguments.length;
var i__25866__auto___29492 = (0);
while(true){
if((i__25866__auto___29492 < len__25865__auto___29491)){
args29488.push((arguments[i__25866__auto___29492]));

var G__29493 = (i__25866__auto___29492 + (1));
i__25866__auto___29492 = G__29493;
continue;
} else {
}
break;
}

var G__29490 = args29488.length;
switch (G__29490) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29488.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29495 = [];
var len__25865__auto___29498 = arguments.length;
var i__25866__auto___29499 = (0);
while(true){
if((i__25866__auto___29499 < len__25865__auto___29498)){
args29495.push((arguments[i__25866__auto___29499]));

var G__29500 = (i__25866__auto___29499 + (1));
i__25866__auto___29499 = G__29500;
continue;
} else {
}
break;
}

var G__29497 = args29495.length;
switch (G__29497) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29495.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29502 = [];
var len__25865__auto___29553 = arguments.length;
var i__25866__auto___29554 = (0);
while(true){
if((i__25866__auto___29554 < len__25865__auto___29553)){
args29502.push((arguments[i__25866__auto___29554]));

var G__29555 = (i__25866__auto___29554 + (1));
i__25866__auto___29554 = G__29555;
continue;
} else {
}
break;
}

var G__29504 = args29502.length;
switch (G__29504) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29502.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26962__auto___29557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___29557,out){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___29557,out){
return (function (state_29528){
var state_val_29529 = (state_29528[(1)]);
if((state_val_29529 === (7))){
var inst_29523 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29530_29558 = state_29528__$1;
(statearr_29530_29558[(2)] = inst_29523);

(statearr_29530_29558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (1))){
var inst_29505 = null;
var state_29528__$1 = (function (){var statearr_29531 = state_29528;
(statearr_29531[(7)] = inst_29505);

return statearr_29531;
})();
var statearr_29532_29559 = state_29528__$1;
(statearr_29532_29559[(2)] = null);

(statearr_29532_29559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (4))){
var inst_29508 = (state_29528[(8)]);
var inst_29508__$1 = (state_29528[(2)]);
var inst_29509 = (inst_29508__$1 == null);
var inst_29510 = cljs.core.not.call(null,inst_29509);
var state_29528__$1 = (function (){var statearr_29533 = state_29528;
(statearr_29533[(8)] = inst_29508__$1);

return statearr_29533;
})();
if(inst_29510){
var statearr_29534_29560 = state_29528__$1;
(statearr_29534_29560[(1)] = (5));

} else {
var statearr_29535_29561 = state_29528__$1;
(statearr_29535_29561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (6))){
var state_29528__$1 = state_29528;
var statearr_29536_29562 = state_29528__$1;
(statearr_29536_29562[(2)] = null);

(statearr_29536_29562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (3))){
var inst_29525 = (state_29528[(2)]);
var inst_29526 = cljs.core.async.close_BANG_.call(null,out);
var state_29528__$1 = (function (){var statearr_29537 = state_29528;
(statearr_29537[(9)] = inst_29525);

return statearr_29537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29528__$1,inst_29526);
} else {
if((state_val_29529 === (2))){
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29528__$1,(4),ch);
} else {
if((state_val_29529 === (11))){
var inst_29508 = (state_29528[(8)]);
var inst_29517 = (state_29528[(2)]);
var inst_29505 = inst_29508;
var state_29528__$1 = (function (){var statearr_29538 = state_29528;
(statearr_29538[(7)] = inst_29505);

(statearr_29538[(10)] = inst_29517);

return statearr_29538;
})();
var statearr_29539_29563 = state_29528__$1;
(statearr_29539_29563[(2)] = null);

(statearr_29539_29563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (9))){
var inst_29508 = (state_29528[(8)]);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29528__$1,(11),out,inst_29508);
} else {
if((state_val_29529 === (5))){
var inst_29505 = (state_29528[(7)]);
var inst_29508 = (state_29528[(8)]);
var inst_29512 = cljs.core._EQ_.call(null,inst_29508,inst_29505);
var state_29528__$1 = state_29528;
if(inst_29512){
var statearr_29541_29564 = state_29528__$1;
(statearr_29541_29564[(1)] = (8));

} else {
var statearr_29542_29565 = state_29528__$1;
(statearr_29542_29565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (10))){
var inst_29520 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29543_29566 = state_29528__$1;
(statearr_29543_29566[(2)] = inst_29520);

(statearr_29543_29566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (8))){
var inst_29505 = (state_29528[(7)]);
var tmp29540 = inst_29505;
var inst_29505__$1 = tmp29540;
var state_29528__$1 = (function (){var statearr_29544 = state_29528;
(statearr_29544[(7)] = inst_29505__$1);

return statearr_29544;
})();
var statearr_29545_29567 = state_29528__$1;
(statearr_29545_29567[(2)] = null);

(statearr_29545_29567[(1)] = (2));


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
});})(c__26962__auto___29557,out))
;
return ((function (switch__26808__auto__,c__26962__auto___29557,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29549[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29549[(1)] = (1));

return statearr_29549;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29528){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29550){if((e29550 instanceof Object)){
var ex__26812__auto__ = e29550;
var statearr_29551_29568 = state_29528;
(statearr_29551_29568[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29569 = state_29528;
state_29528 = G__29569;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___29557,out))
})();
var state__26964__auto__ = (function (){var statearr_29552 = f__26963__auto__.call(null);
(statearr_29552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___29557);

return statearr_29552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___29557,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29570 = [];
var len__25865__auto___29640 = arguments.length;
var i__25866__auto___29641 = (0);
while(true){
if((i__25866__auto___29641 < len__25865__auto___29640)){
args29570.push((arguments[i__25866__auto___29641]));

var G__29642 = (i__25866__auto___29641 + (1));
i__25866__auto___29641 = G__29642;
continue;
} else {
}
break;
}

var G__29572 = args29570.length;
switch (G__29572) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29570.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26962__auto___29644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___29644,out){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___29644,out){
return (function (state_29610){
var state_val_29611 = (state_29610[(1)]);
if((state_val_29611 === (7))){
var inst_29606 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29612_29645 = state_29610__$1;
(statearr_29612_29645[(2)] = inst_29606);

(statearr_29612_29645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (1))){
var inst_29573 = (new Array(n));
var inst_29574 = inst_29573;
var inst_29575 = (0);
var state_29610__$1 = (function (){var statearr_29613 = state_29610;
(statearr_29613[(7)] = inst_29575);

(statearr_29613[(8)] = inst_29574);

return statearr_29613;
})();
var statearr_29614_29646 = state_29610__$1;
(statearr_29614_29646[(2)] = null);

(statearr_29614_29646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (4))){
var inst_29578 = (state_29610[(9)]);
var inst_29578__$1 = (state_29610[(2)]);
var inst_29579 = (inst_29578__$1 == null);
var inst_29580 = cljs.core.not.call(null,inst_29579);
var state_29610__$1 = (function (){var statearr_29615 = state_29610;
(statearr_29615[(9)] = inst_29578__$1);

return statearr_29615;
})();
if(inst_29580){
var statearr_29616_29647 = state_29610__$1;
(statearr_29616_29647[(1)] = (5));

} else {
var statearr_29617_29648 = state_29610__$1;
(statearr_29617_29648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (15))){
var inst_29600 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29618_29649 = state_29610__$1;
(statearr_29618_29649[(2)] = inst_29600);

(statearr_29618_29649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (13))){
var state_29610__$1 = state_29610;
var statearr_29619_29650 = state_29610__$1;
(statearr_29619_29650[(2)] = null);

(statearr_29619_29650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (6))){
var inst_29575 = (state_29610[(7)]);
var inst_29596 = (inst_29575 > (0));
var state_29610__$1 = state_29610;
if(cljs.core.truth_(inst_29596)){
var statearr_29620_29651 = state_29610__$1;
(statearr_29620_29651[(1)] = (12));

} else {
var statearr_29621_29652 = state_29610__$1;
(statearr_29621_29652[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (3))){
var inst_29608 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29610__$1,inst_29608);
} else {
if((state_val_29611 === (12))){
var inst_29574 = (state_29610[(8)]);
var inst_29598 = cljs.core.vec.call(null,inst_29574);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29610__$1,(15),out,inst_29598);
} else {
if((state_val_29611 === (2))){
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29610__$1,(4),ch);
} else {
if((state_val_29611 === (11))){
var inst_29590 = (state_29610[(2)]);
var inst_29591 = (new Array(n));
var inst_29574 = inst_29591;
var inst_29575 = (0);
var state_29610__$1 = (function (){var statearr_29622 = state_29610;
(statearr_29622[(10)] = inst_29590);

(statearr_29622[(7)] = inst_29575);

(statearr_29622[(8)] = inst_29574);

return statearr_29622;
})();
var statearr_29623_29653 = state_29610__$1;
(statearr_29623_29653[(2)] = null);

(statearr_29623_29653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (9))){
var inst_29574 = (state_29610[(8)]);
var inst_29588 = cljs.core.vec.call(null,inst_29574);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29610__$1,(11),out,inst_29588);
} else {
if((state_val_29611 === (5))){
var inst_29575 = (state_29610[(7)]);
var inst_29578 = (state_29610[(9)]);
var inst_29574 = (state_29610[(8)]);
var inst_29583 = (state_29610[(11)]);
var inst_29582 = (inst_29574[inst_29575] = inst_29578);
var inst_29583__$1 = (inst_29575 + (1));
var inst_29584 = (inst_29583__$1 < n);
var state_29610__$1 = (function (){var statearr_29624 = state_29610;
(statearr_29624[(12)] = inst_29582);

(statearr_29624[(11)] = inst_29583__$1);

return statearr_29624;
})();
if(cljs.core.truth_(inst_29584)){
var statearr_29625_29654 = state_29610__$1;
(statearr_29625_29654[(1)] = (8));

} else {
var statearr_29626_29655 = state_29610__$1;
(statearr_29626_29655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (14))){
var inst_29603 = (state_29610[(2)]);
var inst_29604 = cljs.core.async.close_BANG_.call(null,out);
var state_29610__$1 = (function (){var statearr_29628 = state_29610;
(statearr_29628[(13)] = inst_29603);

return statearr_29628;
})();
var statearr_29629_29656 = state_29610__$1;
(statearr_29629_29656[(2)] = inst_29604);

(statearr_29629_29656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (10))){
var inst_29594 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29630_29657 = state_29610__$1;
(statearr_29630_29657[(2)] = inst_29594);

(statearr_29630_29657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (8))){
var inst_29574 = (state_29610[(8)]);
var inst_29583 = (state_29610[(11)]);
var tmp29627 = inst_29574;
var inst_29574__$1 = tmp29627;
var inst_29575 = inst_29583;
var state_29610__$1 = (function (){var statearr_29631 = state_29610;
(statearr_29631[(7)] = inst_29575);

(statearr_29631[(8)] = inst_29574__$1);

return statearr_29631;
})();
var statearr_29632_29658 = state_29610__$1;
(statearr_29632_29658[(2)] = null);

(statearr_29632_29658[(1)] = (2));


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
});})(c__26962__auto___29644,out))
;
return ((function (switch__26808__auto__,c__26962__auto___29644,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29636[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29636[(1)] = (1));

return statearr_29636;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29610){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29637){if((e29637 instanceof Object)){
var ex__26812__auto__ = e29637;
var statearr_29638_29659 = state_29610;
(statearr_29638_29659[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29660 = state_29610;
state_29610 = G__29660;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___29644,out))
})();
var state__26964__auto__ = (function (){var statearr_29639 = f__26963__auto__.call(null);
(statearr_29639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___29644);

return statearr_29639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___29644,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29661 = [];
var len__25865__auto___29735 = arguments.length;
var i__25866__auto___29736 = (0);
while(true){
if((i__25866__auto___29736 < len__25865__auto___29735)){
args29661.push((arguments[i__25866__auto___29736]));

var G__29737 = (i__25866__auto___29736 + (1));
i__25866__auto___29736 = G__29737;
continue;
} else {
}
break;
}

var G__29663 = args29661.length;
switch (G__29663) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29661.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26962__auto___29739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___29739,out){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___29739,out){
return (function (state_29705){
var state_val_29706 = (state_29705[(1)]);
if((state_val_29706 === (7))){
var inst_29701 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29707_29740 = state_29705__$1;
(statearr_29707_29740[(2)] = inst_29701);

(statearr_29707_29740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (1))){
var inst_29664 = [];
var inst_29665 = inst_29664;
var inst_29666 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29705__$1 = (function (){var statearr_29708 = state_29705;
(statearr_29708[(7)] = inst_29666);

(statearr_29708[(8)] = inst_29665);

return statearr_29708;
})();
var statearr_29709_29741 = state_29705__$1;
(statearr_29709_29741[(2)] = null);

(statearr_29709_29741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (4))){
var inst_29669 = (state_29705[(9)]);
var inst_29669__$1 = (state_29705[(2)]);
var inst_29670 = (inst_29669__$1 == null);
var inst_29671 = cljs.core.not.call(null,inst_29670);
var state_29705__$1 = (function (){var statearr_29710 = state_29705;
(statearr_29710[(9)] = inst_29669__$1);

return statearr_29710;
})();
if(inst_29671){
var statearr_29711_29742 = state_29705__$1;
(statearr_29711_29742[(1)] = (5));

} else {
var statearr_29712_29743 = state_29705__$1;
(statearr_29712_29743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (15))){
var inst_29695 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29713_29744 = state_29705__$1;
(statearr_29713_29744[(2)] = inst_29695);

(statearr_29713_29744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (13))){
var state_29705__$1 = state_29705;
var statearr_29714_29745 = state_29705__$1;
(statearr_29714_29745[(2)] = null);

(statearr_29714_29745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (6))){
var inst_29665 = (state_29705[(8)]);
var inst_29690 = inst_29665.length;
var inst_29691 = (inst_29690 > (0));
var state_29705__$1 = state_29705;
if(cljs.core.truth_(inst_29691)){
var statearr_29715_29746 = state_29705__$1;
(statearr_29715_29746[(1)] = (12));

} else {
var statearr_29716_29747 = state_29705__$1;
(statearr_29716_29747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (3))){
var inst_29703 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29705__$1,inst_29703);
} else {
if((state_val_29706 === (12))){
var inst_29665 = (state_29705[(8)]);
var inst_29693 = cljs.core.vec.call(null,inst_29665);
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29705__$1,(15),out,inst_29693);
} else {
if((state_val_29706 === (2))){
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29705__$1,(4),ch);
} else {
if((state_val_29706 === (11))){
var inst_29669 = (state_29705[(9)]);
var inst_29673 = (state_29705[(10)]);
var inst_29683 = (state_29705[(2)]);
var inst_29684 = [];
var inst_29685 = inst_29684.push(inst_29669);
var inst_29665 = inst_29684;
var inst_29666 = inst_29673;
var state_29705__$1 = (function (){var statearr_29717 = state_29705;
(statearr_29717[(11)] = inst_29683);

(statearr_29717[(7)] = inst_29666);

(statearr_29717[(12)] = inst_29685);

(statearr_29717[(8)] = inst_29665);

return statearr_29717;
})();
var statearr_29718_29748 = state_29705__$1;
(statearr_29718_29748[(2)] = null);

(statearr_29718_29748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (9))){
var inst_29665 = (state_29705[(8)]);
var inst_29681 = cljs.core.vec.call(null,inst_29665);
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29705__$1,(11),out,inst_29681);
} else {
if((state_val_29706 === (5))){
var inst_29669 = (state_29705[(9)]);
var inst_29666 = (state_29705[(7)]);
var inst_29673 = (state_29705[(10)]);
var inst_29673__$1 = f.call(null,inst_29669);
var inst_29674 = cljs.core._EQ_.call(null,inst_29673__$1,inst_29666);
var inst_29675 = cljs.core.keyword_identical_QMARK_.call(null,inst_29666,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29676 = (inst_29674) || (inst_29675);
var state_29705__$1 = (function (){var statearr_29719 = state_29705;
(statearr_29719[(10)] = inst_29673__$1);

return statearr_29719;
})();
if(cljs.core.truth_(inst_29676)){
var statearr_29720_29749 = state_29705__$1;
(statearr_29720_29749[(1)] = (8));

} else {
var statearr_29721_29750 = state_29705__$1;
(statearr_29721_29750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (14))){
var inst_29698 = (state_29705[(2)]);
var inst_29699 = cljs.core.async.close_BANG_.call(null,out);
var state_29705__$1 = (function (){var statearr_29723 = state_29705;
(statearr_29723[(13)] = inst_29698);

return statearr_29723;
})();
var statearr_29724_29751 = state_29705__$1;
(statearr_29724_29751[(2)] = inst_29699);

(statearr_29724_29751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (10))){
var inst_29688 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29725_29752 = state_29705__$1;
(statearr_29725_29752[(2)] = inst_29688);

(statearr_29725_29752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (8))){
var inst_29669 = (state_29705[(9)]);
var inst_29665 = (state_29705[(8)]);
var inst_29673 = (state_29705[(10)]);
var inst_29678 = inst_29665.push(inst_29669);
var tmp29722 = inst_29665;
var inst_29665__$1 = tmp29722;
var inst_29666 = inst_29673;
var state_29705__$1 = (function (){var statearr_29726 = state_29705;
(statearr_29726[(7)] = inst_29666);

(statearr_29726[(14)] = inst_29678);

(statearr_29726[(8)] = inst_29665__$1);

return statearr_29726;
})();
var statearr_29727_29753 = state_29705__$1;
(statearr_29727_29753[(2)] = null);

(statearr_29727_29753[(1)] = (2));


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
});})(c__26962__auto___29739,out))
;
return ((function (switch__26808__auto__,c__26962__auto___29739,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29731[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29731[(1)] = (1));

return statearr_29731;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29705){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29732){if((e29732 instanceof Object)){
var ex__26812__auto__ = e29732;
var statearr_29733_29754 = state_29705;
(statearr_29733_29754[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29755 = state_29705;
state_29705 = G__29755;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___29739,out))
})();
var state__26964__auto__ = (function (){var statearr_29734 = f__26963__auto__.call(null);
(statearr_29734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___29739);

return statearr_29734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___29739,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485966501702