goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__26898){
var map__26899 = p__26898;
var map__26899__$1 = cljs.core.__destructure_map(map__26899);
var msg = map__26899__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26899__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26899__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__26934){
var map__26935 = p__26934;
var map__26935__$1 = cljs.core.__destructure_map(map__26935);
var msg = map__26935__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26935__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26935__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__26937 = info;
var map__26937__$1 = cljs.core.__destructure_map(map__26937);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26937__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26937__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26937__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26940){
var map__26941 = p__26940;
var map__26941__$1 = cljs.core.__destructure_map(map__26941);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26941__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26941__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26943){
var map__26944 = p__26943;
var map__26944__$1 = cljs.core.__destructure_map(map__26944);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26944__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (next){
var seq__26945_27199 = cljs.core.seq(files_to_require);
var chunk__26946_27200 = null;
var count__26947_27201 = (0);
var i__26948_27202 = (0);
while(true){
if((i__26948_27202 < count__26947_27201)){
var src_27203 = chunk__26946_27200.cljs$core$IIndexed$_nth$arity$2(null,i__26948_27202);
shadow.cljs.devtools.client.env.before_load_src(src_27203);

shadow.cljs.devtools.client.node.closure_import(src_27203);


var G__27204 = seq__26945_27199;
var G__27205 = chunk__26946_27200;
var G__27206 = count__26947_27201;
var G__27207 = (i__26948_27202 + (1));
seq__26945_27199 = G__27204;
chunk__26946_27200 = G__27205;
count__26947_27201 = G__27206;
i__26948_27202 = G__27207;
continue;
} else {
var temp__5804__auto___27208 = cljs.core.seq(seq__26945_27199);
if(temp__5804__auto___27208){
var seq__26945_27209__$1 = temp__5804__auto___27208;
if(cljs.core.chunked_seq_QMARK_(seq__26945_27209__$1)){
var c__5525__auto___27210 = cljs.core.chunk_first(seq__26945_27209__$1);
var G__27214 = cljs.core.chunk_rest(seq__26945_27209__$1);
var G__27215 = c__5525__auto___27210;
var G__27216 = cljs.core.count(c__5525__auto___27210);
var G__27217 = (0);
seq__26945_27199 = G__27214;
chunk__26946_27200 = G__27215;
count__26947_27201 = G__27216;
i__26948_27202 = G__27217;
continue;
} else {
var src_27218 = cljs.core.first(seq__26945_27209__$1);
shadow.cljs.devtools.client.env.before_load_src(src_27218);

shadow.cljs.devtools.client.node.closure_import(src_27218);


var G__27220 = cljs.core.next(seq__26945_27209__$1);
var G__27221 = null;
var G__27222 = (0);
var G__27223 = (0);
seq__26945_27199 = G__27220;
chunk__26946_27200 = G__27221;
count__26947_27201 = G__27222;
i__26948_27202 = G__27223;
continue;
}
} else {
}
}
break;
}

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__27011,msg){
var map__27012 = p__27011;
var map__27012__$1 = cljs.core.__destructure_map(map__27012);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27012__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__27013){
var map__27014 = p__27013;
var map__27014__$1 = cljs.core.__destructure_map(map__27014);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27014__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27014__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__27023 = SHADOW_NODE_EVAL(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__27023) : success.call(null,G__27023));
}catch (e27020){var e = e27020;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,msg,success,fail){
var this$__$1 = this;
try{var G__27027 = shadow.cljs.devtools.client.node.node_eval(msg);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__27027) : success.call(null,G__27027));
}catch (e27026){var e = e27026;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__27029,done,error){
var map__27030 = p__27029;
var map__27030__$1 = cljs.core.__destructure_map(map__27030);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__27035_27224 = cljs.core.seq(repl_sources);
var chunk__27037_27225 = null;
var count__27038_27226 = (0);
var i__27039_27227 = (0);
while(true){
if((i__27039_27227 < count__27038_27226)){
var map__27048_27228 = chunk__27037_27225.cljs$core$IIndexed$_nth$arity$2(null,i__27039_27227);
var map__27048_27229__$1 = cljs.core.__destructure_map(map__27048_27228);
var src_27230 = map__27048_27229__$1;
var output_name_27231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27048_27229__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_27231)))){
shadow.cljs.devtools.client.node.closure_import(output_name_27231);


var G__27232 = seq__27035_27224;
var G__27233 = chunk__27037_27225;
var G__27234 = count__27038_27226;
var G__27235 = (i__27039_27227 + (1));
seq__27035_27224 = G__27232;
chunk__27037_27225 = G__27233;
count__27038_27226 = G__27234;
i__27039_27227 = G__27235;
continue;
} else {
var G__27238 = seq__27035_27224;
var G__27239 = chunk__27037_27225;
var G__27240 = count__27038_27226;
var G__27241 = (i__27039_27227 + (1));
seq__27035_27224 = G__27238;
chunk__27037_27225 = G__27239;
count__27038_27226 = G__27240;
i__27039_27227 = G__27241;
continue;
}
} else {
var temp__5804__auto___27242 = cljs.core.seq(seq__27035_27224);
if(temp__5804__auto___27242){
var seq__27035_27243__$1 = temp__5804__auto___27242;
if(cljs.core.chunked_seq_QMARK_(seq__27035_27243__$1)){
var c__5525__auto___27244 = cljs.core.chunk_first(seq__27035_27243__$1);
var G__27245 = cljs.core.chunk_rest(seq__27035_27243__$1);
var G__27246 = c__5525__auto___27244;
var G__27247 = cljs.core.count(c__5525__auto___27244);
var G__27248 = (0);
seq__27035_27224 = G__27245;
chunk__27037_27225 = G__27246;
count__27038_27226 = G__27247;
i__27039_27227 = G__27248;
continue;
} else {
var map__27065_27249 = cljs.core.first(seq__27035_27243__$1);
var map__27065_27250__$1 = cljs.core.__destructure_map(map__27065_27249);
var src_27251 = map__27065_27250__$1;
var output_name_27252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27065_27250__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_27252)))){
shadow.cljs.devtools.client.node.closure_import(output_name_27252);


var G__27253 = cljs.core.next(seq__27035_27243__$1);
var G__27254 = null;
var G__27255 = (0);
var G__27256 = (0);
seq__27035_27224 = G__27253;
chunk__27037_27225 = G__27254;
count__27038_27226 = G__27255;
i__27039_27227 = G__27256;
continue;
} else {
var G__27257 = cljs.core.next(seq__27035_27243__$1);
var G__27258 = null;
var G__27259 = (0);
var G__27260 = (0);
seq__27035_27224 = G__27257;
chunk__27037_27225 = G__27258;
count__27038_27226 = G__27259;
i__27039_27227 = G__27260;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e27033){var e = e27033;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__27076,done,error){
var map__27087 = p__27076;
var map__27087__$1 = cljs.core.__destructure_map(map__27087);
var msg = map__27087__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27087__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__27107_27261 = cljs.core.seq(sources);
var chunk__27108_27262 = null;
var count__27109_27263 = (0);
var i__27110_27264 = (0);
while(true){
if((i__27110_27264 < count__27109_27263)){
var map__27129_27265 = chunk__27108_27262.cljs$core$IIndexed$_nth$arity$2(null,i__27110_27264);
var map__27129_27266__$1 = cljs.core.__destructure_map(map__27129_27265);
var src_27267 = map__27129_27266__$1;
var provides_27268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27129_27266__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_27269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27129_27266__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_27269)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_27268);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_27269);
} else {
}


var G__27272 = seq__27107_27261;
var G__27273 = chunk__27108_27262;
var G__27274 = count__27109_27263;
var G__27275 = (i__27110_27264 + (1));
seq__27107_27261 = G__27272;
chunk__27108_27262 = G__27273;
count__27109_27263 = G__27274;
i__27110_27264 = G__27275;
continue;
} else {
var temp__5804__auto___27276 = cljs.core.seq(seq__27107_27261);
if(temp__5804__auto___27276){
var seq__27107_27277__$1 = temp__5804__auto___27276;
if(cljs.core.chunked_seq_QMARK_(seq__27107_27277__$1)){
var c__5525__auto___27278 = cljs.core.chunk_first(seq__27107_27277__$1);
var G__27279 = cljs.core.chunk_rest(seq__27107_27277__$1);
var G__27280 = c__5525__auto___27278;
var G__27281 = cljs.core.count(c__5525__auto___27278);
var G__27282 = (0);
seq__27107_27261 = G__27279;
chunk__27108_27262 = G__27280;
count__27109_27263 = G__27281;
i__27110_27264 = G__27282;
continue;
} else {
var map__27151_27283 = cljs.core.first(seq__27107_27277__$1);
var map__27151_27284__$1 = cljs.core.__destructure_map(map__27151_27283);
var src_27285 = map__27151_27284__$1;
var provides_27286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27151_27284__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_27287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27151_27284__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_27287)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_27286);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_27287);
} else {
}


var G__27288 = cljs.core.next(seq__27107_27277__$1);
var G__27289 = null;
var G__27290 = (0);
var G__27291 = (0);
seq__27107_27261 = G__27288;
chunk__27108_27262 = G__27289;
count__27109_27263 = G__27290;
i__27110_27264 = G__27291;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e27097){var e = e27097;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__27155){
var map__27156 = p__27155;
var map__27156__$1 = cljs.core.__destructure_map(map__27156);
var env = map__27156__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27156__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__27168){
var map__27169 = p__27168;
var map__27169__$1 = cljs.core.__destructure_map(map__27169);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__27179){
var map__27180 = p__27179;
var map__27180__$1 = cljs.core.__destructure_map(map__27180);
var svc = map__27180__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27180__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
