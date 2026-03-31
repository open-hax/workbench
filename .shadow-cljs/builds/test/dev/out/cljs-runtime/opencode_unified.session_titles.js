goog.provide('opencode_unified.session_titles');


opencode_unified.session_titles.backend_config = (function opencode_unified$session_titles$backend_config(){
var or__5002__auto__ = (function (){var G__7825 = window;
var G__7825__$1 = (((G__7825 == null))?null:(G__7825["__WORKBENCH_BACKENDS__"]));
if((G__7825__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__7825__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
opencode_unified.session_titles.configured_api_endpoint = (function opencode_unified$session_titles$configured_api_endpoint(){
var cfg = opencode_unified.session_titles.backend_config();
var or__5002__auto__ = new cljs.core.Keyword(null,"opencode-url","opencode-url",462759830).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"opencodeUrl","opencodeUrl",-685951358).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return "http://localhost:8788/api/opencode";
}
}
});
opencode_unified.session_titles.configured_api_key = (function opencode_unified$session_titles$configured_api_key(){
var cfg = opencode_unified.session_titles.backend_config();
var or__5002__auto__ = new cljs.core.Keyword(null,"opencode-api-key","opencode-api-key",-854113335).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"opencodeApiKey","opencodeApiKey",-979926530).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = new cljs.core.Keyword(null,"openplanner-api-key","openplanner-api-key",5324020).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return new cljs.core.Keyword(null,"openplannerApiKey","openplannerApiKey",-548897500).cljs$core$IFn$_invoke$arity$1(cfg);
}
}
}
});
opencode_unified.session_titles.make_client = (function opencode_unified$session_titles$make_client(endpoint){
var api_key = opencode_unified.session_titles.configured_api_key();
var headers = (function (){var G__7842 = cljs.core.PersistentArrayMap.EMPTY;
if((!((api_key == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7842,"Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_key)].join(''));
} else {
return G__7842;
}
})();
return module$src$clojurescript$mocks$opencode_sdk.createOpencodeClient(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109),endpoint,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null)));
});
opencode_unified.session_titles.ensure_client = (function opencode_unified$session_titles$ensure_client(){
var endpoint = opencode_unified.session_titles.configured_api_endpoint();
var clients = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clients),endpoint);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var client = opencode_unified.session_titles.make_client(endpoint);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clients,cljs.core.assoc,endpoint,client);

return client;
}
});
opencode_unified.session_titles.sdk_response__GT_result = (function opencode_unified$session_titles$sdk_response__GT_result(response){
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
opencode_unified.session_titles.response_error = (function opencode_unified$session_titles$response_error(error){
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
opencode_unified.session_titles.list_opencode_sessions = (function opencode_unified$session_titles$list_opencode_sessions(){

var client = opencode_unified.session_titles.ensure_client();
var session_api = client.session;
var list_fn = session_api.list;
if(cljs.core.not(list_fn)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SDK session.list() method not available, using OpenPlanner titles only"], 0));

return Promise.resolve(cljs.core.PersistentArrayMap.EMPTY);
} else {
return list_fn.call(session_api,cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)).then((function (result){
var normalized = opencode_unified.session_titles.sdk_response__GT_result(result);
var temp__5802__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(normalized);
if(cljs.core.truth_(temp__5802__auto__)){
var error = temp__5802__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to list OpenCode sessions:",error], 0));

return cljs.core.PersistentArrayMap.EMPTY;
} else {
var sessions = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"sessions","sessions",-699316392).cljs$core$IFn$_invoke$arity$1(normalized);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(normalized);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (s){
var sid = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"sessionID","sessionID",244679263).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(s);
}
}
})();
var title = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return "Untitled Session";
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sid,title], null);
})),sessions);
}
})).catch((function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error fetching OpenCode sessions:",opencode_unified.session_titles.response_error(error)], 0));

return cljs.core.PersistentArrayMap.EMPTY;
}));
}
});

//# sourceMappingURL=opencode_unified.session_titles.js.map
