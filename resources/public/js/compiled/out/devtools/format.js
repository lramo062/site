// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25714__auto__ = (((value == null))?null:value);
var m__25715__auto__ = (devtools.format._header[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,value);
} else {
var m__25715__auto____$1 = (devtools.format._header["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25714__auto__ = (((value == null))?null:value);
var m__25715__auto__ = (devtools.format._has_body[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,value);
} else {
var m__25715__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25714__auto__ = (((value == null))?null:value);
var m__25715__auto__ = (devtools.format._body[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,value);
} else {
var m__25715__auto____$1 = (devtools.format._body["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27192__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27192__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27192__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27192__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27191__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27191__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27192__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27192__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27192__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27192__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27191__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27191__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27192__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27192__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27192__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27192__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27191__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27191__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27192__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27192__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27192__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27192__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27191__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27191__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27192__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27192__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27192__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27192__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27191__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27191__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27192__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27192__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27192__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27192__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27191__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27191__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__27192__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__27192__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__27192__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__27192__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__27191__auto__ = temp__4657__auto____$2;
return goog.object.get(o__27191__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27213 = arguments.length;
var i__26127__auto___27214 = (0);
while(true){
if((i__26127__auto___27214 < len__26126__auto___27213)){
args__26133__auto__.push((arguments[i__26127__auto___27214]));

var G__27215 = (i__26127__auto___27214 + (1));
i__26127__auto___27214 = G__27215;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq27212){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27212));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27217 = arguments.length;
var i__26127__auto___27218 = (0);
while(true){
if((i__26127__auto___27218 < len__26126__auto___27217)){
args__26133__auto__.push((arguments[i__26127__auto___27218]));

var G__27219 = (i__26127__auto___27218 + (1));
i__26127__auto___27218 = G__27219;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq27216){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27216));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27221 = arguments.length;
var i__26127__auto___27222 = (0);
while(true){
if((i__26127__auto___27222 < len__26126__auto___27221)){
args__26133__auto__.push((arguments[i__26127__auto___27222]));

var G__27223 = (i__26127__auto___27222 + (1));
i__26127__auto___27222 = G__27223;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq27220){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27220));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27225 = arguments.length;
var i__26127__auto___27226 = (0);
while(true){
if((i__26127__auto___27226 < len__26126__auto___27225)){
args__26133__auto__.push((arguments[i__26127__auto___27226]));

var G__27227 = (i__26127__auto___27226 + (1));
i__26127__auto___27226 = G__27227;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27224){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27224));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27229 = arguments.length;
var i__26127__auto___27230 = (0);
while(true){
if((i__26127__auto___27230 < len__26126__auto___27229)){
args__26133__auto__.push((arguments[i__26127__auto___27230]));

var G__27231 = (i__26127__auto___27230 + (1));
i__26127__auto___27230 = G__27231;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq27228){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27228));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27233 = arguments.length;
var i__26127__auto___27234 = (0);
while(true){
if((i__26127__auto___27234 < len__26126__auto___27233)){
args__26133__auto__.push((arguments[i__26127__auto___27234]));

var G__27235 = (i__26127__auto___27234 + (1));
i__26127__auto___27234 = G__27235;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq27232){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27232));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27237 = arguments.length;
var i__26127__auto___27238 = (0);
while(true){
if((i__26127__auto___27238 < len__26126__auto___27237)){
args__26133__auto__.push((arguments[i__26127__auto___27238]));

var G__27239 = (i__26127__auto___27238 + (1));
i__26127__auto___27238 = G__27239;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq27236){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27236));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27247 = arguments.length;
var i__26127__auto___27248 = (0);
while(true){
if((i__26127__auto___27248 < len__26126__auto___27247)){
args__26133__auto__.push((arguments[i__26127__auto___27248]));

var G__27249 = (i__26127__auto___27248 + (1));
i__26127__auto___27248 = G__27249;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27243){
var vec__27244 = p__27243;
var state_override = cljs.core.nth.call(null,vec__27244,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__27244,state_override){
return (function (p1__27240_SHARP_){
return cljs.core.merge.call(null,p1__27240_SHARP_,state_override);
});})(vec__27244,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq27241){
var G__27242 = cljs.core.first.call(null,seq27241);
var seq27241__$1 = cljs.core.next.call(null,seq27241);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__27242,seq27241__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27251 = arguments.length;
var i__26127__auto___27252 = (0);
while(true){
if((i__26127__auto___27252 < len__26126__auto___27251)){
args__26133__auto__.push((arguments[i__26127__auto___27252]));

var G__27253 = (i__26127__auto___27252 + (1));
i__26127__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq27250){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27250));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___27256 = arguments.length;
var i__26127__auto___27257 = (0);
while(true){
if((i__26127__auto___27257 < len__26126__auto___27256)){
args__26133__auto__.push((arguments[i__26127__auto___27257]));

var G__27258 = (i__26127__auto___27257 + (1));
i__26127__auto___27257 = G__27258;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27254){
var G__27255 = cljs.core.first.call(null,seq27254);
var seq27254__$1 = cljs.core.next.call(null,seq27254);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__27255,seq27254__$1);
});


//# sourceMappingURL=format.js.map?rel=1485966379799