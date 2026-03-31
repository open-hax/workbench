function createOpencodeClient$$module$src$clojurescript$mocks$opencode_sdk(config) {
  return {session:{list:function() {
    return Promise.resolve({data:{sessions:[{id:"test-session-1", title:"First Test Session"}, {sessionID:"test-session-2", title:"Second Test Session"}, {sessionId:"test-session-3", title:"Third Test Session"}]}});
  }, create:function() {
    return Promise.resolve({data:{id:"mock-session"}});
  }, get:function() {
    return Promise.resolve({data:{id:"mock-session"}});
  }}};
}
/** @const */ 
var module$src$clojurescript$mocks$opencode_sdk = {};
/** @const */ 
module$src$clojurescript$mocks$opencode_sdk.createOpencodeClient = createOpencodeClient$$module$src$clojurescript$mocks$opencode_sdk;

$CLJS.module$src$clojurescript$mocks$opencode_sdk=module$src$clojurescript$mocks$opencode_sdk;
global.module$src$clojurescript$mocks$opencode_sdk = module$src$clojurescript$mocks$opencode_sdk;
global.createOpencodeClient$$module$src$clojurescript$mocks$opencode_sdk = createOpencodeClient$$module$src$clojurescript$mocks$opencode_sdk;
//# sourceMappingURL=module$src$clojurescript$mocks$opencode_sdk.js.map
