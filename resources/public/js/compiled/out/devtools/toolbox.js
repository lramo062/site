// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.toolbox');
goog.require('cljs.core');
goog.require('devtools.protocols');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.markup');
/**
 * This is a simple wrapper for logging "busy" objects.
 *   This is especially handy when you happen to be logging javascript objects with many properties.
 *   Standard javascript console renderer tends to print a lot of infomation in the header in some cases and that can make
 *   console output pretty busy. By using envelope you can force your own short header and let the details expand on demand
 *   via disclosure triangle. The header can be styled and you can optionally specify preferred wrapping tag (advanced).
 */
devtools.toolbox.envelope = (function devtools$toolbox$envelope(var_args){
var args30152 = [];
var len__26126__auto___30158 = arguments.length;
var i__26127__auto___30159 = (0);
while(true){
if((i__26127__auto___30159 < len__26126__auto___30158)){
args30152.push((arguments[i__26127__auto___30159]));

var G__30160 = (i__26127__auto___30159 + (1));
i__26127__auto___30159 = G__30160;
continue;
} else {
}
break;
}

var G__30154 = args30152.length;
switch (G__30154) {
case 1:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30152.length)].join('')));

}
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return devtools.toolbox.envelope.call(null,obj,new cljs.core.Keyword(null,"default-envelope-header","default-envelope-header",-90723598));
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2 = (function (obj,header){
return devtools.toolbox.envelope.call(null,obj,header,new cljs.core.Keyword(null,"default-envelope-style","default-envelope-style",-1676750479));
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3 = (function (obj,header,style){
return devtools.toolbox.envelope.call(null,obj,header,style,new cljs.core.Keyword(null,"span","span",1394872991));
});

devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4 = (function (obj,header,style,tag){
if(typeof devtools.toolbox.t_devtools$toolbox30155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devtools.protocols.IFormat}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devtools.toolbox.t_devtools$toolbox30155 = (function (obj,header,style,tag,meta30156){
this.obj = obj;
this.header = header;
this.style = style;
this.tag = tag;
this.meta30156 = meta30156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devtools.toolbox.t_devtools$toolbox30155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30157,meta30156__$1){
var self__ = this;
var _30157__$1 = this;
return (new devtools.toolbox.t_devtools$toolbox30155(self__.obj,self__.header,self__.style,self__.tag,meta30156__$1));
});

devtools.toolbox.t_devtools$toolbox30155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30157){
var self__ = this;
var _30157__$1 = this;
return self__.meta30156;
});

devtools.toolbox.t_devtools$toolbox30155.prototype.devtools$protocols$IFormat$ = true;

devtools.toolbox.t_devtools$toolbox30155.prototype.devtools$protocols$IFormat$_header$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.tag,self__.style], null),((cljs.core.fn_QMARK_.call(null,self__.header))?self__.header.call(null,self__.obj):self__.header)], null));
});

devtools.toolbox.t_devtools$toolbox30155.prototype.devtools$protocols$IFormat$_has_body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

devtools.toolbox.t_devtools$toolbox30155.prototype.devtools$protocols$IFormat$_body$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_body_GT_.call(null,devtools.formatters.markup._LT_standard_body_reference_GT_.call(null,self__.obj)));
});

devtools.toolbox.t_devtools$toolbox30155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta30156","meta30156",-804648139,null)], null);
});

devtools.toolbox.t_devtools$toolbox30155.cljs$lang$type = true;

devtools.toolbox.t_devtools$toolbox30155.cljs$lang$ctorStr = "devtools.toolbox/t_devtools$toolbox30155";

devtools.toolbox.t_devtools$toolbox30155.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"devtools.toolbox/t_devtools$toolbox30155");
});

devtools.toolbox.__GT_t_devtools$toolbox30155 = (function devtools$toolbox$__GT_t_devtools$toolbox30155(obj__$1,header__$1,style__$1,tag__$1,meta30156){
return (new devtools.toolbox.t_devtools$toolbox30155(obj__$1,header__$1,style__$1,tag__$1,meta30156));
});

}

return (new devtools.toolbox.t_devtools$toolbox30155(obj,header,style,tag,cljs.core.PersistentArrayMap.EMPTY));
});

devtools.toolbox.envelope.cljs$lang$maxFixedArity = 4;

/**
 * Forces object to be rendered by cljs-devtools during console logging.
 * 
 *   Unfortunately custom formatters subsystem in DevTools is not applied to primitive values like numbers, strings, null, etc.
 *   This wrapper can be used as a workaround if you really need to force cljs-devtools rendering:
 * 
 *  (.log js/console nil) ; will render 'null'
 *  (.log js/console (force-format nil)) ; will render 'nil' and not 'null'
 * 
 *   See https://github.com/binaryage/cljs-devtools/issues/17
 *   
 */
devtools.toolbox.force_format = (function devtools$toolbox$force_format(obj){
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_GT_.call(null,obj));
});

//# sourceMappingURL=toolbox.js.map?rel=1485966383976