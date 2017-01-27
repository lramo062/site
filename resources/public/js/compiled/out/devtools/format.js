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
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._header[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._header["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
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
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._has_body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
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
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
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
var o__35908__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35908__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35908__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35908__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35907__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35907__auto__,"make_template");
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
var o__35908__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35908__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35908__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35908__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35907__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35907__auto__,"make_group");
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
var o__35908__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35908__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35908__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35908__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35907__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35907__auto__,"make_reference");
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
var o__35908__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35908__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35908__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35908__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35907__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35907__auto__,"make_surrogate");
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
var o__35908__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35908__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35908__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35908__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35907__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35907__auto__,"render_markup");
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
var o__35908__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35908__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35908__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35908__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35907__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35907__auto__,"_LT_header_GT_");
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
var o__35908__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35908__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35908__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35908__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35907__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35907__auto__,"_LT_standard_body_GT_");
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
var args__25872__auto__ = [];
var len__25865__auto___35929 = arguments.length;
var i__25866__auto___35930 = (0);
while(true){
if((i__25866__auto___35930 < len__25865__auto___35929)){
args__25872__auto__.push((arguments[i__25866__auto___35930]));

var G__35931 = (i__25866__auto___35930 + (1));
i__25866__auto___35930 = G__35931;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35928){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35928));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35933 = arguments.length;
var i__25866__auto___35934 = (0);
while(true){
if((i__25866__auto___35934 < len__25865__auto___35933)){
args__25872__auto__.push((arguments[i__25866__auto___35934]));

var G__35935 = (i__25866__auto___35934 + (1));
i__25866__auto___35934 = G__35935;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35932){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35932));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35937 = arguments.length;
var i__25866__auto___35938 = (0);
while(true){
if((i__25866__auto___35938 < len__25865__auto___35937)){
args__25872__auto__.push((arguments[i__25866__auto___35938]));

var G__35939 = (i__25866__auto___35938 + (1));
i__25866__auto___35938 = G__35939;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35936){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35936));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35941 = arguments.length;
var i__25866__auto___35942 = (0);
while(true){
if((i__25866__auto___35942 < len__25865__auto___35941)){
args__25872__auto__.push((arguments[i__25866__auto___35942]));

var G__35943 = (i__25866__auto___35942 + (1));
i__25866__auto___35942 = G__35943;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35940){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35940));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35945 = arguments.length;
var i__25866__auto___35946 = (0);
while(true){
if((i__25866__auto___35946 < len__25865__auto___35945)){
args__25872__auto__.push((arguments[i__25866__auto___35946]));

var G__35947 = (i__25866__auto___35946 + (1));
i__25866__auto___35946 = G__35947;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35944){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35944));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35949 = arguments.length;
var i__25866__auto___35950 = (0);
while(true){
if((i__25866__auto___35950 < len__25865__auto___35949)){
args__25872__auto__.push((arguments[i__25866__auto___35950]));

var G__35951 = (i__25866__auto___35950 + (1));
i__25866__auto___35950 = G__35951;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35948){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35948));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35953 = arguments.length;
var i__25866__auto___35954 = (0);
while(true){
if((i__25866__auto___35954 < len__25865__auto___35953)){
args__25872__auto__.push((arguments[i__25866__auto___35954]));

var G__35955 = (i__25866__auto___35954 + (1));
i__25866__auto___35954 = G__35955;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35952){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35952));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35963 = arguments.length;
var i__25866__auto___35964 = (0);
while(true){
if((i__25866__auto___35964 < len__25865__auto___35963)){
args__25872__auto__.push((arguments[i__25866__auto___35964]));

var G__35965 = (i__25866__auto___35964 + (1));
i__25866__auto___35964 = G__35965;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35959){
var vec__35960 = p__35959;
var state_override = cljs.core.nth.call(null,vec__35960,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35960,state_override){
return (function (p1__35956_SHARP_){
return cljs.core.merge.call(null,p1__35956_SHARP_,state_override);
});})(vec__35960,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35957){
var G__35958 = cljs.core.first.call(null,seq35957);
var seq35957__$1 = cljs.core.next.call(null,seq35957);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35958,seq35957__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35967 = arguments.length;
var i__25866__auto___35968 = (0);
while(true){
if((i__25866__auto___35968 < len__25865__auto___35967)){
args__25872__auto__.push((arguments[i__25866__auto___35968]));

var G__35969 = (i__25866__auto___35968 + (1));
i__25866__auto___35968 = G__35969;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35966){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35966));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35972 = arguments.length;
var i__25866__auto___35973 = (0);
while(true){
if((i__25866__auto___35973 < len__25865__auto___35972)){
args__25872__auto__.push((arguments[i__25866__auto___35973]));

var G__35974 = (i__25866__auto___35973 + (1));
i__25866__auto___35973 = G__35974;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35970){
var G__35971 = cljs.core.first.call(null,seq35970);
var seq35970__$1 = cljs.core.next.call(null,seq35970);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35971,seq35970__$1);
});


//# sourceMappingURL=format.js.map?rel=1484878888419