goog.provide('opencode_unified.main');
opencode_unified.main.init = (function opencode_unified$main$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Starting Opencode on platform: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opencode_unified.env.get_platform())].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing app state..."], 0));

opencode_unified.keymap.init();

opencode_unified.command_palette.init_BANG_();

opencode_unified.evil.init();

opencode_unified.plugins.initialize_plugin_system();

opencode_unified.ui.init();

opencode_unified.opencode.init_opencode();

if(opencode_unified.env.electron_QMARK_()){
var electron_api_6762 = opencode_unified.env.electron_api();
electron_api_6762.onMenuAction((function (action){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu action:",action], 0));

var G__6761 = action;
switch (G__6761) {
case "open-file":
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Open file requested"], 0));

break;
case "save-file":
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Save file requested"], 0));

break;
case "new-file":
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New file requested"], 0));

break;
case "quit":
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Quit requested"], 0));

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown menu action:",action], 0));

}
}));

electron_api_6762.onPluginEvent((function (event){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin event:",event], 0));
}));

electron_api_6762.onMainMessage("opencode-response",(function (response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opencode response:",response], 0));
}));
} else {
}

if(opencode_unified.env.web_QMARK_()){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running in web mode - some Electron features will be unavailable"], 0));
} else {
}

(window.opencodeApp = ({"initialized": true, "plugins": ({}), "opencode": ({"connected": false})}));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opencode started successfully!"], 0));
});
if(cljs.core.truth_((function (){var and__5000__auto__ = document;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"loading");
} else {
return and__5000__auto__;
}
})())){
opencode_unified.main.init();
} else {
document.addEventListener("DOMContentLoaded",opencode_unified.main.init);
}
opencode_unified.main.reload = (function opencode_unified$main$reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hot reloading main..."], 0));

return opencode_unified.ui.reload();
});
goog.exportSymbol('opencode_unified.main.reload', opencode_unified.main.reload);
opencode_unified.main.clear = (function opencode_unified$main$clear(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clearing main..."], 0));

return opencode_unified.ui.clear();
});
goog.exportSymbol('opencode_unified.main.clear', opencode_unified.main.clear);
/**
 * Main entry point for the application
 */
opencode_unified.main.main = (function opencode_unified$main$main(){
return opencode_unified.main.init();
});
goog.exportSymbol('opencode_unified.main.main', opencode_unified.main.main);

//# sourceMappingURL=opencode_unified.main.js.map
