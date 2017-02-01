// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32169){
var map__32194 = p__32169;
var map__32194__$1 = ((((!((map__32194 == null)))?((((map__32194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32194):map__32194);
var m = map__32194__$1;
var n = cljs.core.get.call(null,map__32194__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32194__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32196_32218 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32197_32219 = null;
var count__32198_32220 = (0);
var i__32199_32221 = (0);
while(true){
if((i__32199_32221 < count__32198_32220)){
var f_32222 = cljs.core._nth.call(null,chunk__32197_32219,i__32199_32221);
cljs.core.println.call(null,"  ",f_32222);

var G__32223 = seq__32196_32218;
var G__32224 = chunk__32197_32219;
var G__32225 = count__32198_32220;
var G__32226 = (i__32199_32221 + (1));
seq__32196_32218 = G__32223;
chunk__32197_32219 = G__32224;
count__32198_32220 = G__32225;
i__32199_32221 = G__32226;
continue;
} else {
var temp__4657__auto___32227 = cljs.core.seq.call(null,seq__32196_32218);
if(temp__4657__auto___32227){
var seq__32196_32228__$1 = temp__4657__auto___32227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32196_32228__$1)){
var c__25601__auto___32229 = cljs.core.chunk_first.call(null,seq__32196_32228__$1);
var G__32230 = cljs.core.chunk_rest.call(null,seq__32196_32228__$1);
var G__32231 = c__25601__auto___32229;
var G__32232 = cljs.core.count.call(null,c__25601__auto___32229);
var G__32233 = (0);
seq__32196_32218 = G__32230;
chunk__32197_32219 = G__32231;
count__32198_32220 = G__32232;
i__32199_32221 = G__32233;
continue;
} else {
var f_32234 = cljs.core.first.call(null,seq__32196_32228__$1);
cljs.core.println.call(null,"  ",f_32234);

var G__32235 = cljs.core.next.call(null,seq__32196_32228__$1);
var G__32236 = null;
var G__32237 = (0);
var G__32238 = (0);
seq__32196_32218 = G__32235;
chunk__32197_32219 = G__32236;
count__32198_32220 = G__32237;
i__32199_32221 = G__32238;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32239 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32239);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32239)))?cljs.core.second.call(null,arglists_32239):arglists_32239));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32200_32240 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32201_32241 = null;
var count__32202_32242 = (0);
var i__32203_32243 = (0);
while(true){
if((i__32203_32243 < count__32202_32242)){
var vec__32204_32244 = cljs.core._nth.call(null,chunk__32201_32241,i__32203_32243);
var name_32245 = cljs.core.nth.call(null,vec__32204_32244,(0),null);
var map__32207_32246 = cljs.core.nth.call(null,vec__32204_32244,(1),null);
var map__32207_32247__$1 = ((((!((map__32207_32246 == null)))?((((map__32207_32246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32207_32246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32207_32246):map__32207_32246);
var doc_32248 = cljs.core.get.call(null,map__32207_32247__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32249 = cljs.core.get.call(null,map__32207_32247__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32245);

cljs.core.println.call(null," ",arglists_32249);

if(cljs.core.truth_(doc_32248)){
cljs.core.println.call(null," ",doc_32248);
} else {
}

var G__32250 = seq__32200_32240;
var G__32251 = chunk__32201_32241;
var G__32252 = count__32202_32242;
var G__32253 = (i__32203_32243 + (1));
seq__32200_32240 = G__32250;
chunk__32201_32241 = G__32251;
count__32202_32242 = G__32252;
i__32203_32243 = G__32253;
continue;
} else {
var temp__4657__auto___32254 = cljs.core.seq.call(null,seq__32200_32240);
if(temp__4657__auto___32254){
var seq__32200_32255__$1 = temp__4657__auto___32254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32200_32255__$1)){
var c__25601__auto___32256 = cljs.core.chunk_first.call(null,seq__32200_32255__$1);
var G__32257 = cljs.core.chunk_rest.call(null,seq__32200_32255__$1);
var G__32258 = c__25601__auto___32256;
var G__32259 = cljs.core.count.call(null,c__25601__auto___32256);
var G__32260 = (0);
seq__32200_32240 = G__32257;
chunk__32201_32241 = G__32258;
count__32202_32242 = G__32259;
i__32203_32243 = G__32260;
continue;
} else {
var vec__32209_32261 = cljs.core.first.call(null,seq__32200_32255__$1);
var name_32262 = cljs.core.nth.call(null,vec__32209_32261,(0),null);
var map__32212_32263 = cljs.core.nth.call(null,vec__32209_32261,(1),null);
var map__32212_32264__$1 = ((((!((map__32212_32263 == null)))?((((map__32212_32263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32212_32263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32212_32263):map__32212_32263);
var doc_32265 = cljs.core.get.call(null,map__32212_32264__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32266 = cljs.core.get.call(null,map__32212_32264__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32262);

cljs.core.println.call(null," ",arglists_32266);

if(cljs.core.truth_(doc_32265)){
cljs.core.println.call(null," ",doc_32265);
} else {
}

var G__32267 = cljs.core.next.call(null,seq__32200_32255__$1);
var G__32268 = null;
var G__32269 = (0);
var G__32270 = (0);
seq__32200_32240 = G__32267;
chunk__32201_32241 = G__32268;
count__32202_32242 = G__32269;
i__32203_32243 = G__32270;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32214 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32215 = null;
var count__32216 = (0);
var i__32217 = (0);
while(true){
if((i__32217 < count__32216)){
var role = cljs.core._nth.call(null,chunk__32215,i__32217);
var temp__4657__auto___32271__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32271__$1)){
var spec_32272 = temp__4657__auto___32271__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32272));
} else {
}

var G__32273 = seq__32214;
var G__32274 = chunk__32215;
var G__32275 = count__32216;
var G__32276 = (i__32217 + (1));
seq__32214 = G__32273;
chunk__32215 = G__32274;
count__32216 = G__32275;
i__32217 = G__32276;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32214);
if(temp__4657__auto____$1){
var seq__32214__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32214__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__32214__$1);
var G__32277 = cljs.core.chunk_rest.call(null,seq__32214__$1);
var G__32278 = c__25601__auto__;
var G__32279 = cljs.core.count.call(null,c__25601__auto__);
var G__32280 = (0);
seq__32214 = G__32277;
chunk__32215 = G__32278;
count__32216 = G__32279;
i__32217 = G__32280;
continue;
} else {
var role = cljs.core.first.call(null,seq__32214__$1);
var temp__4657__auto___32281__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32281__$2)){
var spec_32282 = temp__4657__auto___32281__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32282));
} else {
}

var G__32283 = cljs.core.next.call(null,seq__32214__$1);
var G__32284 = null;
var G__32285 = (0);
var G__32286 = (0);
seq__32214 = G__32283;
chunk__32215 = G__32284;
count__32216 = G__32285;
i__32217 = G__32286;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1485966504865