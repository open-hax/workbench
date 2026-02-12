goog.provide('opencode_unified.opencode');
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.opencode !== 'undefined') && (typeof opencode_unified.opencode.opencode_state !== 'undefined')){
} else {
opencode_unified.opencode.opencode_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword(null,"last-error","last-error",1848699973),new cljs.core.Keyword(null,"connected?","connected?",-1197551387),new cljs.core.Keyword(null,"pending-prompts","pending-prompts",15884422),new cljs.core.Keyword(null,"chat-stream","chat-stream",-419494010),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"api-endpoint","api-endpoint",2021131919),new cljs.core.Keyword(null,"active-agents","active-agents",-2147218575),new cljs.core.Keyword(null,"pending-permissions","pending-permissions",509587832),new cljs.core.Keyword(null,"available-tools","available-tools",1038148285)],[null,null,false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,null,"http://localhost:3000",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY]));
}
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.opencode !== 'undefined') && (typeof opencode_unified.opencode.tool_executions !== 'undefined')){
} else {
opencode_unified.opencode.tool_executions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.opencode !== 'undefined') && (typeof opencode_unified.opencode.agent_communications !== 'undefined')){
} else {
opencode_unified.opencode.agent_communications = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
opencode_unified.opencode.make_client = (function opencode_unified$opencode$make_client(endpoint){
return module$src$clojurescript$mocks$opencode_sdk.createOpencodeClient(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109),endpoint], null)));
});
opencode_unified.opencode.ensure_client = (function opencode_unified$opencode$ensure_client(){
var or__5002__auto__ = new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.opencode.opencode_state));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var client = opencode_unified.opencode.make_client(new cljs.core.Keyword(null,"api-endpoint","api-endpoint",2021131919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.opencode.opencode_state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"client","client",-1323448117),client);

return client;
}
});
opencode_unified.opencode.sdk_response__GT_result = (function opencode_unified$opencode$sdk_response__GT_result(response){
var result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(result);
var error = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null));
}
})();
if(cljs.core.truth_(error)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),((typeof error === 'string')?error:cljs.core.str.cljs$core$IFn$_invoke$arity$1(error))], null);
} else {
var or__5002__auto__ = data;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return result;
}
}
});
opencode_unified.opencode.response_error = (function opencode_unified$opencode$response_error(error){
if(typeof error === 'string'){
return error;
} else {
var or__5002__auto__ = error.message;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(error);
}
}
});
opencode_unified.opencode.session_id_from = (function opencode_unified$opencode$session_id_from(value){
var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
}
});
opencode_unified.opencode.ensure_session_id_BANG_ = (function opencode_unified$opencode$ensure_session_id_BANG_(){
var temp__5802__auto__ = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.opencode.opencode_state));
if(cljs.core.truth_(temp__5802__auto__)){
var session_id = temp__5802__auto__;
return Promise.resolve(session_id);
} else {
return (opencode_unified.opencode.create_session.cljs$core$IFn$_invoke$arity$0 ? opencode_unified.opencode.create_session.cljs$core$IFn$_invoke$arity$0() : opencode_unified.opencode.create_session.call(null)).then((function (result){
var normalized = ((cljs.core.map_QMARK_(result))?result:opencode_unified.opencode.sdk_response__GT_result(result));
var session_id = opencode_unified.opencode.session_id_from(normalized);
if(cljs.core.truth_(session_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id);

return session_id;
} else {
throw (new Error((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(normalized);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Failed to create Opencode session";
}
})()));
}
}));
}
});
/**
 * Connect to Opencode MCP server
 */
opencode_unified.opencode.connect_to_opencode = (function opencode_unified$opencode$connect_to_opencode(endpoint){
var client = opencode_unified.opencode.make_client(endpoint);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"api-endpoint","api-endpoint",2021131919),endpoint,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"client","client",-1323448117),client], 0));

return client.config.get().then((function (result){
var normalized = opencode_unified.opencode.sdk_response__GT_result(result);
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(normalized))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-error","last-error",1848699973),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(normalized)], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(normalized)], null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-error","last-error",1848699973),null], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"server-info","server-info",157672988),normalized], null);
}
})).catch((function (error){
var message = error.message;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-error","last-error",1848699973),message], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),message], null);
}));
});
/**
 * Disconnect from Opencode server
 */
opencode_unified.opencode.disconnect_from_opencode = (function opencode_unified$opencode$disconnect_from_opencode(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"session-id","session-id",-1147060351),null,new cljs.core.Keyword(null,"available-tools","available-tools",1038148285),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-agents","active-agents",-2147218575),cljs.core.PersistentVector.EMPTY], 0));
});
/**
 * Create new Opencode session
 */
opencode_unified.opencode.create_session = (function opencode_unified$opencode$create_session(){
var client = opencode_unified.opencode.ensure_client();
return client.session.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Opencode Editor Session",new cljs.core.Keyword(null,"description","description",-1428560544),"Session created from Opencode Unified Editor",new cljs.core.Keyword(null,"app-name","app-name",-268811251),"Opencode ClojureScript Editor",new cljs.core.Keyword(null,"version","version",425292698),"1.0.0"], null)], null))).then(opencode_unified.opencode.sdk_response__GT_result).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error.message], null);
}));
});
/**
 * List all Opencode sessions
 */
opencode_unified.opencode.list_sessions = (function opencode_unified$opencode$list_sessions(){
var client = opencode_unified.opencode.ensure_client();
return client.session.list().then(opencode_unified.opencode.sdk_response__GT_result).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error.message], null);
}));
});
/**
 * Delete Opencode session
 */
opencode_unified.opencode.delete_session = (function opencode_unified$opencode$delete_session(session_id){
var client = opencode_unified.opencode.ensure_client();
return client.session.delete(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),session_id], null)], null))).then(opencode_unified.opencode.sdk_response__GT_result).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error.message], null);
}));
});
/**
 * Update Opencode session state
 */
opencode_unified.opencode.update_session = (function opencode_unified$opencode$update_session(session_id,updates){
var client = opencode_unified.opencode.ensure_client();
return client.session.update(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),session_id], null),new cljs.core.Keyword(null,"body","body",-2049205669),updates], null))).then(opencode_unified.opencode.sdk_response__GT_result).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error.message], null);
}));
});
/**
 * Join existing Opencode session
 */
opencode_unified.opencode.join_session = (function opencode_unified$opencode$join_session(session_id){
var client = opencode_unified.opencode.ensure_client();
return client.session.get(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),session_id], null)], null))).then(opencode_unified.opencode.sdk_response__GT_result).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error.message], null);
}));
});
/**
 * Get list of available Opencode tools
 */
opencode_unified.opencode.list_available_tools = (function opencode_unified$opencode$list_available_tools(){
var client = opencode_unified.opencode.ensure_client();
var tool_api = client.tool;
return (tool_api["ids"]).call(tool_api,cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)).then(opencode_unified.opencode.sdk_response__GT_result).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return result;
} else {
var tool_ids = ((cljs.core.vector_QMARK_(result))?result:(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var tools = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (tool_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tool_id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),tool_id,new cljs.core.Keyword(null,"name","name",1843675177),tool_id,new cljs.core.Keyword(null,"description","description",-1428560544),"Tool exposed by Opencode MCP"], null)], null);
})),tool_ids);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"available-tools","available-tools",1038148285),tool_ids);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),tools], null);
}
})).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),opencode_unified.opencode.response_error(error)], null);
}));
});
/**
 * Execute an Opencode tool via MCP
 */
opencode_unified.opencode.execute_tool = (function opencode_unified$opencode$execute_tool(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19617 = arguments.length;
var i__5727__auto___19618 = (0);
while(true){
if((i__5727__auto___19618 < len__5726__auto___19617)){
args__5732__auto__.push((arguments[i__5727__auto___19618]));

var G__19619 = (i__5727__auto___19618 + (1));
i__5727__auto___19618 = G__19619;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return opencode_unified.opencode.execute_tool.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(opencode_unified.opencode.execute_tool.cljs$core$IFn$_invoke$arity$variadic = (function (tool_name,parameters,p__19424){
var vec__19425 = p__19424;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(0),null);
var execution_id = cljs.core.random_uuid();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.tool_executions,cljs.core.assoc,execution_id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tool-name","tool-name",613742581),tool_name,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters,new cljs.core.Keyword(null,"status","status",-1997798413),"running",new cljs.core.Keyword(null,"started-at","started-at",1318767912),(new Date()),new cljs.core.Keyword(null,"options","options",99638489),options], null));

var client = opencode_unified.opencode.ensure_client();
return opencode_unified.opencode.ensure_session_id_BANG_().then((function (session_id){
return client.session.command(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),session_id], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),tool_name,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),JSON.stringify(cljs.core.clj__GT_js(parameters))], null)], null)));
})).then(opencode_unified.opencode.sdk_response__GT_result).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.tool_executions,cljs.core.update,execution_id,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"failed",new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"completed-at","completed-at",-1210511048),(new Date())], null)], 0));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.tool_executions,cljs.core.update,execution_id,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"completed",new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"completed-at","completed-at",-1210511048),(new Date())], null)], 0));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id),new cljs.core.Keyword(null,"result","result",1415092211),result], null);
}
})).catch((function (error){
var message = opencode_unified.opencode.response_error(error);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.tool_executions,cljs.core.update,execution_id,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"failed",new cljs.core.Keyword(null,"error","error",-978969032),message,new cljs.core.Keyword(null,"completed-at","completed-at",-1210511048),(new Date())], null)], 0));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id),new cljs.core.Keyword(null,"error","error",-978969032),message], null);
}));
}));

(opencode_unified.opencode.execute_tool.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(opencode_unified.opencode.execute_tool.cljs$lang$applyTo = (function (seq19421){
var G__19422 = cljs.core.first(seq19421);
var seq19421__$1 = cljs.core.next(seq19421);
var G__19423 = cljs.core.first(seq19421__$1);
var seq19421__$2 = cljs.core.next(seq19421__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19422,G__19423,seq19421__$2);
}));

/**
 * Get list of active Opencode agents
 */
opencode_unified.opencode.list_active_agents = (function opencode_unified$opencode$list_active_agents(){
var client = opencode_unified.opencode.ensure_client();
var app_api = client.app;
return (app_api["agents"]).call(app_api,cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)).then(opencode_unified.opencode.sdk_response__GT_result).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return result;
} else {
var agents = ((cljs.core.vector_QMARK_(result))?result:(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"agents","agents",-1112413700).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"agents","agents",-1112413700),agents], null);
}
})).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),opencode_unified.opencode.response_error(error)], null);
}));
});
/**
 * Create a session for an agent
 */
opencode_unified.opencode.spawn_agent = (function opencode_unified$opencode$spawn_agent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19630 = arguments.length;
var i__5727__auto___19633 = (0);
while(true){
if((i__5727__auto___19633 < len__5726__auto___19630)){
args__5732__auto__.push((arguments[i__5727__auto___19633]));

var G__19634 = (i__5727__auto___19633 + (1));
i__5727__auto___19633 = G__19634;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return opencode_unified.opencode.spawn_agent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(opencode_unified.opencode.spawn_agent.cljs$core$IFn$_invoke$arity$variadic = (function (agent_type,_prompt,p__19449){
var vec__19450 = p__19449;
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19450,(0),null);
var client = opencode_unified.opencode.ensure_client();
return client.session.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),["Agent session: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_type)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),"Session created from Opencode Unified Editor",new cljs.core.Keyword(null,"agent","agent",-766455027),agent_type], null)], null))).then(opencode_unified.opencode.sdk_response__GT_result).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return result;
} else {
var session_id = opencode_unified.opencode.session_id_from(result);
if(cljs.core.truth_(session_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"agent-id","agent-id",1570348870),session_id,new cljs.core.Keyword(null,"agent-type","agent-type",1996666879),agent_type,new cljs.core.Keyword(null,"status","status",-1997798413),"active"], null);
}
})).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),opencode_unified.opencode.response_error(error)], null);
}));
}));

(opencode_unified.opencode.spawn_agent.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(opencode_unified.opencode.spawn_agent.cljs$lang$applyTo = (function (seq19436){
var G__19437 = cljs.core.first(seq19436);
var seq19436__$1 = cljs.core.next(seq19436);
var G__19438 = cljs.core.first(seq19436__$1);
var seq19436__$2 = cljs.core.next(seq19436__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19437,G__19438,seq19436__$2);
}));

/**
 * Send message to an Opencode agent
 */
opencode_unified.opencode.send_agent_message = (function opencode_unified$opencode$send_agent_message(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19649 = arguments.length;
var i__5727__auto___19652 = (0);
while(true){
if((i__5727__auto___19652 < len__5726__auto___19649)){
args__5732__auto__.push((arguments[i__5727__auto___19652]));

var G__19653 = (i__5727__auto___19652 + (1));
i__5727__auto___19652 = G__19653;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return opencode_unified.opencode.send_agent_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(opencode_unified.opencode.send_agent_message.cljs$core$IFn$_invoke$arity$variadic = (function (agent_id,message,p__19475){
var vec__19476 = p__19475;
var _message_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19476,(0),null);
var client = opencode_unified.opencode.ensure_client();
return client.session.prompt(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),agent_id], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"text","text",-1790561697),message], null)], null)], null)], null))).then(opencode_unified.opencode.sdk_response__GT_result).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return result;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"message-id","message-id",-1564847547),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
})(),new cljs.core.Keyword(null,"response","response",-1068424192),result], null);
}
})).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),opencode_unified.opencode.response_error(error)], null);
}));
}));

(opencode_unified.opencode.send_agent_message.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(opencode_unified.opencode.send_agent_message.cljs$lang$applyTo = (function (seq19466){
var G__19467 = cljs.core.first(seq19466);
var seq19466__$1 = cljs.core.next(seq19466);
var G__19468 = cljs.core.first(seq19466__$1);
var seq19466__$2 = cljs.core.next(seq19466__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19467,G__19468,seq19466__$2);
}));

/**
 * Get status of an Opencode agent
 */
opencode_unified.opencode.get_agent_status = (function opencode_unified$opencode$get_agent_status(agent_id){
var client = opencode_unified.opencode.ensure_client();
return client.session.get(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),agent_id], null)], null))).then(opencode_unified.opencode.sdk_response__GT_result).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return result;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"agent-id","agent-id",1570348870),agent_id,new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "active";
}
})(),new cljs.core.Keyword(null,"last-activity","last-activity",-1410729976),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"updated","updated",-1627192056).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(result);
}
})(),new cljs.core.Keyword(null,"session","session",1008279103),result], null);
}
})).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),opencode_unified.opencode.response_error(error)], null);
}));
});
/**
 * Set active Opencode session
 */
opencode_unified.opencode.use_session_BANG_ = (function opencode_unified$opencode$use_session_BANG_(session_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id);

return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id], null));
});
/**
 * Clear local chat stream
 */
opencode_unified.opencode.clear_chat_stream_BANG_ = (function opencode_unified$opencode$clear_chat_stream_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"chat-stream","chat-stream",-419494010),cljs.core.PersistentVector.EMPTY);
});
/**
 * Send message to active Opencode session
 */
opencode_unified.opencode.send_session_message = (function opencode_unified$opencode$send_session_message(message){
var temp__5802__auto__ = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.opencode.opencode_state));
if(cljs.core.truth_(temp__5802__auto__)){
var session_id = temp__5802__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.update,new cljs.core.Keyword(null,"chat-stream","chat-stream",-419494010),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"user",new cljs.core.Keyword(null,"content","content",15833224),message], null)], 0));

return opencode_unified.opencode.send_agent_message(session_id,message).then((function (result){
var temp__5802__auto___19671__$1 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(temp__5802__auto___19671__$1)){
var error_19672 = temp__5802__auto___19671__$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.update,new cljs.core.Keyword(null,"chat-stream","chat-stream",-419494010),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"error",new cljs.core.Keyword(null,"content","content",15833224),error_19672], null)], 0));
} else {
var response_19675 = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return result;
}
})();
var text_19676 = ((typeof response_19675 === 'string')?response_19675:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response_19675,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"parts","parts",849007691),(0),new cljs.core.Keyword(null,"text","text",-1790561697)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.update,new cljs.core.Keyword(null,"chat-stream","chat-stream",-419494010),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"assistant",new cljs.core.Keyword(null,"content","content",15833224),(function (){var or__5002__auto__ = text_19676;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(response_19675);
}
})()], null)], 0));
}

return result;
}));
} else {
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),"No active session"], null));
}
});
/**
 * Respond to a pending permission request
 */
opencode_unified.opencode.respond_to_permission_BANG_ = (function opencode_unified$opencode$respond_to_permission_BANG_(id,_response){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.update,new cljs.core.Keyword(null,"pending-permissions","pending-permissions",509587832),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return Promise.resolve(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),true], null));
});
/**
 * Respond to a pending control prompt
 */
opencode_unified.opencode.respond_to_control_prompt_BANG_ = (function opencode_unified$opencode$respond_to_control_prompt_BANG_(id,_response){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.opencode_state,cljs.core.update,new cljs.core.Keyword(null,"pending-prompts","pending-prompts",15884422),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return Promise.resolve(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),true], null));
});
/**
 * Read file using Opencode file operations
 */
opencode_unified.opencode.opencode_read_file = (function opencode_unified$opencode$opencode_read_file(file_path){
return opencode_unified.workspace.read_file(file_path);
});
/**
 * Write file using Opencode file operations
 */
opencode_unified.opencode.opencode_write_file = (function opencode_unified$opencode$opencode_write_file(file_path,content){
return opencode_unified.workspace.write_file(file_path,content);
});
/**
 * Search code using Opencode tools
 */
opencode_unified.opencode.opencode_search_code = (function opencode_unified$opencode$opencode_search_code(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19686 = arguments.length;
var i__5727__auto___19688 = (0);
while(true){
if((i__5727__auto___19688 < len__5726__auto___19686)){
args__5732__auto__.push((arguments[i__5727__auto___19688]));

var G__19691 = (i__5727__auto___19688 + (1));
i__5727__auto___19688 = G__19691;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return opencode_unified.opencode.opencode_search_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(opencode_unified.opencode.opencode_search_code.cljs$core$IFn$_invoke$arity$variadic = (function (pattern,p__19525){
var vec__19526 = p__19525;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19526,(0),null);
var client = opencode_unified.opencode.ensure_client();
return client.find.text(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern], null),options], 0))], null))).then(opencode_unified.opencode.sdk_response__GT_result).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),opencode_unified.opencode.response_error(error)], null);
}));
}));

(opencode_unified.opencode.opencode_search_code.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(opencode_unified.opencode.opencode_search_code.cljs$lang$applyTo = (function (seq19516){
var G__19517 = cljs.core.first(seq19516);
var seq19516__$1 = cljs.core.next(seq19516);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19517,seq19516__$1);
}));

/**
 * Open buffer using Opencode file operations
 */
opencode_unified.opencode.open_buffer_with_opencode = (function opencode_unified$opencode$open_buffer_with_opencode(file_path){
return opencode_unified.opencode.opencode_read_file(file_path).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return opencode_unified.buffers.create_buffer(file_path,["Error loading file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))].join(''));
} else {
return opencode_unified.buffers.create_buffer(file_path,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(result));
}
}));
});
/**
 * Save buffer using Opencode file operations
 */
opencode_unified.opencode.save_buffer_with_opencode = (function opencode_unified$opencode$save_buffer_with_opencode(buffer_id){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),buffer_id], null));
if(cljs.core.truth_(temp__5804__auto__)){
var buffer = temp__5804__auto__;
return opencode_unified.opencode.opencode_write_file(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(buffer),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(buffer)).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return opencode_unified.state.update_current_buffer_BANG_((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(b,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], 0));
}));
} else {
return opencode_unified.state.update_current_buffer_BANG_((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(b,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"last-saved","last-saved",1844802997),(new Date())], 0));
}));
}
}));
} else {
return null;
}
});
/**
 * Create buffer for agent communication
 */
opencode_unified.opencode.create_agent_chat_buffer = (function opencode_unified$opencode$create_agent_chat_buffer(agent_id,agent_type){
var buffer_path = ["agent://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_id)].join('');
var initial_content = ["# Agent Chat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_type)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(agent_id),")\n\n","---\n\n","Type your message below and press C-c C-c to send.\n\n"].join('');
return opencode_unified.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(buffer_path,initial_content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"agent-id","agent-id",1570348870),agent_id], null),new cljs.core.Keyword(null,"agent-type","agent-type",1996666879),agent_type,new cljs.core.Keyword(null,"buffer-type","buffer-type",1249739115),new cljs.core.Keyword(null,"agent-chat","agent-chat",-352332657)], 0));
});
/**
 * Send buffer content to agent
 */
opencode_unified.opencode.send_buffer_content_to_agent = (function opencode_unified$opencode$send_buffer_content_to_agent(buffer_id){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),buffer_id], null));
if(cljs.core.truth_(temp__5804__auto__)){
var buffer = temp__5804__auto__;
var agent_id = new cljs.core.Keyword(null,"agent-id","agent-id",1570348870).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.truth_(agent_id)){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(buffer);
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(content,/\n/);
var message_lines = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__19546_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__19546_SHARP_,"---");
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),lines));
var message = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",message_lines);
return opencode_unified.opencode.send_agent_message(agent_id,message).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return opencode_unified.state.update_current_buffer_BANG_((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
}));
} else {
return opencode_unified.state.update_current_buffer_BANG_((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(b,new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n\nAgent: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(result)], 0)),"\n\n---\n\n"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
}
}));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Create buffer to display tool execution results
 */
opencode_unified.opencode.create_tool_execution_buffer = (function opencode_unified$opencode$create_tool_execution_buffer(tool_name,parameters,execution_id){
var buffer_path = ["tool://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tool_name),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id)].join('');
var initial_content = ["# Tool Execution: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tool_name),"\n\n","Execution ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id),"\n\n","Parameters:\n```json\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(parameters),null,(2))),"\n```\n\n","Status: Running...\n\n","---\n\n","Results will appear below.\n\n"].join('');
return opencode_unified.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic(buffer_path,initial_content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tool-name","tool-name",613742581),tool_name], null),new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id,new cljs.core.Keyword(null,"buffer-type","buffer-type",1249739115),new cljs.core.Keyword(null,"tool-execution","tool-execution",-1543171286)], 0));
});
/**
 * Update tool execution buffer with results
 */
opencode_unified.opencode.update_tool_execution_buffer = (function opencode_unified$opencode$update_tool_execution_buffer(execution_id){
var execution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.opencode.tool_executions),execution_id);
var buffer_path = ["tool://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tool-name","tool-name",613742581).cljs$core$IFn$_invoke$arity$1(execution)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id)].join('');
var buffer_id = (function (){var temp__5804__auto__ = opencode_unified.buffers.find_buffer_by_path(buffer_path);
if(cljs.core.truth_(temp__5804__auto__)){
var buffer = temp__5804__auto__;
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(buffer);
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = buffer_id;
if(cljs.core.truth_(and__5000__auto__)){
return execution;
} else {
return and__5000__auto__;
}
})())){
var status_line = (function (){var G__19559 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(execution);
switch (G__19559) {
case "running":
return "Status: Running...";

break;
case "completed":
return ["Status: Completed\n\nResult:\n```json\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(execution)),null,(2))),"\n```\n\n"].join('');

break;
case "failed":
return ["Status: Failed\n\nError: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(execution)),"\n\n"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19559)].join('')));

}
})();
var updated_content = ["# Tool Execution: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tool-name","tool-name",613742581).cljs$core$IFn$_invoke$arity$1(execution)),"\n\n","Execution ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id),"\n\n","Parameters:\n```json\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(execution)),null,(2))),"\n```\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_line),"---\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(execution))?new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(execution):null)),"\n\n"].join('');
return opencode_unified.state.update_current_buffer_BANG_((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword(null,"content","content",15833224),updated_content);
}));
} else {
return null;
}
});
/**
 * Get Opencode-specific commands for command palette
 */
opencode_unified.opencode.opencode_commands = (function opencode_unified$opencode$opencode_commands(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Connect to Opencode",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect to Opencode server",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return opencode_unified.opencode.connect_to_opencode("http://localhost:3000");
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Disconnect from Opencode",new cljs.core.Keyword(null,"description","description",-1428560544),"Disconnect from Opencode server",new cljs.core.Keyword(null,"action","action",-811238024),opencode_unified.opencode.disconnect_from_opencode], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"List Available Tools",new cljs.core.Keyword(null,"description","description",-1428560544),"Show available Opencode tools",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return opencode_unified.opencode.list_available_tools().then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return null;
} else {
return alert(["Available tools:\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals(new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(result))))].join(''));
}
}));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Spawn Agent",new cljs.core.Keyword(null,"description","description",-1428560544),"Spawn a new Opencode agent",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var agent_type = prompt("Agent type (e.g., 'general', 'code-reviewer'):");
var prompt = prompt("Agent prompt:");
if(cljs.core.truth_((function (){var and__5000__auto__ = agent_type;
if(cljs.core.truth_(and__5000__auto__)){
return prompt;
} else {
return and__5000__auto__;
}
})())){
return opencode_unified.opencode.spawn_agent(agent_type,prompt).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return null;
} else {
return opencode_unified.opencode.create_agent_chat_buffer(new cljs.core.Keyword(null,"agent-id","agent-id",1570348870).cljs$core$IFn$_invoke$arity$1(result),agent_type);
}
}));
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Execute Tool",new cljs.core.Keyword(null,"description","description",-1428560544),"Execute an Opencode tool",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var tool_name = prompt("Tool name:");
var parameters = prompt("Parameters (JSON):");
if(cljs.core.truth_((function (){var and__5000__auto__ = tool_name;
if(cljs.core.truth_(and__5000__auto__)){
return parameters;
} else {
return and__5000__auto__;
}
})())){
try{var parsed_params = JSON.parse(parameters);
return opencode_unified.opencode.execute_tool(tool_name,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))).then((function (result){
return opencode_unified.opencode.create_tool_execution_buffer(tool_name,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"execution-id","execution-id",153779799).cljs$core$IFn$_invoke$arity$1(result));
}));
}catch (e19564){if((e19564 instanceof Error)){
var e = e19564;
return alert(["Invalid JSON: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join(''));
} else {
throw e19564;

}
}} else {
return null;
}
})], null)], null);
});
/**
 * Set up auto-save using Opencode file operations
 */
opencode_unified.opencode.setup_opencode_auto_save = (function opencode_unified$opencode$setup_opencode_auto_save(){
return cljs.core.add_watch(opencode_unified.state.app_state,new cljs.core.Keyword(null,"opencode-auto-save","opencode-auto-save",1664079497),(function (_,___$1,old_state,new_state){
var old_buffers = new cljs.core.Keyword(null,"buffers","buffers",471409492).cljs$core$IFn$_invoke$arity$1(old_state);
var new_buffers = new cljs.core.Keyword(null,"buffers","buffers",471409492).cljs$core$IFn$_invoke$arity$1(new_state);
var seq__19565 = cljs.core.seq(new_buffers);
var chunk__19566 = null;
var count__19567 = (0);
var i__19568 = (0);
while(true){
if((i__19568 < count__19567)){
var vec__19575 = chunk__19566.cljs$core$IIndexed$_nth$arity$2(null,i__19568);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(buffer));
if(and__5000__auto__){
var and__5000__auto____$1 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(buffer);
if(cljs.core.truth_(and__5000__auto____$1)){
return (((!(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(buffer),"agent:")))) && ((((!(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(buffer),"tool:")))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(buffer),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id)))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
opencode_unified.opencode.save_buffer_with_opencode(buffer_id);
} else {
}


var G__19705 = seq__19565;
var G__19706 = chunk__19566;
var G__19707 = count__19567;
var G__19708 = (i__19568 + (1));
seq__19565 = G__19705;
chunk__19566 = G__19706;
count__19567 = G__19707;
i__19568 = G__19708;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19565);
if(temp__5804__auto__){
var seq__19565__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19565__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19565__$1);
var G__19709 = cljs.core.chunk_rest(seq__19565__$1);
var G__19710 = c__5525__auto__;
var G__19711 = cljs.core.count(c__5525__auto__);
var G__19712 = (0);
seq__19565 = G__19709;
chunk__19566 = G__19710;
count__19567 = G__19711;
i__19568 = G__19712;
continue;
} else {
var vec__19578 = cljs.core.first(seq__19565__$1);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19578,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19578,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(buffer));
if(and__5000__auto__){
var and__5000__auto____$1 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(buffer);
if(cljs.core.truth_(and__5000__auto____$1)){
return (((!(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(buffer),"agent:")))) && ((((!(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(buffer),"tool:")))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(buffer),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id)))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
opencode_unified.opencode.save_buffer_with_opencode(buffer_id);
} else {
}


var G__19713 = cljs.core.next(seq__19565__$1);
var G__19714 = null;
var G__19715 = (0);
var G__19716 = (0);
seq__19565 = G__19713;
chunk__19566 = G__19714;
count__19567 = G__19715;
i__19568 = G__19716;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
/**
 * Initialize Opencode SDK integration
 */
opencode_unified.opencode.init_opencode = (function opencode_unified$opencode$init_opencode(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing Opencode SDK integration..."], 0));

opencode_unified.opencode.connect_to_opencode("http://localhost:4096").then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opencode server not available:",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Connected to Opencode server"], 0));

return opencode_unified.opencode.create_session().then((function (session_result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(session_result))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to create session:",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(session_result)], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.opencode_state,cljs.core.assoc,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(session_result));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opencode session created:",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(session_result)], 0));
}
}));
}
}));

opencode_unified.opencode.setup_opencode_auto_save();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"command-palette","command-palette",153522288)], null),cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opencode_unified.opencode.opencode_commands()], 0));
});
opencode_unified.opencode.get_opencode_state = (function opencode_unified$opencode$get_opencode_state(){
return cljs.core.deref(opencode_unified.opencode.opencode_state);
});
opencode_unified.opencode.get_tool_executions = (function opencode_unified$opencode$get_tool_executions(){
return cljs.core.deref(opencode_unified.opencode.tool_executions);
});
opencode_unified.opencode.get_agent_communications = (function opencode_unified$opencode$get_agent_communications(){
return cljs.core.deref(opencode_unified.opencode.agent_communications);
});

//# sourceMappingURL=opencode_unified.opencode.js.map
