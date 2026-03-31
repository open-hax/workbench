goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__20542__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__20542__auto__["add"]).call(o__20542__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__20542__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__20542__auto__["delete"]).call(o__20542__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__20542__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__20542__auto__["has"]).call(o__20542__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__32605 = data;
var target__20579__auto__ = G__32605;
if(cljs.core.truth_(target__20579__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32605)].join(''),"\n","target__20579__auto__"].join('')));
}

(target__20579__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__32605;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_32733 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_32733);
} else {
var seq__32611_32738 = cljs.core.seq(json_ml);
var chunk__32612_32739 = null;
var count__32613_32740 = (0);
var i__32614_32741 = (0);
while(true){
if((i__32614_32741 < count__32613_32740)){
var item_32746 = chunk__32612_32739.cljs$core$IIndexed$_nth$arity$2(null,i__32614_32741);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_32746,new_depth_budget_32733) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32746,new_depth_budget_32733));


var G__32747 = seq__32611_32738;
var G__32748 = chunk__32612_32739;
var G__32749 = count__32613_32740;
var G__32750 = (i__32614_32741 + (1));
seq__32611_32738 = G__32747;
chunk__32612_32739 = G__32748;
count__32613_32740 = G__32749;
i__32614_32741 = G__32750;
continue;
} else {
var temp__5804__auto___32751 = cljs.core.seq(seq__32611_32738);
if(temp__5804__auto___32751){
var seq__32611_32752__$1 = temp__5804__auto___32751;
if(cljs.core.chunked_seq_QMARK_(seq__32611_32752__$1)){
var c__5525__auto___32753 = cljs.core.chunk_first(seq__32611_32752__$1);
var G__32754 = cljs.core.chunk_rest(seq__32611_32752__$1);
var G__32755 = c__5525__auto___32753;
var G__32756 = cljs.core.count(c__5525__auto___32753);
var G__32757 = (0);
seq__32611_32738 = G__32754;
chunk__32612_32739 = G__32755;
count__32613_32740 = G__32756;
i__32614_32741 = G__32757;
continue;
} else {
var item_32758 = cljs.core.first(seq__32611_32752__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_32758,new_depth_budget_32733) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32758,new_depth_budget_32733));


var G__32759 = cljs.core.next(seq__32611_32752__$1);
var G__32760 = null;
var G__32761 = (0);
var G__32762 = (0);
seq__32611_32738 = G__32759;
chunk__32612_32739 = G__32760;
count__32613_32740 = G__32761;
i__32614_32741 = G__32762;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5002__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
