// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args32830 = [];
var len__25865__auto___32833 = arguments.length;
var i__25866__auto___32834 = (0);
while(true){
if((i__25866__auto___32834 < len__25865__auto___32833)){
args32830.push((arguments[i__25866__auto___32834]));

var G__32835 = (i__25866__auto___32834 + (1));
i__25866__auto___32834 = G__32835;
continue;
} else {
}
break;
}

var G__32832 = args32830.length;
switch (G__32832) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32830.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32838 = arguments.length;
var i__25866__auto___32839 = (0);
while(true){
if((i__25866__auto___32839 < len__25865__auto___32838)){
args__25872__auto__.push((arguments[i__25866__auto___32839]));

var G__32840 = (i__25866__auto___32839 + (1));
i__25866__auto___32839 = G__32840;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32837){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32837));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32842 = arguments.length;
var i__25866__auto___32843 = (0);
while(true){
if((i__25866__auto___32843 < len__25865__auto___32842)){
args__25872__auto__.push((arguments[i__25866__auto___32843]));

var G__32844 = (i__25866__auto___32843 + (1));
i__25866__auto___32843 = G__32844;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32841){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32841));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32845 = cljs.core._EQ_;
var expr__32846 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32849){if((e32849 instanceof Error)){
var e = e32849;
return false;
} else {
throw e32849;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32845.call(null,"true",expr__32846))){
return true;
} else {
if(cljs.core.truth_(pred__32845.call(null,"false",expr__32846))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32846)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32851){if((e32851 instanceof Error)){
var e = e32851;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32851;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32852){
var map__32855 = p__32852;
var map__32855__$1 = ((((!((map__32855 == null)))?((((map__32855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32855):map__32855);
var message = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26962__auto___33017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___33017,ch){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___33017,ch){
return (function (state_32986){
var state_val_32987 = (state_32986[(1)]);
if((state_val_32987 === (7))){
var inst_32982 = (state_32986[(2)]);
var state_32986__$1 = state_32986;
var statearr_32988_33018 = state_32986__$1;
(statearr_32988_33018[(2)] = inst_32982);

(statearr_32988_33018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (1))){
var state_32986__$1 = state_32986;
var statearr_32989_33019 = state_32986__$1;
(statearr_32989_33019[(2)] = null);

(statearr_32989_33019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (4))){
var inst_32939 = (state_32986[(7)]);
var inst_32939__$1 = (state_32986[(2)]);
var state_32986__$1 = (function (){var statearr_32990 = state_32986;
(statearr_32990[(7)] = inst_32939__$1);

return statearr_32990;
})();
if(cljs.core.truth_(inst_32939__$1)){
var statearr_32991_33020 = state_32986__$1;
(statearr_32991_33020[(1)] = (5));

} else {
var statearr_32992_33021 = state_32986__$1;
(statearr_32992_33021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (15))){
var inst_32946 = (state_32986[(8)]);
var inst_32961 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32946);
var inst_32962 = cljs.core.first.call(null,inst_32961);
var inst_32963 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32962);
var inst_32964 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32963)].join('');
var inst_32965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32964);
var state_32986__$1 = state_32986;
var statearr_32993_33022 = state_32986__$1;
(statearr_32993_33022[(2)] = inst_32965);

(statearr_32993_33022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (13))){
var inst_32970 = (state_32986[(2)]);
var state_32986__$1 = state_32986;
var statearr_32994_33023 = state_32986__$1;
(statearr_32994_33023[(2)] = inst_32970);

(statearr_32994_33023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (6))){
var state_32986__$1 = state_32986;
var statearr_32995_33024 = state_32986__$1;
(statearr_32995_33024[(2)] = null);

(statearr_32995_33024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (17))){
var inst_32968 = (state_32986[(2)]);
var state_32986__$1 = state_32986;
var statearr_32996_33025 = state_32986__$1;
(statearr_32996_33025[(2)] = inst_32968);

(statearr_32996_33025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (3))){
var inst_32984 = (state_32986[(2)]);
var state_32986__$1 = state_32986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32986__$1,inst_32984);
} else {
if((state_val_32987 === (12))){
var inst_32945 = (state_32986[(9)]);
var inst_32959 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32945,opts);
var state_32986__$1 = state_32986;
if(cljs.core.truth_(inst_32959)){
var statearr_32997_33026 = state_32986__$1;
(statearr_32997_33026[(1)] = (15));

} else {
var statearr_32998_33027 = state_32986__$1;
(statearr_32998_33027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (2))){
var state_32986__$1 = state_32986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32986__$1,(4),ch);
} else {
if((state_val_32987 === (11))){
var inst_32946 = (state_32986[(8)]);
var inst_32951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32952 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32946);
var inst_32953 = cljs.core.async.timeout.call(null,(1000));
var inst_32954 = [inst_32952,inst_32953];
var inst_32955 = (new cljs.core.PersistentVector(null,2,(5),inst_32951,inst_32954,null));
var state_32986__$1 = state_32986;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32986__$1,(14),inst_32955);
} else {
if((state_val_32987 === (9))){
var inst_32946 = (state_32986[(8)]);
var inst_32972 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32973 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32946);
var inst_32974 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32973);
var inst_32975 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32974)].join('');
var inst_32976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32975);
var state_32986__$1 = (function (){var statearr_32999 = state_32986;
(statearr_32999[(10)] = inst_32972);

return statearr_32999;
})();
var statearr_33000_33028 = state_32986__$1;
(statearr_33000_33028[(2)] = inst_32976);

(statearr_33000_33028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (5))){
var inst_32939 = (state_32986[(7)]);
var inst_32941 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32942 = (new cljs.core.PersistentArrayMap(null,2,inst_32941,null));
var inst_32943 = (new cljs.core.PersistentHashSet(null,inst_32942,null));
var inst_32944 = figwheel.client.focus_msgs.call(null,inst_32943,inst_32939);
var inst_32945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32944);
var inst_32946 = cljs.core.first.call(null,inst_32944);
var inst_32947 = figwheel.client.autoload_QMARK_.call(null);
var state_32986__$1 = (function (){var statearr_33001 = state_32986;
(statearr_33001[(9)] = inst_32945);

(statearr_33001[(8)] = inst_32946);

return statearr_33001;
})();
if(cljs.core.truth_(inst_32947)){
var statearr_33002_33029 = state_32986__$1;
(statearr_33002_33029[(1)] = (8));

} else {
var statearr_33003_33030 = state_32986__$1;
(statearr_33003_33030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (14))){
var inst_32957 = (state_32986[(2)]);
var state_32986__$1 = state_32986;
var statearr_33004_33031 = state_32986__$1;
(statearr_33004_33031[(2)] = inst_32957);

(statearr_33004_33031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (16))){
var state_32986__$1 = state_32986;
var statearr_33005_33032 = state_32986__$1;
(statearr_33005_33032[(2)] = null);

(statearr_33005_33032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (10))){
var inst_32978 = (state_32986[(2)]);
var state_32986__$1 = (function (){var statearr_33006 = state_32986;
(statearr_33006[(11)] = inst_32978);

return statearr_33006;
})();
var statearr_33007_33033 = state_32986__$1;
(statearr_33007_33033[(2)] = null);

(statearr_33007_33033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (8))){
var inst_32945 = (state_32986[(9)]);
var inst_32949 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32945,opts);
var state_32986__$1 = state_32986;
if(cljs.core.truth_(inst_32949)){
var statearr_33008_33034 = state_32986__$1;
(statearr_33008_33034[(1)] = (11));

} else {
var statearr_33009_33035 = state_32986__$1;
(statearr_33009_33035[(1)] = (12));

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
});})(c__26962__auto___33017,ch))
;
return ((function (switch__26808__auto__,c__26962__auto___33017,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_33013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33013[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__);

(statearr_33013[(1)] = (1));

return statearr_33013;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1 = (function (state_32986){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_32986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e33014){if((e33014 instanceof Object)){
var ex__26812__auto__ = e33014;
var statearr_33015_33036 = state_32986;
(statearr_33015_33036[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33037 = state_32986;
state_32986 = G__33037;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__ = function(state_32986){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1.call(this,state_32986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___33017,ch))
})();
var state__26964__auto__ = (function (){var statearr_33016 = f__26963__auto__.call(null);
(statearr_33016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___33017);

return statearr_33016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___33017,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33038_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33038_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33041 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33041){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e33040){if((e33040 instanceof Error)){
var e = e33040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33041], null));
} else {
var e = e33040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_33041))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33042){
var map__33051 = p__33042;
var map__33051__$1 = ((((!((map__33051 == null)))?((((map__33051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33051):map__33051);
var opts = map__33051__$1;
var build_id = cljs.core.get.call(null,map__33051__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33051,map__33051__$1,opts,build_id){
return (function (p__33053){
var vec__33054 = p__33053;
var seq__33055 = cljs.core.seq.call(null,vec__33054);
var first__33056 = cljs.core.first.call(null,seq__33055);
var seq__33055__$1 = cljs.core.next.call(null,seq__33055);
var map__33057 = first__33056;
var map__33057__$1 = ((((!((map__33057 == null)))?((((map__33057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33057):map__33057);
var msg = map__33057__$1;
var msg_name = cljs.core.get.call(null,map__33057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33055__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33054,seq__33055,first__33056,seq__33055__$1,map__33057,map__33057__$1,msg,msg_name,_,map__33051,map__33051__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33054,seq__33055,first__33056,seq__33055__$1,map__33057,map__33057__$1,msg,msg_name,_,map__33051,map__33051__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33051,map__33051__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33065){
var vec__33066 = p__33065;
var seq__33067 = cljs.core.seq.call(null,vec__33066);
var first__33068 = cljs.core.first.call(null,seq__33067);
var seq__33067__$1 = cljs.core.next.call(null,seq__33067);
var map__33069 = first__33068;
var map__33069__$1 = ((((!((map__33069 == null)))?((((map__33069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33069):map__33069);
var msg = map__33069__$1;
var msg_name = cljs.core.get.call(null,map__33069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33067__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33071){
var map__33083 = p__33071;
var map__33083__$1 = ((((!((map__33083 == null)))?((((map__33083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33083):map__33083);
var on_compile_warning = cljs.core.get.call(null,map__33083__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33083__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33083,map__33083__$1,on_compile_warning,on_compile_fail){
return (function (p__33085){
var vec__33086 = p__33085;
var seq__33087 = cljs.core.seq.call(null,vec__33086);
var first__33088 = cljs.core.first.call(null,seq__33087);
var seq__33087__$1 = cljs.core.next.call(null,seq__33087);
var map__33089 = first__33088;
var map__33089__$1 = ((((!((map__33089 == null)))?((((map__33089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33089):map__33089);
var msg = map__33089__$1;
var msg_name = cljs.core.get.call(null,map__33089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33087__$1;
var pred__33091 = cljs.core._EQ_;
var expr__33092 = msg_name;
if(cljs.core.truth_(pred__33091.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33092))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33091.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33092))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33083,map__33083__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__,msg_hist,msg_names,msg){
return (function (state_33320){
var state_val_33321 = (state_33320[(1)]);
if((state_val_33321 === (7))){
var inst_33240 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33240)){
var statearr_33322_33372 = state_33320__$1;
(statearr_33322_33372[(1)] = (8));

} else {
var statearr_33323_33373 = state_33320__$1;
(statearr_33323_33373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (20))){
var inst_33314 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33324_33374 = state_33320__$1;
(statearr_33324_33374[(2)] = inst_33314);

(statearr_33324_33374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (27))){
var inst_33310 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33325_33375 = state_33320__$1;
(statearr_33325_33375[(2)] = inst_33310);

(statearr_33325_33375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (1))){
var inst_33233 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33233)){
var statearr_33326_33376 = state_33320__$1;
(statearr_33326_33376[(1)] = (2));

} else {
var statearr_33327_33377 = state_33320__$1;
(statearr_33327_33377[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (24))){
var inst_33312 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33328_33378 = state_33320__$1;
(statearr_33328_33378[(2)] = inst_33312);

(statearr_33328_33378[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (4))){
var inst_33318 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33320__$1,inst_33318);
} else {
if((state_val_33321 === (15))){
var inst_33316 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33329_33379 = state_33320__$1;
(statearr_33329_33379[(2)] = inst_33316);

(statearr_33329_33379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (21))){
var inst_33269 = (state_33320[(2)]);
var inst_33270 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33271 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33270);
var state_33320__$1 = (function (){var statearr_33330 = state_33320;
(statearr_33330[(7)] = inst_33269);

return statearr_33330;
})();
var statearr_33331_33380 = state_33320__$1;
(statearr_33331_33380[(2)] = inst_33271);

(statearr_33331_33380[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (31))){
var inst_33299 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33299)){
var statearr_33332_33381 = state_33320__$1;
(statearr_33332_33381[(1)] = (34));

} else {
var statearr_33333_33382 = state_33320__$1;
(statearr_33333_33382[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (32))){
var inst_33308 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33334_33383 = state_33320__$1;
(statearr_33334_33383[(2)] = inst_33308);

(statearr_33334_33383[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (33))){
var inst_33295 = (state_33320[(2)]);
var inst_33296 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33297 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33296);
var state_33320__$1 = (function (){var statearr_33335 = state_33320;
(statearr_33335[(8)] = inst_33295);

return statearr_33335;
})();
var statearr_33336_33384 = state_33320__$1;
(statearr_33336_33384[(2)] = inst_33297);

(statearr_33336_33384[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (13))){
var inst_33254 = figwheel.client.heads_up.clear.call(null);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(16),inst_33254);
} else {
if((state_val_33321 === (22))){
var inst_33275 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33276 = figwheel.client.heads_up.append_warning_message.call(null,inst_33275);
var state_33320__$1 = state_33320;
var statearr_33337_33385 = state_33320__$1;
(statearr_33337_33385[(2)] = inst_33276);

(statearr_33337_33385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (36))){
var inst_33306 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33338_33386 = state_33320__$1;
(statearr_33338_33386[(2)] = inst_33306);

(statearr_33338_33386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (29))){
var inst_33286 = (state_33320[(2)]);
var inst_33287 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33288 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33287);
var state_33320__$1 = (function (){var statearr_33339 = state_33320;
(statearr_33339[(9)] = inst_33286);

return statearr_33339;
})();
var statearr_33340_33387 = state_33320__$1;
(statearr_33340_33387[(2)] = inst_33288);

(statearr_33340_33387[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (6))){
var inst_33235 = (state_33320[(10)]);
var state_33320__$1 = state_33320;
var statearr_33341_33388 = state_33320__$1;
(statearr_33341_33388[(2)] = inst_33235);

(statearr_33341_33388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (28))){
var inst_33282 = (state_33320[(2)]);
var inst_33283 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33284 = figwheel.client.heads_up.display_warning.call(null,inst_33283);
var state_33320__$1 = (function (){var statearr_33342 = state_33320;
(statearr_33342[(11)] = inst_33282);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(29),inst_33284);
} else {
if((state_val_33321 === (25))){
var inst_33280 = figwheel.client.heads_up.clear.call(null);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(28),inst_33280);
} else {
if((state_val_33321 === (34))){
var inst_33301 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(37),inst_33301);
} else {
if((state_val_33321 === (17))){
var inst_33260 = (state_33320[(2)]);
var inst_33261 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33262 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33261);
var state_33320__$1 = (function (){var statearr_33343 = state_33320;
(statearr_33343[(12)] = inst_33260);

return statearr_33343;
})();
var statearr_33344_33389 = state_33320__$1;
(statearr_33344_33389[(2)] = inst_33262);

(statearr_33344_33389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (3))){
var inst_33252 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33252)){
var statearr_33345_33390 = state_33320__$1;
(statearr_33345_33390[(1)] = (13));

} else {
var statearr_33346_33391 = state_33320__$1;
(statearr_33346_33391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (12))){
var inst_33248 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33347_33392 = state_33320__$1;
(statearr_33347_33392[(2)] = inst_33248);

(statearr_33347_33392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (2))){
var inst_33235 = (state_33320[(10)]);
var inst_33235__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33320__$1 = (function (){var statearr_33348 = state_33320;
(statearr_33348[(10)] = inst_33235__$1);

return statearr_33348;
})();
if(cljs.core.truth_(inst_33235__$1)){
var statearr_33349_33393 = state_33320__$1;
(statearr_33349_33393[(1)] = (5));

} else {
var statearr_33350_33394 = state_33320__$1;
(statearr_33350_33394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (23))){
var inst_33278 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33278)){
var statearr_33351_33395 = state_33320__$1;
(statearr_33351_33395[(1)] = (25));

} else {
var statearr_33352_33396 = state_33320__$1;
(statearr_33352_33396[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (35))){
var state_33320__$1 = state_33320;
var statearr_33353_33397 = state_33320__$1;
(statearr_33353_33397[(2)] = null);

(statearr_33353_33397[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (19))){
var inst_33273 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33273)){
var statearr_33354_33398 = state_33320__$1;
(statearr_33354_33398[(1)] = (22));

} else {
var statearr_33355_33399 = state_33320__$1;
(statearr_33355_33399[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (11))){
var inst_33244 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33356_33400 = state_33320__$1;
(statearr_33356_33400[(2)] = inst_33244);

(statearr_33356_33400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (9))){
var inst_33246 = figwheel.client.heads_up.clear.call(null);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(12),inst_33246);
} else {
if((state_val_33321 === (5))){
var inst_33237 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33320__$1 = state_33320;
var statearr_33357_33401 = state_33320__$1;
(statearr_33357_33401[(2)] = inst_33237);

(statearr_33357_33401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (14))){
var inst_33264 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33264)){
var statearr_33358_33402 = state_33320__$1;
(statearr_33358_33402[(1)] = (18));

} else {
var statearr_33359_33403 = state_33320__$1;
(statearr_33359_33403[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (26))){
var inst_33290 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33320__$1 = state_33320;
if(cljs.core.truth_(inst_33290)){
var statearr_33360_33404 = state_33320__$1;
(statearr_33360_33404[(1)] = (30));

} else {
var statearr_33361_33405 = state_33320__$1;
(statearr_33361_33405[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (16))){
var inst_33256 = (state_33320[(2)]);
var inst_33257 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33258 = figwheel.client.heads_up.display_exception.call(null,inst_33257);
var state_33320__$1 = (function (){var statearr_33362 = state_33320;
(statearr_33362[(13)] = inst_33256);

return statearr_33362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(17),inst_33258);
} else {
if((state_val_33321 === (30))){
var inst_33292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33293 = figwheel.client.heads_up.display_warning.call(null,inst_33292);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(33),inst_33293);
} else {
if((state_val_33321 === (10))){
var inst_33250 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33363_33406 = state_33320__$1;
(statearr_33363_33406[(2)] = inst_33250);

(statearr_33363_33406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (18))){
var inst_33266 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33267 = figwheel.client.heads_up.display_exception.call(null,inst_33266);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(21),inst_33267);
} else {
if((state_val_33321 === (37))){
var inst_33303 = (state_33320[(2)]);
var state_33320__$1 = state_33320;
var statearr_33364_33407 = state_33320__$1;
(statearr_33364_33407[(2)] = inst_33303);

(statearr_33364_33407[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (8))){
var inst_33242 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33320__$1,(11),inst_33242);
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
});})(c__26962__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26808__auto__,c__26962__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0 = (function (){
var statearr_33368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33368[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__);

(statearr_33368[(1)] = (1));

return statearr_33368;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1 = (function (state_33320){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_33320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e33369){if((e33369 instanceof Object)){
var ex__26812__auto__ = e33369;
var statearr_33370_33408 = state_33320;
(statearr_33370_33408[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33409 = state_33320;
state_33320 = G__33409;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__ = function(state_33320){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1.call(this,state_33320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__,msg_hist,msg_names,msg))
})();
var state__26964__auto__ = (function (){var statearr_33371 = f__26963__auto__.call(null);
(statearr_33371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_33371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__,msg_hist,msg_names,msg))
);

return c__26962__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26962__auto___33472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___33472,ch){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___33472,ch){
return (function (state_33455){
var state_val_33456 = (state_33455[(1)]);
if((state_val_33456 === (1))){
var state_33455__$1 = state_33455;
var statearr_33457_33473 = state_33455__$1;
(statearr_33457_33473[(2)] = null);

(statearr_33457_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (2))){
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33455__$1,(4),ch);
} else {
if((state_val_33456 === (3))){
var inst_33453 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33455__$1,inst_33453);
} else {
if((state_val_33456 === (4))){
var inst_33443 = (state_33455[(7)]);
var inst_33443__$1 = (state_33455[(2)]);
var state_33455__$1 = (function (){var statearr_33458 = state_33455;
(statearr_33458[(7)] = inst_33443__$1);

return statearr_33458;
})();
if(cljs.core.truth_(inst_33443__$1)){
var statearr_33459_33474 = state_33455__$1;
(statearr_33459_33474[(1)] = (5));

} else {
var statearr_33460_33475 = state_33455__$1;
(statearr_33460_33475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (5))){
var inst_33443 = (state_33455[(7)]);
var inst_33445 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33443);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33455__$1,(8),inst_33445);
} else {
if((state_val_33456 === (6))){
var state_33455__$1 = state_33455;
var statearr_33461_33476 = state_33455__$1;
(statearr_33461_33476[(2)] = null);

(statearr_33461_33476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (7))){
var inst_33451 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33462_33477 = state_33455__$1;
(statearr_33462_33477[(2)] = inst_33451);

(statearr_33462_33477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (8))){
var inst_33447 = (state_33455[(2)]);
var state_33455__$1 = (function (){var statearr_33463 = state_33455;
(statearr_33463[(8)] = inst_33447);

return statearr_33463;
})();
var statearr_33464_33478 = state_33455__$1;
(statearr_33464_33478[(2)] = null);

(statearr_33464_33478[(1)] = (2));


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
});})(c__26962__auto___33472,ch))
;
return ((function (switch__26808__auto__,c__26962__auto___33472,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_33468 = [null,null,null,null,null,null,null,null,null];
(statearr_33468[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26809__auto__);

(statearr_33468[(1)] = (1));

return statearr_33468;
});
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1 = (function (state_33455){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_33455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e33469){if((e33469 instanceof Object)){
var ex__26812__auto__ = e33469;
var statearr_33470_33479 = state_33455;
(statearr_33470_33479[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33480 = state_33455;
state_33455 = G__33480;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__ = function(state_33455){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1.call(this,state_33455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___33472,ch))
})();
var state__26964__auto__ = (function (){var statearr_33471 = f__26963__auto__.call(null);
(statearr_33471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___33472);

return statearr_33471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___33472,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__){
return (function (state_33501){
var state_val_33502 = (state_33501[(1)]);
if((state_val_33502 === (1))){
var inst_33496 = cljs.core.async.timeout.call(null,(3000));
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33501__$1,(2),inst_33496);
} else {
if((state_val_33502 === (2))){
var inst_33498 = (state_33501[(2)]);
var inst_33499 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33501__$1 = (function (){var statearr_33503 = state_33501;
(statearr_33503[(7)] = inst_33498);

return statearr_33503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33501__$1,inst_33499);
} else {
return null;
}
}
});})(c__26962__auto__))
;
return ((function (switch__26808__auto__,c__26962__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_33507 = [null,null,null,null,null,null,null,null];
(statearr_33507[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__);

(statearr_33507[(1)] = (1));

return statearr_33507;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1 = (function (state_33501){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_33501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e33508){if((e33508 instanceof Object)){
var ex__26812__auto__ = e33508;
var statearr_33509_33511 = state_33501;
(statearr_33509_33511[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33512 = state_33501;
state_33501 = G__33512;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__ = function(state_33501){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1.call(this,state_33501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__))
})();
var state__26964__auto__ = (function (){var statearr_33510 = f__26963__auto__.call(null);
(statearr_33510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_33510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__))
);

return c__26962__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33535){
var state_val_33536 = (state_33535[(1)]);
if((state_val_33536 === (1))){
var inst_33529 = cljs.core.async.timeout.call(null,(2000));
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33535__$1,(2),inst_33529);
} else {
if((state_val_33536 === (2))){
var inst_33531 = (state_33535[(2)]);
var inst_33532 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_33533 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33532);
var state_33535__$1 = (function (){var statearr_33537 = state_33535;
(statearr_33537[(7)] = inst_33531);

return statearr_33537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33535__$1,inst_33533);
} else {
return null;
}
}
});})(c__26962__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26808__auto__,c__26962__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_33541 = [null,null,null,null,null,null,null,null];
(statearr_33541[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__);

(statearr_33541[(1)] = (1));

return statearr_33541;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1 = (function (state_33535){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_33535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e33542){if((e33542 instanceof Object)){
var ex__26812__auto__ = e33542;
var statearr_33543_33545 = state_33535;
(statearr_33543_33545[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33546 = state_33535;
state_33535 = G__33546;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__ = function(state_33535){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1.call(this,state_33535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26964__auto__ = (function (){var statearr_33544 = f__26963__auto__.call(null);
(statearr_33544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_33544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__,figwheel_version,temp__4657__auto__))
);

return c__26962__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33547){
var map__33551 = p__33547;
var map__33551__$1 = ((((!((map__33551 == null)))?((((map__33551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33551):map__33551);
var file = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33551__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33553 = "";
var G__33553__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__33553),cljs.core.str("file "),cljs.core.str(file)].join(''):G__33553);
var G__33553__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__33553__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__33553__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__33553__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__33553__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33554){
var map__33561 = p__33554;
var map__33561__$1 = ((((!((map__33561 == null)))?((((map__33561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33561):map__33561);
var ed = map__33561__$1;
var formatted_exception = cljs.core.get.call(null,map__33561__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33561__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33561__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33563_33567 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33564_33568 = null;
var count__33565_33569 = (0);
var i__33566_33570 = (0);
while(true){
if((i__33566_33570 < count__33565_33569)){
var msg_33571 = cljs.core._nth.call(null,chunk__33564_33568,i__33566_33570);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33571);

var G__33572 = seq__33563_33567;
var G__33573 = chunk__33564_33568;
var G__33574 = count__33565_33569;
var G__33575 = (i__33566_33570 + (1));
seq__33563_33567 = G__33572;
chunk__33564_33568 = G__33573;
count__33565_33569 = G__33574;
i__33566_33570 = G__33575;
continue;
} else {
var temp__4657__auto___33576 = cljs.core.seq.call(null,seq__33563_33567);
if(temp__4657__auto___33576){
var seq__33563_33577__$1 = temp__4657__auto___33576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33563_33577__$1)){
var c__25601__auto___33578 = cljs.core.chunk_first.call(null,seq__33563_33577__$1);
var G__33579 = cljs.core.chunk_rest.call(null,seq__33563_33577__$1);
var G__33580 = c__25601__auto___33578;
var G__33581 = cljs.core.count.call(null,c__25601__auto___33578);
var G__33582 = (0);
seq__33563_33567 = G__33579;
chunk__33564_33568 = G__33580;
count__33565_33569 = G__33581;
i__33566_33570 = G__33582;
continue;
} else {
var msg_33583 = cljs.core.first.call(null,seq__33563_33577__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33583);

var G__33584 = cljs.core.next.call(null,seq__33563_33577__$1);
var G__33585 = null;
var G__33586 = (0);
var G__33587 = (0);
seq__33563_33567 = G__33584;
chunk__33564_33568 = G__33585;
count__33565_33569 = G__33586;
i__33566_33570 = G__33587;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33588){
var map__33591 = p__33588;
var map__33591__$1 = ((((!((map__33591 == null)))?((((map__33591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33591):map__33591);
var w = map__33591__$1;
var message = cljs.core.get.call(null,map__33591__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33603 = cljs.core.seq.call(null,plugins);
var chunk__33604 = null;
var count__33605 = (0);
var i__33606 = (0);
while(true){
if((i__33606 < count__33605)){
var vec__33607 = cljs.core._nth.call(null,chunk__33604,i__33606);
var k = cljs.core.nth.call(null,vec__33607,(0),null);
var plugin = cljs.core.nth.call(null,vec__33607,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33613 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33603,chunk__33604,count__33605,i__33606,pl_33613,vec__33607,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33613.call(null,msg_hist);
});})(seq__33603,chunk__33604,count__33605,i__33606,pl_33613,vec__33607,k,plugin))
);
} else {
}

var G__33614 = seq__33603;
var G__33615 = chunk__33604;
var G__33616 = count__33605;
var G__33617 = (i__33606 + (1));
seq__33603 = G__33614;
chunk__33604 = G__33615;
count__33605 = G__33616;
i__33606 = G__33617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33603);
if(temp__4657__auto__){
var seq__33603__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33603__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__33603__$1);
var G__33618 = cljs.core.chunk_rest.call(null,seq__33603__$1);
var G__33619 = c__25601__auto__;
var G__33620 = cljs.core.count.call(null,c__25601__auto__);
var G__33621 = (0);
seq__33603 = G__33618;
chunk__33604 = G__33619;
count__33605 = G__33620;
i__33606 = G__33621;
continue;
} else {
var vec__33610 = cljs.core.first.call(null,seq__33603__$1);
var k = cljs.core.nth.call(null,vec__33610,(0),null);
var plugin = cljs.core.nth.call(null,vec__33610,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33622 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33603,chunk__33604,count__33605,i__33606,pl_33622,vec__33610,k,plugin,seq__33603__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33622.call(null,msg_hist);
});})(seq__33603,chunk__33604,count__33605,i__33606,pl_33622,vec__33610,k,plugin,seq__33603__$1,temp__4657__auto__))
);
} else {
}

var G__33623 = cljs.core.next.call(null,seq__33603__$1);
var G__33624 = null;
var G__33625 = (0);
var G__33626 = (0);
seq__33603 = G__33623;
chunk__33604 = G__33624;
count__33605 = G__33625;
i__33606 = G__33626;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args33627 = [];
var len__25865__auto___33634 = arguments.length;
var i__25866__auto___33635 = (0);
while(true){
if((i__25866__auto___33635 < len__25865__auto___33634)){
args33627.push((arguments[i__25866__auto___33635]));

var G__33636 = (i__25866__auto___33635 + (1));
i__25866__auto___33635 = G__33636;
continue;
} else {
}
break;
}

var G__33629 = args33627.length;
switch (G__33629) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33627.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33630_33638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33631_33639 = null;
var count__33632_33640 = (0);
var i__33633_33641 = (0);
while(true){
if((i__33633_33641 < count__33632_33640)){
var msg_33642 = cljs.core._nth.call(null,chunk__33631_33639,i__33633_33641);
figwheel.client.socket.handle_incoming_message.call(null,msg_33642);

var G__33643 = seq__33630_33638;
var G__33644 = chunk__33631_33639;
var G__33645 = count__33632_33640;
var G__33646 = (i__33633_33641 + (1));
seq__33630_33638 = G__33643;
chunk__33631_33639 = G__33644;
count__33632_33640 = G__33645;
i__33633_33641 = G__33646;
continue;
} else {
var temp__4657__auto___33647 = cljs.core.seq.call(null,seq__33630_33638);
if(temp__4657__auto___33647){
var seq__33630_33648__$1 = temp__4657__auto___33647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33630_33648__$1)){
var c__25601__auto___33649 = cljs.core.chunk_first.call(null,seq__33630_33648__$1);
var G__33650 = cljs.core.chunk_rest.call(null,seq__33630_33648__$1);
var G__33651 = c__25601__auto___33649;
var G__33652 = cljs.core.count.call(null,c__25601__auto___33649);
var G__33653 = (0);
seq__33630_33638 = G__33650;
chunk__33631_33639 = G__33651;
count__33632_33640 = G__33652;
i__33633_33641 = G__33653;
continue;
} else {
var msg_33654 = cljs.core.first.call(null,seq__33630_33648__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33654);

var G__33655 = cljs.core.next.call(null,seq__33630_33648__$1);
var G__33656 = null;
var G__33657 = (0);
var G__33658 = (0);
seq__33630_33638 = G__33655;
chunk__33631_33639 = G__33656;
count__33632_33640 = G__33657;
i__33633_33641 = G__33658;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25872__auto__ = [];
var len__25865__auto___33663 = arguments.length;
var i__25866__auto___33664 = (0);
while(true){
if((i__25866__auto___33664 < len__25865__auto___33663)){
args__25872__auto__.push((arguments[i__25866__auto___33664]));

var G__33665 = (i__25866__auto___33664 + (1));
i__25866__auto___33664 = G__33665;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33660){
var map__33661 = p__33660;
var map__33661__$1 = ((((!((map__33661 == null)))?((((map__33661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33661):map__33661);
var opts = map__33661__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33659){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33659));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33667){if((e33667 instanceof Error)){
var e = e33667;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33667;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33671){
var map__33672 = p__33671;
var map__33672__$1 = ((((!((map__33672 == null)))?((((map__33672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33672):map__33672);
var msg_name = cljs.core.get.call(null,map__33672__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1485966506376