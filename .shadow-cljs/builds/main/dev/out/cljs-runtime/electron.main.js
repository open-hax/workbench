goog.provide('electron.main');
goog.scope(function(){
  electron.main.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.nodejs.enable_util_print_BANG_();
electron.main.electron = require("electron");
electron.main.app = electron.main.electron.app;
electron.main.BrowserWindow = electron.main.electron.BrowserWindow;
electron.main.ipcMain = electron.main.electron.ipcMain;
electron.main.path = require("path");
electron.main.fs = require("fs");
electron.main.chokidar = require("chokidar");
if((typeof electron !== 'undefined') && (typeof electron.main !== 'undefined') && (typeof electron.main.win_STAR_ !== 'undefined')){
} else {
electron.main.win_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
electron.main.user_data_path = (function electron$main$user_data_path(){
return electron.main.app.getPath("userData");
});
electron.main.plugin_dir = (function electron$main$plugin_dir(){
return electron.main.path.join(electron.main.user_data_path(),"plugins");
});
electron.main.workspace_dir = (function electron$main$workspace_dir(){
return electron.main.path.join(electron.main.user_data_path(),"workspaces");
});
electron.main.state_file = (function electron$main$state_file(){
return electron.main.path.join(electron.main.user_data_path(),"state.json");
});
electron.main.ensure_dir_BANG_ = (function electron$main$ensure_dir_BANG_(p){
if(cljs.core.truth_(electron.main.fs.existsSync(p))){
} else {
electron.main.fs.mkdirSync(p,({"recursive": true}));
}

return p;
});
electron.main.ensure_plugin_dir_BANG_ = (function electron$main$ensure_plugin_dir_BANG_(){
return electron.main.ensure_dir_BANG_(electron.main.plugin_dir());
});
electron.main.ensure_workspace_dir_BANG_ = (function electron$main$ensure_workspace_dir_BANG_(){
return electron.main.ensure_dir_BANG_(electron.main.workspace_dir());
});
electron.main.create_window = (function electron$main$create_window(){
var preload = electron.main.path.join(process.cwd(),"dist","preload.js");
var w = (new electron.main.BrowserWindow(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(1400),new cljs.core.Keyword(null,"height","height",1025178622),(900),new cljs.core.Keyword(null,"title","title",636505583),"OpenCode \u2022 Spacemacs UI",new cljs.core.Keyword(null,"webPreferences","webPreferences",-1267169265),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contextIsolation","contextIsolation",-277188069),true,new cljs.core.Keyword(null,"nodeIntegration","nodeIntegration",-784873827),false,new cljs.core.Keyword(null,"preload","preload",1646824722),preload], null)], null))));
cljs.core.reset_BANG_(electron.main.win_STAR_,w);

var url_12252 = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(electron.main.path.join(process.cwd(),"public","index.html"))].join('');
w.loadURL(url_12252);

return w.on("closed",(function (){
return cljs.core.reset_BANG_(electron.main.win_STAR_,null);
}));
});
electron.main.list_plugin_manifests = (function electron$main$list_plugin_manifests(){
electron.main.ensure_plugin_dir_BANG_();

var dir = electron.main.plugin_dir();
var items = electron.main.fs.readdirSync(dir);
return cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
var m = electron.main.path.join(dir,name,"manifest.json");
if(cljs.core.truth_(electron.main.fs.existsSync(m))){
try{var txt = electron.main.fs.readFileSync(m,"utf8");
var data = JSON.parse(txt);
var entry = (function (){var or__5002__auto__ = electron.main.goog$module$goog$object.get(data,"entry");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "dist/index.js";
}
})();
var url = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(electron.main.path.join(dir,name,entry))].join('');
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),name,new cljs.core.Keyword(null,"manifest","manifest",-1386791956),data,new cljs.core.Keyword(null,"url","url",276297046),url], null));
}catch (e12077){var _ = e12077;
return null;
}} else {
return null;
}
}),items)));
});
electron.main.register_ipc_BANG_ = (function electron$main$register_ipc_BANG_(){
electron.main.ipcMain.handle("paths",(function (_){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"userData","userData",-973934685),electron.main.user_data_path(),new cljs.core.Keyword(null,"plugins","plugins",1900073717),electron.main.plugin_dir(),new cljs.core.Keyword(null,"workspaces","workspaces",168825563),electron.main.workspace_dir()], null));
}));

electron.main.ipcMain.handle("plugins:list",(function (_){
return electron.main.list_plugin_manifests();
}));

electron.main.ipcMain.handle("fs:readFile",(function (_,p){
return electron.main.fs.readFileSync(p,"utf8");
}));

electron.main.ipcMain.handle("fs:writeFile",(function (_,p,data){
electron.main.ensure_dir_BANG_(electron.main.path.dirname(p));

electron.main.fs.writeFileSync(p,data,"utf8");

return true;
}));

electron.main.ipcMain.handle("state:read",(function (_){
try{return electron.main.fs.readFileSync(electron.main.state_file(),"utf8");
}catch (e12115){var ___$1 = e12115;
return null;
}}));

electron.main.ipcMain.handle("state:write",(function (_,data){
electron.main.fs.writeFileSync(electron.main.state_file(),data,"utf8");

return true;
}));

electron.main.ipcMain.handle("open-file",(function (_,p){
return electron.main.fs.readFileSync(p,"utf8");
}));

electron.main.ipcMain.handle("save-file",(function (_,p,content){
electron.main.ensure_dir_BANG_(electron.main.path.dirname(p));

electron.main.fs.writeFileSync(p,content,"utf8");

return true;
}));

electron.main.ipcMain.handle("list-directory",(function (_,p){
try{var items = electron.main.fs.readdirSync(p);
return cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,items));
}catch (e12120){var ___$1 = e12120;
return cljs.core.clj__GT_js(cljs.core.PersistentVector.EMPTY);
}}));

electron.main.ipcMain.handle("minimize-window",(function (_){
var temp__5804__auto__ = cljs.core.deref(electron.main.win_STAR_);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
win.minimize();

return true;
} else {
return null;
}
}));

electron.main.ipcMain.handle("maximize-window",(function (_){
var temp__5804__auto__ = cljs.core.deref(electron.main.win_STAR_);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
if(cljs.core.truth_(win.isMaximized())){
win.unmaximize();
} else {
win.maximize();
}

return true;
} else {
return null;
}
}));

electron.main.ipcMain.handle("close-window",(function (_){
var temp__5804__auto__ = cljs.core.deref(electron.main.win_STAR_);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
win.close();

return true;
} else {
return null;
}
}));

electron.main.ipcMain.handle("open-dev-tools",(function (_){
var temp__5804__auto__ = cljs.core.deref(electron.main.win_STAR_);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
win.webContents.openDevTools();

return true;
} else {
return null;
}
}));

electron.main.ipcMain.handle("get-app-version",(function (_){
return electron.main.app.version;
}));

electron.main.ipcMain.handle("load-plugin",(function (_,plugin_path){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Load plugin requested:",plugin_path], 0));

return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true,new cljs.core.Keyword(null,"path","path",-188191168),plugin_path], null));
}));

electron.main.ipcMain.handle("unload-plugin",(function (_,plugin_name){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unload plugin requested:",plugin_name], 0));

return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unloaded","unloaded",-1771652423),true,new cljs.core.Keyword(null,"name","name",1843675177),plugin_name], null));
}));

return electron.main.ipcMain.handle("list-plugins",(function (_){
return electron.main.list_plugin_manifests();
}));
});
electron.main.start_plugin_watch_BANG_ = (function electron$main$start_plugin_watch_BANG_(){
electron.main.ensure_plugin_dir_BANG_();

var w = (function (){var G__12174 = electron.main.plugin_dir();
var G__12175 = ({"ignoreInitial": true});
return (electron.main.chokidar.watch.cljs$core$IFn$_invoke$arity$2 ? electron.main.chokidar.watch.cljs$core$IFn$_invoke$arity$2(G__12174,G__12175) : electron.main.chokidar.watch.call(null,G__12174,G__12175));
})();
return w.on("all",(function (_,___$1){
var temp__5804__auto__ = cljs.core.deref(electron.main.win_STAR_);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
return win.webContents.send("plugins:changed");
} else {
return null;
}
}));
});
electron.main.setup_menu_handlers_BANG_ = (function electron$main$setup_menu_handlers_BANG_(){
var menu = electron.main.electron.Menu;
return electron.main.ipcMain.on("menu-action",(function (_event,action){
var temp__5804__auto__ = cljs.core.deref(electron.main.win_STAR_);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
return win.webContents.send("menu-action",action);
} else {
return null;
}
}));
});
electron.main.setup_plugin_handlers_BANG_ = (function electron$main$setup_plugin_handlers_BANG_(){
return electron.main.ipcMain.on("plugin-event",(function (_event,event){
var temp__5804__auto__ = cljs.core.deref(electron.main.win_STAR_);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
return win.webContents.send("plugin-event",event);
} else {
return null;
}
}));
});
/**
 * Initialize Electron main process
 */
electron.main.init = (function electron$main$init(){
electron.main.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(process.platform,"darwin")){
return electron.main.app.quit();
} else {
return null;
}
}));

return electron.main.app.whenReady((function (){
electron.main.ensure_plugin_dir_BANG_();

electron.main.ensure_workspace_dir_BANG_();

electron.main.register_ipc_BANG_();

electron.main.setup_menu_handlers_BANG_();

electron.main.setup_plugin_handlers_BANG_();

electron.main.start_plugin_watch_BANG_();

electron.main.create_window();

return electron.main.app.on("activate",(function (){
if((cljs.core.deref(electron.main.win_STAR_) == null)){
return electron.main.create_window();
} else {
return null;
}
}));
}));
});

//# sourceMappingURL=electron.main.js.map
