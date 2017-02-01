// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25051__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26747 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_26747){
return (function (){
var _STAR_always_update_STAR_26748 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26748;
}});})(_STAR_always_update_STAR_26747))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26747;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args26749 = [];
var len__26126__auto___26752 = arguments.length;
var i__26127__auto___26753 = (0);
while(true){
if((i__26127__auto___26753 < len__26126__auto___26752)){
args26749.push((arguments[i__26127__auto___26753]));

var G__26754 = (i__26127__auto___26753 + (1));
i__26127__auto___26753 = G__26754;
continue;
} else {
}
break;
}

var G__26751 = args26749.length;
switch (G__26751) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26749.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__26760_26764 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26761_26765 = null;
var count__26762_26766 = (0);
var i__26763_26767 = (0);
while(true){
if((i__26763_26767 < count__26762_26766)){
var v_26768 = cljs.core._nth.call(null,chunk__26761_26765,i__26763_26767);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26768);

var G__26769 = seq__26760_26764;
var G__26770 = chunk__26761_26765;
var G__26771 = count__26762_26766;
var G__26772 = (i__26763_26767 + (1));
seq__26760_26764 = G__26769;
chunk__26761_26765 = G__26770;
count__26762_26766 = G__26771;
i__26763_26767 = G__26772;
continue;
} else {
var temp__4657__auto___26773 = cljs.core.seq.call(null,seq__26760_26764);
if(temp__4657__auto___26773){
var seq__26760_26774__$1 = temp__4657__auto___26773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26760_26774__$1)){
var c__25862__auto___26775 = cljs.core.chunk_first.call(null,seq__26760_26774__$1);
var G__26776 = cljs.core.chunk_rest.call(null,seq__26760_26774__$1);
var G__26777 = c__25862__auto___26775;
var G__26778 = cljs.core.count.call(null,c__25862__auto___26775);
var G__26779 = (0);
seq__26760_26764 = G__26776;
chunk__26761_26765 = G__26777;
count__26762_26766 = G__26778;
i__26763_26767 = G__26779;
continue;
} else {
var v_26780 = cljs.core.first.call(null,seq__26760_26774__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26780);

var G__26781 = cljs.core.next.call(null,seq__26760_26774__$1);
var G__26782 = null;
var G__26783 = (0);
var G__26784 = (0);
seq__26760_26764 = G__26781;
chunk__26761_26765 = G__26782;
count__26762_26766 = G__26783;
i__26763_26767 = G__26784;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1485966379100