goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__33411){
var map__33424 = p__33411;
var map__33424__$1 = cljs.core.__destructure_map(map__33424);
var msg = map__33424__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33424__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33424__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__33426){
var map__33427 = p__33426;
var map__33427__$1 = cljs.core.__destructure_map(map__33427);
var msg = map__33427__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__33428 = info;
var map__33428__$1 = cljs.core.__destructure_map(map__33428);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33428__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33428__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33428__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__33455){
var map__33457 = p__33455;
var map__33457__$1 = cljs.core.__destructure_map(map__33457);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33457__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33457__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__33473){
var map__33474 = p__33473;
var map__33474__$1 = cljs.core.__destructure_map(map__33474);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33474__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (next){
var seq__33480_33773 = cljs.core.seq(files_to_require);
var chunk__33481_33774 = null;
var count__33482_33775 = (0);
var i__33483_33776 = (0);
while(true){
if((i__33483_33776 < count__33482_33775)){
var src_33777 = chunk__33481_33774.cljs$core$IIndexed$_nth$arity$2(null,i__33483_33776);
shadow.cljs.devtools.client.env.before_load_src(src_33777);

shadow.cljs.devtools.client.node.closure_import(src_33777);


var G__33778 = seq__33480_33773;
var G__33779 = chunk__33481_33774;
var G__33780 = count__33482_33775;
var G__33781 = (i__33483_33776 + (1));
seq__33480_33773 = G__33778;
chunk__33481_33774 = G__33779;
count__33482_33775 = G__33780;
i__33483_33776 = G__33781;
continue;
} else {
var temp__5804__auto___33782 = cljs.core.seq(seq__33480_33773);
if(temp__5804__auto___33782){
var seq__33480_33783__$1 = temp__5804__auto___33782;
if(cljs.core.chunked_seq_QMARK_(seq__33480_33783__$1)){
var c__5525__auto___33785 = cljs.core.chunk_first(seq__33480_33783__$1);
var G__33786 = cljs.core.chunk_rest(seq__33480_33783__$1);
var G__33787 = c__5525__auto___33785;
var G__33788 = cljs.core.count(c__5525__auto___33785);
var G__33789 = (0);
seq__33480_33773 = G__33786;
chunk__33481_33774 = G__33787;
count__33482_33775 = G__33788;
i__33483_33776 = G__33789;
continue;
} else {
var src_33790 = cljs.core.first(seq__33480_33783__$1);
shadow.cljs.devtools.client.env.before_load_src(src_33790);

shadow.cljs.devtools.client.node.closure_import(src_33790);


var G__33792 = cljs.core.next(seq__33480_33783__$1);
var G__33793 = null;
var G__33794 = (0);
var G__33795 = (0);
seq__33480_33773 = G__33792;
chunk__33481_33774 = G__33793;
count__33482_33775 = G__33794;
i__33483_33776 = G__33795;
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
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__33504,msg){
var map__33505 = p__33504;
var map__33505__$1 = cljs.core.__destructure_map(map__33505);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33505__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__33506){
var map__33507 = p__33506;
var map__33507__$1 = cljs.core.__destructure_map(map__33507);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33507__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33507__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__33543 = SHADOW_NODE_EVAL(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__33543) : success.call(null,G__33543));
}catch (e33541){var e = e33541;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,msg,success,fail){
var this$__$1 = this;
try{var G__33562 = shadow.cljs.devtools.client.node.node_eval(msg);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__33562) : success.call(null,G__33562));
}catch (e33559){var e = e33559;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__33568,done,error){
var map__33570 = p__33568;
var map__33570__$1 = cljs.core.__destructure_map(map__33570);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33570__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__33576_33802 = cljs.core.seq(repl_sources);
var chunk__33578_33803 = null;
var count__33579_33804 = (0);
var i__33580_33805 = (0);
while(true){
if((i__33580_33805 < count__33579_33804)){
var map__33621_33809 = chunk__33578_33803.cljs$core$IIndexed$_nth$arity$2(null,i__33580_33805);
var map__33621_33810__$1 = cljs.core.__destructure_map(map__33621_33809);
var src_33811 = map__33621_33810__$1;
var output_name_33812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33621_33810__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33812)))){
shadow.cljs.devtools.client.node.closure_import(output_name_33812);


var G__33813 = seq__33576_33802;
var G__33814 = chunk__33578_33803;
var G__33815 = count__33579_33804;
var G__33816 = (i__33580_33805 + (1));
seq__33576_33802 = G__33813;
chunk__33578_33803 = G__33814;
count__33579_33804 = G__33815;
i__33580_33805 = G__33816;
continue;
} else {
var G__33817 = seq__33576_33802;
var G__33818 = chunk__33578_33803;
var G__33819 = count__33579_33804;
var G__33820 = (i__33580_33805 + (1));
seq__33576_33802 = G__33817;
chunk__33578_33803 = G__33818;
count__33579_33804 = G__33819;
i__33580_33805 = G__33820;
continue;
}
} else {
var temp__5804__auto___33821 = cljs.core.seq(seq__33576_33802);
if(temp__5804__auto___33821){
var seq__33576_33822__$1 = temp__5804__auto___33821;
if(cljs.core.chunked_seq_QMARK_(seq__33576_33822__$1)){
var c__5525__auto___33823 = cljs.core.chunk_first(seq__33576_33822__$1);
var G__33824 = cljs.core.chunk_rest(seq__33576_33822__$1);
var G__33825 = c__5525__auto___33823;
var G__33826 = cljs.core.count(c__5525__auto___33823);
var G__33827 = (0);
seq__33576_33802 = G__33824;
chunk__33578_33803 = G__33825;
count__33579_33804 = G__33826;
i__33580_33805 = G__33827;
continue;
} else {
var map__33626_33828 = cljs.core.first(seq__33576_33822__$1);
var map__33626_33829__$1 = cljs.core.__destructure_map(map__33626_33828);
var src_33830 = map__33626_33829__$1;
var output_name_33831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33626_33829__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33831)))){
shadow.cljs.devtools.client.node.closure_import(output_name_33831);


var G__33839 = cljs.core.next(seq__33576_33822__$1);
var G__33840 = null;
var G__33841 = (0);
var G__33842 = (0);
seq__33576_33802 = G__33839;
chunk__33578_33803 = G__33840;
count__33579_33804 = G__33841;
i__33580_33805 = G__33842;
continue;
} else {
var G__33843 = cljs.core.next(seq__33576_33822__$1);
var G__33844 = null;
var G__33845 = (0);
var G__33846 = (0);
seq__33576_33802 = G__33843;
chunk__33578_33803 = G__33844;
count__33579_33804 = G__33845;
i__33580_33805 = G__33846;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e33575){var e = e33575;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__33632,done,error){
var map__33634 = p__33632;
var map__33634__$1 = cljs.core.__destructure_map(map__33634);
var msg = map__33634__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33634__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33634__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__33636_33848 = cljs.core.seq(sources);
var chunk__33637_33849 = null;
var count__33638_33850 = (0);
var i__33639_33851 = (0);
while(true){
if((i__33639_33851 < count__33638_33850)){
var map__33683_33853 = chunk__33637_33849.cljs$core$IIndexed$_nth$arity$2(null,i__33639_33851);
var map__33683_33854__$1 = cljs.core.__destructure_map(map__33683_33853);
var src_33855 = map__33683_33854__$1;
var provides_33856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33683_33854__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_33857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33683_33854__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33857)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_33856);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_33857);
} else {
}


var G__33859 = seq__33636_33848;
var G__33860 = chunk__33637_33849;
var G__33861 = count__33638_33850;
var G__33862 = (i__33639_33851 + (1));
seq__33636_33848 = G__33859;
chunk__33637_33849 = G__33860;
count__33638_33850 = G__33861;
i__33639_33851 = G__33862;
continue;
} else {
var temp__5804__auto___33863 = cljs.core.seq(seq__33636_33848);
if(temp__5804__auto___33863){
var seq__33636_33864__$1 = temp__5804__auto___33863;
if(cljs.core.chunked_seq_QMARK_(seq__33636_33864__$1)){
var c__5525__auto___33865 = cljs.core.chunk_first(seq__33636_33864__$1);
var G__33866 = cljs.core.chunk_rest(seq__33636_33864__$1);
var G__33867 = c__5525__auto___33865;
var G__33868 = cljs.core.count(c__5525__auto___33865);
var G__33869 = (0);
seq__33636_33848 = G__33866;
chunk__33637_33849 = G__33867;
count__33638_33850 = G__33868;
i__33639_33851 = G__33869;
continue;
} else {
var map__33695_33870 = cljs.core.first(seq__33636_33864__$1);
var map__33695_33871__$1 = cljs.core.__destructure_map(map__33695_33870);
var src_33872 = map__33695_33871__$1;
var provides_33873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695_33871__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_33874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695_33871__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_33874)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_33873);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_33874);
} else {
}


var G__33875 = cljs.core.next(seq__33636_33864__$1);
var G__33876 = null;
var G__33877 = (0);
var G__33878 = (0);
seq__33636_33848 = G__33875;
chunk__33637_33849 = G__33876;
count__33638_33850 = G__33877;
i__33639_33851 = G__33878;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e33635){var e = e33635;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__33704){
var map__33708 = p__33704;
var map__33708__$1 = cljs.core.__destructure_map(map__33708);
var env = map__33708__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__33734){
var map__33735 = p__33734;
var map__33735__$1 = cljs.core.__destructure_map(map__33735);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33735__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33735__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__33736){
var map__33737 = p__33736;
var map__33737__$1 = cljs.core.__destructure_map(map__33737);
var svc = map__33737__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33737__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
