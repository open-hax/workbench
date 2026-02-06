goog.provide('opencode_unified.openplanner');
opencode_unified.openplanner.now_ms = (function opencode_unified$openplanner$now_ms(){
return Date.now();
});
opencode_unified.openplanner.parse_ts = (function opencode_unified$openplanner$parse_ts(value){
if(typeof value === 'number'){
return value;
} else {
if(typeof value === 'string'){
var parsed = Date.parse(value);
if(cljs.core.truth_(isNaN(parsed))){
return opencode_unified.openplanner.now_ms();
} else {
return parsed;
}
} else {
return opencode_unified.openplanner.now_ms();

}
}
});
opencode_unified.openplanner.relative_time = (function opencode_unified$openplanner$relative_time(timestamp){
var delta_ms = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (opencode_unified.openplanner.now_ms() - timestamp);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var delta_sec = Math.floor((delta_ms / (1000)));
var delta_min = Math.floor((delta_sec / (60)));
var delta_hour = Math.floor((delta_min / (60)));
var delta_day = Math.floor((delta_hour / (24)));
if((delta_min < (1))){
return "just now";
} else {
if((delta_min < (60))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(delta_min)," min",((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(delta_min,(1)))?"s":null)," ago"].join('');
} else {
if((delta_hour < (24))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(delta_hour)," hour",((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(delta_hour,(1)))?"s":null)," ago"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(delta_day)," day",((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(delta_day,(1)))?"s":null)," ago"].join('');

}
}
}
});
opencode_unified.openplanner.classify_event_type = (function opencode_unified$openplanner$classify_event_type(kind,title,snippet){
var haystack = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(snippet)].join(''));
if(((clojure.string.includes_QMARK_(haystack,"error")) || (((clojure.string.includes_QMARK_(haystack,"fail")) || (clojure.string.includes_QMARK_(haystack,"exception")))))){
return new cljs.core.Keyword(null,"error","error",-978969032);
} else {
return new cljs.core.Keyword(null,"info","info",-317069002);
}
});
opencode_unified.openplanner.runtime_config = (function opencode_unified$openplanner$runtime_config(){
var cfg = (function (){var or__5002__auto__ = (function (){var G__9526 = window;
var G__9526__$1 = (((G__9526 == null))?null:(G__9526["__WORKBENCH_BACKENDS__"]));
if((G__9526__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__9526__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var endpoint = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"openplanner-url","openplanner-url",-1804248247).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"openplannerUrl","openplannerUrl",-1086696873).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return "http://localhost:8788/api/openplanner";
}
}
})();
var api_key = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"openplanner-api-key","openplanner-api-key",5324020).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"openplannerApiKey","openplannerApiKey",-548897500).cljs$core$IFn$_invoke$arity$1(cfg);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"endpoint","endpoint",447890044),endpoint,new cljs.core.Keyword(null,"api-key","api-key",1037904031),api_key], null);
});
opencode_unified.openplanner.request_json = (function opencode_unified$openplanner$request_json(var_args){
var G__9534 = arguments.length;
switch (G__9534) {
case 2:
return opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$2 = (function (method,path){
return opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$3(method,path,null);
}));

(opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$3 = (function (method,path,payload){
var map__9536 = opencode_unified.openplanner.runtime_config();
var map__9536__$1 = cljs.core.__destructure_map(map__9536);
var endpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9536__$1,new cljs.core.Keyword(null,"endpoint","endpoint",447890044));
var api_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9536__$1,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var headers = (function (){var G__9538 = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null);
if((!((api_key == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9538,"Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_key)].join(''));
} else {
return G__9538;
}
})();
var body = (cljs.core.truth_(payload)?JSON.stringify(cljs.core.clj__GT_js(payload)):null);
return fetch([cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"body","body",-2049205669),body], null))).then((function (response){
if(cljs.core.truth_(response.ok)){
return response.json();
} else {
return response.text().then((function (txt){
throw (new Error(["OpenPlanner request failed (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response.status),"): ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt)].join('')));
}));
}
})).then((function (p1__9529_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__9529_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
}));

(opencode_unified.openplanner.request_json.cljs$lang$maxFixedArity = 3);

opencode_unified.openplanner.load_sessions_activity = (function opencode_unified$openplanner$load_sessions_activity(){
return opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$2("GET","/v1/sessions").then((function (result){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(result);
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
var ts = opencode_unified.openplanner.parse_ts(new cljs.core.Keyword(null,"last_ts","last_ts",1415613512).cljs$core$IFn$_invoke$arity$1(row));
var session_name = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "unspecified";
}
})();
var project_name = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "default";
}
})();
var event_count = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"event_count","event_count",-1889732422).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"session","session",1008279103)],[opencode_unified.openplanner.relative_time(ts),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"openplanner","openplanner",-175854128),["Session ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_name)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_count)," events)"].join(''),project_name,["session-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_name),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),"session.summary",ts,session_name]);
}),rows));
}));
});
opencode_unified.openplanner.search_activity = (function opencode_unified$openplanner$search_activity(query){
return opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$3("POST","/v1/search/fts",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),query,new cljs.core.Keyword(null,"limit","limit",-1355822363),(60)], null)).then((function (result){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(result);
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
var ts = opencode_unified.openplanner.parse_ts(new cljs.core.Keyword(null,"ts","ts",1617209904).cljs$core$IFn$_invoke$arity$1(row));
var title = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"snippet","snippet",953581994).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return "Search result";
}
}
})();
var snippet = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"snippet","snippet",953581994).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})();
var kind = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"session","session",1008279103)],[opencode_unified.openplanner.relative_time(ts),snippet,opencode_unified.openplanner.classify_event_type(kind,title,snippet),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "openplanner";
}
})(),title,new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(row),["event-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return idx;
}
})())].join(''),kind,ts,new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(row)]);
}),rows));
}));
});
opencode_unified.openplanner.create_chatgpt_import_job = (function opencode_unified$openplanner$create_chatgpt_import_job(file_path){
return opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$3("POST","/v1/jobs/import/chatgpt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filePath","filePath",688035028),file_path], null));
});
opencode_unified.openplanner.fetch_job = (function opencode_unified$openplanner$fetch_job(job_id){
return opencode_unified.openplanner.request_json.cljs$core$IFn$_invoke$arity$2("GET",["/v1/jobs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(job_id)].join(''));
});

//# sourceMappingURL=opencode_unified.openplanner.js.map
