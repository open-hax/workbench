goog.provide('opencode_unified.opencode');
var module$node_modules$$opencode_ai$sdk$dist$client=shadow.js.require("module$node_modules$$opencode_ai$sdk$dist$client", {});
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.opencode !== 'undefined') && (typeof opencode_unified.opencode.opencode_state !== 'undefined')){
} else {
opencode_unified.opencode.opencode_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false,new cljs.core.Keyword(null,"api-endpoint","api-endpoint",2021131919),"http://localhost:3000",new cljs.core.Keyword(null,"client","client",-1323448117),null,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),null,new cljs.core.Keyword(null,"available-tools","available-tools",1038148285),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-agents","active-agents",-2147218575),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"last-error","last-error",1848699973),null], null));
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
return module$node_modules$$opencode_ai$sdk$dist$client.createOpencodeClient(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109),endpoint], null)));
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
 * Join existing Opencode session
 */
opencode_unified.opencode.join_session = (function opencode_unified$opencode$join_session(session_id){
var client = opencode_unified.opencode.ensure_client();
return client.session.get(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),session_id], null)], null))).then(opencode_unified.opencode.sdk_response__GT_result).catch((function (error){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error.message], null);
}));
});
/**
 * Get list of available Opencode tools (from MCP config)
 */
opencode_unified.opencode.list_available_tools = (function opencode_unified$opencode$list_available_tools(){
var mcp_tools = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"playwright","playwright",1518814798),new cljs.core.Keyword(null,"web-search-prime","web-search-prime",-2137459502),new cljs.core.Keyword(null,"chrome-devtools","chrome-devtools",-1160741038),new cljs.core.Keyword(null,"gh_grep","gh_grep",1398518900),new cljs.core.Keyword(null,"context7","context7",133140854),new cljs.core.Keyword(null,"zai-mcp-server","zai-mcp-server",222789592),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"clj-kondo","clj-kondo",42487805),new cljs.core.Keyword(null,"serena","serena",-1708259362)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Playwright",new cljs.core.Keyword(null,"description","description",-1428560544),"Web automation and testing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Web Search",new cljs.core.Keyword(null,"description","description",-1428560544),"Web search capabilities"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Chrome DevTools",new cljs.core.Keyword(null,"description","description",-1428560544),"Browser automation"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"GitHub Grep",new cljs.core.Keyword(null,"description","description",-1428560544),"GitHub code search"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Context7",new cljs.core.Keyword(null,"description","description",-1428560544),"Documentation search"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ZAI MCP Server",new cljs.core.Keyword(null,"description","description",-1428560544),"AI and vision tools"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Clojure Tools",new cljs.core.Keyword(null,"description","description",-1428560544),"Clojure development tools"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Clj-Kondo",new cljs.core.Keyword(null,"description","description",-1428560544),"Clojure linting"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Serena",new cljs.core.Keyword(null,"description","description",-1428560544),"File system and project management"], null)]);
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),mcp_tools], null));
});
/**
 * Execute an Opencode tool via MCP
 */
opencode_unified.opencode.execute_tool = (function opencode_unified$opencode$execute_tool(var_args){
var args__5732__auto__ = [];
var len__5726__auto___6764 = arguments.length;
var i__5727__auto___6765 = (0);
while(true){
if((i__5727__auto___6765 < len__5726__auto___6764)){
args__5732__auto__.push((arguments[i__5727__auto___6765]));

var G__6766 = (i__5727__auto___6765 + (1));
i__5727__auto___6765 = G__6766;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return opencode_unified.opencode.execute_tool.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(opencode_unified.opencode.execute_tool.cljs$core$IFn$_invoke$arity$variadic = (function (tool_name,parameters,p__6717){
var vec__6718 = p__6717;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6718,(0),null);
var execution_id = cljs.core.random_uuid();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.opencode.tool_executions,cljs.core.assoc,execution_id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tool-name","tool-name",613742581),tool_name,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters,new cljs.core.Keyword(null,"status","status",-1997798413),"running",new cljs.core.Keyword(null,"started-at","started-at",1318767912),(new Date()),new cljs.core.Keyword(null,"options","options",99638489),options], null));

setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.opencode.tool_executions,cljs.core.update,execution_id,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),"completed",new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),["Tool ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tool_name)," executed with parameters: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(parameters),null,(2)))].join(''),new cljs.core.Keyword(null,"output","output",-1105869043),"Mock execution result"], null),new cljs.core.Keyword(null,"completed-at","completed-at",-1210511048),(new Date())], null)], 0));
}),(1000));

return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),cljs.core.str.cljs$core$IFn$_invoke$arity$1(execution_id)], null));
}));

(opencode_unified.opencode.execute_tool.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(opencode_unified.opencode.execute_tool.cljs$lang$applyTo = (function (seq6714){
var G__6715 = cljs.core.first(seq6714);
var seq6714__$1 = cljs.core.next(seq6714);
var G__6716 = cljs.core.first(seq6714__$1);
var seq6714__$2 = cljs.core.next(seq6714__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6715,G__6716,seq6714__$2);
}));

/**
 * Get list of active Opencode agents
 */
opencode_unified.opencode.list_active_agents = (function opencode_unified$opencode$list_active_agents(){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"agents","agents",-1112413700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"agent-1",new cljs.core.Keyword(null,"type","type",1174270348),"general",new cljs.core.Keyword(null,"status","status",-1997798413),"active",new cljs.core.Keyword(null,"session-id","session-id",-1147060351),"session-1"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"agent-2",new cljs.core.Keyword(null,"type","type",1174270348),"code-reviewer",new cljs.core.Keyword(null,"status","status",-1997798413),"idle",new cljs.core.Keyword(null,"session-id","session-id",-1147060351),null], null)], null)], null));
});
/**
 * Spawn a new Opencode agent
 */
opencode_unified.opencode.spawn_agent = (function opencode_unified$opencode$spawn_agent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___6767 = arguments.length;
var i__5727__auto___6768 = (0);
while(true){
if((i__5727__auto___6768 < len__5726__auto___6767)){
args__5732__auto__.push((arguments[i__5727__auto___6768]));

var G__6769 = (i__5727__auto___6768 + (1));
i__5727__auto___6768 = G__6769;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return opencode_unified.opencode.spawn_agent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(opencode_unified.opencode.spawn_agent.cljs$core$IFn$_invoke$arity$variadic = (function (agent_type,_prompt,p__6724){
var vec__6725 = p__6724;
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6725,(0),null);
var agent_id = ["agent-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"agent-id","agent-id",1570348870),agent_id,new cljs.core.Keyword(null,"agent-type","agent-type",1996666879),agent_type,new cljs.core.Keyword(null,"status","status",-1997798413),"spawning"], null));
}));

(opencode_unified.opencode.spawn_agent.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(opencode_unified.opencode.spawn_agent.cljs$lang$applyTo = (function (seq6721){
var G__6722 = cljs.core.first(seq6721);
var seq6721__$1 = cljs.core.next(seq6721);
var G__6723 = cljs.core.first(seq6721__$1);
var seq6721__$2 = cljs.core.next(seq6721__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6722,G__6723,seq6721__$2);
}));

/**
 * Send message to an Opencode agent
 */
opencode_unified.opencode.send_agent_message = (function opencode_unified$opencode$send_agent_message(var_args){
var args__5732__auto__ = [];
var len__5726__auto___6770 = arguments.length;
var i__5727__auto___6771 = (0);
while(true){
if((i__5727__auto___6771 < len__5726__auto___6770)){
args__5732__auto__.push((arguments[i__5727__auto___6771]));

var G__6772 = (i__5727__auto___6771 + (1));
i__5727__auto___6771 = G__6772;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return opencode_unified.opencode.send_agent_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(opencode_unified.opencode.send_agent_message.cljs$core$IFn$_invoke$arity$variadic = (function (_agent_id,message,p__6731){
var vec__6732 = p__6731;
var _message_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6732,(0),null);
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"message-id","message-id",-1564847547),["msg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),new cljs.core.Keyword(null,"response","response",-1068424192),["Agent response to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')], null));
}));

(opencode_unified.opencode.send_agent_message.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(opencode_unified.opencode.send_agent_message.cljs$lang$applyTo = (function (seq6728){
var G__6729 = cljs.core.first(seq6728);
var seq6728__$1 = cljs.core.next(seq6728);
var G__6730 = cljs.core.first(seq6728__$1);
var seq6728__$2 = cljs.core.next(seq6728__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6729,G__6730,seq6728__$2);
}));

/**
 * Get status of an Opencode agent
 */
opencode_unified.opencode.get_agent_status = (function opencode_unified$opencode$get_agent_status(agent_id){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"agent-id","agent-id",1570348870),agent_id,new cljs.core.Keyword(null,"status","status",-1997798413),"active",new cljs.core.Keyword(null,"last-activity","last-activity",-1410729976),(new Date())], null));
});
/**
 * Read file using Opencode file operations
 */
opencode_unified.opencode.opencode_read_file = (function opencode_unified$opencode$opencode_read_file(file_path){
return opencode_unified.opencode.execute_tool("serena_read_file",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relative_path","relative_path",-1139247997),file_path], null));
});
/**
 * Write file using Opencode file operations
 */
opencode_unified.opencode.opencode_write_file = (function opencode_unified$opencode$opencode_write_file(file_path,content){
return opencode_unified.opencode.execute_tool("serena_create_text_file",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relative_path","relative_path",-1139247997),file_path,new cljs.core.Keyword(null,"content","content",15833224),content], null));
});
/**
 * Search code using Opencode tools
 */
opencode_unified.opencode.opencode_search_code = (function opencode_unified$opencode$opencode_search_code(var_args){
var args__5732__auto__ = [];
var len__5726__auto___6773 = arguments.length;
var i__5727__auto___6774 = (0);
while(true){
if((i__5727__auto___6774 < len__5726__auto___6773)){
args__5732__auto__.push((arguments[i__5727__auto___6774]));

var G__6775 = (i__5727__auto___6774 + (1));
i__5727__auto___6774 = G__6775;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return opencode_unified.opencode.opencode_search_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(opencode_unified.opencode.opencode_search_code.cljs$core$IFn$_invoke$arity$variadic = (function (pattern,p__6737){
var vec__6738 = p__6737;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6738,(0),null);
return opencode_unified.opencode.execute_tool("serena_search_for_pattern",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"substring_pattern","substring_pattern",-1485593700),pattern], null),options], 0)));
}));

(opencode_unified.opencode.opencode_search_code.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(opencode_unified.opencode.opencode_search_code.cljs$lang$applyTo = (function (seq6735){
var G__6736 = cljs.core.first(seq6735);
var seq6735__$1 = cljs.core.next(seq6735);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6736,seq6735__$1);
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
var message_lines = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__6741_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__6741_SHARP_,"---");
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),lines));
var message = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",message_lines);
return opencode_unified.opencode.send_agent_message(agent_id,message).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
return opencode_unified.state.update_current_buffer_BANG_((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
}));
} else {
return opencode_unified.state.update_current_buffer_BANG_((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(b,new cljs.core.Keyword(null,"content","content",15833224),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n\nAgent: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result)),"\n\n---\n\n"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
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
var status_line = (function (){var G__6742 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(execution);
switch (G__6742) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6742)].join('')));

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
return alert(["Available tools:\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),result))].join(''));
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
}catch (e6743){if((e6743 instanceof Error)){
var e = e6743;
return alert(["Invalid JSON: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join(''));
} else {
throw e6743;

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
var seq__6744 = cljs.core.seq(new_buffers);
var chunk__6745 = null;
var count__6746 = (0);
var i__6747 = (0);
while(true){
if((i__6747 < count__6746)){
var vec__6754 = chunk__6745.cljs$core$IIndexed$_nth$arity$2(null,i__6747);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6754,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6754,(1),null);
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


var G__6777 = seq__6744;
var G__6778 = chunk__6745;
var G__6779 = count__6746;
var G__6780 = (i__6747 + (1));
seq__6744 = G__6777;
chunk__6745 = G__6778;
count__6746 = G__6779;
i__6747 = G__6780;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__6744);
if(temp__5804__auto__){
var seq__6744__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6744__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__6744__$1);
var G__6781 = cljs.core.chunk_rest(seq__6744__$1);
var G__6782 = c__5525__auto__;
var G__6783 = cljs.core.count(c__5525__auto__);
var G__6784 = (0);
seq__6744 = G__6781;
chunk__6745 = G__6782;
count__6746 = G__6783;
i__6747 = G__6784;
continue;
} else {
var vec__6757 = cljs.core.first(seq__6744__$1);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6757,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6757,(1),null);
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


var G__6785 = cljs.core.next(seq__6744__$1);
var G__6786 = null;
var G__6787 = (0);
var G__6788 = (0);
seq__6744 = G__6785;
chunk__6745 = G__6786;
count__6746 = G__6787;
i__6747 = G__6788;
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
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opencode MCP server not available:",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Starting mock server for development..."], 0));

if((typeof require !== 'undefined')){
try{var child_process_6789 = require("child_process");
child_process_6789.spawn("node",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(__dirname),"/../../../packages/opencode-session-manager/mock-opencode-server.js"].join('')], null),({"stdio": "inherit", "detached": true}));
}catch (e6760){if((e6760 instanceof Error)){
var e_6790 = e6760;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not start mock server:",e_6790.message], 0));
} else {
throw e6760;

}
}} else {
}

return setTimeout((function (){
return opencode_unified.opencode.connect_to_opencode("http://localhost:4096");
}),(2000));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Connected to Opencode MCP server"], 0));

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
