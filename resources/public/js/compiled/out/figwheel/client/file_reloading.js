// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29817_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29817_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29822 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29823 = null;
var count__29824 = (0);
var i__29825 = (0);
while(true){
if((i__29825 < count__29824)){
var n = cljs.core._nth.call(null,chunk__29823,i__29825);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29826 = seq__29822;
var G__29827 = chunk__29823;
var G__29828 = count__29824;
var G__29829 = (i__29825 + (1));
seq__29822 = G__29826;
chunk__29823 = G__29827;
count__29824 = G__29828;
i__29825 = G__29829;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29822);
if(temp__4657__auto__){
var seq__29822__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29822__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__29822__$1);
var G__29830 = cljs.core.chunk_rest.call(null,seq__29822__$1);
var G__29831 = c__25601__auto__;
var G__29832 = cljs.core.count.call(null,c__25601__auto__);
var G__29833 = (0);
seq__29822 = G__29830;
chunk__29823 = G__29831;
count__29824 = G__29832;
i__29825 = G__29833;
continue;
} else {
var n = cljs.core.first.call(null,seq__29822__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29834 = cljs.core.next.call(null,seq__29822__$1);
var G__29835 = null;
var G__29836 = (0);
var G__29837 = (0);
seq__29822 = G__29834;
chunk__29823 = G__29835;
count__29824 = G__29836;
i__29825 = G__29837;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29888_29899 = cljs.core.seq.call(null,deps);
var chunk__29889_29900 = null;
var count__29890_29901 = (0);
var i__29891_29902 = (0);
while(true){
if((i__29891_29902 < count__29890_29901)){
var dep_29903 = cljs.core._nth.call(null,chunk__29889_29900,i__29891_29902);
topo_sort_helper_STAR_.call(null,dep_29903,(depth + (1)),state);

var G__29904 = seq__29888_29899;
var G__29905 = chunk__29889_29900;
var G__29906 = count__29890_29901;
var G__29907 = (i__29891_29902 + (1));
seq__29888_29899 = G__29904;
chunk__29889_29900 = G__29905;
count__29890_29901 = G__29906;
i__29891_29902 = G__29907;
continue;
} else {
var temp__4657__auto___29908 = cljs.core.seq.call(null,seq__29888_29899);
if(temp__4657__auto___29908){
var seq__29888_29909__$1 = temp__4657__auto___29908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29888_29909__$1)){
var c__25601__auto___29910 = cljs.core.chunk_first.call(null,seq__29888_29909__$1);
var G__29911 = cljs.core.chunk_rest.call(null,seq__29888_29909__$1);
var G__29912 = c__25601__auto___29910;
var G__29913 = cljs.core.count.call(null,c__25601__auto___29910);
var G__29914 = (0);
seq__29888_29899 = G__29911;
chunk__29889_29900 = G__29912;
count__29890_29901 = G__29913;
i__29891_29902 = G__29914;
continue;
} else {
var dep_29915 = cljs.core.first.call(null,seq__29888_29909__$1);
topo_sort_helper_STAR_.call(null,dep_29915,(depth + (1)),state);

var G__29916 = cljs.core.next.call(null,seq__29888_29909__$1);
var G__29917 = null;
var G__29918 = (0);
var G__29919 = (0);
seq__29888_29899 = G__29916;
chunk__29889_29900 = G__29917;
count__29890_29901 = G__29918;
i__29891_29902 = G__29919;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29892){
var vec__29896 = p__29892;
var seq__29897 = cljs.core.seq.call(null,vec__29896);
var first__29898 = cljs.core.first.call(null,seq__29897);
var seq__29897__$1 = cljs.core.next.call(null,seq__29897);
var x = first__29898;
var xs = seq__29897__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29896,seq__29897,first__29898,seq__29897__$1,x,xs,get_deps__$1){
return (function (p1__29838_SHARP_){
return clojure.set.difference.call(null,p1__29838_SHARP_,x);
});})(vec__29896,seq__29897,first__29898,seq__29897__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29932 = cljs.core.seq.call(null,provides);
var chunk__29933 = null;
var count__29934 = (0);
var i__29935 = (0);
while(true){
if((i__29935 < count__29934)){
var prov = cljs.core._nth.call(null,chunk__29933,i__29935);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29936_29944 = cljs.core.seq.call(null,requires);
var chunk__29937_29945 = null;
var count__29938_29946 = (0);
var i__29939_29947 = (0);
while(true){
if((i__29939_29947 < count__29938_29946)){
var req_29948 = cljs.core._nth.call(null,chunk__29937_29945,i__29939_29947);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29948,prov);

var G__29949 = seq__29936_29944;
var G__29950 = chunk__29937_29945;
var G__29951 = count__29938_29946;
var G__29952 = (i__29939_29947 + (1));
seq__29936_29944 = G__29949;
chunk__29937_29945 = G__29950;
count__29938_29946 = G__29951;
i__29939_29947 = G__29952;
continue;
} else {
var temp__4657__auto___29953 = cljs.core.seq.call(null,seq__29936_29944);
if(temp__4657__auto___29953){
var seq__29936_29954__$1 = temp__4657__auto___29953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29936_29954__$1)){
var c__25601__auto___29955 = cljs.core.chunk_first.call(null,seq__29936_29954__$1);
var G__29956 = cljs.core.chunk_rest.call(null,seq__29936_29954__$1);
var G__29957 = c__25601__auto___29955;
var G__29958 = cljs.core.count.call(null,c__25601__auto___29955);
var G__29959 = (0);
seq__29936_29944 = G__29956;
chunk__29937_29945 = G__29957;
count__29938_29946 = G__29958;
i__29939_29947 = G__29959;
continue;
} else {
var req_29960 = cljs.core.first.call(null,seq__29936_29954__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29960,prov);

var G__29961 = cljs.core.next.call(null,seq__29936_29954__$1);
var G__29962 = null;
var G__29963 = (0);
var G__29964 = (0);
seq__29936_29944 = G__29961;
chunk__29937_29945 = G__29962;
count__29938_29946 = G__29963;
i__29939_29947 = G__29964;
continue;
}
} else {
}
}
break;
}

var G__29965 = seq__29932;
var G__29966 = chunk__29933;
var G__29967 = count__29934;
var G__29968 = (i__29935 + (1));
seq__29932 = G__29965;
chunk__29933 = G__29966;
count__29934 = G__29967;
i__29935 = G__29968;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29932);
if(temp__4657__auto__){
var seq__29932__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29932__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__29932__$1);
var G__29969 = cljs.core.chunk_rest.call(null,seq__29932__$1);
var G__29970 = c__25601__auto__;
var G__29971 = cljs.core.count.call(null,c__25601__auto__);
var G__29972 = (0);
seq__29932 = G__29969;
chunk__29933 = G__29970;
count__29934 = G__29971;
i__29935 = G__29972;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29932__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29940_29973 = cljs.core.seq.call(null,requires);
var chunk__29941_29974 = null;
var count__29942_29975 = (0);
var i__29943_29976 = (0);
while(true){
if((i__29943_29976 < count__29942_29975)){
var req_29977 = cljs.core._nth.call(null,chunk__29941_29974,i__29943_29976);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29977,prov);

var G__29978 = seq__29940_29973;
var G__29979 = chunk__29941_29974;
var G__29980 = count__29942_29975;
var G__29981 = (i__29943_29976 + (1));
seq__29940_29973 = G__29978;
chunk__29941_29974 = G__29979;
count__29942_29975 = G__29980;
i__29943_29976 = G__29981;
continue;
} else {
var temp__4657__auto___29982__$1 = cljs.core.seq.call(null,seq__29940_29973);
if(temp__4657__auto___29982__$1){
var seq__29940_29983__$1 = temp__4657__auto___29982__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29940_29983__$1)){
var c__25601__auto___29984 = cljs.core.chunk_first.call(null,seq__29940_29983__$1);
var G__29985 = cljs.core.chunk_rest.call(null,seq__29940_29983__$1);
var G__29986 = c__25601__auto___29984;
var G__29987 = cljs.core.count.call(null,c__25601__auto___29984);
var G__29988 = (0);
seq__29940_29973 = G__29985;
chunk__29941_29974 = G__29986;
count__29942_29975 = G__29987;
i__29943_29976 = G__29988;
continue;
} else {
var req_29989 = cljs.core.first.call(null,seq__29940_29983__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29989,prov);

var G__29990 = cljs.core.next.call(null,seq__29940_29983__$1);
var G__29991 = null;
var G__29992 = (0);
var G__29993 = (0);
seq__29940_29973 = G__29990;
chunk__29941_29974 = G__29991;
count__29942_29975 = G__29992;
i__29943_29976 = G__29993;
continue;
}
} else {
}
}
break;
}

var G__29994 = cljs.core.next.call(null,seq__29932__$1);
var G__29995 = null;
var G__29996 = (0);
var G__29997 = (0);
seq__29932 = G__29994;
chunk__29933 = G__29995;
count__29934 = G__29996;
i__29935 = G__29997;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30002_30006 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30003_30007 = null;
var count__30004_30008 = (0);
var i__30005_30009 = (0);
while(true){
if((i__30005_30009 < count__30004_30008)){
var ns_30010 = cljs.core._nth.call(null,chunk__30003_30007,i__30005_30009);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30010);

var G__30011 = seq__30002_30006;
var G__30012 = chunk__30003_30007;
var G__30013 = count__30004_30008;
var G__30014 = (i__30005_30009 + (1));
seq__30002_30006 = G__30011;
chunk__30003_30007 = G__30012;
count__30004_30008 = G__30013;
i__30005_30009 = G__30014;
continue;
} else {
var temp__4657__auto___30015 = cljs.core.seq.call(null,seq__30002_30006);
if(temp__4657__auto___30015){
var seq__30002_30016__$1 = temp__4657__auto___30015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30002_30016__$1)){
var c__25601__auto___30017 = cljs.core.chunk_first.call(null,seq__30002_30016__$1);
var G__30018 = cljs.core.chunk_rest.call(null,seq__30002_30016__$1);
var G__30019 = c__25601__auto___30017;
var G__30020 = cljs.core.count.call(null,c__25601__auto___30017);
var G__30021 = (0);
seq__30002_30006 = G__30018;
chunk__30003_30007 = G__30019;
count__30004_30008 = G__30020;
i__30005_30009 = G__30021;
continue;
} else {
var ns_30022 = cljs.core.first.call(null,seq__30002_30016__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30022);

var G__30023 = cljs.core.next.call(null,seq__30002_30016__$1);
var G__30024 = null;
var G__30025 = (0);
var G__30026 = (0);
seq__30002_30006 = G__30023;
chunk__30003_30007 = G__30024;
count__30004_30008 = G__30025;
i__30005_30009 = G__30026;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30027__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30028__i = 0, G__30028__a = new Array(arguments.length -  0);
while (G__30028__i < G__30028__a.length) {G__30028__a[G__30028__i] = arguments[G__30028__i + 0]; ++G__30028__i;}
  args = new cljs.core.IndexedSeq(G__30028__a,0);
} 
return G__30027__delegate.call(this,args);};
G__30027.cljs$lang$maxFixedArity = 0;
G__30027.cljs$lang$applyTo = (function (arglist__30029){
var args = cljs.core.seq(arglist__30029);
return G__30027__delegate(args);
});
G__30027.cljs$core$IFn$_invoke$arity$variadic = G__30027__delegate;
return G__30027;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30031 = cljs.core._EQ_;
var expr__30032 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30031.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30032))){
var path_parts = ((function (pred__30031,expr__30032){
return (function (p1__30030_SHARP_){
return clojure.string.split.call(null,p1__30030_SHARP_,/[\/\\]/);
});})(pred__30031,expr__30032))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30031,expr__30032){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30034){if((e30034 instanceof Error)){
var e = e30034;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30034;

}
}})());
});
;})(path_parts,sep,root,pred__30031,expr__30032))
} else {
if(cljs.core.truth_(pred__30031.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30032))){
return ((function (pred__30031,expr__30032){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30031,expr__30032){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30031,expr__30032))
);

return deferred.addErrback(((function (deferred,pred__30031,expr__30032){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30031,expr__30032))
);
});
;})(pred__30031,expr__30032))
} else {
return ((function (pred__30031,expr__30032){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30031,expr__30032))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30035,callback){
var map__30038 = p__30035;
var map__30038__$1 = ((((!((map__30038 == null)))?((((map__30038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038):map__30038);
var file_msg = map__30038__$1;
var request_url = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30038,map__30038__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30038,map__30038__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__){
return (function (state_30062){
var state_val_30063 = (state_30062[(1)]);
if((state_val_30063 === (7))){
var inst_30058 = (state_30062[(2)]);
var state_30062__$1 = state_30062;
var statearr_30064_30084 = state_30062__$1;
(statearr_30064_30084[(2)] = inst_30058);

(statearr_30064_30084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (1))){
var state_30062__$1 = state_30062;
var statearr_30065_30085 = state_30062__$1;
(statearr_30065_30085[(2)] = null);

(statearr_30065_30085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (4))){
var inst_30042 = (state_30062[(7)]);
var inst_30042__$1 = (state_30062[(2)]);
var state_30062__$1 = (function (){var statearr_30066 = state_30062;
(statearr_30066[(7)] = inst_30042__$1);

return statearr_30066;
})();
if(cljs.core.truth_(inst_30042__$1)){
var statearr_30067_30086 = state_30062__$1;
(statearr_30067_30086[(1)] = (5));

} else {
var statearr_30068_30087 = state_30062__$1;
(statearr_30068_30087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (6))){
var state_30062__$1 = state_30062;
var statearr_30069_30088 = state_30062__$1;
(statearr_30069_30088[(2)] = null);

(statearr_30069_30088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (3))){
var inst_30060 = (state_30062[(2)]);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30062__$1,inst_30060);
} else {
if((state_val_30063 === (2))){
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30062__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30063 === (11))){
var inst_30054 = (state_30062[(2)]);
var state_30062__$1 = (function (){var statearr_30070 = state_30062;
(statearr_30070[(8)] = inst_30054);

return statearr_30070;
})();
var statearr_30071_30089 = state_30062__$1;
(statearr_30071_30089[(2)] = null);

(statearr_30071_30089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (9))){
var inst_30046 = (state_30062[(9)]);
var inst_30048 = (state_30062[(10)]);
var inst_30050 = inst_30048.call(null,inst_30046);
var state_30062__$1 = state_30062;
var statearr_30072_30090 = state_30062__$1;
(statearr_30072_30090[(2)] = inst_30050);

(statearr_30072_30090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (5))){
var inst_30042 = (state_30062[(7)]);
var inst_30044 = figwheel.client.file_reloading.blocking_load.call(null,inst_30042);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30062__$1,(8),inst_30044);
} else {
if((state_val_30063 === (10))){
var inst_30046 = (state_30062[(9)]);
var inst_30052 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30046);
var state_30062__$1 = state_30062;
var statearr_30073_30091 = state_30062__$1;
(statearr_30073_30091[(2)] = inst_30052);

(statearr_30073_30091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (8))){
var inst_30048 = (state_30062[(10)]);
var inst_30042 = (state_30062[(7)]);
var inst_30046 = (state_30062[(2)]);
var inst_30047 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30048__$1 = cljs.core.get.call(null,inst_30047,inst_30042);
var state_30062__$1 = (function (){var statearr_30074 = state_30062;
(statearr_30074[(9)] = inst_30046);

(statearr_30074[(10)] = inst_30048__$1);

return statearr_30074;
})();
if(cljs.core.truth_(inst_30048__$1)){
var statearr_30075_30092 = state_30062__$1;
(statearr_30075_30092[(1)] = (9));

} else {
var statearr_30076_30093 = state_30062__$1;
(statearr_30076_30093[(1)] = (10));

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
});})(c__26962__auto__))
;
return ((function (switch__26808__auto__,c__26962__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26809__auto__ = null;
var figwheel$client$file_reloading$state_machine__26809__auto____0 = (function (){
var statearr_30080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30080[(0)] = figwheel$client$file_reloading$state_machine__26809__auto__);

(statearr_30080[(1)] = (1));

return statearr_30080;
});
var figwheel$client$file_reloading$state_machine__26809__auto____1 = (function (state_30062){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30081){if((e30081 instanceof Object)){
var ex__26812__auto__ = e30081;
var statearr_30082_30094 = state_30062;
(statearr_30082_30094[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30095 = state_30062;
state_30062 = G__30095;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26809__auto__ = function(state_30062){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26809__auto____1.call(this,state_30062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26809__auto____0;
figwheel$client$file_reloading$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26809__auto____1;
return figwheel$client$file_reloading$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__))
})();
var state__26964__auto__ = (function (){var statearr_30083 = f__26963__auto__.call(null);
(statearr_30083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_30083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__))
);

return c__26962__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30096,callback){
var map__30099 = p__30096;
var map__30099__$1 = ((((!((map__30099 == null)))?((((map__30099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30099):map__30099);
var file_msg = map__30099__$1;
var namespace = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30099,map__30099__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30099,map__30099__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30101){
var map__30104 = p__30101;
var map__30104__$1 = ((((!((map__30104 == null)))?((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var file_msg = map__30104__$1;
var namespace = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30106,callback){
var map__30109 = p__30106;
var map__30109__$1 = ((((!((map__30109 == null)))?((((map__30109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30109):map__30109);
var file_msg = map__30109__$1;
var request_url = cljs.core.get.call(null,map__30109__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26962__auto___30213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto___30213,out){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto___30213,out){
return (function (state_30195){
var state_val_30196 = (state_30195[(1)]);
if((state_val_30196 === (1))){
var inst_30169 = cljs.core.seq.call(null,files);
var inst_30170 = cljs.core.first.call(null,inst_30169);
var inst_30171 = cljs.core.next.call(null,inst_30169);
var inst_30172 = files;
var state_30195__$1 = (function (){var statearr_30197 = state_30195;
(statearr_30197[(7)] = inst_30170);

(statearr_30197[(8)] = inst_30172);

(statearr_30197[(9)] = inst_30171);

return statearr_30197;
})();
var statearr_30198_30214 = state_30195__$1;
(statearr_30198_30214[(2)] = null);

(statearr_30198_30214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (2))){
var inst_30172 = (state_30195[(8)]);
var inst_30178 = (state_30195[(10)]);
var inst_30177 = cljs.core.seq.call(null,inst_30172);
var inst_30178__$1 = cljs.core.first.call(null,inst_30177);
var inst_30179 = cljs.core.next.call(null,inst_30177);
var inst_30180 = (inst_30178__$1 == null);
var inst_30181 = cljs.core.not.call(null,inst_30180);
var state_30195__$1 = (function (){var statearr_30199 = state_30195;
(statearr_30199[(10)] = inst_30178__$1);

(statearr_30199[(11)] = inst_30179);

return statearr_30199;
})();
if(inst_30181){
var statearr_30200_30215 = state_30195__$1;
(statearr_30200_30215[(1)] = (4));

} else {
var statearr_30201_30216 = state_30195__$1;
(statearr_30201_30216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (3))){
var inst_30193 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30195__$1,inst_30193);
} else {
if((state_val_30196 === (4))){
var inst_30178 = (state_30195[(10)]);
var inst_30183 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30178);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30195__$1,(7),inst_30183);
} else {
if((state_val_30196 === (5))){
var inst_30189 = cljs.core.async.close_BANG_.call(null,out);
var state_30195__$1 = state_30195;
var statearr_30202_30217 = state_30195__$1;
(statearr_30202_30217[(2)] = inst_30189);

(statearr_30202_30217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (6))){
var inst_30191 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30203_30218 = state_30195__$1;
(statearr_30203_30218[(2)] = inst_30191);

(statearr_30203_30218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (7))){
var inst_30179 = (state_30195[(11)]);
var inst_30185 = (state_30195[(2)]);
var inst_30186 = cljs.core.async.put_BANG_.call(null,out,inst_30185);
var inst_30172 = inst_30179;
var state_30195__$1 = (function (){var statearr_30204 = state_30195;
(statearr_30204[(12)] = inst_30186);

(statearr_30204[(8)] = inst_30172);

return statearr_30204;
})();
var statearr_30205_30219 = state_30195__$1;
(statearr_30205_30219[(2)] = null);

(statearr_30205_30219[(1)] = (2));


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
});})(c__26962__auto___30213,out))
;
return ((function (switch__26808__auto__,c__26962__auto___30213,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____0 = (function (){
var statearr_30209 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30209[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__);

(statearr_30209[(1)] = (1));

return statearr_30209;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____1 = (function (state_30195){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30210){if((e30210 instanceof Object)){
var ex__26812__auto__ = e30210;
var statearr_30211_30220 = state_30195;
(statearr_30211_30220[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30221 = state_30195;
state_30195 = G__30221;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__ = function(state_30195){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____1.call(this,state_30195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto___30213,out))
})();
var state__26964__auto__ = (function (){var statearr_30212 = f__26963__auto__.call(null);
(statearr_30212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto___30213);

return statearr_30212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto___30213,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30222,opts){
var map__30226 = p__30222;
var map__30226__$1 = ((((!((map__30226 == null)))?((((map__30226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30226):map__30226);
var eval_body__$1 = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30228){var e = e30228;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30229_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30229_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30238){
var vec__30239 = p__30238;
var k = cljs.core.nth.call(null,vec__30239,(0),null);
var v = cljs.core.nth.call(null,vec__30239,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30242){
var vec__30243 = p__30242;
var k = cljs.core.nth.call(null,vec__30243,(0),null);
var v = cljs.core.nth.call(null,vec__30243,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30249,p__30250){
var map__30497 = p__30249;
var map__30497__$1 = ((((!((map__30497 == null)))?((((map__30497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30497):map__30497);
var opts = map__30497__$1;
var before_jsload = cljs.core.get.call(null,map__30497__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30497__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30497__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30498 = p__30250;
var map__30498__$1 = ((((!((map__30498 == null)))?((((map__30498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30498):map__30498);
var msg = map__30498__$1;
var files = cljs.core.get.call(null,map__30498__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30498__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30498__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26962__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26963__auto__ = (function (){var switch__26808__auto__ = ((function (c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30651){
var state_val_30652 = (state_30651[(1)]);
if((state_val_30652 === (7))){
var inst_30512 = (state_30651[(7)]);
var inst_30514 = (state_30651[(8)]);
var inst_30515 = (state_30651[(9)]);
var inst_30513 = (state_30651[(10)]);
var inst_30520 = cljs.core._nth.call(null,inst_30513,inst_30515);
var inst_30521 = figwheel.client.file_reloading.eval_body.call(null,inst_30520,opts);
var inst_30522 = (inst_30515 + (1));
var tmp30653 = inst_30512;
var tmp30654 = inst_30514;
var tmp30655 = inst_30513;
var inst_30512__$1 = tmp30653;
var inst_30513__$1 = tmp30655;
var inst_30514__$1 = tmp30654;
var inst_30515__$1 = inst_30522;
var state_30651__$1 = (function (){var statearr_30656 = state_30651;
(statearr_30656[(7)] = inst_30512__$1);

(statearr_30656[(8)] = inst_30514__$1);

(statearr_30656[(11)] = inst_30521);

(statearr_30656[(9)] = inst_30515__$1);

(statearr_30656[(10)] = inst_30513__$1);

return statearr_30656;
})();
var statearr_30657_30743 = state_30651__$1;
(statearr_30657_30743[(2)] = null);

(statearr_30657_30743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (20))){
var inst_30555 = (state_30651[(12)]);
var inst_30563 = figwheel.client.file_reloading.sort_files.call(null,inst_30555);
var state_30651__$1 = state_30651;
var statearr_30658_30744 = state_30651__$1;
(statearr_30658_30744[(2)] = inst_30563);

(statearr_30658_30744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (27))){
var state_30651__$1 = state_30651;
var statearr_30659_30745 = state_30651__$1;
(statearr_30659_30745[(2)] = null);

(statearr_30659_30745[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (1))){
var inst_30504 = (state_30651[(13)]);
var inst_30501 = before_jsload.call(null,files);
var inst_30502 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30503 = (function (){return ((function (inst_30504,inst_30501,inst_30502,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30246_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30246_SHARP_);
});
;})(inst_30504,inst_30501,inst_30502,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30504__$1 = cljs.core.filter.call(null,inst_30503,files);
var inst_30505 = cljs.core.not_empty.call(null,inst_30504__$1);
var state_30651__$1 = (function (){var statearr_30660 = state_30651;
(statearr_30660[(13)] = inst_30504__$1);

(statearr_30660[(14)] = inst_30502);

(statearr_30660[(15)] = inst_30501);

return statearr_30660;
})();
if(cljs.core.truth_(inst_30505)){
var statearr_30661_30746 = state_30651__$1;
(statearr_30661_30746[(1)] = (2));

} else {
var statearr_30662_30747 = state_30651__$1;
(statearr_30662_30747[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (24))){
var state_30651__$1 = state_30651;
var statearr_30663_30748 = state_30651__$1;
(statearr_30663_30748[(2)] = null);

(statearr_30663_30748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (39))){
var inst_30605 = (state_30651[(16)]);
var state_30651__$1 = state_30651;
var statearr_30664_30749 = state_30651__$1;
(statearr_30664_30749[(2)] = inst_30605);

(statearr_30664_30749[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (46))){
var inst_30646 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30665_30750 = state_30651__$1;
(statearr_30665_30750[(2)] = inst_30646);

(statearr_30665_30750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (4))){
var inst_30549 = (state_30651[(2)]);
var inst_30550 = cljs.core.List.EMPTY;
var inst_30551 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30550);
var inst_30552 = (function (){return ((function (inst_30549,inst_30550,inst_30551,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30247_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30247_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30247_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_30549,inst_30550,inst_30551,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30553 = cljs.core.filter.call(null,inst_30552,files);
var inst_30554 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30555 = cljs.core.concat.call(null,inst_30553,inst_30554);
var state_30651__$1 = (function (){var statearr_30666 = state_30651;
(statearr_30666[(17)] = inst_30551);

(statearr_30666[(12)] = inst_30555);

(statearr_30666[(18)] = inst_30549);

return statearr_30666;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30667_30751 = state_30651__$1;
(statearr_30667_30751[(1)] = (16));

} else {
var statearr_30668_30752 = state_30651__$1;
(statearr_30668_30752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (15))){
var inst_30539 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30669_30753 = state_30651__$1;
(statearr_30669_30753[(2)] = inst_30539);

(statearr_30669_30753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (21))){
var inst_30565 = (state_30651[(19)]);
var inst_30565__$1 = (state_30651[(2)]);
var inst_30566 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30565__$1);
var state_30651__$1 = (function (){var statearr_30670 = state_30651;
(statearr_30670[(19)] = inst_30565__$1);

return statearr_30670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30651__$1,(22),inst_30566);
} else {
if((state_val_30652 === (31))){
var inst_30649 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30651__$1,inst_30649);
} else {
if((state_val_30652 === (32))){
var inst_30605 = (state_30651[(16)]);
var inst_30610 = inst_30605.cljs$lang$protocol_mask$partition0$;
var inst_30611 = (inst_30610 & (64));
var inst_30612 = inst_30605.cljs$core$ISeq$;
var inst_30613 = (inst_30611) || (inst_30612);
var state_30651__$1 = state_30651;
if(cljs.core.truth_(inst_30613)){
var statearr_30671_30754 = state_30651__$1;
(statearr_30671_30754[(1)] = (35));

} else {
var statearr_30672_30755 = state_30651__$1;
(statearr_30672_30755[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (40))){
var inst_30626 = (state_30651[(20)]);
var inst_30625 = (state_30651[(2)]);
var inst_30626__$1 = cljs.core.get.call(null,inst_30625,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30627 = cljs.core.get.call(null,inst_30625,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30628 = cljs.core.not_empty.call(null,inst_30626__$1);
var state_30651__$1 = (function (){var statearr_30673 = state_30651;
(statearr_30673[(20)] = inst_30626__$1);

(statearr_30673[(21)] = inst_30627);

return statearr_30673;
})();
if(cljs.core.truth_(inst_30628)){
var statearr_30674_30756 = state_30651__$1;
(statearr_30674_30756[(1)] = (41));

} else {
var statearr_30675_30757 = state_30651__$1;
(statearr_30675_30757[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (33))){
var state_30651__$1 = state_30651;
var statearr_30676_30758 = state_30651__$1;
(statearr_30676_30758[(2)] = false);

(statearr_30676_30758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (13))){
var inst_30525 = (state_30651[(22)]);
var inst_30529 = cljs.core.chunk_first.call(null,inst_30525);
var inst_30530 = cljs.core.chunk_rest.call(null,inst_30525);
var inst_30531 = cljs.core.count.call(null,inst_30529);
var inst_30512 = inst_30530;
var inst_30513 = inst_30529;
var inst_30514 = inst_30531;
var inst_30515 = (0);
var state_30651__$1 = (function (){var statearr_30677 = state_30651;
(statearr_30677[(7)] = inst_30512);

(statearr_30677[(8)] = inst_30514);

(statearr_30677[(9)] = inst_30515);

(statearr_30677[(10)] = inst_30513);

return statearr_30677;
})();
var statearr_30678_30759 = state_30651__$1;
(statearr_30678_30759[(2)] = null);

(statearr_30678_30759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (22))){
var inst_30565 = (state_30651[(19)]);
var inst_30569 = (state_30651[(23)]);
var inst_30573 = (state_30651[(24)]);
var inst_30568 = (state_30651[(25)]);
var inst_30568__$1 = (state_30651[(2)]);
var inst_30569__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30568__$1);
var inst_30570 = (function (){var all_files = inst_30565;
var res_SINGLEQUOTE_ = inst_30568__$1;
var res = inst_30569__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30565,inst_30569,inst_30573,inst_30568,inst_30568__$1,inst_30569__$1,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30248_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30248_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30565,inst_30569,inst_30573,inst_30568,inst_30568__$1,inst_30569__$1,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30571 = cljs.core.filter.call(null,inst_30570,inst_30568__$1);
var inst_30572 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30573__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30572);
var inst_30574 = cljs.core.not_empty.call(null,inst_30573__$1);
var state_30651__$1 = (function (){var statearr_30679 = state_30651;
(statearr_30679[(23)] = inst_30569__$1);

(statearr_30679[(24)] = inst_30573__$1);

(statearr_30679[(26)] = inst_30571);

(statearr_30679[(25)] = inst_30568__$1);

return statearr_30679;
})();
if(cljs.core.truth_(inst_30574)){
var statearr_30680_30760 = state_30651__$1;
(statearr_30680_30760[(1)] = (23));

} else {
var statearr_30681_30761 = state_30651__$1;
(statearr_30681_30761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (36))){
var state_30651__$1 = state_30651;
var statearr_30682_30762 = state_30651__$1;
(statearr_30682_30762[(2)] = false);

(statearr_30682_30762[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (41))){
var inst_30626 = (state_30651[(20)]);
var inst_30630 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30631 = cljs.core.map.call(null,inst_30630,inst_30626);
var inst_30632 = cljs.core.pr_str.call(null,inst_30631);
var inst_30633 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30632)].join('');
var inst_30634 = figwheel.client.utils.log.call(null,inst_30633);
var state_30651__$1 = state_30651;
var statearr_30683_30763 = state_30651__$1;
(statearr_30683_30763[(2)] = inst_30634);

(statearr_30683_30763[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (43))){
var inst_30627 = (state_30651[(21)]);
var inst_30637 = (state_30651[(2)]);
var inst_30638 = cljs.core.not_empty.call(null,inst_30627);
var state_30651__$1 = (function (){var statearr_30684 = state_30651;
(statearr_30684[(27)] = inst_30637);

return statearr_30684;
})();
if(cljs.core.truth_(inst_30638)){
var statearr_30685_30764 = state_30651__$1;
(statearr_30685_30764[(1)] = (44));

} else {
var statearr_30686_30765 = state_30651__$1;
(statearr_30686_30765[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (29))){
var inst_30605 = (state_30651[(16)]);
var inst_30565 = (state_30651[(19)]);
var inst_30569 = (state_30651[(23)]);
var inst_30573 = (state_30651[(24)]);
var inst_30571 = (state_30651[(26)]);
var inst_30568 = (state_30651[(25)]);
var inst_30601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30604 = (function (){var all_files = inst_30565;
var res_SINGLEQUOTE_ = inst_30568;
var res = inst_30569;
var files_not_loaded = inst_30571;
var dependencies_that_loaded = inst_30573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30605,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30601,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30603){
var map__30687 = p__30603;
var map__30687__$1 = ((((!((map__30687 == null)))?((((map__30687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30687):map__30687);
var namespace = cljs.core.get.call(null,map__30687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30605,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30601,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30605__$1 = cljs.core.group_by.call(null,inst_30604,inst_30571);
var inst_30607 = (inst_30605__$1 == null);
var inst_30608 = cljs.core.not.call(null,inst_30607);
var state_30651__$1 = (function (){var statearr_30689 = state_30651;
(statearr_30689[(16)] = inst_30605__$1);

(statearr_30689[(28)] = inst_30601);

return statearr_30689;
})();
if(inst_30608){
var statearr_30690_30766 = state_30651__$1;
(statearr_30690_30766[(1)] = (32));

} else {
var statearr_30691_30767 = state_30651__$1;
(statearr_30691_30767[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (44))){
var inst_30627 = (state_30651[(21)]);
var inst_30640 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30627);
var inst_30641 = cljs.core.pr_str.call(null,inst_30640);
var inst_30642 = [cljs.core.str("not required: "),cljs.core.str(inst_30641)].join('');
var inst_30643 = figwheel.client.utils.log.call(null,inst_30642);
var state_30651__$1 = state_30651;
var statearr_30692_30768 = state_30651__$1;
(statearr_30692_30768[(2)] = inst_30643);

(statearr_30692_30768[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (6))){
var inst_30546 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30693_30769 = state_30651__$1;
(statearr_30693_30769[(2)] = inst_30546);

(statearr_30693_30769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (28))){
var inst_30571 = (state_30651[(26)]);
var inst_30598 = (state_30651[(2)]);
var inst_30599 = cljs.core.not_empty.call(null,inst_30571);
var state_30651__$1 = (function (){var statearr_30694 = state_30651;
(statearr_30694[(29)] = inst_30598);

return statearr_30694;
})();
if(cljs.core.truth_(inst_30599)){
var statearr_30695_30770 = state_30651__$1;
(statearr_30695_30770[(1)] = (29));

} else {
var statearr_30696_30771 = state_30651__$1;
(statearr_30696_30771[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (25))){
var inst_30569 = (state_30651[(23)]);
var inst_30585 = (state_30651[(2)]);
var inst_30586 = cljs.core.not_empty.call(null,inst_30569);
var state_30651__$1 = (function (){var statearr_30697 = state_30651;
(statearr_30697[(30)] = inst_30585);

return statearr_30697;
})();
if(cljs.core.truth_(inst_30586)){
var statearr_30698_30772 = state_30651__$1;
(statearr_30698_30772[(1)] = (26));

} else {
var statearr_30699_30773 = state_30651__$1;
(statearr_30699_30773[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (34))){
var inst_30620 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
if(cljs.core.truth_(inst_30620)){
var statearr_30700_30774 = state_30651__$1;
(statearr_30700_30774[(1)] = (38));

} else {
var statearr_30701_30775 = state_30651__$1;
(statearr_30701_30775[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (17))){
var state_30651__$1 = state_30651;
var statearr_30702_30776 = state_30651__$1;
(statearr_30702_30776[(2)] = recompile_dependents);

(statearr_30702_30776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (3))){
var state_30651__$1 = state_30651;
var statearr_30703_30777 = state_30651__$1;
(statearr_30703_30777[(2)] = null);

(statearr_30703_30777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (12))){
var inst_30542 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30704_30778 = state_30651__$1;
(statearr_30704_30778[(2)] = inst_30542);

(statearr_30704_30778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (2))){
var inst_30504 = (state_30651[(13)]);
var inst_30511 = cljs.core.seq.call(null,inst_30504);
var inst_30512 = inst_30511;
var inst_30513 = null;
var inst_30514 = (0);
var inst_30515 = (0);
var state_30651__$1 = (function (){var statearr_30705 = state_30651;
(statearr_30705[(7)] = inst_30512);

(statearr_30705[(8)] = inst_30514);

(statearr_30705[(9)] = inst_30515);

(statearr_30705[(10)] = inst_30513);

return statearr_30705;
})();
var statearr_30706_30779 = state_30651__$1;
(statearr_30706_30779[(2)] = null);

(statearr_30706_30779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (23))){
var inst_30565 = (state_30651[(19)]);
var inst_30569 = (state_30651[(23)]);
var inst_30573 = (state_30651[(24)]);
var inst_30571 = (state_30651[(26)]);
var inst_30568 = (state_30651[(25)]);
var inst_30576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30578 = (function (){var all_files = inst_30565;
var res_SINGLEQUOTE_ = inst_30568;
var res = inst_30569;
var files_not_loaded = inst_30571;
var dependencies_that_loaded = inst_30573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30576,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30577){
var map__30707 = p__30577;
var map__30707__$1 = ((((!((map__30707 == null)))?((((map__30707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30707):map__30707);
var request_url = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30576,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30579 = cljs.core.reverse.call(null,inst_30573);
var inst_30580 = cljs.core.map.call(null,inst_30578,inst_30579);
var inst_30581 = cljs.core.pr_str.call(null,inst_30580);
var inst_30582 = figwheel.client.utils.log.call(null,inst_30581);
var state_30651__$1 = (function (){var statearr_30709 = state_30651;
(statearr_30709[(31)] = inst_30576);

return statearr_30709;
})();
var statearr_30710_30780 = state_30651__$1;
(statearr_30710_30780[(2)] = inst_30582);

(statearr_30710_30780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (35))){
var state_30651__$1 = state_30651;
var statearr_30711_30781 = state_30651__$1;
(statearr_30711_30781[(2)] = true);

(statearr_30711_30781[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (19))){
var inst_30555 = (state_30651[(12)]);
var inst_30561 = figwheel.client.file_reloading.expand_files.call(null,inst_30555);
var state_30651__$1 = state_30651;
var statearr_30712_30782 = state_30651__$1;
(statearr_30712_30782[(2)] = inst_30561);

(statearr_30712_30782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (11))){
var state_30651__$1 = state_30651;
var statearr_30713_30783 = state_30651__$1;
(statearr_30713_30783[(2)] = null);

(statearr_30713_30783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (9))){
var inst_30544 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30714_30784 = state_30651__$1;
(statearr_30714_30784[(2)] = inst_30544);

(statearr_30714_30784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (5))){
var inst_30514 = (state_30651[(8)]);
var inst_30515 = (state_30651[(9)]);
var inst_30517 = (inst_30515 < inst_30514);
var inst_30518 = inst_30517;
var state_30651__$1 = state_30651;
if(cljs.core.truth_(inst_30518)){
var statearr_30715_30785 = state_30651__$1;
(statearr_30715_30785[(1)] = (7));

} else {
var statearr_30716_30786 = state_30651__$1;
(statearr_30716_30786[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (14))){
var inst_30525 = (state_30651[(22)]);
var inst_30534 = cljs.core.first.call(null,inst_30525);
var inst_30535 = figwheel.client.file_reloading.eval_body.call(null,inst_30534,opts);
var inst_30536 = cljs.core.next.call(null,inst_30525);
var inst_30512 = inst_30536;
var inst_30513 = null;
var inst_30514 = (0);
var inst_30515 = (0);
var state_30651__$1 = (function (){var statearr_30717 = state_30651;
(statearr_30717[(32)] = inst_30535);

(statearr_30717[(7)] = inst_30512);

(statearr_30717[(8)] = inst_30514);

(statearr_30717[(9)] = inst_30515);

(statearr_30717[(10)] = inst_30513);

return statearr_30717;
})();
var statearr_30718_30787 = state_30651__$1;
(statearr_30718_30787[(2)] = null);

(statearr_30718_30787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (45))){
var state_30651__$1 = state_30651;
var statearr_30719_30788 = state_30651__$1;
(statearr_30719_30788[(2)] = null);

(statearr_30719_30788[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (26))){
var inst_30565 = (state_30651[(19)]);
var inst_30569 = (state_30651[(23)]);
var inst_30573 = (state_30651[(24)]);
var inst_30571 = (state_30651[(26)]);
var inst_30568 = (state_30651[(25)]);
var inst_30588 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30590 = (function (){var all_files = inst_30565;
var res_SINGLEQUOTE_ = inst_30568;
var res = inst_30569;
var files_not_loaded = inst_30571;
var dependencies_that_loaded = inst_30573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30588,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30589){
var map__30720 = p__30589;
var map__30720__$1 = ((((!((map__30720 == null)))?((((map__30720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30720):map__30720);
var namespace = cljs.core.get.call(null,map__30720__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30588,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30591 = cljs.core.map.call(null,inst_30590,inst_30569);
var inst_30592 = cljs.core.pr_str.call(null,inst_30591);
var inst_30593 = figwheel.client.utils.log.call(null,inst_30592);
var inst_30594 = (function (){var all_files = inst_30565;
var res_SINGLEQUOTE_ = inst_30568;
var res = inst_30569;
var files_not_loaded = inst_30571;
var dependencies_that_loaded = inst_30573;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30588,inst_30590,inst_30591,inst_30592,inst_30593,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30565,inst_30569,inst_30573,inst_30571,inst_30568,inst_30588,inst_30590,inst_30591,inst_30592,inst_30593,state_val_30652,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30595 = setTimeout(inst_30594,(10));
var state_30651__$1 = (function (){var statearr_30722 = state_30651;
(statearr_30722[(33)] = inst_30588);

(statearr_30722[(34)] = inst_30593);

return statearr_30722;
})();
var statearr_30723_30789 = state_30651__$1;
(statearr_30723_30789[(2)] = inst_30595);

(statearr_30723_30789[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (16))){
var state_30651__$1 = state_30651;
var statearr_30724_30790 = state_30651__$1;
(statearr_30724_30790[(2)] = reload_dependents);

(statearr_30724_30790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (38))){
var inst_30605 = (state_30651[(16)]);
var inst_30622 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30605);
var state_30651__$1 = state_30651;
var statearr_30725_30791 = state_30651__$1;
(statearr_30725_30791[(2)] = inst_30622);

(statearr_30725_30791[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (30))){
var state_30651__$1 = state_30651;
var statearr_30726_30792 = state_30651__$1;
(statearr_30726_30792[(2)] = null);

(statearr_30726_30792[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (10))){
var inst_30525 = (state_30651[(22)]);
var inst_30527 = cljs.core.chunked_seq_QMARK_.call(null,inst_30525);
var state_30651__$1 = state_30651;
if(inst_30527){
var statearr_30727_30793 = state_30651__$1;
(statearr_30727_30793[(1)] = (13));

} else {
var statearr_30728_30794 = state_30651__$1;
(statearr_30728_30794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (18))){
var inst_30559 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
if(cljs.core.truth_(inst_30559)){
var statearr_30729_30795 = state_30651__$1;
(statearr_30729_30795[(1)] = (19));

} else {
var statearr_30730_30796 = state_30651__$1;
(statearr_30730_30796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (42))){
var state_30651__$1 = state_30651;
var statearr_30731_30797 = state_30651__$1;
(statearr_30731_30797[(2)] = null);

(statearr_30731_30797[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (37))){
var inst_30617 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30732_30798 = state_30651__$1;
(statearr_30732_30798[(2)] = inst_30617);

(statearr_30732_30798[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (8))){
var inst_30512 = (state_30651[(7)]);
var inst_30525 = (state_30651[(22)]);
var inst_30525__$1 = cljs.core.seq.call(null,inst_30512);
var state_30651__$1 = (function (){var statearr_30733 = state_30651;
(statearr_30733[(22)] = inst_30525__$1);

return statearr_30733;
})();
if(inst_30525__$1){
var statearr_30734_30799 = state_30651__$1;
(statearr_30734_30799[(1)] = (10));

} else {
var statearr_30735_30800 = state_30651__$1;
(statearr_30735_30800[(1)] = (11));

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
}
});})(c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26808__auto__,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____0 = (function (){
var statearr_30739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30739[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__);

(statearr_30739[(1)] = (1));

return statearr_30739;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____1 = (function (state_30651){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30740){if((e30740 instanceof Object)){
var ex__26812__auto__ = e30740;
var statearr_30741_30801 = state_30651;
(statearr_30741_30801[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30802 = state_30651;
state_30651 = G__30802;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__ = function(state_30651){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____1.call(this,state_30651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26964__auto__ = (function (){var statearr_30742 = f__26963__auto__.call(null);
(statearr_30742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26962__auto__);

return statearr_30742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26964__auto__);
});})(c__26962__auto__,map__30497,map__30497__$1,opts,before_jsload,on_jsload,reload_dependents,map__30498,map__30498__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26962__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30805,link){
var map__30808 = p__30805;
var map__30808__$1 = ((((!((map__30808 == null)))?((((map__30808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30808):map__30808);
var file = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30808,map__30808__$1,file){
return (function (p1__30803_SHARP_,p2__30804_SHARP_){
if(cljs.core._EQ_.call(null,p1__30803_SHARP_,p2__30804_SHARP_)){
return p1__30803_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30808,map__30808__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30814){
var map__30815 = p__30814;
var map__30815__$1 = ((((!((map__30815 == null)))?((((map__30815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30815):map__30815);
var match_length = cljs.core.get.call(null,map__30815__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30815__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30810_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30810_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30817 = [];
var len__25865__auto___30820 = arguments.length;
var i__25866__auto___30821 = (0);
while(true){
if((i__25866__auto___30821 < len__25865__auto___30820)){
args30817.push((arguments[i__25866__auto___30821]));

var G__30822 = (i__25866__auto___30821 + (1));
i__25866__auto___30821 = G__30822;
continue;
} else {
}
break;
}

var G__30819 = args30817.length;
switch (G__30819) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30817.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30824_SHARP_,p2__30825_SHARP_){
return cljs.core.assoc.call(null,p1__30824_SHARP_,cljs.core.get.call(null,p2__30825_SHARP_,key),p2__30825_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30826){
var map__30829 = p__30826;
var map__30829__$1 = ((((!((map__30829 == null)))?((((map__30829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30829):map__30829);
var f_data = map__30829__$1;
var file = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30831,p__30832){
var map__30841 = p__30831;
var map__30841__$1 = ((((!((map__30841 == null)))?((((map__30841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30841):map__30841);
var opts = map__30841__$1;
var on_cssload = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30842 = p__30832;
var map__30842__$1 = ((((!((map__30842 == null)))?((((map__30842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30842):map__30842);
var files_msg = map__30842__$1;
var files = cljs.core.get.call(null,map__30842__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30845_30849 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30846_30850 = null;
var count__30847_30851 = (0);
var i__30848_30852 = (0);
while(true){
if((i__30848_30852 < count__30847_30851)){
var f_30853 = cljs.core._nth.call(null,chunk__30846_30850,i__30848_30852);
figwheel.client.file_reloading.reload_css_file.call(null,f_30853);

var G__30854 = seq__30845_30849;
var G__30855 = chunk__30846_30850;
var G__30856 = count__30847_30851;
var G__30857 = (i__30848_30852 + (1));
seq__30845_30849 = G__30854;
chunk__30846_30850 = G__30855;
count__30847_30851 = G__30856;
i__30848_30852 = G__30857;
continue;
} else {
var temp__4657__auto___30858 = cljs.core.seq.call(null,seq__30845_30849);
if(temp__4657__auto___30858){
var seq__30845_30859__$1 = temp__4657__auto___30858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30845_30859__$1)){
var c__25601__auto___30860 = cljs.core.chunk_first.call(null,seq__30845_30859__$1);
var G__30861 = cljs.core.chunk_rest.call(null,seq__30845_30859__$1);
var G__30862 = c__25601__auto___30860;
var G__30863 = cljs.core.count.call(null,c__25601__auto___30860);
var G__30864 = (0);
seq__30845_30849 = G__30861;
chunk__30846_30850 = G__30862;
count__30847_30851 = G__30863;
i__30848_30852 = G__30864;
continue;
} else {
var f_30865 = cljs.core.first.call(null,seq__30845_30859__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30865);

var G__30866 = cljs.core.next.call(null,seq__30845_30859__$1);
var G__30867 = null;
var G__30868 = (0);
var G__30869 = (0);
seq__30845_30849 = G__30866;
chunk__30846_30850 = G__30867;
count__30847_30851 = G__30868;
i__30848_30852 = G__30869;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30841,map__30841__$1,opts,on_cssload,map__30842,map__30842__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30841,map__30841__$1,opts,on_cssload,map__30842,map__30842__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1485966502539