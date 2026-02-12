goog.provide('test_openplanner');
test_openplanner.test_runtime_config = (function test_openplanner$test_runtime_config(){
return cljs.test.test_var(test_openplanner.test_runtime_config.cljs$lang$var);
});
test_openplanner.test_runtime_config.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["defaults"], 0));

try{var orig_window_18726 = (((typeof window !== 'undefined'))?window:null);
(window = ({}));

try{var config_18727 = opencode_unified.openplanner.runtime_config();
try{var values__9973__auto___18728 = (new cljs.core.List(null,"http://localhost:8788/api/openplanner",(new cljs.core.List(null,new cljs.core.Keyword(null,"endpoint","endpoint",447890044).cljs$core$IFn$_invoke$arity$1(config_18727),null,(1),null)),(2),null));
var result__9974__auto___18729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18728);
if(cljs.core.truth_(result__9974__auto___18729)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",77,new cljs.core.Keyword(null,"pass","pass",1574159993),15,12,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"http://localhost:8788/api/openplanner",cljs.core.list(new cljs.core.Keyword(null,"endpoint","endpoint",447890044),new cljs.core.Symbol(null,"config","config",-1659574354,null))),12,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18728),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",77,new cljs.core.Keyword(null,"fail","fail",1706214930),15,12,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"http://localhost:8788/api/openplanner",cljs.core.list(new cljs.core.Keyword(null,"endpoint","endpoint",447890044),new cljs.core.Symbol(null,"config","config",-1659574354,null))),12,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18728),null,(1),null)),(2),null)),null]));
}

}catch (e18701){var t__10010__auto___18730 = e18701;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",77,new cljs.core.Keyword(null,"error","error",-978969032),15,12,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"http://localhost:8788/api/openplanner",cljs.core.list(new cljs.core.Keyword(null,"endpoint","endpoint",447890044),new cljs.core.Symbol(null,"config","config",-1659574354,null))),12,t__10010__auto___18730,null]));
}
try{var values__9973__auto___18731 = (new cljs.core.List(null,new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(config_18727),null,(1),null));
var result__9974__auto___18732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__9973__auto___18731);
if(cljs.core.truth_(result__9974__auto___18732)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),15,13,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Symbol(null,"config","config",-1659574354,null))),13,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9973__auto___18731),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),15,13,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Symbol(null,"config","config",-1659574354,null))),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9973__auto___18731),null,(1),null)),(2),null)),null]));
}

}catch (e18702){var t__10010__auto___18733 = e18702;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),15,13,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Symbol(null,"config","config",-1659574354,null))),13,t__10010__auto___18733,null]));
}}finally {(window = orig_window_18726);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["from window config"], 0));

try{var orig_window = (((typeof window !== 'undefined'))?window:null);
(window = ({"__WORKBENCH_BACKENDS__": ({"openplannerUrl": "http://test-api", "openplannerApiKey": "secret"})}));

try{var config = opencode_unified.openplanner.runtime_config();
try{var values__9973__auto___18734 = (new cljs.core.List(null,"http://test-api",(new cljs.core.List(null,new cljs.core.Keyword(null,"endpoint","endpoint",447890044).cljs$core$IFn$_invoke$arity$1(config),null,(1),null)),(2),null));
var result__9974__auto___18735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18734);
if(cljs.core.truth_(result__9974__auto___18735)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),15,23,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"http://test-api",cljs.core.list(new cljs.core.Keyword(null,"endpoint","endpoint",447890044),new cljs.core.Symbol(null,"config","config",-1659574354,null))),23,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18734),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),15,23,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"http://test-api",cljs.core.list(new cljs.core.Keyword(null,"endpoint","endpoint",447890044),new cljs.core.Symbol(null,"config","config",-1659574354,null))),23,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18734),null,(1),null)),(2),null)),null]));
}

}catch (e18703){var t__10010__auto___18736 = e18703;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),15,23,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"http://test-api",cljs.core.list(new cljs.core.Keyword(null,"endpoint","endpoint",447890044),new cljs.core.Symbol(null,"config","config",-1659574354,null))),23,t__10010__auto___18736,null]));
}
try{var values__9973__auto__ = (new cljs.core.List(null,"secret",(new cljs.core.List(null,new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(config),null,(1),null)),(2),null));
var result__9974__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto__);
if(cljs.core.truth_(result__9974__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),15,24,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"secret",cljs.core.list(new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Symbol(null,"config","config",-1659574354,null))),24,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),15,24,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"secret",cljs.core.list(new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Symbol(null,"config","config",-1659574354,null))),24,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto__),null,(1),null)),(2),null)),null]));
}

return result__9974__auto__;
}catch (e18704){var t__10010__auto__ = e18704;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),15,24,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"secret",cljs.core.list(new cljs.core.Keyword(null,"api-key","api-key",1037904031),new cljs.core.Symbol(null,"config","config",-1659574354,null))),24,t__10010__auto__,null]));
}}finally {(window = orig_window);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(test_openplanner.test_runtime_config.cljs$lang$var = new cljs.core.Var(function(){return test_openplanner.test_runtime_config;},new cljs.core.Symbol("test-openplanner","test-runtime-config","test-openplanner/test-runtime-config",-2092140095,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test-openplanner","test-openplanner",1704165760,null),new cljs.core.Symbol(null,"test-runtime-config","test-runtime-config",-2050197428,null),"test_openplanner.cljs",29,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(test_openplanner.test_runtime_config)?test_openplanner.test_runtime_config.cljs$lang$test:null)])));
test_openplanner.mock_fetch = (function test_openplanner$mock_fetch(response_data){
return (function (url,options){
return Promise.resolve(({"ok": true, "json": (function (){
return Promise.resolve(cljs.core.clj__GT_js(response_data));
})}));
});
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
test_openplanner.t_test_openplanner18705 = (function (meta18706){
this.meta18706 = meta18706;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(test_openplanner.t_test_openplanner18705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18707,meta18706__$1){
var self__ = this;
var _18707__$1 = this;
return (new test_openplanner.t_test_openplanner18705(meta18706__$1));
}));

(test_openplanner.t_test_openplanner18705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18707){
var self__ = this;
var _18707__$1 = this;
return self__.meta18706;
}));

(test_openplanner.t_test_openplanner18705.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(test_openplanner.t_test_openplanner18705.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__18709 = (arguments.length - (1));
switch (G__18709) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(test_openplanner.t_test_openplanner18705.prototype.apply = (function (self__,args18708){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18708)));
}));

(test_openplanner.t_test_openplanner18705.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10021__auto__ = this;
var orig_fetch = fetch;
var mock_response = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last_ts","last_ts",1415613512),(1600000000000),new cljs.core.Keyword(null,"session","session",1008279103),"test-session-1",new cljs.core.Keyword(null,"event_count","event_count",-1889732422),(5)], null)], null)], null);
(fetch = test_openplanner.mock_fetch(mock_response));

return opencode_unified.openplanner.load_sessions_activity().then((function (results){
try{var values__9973__auto___18738 = (new cljs.core.List(null,(1),(new cljs.core.List(null,cljs.core.count(results),null,(1),null)),(2),null));
var result__9974__auto___18739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18738);
if(cljs.core.truth_(result__9974__auto___18739)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),26,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"results","results",506361414,null))),46,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18738),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),26,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"results","results",506361414,null))),46,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18738),null,(1),null)),(2),null)),null]));
}

}catch (e18710){var t__10010__auto___18740 = e18710;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),26,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"results","results",506361414,null))),46,t__10010__auto___18740,null]));
}
var item_18741 = cljs.core.first(results);
try{var values__9973__auto___18742 = (new cljs.core.List(null,"First Test Session",(new cljs.core.List(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item_18741),null,(1),null)),(2),null));
var result__9974__auto___18743 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18742);
if(cljs.core.truth_(result__9974__auto___18743)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",66,new cljs.core.Keyword(null,"pass","pass",1574159993),28,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"First Test Session",cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"item","item",1889905329,null))),48,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18742),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",66,new cljs.core.Keyword(null,"fail","fail",1706214930),28,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"First Test Session",cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"item","item",1889905329,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18742),null,(1),null)),(2),null)),null]));
}

}catch (e18711){var t__10010__auto___18744 = e18711;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",66,new cljs.core.Keyword(null,"error","error",-978969032),28,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"First Test Session",cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"item","item",1889905329,null))),48,t__10010__auto___18744,null]));
}
try{var values__9973__auto___18745 = (new cljs.core.List(null,"test-session-1",(new cljs.core.List(null,new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(item_18741),null,(1),null)),(2),null));
var result__9974__auto___18746 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18745);
if(cljs.core.truth_(result__9974__auto___18746)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",67,new cljs.core.Keyword(null,"pass","pass",1574159993),28,49,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test-session-1",cljs.core.list(new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Symbol(null,"item","item",1889905329,null))),49,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18745),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",67,new cljs.core.Keyword(null,"fail","fail",1706214930),28,49,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test-session-1",cljs.core.list(new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Symbol(null,"item","item",1889905329,null))),49,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18745),null,(1),null)),(2),null)),null]));
}

}catch (e18712){var t__10010__auto___18747 = e18712;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",67,new cljs.core.Keyword(null,"error","error",-978969032),28,49,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test-session-1",cljs.core.list(new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Symbol(null,"item","item",1889905329,null))),49,t__10010__auto___18747,null]));
}
try{var values__9973__auto___18748 = (new cljs.core.List(null,"5 events",(new cljs.core.List(null,new cljs.core.Keyword(null,"snippet","snippet",953581994).cljs$core$IFn$_invoke$arity$1(item_18741),null,(1),null)),(2),null));
var result__9974__auto___18749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18748);
if(cljs.core.truth_(result__9974__auto___18749)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",58,new cljs.core.Keyword(null,"pass","pass",1574159993),28,50,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"5 events",cljs.core.list(new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Symbol(null,"item","item",1889905329,null))),50,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18748),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",58,new cljs.core.Keyword(null,"fail","fail",1706214930),28,50,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"5 events",cljs.core.list(new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Symbol(null,"item","item",1889905329,null))),50,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18748),null,(1),null)),(2),null)),null]));
}

}catch (e18713){var t__10010__auto___18750 = e18713;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",58,new cljs.core.Keyword(null,"error","error",-978969032),28,50,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"5 events",cljs.core.list(new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Symbol(null,"item","item",1889905329,null))),50,t__10010__auto___18750,null]));
}
(fetch = orig_fetch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
})).catch((function (err){
try{var values__9973__auto___18751 = (new cljs.core.List(null,err,null,(1),null));
var result__9974__auto___18752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__9973__auto___18751);
if(cljs.core.truth_(result__9974__auto___18752)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),27,54,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),54,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9973__auto___18751),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),27,54,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),54,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9973__auto___18751),null,(1),null)),(2),null)),null]));
}

}catch (e18714){var t__10010__auto___18755 = e18714;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),27,54,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),54,t__10010__auto___18755,null]));
}
(fetch = orig_fetch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(test_openplanner.t_test_openplanner18705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18706","meta18706",1738131488,null)], null);
}));

(test_openplanner.t_test_openplanner18705.cljs$lang$type = true);

(test_openplanner.t_test_openplanner18705.cljs$lang$ctorStr = "test-openplanner/t_test_openplanner18705");

(test_openplanner.t_test_openplanner18705.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"test-openplanner/t_test_openplanner18705");
}));

/**
 * Positional factory function for test-openplanner/t_test_openplanner18705.
 */
test_openplanner.__GT_t_test_openplanner18705 = (function test_openplanner$__GT_t_test_openplanner18705(meta18706){
return (new test_openplanner.t_test_openplanner18705(meta18706));
});


test_openplanner.test_load_sessions_activity = (function test_openplanner$test_load_sessions_activity(){
return cljs.test.test_var(test_openplanner.test_load_sessions_activity.cljs$lang$var);
});
test_openplanner.test_load_sessions_activity.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetches and merges titles"], 0));

try{return (new test_openplanner.t_test_openplanner18705(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(test_openplanner.test_load_sessions_activity.cljs$lang$var = new cljs.core.Var(function(){return test_openplanner.test_load_sessions_activity;},new cljs.core.Symbol("test-openplanner","test-load-sessions-activity","test-openplanner/test-load-sessions-activity",-289544290,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test-openplanner","test-openplanner",1704165760,null),new cljs.core.Symbol(null,"test-load-sessions-activity","test-load-sessions-activity",-331487187,null),"test_openplanner.cljs",37,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(test_openplanner.test_load_sessions_activity)?test_openplanner.test_load_sessions_activity.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
test_openplanner.t_test_openplanner18715 = (function (meta18716){
this.meta18716 = meta18716;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(test_openplanner.t_test_openplanner18715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18717,meta18716__$1){
var self__ = this;
var _18717__$1 = this;
return (new test_openplanner.t_test_openplanner18715(meta18716__$1));
}));

(test_openplanner.t_test_openplanner18715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18717){
var self__ = this;
var _18717__$1 = this;
return self__.meta18716;
}));

(test_openplanner.t_test_openplanner18715.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(test_openplanner.t_test_openplanner18715.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__18719 = (arguments.length - (1));
switch (G__18719) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(test_openplanner.t_test_openplanner18715.prototype.apply = (function (self__,args18718){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18718)));
}));

(test_openplanner.t_test_openplanner18715.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10021__auto__ = this;
var orig_fetch = fetch;
var mock_response = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),(1600000000000),new cljs.core.Keyword(null,"message","message",-406056002),"found it",new cljs.core.Keyword(null,"kind","kind",-717265803),"test",new cljs.core.Keyword(null,"source","source",-433931539),"search"], null)], null)], null);
(fetch = test_openplanner.mock_fetch(mock_response));

return opencode_unified.openplanner.search_activity("test-query").then((function (results){
try{var values__9973__auto___18757 = (new cljs.core.List(null,(1),(new cljs.core.List(null,cljs.core.count(results),null,(1),null)),(2),null));
var result__9974__auto___18758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18757);
if(cljs.core.truth_(result__9974__auto___18758)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),26,71,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"results","results",506361414,null))),71,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18757),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),26,71,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"results","results",506361414,null))),71,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18757),null,(1),null)),(2),null)),null]));
}

}catch (e18720){var t__10010__auto___18759 = e18720;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),26,71,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"results","results",506361414,null))),71,t__10010__auto___18759,null]));
}
var item_18760 = cljs.core.first(results);
try{var values__9973__auto___18761 = (new cljs.core.List(null,"found it",(new cljs.core.List(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item_18760),null,(1),null)),(2),null));
var result__9974__auto___18762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18761);
if(cljs.core.truth_(result__9974__auto___18762)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",56,new cljs.core.Keyword(null,"pass","pass",1574159993),28,73,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"found it",cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"item","item",1889905329,null))),73,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18761),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",56,new cljs.core.Keyword(null,"fail","fail",1706214930),28,73,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"found it",cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"item","item",1889905329,null))),73,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18761),null,(1),null)),(2),null)),null]));
}

}catch (e18721){var t__10010__auto___18763 = e18721;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",56,new cljs.core.Keyword(null,"error","error",-978969032),28,73,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"found it",cljs.core.list(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"item","item",1889905329,null))),73,t__10010__auto___18763,null]));
}
try{var values__9973__auto___18764 = (new cljs.core.List(null,"test",(new cljs.core.List(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item_18760),null,(1),null)),(2),null));
var result__9974__auto___18765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___18764);
if(cljs.core.truth_(result__9974__auto___18765)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),28,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"item","item",1889905329,null))),74,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18764),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),28,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"item","item",1889905329,null))),74,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___18764),null,(1),null)),(2),null)),null]));
}

}catch (e18722){var t__10010__auto___18766 = e18722;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),28,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"test",cljs.core.list(new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"item","item",1889905329,null))),74,t__10010__auto___18766,null]));
}
(fetch = orig_fetch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
})).catch((function (err){
try{var values__9973__auto___18767 = (new cljs.core.List(null,err,null,(1),null));
var result__9974__auto___18768 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__9973__auto___18767);
if(cljs.core.truth_(result__9974__auto___18768)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),27,78,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),78,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9973__auto___18767),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),27,78,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),78,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__9973__auto___18767),null,(1),null)),(2),null)),null]));
}

}catch (e18723){var t__10010__auto___18769 = e18723;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_openplanner.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),27,78,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),78,t__10010__auto___18769,null]));
}
(fetch = orig_fetch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(test_openplanner.t_test_openplanner18715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18716","meta18716",1427782141,null)], null);
}));

(test_openplanner.t_test_openplanner18715.cljs$lang$type = true);

(test_openplanner.t_test_openplanner18715.cljs$lang$ctorStr = "test-openplanner/t_test_openplanner18715");

(test_openplanner.t_test_openplanner18715.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"test-openplanner/t_test_openplanner18715");
}));

/**
 * Positional factory function for test-openplanner/t_test_openplanner18715.
 */
test_openplanner.__GT_t_test_openplanner18715 = (function test_openplanner$__GT_t_test_openplanner18715(meta18716){
return (new test_openplanner.t_test_openplanner18715(meta18716));
});


test_openplanner.test_search_activity = (function test_openplanner$test_search_activity(){
return cljs.test.test_var(test_openplanner.test_search_activity.cljs$lang$var);
});
test_openplanner.test_search_activity.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["search query"], 0));

try{return (new test_openplanner.t_test_openplanner18715(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(test_openplanner.test_search_activity.cljs$lang$var = new cljs.core.Var(function(){return test_openplanner.test_search_activity;},new cljs.core.Symbol("test-openplanner","test-search-activity","test-openplanner/test-search-activity",-1362436767,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test-openplanner","test-openplanner",1704165760,null),new cljs.core.Symbol(null,"test-search-activity","test-search-activity",-1404379924,null),"test_openplanner.cljs",30,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(test_openplanner.test_search_activity)?test_openplanner.test_search_activity.cljs$lang$test:null)])));

//# sourceMappingURL=test_openplanner.js.map
