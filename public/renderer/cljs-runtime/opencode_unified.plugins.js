goog.provide('opencode_unified.plugins');
if((typeof opencode_unified !== 'undefined') && (typeof opencode_unified.plugins !== 'undefined') && (typeof opencode_unified.plugins.plugin_state !== 'undefined')){
} else {
opencode_unified.plugins.plugin_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"available-plugins","available-plugins",1884325526),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"plugin-commands","plugin-commands",1439817142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"last-error","last-error",1848699973),null], null));
}
opencode_unified.plugins.plugin_states = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"unloaded","unloaded",-1771652423),"Not loaded",new cljs.core.Keyword(null,"loading","loading",-737050189),"Loading...",new cljs.core.Keyword(null,"loaded","loaded",-1246482293),"Loaded but inactive",new cljs.core.Keyword(null,"activating","activating",-513392578),"Activating...",new cljs.core.Keyword(null,"active","active",1895962068),"Active",new cljs.core.Keyword(null,"deactivating","deactivating",952478781),"Deactivating...",new cljs.core.Keyword(null,"error","error",-978969032),"Error"], null);
opencode_unified.plugins.hook_types = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer-created","buffer-created",-997519470),new cljs.core.Keyword(null,"buffer-saved","buffer-saved",1827952050),new cljs.core.Keyword(null,"buffer-closed","buffer-closed",1174150944),new cljs.core.Keyword(null,"editor-focused","editor-focused",711867680),new cljs.core.Keyword(null,"editor-blurred","editor-blurred",-1025297712),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"command-executed","command-executed",-621035379),new cljs.core.Keyword(null,"theme-changed","theme-changed",-1173604306),new cljs.core.Keyword(null,"workspace-loaded","workspace-loaded",100617312),new cljs.core.Keyword(null,"workspace-saved","workspace-saved",-111745363)], null);
opencode_unified.plugins.plugin_schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158)], null)]);
/**
 * Validate plugin metadata against schema
 */
opencode_unified.plugins.validate_plugin = (function opencode_unified$plugins$validate_plugin(plugin_metadata){
try{var required_fields_7163 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
var seq__7066_7164 = cljs.core.seq(required_fields_7163);
var chunk__7067_7165 = null;
var count__7068_7166 = (0);
var i__7069_7167 = (0);
while(true){
if((i__7069_7167 < count__7068_7166)){
var field_7168 = chunk__7067_7165.cljs$core$IIndexed$_nth$arity$2(null,i__7069_7167);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin_metadata,field_7168) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing required field: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_7168)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field_7168,new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin_metadata], null));
} else {
}


var G__7169 = seq__7066_7164;
var G__7170 = chunk__7067_7165;
var G__7171 = count__7068_7166;
var G__7172 = (i__7069_7167 + (1));
seq__7066_7164 = G__7169;
chunk__7067_7165 = G__7170;
count__7068_7166 = G__7171;
i__7069_7167 = G__7172;
continue;
} else {
var temp__5804__auto___7173 = cljs.core.seq(seq__7066_7164);
if(temp__5804__auto___7173){
var seq__7066_7174__$1 = temp__5804__auto___7173;
if(cljs.core.chunked_seq_QMARK_(seq__7066_7174__$1)){
var c__5525__auto___7175 = cljs.core.chunk_first(seq__7066_7174__$1);
var G__7176 = cljs.core.chunk_rest(seq__7066_7174__$1);
var G__7177 = c__5525__auto___7175;
var G__7178 = cljs.core.count(c__5525__auto___7175);
var G__7179 = (0);
seq__7066_7164 = G__7176;
chunk__7067_7165 = G__7177;
count__7068_7166 = G__7178;
i__7069_7167 = G__7179;
continue;
} else {
var field_7180 = cljs.core.first(seq__7066_7174__$1);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin_metadata,field_7180) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing required field: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_7180)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field_7180,new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin_metadata], null));
} else {
}


var G__7181 = cljs.core.next(seq__7066_7174__$1);
var G__7182 = null;
var G__7183 = (0);
var G__7184 = (0);
seq__7066_7164 = G__7181;
chunk__7067_7165 = G__7182;
count__7068_7166 = G__7183;
i__7069_7167 = G__7184;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.re_matches(/^\d+\.\d+\.\d+(-.*)?$/,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(plugin_metadata)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid version format (should be semver)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(plugin_metadata)], null));
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valid","valid",155614240),true], null);
}catch (e7065){if((e7065 instanceof Error)){
var e = e7065;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid","valid",155614240),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e7065;

}
}});
/**
 * Register plugin hooks for a specific plugin
 */
opencode_unified.plugins.register_plugin_hooks = (function opencode_unified$plugins$register_plugin_hooks(plugin_id,hooks){
var seq__7071 = cljs.core.seq(hooks);
var chunk__7072 = null;
var count__7073 = (0);
var i__7074 = (0);
while(true){
if((i__7074 < count__7073)){
var hook_type = chunk__7072.cljs$core$IIndexed$_nth$arity$2(null,i__7074);
if(cljs.core.contains_QMARK_(cljs.core.set(opencode_unified.plugins.hook_types),hook_type)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));
} else {
}


var G__7185 = seq__7071;
var G__7186 = chunk__7072;
var G__7187 = count__7073;
var G__7188 = (i__7074 + (1));
seq__7071 = G__7185;
chunk__7072 = G__7186;
count__7073 = G__7187;
i__7074 = G__7188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7071);
if(temp__5804__auto__){
var seq__7071__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7071__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7071__$1);
var G__7190 = cljs.core.chunk_rest(seq__7071__$1);
var G__7191 = c__5525__auto__;
var G__7192 = cljs.core.count(c__5525__auto__);
var G__7193 = (0);
seq__7071 = G__7190;
chunk__7072 = G__7191;
count__7073 = G__7192;
i__7074 = G__7193;
continue;
} else {
var hook_type = cljs.core.first(seq__7071__$1);
if(cljs.core.contains_QMARK_(cljs.core.set(opencode_unified.plugins.hook_types),hook_type)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));
} else {
}


var G__7194 = cljs.core.next(seq__7071__$1);
var G__7195 = null;
var G__7196 = (0);
var G__7197 = (0);
seq__7071 = G__7194;
chunk__7072 = G__7195;
count__7073 = G__7196;
i__7074 = G__7197;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Unregister plugin hooks for a specific plugin
 */
opencode_unified.plugins.unregister_plugin_hooks = (function opencode_unified$plugins$unregister_plugin_hooks(plugin_id){
var seq__7076 = cljs.core.seq(opencode_unified.plugins.hook_types);
var chunk__7077 = null;
var count__7078 = (0);
var i__7079 = (0);
while(true){
if((i__7079 < count__7078)){
var hook_type = chunk__7077.cljs$core$IIndexed$_nth$arity$2(null,i__7079);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),((function (seq__7076,chunk__7077,count__7078,i__7079,hook_type){
return (function (hooks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (seq__7076,chunk__7077,count__7078,i__7079,hook_type){
return (function (p1__7075_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7075_SHARP_,plugin_id);
});})(seq__7076,chunk__7077,count__7078,i__7079,hook_type))
,hooks);
});})(seq__7076,chunk__7077,count__7078,i__7079,hook_type))
);


var G__7198 = seq__7076;
var G__7199 = chunk__7077;
var G__7200 = count__7078;
var G__7201 = (i__7079 + (1));
seq__7076 = G__7198;
chunk__7077 = G__7199;
count__7078 = G__7200;
i__7079 = G__7201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7076);
if(temp__5804__auto__){
var seq__7076__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7076__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7076__$1);
var G__7202 = cljs.core.chunk_rest(seq__7076__$1);
var G__7203 = c__5525__auto__;
var G__7204 = cljs.core.count(c__5525__auto__);
var G__7205 = (0);
seq__7076 = G__7202;
chunk__7077 = G__7203;
count__7078 = G__7204;
i__7079 = G__7205;
continue;
} else {
var hook_type = cljs.core.first(seq__7076__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),((function (seq__7076,chunk__7077,count__7078,i__7079,hook_type,seq__7076__$1,temp__5804__auto__){
return (function (hooks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (seq__7076,chunk__7077,count__7078,i__7079,hook_type,seq__7076__$1,temp__5804__auto__){
return (function (p1__7075_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7075_SHARP_,plugin_id);
});})(seq__7076,chunk__7077,count__7078,i__7079,hook_type,seq__7076__$1,temp__5804__auto__))
,hooks);
});})(seq__7076,chunk__7077,count__7078,i__7079,hook_type,seq__7076__$1,temp__5804__auto__))
);


var G__7206 = cljs.core.next(seq__7076__$1);
var G__7207 = null;
var G__7208 = (0);
var G__7209 = (0);
seq__7076 = G__7206;
chunk__7077 = G__7207;
count__7078 = G__7208;
i__7079 = G__7209;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Execute all plugins registered for a specific hook
 */
opencode_unified.plugins.execute_hook = (function opencode_unified$plugins$execute_hook(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7210 = arguments.length;
var i__5727__auto___7211 = (0);
while(true){
if((i__5727__auto___7211 < len__5726__auto___7210)){
args__5732__auto__.push((arguments[i__5727__auto___7211]));

var G__7212 = (i__5727__auto___7211 + (1));
i__5727__auto___7211 = G__7212;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic = (function (hook_type,args){
var plugin_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null));
var seq__7083 = cljs.core.seq(plugin_ids);
var chunk__7084 = null;
var count__7085 = (0);
var i__7086 = (0);
while(true){
if((i__7086 < count__7085)){
var plugin_id = chunk__7084.cljs$core$IIndexed$_nth$arity$2(null,i__7086);
var temp__5804__auto___7215 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null));
if(cljs.core.truth_(temp__5804__auto___7215)){
var plugin_7216 = temp__5804__auto___7215;
var temp__5804__auto___7217__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin_7216,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"hooks","hooks",-413590103),hook_type], null));
if(cljs.core.truth_(temp__5804__auto___7217__$1)){
var hook_fn_7218 = temp__5804__auto___7217__$1;
try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hook_fn_7218,args);
}catch (e7090){if((e7090 instanceof Error)){
var e_7219 = e7090;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error executing hook",hook_type,"for plugin",plugin_id,":",e_7219.message], 0));
} else {
throw e7090;

}
}} else {
}
} else {
}


var G__7220 = seq__7083;
var G__7221 = chunk__7084;
var G__7222 = count__7085;
var G__7223 = (i__7086 + (1));
seq__7083 = G__7220;
chunk__7084 = G__7221;
count__7085 = G__7222;
i__7086 = G__7223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7083);
if(temp__5804__auto__){
var seq__7083__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7083__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7083__$1);
var G__7224 = cljs.core.chunk_rest(seq__7083__$1);
var G__7225 = c__5525__auto__;
var G__7226 = cljs.core.count(c__5525__auto__);
var G__7227 = (0);
seq__7083 = G__7224;
chunk__7084 = G__7225;
count__7085 = G__7226;
i__7086 = G__7227;
continue;
} else {
var plugin_id = cljs.core.first(seq__7083__$1);
var temp__5804__auto___7228__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null));
if(cljs.core.truth_(temp__5804__auto___7228__$1)){
var plugin_7229 = temp__5804__auto___7228__$1;
var temp__5804__auto___7230__$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin_7229,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"hooks","hooks",-413590103),hook_type], null));
if(cljs.core.truth_(temp__5804__auto___7230__$2)){
var hook_fn_7231 = temp__5804__auto___7230__$2;
try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hook_fn_7231,args);
}catch (e7091){if((e7091 instanceof Error)){
var e_7232 = e7091;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error executing hook",hook_type,"for plugin",plugin_id,":",e_7232.message], 0));
} else {
throw e7091;

}
}} else {
}
} else {
}


var G__7233 = cljs.core.next(seq__7083__$1);
var G__7234 = null;
var G__7235 = (0);
var G__7236 = (0);
seq__7083 = G__7233;
chunk__7084 = G__7234;
count__7085 = G__7235;
i__7086 = G__7236;
continue;
}
} else {
return null;
}
}
break;
}
}));

(opencode_unified.plugins.execute_hook.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(opencode_unified.plugins.execute_hook.cljs$lang$applyTo = (function (seq7081){
var G__7082 = cljs.core.first(seq7081);
var seq7081__$1 = cljs.core.next(seq7081);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7082,seq7081__$1);
}));

/**
 * Load a plugin from its metadata
 */
opencode_unified.plugins.load_plugin = (function opencode_unified$plugins$load_plugin(plugin_metadata){
var plugin_id = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin_metadata);
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),plugin_metadata,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"loaded-at","loaded-at",1251850584),(new Date())], null));

var validation_7237 = opencode_unified.plugins.validate_plugin(plugin_metadata);
if(cljs.core.truth_(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(validation_7237))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(validation_7237),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin_metadata], null));
}

var plugin_namespace = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["opencode-unified.plugins.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin_metadata))].join(''));
try{}catch (e7095){if((e7095 instanceof Error)){
var e_7238 = e7095;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin namespace not found, creating mock plugin:",plugin_namespace], 0));
} else {
throw e7095;

}
}
var plugin_instance = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),plugin_id,new cljs.core.Keyword(null,"namespace","namespace",-377510372),plugin_namespace,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$2(plugin_metadata,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$2(plugin_metadata,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"instance","instance",-2121349050),plugin_instance,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)], null)], 0)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(plugin_metadata))){
opencode_unified.plugins.register_plugin_hooks(plugin_id,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(plugin_metadata));
} else {
}

var temp__5804__auto___7239 = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(plugin_metadata);
if(cljs.core.truth_(temp__5804__auto___7239)){
var commands_7240 = temp__5804__auto___7239;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update,new cljs.core.Keyword(null,"plugin-commands","plugin-commands",1439817142),cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7092_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7092_SHARP_,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id);
}),commands_7240)], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin loaded:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e7093){if((e7093 instanceof Error)){
var e = e7093;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error loading plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e7093;

}
}});
/**
 * Activate a loaded plugin
 */
opencode_unified.plugins.activate_plugin = (function opencode_unified$plugins$activate_plugin(plugin_id){
try{var plugin = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null));
if(cljs.core.truth_(plugin)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Plugin not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin),new cljs.core.Keyword(null,"loaded","loaded",-1246482293))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Plugin not in loaded state",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin)], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"activating","activating",-513392578));

var temp__5804__auto___7241 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"activate","activate",441219614)], null));
if(cljs.core.truth_(temp__5804__auto___7241)){
var activate_fn_7242 = temp__5804__auto___7241;
var G__7097_7243 = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(plugin);
(activate_fn_7242.cljs$core$IFn$_invoke$arity$1 ? activate_fn_7242.cljs$core$IFn$_invoke$arity$1(G__7097_7243) : activate_fn_7242.call(null,G__7097_7243));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"active","active",1895962068));

opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"plugin-activated","plugin-activated",470917953),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin activated:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e7096){if((e7096 instanceof Error)){
var e = e7096;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error activating plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e7096;

}
}});
/**
 * Deactivate an active plugin
 */
opencode_unified.plugins.deactivate_plugin = (function opencode_unified$plugins$deactivate_plugin(plugin_id){
try{var plugin = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null));
if(cljs.core.truth_(plugin)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Plugin not active",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"deactivating","deactivating",952478781));

var temp__5804__auto___7244 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"deactivate","deactivate",-1313810707)], null));
if(cljs.core.truth_(temp__5804__auto___7244)){
var deactivate_fn_7245 = temp__5804__auto___7244;
(deactivate_fn_7245.cljs$core$IFn$_invoke$arity$0 ? deactivate_fn_7245.cljs$core$IFn$_invoke$arity$0() : deactivate_fn_7245.call(null));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plugin,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update,new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"plugin-deactivated","plugin-deactivated",1256879714),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin deactivated:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e7098){if((e7098 instanceof Error)){
var e = e7098;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error deactivating plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e7098;

}
}});
/**
 * Unload a plugin completely
 */
opencode_unified.plugins.unload_plugin = (function opencode_unified$plugins$unload_plugin(plugin_id){
try{if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null)))){
opencode_unified.plugins.deactivate_plugin(plugin_id);
} else {
}

opencode_unified.plugins.unregister_plugin_hooks(plugin_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.update,new cljs.core.Keyword(null,"plugin-commands","plugin-commands",1439817142),(function (commands){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__7099_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(p1__7099_SHARP_),plugin_id);
}),commands);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update,new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin unloaded:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e7100){if((e7100 instanceof Error)){
var e = e7100;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error unloading plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e7100;

}
}});
/**
 * Discover available plugins in the plugins directory
 */
opencode_unified.plugins.discover_plugins = (function opencode_unified$plugins$discover_plugins(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605)],["An example plugin for demonstration",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["file-system"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-setting","example-setting",1297156567),true], null),"example-plugin",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer-created","buffer-created",-997519470),new cljs.core.Keyword(null,"buffer-saved","buffer-saved",1827952050)], null),"Opencode Team",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Example Command",new cljs.core.Keyword(null,"description","description",-1428560544),"An example command from the plugin",new cljs.core.Keyword(null,"keys","keys",1068423698),"SPC e e",new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.identity], null)], null),"1.0.0","example_plugin.cljs",true,cljs.core.PersistentVector.EMPTY]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605)],["Git integration plugin",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["file-system","network"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-commit","auto-commit",85178722),false], null),"git-integration",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer-saved","buffer-saved",1827952050),new cljs.core.Keyword(null,"workspace-loaded","workspace-loaded",100617312)], null),"Opencode Team",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Git Status",new cljs.core.Keyword(null,"description","description",-1428560544),"Show git status",new cljs.core.Keyword(null,"keys","keys",1068423698),"SPC g s",new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.identity], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Git Commit",new cljs.core.Keyword(null,"description","description",-1428560544),"Commit current changes",new cljs.core.Keyword(null,"keys","keys",1068423698),"SPC g c",new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.identity], null)], null),"1.0.0","git_integration.cljs",true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["git-js"], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605)],["Language Server Protocol client",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["network"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"servers","servers",1881102005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clojure","clojure",438975815),"clojure-lsp",new cljs.core.Keyword(null,"javascript","javascript",-45283711),"typescript-language-server"], null)], null),"lsp-client",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer-created","buffer-created",-997519470),new cljs.core.Keyword(null,"editor-focused","editor-focused",711867680)], null),"Opencode Team",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"LSP Restart",new cljs.core.Keyword(null,"description","description",-1428560544),"Restart LSP server",new cljs.core.Keyword(null,"keys","keys",1068423698),"SPC l r",new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.identity], null)], null),"1.0.0","lsp_client.cljs",true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vscode-languageserver-protocol"], null)])], null);
});
/**
 * Initialize the plugin system
 */
opencode_unified.plugins.initialize_plugin_system = (function opencode_unified$plugins$initialize_plugin_system(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing plugin system..."], 0));

var plugins_7246 = opencode_unified.plugins.discover_plugins();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"available-plugins","available-plugins",1884325526),plugins_7246);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Discovered",cljs.core.count(plugins_7246),"plugins"], 0));

var seq__7101_7247 = cljs.core.seq(new cljs.core.Keyword(null,"available-plugins","available-plugins",1884325526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.plugins.plugin_state)));
var chunk__7102_7248 = null;
var count__7103_7249 = (0);
var i__7104_7250 = (0);
while(true){
if((i__7104_7250 < count__7103_7249)){
var plugin_7251 = chunk__7102_7248.cljs$core$IIndexed$_nth$arity$2(null,i__7104_7250);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(plugin_7251))){
var result_7252 = opencode_unified.plugins.load_plugin(plugin_7251);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result_7252))){
opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(result_7252));
} else {
}
} else {
}


var G__7253 = seq__7101_7247;
var G__7254 = chunk__7102_7248;
var G__7255 = count__7103_7249;
var G__7256 = (i__7104_7250 + (1));
seq__7101_7247 = G__7253;
chunk__7102_7248 = G__7254;
count__7103_7249 = G__7255;
i__7104_7250 = G__7256;
continue;
} else {
var temp__5804__auto___7257 = cljs.core.seq(seq__7101_7247);
if(temp__5804__auto___7257){
var seq__7101_7258__$1 = temp__5804__auto___7257;
if(cljs.core.chunked_seq_QMARK_(seq__7101_7258__$1)){
var c__5525__auto___7259 = cljs.core.chunk_first(seq__7101_7258__$1);
var G__7260 = cljs.core.chunk_rest(seq__7101_7258__$1);
var G__7261 = c__5525__auto___7259;
var G__7262 = cljs.core.count(c__5525__auto___7259);
var G__7263 = (0);
seq__7101_7247 = G__7260;
chunk__7102_7248 = G__7261;
count__7103_7249 = G__7262;
i__7104_7250 = G__7263;
continue;
} else {
var plugin_7264 = cljs.core.first(seq__7101_7258__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(plugin_7264))){
var result_7265 = opencode_unified.plugins.load_plugin(plugin_7264);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result_7265))){
opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(result_7265));
} else {
}
} else {
}


var G__7266 = cljs.core.next(seq__7101_7258__$1);
var G__7267 = null;
var G__7268 = (0);
var G__7269 = (0);
seq__7101_7247 = G__7266;
chunk__7102_7248 = G__7267;
count__7103_7249 = G__7268;
i__7104_7250 = G__7269;
continue;
}
} else {
}
}
break;
}

cljs.core.add_watch(opencode_unified.state.app_state,new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),(function (_,___$1,old_state,new_state){
var old_buffers = new cljs.core.Keyword(null,"buffers","buffers",471409492).cljs$core$IFn$_invoke$arity$1(old_state);
var new_buffers = new cljs.core.Keyword(null,"buffers","buffers",471409492).cljs$core$IFn$_invoke$arity$1(new_state);
var seq__7106_7270 = cljs.core.seq(new_buffers);
var chunk__7107_7271 = null;
var count__7108_7272 = (0);
var i__7109_7273 = (0);
while(true){
if((i__7109_7273 < count__7108_7272)){
var vec__7117_7274 = chunk__7107_7271.cljs$core$IIndexed$_nth$arity$2(null,i__7109_7273);
var buffer_id_7275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7117_7274,(0),null);
var buffer_7276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7117_7274,(1),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id_7275))){
} else {
opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buffer-created","buffer-created",-997519470),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([buffer_7276], 0));
}


var G__7277 = seq__7106_7270;
var G__7278 = chunk__7107_7271;
var G__7279 = count__7108_7272;
var G__7280 = (i__7109_7273 + (1));
seq__7106_7270 = G__7277;
chunk__7107_7271 = G__7278;
count__7108_7272 = G__7279;
i__7109_7273 = G__7280;
continue;
} else {
var temp__5804__auto___7281 = cljs.core.seq(seq__7106_7270);
if(temp__5804__auto___7281){
var seq__7106_7282__$1 = temp__5804__auto___7281;
if(cljs.core.chunked_seq_QMARK_(seq__7106_7282__$1)){
var c__5525__auto___7283 = cljs.core.chunk_first(seq__7106_7282__$1);
var G__7284 = cljs.core.chunk_rest(seq__7106_7282__$1);
var G__7285 = c__5525__auto___7283;
var G__7286 = cljs.core.count(c__5525__auto___7283);
var G__7287 = (0);
seq__7106_7270 = G__7284;
chunk__7107_7271 = G__7285;
count__7108_7272 = G__7286;
i__7109_7273 = G__7287;
continue;
} else {
var vec__7120_7288 = cljs.core.first(seq__7106_7282__$1);
var buffer_id_7289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7120_7288,(0),null);
var buffer_7290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7120_7288,(1),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id_7289))){
} else {
opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buffer-created","buffer-created",-997519470),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([buffer_7290], 0));
}


var G__7291 = cljs.core.next(seq__7106_7282__$1);
var G__7292 = null;
var G__7293 = (0);
var G__7294 = (0);
seq__7106_7270 = G__7291;
chunk__7107_7271 = G__7292;
count__7108_7272 = G__7293;
i__7109_7273 = G__7294;
continue;
}
} else {
}
}
break;
}

var seq__7124 = cljs.core.seq(new_buffers);
var chunk__7125 = null;
var count__7126 = (0);
var i__7127 = (0);
while(true){
if((i__7127 < count__7126)){
var vec__7135 = chunk__7125.cljs$core$IIndexed$_nth$arity$2(null,i__7127);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135,(1),null);
var old_buffer_7295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id);
if(cljs.core.truth_((function (){var and__5000__auto__ = old_buffer_7295;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = buffer;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(old_buffer_7295));
if(and__5000__auto____$2){
return new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(buffer);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buffer-saved","buffer-saved",1827952050),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([buffer], 0));
} else {
}


var G__7296 = seq__7124;
var G__7297 = chunk__7125;
var G__7298 = count__7126;
var G__7299 = (i__7127 + (1));
seq__7124 = G__7296;
chunk__7125 = G__7297;
count__7126 = G__7298;
i__7127 = G__7299;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7124);
if(temp__5804__auto__){
var seq__7124__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7124__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7124__$1);
var G__7300 = cljs.core.chunk_rest(seq__7124__$1);
var G__7301 = c__5525__auto__;
var G__7302 = cljs.core.count(c__5525__auto__);
var G__7303 = (0);
seq__7124 = G__7300;
chunk__7125 = G__7301;
count__7126 = G__7302;
i__7127 = G__7303;
continue;
} else {
var vec__7139 = cljs.core.first(seq__7124__$1);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7139,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7139,(1),null);
var old_buffer_7304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id);
if(cljs.core.truth_((function (){var and__5000__auto__ = old_buffer_7304;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = buffer;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(old_buffer_7304));
if(and__5000__auto____$2){
return new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(buffer);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buffer-saved","buffer-saved",1827952050),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([buffer], 0));
} else {
}


var G__7305 = cljs.core.next(seq__7124__$1);
var G__7306 = null;
var G__7307 = (0);
var G__7308 = (0);
seq__7124 = G__7305;
chunk__7125 = G__7306;
count__7126 = G__7307;
i__7127 = G__7308;
continue;
}
} else {
return null;
}
}
break;
}
}));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin system initialized"], 0));
});
/**
 * Get current plugin system state
 */
opencode_unified.plugins.get_plugin_state = (function opencode_unified$plugins$get_plugin_state(){
return cljs.core.deref(opencode_unified.plugins.plugin_state);
});
/**
 * Get list of loaded plugins
 */
opencode_unified.plugins.get_loaded_plugins = (function opencode_unified$plugins$get_loaded_plugins(){
return cljs.core.vals(new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.plugins.plugin_state)));
});
/**
 * Get list of active plugins
 */
opencode_unified.plugins.get_active_plugins = (function opencode_unified$plugins$get_active_plugins(){
return cljs.core.vals(new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.plugins.plugin_state)));
});
/**
 * Get all commands from active plugins
 */
opencode_unified.plugins.get_plugin_commands = (function opencode_unified$plugins$get_plugin_commands(){
return new cljs.core.Keyword(null,"plugin-commands","plugin-commands",1439817142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.plugins.plugin_state));
});
/**
 * Execute a command from a plugin
 */
opencode_unified.plugins.execute_plugin_command = (function opencode_unified$plugins$execute_plugin_command(var_args){
var args__5732__auto__ = [];
var len__5726__auto___7309 = arguments.length;
var i__5727__auto___7310 = (0);
while(true){
if((i__5727__auto___7310 < len__5726__auto___7309)){
args__5732__auto__.push((arguments[i__5727__auto___7310]));

var G__7311 = (i__5727__auto___7310 + (1));
i__5727__auto___7310 = G__7311;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return opencode_unified.plugins.execute_plugin_command.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(opencode_unified.plugins.execute_plugin_command.cljs$core$IFn$_invoke$arity$variadic = (function (command_name,args){
var temp__5804__auto__ = cljs.core.some((function (p1__7144_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__7144_SHARP_),command_name)){
return p1__7144_SHARP_;
} else {
return null;
}
}),opencode_unified.plugins.get_plugin_commands());
if(cljs.core.truth_(temp__5804__auto__)){
var command = temp__5804__auto__;
try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(command),args);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),true], null);
}catch (e7147){if((e7147 instanceof Error)){
var e = e7147;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e7147;

}
}} else {
return null;
}
}));

(opencode_unified.plugins.execute_plugin_command.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(opencode_unified.plugins.execute_plugin_command.cljs$lang$applyTo = (function (seq7145){
var G__7146 = cljs.core.first(seq7145);
var seq7145__$1 = cljs.core.next(seq7145);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7146,seq7145__$1);
}));

/**
 * UI component for managing plugins
 */
opencode_unified.plugins.plugin_manager_ui = (function opencode_unified$plugins$plugin_manager_ui(){
var active_tab = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-manager","div.plugin-manager",1276272025),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-tabs","div.plugin-tabs",-1195563401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(active_tab,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
})], null),"Loaded Plugins"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab),new cljs.core.Keyword(null,"available","available",-1470697127)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(active_tab,new cljs.core.Keyword(null,"available","available",-1470697127));
})], null),"Available Plugins"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-content","div.plugin-content",1944130618),(function (){var G__7149 = cljs.core.deref(active_tab);
var G__7149__$1 = (((G__7149 instanceof cljs.core.Keyword))?G__7149.fqn:null);
switch (G__7149__$1) {
case "loaded":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loaded-plugins","div.loaded-plugins",302517401),(function (){var iter__5480__auto__ = (function opencode_unified$plugins$plugin_manager_ui_$_iter__7150(s__7151){
return (new cljs.core.LazySeq(null,(function (){
var s__7151__$1 = s__7151;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7151__$1);
if(temp__5804__auto__){
var s__7151__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7151__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__7151__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__7153 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__7152 = (0);
while(true){
if((i__7152 < size__5479__auto__)){
var plugin = cljs.core._nth(c__5478__auto__,i__7152);
cljs.core.chunk_append(b__7153,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plugin-state","span.plugin-state",1301424781),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opencode_unified.plugins.plugin_states,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(function (){var G__7154 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin);
var G__7154__$1 = (((G__7154 instanceof cljs.core.Keyword))?G__7154.fqn:null);
switch (G__7154__$1) {
case "active":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__7152,G__7154,G__7154__$1,plugin,c__5478__auto__,size__5479__auto__,b__7153,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.deactivate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(i__7152,G__7154,G__7154__$1,plugin,c__5478__auto__,size__5479__auto__,b__7153,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Deactivate"], null);

break;
case "loaded":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__7152,G__7154,G__7154__$1,plugin,c__5478__auto__,size__5479__auto__,b__7153,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(i__7152,G__7154,G__7154__$1,plugin,c__5478__auto__,size__5479__auto__,b__7153,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Activate"], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__7152,G__7154,G__7154__$1,plugin,c__5478__auto__,size__5479__auto__,b__7153,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.unload_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(i__7152,G__7154,G__7154__$1,plugin,c__5478__auto__,size__5479__auto__,b__7153,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Unload"], null);

}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin)], null)));

var G__7314 = (i__7152 + (1));
i__7152 = G__7314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7153),opencode_unified$plugins$plugin_manager_ui_$_iter__7150(cljs.core.chunk_rest(s__7151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7153),null);
}
} else {
var plugin = cljs.core.first(s__7151__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plugin-state","span.plugin-state",1301424781),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opencode_unified.plugins.plugin_states,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(function (){var G__7158 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin);
var G__7158__$1 = (((G__7158 instanceof cljs.core.Keyword))?G__7158.fqn:null);
switch (G__7158__$1) {
case "active":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__7158,G__7158__$1,plugin,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.deactivate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(G__7158,G__7158__$1,plugin,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Deactivate"], null);

break;
case "loaded":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__7158,G__7158__$1,plugin,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(G__7158,G__7158__$1,plugin,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Activate"], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__7158,G__7158__$1,plugin,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.unload_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(G__7158,G__7158__$1,plugin,s__7151__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Unload"], null);

}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin)], null)),opencode_unified$plugins$plugin_manager_ui_$_iter__7150(cljs.core.rest(s__7151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(opencode_unified.plugins.get_loaded_plugins());
})()], null);

break;
case "available":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.available-plugins","div.available-plugins",-2033418264),(function (){var iter__5480__auto__ = (function opencode_unified$plugins$plugin_manager_ui_$_iter__7159(s__7160){
return (new cljs.core.LazySeq(null,(function (){
var s__7160__$1 = s__7160;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__7160__$1);
if(temp__5804__auto__){
var s__7160__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7160__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__7160__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__7162 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__7161 = (0);
while(true){
if((i__7161 < size__5479__auto__)){
var plugin = cljs.core._nth(c__5478__auto__,i__7161);
cljs.core.chunk_append(b__7162,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"v",new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(plugin)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Already loaded"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__7161,plugin,c__5478__auto__,size__5479__auto__,b__7162,s__7160__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.load_plugin(plugin);
});})(i__7161,plugin,c__5478__auto__,size__5479__auto__,b__7162,s__7160__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Load"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)));

var G__7316 = (i__7161 + (1));
i__7161 = G__7316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7162),opencode_unified$plugins$plugin_manager_ui_$_iter__7159(cljs.core.chunk_rest(s__7160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7162),null);
}
} else {
var plugin = cljs.core.first(s__7160__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"v",new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(plugin)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Already loaded"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (plugin,s__7160__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab){
return (function (){
return opencode_unified.plugins.load_plugin(plugin);
});})(plugin,s__7160__$2,temp__5804__auto__,G__7149,G__7149__$1,active_tab))
], null),"Load"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)),opencode_unified$plugins$plugin_manager_ui_$_iter__7159(cljs.core.rest(s__7160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"available-plugins","available-plugins",1884325526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.plugins.plugin_state)));
})()], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7149__$1)].join('')));

}
})()], null)], null);
});
});
/**
 * Get all registered hooks
 */
opencode_unified.plugins.get_plugin_hooks = (function opencode_unified$plugins$get_plugin_hooks(){
return new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.plugins.plugin_state));
});

//# sourceMappingURL=opencode_unified.plugins.js.map
