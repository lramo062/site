// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x29735_29736 = value;
x29735_29736.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x29740_29741 = value;
x29740_29741.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x29745_29746 = value;
x29745_29746.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25039__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25039__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29754 = arguments.length;
var i__26127__auto___29755 = (0);
while(true){
if((i__26127__auto___29755 < len__26126__auto___29754)){
args__26133__auto__.push((arguments[i__26127__auto___29755]));

var G__29756 = (i__26127__auto___29755 + (1));
i__26127__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__29750_29757 = cljs.core.seq.call(null,items);
var chunk__29751_29758 = null;
var count__29752_29759 = (0);
var i__29753_29760 = (0);
while(true){
if((i__29753_29760 < count__29752_29759)){
var item_29761 = cljs.core._nth.call(null,chunk__29751_29758,i__29753_29760);
if(cljs.core.some_QMARK_.call(null,item_29761)){
if(cljs.core.coll_QMARK_.call(null,item_29761)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_29761)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_29761));
}
} else {
}

var G__29762 = seq__29750_29757;
var G__29763 = chunk__29751_29758;
var G__29764 = count__29752_29759;
var G__29765 = (i__29753_29760 + (1));
seq__29750_29757 = G__29762;
chunk__29751_29758 = G__29763;
count__29752_29759 = G__29764;
i__29753_29760 = G__29765;
continue;
} else {
var temp__4657__auto___29766 = cljs.core.seq.call(null,seq__29750_29757);
if(temp__4657__auto___29766){
var seq__29750_29767__$1 = temp__4657__auto___29766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29750_29767__$1)){
var c__25862__auto___29768 = cljs.core.chunk_first.call(null,seq__29750_29767__$1);
var G__29769 = cljs.core.chunk_rest.call(null,seq__29750_29767__$1);
var G__29770 = c__25862__auto___29768;
var G__29771 = cljs.core.count.call(null,c__25862__auto___29768);
var G__29772 = (0);
seq__29750_29757 = G__29769;
chunk__29751_29758 = G__29770;
count__29752_29759 = G__29771;
i__29753_29760 = G__29772;
continue;
} else {
var item_29773 = cljs.core.first.call(null,seq__29750_29767__$1);
if(cljs.core.some_QMARK_.call(null,item_29773)){
if(cljs.core.coll_QMARK_.call(null,item_29773)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_29773)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_29773));
}
} else {
}

var G__29774 = cljs.core.next.call(null,seq__29750_29767__$1);
var G__29775 = null;
var G__29776 = (0);
var G__29777 = (0);
seq__29750_29757 = G__29774;
chunk__29751_29758 = G__29775;
count__29752_29759 = G__29776;
i__29753_29760 = G__29777;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq29749){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29749));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29785 = arguments.length;
var i__26127__auto___29786 = (0);
while(true){
if((i__26127__auto___29786 < len__26126__auto___29785)){
args__26133__auto__.push((arguments[i__26127__auto___29786]));

var G__29787 = (i__26127__auto___29786 + (1));
i__26127__auto___29786 = G__29787;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__29781_29788 = cljs.core.seq.call(null,children);
var chunk__29782_29789 = null;
var count__29783_29790 = (0);
var i__29784_29791 = (0);
while(true){
if((i__29784_29791 < count__29783_29790)){
var child_29792 = cljs.core._nth.call(null,chunk__29782_29789,i__29784_29791);
if(cljs.core.some_QMARK_.call(null,child_29792)){
if(cljs.core.coll_QMARK_.call(null,child_29792)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_29792))));
} else {
var temp__4655__auto___29793 = devtools.formatters.helpers.pref.call(null,child_29792);
if(cljs.core.truth_(temp__4655__auto___29793)){
var child_value_29794 = temp__4655__auto___29793;
template.push(child_value_29794);
} else {
}
}
} else {
}

var G__29795 = seq__29781_29788;
var G__29796 = chunk__29782_29789;
var G__29797 = count__29783_29790;
var G__29798 = (i__29784_29791 + (1));
seq__29781_29788 = G__29795;
chunk__29782_29789 = G__29796;
count__29783_29790 = G__29797;
i__29784_29791 = G__29798;
continue;
} else {
var temp__4657__auto___29799 = cljs.core.seq.call(null,seq__29781_29788);
if(temp__4657__auto___29799){
var seq__29781_29800__$1 = temp__4657__auto___29799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29781_29800__$1)){
var c__25862__auto___29801 = cljs.core.chunk_first.call(null,seq__29781_29800__$1);
var G__29802 = cljs.core.chunk_rest.call(null,seq__29781_29800__$1);
var G__29803 = c__25862__auto___29801;
var G__29804 = cljs.core.count.call(null,c__25862__auto___29801);
var G__29805 = (0);
seq__29781_29788 = G__29802;
chunk__29782_29789 = G__29803;
count__29783_29790 = G__29804;
i__29784_29791 = G__29805;
continue;
} else {
var child_29806 = cljs.core.first.call(null,seq__29781_29800__$1);
if(cljs.core.some_QMARK_.call(null,child_29806)){
if(cljs.core.coll_QMARK_.call(null,child_29806)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_29806))));
} else {
var temp__4655__auto___29807 = devtools.formatters.helpers.pref.call(null,child_29806);
if(cljs.core.truth_(temp__4655__auto___29807)){
var child_value_29808 = temp__4655__auto___29807;
template.push(child_value_29808);
} else {
}
}
} else {
}

var G__29809 = cljs.core.next.call(null,seq__29781_29800__$1);
var G__29810 = null;
var G__29811 = (0);
var G__29812 = (0);
seq__29781_29788 = G__29809;
chunk__29782_29789 = G__29810;
count__29783_29790 = G__29811;
i__29784_29791 = G__29812;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq29778){
var G__29779 = cljs.core.first.call(null,seq29778);
var seq29778__$1 = cljs.core.next.call(null,seq29778);
var G__29780 = cljs.core.first.call(null,seq29778__$1);
var seq29778__$2 = cljs.core.next.call(null,seq29778__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__29779,G__29780,seq29778__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29815 = arguments.length;
var i__26127__auto___29816 = (0);
while(true){
if((i__26127__auto___29816 < len__26126__auto___29815)){
args__26133__auto__.push((arguments[i__26127__auto___29816]));

var G__29817 = (i__26127__auto___29816 + (1));
i__26127__auto___29816 = G__29817;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq29813){
var G__29814 = cljs.core.first.call(null,seq29813);
var seq29813__$1 = cljs.core.next.call(null,seq29813);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29814,seq29813__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29820 = arguments.length;
var i__26127__auto___29821 = (0);
while(true){
if((i__26127__auto___29821 < len__26126__auto___29820)){
args__26133__auto__.push((arguments[i__26127__auto___29821]));

var G__29822 = (i__26127__auto___29821 + (1));
i__26127__auto___29821 = G__29822;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq29818){
var G__29819 = cljs.core.first.call(null,seq29818);
var seq29818__$1 = cljs.core.next.call(null,seq29818);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29819,seq29818__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args29823 = [];
var len__26126__auto___29828 = arguments.length;
var i__26127__auto___29829 = (0);
while(true){
if((i__26127__auto___29829 < len__26126__auto___29828)){
args29823.push((arguments[i__26127__auto___29829]));

var G__29830 = (i__26127__auto___29829 + (1));
i__26127__auto___29829 = G__29830;
continue;
} else {
}
break;
}

var G__29825 = args29823.length;
switch (G__29825) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29823.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj29827 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25051__auto__ = start_index;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (0);
}
})()};
return obj29827;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29838 = arguments.length;
var i__26127__auto___29839 = (0);
while(true){
if((i__26127__auto___29839 < len__26126__auto___29838)){
args__26133__auto__.push((arguments[i__26127__auto___29839]));

var G__29840 = (i__26127__auto___29839 + (1));
i__26127__auto___29839 = G__29840;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29834){
var vec__29835 = p__29834;
var state_override_fn = cljs.core.nth.call(null,vec__29835,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq29832){
var G__29833 = cljs.core.first.call(null,seq29832);
var seq29832__$1 = cljs.core.next.call(null,seq29832);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__29833,seq29832__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26037__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29844_29847 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29845_29848 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29844_29847,_STAR_print_fn_STAR_29845_29848,sb__26037__auto__){
return (function (x__26038__auto__){
return sb__26037__auto__.append(x__26038__auto__);
});})(_STAR_print_newline_STAR_29844_29847,_STAR_print_fn_STAR_29845_29848,sb__26037__auto__))
;

try{var _STAR_print_level_STAR_29846_29849 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29846_29849;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29845_29848;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29844_29847;
}
return [cljs.core.str(sb__26037__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_29851 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29851;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__29853 = name;
switch (G__29853) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__29858 = tag;
var html_tag = cljs.core.nth.call(null,vec__29858,(0),null);
var style = cljs.core.nth.call(null,vec__29858,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_29862 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_29862;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_29865 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_29866 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_29866;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_29865;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__29867 = initial_value;
var G__29868 = value.call(null);
initial_value = G__29867;
value = G__29868;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__29869 = initial_value;
var G__29870 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__29869;
value = G__29870;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__29871 = initial_value;
var G__29872 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__29871;
value = G__29872;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1485966383486