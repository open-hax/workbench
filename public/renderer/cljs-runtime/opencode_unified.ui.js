goog.provide('opencode_unified.ui');
opencode_unified.ui.KEY_ROUTE = "workbench.route";
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.ui !== 'undefined') && (typeof opencode_unified.ui.current_route !== 'undefined')){
} else {
opencode_unified.ui.current_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(opencode_unified.persistence.load_state(opencode_unified.ui.KEY_ROUTE,"#/"));
}
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.ui !== 'undefined') && (typeof opencode_unified.ui.route_listener_installed_QMARK_ !== 'undefined')){
} else {
opencode_unified.ui.route_listener_installed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.ui !== 'undefined') && (typeof opencode_unified.ui.ui_root !== 'undefined')){
} else {
opencode_unified.ui.ui_root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Sync browser hash into reagent route state.
 */
opencode_unified.ui.sync_route_BANG_ = (function opencode_unified$ui$sync_route_BANG_(){
var hash_value = location.hash;
var route = ((clojure.string.blank_QMARK_(hash_value))?"#/":hash_value);
cljs.core.reset_BANG_(opencode_unified.ui.current_route,route);

return opencode_unified.persistence.save_state_BANG_(opencode_unified.ui.KEY_ROUTE,route);
});
/**
 * Feature flag gate for the React host donor seam route.
 */
opencode_unified.ui.seam_enabled_QMARK_ = (function opencode_unified$ui$seam_enabled_QMARK_(){
var flags = (function (){var G__7055 = window;
if((G__7055 == null)){
return null;
} else {
return (G__7055["__OPENCODE_FEATURE_FLAGS__"]);
}
})();
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,(function (){var G__7056 = flags;
if((G__7056 == null)){
return null;
} else {
return (G__7056["reactReagentSeam"]);
}
})());
});
opencode_unified.ui.donor_fallback_route = (function opencode_unified$ui$donor_fallback_route(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-testid","data-testid",102116723),"donor-fallback-route",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg-primary)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-testid","data-testid",102116723),"donor-fallback-banner",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.75rem 1rem",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8rem",new cljs.core.Keyword(null,"color","color",1011675173),"var(--text-secondary)",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid var(--border)",new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg-secondary)"], null)], null),"React seam disabled by feature flag. Donor fallback route is active."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-buffer","div.no-buffer",-1499360185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.search_content], null)], null)], null);
});
opencode_unified.ui.app = (function opencode_unified$ui$app(){
var buffer_content = reagent.core.track((function (){
var temp__5804__auto__ = new cljs.core.Keyword(null,"current-buffer","current-buffer",486078614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.state.app_state));
if(cljs.core.truth_(temp__5804__auto__)){
var buffer_id = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),buffer_id], null));
} else {
return null;
}
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.theme.global_styles], null),((((opencode_unified.react_reagent_seam.spike_route_QMARK_(cljs.core.deref(opencode_unified.ui.current_route))) && (opencode_unified.ui.seam_enabled_QMARK_())))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.react_reagent_seam.react_host_route], null):((opencode_unified.react_reagent_seam.spike_route_QMARK_(cljs.core.deref(opencode_unified.ui.current_route)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.shell,cljs.core.deref(opencode_unified.ui.current_route),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.ui.donor_fallback_route], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.shell,cljs.core.deref(opencode_unified.ui.current_route),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.ui.current_route),opencode_unified.layout.ROUTE_DOCS))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.docs_route], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.ui.current_route),opencode_unified.layout.ROUTE_SETTINGS))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.settings_route], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-area","div.editor-area",696030270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.tab_bar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-pane","div.editor-pane",1279213391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(cljs.core.truth_(cljs.core.deref(buffer_content))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.buffers.editor,cljs.core.deref(buffer_content)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-buffer","div.no-buffer",-1499360185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.search_content], null)], null))], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"minimap","minimap",-1428643929)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.layout.minimap,cljs.core.deref(buffer_content)], null):null)], null)
))], null)))], null);
});
opencode_unified.ui.init = (function opencode_unified$ui$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing UI..."], 0));

if(clojure.string.blank_QMARK_(location.hash)){
(location.hash = cljs.core.deref(opencode_unified.ui.current_route));
} else {
}

opencode_unified.ui.sync_route_BANG_();

if(cljs.core.truth_(cljs.core.deref(opencode_unified.ui.route_listener_installed_QMARK_))){
} else {
window.addEventListener("hashchange",opencode_unified.ui.sync_route_BANG_);

cljs.core.reset_BANG_(opencode_unified.ui.route_listener_installed_QMARK_,true);
}

var handle_keydown_7060 = (function (event){
var key = clojure.string.lower_case(event.key);
var mod_QMARK_ = (function (){var or__5002__auto__ = event.ctrlKey;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return event.metaKey;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = mod_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"p")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"k")));
} else {
return and__5000__auto__;
}
})())){
event.preventDefault();

event.stopPropagation();

event.stopImmediatePropagation();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"p")){
return opencode_unified.command_palette.handle_open_key_BANG_();
} else {
return opencode_unified.state.open_search_surface_BANG_();
}
} else {
return null;
}
});
window.addEventListener("keydown",handle_keydown_7060,true);

opencode_unified.state.bootstrap_openplanner_BANG_();

var temp__5804__auto___7061 = document.getElementById("app");
if(cljs.core.truth_(temp__5804__auto___7061)){
var app_element_7062 = temp__5804__auto___7061;
var root_7063 = reagent.dom.client.create_root(app_element_7062);
reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(root_7063,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.ui.app], null)));

cljs.core.reset_BANG_(opencode_unified.ui.ui_root,root_7063);
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["UI initialized with unified shell"], 0));
});
opencode_unified.ui.reload = (function opencode_unified$ui$reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hot reloading UI..."], 0));

var temp__5804__auto__ = cljs.core.deref(opencode_unified.ui.ui_root);
if(cljs.core.truth_(temp__5804__auto__)){
var root = temp__5804__auto__;
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(root,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opencode_unified.ui.app], null)));
} else {
return null;
}
});
goog.exportSymbol('opencode_unified.ui.reload', opencode_unified.ui.reload);
opencode_unified.ui.clear = (function opencode_unified$ui$clear(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clearing UI..."], 0));

var temp__5804__auto__ = cljs.core.deref(opencode_unified.ui.ui_root);
if(cljs.core.truth_(temp__5804__auto__)){
var root = temp__5804__auto__;
root.unmount();

return cljs.core.reset_BANG_(opencode_unified.ui.ui_root,null);
} else {
return null;
}
});
goog.exportSymbol('opencode_unified.ui.clear', opencode_unified.ui.clear);

//# sourceMappingURL=opencode_unified.ui.js.map
