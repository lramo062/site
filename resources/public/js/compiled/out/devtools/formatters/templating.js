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
var x36778_36779 = value;
x36778_36779.devtools$protocols$IGroup$ = true;


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
var x36783_36784 = value;
x36783_36784.devtools$protocols$ITemplate$ = true;


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
var x36788_36789 = value;
x36788_36789.devtools$protocols$ISurrogate$ = true;


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
var and__24778__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24778__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36797 = arguments.length;
var i__25866__auto___36798 = (0);
while(true){
if((i__25866__auto___36798 < len__25865__auto___36797)){
args__25872__auto__.push((arguments[i__25866__auto___36798]));

var G__36799 = (i__25866__auto___36798 + (1));
i__25866__auto___36798 = G__36799;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__36793_36800 = cljs.core.seq.call(null,items);
var chunk__36794_36801 = null;
var count__36795_36802 = (0);
var i__36796_36803 = (0);
while(true){
if((i__36796_36803 < count__36795_36802)){
var item_36804 = cljs.core._nth.call(null,chunk__36794_36801,i__36796_36803);
if(cljs.core.some_QMARK_.call(null,item_36804)){
if(cljs.core.coll_QMARK_.call(null,item_36804)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_36804)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_36804));
}
} else {
}

var G__36805 = seq__36793_36800;
var G__36806 = chunk__36794_36801;
var G__36807 = count__36795_36802;
var G__36808 = (i__36796_36803 + (1));
seq__36793_36800 = G__36805;
chunk__36794_36801 = G__36806;
count__36795_36802 = G__36807;
i__36796_36803 = G__36808;
continue;
} else {
var temp__4657__auto___36809 = cljs.core.seq.call(null,seq__36793_36800);
if(temp__4657__auto___36809){
var seq__36793_36810__$1 = temp__4657__auto___36809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36793_36810__$1)){
var c__25601__auto___36811 = cljs.core.chunk_first.call(null,seq__36793_36810__$1);
var G__36812 = cljs.core.chunk_rest.call(null,seq__36793_36810__$1);
var G__36813 = c__25601__auto___36811;
var G__36814 = cljs.core.count.call(null,c__25601__auto___36811);
var G__36815 = (0);
seq__36793_36800 = G__36812;
chunk__36794_36801 = G__36813;
count__36795_36802 = G__36814;
i__36796_36803 = G__36815;
continue;
} else {
var item_36816 = cljs.core.first.call(null,seq__36793_36810__$1);
if(cljs.core.some_QMARK_.call(null,item_36816)){
if(cljs.core.coll_QMARK_.call(null,item_36816)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_36816)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_36816));
}
} else {
}

var G__36817 = cljs.core.next.call(null,seq__36793_36810__$1);
var G__36818 = null;
var G__36819 = (0);
var G__36820 = (0);
seq__36793_36800 = G__36817;
chunk__36794_36801 = G__36818;
count__36795_36802 = G__36819;
i__36796_36803 = G__36820;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq36792){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36792));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36828 = arguments.length;
var i__25866__auto___36829 = (0);
while(true){
if((i__25866__auto___36829 < len__25865__auto___36828)){
args__25872__auto__.push((arguments[i__25866__auto___36829]));

var G__36830 = (i__25866__auto___36829 + (1));
i__25866__auto___36829 = G__36830;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((2) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__36824_36831 = cljs.core.seq.call(null,children);
var chunk__36825_36832 = null;
var count__36826_36833 = (0);
var i__36827_36834 = (0);
while(true){
if((i__36827_36834 < count__36826_36833)){
var child_36835 = cljs.core._nth.call(null,chunk__36825_36832,i__36827_36834);
if(cljs.core.some_QMARK_.call(null,child_36835)){
if(cljs.core.coll_QMARK_.call(null,child_36835)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_36835))));
} else {
var temp__4655__auto___36836 = devtools.formatters.helpers.pref.call(null,child_36835);
if(cljs.core.truth_(temp__4655__auto___36836)){
var child_value_36837 = temp__4655__auto___36836;
template.push(child_value_36837);
} else {
}
}
} else {
}

var G__36838 = seq__36824_36831;
var G__36839 = chunk__36825_36832;
var G__36840 = count__36826_36833;
var G__36841 = (i__36827_36834 + (1));
seq__36824_36831 = G__36838;
chunk__36825_36832 = G__36839;
count__36826_36833 = G__36840;
i__36827_36834 = G__36841;
continue;
} else {
var temp__4657__auto___36842 = cljs.core.seq.call(null,seq__36824_36831);
if(temp__4657__auto___36842){
var seq__36824_36843__$1 = temp__4657__auto___36842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36824_36843__$1)){
var c__25601__auto___36844 = cljs.core.chunk_first.call(null,seq__36824_36843__$1);
var G__36845 = cljs.core.chunk_rest.call(null,seq__36824_36843__$1);
var G__36846 = c__25601__auto___36844;
var G__36847 = cljs.core.count.call(null,c__25601__auto___36844);
var G__36848 = (0);
seq__36824_36831 = G__36845;
chunk__36825_36832 = G__36846;
count__36826_36833 = G__36847;
i__36827_36834 = G__36848;
continue;
} else {
var child_36849 = cljs.core.first.call(null,seq__36824_36843__$1);
if(cljs.core.some_QMARK_.call(null,child_36849)){
if(cljs.core.coll_QMARK_.call(null,child_36849)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_36849))));
} else {
var temp__4655__auto___36850 = devtools.formatters.helpers.pref.call(null,child_36849);
if(cljs.core.truth_(temp__4655__auto___36850)){
var child_value_36851 = temp__4655__auto___36850;
template.push(child_value_36851);
} else {
}
}
} else {
}

var G__36852 = cljs.core.next.call(null,seq__36824_36843__$1);
var G__36853 = null;
var G__36854 = (0);
var G__36855 = (0);
seq__36824_36831 = G__36852;
chunk__36825_36832 = G__36853;
count__36826_36833 = G__36854;
i__36827_36834 = G__36855;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq36821){
var G__36822 = cljs.core.first.call(null,seq36821);
var seq36821__$1 = cljs.core.next.call(null,seq36821);
var G__36823 = cljs.core.first.call(null,seq36821__$1);
var seq36821__$2 = cljs.core.next.call(null,seq36821__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__36822,G__36823,seq36821__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36858 = arguments.length;
var i__25866__auto___36859 = (0);
while(true){
if((i__25866__auto___36859 < len__25865__auto___36858)){
args__25872__auto__.push((arguments[i__25866__auto___36859]));

var G__36860 = (i__25866__auto___36859 + (1));
i__25866__auto___36859 = G__36860;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq36856){
var G__36857 = cljs.core.first.call(null,seq36856);
var seq36856__$1 = cljs.core.next.call(null,seq36856);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36857,seq36856__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___36863 = arguments.length;
var i__25866__auto___36864 = (0);
while(true){
if((i__25866__auto___36864 < len__25865__auto___36863)){
args__25872__auto__.push((arguments[i__25866__auto___36864]));

var G__36865 = (i__25866__auto___36864 + (1));
i__25866__auto___36864 = G__36865;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq36861){
var G__36862 = cljs.core.first.call(null,seq36861);
var seq36861__$1 = cljs.core.next.call(null,seq36861);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36862,seq36861__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args36866 = [];
var len__25865__auto___36871 = arguments.length;
var i__25866__auto___36872 = (0);
while(true){
if((i__25866__auto___36872 < len__25865__auto___36871)){
args36866.push((arguments[i__25866__auto___36872]));

var G__36873 = (i__25866__auto___36872 + (1));
i__25866__auto___36872 = G__36873;
continue;
} else {
}
break;
}

var G__36868 = args36866.length;
switch (G__36868) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36866.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj36870 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24790__auto__ = start_index;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return (0);
}
})()};
return obj36870;
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
var args__25872__auto__ = [];
var len__25865__auto___36881 = arguments.length;
var i__25866__auto___36882 = (0);
while(true){
if((i__25866__auto___36882 < len__25865__auto___36881)){
args__25872__auto__.push((arguments[i__25866__auto___36882]));

var G__36883 = (i__25866__auto___36882 + (1));
i__25866__auto___36882 = G__36883;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__36877){
var vec__36878 = p__36877;
var state_override_fn = cljs.core.nth.call(null,vec__36878,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq36875){
var G__36876 = cljs.core.first.call(null,seq36875);
var seq36875__$1 = cljs.core.next.call(null,seq36875);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__36876,seq36875__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36887_36890 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36888_36891 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36887_36890,_STAR_print_fn_STAR_36888_36891,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_36887_36890,_STAR_print_fn_STAR_36888_36891,sb__25776__auto__))
;

try{var _STAR_print_level_STAR_36889_36892 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_36889_36892;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36888_36891;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36887_36890;
}
return [cljs.core.str(sb__25776__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_36894 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_36894;
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
var G__36896 = name;
switch (G__36896) {
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
var vec__36901 = tag;
var html_tag = cljs.core.nth.call(null,vec__36901,(0),null);
var style = cljs.core.nth.call(null,vec__36901,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_36905 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_36905;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_36908 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_36909 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_36909;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_36908;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__36910 = initial_value;
var G__36911 = value.call(null);
initial_value = G__36910;
value = G__36911;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__36912 = initial_value;
var G__36913 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__36912;
value = G__36913;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__36914 = initial_value;
var G__36915 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__36914;
value = G__36915;
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

//# sourceMappingURL=templating.js.map?rel=1484878889120