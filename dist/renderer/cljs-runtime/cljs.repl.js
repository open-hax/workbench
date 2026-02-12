goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34785){
var map__34786 = p__34785;
var map__34786__$1 = cljs.core.__destructure_map(map__34786);
var m = map__34786__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34786__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34794_35108 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34795_35109 = null;
var count__34796_35110 = (0);
var i__34797_35111 = (0);
while(true){
if((i__34797_35111 < count__34796_35110)){
var f_35112 = chunk__34795_35109.cljs$core$IIndexed$_nth$arity$2(null,i__34797_35111);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35112], 0));


var G__35113 = seq__34794_35108;
var G__35114 = chunk__34795_35109;
var G__35115 = count__34796_35110;
var G__35116 = (i__34797_35111 + (1));
seq__34794_35108 = G__35113;
chunk__34795_35109 = G__35114;
count__34796_35110 = G__35115;
i__34797_35111 = G__35116;
continue;
} else {
var temp__5804__auto___35117 = cljs.core.seq(seq__34794_35108);
if(temp__5804__auto___35117){
var seq__34794_35118__$1 = temp__5804__auto___35117;
if(cljs.core.chunked_seq_QMARK_(seq__34794_35118__$1)){
var c__5525__auto___35119 = cljs.core.chunk_first(seq__34794_35118__$1);
var G__35120 = cljs.core.chunk_rest(seq__34794_35118__$1);
var G__35121 = c__5525__auto___35119;
var G__35122 = cljs.core.count(c__5525__auto___35119);
var G__35123 = (0);
seq__34794_35108 = G__35120;
chunk__34795_35109 = G__35121;
count__34796_35110 = G__35122;
i__34797_35111 = G__35123;
continue;
} else {
var f_35124 = cljs.core.first(seq__34794_35118__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35124], 0));


var G__35125 = cljs.core.next(seq__34794_35118__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__34794_35108 = G__35125;
chunk__34795_35109 = G__35126;
count__34796_35110 = G__35127;
i__34797_35111 = G__35128;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35129 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35129], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35129)))?cljs.core.second(arglists_35129):arglists_35129)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34811_35130 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34812_35131 = null;
var count__34813_35132 = (0);
var i__34814_35133 = (0);
while(true){
if((i__34814_35133 < count__34813_35132)){
var vec__34829_35135 = chunk__34812_35131.cljs$core$IIndexed$_nth$arity$2(null,i__34814_35133);
var name_35136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829_35135,(0),null);
var map__34832_35137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829_35135,(1),null);
var map__34832_35138__$1 = cljs.core.__destructure_map(map__34832_35137);
var doc_35139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832_35138__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832_35138__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35136], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35140], 0));

if(cljs.core.truth_(doc_35139)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35139], 0));
} else {
}


var G__35142 = seq__34811_35130;
var G__35143 = chunk__34812_35131;
var G__35144 = count__34813_35132;
var G__35145 = (i__34814_35133 + (1));
seq__34811_35130 = G__35142;
chunk__34812_35131 = G__35143;
count__34813_35132 = G__35144;
i__34814_35133 = G__35145;
continue;
} else {
var temp__5804__auto___35146 = cljs.core.seq(seq__34811_35130);
if(temp__5804__auto___35146){
var seq__34811_35147__$1 = temp__5804__auto___35146;
if(cljs.core.chunked_seq_QMARK_(seq__34811_35147__$1)){
var c__5525__auto___35148 = cljs.core.chunk_first(seq__34811_35147__$1);
var G__35149 = cljs.core.chunk_rest(seq__34811_35147__$1);
var G__35150 = c__5525__auto___35148;
var G__35151 = cljs.core.count(c__5525__auto___35148);
var G__35152 = (0);
seq__34811_35130 = G__35149;
chunk__34812_35131 = G__35150;
count__34813_35132 = G__35151;
i__34814_35133 = G__35152;
continue;
} else {
var vec__34833_35153 = cljs.core.first(seq__34811_35147__$1);
var name_35154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34833_35153,(0),null);
var map__34836_35156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34833_35153,(1),null);
var map__34836_35157__$1 = cljs.core.__destructure_map(map__34836_35156);
var doc_35158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34836_35157__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34836_35157__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35154], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35159], 0));

if(cljs.core.truth_(doc_35158)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35158], 0));
} else {
}


var G__35161 = cljs.core.next(seq__34811_35147__$1);
var G__35162 = null;
var G__35163 = (0);
var G__35164 = (0);
seq__34811_35130 = G__35161;
chunk__34812_35131 = G__35162;
count__34813_35132 = G__35163;
i__34814_35133 = G__35164;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34841 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34842 = null;
var count__34843 = (0);
var i__34844 = (0);
while(true){
if((i__34844 < count__34843)){
var role = chunk__34842.cljs$core$IIndexed$_nth$arity$2(null,i__34844);
var temp__5804__auto___35165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35165__$1)){
var spec_35167 = temp__5804__auto___35165__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35167)], 0));
} else {
}


var G__35168 = seq__34841;
var G__35170 = chunk__34842;
var G__35171 = count__34843;
var G__35172 = (i__34844 + (1));
seq__34841 = G__35168;
chunk__34842 = G__35170;
count__34843 = G__35171;
i__34844 = G__35172;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__34841);
if(temp__5804__auto____$1){
var seq__34841__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34841__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34841__$1);
var G__35174 = cljs.core.chunk_rest(seq__34841__$1);
var G__35175 = c__5525__auto__;
var G__35176 = cljs.core.count(c__5525__auto__);
var G__35177 = (0);
seq__34841 = G__35174;
chunk__34842 = G__35175;
count__34843 = G__35176;
i__34844 = G__35177;
continue;
} else {
var role = cljs.core.first(seq__34841__$1);
var temp__5804__auto___35178__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35178__$2)){
var spec_35179 = temp__5804__auto___35178__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35179)], 0));
} else {
}


var G__35180 = cljs.core.next(seq__34841__$1);
var G__35181 = null;
var G__35182 = (0);
var G__35183 = (0);
seq__34841 = G__35180;
chunk__34842 = G__35181;
count__34843 = G__35182;
i__34844 = G__35183;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34869 = datafied_throwable;
var map__34869__$1 = cljs.core.__destructure_map(map__34869);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34869__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34869__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34869__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34870 = cljs.core.last(via);
var map__34870__$1 = cljs.core.__destructure_map(map__34870);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34870__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34870__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34870__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34871 = data;
var map__34871__$1 = cljs.core.__destructure_map(map__34871);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34871__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34871__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34871__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34872 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34872__$1 = cljs.core.__destructure_map(map__34872);
var top_data = map__34872__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34872__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34880 = phase;
var G__34880__$1 = (((G__34880 instanceof cljs.core.Keyword))?G__34880.fqn:null);
switch (G__34880__$1) {
case "read-source":
var map__34895 = data;
var map__34895__$1 = cljs.core.__destructure_map(map__34895);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34895__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34900 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34900__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34900,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34900);
var G__34900__$2 = (cljs.core.truth_((function (){var fexpr__34921 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34921.cljs$core$IFn$_invoke$arity$1 ? fexpr__34921.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34921.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34900__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34900__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34900__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34922 = top_data;
var G__34922__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34922,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34922);
var G__34922__$2 = (cljs.core.truth_((function (){var fexpr__34930 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34930.cljs$core$IFn$_invoke$arity$1 ? fexpr__34930.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34930.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34922__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34922__$1);
var G__34922__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34922__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34922__$2);
var G__34922__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34922__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34922__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34922__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34922__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34947 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947,(3),null);
var G__34952 = top_data;
var G__34952__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34952,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34952);
var G__34952__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34952__$1);
var G__34952__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34952__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34952__$2);
var G__34952__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34952__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34952__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34952__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34952__$4;
}

break;
case "execution":
var vec__34986 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34851_SHARP_){
var or__5002__auto__ = (p1__34851_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__34989 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34989.cljs$core$IFn$_invoke$arity$1 ? fexpr__34989.cljs$core$IFn$_invoke$arity$1(p1__34851_SHARP_) : fexpr__34989.call(null,p1__34851_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__34991 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34991__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34991,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34991);
var G__34991__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34991__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34991__$1);
var G__34991__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34991__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34991__$2);
var G__34991__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34991__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34991__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34991__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34991__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34880__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35007){
var map__35008 = p__35007;
var map__35008__$1 = cljs.core.__destructure_map(map__35008);
var triage_data = map__35008__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35008__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35017 = phase;
var G__35017__$1 = (((G__35017 instanceof cljs.core.Keyword))?G__35017.fqn:null);
switch (G__35017__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35020 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35021 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35022 = loc;
var G__35023 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35026_35213 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35027_35214 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35028_35215 = true;
var _STAR_print_fn_STAR__temp_val__35029_35216 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35028_35215);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35029_35216);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35001_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35001_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35027_35214);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35026_35213);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35020,G__35021,G__35022,G__35023) : format.call(null,G__35020,G__35021,G__35022,G__35023));

break;
case "macroexpansion":
var G__35031 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35032 = cause_type;
var G__35033 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35034 = loc;
var G__35035 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35031,G__35032,G__35033,G__35034,G__35035) : format.call(null,G__35031,G__35032,G__35033,G__35034,G__35035));

break;
case "compile-syntax-check":
var G__35037 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35038 = cause_type;
var G__35039 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35040 = loc;
var G__35041 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35037,G__35038,G__35039,G__35040,G__35041) : format.call(null,G__35037,G__35038,G__35039,G__35040,G__35041));

break;
case "compilation":
var G__35047 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35048 = cause_type;
var G__35049 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35050 = loc;
var G__35051 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35047,G__35048,G__35049,G__35050,G__35051) : format.call(null,G__35047,G__35048,G__35049,G__35050,G__35051));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35054 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35055 = symbol;
var G__35056 = loc;
var G__35057 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35060_35222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35061_35223 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35062_35224 = true;
var _STAR_print_fn_STAR__temp_val__35063_35225 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35062_35224);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35063_35225);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35003_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35003_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35061_35223);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35060_35222);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35054,G__35055,G__35056,G__35057) : format.call(null,G__35054,G__35055,G__35056,G__35057));
} else {
var G__35064 = "Execution error%s at %s(%s).\n%s\n";
var G__35065 = cause_type;
var G__35066 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35067 = loc;
var G__35068 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35064,G__35065,G__35066,G__35067,G__35068) : format.call(null,G__35064,G__35065,G__35066,G__35067,G__35068));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35017__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
