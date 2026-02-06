goog.provide('opencode_unified.env');
opencode_unified.env.electron_QMARK_ = (function opencode_unified$env$electron_QMARK_(){

return (((typeof window !== 'undefined')) && ((!((window.electronAPI == null)))));
});
opencode_unified.env.web_QMARK_ = (function opencode_unified$env$web_QMARK_(){

return (((typeof window !== 'undefined')) && ((!(opencode_unified.env.electron_QMARK_()))));
});
opencode_unified.env.node_QMARK_ = (function opencode_unified$env$node_QMARK_(){

return (typeof process !== 'undefined');
});
opencode_unified.env.get_platform = (function opencode_unified$env$get_platform(){

if(opencode_unified.env.electron_QMARK_()){
return new cljs.core.Keyword(null,"electron","electron",1312019442);
} else {
if(opencode_unified.env.web_QMARK_()){
return new cljs.core.Keyword(null,"web","web",-654701153);
} else {
if(opencode_unified.env.node_QMARK_()){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
}
}
});
opencode_unified.env.electron_api = (function opencode_unified$env$electron_api(){

if(opencode_unified.env.electron_QMARK_()){
return window.electronAPI;
} else {
return null;
}
});
opencode_unified.env.show_notification_QMARK_ = (function opencode_unified$env$show_notification_QMARK_(){

var or__5002__auto__ = opencode_unified.env.electron_QMARK_();
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = opencode_unified.env.web_QMARK_();
if(and__5000__auto__){
var and__5000__auto____$1 = (typeof Notification !== 'undefined');
if(and__5000__auto____$1){
var and__5000__auto____$2 = Notification.permission;
if(cljs.core.truth_(and__5000__auto____$2)){
return "granted";
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
opencode_unified.env.file_system_access_QMARK_ = (function opencode_unified$env$file_system_access_QMARK_(){

return opencode_unified.env.electron_QMARK_();
});
opencode_unified.env.get_app_version = (function opencode_unified$env$get_app_version(){

if(opencode_unified.env.electron_QMARK_()){
var temp__5804__auto__ = opencode_unified.env.electron_api();
if(cljs.core.truth_(temp__5804__auto__)){
var electron_api = temp__5804__auto__;
return electron_api.getAppVersion();
} else {
return null;
}
} else {
return "web-version";

}
});
opencode_unified.env.open_external_url = (function opencode_unified$env$open_external_url(url){

if(opencode_unified.env.electron_QMARK_()){
var temp__5804__auto__ = opencode_unified.env.electron_api();
if(cljs.core.truth_(temp__5804__auto__)){
var electron_api = temp__5804__auto__;
return electron_api.openExternal(url);
} else {
return null;
}
} else {
if(opencode_unified.env.web_QMARK_()){
return window.open(url,"_blank");
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot open external URL:",url], 0));

}
}
});

//# sourceMappingURL=opencode_unified.env.js.map
