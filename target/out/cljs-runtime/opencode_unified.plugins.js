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
try{var required_fields_19101 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
var seq__18818_19102 = cljs.core.seq(required_fields_19101);
var chunk__18819_19103 = null;
var count__18820_19104 = (0);
var i__18821_19105 = (0);
while(true){
if((i__18821_19105 < count__18820_19104)){
var field_19106 = chunk__18819_19103.cljs$core$IIndexed$_nth$arity$2(null,i__18821_19105);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin_metadata,field_19106) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing required field: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_19106)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field_19106,new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin_metadata], null));
} else {
}


var G__19107 = seq__18818_19102;
var G__19108 = chunk__18819_19103;
var G__19109 = count__18820_19104;
var G__19110 = (i__18821_19105 + (1));
seq__18818_19102 = G__19107;
chunk__18819_19103 = G__19108;
count__18820_19104 = G__19109;
i__18821_19105 = G__19110;
continue;
} else {
var temp__5804__auto___19111 = cljs.core.seq(seq__18818_19102);
if(temp__5804__auto___19111){
var seq__18818_19115__$1 = temp__5804__auto___19111;
if(cljs.core.chunked_seq_QMARK_(seq__18818_19115__$1)){
var c__5525__auto___19116 = cljs.core.chunk_first(seq__18818_19115__$1);
var G__19117 = cljs.core.chunk_rest(seq__18818_19115__$1);
var G__19118 = c__5525__auto___19116;
var G__19119 = cljs.core.count(c__5525__auto___19116);
var G__19120 = (0);
seq__18818_19102 = G__19117;
chunk__18819_19103 = G__19118;
count__18820_19104 = G__19119;
i__18821_19105 = G__19120;
continue;
} else {
var field_19121 = cljs.core.first(seq__18818_19115__$1);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin_metadata,field_19121) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing required field: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_19121)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field_19121,new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin_metadata], null));
} else {
}


var G__19122 = cljs.core.next(seq__18818_19115__$1);
var G__19123 = null;
var G__19124 = (0);
var G__19125 = (0);
seq__18818_19102 = G__19122;
chunk__18819_19103 = G__19123;
count__18820_19104 = G__19124;
i__18821_19105 = G__19125;
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
}catch (e18816){if((e18816 instanceof Error)){
var e = e18816;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid","valid",155614240),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e18816;

}
}});
/**
 * Register plugin hooks for a specific plugin
 */
opencode_unified.plugins.register_plugin_hooks = (function opencode_unified$plugins$register_plugin_hooks(plugin_id,hooks){
var seq__18826 = cljs.core.seq(hooks);
var chunk__18827 = null;
var count__18828 = (0);
var i__18829 = (0);
while(true){
if((i__18829 < count__18828)){
var hook_type = chunk__18827.cljs$core$IIndexed$_nth$arity$2(null,i__18829);
if(cljs.core.contains_QMARK_(cljs.core.set(opencode_unified.plugins.hook_types),hook_type)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));
} else {
}


var G__19129 = seq__18826;
var G__19130 = chunk__18827;
var G__19131 = count__18828;
var G__19132 = (i__18829 + (1));
seq__18826 = G__19129;
chunk__18827 = G__19130;
count__18828 = G__19131;
i__18829 = G__19132;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18826);
if(temp__5804__auto__){
var seq__18826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18826__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18826__$1);
var G__19133 = cljs.core.chunk_rest(seq__18826__$1);
var G__19134 = c__5525__auto__;
var G__19135 = cljs.core.count(c__5525__auto__);
var G__19136 = (0);
seq__18826 = G__19133;
chunk__18827 = G__19134;
count__18828 = G__19135;
i__18829 = G__19136;
continue;
} else {
var hook_type = cljs.core.first(seq__18826__$1);
if(cljs.core.contains_QMARK_(cljs.core.set(opencode_unified.plugins.hook_types),hook_type)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));
} else {
}


var G__19137 = cljs.core.next(seq__18826__$1);
var G__19138 = null;
var G__19139 = (0);
var G__19140 = (0);
seq__18826 = G__19137;
chunk__18827 = G__19138;
count__18828 = G__19139;
i__18829 = G__19140;
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
var seq__18856 = cljs.core.seq(opencode_unified.plugins.hook_types);
var chunk__18857 = null;
var count__18858 = (0);
var i__18859 = (0);
while(true){
if((i__18859 < count__18858)){
var hook_type = chunk__18857.cljs$core$IIndexed$_nth$arity$2(null,i__18859);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),((function (seq__18856,chunk__18857,count__18858,i__18859,hook_type){
return (function (hooks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (seq__18856,chunk__18857,count__18858,i__18859,hook_type){
return (function (p1__18844_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18844_SHARP_,plugin_id);
});})(seq__18856,chunk__18857,count__18858,i__18859,hook_type))
,hooks);
});})(seq__18856,chunk__18857,count__18858,i__18859,hook_type))
);


var G__19144 = seq__18856;
var G__19145 = chunk__18857;
var G__19146 = count__18858;
var G__19147 = (i__18859 + (1));
seq__18856 = G__19144;
chunk__18857 = G__19145;
count__18858 = G__19146;
i__18859 = G__19147;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18856);
if(temp__5804__auto__){
var seq__18856__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18856__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18856__$1);
var G__19148 = cljs.core.chunk_rest(seq__18856__$1);
var G__19149 = c__5525__auto__;
var G__19150 = cljs.core.count(c__5525__auto__);
var G__19151 = (0);
seq__18856 = G__19148;
chunk__18857 = G__19149;
count__18858 = G__19150;
i__18859 = G__19151;
continue;
} else {
var hook_type = cljs.core.first(seq__18856__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-hooks","plugin-hooks",-1938326263),hook_type], null),((function (seq__18856,chunk__18857,count__18858,i__18859,hook_type,seq__18856__$1,temp__5804__auto__){
return (function (hooks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (seq__18856,chunk__18857,count__18858,i__18859,hook_type,seq__18856__$1,temp__5804__auto__){
return (function (p1__18844_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18844_SHARP_,plugin_id);
});})(seq__18856,chunk__18857,count__18858,i__18859,hook_type,seq__18856__$1,temp__5804__auto__))
,hooks);
});})(seq__18856,chunk__18857,count__18858,i__18859,hook_type,seq__18856__$1,temp__5804__auto__))
);


var G__19152 = cljs.core.next(seq__18856__$1);
var G__19153 = null;
var G__19154 = (0);
var G__19155 = (0);
seq__18856 = G__19152;
chunk__18857 = G__19153;
count__18858 = G__19154;
i__18859 = G__19155;
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
var len__5726__auto___19156 = arguments.length;
var i__5727__auto___19157 = (0);
while(true){
if((i__5727__auto___19157 < len__5726__auto___19156)){
args__5732__auto__.push((arguments[i__5727__auto___19157]));

var G__19158 = (i__5727__auto___19157 + (1));
i__5727__auto___19157 = G__19158;
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
var seq__18920 = cljs.core.seq(plugin_ids);
var chunk__18921 = null;
var count__18922 = (0);
var i__18923 = (0);
while(true){
if((i__18923 < count__18922)){
var plugin_id = chunk__18921.cljs$core$IIndexed$_nth$arity$2(null,i__18923);
var temp__5804__auto___19165 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null));
if(cljs.core.truth_(temp__5804__auto___19165)){
var plugin_19166 = temp__5804__auto___19165;
var temp__5804__auto___19167__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin_19166,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"hooks","hooks",-413590103),hook_type], null));
if(cljs.core.truth_(temp__5804__auto___19167__$1)){
var hook_fn_19168 = temp__5804__auto___19167__$1;
try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hook_fn_19168,args);
}catch (e18928){if((e18928 instanceof Error)){
var e_19169 = e18928;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error executing hook",hook_type,"for plugin",plugin_id,":",e_19169.message], 0));
} else {
throw e18928;

}
}} else {
}
} else {
}


var G__19170 = seq__18920;
var G__19171 = chunk__18921;
var G__19172 = count__18922;
var G__19173 = (i__18923 + (1));
seq__18920 = G__19170;
chunk__18921 = G__19171;
count__18922 = G__19172;
i__18923 = G__19173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18920);
if(temp__5804__auto__){
var seq__18920__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18920__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18920__$1);
var G__19174 = cljs.core.chunk_rest(seq__18920__$1);
var G__19175 = c__5525__auto__;
var G__19176 = cljs.core.count(c__5525__auto__);
var G__19177 = (0);
seq__18920 = G__19174;
chunk__18921 = G__19175;
count__18922 = G__19176;
i__18923 = G__19177;
continue;
} else {
var plugin_id = cljs.core.first(seq__18920__$1);
var temp__5804__auto___19178__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null));
if(cljs.core.truth_(temp__5804__auto___19178__$1)){
var plugin_19179 = temp__5804__auto___19178__$1;
var temp__5804__auto___19180__$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin_19179,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"hooks","hooks",-413590103),hook_type], null));
if(cljs.core.truth_(temp__5804__auto___19180__$2)){
var hook_fn_19181 = temp__5804__auto___19180__$2;
try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hook_fn_19181,args);
}catch (e18930){if((e18930 instanceof Error)){
var e_19182 = e18930;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error executing hook",hook_type,"for plugin",plugin_id,":",e_19182.message], 0));
} else {
throw e18930;

}
}} else {
}
} else {
}


var G__19183 = cljs.core.next(seq__18920__$1);
var G__19184 = null;
var G__19185 = (0);
var G__19186 = (0);
seq__18920 = G__19183;
chunk__18921 = G__19184;
count__18922 = G__19185;
i__18923 = G__19186;
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
(opencode_unified.plugins.execute_hook.cljs$lang$applyTo = (function (seq18914){
var G__18916 = cljs.core.first(seq18914);
var seq18914__$1 = cljs.core.next(seq18914);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18916,seq18914__$1);
}));

/**
 * Load a plugin from its metadata
 */
opencode_unified.plugins.load_plugin = (function opencode_unified$plugins$load_plugin(plugin_metadata){
var plugin_id = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin_metadata);
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),plugin_metadata,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"loaded-at","loaded-at",1251850584),(new Date())], null));

var validation_19187 = opencode_unified.plugins.validate_plugin(plugin_metadata);
if(cljs.core.truth_(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(validation_19187))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(validation_19187),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin_metadata], null));
}

var plugin_namespace = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["opencode-unified.plugins.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin_metadata))].join(''));
var plugin_instance = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),plugin_id,new cljs.core.Keyword(null,"namespace","namespace",-377510372),plugin_namespace,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$2(plugin_metadata,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$2(plugin_metadata,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"instance","instance",-2121349050),plugin_instance,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)], null)], 0)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(plugin_metadata))){
opencode_unified.plugins.register_plugin_hooks(plugin_id,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(plugin_metadata));
} else {
}

var temp__5804__auto___19191 = new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(plugin_metadata);
if(cljs.core.truth_(temp__5804__auto___19191)){
var commands_19192 = temp__5804__auto___19191;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update,new cljs.core.Keyword(null,"plugin-commands","plugin-commands",1439817142),cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18933_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18933_SHARP_,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id);
}),commands_19192)], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin loaded:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e18938){if((e18938 instanceof Error)){
var e = e18938;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error loading plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e18938;

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

var temp__5804__auto___19197 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"activate","activate",441219614)], null));
if(cljs.core.truth_(temp__5804__auto___19197)){
var activate_fn_19198 = temp__5804__auto___19197;
var G__18948_19199 = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(plugin);
(activate_fn_19198.cljs$core$IFn$_invoke$arity$1 ? activate_fn_19198.cljs$core$IFn$_invoke$arity$1(G__18948_19199) : activate_fn_19198.call(null,G__18948_19199));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),plugin_id], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"active","active",1895962068));

opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"plugin-activated","plugin-activated",470917953),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin activated:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e18945){if((e18945 instanceof Error)){
var e = e18945;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error activating plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e18945;

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

var temp__5804__auto___19201 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(plugin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"deactivate","deactivate",-1313810707)], null));
if(cljs.core.truth_(temp__5804__auto___19201)){
var deactivate_fn_19202 = temp__5804__auto___19201;
(deactivate_fn_19202.cljs$core$IFn$_invoke$arity$0 ? deactivate_fn_19202.cljs$core$IFn$_invoke$arity$0() : deactivate_fn_19202.call(null));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),plugin_id], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plugin,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update,new cljs.core.Keyword(null,"active-plugins","active-plugins",-713061836),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"plugin-deactivated","plugin-deactivated",1256879714),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin deactivated:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e18950){if((e18950 instanceof Error)){
var e = e18950;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error deactivating plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e18950;

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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18955_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(p1__18955_SHARP_),plugin_id);
}),commands);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(opencode_unified.plugins.plugin_state,cljs.core.update,new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Plugin unloaded:",plugin_id], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395),plugin_id], null);
}catch (e18964){if((e18964 instanceof Error)){
var e = e18964;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-error","last-error",1848699973),e.message);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error unloading plugin",plugin_id,":",e.message], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e18964;

}
}});
/**
 * Discover available plugins in the plugins directory
 */
opencode_unified.plugins.discover_plugins = (function opencode_unified$plugins$discover_plugins(){
var configured = (function (){var G__18966 = window;
var G__18966__$1 = (((G__18966 == null))?null:(G__18966["__OPENCODE_PLUGINS__"]));
if((G__18966__$1 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__18966__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
})();
if(cljs.core.vector_QMARK_(configured)){
return configured;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Initialize the plugin system
 */
opencode_unified.plugins.initialize_plugin_system = (function opencode_unified$plugins$initialize_plugin_system(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing plugin system..."], 0));

var plugins_19204 = opencode_unified.plugins.discover_plugins();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(opencode_unified.plugins.plugin_state,cljs.core.assoc,new cljs.core.Keyword(null,"available-plugins","available-plugins",1884325526),plugins_19204);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Discovered",cljs.core.count(plugins_19204),"plugins"], 0));

var seq__18970_19205 = cljs.core.seq(new cljs.core.Keyword(null,"available-plugins","available-plugins",1884325526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(opencode_unified.plugins.plugin_state)));
var chunk__18971_19206 = null;
var count__18972_19207 = (0);
var i__18973_19208 = (0);
while(true){
if((i__18973_19208 < count__18972_19207)){
var plugin_19209 = chunk__18971_19206.cljs$core$IIndexed$_nth$arity$2(null,i__18973_19208);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(plugin_19209))){
var result_19210 = opencode_unified.plugins.load_plugin(plugin_19209);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result_19210))){
opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(result_19210));
} else {
}
} else {
}


var G__19211 = seq__18970_19205;
var G__19212 = chunk__18971_19206;
var G__19213 = count__18972_19207;
var G__19214 = (i__18973_19208 + (1));
seq__18970_19205 = G__19211;
chunk__18971_19206 = G__19212;
count__18972_19207 = G__19213;
i__18973_19208 = G__19214;
continue;
} else {
var temp__5804__auto___19215 = cljs.core.seq(seq__18970_19205);
if(temp__5804__auto___19215){
var seq__18970_19216__$1 = temp__5804__auto___19215;
if(cljs.core.chunked_seq_QMARK_(seq__18970_19216__$1)){
var c__5525__auto___19217 = cljs.core.chunk_first(seq__18970_19216__$1);
var G__19218 = cljs.core.chunk_rest(seq__18970_19216__$1);
var G__19219 = c__5525__auto___19217;
var G__19220 = cljs.core.count(c__5525__auto___19217);
var G__19221 = (0);
seq__18970_19205 = G__19218;
chunk__18971_19206 = G__19219;
count__18972_19207 = G__19220;
i__18973_19208 = G__19221;
continue;
} else {
var plugin_19222 = cljs.core.first(seq__18970_19216__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(plugin_19222))){
var result_19226 = opencode_unified.plugins.load_plugin(plugin_19222);
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result_19226))){
opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(result_19226));
} else {
}
} else {
}


var G__19227 = cljs.core.next(seq__18970_19216__$1);
var G__19228 = null;
var G__19229 = (0);
var G__19230 = (0);
seq__18970_19205 = G__19227;
chunk__18971_19206 = G__19228;
count__18972_19207 = G__19229;
i__18973_19208 = G__19230;
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
var seq__18987_19231 = cljs.core.seq(new_buffers);
var chunk__18988_19232 = null;
var count__18989_19233 = (0);
var i__18990_19234 = (0);
while(true){
if((i__18990_19234 < count__18989_19233)){
var vec__19000_19235 = chunk__18988_19232.cljs$core$IIndexed$_nth$arity$2(null,i__18990_19234);
var buffer_id_19236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19000_19235,(0),null);
var buffer_19237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19000_19235,(1),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id_19236))){
} else {
opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buffer-created","buffer-created",-997519470),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([buffer_19237], 0));
}


var G__19238 = seq__18987_19231;
var G__19239 = chunk__18988_19232;
var G__19240 = count__18989_19233;
var G__19241 = (i__18990_19234 + (1));
seq__18987_19231 = G__19238;
chunk__18988_19232 = G__19239;
count__18989_19233 = G__19240;
i__18990_19234 = G__19241;
continue;
} else {
var temp__5804__auto___19243 = cljs.core.seq(seq__18987_19231);
if(temp__5804__auto___19243){
var seq__18987_19244__$1 = temp__5804__auto___19243;
if(cljs.core.chunked_seq_QMARK_(seq__18987_19244__$1)){
var c__5525__auto___19245 = cljs.core.chunk_first(seq__18987_19244__$1);
var G__19246 = cljs.core.chunk_rest(seq__18987_19244__$1);
var G__19247 = c__5525__auto___19245;
var G__19248 = cljs.core.count(c__5525__auto___19245);
var G__19249 = (0);
seq__18987_19231 = G__19246;
chunk__18988_19232 = G__19247;
count__18989_19233 = G__19248;
i__18990_19234 = G__19249;
continue;
} else {
var vec__19003_19250 = cljs.core.first(seq__18987_19244__$1);
var buffer_id_19251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19003_19250,(0),null);
var buffer_19252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19003_19250,(1),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id_19251))){
} else {
opencode_unified.plugins.execute_hook.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"buffer-created","buffer-created",-997519470),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([buffer_19252], 0));
}


var G__19253 = cljs.core.next(seq__18987_19244__$1);
var G__19254 = null;
var G__19255 = (0);
var G__19256 = (0);
seq__18987_19231 = G__19253;
chunk__18988_19232 = G__19254;
count__18989_19233 = G__19255;
i__18990_19234 = G__19256;
continue;
}
} else {
}
}
break;
}

var seq__19007 = cljs.core.seq(new_buffers);
var chunk__19008 = null;
var count__19009 = (0);
var i__19010 = (0);
while(true){
if((i__19010 < count__19009)){
var vec__19023 = chunk__19008.cljs$core$IIndexed$_nth$arity$2(null,i__19010);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19023,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19023,(1),null);
var old_buffer_19257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id);
if(cljs.core.truth_((function (){var and__5000__auto__ = old_buffer_19257;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = buffer;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(old_buffer_19257));
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


var G__19259 = seq__19007;
var G__19260 = chunk__19008;
var G__19261 = count__19009;
var G__19262 = (i__19010 + (1));
seq__19007 = G__19259;
chunk__19008 = G__19260;
count__19009 = G__19261;
i__19010 = G__19262;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19007);
if(temp__5804__auto__){
var seq__19007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19007__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19007__$1);
var G__19263 = cljs.core.chunk_rest(seq__19007__$1);
var G__19264 = c__5525__auto__;
var G__19265 = cljs.core.count(c__5525__auto__);
var G__19266 = (0);
seq__19007 = G__19263;
chunk__19008 = G__19264;
count__19009 = G__19265;
i__19010 = G__19266;
continue;
} else {
var vec__19029 = cljs.core.first(seq__19007__$1);
var buffer_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19029,(0),null);
var buffer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19029,(1),null);
var old_buffer_19267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_buffers,buffer_id);
if(cljs.core.truth_((function (){var and__5000__auto__ = old_buffer_19267;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = buffer;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(old_buffer_19267));
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


var G__19268 = cljs.core.next(seq__19007__$1);
var G__19269 = null;
var G__19270 = (0);
var G__19271 = (0);
seq__19007 = G__19268;
chunk__19008 = G__19269;
count__19009 = G__19270;
i__19010 = G__19271;
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
var len__5726__auto___19273 = arguments.length;
var i__5727__auto___19274 = (0);
while(true){
if((i__5727__auto___19274 < len__5726__auto___19273)){
args__5732__auto__.push((arguments[i__5727__auto___19274]));

var G__19275 = (i__5727__auto___19274 + (1));
i__5727__auto___19274 = G__19275;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return opencode_unified.plugins.execute_plugin_command.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(opencode_unified.plugins.execute_plugin_command.cljs$core$IFn$_invoke$arity$variadic = (function (command_name,args){
var temp__5804__auto__ = cljs.core.some((function (p1__19054_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19054_SHARP_),command_name)){
return p1__19054_SHARP_;
} else {
return null;
}
}),opencode_unified.plugins.get_plugin_commands());
if(cljs.core.truth_(temp__5804__auto__)){
var command = temp__5804__auto__;
try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(command),args);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),true], null);
}catch (e19073){if((e19073 instanceof Error)){
var e = e19073;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e19073;

}
}} else {
return null;
}
}));

(opencode_unified.plugins.execute_plugin_command.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(opencode_unified.plugins.execute_plugin_command.cljs$lang$applyTo = (function (seq19059){
var G__19060 = cljs.core.first(seq19059);
var seq19059__$1 = cljs.core.next(seq19059);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19060,seq19059__$1);
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
})], null),"Available Plugins"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-content","div.plugin-content",1944130618),(function (){var G__19087 = cljs.core.deref(active_tab);
var G__19087__$1 = (((G__19087 instanceof cljs.core.Keyword))?G__19087.fqn:null);
switch (G__19087__$1) {
case "loaded":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loaded-plugins","div.loaded-plugins",302517401),(function (){var iter__5480__auto__ = (function opencode_unified$plugins$plugin_manager_ui_$_iter__19088(s__19089){
return (new cljs.core.LazySeq(null,(function (){
var s__19089__$1 = s__19089;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19089__$1);
if(temp__5804__auto__){
var s__19089__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19089__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19089__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19091 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19090 = (0);
while(true){
if((i__19090 < size__5479__auto__)){
var plugin = cljs.core._nth(c__5478__auto__,i__19090);
cljs.core.chunk_append(b__19091,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plugin-state","span.plugin-state",1301424781),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opencode_unified.plugins.plugin_states,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(function (){var G__19092 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin);
var G__19092__$1 = (((G__19092 instanceof cljs.core.Keyword))?G__19092.fqn:null);
switch (G__19092__$1) {
case "active":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19090,G__19092,G__19092__$1,plugin,c__5478__auto__,size__5479__auto__,b__19091,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.deactivate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(i__19090,G__19092,G__19092__$1,plugin,c__5478__auto__,size__5479__auto__,b__19091,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Deactivate"], null);

break;
case "loaded":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19090,G__19092,G__19092__$1,plugin,c__5478__auto__,size__5479__auto__,b__19091,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(i__19090,G__19092,G__19092__$1,plugin,c__5478__auto__,size__5479__auto__,b__19091,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Activate"], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19090,G__19092,G__19092__$1,plugin,c__5478__auto__,size__5479__auto__,b__19091,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.unload_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(i__19090,G__19092,G__19092__$1,plugin,c__5478__auto__,size__5479__auto__,b__19091,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Unload"], null);

}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin)], null)));

var G__19285 = (i__19090 + (1));
i__19090 = G__19285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19091),opencode_unified$plugins$plugin_manager_ui_$_iter__19088(cljs.core.chunk_rest(s__19089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19091),null);
}
} else {
var plugin = cljs.core.first(s__19089__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plugin-state","span.plugin-state",1301424781),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opencode_unified.plugins.plugin_states,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(function (){var G__19093 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(plugin);
var G__19093__$1 = (((G__19093 instanceof cljs.core.Keyword))?G__19093.fqn:null);
switch (G__19093__$1) {
case "active":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__19093,G__19093__$1,plugin,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.deactivate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(G__19093,G__19093__$1,plugin,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Deactivate"], null);

break;
case "loaded":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__19093,G__19093__$1,plugin,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.activate_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(G__19093,G__19093__$1,plugin,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Activate"], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__19093,G__19093__$1,plugin,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.unload_plugin(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin));
});})(G__19093,G__19093__$1,plugin,s__19089__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Unload"], null);

}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(plugin)], null)),opencode_unified$plugins$plugin_manager_ui_$_iter__19088(cljs.core.rest(s__19089__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.available-plugins","div.available-plugins",-2033418264),(function (){var iter__5480__auto__ = (function opencode_unified$plugins$plugin_manager_ui_$_iter__19094(s__19095){
return (new cljs.core.LazySeq(null,(function (){
var s__19095__$1 = s__19095;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19095__$1);
if(temp__5804__auto__){
var s__19095__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19095__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19095__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19097 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19096 = (0);
while(true){
if((i__19096 < size__5479__auto__)){
var plugin = cljs.core._nth(c__5478__auto__,i__19096);
cljs.core.chunk_append(b__19097,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"v",new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(plugin)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Already loaded"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19096,plugin,c__5478__auto__,size__5479__auto__,b__19097,s__19095__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.load_plugin(plugin);
});})(i__19096,plugin,c__5478__auto__,size__5479__auto__,b__19097,s__19095__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Load"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)));

var G__19292 = (i__19096 + (1));
i__19096 = G__19292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19097),opencode_unified$plugins$plugin_manager_ui_$_iter__19094(cljs.core.chunk_rest(s__19095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19097),null);
}
} else {
var plugin = cljs.core.first(s__19095__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-item","div.plugin-item",325113644),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-info","div.plugin-info",-549357861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(plugin)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"v",new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(plugin)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plugin-actions","div.plugin-actions",-1982375481),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opencode_unified.plugins.plugin_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-plugins","loaded-plugins",1501837193),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Already loaded"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (plugin,s__19095__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab){
return (function (){
return opencode_unified.plugins.load_plugin(plugin);
});})(plugin,s__19095__$2,temp__5804__auto__,G__19087,G__19087__$1,active_tab))
], null),"Load"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin)], null)),opencode_unified$plugins$plugin_manager_ui_$_iter__19094(cljs.core.rest(s__19095__$2)));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19087__$1)].join('')));

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
