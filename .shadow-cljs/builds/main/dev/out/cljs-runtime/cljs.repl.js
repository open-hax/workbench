goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24749){
var map__24750 = p__24749;
var map__24750__$1 = cljs.core.__destructure_map(map__24750);
var m = map__24750__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24752_25111 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24753_25112 = null;
var count__24754_25113 = (0);
var i__24755_25114 = (0);
while(true){
if((i__24755_25114 < count__24754_25113)){
var f_25115 = chunk__24753_25112.cljs$core$IIndexed$_nth$arity$2(null,i__24755_25114);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25115], 0));


var G__25116 = seq__24752_25111;
var G__25117 = chunk__24753_25112;
var G__25118 = count__24754_25113;
var G__25119 = (i__24755_25114 + (1));
seq__24752_25111 = G__25116;
chunk__24753_25112 = G__25117;
count__24754_25113 = G__25118;
i__24755_25114 = G__25119;
continue;
} else {
var temp__5804__auto___25120 = cljs.core.seq(seq__24752_25111);
if(temp__5804__auto___25120){
var seq__24752_25121__$1 = temp__5804__auto___25120;
if(cljs.core.chunked_seq_QMARK_(seq__24752_25121__$1)){
var c__5525__auto___25122 = cljs.core.chunk_first(seq__24752_25121__$1);
var G__25123 = cljs.core.chunk_rest(seq__24752_25121__$1);
var G__25124 = c__5525__auto___25122;
var G__25125 = cljs.core.count(c__5525__auto___25122);
var G__25126 = (0);
seq__24752_25111 = G__25123;
chunk__24753_25112 = G__25124;
count__24754_25113 = G__25125;
i__24755_25114 = G__25126;
continue;
} else {
var f_25127 = cljs.core.first(seq__24752_25121__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25127], 0));


var G__25128 = cljs.core.next(seq__24752_25121__$1);
var G__25129 = null;
var G__25130 = (0);
var G__25131 = (0);
seq__24752_25111 = G__25128;
chunk__24753_25112 = G__25129;
count__24754_25113 = G__25130;
i__24755_25114 = G__25131;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25132 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25132], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_25132)))?cljs.core.second(arglists_25132):arglists_25132)], 0));
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
var seq__24760_25134 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24761_25135 = null;
var count__24762_25136 = (0);
var i__24763_25137 = (0);
while(true){
if((i__24763_25137 < count__24762_25136)){
var vec__24775_25138 = chunk__24761_25135.cljs$core$IIndexed$_nth$arity$2(null,i__24763_25137);
var name_25139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24775_25138,(0),null);
var map__24778_25140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24775_25138,(1),null);
var map__24778_25141__$1 = cljs.core.__destructure_map(map__24778_25140);
var doc_25142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24778_25141__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24778_25141__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25139], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25143], 0));

if(cljs.core.truth_(doc_25142)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25142], 0));
} else {
}


var G__25144 = seq__24760_25134;
var G__25145 = chunk__24761_25135;
var G__25146 = count__24762_25136;
var G__25147 = (i__24763_25137 + (1));
seq__24760_25134 = G__25144;
chunk__24761_25135 = G__25145;
count__24762_25136 = G__25146;
i__24763_25137 = G__25147;
continue;
} else {
var temp__5804__auto___25148 = cljs.core.seq(seq__24760_25134);
if(temp__5804__auto___25148){
var seq__24760_25149__$1 = temp__5804__auto___25148;
if(cljs.core.chunked_seq_QMARK_(seq__24760_25149__$1)){
var c__5525__auto___25150 = cljs.core.chunk_first(seq__24760_25149__$1);
var G__25151 = cljs.core.chunk_rest(seq__24760_25149__$1);
var G__25152 = c__5525__auto___25150;
var G__25153 = cljs.core.count(c__5525__auto___25150);
var G__25154 = (0);
seq__24760_25134 = G__25151;
chunk__24761_25135 = G__25152;
count__24762_25136 = G__25153;
i__24763_25137 = G__25154;
continue;
} else {
var vec__24805_25155 = cljs.core.first(seq__24760_25149__$1);
var name_25156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24805_25155,(0),null);
var map__24808_25157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24805_25155,(1),null);
var map__24808_25158__$1 = cljs.core.__destructure_map(map__24808_25157);
var doc_25159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24808_25158__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24808_25158__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25156], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25160], 0));

if(cljs.core.truth_(doc_25159)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25159], 0));
} else {
}


var G__25161 = cljs.core.next(seq__24760_25149__$1);
var G__25162 = null;
var G__25163 = (0);
var G__25164 = (0);
seq__24760_25134 = G__25161;
chunk__24761_25135 = G__25162;
count__24762_25136 = G__25163;
i__24763_25137 = G__25164;
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

var seq__24810 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24811 = null;
var count__24812 = (0);
var i__24813 = (0);
while(true){
if((i__24813 < count__24812)){
var role = chunk__24811.cljs$core$IIndexed$_nth$arity$2(null,i__24813);
var temp__5804__auto___25166__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25166__$1)){
var spec_25167 = temp__5804__auto___25166__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25167)], 0));
} else {
}


var G__25168 = seq__24810;
var G__25169 = chunk__24811;
var G__25170 = count__24812;
var G__25171 = (i__24813 + (1));
seq__24810 = G__25168;
chunk__24811 = G__25169;
count__24812 = G__25170;
i__24813 = G__25171;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__24810);
if(temp__5804__auto____$1){
var seq__24810__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24810__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__24810__$1);
var G__25172 = cljs.core.chunk_rest(seq__24810__$1);
var G__25173 = c__5525__auto__;
var G__25174 = cljs.core.count(c__5525__auto__);
var G__25175 = (0);
seq__24810 = G__25172;
chunk__24811 = G__25173;
count__24812 = G__25174;
i__24813 = G__25175;
continue;
} else {
var role = cljs.core.first(seq__24810__$1);
var temp__5804__auto___25178__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25178__$2)){
var spec_25181 = temp__5804__auto___25178__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25181)], 0));
} else {
}


var G__25182 = cljs.core.next(seq__24810__$1);
var G__25183 = null;
var G__25184 = (0);
var G__25185 = (0);
seq__24810 = G__25182;
chunk__24811 = G__25183;
count__24812 = G__25184;
i__24813 = G__25185;
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
var map__24910 = datafied_throwable;
var map__24910__$1 = cljs.core.__destructure_map(map__24910);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24910__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24910__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24910__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24911 = cljs.core.last(via);
var map__24911__$1 = cljs.core.__destructure_map(map__24911);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24912 = data;
var map__24912__$1 = cljs.core.__destructure_map(map__24912);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24912__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24912__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24912__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24913 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24913__$1 = cljs.core.__destructure_map(map__24913);
var top_data = map__24913__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24913__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24922 = phase;
var G__24922__$1 = (((G__24922 instanceof cljs.core.Keyword))?G__24922.fqn:null);
switch (G__24922__$1) {
case "read-source":
var map__24936 = data;
var map__24936__$1 = cljs.core.__destructure_map(map__24936);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24936__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24936__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24945 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24945__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24945,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24945);
var G__24945__$2 = (cljs.core.truth_((function (){var fexpr__24954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24954.cljs$core$IFn$_invoke$arity$1 ? fexpr__24954.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24954.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24945__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24945__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24945__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24945__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24957 = top_data;
var G__24957__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24957,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24957);
var G__24957__$2 = (cljs.core.truth_((function (){var fexpr__24963 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24963.cljs$core$IFn$_invoke$arity$1 ? fexpr__24963.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24963.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24957__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24957__$1);
var G__24957__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24957__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24957__$2);
var G__24957__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24957__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24957__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24957__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24957__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24975 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24975,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24975,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24975,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24975,(3),null);
var G__24981 = top_data;
var G__24981__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24981,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24981);
var G__24981__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24981__$1);
var G__24981__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24981__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24981__$2);
var G__24981__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24981__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24981__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24981__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24981__$4;
}

break;
case "execution":
var vec__25000 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25000,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25000,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25000,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25000,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24884_SHARP_){
var or__5002__auto__ = (p1__24884_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__25005 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25005.cljs$core$IFn$_invoke$arity$1 ? fexpr__25005.cljs$core$IFn$_invoke$arity$1(p1__24884_SHARP_) : fexpr__25005.call(null,p1__24884_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__25007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25007__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25007,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25007);
var G__25007__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25007__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25007__$1);
var G__25007__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25007__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25007__$2);
var G__25007__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25007__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25007__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25007__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25007__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24922__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25030){
var map__25034 = p__25030;
var map__25034__$1 = cljs.core.__destructure_map(map__25034);
var triage_data = map__25034__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__25039 = phase;
var G__25039__$1 = (((G__25039 instanceof cljs.core.Keyword))?G__25039.fqn:null);
switch (G__25039__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25045 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25046 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25047 = loc;
var G__25048 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25050_25201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25051_25202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25052_25203 = true;
var _STAR_print_fn_STAR__temp_val__25053_25204 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25052_25203);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25053_25204);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25019_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25019_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25051_25202);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25050_25201);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25045,G__25046,G__25047,G__25048) : format.call(null,G__25045,G__25046,G__25047,G__25048));

break;
case "macroexpansion":
var G__25060 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25061 = cause_type;
var G__25062 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25063 = loc;
var G__25064 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25060,G__25061,G__25062,G__25063,G__25064) : format.call(null,G__25060,G__25061,G__25062,G__25063,G__25064));

break;
case "compile-syntax-check":
var G__25065 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25066 = cause_type;
var G__25067 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25068 = loc;
var G__25069 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25065,G__25066,G__25067,G__25068,G__25069) : format.call(null,G__25065,G__25066,G__25067,G__25068,G__25069));

break;
case "compilation":
var G__25083 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25084 = cause_type;
var G__25085 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25086 = loc;
var G__25087 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25083,G__25084,G__25085,G__25086,G__25087) : format.call(null,G__25083,G__25084,G__25085,G__25086,G__25087));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25088 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25089 = symbol;
var G__25090 = loc;
var G__25091 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25092_25205 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25093_25206 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25094_25207 = true;
var _STAR_print_fn_STAR__temp_val__25095_25208 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25094_25207);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25095_25208);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25025_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25025_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25093_25206);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25092_25205);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25088,G__25089,G__25090,G__25091) : format.call(null,G__25088,G__25089,G__25090,G__25091));
} else {
var G__25097 = "Execution error%s at %s(%s).\n%s\n";
var G__25098 = cause_type;
var G__25099 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25100 = loc;
var G__25101 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25097,G__25098,G__25099,G__25100,G__25101) : format.call(null,G__25097,G__25098,G__25099,G__25100,G__25101));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25039__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
