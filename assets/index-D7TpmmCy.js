(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Kx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zf={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function Qx(){if(Zg)return yo;Zg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=e,yo.jsx=i,yo.jsxs=i,yo}var Kg;function Jx(){return Kg||(Kg=1,zf.exports=Qx()),zf.exports}var A=Jx(),Bf={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function $x(){if(Qg)return rt;Qg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(N,ee,xe){this.props=N,this.context=ee,this.refs=C,this.updater=xe||M}S.prototype.isReactComponent={},S.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=S.prototype;function z(N,ee,xe){this.props=N,this.context=ee,this.refs=C,this.updater=xe||M}var O=z.prototype=new v;O.constructor=z,T(O,S.prototype),O.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function B(N,ee,xe,Se,J,me){return xe=me.ref,{$$typeof:s,type:N,key:ee,ref:xe!==void 0?xe:null,props:me}}function X(N,ee){return B(N.type,ee,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function w(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xe){return ee[xe]})}var V=/\/+/g;function le(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):ee.toString(36)}function oe(){}function _e(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(oe,oe):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function he(N,ee,xe,Se,J){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(me){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case s:case e:Me=!0;break;case g:return Me=N._init,he(Me(N._payload),ee,xe,Se,J)}}if(Me)return J=J(N),Me=Se===""?"."+le(N,0):Se,U(J)?(xe="",Me!=null&&(xe=Me.replace(V,"$&/")+"/"),he(J,ee,xe,"",function(ot){return ot})):J!=null&&(D(J)&&(J=X(J,xe+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Me)),ee.push(J)),1;Me=0;var Re=Se===""?".":Se+":";if(U(N))for(var Ce=0;Ce<N.length;Ce++)Se=N[Ce],me=Re+le(Se,Ce),Me+=he(Se,ee,xe,me,J);else if(Ce=x(N),typeof Ce=="function")for(N=Ce.call(N),Ce=0;!(Se=N.next()).done;)Se=Se.value,me=Re+le(Se,Ce++),Me+=he(Se,ee,xe,me,J);else if(me==="object"){if(typeof N.then=="function")return he(_e(N),ee,xe,Se,J);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Me}function I(N,ee,xe){if(N==null)return N;var Se=[],J=0;return he(N,Se,"","",function(me){return ee.call(xe,me,J++)}),Se}function K(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(xe){(N._status===0||N._status===-1)&&(N._status=1,N._result=xe)},function(xe){(N._status===0||N._status===-1)&&(N._status=2,N._result=xe)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function be(){}return rt.Children={map:I,forEach:function(N,ee,xe){I(N,function(){ee.apply(this,arguments)},xe)},count:function(N){var ee=0;return I(N,function(){ee++}),ee},toArray:function(N){return I(N,function(ee){return ee})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=z,rt.StrictMode=r,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return G.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cloneElement=function(N,ee,xe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Se=T({},N.props),J=N.key,me=void 0;if(ee!=null)for(Me in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!F.call(ee,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&ee.ref===void 0||(Se[Me]=ee[Me]);var Me=arguments.length-2;if(Me===1)Se.children=xe;else if(1<Me){for(var Re=Array(Me),Ce=0;Ce<Me;Ce++)Re[Ce]=arguments[Ce+2];Se.children=Re}return B(N.type,J,void 0,void 0,me,Se)},rt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},rt.createElement=function(N,ee,xe){var Se,J={},me=null;if(ee!=null)for(Se in ee.key!==void 0&&(me=""+ee.key),ee)F.call(ee,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(J[Se]=ee[Se]);var Me=arguments.length-2;if(Me===1)J.children=xe;else if(1<Me){for(var Re=Array(Me),Ce=0;Ce<Me;Ce++)Re[Ce]=arguments[Ce+2];J.children=Re}if(N&&N.defaultProps)for(Se in Me=N.defaultProps,Me)J[Se]===void 0&&(J[Se]=Me[Se]);return B(N,me,void 0,void 0,null,J)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:h,render:N}},rt.isValidElement=D,rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},rt.memo=function(N,ee){return{$$typeof:m,type:N,compare:ee===void 0?null:ee}},rt.startTransition=function(N){var ee=G.T,xe={};G.T=xe;try{var Se=N(),J=G.S;J!==null&&J(xe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(be,Y)}catch(me){Y(me)}finally{G.T=ee}},rt.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},rt.use=function(N){return G.H.use(N)},rt.useActionState=function(N,ee,xe){return G.H.useActionState(N,ee,xe)},rt.useCallback=function(N,ee){return G.H.useCallback(N,ee)},rt.useContext=function(N){return G.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,ee){return G.H.useDeferredValue(N,ee)},rt.useEffect=function(N,ee,xe){var Se=G.H;if(typeof xe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(N,ee)},rt.useId=function(){return G.H.useId()},rt.useImperativeHandle=function(N,ee,xe){return G.H.useImperativeHandle(N,ee,xe)},rt.useInsertionEffect=function(N,ee){return G.H.useInsertionEffect(N,ee)},rt.useLayoutEffect=function(N,ee){return G.H.useLayoutEffect(N,ee)},rt.useMemo=function(N,ee){return G.H.useMemo(N,ee)},rt.useOptimistic=function(N,ee){return G.H.useOptimistic(N,ee)},rt.useReducer=function(N,ee,xe){return G.H.useReducer(N,ee,xe)},rt.useRef=function(N){return G.H.useRef(N)},rt.useState=function(N){return G.H.useState(N)},rt.useSyncExternalStore=function(N,ee,xe){return G.H.useSyncExternalStore(N,ee,xe)},rt.useTransition=function(){return G.H.useTransition()},rt.version="19.1.0",rt}var Jg;function uh(){return Jg||(Jg=1,Bf.exports=$x()),Bf.exports}var Ct=uh();const fh=Kx(Ct);var Ff={exports:{}},So={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function ey(){return $g||($g=1,function(s){function e(I,K){var Y=I.length;I.push(K);e:for(;0<Y;){var be=Y-1>>>1,N=I[be];if(0<l(N,K))I[be]=K,I[Y]=N,Y=be;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var K=I[0],Y=I.pop();if(Y!==K){I[0]=Y;e:for(var be=0,N=I.length,ee=N>>>1;be<ee;){var xe=2*(be+1)-1,Se=I[xe],J=xe+1,me=I[J];if(0>l(Se,Y))J<N&&0>l(me,Se)?(I[be]=me,I[J]=Y,be=J):(I[be]=Se,I[xe]=Y,be=xe);else if(J<N&&0>l(me,Y))I[be]=me,I[J]=Y,be=J;else break e}}return K}function l(I,K){var Y=I.sortIndex-K.sortIndex;return Y!==0?Y:I.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,_=null,x=3,M=!1,T=!1,C=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=I)r(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function G(I){if(C=!1,U(I),!T)if(i(p)!==null)T=!0,F||(F=!0,le());else{var K=i(m);K!==null&&he(G,K.startTime-I)}}var F=!1,B=-1,X=5,D=-1;function w(){return S?!0:!(s.unstable_now()-D<X)}function V(){if(S=!1,F){var I=s.unstable_now();D=I;var K=!0;try{e:{T=!1,C&&(C=!1,z(B),B=-1),M=!0;var Y=x;try{t:{for(U(I),_=i(p);_!==null&&!(_.expirationTime>I&&w());){var be=_.callback;if(typeof be=="function"){_.callback=null,x=_.priorityLevel;var N=be(_.expirationTime<=I);if(I=s.unstable_now(),typeof N=="function"){_.callback=N,U(I),K=!0;break t}_===i(p)&&r(p),U(I)}else r(p);_=i(p)}if(_!==null)K=!0;else{var ee=i(m);ee!==null&&he(G,ee.startTime-I),K=!1}}break e}finally{_=null,x=Y,M=!1}K=void 0}}finally{K?le():F=!1}}}var le;if(typeof O=="function")le=function(){O(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,_e=oe.port2;oe.port1.onmessage=V,le=function(){_e.postMessage(null)}}else le=function(){v(V,0)};function he(I,K){B=v(function(){I(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return I()}finally{x=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=x;x=I;try{return K()}finally{x=Y}},s.unstable_scheduleCallback=function(I,K,Y){var be=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?be+Y:be):Y=be,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,I={id:g++,callback:K,priorityLevel:I,startTime:Y,expirationTime:N,sortIndex:-1},Y>be?(I.sortIndex=Y,e(m,I),i(p)===null&&I===i(m)&&(C?(z(B),B=-1):C=!0,he(G,Y-be))):(I.sortIndex=N,e(p,I),T||M||(T=!0,F||(F=!0,le()))),I},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(I){var K=x;return function(){var Y=x;x=K;try{return I.apply(this,arguments)}finally{x=Y}}}}(Gf)),Gf}var e0;function ty(){return e0||(e0=1,Hf.exports=ey()),Hf.exports}var Vf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function ny(){if(t0)return wn;t0=1;var s=uh();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,g)},wn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var n0;function iy(){if(n0)return Vf.exports;n0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vf.exports=ny(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function ay(){if(i0)return So;i0=1;var s=ty(),e=uh(),i=iy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===o)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,E=c.child;E;){if(E===a){y=!0,a=c,o=f;break}if(E===o){y=!0,o=c,a=f;break}E=E.sibling}if(!y){for(E=f.child;E;){if(E===a){y=!0,a=f,o=c;break}if(E===o){y=!0,o=f,a=c;break}E=E.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var he=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},be=[],N=-1;function ee(t){return{current:t}}function xe(t){0>N||(t.current=be[N],be[N]=null,N--)}function Se(t,n){N++,be[N]=t.current,t.current=n}var J=ee(null),me=ee(null),Me=ee(null),Re=ee(null);function Ce(t,n){switch(Se(Me,n),Se(me,t),Se(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=bg(n),t=Eg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xe(J),Se(J,t)}function ot(){xe(J),xe(me),xe(Me)}function Qe(t){t.memoizedState!==null&&Se(Re,t);var n=J.current,a=Eg(n,t.type);n!==a&&(Se(me,t),Se(J,a))}function Ot(t){me.current===t&&(xe(J),xe(me)),Re.current===t&&(xe(Re),mo._currentValue=Y)}var Ft=Object.prototype.hasOwnProperty,mt=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,xn=s.unstable_shouldYield,St=s.unstable_requestPaint,dt=s.unstable_now,Ve=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,Ye=s.unstable_UserBlockingPriority,at=s.unstable_NormalPriority,Jt=s.unstable_LowPriority,L=s.unstable_IdlePriority,b=s.log,te=s.unstable_setDisableYieldValue,fe=null,pe=null;function ce(t){if(typeof b=="function"&&te(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(fe,t)}catch{}}var Pe=Math.clz32?Math.clz32:ke,Ue=Math.log,Ge=Math.LN2;function ke(t){return t>>>=0,t===0?32:31-(Ue(t)/Ge|0)|0}var ye=256,Ie=4194304;function We(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?c=We(o):(y&=E,y!==0?c=We(y):a||(a=E&~t,a!==0&&(c=We(a))))):(E=o&~f,E!==0?c=We(E):y!==0?c=We(y):a||(a=o&~t,a!==0&&(c=We(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var t=ye;return ye<<=1,(ye&4194048)===0&&(ye=256),t}function Ne(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,n,a,o,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=y&~a;0<a;){var ue=31-Pe(a),ge=1<<ue;E[ue]=0,P[ue]=-1;var ne=$[ue];if(ne!==null)for($[ue]=null,ue=0;ue<ne.length;ue++){var ie=ne[ue];ie!==null&&(ie.lane&=-536870913)}a&=~ge}o!==0&&ve(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function ve(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Fe(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:kg(t.type))}function Vn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,yn="__reactProps$"+hn,On="__reactContainer$"+hn,ka="__reactEvents$"+hn,ko="__reactListeners$"+hn,jo="__reactHandles$"+hn,ja="__reactResources$"+hn,aa="__reactMarker$"+hn;function ra(t){delete t[on],delete t[yn],delete t[ka],delete t[ko],delete t[jo]}function Di(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[On]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=wg(t);t!==null;){if(a=t[on])return a;t=wg(t)}return n}t=a,a=t.parentNode}return null}function Ui(t){if(t=t[on]||t[On]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Xa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function sa(t){var n=t[ja];return n||(n=t[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[aa]=!0}var Xo=new Set,Wo={};function Ni(t,n){R(t,n),R(t+"Capture",n)}function R(t,n){for(Wo[t]=n,t=0;t<n.length;t++)Xo.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function Z(t){return Ft.call(re,t)?!0:Ft.call(ae,t)?!1:q.test(t)?re[t]=!0:(ae[t]=!0,!1)}function Te(t,n,a){if(Z(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function De(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Oe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Be,$e;function Ze(t){if(Be===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Be=n&&n[1]||"",$e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Be+t+$e}var je=!1;function ct(t,n){if(!t||je)return"";je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(ie){ne=ie}t.call(ge.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],E=f[1];if(y&&E){var P=y.split(`
`),$=E.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var ue=`
`+P[o].replace(" at new "," at ");return t.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",t.displayName)),ue}while(1<=o&&0<=c);break}}}finally{je=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ze(a):""}function At(t){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return Ze("Activity");default:return""}}function Vt(t){try{var n="";do n+=At(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _t(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t){var n=_t(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){t._valueTracker||(t._valueTracker=Ke(t))}function Mt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=_t(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Tn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var oa=/[\n"\\]/g;function kt(t){return t.replace(oa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(t,n,a,o,c,f,y,E){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vt(n)):t.value!==""+vt(n)&&(t.value=""+vt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?An(t,y,vt(n)):a!=null?An(t,y,vt(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+vt(E):t.removeAttribute("name")}function Ht(t,n,a,o,c,f,y,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=E?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function An(t,n,a){n==="number"&&Tn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vt(a):""}function Sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(he(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=vt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function _i(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bh(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Eh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&bh(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&bh(t,f,n[f])}function Pc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(t){return Zv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ic=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Er=null;function Th(t){var n=Ui(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Li(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[yn]||null;if(!c)throw Error(r(90));Li(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Mt(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var Bc=!1;function Ah(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var o=t(n);return o}finally{if(Bc=!1,(br!==null||Er!==null)&&(Nl(),br&&(n=br,t=Er,Er=br=null,Th(n),t)))for(n=0;n<t.length;n++)Th(t[n])}}function Rs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Pi)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Fc=!1}var la=null,Hc=null,Yo=null;function Rh(){if(Yo)return Yo;var t,n=Hc,a=n.length,o,c="value"in la?la.value:la.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return Yo=c.slice(t,1<o?1-o:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function wh(){return!1}function Pn(t){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=Pn(Wa),Cs=g({},Wa,{view:0,detail:0}),Kv=Pn(Cs),Gc,Vc,Ds,Jo=g({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(Gc=t.screenX-Ds.screenX,Vc=t.screenY-Ds.screenY):Vc=Gc=0,Ds=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),Ch=Pn(Jo),Qv=g({},Jo,{dataTransfer:0}),Jv=Pn(Qv),$v=g({},Cs,{relatedTarget:0}),kc=Pn($v),e_=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=Pn(e_),n_=g({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i_=Pn(n_),a_=g({},Wa,{data:0}),Dh=Pn(a_),r_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=o_[t])?!!n[t]:!1}function jc(){return l_}var c_=g({},Cs,{key:function(t){if(t.key){var n=r_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u_=Pn(c_),f_=g({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=Pn(f_),d_=g({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),h_=Pn(d_),p_=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=Pn(p_),g_=g({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v_=Pn(g_),__=g({},Wa,{newState:0,oldState:0}),x_=Pn(__),y_=[9,13,27,32],Xc=Pi&&"CompositionEvent"in window,Us=null;Pi&&"documentMode"in document&&(Us=document.documentMode);var S_=Pi&&"TextEvent"in window&&!Us,Nh=Pi&&(!Xc||Us&&8<Us&&11>=Us),Lh=" ",Oh=!1;function Ph(t,n){switch(t){case"keyup":return y_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function M_(t,n){switch(t){case"compositionend":return Ih(n);case"keypress":return n.which!==32?null:(Oh=!0,Lh);case"textInput":return t=n.data,t===Lh&&Oh?null:t;default:return null}}function b_(t,n){if(Tr)return t==="compositionend"||!Xc&&Ph(t,n)?(t=Rh(),Yo=Hc=la=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var E_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!E_[t.type]:n==="textarea"}function Bh(t,n,a,o){br?Er?Er.push(o):Er=[o]:br=o,n=Bl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ns=null,Ls=null;function T_(t){_g(t,0)}function $o(t){var n=Xa(t);if(Mt(n))return t}function Fh(t,n){if(t==="change")return n}var Hh=!1;if(Pi){var Wc;if(Pi){var qc="oninput"in document;if(!qc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),qc=typeof Gh.oninput=="function"}Wc=qc}else Wc=!1;Hh=Wc&&(!document.documentMode||9<document.documentMode)}function Vh(){Ns&&(Ns.detachEvent("onpropertychange",kh),Ls=Ns=null)}function kh(t){if(t.propertyName==="value"&&$o(Ls)){var n=[];Bh(n,Ls,t,zc(t)),Ah(T_,n)}}function A_(t,n,a){t==="focusin"?(Vh(),Ns=n,Ls=a,Ns.attachEvent("onpropertychange",kh)):t==="focusout"&&Vh()}function R_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Ls)}function w_(t,n){if(t==="click")return $o(n)}function C_(t,n){if(t==="input"||t==="change")return $o(n)}function D_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:D_;function Os(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ft.call(n,c)||!kn(t[c],n[c]))return!1}return!0}function jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,n){var a=jh(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jh(a)}}function Wh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Tn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Tn(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var U_=Pi&&"documentMode"in document&&11>=document.documentMode,Ar=null,Zc=null,Ps=null,Kc=!1;function Yh(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Ar==null||Ar!==Tn(o)||(o=Ar,"selectionStart"in o&&Yc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ps&&Os(Ps,o)||(Ps=o,o=Bl(Zc,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ar)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Rr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Qc={},Zh={};Pi&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Ya(t){if(Qc[t])return Qc[t];if(!Rr[t])return t;var n=Rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zh)return Qc[t]=n[a];return t}var Kh=Ya("animationend"),Qh=Ya("animationiteration"),Jh=Ya("animationstart"),N_=Ya("transitionrun"),L_=Ya("transitionstart"),O_=Ya("transitioncancel"),$h=Ya("transitionend"),ep=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function li(t,n){ep.set(t,n),Ni(n,[t])}var tp=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},tp.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var $n=[],wr=0,$c=0;function el(){for(var t=wr,n=$c=wr=0;n<t;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&np(a,c,f)}}function tl(t,n,a,o){$n[wr++]=t,$n[wr++]=n,$n[wr++]=a,$n[wr++]=o,$c|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function eu(t,n,a,o){return tl(t,n,a,o),nl(t)}function Cr(t,n){return tl(t,null,null,n),nl(t)}function np(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pe(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function nl(t){if(50<so)throw so=0,of=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Dr={};function P_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,o){return new P_(t,n,a,o)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ip(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function il(t,n,a,o,c,f){var y=0;if(o=t,typeof t=="function")tu(t)&&(y=1);else if(typeof t=="string")y=zx(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=jn(31,a,n,c),t.elementType=D,t.lanes=f,t;case T:return Za(a.children,c,f,n);case C:y=8,c|=24;break;case S:return t=jn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case G:return t=jn(13,a,n,c),t.elementType=G,t.lanes=f,t;case F:return t=jn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case O:y=10;break e;case z:y=9;break e;case U:y=11;break e;case B:y=14;break e;case X:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=jn(y,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function Za(t,n,a,o){return t=jn(7,t,o,n),t.lanes=a,t}function nu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function iu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ur=[],Nr=0,al=null,rl=0,ei=[],ti=0,Ka=null,zi=1,Bi="";function Qa(t,n){Ur[Nr++]=rl,Ur[Nr++]=al,al=t,rl=n}function ap(t,n,a){ei[ti++]=zi,ei[ti++]=Bi,ei[ti++]=Ka,Ka=t;var o=zi;t=Bi;var c=32-Pe(o)-1;o&=~(1<<c),a+=1;var f=32-Pe(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,zi=1<<32-Pe(n)+c|a<<c|o,Bi=f+t}else zi=1<<f|a<<c|o,Bi=t}function au(t){t.return!==null&&(Qa(t,1),ap(t,1,0))}function ru(t){for(;t===al;)al=Ur[--Nr],Ur[Nr]=null,rl=Ur[--Nr],Ur[Nr]=null;for(;t===Ka;)Ka=ei[--ti],ei[ti]=null,Bi=ei[--ti],ei[ti]=null,zi=ei[--ti],ei[ti]=null}var Nn=null,Yt=null,Rt=!1,Ja=null,xi=!1,su=Error(r(519));function $a(t){var n=Error(r(418,""));throw Bs(Jn(n,t)),su}function rp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[yn]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)pt(lo[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Ht(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),qt(n);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),Sn(n,o.value,o.defaultValue,o.children),qt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Mg(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=Fl),n=!0):n=!1,n||$a(t)}function sp(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Nn=Nn.return}}function Is(t){if(t!==Nn)return!1;if(!Rt)return sp(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bf(t.type,t.memoizedProps)),a=!a),a&&Yt&&$a(t),sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Yt=ui(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Yt=null}}else n===27?(n=Yt,Ea(t.type)?(t=Rf,Rf=null,Yt=t):Yt=n):Yt=Nn?ui(t.stateNode.nextSibling):null;return!0}function zs(){Yt=Nn=null,Rt=!1}function op(){var t=Ja;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Ja=null),t}function Bs(t){Ja===null?Ja=[t]:Ja.push(t)}var ou=ee(null),er=null,Fi=null;function ca(t,n,a){Se(ou,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=ou.current,xe(ou)}function lu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function cu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),lu(f.return,a,t),o||(y=null);break e}f=E.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),lu(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Fs(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var E=c.type;kn(c.pendingProps.value,y.value)||(t!==null?t.push(E):t=[E])}}else if(c===Re.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(mo):t=[mo])}c=c.return}t!==null&&cu(n,t,a,o),n.flags|=262144}function sl(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){er=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return lp(er,t)}function ol(t,n){return er===null&&tr(t),lp(t,n)}function lp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(r(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var I_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},z_=s.unstable_scheduleCallback,B_=s.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new I_,data:new Map,refCount:0}}function Hs(t){t.refCount--,t.refCount===0&&z_(B_,function(){t.controller.abort()})}var Gs=null,fu=0,Lr=0,Or=null;function F_(t,n){if(Gs===null){var a=Gs=[];fu=0,Lr=pf(),Or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return fu++,n.then(cp,cp),n}function cp(){if(--fu===0&&Gs!==null){Or!==null&&(Or.status="fulfilled");var t=Gs;Gs=null,Lr=0,Or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function H_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var up=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&F_(t,n),up!==null&&up(t,n)};var nr=ee(null);function du(){var t=nr.current;return t!==null?t:jt.pooledCache}function ll(t,n){n===null?Se(nr,nr.current):Se(nr,n.pool)}function fp(){var t=du();return t===null?null:{parent:cn._currentValue,pool:t}}var Vs=Error(r(460)),dp=Error(r(474)),cl=Error(r(542)),hu={then:function(){}};function hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ul(){}function pp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ul,ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t;default:if(typeof n.status=="string")n.then(ul,ul);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t}throw ks=n,Vs}}var ks=null;function mp(){if(ks===null)throw Error(r(459));var t=ks;return ks=null,t}function gp(t){if(t===Vs||t===cl)throw Error(r(483))}var ua=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=nl(t),np(t,null,a),n}return tl(t,o,n,a),nl(t)}function js(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fe(t,a)}}function gu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vu=!1;function Xs(){if(vu){var t=Or;if(t!==null)throw t}}function Ws(t,n,a,o){vu=!1;var c=t.updateQueue;ua=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,$=P.next;P.next=null,y===null?f=$:y.next=$,y=P;var ue=t.alternate;ue!==null&&(ue=ue.updateQueue,E=ue.lastBaseUpdate,E!==y&&(E===null?ue.firstBaseUpdate=$:E.next=$,ue.lastBaseUpdate=P))}if(f!==null){var ge=c.baseState;y=0,ue=$=P=null,E=f;do{var ne=E.lane&-536870913,ie=ne!==E.lane;if(ie?(yt&ne)===ne:(o&ne)===ne){ne!==0&&ne===Lr&&(vu=!0),ue!==null&&(ue=ue.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var tt=t,Je=E;ne=n;var zt=a;switch(Je.tag){case 1:if(tt=Je.payload,typeof tt=="function"){ge=tt.call(zt,ge,ne);break e}ge=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Je.payload,ne=typeof tt=="function"?tt.call(zt,ge,ne):tt,ne==null)break e;ge=g({},ge,ne);break e;case 2:ua=!0}}ne=E.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=c.callbacks,ie===null?c.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ue===null?($=ue=ie,P=ge):ue=ue.next=ie,y|=ne;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ie=E,E=ie.next,ie.next=null,c.lastBaseUpdate=ie,c.shared.pending=null}}while(!0);ue===null&&(P=ge),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),ya|=y,t.lanes=y,t.memoizedState=ge}}function vp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function _p(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vp(a[t],n)}var Pr=ee(null),fl=ee(0);function xp(t,n){t=qi,Se(fl,t),Se(Pr,n),qi=t|n.baseLanes}function _u(){Se(fl,qi),Se(Pr,Pr.current)}function xu(){qi=fl.current,xe(Pr),xe(fl)}var ha=0,ut=null,Pt=null,nn=null,dl=!1,Ir=!1,ir=!1,hl=0,qs=0,zr=null,G_=0;function $t(){throw Error(r(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function Su(t,n,a,o,c,f){return ha=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?nm:im,ir=!1,f=a(o,c),ir=!1,Ir&&(f=Sp(n,a,o,c)),yp(t),f}function yp(t){I.H=xl;var n=Pt!==null&&Pt.next!==null;if(ha=0,nn=Pt=ut=null,dl=!1,qs=0,zr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&sl(t)&&(mn=!0))}function Sp(t,n,a,o){ut=t;var c=0;do{if(Ir&&(zr=null),qs=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,nn=Pt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Y_,f=n(a,o)}while(Ir);return f}function V_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Ys(n):n,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(ut.flags|=1024),n}function Mu(){var t=hl!==0;return hl=0,t}function bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Eu(t){if(dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}dl=!1}ha=0,nn=Pt=ut=null,Ir=!1,qs=hl=0,zr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ut.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Pt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var n=nn===null?ut.memoizedState:nn.next;if(n!==null)nn=n,Pt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},nn===null?ut.memoizedState=nn=t:nn=nn.next=t}return nn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(t){var n=qs;return qs+=1,zr===null&&(zr=[]),t=pp(zr,t,n),n=ut,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?nm:im),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ys(t);if(t.$$typeof===O)return Rn(t)}throw Error(r(438,String(t)))}function Au(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=an();return Ru(n,Pt,t)}function Ru(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=y=null,P=null,$=n,ue=!1;do{var ge=$.lane&-536870913;if(ge!==$.lane?(yt&ge)===ge:(ha&ge)===ge){var ne=$.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ge===Lr&&(ue=!0);else if((ha&ne)===ne){$=$.next,ne===Lr&&(ue=!0);continue}else ge={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=ge,y=f):P=P.next=ge,ut.lanes|=ne,ya|=ne;ge=$.action,ir&&a(f,ge),f=$.hasEagerState?$.eagerState:a(f,ge)}else ne={lane:ge,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=ne,y=f):P=P.next=ne,ut.lanes|=ge,ya|=ge;$=$.next}while($!==null&&$!==n);if(P===null?y=f:P.next=E,!kn(f,t.memoizedState)&&(mn=!0,ue&&(a=Or,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function wu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);kn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Mp(t,n,a){var o=ut,c=an(),f=Rt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!kn((Pt||c).memoizedState,a);y&&(c.memoizedState=a,mn=!0),c=c.queue;var E=Tp.bind(null,o,c,t);if(Zs(2048,8,E,[t]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Br(9,gl(),Ep.bind(null,o,c,a,n),null),jt===null)throw Error(r(349));f||(ha&124)!==0||bp(o,n,a)}return a}function bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Tu(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ep(t,n,a,o){n.value=a,n.getSnapshot=o,Ap(n)&&Rp(t)}function Tp(t,n,a){return a(function(){Ap(n)&&Rp(t)})}function Ap(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function Rp(t){var n=Cr(t,2);n!==null&&Zn(n,t,2)}function Cu(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),ir){ce(!0);try{a()}finally{ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function wp(t,n,a,o){return t.baseState=a,Ru(t,Pt,typeof o=="function"?o:Gi)}function k_(t,n,a,o,c){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Cp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Cp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var E=a(c,o),P=I.S;P!==null&&P(y,E),Dp(t,n,E)}catch($){Du(t,n,$)}finally{I.T=f}}else try{f=a(c,o),Dp(t,n,f)}catch($){Du(t,n,$)}}function Dp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Up(t,n,o)},function(o){return Du(t,n,o)}):Up(t,n,a)}function Up(t,n,a){n.status="fulfilled",n.value=a,Np(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Cp(t,a)))}function Du(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Np(n),n=n.next;while(n!==o)}t.action=null}function Np(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Lp(t,n){return n}function Op(t,n){if(Rt){var a=jt.formState;if(a!==null){e:{var o=ut;if(Rt){if(Yt){t:{for(var c=Yt,f=xi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Yt=ui(c.nextSibling),o=c.data==="F!";break e}}$a(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lp,lastRenderedState:n},a.queue=o,a=$p.bind(null,ut,o),o.dispatch=a,o=Cu(!1),f=Pu.bind(null,ut,!1,o.queue),o=In(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=k_.bind(null,ut,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Pp(t){var n=an();return Ip(n,Pt,t)}function Ip(t,n,a){if(n=Ru(t,n,Lp)[0],t=ml(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ys(n)}catch(y){throw y===Vs?cl:y}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,Br(9,gl(),j_.bind(null,c,a),null)),[o,f,t]}function j_(t,n){t.action=n}function zp(t){var n=an(),a=Pt;if(a!==null)return Ip(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Br(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Tu(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function gl(){return{destroy:void 0,resource:void 0}}function Bp(){return an().memoizedState}function vl(t,n,a,o){var c=In();o=o===void 0?null:o,ut.flags|=t,c.memoizedState=Br(1|n,gl(),a,o)}function Zs(t,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Pt!==null&&o!==null&&yu(o,Pt.memoizedState.deps)?c.memoizedState=Br(n,f,a,o):(ut.flags|=t,c.memoizedState=Br(1|n,f,a,o))}function Fp(t,n){vl(8390656,8,t,n)}function Hp(t,n){Zs(2048,8,t,n)}function Gp(t,n){return Zs(4,2,t,n)}function Vp(t,n){return Zs(4,4,t,n)}function kp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jp(t,n,a){a=a!=null?a.concat([t]):null,Zs(4,4,kp.bind(null,n,t),a)}function Uu(){}function Xp(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Wp(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&yu(n,o[1]))return o[0];if(o=t(),ir){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[o,n],o}function Nu(t,n,a){return a===void 0||(ha&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Zm(),ut.lanes|=t,ya|=t,a)}function qp(t,n,a,o){return kn(a,n)?a:Pr.current!==null?(t=Nu(t,a,o),kn(t,n)||(mn=!0),t):(ha&42)===0?(mn=!0,t.memoizedState=a):(t=Zm(),ut.lanes|=t,ya|=t,n)}function Yp(t,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=I.T,E={};I.T=E,Pu(t,!1,n,a);try{var P=c(),$=I.S;if($!==null&&$(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ue=H_(P,o);Ks(t,n,ue,Yn(t))}else Ks(t,n,o,Yn(t))}catch(ge){Ks(t,n,{then:function(){},status:"rejected",reason:ge},Yn())}finally{K.p=f,I.T=y}}function X_(){}function Lu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Zp(t).queue;Yp(t,c,n,Y,a===null?X_:function(){return Kp(t),a(o)})}function Zp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kp(t){var n=Zp(t).next.queue;Ks(t,n,{},Yn())}function Ou(){return Rn(mo)}function Qp(){return an().memoizedState}function Jp(){return an().memoizedState}function W_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=fa(a);var o=da(n,t,a);o!==null&&(Zn(o,n,a),js(o,n,a)),n={cache:uu()},t.payload=n;return}n=n.return}}function q_(t,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?em(n,a):(a=eu(t,n,a,o),a!==null&&(Zn(a,t,o),tm(a,n,o)))}function $p(t,n,a){var o=Yn();Ks(t,n,a,o)}function Ks(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))em(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,E=f(y,a);if(c.hasEagerState=!0,c.eagerState=E,kn(E,y))return tl(t,n,c,0),jt===null&&el(),!1}catch{}finally{}if(a=eu(t,n,c,o),a!==null)return Zn(a,t,o),tm(a,n,o),!0}return!1}function Pu(t,n,a,o){if(o={lane:2,revertLane:pf(),action:o,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=eu(t,a,o,2),n!==null&&Zn(n,t,2)}function _l(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function em(t,n){Ir=dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function tm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fe(t,a)}}var xl={readContext:Rn,use:pl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t},nm={readContext:Rn,use:pl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Fp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,vl(4194308,4,kp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return vl(4194308,4,t,n)},useInsertionEffect:function(t,n){vl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(ir){ce(!0);try{t()}finally{ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var c=a(n);if(ir){ce(!0);try{a(n)}finally{ce(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=q_.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Cu(t);var n=t.queue,a=$p.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(t,n){var a=In();return Nu(a,t,n)},useTransition:function(){var t=Cu(!1);return t=Yp.bind(null,ut,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,c=In();if(Rt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(yt&124)!==0||bp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Fp(Tp.bind(null,o,f,t),[t]),o.flags|=2048,Br(9,gl(),Ep.bind(null,o,f,a,n),null),a},useId:function(){var t=In(),n=jt.identifierPrefix;if(Rt){var a=Bi,o=zi;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=G_++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Op,useActionState:Op,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:Au,useCacheRefresh:function(){return In().memoizedState=W_.bind(null,ut)}},im={readContext:Rn,use:pl,useCallback:Xp,useContext:Rn,useEffect:Hp,useImperativeHandle:jp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:ml,useRef:Bp,useState:function(){return ml(Gi)},useDebugValue:Uu,useDeferredValue:function(t,n){var a=an();return qp(a,Pt.memoizedState,t,n)},useTransition:function(){var t=ml(Gi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Pp,useActionState:Pp,useOptimistic:function(t,n){var a=an();return wp(a,Pt,t,n)},useMemoCache:Au,useCacheRefresh:Jp},Y_={readContext:Rn,use:pl,useCallback:Xp,useContext:Rn,useEffect:Hp,useImperativeHandle:jp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:wu,useRef:Bp,useState:function(){return wu(Gi)},useDebugValue:Uu,useDeferredValue:function(t,n){var a=an();return Pt===null?Nu(a,t,n):qp(a,Pt.memoizedState,t,n)},useTransition:function(){var t=wu(Gi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Ou,useFormState:zp,useActionState:zp,useOptimistic:function(t,n){var a=an();return Pt!==null?wp(a,Pt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:Jp},Fr=null,Qs=0;function yl(t){var n=Qs;return Qs+=1,Fr===null&&(Fr=[]),pp(Fr,t,n)}function Js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function am(t){var n=t._init;return n(t._payload)}function rm(t){function n(W,k){if(t){var Q=W.deletions;Q===null?(W.deletions=[k],W.flags|=16):Q.push(k)}}function a(W,k){if(!t)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function o(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function c(W,k){return W=Ii(W,k),W.index=0,W.sibling=null,W}function f(W,k,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<k?(W.flags|=67108866,k):Q):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function y(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,k,Q,de){return k===null||k.tag!==6?(k=nu(Q,W.mode,de),k.return=W,k):(k=c(k,Q),k.return=W,k)}function P(W,k,Q,de){var He=Q.type;return He===T?ue(W,k,Q.props.children,de,Q.key):k!==null&&(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&am(He)===k.type)?(k=c(k,Q.props),Js(k,Q),k.return=W,k):(k=il(Q.type,Q.key,Q.props,null,W.mode,de),Js(k,Q),k.return=W,k)}function $(W,k,Q,de){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=iu(Q,W.mode,de),k.return=W,k):(k=c(k,Q.children||[]),k.return=W,k)}function ue(W,k,Q,de,He){return k===null||k.tag!==7?(k=Za(Q,W.mode,de,He),k.return=W,k):(k=c(k,Q),k.return=W,k)}function ge(W,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=nu(""+k,W.mode,Q),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return Q=il(k.type,k.key,k.props,null,W.mode,Q),Js(Q,k),Q.return=W,Q;case M:return k=iu(k,W.mode,Q),k.return=W,k;case X:var de=k._init;return k=de(k._payload),ge(W,k,Q)}if(he(k)||le(k))return k=Za(k,W.mode,Q,null),k.return=W,k;if(typeof k.then=="function")return ge(W,yl(k),Q);if(k.$$typeof===O)return ge(W,ol(W,k),Q);Sl(W,k)}return null}function ne(W,k,Q,de){var He=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:E(W,k,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===He?P(W,k,Q,de):null;case M:return Q.key===He?$(W,k,Q,de):null;case X:return He=Q._init,Q=He(Q._payload),ne(W,k,Q,de)}if(he(Q)||le(Q))return He!==null?null:ue(W,k,Q,de,null);if(typeof Q.then=="function")return ne(W,k,yl(Q),de);if(Q.$$typeof===O)return ne(W,k,ol(W,Q),de);Sl(W,Q)}return null}function ie(W,k,Q,de,He){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return W=W.get(Q)||null,E(k,W,""+de,He);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case x:return W=W.get(de.key===null?Q:de.key)||null,P(k,W,de,He);case M:return W=W.get(de.key===null?Q:de.key)||null,$(k,W,de,He);case X:var ft=de._init;return de=ft(de._payload),ie(W,k,Q,de,He)}if(he(de)||le(de))return W=W.get(Q)||null,ue(k,W,de,He,null);if(typeof de.then=="function")return ie(W,k,Q,yl(de),He);if(de.$$typeof===O)return ie(W,k,Q,ol(k,de),He);Sl(k,de)}return null}function tt(W,k,Q,de){for(var He=null,ft=null,Xe=k,et=k=0,vn=null;Xe!==null&&et<Q.length;et++){Xe.index>et?(vn=Xe,Xe=null):vn=Xe.sibling;var Et=ne(W,Xe,Q[et],de);if(Et===null){Xe===null&&(Xe=vn);break}t&&Xe&&Et.alternate===null&&n(W,Xe),k=f(Et,k,et),ft===null?He=Et:ft.sibling=Et,ft=Et,Xe=vn}if(et===Q.length)return a(W,Xe),Rt&&Qa(W,et),He;if(Xe===null){for(;et<Q.length;et++)Xe=ge(W,Q[et],de),Xe!==null&&(k=f(Xe,k,et),ft===null?He=Xe:ft.sibling=Xe,ft=Xe);return Rt&&Qa(W,et),He}for(Xe=o(Xe);et<Q.length;et++)vn=ie(Xe,W,et,Q[et],de),vn!==null&&(t&&vn.alternate!==null&&Xe.delete(vn.key===null?et:vn.key),k=f(vn,k,et),ft===null?He=vn:ft.sibling=vn,ft=vn);return t&&Xe.forEach(function(Ca){return n(W,Ca)}),Rt&&Qa(W,et),He}function Je(W,k,Q,de){if(Q==null)throw Error(r(151));for(var He=null,ft=null,Xe=k,et=k=0,vn=null,Et=Q.next();Xe!==null&&!Et.done;et++,Et=Q.next()){Xe.index>et?(vn=Xe,Xe=null):vn=Xe.sibling;var Ca=ne(W,Xe,Et.value,de);if(Ca===null){Xe===null&&(Xe=vn);break}t&&Xe&&Ca.alternate===null&&n(W,Xe),k=f(Ca,k,et),ft===null?He=Ca:ft.sibling=Ca,ft=Ca,Xe=vn}if(Et.done)return a(W,Xe),Rt&&Qa(W,et),He;if(Xe===null){for(;!Et.done;et++,Et=Q.next())Et=ge(W,Et.value,de),Et!==null&&(k=f(Et,k,et),ft===null?He=Et:ft.sibling=Et,ft=Et);return Rt&&Qa(W,et),He}for(Xe=o(Xe);!Et.done;et++,Et=Q.next())Et=ie(Xe,W,et,Et.value,de),Et!==null&&(t&&Et.alternate!==null&&Xe.delete(Et.key===null?et:Et.key),k=f(Et,k,et),ft===null?He=Et:ft.sibling=Et,ft=Et);return t&&Xe.forEach(function(Zx){return n(W,Zx)}),Rt&&Qa(W,et),He}function zt(W,k,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var He=Q.key;k!==null;){if(k.key===He){if(He=Q.type,He===T){if(k.tag===7){a(W,k.sibling),de=c(k,Q.props.children),de.return=W,W=de;break e}}else if(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===X&&am(He)===k.type){a(W,k.sibling),de=c(k,Q.props),Js(de,Q),de.return=W,W=de;break e}a(W,k);break}else n(W,k);k=k.sibling}Q.type===T?(de=Za(Q.props.children,W.mode,de,Q.key),de.return=W,W=de):(de=il(Q.type,Q.key,Q.props,null,W.mode,de),Js(de,Q),de.return=W,W=de)}return y(W);case M:e:{for(He=Q.key;k!==null;){if(k.key===He)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(W,k.sibling),de=c(k,Q.children||[]),de.return=W,W=de;break e}else{a(W,k);break}else n(W,k);k=k.sibling}de=iu(Q,W.mode,de),de.return=W,W=de}return y(W);case X:return He=Q._init,Q=He(Q._payload),zt(W,k,Q,de)}if(he(Q))return tt(W,k,Q,de);if(le(Q)){if(He=le(Q),typeof He!="function")throw Error(r(150));return Q=He.call(Q),Je(W,k,Q,de)}if(typeof Q.then=="function")return zt(W,k,yl(Q),de);if(Q.$$typeof===O)return zt(W,k,ol(W,Q),de);Sl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(W,k.sibling),de=c(k,Q),de.return=W,W=de):(a(W,k),de=nu(Q,W.mode,de),de.return=W,W=de),y(W)):a(W,k)}return function(W,k,Q,de){try{Qs=0;var He=zt(W,k,Q,de);return Fr=null,He}catch(Xe){if(Xe===Vs||Xe===cl)throw Xe;var ft=jn(29,Xe,null,W.mode);return ft.lanes=de,ft.return=W,ft}finally{}}}var Hr=rm(!0),sm=rm(!1),ni=ee(null),yi=null;function pa(t){var n=t.alternate;Se(un,un.current&1),Se(ni,t),yi===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(yi=t)}function om(t){if(t.tag===22){if(Se(un,un.current),Se(ni,t),yi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(yi=t)}}else ma()}function ma(){Se(un,un.current),Se(ni,ni.current)}function Vi(t){xe(ni),yi===t&&(yi=null),xe(un)}var un=ee(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Af(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=fa(o);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,o),n!==null&&(Zn(n,t,o),js(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=fa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,o),n!==null&&(Zn(n,t,o),js(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),o=fa(a);o.tag=2,n!=null&&(o.callback=n),n=da(t,o,a),n!==null&&(Zn(n,t,a),js(n,t,a))}};function lm(t,n,a,o,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Os(a,o)||!Os(c,f):!0}function cm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&zu.enqueueReplaceState(n,n.state,null)}function ar(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function um(t){bl(t)}function fm(t){console.error(t)}function dm(t){bl(t)}function El(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(t,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){El(t,n)},a}function pm(t){return t=fa(t),t.tag=3,t}function mm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){hm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){hm(n,a,o),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function Z_(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return yi===null?cf():a.alternate===null&&Zt===0&&(Zt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ff(t,o,c)),!1;case 22:return a.flags|=65536,o===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ff(t,o,c)),!1}throw Error(r(435,a.tag))}return ff(t,o,c),cf(),!1}if(Rt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==su&&(t=Error(r(422),{cause:o}),Bs(Jn(t,a)))):(o!==su&&(n=Error(r(423),{cause:o}),Bs(Jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Jn(o,a),c=Bu(t.stateNode,o,c),gu(t,c),Zt!==4&&(Zt=2)),!1;var f=Error(r(520),{cause:o});if(f=Jn(f,a),ro===null?ro=[f]:ro.push(f),Zt!==4&&(Zt=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Bu(a.stateNode,o,t),gu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=pm(c),mm(c,t,a,o),gu(a,c),!1}a=a.return}while(a!==null);return!1}var gm=Error(r(461)),mn=!1;function Mn(t,n,a,o){n.child=t===null?sm(n,null,a,o):Hr(n,t.child,a,o)}function vm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var E in o)E!=="ref"&&(y[E]=o[E])}else y=o;return tr(n),o=Su(t,n,a,y,f,c),E=Mu(),t!==null&&!mn?(bu(t,n,c),ki(t,n,c)):(Rt&&E&&au(n),n.flags|=1,Mn(t,n,o,c),n.child)}function _m(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xm(t,n,f,o,c)):(t=il(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Wu(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(y,o)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Ii(f,o),t.ref=n.ref,t.return=n,n.child=t}function xm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Os(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Wu(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Fu(t,n,a,o,c)}function ym(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Sm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?xp(n,f):_u(),om(n);else return n.lanes=n.childLanes=536870912,Sm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ll(n,f.cachePool),xp(n,f),ma(),n.memoizedState=null):(t!==null&&ll(n,null),_u(),ma());return Mn(t,n,c,a),n.child}function Sm(t,n,a,o){var c=du();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&ll(n,null),_u(),om(n),t!==null&&Fs(t,n,o,!0),null}function Tl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Fu(t,n,a,o,c){return tr(n),a=Su(t,n,a,o,void 0,c),o=Mu(),t!==null&&!mn?(bu(t,n,c),ki(t,n,c)):(Rt&&o&&au(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Mm(t,n,a,o,c,f){return tr(n),n.updateQueue=null,a=Sp(n,o,a,c),yp(t),o=Mu(),t!==null&&!mn?(bu(t,n,f),ki(t,n,f)):(Rt&&o&&au(n),n.flags|=1,Mn(t,n,a,f),n.child)}function bm(t,n,a,o,c){if(tr(n),n.stateNode===null){var f=Dr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},pu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Dr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Iu(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&zu.enqueueReplaceState(f,f.state,null),Ws(n,o,f,c),Xs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=ar(a,E);f.props=P;var $=f.context,ue=a.contextType;y=Dr,typeof ue=="object"&&ue!==null&&(y=Rn(ue));var ge=a.getDerivedStateFromProps;ue=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==y)&&cm(n,f,o,y),ua=!1;var ne=n.memoizedState;f.state=ne,Ws(n,o,f,c),Xs(),$=n.memoizedState,E||ne!==$||ua?(typeof ge=="function"&&(Iu(n,a,ge,o),$=n.memoizedState),(P=ua||lm(n,a,P,o,ne,$,y))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=y,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,mu(t,n),y=n.memoizedProps,ue=ar(a,y),f.props=ue,ge=n.pendingProps,ne=f.context,$=a.contextType,P=Dr,typeof $=="object"&&$!==null&&(P=Rn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ge||ne!==P)&&cm(n,f,o,P),ua=!1,ne=n.memoizedState,f.state=ne,Ws(n,o,f,c),Xs();var ie=n.memoizedState;y!==ge||ne!==ie||ua||t!==null&&t.dependencies!==null&&sl(t.dependencies)?(typeof E=="function"&&(Iu(n,a,E,o),ie=n.memoizedState),(ue=ua||lm(n,a,ue,o,ne,ie,P)||t!==null&&t.dependencies!==null&&sl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ie,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ie,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=P,o=ue):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Tl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Hr(n,t.child,null,c),n.child=Hr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function Em(t,n,a,o){return zs(),n.flags|=256,Mn(t,n,a,o),n.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(t){return{baseLanes:t,cachePool:fp()}}function Vu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Tm(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(c?pa(n):ma(),Rt){var E=Yt,P;if(P=E){e:{for(P=E,E=xi;P.nodeType!==8;){if(!E){E=null;break e}if(P=ui(P.nextSibling),P===null){E=null;break e}}E=P}E!==null?(n.memoizedState={dehydrated:E,treeContext:Ka!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},P=jn(18,null,null,0),P.stateNode=E,P.return=n,n.child=P,Nn=n,Yt=null,P=!0):P=!1}P||$a(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Af(E)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return E=o.children,o=o.fallback,c?(ma(),c=n.mode,E=Al({mode:"hidden",children:E},c),o=Za(o,c,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=Gu(a),c.childLanes=Vu(t,y,a),n.memoizedState=Hu,o):(pa(n),ku(n,E))}if(P=t.memoizedState,P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=ju(t,n,a)):n.memoizedState!==null?(ma(),n.child=t.child,n.flags|=128,n=null):(ma(),c=o.fallback,E=n.mode,o=Al({mode:"visible",children:o.children},E),c=Za(c,E,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Hr(n,t.child,null,a),o=n.child,o.memoizedState=Gu(a),o.childLanes=Vu(t,y,a),n.memoizedState=Hu,n=c);else if(pa(n),Af(E)){if(y=E.nextSibling&&E.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(r(419)),o.stack="",o.digest=y,Bs({value:o,source:null,stack:null}),n=ju(t,n,a)}else if(mn||Fs(t,n,a,!1),y=(a&t.childLanes)!==0,mn||y){if(y=jt,y!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Cr(t,o),Zn(y,t,o),gm;E.data==="$?"||cf(),n=ju(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Yt=ui(E.nextSibling),Nn=n,Rt=!0,Ja=null,xi=!1,t!==null&&(ei[ti++]=zi,ei[ti++]=Bi,ei[ti++]=Ka,zi=t.id,Bi=t.overflow,Ka=n),n=ku(n,o.children),n.flags|=4096);return n}return c?(ma(),c=o.fallback,E=n.mode,P=t.child,$=P.sibling,o=Ii(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Ii($,c):(c=Za(c,E,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=t.child.memoizedState,E===null?E=Gu(a):(P=E.cachePool,P!==null?($=cn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=fp(),E={baseLanes:E.baseLanes|a,cachePool:P}),c.memoizedState=E,c.childLanes=Vu(t,y,a),n.memoizedState=Hu,o):(pa(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function ku(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=jn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ju(t,n,a){return Hr(n,t.child,null,a),t=ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Am(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),lu(t.return,n,a)}function Xu(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Rm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Mn(t,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,a,n);else if(t.tag===19)Am(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Se(un,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Xu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Ml(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Xu(n,!0,a,null,f);break;case"together":Xu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&sl(t)))}function K_(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),ca(n,cn,t.memoizedState.cache),zs();break;case 27:case 5:Qe(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tm(t,n,a):(pa(n),t=ki(t,n,a),t!==null?t.sibling:null);pa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Fs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Rm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Se(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,ym(t,n,a);case 24:ca(n,cn,t.memoizedState.cache)}return ki(t,n,a)}function wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Wu(t,a)&&(n.flags&128)===0)return mn=!1,K_(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Rt&&(n.flags&1048576)!==0&&ap(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")tu(o)?(t=ar(o,t),n.tag=1,n=bm(null,n,o,t,a)):(n.tag=0,n=Fu(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=vm(null,n,o,t,a);break e}else if(c===B){n.tag=14,n=_m(null,n,o,t,a);break e}}throw n=_e(o)||o,Error(r(306,n,""))}}return n;case 0:return Fu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ar(o,n.pendingProps),bm(t,n,o,c,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,mu(t,n),Ws(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ca(n,cn,o),o!==f.cache&&cu(n,[cn],a,!0),Xs(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Em(t,n,o,a);break e}else if(o!==c){c=Jn(Error(r(424)),n),Bs(c),n=Em(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=ui(t.firstChild),Nn=n,Rt=!0,Ja=null,xi=!0,a=sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),o===c){n=ki(t,n,a);break e}Mn(t,n,o,a)}n=n.child}return n;case 26:return Tl(t,n),t===null?(a=Ng(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,o=Hl(Me.current).createElement(a),o[on]=n,o[yn]=t,En(o,a,t),tn(o),n.stateNode=o):n.memoizedState=Ng(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qe(n),t===null&&Rt&&(o=n.stateNode=Cg(n.type,n.pendingProps,Me.current),Nn=n,xi=!0,c=Yt,Ea(n.type)?(Rf=c,Yt=ui(o.firstChild)):Yt=c),Mn(t,n,n.pendingProps.children,a),Tl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((c=o=Yt)&&(o=Ex(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Nn=n,Yt=ui(o.firstChild),xi=!1,c=!0):c=!1),c||$a(n)),Qe(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,bf(c,f)?o=null:y!==null&&bf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Su(t,n,V_,null,null,a),mo._currentValue=c),Tl(t,n),Mn(t,n,o,a),n.child;case 6:return t===null&&Rt&&((t=a=Yt)&&(a=Tx(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Nn=n,Yt=null,t=!0):t=!1),t||$a(n)),null;case 13:return Tm(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Hr(n,null,o,a):Mn(t,n,o,a),n.child;case 11:return vm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ca(n,n.type,o.value),Mn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,tr(n),c=Rn(c),o=o(c),n.flags|=1,Mn(t,n,o,a),n.child;case 14:return _m(t,n,n.type,n.pendingProps,a);case 15:return xm(t,n,n.type,n.pendingProps,a);case 19:return Rm(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Al(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ii(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return ym(t,n,a);case 24:return tr(n),o=Rn(cn),t===null?(c=du(),c===null&&(c=jt,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},pu(n),ca(n,cn,c)):((t.lanes&a)!==0&&(mu(t,n),Ws(n,null,null,a),Xs()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ca(n,cn,o)):(o=f.cache,ca(n,cn,o),o!==c.cache&&cu(n,[cn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(t){t.flags|=4}function Cm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zg(n)){if(n=ni.current,n!==null&&((yt&4194048)===yt?yi!==null:(yt&62914560)!==yt&&(yt&536870912)===0||n!==yi))throw ks=hu,dp;t.flags|=8192}}function Rl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,jr|=n)}function $s(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Q_(t,n,a){var o=n.pendingProps;switch(ru(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Hi(cn),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Is(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,op())),Wt(n),null;case 26:return a=n.memoizedState,t===null?(ji(n),a!==null?(Wt(n),Cm(n,a)):(Wt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ji(n),Wt(n),Cm(n,a)):(Wt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ji(n),Wt(n),n.flags&=-16777217),null;case 27:Ot(n),a=Me.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}t=J.current,Is(n)?rp(n):(t=Cg(c,o,a),n.stateNode=t,ji(n))}return Wt(n),null;case 5:if(Ot(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(t=J.current,Is(n))rp(n);else{switch(c=Hl(Me.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[on]=n,t[yn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(En(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ji(n)}}return Wt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Me.current,Is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Nn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Mg(t.nodeValue,a)),t||$a(n)}else t=Hl(t).createTextNode(o),t[on]=n,n.stateNode=t}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=op(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Wt(n),null;case 4:return ot(),t===null&&_f(n.stateNode.containerInfo),Wt(n),null;case 10:return Hi(n.type),Wt(n),null;case 19:if(xe(un),c=n.memoizedState,c===null)return Wt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)$s(c,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,$s(c,!1),t=f.updateQueue,n.updateQueue=t,Rl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ip(a,t),a=a.sibling;return Se(un,un.current&1|2),n.child}t=t.sibling}c.tail!==null&&dt()>Dl&&(n.flags|=128,o=!0,$s(c,!1),n.lanes=4194304)}else{if(!o)if(t=Ml(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Rl(n,t),$s(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Rt)return Wt(n),null}else 2*dt()-c.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,o=!0,$s(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=dt(),n.sibling=null,t=un.current,Se(un,o?t&1|2:t&1),n):(Wt(n),null);case 22:case 23:return Vi(n),xu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&xe(nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(cn),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function J_(t,n){switch(ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(cn),ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ot(n),null;case 13:if(Vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xe(un),null;case 4:return ot(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),xu(),t!==null&&xe(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(cn),null;case 25:return null;default:return null}}function Dm(t,n){switch(ru(n),n.tag){case 3:Hi(cn),ot();break;case 26:case 27:case 5:Ot(n);break;case 4:ot();break;case 13:Vi(n);break;case 19:xe(un);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),xu(),t!==null&&xe(nr);break;case 24:Hi(cn)}}function eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(E){Gt(n,n.return,E)}}function ga(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var y=o.inst,E=y.destroy;if(E!==void 0){y.destroy=void 0,c=n;var P=a,$=E;try{$()}catch(ue){Gt(c,P,ue)}}}o=o.next}while(o!==f)}}catch(ue){Gt(n,n.return,ue)}}function Um(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{_p(n,a)}catch(o){Gt(t,t.return,o)}}}function Nm(t,n,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function to(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Gt(t,n,c)}}function Si(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Gt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Gt(t,n,c)}else a.current=null}function Lm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Gt(t,t.return,c)}}function qu(t,n,a){try{var o=t.stateNode;xx(o,t.type,a,n),o[yn]=n}catch(c){Gt(t,t.return,c)}}function Om(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function Yu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Om(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fl));else if(o!==4&&(o===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Zu(t,n,a),t=t.sibling;t!==null;)Zu(t,n,a),t=t.sibling}function wl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(wl(t,n,a),t=t.sibling;t!==null;)wl(t,n,a),t=t.sibling}function Pm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,o,a),n[on]=t,n[yn]=a}catch(f){Gt(t,t.return,f)}}var Xi=!1,en=!1,Ku=!1,Im=typeof WeakSet=="function"?WeakSet:Set,gn=null;function $_(t,n){if(t=t.containerInfo,Sf=Wl,t=qh(t),Yc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,E=-1,P=-1,$=0,ue=0,ge=t,ne=null;t:for(;;){for(var ie;ge!==a||c!==0&&ge.nodeType!==3||(E=y+c),ge!==f||o!==0&&ge.nodeType!==3||(P=y+o),ge.nodeType===3&&(y+=ge.nodeValue.length),(ie=ge.firstChild)!==null;)ne=ge,ge=ie;for(;;){if(ge===t)break t;if(ne===a&&++$===c&&(E=y),ne===f&&++ue===o&&(P=y),(ie=ge.nextSibling)!==null)break;ge=ne,ne=ge.parentNode}ge=ie}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:t,selectionRange:a},Wl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var tt=ar(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Gt(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function zm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),o&4&&eo(5,a);break;case 1:if(va(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Gt(a,a.return,y)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Gt(a,a.return,y)}}o&64&&Um(a),o&512&&to(a,a.return);break;case 3:if(va(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_p(t,n)}catch(y){Gt(a,a.return,y)}}break;case 27:n===null&&o&4&&Pm(a);case 26:case 5:va(t,a),n===null&&o&4&&Lm(a),o&512&&to(a,a.return);break;case 12:va(t,a);break;case 13:va(t,a),o&4&&Hm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=lx.bind(null,a),Ax(t,a))));break;case 22:if(o=a.memoizedState!==null||Xi,!o){n=n!==null&&n.memoizedState!==null||en,c=Xi;var f=en;Xi=o,(en=n)&&!f?_a(t,a,(a.subtreeFlags&8772)!==0):va(t,a),Xi=c,en=f}break;case 30:break;default:va(t,a)}}function Bm(t){var n=t.alternate;n!==null&&(t.alternate=null,Bm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xt=null,zn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Fm(t,n,a),a=a.sibling}function Fm(t,n,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:en||Si(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Si(a,n);var o=Xt,c=zn;Ea(a.type)&&(Xt=a.stateNode,zn=!1),Wi(t,n,a),uo(a.stateNode),Xt=o,zn=c;break;case 5:en||Si(a,n);case 6:if(o=Xt,c=zn,Xt=null,Wi(t,n,a),Xt=o,zn=c,Xt!==null)if(zn)try{(Xt.nodeType===9?Xt.body:Xt.nodeName==="HTML"?Xt.ownerDocument.body:Xt).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{Xt.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:Xt!==null&&(zn?(t=Xt,Rg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xo(t)):Rg(Xt,a.stateNode));break;case 4:o=Xt,c=zn,Xt=a.stateNode.containerInfo,zn=!0,Wi(t,n,a),Xt=o,zn=c;break;case 0:case 11:case 14:case 15:en||ga(2,a,n),en||ga(4,a,n),Wi(t,n,a);break;case 1:en||(Si(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Nm(a,n,o)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Wi(t,n,a),en=o;break;default:Wi(t,n,a)}}function Hm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xo(t)}catch(a){Gt(n,n.return,a)}}function ex(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Im),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Im),n;default:throw Error(r(435,t.tag))}}function Qu(t,n){var a=ex(t);n.forEach(function(o){var c=cx.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,y=n,E=y;e:for(;E!==null;){switch(E.tag){case 27:if(Ea(E.type)){Xt=E.stateNode,zn=!1;break e}break;case 5:Xt=E.stateNode,zn=!1;break e;case 3:case 4:Xt=E.stateNode.containerInfo,zn=!0;break e}E=E.return}if(Xt===null)throw Error(r(160));Fm(f,y,c),Xt=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Gm(n,t),n=n.sibling}var ci=null;function Gm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(ga(3,t,t.return),eo(3,t),ga(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(en||a===null||Si(a,a.return)),o&64&&Xi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ci;if(Xn(n,t),Wn(t),o&512&&(en||a===null||Si(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[aa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,o,a),f[on]=t,tn(f),o=f;break e;case"link":var y=Pg("link","href",c).get(o+(a.href||""));if(y){for(var E=0;E<y.length;E++)if(f=y[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(E,1);break t}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;case"meta":if(y=Pg("meta","content",c).get(o+(a.content||""))){for(E=0;E<y.length;E++)if(f=y[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(E,1);break t}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=t,tn(f),o=f}t.stateNode=o}else Ig(c,t.type,t.stateNode);else t.stateNode=Og(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ig(c,t.type,t.stateNode):Og(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(en||a===null||Si(a,a.return)),a!==null&&o&4&&qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(en||a===null||Si(a,a.return)),t.flags&32){c=t.stateNode;try{_i(c,"")}catch(ie){Gt(t,t.return,ie)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,qu(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Ku=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ie){Gt(t,t.return,ie)}}break;case 3:if(kl=null,c=ci,ci=Gl(n.containerInfo),Xn(n,t),ci=c,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch(ie){Gt(t,t.return,ie)}Ku&&(Ku=!1,Vm(t));break;case 4:o=ci,ci=Gl(t.stateNode.containerInfo),Xn(n,t),Wn(t),ci=o;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(af=dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Qu(t,o)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Xi,ue=en;if(Xi=$||c,en=ue||P,Xn(n,t),en=ue,Xi=$,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||en||rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{E=P.stateNode;var ge=P.memoizedProps.style,ne=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;E.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Gt(P,P.return,ie)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ie){Gt(P,P.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Qu(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Qu(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Om(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Yu(t);wl(t,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(_i(y,""),a.flags&=-33);var E=Yu(t);wl(t,E,y);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Yu(t);Zu(t,$,P);break;default:throw Error(r(161))}}catch(ue){Gt(t,t.return,ue)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Vm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Vm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(t,n.alternate,n),n=n.sibling}function rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),rr(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),rr(n);break;case 27:uo(n.stateNode);case 26:case 5:Si(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}t=t.sibling}}function _a(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:_a(c,f,a),eo(4,f);break;case 1:if(_a(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Gt(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)vp(P[c],E)}catch($){Gt(o,o.return,$)}}a&&y&64&&Um(f),to(f,f.return);break;case 27:Pm(f);case 26:case 5:_a(c,f,a),a&&o===null&&y&4&&Lm(f),to(f,f.return);break;case 12:_a(c,f,a);break;case 13:_a(c,f,a),a&&y&4&&Hm(c,f);break;case 22:f.memoizedState===null&&_a(c,f,a),to(f,f.return);break;case 30:break;default:_a(c,f,a)}n=n.sibling}}function Ju(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Hs(a))}function $u(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t))}function Mi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)km(t,n,a,o),n=n.sibling}function km(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,o),c&2048&&eo(9,n);break;case 1:Mi(t,n,a,o);break;case 3:Mi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Hs(t)));break;case 12:if(c&2048){Mi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,E=f.onPostCommit;typeof E=="function"&&E(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Gt(n,n.return,P)}}else Mi(t,n,a,o);break;case 13:Mi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,o):no(t,n):f._visibility&2?Mi(t,n,a,o):(f._visibility|=2,Gr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Ju(y,n);break;case 24:Mi(t,n,a,o),c&2048&&$u(n.alternate,n);break;default:Mi(t,n,a,o)}}function Gr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,E=a,P=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:Gr(f,y,E,P,c),eo(8,y);break;case 23:break;case 22:var ue=y.stateNode;y.memoizedState!==null?ue._visibility&2?Gr(f,y,E,P,c):no(f,y):(ue._visibility|=2,Gr(f,y,E,P,c)),c&&$&2048&&Ju(y.alternate,y);break;case 24:Gr(f,y,E,P,c),c&&$&2048&&$u(y.alternate,y);break;default:Gr(f,y,E,P,c)}n=n.sibling}}function no(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:no(a,o),c&2048&&Ju(o.alternate,o);break;case 24:no(a,o),c&2048&&$u(o.alternate,o);break;default:no(a,o)}n=n.sibling}}var io=8192;function Vr(t){if(t.subtreeFlags&io)for(t=t.child;t!==null;)jm(t),t=t.sibling}function jm(t){switch(t.tag){case 26:Vr(t),t.flags&io&&t.memoizedState!==null&&Fx(ci,t.memoizedState,t.memoizedProps);break;case 5:Vr(t);break;case 3:case 4:var n=ci;ci=Gl(t.stateNode.containerInfo),Vr(t),ci=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,Vr(t),io=n):Vr(t));break;default:Vr(t)}}function Xm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,qm(o,t)}Xm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wm(t),t=t.sibling}function Wm(t){switch(t.tag){case 0:case 11:case 15:ao(t),t.flags&2048&&ga(9,t,t.return);break;case 3:ao(t);break;case 12:ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cl(t)):ao(t);break;default:ao(t)}}function Cl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,qm(o,t)}Xm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}t=t.sibling}}function qm(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(Bm(o),o===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var tx={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},nx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,jt=null,ht=null,yt=0,Lt=0,qn=null,xa=!1,kr=!1,ef=!1,qi=0,Zt=0,ya=0,sr=0,tf=0,ii=0,jr=0,ro=null,Bn=null,nf=!1,af=0,Dl=1/0,Ul=null,Sa=null,bn=0,Ma=null,Xr=null,Wr=0,rf=0,sf=null,Ym=null,so=0,of=null;function Yn(){if((Nt&2)!==0&&yt!==0)return yt&-yt;if(I.T!==null){var t=Lr;return t!==0?t:pf()}return bt()}function Zm(){ii===0&&(ii=(yt&536870912)===0||Rt?j():536870912);var t=ni.current;return t!==null&&(t.flags|=32),ii}function Zn(t,n,a){(t===jt&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)&&(qr(t,0),ba(t,yt,ii,!1)),ze(t,a),((Nt&2)===0||t!==jt)&&(t===jt&&((Nt&2)===0&&(sr|=a),Zt===4&&ba(t,yt,ii,!1)),bi(t))}function Km(t,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||we(t,n),c=o?rx(t,n):uf(t,n,!0),f=o;do{if(c===0){kr&&!o&&ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ix(a)){c=uf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var E=t;c=ro;var P=E.current.memoizedState.isDehydrated;if(P&&(qr(E,y).flags|=256),y=uf(E,y,!1),y!==2){if(ef&&!P){E.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break e}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){qr(t,0),ba(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(o,n,ii,!xa);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=af+300-dt(),10<c)){if(ba(o,n,ii,!xa),qe(o,0,!0)!==0)break e;o.timeoutHandle=Tg(Qm.bind(null,o,a,Bn,Ul,nf,n,ii,sr,jr,xa,f,2,-0,0),c);break e}Qm(o,a,Bn,Ul,nf,n,ii,sr,jr,xa,f,0,-0,0)}}break}while(!0);bi(t)}function Qm(t,n,a,o,c,f,y,E,P,$,ue,ge,ne,ie){if(t.timeoutHandle=-1,ge=n.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:Bx},jm(n),ge=Hx(),ge!==null)){t.cancelPendingCommit=ge(ag.bind(null,t,n,f,a,o,c,y,E,P,ue,1,ne,ie)),ba(t,f,y,!$);return}ag(t,n,f,a,o,c,y,E,P)}function ix(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,a,o){n&=~tf,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Pe(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&ve(t,a,n)}function Nl(){return(Nt&6)===0?(oo(0),!1):!0}function lf(){if(ht!==null){if(Lt===0)var t=ht.return;else t=ht,Fi=er=null,Eu(t),Fr=null,Qs=0,t=ht;for(;t!==null;)Dm(t.alternate,t),t=t.return;ht=null}}function qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Sx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),lf(),jt=t,ht=a=Ii(t.current,null),yt=n,Lt=0,qn=null,xa=!1,kr=we(t,n),ef=!1,jr=ii=tf=sr=ya=Zt=0,Bn=ro=null,nf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Pe(o),f=1<<c;n|=t[c],o&=~f}return qi=n,el(),a}function Jm(t,n){ut=null,I.H=xl,n===Vs||n===cl?(n=mp(),Lt=3):n===dp?(n=mp(),Lt=4):Lt=n===gm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,ht===null&&(Zt=1,El(t,Jn(n,t.current)))}function $m(){var t=I.H;return I.H=xl,t===null?xl:t}function eg(){var t=I.A;return I.A=tx,t}function cf(){Zt=4,xa||(yt&4194048)!==yt&&ni.current!==null||(kr=!0),(ya&134217727)===0&&(sr&134217727)===0||jt===null||ba(jt,yt,ii,!1)}function uf(t,n,a){var o=Nt;Nt|=2;var c=$m(),f=eg();(jt!==t||yt!==n)&&(Ul=null,qr(t,n)),n=!1;var y=Zt;e:do try{if(Lt!==0&&ht!==null){var E=ht,P=qn;switch(Lt){case 8:lf(),y=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=Lt;if(Lt=0,qn=null,Yr(t,E,P,$),a&&kr){y=0;break e}break;default:$=Lt,Lt=0,qn=null,Yr(t,E,P,$)}}ax(),y=Zt;break}catch(ue){Jm(t,ue)}while(!0);return n&&t.shellSuspendCounter++,Fi=er=null,Nt=o,I.H=c,I.A=f,ht===null&&(jt=null,yt=0,el()),y}function ax(){for(;ht!==null;)tg(ht)}function rx(t,n){var a=Nt;Nt|=2;var o=$m(),c=eg();jt!==t||yt!==n?(Ul=null,Dl=dt()+500,qr(t,n)):kr=we(t,n);e:do try{if(Lt!==0&&ht!==null){n=ht;var f=qn;t:switch(Lt){case 1:Lt=0,qn=null,Yr(t,n,f,1);break;case 2:case 9:if(hp(f)){Lt=0,qn=null,ng(n);break}n=function(){Lt!==2&&Lt!==9||jt!==t||(Lt=7),bi(t)},f.then(n,n);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:hp(f)?(Lt=0,qn=null,ng(n)):(Lt=0,qn=null,Yr(t,n,f,7));break;case 5:var y=null;switch(ht.tag){case 26:y=ht.memoizedState;case 5:case 27:var E=ht;if(!y||zg(y)){Lt=0,qn=null;var P=E.sibling;if(P!==null)ht=P;else{var $=E.return;$!==null?(ht=$,Ll($)):ht=null}break t}}Lt=0,qn=null,Yr(t,n,f,5);break;case 6:Lt=0,qn=null,Yr(t,n,f,6);break;case 8:lf(),Zt=6;break e;default:throw Error(r(462))}}sx();break}catch(ue){Jm(t,ue)}while(!0);return Fi=er=null,I.H=o,I.A=c,Nt=a,ht!==null?0:(jt=null,yt=0,el(),Zt)}function sx(){for(;ht!==null&&!xn();)tg(ht)}function tg(t){var n=wm(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Ll(t):ht=n}function ng(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Mm(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Mm(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Eu(n);default:Dm(a,n),n=ht=ip(n,qi),n=wm(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Ll(t):ht=n}function Yr(t,n,a,o){Fi=er=null,Eu(n),Fr=null,Qs=0;var c=n.return;try{if(Z_(t,c,n,a,yt)){Zt=1,El(t,Jn(a,t.current)),ht=null;return}}catch(f){if(c!==null)throw ht=c,f;Zt=1,El(t,Jn(a,t.current)),ht=null;return}n.flags&32768?(Rt||o===1?t=!0:kr||(yt&536870912)!==0?t=!1:(xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),ig(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){ig(n,xa);return}t=n.return;var a=Q_(n.alternate,n,qi);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);Zt===0&&(Zt=5)}function ig(t,n){do{var a=J_(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);Zt=6,ht=null}function ag(t,n,a,o,c,f,y,E,P){t.cancelPendingCommit=null;do Ol();while(bn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=$c,Ae(t,a,f,y,E,P),t===jt&&(ht=jt=null,yt=0),Xr=n,Ma=t,Wr=a,rf=f,sf=c,Ym=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ux(at,function(){return cg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=K.p,K.p=2,y=Nt,Nt|=4;try{$_(t,n,a)}finally{Nt=y,K.p=c,I.T=o}}bn=1,rg(),sg(),og()}}function rg(){if(bn===1){bn=0;var t=Ma,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var c=Nt;Nt|=4;try{Gm(n,t);var f=Mf,y=qh(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(y!==E&&E&&E.ownerDocument&&Wh(E.ownerDocument.documentElement,E)){if(P!==null&&Yc(E)){var $=P.start,ue=P.end;if(ue===void 0&&(ue=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ue,E.value.length);else{var ge=E.ownerDocument||document,ne=ge&&ge.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),tt=E.textContent.length,Je=Math.min(P.start,tt),zt=P.end===void 0?Je:Math.min(P.end,tt);!ie.extend&&Je>zt&&(y=zt,zt=Je,Je=y);var W=Xh(E,Je),k=Xh(E,zt);if(W&&k&&(ie.rangeCount!==1||ie.anchorNode!==W.node||ie.anchorOffset!==W.offset||ie.focusNode!==k.node||ie.focusOffset!==k.offset)){var Q=ge.createRange();Q.setStart(W.node,W.offset),ie.removeAllRanges(),Je>zt?(ie.addRange(Q),ie.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ie.addRange(Q))}}}}for(ge=[],ie=E;ie=ie.parentNode;)ie.nodeType===1&&ge.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ge.length;E++){var de=ge[E];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Wl=!!Sf,Mf=Sf=null}finally{Nt=c,K.p=o,I.T=a}}t.current=n,bn=2}}function sg(){if(bn===2){bn=0;var t=Ma,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var c=Nt;Nt|=4;try{zm(t,n.alternate,n)}finally{Nt=c,K.p=o,I.T=a}}bn=3}}function og(){if(bn===4||bn===3){bn=0,St();var t=Ma,n=Xr,a=Wr,o=Ym;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Xr=Ma=null,lg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Sa=null),Ut(a),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,c=K.p,K.p=2,I.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var E=o[y];f(E.value,{componentStack:E.stack})}}finally{I.T=n,K.p=c}}(Wr&3)!==0&&Ol(),bi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===of?so++:(so=0,of=t):so=0,oo(0)}}function lg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Hs(n)))}function Ol(t){return rg(),sg(),og(),cg()}function cg(){if(bn!==5)return!1;var t=Ma,n=rf;rf=0;var a=Ut(Wr),o=I.T,c=K.p;try{K.p=32>a?32:a,I.T=null,a=sf,sf=null;var f=Ma,y=Wr;if(bn=0,Xr=Ma=null,Wr=0,(Nt&6)!==0)throw Error(r(331));var E=Nt;if(Nt|=4,Wm(f.current),km(f,f.current,y,a),Nt=E,oo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{K.p=c,I.T=o,lg(t,n)}}function ug(t,n,a){n=Jn(a,n),n=Bu(t.stateNode,n,2),t=da(t,n,2),t!==null&&(ze(t,2),bi(t))}function Gt(t,n,a){if(t.tag===3)ug(t,t,a);else for(;n!==null;){if(n.tag===3){ug(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sa===null||!Sa.has(o))){t=Jn(a,t),a=pm(2),o=da(n,a,2),o!==null&&(mm(a,o,n,t),ze(o,2),bi(o));break}}n=n.return}}function ff(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new nx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(ef=!0,c.add(a),t=ox.bind(null,t,n,a),n.then(t,t))}function ox(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(yt&a)===a&&(Zt===4||Zt===3&&(yt&62914560)===yt&&300>dt()-af?(Nt&2)===0&&qr(t,0):tf|=a,jr===yt&&(jr=0)),bi(t)}function fg(t,n){n===0&&(n=Ne()),t=Cr(t,n),t!==null&&(ze(t,n),bi(t))}function lx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),fg(t,a)}function cx(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),fg(t,a)}function ux(t,n){return mt(t,n)}var Pl=null,Zr=null,df=!1,Il=!1,hf=!1,or=0;function bi(t){t!==Zr&&t.next===null&&(Zr===null?Pl=Zr=t:Zr=Zr.next=t),Il=!0,df||(df=!0,dx())}function oo(t,n){if(!hf&&Il){hf=!0;do for(var a=!1,o=Pl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=c&~(y&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,mg(o,f))}else f=yt,f=qe(o,o===jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,mg(o,f));o=o.next}while(a);hf=!1}}function fx(){dg()}function dg(){Il=df=!1;var t=0;or!==0&&(yx()&&(t=or),or=0);for(var n=dt(),a=null,o=Pl;o!==null;){var c=o.next,f=hg(o,n);f===0?(o.next=null,a===null?Pl=c:a.next=c,c===null&&(Zr=a)):(a=o,(t!==0||(f&3)!==0)&&(Il=!0)),o=c}oo(t)}function hg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Pe(f),E=1<<y,P=c[y];P===-1?((E&a)===0||(E&o)!==0)&&(c[y]=it(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=jt,a=yt,a=qe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Lt===2||Lt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&H(o),Ut(a)){case 2:case 8:a=Ye;break;case 32:a=at;break;case 268435456:a=L;break;default:a=at}return o=pg.bind(null,t),a=mt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&H(o),t.callbackPriority=2,t.callbackNode=null,2}function pg(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ol()&&t.callbackNode!==a)return null;var o=yt;return o=qe(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Km(t,o,n),hg(t,dt()),t.callbackNode!=null&&t.callbackNode===a?pg.bind(null,t):null)}function mg(t,n){if(Ol())return null;Km(t,n,!0)}function dx(){Mx(function(){(Nt&6)!==0?mt(gt,fx):dg()})}function pf(){return or===0&&(or=j()),or}function gg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qo(""+t)}function vg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function hx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=gg((c[yn]||null).action),y=o.submitter;y&&(n=(n=y[yn]||null)?gg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var E=new Qo("action","action",null,o,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var P=y?vg(c,y):new FormData(c);Lu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=y?vg(c,y):new FormData(c),Lu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var mf=0;mf<Jc.length;mf++){var gf=Jc[mf],px=gf.toLowerCase(),mx=gf[0].toUpperCase()+gf.slice(1);li(px,"on"+mx)}li(Kh,"onAnimationEnd"),li(Qh,"onAnimationIteration"),li(Jh,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(N_,"onTransitionRun"),li(L_,"onTransitionStart"),li(O_,"onTransitionCancel"),li($h,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function _g(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var E=o[y],P=E.instance,$=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=$;try{f(c)}catch(ue){bl(ue)}c.currentTarget=null,f=P}else for(y=0;y<o.length;y++){if(E=o[y],P=E.instance,$=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=$;try{f(c)}catch(ue){bl(ue)}c.currentTarget=null,f=P}}}}function pt(t,n){var a=n[ka];a===void 0&&(a=n[ka]=new Set);var o=t+"__bubble";a.has(o)||(xg(n,t,2,!1),a.add(o))}function vf(t,n,a){var o=0;n&&(o|=4),xg(a,t,o,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function _f(t){if(!t[zl]){t[zl]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(gx.has(a)||vf(a,!1,t),vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,vf("selectionchange",!1,n))}}function xg(t,n,a,o){switch(kg(n)){case 2:var c=kx;break;case 8:c=jx;break;default:c=Nf}a=c.bind(null,n,a,t),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function xf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var E=o.stateNode.containerInfo;if(E===c)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;E!==null;){if(y=Di(E),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=f=y;continue e}E=E.parentNode}}o=o.return}Ah(function(){var $=f,ue=zc(a),ge=[];e:{var ne=ep.get(t);if(ne!==void 0){var ie=Qo,tt=t;switch(t){case"keypress":if(Zo(a)===0)break e;case"keydown":case"keyup":ie=u_;break;case"focusin":tt="focus",ie=kc;break;case"focusout":tt="blur",ie=kc;break;case"beforeblur":case"afterblur":ie=kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=h_;break;case Kh:case Qh:case Jh:ie=t_;break;case $h:ie=m_;break;case"scroll":case"scrollend":ie=Kv;break;case"wheel":ie=v_;break;case"copy":case"cut":case"paste":ie=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Uh;break;case"toggle":case"beforetoggle":ie=x_}var Je=(n&4)!==0,zt=!Je&&(t==="scroll"||t==="scrollend"),W=Je?ne!==null?ne+"Capture":null:ne;Je=[];for(var k=$,Q;k!==null;){var de=k;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||W===null||(de=Rs(k,W),de!=null&&Je.push(co(k,de,Q))),zt)break;k=k.return}0<Je.length&&(ne=new ie(ne,tt,null,a,ue),ge.push({event:ne,listeners:Je}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&a!==Ic&&(tt=a.relatedTarget||a.fromElement)&&(Di(tt)||tt[On]))break e;if((ie||ne)&&(ne=ue.window===ue?ue:(ne=ue.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(tt=a.relatedTarget||a.toElement,ie=$,tt=tt?Di(tt):null,tt!==null&&(zt=u(tt),Je=tt.tag,tt!==zt||Je!==5&&Je!==27&&Je!==6)&&(tt=null)):(ie=null,tt=$),ie!==tt)){if(Je=Ch,de="onMouseLeave",W="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Uh,de="onPointerLeave",W="onPointerEnter",k="pointer"),zt=ie==null?ne:Xa(ie),Q=tt==null?ne:Xa(tt),ne=new Je(de,k+"leave",ie,a,ue),ne.target=zt,ne.relatedTarget=Q,de=null,Di(ue)===$&&(Je=new Je(W,k+"enter",tt,a,ue),Je.target=Q,Je.relatedTarget=zt,de=Je),zt=de,ie&&tt)t:{for(Je=ie,W=tt,k=0,Q=Je;Q;Q=Kr(Q))k++;for(Q=0,de=W;de;de=Kr(de))Q++;for(;0<k-Q;)Je=Kr(Je),k--;for(;0<Q-k;)W=Kr(W),Q--;for(;k--;){if(Je===W||W!==null&&Je===W.alternate)break t;Je=Kr(Je),W=Kr(W)}Je=null}else Je=null;ie!==null&&yg(ge,ne,ie,Je,!1),tt!==null&&zt!==null&&yg(ge,zt,tt,Je,!0)}}e:{if(ne=$?Xa($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=Fh;else if(zh(ne))if(Hh)He=C_;else{He=R_;var ft=A_}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&Pc($.elementType)&&(He=Fh):He=w_;if(He&&(He=He(t,$))){Bh(ge,He,a,ue);break e}ft&&ft(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&An(ne,"number",ne.value)}switch(ft=$?Xa($):window,t){case"focusin":(zh(ft)||ft.contentEditable==="true")&&(Ar=ft,Zc=$,Ps=null);break;case"focusout":Ps=Zc=Ar=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Yh(ge,a,ue);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":Yh(ge,a,ue)}var Xe;if(Xc)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else Tr?Ph(t,a)&&(et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(Nh&&a.locale!=="ko"&&(Tr||et!=="onCompositionStart"?et==="onCompositionEnd"&&Tr&&(Xe=Rh()):(la=ue,Hc="value"in la?la.value:la.textContent,Tr=!0)),ft=Bl($,et),0<ft.length&&(et=new Dh(et,t,null,a,ue),ge.push({event:et,listeners:ft}),Xe?et.data=Xe:(Xe=Ih(a),Xe!==null&&(et.data=Xe)))),(Xe=S_?M_(t,a):b_(t,a))&&(et=Bl($,"onBeforeInput"),0<et.length&&(ft=new Dh("onBeforeInput","beforeinput",null,a,ue),ge.push({event:ft,listeners:et}),ft.data=Xe)),hx(ge,t,$,a,ue)}_g(ge,n)})}function co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Rs(t,a),c!=null&&o.unshift(co(t,c,f)),c=Rs(t,n),c!=null&&o.push(co(t,c,f))),t.tag===3)return o;t=t.return}return[]}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function yg(t,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var E=a,P=E.alternate,$=E.stateNode;if(E=E.tag,P!==null&&P===o)break;E!==5&&E!==26&&E!==27||$===null||(P=$,c?($=Rs(a,f),$!=null&&y.unshift(co(a,$,P))):c||($=Rs(a,f),$!=null&&y.push(co(a,$,P)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var vx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(vx,`
`).replace(_x,"")}function Mg(t,n){return n=Sg(n),Sg(t)===n}function Fl(){}function It(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_i(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_i(t,""+o);break;case"className":De(t,"class",o);break;case"tabIndex":De(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,a,o);break;case"style":Eh(t,o,f);break;case"data":if(n!=="object"){De(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=qo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(t,n,"name",c.name,c,null),It(t,n,"formEncType",c.formEncType,c,null),It(t,n,"formMethod",c.formMethod,c,null),It(t,n,"formTarget",c.formTarget,c,null)):(It(t,n,"encType",c.encType,c,null),It(t,n,"method",c.method,c,null),It(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=qo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Fl);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=qo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Te(t,"popover",o);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Te(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yv.get(a)||a,Te(t,a,o))}}function yf(t,n,a,o,c,f){switch(a){case"style":Eh(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?_i(t,o):(typeof o=="number"||typeof o=="bigint")&&_i(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Te(t,a,o)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,f,y,a,null)}}c&&It(t,n,"srcSet",a.srcSet,a,null),o&&It(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var E=f=y=c=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ue=a[o];if(ue!=null)switch(o){case"name":c=ue;break;case"type":y=ue;break;case"checked":P=ue;break;case"defaultChecked":$=ue;break;case"value":f=ue;break;case"defaultValue":E=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:It(t,n,o,ue,a,null)}}Ht(t,f,E,P,$,y,c,!1),qt(t);return;case"select":pt("invalid",t),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":y=E;break;case"multiple":o=E;default:It(t,n,c,E,a,null)}n=f,a=y,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":pt("invalid",t),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(E=a[y],E!=null))switch(y){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:It(t,n,y,E,a,null)}Sn(t,o,c,f),qt(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(t,n,P,o,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<lo.length;o++)pt(lo[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(t,n,$,o,a,null)}return;default:if(Pc(n)){for(ue in a)a.hasOwnProperty(ue)&&(o=a[ue],o!==void 0&&yf(t,n,ue,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&It(t,n,E,o,a,null))}function xx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,E=null,P=null,$=null,ue=null;for(ie in a){var ge=a[ie];if(a.hasOwnProperty(ie)&&ge!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=ge;default:o.hasOwnProperty(ie)||It(t,n,ie,null,o,ge)}}for(var ne in o){var ie=o[ne];if(ge=a[ne],o.hasOwnProperty(ne)&&(ie!=null||ge!=null))switch(ne){case"type":f=ie;break;case"name":c=ie;break;case"checked":$=ie;break;case"defaultChecked":ue=ie;break;case"value":y=ie;break;case"defaultValue":E=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:ie!==ge&&It(t,n,ne,ie,o,ge)}}Li(t,y,E,P,$,ue,f,c);return;case"select":ie=y=E=ne=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ie=P;default:o.hasOwnProperty(f)||It(t,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ne=f;break;case"defaultValue":E=f;break;case"multiple":y=f;default:f!==P&&It(t,n,c,f,o,P)}n=E,a=y,o=ie,ne!=null?ln(t,!!a,ne,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ie=ne=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:It(t,n,E,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":ne=c;break;case"defaultValue":ie=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(t,n,y,c,o,f)}pn(t,ne,ie);return;case"option":for(var tt in a)if(ne=a[tt],a.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:It(t,n,tt,null,o,ne)}for(P in o)if(ne=o[P],ie=a[P],o.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:It(t,n,P,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)ne=a[Je],a.hasOwnProperty(Je)&&ne!=null&&!o.hasOwnProperty(Je)&&It(t,n,Je,null,o,ne);for($ in o)if(ne=o[$],ie=a[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:It(t,n,$,ne,o,ie)}return;default:if(Pc(n)){for(var zt in a)ne=a[zt],a.hasOwnProperty(zt)&&ne!==void 0&&!o.hasOwnProperty(zt)&&yf(t,n,zt,void 0,o,ne);for(ue in o)ne=o[ue],ie=a[ue],!o.hasOwnProperty(ue)||ne===ie||ne===void 0&&ie===void 0||yf(t,n,ue,ne,o,ie);return}}for(var W in a)ne=a[W],a.hasOwnProperty(W)&&ne!=null&&!o.hasOwnProperty(W)&&It(t,n,W,null,o,ne);for(ge in o)ne=o[ge],ie=a[ge],!o.hasOwnProperty(ge)||ne===ie||ne==null&&ie==null||It(t,n,ge,ne,o,ie)}var Sf=null,Mf=null;function Hl(t){return t.nodeType===9?t:t.ownerDocument}function bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function yx(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(t){return Ag.resolve(null).then(t).catch(bx)}:Tg;function bx(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function Rg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=t.ownerDocument;if(a&1&&uo(y.documentElement),a&2&&uo(y.body),a&4)for(a=y.head,uo(a),y=a.firstChild;y;){var E=y.nextSibling,P=y.nodeName;y[aa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=E}}if(c===0){t.removeChild(f),xo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);xo(n)}function Tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ex(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Tx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ax(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Rf=null;function wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Cg(t,n,a){switch(n=Hl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ra(t)}var ai=new Map,Dg=new Set;function Gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=K.d;K.d={f:Rx,r:wx,D:Cx,C:Dx,L:Ux,m:Nx,X:Ox,S:Lx,M:Px};function Rx(){var t=Yi.f(),n=Nl();return t||n}function wx(t){var n=Ui(t);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Yi.r(t)}var Qr=typeof document>"u"?null:document;function Ug(t,n,a){var o=Qr;if(o&&typeof n=="string"&&n){var c=kt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Dg.has(c)||(Dg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),En(n,"link",t),tn(n),o.head.appendChild(n)))}}function Cx(t){Yi.D(t),Ug("dns-prefetch",t,null)}function Dx(t,n){Yi.C(t,n),Ug("preconnect",t,n)}function Ux(t,n,a){Yi.L(t,n,a);var o=Qr;if(o&&t&&n){var c='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+kt(a.imageSizes)+'"]')):c+='[href="'+kt(t)+'"]';var f=c;switch(n){case"style":f=Jr(t);break;case"script":f=$r(t)}ai.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(fo(f))||n==="script"&&o.querySelector(ho(f))||(n=o.createElement("link"),En(n,"link",t),tn(n),o.head.appendChild(n)))}}function Nx(t,n){Yi.m(t,n);var a=Qr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(t)}if(!ai.has(f)&&(t=g({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}o=a.createElement("link"),En(o,"link",t),tn(o),a.head.appendChild(o)}}}function Lx(t,n,a){Yi.S(t,n,a);var o=Qr;if(o&&t){var c=sa(o).hoistableStyles,f=Jr(t);n=n||"default";var y=c.get(f);if(!y){var E={loading:0,preload:null};if(y=o.querySelector(fo(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&wf(t,a);var P=y=o.createElement("link");tn(P),En(P,"link",t),P._p=new Promise(function($,ue){P.onload=$,P.onerror=ue}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:E},c.set(f,y)}}}function Ox(t,n){Yi.X(t,n);var a=Qr;if(a&&t){var o=sa(a).hoistableScripts,c=$r(t),f=o.get(c);f||(f=a.querySelector(ho(c)),f||(t=g({src:t,async:!0},n),(n=ai.get(c))&&Cf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Px(t,n){Yi.M(t,n);var a=Qr;if(a&&t){var o=sa(a).hoistableScripts,c=$r(t),f=o.get(c);f||(f=a.querySelector(ho(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ai.get(c))&&Cf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Ng(t,n,a,o){var c=(c=Me.current)?Gl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=sa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Jr(a.href);var f=sa(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(fo(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||Ix(c,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=sa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Jr(t){return'href="'+kt(t)+'"'}function fo(t){return'link[rel="stylesheet"]['+t+"]"}function Lg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ix(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),tn(n),t.head.appendChild(n))}function $r(t){return'[src="'+kt(t)+'"]'}function ho(t){return"script[async]"+t}function Og(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),En(o,"style",c),Vl(o,a.precedence,t),n.instance=o;case"stylesheet":c=Jr(a.href);var f=t.querySelector(fo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=Lg(a),(c=ai.get(c))&&wf(o,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var y=f;return y._p=new Promise(function(E,P){y.onload=E,y.onerror=P}),En(f,"link",o),n.state.loading|=4,Vl(f,a.precedence,t),n.instance=f;case"script":return f=$r(a.src),(c=t.querySelector(ho(f)))?(n.instance=c,tn(c),c):(o=a,(c=ai.get(f))&&(o=g({},a),Cf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),En(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Vl(o,a.precedence,t));return n.instance}function Vl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var E=o[y];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Cf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var kl=null;function Pg(t,n,a){if(kl===null){var o=new Map,c=kl=new Map;c.set(a,o)}else c=kl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[aa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var E=o.get(y);E?E.push(f):o.set(y,[f])}}return o}function Ig(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function zx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var po=null;function Bx(){}function Fx(t,n,a){if(po===null)throw Error(r(475));var o=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Jr(a.href),f=t.querySelector(fo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=jl.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Lg(a),(c=ai.get(c))&&wf(a,c),f=f.createElement("link"),tn(f);var y=f;y._p=new Promise(function(E,P){y.onload=E,y.onerror=P}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Hx(){if(po===null)throw Error(r(475));var t=po;return t.stylesheets&&t.count===0&&Df(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Df(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Df(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function Df(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(Gx,t),Xl=null,jl.call(t))}function Gx(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var o=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=jl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var mo={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Vx(t,n,a,o,c,f,y,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Bg(t,n,a,o,c,f,y,E,P,$,ue,ge){return t=new Vx(t,n,a,y,E,P,$,ge),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},pu(f),t}function Fg(t){return t?(t=Dr,t):Dr}function Hg(t,n,a,o,c,f){c=Fg(c),o.context===null?o.context=c:o.pendingContext=c,o=fa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=da(t,o,n),a!==null&&(Zn(a,t,n),js(a,t,n))}function Gg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Uf(t,n){Gg(t,n),(t=t.alternate)&&Gg(t,n)}function Vg(t){if(t.tag===13){var n=Cr(t,67108864);n!==null&&Zn(n,t,67108864),Uf(t,67108864)}}var Wl=!0;function kx(t,n,a,o){var c=I.T;I.T=null;var f=K.p;try{K.p=2,Nf(t,n,a,o)}finally{K.p=f,I.T=c}}function jx(t,n,a,o){var c=I.T;I.T=null;var f=K.p;try{K.p=8,Nf(t,n,a,o)}finally{K.p=f,I.T=c}}function Nf(t,n,a,o){if(Wl){var c=Lf(o);if(c===null)xf(t,n,o,ql,a),jg(t,o);else if(Wx(c,t,n,a,o))o.stopPropagation();else if(jg(t,o),n&4&&-1<Xx.indexOf(t)){for(;c!==null;){var f=Ui(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=We(f.pendingLanes);if(y!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;y;){var P=1<<31-Pe(y);E.entanglements[1]|=P,y&=~P}bi(f),(Nt&6)===0&&(Dl=dt()+500,oo(0))}}break;case 13:E=Cr(f,2),E!==null&&Zn(E,f,2),Nl(),Uf(f,2)}if(f=Lf(o),f===null&&xf(t,n,o,ql,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else xf(t,n,o,null,a)}}function Lf(t){return t=zc(t),Of(t)}var ql=null;function Of(t){if(ql=null,t=Di(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function kg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case gt:return 2;case Ye:return 8;case at:case Jt:return 32;case L:return 268435456;default:return 32}default:return 32}}var Pf=!1,Ta=null,Aa=null,Ra=null,go=new Map,vo=new Map,wa=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function _o(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ui(n),n!==null&&Vg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Wx(t,n,a,o,c){switch(n){case"focusin":return Ta=_o(Ta,t,n,a,o,c),!0;case"dragenter":return Aa=_o(Aa,t,n,a,o,c),!0;case"mouseover":return Ra=_o(Ra,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,_o(go.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,vo.set(f,_o(vo.get(f)||null,t,n,a,o,c)),!0}return!1}function Xg(t){var n=Di(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vn(t.priority,function(){if(a.tag===13){var o=Yn();o=nt(o);var c=Cr(a,o);c!==null&&Zn(c,a,o),Uf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ic=o,a.target.dispatchEvent(o),Ic=null}else return n=Ui(a),n!==null&&Vg(n),t.blockedOn=a,!1;n.shift()}return!0}function Wg(t,n,a){Yl(t)&&a.delete(n)}function qx(){Pf=!1,Ta!==null&&Yl(Ta)&&(Ta=null),Aa!==null&&Yl(Aa)&&(Aa=null),Ra!==null&&Yl(Ra)&&(Ra=null),go.forEach(Wg),vo.forEach(Wg)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Pf||(Pf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qx)))}var Kl=null;function qg(t){Kl!==t&&(Kl=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Of(o||a)===null)continue;break}var f=Ui(a);f!==null&&(t.splice(n,3),n-=3,Lu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function xo(t){function n(P){return Zl(P,t)}Ta!==null&&Zl(Ta,t),Aa!==null&&Zl(Aa,t),Ra!==null&&Zl(Ra,t),go.forEach(n),vo.forEach(n);for(var a=0;a<wa.length;a++){var o=wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Xg(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[yn]||null;if(typeof f=="function")y||qg(a);else if(y){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[yn]||null)E=y.formAction;else if(Of(c)!==null)continue}else E=y.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),qg(a)}}}function If(t){this._internalRoot=t}Ql.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Yn();Hg(a,o,t,n,null,null)},Ql.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Hg(t.current,2,null,t,null,null),Nl(),n[On]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&Xg(t)}};var Yg=e.version;if(Yg!=="19.1.0")throw Error(r(527,Yg,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Yx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{fe=Jl.inject(Yx),pe=Jl}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=um,f=fm,y=dm,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Bg(t,1,!1,null,null,a,o,c,f,y,E,null),t[On]=n.current,_f(t),new If(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=um,y=fm,E=dm,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Bg(t,1,!0,n,a??null,o,c,f,y,E,P,$),n.context=Fg(null),a=n.current,o=Yn(),o=nt(o),c=fa(o),c.callback=null,da(a,c,o),a=o,n.current.lanes=a,ze(n,a),bi(n),t[On]=n.current,_f(t),new Ql(n)},So.version="19.1.0",So}var a0;function ry(){if(a0)return Ff.exports;a0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ff.exports=ay(),Ff.exports}var sy=ry();const r0=["home","about","skill","project","contact"];function oy(){const[s,e]=Ct.useState(!1),i=()=>{e(!s)},r=()=>{e(!1)};return A.jsxs("div",{className:"navbar bg-base-100 sticky top-0 z-50 shadow-md",children:[A.jsx("div",{className:"flex-1",children:A.jsx("a",{className:"btn btn-ghost text-xl",children:"Hello World"})}),A.jsx("div",{className:"flex-none hidden lg:flex",children:A.jsx("ul",{className:"menu menu-horizontal px-1",children:r0.map(l=>A.jsx("li",{children:A.jsx("a",{href:`#${l}`,className:"capitalize hover:bg-base-200",children:l})},l))})}),A.jsx("div",{className:"flex-none lg:hidden",children:A.jsx("button",{className:"btn btn-square btn-ghost",onClick:i,"aria-label":"Toggle menu",children:A.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s?A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})}),s&&A.jsx("div",{className:"absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden",children:A.jsx("ul",{className:"menu menu-vertical p-2",children:r0.map(l=>A.jsx("li",{children:A.jsx("a",{href:`#${l}`,className:"capitalize hover:bg-base-200 py-3",onClick:r,children:l})},l))})})]})}const s0=[`Hello I'm "Ta"`,"I interested in Software Development","I really love Mathematics","I love to learn new things"];function ly(){const[s,e]=Ct.useState(""),[i,r]=Ct.useState(0),[l,u]=Ct.useState(0),[d,h]=Ct.useState(!1),[p,m]=Ct.useState(!1);return Ct.useEffect(()=>{const g=s0[i],_=110,x=55,M=1500,T=700,C=z=>z+(Math.random()*30-15);let S=C(d?x:_);p&&(S=d?T:M);const v=setTimeout(()=>{if(p){m(!1),d?(h(!1),r((i+1)%s0.length)):h(!0);return}d?(e(g.slice(0,l-1)),u(l-1),l-1===0&&m(!0)):(e(g.slice(0,l+1)),u(l+1),l+1===g.length&&m(!0))},S);return()=>clearTimeout(v)},[l,d,i,p]),A.jsxs("h2",{className:"text-3xl font-semibold text-center mt-8",children:[s,A.jsx("span",{className:"animate-pulse",children:"|"})]})}function cy(){return A.jsxs("div",{className:"flex flex-col",children:[A.jsx("div",{className:"hero min-h-[60vh] bg-base-200",style:{backgroundImage:"url(/me/assets/background.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}),A.jsx("div",{className:"-mt-1",children:A.jsx(ly,{})})]})}var Sd=function(){return(Sd=Object.assign||function(s){for(var e,i=1,r=arguments.length;i<r;i++)for(var l in e=arguments[i])Object.prototype.hasOwnProperty.call(e,l)&&(s[l]=e[l]);return s}).apply(this,arguments)},Mo,bo,Md=Ct.createContext(void 0),o0="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",l0="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",uy=function(_){var e=_.config,i=_.version,i=i===void 0?3:i,r=_.src,r=r===void 0?i===2?o0:l0:r,l=_.onStartup,u=_.onLoad,p=_.asyncLoad,d=p!==void 0&&p,h=_.onError,p=_.typesettingOptions,m=_.renderMode,m=m===void 0?"post":m,g=_.hideUntilTypeset,_=_.children,M=Ct.useContext(Md);if((M==null?void 0:M.version)!==void 0&&(M==null?void 0:M.version)!==i)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(i===2&&bo!==void 0||i===3&&Mo!==void 0)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var x=Ct.useRef(M),M=Ct.useRef((M==null?void 0:M.version)||null);if(M.current===null)M.current=i;else if(M.current!==i)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var T=r||(i===2?o0:l0);function C(S,v){e&&(window.MathJax=e);var z=document.createElement("script");z.type="text/javascript",z.src=T,z.async=d,z.addEventListener("load",function(){var O=window.MathJax;l&&l(O),S(O),u&&u()}),z.addEventListener("error",function(O){return v(O)}),document.getElementsByTagName("head")[0].appendChild(z)}return x.current===void 0&&(M={typesettingOptions:p,renderMode:m,hideUntilTypeset:g},i===2?Mo===void 0&&(typeof window<"u"?(Mo=new Promise(C)).catch(function(S){if(!h)throw Error("Failed to download MathJax version 2 from '".concat(T,"' due to: ").concat(JSON.stringify(S)));h(S)}):(Mo=Promise.reject()).catch(function(S){})):bo===void 0&&(typeof window<"u"?(bo=new Promise(C)).catch(function(S){if(!h)throw Error("Failed to download MathJax version 3 from '".concat(T,"' due to: ").concat(S));h(S)}):(bo=Promise.reject()).catch(function(S){})),x.current=Sd(Sd({},M),i===2?{version:2,promise:Mo}:{version:3,promise:bo})),fh.createElement(Md.Provider,{value:x.current},_)},Ia=function(){return(Ia=Object.assign||function(s){for(var e,i=1,r=arguments.length;i<r;i++)for(var l in e=arguments[i])Object.prototype.hasOwnProperty.call(e,l)&&(s[l]=e[l]);return s}).apply(this,arguments)},fy=function(s,e){var i={};for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&e.indexOf(l)<0&&(i[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(s);r<l.length;r++)e.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(s,l[r])&&(i[l[r]]=s[l[r]]);return i},Eo=function(s){return"Typesetting failed: ".concat(s.message!==void 0?s.message:JSON.stringify(s))},To=function(s){function e(){var G;C==="every"&&z&&S==="post"&&M.current!==null&&(M.current.style.visibility=(G=(G=_.style)==null?void 0:G.visibility)!=null?G:"visible"),O.current||(C==="first"&&M.current!==null&&(M.current.style.visibility="visible"),l&&l(),O.current=!0),u&&u(),U.current=!1}var r=s.inline,i=r!==void 0&&r,r=s.hideUntilTypeset,l=s.onInitTypeset,u=s.onTypeset,d=s.text,h=s.dynamic,p=s.typesettingOptions,m=s.renderMode,g=s.children,_=fy(s,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),x=Ct.useRef(""),M=Ct.useRef(null),T=Ct.useContext(Md),C=r??(T==null?void 0:T.hideUntilTypeset),S=m??(T==null?void 0:T.renderMode),v=p??(T==null?void 0:T.typesettingOptions),z=h!==!1&&(h||!1),O=Ct.useRef(!1),U=Ct.useRef(!1);return!U.current&&M.current!==null&&z&&C==="every"&&S==="post"&&(M.current.style.visibility="hidden"),(typeof window<"u"?Ct.useLayoutEffect:Ct.useEffect)(function(){if((z||!O.current)&&M.current!==null){if(!T)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if(S==="pre"){if(!(typeof(G=d)=="string"&&0<G.length))throw Error(`Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(d,'"'));if(!p||!p.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(T.version===2)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}S!=="post"&&d===x.current||U.current||(U.current=!0,T.version===3?T.promise.then(function(F){var B;S==="pre"?(B=function(X){x.current=d,F.startup.document.clear(),F.startup.document.updateDocument(),M.current!==null&&(M.current.innerHTML=X.outerHTML),e()},p.fn.endsWith("Promise")?F.startup.promise.then(function(){return F[v.fn](d,Ia(Ia({},(v==null?void 0:v.options)||{}),{display:!i}))}).then(B).catch(function(X){throw e(),Error(Eo(X))}):F.startup.promise.then(function(){var X=F[v.fn](d,Ia(Ia({},(v==null?void 0:v.options)||{}),{display:!i}));B(X)}).catch(function(X){throw e(),Error(Eo(X))})):F.startup.promise.then(function(){return F.typesetClear([M.current]),F.typesetPromise([M.current])}).then(e).catch(function(X){throw e(),Error(Eo(X))})}).catch(function(F){throw e(),Error(Eo(F))}):T.promise.then(function(F){F.Hub.Queue(["Typeset",F.Hub,M.current]),F.Hub.Queue(e)}).catch(function(F){throw e(),Error(Eo(F))}))}var G}),fh.createElement("span",Ia({},_,{style:Ia(Ia({display:i?"inline":"block"},_.style),{visibility:C?"hidden":(s=_.style)==null?void 0:s.visibility}),ref:M}),g)};const dy={loader:{load:["input/tex","output/chtml"]}};function hy(){return A.jsx(uy,{config:dy,children:A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700",children:[A.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[A.jsx("span",{className:"text-2xl mr-2",children:"📐"}),"Hyperbolic Paraboloid Equation"]}),A.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-center text-lg border shadow-sm",children:[A.jsx(To,{className:"text-blue-600 dark:text-blue-400 font-bold",children:"\\( z = \\frac{y^2}{b^2} - \\frac{x^2}{a^2} \\)"}),A.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"where \\( a = 3, b = 3 \\)"})]})]}),A.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700",children:[A.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[A.jsx("span",{className:"text-2xl mr-2",children:"📏"}),"Surface Area Analysis"]}),A.jsx("div",{className:"space-y-3",children:["\\( \\frac{\\partial z}{\\partial x} = -\\frac{2x}{a^2}, \\quad \\frac{\\partial z}{\\partial y} = \\frac{2y}{b^2} \\)","\\( dS = \\sqrt{1 + \\left(\\frac{\\partial z}{\\partial x}\\right)^2 + \\left(\\frac{\\partial z}{\\partial y}\\right)^2} \\, dx \\, dy \\)","\\( dS = \\sqrt{1 + \\frac{4x^2}{9} + \\frac{4y^2}{9}} \\, dx \\, dy \\)"].map((s,e)=>A.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:A.jsx(To,{className:"font-mono text-sm text-green-600 dark:text-green-400 font-bold",children:s})},e))})]}),A.jsxs("div",{className:"bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700",children:[A.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[A.jsx("span",{className:"text-2xl mr-2",children:"📊"}),"Volume Under Surface"]}),A.jsxs("div",{className:"space-y-3",children:[A.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:A.jsx(To,{className:"font-mono text-sm text-orange-600 dark:text-orange-400 font-bold",children:"\\( V = \\iint |\\frac{y^2}{9} - \\frac{x^2}{9}| \\, dx \\, dy \\)"})}),A.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:A.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Region: \\([-3, 3] \\\\times [-3, 3]\\)"})}),A.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[A.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center",children:[A.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Positive Volume"}),A.jsx("div",{className:"font-bold text-blue-600 dark:text-blue-400",children:"≈ 24 units³"})]}),A.jsxs("div",{className:"bg-red-50 dark:bg-red-900/30 p-3 rounded-lg text-center",children:[A.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Negative Volume"}),A.jsx("div",{className:"font-bold text-red-600 dark:text-red-400",children:"≈ -24 units³"})]})]})]})]}),A.jsxs("div",{className:"bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700",children:[A.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[A.jsx("span",{className:"text-2xl mr-2",children:"⚡"}),"Mathematical Properties"]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[A.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[A.jsx("div",{className:"font-semibold text-purple-600 dark:text-purple-400 mb-2",children:"Curvature"}),A.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Saddle point at origin",A.jsx("br",{}),A.jsx(To,{children:"\\( K = -\\frac{4}{9(1 + \\frac{4r^2}{9})^2} \\)"})]})]}),A.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[A.jsx("div",{className:"font-semibold text-purple-600 dark:text-purple-400 mb-2",children:"Asymptotes"}),A.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Hyperbolic curves:",A.jsx("br",{}),A.jsx(To,{children:"\\( y = \\pm x \\quad \\text{(when } z = 0 \\text{)} \\)"})]})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="177",py=0,c0=1,my=2,pv=1,gy=2,ea=3,Ha=0,Hn=1,Ti=2,Ba=0,gs=1,u0=2,f0=3,d0=4,vy=5,gr=100,_y=101,xy=102,yy=103,Sy=104,My=200,by=201,Ey=202,Ty=203,bd=204,Ed=205,Ay=206,Ry=207,wy=208,Cy=209,Dy=210,Uy=211,Ny=212,Ly=213,Oy=214,Td=0,Ad=1,Rd=2,xs=3,wd=4,Cd=5,Dd=6,Ud=7,mv=0,Py=1,Iy=2,Fa=0,zy=1,By=2,Fy=3,Hy=4,Gy=5,Vy=6,ky=7,gv=300,ys=301,Ss=302,Nd=303,Ld=304,Nc=306,Od=1e3,_r=1001,Pd=1002,gi=1003,jy=1004,$l=1005,Ai=1006,kf=1007,xr=1008,wi=1009,vv=1010,_v=1011,Lo=1012,hh=1013,Sr=1014,ta=1015,zo=1016,ph=1017,mh=1018,Oo=1020,xv=35902,yv=1021,Sv=1022,mi=1023,Po=1026,Io=1027,Mv=1028,gh=1029,bv=1030,vh=1031,_h=1033,Sc=33776,Mc=33777,bc=33778,Ec=33779,Id=35840,zd=35841,Bd=35842,Fd=35843,Hd=36196,Gd=37492,Vd=37496,kd=37808,jd=37809,Xd=37810,Wd=37811,qd=37812,Yd=37813,Zd=37814,Kd=37815,Qd=37816,Jd=37817,$d=37818,eh=37819,th=37820,nh=37821,Tc=36492,ih=36494,ah=36495,Ev=36283,rh=36284,sh=36285,oh=36286,Xy=3200,Wy=3201,Tv=0,qy=1,za="",si="srgb",Ms="srgb-linear",Cc="linear",Bt="srgb",es=7680,h0=519,Yy=512,Zy=513,Ky=514,Av=515,Qy=516,Jy=517,$y=518,eS=519,p0=35044,m0="300 es",na=2e3,Dc=2001;class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,lh=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function xt(s,e,i){return Math.max(e,Math.min(i,s))}function tS(s,e){return(s%e+e)%e}function Xf(s,e,i){return(1-i)*s+i*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const x=u[d+0],M=u[d+1],T=u[d+2],C=u[d+3];if(h===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=C;return}if(_!==C||p!==x||m!==M||g!==T){let S=1-h;const v=p*x+m*M+g*T+_*C,z=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const G=Math.sqrt(O),F=Math.atan2(G,v*z);S=Math.sin(S*F)/G,h=Math.sin(h*F)/G}const U=h*z;if(p=p*S+x*U,m=m*S+M*U,g=g*S+T*U,_=_*S+C*U,S===1-h){const G=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=G,m*=G,g*=G,_*=G}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=u[d],x=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+g*_+p*M-m*x,e[i+1]=p*T+g*x+m*_-h*M,e[i+2]=m*T+g*M+h*x-p*_,e[i+3]=g*T-h*_-p*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),_=h(u/2),x=p(r/2),M=p(l/2),T=p(u/2);switch(d){case"XYZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"YZX":this._x=x*g*_+m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_-x*M*T;break;case"XZY":this._x=x*g*_-m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],x=r+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(g0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(g0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),g=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+p*m+d*_-h*g,this.y=r+p*g+h*m-u*_,this.z=l+p*_+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new se,g0=new Fo;class st{constructor(e,i,r,l,u,d,h,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],_=r[7],x=r[2],M=r[5],T=r[8],C=l[0],S=l[3],v=l[6],z=l[1],O=l[4],U=l[7],G=l[2],F=l[5],B=l[8];return u[0]=d*C+h*z+p*G,u[3]=d*S+h*O+p*F,u[6]=d*v+h*U+p*B,u[1]=m*C+g*z+_*G,u[4]=m*S+g*O+_*F,u[7]=m*v+g*U+_*B,u[2]=x*C+M*z+T*G,u[5]=x*S+M*O+T*F,u[8]=x*v+M*U+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=g*d-h*m,x=h*p-g*u,M=m*u-d*p,T=i*_+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(l*m-g*r)*C,e[2]=(h*r-l*d)*C,e[3]=x*C,e[4]=(g*i-l*p)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(r*p-m*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(qf.makeScale(e,i)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new st;function Rv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nS(){const s=Uc("canvas");return s.style.display="block",s}const v0={};function vs(s){s in v0||(v0[s]=!0,console.warn(s))}function iS(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function aS(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rS(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _0=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sS(){const s={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Bt&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=_s(l.r),l.g=_s(l.g),l.b=_s(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Cc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ms]:{primaries:e,whitePoint:r,transfer:Cc,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Tt=sS();function ia(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class oS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ts===void 0&&(ts=Uc("canvas")),ts.width=e.width,ts.height=e.height;const l=ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ia(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lS=0;class xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Yf(l[d].image)):u.push(Yf(l[d]))}else u=Yf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Yf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cS=0;const Zf=new se;class Gn extends Ts{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=_r,l=_r,u=Ai,d=xr,h=mi,p=wi,m=Gn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Bo(),this.name="",this.source=new xh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zf).x}get height(){return this.source.getSize(Zf).y}get depth(){return this.source.getSize(Zf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=gv;Gn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,i=0,r=0,l=1){Kt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],T=p[9],C=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,U=(M+1)/2,G=(v+1)/2,F=(g+x)/4,B=(_+C)/4,X=(T+S)/4;return O>U&&O>G?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=F/r,u=B/r):U>G?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=F/l,u=X/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=B/u,l=X/u),this.set(r,l,u,i),this}let z=Math.sqrt((S-T)*(S-T)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(S-T)/z,this.y=(_-C)/z,this.z=(x-g)/z,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uS extends Ts{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Kt(0,0,e,i),this.scissorTest=!1,this.viewport=new Kt(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends uS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class wv extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fS extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,fi):fi.fromBufferAttribute(u,d),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ec.copy(r.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),tc.subVectors(this.max,Ro),ns.subVectors(e.a,Ro),is.subVectors(e.b,Ro),as.subVectors(e.c,Ro),Da.subVectors(is,ns),Ua.subVectors(as,is),lr.subVectors(ns,as);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-lr.z,lr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,lr.z,0,-lr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-lr.y,lr.x,0];return!Kf(i,ns,is,as,tc)||(i=[1,0,0,0,1,0,0,0,1],!Kf(i,ns,is,as,tc))?!1:(nc.crossVectors(Da,Ua),i=[nc.x,nc.y,nc.z],Kf(i,ns,is,as,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new se,new se,new se,new se,new se,new se,new se,new se],fi=new se,ec=new Ho,ns=new se,is=new se,as=new se,Da=new se,Ua=new se,lr=new se,Ro=new se,tc=new se,nc=new se,cr=new se;function Kf(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){cr.fromArray(s,u);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),p=e.dot(cr),m=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const dS=new Ho,wo=new se,Qf=new se;class yh{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(Qf)),this.expandByPoint(wo.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new se,Jf=new se,ic=new se,Na=new se,$f=new se,ac=new se,ed=new se;class hS{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jf.copy(e).add(i).multiplyScalar(.5),ic.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(Jf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(ic),h=Na.dot(this.direction),p=-Na.dot(ic),m=Na.lengthSq(),g=Math.abs(1-d*d);let _,x,M,T;if(g>0)if(_=d*p-h,x=d*h-p,T=u*g,_>=0)if(x>=-T)if(x<=T){const C=1/g;_*=C,x*=C,M=_*(_+d*x+2*h)+x*(d*_+x+2*p)+m}else x=u,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;else x=-u,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;else x<=-T?(_=Math.max(0,-(-d*u+h)),x=_>0?-u:Math.min(Math.max(-u,-p),u),M=-_*_+x*(x+2*p)+m):x<=T?(_=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(_=Math.max(0,-(d*u+h)),x=_>0?u:Math.min(Math.max(-u,-p),u),M=-_*_+x*(x+2*p)+m);else x=d>0?-u:u,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Jf).addScaledVector(ic,x),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,r,l,u){$f.subVectors(i,e),ac.subVectors(r,e),ed.crossVectors($f,ac);let d=this.direction.dot(ed),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Na.subVectors(this.origin,e);const p=h*this.direction.dot(ac.crossVectors(Na,ac));if(p<0)return null;const m=h*this.direction.dot($f.cross(Na));if(m<0||p+m>d)return null;const g=-h*Na.dot(ed);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,i,r,l,u,d,h,p,m,g,_,x,M,T,C,S){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,g,_,x,M,T,C,S)}set(e,i,r,l,u,d,h,p,m,g,_,x,M,T,C,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=T,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/rs.setFromMatrixColumn(e,0).length(),u=1/rs.setFromMatrixColumn(e,1).length(),d=1/rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=d*g,M=d*_,T=h*g,C=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=M+T*m,i[5]=x-C*m,i[9]=-h*p,i[2]=C-x*m,i[6]=T+M*m,i[10]=d*p}else if(e.order==="YXZ"){const x=p*g,M=p*_,T=m*g,C=m*_;i[0]=x+C*h,i[4]=T*h-M,i[8]=d*m,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=M*h-T,i[6]=C+x*h,i[10]=d*p}else if(e.order==="ZXY"){const x=p*g,M=p*_,T=m*g,C=m*_;i[0]=x-C*h,i[4]=-d*_,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*g,i[9]=C-x*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const x=d*g,M=d*_,T=h*g,C=h*_;i[0]=p*g,i[4]=T*m-M,i[8]=x*m+C,i[1]=p*_,i[5]=C*m+x,i[9]=M*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const x=d*p,M=d*m,T=h*p,C=h*m;i[0]=p*g,i[4]=C-x*_,i[8]=T*_+M,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*_+T,i[10]=x-C*_}else if(e.order==="XZY"){const x=d*p,M=d*m,T=h*p,C=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=x*_+C,i[5]=d*g,i[9]=M*_-T,i[2]=T*_-M,i[6]=h*g,i[10]=C*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pS,e,mS)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),La.crossVectors(r,Kn),La.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),La.crossVectors(r,Kn)),La.normalize(),rc.crossVectors(Kn,La),l[0]=La.x,l[4]=rc.x,l[8]=Kn.x,l[1]=La.y,l[5]=rc.y,l[9]=Kn.y,l[2]=La.z,l[6]=rc.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],_=r[5],x=r[9],M=r[13],T=r[2],C=r[6],S=r[10],v=r[14],z=r[3],O=r[7],U=r[11],G=r[15],F=l[0],B=l[4],X=l[8],D=l[12],w=l[1],V=l[5],le=l[9],oe=l[13],_e=l[2],he=l[6],I=l[10],K=l[14],Y=l[3],be=l[7],N=l[11],ee=l[15];return u[0]=d*F+h*w+p*_e+m*Y,u[4]=d*B+h*V+p*he+m*be,u[8]=d*X+h*le+p*I+m*N,u[12]=d*D+h*oe+p*K+m*ee,u[1]=g*F+_*w+x*_e+M*Y,u[5]=g*B+_*V+x*he+M*be,u[9]=g*X+_*le+x*I+M*N,u[13]=g*D+_*oe+x*K+M*ee,u[2]=T*F+C*w+S*_e+v*Y,u[6]=T*B+C*V+S*he+v*be,u[10]=T*X+C*le+S*I+v*N,u[14]=T*D+C*oe+S*K+v*ee,u[3]=z*F+O*w+U*_e+G*Y,u[7]=z*B+O*V+U*he+G*be,u[11]=z*X+O*le+U*I+G*N,u[15]=z*D+O*oe+U*K+G*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],g=e[2],_=e[6],x=e[10],M=e[14],T=e[3],C=e[7],S=e[11],v=e[15];return T*(+u*p*_-l*m*_-u*h*x+r*m*x+l*h*M-r*p*M)+C*(+i*p*M-i*m*x+u*d*x-l*d*M+l*m*g-u*p*g)+S*(+i*m*_-i*h*M-u*d*_+r*d*M+u*h*g-r*m*g)+v*(-l*h*g-i*p*_+i*h*x+l*d*_-r*d*x+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],_=e[9],x=e[10],M=e[11],T=e[12],C=e[13],S=e[14],v=e[15],z=_*S*m-C*x*m+C*p*M-h*S*M-_*p*v+h*x*v,O=T*x*m-g*S*m-T*p*M+d*S*M+g*p*v-d*x*v,U=g*C*m-T*_*m+T*h*M-d*C*M-g*h*v+d*_*v,G=T*_*p-g*C*p-T*h*x+d*C*x+g*h*S-d*_*S,F=i*z+r*O+l*U+u*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return e[0]=z*B,e[1]=(C*x*u-_*S*u-C*l*M+r*S*M+_*l*v-r*x*v)*B,e[2]=(h*S*u-C*p*u+C*l*m-r*S*m-h*l*v+r*p*v)*B,e[3]=(_*p*u-h*x*u-_*l*m+r*x*m+h*l*M-r*p*M)*B,e[4]=O*B,e[5]=(g*S*u-T*x*u+T*l*M-i*S*M-g*l*v+i*x*v)*B,e[6]=(T*p*u-d*S*u-T*l*m+i*S*m+d*l*v-i*p*v)*B,e[7]=(d*x*u-g*p*u+g*l*m-i*x*m-d*l*M+i*p*M)*B,e[8]=U*B,e[9]=(T*_*u-g*C*u-T*r*M+i*C*M+g*r*v-i*_*v)*B,e[10]=(d*C*u-T*h*u+T*r*m-i*C*m-d*r*v+i*h*v)*B,e[11]=(g*h*u-d*_*u-g*r*m+i*_*m+d*r*M-i*h*M)*B,e[12]=G*B,e[13]=(g*C*l-T*_*l+T*r*x-i*C*x-g*r*S+i*_*S)*B,e[14]=(T*h*l-d*C*l-T*r*p+i*C*p+d*r*S-i*h*S)*B,e[15]=(d*_*l-g*h*l+g*r*p-i*_*p-d*r*x+i*h*x)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,_=h+h,x=u*m,M=u*g,T=u*_,C=d*g,S=d*_,v=h*_,z=p*m,O=p*g,U=p*_,G=r.x,F=r.y,B=r.z;return l[0]=(1-(C+v))*G,l[1]=(M+U)*G,l[2]=(T-O)*G,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(x+v))*F,l[6]=(S+z)*F,l[7]=0,l[8]=(T+O)*B,l[9]=(S-z)*B,l[10]=(1-(x+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const d=rs.set(l[4],l[5],l[6]).length(),h=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const m=1/u,g=1/d,_=1/h;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,i.setFromRotationMatrix(di),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=na){const p=this.elements,m=2*u/(i-e),g=2*u/(r-l),_=(i+e)/(i-e),x=(r+l)/(r-l);let M,T;if(h===na)M=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(h===Dc)M=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=na){const p=this.elements,m=1/(i-e),g=1/(r-l),_=1/(d-u),x=(i+e)*m,M=(r+l)*g;let T,C;if(h===na)T=(d+u)*_,C=-2*_;else if(h===Dc)T=u*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const rs=new se,di=new Qt,pS=new se(0,0,0),mS=new se(1,1,1),La=new se,rc=new se,Kn=new se,y0=new Qt,S0=new Fo;class Ci{constructor(e=0,i=0,r=0,l=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";let Cv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gS=0;const M0=new se,ss=new Fo,Qi=new Qt,sc=new se,Co=new se,vS=new se,_S=new Fo,b0=new se(1,0,0),E0=new se(0,1,0),T0=new se(0,0,1),A0={type:"added"},xS={type:"removed"},os={type:"childadded",child:null},td={type:"childremoved",child:null};class Un extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new se,i=new Ci,r=new Fo,l=new se(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qt},normalMatrix:{value:new st}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,i){return ss.setFromAxisAngle(e,i),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(b0,e)}rotateY(e){return this.rotateOnAxis(E0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,i){return M0.copy(e).applyQuaternion(this.quaternion),this.position.add(M0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(b0,e)}translateY(e){return this.translateOnAxis(E0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?sc.copy(e):sc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Co,sc,this.up):Qi.lookAt(sc,Co,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Qi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A0),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xS),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A0),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,vS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,_S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),_=d(e.shapes),x=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new se(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new se,Ji=new se,nd=new se,$i=new se,ls=new se,cs=new se,R0=new se,id=new se,ad=new se,rd=new se,sd=new Kt,od=new Kt,ld=new Kt;class pi{constructor(e=new se,i=new se,r=new se){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),Ji.subVectors(r,i),nd.subVectors(e,i);const d=hi.dot(hi),h=hi.dot(Ji),p=hi.dot(nd),m=Ji.dot(Ji),g=Ji.dot(nd),_=d*m-h*h;if(_===0)return u.set(0,0,0),null;const x=1/_,M=(m*p-h*g)*x,T=(d*g-h*p)*x;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,$i.x),p.addScaledVector(d,$i.y),p.addScaledVector(h,$i.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return sd.setScalar(0),od.setScalar(0),ld.setScalar(0),sd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,r),ld.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(sd,u.x),d.addScaledVector(od,u.y),d.addScaledVector(ld,u.z),d}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Ji.subVectors(e,i),hi.cross(Ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),hi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ls.subVectors(l,r),cs.subVectors(u,r),id.subVectors(e,r);const p=ls.dot(id),m=cs.dot(id);if(p<=0&&m<=0)return i.copy(r);ad.subVectors(e,l);const g=ls.dot(ad),_=cs.dot(ad);if(g>=0&&_<=g)return i.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(ls,d);rd.subVectors(e,u);const M=ls.dot(rd),T=cs.dot(rd);if(T>=0&&M<=T)return i.copy(u);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(r).addScaledVector(cs,h);const S=g*T-M*_;if(S<=0&&_-g>=0&&M-T>=0)return R0.subVectors(u,l),h=(_-g)/(_-g+(M-T)),i.copy(l).addScaledVector(R0,h);const v=1/(S+C+x);return d=C*v,h=x*v,i.copy(r).addScaledVector(ls,d).addScaledVector(cs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},oc={h:0,s:0,l:0};function cd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class wt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=tS(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=cd(d,u,e+1/3),this.g=cd(d,u,e),this.b=cd(d,u,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const r=Dv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Tt.workingToColorSpace(Dn.copy(this),e),Math.round(xt(Dn.r*255,0,255))*65536+Math.round(xt(Dn.g*255,0,255))*256+Math.round(xt(Dn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=g<=.5?_/(d+h):_/(2-d-h),d){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=si){Tt.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(oc);const r=Xf(Oa.h,oc.h,i),l=Xf(Oa.s,oc.s,i),u=Xf(Oa.l,oc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new wt;wt.NAMES=Dv;let yS=0;class Go extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=gs,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ed,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ed&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uv extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new se,lc=new Dt;let SS=0;class vi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p0,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p0&&(e.usage=this.usage),e}}class Nv extends vi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Lv extends vi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class yr extends vi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let MS=0;const ri=new Qt,ud=new Un,us=new se,Qn=new Ho,Do=new Ho,_n=new se;class Va extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rv(e)?Lv:Nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new yr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Qn.min,Do.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Do.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Do.min),Qn.expandByPoint(Do.max))}Qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)_n.fromBufferAttribute(h,m),p&&(us.fromBufferAttribute(e,m),_n.add(us)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<r.count;X++)h[X]=new se,p[X]=new se;const m=new se,g=new se,_=new se,x=new Dt,M=new Dt,T=new Dt,C=new se,S=new se;function v(X,D,w){m.fromBufferAttribute(r,X),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,w),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,w),g.sub(m),_.sub(m),M.sub(x),T.sub(x);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(V),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(V),h[X].add(C),h[D].add(C),h[w].add(C),p[X].add(S),p[D].add(S),p[w].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let X=0,D=z.length;X<D;++X){const w=z[X],V=w.start,le=w.count;for(let oe=V,_e=V+le;oe<_e;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const O=new se,U=new se,G=new se,F=new se;function B(X){G.fromBufferAttribute(l,X),F.copy(G);const D=h[X];O.copy(D),O.sub(G.multiplyScalar(G.dot(D))).normalize(),U.crossVectors(F,D);const V=U.dot(p[X])<0?-1:1;d.setXYZW(X,O.x,O.y,O.z,V)}for(let X=0,D=z.length;X<D;++X){const w=z[X],V=w.start,le=w.count;for(let oe=V,_e=V+le;oe<_e;oe+=3)B(e.getX(oe+0)),B(e.getX(oe+1)),B(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new se,u=new se,d=new se,h=new se,p=new se,m=new se,g=new se,_=new se;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),g.subVectors(d,u),_.subVectors(l,u),g.cross(_),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),h.add(g),p.add(g),m.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),_.subVectors(l,u),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let M=0,T=0;for(let C=0,S=p.length;C<S;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*g;for(let v=0;v<g;v++)x[T++]=m[M++]}return new vi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Va,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=e(x,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=e.morphAttributes;for(const m in u){const g=[],_=u[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w0=new Qt,ur=new hS,cc=new yh,C0=new se,uc=new se,fc=new se,dc=new se,fd=new se,hc=new se,D0=new se,pc=new se;class Ri extends Un{constructor(e=new Va,i=new Uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){hc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],_=u[p];g!==0&&(fd.fromBufferAttribute(_,e),d?hc.addScaledVector(fd,g):hc.addScaledVector(fd.sub(i),g))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(u),ur.copy(e.ray).recast(e.near),!(cc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(cc,C0)===null||ur.origin.distanceToSquared(C0)>(e.far-e.near)**2))&&(w0.copy(u).invert(),ur.copy(e.ray).applyMatrix4(w0),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ur)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=d[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,G=O;U<G;U+=3){const F=h.getX(U),B=h.getX(U+1),X=h.getX(U+2);l=mc(this,v,e,r,m,g,_,F,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=T,v=C;S<v;S+=3){const z=h.getX(S),O=h.getX(S+1),U=h.getX(S+2);l=mc(this,d,e,r,m,g,_,z,O,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=d[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,G=O;U<G;U+=3){const F=U,B=U+1,X=U+2;l=mc(this,v,e,r,m,g,_,F,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,v=C;S<v;S+=3){const z=S,O=S+1,U=S+2;l=mc(this,d,e,r,m,g,_,z,O,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function bS(s,e,i,r,l,u,d,h){let p;if(e.side===Hn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Ha,h),p===null)return null;pc.copy(h),pc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(pc);return m<i.near||m>i.far?null:{distance:m,point:pc.clone(),object:s}}function mc(s,e,i,r,l,u,d,h,p,m){s.getVertexPosition(h,uc),s.getVertexPosition(p,fc),s.getVertexPosition(m,dc);const g=bS(s,e,i,r,uc,fc,dc,D0);if(g){const _=new se;pi.getBarycoord(D0,uc,fc,dc,_),l&&(g.uv=pi.getInterpolatedAttribute(l,h,p,m,_,new Dt)),u&&(g.uv1=pi.getInterpolatedAttribute(u,h,p,m,_,new Dt)),d&&(g.normal=pi.getInterpolatedAttribute(d,h,p,m,_,new se),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new se,materialIndex:0};pi.getNormal(uc,fc,dc,x.normal),g.face=x,g.barycoord=_}return g}class Vo extends Va{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,e,d,u,0),T("z","y","x",1,-1,r,i,-e,d,u,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new yr(m,3)),this.setAttribute("normal",new yr(g,3)),this.setAttribute("uv",new yr(_,2));function T(C,S,v,z,O,U,G,F,B,X,D){const w=U/B,V=G/X,le=U/2,oe=G/2,_e=F/2,he=B+1,I=X+1;let K=0,Y=0;const be=new se;for(let N=0;N<I;N++){const ee=N*V-oe;for(let xe=0;xe<he;xe++){const Se=xe*w-le;be[C]=Se*z,be[S]=ee*O,be[v]=_e,m.push(be.x,be.y,be.z),be[C]=0,be[S]=0,be[v]=F>0?1:-1,g.push(be.x,be.y,be.z),_.push(xe/B),_.push(1-N/X),K+=1}}for(let N=0;N<X;N++)for(let ee=0;ee<B;ee++){const xe=x+ee+he*N,Se=x+ee+he*(N+1),J=x+(ee+1)+he*(N+1),me=x+(ee+1)+he*N;p.push(xe,Se,me),p.push(Se,J,me),Y+=6}h.addGroup(M,Y,D),M+=Y,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(s){const e={};for(let i=0;i<s.length;i++){const r=bs(s[i]);for(const l in r)e[l]=r[l]}return e}function ES(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Ov(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const TS={clone:bs,merge:Ln};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=ES(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Pv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=na}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new se,U0=new Dt,N0=new Dt;class oi extends Pv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,U0,N0),i.subVectors(N0,U0)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,ds=1;class wS extends Un{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(fs,ds,e,i);l.layers=this.layers,this.add(l);const u=new oi(fs,ds,e,i);u.layers=this.layers,this.add(u);const d=new oi(fs,ds,e,i);d.layers=this.layers,this.add(d);const h=new oi(fs,ds,e,i);h.layers=this.layers,this.add(h);const p=new oi(fs,ds,e,i);p.layers=this.layers,this.add(p);const m=new oi(fs,ds,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Iv extends Gn{constructor(e=[],i=ys,r,l,u,d,h,p,m,g){super(e,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CS extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),u=new Ga({name:"CubemapFromEquirect",uniforms:bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ba});u.uniforms.tEquirect.value=i;const d=new Ri(l,u),h=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ai),new wS(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class gc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),v=this._getHandJoint(m,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class US extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hd=new se,NS=new se,LS=new st;class pr{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=hd.subVectors(r,i).cross(NS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||LS.getNormalMatrix(e),l=this.coplanarPoint(hd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new yh,vc=new se;class Sh{constructor(e=new pr,i=new pr,r=new pr,l=new pr,u=new pr,d=new pr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=na){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],M=l[8],T=l[9],C=l[10],S=l[11],v=l[12],z=l[13],O=l[14],U=l[15];if(r[0].setComponents(p-u,x-m,S-M,U-v).normalize(),r[1].setComponents(p+u,x+m,S+M,U+v).normalize(),r[2].setComponents(p+d,x+g,S+T,U+z).normalize(),r[3].setComponents(p-d,x-g,S-T,U-z).normalize(),r[4].setComponents(p-h,x-_,S-C,U-O).normalize(),i===na)r[5].setComponents(p+h,x+_,S+C,U+O).normalize();else if(i===Dc)r[5].setComponents(h,_,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(vc.x=l.normal.x>0?e.max.x:e.min.x,vc.y=l.normal.y>0?e.max.y:e.min.y,vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zv extends Gn{constructor(e,i,r=Sr,l,u,d,h=gi,p=gi,m,g=Po,_=1){if(g!==Po&&g!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lc extends Va{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,_=e/h,x=i/p,M=[],T=[],C=[],S=[];for(let v=0;v<g;v++){const z=v*x-d;for(let O=0;O<m;O++){const U=O*_-u;T.push(U,-z,0),C.push(0,0,1),S.push(O/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let z=0;z<h;z++){const O=z+m*v,U=z+m*(v+1),G=z+1+m*(v+1),F=z+1+m*v;M.push(O,U,F),M.push(U,G,F)}this.setIndex(M),this.setAttribute("position",new yr(T,3)),this.setAttribute("normal",new yr(C,3)),this.setAttribute("uv",new yr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class OS extends Go{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tv,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PS extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IS extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bv extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const pd=new Qt,L0=new se,O0=new se;class zS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;L0.setFromMatrixPosition(e.matrixWorld),i.position.copy(L0),O0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(O0),i.updateMatrixWorld(),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fv extends Pv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BS extends zS{constructor(){super(new Fv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FS extends Bv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new BS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HS extends Bv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class GS extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function P0(s,e,i,r){const l=VS(r);switch(i){case yv:return s*e;case Mv:return s*e/l.components*l.byteLength;case gh:return s*e/l.components*l.byteLength;case bv:return s*e*2/l.components*l.byteLength;case vh:return s*e*2/l.components*l.byteLength;case Sv:return s*e*3/l.components*l.byteLength;case mi:return s*e*4/l.components*l.byteLength;case _h:return s*e*4/l.components*l.byteLength;case Sc:case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:case Fd:return Math.max(s,16)*Math.max(e,8)/4;case Id:case Bd:return Math.max(s,8)*Math.max(e,8)/2;case Hd:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tc:case ih:case ah:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ev:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sh:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VS(s){switch(s){case wi:case vv:return{byteLength:1,components:1};case Lo:case _v:case zo:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case Sr:case hh:case ta:return{byteLength:4,components:1};case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function kS(s){const e=new WeakMap;function i(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],C=_[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const C=_[M];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var jS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ib=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:jS,alphahash_pars_fragment:XS,alphamap_fragment:WS,alphamap_pars_fragment:qS,alphatest_fragment:YS,alphatest_pars_fragment:ZS,aomap_fragment:KS,aomap_pars_fragment:QS,batching_pars_vertex:JS,batching_vertex:$S,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:aM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:lM,color_fragment:cM,color_pars_fragment:uM,color_pars_vertex:fM,color_vertex:dM,common:hM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:vM,emissivemap_fragment:_M,emissivemap_pars_fragment:xM,colorspace_fragment:yM,colorspace_pars_fragment:SM,envmap_fragment:MM,envmap_common_pars_fragment:bM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:IM,envmap_vertex:AM,fog_vertex:RM,fog_pars_vertex:wM,fog_fragment:CM,fog_pars_fragment:DM,gradientmap_pars_fragment:UM,lightmap_pars_fragment:NM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:OM,lights_pars_begin:PM,lights_toon_fragment:zM,lights_toon_pars_fragment:BM,lights_phong_fragment:FM,lights_phong_pars_fragment:HM,lights_physical_fragment:GM,lights_physical_pars_fragment:VM,lights_fragment_begin:kM,lights_fragment_maps:jM,lights_fragment_end:XM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:ZM,map_fragment:KM,map_pars_fragment:QM,map_particle_fragment:JM,map_particle_pars_fragment:$M,metalnessmap_fragment:eb,metalnessmap_pars_fragment:tb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:vb,packing:_b,premultiplied_alpha_fragment:xb,project_vertex:yb,dithering_fragment:Sb,dithering_pars_fragment:Mb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:wb,skinbase_vertex:Cb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Nb,specularmap_fragment:Lb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:Ib,transmission_fragment:zb,transmission_pars_fragment:Bb,uv_pars_fragment:Fb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:jb,backgroundCube_vert:Xb,backgroundCube_frag:Wb,cube_vert:qb,cube_frag:Yb,depth_vert:Zb,depth_frag:Kb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:$b,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:aE,meshlambert_vert:rE,meshlambert_frag:sE,meshmatcap_vert:oE,meshmatcap_frag:lE,meshnormal_vert:cE,meshnormal_frag:uE,meshphong_vert:fE,meshphong_frag:dE,meshphysical_vert:hE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:vE,points_frag:_E,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},Le={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ei={basic:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new wt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Ln([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Ln([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new wt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Ln([Le.points,Le.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Ln([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Ln([Le.common,Le.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Ln([Le.sprite,Le.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Ln([Le.common,Le.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Ln([Le.lights,Le.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ei.physical={uniforms:Ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const _c={r:0,b:0,g:0},dr=new Ci,bE=new Qt;function EE(s,e,i,r,l,u,d){const h=new wt(0);let p=u===!0?0:1,m,g,_=null,x=0,M=null;function T(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function C(O){let U=!1;const G=T(O);G===null?v(h,p):G&&G.isColor&&(v(G,1),U=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(O,U){const G=T(U);G&&(G.isCubeTexture||G.mapping===Nc)?(g===void 0&&(g=new Ri(new Vo(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:bs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),dr.copy(U.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(bE.makeRotationFromEuler(dr)),g.material.toneMapped=Tt.getTransfer(G.colorSpace)!==Bt,(_!==G||x!==G.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=G,x=G.version,M=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Ri(new Lc(2,2),new Ga({name:"BackgroundMaterial",uniforms:bs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(G.colorSpace)!==Bt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||x!==G.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=G,x=G.version,M=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function v(O,U){O.getRGB(_c,Ov(s)),r.buffers.color.setClear(_c.r,_c.g,_c.b,U,d)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,U=1){h.set(O),p=U,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,v(h,p)},render:C,addToRenderList:S,dispose:z}}function TE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(w,V,le,oe,_e){let he=!1;const I=_(oe,le,V);u!==I&&(u=I,m(u.object)),he=M(w,oe,le,_e),he&&T(w,oe,le,_e),_e!==null&&e.update(_e,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,U(w,V,le,oe),_e!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function _(w,V,le){const oe=le.wireframe===!0;let _e=r[w.id];_e===void 0&&(_e={},r[w.id]=_e);let he=_e[V.id];he===void 0&&(he={},_e[V.id]=he);let I=he[oe];return I===void 0&&(I=x(p()),he[oe]=I),I}function x(w){const V=[],le=[],oe=[];for(let _e=0;_e<i;_e++)V[_e]=0,le[_e]=0,oe[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:le,attributeDivisors:oe,object:w,attributes:{},index:null}}function M(w,V,le,oe){const _e=u.attributes,he=V.attributes;let I=0;const K=le.getAttributes();for(const Y in K)if(K[Y].location>=0){const N=_e[Y];let ee=he[Y];if(ee===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;I++}return u.attributesNum!==I||u.index!==oe}function T(w,V,le,oe){const _e={},he=V.attributes;let I=0;const K=le.getAttributes();for(const Y in K)if(K[Y].location>=0){let N=he[Y];N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),_e[Y]=ee,I++}u.attributes=_e,u.attributesNum=I,u.index=oe}function C(){const w=u.newAttributes;for(let V=0,le=w.length;V<le;V++)w[V]=0}function S(w){v(w,0)}function v(w,V){const le=u.newAttributes,oe=u.enabledAttributes,_e=u.attributeDivisors;le[w]=1,oe[w]===0&&(s.enableVertexAttribArray(w),oe[w]=1),_e[w]!==V&&(s.vertexAttribDivisor(w,V),_e[w]=V)}function z(){const w=u.newAttributes,V=u.enabledAttributes;for(let le=0,oe=V.length;le<oe;le++)V[le]!==w[le]&&(s.disableVertexAttribArray(le),V[le]=0)}function O(w,V,le,oe,_e,he,I){I===!0?s.vertexAttribIPointer(w,V,le,_e,he):s.vertexAttribPointer(w,V,le,oe,_e,he)}function U(w,V,le,oe){C();const _e=oe.attributes,he=le.getAttributes(),I=V.defaultAttributeValues;for(const K in he){const Y=he[K];if(Y.location>=0){let be=_e[K];if(be===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(be=w.instanceColor)),be!==void 0){const N=be.normalized,ee=be.itemSize,xe=e.get(be);if(xe===void 0)continue;const Se=xe.buffer,J=xe.type,me=xe.bytesPerElement,Me=J===s.INT||J===s.UNSIGNED_INT||be.gpuType===hh;if(be.isInterleavedBufferAttribute){const Re=be.data,Ce=Re.stride,ot=be.offset;if(Re.isInstancedInterleavedBuffer){for(let Qe=0;Qe<Y.locationSize;Qe++)v(Y.location+Qe,Re.meshPerAttribute);w.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Qe=0;Qe<Y.locationSize;Qe++)S(Y.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let Qe=0;Qe<Y.locationSize;Qe++)O(Y.location+Qe,ee/Y.locationSize,J,N,Ce*me,(ot+ee/Y.locationSize*Qe)*me,Me)}else{if(be.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)v(Y.location+Re,be.meshPerAttribute);w.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Re=0;Re<Y.locationSize;Re++)S(Y.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let Re=0;Re<Y.locationSize;Re++)O(Y.location+Re,ee/Y.locationSize,J,N,ee*me,ee/Y.locationSize*Re*me,Me)}}else if(I!==void 0){const N=I[K];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}z()}function G(){X();for(const w in r){const V=r[w];for(const le in V){const oe=V[le];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete V[le]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const le in V){const oe=V[le];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete V[le]}delete r[w.id]}function B(w){for(const V in r){const le=r[V];if(le[w.id]===void 0)continue;const oe=le[w.id];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete le[w.id]}}function X(){D(),d=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:S,disableUnusedAttributes:z}}function AE(s,e,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function d(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function h(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];i.update(M,r,1)}function p(m,g,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let T=0;for(let C=0;C<_;C++)T+=g[C]*x[C];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function RE(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==mi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==wi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ta&&!X)}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:G,maxSamples:F}}function wE(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new pr,h=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!l||T===null||T.length===0||u&&!S)u?g(null):m();else{const z=u?0:r,O=z*4;let U=v.clippingState||null;p.value=U,U=g(T,x,O,M);for(let G=0;G!==O;++G)U[G]=i[G];v.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,M,T){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const v=M+C*4,z=x.matrixWorldInverse;h.getNormalMatrix(z),(S===null||S.length<v)&&(S=new Float32Array(v));for(let O=0,U=M;O!==C;++O,U+=4)d.copy(_[O]).applyMatrix4(z,h),d.normal.toArray(S,U),S[U+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function CE(s){let e=new WeakMap;function i(d,h){return h===Nd?d.mapping=ys:h===Ld&&(d.mapping=Ss),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nd||h===Ld)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new CS(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ms=4,I0=[.125,.215,.35,.446,.526,.582],vr=20,md=new Fv,z0=new wt;let gd=null,vd=0,_d=0,xd=!1;const mr=(1+Math.sqrt(5))/2,hs=1/mr,B0=[new se(-mr,hs,0),new se(mr,hs,0),new se(-hs,0,mr),new se(hs,0,mr),new se(0,mr,-hs),new se(0,mr,hs),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],DE=new se;class F0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=DE}=u;gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=xd,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:zo,format:mi,colorSpace:Ms,depthBuffer:!1},l=H0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H0(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(u)),this._blurMaterial=NE(u,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,md)}_sceneToCubeUV(e,i,r,l,u){const p=new oi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(z0),_.toneMapping=Fa,_.autoClear=!1;const T=new Uv({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),C=new Ri(new Vo,T);let S=!1;const v=e.background;v?v.isColor&&(T.color.copy(v),e.background=null,S=!0):(T.color.copy(z0),S=!0);for(let z=0;z<6;z++){const O=z%3;O===0?(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[z],u.y,u.z)):O===1?(p.up.set(0,0,m[z]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[z],u.z)):(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[z]));const U=this._cubeSize;xc(l,O*U,z>2?U:0,U,U),_.setRenderTarget(l),S&&_.render(C,p),_.render(e,p)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=M,_.autoClear=x,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ri(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;xc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,md)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=B0[(l-u-1)%B0.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ri(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vr-1),C=u/T,S=isFinite(u)?1+Math.floor(g*C):vr;S>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vr}`);const v=[];let z=0;for(let B=0;B<vr;++B){const X=B/C,D=Math.exp(-X*X/2);v.push(D),B===0?z+=D:B<S&&(z+=2*D)}for(let B=0;B<v.length;B++)v[B]=v[B]/z;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=T,x.mipInt.value=O-r;const U=this._sizeLods[l],G=3*U*(l>O-ms?l-O+ms:0),F=4*(this._cubeSize-U);xc(i,G,F,3*U,2*U),p.setRenderTarget(i),p.render(_,md)}}function UE(s){const e=[],i=[],r=[];let l=s;const u=s-ms+1+I0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>s-ms?p=I0[d-s+ms-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,C=3,S=2,v=1,z=new Float32Array(C*T*M),O=new Float32Array(S*T*M),U=new Float32Array(v*T*M);for(let F=0;F<M;F++){const B=F%3*2/3-1,X=F>2?0:-1,D=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];z.set(D,C*T*F),O.set(x,S*T*F);const w=[F,F,F,F,F,F];U.set(w,v*T*F)}const G=new Va;G.setAttribute("position",new vi(z,C)),G.setAttribute("uv",new vi(O,S)),G.setAttribute("faceIndex",new vi(U,v)),e.push(G),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function H0(s,e,i){const r=new Mr(s,e,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function NE(s,e,i){const r=new Float32Array(vr),l=new se(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function G0(){return new Ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function V0(){return new Ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LE(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Nd||p===Ld,g=p===ys||p===Ss;if(m||g){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new F0(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new F0(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function OE(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&vs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function PE(s,e,i,r){const l={},u=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,T=_.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let O=0,U=z.length;O<U;O+=3){const G=z[O+0],F=z[O+1],B=z[O+2];x.push(G,F,F,B,B,G)}}else if(T!==void 0){const z=T.array;C=T.version;for(let O=0,U=z.length/3-1;O<U;O+=3){const G=O+0,F=O+1,B=O+2;x.push(G,F,F,B,B,G)}}else return;const S=new(Rv(x)?Lv:Nv)(x,1);S.version=C;const v=u.get(_);v&&e.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function IE(s,e,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*d),i.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,x*d,T),i.update(M,r,T))}function g(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let S=0;for(let v=0;v<T;v++)S+=M[v];i.update(S,r,1)}function _(x,M,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/d,M[v],C[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,C,0,T);let v=0;for(let z=0;z<T;z++)v+=M[z]*C[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zE(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function BE(s,e,i){const r=new WeakMap,l=new Kt;function u(d,h,p){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let w=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let U=0;T===!0&&(U=1),C===!0&&(U=2),S===!0&&(U=3);let G=h.attributes.position.count*U,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*F*4*_),X=new wv(B,G,F,_);X.type=ta,X.needsUpdate=!0;const D=U*4;for(let V=0;V<_;V++){const le=v[V],oe=z[V],_e=O[V],he=G*F*4*V;for(let I=0;I<le.count;I++){const K=I*D;T===!0&&(l.fromBufferAttribute(le,I),B[he+K+0]=l.x,B[he+K+1]=l.y,B[he+K+2]=l.z,B[he+K+3]=0),C===!0&&(l.fromBufferAttribute(oe,I),B[he+K+4]=l.x,B[he+K+5]=l.y,B[he+K+6]=l.z,B[he+K+7]=0),S===!0&&(l.fromBufferAttribute(_e,I),B[he+K+8]=l.x,B[he+K+9]=l.y,B[he+K+10]=l.z,B[he+K+11]=_e.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new Dt(G,F)},r.set(h,x),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function FE(s,e,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,_=e.get(p,g);if(l.get(_)!==m&&(e.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const Gv=new Gn,k0=new zv(1,1),Vv=new wv,kv=new fS,jv=new Iv,j0=[],X0=[],W0=new Float32Array(16),q0=new Float32Array(9),Y0=new Float32Array(4);function As(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=j0[l];if(u===void 0&&(u=new Float32Array(l),j0[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(u,h)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function dn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Oc(s,e){let i=X0[e];i===void 0&&(i=new Int32Array(e),X0[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function HE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function GE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),dn(i,e)}}function VE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),dn(i,e)}}function kE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),dn(i,e)}}function jE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;Y0.set(r),s.uniformMatrix2fv(this.addr,!1,Y0),dn(i,r)}}function XE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;q0.set(r),s.uniformMatrix3fv(this.addr,!1,q0),dn(i,r)}}function WE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;W0.set(r),s.uniformMatrix4fv(this.addr,!1,W0),dn(i,r)}}function qE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function YE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),dn(i,e)}}function ZE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),dn(i,e)}}function KE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),dn(i,e)}}function QE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function JE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),dn(i,e)}}function $E(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),dn(i,e)}}function e1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),dn(i,e)}}function t1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(k0.compareFunction=Av,u=k0):u=Gv,i.setTexture2D(e||u,l)}function n1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||kv,l)}function i1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||jv,l)}function a1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Vv,l)}function r1(s){switch(s){case 5126:return HE;case 35664:return GE;case 35665:return VE;case 35666:return kE;case 35674:return jE;case 35675:return XE;case 35676:return WE;case 5124:case 35670:return qE;case 35667:case 35671:return YE;case 35668:case 35672:return ZE;case 35669:case 35673:return KE;case 5125:return QE;case 36294:return JE;case 36295:return $E;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}function s1(s,e){s.uniform1fv(this.addr,e)}function o1(s,e){const i=As(e,this.size,2);s.uniform2fv(this.addr,i)}function l1(s,e){const i=As(e,this.size,3);s.uniform3fv(this.addr,i)}function c1(s,e){const i=As(e,this.size,4);s.uniform4fv(this.addr,i)}function u1(s,e){const i=As(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function f1(s,e){const i=As(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function d1(s,e){const i=As(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function h1(s,e){s.uniform1iv(this.addr,e)}function p1(s,e){s.uniform2iv(this.addr,e)}function m1(s,e){s.uniform3iv(this.addr,e)}function g1(s,e){s.uniform4iv(this.addr,e)}function v1(s,e){s.uniform1uiv(this.addr,e)}function _1(s,e){s.uniform2uiv(this.addr,e)}function x1(s,e){s.uniform3uiv(this.addr,e)}function y1(s,e){s.uniform4uiv(this.addr,e)}function S1(s,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Gv,u[d])}function M1(s,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||kv,u[d])}function b1(s,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||jv,u[d])}function E1(s,e,i){const r=this.cache,l=e.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Vv,u[d])}function T1(s){switch(s){case 5126:return s1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return f1;case 35676:return d1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return _1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return E1}}class A1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=r1(i.type)}}class R1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T1(i.type)}}class w1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function Z0(s,e){s.seq.push(e),s.map[e.id]=e}function C1(s,e,i){const r=s.name,l=r.length;for(yd.lastIndex=0;;){const u=yd.exec(r),d=yd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){Z0(i,m===void 0?new A1(h,s,e):new R1(h,s,e));break}else{let _=i.map[h];_===void 0&&(_=new w1(h),Z0(i,_)),i=_}}}class Ac{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);C1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function K0(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const D1=37297;let U1=0;function N1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Q0=new st;function L1(s){Tt._getMatrix(Q0,Tt.workingColorSpace,s);const e=`mat3( ${Q0.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function J0(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+N1(s.getShaderSource(e),d)}else return l}function O1(s,e){const i=L1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function P1(s,e){let i;switch(e){case zy:i="Linear";break;case By:i="Reinhard";break;case Fy:i="Cineon";break;case Hy:i="ACESFilmic";break;case Vy:i="AgX";break;case ky:i="Neutral";break;case Gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const yc=new se;function I1(){Tt.getLuminanceCoefficients(yc);const s=yc.x.toFixed(4),e=yc.y.toFixed(4),i=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function B1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function F1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function No(s){return s!==""}function $0(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ev(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(s){return s.replace(H1,V1)}const G1=new Map;function V1(s,e){let i=lt[e];if(i===void 0){const r=G1.get(e);if(r!==void 0)i=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ch(i)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(s){return s.replace(k1,j1)}function j1(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function nv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gy?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function W1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case Ss:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mv:e="ENVMAP_BLENDING_MULTIPLY";break;case Py:e="ENVMAP_BLENDING_MIX";break;case Iy:e="ENVMAP_BLENDING_ADD";break}return e}function Z1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function K1(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=X1(i),m=W1(i),g=q1(i),_=Y1(i),x=Z1(i),M=z1(i),T=B1(u),C=l.createProgram();let S,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),v.length>0&&(v+=`
`)):(S=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),v=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?lt.tonemapping_pars_fragment:"",i.toneMapping!==Fa?P1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,O1("linearToOutputTexel",i.outputColorSpace),I1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=ch(d),d=$0(d,i),d=ev(d,i),h=ch(h),h=$0(h,i),h=ev(h,i),d=tv(d),h=tv(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=z+S+d,U=z+v+h,G=K0(l,l.VERTEX_SHADER,O),F=K0(l,l.FRAGMENT_SHADER,U);l.attachShader(C,G),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(s.debug.checkShaderErrors){const le=l.getProgramInfoLog(C).trim(),oe=l.getShaderInfoLog(G).trim(),_e=l.getShaderInfoLog(F).trim();let he=!0,I=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,G,F);else{const K=J0(l,G,"vertex"),Y=J0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+K+`
`+Y)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(oe===""||_e==="")&&(I=!1);I&&(V.diagnostics={runnable:he,programLog:le,vertexShader:{log:oe,prefix:S},fragmentShader:{log:_e,prefix:v}})}l.deleteShader(G),l.deleteShader(F),X=new Ac(l,C),D=F1(l,C)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,D1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=F,this}let Q1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new $1(e),i.set(e,r)),r}}class $1{constructor(e){this.id=Q1++,this.code=e,this.usedTimes=0}}function eT(s,e,i,r,l,u,d){const h=new Cv,p=new J1,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return m.add(D),D===0?"uv":`uv${D}`}function S(D,w,V,le,oe){const _e=le.fog,he=oe.geometry,I=D.isMeshStandardMaterial?le.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),Y=K&&K.mapping===Nc?K.image.height:null,be=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const N=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ee=N!==void 0?N.length:0;let xe=0;he.morphAttributes.position!==void 0&&(xe=1),he.morphAttributes.normal!==void 0&&(xe=2),he.morphAttributes.color!==void 0&&(xe=3);let Se,J,me,Me;if(be){const bt=Ei[be];Se=bt.vertexShader,J=bt.fragmentShader}else Se=D.vertexShader,J=D.fragmentShader,p.update(D),me=p.getVertexShaderID(D),Me=p.getFragmentShaderID(D);const Re=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),ot=oe.isInstancedMesh===!0,Qe=oe.isBatchedMesh===!0,Ot=!!D.map,Ft=!!D.matcap,mt=!!K,H=!!D.aoMap,xn=!!D.lightMap,St=!!D.bumpMap,dt=!!D.normalMap,Ve=!!D.displacementMap,gt=!!D.emissiveMap,Ye=!!D.metalnessMap,at=!!D.roughnessMap,Jt=D.anisotropy>0,L=D.clearcoat>0,b=D.dispersion>0,te=D.iridescence>0,fe=D.sheen>0,pe=D.transmission>0,ce=Jt&&!!D.anisotropyMap,Pe=L&&!!D.clearcoatMap,Ue=L&&!!D.clearcoatNormalMap,Ge=L&&!!D.clearcoatRoughnessMap,ke=te&&!!D.iridescenceMap,ye=te&&!!D.iridescenceThicknessMap,Ie=fe&&!!D.sheenColorMap,We=fe&&!!D.sheenRoughnessMap,qe=!!D.specularMap,we=!!D.specularColorMap,it=!!D.specularIntensityMap,j=pe&&!!D.transmissionMap,Ne=pe&&!!D.thicknessMap,Ee=!!D.gradientMap,ze=!!D.alphaMap,Ae=D.alphaTest>0,ve=!!D.alphaHash,Fe=!!D.extensions;let nt=Fa;D.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Ut={shaderID:be,shaderType:D.type,shaderName:D.name,vertexShader:Se,fragmentShader:J,defines:D.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Qe,batchingColor:Qe&&oe._colorsTexture!==null,instancing:ot,instancingColor:ot&&oe.instanceColor!==null,instancingMorph:ot&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ms,alphaToCoverage:!!D.alphaToCoverage,map:Ot,matcap:Ft,envMap:mt,envMapMode:mt&&K.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:xn,bumpMap:St,normalMap:dt,displacementMap:x&&Ve,emissiveMap:gt,normalMapObjectSpace:dt&&D.normalMapType===qy,normalMapTangentSpace:dt&&D.normalMapType===Tv,metalnessMap:Ye,roughnessMap:at,anisotropy:Jt,anisotropyMap:ce,clearcoat:L,clearcoatMap:Pe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ge,dispersion:b,iridescence:te,iridescenceMap:ke,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:Ie,sheenRoughnessMap:We,specularMap:qe,specularColorMap:we,specularIntensityMap:it,transmission:pe,transmissionMap:j,thicknessMap:Ne,gradientMap:Ee,opaque:D.transparent===!1&&D.blending===gs&&D.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ae,alphaHash:ve,combine:D.combine,mapUv:Ot&&C(D.map.channel),aoMapUv:H&&C(D.aoMap.channel),lightMapUv:xn&&C(D.lightMap.channel),bumpMapUv:St&&C(D.bumpMap.channel),normalMapUv:dt&&C(D.normalMap.channel),displacementMapUv:Ve&&C(D.displacementMap.channel),emissiveMapUv:gt&&C(D.emissiveMap.channel),metalnessMapUv:Ye&&C(D.metalnessMap.channel),roughnessMapUv:at&&C(D.roughnessMap.channel),anisotropyMapUv:ce&&C(D.anisotropyMap.channel),clearcoatMapUv:Pe&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:We&&C(D.sheenRoughnessMap.channel),specularMapUv:qe&&C(D.specularMap.channel),specularColorMapUv:we&&C(D.specularColorMap.channel),specularIntensityMapUv:it&&C(D.specularIntensityMap.channel),transmissionMapUv:j&&C(D.transmissionMap.channel),thicknessMapUv:Ne&&C(D.thicknessMap.channel),alphaMapUv:ze&&C(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(dt||Jt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!he.attributes.uv&&(Ot||ze),fog:!!_e,useFog:D.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ce,skinning:oe.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ot&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===Bt,decodeVideoTextureEmissive:gt&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===Bt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ti,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Fe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&D.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ut.vertexUv1s=m.has(1),Ut.vertexUv2s=m.has(2),Ut.vertexUv3s=m.has(3),m.clear(),Ut}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(z(w,D),O(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function z(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function O(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const w=T[D.type];let V;if(w){const le=Ei[w];V=TS.clone(le.uniforms)}else V=D.uniforms;return V}function G(D,w){let V;for(let le=0,oe=g.length;le<oe;le++){const _e=g[le];if(_e.cacheKey===w){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new K1(s,w,D,u),g.push(V)),V}function F(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function B(D){p.remove(D)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:U,acquireProgram:G,releaseProgram:F,releaseShaderCache:B,programs:g,dispose:X}}function tT(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,p){s.get(d)[h]=p}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function nT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function iv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function av(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,x,M,T,C,S){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:C,group:S},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=C,v.group=S),e++,v}function h(_,x,M,T,C,S){const v=d(_,x,M,T,C,S);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(_,x,M,T,C,S){const v=d(_,x,M,T,C,S);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,x){i.length>1&&i.sort(_||nT),r.length>1&&r.sort(x||iv),l.length>1&&l.sort(x||iv)}function g(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function iT(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new av,s.set(r,[d])):l>=u.length?(d=new av,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function aT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new wt};break;case"SpotLight":i={position:new se,direction:new se,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=i,i}}}function rT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let sT=0;function oT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lT(s){const e=new aT,i=rT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new se);const l=new se,u=new Qt,d=new Qt;function h(m){let g=0,_=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,C=0,S=0,v=0,z=0,O=0,U=0,G=0,F=0,B=0;m.sort(oT);for(let D=0,w=m.length;D<w;D++){const V=m[D],le=V.color,oe=V.intensity,_e=V.distance,he=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=le.r*oe,_+=le.g*oe,x+=le.b*oe;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],oe);B++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=he,r.directionalShadowMatrix[M]=V.shadow.matrix,z++}r.directional[M]=I,M++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(le).multiplyScalar(oe),I.distance=_e,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[C]=I;const K=V.shadow;if(V.map&&(r.spotLightMap[G]=V.map,G++,K.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=K.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=he,U++}C++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(le).multiplyScalar(oe),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=I,S++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=V.shadow.matrix,O++}r.point[T]=I,T++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(oe),I.groundColor.copy(V.groundColor).multiplyScalar(oe),r.hemi[v]=I,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==C||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==z||X.numPointShadows!==O||X.numSpotShadows!==U||X.numSpotMaps!==G||X.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,X.directionalLength=M,X.pointLength=T,X.spotLength=C,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=z,X.numPointShadows=O,X.numSpotShadows=U,X.numSpotMaps=G,X.numLightProbes=B,r.version=sT++)}function p(m,g){let _=0,x=0,M=0,T=0,C=0;const S=g.matrixWorldInverse;for(let v=0,z=m.length;v<z;v++){const O=m[v];if(O.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(O.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const U=r.rectArea[T];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),d.identity(),u.copy(O.matrixWorld),u.premultiply(S),d.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(S),C++}}}return{setup:h,setupView:p,state:r}}function rv(s){const e=new lT(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:d}}function cT(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new rv(s),e.set(l,[h])):u>=d.length?(h=new rv(s),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dT(s,e,i){let r=new Sh;const l=new Dt,u=new Dt,d=new Kt,h=new PS({depthPacking:Wy}),p=new IS,m={},g=i.maxTextureSize,_={[Ha]:Hn,[Hn]:Ha,[Ti]:Ti},x=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:uT,fragmentShader:fT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Va;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ri(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pv;let v=this.type;this.render=function(F,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Ba),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const oe=v!==ea&&this.type===ea,_e=v===ea&&this.type!==ea;for(let he=0,I=F.length;he<I;he++){const K=F[he],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const be=Y.getFrameExtents();if(l.multiply(be),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/be.x),l.x=u.x*be.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/be.y),l.y=u.y*be.y,Y.mapSize.y=u.y)),Y.map===null||oe===!0||_e===!0){const ee=this.type!==ea?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,ee),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let ee=0;ee<N;ee++){const xe=Y.getViewport(ee);d.set(u.x*xe.x,u.y*xe.y,u.x*xe.z,u.y*xe.w),le.viewport(d),Y.updateMatrices(K,ee),r=Y.getFrustum(),U(B,X,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ea&&z(Y,X),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(D,w,V)};function z(F,B){const X=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,X,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,X,M,C,null)}function O(F,B,X,D){let w=null;const V=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)w=V;else if(w=X.isPointLight===!0?p:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const le=w.uuid,oe=B.uuid;let _e=m[le];_e===void 0&&(_e={},m[le]=_e);let he=_e[oe];he===void 0&&(he=w.clone(),_e[oe]=he,B.addEventListener("dispose",G)),w=he}if(w.visible=B.visible,w.wireframe=B.wireframe,D===ea?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const le=s.properties.get(w);le.light=X}return w}function U(F,B,X,D,w){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===ea)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const oe=e.update(F),_e=F.material;if(Array.isArray(_e)){const he=oe.groups;for(let I=0,K=he.length;I<K;I++){const Y=he[I],be=_e[Y.materialIndex];if(be&&be.visible){const N=O(F,be,D,w);F.onBeforeShadow(s,F,B,X,oe,N,Y),s.renderBufferDirect(X,null,oe,N,F,Y),F.onAfterShadow(s,F,B,X,oe,N,Y)}}}else if(_e.visible){const he=O(F,_e,D,w);F.onBeforeShadow(s,F,B,X,oe,he,null),s.renderBufferDirect(X,null,oe,he,F,null),F.onAfterShadow(s,F,B,X,oe,he,null)}}const le=F.children;for(let oe=0,_e=le.length;oe<_e;oe++)U(le[oe],B,X,D,w)}function G(F){F.target.removeEventListener("dispose",G);for(const X in m){const D=m[X],w=F.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const hT={[Td]:Ad,[Rd]:Dd,[wd]:Ud,[xs]:Cd,[Ad]:Td,[Dd]:Rd,[Ud]:wd,[Cd]:xs};function pT(s,e){function i(){let j=!1;const Ne=new Kt;let Ee=null;const ze=new Kt(0,0,0,0);return{setMask:function(Ae){Ee!==Ae&&!j&&(s.colorMask(Ae,Ae,Ae,Ae),Ee=Ae)},setLocked:function(Ae){j=Ae},setClear:function(Ae,ve,Fe,nt,Ut){Ut===!0&&(Ae*=nt,ve*=nt,Fe*=nt),Ne.set(Ae,ve,Fe,nt),ze.equals(Ne)===!1&&(s.clearColor(Ae,ve,Fe,nt),ze.copy(Ne))},reset:function(){j=!1,Ee=null,ze.set(-1,0,0,0)}}}function r(){let j=!1,Ne=!1,Ee=null,ze=null,Ae=null;return{setReversed:function(ve){if(Ne!==ve){const Fe=e.get("EXT_clip_control");ve?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const nt=Ae;Ae=null,this.setClear(nt)}},getReversed:function(){return Ne},setTest:function(ve){ve?Re(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(ve){Ee!==ve&&!j&&(s.depthMask(ve),Ee=ve)},setFunc:function(ve){if(Ne&&(ve=hT[ve]),ze!==ve){switch(ve){case Td:s.depthFunc(s.NEVER);break;case Ad:s.depthFunc(s.ALWAYS);break;case Rd:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Cd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=ve}},setLocked:function(ve){j=ve},setClear:function(ve){Ae!==ve&&(Ne&&(ve=1-ve),s.clearDepth(ve),Ae=ve)},reset:function(){j=!1,Ee=null,ze=null,Ae=null,Ne=!1}}}function l(){let j=!1,Ne=null,Ee=null,ze=null,Ae=null,ve=null,Fe=null,nt=null,Ut=null;return{setTest:function(bt){j||(bt?Re(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!j&&(s.stencilMask(bt),Ne=bt)},setFunc:function(bt,Vn,hn){(Ee!==bt||ze!==Vn||Ae!==hn)&&(s.stencilFunc(bt,Vn,hn),Ee=bt,ze=Vn,Ae=hn)},setOp:function(bt,Vn,hn){(ve!==bt||Fe!==Vn||nt!==hn)&&(s.stencilOp(bt,Vn,hn),ve=bt,Fe=Vn,nt=hn)},setLocked:function(bt){j=bt},setClear:function(bt){Ut!==bt&&(s.clearStencil(bt),Ut=bt)},reset:function(){j=!1,Ne=null,Ee=null,ze=null,Ae=null,ve=null,Fe=null,nt=null,Ut=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],T=null,C=!1,S=null,v=null,z=null,O=null,U=null,G=null,F=null,B=new wt(0,0,0),X=0,D=!1,w=null,V=null,le=null,oe=null,_e=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=K>=2);let be=null,N={};const ee=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Se=new Kt().fromArray(ee),J=new Kt().fromArray(xe);function me(j,Ne,Ee,ze){const Ae=new Uint8Array(4),ve=s.createTexture();s.bindTexture(j,ve),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<Ee;Fe++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Ne+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return ve}const Me={};Me[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Re(s.DEPTH_TEST),d.setFunc(xs),St(!1),dt(c0),Re(s.CULL_FACE),H(Ba);function Re(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Ce(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function ot(j,Ne){return _[j]!==Ne?(s.bindFramebuffer(j,Ne),_[j]=Ne,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ne),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Qe(j,Ne){let Ee=M,ze=!1;if(j){Ee=x.get(Ne),Ee===void 0&&(Ee=[],x.set(Ne,Ee));const Ae=j.textures;if(Ee.length!==Ae.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Fe=Ae.length;ve<Fe;ve++)Ee[ve]=s.COLOR_ATTACHMENT0+ve;Ee.length=Ae.length,ze=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,ze=!0);ze&&s.drawBuffers(Ee)}function Ot(j){return T!==j?(s.useProgram(j),T=j,!0):!1}const Ft={[gr]:s.FUNC_ADD,[_y]:s.FUNC_SUBTRACT,[xy]:s.FUNC_REVERSE_SUBTRACT};Ft[yy]=s.MIN,Ft[Sy]=s.MAX;const mt={[My]:s.ZERO,[by]:s.ONE,[Ey]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[Dy]:s.SRC_ALPHA_SATURATE,[wy]:s.DST_COLOR,[Ay]:s.DST_ALPHA,[Ty]:s.ONE_MINUS_SRC_COLOR,[Ed]:s.ONE_MINUS_SRC_ALPHA,[Cy]:s.ONE_MINUS_DST_COLOR,[Ry]:s.ONE_MINUS_DST_ALPHA,[Uy]:s.CONSTANT_COLOR,[Ny]:s.ONE_MINUS_CONSTANT_COLOR,[Ly]:s.CONSTANT_ALPHA,[Oy]:s.ONE_MINUS_CONSTANT_ALPHA};function H(j,Ne,Ee,ze,Ae,ve,Fe,nt,Ut,bt){if(j===Ba){C===!0&&(Ce(s.BLEND),C=!1);return}if(C===!1&&(Re(s.BLEND),C=!0),j!==vy){if(j!==S||bt!==D){if((v!==gr||U!==gr)&&(s.blendEquation(s.FUNC_ADD),v=gr,U=gr),bt)switch(j){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case u0:s.blendFunc(s.ONE,s.ONE);break;case f0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case u0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case f0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}z=null,O=null,G=null,F=null,B.set(0,0,0),X=0,S=j,D=bt}return}Ae=Ae||Ne,ve=ve||Ee,Fe=Fe||ze,(Ne!==v||Ae!==U)&&(s.blendEquationSeparate(Ft[Ne],Ft[Ae]),v=Ne,U=Ae),(Ee!==z||ze!==O||ve!==G||Fe!==F)&&(s.blendFuncSeparate(mt[Ee],mt[ze],mt[ve],mt[Fe]),z=Ee,O=ze,G=ve,F=Fe),(nt.equals(B)===!1||Ut!==X)&&(s.blendColor(nt.r,nt.g,nt.b,Ut),B.copy(nt),X=Ut),S=j,D=!1}function xn(j,Ne){j.side===Ti?Ce(s.CULL_FACE):Re(s.CULL_FACE);let Ee=j.side===Hn;Ne&&(Ee=!Ee),St(Ee),j.blending===gs&&j.transparent===!1?H(Ba):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const ze=j.stencilWrite;h.setTest(ze),ze&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),gt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function St(j){w!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),w=j)}function dt(j){j!==py?(Re(s.CULL_FACE),j!==V&&(j===c0?s.cullFace(s.BACK):j===my?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),V=j}function Ve(j){j!==le&&(I&&s.lineWidth(j),le=j)}function gt(j,Ne,Ee){j?(Re(s.POLYGON_OFFSET_FILL),(oe!==Ne||_e!==Ee)&&(s.polygonOffset(Ne,Ee),oe=Ne,_e=Ee)):Ce(s.POLYGON_OFFSET_FILL)}function Ye(j){j?Re(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function at(j){j===void 0&&(j=s.TEXTURE0+he-1),be!==j&&(s.activeTexture(j),be=j)}function Jt(j,Ne,Ee){Ee===void 0&&(be===null?Ee=s.TEXTURE0+he-1:Ee=be);let ze=N[Ee];ze===void 0&&(ze={type:void 0,texture:void 0},N[Ee]=ze),(ze.type!==j||ze.texture!==Ne)&&(be!==Ee&&(s.activeTexture(Ee),be=Ee),s.bindTexture(j,Ne||Me[j]),ze.type=j,ze.texture=Ne)}function L(){const j=N[be];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pe(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ge(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(j){Se.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Se.copy(j))}function We(j){J.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function qe(j,Ne){let Ee=m.get(Ne);Ee===void 0&&(Ee=new WeakMap,m.set(Ne,Ee));let ze=Ee.get(j);ze===void 0&&(ze=s.getUniformBlockIndex(Ne,j.name),Ee.set(j,ze))}function we(j,Ne){const ze=m.get(Ne).get(j);p.get(Ne)!==ze&&(s.uniformBlockBinding(Ne,ze,j.__bindingPointIndex),p.set(Ne,ze))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},be=null,N={},_={},x=new WeakMap,M=[],T=null,C=!1,S=null,v=null,z=null,O=null,U=null,G=null,F=null,B=new wt(0,0,0),X=0,D=!1,w=null,V=null,le=null,oe=null,_e=null,Se.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Re,disable:Ce,bindFramebuffer:ot,drawBuffers:Qe,useProgram:Ot,setBlending:H,setMaterial:xn,setFlipSided:St,setCullFace:dt,setLineWidth:Ve,setPolygonOffset:gt,setScissorTest:Ye,activeTexture:at,bindTexture:Jt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:te,texImage2D:ke,texImage3D:ye,updateUBOMapping:qe,uniformBlockBinding:we,texStorage2D:Ue,texStorage3D:Ge,texSubImage2D:fe,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Pe,scissor:Ie,viewport:We,reset:it}}function mT(s,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Dt,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return M?new OffscreenCanvas(L,b):Uc("canvas")}function C(L,b,te){let fe=1;const pe=Jt(L);if((pe.width>te||pe.height>te)&&(fe=te/Math.max(pe.width,pe.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(fe*pe.width),Pe=Math.floor(fe*pe.height);_===void 0&&(_=T(ce,Pe));const Ue=b?T(ce,Pe):_;return Ue.width=ce,Ue.height=Pe,Ue.getContext("2d").drawImage(L,0,0,ce,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Pe+")."),Ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(L,b,te,fe,pe=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=b;if(b===s.RED&&(te===s.FLOAT&&(ce=s.R32F),te===s.HALF_FLOAT&&(ce=s.R16F),te===s.UNSIGNED_BYTE&&(ce=s.R8)),b===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(ce=s.R8UI),te===s.UNSIGNED_SHORT&&(ce=s.R16UI),te===s.UNSIGNED_INT&&(ce=s.R32UI),te===s.BYTE&&(ce=s.R8I),te===s.SHORT&&(ce=s.R16I),te===s.INT&&(ce=s.R32I)),b===s.RG&&(te===s.FLOAT&&(ce=s.RG32F),te===s.HALF_FLOAT&&(ce=s.RG16F),te===s.UNSIGNED_BYTE&&(ce=s.RG8)),b===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(ce=s.RG8UI),te===s.UNSIGNED_SHORT&&(ce=s.RG16UI),te===s.UNSIGNED_INT&&(ce=s.RG32UI),te===s.BYTE&&(ce=s.RG8I),te===s.SHORT&&(ce=s.RG16I),te===s.INT&&(ce=s.RG32I)),b===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),te===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),te===s.UNSIGNED_INT&&(ce=s.RGB32UI),te===s.BYTE&&(ce=s.RGB8I),te===s.SHORT&&(ce=s.RGB16I),te===s.INT&&(ce=s.RGB32I)),b===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),te===s.UNSIGNED_INT&&(ce=s.RGBA32UI),te===s.BYTE&&(ce=s.RGBA8I),te===s.SHORT&&(ce=s.RGBA16I),te===s.INT&&(ce=s.RGBA32I)),b===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),b===s.RGBA){const Pe=pe?Cc:Tt.getTransfer(fe);te===s.FLOAT&&(ce=s.RGBA32F),te===s.HALF_FLOAT&&(ce=s.RGBA16F),te===s.UNSIGNED_BYTE&&(ce=Pe===Bt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function U(L,b){let te;return L?b===null||b===Sr||b===Oo?te=s.DEPTH24_STENCIL8:b===ta?te=s.DEPTH32F_STENCIL8:b===Lo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Sr||b===Oo?te=s.DEPTH_COMPONENT24:b===ta?te=s.DEPTH_COMPONENT32F:b===Lo&&(te=s.DEPTH_COMPONENT16),te}function G(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==Ai?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function F(L){const b=L.target;b.removeEventListener("dispose",F),X(b),b.isVideoTexture&&g.delete(b)}function B(L){const b=L.target;b.removeEventListener("dispose",B),w(b)}function X(L){const b=r.get(L);if(b.__webglInit===void 0)return;const te=L.source,fe=x.get(te);if(fe){const pe=fe[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&D(L),Object.keys(fe).length===0&&x.delete(te)}r.remove(L)}function D(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const te=L.source,fe=x.get(te);delete fe[b.__cacheKey],d.memory.textures--}function w(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let pe=0;pe<b.__webglFramebuffer[fe].length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[fe][pe]);else s.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[fe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=L.textures;for(let fe=0,pe=te.length;fe<pe;fe++){const ce=r.get(te[fe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),d.memory.textures--),r.remove(te[fe])}r.remove(L)}let V=0;function le(){V=0}function oe(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function _e(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function he(L,b){const te=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(te,L,b);return}}i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+b)}function I(L,b){const te=r.get(L);if(L.version>0&&te.__version!==L.version){Me(te,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+b)}function K(L,b){const te=r.get(L);if(L.version>0&&te.__version!==L.version){Me(te,L,b);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const te=r.get(L);if(L.version>0&&te.__version!==L.version){Re(te,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+b)}const be={[Od]:s.REPEAT,[_r]:s.CLAMP_TO_EDGE,[Pd]:s.MIRRORED_REPEAT},N={[gi]:s.NEAREST,[jy]:s.NEAREST_MIPMAP_NEAREST,[$l]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[kf]:s.LINEAR_MIPMAP_NEAREST,[xr]:s.LINEAR_MIPMAP_LINEAR},ee={[Yy]:s.NEVER,[eS]:s.ALWAYS,[Zy]:s.LESS,[Av]:s.LEQUAL,[Ky]:s.EQUAL,[$y]:s.GEQUAL,[Qy]:s.GREATER,[Jy]:s.NOTEQUAL};function xe(L,b){if(b.type===ta&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ai||b.magFilter===kf||b.magFilter===$l||b.magFilter===xr||b.minFilter===Ai||b.minFilter===kf||b.minFilter===$l||b.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,be[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,be[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,be[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gi||b.minFilter!==$l&&b.minFilter!==xr||b.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Se(L,b){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",F));const fe=b.source;let pe=x.get(fe);pe===void 0&&(pe={},x.set(fe,pe));const ce=_e(b);if(ce!==L.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),pe[ce].usedTimes++;const Pe=pe[L.__cacheKey];Pe!==void 0&&(pe[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(b)),L.__cacheKey=ce,L.__webglTexture=pe[ce].texture}return te}function J(L,b,te){return Math.floor(Math.floor(L/te)/b)}function me(L,b,te,fe){const ce=L.updateRanges;if(ce.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,te,fe,b.data);else{ce.sort((ye,Ie)=>ye.start-Ie.start);let Pe=0;for(let ye=1;ye<ce.length;ye++){const Ie=ce[Pe],We=ce[ye],qe=Ie.start+Ie.count,we=J(We.start,b.width,4),it=J(Ie.start,b.width,4);We.start<=qe+1&&we===it&&J(We.start+We.count-1,b.width,4)===we?Ie.count=Math.max(Ie.count,We.start+We.count-Ie.start):(++Pe,ce[Pe]=We)}ce.length=Pe+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ge=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ye=0,Ie=ce.length;ye<Ie;ye++){const We=ce[ye],qe=Math.floor(We.start/4),we=Math.ceil(We.count/4),it=qe%b.width,j=Math.floor(qe/b.width),Ne=we,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,j),i.texSubImage2D(s.TEXTURE_2D,0,it,j,Ne,Ee,te,fe,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function Me(L,b,te){let fe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=s.TEXTURE_3D);const pe=Se(L,b),ce=b.source;i.bindTexture(fe,L.__webglTexture,s.TEXTURE0+te);const Pe=r.get(ce);if(ce.version!==Pe.__version||pe===!0){i.activeTexture(s.TEXTURE0+te);const Ue=Tt.getPrimaries(Tt.workingColorSpace),Ge=b.colorSpace===za?null:Tt.getPrimaries(b.colorSpace),ke=b.colorSpace===za||Ue===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ye=C(b.image,!1,l.maxTextureSize);ye=at(b,ye);const Ie=u.convert(b.format,b.colorSpace),We=u.convert(b.type);let qe=O(b.internalFormat,Ie,We,b.colorSpace,b.isVideoTexture);xe(fe,b);let we;const it=b.mipmaps,j=b.isVideoTexture!==!0,Ne=Pe.__version===void 0||pe===!0,Ee=ce.dataReady,ze=G(b,ye);if(b.isDepthTexture)qe=U(b.format===Io,b.type),Ne&&(j?i.texStorage2D(s.TEXTURE_2D,1,qe,ye.width,ye.height):i.texImage2D(s.TEXTURE_2D,0,qe,ye.width,ye.height,0,Ie,We,null));else if(b.isDataTexture)if(it.length>0){j&&Ne&&i.texStorage2D(s.TEXTURE_2D,ze,qe,it[0].width,it[0].height);for(let Ae=0,ve=it.length;Ae<ve;Ae++)we=it[Ae],j?Ee&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,we.width,we.height,Ie,We,we.data):i.texImage2D(s.TEXTURE_2D,Ae,qe,we.width,we.height,0,Ie,We,we.data);b.generateMipmaps=!1}else j?(Ne&&i.texStorage2D(s.TEXTURE_2D,ze,qe,ye.width,ye.height),Ee&&me(b,ye,Ie,We)):i.texImage2D(s.TEXTURE_2D,0,qe,ye.width,ye.height,0,Ie,We,ye.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,qe,it[0].width,it[0].height,ye.depth);for(let Ae=0,ve=it.length;Ae<ve;Ae++)if(we=it[Ae],b.format!==mi)if(Ie!==null)if(j){if(Ee)if(b.layerUpdates.size>0){const Fe=P0(we.width,we.height,b.format,b.type);for(const nt of b.layerUpdates){const Ut=we.data.subarray(nt*Fe/we.data.BYTES_PER_ELEMENT,(nt+1)*Fe/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,nt,we.width,we.height,1,Ie,Ut)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,we.width,we.height,ye.depth,Ie,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,qe,we.width,we.height,ye.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ee&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,we.width,we.height,ye.depth,Ie,We,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ae,qe,we.width,we.height,ye.depth,0,Ie,We,we.data)}else{j&&Ne&&i.texStorage2D(s.TEXTURE_2D,ze,qe,it[0].width,it[0].height);for(let Ae=0,ve=it.length;Ae<ve;Ae++)we=it[Ae],b.format!==mi?Ie!==null?j?Ee&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,we.width,we.height,Ie,we.data):i.compressedTexImage2D(s.TEXTURE_2D,Ae,qe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ee&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,we.width,we.height,Ie,We,we.data):i.texImage2D(s.TEXTURE_2D,Ae,qe,we.width,we.height,0,Ie,We,we.data)}else if(b.isDataArrayTexture)if(j){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,qe,ye.width,ye.height,ye.depth),Ee)if(b.layerUpdates.size>0){const Ae=P0(ye.width,ye.height,b.format,b.type);for(const ve of b.layerUpdates){const Fe=ye.data.subarray(ve*Ae/ye.data.BYTES_PER_ELEMENT,(ve+1)*Ae/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,ye.width,ye.height,1,Ie,We,Fe)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ie,We,ye.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,ye.width,ye.height,ye.depth,0,Ie,We,ye.data);else if(b.isData3DTexture)j?(Ne&&i.texStorage3D(s.TEXTURE_3D,ze,qe,ye.width,ye.height,ye.depth),Ee&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ie,We,ye.data)):i.texImage3D(s.TEXTURE_3D,0,qe,ye.width,ye.height,ye.depth,0,Ie,We,ye.data);else if(b.isFramebufferTexture){if(Ne)if(j)i.texStorage2D(s.TEXTURE_2D,ze,qe,ye.width,ye.height);else{let Ae=ye.width,ve=ye.height;for(let Fe=0;Fe<ze;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,qe,Ae,ve,0,Ie,We,null),Ae>>=1,ve>>=1}}else if(it.length>0){if(j&&Ne){const Ae=Jt(it[0]);i.texStorage2D(s.TEXTURE_2D,ze,qe,Ae.width,Ae.height)}for(let Ae=0,ve=it.length;Ae<ve;Ae++)we=it[Ae],j?Ee&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ie,We,we):i.texImage2D(s.TEXTURE_2D,Ae,qe,Ie,We,we);b.generateMipmaps=!1}else if(j){if(Ne){const Ae=Jt(ye);i.texStorage2D(s.TEXTURE_2D,ze,qe,Ae.width,Ae.height)}Ee&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,We,ye)}else i.texImage2D(s.TEXTURE_2D,0,qe,Ie,We,ye);S(b)&&v(fe),Pe.__version=ce.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Re(L,b,te){if(b.image.length!==6)return;const fe=Se(L,b),pe=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+te);const ce=r.get(pe);if(pe.version!==ce.__version||fe===!0){i.activeTexture(s.TEXTURE0+te);const Pe=Tt.getPrimaries(Tt.workingColorSpace),Ue=b.colorSpace===za?null:Tt.getPrimaries(b.colorSpace),Ge=b.colorSpace===za||Pe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,ye=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!ke&&!ye?Ie[ve]=C(b.image[ve],!0,l.maxCubemapSize):Ie[ve]=ye?b.image[ve].image:b.image[ve],Ie[ve]=at(b,Ie[ve]);const We=Ie[0],qe=u.convert(b.format,b.colorSpace),we=u.convert(b.type),it=O(b.internalFormat,qe,we,b.colorSpace),j=b.isVideoTexture!==!0,Ne=ce.__version===void 0||fe===!0,Ee=pe.dataReady;let ze=G(b,We);xe(s.TEXTURE_CUBE_MAP,b);let Ae;if(ke){j&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,it,We.width,We.height);for(let ve=0;ve<6;ve++){Ae=Ie[ve].mipmaps;for(let Fe=0;Fe<Ae.length;Fe++){const nt=Ae[Fe];b.format!==mi?qe!==null?j?Ee&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,nt.width,nt.height,qe,nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,it,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,nt.width,nt.height,qe,we,nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,it,nt.width,nt.height,0,qe,we,nt.data)}}}else{if(Ae=b.mipmaps,j&&Ne){Ae.length>0&&ze++;const ve=Jt(Ie[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,it,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ye){j?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,qe,we,Ie[ve].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,Ie[ve].width,Ie[ve].height,0,qe,we,Ie[ve].data);for(let Fe=0;Fe<Ae.length;Fe++){const Ut=Ae[Fe].image[ve].image;j?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,Ut.width,Ut.height,qe,we,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,it,Ut.width,Ut.height,0,qe,we,Ut.data)}}else{j?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,qe,we,Ie[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,qe,we,Ie[ve]);for(let Fe=0;Fe<Ae.length;Fe++){const nt=Ae[Fe];j?Ee&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,qe,we,nt.image[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,it,qe,we,nt.image[ve])}}}S(b)&&v(s.TEXTURE_CUBE_MAP),ce.__version=pe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ce(L,b,te,fe,pe,ce){const Pe=u.convert(te.format,te.colorSpace),Ue=u.convert(te.type),Ge=O(te.internalFormat,Pe,Ue,te.colorSpace),ke=r.get(b),ye=r.get(te);if(ye.__renderTarget=b,!ke.__hasExternalTextures){const Ie=Math.max(1,b.width>>ce),We=Math.max(1,b.height>>ce);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?i.texImage3D(pe,ce,Ge,Ie,We,b.depth,0,Pe,Ue,null):i.texImage2D(pe,ce,Ge,Ie,We,0,Pe,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),gt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,pe,ye.__webglTexture,0,Ve(b)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,pe,ye.__webglTexture,ce),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(L,b,te){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const fe=b.depthTexture,pe=fe&&fe.isDepthTexture?fe.type:null,ce=U(b.stencilBuffer,pe),Pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=Ve(b);gt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,ce,b.width,b.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ce,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,L)}else{const fe=b.textures;for(let pe=0;pe<fe.length;pe++){const ce=fe[pe],Pe=u.convert(ce.format,ce.colorSpace),Ue=u.convert(ce.type),Ge=O(ce.internalFormat,Pe,Ue,ce.colorSpace),ke=Ve(b);te&&gt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ge,b.width,b.height):gt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,Ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const pe=fe.__webglTexture,ce=Ve(b);if(b.depthTexture.format===Po)gt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(b.depthTexture.format===Io)gt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ot(L){const b=r.get(L),te=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",pe)};fe.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=fe}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const fe=L.texture.mipmaps;fe&&fe.length>0?Qe(b.__webglFramebuffer[0],L):Qe(b.__webglFramebuffer,L)}else if(te){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=s.createRenderbuffer(),ot(b.__webglDepthbuffer[fe],L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ce)}}else{const fe=L.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ot(b.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ce)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(L,b,te){const fe=r.get(L);b!==void 0&&Ce(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Ot(L)}function mt(L){const b=L.texture,te=r.get(L),fe=r.get(b);L.addEventListener("dispose",B);const pe=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=b.version,d.memory.textures++),ce){te.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[Ue]=[];for(let Ge=0;Ge<b.mipmaps.length;Ge++)te.__webglFramebuffer[Ue][Ge]=s.createFramebuffer()}else te.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)te.__webglFramebuffer[Ue]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let Ue=0,Ge=pe.length;Ue<Ge;Ue++){const ke=r.get(pe[Ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&gt(L)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ue=0;Ue<pe.length;Ue++){const Ge=pe[Ue];te.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Ue]);const ke=u.convert(Ge.format,Ge.colorSpace),ye=u.convert(Ge.type),Ie=O(Ge.internalFormat,ke,ye,Ge.colorSpace,L.isXRRenderTarget===!0),We=Ve(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ie,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,te.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(te.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(s.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)Ce(te.__webglFramebuffer[Ue][Ge],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge);else Ce(te.__webglFramebuffer[Ue],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(b)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ue=0,Ge=pe.length;Ue<Ge;Ue++){const ke=pe[Ue],ye=r.get(ke);i.bindTexture(s.TEXTURE_2D,ye.__webglTexture),xe(s.TEXTURE_2D,ke),Ce(te.__webglFramebuffer,L,ke,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,0),S(ke)&&v(s.TEXTURE_2D)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,fe.__webglTexture),xe(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)Ce(te.__webglFramebuffer[Ge],L,b,s.COLOR_ATTACHMENT0,Ue,Ge);else Ce(te.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Ue,0);S(b)&&v(Ue),i.unbindTexture()}L.depthBuffer&&Ot(L)}function H(L){const b=L.textures;for(let te=0,fe=b.length;te<fe;te++){const pe=b[te];if(S(pe)){const ce=z(L),Pe=r.get(pe).__webglTexture;i.bindTexture(ce,Pe),v(ce),i.unbindTexture()}}}const xn=[],St=[];function dt(L){if(L.samples>0){if(gt(L)===!1){const b=L.textures,te=L.width,fe=L.height;let pe=s.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(L),Ue=b.length>1;if(Ue)for(let ke=0;ke<b.length;ke++)i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ge=L.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);const ye=r.get(b[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,te,fe,0,0,te,fe,pe,s.NEAREST),p===!0&&(xn.length=0,St.length=0,xn.push(s.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(xn.push(ce),St.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,St)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let ke=0;ke<b.length;ke++){i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);const ye=r.get(b[ke]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,ye,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ve(L){return Math.min(l.maxSamples,L.samples)}function gt(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(L){const b=d.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function at(L,b){const te=L.colorSpace,fe=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==Ms&&te!==za&&(Tt.getTransfer(te)===Bt?(fe!==mi||pe!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function Jt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Ft,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=gt}function gT(s,e){function i(r,l=za){let u;const d=Tt.getTransfer(l);if(r===wi)return s.UNSIGNED_BYTE;if(r===ph)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vv)return s.BYTE;if(r===_v)return s.SHORT;if(r===Lo)return s.UNSIGNED_SHORT;if(r===hh)return s.INT;if(r===Sr)return s.UNSIGNED_INT;if(r===ta)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===yv)return s.ALPHA;if(r===Sv)return s.RGB;if(r===mi)return s.RGBA;if(r===Po)return s.DEPTH_COMPONENT;if(r===Io)return s.DEPTH_STENCIL;if(r===Mv)return s.RED;if(r===gh)return s.RED_INTEGER;if(r===bv)return s.RG;if(r===vh)return s.RG_INTEGER;if(r===_h)return s.RGBA_INTEGER;if(r===Sc||r===Mc||r===bc||r===Ec)if(d===Bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===zd||r===Bd||r===Fd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Id)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd||r===Gd||r===Vd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Hd||r===Gd)return d===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Vd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kd||r===jd||r===Xd||r===Wd||r===qd||r===Yd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh||r===th||r===nh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===th)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tc||r===ih||r===ah)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Tc)return d===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ih)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ah)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ev||r===rh||r===sh||r===oh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===rh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const vT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_T=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Gn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ga({vertexShader:vT,fragmentShader:_T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends Ts{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,T=null;const C=new xT,S=i.getContextAttributes();let v=null,z=null;const O=[],U=[],G=new Dt;let F=null;const B=new oi;B.viewport=new Kt;const X=new oi;X.viewport=new Kt;const D=[B,X],w=new GS;let V=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=O[J];return me===void 0&&(me=new dd,O[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=O[J];return me===void 0&&(me=new dd,O[J]=me),me.getGripSpace()},this.getHand=function(J){let me=O[J];return me===void 0&&(me=new dd,O[J]=me),me.getHandSpace()};function oe(J){const me=U.indexOf(J.inputSource);if(me===-1)return;const Me=O[me];Me!==void 0&&(Me.update(J.inputSource,J.frame,m||d),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function _e(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",he);for(let J=0;J<O.length;J++){const me=U[J];me!==null&&(U[J]=null,O[J].disconnect(me))}V=null,le=null,C.reset(),e.setRenderTarget(v),M=null,x=null,_=null,l=null,z=null,Se.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,Ce=null;S.depth&&(Ce=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=S.stencil?Io:Po,Re=S.stencil?Oo:Sr);const ot={colorFormat:i.RGBA8,depthFormat:Ce,scaleFactor:u};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(ot),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new Mr(x.textureWidth,x.textureHeight,{format:mi,type:wi,depthTexture:new zv(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Mr(M.framebufferWidth,M.framebufferHeight,{format:mi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Se.setContext(l),Se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function he(J){for(let me=0;me<J.removed.length;me++){const Me=J.removed[me],Re=U.indexOf(Me);Re>=0&&(U[Re]=null,O[Re].disconnect(Me))}for(let me=0;me<J.added.length;me++){const Me=J.added[me];let Re=U.indexOf(Me);if(Re===-1){for(let ot=0;ot<O.length;ot++)if(ot>=U.length){U.push(Me),Re=ot;break}else if(U[ot]===null){U[ot]=Me,Re=ot;break}if(Re===-1)break}const Ce=O[Re];Ce&&Ce.connect(Me)}}const I=new se,K=new se;function Y(J,me,Me){I.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Me.matrixWorld);const Re=I.distanceTo(K),Ce=me.projectionMatrix.elements,ot=Me.projectionMatrix.elements,Qe=Ce[14]/(Ce[10]-1),Ot=Ce[14]/(Ce[10]+1),Ft=(Ce[9]+1)/Ce[5],mt=(Ce[9]-1)/Ce[5],H=(Ce[8]-1)/Ce[0],xn=(ot[8]+1)/ot[0],St=Qe*H,dt=Qe*xn,Ve=Re/(-H+xn),gt=Ve*-H;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(gt),J.translateZ(Ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ye=Qe+Ve,at=Ot+Ve,Jt=St-gt,L=dt+(Re-gt),b=Ft*Ot/at*Ye,te=mt*Ot/at*Ye;J.projectionMatrix.makePerspective(Jt,L,b,te,Ye,at),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,Me=J.far;C.texture!==null&&(C.depthNear>0&&(me=C.depthNear),C.depthFar>0&&(Me=C.depthFar)),w.near=X.near=B.near=me,w.far=X.far=B.far=Me,(V!==w.near||le!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,le=w.far),B.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,w.layers.mask=B.layers.mask|X.layers.mask;const Re=J.parent,Ce=w.cameras;be(w,Re);for(let ot=0;ot<Ce.length;ot++)be(Ce[ot],Re);Ce.length===2?Y(w,B,X):w.projectionMatrix.copy(B.projectionMatrix),N(J,w,Re)};function N(J,me,Me){Me===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=lh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(w)};let ee=null;function xe(J,me){if(g=me.getViewerPose(m||d),T=me,g!==null){const Me=g.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Re=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,Re=!0);for(let Qe=0;Qe<Me.length;Qe++){const Ot=Me[Qe];let Ft=null;if(M!==null)Ft=M.getViewport(Ot);else{const H=_.getViewSubImage(x,Ot);Ft=H.viewport,Qe===0&&(e.setRenderTargetTextures(z,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(z))}let mt=D[Qe];mt===void 0&&(mt=new oi,mt.layers.enable(Qe),mt.viewport=new Kt,D[Qe]=mt),mt.matrix.fromArray(Ot.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ot.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Qe===0&&(w.matrix.copy(mt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Re===!0&&w.cameras.push(mt)}const Ce=l.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Qe=_.getDepthInformation(Me[0]);Qe&&Qe.isValid&&Qe.texture&&C.init(e,Qe,l.renderState)}}for(let Me=0;Me<O.length;Me++){const Re=U[Me],Ce=O[Me];Re!==null&&Ce!==void 0&&Ce.update(Re,me,m||d)}ee&&ee(J,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),T=null}const Se=new Hv;Se.setAnimationLoop(xe),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const hr=new Ci,ST=new Qt;function MT(s,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Ov(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,z,O,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,U)):v.isMeshMatcapMaterial?(u(S,v),T(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),C(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,z,O):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Hn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Hn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const z=e.get(v),O=z.envMap,U=z.envMapRotation;O&&(S.envMap.value=O,hr.copy(U),hr.x*=-1,hr.y*=-1,hr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),S.envMapRotation.value.setFromMatrix4(ST.makeRotationFromEuler(hr)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,z,O){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*z,S.scale.value=O*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,z){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const z=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function bT(s,e,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,O){const U=O.program;r.uniformBlockBinding(z,U)}function m(z,O){let U=l[z.id];U===void 0&&(T(z),U=g(z),l[z.id]=U,z.addEventListener("dispose",S));const G=O.program;r.updateUBOMapping(z,G);const F=e.render.frame;u[z.id]!==F&&(x(z),u[z.id]=F)}function g(z){const O=_();z.__bindingPointIndex=O;const U=s.createBuffer(),G=z.__size,F=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,U),U}function _(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const O=l[z.id],U=z.uniforms,G=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let F=0,B=U.length;F<B;F++){const X=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,w=X.length;D<w;D++){const V=X[D];if(M(V,F,D,G)===!0){const le=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let he=0;he<oe.length;he++){const I=oe[he],K=C(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,le+_e,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,_e),_e+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(z,O,U,G){const F=z.value,B=O+"_"+U;if(G[B]===void 0)return typeof F=="number"||typeof F=="boolean"?G[B]=F:G[B]=F.clone(),!0;{const X=G[B];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return G[B]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function T(z){const O=z.uniforms;let U=0;const G=16;for(let B=0,X=O.length;B<X;B++){const D=Array.isArray(O[B])?O[B]:[O[B]];for(let w=0,V=D.length;w<V;w++){const le=D[w],oe=Array.isArray(le.value)?le.value:[le.value];for(let _e=0,he=oe.length;_e<he;_e++){const I=oe[_e],K=C(I),Y=U%G,be=Y%K.boundary,N=Y+be;U+=be,N!==0&&G-N<K.storage&&(U+=G-N),le.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=U,U+=K.storage}}}const F=U%G;return F>0&&(U+=G-F),z.__size=U,z.__cache={},this}function C(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function S(z){const O=z.target;O.removeEventListener("dispose",S);const U=d.indexOf(O.__bindingPointIndex);d.splice(U,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function v(){for(const z in l)s.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:p,update:m,dispose:v}}class ET{constructor(e={}){const{canvas:i=nS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),C=new Int32Array(4);let S=null,v=null;const z=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=si;let F=0,B=0,X=null,D=-1,w=null;const V=new Kt,le=new Kt;let oe=null;const _e=new wt(0);let he=0,I=i.width,K=i.height,Y=1,be=null,N=null;const ee=new Kt(0,0,I,K),xe=new Kt(0,0,I,K);let Se=!1;const J=new Sh;let me=!1,Me=!1;const Re=new Qt,Ce=new Qt,ot=new se,Qe=new Kt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function mt(){return X===null?Y:1}let H=r;function xn(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dh}`),i.addEventListener("webglcontextlost",ze,!1),i.addEventListener("webglcontextrestored",Ae,!1),i.addEventListener("webglcontextcreationerror",ve,!1),H===null){const q="webgl2";if(H=xn(q,R),H===null)throw xn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let St,dt,Ve,gt,Ye,at,Jt,L,b,te,fe,pe,ce,Pe,Ue,Ge,ke,ye,Ie,We,qe,we,it,j;function Ne(){St=new OE(H),St.init(),we=new gT(H,St),dt=new RE(H,St,e,we),Ve=new pT(H,St),dt.reverseDepthBuffer&&x&&Ve.buffers.depth.setReversed(!0),gt=new zE(H),Ye=new tT,at=new mT(H,St,Ve,Ye,dt,we,gt),Jt=new CE(U),L=new LE(U),b=new kS(H),it=new TE(H,b),te=new PE(H,b,gt,it),fe=new FE(H,te,b,gt),Ie=new BE(H,dt,at),Ge=new wE(Ye),pe=new eT(U,Jt,L,St,dt,it,Ge),ce=new MT(U,Ye),Pe=new iT,Ue=new cT(St),ye=new EE(U,Jt,L,Ve,fe,M,p),ke=new dT(U,fe,dt),j=new bT(H,gt,dt,Ve),We=new AE(H,St,gt),qe=new IE(H,St,gt),gt.programs=pe.programs,U.capabilities=dt,U.extensions=St,U.properties=Ye,U.renderLists=Pe,U.shadowMap=ke,U.state=Ve,U.info=gt}Ne();const Ee=new yT(U,H);this.xr=Ee,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=St.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=St.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(I,K,!1))},this.getSize=function(R){return R.set(I,K)},this.setSize=function(R,q,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,K=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),ae===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,q,ae){I=R,K=q,Y=ae,i.width=Math.floor(R*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,q,ae,re){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,ae,re),Ve.viewport(V.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,q,ae,re){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,q,ae,re),Ve.scissor(le.copy(xe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){Ve.setScissorTest(Se=R)},this.setOpaqueSort=function(R){be=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let re=0;if(R){let Z=!1;if(X!==null){const Te=X.texture.format;Z=Te===_h||Te===vh||Te===gh}if(Z){const Te=X.texture.type,De=Te===wi||Te===Sr||Te===Lo||Te===Oo||Te===ph||Te===mh,Oe=ye.getClearColor(),Be=ye.getClearAlpha(),$e=Oe.r,Ze=Oe.g,je=Oe.b;De?(T[0]=$e,T[1]=Ze,T[2]=je,T[3]=Be,H.clearBufferuiv(H.COLOR,0,T)):(C[0]=$e,C[1]=Ze,C[2]=je,C[3]=Be,H.clearBufferiv(H.COLOR,0,C))}else re|=H.COLOR_BUFFER_BIT}q&&(re|=H.DEPTH_BUFFER_BIT),ae&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ze,!1),i.removeEventListener("webglcontextrestored",Ae,!1),i.removeEventListener("webglcontextcreationerror",ve,!1),ye.dispose(),Pe.dispose(),Ue.dispose(),Ye.dispose(),Jt.dispose(),L.dispose(),fe.dispose(),it.dispose(),j.dispose(),pe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",on),Ee.removeEventListener("sessionend",yn),On.stop()};function ze(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=gt.autoReset,q=ke.enabled,ae=ke.autoUpdate,re=ke.needsUpdate,Z=ke.type;Ne(),gt.autoReset=R,ke.enabled=q,ke.autoUpdate=ae,ke.needsUpdate=re,ke.type=Z}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fe(R){const q=R.target;q.removeEventListener("dispose",Fe),nt(q)}function nt(R){Ut(R),Ye.remove(R)}function Ut(R){const q=Ye.get(R).programs;q!==void 0&&(q.forEach(function(ae){pe.releaseProgram(ae)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,re,Z,Te){q===null&&(q=Ot);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=Xa(R,q,ae,re,Z);Ve.setMaterial(re,De);let Be=ae.index,$e=1;if(re.wireframe===!0){if(Be=te.getWireframeAttribute(ae),Be===void 0)return;$e=2}const Ze=ae.drawRange,je=ae.attributes.position;let ct=Ze.start*$e,At=(Ze.start+Ze.count)*$e;Te!==null&&(ct=Math.max(ct,Te.start*$e),At=Math.min(At,(Te.start+Te.count)*$e)),Be!==null?(ct=Math.max(ct,0),At=Math.min(At,Be.count)):je!=null&&(ct=Math.max(ct,0),At=Math.min(At,je.count));const Vt=At-ct;if(Vt<0||Vt===1/0)return;it.setup(Z,re,Oe,ae,Be);let vt,_t=We;if(Be!==null&&(vt=b.get(Be),_t=qe,_t.setIndex(vt)),Z.isMesh)re.wireframe===!0?(Ve.setLineWidth(re.wireframeLinewidth*mt()),_t.setMode(H.LINES)):_t.setMode(H.TRIANGLES);else if(Z.isLine){let Ke=re.linewidth;Ke===void 0&&(Ke=1),Ve.setLineWidth(Ke*mt()),Z.isLineSegments?_t.setMode(H.LINES):Z.isLineLoop?_t.setMode(H.LINE_LOOP):_t.setMode(H.LINE_STRIP)}else Z.isPoints?_t.setMode(H.POINTS):Z.isSprite&&_t.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))_t.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ke=Z._multiDrawStarts,qt=Z._multiDrawCounts,Mt=Z._multiDrawCount,Tn=Be?b.get(Be).bytesPerElement:1,oa=Ye.get(re).currentProgram.getUniforms();for(let kt=0;kt<Mt;kt++)oa.setValue(H,"_gl_DrawID",kt),_t.render(Ke[kt]/Tn,qt[kt])}else if(Z.isInstancedMesh)_t.renderInstances(ct,Vt,Z.count);else if(ae.isInstancedBufferGeometry){const Ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,qt=Math.min(ae.instanceCount,Ke);_t.renderInstances(ct,Vt,qt)}else _t.render(ct,Vt)};function bt(R,q,ae){R.transparent===!0&&R.side===Ti&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,ra(R,q,ae),R.side=Ha,R.needsUpdate=!0,ra(R,q,ae),R.side=Ti):ra(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),v=Ue.get(ae),v.init(q),O.push(v),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const re=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Oe=Te[De];bt(Oe,ae,Z),re.add(Oe)}else bt(Te,ae,Z),re.add(Te)}),v=O.pop(),re},this.compileAsync=function(R,q,ae=null){const re=this.compile(R,q,ae);return new Promise(Z=>{function Te(){if(re.forEach(function(De){Ye.get(De).currentProgram.isReady()&&re.delete(De)}),re.size===0){Z(R);return}setTimeout(Te,10)}St.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Vn=null;function hn(R){Vn&&Vn(R)}function on(){On.stop()}function yn(){On.start()}const On=new Hv;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){Vn=R,Ee.setAnimationLoop(R),R===null?On.stop():On.start()},Ee.addEventListener("sessionstart",on),Ee.addEventListener("sessionend",yn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(q),q=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,X),v=Ue.get(R,O.length),v.init(q),O.push(v),Ce.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Ce),Me=this.localClippingEnabled,me=Ge.init(this.clippingPlanes,Me),S=Pe.get(R,z.length),S.init(),z.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const Te=U.xr.getDepthSensingMesh();Te!==null&&ka(Te,q,-1/0,U.sortObjects)}ka(R,q,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(be,N),Ft=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Ft&&ye.addToRenderList(S,R),this.info.render.frame++,me===!0&&Ge.beginShadows();const ae=v.state.shadowsArray;ke.render(ae,R,q),me===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,Z=S.transmissive;if(v.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Z.length>0)for(let De=0,Oe=Te.length;De<Oe;De++){const Be=Te[De];jo(re,Z,R,Be)}Ft&&ye.render(R);for(let De=0,Oe=Te.length;De<Oe;De++){const Be=Te[De];ko(S,R,Be,Be.viewport)}}else Z.length>0&&jo(re,Z,R,q),Ft&&ye.render(R),ko(S,R,q);X!==null&&B===0&&(at.updateMultisampleRenderTarget(X),at.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(U,R,q),it.resetDefaultState(),D=-1,w=null,O.pop(),O.length>0?(v=O[O.length-1],me===!0&&Ge.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function ka(R,q,ae,re){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){re&&Qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const De=fe.update(R),Oe=R.material;Oe.visible&&S.push(R,De,Oe,ae,Qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const De=fe.update(R),Oe=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qe.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Qe.copy(De.boundingSphere.center)),Qe.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(Oe)){const Be=De.groups;for(let $e=0,Ze=Be.length;$e<Ze;$e++){const je=Be[$e],ct=Oe[je.materialIndex];ct&&ct.visible&&S.push(R,De,ct,ae,Qe.z,je)}}else Oe.visible&&S.push(R,De,Oe,ae,Qe.z,null)}}const Te=R.children;for(let De=0,Oe=Te.length;De<Oe;De++)ka(Te[De],q,ae,re)}function ko(R,q,ae,re){const Z=R.opaque,Te=R.transmissive,De=R.transparent;v.setupLightsView(ae),me===!0&&Ge.setGlobalState(U.clippingPlanes,ae),re&&Ve.viewport(V.copy(re)),Z.length>0&&ja(Z,q,ae),Te.length>0&&ja(Te,q,ae),De.length>0&&ja(De,q,ae),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function jo(R,q,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Mr(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?zo:wi,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=v.state.transmissionRenderTarget[re.id],De=re.viewport||V;Te.setSize(De.z*U.transmissionResolutionScale,De.w*U.transmissionResolutionScale);const Oe=U.getRenderTarget();U.setRenderTarget(Te),U.getClearColor(_e),he=U.getClearAlpha(),he<1&&U.setClearColor(16777215,.5),U.clear(),Ft&&ye.render(ae);const Be=U.toneMapping;U.toneMapping=Fa;const $e=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),me===!0&&Ge.setGlobalState(U.clippingPlanes,re),ja(R,ae,re),at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,ct=q.length;je<ct;je++){const At=q[je],Vt=At.object,vt=At.geometry,_t=At.material,Ke=At.group;if(_t.side===Ti&&Vt.layers.test(re.layers)){const qt=_t.side;_t.side=Hn,_t.needsUpdate=!0,aa(Vt,ae,re,vt,_t,Ke),_t.side=qt,_t.needsUpdate=!0,Ze=!0}}Ze===!0&&(at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te))}U.setRenderTarget(Oe),U.setClearColor(_e,he),$e!==void 0&&(re.viewport=$e),U.toneMapping=Be}function ja(R,q,ae){const re=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const De=R[Z],Oe=De.object,Be=De.geometry,$e=De.group;let Ze=De.material;Ze.allowOverride===!0&&re!==null&&(Ze=re),Oe.layers.test(ae.layers)&&aa(Oe,q,ae,Be,Ze,$e)}}function aa(R,q,ae,re,Z,Te){R.onBeforeRender(U,q,ae,re,Z,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,q,ae,re,R,Te),Z.transparent===!0&&Z.side===Ti&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,Te),Z.side=Ha,Z.needsUpdate=!0,U.renderBufferDirect(ae,q,re,Z,R,Te),Z.side=Ti):U.renderBufferDirect(ae,q,re,Z,R,Te),R.onAfterRender(U,q,ae,re,Z,Te)}function ra(R,q,ae){q.isScene!==!0&&(q=Ot);const re=Ye.get(R),Z=v.state.lights,Te=v.state.shadowsArray,De=Z.state.version,Oe=pe.getParameters(R,Z.state,Te,q,ae),Be=pe.getProgramCacheKey(Oe);let $e=re.programs;re.environment=R.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(R.isMeshStandardMaterial?L:Jt).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",Fe),$e=new Map,re.programs=$e);let Ze=$e.get(Be);if(Ze!==void 0){if(re.currentProgram===Ze&&re.lightsStateVersion===De)return Ui(R,Oe),Ze}else Oe.uniforms=pe.getUniforms(R),R.onBeforeCompile(Oe,U),Ze=pe.acquireProgram(Oe,Be),$e.set(Be,Ze),re.uniforms=Oe.uniforms;const je=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Ge.uniform),Ui(R,Oe),re.needsLights=tn(R),re.lightsStateVersion=De,re.needsLights&&(je.ambientLightColor.value=Z.state.ambient,je.lightProbe.value=Z.state.probe,je.directionalLights.value=Z.state.directional,je.directionalLightShadows.value=Z.state.directionalShadow,je.spotLights.value=Z.state.spot,je.spotLightShadows.value=Z.state.spotShadow,je.rectAreaLights.value=Z.state.rectArea,je.ltc_1.value=Z.state.rectAreaLTC1,je.ltc_2.value=Z.state.rectAreaLTC2,je.pointLights.value=Z.state.point,je.pointLightShadows.value=Z.state.pointShadow,je.hemisphereLights.value=Z.state.hemi,je.directionalShadowMap.value=Z.state.directionalShadowMap,je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,je.spotShadowMap.value=Z.state.spotShadowMap,je.spotLightMatrix.value=Z.state.spotLightMatrix,je.spotLightMap.value=Z.state.spotLightMap,je.pointShadowMap.value=Z.state.pointShadowMap,je.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=Ze,re.uniformsList=null,Ze}function Di(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ac.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ui(R,q){const ae=Ye.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function Xa(R,q,ae,re,Z){q.isScene!==!0&&(q=Ot),at.resetTextureUnits();const Te=q.fog,De=re.isMeshStandardMaterial?q.environment:null,Oe=X===null?U.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ms,Be=(re.isMeshStandardMaterial?L:Jt).get(re.envMap||De),$e=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ze=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ae.morphAttributes.position,ct=!!ae.morphAttributes.normal,At=!!ae.morphAttributes.color;let Vt=Fa;re.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Vt=U.toneMapping);const vt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,_t=vt!==void 0?vt.length:0,Ke=Ye.get(re),qt=v.state.lights;if(me===!0&&(Me===!0||R!==w)){const pn=R===w&&re.id===D;Ge.setState(re,R,pn)}let Mt=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==qt.state.version||Ke.outputColorSpace!==Oe||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isBatchedMesh&&Ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Be||re.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ge.numPlanes||Ke.numIntersection!==Ge.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==Ze||Ke.morphTargets!==je||Ke.morphNormals!==ct||Ke.morphColors!==At||Ke.toneMapping!==Vt||Ke.morphTargetsCount!==_t)&&(Mt=!0):(Mt=!0,Ke.__version=re.version);let Tn=Ke.currentProgram;Mt===!0&&(Tn=ra(re,q,Z));let oa=!1,kt=!1,Li=!1;const Ht=Tn.getUniforms(),An=Ke.uniforms;if(Ve.useProgram(Tn.program)&&(oa=!0,kt=!0,Li=!0),re.id!==D&&(D=re.id,kt=!0),oa||w!==R){Ve.buffers.depth.getReversed()?(Re.copy(R.projectionMatrix),aS(Re),rS(Re),Ht.setValue(H,"projectionMatrix",Re)):Ht.setValue(H,"projectionMatrix",R.projectionMatrix),Ht.setValue(H,"viewMatrix",R.matrixWorldInverse);const Sn=Ht.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,ot.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,kt=!0,Li=!0)}if(Z.isSkinnedMesh){Ht.setOptional(H,Z,"bindMatrix"),Ht.setOptional(H,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ht.setValue(H,"boneTexture",pn.boneTexture,at))}Z.isBatchedMesh&&(Ht.setOptional(H,Z,"batchingTexture"),Ht.setValue(H,"batchingTexture",Z._matricesTexture,at),Ht.setOptional(H,Z,"batchingIdTexture"),Ht.setValue(H,"batchingIdTexture",Z._indirectTexture,at),Ht.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ht.setValue(H,"batchingColorTexture",Z._colorsTexture,at));const ln=ae.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ie.update(Z,ae,Tn),(kt||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Ht.setValue(H,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(An.envMap.value=Be,An.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),kt&&(Ht.setValue(H,"toneMappingExposure",U.toneMappingExposure),Ke.needsLights&&sa(An,Li),Te&&re.fog===!0&&ce.refreshFogUniforms(An,Te),ce.refreshMaterialUniforms(An,re,Y,K,v.state.transmissionRenderTarget[R.id]),Ac.upload(H,Di(Ke),An,at)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ac.upload(H,Di(Ke),An,at),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ht.setValue(H,"center",Z.center),Ht.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Ht.setValue(H,"normalMatrix",Z.normalMatrix),Ht.setValue(H,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const pn=re.uniformsGroups;for(let Sn=0,_i=pn.length;Sn<_i;Sn++){const Oi=pn[Sn];j.update(Oi,Tn),j.bind(Oi,Tn)}}return Tn}function sa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function tn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,ae){const re=Ye.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=q,Ye.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=Ye.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const Xo=H.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){X=R,F=q,B=ae;let re=!0,Z=null,Te=!1,De=!1;if(R){const Be=Ye.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Be.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Be.__hasExternalTextures)at.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Be.__boundDepthTexture!==je){if(je!==null&&Ye.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const Ze=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?Z=Ze[q][ae]:Z=Ze[q],Te=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?Z=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?Z=Ze[ae]:Z=Ze,V.copy(R.viewport),le.copy(R.scissor),oe=R.scissorTest}else V.copy(ee).multiplyScalar(Y).floor(),le.copy(xe).multiplyScalar(Y).floor(),oe=Se;if(ae!==0&&(Z=Xo),Ve.bindFramebuffer(H.FRAMEBUFFER,Z)&&re&&Ve.drawBuffers(R,Z),Ve.viewport(V),Ve.scissor(le),Ve.setScissorTest(oe),Te){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,ae)}else if(De){const Be=Ye.get(R.texture),$e=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Be.__webglTexture,ae,$e)}else if(R!==null&&ae!==0){const Be=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Be.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,q,ae,re,Z,Te,De,Oe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Ve.bindFramebuffer(H.FRAMEBUFFER,Be);try{const $e=R.textures[Oe],Ze=$e.format,je=$e.type;if(!dt.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Oe),H.readPixels(q,ae,re,Z,we.convert(Ze),we.convert(je),Te))}finally{const $e=X!==null?Ye.get(X).__webglFramebuffer:null;Ve.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,re,Z,Te,De,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(q>=0&&q<=R.width-re&&ae>=0&&ae<=R.height-Z){Ve.bindFramebuffer(H.FRAMEBUFFER,Be);const $e=R.textures[Oe],Ze=$e.format,je=$e.type;if(!dt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Oe),H.readPixels(q,ae,re,Z,we.convert(Ze),we.convert(je),0);const At=X!==null?Ye.get(X).__webglFramebuffer:null;Ve.bindFramebuffer(H.FRAMEBUFFER,At);const Vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await iS(H,Vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ct),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(ct),H.deleteSync(Vt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const re=Math.pow(2,-ae),Z=Math.floor(R.image.width*re),Te=Math.floor(R.image.height*re),De=q!==null?q.x:0,Oe=q!==null?q.y:0;at.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,De,Oe,Z,Te),Ve.unbindTexture()};const Wo=H.createFramebuffer(),Ni=H.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,re=null,Z=0,Te=null){Te===null&&(Z!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let De,Oe,Be,$e,Ze,je,ct,At,Vt;const vt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)De=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,Ze=ae.min.y,je=ae.isBox3?ae.min.z:0;else{const ln=Math.pow(2,-Z);De=Math.floor(vt.width*ln),Oe=Math.floor(vt.height*ln),R.isDataArrayTexture?Be=vt.depth:R.isData3DTexture?Be=Math.floor(vt.depth*ln):Be=1,$e=0,Ze=0,je=0}re!==null?(ct=re.x,At=re.y,Vt=re.z):(ct=0,At=0,Vt=0);const _t=we.convert(q.format),Ke=we.convert(q.type);let qt;q.isData3DTexture?(at.setTexture3D(q,0),qt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(at.setTexture2DArray(q,0),qt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(q,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Mt=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),oa=H.getParameter(H.UNPACK_SKIP_PIXELS),kt=H.getParameter(H.UNPACK_SKIP_ROWS),Li=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const Ht=R.isDataArrayTexture||R.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const ln=Ye.get(R),pn=Ye.get(q),Sn=Ye.get(ln.__renderTarget),_i=Ye.get(pn.__renderTarget);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Oi=0;Oi<Be;Oi++)Ht&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,Z,je+Oi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(q).__webglTexture,Te,Vt+Oi)),H.blitFramebuffer($e,Ze,De,Oe,ct,At,De,Oe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ye.has(R)){const ln=Ye.get(R),pn=Ye.get(q);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,Wo),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ni);for(let Sn=0;Sn<Be;Sn++)Ht?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,Z,je+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,Z),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Te,Vt+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Te),Z!==0?H.blitFramebuffer($e,Ze,De,Oe,ct,At,De,Oe,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(qt,Te,ct,At,Vt+Sn,$e,Ze,De,Oe):H.copyTexSubImage2D(qt,Te,ct,At,$e,Ze,De,Oe);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(qt,Te,ct,At,Vt,De,Oe,Be,_t,Ke,vt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,Te,ct,At,Vt,De,Oe,Be,_t,vt.data):H.texSubImage3D(qt,Te,ct,At,Vt,De,Oe,Be,_t,Ke,vt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,ct,At,De,Oe,_t,Ke,vt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,ct,At,vt.width,vt.height,_t,vt.data):H.texSubImage2D(H.TEXTURE_2D,Te,ct,At,De,Oe,_t,Ke,vt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,oa),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Li),Te===0&&q.generateMipmaps&&H.generateMipmap(qt),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ae=null,re=null,Z=0){return vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ae,re,Z)},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){F=0,B=0,X=null,Ve.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function TT(){const s=Ct.useRef(),[e,i]=fh.useState(null);return Ct.useEffect(()=>{try{if(!s.current)return;const r=setTimeout(()=>{if(!s.current)return;const l=s.current.clientWidth||400,u=s.current.clientHeight||300,d=new US,h=new oi(45,l/u,.1,100);h.position.set(0,-10,10),h.lookAt(0,0,0);const p=new ET({antialias:!0,alpha:!0});for(p.setSize(l,u),p.setClearColor(0,0);s.current.firstChild;)s.current.removeChild(s.current.firstChild);s.current.appendChild(p.domElement);const m=new HS(16777215,.8);d.add(m);const g=new FS(16777215,1);g.position.set(5,5,5),d.add(g);const _=3,x=3,M=50,T=6,C=new Va,S=[];for(let X=0;X<=M;X++){const D=X/M*T-T/2;for(let w=0;w<=M;w++){const V=w/M*T-T/2,le=V*V/(x*x)-D*D/(_*_);S.push(D,V,le)}}const v=new Float32Array(S);C.setAttribute("position",new vi(v,3));const z=[];for(let X=0;X<M;X++)for(let D=0;D<M;D++){const w=X*(M+1)+D,V=X*(M+1)+D+1,le=(X+1)*(M+1)+D,oe=(X+1)*(M+1)+D+1;z.push(w,V,oe),z.push(w,oe,le)}C.setIndex(z),C.computeVertexNormals();const O=new OS({color:5932799,side:Ti,flatShading:!1,transparent:!0,opacity:.85}),U=new Ri(C,O);d.add(U);let G;const F=()=>{s.current&&(G=requestAnimationFrame(F),U.rotation.z+=.005,U.rotation.x+=.002,p.render(d,h))};F();const B=()=>{if(!s.current)return;const X=s.current.clientWidth||400,D=s.current.clientHeight||300;h.aspect=X/D,h.updateProjectionMatrix(),p.setSize(X,D)};window.addEventListener("resize",B),s.current._cleanup=()=>{window.removeEventListener("resize",B),G&&cancelAnimationFrame(G),s.current&&p.domElement&&s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),C.dispose(),O.dispose(),p.dispose()}},100);return()=>{clearTimeout(r),s.current&&s.current._cleanup&&s.current._cleanup()}}catch(r){console.error("Error in HyperbolicParaboloid:",r),i(r.message)}},[]),e?A.jsx("div",{style:{width:"100%",height:"300px",borderRadius:"16px",background:"linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",overflow:"hidden",border:"2px solid rgba(90, 134, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",textAlign:"center",padding:"20px"},children:A.jsxs("div",{children:[A.jsx("div",{className:"text-lg mb-2",children:"⚠️ 3D Visualization Error"}),A.jsx("div",{className:"text-sm opacity-75",children:"Mathematical equations shown below"})]})}):A.jsx("div",{ref:s,style:{width:"100%",height:"300px",borderRadius:"16px",background:"linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",overflow:"hidden",border:"2px solid rgba(90, 134, 255, 0.3)"}})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RT=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),sv=s=>{const e=RT(s);return e.charAt(0).toUpperCase()+e.slice(1)},Xv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=Ct.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},p)=>Ct.createElement("svg",{ref:p,...wT,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Xv("lucide",l),...h},[...d.map(([m,g])=>Ct.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=(s,e)=>{const i=Ct.forwardRef(({className:r,...l},u)=>Ct.createElement(CT,{ref:u,iconNode:e,className:Xv(`lucide-${AT(sv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=sv(s),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ov=sn("award",DT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Wv=sn("calendar",UT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],LT=sn("chevron-right",NT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],PT=sn("cloud",OT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Es=sn("code",IT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],BT=sn("container",zT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Rc=sn("database",FT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],GT=sn("external-link",HT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kT=sn("eye",VT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],XT=sn("facebook",jT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],qT=sn("git-branch",WT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],ZT=sn("github",YT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],qv=sn("graduation-cap",KT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],wc=sn("layers",QT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],$T=sn("linkedin",JT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],tA=sn("mail",eA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],iA=sn("message-square",nA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],rA=sn("server",aA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],oA=sn("settings",sA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],cA=sn("shield",lA);function uA({title:s,description:e,image:i}){return A.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-md",children:[A.jsx("div",{className:"relative aspect-square overflow-hidden",children:A.jsx("img",{src:i,alt:s,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105",loading:"lazy"})}),A.jsxs("div",{className:"p-4",children:[A.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:s}),A.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 line-clamp-3",children:e})]})]})}const lv={image:"assets/me.jpg",title:"Patiphan Akkahadsri"},fA="I am a student at KMITL, majoring in Information Technology on Software Development module.",cv=["Linear Algebra","Calculus","Discrete Mathematics","Probability and Statistics","Differential Geometry","Information Theory","Vector Calculus","Numerical Analysis","Optimization","Image Processing","Computer Vision","Digital Signal Processing"],ps=["I am a currently a student at School of Information Technology, King Mongkut's Institute of Technology Ladkrabang (KMITL).","Throughout my time at KMITL, I've developed a strong interest in the mathematical foundations of computer science. I particularly enjoy subjects","Driven by curiosity, I've explored more advanced topics such as",`I'm also familiar with Unix-based systems like macOS and Linux. 
    I often work in a dual-boot environment using both Windows and Arch Linux, 
    which gives me flexibility across different development ecosystems.`,`Not only I enjoy mathematics, but I also have a passion for coding.
    Not only do I enjoy mathematics, but I'm also passionate about coding.
I'm actively working on improving my skills by learning fundamental concepts like 
object-oriented programming (OOP), data structures, algorithms, functional programming, and web development.`,` love diving into the underlying mechanics of how things work and understanding the reasons behind certain approaches not just how they work, but why we do things a certain way. 
This deeper understanding helps me not only apply what I learn but also innovate and make informed decisions in my coding journey.`],uv=["bg-gradient-to-r from-purple-500 to-pink-500 text-white","bg-gradient-to-r from-blue-500 to-cyan-500 text-white","bg-gradient-to-r from-green-500 to-teal-500 text-white","bg-gradient-to-r from-orange-500 to-red-500 text-white","bg-gradient-to-r from-indigo-500 to-purple-500 text-white","bg-gradient-to-r from-pink-500 to-rose-500 text-white","bg-gradient-to-r from-cyan-500 to-blue-500 text-white","bg-gradient-to-r from-teal-500 to-green-500 text-white","bg-gradient-to-r from-yellow-500 to-orange-500 text-white","bg-gradient-to-r from-red-500 to-pink-500 text-white","bg-gradient-to-r from-violet-500 to-purple-500 text-white","bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"];function fv({topic:s,colorClass:e}){return A.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-200 ${e}`,children:s})}function dA(){return A.jsxs("div",{className:"max-w-3xl mx-auto p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-3xl shadow-2xl space-y-8 border border-gray-100 dark:border-gray-700",children:[A.jsxs("div",{className:"text-center mb-8",children:[A.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2",children:"About Me"}),A.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"})]}),A.jsx("div",{className:"bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700",children:A.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[0]})}),A.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700",children:[A.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4",children:ps[1]}),A.jsx("div",{className:"flex flex-wrap gap-2",children:cv.slice(0,4).map((s,e)=>A.jsx(fv,{topic:s,colorClass:uv[e]},s))})]}),A.jsxs("div",{className:"bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700",children:[A.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4",children:ps[2]}),A.jsx("div",{className:"flex flex-wrap gap-2",children:cv.slice(4).map((s,e)=>A.jsx(fv,{topic:s,colorClass:uv[e+4]},s))})]}),A.jsx("div",{className:"bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700",children:A.jsxs("div",{className:"flex items-start gap-4",children:[A.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center",children:A.jsx("span",{className:"text-2xl",children:"💻"})}),A.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[3]})]})}),A.jsx("div",{className:"bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700",children:A.jsxs("div",{className:"flex items-start gap-4",children:[A.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center",children:A.jsx("span",{className:"text-2xl",children:"🚀"})}),A.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[4]})]})}),A.jsx("div",{className:"bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700",children:A.jsxs("div",{className:"flex items-start gap-4",children:[A.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center",children:A.jsx("span",{className:"text-2xl",children:"🧠"})}),A.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[5]})]})}),A.jsx("div",{className:"flex justify-center mt-8",children:A.jsxs("div",{className:"flex space-x-2",children:[A.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full animate-pulse"}),A.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"}),A.jsx("div",{className:"w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"})]})})]})}function hA(){return A.jsx("div",{className:"px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-12",children:A.jsxs("div",{className:"flex flex-col xl:flex-row xl:gap-8 gap-8 items-start justify-center",children:[A.jsxs("div",{className:"w-full xl:w-[30%] flex flex-col items-center space-y-6",children:[A.jsx("div",{className:"transform hover:scale-105 transition-transform duration-300",children:A.jsx(uA,{title:lv.title,description:fA,image:lv.image})}),A.jsxs("div",{className:"w-full max-w-sm text-center",children:[A.jsx("div",{className:"flex items-center justify-center mb-4",children:A.jsx("img",{src:"https://images.credly.com/images/32d4008d-1fa0-4a79-8375-4857b0306dc5/blob.png",alt:"Credly",className:"h-16"})}),A.jsx("h3",{className:"text-lg font-bold text-gray-800 dark:text-white mb-2",children:"Digital Credentials"}),A.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm mb-4",children:"Verified professional certifications and achievements"}),A.jsxs("a",{href:"https://www.credly.com/users/your-username",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200",children:[A.jsx("span",{children:"View Badges"}),A.jsx("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})]}),A.jsx("div",{className:"w-full xl:w-[35%] flex justify-center",children:A.jsx(dA,{})}),A.jsxs("div",{className:"w-full xl:w-[35%] space-y-6",children:[A.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl shadow-2xl",children:[A.jsx("h3",{className:"text-xl font-bold text-white mb-4 text-center",children:"🌊 Interactive Hyperbolic Paraboloid"}),A.jsx(TT,{})]}),A.jsx(hy,{})]})]})})}const pA=[{id:"database",title:"Database & Cache / In-Memory Store",icon:A.jsx(Rc,{className:"w-5 h-5"}),color:"bg-blue-50 border-blue-200 dark:bg-blue-900 dark:border-blue-700",tools:[{name:"PostgreSQL",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{name:"MySQL",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{name:"MongoDB",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"Neo4j",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg"},{name:"Redis",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"}]},{id:"messaging",title:"Message Broker",icon:A.jsx(iA,{className:"w-5 h-5"}),color:"bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700",tools:[{name:"RabbitMQ",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg"},{name:"Apache Kafka",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"}]},{id:"backend",title:"Backend & APIs",icon:A.jsx(Es,{className:"w-5 h-5"}),color:"bg-purple-50 border-purple-200 dark:bg-purple-900 dark:border-purple-700",tools:[{name:"REST API",logoUrl:"https://raw.githubusercontent.com/Edgar-P-yan/restful-api-university/master/restful-api-logo.png",details:{frameworks:[{name:"Django REST",url:"https://www.django-rest-framework.org/",logo:"https://www.django-rest-framework.org/img/logo.png"},{name:"Fiber (Go)",url:"https://gofiber.io/",logo:"https://gofiber.io/assets/images/logo.svg"},{name:"Axum (Rust)",url:"https://github.com/tokio-rs/axum",logo:"https://pbs.twimg.com/profile_images/1039634366207414272/bC40df3r_400x400.jpg"}],description:"Backend frameworks I have hands-on experience with"}},{name:"gRPC",logoUrl:"https://grpc.io/img/logos/grpc-icon-color.png",details:{description:"",features:["Protocol Buffers","Streaming"]}},{name:"MQTT",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mqtt-hor.svg/2560px-Mqtt-hor.svg.png",details:{description:"",features:["Pub/Sub"]}},{name:"WebSocket",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/1200px-WebSocket_colored_logo.svg.png",details:{frameworks:[{name:"Django Channel",url:"https://channels.readthedocs.io/en/latest/",logo:"https://www.svgrepo.com/show/353657/django-icon.svg"},{name:"Gorilla Mux",url:"https://github.com/gorilla/mux",logo:"https://image.pngaaa.com/423/570423-middle.png"}]}}]},{id:"ide",title:"IDE & Editors",icon:A.jsx(Es,{className:"w-5 h-5"}),color:"bg-orange-50 border-orange-200 dark:bg-orange-900 dark:border-orange-700",tools:[{name:"VS Code",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:"Neovim",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg"},{name:"PyCharm",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"},{name:"Goland",logoUrl:"https://dl.flathub.org/media/com/jetbrains/GoLand/7a25094fb5fa7badba596ffc68741397/icons/128x128@2/com.jetbrains.GoLand.png"},{name:"Rustrover",logoUrl:"https://dl.flathub.org/media/com/jetbrains/RustRover/1ad940a2336d45649b8cc0cc195c988a/icons/128x128@2/com.jetbrains.RustRover.png"},{name:"Jupyter",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"},{name:"Google Colab",logoUrl:"https://colab.research.google.com/img/colab_favicon_256px.png"},{name:"Arduino IDE",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg"}]},{id:"cv",title:"Computer Vision",icon:A.jsx(kT,{className:"w-5 h-5"}),color:"bg-red-50 border-red-200 dark:bg-red-900 dark:border-red-700",tools:[{name:"PyTorch",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"},{name:"NumPy",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"},{name:"OpenCV",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"},{name:"Roboflow",logoUrl:"https://security.roboflow.com/api/share/d560a04b-1859-4677-a8a3-e0a72dc70231/logo.png"},{name:"Pillow",logoUrl:"https://raw.githubusercontent.com/python-pillow/pillow-logo/main/pillow-logo-dark-text-1280x640.png"},{name:"Matplotlib",logoUrl:"https://miro.medium.com/v2/resize:fit:1200/1*Kzb1TcQsx4F12t-qsU7knA.png"}]},{id:"vcs",title:"Version Control",icon:A.jsx(qT,{className:"w-5 h-5"}),color:"bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600",tools:[{name:"Git",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"GitHub",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"GitLab",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"}]},{id:"cloud",title:"Cloud Platforms",icon:A.jsx(PT,{className:"w-5 h-5"}),color:"bg-sky-50 border-sky-200 dark:bg-sky-900 dark:border-sky-700",tools:[{name:"AWS",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",details:{services:["Lambda","CloudFormation","S3","EC2","SageMaker","API Gateway","RDS","DynamoDB"],description:"These are the AWS services I have worked with in real-world projects."}},{name:"Google Cloud",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",details:{services:["Cloud Storage (Bucket)","Compute Engine"],description:"These are the GCP services I have worked with in real-world projects"}}]},{id:"container",title:"Containerization",icon:A.jsx(BT,{className:"w-5 h-5"}),color:"bg-cyan-50 border-cyan-200 dark:bg-cyan-900 dark:border-cyan-700",tools:[{name:"Containerd",logoUrl:"https://containerd.io/img/logos/footer-logo.png"},{name:"Docker",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"Kubernetes",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"}]},{id:"cicd",title:"CI/CD & Build Tools",icon:A.jsx(oA,{className:"w-5 h-5"}),color:"bg-indigo-50 border-indigo-200 dark:bg-indigo-900 dark:border-indigo-700",tools:[{name:"Jenkins",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"},{name:"Makefile",logoUrl:"https://static-00.iconduck.com/assets.00/file-type-makefile-icon-2048x2000-kjmtrypc.png"}]}];function mA({tool:s,categoryId:e,index:i,isHovered:r,onHover:l,onLeave:u,color:d}){const h=`${e}-${i}`;return A.jsxs("div",{className:`${d} rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group/item cursor-pointer relative`,onMouseEnter:()=>l(h),onMouseLeave:u,children:[A.jsxs("div",{className:"flex flex-col items-center text-center space-y-2",children:[A.jsx("div",{className:"w-12 h-12 flex items-center justify-center",children:A.jsx("img",{src:s.logoUrl,alt:`${s.name} logo`,className:"max-w-full max-h-full object-contain transition-transform group-hover/item:scale-110",onError:p=>{p.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yNCAyMFYyOE0yMCAyNEgyOCIgc3Ryb2tlPSIjNmI3MjgwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=",p.target.alt=s.name}})}),A.jsx("span",{className:"text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight",children:s.name})]}),r&&s.details&&A.jsx(gA,{tool:s})]},h)}function gA({tool:s}){return A.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 animate-in fade-in zoom-in-95 duration-200",children:[A.jsxs("div",{className:"text-sm",children:[A.jsx("h4",{className:"font-semibold text-gray-900 dark:text-gray-100 mb-2",children:s.name}),A.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-3 text-xs leading-relaxed",children:s.details.description}),s.details.frameworks&&A.jsx(vA,{title:"Frameworks Used:",children:s.details.frameworks.map((e,i)=>A.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group/link",children:[A.jsx("img",{src:e.logo,alt:e.name,className:"w-5 h-5 object-contain",onError:r=>{r.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0xMCA2VjE0TTYgMTBIMTQiIHN0cm9rZT0iIzZiNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+"}}),A.jsx("span",{className:"text-xs font-medium text-gray-700 dark:text-gray-300 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400",children:e.name}),A.jsx("svg",{className:"w-3 h-3 text-gray-400 dark:text-gray-500 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]},i))}),s.details.services&&A.jsx(dv,{title:"Services Used:",tags:s.details.services,color:"blue"}),s.details.features&&A.jsx(dv,{title:"Key Features:",tags:s.details.features,color:"green"})]}),A.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"})]})}function vA({title:s,children:e}){return A.jsxs("div",{className:"mb-3",children:[A.jsx("h5",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1 text-xs",children:s}),A.jsx("div",{className:"space-y-2",children:e})]})}function dv({title:s,tags:e,color:i}){const r={blue:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",red:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",green:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",yellow:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",purple:"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",gray:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"},l=r[i]||r.gray;return A.jsxs("div",{className:"mb-3",children:[A.jsx("h5",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1 text-xs",children:s}),A.jsx("div",{className:"flex flex-wrap gap-1",children:e.map((u,d)=>A.jsx("span",{className:`px-2 py-1 ${l} rounded text-xs font-medium`,children:u},d))})]})}function _A({category:s,hoveredTool:e,onHover:i,onLeave:r}){return A.jsxs("div",{className:"group",children:[A.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[A.jsx("div",{className:`p-2 rounded-lg ${s.color}`,children:s.icon}),A.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors",children:s.title}),A.jsx("div",{className:"flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent ml-4"})]}),A.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3",children:s.tools.map((l,u)=>A.jsx(mA,{tool:l,categoryId:s.id,index:u,isHovered:e===`${s.id}-${u}`,onHover:i,onLeave:r,color:s.color},u))})]},s.id)}function xA(){const[s,e]=Ct.useState(null);return A.jsx("div",{className:"min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900",children:A.jsxs("div",{className:"container mx-auto px-4 py-8",children:[A.jsxs("div",{className:"mb-8 text-center",children:[A.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4",children:"Development Tools"}),A.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"These are the tools I'm most comfortable with and rely on regularly when building, testing, and shipping applications."})]}),A.jsx("div",{className:"space-y-8",children:pA.map(i=>A.jsx(_A,{category:i,hoveredTool:s,onHover:e,onLeave:()=>e(null)},i.id))})]})})}const yA=({language:s,index:e,getProficiencyLevel:i})=>{const r=i(s.proficiency);return A.jsxs("div",{className:`
        group relative 
        bg-white/70 dark:bg-gray-800/70 
        backdrop-blur-sm rounded-2xl p-6 
        shadow-lg border border-white/20 dark:border-gray-700 
        transition-all duration-500 
        hover:scale-105 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-900/90
      `,style:{animationDelay:`${e*100}ms`},children:[A.jsx("div",{className:`
          absolute inset-0 bg-gradient-to-r ${s.color} 
          rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300
        `}),A.jsx("div",{className:"flex items-center justify-center mb-6 relative",children:A.jsx("div",{className:"relative p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300",children:A.jsx("img",{src:s.logoUrl,alt:`${s.name} logo`,className:"h-12 w-auto group-hover:scale-110 transition-transform duration-300"})})}),A.jsx("h3",{className:"text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white",children:s.name}),A.jsx("div",{className:"flex justify-center mb-4",children:A.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold ${r.color} bg-gray-100 dark:bg-gray-700`,children:r.level})}),A.jsxs("div",{className:"mb-6",children:[A.jsxs("div",{className:"flex justify-between items-center mb-2",children:[A.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Proficiency"}),A.jsxs("span",{className:"text-sm font-bold text-gray-900 dark:text-gray-100",children:[s.proficiency,"%"]})]}),A.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden",children:A.jsx("div",{className:`h-full bg-gradient-to-r ${s.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`,style:{width:`${s.proficiency}%`,animationDelay:`${e*200}ms`}})})]}),A.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300",children:s.description}),A.jsx("div",{className:`
          absolute -inset-0.5 bg-gradient-to-r ${s.color} 
          rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10
        `})]},s.id)},Uo=[{id:1,name:"Python",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",proficiency:75,description:"I know about basic syntax, data types, control flow, functions, and modules. I have experience with libraries like NumPy, Pandas, SciPy, OpenCV, Pytorch, and Matplotlib. I also have some experience with web frameworks like FastAPI and Django.",color:"from-blue-500 to-green-500"},{id:2,name:"JavaScript",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",proficiency:40,description:"I have a good understanding of JavaScript, and a little bit of ES6 ECMA6. I have used frameworks like React and Vue.js for building UI.",color:"from-yellow-400 to-orange-500"},{id:3,name:"Go",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",proficiency:60,description:"Basic syntax, structs, pointers, methods, generics, goroutines, interfaces, channels, and mutexes, alongside practical experience with the Fiber and Gorilla Mux frameworks and file system I/O",color:"from-cyan-400 to-blue-600"},{id:4,name:"Bash & Shell Script",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/1200px-Gnu-bash-logo.svg.png",proficiency:25,description:`Proficient in Bash and shell scripting for Linux, 
        automating tasks like file manipulation, 
        cron job scheduling, 
        and dynamic file generation to optimize workflows.`,color:"from-green-500 to-emerald-600"},{id:5,name:"C",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",proficiency:25,description:`Hands-on experience utilizing POSIX unistd.h and the GNU C Library (glibc) for low-level file system interactions, 
        memory allocation, and process management.`,color:"from-gray-600 to-blue-800"},{id:6,name:"Rust",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",proficiency:40,description:`
        Familiar with Rust's core syntax, 
        algebraic data types, and Cargo package management. 
        Actively developing proficiency in Rust's ownership and borrowing system
        `,color:"from-orange-600 to-red-600"}],hv=s=>s>=90?{level:"Expert",color:"text-emerald-600"}:s>=80?{level:"Advanced",color:"text-blue-600"}:s>=60?{level:"Intermediate",color:"text-yellow-600"}:{level:"Beginner",color:"text-orange-600"};function SA(){return A.jsx("div",{className:`min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-20 
            dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/50 space-y-8`,children:A.jsxs("div",{className:"max-w-7xl mx-auto",children:[A.jsxs("div",{className:"text-center mb-12",children:[A.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4",children:"Programming Skills"}),A.jsx("p",{className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"A showcase of my programming language proficiency and experience"})]}),A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:Uo.map((s,e)=>(hv(s.proficiency),A.jsx(yA,{language:s,index:e,getProficiencyLevel:hv},s.id)))}),A.jsx("div",{className:"mt-16 text-center",children:A.jsxs("div",{className:"inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg",children:[A.jsxs("div",{className:"text-center",children:[A.jsx("div",{className:"text-2xl font-bold text-blue-600",children:Uo.length}),A.jsx("div",{className:"text-sm text-gray-600",children:"Languages"})]}),A.jsx("div",{className:"w-px h-8 bg-gray-300"}),A.jsxs("div",{className:"text-center",children:[A.jsxs("div",{className:"text-2xl font-bold text-green-600",children:[Math.round(Uo.reduce((s,e)=>s+e.proficiency,0)/Uo.length),"%"]}),A.jsx("div",{className:"text-sm text-gray-600",children:"Avg. Proficiency"})]}),A.jsx("div",{className:"w-px h-8 bg-gray-300"}),A.jsxs("div",{className:"text-center",children:[A.jsx("div",{className:"text-2xl font-bold text-purple-600",children:Uo.filter(s=>s.proficiency>=80).length}),A.jsx("div",{className:"text-sm text-gray-600",children:"Advanced+"})]})]})})]})})}function MA(){return A.jsx(A.Fragment,{children:A.jsxs("div",{className:"text-center",children:[A.jsx(xA,{}),A.jsx(SA,{})]})})}const bA={Django:{icon:rA,color:"text-green-600"},Vue:{icon:wc,color:"text-green-500"},"Vue 3":{icon:wc,color:"text-green-500"},Fiber:{icon:Es,color:"text-blue-500"},Go:{icon:Es,color:"text-blue-600"},Websocket:{icon:Rc,color:"text-orange-500"},"Nuxt 3":{icon:wc,color:"text-green-400"},OAuth:{icon:cA,color:"text-red-500"},REST:{icon:Rc,color:"text-purple-500"},API:{icon:Rc,color:"text-indigo-500"}},EA=[{id:1,title:"Lend System",description:"A comprehensive system for lending and borrowing items. Built with Django Rest Framework and Vue 3, featuring a monolithic architecture with REST API integration. Perfect for managing item loans with user authentication and tracking.",image:"https://picsum.photos/seed/lend/400/250",githubURL:"https://github.com/PatiphanAK/lend_sys",techStack:["Django","Vue 3","REST","API"],status:"Legacy",category:"Full Stack"},{id:2,title:"Quiz App",description:"An interactive quiz application inspired by Kahoot. Developed with Go Fiber backend, Gorilla WebSocket for real-time interactions, and Nuxt 3 frontend. Features Google OAuth2.0 authentication with secure HTTP cookie implementation.",image:"assets/project/quiz.png",githubURL:"https://github.com/PatiphanAK/leauge-of-quiz",techStack:["Go","Fiber","Websocket","Nuxt 3","OAuth"],status:"Active",category:"Real-time App"}];function TA({project:s}){const[e,i]=Ct.useState(!1);return A.jsxs("div",{className:"group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[A.jsx("div",{className:"absolute top-4 right-4 z-20",children:A.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${s.status==="Active"?"bg-green-100 text-green-700 border border-green-200":"bg-orange-100 text-orange-700 border border-orange-200"}`,children:s.status})}),A.jsxs("div",{className:"relative h-48 overflow-hidden",children:[A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"}),A.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"}),A.jsx("div",{className:"absolute bottom-4 left-4 z-20",children:A.jsx("span",{className:"px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800",children:s.category})})]}),A.jsxs("div",{className:"p-6 space-y-4",children:[A.jsx("h3",{className:"text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300",children:s.title}),A.jsx("p",{className:"text-gray-600 text-sm leading-relaxed line-clamp-4",children:s.description}),A.jsxs("div",{className:"space-y-3",children:[A.jsxs("h4",{className:"text-sm font-semibold text-gray-700 flex items-center gap-2",children:[A.jsx(Es,{className:"w-4 h-4"}),"Tech Stack"]}),A.jsx("div",{className:"flex flex-wrap gap-2",children:s.techStack.map((r,l)=>{const u=bA[r]||{icon:Es,color:"text-gray-600"},d=u.icon;return A.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200",style:{transform:e?"translateY(0)":"translateY(5px)",opacity:e?1:.8,transitionDelay:`${l*50}ms`},children:[A.jsx(d,{className:`w-4 h-4 ${u.color}`}),A.jsx("span",{className:"text-xs font-medium text-gray-700",children:r})]},l)})})]}),A.jsxs("div",{className:"flex gap-3 pt-4",children:[A.jsxs("a",{href:s.githubURL,target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105",children:[A.jsx(ZT,{className:"w-4 h-4"}),A.jsx("span",{children:"View Code"})]}),A.jsx("button",{className:"flex items-center justify-center px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105",children:A.jsx(GT,{className:"w-4 h-4"})})]})]}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"})]})}function AA(){return A.jsxs("div",{className:"py-16 px-4 bg-gradient-to-br from-slate-50 to-white",children:[A.jsxs("div",{className:"max-w-7xl mx-auto",children:[A.jsxs("div",{className:"text-center mb-16",children:[A.jsxs("div",{className:"inline-flex items-center gap-3 mb-6",children:[A.jsx("div",{className:"p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg",children:A.jsx(wc,{className:"w-8 h-8 text-white"})}),A.jsx("h2",{className:"text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"Featured Projects"})]}),A.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed",children:"Showcasing my journey through different technologies and frameworks"})]}),A.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:EA.map((s,e)=>A.jsx("div",{style:{animationDelay:`${e*200}ms`,opacity:0,animation:"fadeInUp 0.8s ease forwards"},children:A.jsx(TA,{project:s})},s.id))}),A.jsx("div",{className:"text-center mt-16",children:A.jsxs("div",{className:"inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-200",children:[A.jsx(Wv,{className:"w-5 h-5 text-indigo-500"}),A.jsx("span",{className:"text-gray-700 font-medium",children:"More projects coming soon..."})]})})]}),A.jsx("style",{jsx:!0,children:`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .line-clamp-4 {
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `})]})}const RA=[{id:1,image:"https://cmms.kmitl.ac.th/uploads/uploads/9b5d8ffe-78d9-463b-9286-f66f27e0d91b-1686793377632.png",degrees:"Bachelor of Science in Information Technology",school:"School of Information Technology, King Mongkut's Institute of Technology Ladkrabang",year:"2022 - Present",details:["Major in Information Technology","Minor in Software Development"]}];function wA({image:s,degrees:e,school:i,year:r,gpa:l,details:u}){const[d,h]=Ct.useState(!1);return A.jsxs("div",{className:"group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 hover:border-indigo-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[A.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),A.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"}),A.jsx("div",{className:"relative p-8",children:A.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start",children:[A.jsxs("div",{className:"relative flex-shrink-0 group/logo",children:[A.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"}),A.jsx("div",{className:"relative bg-white p-6 rounded-2xl shadow-lg border border-slate-200/50 group-hover:shadow-xl transition-all duration-500",children:A.jsx("img",{src:s||"/api/placeholder/200/200",alt:`${i} logo`,className:"w-24 h-24 lg:w-32 lg:h-32 object-contain transform group-hover/logo:scale-105 transition-transform duration-500"})})]}),A.jsxs("div",{className:"flex-grow space-y-4",children:[A.jsx("div",{className:"space-y-2",children:A.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[A.jsx("div",{className:"p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg",children:A.jsx(qv,{className:"w-5 h-5 text-white"})}),A.jsx("h3",{className:"text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight",children:e})]})}),A.jsxs("div",{className:"flex items-start gap-3",children:[A.jsx("div",{className:"p-2 bg-slate-100 rounded-lg",children:A.jsx(ov,{className:"w-4 h-4 text-slate-600"})}),A.jsx("p",{className:"text-lg text-slate-700 font-medium leading-relaxed",children:i})]}),A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"p-2 bg-emerald-100 rounded-lg",children:A.jsx(Wv,{className:"w-4 h-4 text-emerald-600"})}),A.jsx("span",{className:"text-slate-600 font-medium px-4 py-2 bg-slate-100 rounded-full text-sm",children:r})]}),l&&A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"p-2 bg-amber-100 rounded-lg",children:A.jsx(ov,{className:"w-4 h-4 text-amber-600"})}),A.jsxs("span",{className:"text-amber-700 font-bold text-lg",children:["GPA ",l]})]}),u&&u.length>0&&A.jsxs("div",{className:"space-y-3 pt-4",children:[A.jsxs("h4",{className:"text-slate-700 font-semibold flex items-center gap-2",children:[A.jsx("div",{className:"w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"}),"Specializations"]}),A.jsx("div",{className:"grid gap-2",children:u.map((p,m)=>A.jsxs("div",{className:"flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:border-indigo-200 hover:bg-white/80 transition-all duration-300 group/detail",style:{animationDelay:`${m*100}ms`,opacity:d?1:.8,transform:d?"translateX(0)":"translateX(-10px)",transition:"all 0.3s ease"},children:[A.jsx(LT,{className:"w-4 h-4 text-indigo-500 group-hover/detail:text-purple-500 transition-colors duration-300"}),A.jsx("span",{className:"text-slate-700 font-medium",children:p})]},m))})]})]})]})})]})}function CA(){return A.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-16 px-4",children:[A.jsxs("div",{className:"max-w-4xl mx-auto text-center mb-16",children:[A.jsxs("div",{className:"inline-flex items-center gap-3 mb-6",children:[A.jsx("div",{className:"p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg",children:A.jsx(qv,{className:"w-8 h-8 text-white"})}),A.jsx("h2",{className:"text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"My Education"})]}),A.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed",children:"Pursuing excellence in technology and innovation through dedicated academic journey"})]}),A.jsx("div",{className:"max-w-5xl mx-auto space-y-8",children:RA.map((s,e)=>A.jsx("div",{style:{animationDelay:`${e*200}ms`,opacity:0,animation:"fadeInUp 0.8s ease forwards"},children:A.jsx(wA,{image:s.image,degrees:s.degrees,school:s.school,year:s.year,gpa:s.gpa,details:s.details})},s.id))}),A.jsx("div",{className:"fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"}),A.jsx("div",{className:"fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none"}),A.jsx("style",{jsx:!0,children:`
              @keyframes fadeInUp {
                  from {
                      opacity: 0;
                      transform: translateY(30px);
                  }
                  to {
                      opacity: 1;
                      transform: translateY(0);
                  }
              }
          `})]})}const DA=[{id:1,platform:"Email",icon:tA,contact:"pakkahadsri@gmail.com",color:"from-red-500 to-pink-600",hoverColor:"hover:from-red-600 hover:to-pink-700"},{id:2,platform:"LinkedIn",icon:$T,contact:"https://www.linkedin.com/in/patiphan-akkahadsri-959535271/",color:"from-blue-500 to-indigo-600",hoverColor:"hover:from-blue-600 hover:to-indigo-700"},{id:3,platform:"Facebook",icon:XT,contact:"https://www.facebook.com/profile.php?id=100009448836193&locale=th_TH",color:"from-blue-600 to-purple-600",hoverColor:"hover:from-blue-700 hover:to-purple-700"}];function UA(){const s=async(e,i)=>{e.preventDefault();try{await navigator.clipboard.writeText(i)}catch{window.location.href=`mailto:${i}`}};return A.jsx("div",{className:"py-8 px-4",children:A.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[A.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Let's Connect"}),A.jsx("div",{className:"flex justify-center items-center gap-6",children:DA.map(e=>{const i=e.icon,r=!e.contact.startsWith("http");return A.jsxs("a",{href:e.contact.startsWith("http")?e.contact:`mailto:${e.contact}`,target:e.contact.startsWith("http")?"_blank":"_self",rel:"noopener noreferrer",onClick:r?l=>s(l,e.contact):void 0,className:"group relative p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-gray-200",title:e.platform,children:[A.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${e.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}),A.jsx("div",{className:`relative p-3 bg-gradient-to-r ${e.color} ${e.hoverColor} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`,children:A.jsx(i,{className:"w-6 h-6 text-white"})})]},e.id)})}),A.jsx("p",{className:"text-sm text-gray-500 mt-6",children:"Feel free to reach out anytime! 🚀"})]})})}const NA=[{id:"home",component:A.jsx(cy,{})},{id:"about",component:A.jsx(hA,{})},{id:"skill",component:A.jsx(MA,{})},{id:"project",component:A.jsx(AA,{})},{id:"education",component:A.jsx(CA,{})},{id:"contact",component:A.jsx(UA,{})}];function LA(){return A.jsxs(A.Fragment,{children:[A.jsx(oy,{}),A.jsx("main",{className:"scroll-smooth",children:NA.map(({id:s,component:e})=>A.jsx("section",{id:s,className:s==="home"?"":"py-8",children:e},s))})]})}sy.createRoot(document.getElementById("root")).render(A.jsx(Ct.StrictMode,{children:A.jsx(LA,{})}));
