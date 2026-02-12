goog.provide('preload');
var G__27744_27772 = "electronAPI";
var G__27745_27773 = ({"onMainMessage": (function (channel,callback){
return shadow.js.shim.module$electron.ipcRenderer.on(channel,(function (_event,data){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(data) : callback.call(null,data));
}));
}), "sendToMain": (function (channel,data){
return shadow.js.shim.module$electron.ipcRenderer.send(channel,data);
}), "writeBuffer": (function (format,buffer){
return shadow.js.shim.module$electron.ipcRenderer.invoke("clipboard-write-buffer",format,buffer);
}), "closeWindow": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("close-window");
}), "unloadPlugin": (function (pluginName){
return shadow.js.shim.module$electron.ipcRenderer.invoke("unload-plugin",pluginName);
}), "openFile": (function (path){
return shadow.js.shim.module$electron.ipcRenderer.invoke("open-file",path);
}), "minimizeWindow": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("minimize-window");
}), "removeAllListeners": (function (channel){
return shadow.js.shim.module$electron.ipcRenderer.removeAllListeners(channel);
}), "readBuffer": (function (format){
return shadow.js.shim.module$electron.ipcRenderer.invoke("clipboard-read-buffer",format);
}), "saveFile": (function (path,content){
return shadow.js.shim.module$electron.ipcRenderer.invoke("save-file",path,content);
}), "loadPlugin": (function (pluginPath){
return shadow.js.shim.module$electron.ipcRenderer.invoke("load-plugin",pluginPath);
}), "getAppVersion": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("get-app-version");
}), "writeText": (function (text){
return shadow.js.shim.module$electron.ipcRenderer.invoke("write-text",text);
}), "maximizeWindow": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("maximize-window");
}), "openDevTools": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("open-dev-tools");
}), "onMenuAction": (function (callback){
return shadow.js.shim.module$electron.ipcRenderer.on("menu-action",(function (_event,data){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(data) : callback.call(null,data));
}));
}), "onPluginEvent": (function (callback){
return shadow.js.shim.module$electron.ipcRenderer.on("plugin-event",(function (_event,data){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(data) : callback.call(null,data));
}));
}), "readText": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("clipboard-read-text");
}), "availableFormats": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("clipboard-available-formats");
}), "listPlugins": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("list-plugins");
}), "clear": (function (){
return shadow.js.shim.module$electron.ipcRenderer.invoke("clipboard-clear");
}), "listDirectory": (function (path){
return shadow.js.shim.module$electron.ipcRenderer.invoke("list-directory",path);
})});
(shadow.js.shim.module$electron.contextBridge.exposeInMainWorld.cljs$core$IFn$_invoke$arity$2 ? shadow.js.shim.module$electron.contextBridge.exposeInMainWorld.cljs$core$IFn$_invoke$arity$2(G__27744_27772,G__27745_27773) : shadow.js.shim.module$electron.contextBridge.exposeInMainWorld.call(null,G__27744_27772,G__27745_27773));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Preload script loaded successfully"], 0));
/**
 * Initialize preload script
 */
preload.init = (function preload$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Preload script initialized"], 0));
});

//# sourceMappingURL=preload.js.map
