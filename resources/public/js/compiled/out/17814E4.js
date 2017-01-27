goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('locadev_site.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37566__delegate = function (x){
if(cljs.core.truth_(locadev_site.core.on_js_reload)){
return cljs.core.apply.call(null,locadev_site.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'locadev-site.core/on-js-reload' is missing");
}
};
var G__37566 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37567__i = 0, G__37567__a = new Array(arguments.length -  0);
while (G__37567__i < G__37567__a.length) {G__37567__a[G__37567__i] = arguments[G__37567__i + 0]; ++G__37567__i;}
  x = new cljs.core.IndexedSeq(G__37567__a,0);
} 
return G__37566__delegate.call(this,x);};
G__37566.cljs$lang$maxFixedArity = 0;
G__37566.cljs$lang$applyTo = (function (arglist__37568){
var x = cljs.core.seq(arglist__37568);
return G__37566__delegate(x);
});
G__37566.cljs$core$IFn$_invoke$arity$variadic = G__37566__delegate;
return G__37566;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));