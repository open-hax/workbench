goog.provide('test_main');
test_main.test_buffers = (function test_main$test_buffers(){
return cljs.test.test_var(test_main.test_buffers.cljs$lang$var);
});
test_main.test_buffers.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["buffers/line-col-to-pos"], 0));

try{try{var values__9973__auto___11520 = (new cljs.core.List(null,(0),(new cljs.core.List(null,opencode_unified.buffers.line_col_to_pos("line1",(0),(0)),null,(1),null)),(2),null));
var result__9974__auto___11521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___11520);
if(cljs.core.truth_(result__9974__auto___11521)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),9,9,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1",(0),(0))),9,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___11520),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),9,9,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1",(0),(0))),9,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___11520),null,(1),null)),(2),null)),null]));
}

}catch (e11508){var t__10010__auto___11522 = e11508;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),9,9,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1",(0),(0))),9,t__10010__auto___11522,null]));
}
try{var values__9973__auto___11524 = (new cljs.core.List(null,(6),(new cljs.core.List(null,opencode_unified.buffers.line_col_to_pos("line1\nline2",(1),(0)),null,(1),null)),(2),null));
var result__9974__auto___11525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto___11524);
if(cljs.core.truth_(result__9974__auto___11525)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),9,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1\nline2",(1),(0))),10,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___11524),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),9,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1\nline2",(1),(0))),10,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto___11524),null,(1),null)),(2),null)),null]));
}

}catch (e11512){var t__10010__auto___11532 = e11512;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),9,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(6),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1\nline2",(1),(0))),10,t__10010__auto___11532,null]));
}
try{var values__9973__auto__ = (new cljs.core.List(null,(7),(new cljs.core.List(null,opencode_unified.buffers.line_col_to_pos("line1\nline2",(1),(1)),null,(1),null)),(2),null));
var result__9974__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9973__auto__);
if(cljs.core.truth_(result__9974__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),9,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(7),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1\nline2",(1),(1))),11,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),9,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(7),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1\nline2",(1),(1))),11,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9973__auto__),null,(1),null)),(2),null)),null]));
}

return result__9974__auto__;
}catch (e11513){var t__10010__auto__ = e11513;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),9,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(7),cljs.core.list(new cljs.core.Symbol("buffers","line-col-to-pos","buffers/line-col-to-pos",-2002188317,null),"line1\nline2",(1),(1))),11,t__10010__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(test_main.test_buffers.cljs$lang$var = new cljs.core.Var(function(){return test_main.test_buffers;},new cljs.core.Symbol("test-main","test-buffers","test-main/test-buffers",-1472129696,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test-main","test-main",970689644,null),new cljs.core.Symbol(null,"test-buffers","test-buffers",1663843148,null),"test_main.cljs",22,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(test_main.test_buffers)?test_main.test_buffers.cljs$lang$test:null)])));
test_main.test_session_titles = (function test_main$test_session_titles(){
return cljs.test.test_var(test_main.test_session_titles.cljs$lang$var);
});
test_main.test_session_titles.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["session-titles response normalization"], 0));

try{var mock_response = ({"data": ({"sessions": [({"id": "sess1", "title": "Test Session 1"}),({"sessionID": "sess2", "name": "Test Session 2"}),({"session-id": "sess3"})]})});
var result_promise = opencode_unified.session_titles.list_opencode_sessions();
try{var values__9973__auto__ = (new cljs.core.List(null,result_promise,null,(1),null));
var result__9974__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__9973__auto__);
if(cljs.core.truth_(result__9974__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),11,23,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"result-promise","result-promise",296954200,null)),23,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__9973__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),11,23,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"result-promise","result-promise",296954200,null)),23,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__9973__auto__),null,(1),null)),(2),null)),null]));
}

return result__9974__auto__;
}catch (e11514){var t__10010__auto__ = e11514;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["test_main.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),11,23,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"result-promise","result-promise",296954200,null)),23,t__10010__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(test_main.test_session_titles.cljs$lang$var = new cljs.core.Var(function(){return test_main.test_session_titles;},new cljs.core.Symbol("test-main","test-session-titles","test-main/test-session-titles",165343052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test-main","test-main",970689644,null),new cljs.core.Symbol(null,"test-session-titles","test-session-titles",1598029136,null),"test_main.cljs",29,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(test_main.test_session_titles)?test_main.test_session_titles.cljs$lang$test:null)])));
test_main._main = (function test_main$_main(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running OpenCode Unified Tests..."], 0));

cljs.test.run_block((function (){var env11518 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary11519 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env11518);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"test-main","test-main",970689644,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block((function (){var env__10043__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10043__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return null;
})], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return test_main.test_buffers;},new cljs.core.Symbol("test-main","test-buffers","test-main/test-buffers",-1472129696,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test-main","test-main",970689644,null),new cljs.core.Symbol(null,"test-buffers","test-buffers",1663843148,null),"test_main.cljs",22,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(test_main.test_buffers)?test_main.test_buffers.cljs$lang$test:null)])),new cljs.core.Var(function(){return test_main.test_session_titles;},new cljs.core.Symbol("test-main","test-session-titles","test-main/test-session-titles",165343052,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"test-main","test-main",970689644,null),new cljs.core.Symbol(null,"test-session-titles","test-session-titles",1598029136,null),"test_main.cljs",29,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(test_main.test_session_titles)?test_main.test_session_titles.cljs$lang$test:null)]))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10043__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
})], null)], 0));
})());
}),(function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"test-main","test-main",970689644,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return summary11519.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_)(summary11519.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
})], null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env11518);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"session-titles-integration-test","session-titles-integration-test",1331880249,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block((function (){var env__10043__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10043__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return null;
})], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return session_titles_integration_test.test_session_titles_integration;},new cljs.core.Symbol("session-titles-integration-test","test-session-titles-integration","session-titles-integration-test/test-session-titles-integration",1187951051,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"session-titles-integration-test","session-titles-integration-test",1331880249,null),new cljs.core.Symbol(null,"test-session-titles-integration","test-session-titles-integration",524466989,null),"session_titles_integration_test.cljs",41,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(session_titles_integration_test.test_session_titles_integration)?session_titles_integration_test.test_session_titles_integration.cljs$lang$test:null)]))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10043__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
})], null)], 0));
})());
}),(function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"session-titles-integration-test","session-titles-integration-test",1331880249,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return summary11519.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_)(summary11519.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
})], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env11518);

cljs.test.do_report(cljs.core.deref(summary11519));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(summary11519),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_();
})], null)], 0));
})());

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tests completed."], 0));
});

//# sourceMappingURL=test_main.js.map
