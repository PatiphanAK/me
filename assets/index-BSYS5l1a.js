(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Kx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zf={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function Qx(){if(Zg)return yo;Zg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=t,yo.jsx=i,yo.jsxs=i,yo}var Kg;function Jx(){return Kg||(Kg=1,zf.exports=Qx()),zf.exports}var R=Jx(),Bf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function $x(){if(Qg)return re;Qg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(N,tt,xt){this.props=N,this.context=tt,this.refs=C,this.updater=xt||M}S.prototype.isReactComponent={},S.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=S.prototype;function z(N,tt,xt){this.props=N,this.context=tt,this.refs=C,this.updater=xt||M}var O=z.prototype=new v;O.constructor=z,T(O,S.prototype),O.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function B(N,tt,xt,St,J,mt){return xt=mt.ref,{$$typeof:s,type:N,key:tt,ref:xt!==void 0?xt:null,props:mt}}function X(N,tt){return B(N.type,tt,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function w(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return tt[xt]})}var V=/\/+/g;function lt(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):tt.toString(36)}function ot(){}function _t(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ot,ot):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ht(N,tt,xt,St,J){var mt=typeof N;(mt==="undefined"||mt==="boolean")&&(N=null);var Mt=!1;if(N===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(N.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=N._init,ht(Mt(N._payload),tt,xt,St,J)}}if(Mt)return J=J(N),Mt=St===""?"."+lt(N,0):St,U(J)?(xt="",Mt!=null&&(xt=Mt.replace(V,"$&/")+"/"),ht(J,tt,xt,"",function(oe){return oe})):J!=null&&(D(J)&&(J=X(J,xt+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+Mt)),tt.push(J)),1;Mt=0;var Rt=St===""?".":St+":";if(U(N))for(var Ct=0;Ct<N.length;Ct++)St=N[Ct],mt=Rt+lt(St,Ct),Mt+=ht(St,tt,xt,mt,J);else if(Ct=x(N),typeof Ct=="function")for(N=Ct.call(N),Ct=0;!(St=N.next()).done;)St=St.value,mt=Rt+lt(St,Ct++),Mt+=ht(St,tt,xt,mt,J);else if(mt==="object"){if(typeof N.then=="function")return ht(_t(N),tt,xt,St,J);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function I(N,tt,xt){if(N==null)return N;var St=[],J=0;return ht(N,St,"","",function(mt){return tt.call(xt,mt,J++)}),St}function K(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function bt(){}return re.Children={map:I,forEach:function(N,tt,xt){I(N,function(){tt.apply(this,arguments)},xt)},count:function(N){var tt=0;return I(N,function(){tt++}),tt},toArray:function(N){return I(N,function(tt){return tt})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=z,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return G.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,tt,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var St=T({},N.props),J=N.key,mt=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(mt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!F.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(St[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)St.children=xt;else if(1<Mt){for(var Rt=Array(Mt),Ct=0;Ct<Mt;Ct++)Rt[Ct]=arguments[Ct+2];St.children=Rt}return B(N.type,J,void 0,void 0,mt,St)},re.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,tt,xt){var St,J={},mt=null;if(tt!=null)for(St in tt.key!==void 0&&(mt=""+tt.key),tt)F.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(J[St]=tt[St]);var Mt=arguments.length-2;if(Mt===1)J.children=xt;else if(1<Mt){for(var Rt=Array(Mt),Ct=0;Ct<Mt;Ct++)Rt[Ct]=arguments[Ct+2];J.children=Rt}if(N&&N.defaultProps)for(St in Mt=N.defaultProps,Mt)J[St]===void 0&&(J[St]=Mt[St]);return B(N,mt,void 0,void 0,null,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:h,render:N}},re.isValidElement=D,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},re.memo=function(N,tt){return{$$typeof:m,type:N,compare:tt===void 0?null:tt}},re.startTransition=function(N){var tt=G.T,xt={};G.T=xt;try{var St=N(),J=G.S;J!==null&&J(xt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(bt,Y)}catch(mt){Y(mt)}finally{G.T=tt}},re.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},re.use=function(N){return G.H.use(N)},re.useActionState=function(N,tt,xt){return G.H.useActionState(N,tt,xt)},re.useCallback=function(N,tt){return G.H.useCallback(N,tt)},re.useContext=function(N){return G.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,tt){return G.H.useDeferredValue(N,tt)},re.useEffect=function(N,tt,xt){var St=G.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(N,tt)},re.useId=function(){return G.H.useId()},re.useImperativeHandle=function(N,tt,xt){return G.H.useImperativeHandle(N,tt,xt)},re.useInsertionEffect=function(N,tt){return G.H.useInsertionEffect(N,tt)},re.useLayoutEffect=function(N,tt){return G.H.useLayoutEffect(N,tt)},re.useMemo=function(N,tt){return G.H.useMemo(N,tt)},re.useOptimistic=function(N,tt){return G.H.useOptimistic(N,tt)},re.useReducer=function(N,tt,xt){return G.H.useReducer(N,tt,xt)},re.useRef=function(N){return G.H.useRef(N)},re.useState=function(N){return G.H.useState(N)},re.useSyncExternalStore=function(N,tt,xt){return G.H.useSyncExternalStore(N,tt,xt)},re.useTransition=function(){return G.H.useTransition()},re.version="19.1.0",re}var Jg;function uh(){return Jg||(Jg=1,Bf.exports=$x()),Bf.exports}var Ce=uh();const fh=Kx(Ce);var Ff={exports:{}},So={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function ty(){return $g||($g=1,function(s){function t(I,K){var Y=I.length;I.push(K);t:for(;0<Y;){var bt=Y-1>>>1,N=I[bt];if(0<l(N,K))I[bt]=K,I[Y]=N,Y=bt;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var K=I[0],Y=I.pop();if(Y!==K){I[0]=Y;t:for(var bt=0,N=I.length,tt=N>>>1;bt<tt;){var xt=2*(bt+1)-1,St=I[xt],J=xt+1,mt=I[J];if(0>l(St,Y))J<N&&0>l(mt,St)?(I[bt]=mt,I[J]=Y,bt=J):(I[bt]=St,I[xt]=Y,bt=xt);else if(J<N&&0>l(mt,Y))I[bt]=mt,I[J]=Y,bt=J;else break t}}return K}function l(I,K){var Y=I.sortIndex-K.sortIndex;return Y!==0?Y:I.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,_=null,x=3,M=!1,T=!1,C=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=I)r(m),K.sortIndex=K.expirationTime,t(p,K);else break;K=i(m)}}function G(I){if(C=!1,U(I),!T)if(i(p)!==null)T=!0,F||(F=!0,lt());else{var K=i(m);K!==null&&ht(G,K.startTime-I)}}var F=!1,B=-1,X=5,D=-1;function w(){return S?!0:!(s.unstable_now()-D<X)}function V(){if(S=!1,F){var I=s.unstable_now();D=I;var K=!0;try{t:{T=!1,C&&(C=!1,z(B),B=-1),M=!0;var Y=x;try{e:{for(U(I),_=i(p);_!==null&&!(_.expirationTime>I&&w());){var bt=_.callback;if(typeof bt=="function"){_.callback=null,x=_.priorityLevel;var N=bt(_.expirationTime<=I);if(I=s.unstable_now(),typeof N=="function"){_.callback=N,U(I),K=!0;break e}_===i(p)&&r(p),U(I)}else r(p);_=i(p)}if(_!==null)K=!0;else{var tt=i(m);tt!==null&&ht(G,tt.startTime-I),K=!1}}break t}finally{_=null,x=Y,M=!1}K=void 0}}finally{K?lt():F=!1}}}var lt;if(typeof O=="function")lt=function(){O(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,_t=ot.port2;ot.port1.onmessage=V,lt=function(){_t.postMessage(null)}}else lt=function(){v(V,0)};function ht(I,K){B=v(function(){I(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Y=x;x=K;try{return I()}finally{x=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=x;x=I;try{return K()}finally{x=Y}},s.unstable_scheduleCallback=function(I,K,Y){var bt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?bt+Y:bt):Y=bt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,I={id:g++,callback:K,priorityLevel:I,startTime:Y,expirationTime:N,sortIndex:-1},Y>bt?(I.sortIndex=Y,t(m,I),i(p)===null&&I===i(m)&&(C?(z(B),B=-1):C=!0,ht(G,Y-bt))):(I.sortIndex=N,t(p,I),T||M||(T=!0,F||(F=!0,lt()))),I},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(I){var K=x;return function(){var Y=x;x=K;try{return I.apply(this,arguments)}finally{x=Y}}}}(Gf)),Gf}var t0;function ey(){return t0||(t0=1,Hf.exports=ty()),Hf.exports}var Vf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function ny(){if(e0)return wn;e0=1;var s=uh();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},wn.flushSync=function(p){var m=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=g,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var n0;function iy(){if(n0)return Vf.exports;n0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Vf.exports=ny(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function ay(){if(i0)return So;i0=1;var s=ey(),t=uh(),i=iy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===o)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,E=c.child;E;){if(E===a){y=!0,a=c,o=f;break}if(E===o){y=!0,o=c,a=f;break}E=E.sibling}if(!y){for(E=f.child;E;){if(E===a){y=!0,a=f,o=c;break}if(E===o){y=!0,o=f,a=c;break}E=E.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case O:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var ht=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},bt=[],N=-1;function tt(e){return{current:e}}function xt(e){0>N||(e.current=bt[N],bt[N]=null,N--)}function St(e,n){N++,bt[N]=e.current,e.current=n}var J=tt(null),mt=tt(null),Mt=tt(null),Rt=tt(null);function Ct(e,n){switch(St(Mt,n),St(mt,e),St(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=bg(n),e=Eg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(J),St(J,e)}function oe(){xt(J),xt(mt),xt(Mt)}function Qt(e){e.memoizedState!==null&&St(Rt,e);var n=J.current,a=Eg(n,e.type);n!==a&&(St(mt,e),St(J,a))}function Oe(e){mt.current===e&&(xt(J),xt(mt)),Rt.current===e&&(xt(Rt),mo._currentValue=Y)}var Fe=Object.prototype.hasOwnProperty,me=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,xn=s.unstable_shouldYield,Se=s.unstable_requestPaint,de=s.unstable_now,Vt=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,Yt=s.unstable_UserBlockingPriority,ae=s.unstable_NormalPriority,Je=s.unstable_LowPriority,L=s.unstable_IdlePriority,b=s.log,et=s.unstable_setDisableYieldValue,ft=null,pt=null;function ct(e){if(typeof b=="function"&&et(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var yt=256,It=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?c=Wt(o):(y&=E,y!==0?c=Wt(y):a||(a=E&~e,a!==0&&(c=Wt(a))))):(E=o&~f,E!==0?c=Wt(E):y!==0?c=Wt(y):a||(a=o&~e,a!==0&&(c=Wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var e=yt;return yt<<=1,(yt&4194048)===0&&(yt=256),e}function Nt(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=y&~a;0<a;){var ut=31-Pt(a),gt=1<<ut;E[ut]=0,P[ut]=-1;var nt=$[ut];if(nt!==null)for($[ut]=null,ut=0;ut<nt.length;ut++){var it=nt[ut];it!==null&&(it.lane&=-536870913)}a&=~gt}o!==0&&vt(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:kg(e.type))}function Vn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,yn="__reactProps$"+hn,On="__reactContainer$"+hn,ka="__reactEvents$"+hn,ko="__reactListeners$"+hn,jo="__reactHandles$"+hn,ja="__reactResources$"+hn,aa="__reactMarker$"+hn;function ra(e){delete e[on],delete e[yn],delete e[ka],delete e[ko],delete e[jo]}function Di(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[On]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=wg(e);e!==null;){if(a=e[on])return a;e=wg(e)}return n}e=a,a=e.parentNode}return null}function Ui(e){if(e=e[on]||e[On]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function sa(e){var n=e[ja];return n||(n=e[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[aa]=!0}var Xo=new Set,Wo={};function Ni(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Wo[e]=n,e=0;e<n.length;e++)Xo.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function Z(e){return Fe.call(rt,e)?!0:Fe.call(at,e)?!1:q.test(e)?rt[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Dt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bt,$t;function Zt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+$t}var jt=!1;function ce(e,n){if(!e||jt)return"";jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var nt=it}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(it){nt=it}e.call(gt.prototype)}}else{try{throw Error()}catch(it){nt=it}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],E=f[1];if(y&&E){var P=y.split(`
`),$=E.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{jt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function Ae(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Zt("Activity");default:return""}}function Ve(e){try{var n="";do n+=Ae(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e){var n=_e(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){e._valueTracker||(e._valueTracker=Kt(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=_e(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var oa=/[\n"\\]/g;function ke(e){return e.replace(oa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(e,n,a,o,c,f,y,E){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ve(n)):e.value!==""+ve(n)&&(e.value=""+ve(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?An(e,y,ve(n)):a!=null?An(e,y,ve(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+ve(E):e.removeAttribute("name")}function He(e,n,a,o,c,f,y,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function An(e,n,a){n==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ve(a):""}function Sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ve(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function _i(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Eh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&bh(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&bh(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return Zv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ic=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Er=null;function Th(e){var n=Ui(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Li(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[yn]||null;if(!c)throw Error(r(90));Li(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Me(o)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Bc=!1;function Ah(e,n,a){if(Bc)return e(n,a);Bc=!0;try{var o=e(n);return o}finally{if(Bc=!1,(br!==null||Er!==null)&&(Nl(),br&&(n=br,e=Er,Er=br=null,Th(n),e)))for(n=0;n<e.length;n++)Th(e[n])}}function Rs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Pi)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Fc=!1}var la=null,Hc=null,Yo=null;function Rh(){if(Yo)return Yo;var e,n=Hc,a=n.length,o,c="value"in la?la.value:la.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return Yo=c.slice(e,1<o?1-o:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function wh(){return!1}function Pn(e){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=Pn(Wa),Cs=g({},Wa,{view:0,detail:0}),Kv=Pn(Cs),Gc,Vc,Ds,Jo=g({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ds&&(Ds&&e.type==="mousemove"?(Gc=e.screenX-Ds.screenX,Vc=e.screenY-Ds.screenY):Vc=Gc=0,Ds=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),Ch=Pn(Jo),Qv=g({},Jo,{dataTransfer:0}),Jv=Pn(Qv),$v=g({},Cs,{relatedTarget:0}),kc=Pn($v),t_=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),e_=Pn(t_),n_=g({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i_=Pn(n_),a_=g({},Wa,{data:0}),Dh=Pn(a_),r_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=o_[e])?!!n[e]:!1}function jc(){return l_}var c_=g({},Cs,{key:function(e){if(e.key){var n=r_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u_=Pn(c_),f_=g({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=Pn(f_),d_=g({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),h_=Pn(d_),p_=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=Pn(p_),g_=g({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v_=Pn(g_),__=g({},Wa,{newState:0,oldState:0}),x_=Pn(__),y_=[9,13,27,32],Xc=Pi&&"CompositionEvent"in window,Us=null;Pi&&"documentMode"in document&&(Us=document.documentMode);var S_=Pi&&"TextEvent"in window&&!Us,Nh=Pi&&(!Xc||Us&&8<Us&&11>=Us),Lh=" ",Oh=!1;function Ph(e,n){switch(e){case"keyup":return y_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function M_(e,n){switch(e){case"compositionend":return Ih(n);case"keypress":return n.which!==32?null:(Oh=!0,Lh);case"textInput":return e=n.data,e===Lh&&Oh?null:e;default:return null}}function b_(e,n){if(Tr)return e==="compositionend"||!Xc&&Ph(e,n)?(e=Rh(),Yo=Hc=la=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var E_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!E_[e.type]:n==="textarea"}function Bh(e,n,a,o){br?Er?Er.push(o):Er=[o]:br=o,n=Bl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ns=null,Ls=null;function T_(e){_g(e,0)}function $o(e){var n=Xa(e);if(Me(n))return e}function Fh(e,n){if(e==="change")return n}var Hh=!1;if(Pi){var Wc;if(Pi){var qc="oninput"in document;if(!qc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),qc=typeof Gh.oninput=="function"}Wc=qc}else Wc=!1;Hh=Wc&&(!document.documentMode||9<document.documentMode)}function Vh(){Ns&&(Ns.detachEvent("onpropertychange",kh),Ls=Ns=null)}function kh(e){if(e.propertyName==="value"&&$o(Ls)){var n=[];Bh(n,Ls,e,zc(e)),Ah(T_,n)}}function A_(e,n,a){e==="focusin"?(Vh(),Ns=n,Ls=a,Ns.attachEvent("onpropertychange",kh)):e==="focusout"&&Vh()}function R_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Ls)}function w_(e,n){if(e==="click")return $o(n)}function C_(e,n){if(e==="input"||e==="change")return $o(n)}function D_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:D_;function Os(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Fe.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function jh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xh(e,n){var a=jh(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jh(a)}}function Wh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Tn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Tn(e.document)}return n}function Yc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var U_=Pi&&"documentMode"in document&&11>=document.documentMode,Ar=null,Zc=null,Ps=null,Kc=!1;function Yh(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Ar==null||Ar!==Tn(o)||(o=Ar,"selectionStart"in o&&Yc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ps&&Os(Ps,o)||(Ps=o,o=Bl(Zc,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ar)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Rr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Qc={},Zh={};Pi&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Ya(e){if(Qc[e])return Qc[e];if(!Rr[e])return e;var n=Rr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zh)return Qc[e]=n[a];return e}var Kh=Ya("animationend"),Qh=Ya("animationiteration"),Jh=Ya("animationstart"),N_=Ya("transitionrun"),L_=Ya("transitionstart"),O_=Ya("transitioncancel"),$h=Ya("transitionend"),tp=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function li(e,n){tp.set(e,n),Ni(n,[e])}var ep=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},ep.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var $n=[],wr=0,$c=0;function tl(){for(var e=wr,n=$c=wr=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&np(a,c,f)}}function el(e,n,a,o){$n[wr++]=e,$n[wr++]=n,$n[wr++]=a,$n[wr++]=o,$c|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function tu(e,n,a,o){return el(e,n,a,o),nl(e)}function Cr(e,n){return el(e,null,null,n),nl(e)}function np(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Pt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function nl(e){if(50<so)throw so=0,of=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function P_(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new P_(e,n,a,o)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ip(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function il(e,n,a,o,c,f){var y=0;if(o=e,typeof e=="function")eu(e)&&(y=1);else if(typeof e=="string")y=zx(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=jn(31,a,n,c),e.elementType=D,e.lanes=f,e;case T:return Za(a.children,c,f,n);case C:y=8,c|=24;break;case S:return e=jn(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case G:return e=jn(13,a,n,c),e.elementType=G,e.lanes=f,e;case F:return e=jn(19,a,n,c),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case O:y=10;break t;case z:y=9;break t;case U:y=11;break t;case B:y=14;break t;case X:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=jn(y,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function Za(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function nu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function iu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ur=[],Nr=0,al=null,rl=0,ti=[],ei=0,Ka=null,zi=1,Bi="";function Qa(e,n){Ur[Nr++]=rl,Ur[Nr++]=al,al=e,rl=n}function ap(e,n,a){ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Ka,Ka=e;var o=zi;e=Bi;var c=32-Pt(o)-1;o&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,zi=1<<32-Pt(n)+c|a<<c|o,Bi=f+e}else zi=1<<f|a<<c|o,Bi=e}function au(e){e.return!==null&&(Qa(e,1),ap(e,1,0))}function ru(e){for(;e===al;)al=Ur[--Nr],Ur[Nr]=null,rl=Ur[--Nr],Ur[Nr]=null;for(;e===Ka;)Ka=ti[--ei],ti[ei]=null,Bi=ti[--ei],ti[ei]=null,zi=ti[--ei],ti[ei]=null}var Nn=null,Ye=null,Re=!1,Ja=null,xi=!1,su=Error(r(519));function $a(e){var n=Error(r(418,""));throw Bs(Jn(n,e)),su}function rp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[yn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)pe(lo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),qe(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Sn(n,o.value,o.defaultValue,o.children),qe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Mg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Fl),n=!0):n=!1,n||$a(e)}function sp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Nn=Nn.return}}function Is(e){if(e!==Nn)return!1;if(!Re)return sp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bf(e.type,e.memoizedProps)),a=!a),a&&Ye&&$a(e),sp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ye=ui(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ye=null}}else n===27?(n=Ye,Ea(e.type)?(e=Rf,Rf=null,Ye=e):Ye=n):Ye=Nn?ui(e.stateNode.nextSibling):null;return!0}function zs(){Ye=Nn=null,Re=!1}function op(){var e=Ja;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),Ja=null),e}function Bs(e){Ja===null?Ja=[e]:Ja.push(e)}var ou=tt(null),tr=null,Fi=null;function ca(e,n,a){St(ou,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=ou.current,xt(ou)}function lu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function cu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),lu(f.return,a,e),o||(y=null);break t}f=E.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),lu(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Fs(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var E=c.type;kn(c.pendingProps.value,y.value)||(e!==null?e.push(E):e=[E])}}else if(c===Rt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}c=c.return}e!==null&&cu(n,e,a,o),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){tr=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return lp(tr,e)}function ol(e,n){return tr===null&&er(e),lp(e,n)}function lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var I_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},z_=s.unstable_scheduleCallback,B_=s.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new I_,data:new Map,refCount:0}}function Hs(e){e.refCount--,e.refCount===0&&z_(B_,function(){e.controller.abort()})}var Gs=null,fu=0,Lr=0,Or=null;function F_(e,n){if(Gs===null){var a=Gs=[];fu=0,Lr=pf(),Or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return fu++,n.then(cp,cp),n}function cp(){if(--fu===0&&Gs!==null){Or!==null&&(Or.status="fulfilled");var e=Gs;Gs=null,Lr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function H_(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var up=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&F_(e,n),up!==null&&up(e,n)};var nr=tt(null);function du(){var e=nr.current;return e!==null?e:je.pooledCache}function ll(e,n){n===null?St(nr,nr.current):St(nr,n.pool)}function fp(){var e=du();return e===null?null:{parent:cn._currentValue,pool:e}}var Vs=Error(r(460)),dp=Error(r(474)),cl=Error(r(542)),hu={then:function(){}};function hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ul(){}function pp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ul,ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e;default:if(typeof n.status=="string")n.then(ul,ul);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gp(e),e}throw ks=n,Vs}}var ks=null;function mp(){if(ks===null)throw Error(r(459));var e=ks;return ks=null,e}function gp(e){if(e===Vs||e===cl)throw Error(r(483))}var ua=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=nl(e),np(e,null,a),n}return el(e,o,n,a),nl(e)}function js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}function gu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vu=!1;function Xs(){if(vu){var e=Or;if(e!==null)throw e}}function Ws(e,n,a,o){vu=!1;var c=e.updateQueue;ua=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,$=P.next;P.next=null,y===null?f=$:y.next=$,y=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==y&&(E===null?ut.firstBaseUpdate=$:E.next=$,ut.lastBaseUpdate=P))}if(f!==null){var gt=c.baseState;y=0,ut=$=P=null,E=f;do{var nt=E.lane&-536870913,it=nt!==E.lane;if(it?(ye&nt)===nt:(o&nt)===nt){nt!==0&&nt===Lr&&(vu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ee=e,Jt=E;nt=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(ze,gt,nt);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(ze,gt,nt):ee,nt==null)break t;gt=g({},gt,nt);break t;case 2:ua=!0}}nt=E.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?($=ut=it,P=gt):ut=ut.next=it,y|=nt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;it=E,E=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(P=gt),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ya|=y,e.lanes=y,e.memoizedState=gt}}function vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function _p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vp(a[e],n)}var Pr=tt(null),fl=tt(0);function xp(e,n){e=qi,St(fl,e),St(Pr,n),qi=e|n.baseLanes}function _u(){St(fl,qi),St(Pr,Pr.current)}function xu(){qi=fl.current,xt(Pr),xt(fl)}var ha=0,ue=null,Pe=null,nn=null,dl=!1,Ir=!1,ir=!1,hl=0,qs=0,zr=null,G_=0;function $e(){throw Error(r(321))}function yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Su(e,n,a,o,c,f){return ha=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?nm:im,ir=!1,f=a(o,c),ir=!1,Ir&&(f=Sp(n,a,o,c)),yp(e),f}function yp(e){I.H=xl;var n=Pe!==null&&Pe.next!==null;if(ha=0,nn=Pe=ue=null,dl=!1,qs=0,zr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&sl(e)&&(mn=!0))}function Sp(e,n,a,o){ue=e;var c=0;do{if(Ir&&(zr=null),qs=0,Ir=!1,25<=c)throw Error(r(301));if(c+=1,nn=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Y_,f=n(a,o)}while(Ir);return f}function V_(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?Ys(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Mu(){var e=hl!==0;return hl=0,e}function bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Eu(e){if(dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dl=!1}ha=0,nn=Pe=ue=null,Ir=!1,qs=hl=0,zr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ue.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Pe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=nn===null?ue.memoizedState:nn.next;if(n!==null)nn=n,Pe=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},nn===null?ue.memoizedState=nn=e:nn=nn.next=e}return nn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(e){var n=qs;return qs+=1,zr===null&&(zr=[]),e=pp(zr,e,n),n=ue,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?nm:im),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ys(e);if(e.$$typeof===O)return Rn(e)}throw Error(r(438,String(e)))}function Au(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=an();return Ru(n,Pe,e)}function Ru(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=y=null,P=null,$=n,ut=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(ye&gt)===gt:(ha&gt)===gt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Lr&&(ut=!0);else if((ha&nt)===nt){$=$.next,nt===Lr&&(ut=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=gt,y=f):P=P.next=gt,ue.lanes|=nt,ya|=nt;gt=$.action,ir&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=nt,y=f):P=P.next=nt,ue.lanes|=gt,ya|=gt;$=$.next}while($!==null&&$!==n);if(P===null?y=f:P.next=E,!kn(f,e.memoizedState)&&(mn=!0,ut&&(a=Or,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function wu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);kn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Mp(e,n,a){var o=ue,c=an(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!kn((Pe||c).memoizedState,a);y&&(c.memoizedState=a,mn=!0),c=c.queue;var E=Tp.bind(null,o,c,e);if(Zs(2048,8,E,[e]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Br(9,gl(),Ep.bind(null,o,c,a,n),null),je===null)throw Error(r(349));f||(ha&124)!==0||bp(o,n,a)}return a}function bp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Tu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ep(e,n,a,o){n.value=a,n.getSnapshot=o,Ap(n)&&Rp(e)}function Tp(e,n,a){return a(function(){Ap(n)&&Rp(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Rp(e){var n=Cr(e,2);n!==null&&Zn(n,e,2)}function Cu(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),ir){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function wp(e,n,a,o){return e.baseState=a,Ru(e,Pe,typeof o=="function"?o:Gi)}function k_(e,n,a,o,c){if(_l(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Cp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Cp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=I.T,y={};I.T=y;try{var E=a(c,o),P=I.S;P!==null&&P(y,E),Dp(e,n,E)}catch($){Du(e,n,$)}finally{I.T=f}}else try{f=a(c,o),Dp(e,n,f)}catch($){Du(e,n,$)}}function Dp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Up(e,n,o)},function(o){return Du(e,n,o)}):Up(e,n,a)}function Up(e,n,a){n.status="fulfilled",n.value=a,Np(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cp(e,a)))}function Du(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Np(n),n=n.next;while(n!==o)}e.action=null}function Np(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lp(e,n){return n}function Op(e,n){if(Re){var a=je.formState;if(a!==null){t:{var o=ue;if(Re){if(Ye){e:{for(var c=Ye,f=xi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=ui(c.nextSibling),o=c.data==="F!";break t}}$a(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lp,lastRenderedState:n},a.queue=o,a=$p.bind(null,ue,o),o.dispatch=a,o=Cu(!1),f=Pu.bind(null,ue,!1,o.queue),o=In(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=k_.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Pp(e){var n=an();return Ip(n,Pe,e)}function Ip(e,n,a){if(n=Ru(e,n,Lp)[0],e=ml(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ys(n)}catch(y){throw y===Vs?cl:y}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Br(9,gl(),j_.bind(null,c,a),null)),[o,f,e]}function j_(e,n){e.action=n}function zp(e){var n=an(),a=Pe;if(a!==null)return Ip(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Br(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Tu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function gl(){return{destroy:void 0,resource:void 0}}function Bp(){return an().memoizedState}function vl(e,n,a,o){var c=In();o=o===void 0?null:o,ue.flags|=e,c.memoizedState=Br(1|n,gl(),a,o)}function Zs(e,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Pe!==null&&o!==null&&yu(o,Pe.memoizedState.deps)?c.memoizedState=Br(n,f,a,o):(ue.flags|=e,c.memoizedState=Br(1|n,f,a,o))}function Fp(e,n){vl(8390656,8,e,n)}function Hp(e,n){Zs(2048,8,e,n)}function Gp(e,n){return Zs(4,2,e,n)}function Vp(e,n){return Zs(4,4,e,n)}function kp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jp(e,n,a){a=a!=null?a.concat([e]):null,Zs(4,4,kp.bind(null,n,e),a)}function Uu(){}function Xp(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&yu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Wp(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&yu(n,o[1]))return o[0];if(o=e(),ir){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function Nu(e,n,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Zm(),ue.lanes|=e,ya|=e,a)}function qp(e,n,a,o){return kn(a,n)?a:Pr.current!==null?(e=Nu(e,a,o),kn(e,n)||(mn=!0),e):(ha&42)===0?(mn=!0,e.memoizedState=a):(e=Zm(),ue.lanes|=e,ya|=e,n)}function Yp(e,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=I.T,E={};I.T=E,Pu(e,!1,n,a);try{var P=c(),$=I.S;if($!==null&&$(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=H_(P,o);Ks(e,n,ut,Yn(e))}else Ks(e,n,o,Yn(e))}catch(gt){Ks(e,n,{then:function(){},status:"rejected",reason:gt},Yn())}finally{K.p=f,I.T=y}}function X_(){}function Lu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Zp(e).queue;Yp(e,c,n,Y,a===null?X_:function(){return Kp(e),a(o)})}function Zp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Kp(e){var n=Zp(e).next.queue;Ks(e,n,{},Yn())}function Ou(){return Rn(mo)}function Qp(){return an().memoizedState}function Jp(){return an().memoizedState}function W_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();e=fa(a);var o=da(n,e,a);o!==null&&(Zn(o,n,a),js(o,n,a)),n={cache:uu()},e.payload=n;return}n=n.return}}function q_(e,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},_l(e)?tm(n,a):(a=tu(e,n,a,o),a!==null&&(Zn(a,e,o),em(a,n,o)))}function $p(e,n,a){var o=Yn();Ks(e,n,a,o)}function Ks(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(e))tm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,E=f(y,a);if(c.hasEagerState=!0,c.eagerState=E,kn(E,y))return el(e,n,c,0),je===null&&tl(),!1}catch{}finally{}if(a=tu(e,n,c,o),a!==null)return Zn(a,e,o),em(a,n,o),!0}return!1}function Pu(e,n,a,o){if(o={lane:2,revertLane:pf(),action:o,hasEagerState:!1,eagerState:null,next:null},_l(e)){if(n)throw Error(r(479))}else n=tu(e,a,o,2),n!==null&&Zn(n,e,2)}function _l(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function tm(e,n){Ir=dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function em(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}var xl={readContext:Rn,use:pl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},nm={readContext:Rn,use:pl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Fp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,kp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(ir){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var c=a(n);if(ir){ct(!0);try{a(n)}finally{ct(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=q_.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=Cu(e);var n=e.queue,a=$p.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(e,n){var a=In();return Nu(a,e,n)},useTransition:function(){var e=Cu(!1);return e=Yp.bind(null,ue,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=In();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(ye&124)!==0||bp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Fp(Tp.bind(null,o,f,e),[e]),o.flags|=2048,Br(9,gl(),Ep.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=je.identifierPrefix;if(Re){var a=Bi,o=zi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=G_++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Op,useActionState:Op,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Au,useCacheRefresh:function(){return In().memoizedState=W_.bind(null,ue)}},im={readContext:Rn,use:pl,useCallback:Xp,useContext:Rn,useEffect:Hp,useImperativeHandle:jp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:ml,useRef:Bp,useState:function(){return ml(Gi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=an();return qp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=ml(Gi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=an();return wp(a,Pe,e,n)},useMemoCache:Au,useCacheRefresh:Jp},Y_={readContext:Rn,use:pl,useCallback:Xp,useContext:Rn,useEffect:Hp,useImperativeHandle:jp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:wu,useRef:Bp,useState:function(){return wu(Gi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=an();return Pe===null?Nu(a,e,n):qp(a,Pe.memoizedState,e,n)},useTransition:function(){var e=wu(Gi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Ou,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var a=an();return Pe!==null?wp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:Jp},Fr=null,Qs=0;function yl(e){var n=Qs;return Qs+=1,Fr===null&&(Fr=[]),pp(Fr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function am(e){var n=e._init;return n(e._payload)}function rm(e){function n(W,k){if(e){var Q=W.deletions;Q===null?(W.deletions=[k],W.flags|=16):Q.push(k)}}function a(W,k){if(!e)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function o(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function c(W,k){return W=Ii(W,k),W.index=0,W.sibling=null,W}function f(W,k,Q){return W.index=Q,e?(Q=W.alternate,Q!==null?(Q=Q.index,Q<k?(W.flags|=67108866,k):Q):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function y(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function E(W,k,Q,dt){return k===null||k.tag!==6?(k=nu(Q,W.mode,dt),k.return=W,k):(k=c(k,Q),k.return=W,k)}function P(W,k,Q,dt){var Ht=Q.type;return Ht===T?ut(W,k,Q.props.children,dt,Q.key):k!==null&&(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&am(Ht)===k.type)?(k=c(k,Q.props),Js(k,Q),k.return=W,k):(k=il(Q.type,Q.key,Q.props,null,W.mode,dt),Js(k,Q),k.return=W,k)}function $(W,k,Q,dt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=iu(Q,W.mode,dt),k.return=W,k):(k=c(k,Q.children||[]),k.return=W,k)}function ut(W,k,Q,dt,Ht){return k===null||k.tag!==7?(k=Za(Q,W.mode,dt,Ht),k.return=W,k):(k=c(k,Q),k.return=W,k)}function gt(W,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=nu(""+k,W.mode,Q),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return Q=il(k.type,k.key,k.props,null,W.mode,Q),Js(Q,k),Q.return=W,Q;case M:return k=iu(k,W.mode,Q),k.return=W,k;case X:var dt=k._init;return k=dt(k._payload),gt(W,k,Q)}if(ht(k)||lt(k))return k=Za(k,W.mode,Q,null),k.return=W,k;if(typeof k.then=="function")return gt(W,yl(k),Q);if(k.$$typeof===O)return gt(W,ol(W,k),Q);Sl(W,k)}return null}function nt(W,k,Q,dt){var Ht=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:E(W,k,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Ht?P(W,k,Q,dt):null;case M:return Q.key===Ht?$(W,k,Q,dt):null;case X:return Ht=Q._init,Q=Ht(Q._payload),nt(W,k,Q,dt)}if(ht(Q)||lt(Q))return Ht!==null?null:ut(W,k,Q,dt,null);if(typeof Q.then=="function")return nt(W,k,yl(Q),dt);if(Q.$$typeof===O)return nt(W,k,ol(W,Q),dt);Sl(W,Q)}return null}function it(W,k,Q,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(Q)||null,E(k,W,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return W=W.get(dt.key===null?Q:dt.key)||null,P(k,W,dt,Ht);case M:return W=W.get(dt.key===null?Q:dt.key)||null,$(k,W,dt,Ht);case X:var fe=dt._init;return dt=fe(dt._payload),it(W,k,Q,dt,Ht)}if(ht(dt)||lt(dt))return W=W.get(Q)||null,ut(k,W,dt,Ht,null);if(typeof dt.then=="function")return it(W,k,Q,yl(dt),Ht);if(dt.$$typeof===O)return it(W,k,Q,ol(k,dt),Ht);Sl(k,dt)}return null}function ee(W,k,Q,dt){for(var Ht=null,fe=null,Xt=k,te=k=0,vn=null;Xt!==null&&te<Q.length;te++){Xt.index>te?(vn=Xt,Xt=null):vn=Xt.sibling;var Ee=nt(W,Xt,Q[te],dt);if(Ee===null){Xt===null&&(Xt=vn);break}e&&Xt&&Ee.alternate===null&&n(W,Xt),k=f(Ee,k,te),fe===null?Ht=Ee:fe.sibling=Ee,fe=Ee,Xt=vn}if(te===Q.length)return a(W,Xt),Re&&Qa(W,te),Ht;if(Xt===null){for(;te<Q.length;te++)Xt=gt(W,Q[te],dt),Xt!==null&&(k=f(Xt,k,te),fe===null?Ht=Xt:fe.sibling=Xt,fe=Xt);return Re&&Qa(W,te),Ht}for(Xt=o(Xt);te<Q.length;te++)vn=it(Xt,W,te,Q[te],dt),vn!==null&&(e&&vn.alternate!==null&&Xt.delete(vn.key===null?te:vn.key),k=f(vn,k,te),fe===null?Ht=vn:fe.sibling=vn,fe=vn);return e&&Xt.forEach(function(Ca){return n(W,Ca)}),Re&&Qa(W,te),Ht}function Jt(W,k,Q,dt){if(Q==null)throw Error(r(151));for(var Ht=null,fe=null,Xt=k,te=k=0,vn=null,Ee=Q.next();Xt!==null&&!Ee.done;te++,Ee=Q.next()){Xt.index>te?(vn=Xt,Xt=null):vn=Xt.sibling;var Ca=nt(W,Xt,Ee.value,dt);if(Ca===null){Xt===null&&(Xt=vn);break}e&&Xt&&Ca.alternate===null&&n(W,Xt),k=f(Ca,k,te),fe===null?Ht=Ca:fe.sibling=Ca,fe=Ca,Xt=vn}if(Ee.done)return a(W,Xt),Re&&Qa(W,te),Ht;if(Xt===null){for(;!Ee.done;te++,Ee=Q.next())Ee=gt(W,Ee.value,dt),Ee!==null&&(k=f(Ee,k,te),fe===null?Ht=Ee:fe.sibling=Ee,fe=Ee);return Re&&Qa(W,te),Ht}for(Xt=o(Xt);!Ee.done;te++,Ee=Q.next())Ee=it(Xt,W,te,Ee.value,dt),Ee!==null&&(e&&Ee.alternate!==null&&Xt.delete(Ee.key===null?te:Ee.key),k=f(Ee,k,te),fe===null?Ht=Ee:fe.sibling=Ee,fe=Ee);return e&&Xt.forEach(function(Zx){return n(W,Zx)}),Re&&Qa(W,te),Ht}function ze(W,k,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Ht=Q.key;k!==null;){if(k.key===Ht){if(Ht=Q.type,Ht===T){if(k.tag===7){a(W,k.sibling),dt=c(k,Q.props.children),dt.return=W,W=dt;break t}}else if(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&am(Ht)===k.type){a(W,k.sibling),dt=c(k,Q.props),Js(dt,Q),dt.return=W,W=dt;break t}a(W,k);break}else n(W,k);k=k.sibling}Q.type===T?(dt=Za(Q.props.children,W.mode,dt,Q.key),dt.return=W,W=dt):(dt=il(Q.type,Q.key,Q.props,null,W.mode,dt),Js(dt,Q),dt.return=W,W=dt)}return y(W);case M:t:{for(Ht=Q.key;k!==null;){if(k.key===Ht)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(W,k.sibling),dt=c(k,Q.children||[]),dt.return=W,W=dt;break t}else{a(W,k);break}else n(W,k);k=k.sibling}dt=iu(Q,W.mode,dt),dt.return=W,W=dt}return y(W);case X:return Ht=Q._init,Q=Ht(Q._payload),ze(W,k,Q,dt)}if(ht(Q))return ee(W,k,Q,dt);if(lt(Q)){if(Ht=lt(Q),typeof Ht!="function")throw Error(r(150));return Q=Ht.call(Q),Jt(W,k,Q,dt)}if(typeof Q.then=="function")return ze(W,k,yl(Q),dt);if(Q.$$typeof===O)return ze(W,k,ol(W,Q),dt);Sl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(W,k.sibling),dt=c(k,Q),dt.return=W,W=dt):(a(W,k),dt=nu(Q,W.mode,dt),dt.return=W,W=dt),y(W)):a(W,k)}return function(W,k,Q,dt){try{Qs=0;var Ht=ze(W,k,Q,dt);return Fr=null,Ht}catch(Xt){if(Xt===Vs||Xt===cl)throw Xt;var fe=jn(29,Xt,null,W.mode);return fe.lanes=dt,fe.return=W,fe}finally{}}}var Hr=rm(!0),sm=rm(!1),ni=tt(null),yi=null;function pa(e){var n=e.alternate;St(un,un.current&1),St(ni,e),yi===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(yi=e)}function om(e){if(e.tag===22){if(St(un,un.current),St(ni,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else ma()}function ma(){St(un,un.current),St(ni,ni.current)}function Vi(e){xt(ni),yi===e&&(yi=null),xt(un)}var un=tt(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Af(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Iu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Yn(),c=fa(o);c.payload=n,a!=null&&(c.callback=a),n=da(e,c,o),n!==null&&(Zn(n,e,o),js(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Yn(),c=fa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(e,c,o),n!==null&&(Zn(n,e,o),js(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yn(),o=fa(a);o.tag=2,n!=null&&(o.callback=n),n=da(e,o,a),n!==null&&(Zn(n,e,a),js(n,e,a))}};function lm(e,n,a,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Os(a,o)||!Os(c,f):!0}function cm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&zu.enqueueReplaceState(n,n.state,null)}function ar(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function um(e){bl(e)}function fm(e){console.error(e)}function dm(e){bl(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function pm(e){return e=fa(e),e.tag=3,e}function mm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){hm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){hm(n,a,o),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function Z_(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return yi===null?cf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ff(e,o,c)),!1;case 22:return a.flags|=65536,o===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ff(e,o,c)),!1}throw Error(r(435,a.tag))}return ff(e,o,c),cf(),!1}if(Re)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==su&&(e=Error(r(422),{cause:o}),Bs(Jn(e,a)))):(o!==su&&(n=Error(r(423),{cause:o}),Bs(Jn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Jn(o,a),c=Bu(e.stateNode,o,c),gu(e,c),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:o});if(f=Jn(f,a),ro===null?ro=[f]:ro.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Bu(a.stateNode,o,e),gu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=pm(c),mm(c,e,a,o),gu(a,c),!1}a=a.return}while(a!==null);return!1}var gm=Error(r(461)),mn=!1;function Mn(e,n,a,o){n.child=e===null?sm(n,null,a,o):Hr(n,e.child,a,o)}function vm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var E in o)E!=="ref"&&(y[E]=o[E])}else y=o;return er(n),o=Su(e,n,a,y,f,c),E=Mu(),e!==null&&!mn?(bu(e,n,c),ki(e,n,c)):(Re&&E&&au(n),n.flags|=1,Mn(e,n,o,c),n.child)}function _m(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xm(e,n,f,o,c)):(e=il(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Wu(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(y,o)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=Ii(f,o),e.ref=n.ref,e.return=n,n.child=e}function xm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Os(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Wu(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return Fu(e,n,a,o,c)}function ym(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Sm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(n,f!==null?f.cachePool:null),f!==null?xp(n,f):_u(),om(n);else return n.lanes=n.childLanes=536870912,Sm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ll(n,f.cachePool),xp(n,f),ma(),n.memoizedState=null):(e!==null&&ll(n,null),_u(),ma());return Mn(e,n,c,a),n.child}function Sm(e,n,a,o){var c=du();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&ll(n,null),_u(),om(n),e!==null&&Fs(e,n,o,!0),null}function Tl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Fu(e,n,a,o,c){return er(n),a=Su(e,n,a,o,void 0,c),o=Mu(),e!==null&&!mn?(bu(e,n,c),ki(e,n,c)):(Re&&o&&au(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Mm(e,n,a,o,c,f){return er(n),n.updateQueue=null,a=Sp(n,o,a,c),yp(e),o=Mu(),e!==null&&!mn?(bu(e,n,f),ki(e,n,f)):(Re&&o&&au(n),n.flags|=1,Mn(e,n,a,f),n.child)}function bm(e,n,a,o,c){if(er(n),n.stateNode===null){var f=Dr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},pu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Dr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Iu(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&zu.enqueueReplaceState(f,f.state,null),Ws(n,o,f,c),Xs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,P=ar(a,E);f.props=P;var $=f.context,ut=a.contextType;y=Dr,typeof ut=="object"&&ut!==null&&(y=Rn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==y)&&cm(n,f,o,y),ua=!1;var nt=n.memoizedState;f.state=nt,Ws(n,o,f,c),Xs(),$=n.memoizedState,E||nt!==$||ua?(typeof gt=="function"&&(Iu(n,a,gt,o),$=n.memoizedState),(P=ua||lm(n,a,P,o,nt,$,y))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=y,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,mu(e,n),y=n.memoizedProps,ut=ar(a,y),f.props=ut,gt=n.pendingProps,nt=f.context,$=a.contextType,P=Dr,typeof $=="object"&&$!==null&&(P=Rn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==gt||nt!==P)&&cm(n,f,o,P),ua=!1,nt=n.memoizedState,f.state=nt,Ws(n,o,f,c),Xs();var it=n.memoizedState;y!==gt||nt!==it||ua||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof E=="function"&&(Iu(n,a,E,o),it=n.memoizedState),(ut=ua||lm(n,a,ut,o,nt,it,P)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=P,o=ut):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Tl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Hr(n,e.child,null,c),n.child=Hr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function Em(e,n,a,o){return zs(),n.flags|=256,Mn(e,n,a,o),n.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(e){return{baseLanes:e,cachePool:fp()}}function Vu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Tm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?pa(n):ma(),Re){var E=Ye,P;if(P=E){t:{for(P=E,E=xi;P.nodeType!==8;){if(!E){E=null;break t}if(P=ui(P.nextSibling),P===null){E=null;break t}}E=P}E!==null?(n.memoizedState={dehydrated:E,treeContext:Ka!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},P=jn(18,null,null,0),P.stateNode=E,P.return=n,n.child=P,Nn=n,Ye=null,P=!0):P=!1}P||$a(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Af(E)?n.lanes=32:n.lanes=536870912,null;Vi(n)}return E=o.children,o=o.fallback,c?(ma(),c=n.mode,E=Al({mode:"hidden",children:E},c),o=Za(o,c,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=Gu(a),c.childLanes=Vu(e,y,a),n.memoizedState=Hu,o):(pa(n),ku(n,E))}if(P=e.memoizedState,P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=ju(e,n,a)):n.memoizedState!==null?(ma(),n.child=e.child,n.flags|=128,n=null):(ma(),c=o.fallback,E=n.mode,o=Al({mode:"visible",children:o.children},E),c=Za(c,E,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Hr(n,e.child,null,a),o=n.child,o.memoizedState=Gu(a),o.childLanes=Vu(e,y,a),n.memoizedState=Hu,n=c);else if(pa(n),Af(E)){if(y=E.nextSibling&&E.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(r(419)),o.stack="",o.digest=y,Bs({value:o,source:null,stack:null}),n=ju(e,n,a)}else if(mn||Fs(e,n,a,!1),y=(a&e.childLanes)!==0,mn||y){if(y=je,y!==null&&(o=a&-a,o=(o&42)!==0?1:ne(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Cr(e,o),Zn(y,e,o),gm;E.data==="$?"||cf(),n=ju(e,n,a)}else E.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Ye=ui(E.nextSibling),Nn=n,Re=!0,Ja=null,xi=!1,e!==null&&(ti[ei++]=zi,ti[ei++]=Bi,ti[ei++]=Ka,zi=e.id,Bi=e.overflow,Ka=n),n=ku(n,o.children),n.flags|=4096);return n}return c?(ma(),c=o.fallback,E=n.mode,P=e.child,$=P.sibling,o=Ii(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Ii($,c):(c=Za(c,E,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=e.child.memoizedState,E===null?E=Gu(a):(P=E.cachePool,P!==null?($=cn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=fp(),E={baseLanes:E.baseLanes|a,cachePool:P}),c.memoizedState=E,c.childLanes=Vu(e,y,a),n.memoizedState=Hu,o):(pa(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function ku(e,n){return n=Al({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Al(e,n){return e=jn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ju(e,n,a){return Hr(n,e.child,null,a),e=ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Am(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),lu(e.return,n,a)}function Xu(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Rm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Mn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Am(e,a,n);else if(e.tag===19)Am(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(un,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Xu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ml(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Xu(n,!0,a,null,f);break;case"together":Xu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function K_(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ca(n,cn,e.memoizedState.cache),zs();break;case 27:case 5:Qt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tm(e,n,a):(pa(n),e=ki(e,n,a),e!==null?e.sibling:null);pa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Fs(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Rm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,ym(e,n,a);case 24:ca(n,cn,e.memoizedState.cache)}return ki(e,n,a)}function wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Wu(e,a)&&(n.flags&128)===0)return mn=!1,K_(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Re&&(n.flags&1048576)!==0&&ap(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")eu(o)?(e=ar(o,e),n.tag=1,n=bm(null,n,o,e,a)):(n.tag=0,n=Fu(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=vm(null,n,o,e,a);break t}else if(c===B){n.tag=14,n=_m(null,n,o,e,a);break t}}throw n=_t(o)||o,Error(r(306,n,""))}}return n;case 0:return Fu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ar(o,n.pendingProps),bm(e,n,o,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,mu(e,n),Ws(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ca(n,cn,o),o!==f.cache&&cu(n,[cn],a,!0),Xs(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Em(e,n,o,a);break t}else if(o!==c){c=Jn(Error(r(424)),n),Bs(c),n=Em(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=ui(e.firstChild),Nn=n,Re=!0,Ja=null,xi=!0,a=sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),o===c){n=ki(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return Tl(e,n),e===null?(a=Ng(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Hl(Mt.current).createElement(a),o[on]=n,o[yn]=e,En(o,a,e),en(o),n.stateNode=o):n.memoizedState=Ng(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Re&&(o=n.stateNode=Cg(n.type,n.pendingProps,Mt.current),Nn=n,xi=!0,c=Ye,Ea(n.type)?(Rf=c,Ye=ui(o.firstChild)):Ye=c),Mn(e,n,n.pendingProps.children,a),Tl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=o=Ye)&&(o=Ex(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Nn=n,Ye=ui(o.firstChild),xi=!1,c=!0):c=!1),c||$a(n)),Qt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,bf(c,f)?o=null:y!==null&&bf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Su(e,n,V_,null,null,a),mo._currentValue=c),Tl(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Ye)&&(a=Tx(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Nn=n,Ye=null,e=!0):e=!1),e||$a(n)),null;case 13:return Tm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Hr(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return vm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ca(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,er(n),c=Rn(c),o=o(c),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return _m(e,n,n.type,n.pendingProps,a);case 15:return xm(e,n,n.type,n.pendingProps,a);case 19:return Rm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Al(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ii(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return ym(e,n,a);case 24:return er(n),o=Rn(cn),e===null?(c=du(),c===null&&(c=je,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},pu(n),ca(n,cn,c)):((e.lanes&a)!==0&&(mu(e,n),Ws(n,null,null,a),Xs()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ca(n,cn,o)):(o=f.cache,ca(n,cn,o),o!==c.cache&&cu(n,[cn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function Cm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zg(n)){if(n=ni.current,n!==null&&((ye&4194048)===ye?yi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==yi))throw ks=hu,dp;e.flags|=8192}}function Rl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,jr|=n)}function $s(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Q_(e,n,a){var o=n.pendingProps;switch(ru(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Hi(cn),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Is(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,op())),We(n),null;case 26:return a=n.memoizedState,e===null?(ji(n),a!==null?(We(n),Cm(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ji(n),We(n),Cm(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==o&&ji(n),We(n),n.flags&=-16777217),null;case 27:Oe(n),a=Mt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=J.current,Is(n)?rp(n):(e=Cg(c,o,a),n.stateNode=e,ji(n))}return We(n),null;case 5:if(Oe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(e=J.current,Is(n))rp(n);else{switch(c=Hl(Mt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[on]=n,e[yn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Is(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Nn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Mg(e.nodeValue,a)),e||$a(n)}else e=Hl(e).createTextNode(o),e[on]=n,n.stateNode=e}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Is(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Vi(n),n):(Vi(n),null)}if(Vi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),We(n),null;case 4:return oe(),e===null&&_f(n.stateNode.containerInfo),We(n),null;case 10:return Hi(n.type),We(n),null;case 19:if(xt(un),c=n.memoizedState,c===null)return We(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)$s(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,$s(c,!1),e=f.updateQueue,n.updateQueue=e,Rl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ip(a,e),a=a.sibling;return St(un,un.current&1|2),n.child}e=e.sibling}c.tail!==null&&de()>Dl&&(n.flags|=128,o=!0,$s(c,!1),n.lanes=4194304)}else{if(!o)if(e=Ml(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Rl(n,e),$s(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return We(n),null}else 2*de()-c.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,o=!0,$s(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,e=un.current,St(un,o?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Vi(n),xu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(cn),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function J_(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(cn),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 13:if(Vi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(un),null;case 4:return oe(),null;case 10:return Hi(n.type),null;case 22:case 23:return Vi(n),xu(),e!==null&&xt(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(cn),null;case 25:return null;default:return null}}function Dm(e,n){switch(ru(n),n.tag){case 3:Hi(cn),oe();break;case 26:case 27:case 5:Oe(n);break;case 4:oe();break;case 13:Vi(n);break;case 19:xt(un);break;case 10:Hi(n.type);break;case 22:case 23:Vi(n),xu(),e!==null&&xt(nr);break;case 24:Hi(cn)}}function to(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(E){Ge(n,n.return,E)}}function ga(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,E=y.destroy;if(E!==void 0){y.destroy=void 0,c=n;var P=a,$=E;try{$()}catch(ut){Ge(c,P,ut)}}}o=o.next}while(o!==f)}}catch(ut){Ge(n,n.return,ut)}}function Um(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_p(n,a)}catch(o){Ge(e,e.return,o)}}}function Nm(e,n,a){a.props=ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ge(e,n,c)}}function Si(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function Lm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function qu(e,n,a){try{var o=e.stateNode;xx(o,e.type,a,n),o[yn]=n}catch(c){Ge(e,e.return,c)}}function Om(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function Yu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zu(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fl));else if(o!==4&&(o===27&&Ea(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Zu(e,n,a),e=e.sibling;e!==null;)Zu(e,n,a),e=e.sibling}function wl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ea(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wl(e,n,a),e=e.sibling;e!==null;)wl(e,n,a),e=e.sibling}function Pm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,o,a),n[on]=e,n[yn]=a}catch(f){Ge(e,e.return,f)}}var Xi=!1,tn=!1,Ku=!1,Im=typeof WeakSet=="function"?WeakSet:Set,gn=null;function $_(e,n){if(e=e.containerInfo,Sf=Wl,e=qh(e),Yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,E=-1,P=-1,$=0,ut=0,gt=e,nt=null;e:for(;;){for(var it;gt!==a||c!==0&&gt.nodeType!==3||(E=y+c),gt!==f||o!==0&&gt.nodeType!==3||(P=y+o),gt.nodeType===3&&(y+=gt.nodeValue.length),(it=gt.firstChild)!==null;)nt=gt,gt=it;for(;;){if(gt===e)break e;if(nt===a&&++$===c&&(E=y),nt===f&&++ut===o&&(P=y),(it=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=it}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:e,selectionRange:a},Wl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=ar(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Tf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function zm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),o&4&&to(5,a);break;case 1:if(va(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&Um(a),o&512&&eo(a,a.return);break;case 3:if(va(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_p(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&Pm(a);case 26:case 5:va(e,a),n===null&&o&4&&Lm(a),o&512&&eo(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),o&4&&Hm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lx.bind(null,a),Ax(e,a))));break;case 22:if(o=a.memoizedState!==null||Xi,!o){n=n!==null&&n.memoizedState!==null||tn,c=Xi;var f=tn;Xi=o,(tn=n)&&!f?_a(e,a,(a.subtreeFlags&8772)!==0):va(e,a),Xi=c,tn=f}break;case 30:break;default:va(e,a)}}function Bm(e){var n=e.alternate;n!==null&&(e.alternate=null,Bm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ra(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,zn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Fm(e,n,a),a=a.sibling}function Fm(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:tn||Si(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Si(a,n);var o=Xe,c=zn;Ea(a.type)&&(Xe=a.stateNode,zn=!1),Wi(e,n,a),uo(a.stateNode),Xe=o,zn=c;break;case 5:tn||Si(a,n);case 6:if(o=Xe,c=zn,Xe=null,Wi(e,n,a),Xe=o,zn=c,Xe!==null)if(zn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:Xe!==null&&(zn?(e=Xe,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xo(e)):Rg(Xe,a.stateNode));break;case 4:o=Xe,c=zn,Xe=a.stateNode.containerInfo,zn=!0,Wi(e,n,a),Xe=o,zn=c;break;case 0:case 11:case 14:case 15:tn||ga(2,a,n),tn||ga(4,a,n),Wi(e,n,a);break;case 1:tn||(Si(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Nm(a,n,o)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:tn=(o=tn)||a.memoizedState!==null,Wi(e,n,a),tn=o;break;default:Wi(e,n,a)}}function Hm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xo(e)}catch(a){Ge(n,n.return,a)}}function tx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Im),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Im),n;default:throw Error(r(435,e.tag))}}function Qu(e,n){var a=tx(e);n.forEach(function(o){var c=cx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,y=n,E=y;t:for(;E!==null;){switch(E.tag){case 27:if(Ea(E.type)){Xe=E.stateNode,zn=!1;break t}break;case 5:Xe=E.stateNode,zn=!1;break t;case 3:case 4:Xe=E.stateNode.containerInfo,zn=!0;break t}E=E.return}if(Xe===null)throw Error(r(160));Fm(f,y,c),Xe=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Gm(n,e),n=n.sibling}var ci=null;function Gm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(ga(3,e,e.return),to(3,e),ga(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(tn||a===null||Si(a,a.return)),o&64&&Xi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ci;if(Xn(n,e),Wn(e),o&512&&(tn||a===null||Si(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[aa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,o,a),f[on]=e,en(f),o=f;break t;case"link":var y=Pg("link","href",c).get(o+(a.href||""));if(y){for(var E=0;E<y.length;E++)if(f=y[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(E,1);break e}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;case"meta":if(y=Pg("meta","content",c).get(o+(a.content||""))){for(E=0;E<y.length;E++)if(f=y[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(E,1);break e}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=e,en(f),o=f}e.stateNode=o}else Ig(c,e.type,e.stateNode);else e.stateNode=Og(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ig(c,e.type,e.stateNode):Og(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&qu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(tn||a===null||Si(a,a.return)),a!==null&&o&4&&qu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(tn||a===null||Si(a,a.return)),e.flags&32){c=e.stateNode;try{_i(c,"")}catch(it){Ge(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,qu(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Ku=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ge(e,e.return,it)}}break;case 3:if(kl=null,c=ci,ci=Gl(n.containerInfo),Xn(n,e),ci=c,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch(it){Ge(e,e.return,it)}Ku&&(Ku=!1,Vm(e));break;case 4:o=ci,ci=Gl(e.stateNode.containerInfo),Xn(n,e),Wn(e),ci=o;break;case 12:Xn(n,e),Wn(e);break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(af=de()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Qu(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Xi,ut=tn;if(Xi=$||c,tn=ut||P,Xn(n,e),tn=ut,Xi=$,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||tn||rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{E=P.stateNode;var gt=P.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){Ge(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Qu(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Qu(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Om(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Yu(e);wl(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(_i(y,""),a.flags&=-33);var E=Yu(e);wl(e,E,y);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Yu(e);Zu(e,$,P);break;default:throw Error(r(161))}}catch(ut){Ge(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),rr(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),rr(n);break;case 27:uo(n.stateNode);case 26:case 5:Si(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:_a(c,f,a),to(4,f);break;case 1:if(_a(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ge(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)vp(P[c],E)}catch($){Ge(o,o.return,$)}}a&&y&64&&Um(f),eo(f,f.return);break;case 27:Pm(f);case 26:case 5:_a(c,f,a),a&&o===null&&y&4&&Lm(f),eo(f,f.return);break;case 12:_a(c,f,a);break;case 13:_a(c,f,a),a&&y&4&&Hm(c,f);break;case 22:f.memoizedState===null&&_a(c,f,a),eo(f,f.return);break;case 30:break;default:_a(c,f,a)}n=n.sibling}}function Ju(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Hs(a))}function $u(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Hs(e))}function Mi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)km(e,n,a,o),n=n.sibling}function km(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,o),c&2048&&to(9,n);break;case 1:Mi(e,n,a,o);break;case 3:Mi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Hs(e)));break;case 12:if(c&2048){Mi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,E=f.onPostCommit;typeof E=="function"&&E(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ge(n,n.return,P)}}else Mi(e,n,a,o);break;case 13:Mi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,o):no(e,n):f._visibility&2?Mi(e,n,a,o):(f._visibility|=2,Gr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Ju(y,n);break;case 24:Mi(e,n,a,o),c&2048&&$u(n.alternate,n);break;default:Mi(e,n,a,o)}}function Gr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,E=a,P=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:Gr(f,y,E,P,c),to(8,y);break;case 23:break;case 22:var ut=y.stateNode;y.memoizedState!==null?ut._visibility&2?Gr(f,y,E,P,c):no(f,y):(ut._visibility|=2,Gr(f,y,E,P,c)),c&&$&2048&&Ju(y.alternate,y);break;case 24:Gr(f,y,E,P,c),c&&$&2048&&$u(y.alternate,y);break;default:Gr(f,y,E,P,c)}n=n.sibling}}function no(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:no(a,o),c&2048&&Ju(o.alternate,o);break;case 24:no(a,o),c&2048&&$u(o.alternate,o);break;default:no(a,o)}n=n.sibling}}var io=8192;function Vr(e){if(e.subtreeFlags&io)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 26:Vr(e),e.flags&io&&e.memoizedState!==null&&Fx(ci,e.memoizedState,e.memoizedProps);break;case 5:Vr(e);break;case 3:case 4:var n=ci;ci=Gl(e.stateNode.containerInfo),Vr(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,Vr(e),io=n):Vr(e));break;default:Vr(e)}}function Xm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,qm(o,e)}Xm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wm(e),e=e.sibling}function Wm(e){switch(e.tag){case 0:case 11:case 15:ao(e),e.flags&2048&&ga(9,e,e.return);break;case 3:ao(e);break;case 12:ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):ao(e);break;default:ao(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,qm(o,e)}Xm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ga(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function qm(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(Bm(o),o===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var ex={getCacheForType:function(e){var n=Rn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},nx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,je=null,he=null,ye=0,Le=0,qn=null,xa=!1,kr=!1,tf=!1,qi=0,Ze=0,ya=0,sr=0,ef=0,ii=0,jr=0,ro=null,Bn=null,nf=!1,af=0,Dl=1/0,Ul=null,Sa=null,bn=0,Ma=null,Xr=null,Wr=0,rf=0,sf=null,Ym=null,so=0,of=null;function Yn(){if((Ne&2)!==0&&ye!==0)return ye&-ye;if(I.T!==null){var e=Lr;return e!==0?e:pf()}return be()}function Zm(){ii===0&&(ii=(ye&536870912)===0||Re?j():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function Zn(e,n,a){(e===je&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(qr(e,0),ba(e,ye,ii,!1)),zt(e,a),((Ne&2)===0||e!==je)&&(e===je&&((Ne&2)===0&&(sr|=a),Ze===4&&ba(e,ye,ii,!1)),bi(e))}function Km(e,n,a){if((Ne&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||wt(e,n),c=o?rx(e,n):uf(e,n,!0),f=o;do{if(c===0){kr&&!o&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ix(a)){c=uf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var E=e;c=ro;var P=E.current.memoizedState.isDehydrated;if(P&&(qr(E,y).flags|=256),y=uf(E,y,!1),y!==2){if(tf&&!P){E.errorRecoveryDisabledLanes|=f,sr|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){qr(e,0),ba(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(o,n,ii,!xa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=af+300-de(),10<c)){if(ba(o,n,ii,!xa),qt(o,0,!0)!==0)break t;o.timeoutHandle=Tg(Qm.bind(null,o,a,Bn,Ul,nf,n,ii,sr,jr,xa,f,2,-0,0),c);break t}Qm(o,a,Bn,Ul,nf,n,ii,sr,jr,xa,f,0,-0,0)}}break}while(!0);bi(e)}function Qm(e,n,a,o,c,f,y,E,P,$,ut,gt,nt,it){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:Bx},jm(n),gt=Hx(),gt!==null)){e.cancelPendingCommit=gt(ag.bind(null,e,n,f,a,o,c,y,E,P,ut,1,nt,it)),ba(e,f,y,!$);return}ag(e,n,f,a,o,c,y,E,P)}function ix(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,o){n&=~ef,n&=~sr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&vt(e,a,n)}function Nl(){return(Ne&6)===0?(oo(0),!1):!0}function lf(){if(he!==null){if(Le===0)var e=he.return;else e=he,Fi=tr=null,Eu(e),Fr=null,Qs=0,e=he;for(;e!==null;)Dm(e.alternate,e),e=e.return;he=null}}function qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),lf(),je=e,he=a=Ii(e.current,null),ye=n,Le=0,qn=null,xa=!1,kr=wt(e,n),tf=!1,jr=ii=ef=sr=ya=Ze=0,Bn=ro=null,nf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Pt(o),f=1<<c;n|=e[c],o&=~f}return qi=n,tl(),a}function Jm(e,n){ue=null,I.H=xl,n===Vs||n===cl?(n=mp(),Le=3):n===dp?(n=mp(),Le=4):Le=n===gm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,he===null&&(Ze=1,El(e,Jn(n,e.current)))}function $m(){var e=I.H;return I.H=xl,e===null?xl:e}function tg(){var e=I.A;return I.A=ex,e}function cf(){Ze=4,xa||(ye&4194048)!==ye&&ni.current!==null||(kr=!0),(ya&134217727)===0&&(sr&134217727)===0||je===null||ba(je,ye,ii,!1)}function uf(e,n,a){var o=Ne;Ne|=2;var c=$m(),f=tg();(je!==e||ye!==n)&&(Ul=null,qr(e,n)),n=!1;var y=Ze;t:do try{if(Le!==0&&he!==null){var E=he,P=qn;switch(Le){case 8:lf(),y=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=Le;if(Le=0,qn=null,Yr(e,E,P,$),a&&kr){y=0;break t}break;default:$=Le,Le=0,qn=null,Yr(e,E,P,$)}}ax(),y=Ze;break}catch(ut){Jm(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Fi=tr=null,Ne=o,I.H=c,I.A=f,he===null&&(je=null,ye=0,tl()),y}function ax(){for(;he!==null;)eg(he)}function rx(e,n){var a=Ne;Ne|=2;var o=$m(),c=tg();je!==e||ye!==n?(Ul=null,Dl=de()+500,qr(e,n)):kr=wt(e,n);t:do try{if(Le!==0&&he!==null){n=he;var f=qn;e:switch(Le){case 1:Le=0,qn=null,Yr(e,n,f,1);break;case 2:case 9:if(hp(f)){Le=0,qn=null,ng(n);break}n=function(){Le!==2&&Le!==9||je!==e||(Le=7),bi(e)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:hp(f)?(Le=0,qn=null,ng(n)):(Le=0,qn=null,Yr(e,n,f,7));break;case 5:var y=null;switch(he.tag){case 26:y=he.memoizedState;case 5:case 27:var E=he;if(!y||zg(y)){Le=0,qn=null;var P=E.sibling;if(P!==null)he=P;else{var $=E.return;$!==null?(he=$,Ll($)):he=null}break e}}Le=0,qn=null,Yr(e,n,f,5);break;case 6:Le=0,qn=null,Yr(e,n,f,6);break;case 8:lf(),Ze=6;break t;default:throw Error(r(462))}}sx();break}catch(ut){Jm(e,ut)}while(!0);return Fi=tr=null,I.H=o,I.A=c,Ne=a,he!==null?0:(je=null,ye=0,tl(),Ze)}function sx(){for(;he!==null&&!xn();)eg(he)}function eg(e){var n=wm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Ll(e):he=n}function ng(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Mm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Mm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Eu(n);default:Dm(a,n),n=he=ip(n,qi),n=wm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Ll(e):he=n}function Yr(e,n,a,o){Fi=tr=null,Eu(n),Fr=null,Qs=0;var c=n.return;try{if(Z_(e,c,n,a,ye)){Ze=1,El(e,Jn(a,e.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ze=1,El(e,Jn(a,e.current)),he=null;return}n.flags&32768?(Re||o===1?e=!0:kr||(ye&536870912)!==0?e=!1:(xa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),ig(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){ig(n,xa);return}e=n.return;var a=Q_(n.alternate,n,qi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);Ze===0&&(Ze=5)}function ig(e,n){do{var a=J_(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);Ze=6,he=null}function ag(e,n,a,o,c,f,y,E,P){e.cancelPendingCommit=null;do Ol();while(bn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=$c,At(e,a,f,y,E,P),e===je&&(he=je=null,ye=0),Xr=n,Ma=e,Wr=a,rf=f,sf=c,Ym=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ux(ae,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=K.p,K.p=2,y=Ne,Ne|=4;try{$_(e,n,a)}finally{Ne=y,K.p=c,I.T=o}}bn=1,rg(),sg(),og()}}function rg(){if(bn===1){bn=0;var e=Ma,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var c=Ne;Ne|=4;try{Gm(n,e);var f=Mf,y=qh(e.containerInfo),E=f.focusedElem,P=f.selectionRange;if(y!==E&&E&&E.ownerDocument&&Wh(E.ownerDocument.documentElement,E)){if(P!==null&&Yc(E)){var $=P.start,ut=P.end;if(ut===void 0&&(ut=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ut,E.value.length);else{var gt=E.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ee=E.textContent.length,Jt=Math.min(P.start,ee),ze=P.end===void 0?Jt:Math.min(P.end,ee);!it.extend&&Jt>ze&&(y=ze,ze=Jt,Jt=y);var W=Xh(E,Jt),k=Xh(E,ze);if(W&&k&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==k.node||it.focusOffset!==k.offset)){var Q=gt.createRange();Q.setStart(W.node,W.offset),it.removeAllRanges(),Jt>ze?(it.addRange(Q),it.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),it.addRange(Q))}}}}for(gt=[],it=E;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var dt=gt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Wl=!!Sf,Mf=Sf=null}finally{Ne=c,K.p=o,I.T=a}}e.current=n,bn=2}}function sg(){if(bn===2){bn=0;var e=Ma,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var c=Ne;Ne|=4;try{zm(e,n.alternate,n)}finally{Ne=c,K.p=o,I.T=a}}bn=3}}function og(){if(bn===4||bn===3){bn=0,Se();var e=Ma,n=Xr,a=Wr,o=Ym;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Xr=Ma=null,lg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Sa=null),Ue(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,c=K.p,K.p=2,I.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var E=o[y];f(E.value,{componentStack:E.stack})}}finally{I.T=n,K.p=c}}(Wr&3)!==0&&Ol(),bi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===of?so++:(so=0,of=e):so=0,oo(0)}}function lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Hs(n)))}function Ol(e){return rg(),sg(),og(),cg()}function cg(){if(bn!==5)return!1;var e=Ma,n=rf;rf=0;var a=Ue(Wr),o=I.T,c=K.p;try{K.p=32>a?32:a,I.T=null,a=sf,sf=null;var f=Ma,y=Wr;if(bn=0,Xr=Ma=null,Wr=0,(Ne&6)!==0)throw Error(r(331));var E=Ne;if(Ne|=4,Wm(f.current),km(f,f.current,y,a),Ne=E,oo(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{K.p=c,I.T=o,lg(e,n)}}function ug(e,n,a){n=Jn(a,n),n=Bu(e.stateNode,n,2),e=da(e,n,2),e!==null&&(zt(e,2),bi(e))}function Ge(e,n,a){if(e.tag===3)ug(e,e,a);else for(;n!==null;){if(n.tag===3){ug(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sa===null||!Sa.has(o))){e=Jn(a,e),a=pm(2),o=da(n,a,2),o!==null&&(mm(a,o,n,e),zt(o,2),bi(o));break}}n=n.return}}function ff(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new nx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(tf=!0,c.add(a),e=ox.bind(null,e,n,a),n.then(e,e))}function ox(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ye&a)===a&&(Ze===4||Ze===3&&(ye&62914560)===ye&&300>de()-af?(Ne&2)===0&&qr(e,0):ef|=a,jr===ye&&(jr=0)),bi(e)}function fg(e,n){n===0&&(n=Nt()),e=Cr(e,n),e!==null&&(zt(e,n),bi(e))}function lx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),fg(e,a)}function cx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),fg(e,a)}function ux(e,n){return me(e,n)}var Pl=null,Zr=null,df=!1,Il=!1,hf=!1,or=0;function bi(e){e!==Zr&&e.next===null&&(Zr===null?Pl=Zr=e:Zr=Zr.next=e),Il=!0,df||(df=!0,dx())}function oo(e,n){if(!hf&&Il){hf=!0;do for(var a=!1,o=Pl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=c&~(y&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,mg(o,f))}else f=ye,f=qt(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||wt(o,f)||(a=!0,mg(o,f));o=o.next}while(a);hf=!1}}function fx(){dg()}function dg(){Il=df=!1;var e=0;or!==0&&(yx()&&(e=or),or=0);for(var n=de(),a=null,o=Pl;o!==null;){var c=o.next,f=hg(o,n);f===0?(o.next=null,a===null?Pl=c:a.next=c,c===null&&(Zr=a)):(a=o,(e!==0||(f&3)!==0)&&(Il=!0)),o=c}oo(e)}function hg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Pt(f),E=1<<y,P=c[y];P===-1?((E&a)===0||(E&o)!==0)&&(c[y]=ie(E,n)):P<=n&&(e.expiredLanes|=E),f&=~E}if(n=je,a=ye,a=qt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&H(o),Ue(a)){case 2:case 8:a=Yt;break;case 32:a=ae;break;case 268435456:a=L;break;default:a=ae}return o=pg.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&H(o),e.callbackPriority=2,e.callbackNode=null,2}function pg(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ol()&&e.callbackNode!==a)return null;var o=ye;return o=qt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Km(e,o,n),hg(e,de()),e.callbackNode!=null&&e.callbackNode===a?pg.bind(null,e):null)}function mg(e,n){if(Ol())return null;Km(e,n,!0)}function dx(){Mx(function(){(Ne&6)!==0?me(ge,fx):dg()})}function pf(){return or===0&&(or=j()),or}function gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function hx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=gg((c[yn]||null).action),y=o.submitter;y&&(n=(n=y[yn]||null)?gg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var E=new Qo("action","action",null,o,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var P=y?vg(c,y):new FormData(c);Lu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=y?vg(c,y):new FormData(c),Lu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var mf=0;mf<Jc.length;mf++){var gf=Jc[mf],px=gf.toLowerCase(),mx=gf[0].toUpperCase()+gf.slice(1);li(px,"on"+mx)}li(Kh,"onAnimationEnd"),li(Qh,"onAnimationIteration"),li(Jh,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(N_,"onTransitionRun"),li(L_,"onTransitionStart"),li(O_,"onTransitionCancel"),li($h,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function _g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var E=o[y],P=E.instance,$=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ut){bl(ut)}c.currentTarget=null,f=P}else for(y=0;y<o.length;y++){if(E=o[y],P=E.instance,$=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ut){bl(ut)}c.currentTarget=null,f=P}}}}function pe(e,n){var a=n[ka];a===void 0&&(a=n[ka]=new Set);var o=e+"__bubble";a.has(o)||(xg(n,e,2,!1),a.add(o))}function vf(e,n,a){var o=0;n&&(o|=4),xg(a,e,o,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[zl]){e[zl]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(gx.has(a)||vf(a,!1,e),vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zl]||(n[zl]=!0,vf("selectionchange",!1,n))}}function xg(e,n,a,o){switch(kg(n)){case 2:var c=kx;break;case 8:c=jx;break;default:c=Nf}a=c.bind(null,n,a,e),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function xf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var E=o.stateNode.containerInfo;if(E===c)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;E!==null;){if(y=Di(E),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=f=y;continue t}E=E.parentNode}}o=o.return}Ah(function(){var $=f,ut=zc(a),gt=[];t:{var nt=tp.get(e);if(nt!==void 0){var it=Qo,ee=e;switch(e){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":it=u_;break;case"focusin":ee="focus",it=kc;break;case"focusout":ee="blur",it=kc;break;case"beforeblur":case"afterblur":it=kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=h_;break;case Kh:case Qh:case Jh:it=e_;break;case $h:it=m_;break;case"scroll":case"scrollend":it=Kv;break;case"wheel":it=v_;break;case"copy":case"cut":case"paste":it=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Uh;break;case"toggle":case"beforetoggle":it=x_}var Jt=(n&4)!==0,ze=!Jt&&(e==="scroll"||e==="scrollend"),W=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var k=$,Q;k!==null;){var dt=k;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||W===null||(dt=Rs(k,W),dt!=null&&Jt.push(co(k,dt,Q))),ze)break;k=k.return}0<Jt.length&&(nt=new it(nt,ee,null,a,ut),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Ic&&(ee=a.relatedTarget||a.fromElement)&&(Di(ee)||ee[On]))break t;if((it||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=$,ee=ee?Di(ee):null,ee!==null&&(ze=u(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=$),it!==ee)){if(Jt=Ch,dt="onMouseLeave",W="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Uh,dt="onPointerLeave",W="onPointerEnter",k="pointer"),ze=it==null?nt:Xa(it),Q=ee==null?nt:Xa(ee),nt=new Jt(dt,k+"leave",it,a,ut),nt.target=ze,nt.relatedTarget=Q,dt=null,Di(ut)===$&&(Jt=new Jt(W,k+"enter",ee,a,ut),Jt.target=Q,Jt.relatedTarget=ze,dt=Jt),ze=dt,it&&ee)e:{for(Jt=it,W=ee,k=0,Q=Jt;Q;Q=Kr(Q))k++;for(Q=0,dt=W;dt;dt=Kr(dt))Q++;for(;0<k-Q;)Jt=Kr(Jt),k--;for(;0<Q-k;)W=Kr(W),Q--;for(;k--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=Kr(Jt),W=Kr(W)}Jt=null}else Jt=null;it!==null&&yg(gt,nt,it,Jt,!1),ee!==null&&ze!==null&&yg(gt,ze,ee,Jt,!0)}}t:{if(nt=$?Xa($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=Fh;else if(zh(nt))if(Hh)Ht=C_;else{Ht=R_;var fe=A_}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Pc($.elementType)&&(Ht=Fh):Ht=w_;if(Ht&&(Ht=Ht(e,$))){Bh(gt,Ht,a,ut);break t}fe&&fe(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(fe=$?Xa($):window,e){case"focusin":(zh(fe)||fe.contentEditable==="true")&&(Ar=fe,Zc=$,Ps=null);break;case"focusout":Ps=Zc=Ar=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Yh(gt,a,ut);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":Yh(gt,a,ut)}var Xt;if(Xc)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Tr?Ph(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Nh&&a.locale!=="ko"&&(Tr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Tr&&(Xt=Rh()):(la=ut,Hc="value"in la?la.value:la.textContent,Tr=!0)),fe=Bl($,te),0<fe.length&&(te=new Dh(te,e,null,a,ut),gt.push({event:te,listeners:fe}),Xt?te.data=Xt:(Xt=Ih(a),Xt!==null&&(te.data=Xt)))),(Xt=S_?M_(e,a):b_(e,a))&&(te=Bl($,"onBeforeInput"),0<te.length&&(fe=new Dh("onBeforeInput","beforeinput",null,a,ut),gt.push({event:fe,listeners:te}),fe.data=Xt)),hx(gt,e,$,a,ut)}_g(gt,n)})}function co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Rs(e,a),c!=null&&o.unshift(co(e,c,f)),c=Rs(e,n),c!=null&&o.push(co(e,c,f))),e.tag===3)return o;e=e.return}return[]}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yg(e,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var E=a,P=E.alternate,$=E.stateNode;if(E=E.tag,P!==null&&P===o)break;E!==5&&E!==26&&E!==27||$===null||(P=$,c?($=Rs(a,f),$!=null&&y.unshift(co(a,$,P))):c||($=Rs(a,f),$!=null&&y.push(co(a,$,P)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var vx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(vx,`
`).replace(_x,"")}function Mg(e,n){return n=Sg(n),Sg(e)===n}function Fl(){}function Ie(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||_i(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&_i(e,""+o);break;case"className":Dt(e,"class",o);break;case"tabIndex":Dt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,o);break;case"style":Eh(e,o,f);break;case"data":if(n!=="object"){Dt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Fl);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yv.get(a)||a,Tt(e,a,o))}}function yf(e,n,a,o,c,f){switch(a){case"style":Eh(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?_i(e,o):(typeof o=="number"||typeof o=="bigint")&&_i(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,f,y,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var E=f=y=c=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":y=ut;break;case"checked":P=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ie(e,n,o,ut,a,null)}}He(e,f,E,P,$,y,c,!1),qe(e);return;case"select":pe("invalid",e),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":y=E;break;case"multiple":o=E;default:Ie(e,n,c,E,a,null)}n=f,a=y,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":pe("invalid",e),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(E=a[y],E!=null))switch(y){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ie(e,n,y,E,a,null)}Sn(e,o,c,f),qe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,P,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<lo.length;o++)pe(lo[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,$,o,a,null)}return;default:if(Pc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&yf(e,n,ut,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Ie(e,n,E,o,a,null))}function xx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,E=null,P=null,$=null,ut=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=gt;default:o.hasOwnProperty(it)||Ie(e,n,it,null,o,gt)}}for(var nt in o){var it=o[nt];if(gt=a[nt],o.hasOwnProperty(nt)&&(it!=null||gt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ut=it;break;case"value":y=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Ie(e,n,nt,it,o,gt)}}Li(e,y,E,P,$,ut,f,c);return;case"select":it=y=E=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(f)||Ie(e,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":E=f;break;case"multiple":y=f;default:f!==P&&Ie(e,n,c,f,o,P)}n=E,a=y,o=it,nt!=null?ln(e,!!a,nt,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ie(e,n,E,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(e,n,y,c,o,f)}pn(e,nt,it);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Ie(e,n,ee,null,o,nt)}for(P in o)if(nt=o[P],it=a[P],o.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ie(e,n,P,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!o.hasOwnProperty(Jt)&&Ie(e,n,Jt,null,o,nt);for($ in o)if(nt=o[$],it=a[$],o.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ie(e,n,$,nt,o,it)}return;default:if(Pc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!o.hasOwnProperty(ze)&&yf(e,n,ze,void 0,o,nt);for(ut in o)nt=o[ut],it=a[ut],!o.hasOwnProperty(ut)||nt===it||nt===void 0&&it===void 0||yf(e,n,ut,nt,o,it);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!o.hasOwnProperty(W)&&Ie(e,n,W,null,o,nt);for(gt in o)nt=o[gt],it=a[gt],!o.hasOwnProperty(gt)||nt===it||nt==null&&it==null||Ie(e,n,gt,nt,o,it)}var Sf=null,Mf=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function yx(){var e=window.event;return e&&e.type==="popstate"?e===Ef?!1:(Ef=e,!0):(Ef=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(bx)}:Tg;function bx(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function Rg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&uo(y.documentElement),a&2&&uo(y.body),a&4)for(a=y.head,uo(a),y=a.firstChild;y;){var E=y.nextSibling,P=y.nodeName;y[aa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=E}}if(c===0){e.removeChild(f),xo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);xo(n)}function Tf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ex(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Tx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ax(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Rf=null;function wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Cg(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ra(e)}var ai=new Map,Dg=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=K.d;K.d={f:Rx,r:wx,D:Cx,C:Dx,L:Ux,m:Nx,X:Ox,S:Lx,M:Px};function Rx(){var e=Yi.f(),n=Nl();return e||n}function wx(e){var n=Ui(e);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Yi.r(e)}var Qr=typeof document>"u"?null:document;function Ug(e,n,a){var o=Qr;if(o&&typeof n=="string"&&n){var c=ke(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Dg.has(c)||(Dg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),En(n,"link",e),en(n),o.head.appendChild(n)))}}function Cx(e){Yi.D(e),Ug("dns-prefetch",e,null)}function Dx(e,n){Yi.C(e,n),Ug("preconnect",e,n)}function Ux(e,n,a){Yi.L(e,n,a);var o=Qr;if(o&&e&&n){var c='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ke(a.imageSizes)+'"]')):c+='[href="'+ke(e)+'"]';var f=c;switch(n){case"style":f=Jr(e);break;case"script":f=$r(e)}ai.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(fo(f))||n==="script"&&o.querySelector(ho(f))||(n=o.createElement("link"),En(n,"link",e),en(n),o.head.appendChild(n)))}}function Nx(e,n){Yi.m(e,n);var a=Qr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ke(o)+'"][href="'+ke(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(e)}if(!ai.has(f)&&(e=g({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}o=a.createElement("link"),En(o,"link",e),en(o),a.head.appendChild(o)}}}function Lx(e,n,a){Yi.S(e,n,a);var o=Qr;if(o&&e){var c=sa(o).hoistableStyles,f=Jr(e);n=n||"default";var y=c.get(f);if(!y){var E={loading:0,preload:null};if(y=o.querySelector(fo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&wf(e,a);var P=y=o.createElement("link");en(P),En(P,"link",e),P._p=new Promise(function($,ut){P.onload=$,P.onerror=ut}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:E},c.set(f,y)}}}function Ox(e,n){Yi.X(e,n);var a=Qr;if(a&&e){var o=sa(a).hoistableScripts,c=$r(e),f=o.get(c);f||(f=a.querySelector(ho(c)),f||(e=g({src:e,async:!0},n),(n=ai.get(c))&&Cf(e,n),f=a.createElement("script"),en(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Px(e,n){Yi.M(e,n);var a=Qr;if(a&&e){var o=sa(a).hoistableScripts,c=$r(e),f=o.get(c);f||(f=a.querySelector(ho(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ai.get(c))&&Cf(e,n),f=a.createElement("script"),en(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Ng(e,n,a,o){var c=(c=Mt.current)?Gl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=sa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var f=sa(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(fo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||Ix(c,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=sa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Jr(e){return'href="'+ke(e)+'"'}function fo(e){return'link[rel="stylesheet"]['+e+"]"}function Lg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ix(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),en(n),e.head.appendChild(n))}function $r(e){return'[src="'+ke(e)+'"]'}function ho(e){return"script[async]"+e}function Og(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(o)return n.instance=o,en(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),En(o,"style",c),Vl(o,a.precedence,e),n.instance=o;case"stylesheet":c=Jr(a.href);var f=e.querySelector(fo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;o=Lg(a),(c=ai.get(c))&&wf(o,c),f=(e.ownerDocument||e).createElement("link"),en(f);var y=f;return y._p=new Promise(function(E,P){y.onload=E,y.onerror=P}),En(f,"link",o),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=$r(a.src),(c=e.querySelector(ho(f)))?(n.instance=c,en(c),c):(o=a,(c=ai.get(f))&&(o=g({},a),Cf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),En(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Vl(o,a.precedence,e));return n.instance}function Vl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var E=o[y];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function Pg(e,n,a){if(kl===null){var o=new Map,c=kl=new Map;c.set(a,o)}else c=kl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[aa]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var E=o.get(y);E?E.push(f):o.set(y,[f])}}return o}function Ig(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function zx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var po=null;function Bx(){}function Fx(e,n,a){if(po===null)throw Error(r(475));var o=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Jr(a.href),f=e.querySelector(fo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=Lg(a),(c=ai.get(c))&&wf(a,c),f=f.createElement("link"),en(f);var y=f;y._p=new Promise(function(E,P){y.onload=E,y.onerror=P}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Hx(){if(po===null)throw Error(r(475));var e=po;return e.stylesheets&&e.count===0&&Df(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Df(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Df(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Df(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(Gx,e),Xl=null,jl.call(e))}function Gx(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var o=a.get(null);else{a=new Map,Xl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=jl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var mo={$$typeof:O,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Vx(e,n,a,o,c,f,y,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Bg(e,n,a,o,c,f,y,E,P,$,ut,gt){return e=new Vx(e,n,a,y,E,P,$,gt),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},pu(f),e}function Fg(e){return e?(e=Dr,e):Dr}function Hg(e,n,a,o,c,f){c=Fg(c),o.context===null?o.context=c:o.pendingContext=c,o=fa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=da(e,o,n),a!==null&&(Zn(a,e,n),js(a,e,n))}function Gg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Uf(e,n){Gg(e,n),(e=e.alternate)&&Gg(e,n)}function Vg(e){if(e.tag===13){var n=Cr(e,67108864);n!==null&&Zn(n,e,67108864),Uf(e,67108864)}}var Wl=!0;function kx(e,n,a,o){var c=I.T;I.T=null;var f=K.p;try{K.p=2,Nf(e,n,a,o)}finally{K.p=f,I.T=c}}function jx(e,n,a,o){var c=I.T;I.T=null;var f=K.p;try{K.p=8,Nf(e,n,a,o)}finally{K.p=f,I.T=c}}function Nf(e,n,a,o){if(Wl){var c=Lf(o);if(c===null)xf(e,n,o,ql,a),jg(e,o);else if(Wx(c,e,n,a,o))o.stopPropagation();else if(jg(e,o),n&4&&-1<Xx.indexOf(e)){for(;c!==null;){var f=Ui(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Wt(f.pendingLanes);if(y!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;y;){var P=1<<31-Pt(y);E.entanglements[1]|=P,y&=~P}bi(f),(Ne&6)===0&&(Dl=de()+500,oo(0))}}break;case 13:E=Cr(f,2),E!==null&&Zn(E,f,2),Nl(),Uf(f,2)}if(f=Lf(o),f===null&&xf(e,n,o,ql,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else xf(e,n,o,null,a)}}function Lf(e){return e=zc(e),Of(e)}var ql=null;function Of(e){if(ql=null,e=Di(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function kg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ge:return 2;case Yt:return 8;case ae:case Je:return 32;case L:return 268435456;default:return 32}default:return 32}}var Pf=!1,Ta=null,Aa=null,Ra=null,go=new Map,vo=new Map,wa=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function _o(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ui(n),n!==null&&Vg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Wx(e,n,a,o,c){switch(n){case"focusin":return Ta=_o(Ta,e,n,a,o,c),!0;case"dragenter":return Aa=_o(Aa,e,n,a,o,c),!0;case"mouseover":return Ra=_o(Ra,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,_o(go.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,vo.set(f,_o(vo.get(f)||null,e,n,a,o,c)),!0}return!1}function Xg(e){var n=Di(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(a.tag===13){var o=Yn();o=ne(o);var c=Cr(a,o);c!==null&&Zn(c,a,o),Uf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Lf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ic=o,a.target.dispatchEvent(o),Ic=null}else return n=Ui(a),n!==null&&Vg(n),e.blockedOn=a,!1;n.shift()}return!0}function Wg(e,n,a){Yl(e)&&a.delete(n)}function qx(){Pf=!1,Ta!==null&&Yl(Ta)&&(Ta=null),Aa!==null&&Yl(Aa)&&(Aa=null),Ra!==null&&Yl(Ra)&&(Ra=null),go.forEach(Wg),vo.forEach(Wg)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Pf||(Pf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qx)))}var Kl=null;function qg(e){Kl!==e&&(Kl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Of(o||a)===null)continue;break}var f=Ui(a);f!==null&&(e.splice(n,3),n-=3,Lu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function xo(e){function n(P){return Zl(P,e)}Ta!==null&&Zl(Ta,e),Aa!==null&&Zl(Aa,e),Ra!==null&&Zl(Ra,e),go.forEach(n),vo.forEach(n);for(var a=0;a<wa.length;a++){var o=wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Xg(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[yn]||null;if(typeof f=="function")y||qg(a);else if(y){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[yn]||null)E=y.formAction;else if(Of(c)!==null)continue}else E=y.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),qg(a)}}}function If(e){this._internalRoot=e}Ql.prototype.render=If.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Yn();Hg(a,o,e,n,null,null)},Ql.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hg(e.current,2,null,e,null,null),Nl(),n[On]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&Xg(e)}};var Yg=t.version;if(Yg!=="19.1.0")throw Error(r(527,Yg,"19.1.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Yx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{ft=Jl.inject(Yx),pt=Jl}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=um,f=fm,y=dm,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Bg(e,1,!1,null,null,a,o,c,f,y,E,null),e[On]=n.current,_f(e),new If(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=um,y=fm,E=dm,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Bg(e,1,!0,n,a??null,o,c,f,y,E,P,$),n.context=Fg(null),a=n.current,o=Yn(),o=ne(o),c=fa(o),c.callback=null,da(a,c,o),a=o,n.current.lanes=a,zt(n,a),bi(n),e[On]=n.current,_f(e),new Ql(n)},So.version="19.1.0",So}var a0;function ry(){if(a0)return Ff.exports;a0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ff.exports=ay(),Ff.exports}var sy=ry();const r0=["home","about","skill","project","contact"];function oy(){const[s,t]=Ce.useState(!1),i=()=>{t(!s)},r=()=>{t(!1)};return R.jsxs("div",{className:"navbar bg-base-100 sticky top-0 z-50 shadow-md",children:[R.jsx("div",{className:"flex-1",children:R.jsx("a",{className:"btn btn-ghost text-xl",children:"Hello World"})}),R.jsx("div",{className:"flex-none hidden lg:flex",children:R.jsx("ul",{className:"menu menu-horizontal px-1",children:r0.map(l=>R.jsx("li",{children:R.jsx("a",{href:`#${l}`,className:"capitalize hover:bg-base-200",children:l})},l))})}),R.jsx("div",{className:"flex-none lg:hidden",children:R.jsx("button",{className:"btn btn-square btn-ghost",onClick:i,"aria-label":"Toggle menu",children:R.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s?R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})}),s&&R.jsx("div",{className:"absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden",children:R.jsx("ul",{className:"menu menu-vertical p-2",children:r0.map(l=>R.jsx("li",{children:R.jsx("a",{href:`#${l}`,className:"capitalize hover:bg-base-200 py-3",onClick:r,children:l})},l))})})]})}const s0=[`Hello I'm "Ta"`,"I interested in Software Development","I really love Mathematics","I love to learn new things"];function ly(){const[s,t]=Ce.useState(""),[i,r]=Ce.useState(0),[l,u]=Ce.useState(0),[d,h]=Ce.useState(!1),[p,m]=Ce.useState(!1);return Ce.useEffect(()=>{const g=s0[i],_=110,x=55,M=1500,T=700,C=z=>z+(Math.random()*30-15);let S=C(d?x:_);p&&(S=d?T:M);const v=setTimeout(()=>{if(p){m(!1),d?(h(!1),r((i+1)%s0.length)):h(!0);return}d?(t(g.slice(0,l-1)),u(l-1),l-1===0&&m(!0)):(t(g.slice(0,l+1)),u(l+1),l+1===g.length&&m(!0))},S);return()=>clearTimeout(v)},[l,d,i,p]),R.jsxs("h2",{className:"text-3xl font-semibold text-center mt-8",children:[s,R.jsx("span",{className:"animate-pulse",children:"|"})]})}function cy(){return R.jsxs("div",{className:"flex flex-col",children:[R.jsx("div",{className:"hero min-h-[60vh] bg-base-200",style:{backgroundImage:"url(/me/assets/background.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}),R.jsx("div",{className:"-mt-1",children:R.jsx(ly,{})})]})}var Sd=function(){return(Sd=Object.assign||function(s){for(var t,i=1,r=arguments.length;i<r;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(s[l]=t[l]);return s}).apply(this,arguments)},Mo,bo,Md=Ce.createContext(void 0),o0="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",l0="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js",uy=function(_){var t=_.config,i=_.version,i=i===void 0?3:i,r=_.src,r=r===void 0?i===2?o0:l0:r,l=_.onStartup,u=_.onLoad,p=_.asyncLoad,d=p!==void 0&&p,h=_.onError,p=_.typesettingOptions,m=_.renderMode,m=m===void 0?"post":m,g=_.hideUntilTypeset,_=_.children,M=Ce.useContext(Md);if((M==null?void 0:M.version)!==void 0&&(M==null?void 0:M.version)!==i)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(i===2&&bo!==void 0||i===3&&Mo!==void 0)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var x=Ce.useRef(M),M=Ce.useRef((M==null?void 0:M.version)||null);if(M.current===null)M.current=i;else if(M.current!==i)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var T=r||(i===2?o0:l0);function C(S,v){t&&(window.MathJax=t);var z=document.createElement("script");z.type="text/javascript",z.src=T,z.async=d,z.addEventListener("load",function(){var O=window.MathJax;l&&l(O),S(O),u&&u()}),z.addEventListener("error",function(O){return v(O)}),document.getElementsByTagName("head")[0].appendChild(z)}return x.current===void 0&&(M={typesettingOptions:p,renderMode:m,hideUntilTypeset:g},i===2?Mo===void 0&&(typeof window<"u"?(Mo=new Promise(C)).catch(function(S){if(!h)throw Error("Failed to download MathJax version 2 from '".concat(T,"' due to: ").concat(JSON.stringify(S)));h(S)}):(Mo=Promise.reject()).catch(function(S){})):bo===void 0&&(typeof window<"u"?(bo=new Promise(C)).catch(function(S){if(!h)throw Error("Failed to download MathJax version 3 from '".concat(T,"' due to: ").concat(S));h(S)}):(bo=Promise.reject()).catch(function(S){})),x.current=Sd(Sd({},M),i===2?{version:2,promise:Mo}:{version:3,promise:bo})),fh.createElement(Md.Provider,{value:x.current},_)},Ia=function(){return(Ia=Object.assign||function(s){for(var t,i=1,r=arguments.length;i<r;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(s[l]=t[l]);return s}).apply(this,arguments)},fy=function(s,t){var i={};for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&t.indexOf(l)<0&&(i[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(s);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(s,l[r])&&(i[l[r]]=s[l[r]]);return i},Eo=function(s){return"Typesetting failed: ".concat(s.message!==void 0?s.message:JSON.stringify(s))},To=function(s){function t(){var G;C==="every"&&z&&S==="post"&&M.current!==null&&(M.current.style.visibility=(G=(G=_.style)==null?void 0:G.visibility)!=null?G:"visible"),O.current||(C==="first"&&M.current!==null&&(M.current.style.visibility="visible"),l&&l(),O.current=!0),u&&u(),U.current=!1}var r=s.inline,i=r!==void 0&&r,r=s.hideUntilTypeset,l=s.onInitTypeset,u=s.onTypeset,d=s.text,h=s.dynamic,p=s.typesettingOptions,m=s.renderMode,g=s.children,_=fy(s,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),x=Ce.useRef(""),M=Ce.useRef(null),T=Ce.useContext(Md),C=r??(T==null?void 0:T.hideUntilTypeset),S=m??(T==null?void 0:T.renderMode),v=p??(T==null?void 0:T.typesettingOptions),z=h!==!1&&(h||!1),O=Ce.useRef(!1),U=Ce.useRef(!1);return!U.current&&M.current!==null&&z&&C==="every"&&S==="post"&&(M.current.style.visibility="hidden"),(typeof window<"u"?Ce.useLayoutEffect:Ce.useEffect)(function(){if((z||!O.current)&&M.current!==null){if(!T)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if(S==="pre"){if(!(typeof(G=d)=="string"&&0<G.length))throw Error(`Render mode 'pre' requires text prop to be set and non-empty, which was currently "`.concat(d,'"'));if(!p||!p.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(T.version===2)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}S!=="post"&&d===x.current||U.current||(U.current=!0,T.version===3?T.promise.then(function(F){var B;S==="pre"?(B=function(X){x.current=d,F.startup.document.clear(),F.startup.document.updateDocument(),M.current!==null&&(M.current.innerHTML=X.outerHTML),t()},p.fn.endsWith("Promise")?F.startup.promise.then(function(){return F[v.fn](d,Ia(Ia({},(v==null?void 0:v.options)||{}),{display:!i}))}).then(B).catch(function(X){throw t(),Error(Eo(X))}):F.startup.promise.then(function(){var X=F[v.fn](d,Ia(Ia({},(v==null?void 0:v.options)||{}),{display:!i}));B(X)}).catch(function(X){throw t(),Error(Eo(X))})):F.startup.promise.then(function(){return F.typesetClear([M.current]),F.typesetPromise([M.current])}).then(t).catch(function(X){throw t(),Error(Eo(X))})}).catch(function(F){throw t(),Error(Eo(F))}):T.promise.then(function(F){F.Hub.Queue(["Typeset",F.Hub,M.current]),F.Hub.Queue(t)}).catch(function(F){throw t(),Error(Eo(F))}))}var G}),fh.createElement("span",Ia({},_,{style:Ia(Ia({display:i?"inline":"block"},_.style),{visibility:C?"hidden":(s=_.style)==null?void 0:s.visibility}),ref:M}),g)};const dy={loader:{load:["input/tex","output/chtml"]}};function hy(){return R.jsx(uy,{config:dy,children:R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700",children:[R.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[R.jsx("span",{className:"text-2xl mr-2",children:"📐"}),"Hyperbolic Paraboloid Equation"]}),R.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-center text-lg border shadow-sm",children:[R.jsx(To,{className:"text-blue-600 dark:text-blue-400 font-bold",children:"\\( z = \\frac{y^2}{b^2} - \\frac{x^2}{a^2} \\)"}),R.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"where \\( a = 3, b = 3 \\)"})]})]}),R.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700",children:[R.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[R.jsx("span",{className:"text-2xl mr-2",children:"📏"}),"Surface Area Analysis"]}),R.jsx("div",{className:"space-y-3",children:["\\( \\frac{\\partial z}{\\partial x} = -\\frac{2x}{a^2}, \\quad \\frac{\\partial z}{\\partial y} = \\frac{2y}{b^2} \\)","\\( dS = \\sqrt{1 + \\left(\\frac{\\partial z}{\\partial x}\\right)^2 + \\left(\\frac{\\partial z}{\\partial y}\\right)^2} \\, dx \\, dy \\)","\\( dS = \\sqrt{1 + \\frac{4x^2}{9} + \\frac{4y^2}{9}} \\, dx \\, dy \\)"].map((s,t)=>R.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:R.jsx(To,{className:"font-mono text-sm text-green-600 dark:text-green-400 font-bold",children:s})},t))})]}),R.jsxs("div",{className:"bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700",children:[R.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[R.jsx("span",{className:"text-2xl mr-2",children:"📊"}),"Volume Under Surface"]}),R.jsxs("div",{className:"space-y-3",children:[R.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:R.jsx(To,{className:"font-mono text-sm text-orange-600 dark:text-orange-400 font-bold",children:"\\( V = \\iint |\\frac{y^2}{9} - \\frac{x^2}{9}| \\, dx \\, dy \\)"})}),R.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:R.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Region: \\([-3, 3] \\\\times [-3, 3]\\)"})}),R.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[R.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center",children:[R.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Positive Volume"}),R.jsx("div",{className:"font-bold text-blue-600 dark:text-blue-400",children:"≈ 24 units³"})]}),R.jsxs("div",{className:"bg-red-50 dark:bg-red-900/30 p-3 rounded-lg text-center",children:[R.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Negative Volume"}),R.jsx("div",{className:"font-bold text-red-600 dark:text-red-400",children:"≈ -24 units³"})]})]})]})]}),R.jsxs("div",{className:"bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700",children:[R.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[R.jsx("span",{className:"text-2xl mr-2",children:"⚡"}),"Mathematical Properties"]}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[R.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[R.jsx("div",{className:"font-semibold text-purple-600 dark:text-purple-400 mb-2",children:"Curvature"}),R.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Saddle point at origin",R.jsx("br",{}),R.jsx(To,{children:"\\( K = -\\frac{4}{9(1 + \\frac{4r^2}{9})^2} \\)"})]})]}),R.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[R.jsx("div",{className:"font-semibold text-purple-600 dark:text-purple-400 mb-2",children:"Asymptotes"}),R.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Hyperbolic curves:",R.jsx("br",{}),R.jsx(To,{children:"\\( y = \\pm x \\quad \\text{(when } z = 0 \\text{)} \\)"})]})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="177",py=0,c0=1,my=2,pv=1,gy=2,ta=3,Ha=0,Hn=1,Ti=2,Ba=0,gs=1,u0=2,f0=3,d0=4,vy=5,gr=100,_y=101,xy=102,yy=103,Sy=104,My=200,by=201,Ey=202,Ty=203,bd=204,Ed=205,Ay=206,Ry=207,wy=208,Cy=209,Dy=210,Uy=211,Ny=212,Ly=213,Oy=214,Td=0,Ad=1,Rd=2,xs=3,wd=4,Cd=5,Dd=6,Ud=7,mv=0,Py=1,Iy=2,Fa=0,zy=1,By=2,Fy=3,Hy=4,Gy=5,Vy=6,ky=7,gv=300,ys=301,Ss=302,Nd=303,Ld=304,Nc=306,Od=1e3,_r=1001,Pd=1002,gi=1003,jy=1004,$l=1005,Ai=1006,kf=1007,xr=1008,wi=1009,vv=1010,_v=1011,Lo=1012,hh=1013,Sr=1014,ea=1015,zo=1016,ph=1017,mh=1018,Oo=1020,xv=35902,yv=1021,Sv=1022,mi=1023,Po=1026,Io=1027,Mv=1028,gh=1029,bv=1030,vh=1031,_h=1033,Sc=33776,Mc=33777,bc=33778,Ec=33779,Id=35840,zd=35841,Bd=35842,Fd=35843,Hd=36196,Gd=37492,Vd=37496,kd=37808,jd=37809,Xd=37810,Wd=37811,qd=37812,Yd=37813,Zd=37814,Kd=37815,Qd=37816,Jd=37817,$d=37818,th=37819,eh=37820,nh=37821,Tc=36492,ih=36494,ah=36495,Ev=36283,rh=36284,sh=36285,oh=36286,Xy=3200,Wy=3201,Tv=0,qy=1,za="",si="srgb",Ms="srgb-linear",Cc="linear",Be="srgb",ts=7680,h0=519,Yy=512,Zy=513,Ky=514,Av=515,Qy=516,Jy=517,$y=518,tS=519,p0=35044,m0="300 es",na=2e3,Dc=2001;class Ts{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,lh=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function eS(s,t){return(s%t+t)%t}function Xf(s,t,i){return(1-i)*s+i*t}function Ao(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class De{constructor(t=0,i=0){De.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const x=u[d+0],M=u[d+1],T=u[d+2],C=u[d+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=x,t[i+1]=M,t[i+2]=T,t[i+3]=C;return}if(_!==C||p!==x||m!==M||g!==T){let S=1-h;const v=p*x+m*M+g*T+_*C,z=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const G=Math.sqrt(O),F=Math.atan2(G,v*z);S=Math.sin(S*F)/G,h=Math.sin(h*F)/G}const U=h*z;if(p=p*S+x*U,m=m*S+M*U,g=g*S+T*U,_=_*S+C*U,S===1-h){const G=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=G,m*=G,g*=G,_*=G}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=u[d],x=u[d+1],M=u[d+2],T=u[d+3];return t[i]=h*T+g*_+p*M-m*x,t[i+1]=p*T+g*x+m*_-h*M,t[i+2]=m*T+g*M+h*x-p*_,t[i+3]=g*T-h*_-p*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),_=h(u/2),x=p(r/2),M=p(l/2),T=p(u/2);switch(d){case"XYZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"YXZ":this._x=x*g*_+m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"ZXY":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_-x*M*T;break;case"ZYX":this._x=x*g*_-m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_+x*M*T;break;case"YZX":this._x=x*g*_+m*M*T,this._y=m*M*_+x*g*T,this._z=m*g*T-x*M*_,this._w=m*g*_-x*M*T;break;case"XZY":this._x=x*g*_-m*M*T,this._y=m*M*_-x*g*T,this._z=m*g*T+x*M*_,this._w=m*g*_+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],x=r+h+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(u-m)*M,this._z=(d-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+m)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(u-m)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-l)/M,this._x=(u+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+d*h+l*m-u*p,this._y=l*g+d*p+u*h-r*m,this._z=u*g+d*m+r*p-l*h,this._w=d*g-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,i=0,r=0){st.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(g0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(g0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*l-h*r),g=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+p*m+d*_-h*g,this.y=r+p*g+h*m-u*_,this.z=l+p*_+u*g-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Wf.copy(this).projectOnVector(t),this.sub(Wf)}reflect(t){return this.sub(Wf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new st,g0=new Fo;class se{constructor(t,i,r,l,u,d,h,p,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m)}set(t,i,r,l,u,d,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],g=r[4],_=r[7],x=r[2],M=r[5],T=r[8],C=l[0],S=l[3],v=l[6],z=l[1],O=l[4],U=l[7],G=l[2],F=l[5],B=l[8];return u[0]=d*C+h*z+p*G,u[3]=d*S+h*O+p*F,u[6]=d*v+h*U+p*B,u[1]=m*C+g*z+_*G,u[4]=m*S+g*O+_*F,u[7]=m*v+g*U+_*B,u[2]=x*C+M*z+T*G,u[5]=x*S+M*O+T*F,u[8]=x*v+M*U+T*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*d*g-i*h*m-r*u*g+r*h*p+l*u*m-l*d*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*d-h*m,x=h*p-g*u,M=m*u-d*p,T=i*_+r*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=_*C,t[1]=(l*m-g*r)*C,t[2]=(h*r-l*d)*C,t[3]=x*C,t[4]=(g*i-l*p)*C,t[5]=(l*u-h*i)*C,t[6]=M*C,t[7]=(r*p-m*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+t,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(qf.makeScale(t,i)),this}rotate(t){return this.premultiply(qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new se;function Rv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nS(){const s=Uc("canvas");return s.style.display="block",s}const v0={};function vs(s){s in v0||(v0[s]=!0,console.warn(s))}function iS(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function aS(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rS(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _0=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sS(){const s={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Be&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Be&&(l.r=_s(l.r),l.g=_s(l.g),l.b=_s(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Cc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ms]:{primaries:t,whitePoint:r,transfer:Cc,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Te=sS();function ia(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class oS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{es===void 0&&(es=Uc("canvas")),es.width=t.width,es.height=t.height;const l=es.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=es}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Uc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ia(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lS=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Yf(l[d].image)):u.push(Yf(l[d]))}else u=Yf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Yf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cS=0;const Zf=new st;class Gn extends Ts{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=_r,l=_r,u=Ai,d=xr,h=mi,p=wi,m=Gn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Bo(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zf).x}get height(){return this.source.getSize(Zf).y}get depth(){return this.source.getSize(Zf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Od:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case Pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Od:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case Pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=gv;Gn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],T=p[9],C=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,U=(M+1)/2,G=(v+1)/2,F=(g+x)/4,B=(_+C)/4,X=(T+S)/4;return O>U&&O>G?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=F/r,u=B/r):U>G?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=F/l,u=X/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=B/u,l=X/u),this.set(r,l,u,i),this}let z=Math.sqrt((S-T)*(S-T)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(S-T)/z,this.y=(_-C)/z,this.z=(x-g)/z,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uS extends Ts{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new xh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends uS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class wv extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fS extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,fi):fi.fromBufferAttribute(u,d),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),ec.subVectors(this.max,Ro),ns.subVectors(t.a,Ro),is.subVectors(t.b,Ro),as.subVectors(t.c,Ro),Da.subVectors(is,ns),Ua.subVectors(as,is),lr.subVectors(ns,as);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-lr.z,lr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,lr.z,0,-lr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-lr.y,lr.x,0];return!Kf(i,ns,is,as,ec)||(i=[1,0,0,0,1,0,0,0,1],!Kf(i,ns,is,as,ec))?!1:(nc.crossVectors(Da,Ua),i=[nc.x,nc.y,nc.z],Kf(i,ns,is,as,ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new st,new st,new st,new st,new st,new st,new st,new st],fi=new st,tc=new Ho,ns=new st,is=new st,as=new st,Da=new st,Ua=new st,lr=new st,Ro=new st,ec=new st,nc=new st,cr=new st;function Kf(s,t,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){cr.fromArray(s,u);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),p=t.dot(cr),m=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const dS=new Ho,wo=new st,Qf=new st;class yh{constructor(t=new st,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):dS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(Qf)),this.expandByPoint(wo.copy(t.center).sub(Qf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new st,Jf=new st,ic=new st,Na=new st,$f=new st,ac=new st,td=new st;class hS{constructor(t=new st,i=new st(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Jf.copy(t).add(i).multiplyScalar(.5),ic.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(Jf);const u=t.distanceTo(i)*.5,d=-this.direction.dot(ic),h=Na.dot(this.direction),p=-Na.dot(ic),m=Na.lengthSq(),g=Math.abs(1-d*d);let _,x,M,T;if(g>0)if(_=d*p-h,x=d*h-p,T=u*g,_>=0)if(x>=-T)if(x<=T){const C=1/g;_*=C,x*=C,M=_*(_+d*x+2*h)+x*(d*_+x+2*p)+m}else x=u,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;else x=-u,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;else x<=-T?(_=Math.max(0,-(-d*u+h)),x=_>0?-u:Math.min(Math.max(-u,-p),u),M=-_*_+x*(x+2*p)+m):x<=T?(_=0,x=Math.min(Math.max(-u,-p),u),M=x*(x+2*p)+m):(_=Math.max(0,-(d*u+h)),x=_>0?u:Math.min(Math.max(-u,-p),u),M=-_*_+x*(x+2*p)+m);else x=d>0?-u:u,_=Math.max(0,-(d*x+h)),M=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Jf).addScaledVector(ic,x),M}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(r=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(u=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){$f.subVectors(i,t),ac.subVectors(r,t),td.crossVectors($f,ac);let d=this.direction.dot(td),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Na.subVectors(this.origin,t);const p=h*this.direction.dot(ac.crossVectors(Na,ac));if(p<0)return null;const m=h*this.direction.dot($f.cross(Na));if(m<0||p+m>d)return null;const g=-h*Na.dot(td);return g<0?null:this.at(g/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,u,d,h,p,m,g,_,x,M,T,C,S){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m,g,_,x,M,T,C,S)}set(t,i,r,l,u,d,h,p,m,g,_,x,M,T,C,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=T,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),u=1/rs.setFromMatrixColumn(t,1).length(),d=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const x=d*g,M=d*_,T=h*g,C=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=M+T*m,i[5]=x-C*m,i[9]=-h*p,i[2]=C-x*m,i[6]=T+M*m,i[10]=d*p}else if(t.order==="YXZ"){const x=p*g,M=p*_,T=m*g,C=m*_;i[0]=x+C*h,i[4]=T*h-M,i[8]=d*m,i[1]=d*_,i[5]=d*g,i[9]=-h,i[2]=M*h-T,i[6]=C+x*h,i[10]=d*p}else if(t.order==="ZXY"){const x=p*g,M=p*_,T=m*g,C=m*_;i[0]=x-C*h,i[4]=-d*_,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*g,i[9]=C-x*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const x=d*g,M=d*_,T=h*g,C=h*_;i[0]=p*g,i[4]=T*m-M,i[8]=x*m+C,i[1]=p*_,i[5]=C*m+x,i[9]=M*m-T,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const x=d*p,M=d*m,T=h*p,C=h*m;i[0]=p*g,i[4]=C-x*_,i[8]=T*_+M,i[1]=_,i[5]=d*g,i[9]=-h*g,i[2]=-m*g,i[6]=M*_+T,i[10]=x-C*_}else if(t.order==="XZY"){const x=d*p,M=d*m,T=h*p,C=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=x*_+C,i[5]=d*g,i[9]=M*_-T,i[2]=T*_-M,i[6]=h*g,i[10]=C*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pS,t,mS)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),La.crossVectors(r,Kn),La.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),La.crossVectors(r,Kn)),La.normalize(),rc.crossVectors(Kn,La),l[0]=La.x,l[4]=rc.x,l[8]=Kn.x,l[1]=La.y,l[5]=rc.y,l[9]=Kn.y,l[2]=La.z,l[6]=rc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],g=r[1],_=r[5],x=r[9],M=r[13],T=r[2],C=r[6],S=r[10],v=r[14],z=r[3],O=r[7],U=r[11],G=r[15],F=l[0],B=l[4],X=l[8],D=l[12],w=l[1],V=l[5],lt=l[9],ot=l[13],_t=l[2],ht=l[6],I=l[10],K=l[14],Y=l[3],bt=l[7],N=l[11],tt=l[15];return u[0]=d*F+h*w+p*_t+m*Y,u[4]=d*B+h*V+p*ht+m*bt,u[8]=d*X+h*lt+p*I+m*N,u[12]=d*D+h*ot+p*K+m*tt,u[1]=g*F+_*w+x*_t+M*Y,u[5]=g*B+_*V+x*ht+M*bt,u[9]=g*X+_*lt+x*I+M*N,u[13]=g*D+_*ot+x*K+M*tt,u[2]=T*F+C*w+S*_t+v*Y,u[6]=T*B+C*V+S*ht+v*bt,u[10]=T*X+C*lt+S*I+v*N,u[14]=T*D+C*ot+S*K+v*tt,u[3]=z*F+O*w+U*_t+G*Y,u[7]=z*B+O*V+U*ht+G*bt,u[11]=z*X+O*lt+U*I+G*N,u[15]=z*D+O*ot+U*K+G*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],x=t[10],M=t[14],T=t[3],C=t[7],S=t[11],v=t[15];return T*(+u*p*_-l*m*_-u*h*x+r*m*x+l*h*M-r*p*M)+C*(+i*p*M-i*m*x+u*d*x-l*d*M+l*m*g-u*p*g)+S*(+i*m*_-i*h*M-u*d*_+r*d*M+u*h*g-r*m*g)+v*(-l*h*g-i*p*_+i*h*x+l*d*_-r*d*x+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],T=t[12],C=t[13],S=t[14],v=t[15],z=_*S*m-C*x*m+C*p*M-h*S*M-_*p*v+h*x*v,O=T*x*m-g*S*m-T*p*M+d*S*M+g*p*v-d*x*v,U=g*C*m-T*_*m+T*h*M-d*C*M-g*h*v+d*_*v,G=T*_*p-g*C*p-T*h*x+d*C*x+g*h*S-d*_*S,F=i*z+r*O+l*U+u*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=z*B,t[1]=(C*x*u-_*S*u-C*l*M+r*S*M+_*l*v-r*x*v)*B,t[2]=(h*S*u-C*p*u+C*l*m-r*S*m-h*l*v+r*p*v)*B,t[3]=(_*p*u-h*x*u-_*l*m+r*x*m+h*l*M-r*p*M)*B,t[4]=O*B,t[5]=(g*S*u-T*x*u+T*l*M-i*S*M-g*l*v+i*x*v)*B,t[6]=(T*p*u-d*S*u-T*l*m+i*S*m+d*l*v-i*p*v)*B,t[7]=(d*x*u-g*p*u+g*l*m-i*x*m-d*l*M+i*p*M)*B,t[8]=U*B,t[9]=(T*_*u-g*C*u-T*r*M+i*C*M+g*r*v-i*_*v)*B,t[10]=(d*C*u-T*h*u+T*r*m-i*C*m-d*r*v+i*h*v)*B,t[11]=(g*h*u-d*_*u-g*r*m+i*_*m+d*r*M-i*h*M)*B,t[12]=G*B,t[13]=(g*C*l-T*_*l+T*r*x-i*C*x-g*r*S+i*_*S)*B,t[14]=(T*h*l-d*C*l-T*r*p+i*C*p+d*r*S-i*h*S)*B,t[15]=(d*_*l-g*h*l+g*r*p-i*_*p-d*r*x+i*h*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,p=t.z,m=u*d,g=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*d,0,m*p-l*h,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,g=d+d,_=h+h,x=u*m,M=u*g,T=u*_,C=d*g,S=d*_,v=h*_,z=p*m,O=p*g,U=p*_,G=r.x,F=r.y,B=r.z;return l[0]=(1-(C+v))*G,l[1]=(M+U)*G,l[2]=(T-O)*G,l[3]=0,l[4]=(M-U)*F,l[5]=(1-(x+v))*F,l[6]=(S+z)*F,l[7]=0,l[8]=(T+O)*B,l[9]=(S-z)*B,l[10]=(1-(x+C))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const d=rs.set(l[4],l[5],l[6]).length(),h=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const m=1/u,g=1/d,_=1/h;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,i.setFromRotationMatrix(di),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=na){const p=this.elements,m=2*u/(i-t),g=2*u/(r-l),_=(i+t)/(i-t),x=(r+l)/(r-l);let M,T;if(h===na)M=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(h===Dc)M=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=na){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(d-u),x=(i+t)*m,M=(r+l)*g;let T,C;if(h===na)T=(d+u)*_,C=-2*_;else if(h===Dc)T=u*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new st,di=new Qe,pS=new st(0,0,0),mS=new st(1,1,1),La=new st,rc=new st,Kn=new st,y0=new Qe,S0=new Fo;class Ci{constructor(t=0,i=0,r=0,l=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return y0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(y0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return S0.setFromEuler(this),this.setFromQuaternion(S0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";let Cv=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gS=0;const M0=new st,ss=new Fo,Qi=new Qe,sc=new st,Co=new st,vS=new st,_S=new Fo,b0=new st(1,0,0),E0=new st(0,1,0),T0=new st(0,0,1),A0={type:"added"},xS={type:"removed"},os={type:"childadded",child:null},ed={type:"childremoved",child:null};class Un extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new st,i=new Ci,r=new Fo,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new se}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(b0,t)}rotateY(t){return this.rotateOnAxis(E0,t)}rotateZ(t){return this.rotateOnAxis(T0,t)}translateOnAxis(t,i){return M0.copy(t).applyQuaternion(this.quaternion),this.position.add(M0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(b0,t)}translateY(t){return this.translateOnAxis(E0,t)}translateZ(t){return this.translateOnAxis(T0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?sc.copy(t):sc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Co,sc,this.up):Qi.lookAt(sc,Co,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Qi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(A0),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xS),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(A0),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,vS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,_S,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),g=d(t.images),_=d(t.shapes),x=d(t.skeletons),M=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new st(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new st,Ji=new st,nd=new st,$i=new st,ls=new st,cs=new st,R0=new st,id=new st,ad=new st,rd=new st,sd=new Ke,od=new Ke,ld=new Ke;class pi{constructor(t=new st,i=new st,r=new st){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),hi.subVectors(t,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){hi.subVectors(l,i),Ji.subVectors(r,i),nd.subVectors(t,i);const d=hi.dot(hi),h=hi.dot(Ji),p=hi.dot(nd),m=Ji.dot(Ji),g=Ji.dot(nd),_=d*m-h*h;if(_===0)return u.set(0,0,0),null;const x=1/_,M=(m*p-h*g)*x,T=(d*g-h*p)*x;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,d,h,p){return this.getBarycoord(t,i,r,l,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,$i.x),p.addScaledVector(d,$i.y),p.addScaledVector(h,$i.z),p)}static getInterpolatedAttribute(t,i,r,l,u,d){return sd.setScalar(0),od.setScalar(0),ld.setScalar(0),sd.fromBufferAttribute(t,i),od.fromBufferAttribute(t,r),ld.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(sd,u.x),d.addScaledVector(od,u.y),d.addScaledVector(ld,u.z),d}static isFrontFacing(t,i,r,l){return hi.subVectors(r,i),Ji.subVectors(t,i),hi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),hi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ls.subVectors(l,r),cs.subVectors(u,r),id.subVectors(t,r);const p=ls.dot(id),m=cs.dot(id);if(p<=0&&m<=0)return i.copy(r);ad.subVectors(t,l);const g=ls.dot(ad),_=cs.dot(ad);if(g>=0&&_<=g)return i.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(ls,d);rd.subVectors(t,u);const M=ls.dot(rd),T=cs.dot(rd);if(T>=0&&M<=T)return i.copy(u);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(r).addScaledVector(cs,h);const S=g*T-M*_;if(S<=0&&_-g>=0&&M-T>=0)return R0.subVectors(u,l),h=(_-g)/(_-g+(M-T)),i.copy(l).addScaledVector(R0,h);const v=1/(S+C+x);return d=C*v,h=x*v,i.copy(r).addScaledVector(ls,d).addScaledVector(cs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},oc={h:0,s:0,l:0};function cd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=eS(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=cd(d,u,t+1/3),this.g=cd(d,u,t),this.b=cd(d,u,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=Dv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Te.workingToColorSpace(Dn.copy(this),t),Math.round(xe(Dn.r*255,0,255))*65536+Math.round(xe(Dn.g*255,0,255))*256+Math.round(xe(Dn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const g=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=g<=.5?_/(d+h):_/(2-d-h),d){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=si){Te.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+i,Oa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Oa),t.getHSL(oc);const r=Xf(Oa.h,oc.h,i),l=Xf(Oa.s,oc.s,i),u=Xf(Oa.l,oc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new we;we.NAMES=Dv;let yS=0;class Go extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=gs,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ed,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==Ha&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ed&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Uv extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new st,lc=new De;let SS=0;class vi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=p0,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(t),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p0&&(t.usage=this.usage),t}}class Nv extends vi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Lv extends vi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class yr extends vi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let MS=0;const ri=new Qe,ud=new Un,us=new st,Qn=new Ho,Do=new Ho,_n=new st;class Va extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rv(t)?Lv:Nv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return ud.lookAt(t),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new yr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Qn.min,Do.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Do.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Do.min),Qn.expandByPoint(Do.max))}Qn.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)_n.fromBufferAttribute(h,m),p&&(us.fromBufferAttribute(t,m),_n.add(us)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<r.count;X++)h[X]=new st,p[X]=new st;const m=new st,g=new st,_=new st,x=new De,M=new De,T=new De,C=new st,S=new st;function v(X,D,w){m.fromBufferAttribute(r,X),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,w),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,D),T.fromBufferAttribute(u,w),g.sub(m),_.sub(m),M.sub(x),T.sub(x);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(V),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(V),h[X].add(C),h[D].add(C),h[w].add(C),p[X].add(S),p[D].add(S),p[w].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let X=0,D=z.length;X<D;++X){const w=z[X],V=w.start,lt=w.count;for(let ot=V,_t=V+lt;ot<_t;ot+=3)v(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const O=new st,U=new st,G=new st,F=new st;function B(X){G.fromBufferAttribute(l,X),F.copy(G);const D=h[X];O.copy(D),O.sub(G.multiplyScalar(G.dot(D))).normalize(),U.crossVectors(F,D);const V=U.dot(p[X])<0?-1:1;d.setXYZW(X,O.x,O.y,O.z,V)}for(let X=0,D=z.length;X<D;++X){const w=z[X],V=w.start,lt=w.count;for(let ot=V,_t=V+lt;ot<_t;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new st,u=new st,d=new st,h=new st,p=new st,m=new st,g=new st,_=new st;if(t)for(let x=0,M=t.count;x<M;x+=3){const T=t.getX(x+0),C=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),g.subVectors(d,u),_.subVectors(l,u),g.cross(_),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),h.add(g),p.add(g),m.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),_.subVectors(l,u),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let M=0,T=0;for(let C=0,S=p.length;C<S;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*g;for(let v=0;v<g;v++)x[T++]=m[M++]}return new vi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Va,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=t(x,r);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],_=u[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,g=d.length;m<g;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w0=new Qe,ur=new hS,cc=new yh,C0=new st,uc=new st,fc=new st,dc=new st,fd=new st,hc=new st,D0=new st,pc=new st;class Ri extends Un{constructor(t=new Va,i=new Uv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){hc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=h[p],_=u[p];g!==0&&(fd.fromBufferAttribute(_,t),d?hc.addScaledVector(fd,g):hc.addScaledVector(fd.sub(i),g))}i.add(hc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(cc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(cc,C0)===null||ur.origin.distanceToSquared(C0)>(t.far-t.near)**2))&&(w0.copy(u).invert(),ur.copy(t.ray).applyMatrix4(w0),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=d[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,G=O;U<G;U+=3){const F=h.getX(U),B=h.getX(U+1),X=h.getX(U+2);l=mc(this,v,t,r,m,g,_,F,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=T,v=C;S<v;S+=3){const z=h.getX(S),O=h.getX(S+1),U=h.getX(S+2);l=mc(this,d,t,r,m,g,_,z,O,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,C=x.length;T<C;T++){const S=x[T],v=d[S.materialIndex],z=Math.max(S.start,M.start),O=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,G=O;U<G;U+=3){const F=U,B=U+1,X=U+2;l=mc(this,v,t,r,m,g,_,F,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,v=C;S<v;S+=3){const z=S,O=S+1,U=S+2;l=mc(this,d,t,r,m,g,_,z,O,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function bS(s,t,i,r,l,u,d,h){let p;if(t.side===Hn?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,t.side===Ha,h),p===null)return null;pc.copy(h),pc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(pc);return m<i.near||m>i.far?null:{distance:m,point:pc.clone(),object:s}}function mc(s,t,i,r,l,u,d,h,p,m){s.getVertexPosition(h,uc),s.getVertexPosition(p,fc),s.getVertexPosition(m,dc);const g=bS(s,t,i,r,uc,fc,dc,D0);if(g){const _=new st;pi.getBarycoord(D0,uc,fc,dc,_),l&&(g.uv=pi.getInterpolatedAttribute(l,h,p,m,_,new De)),u&&(g.uv1=pi.getInterpolatedAttribute(u,h,p,m,_,new De)),d&&(g.normal=pi.getInterpolatedAttribute(d,h,p,m,_,new st),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new st,materialIndex:0};pi.getNormal(uc,fc,dc,x.normal),g.face=x,g.barycoord=_}return g}class Vo extends Va{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new yr(m,3)),this.setAttribute("normal",new yr(g,3)),this.setAttribute("uv",new yr(_,2));function T(C,S,v,z,O,U,G,F,B,X,D){const w=U/B,V=G/X,lt=U/2,ot=G/2,_t=F/2,ht=B+1,I=X+1;let K=0,Y=0;const bt=new st;for(let N=0;N<I;N++){const tt=N*V-ot;for(let xt=0;xt<ht;xt++){const St=xt*w-lt;bt[C]=St*z,bt[S]=tt*O,bt[v]=_t,m.push(bt.x,bt.y,bt.z),bt[C]=0,bt[S]=0,bt[v]=F>0?1:-1,g.push(bt.x,bt.y,bt.z),_.push(xt/B),_.push(1-N/X),K+=1}}for(let N=0;N<X;N++)for(let tt=0;tt<B;tt++){const xt=x+tt+ht*N,St=x+tt+ht*(N+1),J=x+(tt+1)+ht*(N+1),mt=x+(tt+1)+ht*N;p.push(xt,St,mt),p.push(St,J,mt),Y+=6}h.addGroup(M,Y,D),M+=Y,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Ln(s){const t={};for(let i=0;i<s.length;i++){const r=bs(s[i]);for(const l in r)t[l]=r[l]}return t}function ES(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Ov(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const TS={clone:bs,merge:Ln};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=ES(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Pv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new st,U0=new De,N0=new De;class oi extends Pv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z)}getViewSize(t,i){return this.getViewBounds(t,U0,N0),i.subVectors(N0,U0)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,ds=1;class wS extends Un{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(fs,ds,t,i);l.layers=this.layers,this.add(l);const u=new oi(fs,ds,t,i);u.layers=this.layers,this.add(u);const d=new oi(fs,ds,t,i);d.layers=this.layers,this.add(d);const h=new oi(fs,ds,t,i);h.layers=this.layers,this.add(h);const p=new oi(fs,ds,t,i);p.layers=this.layers,this.add(p);const m=new oi(fs,ds,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Iv extends Gn{constructor(t=[],i=ys,r,l,u,d,h,p,m,g){super(t,i,r,l,u,d,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class CS extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vo(5,5,5),u=new Ga({name:"CubemapFromEquirect",uniforms:bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ba});u.uniforms.tEquirect.value=i;const d=new Ri(l,u),h=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ai),new wS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class gc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,r),v=this._getHandJoint(m,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class US extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hd=new st,NS=new st,LS=new se;class pr{constructor(t=new st(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=hd.subVectors(r,i).cross(NS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||LS.getNormalMatrix(t),l=this.coplanarPoint(hd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new yh,vc=new st;class Sh{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,d=new pr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=na){const r=this.planes,l=t.elements,u=l[0],d=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],M=l[8],T=l[9],C=l[10],S=l[11],v=l[12],z=l[13],O=l[14],U=l[15];if(r[0].setComponents(p-u,x-m,S-M,U-v).normalize(),r[1].setComponents(p+u,x+m,S+M,U+v).normalize(),r[2].setComponents(p+d,x+g,S+T,U+z).normalize(),r[3].setComponents(p-d,x-g,S-T,U-z).normalize(),r[4].setComponents(p-h,x-_,S-C,U-O).normalize(),i===na)r[5].setComponents(p+h,x+_,S+C,U+O).normalize();else if(i===Dc)r[5].setComponents(h,_,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(vc.x=l.normal.x>0?t.max.x:t.min.x,vc.y=l.normal.y>0?t.max.y:t.min.y,vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(vc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zv extends Gn{constructor(t,i,r=Sr,l,u,d,h=gi,p=gi,m,g=Po,_=1){if(g!==Po&&g!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,u,d,h,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lc extends Va{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,_=t/h,x=i/p,M=[],T=[],C=[],S=[];for(let v=0;v<g;v++){const z=v*x-d;for(let O=0;O<m;O++){const U=O*_-u;T.push(U,-z,0),C.push(0,0,1),S.push(O/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let z=0;z<h;z++){const O=z+m*v,U=z+m*(v+1),G=z+1+m*(v+1),F=z+1+m*v;M.push(O,U,F),M.push(U,G,F)}this.setIndex(M),this.setAttribute("position",new yr(T,3)),this.setAttribute("normal",new yr(C,3)),this.setAttribute("uv",new yr(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.width,t.height,t.widthSegments,t.heightSegments)}}class OS extends Go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tv,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PS extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IS extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bv extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const pd=new Qe,L0=new st,O0=new st;class zS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;L0.setFromMatrixPosition(t.matrixWorld),i.position.copy(L0),O0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(O0),i.updateMatrixWorld(),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(pd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fv extends Pv{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BS extends zS{constructor(){super(new Fv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FS extends Bv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new BS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class HS extends Bv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class GS extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function P0(s,t,i,r){const l=VS(r);switch(i){case yv:return s*t;case Mv:return s*t/l.components*l.byteLength;case gh:return s*t/l.components*l.byteLength;case bv:return s*t*2/l.components*l.byteLength;case vh:return s*t*2/l.components*l.byteLength;case Sv:return s*t*3/l.components*l.byteLength;case mi:return s*t*4/l.components*l.byteLength;case _h:return s*t*4/l.components*l.byteLength;case Sc:case Mc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bc:case Ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zd:case Fd:return Math.max(s,16)*Math.max(t,8)/4;case Id:case Bd:return Math.max(s,8)*Math.max(t,8)/2;case Hd:case Gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case th:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Tc:case ih:case ah:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ev:case rh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case sh:case oh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VS(s){switch(s){case wi:case vv:return{byteLength:1,components:1};case Lo:case _v:case zo:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case Sr:case hh:case ea:return{byteLength:4,components:1};case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let s=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function kS(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,g);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],C=_[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const C=_[M];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var jS=`#ifdef USE_ALPHAHASH
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
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
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
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`uniform float scale;
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
}`,le={alphahash_fragment:jS,alphahash_pars_fragment:XS,alphamap_fragment:WS,alphamap_pars_fragment:qS,alphatest_fragment:YS,alphatest_pars_fragment:ZS,aomap_fragment:KS,aomap_pars_fragment:QS,batching_pars_vertex:JS,batching_vertex:$S,begin_vertex:tM,beginnormal_vertex:eM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:aM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:lM,color_fragment:cM,color_pars_fragment:uM,color_pars_vertex:fM,color_vertex:dM,common:hM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:vM,emissivemap_fragment:_M,emissivemap_pars_fragment:xM,colorspace_fragment:yM,colorspace_pars_fragment:SM,envmap_fragment:MM,envmap_common_pars_fragment:bM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:IM,envmap_vertex:AM,fog_vertex:RM,fog_pars_vertex:wM,fog_fragment:CM,fog_pars_fragment:DM,gradientmap_pars_fragment:UM,lightmap_pars_fragment:NM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:OM,lights_pars_begin:PM,lights_toon_fragment:zM,lights_toon_pars_fragment:BM,lights_phong_fragment:FM,lights_phong_pars_fragment:HM,lights_physical_fragment:GM,lights_physical_pars_fragment:VM,lights_fragment_begin:kM,lights_fragment_maps:jM,lights_fragment_end:XM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:ZM,map_fragment:KM,map_pars_fragment:QM,map_particle_fragment:JM,map_particle_pars_fragment:$M,metalnessmap_fragment:tb,metalnessmap_pars_fragment:eb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:vb,packing:_b,premultiplied_alpha_fragment:xb,project_vertex:yb,dithering_fragment:Sb,dithering_pars_fragment:Mb,roughnessmap_fragment:bb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:wb,skinbase_vertex:Cb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Nb,specularmap_fragment:Lb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:Ib,transmission_fragment:zb,transmission_pars_fragment:Bb,uv_pars_fragment:Fb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:jb,backgroundCube_vert:Xb,backgroundCube_frag:Wb,cube_vert:qb,cube_frag:Yb,depth_vert:Zb,depth_frag:Kb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:$b,equirect_frag:tE,linedashed_vert:eE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:aE,meshlambert_vert:rE,meshlambert_frag:sE,meshmatcap_vert:oE,meshmatcap_frag:lE,meshnormal_vert:cE,meshnormal_frag:uE,meshphong_vert:fE,meshphong_frag:dE,meshphysical_vert:hE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:vE,points_frag:_E,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},Lt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ei={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ei.physical={uniforms:Ln([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const _c={r:0,b:0,g:0},dr=new Ci,bE=new Qe;function EE(s,t,i,r,l,u,d){const h=new we(0);let p=u===!0?0:1,m,g,_=null,x=0,M=null;function T(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:t).get(U)),U}function C(O){let U=!1;const G=T(O);G===null?v(h,p):G&&G.isColor&&(v(G,1),U=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(O,U){const G=T(U);G&&(G.isCubeTexture||G.mapping===Nc)?(g===void 0&&(g=new Ri(new Vo(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:bs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),dr.copy(U.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(bE.makeRotationFromEuler(dr)),g.material.toneMapped=Te.getTransfer(G.colorSpace)!==Be,(_!==G||x!==G.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=G,x=G.version,M=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new Ri(new Lc(2,2),new Ga({name:"BackgroundMaterial",uniforms:bs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Te.getTransfer(G.colorSpace)!==Be,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||x!==G.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=G,x=G.version,M=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function v(O,U){O.getRGB(_c,Ov(s)),r.buffers.color.setClear(_c.r,_c.g,_c.b,U,d)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,U=1){h.set(O),p=U,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,v(h,p)},render:C,addToRenderList:S,dispose:z}}function TE(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(w,V,lt,ot,_t){let ht=!1;const I=_(ot,lt,V);u!==I&&(u=I,m(u.object)),ht=M(w,ot,lt,_t),ht&&T(w,ot,lt,_t),_t!==null&&t.update(_t,s.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,U(w,V,lt,ot),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function _(w,V,lt){const ot=lt.wireframe===!0;let _t=r[w.id];_t===void 0&&(_t={},r[w.id]=_t);let ht=_t[V.id];ht===void 0&&(ht={},_t[V.id]=ht);let I=ht[ot];return I===void 0&&(I=x(p()),ht[ot]=I),I}function x(w){const V=[],lt=[],ot=[];for(let _t=0;_t<i;_t++)V[_t]=0,lt[_t]=0,ot[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:ot,object:w,attributes:{},index:null}}function M(w,V,lt,ot){const _t=u.attributes,ht=V.attributes;let I=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){const N=_t[Y];let tt=ht[Y];if(tt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;I++}return u.attributesNum!==I||u.index!==ot}function T(w,V,lt,ot){const _t={},ht=V.attributes;let I=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){let N=ht[Y];N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),_t[Y]=tt,I++}u.attributes=_t,u.attributesNum=I,u.index=ot}function C(){const w=u.newAttributes;for(let V=0,lt=w.length;V<lt;V++)w[V]=0}function S(w){v(w,0)}function v(w,V){const lt=u.newAttributes,ot=u.enabledAttributes,_t=u.attributeDivisors;lt[w]=1,ot[w]===0&&(s.enableVertexAttribArray(w),ot[w]=1),_t[w]!==V&&(s.vertexAttribDivisor(w,V),_t[w]=V)}function z(){const w=u.newAttributes,V=u.enabledAttributes;for(let lt=0,ot=V.length;lt<ot;lt++)V[lt]!==w[lt]&&(s.disableVertexAttribArray(lt),V[lt]=0)}function O(w,V,lt,ot,_t,ht,I){I===!0?s.vertexAttribIPointer(w,V,lt,_t,ht):s.vertexAttribPointer(w,V,lt,ot,_t,ht)}function U(w,V,lt,ot){C();const _t=ot.attributes,ht=lt.getAttributes(),I=V.defaultAttributeValues;for(const K in ht){const Y=ht[K];if(Y.location>=0){let bt=_t[K];if(bt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor)),bt!==void 0){const N=bt.normalized,tt=bt.itemSize,xt=t.get(bt);if(xt===void 0)continue;const St=xt.buffer,J=xt.type,mt=xt.bytesPerElement,Mt=J===s.INT||J===s.UNSIGNED_INT||bt.gpuType===hh;if(bt.isInterleavedBufferAttribute){const Rt=bt.data,Ct=Rt.stride,oe=bt.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Y.locationSize;Qt++)v(Y.location+Qt,Rt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<Y.locationSize;Qt++)S(Y.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Qt=0;Qt<Y.locationSize;Qt++)O(Y.location+Qt,tt/Y.locationSize,J,N,Ct*mt,(oe+tt/Y.locationSize*Qt)*mt,Mt)}else{if(bt.isInstancedBufferAttribute){for(let Rt=0;Rt<Y.locationSize;Rt++)v(Y.location+Rt,bt.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)S(Y.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Rt=0;Rt<Y.locationSize;Rt++)O(Y.location+Rt,tt/Y.locationSize,J,N,tt*mt,tt/Y.locationSize*Rt*mt,Mt)}}else if(I!==void 0){const N=I[K];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}z()}function G(){X();for(const w in r){const V=r[w];for(const lt in V){const ot=V[lt];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete V[lt]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const lt in V){const ot=V[lt];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete V[lt]}delete r[w.id]}function B(w){for(const V in r){const lt=r[V];if(lt[w.id]===void 0)continue;const ot=lt[w.id];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete lt[w.id]}}function X(){D(),d=!0,u!==l&&(u=l,m(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:S,disableUnusedAttributes:z}}function AE(s,t,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function d(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];i.update(M,r,1)}function p(m,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],g[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let T=0;for(let C=0;C<_;C++)T+=g[C]*x[C];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function RE(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==mi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==wi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ea&&!X)}function p(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:G,maxSamples:F}}function wE(s){const t=this;let i=null,r=0,l=!1,u=!1;const d=new pr,h=new se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!l||T===null||T.length===0||u&&!S)u?g(null):m();else{const z=u?0:r,O=z*4;let U=v.clippingState||null;p.value=U,U=g(T,x,O,M);for(let G=0;G!==O;++G)U[G]=i[G];v.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,x,M,T){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const v=M+C*4,z=x.matrixWorldInverse;h.getNormalMatrix(z),(S===null||S.length<v)&&(S=new Float32Array(v));for(let O=0,U=M;O!==C;++O,U+=4)d.copy(_[O]).applyMatrix4(z,h),d.normal.toArray(S,U),S[U+3]=d.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}function CE(s){let t=new WeakMap;function i(d,h){return h===Nd?d.mapping=ys:h===Ld&&(d.mapping=Ss),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nd||h===Ld)if(t.has(d)){const p=t.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new CS(p.height);return m.fromEquirectangularTexture(s,d),t.set(d,m),d.addEventListener("dispose",l),i(m.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ms=4,I0=[.125,.215,.35,.446,.526,.582],vr=20,md=new Fv,z0=new we;let gd=null,vd=0,_d=0,xd=!1;const mr=(1+Math.sqrt(5))/2,hs=1/mr,B0=[new st(-mr,hs,0),new st(mr,hs,0),new st(-hs,0,mr),new st(hs,0,mr),new st(0,mr,-hs),new st(0,mr,hs),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],DE=new st;class F0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=DE}=u;gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=xd,t.scissorTest=!1,xc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ys||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:zo,format:mi,colorSpace:Ms,depthBuffer:!1},l=H0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(u)),this._blurMaterial=NE(u,t,i)}return l}_compileMaterial(t){const i=new Ri(this._lodPlanes[0],t);this._renderer.compile(i,md)}_sceneToCubeUV(t,i,r,l,u){const p=new oi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(z0),_.toneMapping=Fa,_.autoClear=!1;const T=new Uv({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),C=new Ri(new Vo,T);let S=!1;const v=t.background;v?v.isColor&&(T.color.copy(v),t.background=null,S=!0):(T.color.copy(z0),S=!0);for(let z=0;z<6;z++){const O=z%3;O===0?(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[z],u.y,u.z)):O===1?(p.up.set(0,0,m[z]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[z],u.z)):(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[z]));const U=this._cubeSize;xc(l,O*U,z>2?U:0,U,U),_.setRenderTarget(l),S&&_.render(C,p),_.render(t,p)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ys||t.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G0());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ri(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;xc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,md)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=B0[(l-u-1)%B0.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ri(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vr-1),C=u/T,S=isFinite(u)?1+Math.floor(g*C):vr;S>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vr}`);const v=[];let z=0;for(let B=0;B<vr;++B){const X=B/C,D=Math.exp(-X*X/2);v.push(D),B===0?z+=D:B<S&&(z+=2*D)}for(let B=0;B<v.length;B++)v[B]=v[B]/z;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=T,x.mipInt.value=O-r;const U=this._sizeLods[l],G=3*U*(l>O-ms?l-O+ms:0),F=4*(this._cubeSize-U);xc(i,G,F,3*U,2*U),p.setRenderTarget(i),p.render(_,md)}}function UE(s){const t=[],i=[],r=[];let l=s;const u=s-ms+1+I0.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>s-ms?p=I0[d-s+ms-1]:d===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,C=3,S=2,v=1,z=new Float32Array(C*T*M),O=new Float32Array(S*T*M),U=new Float32Array(v*T*M);for(let F=0;F<M;F++){const B=F%3*2/3-1,X=F>2?0:-1,D=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];z.set(D,C*T*F),O.set(x,S*T*F);const w=[F,F,F,F,F,F];U.set(w,v*T*F)}const G=new Va;G.setAttribute("position",new vi(z,C)),G.setAttribute("uv",new vi(O,S)),G.setAttribute("faceIndex",new vi(U,v)),t.push(G),l>ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function H0(s,t,i){const r=new Mr(s,t,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function NE(s,t,i){const r=new Float32Array(vr),l=new st(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mh(),fragmentShader:`

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
	`}function LE(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Nd||p===Ld,g=p===ys||p===Ss;if(m||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new F0(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new F0(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function u(h){const p=h.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function OE(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&vs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function PE(s,t,i,r){const l={},u=new WeakMap;function d(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,T=_.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let O=0,U=z.length;O<U;O+=3){const G=z[O+0],F=z[O+1],B=z[O+2];x.push(G,F,F,B,B,G)}}else if(T!==void 0){const z=T.array;C=T.version;for(let O=0,U=z.length/3-1;O<U;O+=3){const G=O+0,F=O+1,B=O+2;x.push(G,F,F,B,B,G)}}else return;const S=new(Rv(x)?Lv:Nv)(x,1);S.version=C;const v=u.get(_);v&&t.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function IE(s,t,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function p(x,M){s.drawElements(r,M,u,x*d),i.update(M,r,1)}function m(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,u,x*d,T),i.update(M,r,T))}function g(x,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,T);let S=0;for(let v=0;v<T;v++)S+=M[v];i.update(S,r,1)}function _(x,M,T,C){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/d,M[v],C[v]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,C,0,T);let v=0;for(let z=0;z<T;z++)v+=M[z]*C[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zE(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function BE(s,t,i){const r=new WeakMap,l=new Ke;function u(d,h,p){const m=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let w=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let U=0;T===!0&&(U=1),C===!0&&(U=2),S===!0&&(U=3);let G=h.attributes.position.count*U,F=1;G>t.maxTextureSize&&(F=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*F*4*_),X=new wv(B,G,F,_);X.type=ea,X.needsUpdate=!0;const D=U*4;for(let V=0;V<_;V++){const lt=v[V],ot=z[V],_t=O[V],ht=G*F*4*V;for(let I=0;I<lt.count;I++){const K=I*D;T===!0&&(l.fromBufferAttribute(lt,I),B[ht+K+0]=l.x,B[ht+K+1]=l.y,B[ht+K+2]=l.z,B[ht+K+3]=0),C===!0&&(l.fromBufferAttribute(ot,I),B[ht+K+4]=l.x,B[ht+K+5]=l.y,B[ht+K+6]=l.z,B[ht+K+7]=0),S===!0&&(l.fromBufferAttribute(_t,I),B[ht+K+8]=l.x,B[ht+K+9]=l.y,B[ht+K+10]=l.z,B[ht+K+11]=_t.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new De(G,F)},r.set(h,x),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function FE(s,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function d(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:d}}const Gv=new Gn,k0=new zv(1,1),Vv=new wv,kv=new fS,jv=new Iv,j0=[],X0=[],W0=new Float32Array(16),q0=new Float32Array(9),Y0=new Float32Array(4);function As(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=j0[l];if(u===void 0&&(u=new Float32Array(l),j0[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(u,h)}return u}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Oc(s,t){let i=X0[t];i===void 0&&(i=new Int32Array(t),X0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function HE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function GE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function VE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function kE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function jE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;Y0.set(r),s.uniformMatrix2fv(this.addr,!1,Y0),dn(i,r)}}function XE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;q0.set(r),s.uniformMatrix3fv(this.addr,!1,q0),dn(i,r)}}function WE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;W0.set(r),s.uniformMatrix4fv(this.addr,!1,W0),dn(i,r)}}function qE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function YE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function ZE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function KE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function QE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function JE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function $E(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function t1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function e1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(k0.compareFunction=Av,u=k0):u=Gv,i.setTexture2D(t||u,l)}function n1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||kv,l)}function i1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||jv,l)}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Vv,l)}function r1(s){switch(s){case 5126:return HE;case 35664:return GE;case 35665:return VE;case 35666:return kE;case 35674:return jE;case 35675:return XE;case 35676:return WE;case 5124:case 35670:return qE;case 35667:case 35671:return YE;case 35668:case 35672:return ZE;case 35669:case 35673:return KE;case 5125:return QE;case 36294:return JE;case 36295:return $E;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return a1}}function s1(s,t){s.uniform1fv(this.addr,t)}function o1(s,t){const i=As(t,this.size,2);s.uniform2fv(this.addr,i)}function l1(s,t){const i=As(t,this.size,3);s.uniform3fv(this.addr,i)}function c1(s,t){const i=As(t,this.size,4);s.uniform4fv(this.addr,i)}function u1(s,t){const i=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function f1(s,t){const i=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function d1(s,t){const i=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function h1(s,t){s.uniform1iv(this.addr,t)}function p1(s,t){s.uniform2iv(this.addr,t)}function m1(s,t){s.uniform3iv(this.addr,t)}function g1(s,t){s.uniform4iv(this.addr,t)}function v1(s,t){s.uniform1uiv(this.addr,t)}function _1(s,t){s.uniform2uiv(this.addr,t)}function x1(s,t){s.uniform3uiv(this.addr,t)}function y1(s,t){s.uniform4uiv(this.addr,t)}function S1(s,t,i){const r=this.cache,l=t.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Gv,u[d])}function M1(s,t,i){const r=this.cache,l=t.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||kv,u[d])}function b1(s,t,i){const r=this.cache,l=t.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||jv,u[d])}function E1(s,t,i){const r=this.cache,l=t.length,u=Oc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Vv,u[d])}function T1(s){switch(s){case 5126:return s1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return f1;case 35676:return d1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return _1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return E1}}class A1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=r1(i.type)}}class R1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T1(i.type)}}class w1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function Z0(s,t){s.seq.push(t),s.map[t.id]=t}function C1(s,t,i){const r=s.name,l=r.length;for(yd.lastIndex=0;;){const u=yd.exec(r),d=yd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){Z0(i,m===void 0?new A1(h,s,t):new R1(h,s,t));break}else{let _=i.map[h];_===void 0&&(_=new w1(h),Z0(i,_)),i=_}}}class Ac{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);C1(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function K0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const D1=37297;let U1=0;function N1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Q0=new se;function L1(s){Te._getMatrix(Q0,Te.workingColorSpace,s);const t=`mat3( ${Q0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case Cc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function J0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+N1(s.getShaderSource(t),d)}else return l}function O1(s,t){const i=L1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function P1(s,t){let i;switch(t){case zy:i="Linear";break;case By:i="Reinhard";break;case Fy:i="Cineon";break;case Hy:i="ACESFilmic";break;case Vy:i="AgX";break;case ky:i="Neutral";break;case Gy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const yc=new st;function I1(){Te.getLuminanceCoefficients(yc);const s=yc.x.toFixed(4),t=yc.y.toFixed(4),i=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function B1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function F1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function No(s){return s!==""}function $0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(s){return s.replace(H1,V1)}const G1=new Map;function V1(s,t){let i=le[t];if(i===void 0){const r=G1.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ch(i)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(s){return s.replace(k1,j1)}function j1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function nv(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===gy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function W1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case Ss:t="ENVMAP_TYPE_CUBE";break;case Nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Y1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mv:t="ENVMAP_BLENDING_MULTIPLY";break;case Py:t="ENVMAP_BLENDING_MIX";break;case Iy:t="ENVMAP_BLENDING_ADD";break}return t}function Z1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function K1(s,t,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=X1(i),m=W1(i),g=q1(i),_=Y1(i),x=Z1(i),M=z1(i),T=B1(u),C=l.createProgram();let S,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),v.length>0&&(v+=`
`)):(S=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),v=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?le.tonemapping_pars_fragment:"",i.toneMapping!==Fa?P1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,O1("linearToOutputTexel",i.outputColorSpace),I1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=ch(d),d=$0(d,i),d=tv(d,i),h=ch(h),h=$0(h,i),h=tv(h,i),d=ev(d),h=ev(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=z+S+d,U=z+v+h,G=K0(l,l.VERTEX_SHADER,O),F=K0(l,l.FRAGMENT_SHADER,U);l.attachShader(C,G),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(C).trim(),ot=l.getShaderInfoLog(G).trim(),_t=l.getShaderInfoLog(F).trim();let ht=!0,I=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,G,F);else{const K=J0(l,G,"vertex"),Y=J0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+K+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(ot===""||_t==="")&&(I=!1);I&&(V.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:ot,prefix:S},fragmentShader:{log:_t,prefix:v}})}l.deleteShader(G),l.deleteShader(F),X=new Ac(l,C),D=F1(l,C)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,D1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=U1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=F,this}let Q1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new $1(t),i.set(t,r)),r}}class $1{constructor(t){this.id=Q1++,this.code=t,this.usedTimes=0}}function tT(s,t,i,r,l,u,d){const h=new Cv,p=new J1,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return m.add(D),D===0?"uv":`uv${D}`}function S(D,w,V,lt,ot){const _t=lt.fog,ht=ot.geometry,I=D.isMeshStandardMaterial?lt.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),Y=K&&K.mapping===Nc?K.image.height:null,bt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const N=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,tt=N!==void 0?N.length:0;let xt=0;ht.morphAttributes.position!==void 0&&(xt=1),ht.morphAttributes.normal!==void 0&&(xt=2),ht.morphAttributes.color!==void 0&&(xt=3);let St,J,mt,Mt;if(bt){const be=Ei[bt];St=be.vertexShader,J=be.fragmentShader}else St=D.vertexShader,J=D.fragmentShader,p.update(D),mt=p.getVertexShaderID(D),Mt=p.getFragmentShaderID(D);const Rt=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),oe=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,Oe=!!D.map,Fe=!!D.matcap,me=!!K,H=!!D.aoMap,xn=!!D.lightMap,Se=!!D.bumpMap,de=!!D.normalMap,Vt=!!D.displacementMap,ge=!!D.emissiveMap,Yt=!!D.metalnessMap,ae=!!D.roughnessMap,Je=D.anisotropy>0,L=D.clearcoat>0,b=D.dispersion>0,et=D.iridescence>0,ft=D.sheen>0,pt=D.transmission>0,ct=Je&&!!D.anisotropyMap,Pt=L&&!!D.clearcoatMap,Ut=L&&!!D.clearcoatNormalMap,Gt=L&&!!D.clearcoatRoughnessMap,kt=et&&!!D.iridescenceMap,yt=et&&!!D.iridescenceThicknessMap,It=ft&&!!D.sheenColorMap,Wt=ft&&!!D.sheenRoughnessMap,qt=!!D.specularMap,wt=!!D.specularColorMap,ie=!!D.specularIntensityMap,j=pt&&!!D.transmissionMap,Nt=pt&&!!D.thicknessMap,Et=!!D.gradientMap,zt=!!D.alphaMap,At=D.alphaTest>0,vt=!!D.alphaHash,Ft=!!D.extensions;let ne=Fa;D.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=s.toneMapping);const Ue={shaderID:bt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:J,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:oe,instancingColor:oe&&ot.instanceColor!==null,instancingMorph:oe&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ms,alphaToCoverage:!!D.alphaToCoverage,map:Oe,matcap:Fe,envMap:me,envMapMode:me&&K.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:xn,bumpMap:Se,normalMap:de,displacementMap:x&&Vt,emissiveMap:ge,normalMapObjectSpace:de&&D.normalMapType===qy,normalMapTangentSpace:de&&D.normalMapType===Tv,metalnessMap:Yt,roughnessMap:ae,anisotropy:Je,anisotropyMap:ct,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:b,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:yt,sheen:ft,sheenColorMap:It,sheenRoughnessMap:Wt,specularMap:qt,specularColorMap:wt,specularIntensityMap:ie,transmission:pt,transmissionMap:j,thicknessMap:Nt,gradientMap:Et,opaque:D.transparent===!1&&D.blending===gs&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:At,alphaHash:vt,combine:D.combine,mapUv:Oe&&C(D.map.channel),aoMapUv:H&&C(D.aoMap.channel),lightMapUv:xn&&C(D.lightMap.channel),bumpMapUv:Se&&C(D.bumpMap.channel),normalMapUv:de&&C(D.normalMap.channel),displacementMapUv:Vt&&C(D.displacementMap.channel),emissiveMapUv:ge&&C(D.emissiveMap.channel),metalnessMapUv:Yt&&C(D.metalnessMap.channel),roughnessMapUv:ae&&C(D.roughnessMap.channel),anisotropyMapUv:ct&&C(D.anisotropyMap.channel),clearcoatMapUv:Pt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:It&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&C(D.sheenRoughnessMap.channel),specularMapUv:qt&&C(D.specularMap.channel),specularColorMapUv:wt&&C(D.specularColorMap.channel),specularIntensityMapUv:ie&&C(D.specularIntensityMap.channel),transmissionMapUv:j&&C(D.transmissionMap.channel),thicknessMapUv:Nt&&C(D.thicknessMap.channel),alphaMapUv:zt&&C(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(de||Je),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ht.attributes.uv&&(Oe||zt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ct,skinning:ot.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:Oe&&D.map.isVideoTexture===!0&&Te.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:ge&&D.emissiveMap.isVideoTexture===!0&&Te.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ti,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ue.vertexUv1s=m.has(1),Ue.vertexUv2s=m.has(2),Ue.vertexUv3s=m.has(3),m.clear(),Ue}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(z(w,D),O(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function z(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function O(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const w=T[D.type];let V;if(w){const lt=Ei[w];V=TS.clone(lt.uniforms)}else V=D.uniforms;return V}function G(D,w){let V;for(let lt=0,ot=g.length;lt<ot;lt++){const _t=g[lt];if(_t.cacheKey===w){V=_t,++V.usedTimes;break}}return V===void 0&&(V=new K1(s,w,D,u),g.push(V)),V}function F(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function B(D){p.remove(D)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:U,acquireProgram:G,releaseProgram:F,releaseShaderCache:B,programs:g,dispose:X}}function eT(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,p){s.get(d)[h]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function nT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function iv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function av(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(_,x,M,T,C,S){let v=s[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:C,group:S},s[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=C,v.group=S),t++,v}function h(_,x,M,T,C,S){const v=d(_,x,M,T,C,S);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(_,x,M,T,C,S){const v=d(_,x,M,T,C,S);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,x){i.length>1&&i.sort(_||nT),r.length>1&&r.sort(x||iv),l.length>1&&l.sort(x||iv)}function g(){for(let _=t,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:p,finish:g,sort:m}}function iT(){let s=new WeakMap;function t(r,l){const u=s.get(r);let d;return u===void 0?(d=new av,s.set(r,[d])):l>=u.length?(d=new av,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function aT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new st,color:new we};break;case"SpotLight":i={position:new st,direction:new st,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new st,halfWidth:new st,halfHeight:new st};break}return s[t.id]=i,i}}}function rT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let sT=0;function oT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lT(s){const t=new aT,i=rT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new st);const l=new st,u=new Qe,d=new Qe;function h(m){let g=0,_=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,C=0,S=0,v=0,z=0,O=0,U=0,G=0,F=0,B=0;m.sort(oT);for(let D=0,w=m.length;D<w;D++){const V=m[D],lt=V.color,ot=V.intensity,_t=V.distance,ht=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=lt.r*ot,_+=lt.g*ot,x+=lt.b*ot;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],ot);B++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=V.shadow.matrix,z++}r.directional[M]=I,M++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(lt).multiplyScalar(ot),I.distance=_t,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[C]=I;const K=V.shadow;if(V.map&&(r.spotLightMap[G]=V.map,G++,K.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=K.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=ht,U++}C++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(lt).multiplyScalar(ot),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=I,S++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=ht,r.pointShadowMatrix[T]=V.shadow.matrix,O++}r.point[T]=I,T++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(ot),I.groundColor.copy(V.groundColor).multiplyScalar(ot),r.hemi[v]=I,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==C||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==z||X.numPointShadows!==O||X.numSpotShadows!==U||X.numSpotMaps!==G||X.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,X.directionalLength=M,X.pointLength=T,X.spotLength=C,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=z,X.numPointShadows=O,X.numSpotShadows=U,X.numSpotMaps=G,X.numLightProbes=B,r.version=sT++)}function p(m,g){let _=0,x=0,M=0,T=0,C=0;const S=g.matrixWorldInverse;for(let v=0,z=m.length;v<z;v++){const O=m[v];if(O.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(O.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const U=r.rectArea[T];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),d.identity(),u.copy(O.matrixWorld),u.premultiply(S),d.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(S),C++}}}return{setup:h,setupView:p,state:r}}function rv(s){const t=new lT(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:d}}function cT(s){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new rv(s),t.set(l,[h])):u>=d.length?(h=new rv(s),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const uT=`void main() {
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
}`;function dT(s,t,i){let r=new Sh;const l=new De,u=new De,d=new Ke,h=new PS({depthPacking:Wy}),p=new IS,m={},g=i.maxTextureSize,_={[Ha]:Hn,[Hn]:Ha,[Ti]:Ti},x=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:uT,fragmentShader:fT}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new Va;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ri(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pv;let v=this.type;this.render=function(F,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Ba),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ot=v!==ta&&this.type===ta,_t=v===ta&&this.type!==ta;for(let ht=0,I=F.length;ht<I;ht++){const K=F[ht],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const bt=Y.getFrameExtents();if(l.multiply(bt),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/bt.x),l.x=u.x*bt.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/bt.y),l.y=u.y*bt.y,Y.mapSize.y=u.y)),Y.map===null||ot===!0||_t===!0){const tt=this.type!==ta?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mr(l.x,l.y,tt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let tt=0;tt<N;tt++){const xt=Y.getViewport(tt);d.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),lt.viewport(d),Y.updateMatrices(K,tt),r=Y.getFrustum(),U(B,X,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&z(Y,X),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(D,w,V)};function z(F,B){const X=t.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,X,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,X,M,C,null)}function O(F,B,X,D){let w=null;const V=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)w=V;else if(w=X.isPointLight===!0?p:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const lt=w.uuid,ot=B.uuid;let _t=m[lt];_t===void 0&&(_t={},m[lt]=_t);let ht=_t[ot];ht===void 0&&(ht=w.clone(),_t[ot]=ht,B.addEventListener("dispose",G)),w=ht}if(w.visible=B.visible,w.wireframe=B.wireframe,D===ta?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const lt=s.properties.get(w);lt.light=X}return w}function U(F,B,X,D,w){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===ta)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const ot=t.update(F),_t=F.material;if(Array.isArray(_t)){const ht=ot.groups;for(let I=0,K=ht.length;I<K;I++){const Y=ht[I],bt=_t[Y.materialIndex];if(bt&&bt.visible){const N=O(F,bt,D,w);F.onBeforeShadow(s,F,B,X,ot,N,Y),s.renderBufferDirect(X,null,ot,N,F,Y),F.onAfterShadow(s,F,B,X,ot,N,Y)}}}else if(_t.visible){const ht=O(F,_t,D,w);F.onBeforeShadow(s,F,B,X,ot,ht,null),s.renderBufferDirect(X,null,ot,ht,F,null),F.onAfterShadow(s,F,B,X,ot,ht,null)}}const lt=F.children;for(let ot=0,_t=lt.length;ot<_t;ot++)U(lt[ot],B,X,D,w)}function G(F){F.target.removeEventListener("dispose",G);for(const X in m){const D=m[X],w=F.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const hT={[Td]:Ad,[Rd]:Dd,[wd]:Ud,[xs]:Cd,[Ad]:Td,[Dd]:Rd,[Ud]:wd,[Cd]:xs};function pT(s,t){function i(){let j=!1;const Nt=new Ke;let Et=null;const zt=new Ke(0,0,0,0);return{setMask:function(At){Et!==At&&!j&&(s.colorMask(At,At,At,At),Et=At)},setLocked:function(At){j=At},setClear:function(At,vt,Ft,ne,Ue){Ue===!0&&(At*=ne,vt*=ne,Ft*=ne),Nt.set(At,vt,Ft,ne),zt.equals(Nt)===!1&&(s.clearColor(At,vt,Ft,ne),zt.copy(Nt))},reset:function(){j=!1,Et=null,zt.set(-1,0,0,0)}}}function r(){let j=!1,Nt=!1,Et=null,zt=null,At=null;return{setReversed:function(vt){if(Nt!==vt){const Ft=t.get("EXT_clip_control");vt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(vt){vt?Rt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(vt){Et!==vt&&!j&&(s.depthMask(vt),Et=vt)},setFunc:function(vt){if(Nt&&(vt=hT[vt]),zt!==vt){switch(vt){case Td:s.depthFunc(s.NEVER);break;case Ad:s.depthFunc(s.ALWAYS);break;case Rd:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Cd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}zt=vt}},setLocked:function(vt){j=vt},setClear:function(vt){At!==vt&&(Nt&&(vt=1-vt),s.clearDepth(vt),At=vt)},reset:function(){j=!1,Et=null,zt=null,At=null,Nt=!1}}}function l(){let j=!1,Nt=null,Et=null,zt=null,At=null,vt=null,Ft=null,ne=null,Ue=null;return{setTest:function(be){j||(be?Rt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(be){Nt!==be&&!j&&(s.stencilMask(be),Nt=be)},setFunc:function(be,Vn,hn){(Et!==be||zt!==Vn||At!==hn)&&(s.stencilFunc(be,Vn,hn),Et=be,zt=Vn,At=hn)},setOp:function(be,Vn,hn){(vt!==be||Ft!==Vn||ne!==hn)&&(s.stencilOp(be,Vn,hn),vt=be,Ft=Vn,ne=hn)},setLocked:function(be){j=be},setClear:function(be){Ue!==be&&(s.clearStencil(be),Ue=be)},reset:function(){j=!1,Nt=null,Et=null,zt=null,At=null,vt=null,Ft=null,ne=null,Ue=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],T=null,C=!1,S=null,v=null,z=null,O=null,U=null,G=null,F=null,B=new we(0,0,0),X=0,D=!1,w=null,V=null,lt=null,ot=null,_t=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=K>=2);let bt=null,N={};const tt=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),St=new Ke().fromArray(tt),J=new Ke().fromArray(xt);function mt(j,Nt,Et,zt){const At=new Uint8Array(4),vt=s.createTexture();s.bindTexture(j,vt),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Et;Ft++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Nt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return vt}const Mt={};Mt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Rt(s.DEPTH_TEST),d.setFunc(xs),Se(!1),de(c0),Rt(s.CULL_FACE),H(Ba);function Rt(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Ct(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function oe(j,Nt){return _[j]!==Nt?(s.bindFramebuffer(j,Nt),_[j]=Nt,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Nt),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(j,Nt){let Et=M,zt=!1;if(j){Et=x.get(Nt),Et===void 0&&(Et=[],x.set(Nt,Et));const At=j.textures;if(Et.length!==At.length||Et[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Ft=At.length;vt<Ft;vt++)Et[vt]=s.COLOR_ATTACHMENT0+vt;Et.length=At.length,zt=!0}}else Et[0]!==s.BACK&&(Et[0]=s.BACK,zt=!0);zt&&s.drawBuffers(Et)}function Oe(j){return T!==j?(s.useProgram(j),T=j,!0):!1}const Fe={[gr]:s.FUNC_ADD,[_y]:s.FUNC_SUBTRACT,[xy]:s.FUNC_REVERSE_SUBTRACT};Fe[yy]=s.MIN,Fe[Sy]=s.MAX;const me={[My]:s.ZERO,[by]:s.ONE,[Ey]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[Dy]:s.SRC_ALPHA_SATURATE,[wy]:s.DST_COLOR,[Ay]:s.DST_ALPHA,[Ty]:s.ONE_MINUS_SRC_COLOR,[Ed]:s.ONE_MINUS_SRC_ALPHA,[Cy]:s.ONE_MINUS_DST_COLOR,[Ry]:s.ONE_MINUS_DST_ALPHA,[Uy]:s.CONSTANT_COLOR,[Ny]:s.ONE_MINUS_CONSTANT_COLOR,[Ly]:s.CONSTANT_ALPHA,[Oy]:s.ONE_MINUS_CONSTANT_ALPHA};function H(j,Nt,Et,zt,At,vt,Ft,ne,Ue,be){if(j===Ba){C===!0&&(Ct(s.BLEND),C=!1);return}if(C===!1&&(Rt(s.BLEND),C=!0),j!==vy){if(j!==S||be!==D){if((v!==gr||U!==gr)&&(s.blendEquation(s.FUNC_ADD),v=gr,U=gr),be)switch(j){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case u0:s.blendFunc(s.ONE,s.ONE);break;case f0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case u0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case f0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}z=null,O=null,G=null,F=null,B.set(0,0,0),X=0,S=j,D=be}return}At=At||Nt,vt=vt||Et,Ft=Ft||zt,(Nt!==v||At!==U)&&(s.blendEquationSeparate(Fe[Nt],Fe[At]),v=Nt,U=At),(Et!==z||zt!==O||vt!==G||Ft!==F)&&(s.blendFuncSeparate(me[Et],me[zt],me[vt],me[Ft]),z=Et,O=zt,G=vt,F=Ft),(ne.equals(B)===!1||Ue!==X)&&(s.blendColor(ne.r,ne.g,ne.b,Ue),B.copy(ne),X=Ue),S=j,D=!1}function xn(j,Nt){j.side===Ti?Ct(s.CULL_FACE):Rt(s.CULL_FACE);let Et=j.side===Hn;Nt&&(Et=!Et),Se(Et),j.blending===gs&&j.transparent===!1?H(Ba):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const zt=j.stencilWrite;h.setTest(zt),zt&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ge(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(j){w!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),w=j)}function de(j){j!==py?(Rt(s.CULL_FACE),j!==V&&(j===c0?s.cullFace(s.BACK):j===my?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),V=j}function Vt(j){j!==lt&&(I&&s.lineWidth(j),lt=j)}function ge(j,Nt,Et){j?(Rt(s.POLYGON_OFFSET_FILL),(ot!==Nt||_t!==Et)&&(s.polygonOffset(Nt,Et),ot=Nt,_t=Et)):Ct(s.POLYGON_OFFSET_FILL)}function Yt(j){j?Rt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function ae(j){j===void 0&&(j=s.TEXTURE0+ht-1),bt!==j&&(s.activeTexture(j),bt=j)}function Je(j,Nt,Et){Et===void 0&&(bt===null?Et=s.TEXTURE0+ht-1:Et=bt);let zt=N[Et];zt===void 0&&(zt={type:void 0,texture:void 0},N[Et]=zt),(zt.type!==j||zt.texture!==Nt)&&(bt!==Et&&(s.activeTexture(Et),bt=Et),s.bindTexture(j,Nt||Mt[j]),zt.type=j,zt.texture=Nt)}function L(){const j=N[bt];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ft(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ut(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Gt(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function kt(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function yt(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function It(j){St.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),St.copy(j))}function Wt(j){J.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function qt(j,Nt){let Et=m.get(Nt);Et===void 0&&(Et=new WeakMap,m.set(Nt,Et));let zt=Et.get(j);zt===void 0&&(zt=s.getUniformBlockIndex(Nt,j.name),Et.set(j,zt))}function wt(j,Nt){const zt=m.get(Nt).get(j);p.get(Nt)!==zt&&(s.uniformBlockBinding(Nt,zt,j.__bindingPointIndex),p.set(Nt,zt))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},bt=null,N={},_={},x=new WeakMap,M=[],T=null,C=!1,S=null,v=null,z=null,O=null,U=null,G=null,F=null,B=new we(0,0,0),X=0,D=!1,w=null,V=null,lt=null,ot=null,_t=null,St.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Rt,disable:Ct,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Oe,setBlending:H,setMaterial:xn,setFlipSided:Se,setCullFace:de,setLineWidth:Vt,setPolygonOffset:ge,setScissorTest:Yt,activeTexture:ae,bindTexture:Je,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:kt,texImage3D:yt,updateUBOMapping:qt,uniformBlockBinding:wt,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ft,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:It,viewport:Wt,reset:ie}}function mT(s,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new De,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return M?new OffscreenCanvas(L,b):Uc("canvas")}function C(L,b,et){let ft=1;const pt=Je(L);if((pt.width>et||pt.height>et)&&(ft=et/Math.max(pt.width,pt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(ft*pt.width),Pt=Math.floor(ft*pt.height);_===void 0&&(_=T(ct,Pt));const Ut=b?T(ct,Pt):_;return Ut.width=ct,Ut.height=Pt,Ut.getContext("2d").drawImage(L,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ct+"x"+Pt+")."),Ut}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(L,b,et,ft,pt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=b;if(b===s.RED&&(et===s.FLOAT&&(ct=s.R32F),et===s.HALF_FLOAT&&(ct=s.R16F),et===s.UNSIGNED_BYTE&&(ct=s.R8)),b===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.R8UI),et===s.UNSIGNED_SHORT&&(ct=s.R16UI),et===s.UNSIGNED_INT&&(ct=s.R32UI),et===s.BYTE&&(ct=s.R8I),et===s.SHORT&&(ct=s.R16I),et===s.INT&&(ct=s.R32I)),b===s.RG&&(et===s.FLOAT&&(ct=s.RG32F),et===s.HALF_FLOAT&&(ct=s.RG16F),et===s.UNSIGNED_BYTE&&(ct=s.RG8)),b===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.RG8UI),et===s.UNSIGNED_SHORT&&(ct=s.RG16UI),et===s.UNSIGNED_INT&&(ct=s.RG32UI),et===s.BYTE&&(ct=s.RG8I),et===s.SHORT&&(ct=s.RG16I),et===s.INT&&(ct=s.RG32I)),b===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),et===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),et===s.UNSIGNED_INT&&(ct=s.RGB32UI),et===s.BYTE&&(ct=s.RGB8I),et===s.SHORT&&(ct=s.RGB16I),et===s.INT&&(ct=s.RGB32I)),b===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),et===s.UNSIGNED_INT&&(ct=s.RGBA32UI),et===s.BYTE&&(ct=s.RGBA8I),et===s.SHORT&&(ct=s.RGBA16I),et===s.INT&&(ct=s.RGBA32I)),b===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),b===s.RGBA){const Pt=pt?Cc:Te.getTransfer(ft);et===s.FLOAT&&(ct=s.RGBA32F),et===s.HALF_FLOAT&&(ct=s.RGBA16F),et===s.UNSIGNED_BYTE&&(ct=Pt===Be?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function U(L,b){let et;return L?b===null||b===Sr||b===Oo?et=s.DEPTH24_STENCIL8:b===ea?et=s.DEPTH32F_STENCIL8:b===Lo&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Sr||b===Oo?et=s.DEPTH_COMPONENT24:b===ea?et=s.DEPTH_COMPONENT32F:b===Lo&&(et=s.DEPTH_COMPONENT16),et}function G(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==Ai?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function F(L){const b=L.target;b.removeEventListener("dispose",F),X(b),b.isVideoTexture&&g.delete(b)}function B(L){const b=L.target;b.removeEventListener("dispose",B),w(b)}function X(L){const b=r.get(L);if(b.__webglInit===void 0)return;const et=L.source,ft=x.get(et);if(ft){const pt=ft[b.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&D(L),Object.keys(ft).length===0&&x.delete(et)}r.remove(L)}function D(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const et=L.source,ft=x.get(et);delete ft[b.__cacheKey],d.memory.textures--}function w(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let pt=0;pt<b.__webglFramebuffer[ft].length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[ft][pt]);else s.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)s.deleteFramebuffer(b.__webglFramebuffer[ft]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=L.textures;for(let ft=0,pt=et.length;ft<pt;ft++){const ct=r.get(et[ft]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),d.memory.textures--),r.remove(et[ft])}r.remove(L)}let V=0;function lt(){V=0}function ot(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function _t(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ht(L,b){const et=r.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,L,b);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+b)}function I(L,b){const et=r.get(L);if(L.version>0&&et.__version!==L.version){Mt(et,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+b)}function K(L,b){const et=r.get(L);if(L.version>0&&et.__version!==L.version){Mt(et,L,b);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const et=r.get(L);if(L.version>0&&et.__version!==L.version){Rt(et,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+b)}const bt={[Od]:s.REPEAT,[_r]:s.CLAMP_TO_EDGE,[Pd]:s.MIRRORED_REPEAT},N={[gi]:s.NEAREST,[jy]:s.NEAREST_MIPMAP_NEAREST,[$l]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[kf]:s.LINEAR_MIPMAP_NEAREST,[xr]:s.LINEAR_MIPMAP_LINEAR},tt={[Yy]:s.NEVER,[tS]:s.ALWAYS,[Zy]:s.LESS,[Av]:s.LEQUAL,[Ky]:s.EQUAL,[$y]:s.GEQUAL,[Qy]:s.GREATER,[Jy]:s.NOTEQUAL};function xt(L,b){if(b.type===ea&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ai||b.magFilter===kf||b.magFilter===$l||b.magFilter===xr||b.minFilter===Ai||b.minFilter===kf||b.minFilter===$l||b.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,bt[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,bt[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,bt[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gi||b.minFilter!==$l&&b.minFilter!==xr||b.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function St(L,b){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",F));const ft=b.source;let pt=x.get(ft);pt===void 0&&(pt={},x.set(ft,pt));const ct=_t(b);if(ct!==L.__cacheKey){pt[ct]===void 0&&(pt[ct]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,et=!0),pt[ct].usedTimes++;const Pt=pt[L.__cacheKey];Pt!==void 0&&(pt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(b)),L.__cacheKey=ct,L.__webglTexture=pt[ct].texture}return et}function J(L,b,et){return Math.floor(Math.floor(L/et)/b)}function mt(L,b,et,ft){const ct=L.updateRanges;if(ct.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,et,ft,b.data);else{ct.sort((yt,It)=>yt.start-It.start);let Pt=0;for(let yt=1;yt<ct.length;yt++){const It=ct[Pt],Wt=ct[yt],qt=It.start+It.count,wt=J(Wt.start,b.width,4),ie=J(It.start,b.width,4);Wt.start<=qt+1&&wt===ie&&J(Wt.start+Wt.count-1,b.width,4)===wt?It.count=Math.max(It.count,Wt.start+Wt.count-It.start):(++Pt,ct[Pt]=Wt)}ct.length=Pt+1;const Ut=s.getParameter(s.UNPACK_ROW_LENGTH),Gt=s.getParameter(s.UNPACK_SKIP_PIXELS),kt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let yt=0,It=ct.length;yt<It;yt++){const Wt=ct[yt],qt=Math.floor(Wt.start/4),wt=Math.ceil(Wt.count/4),ie=qt%b.width,j=Math.floor(qt/b.width),Nt=wt,Et=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,j),i.texSubImage2D(s.TEXTURE_2D,0,ie,j,Nt,Et,et,ft,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,kt)}}function Mt(L,b,et){let ft=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=s.TEXTURE_3D);const pt=St(L,b),ct=b.source;i.bindTexture(ft,L.__webglTexture,s.TEXTURE0+et);const Pt=r.get(ct);if(ct.version!==Pt.__version||pt===!0){i.activeTexture(s.TEXTURE0+et);const Ut=Te.getPrimaries(Te.workingColorSpace),Gt=b.colorSpace===za?null:Te.getPrimaries(b.colorSpace),kt=b.colorSpace===za||Ut===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let yt=C(b.image,!1,l.maxTextureSize);yt=ae(b,yt);const It=u.convert(b.format,b.colorSpace),Wt=u.convert(b.type);let qt=O(b.internalFormat,It,Wt,b.colorSpace,b.isVideoTexture);xt(ft,b);let wt;const ie=b.mipmaps,j=b.isVideoTexture!==!0,Nt=Pt.__version===void 0||pt===!0,Et=ct.dataReady,zt=G(b,yt);if(b.isDepthTexture)qt=U(b.format===Io,b.type),Nt&&(j?i.texStorage2D(s.TEXTURE_2D,1,qt,yt.width,yt.height):i.texImage2D(s.TEXTURE_2D,0,qt,yt.width,yt.height,0,It,Wt,null));else if(b.isDataTexture)if(ie.length>0){j&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,qt,ie[0].width,ie[0].height);for(let At=0,vt=ie.length;At<vt;At++)wt=ie[At],j?Et&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,wt.width,wt.height,It,Wt,wt.data):i.texImage2D(s.TEXTURE_2D,At,qt,wt.width,wt.height,0,It,Wt,wt.data);b.generateMipmaps=!1}else j?(Nt&&i.texStorage2D(s.TEXTURE_2D,zt,qt,yt.width,yt.height),Et&&mt(b,yt,It,Wt)):i.texImage2D(s.TEXTURE_2D,0,qt,yt.width,yt.height,0,It,Wt,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,qt,ie[0].width,ie[0].height,yt.depth);for(let At=0,vt=ie.length;At<vt;At++)if(wt=ie[At],b.format!==mi)if(It!==null)if(j){if(Et)if(b.layerUpdates.size>0){const Ft=P0(wt.width,wt.height,b.format,b.type);for(const ne of b.layerUpdates){const Ue=wt.data.subarray(ne*Ft/wt.data.BYTES_PER_ELEMENT,(ne+1)*Ft/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,ne,wt.width,wt.height,1,It,Ue)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,yt.depth,It,wt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,qt,wt.width,wt.height,yt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Et&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,yt.depth,It,Wt,wt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,At,qt,wt.width,wt.height,yt.depth,0,It,Wt,wt.data)}else{j&&Nt&&i.texStorage2D(s.TEXTURE_2D,zt,qt,ie[0].width,ie[0].height);for(let At=0,vt=ie.length;At<vt;At++)wt=ie[At],b.format!==mi?It!==null?j?Et&&i.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,wt.width,wt.height,It,wt.data):i.compressedTexImage2D(s.TEXTURE_2D,At,qt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Et&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,wt.width,wt.height,It,Wt,wt.data):i.texImage2D(s.TEXTURE_2D,At,qt,wt.width,wt.height,0,It,Wt,wt.data)}else if(b.isDataArrayTexture)if(j){if(Nt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,zt,qt,yt.width,yt.height,yt.depth),Et)if(b.layerUpdates.size>0){const At=P0(yt.width,yt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ft=yt.data.subarray(vt*At/yt.data.BYTES_PER_ELEMENT,(vt+1)*At/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,It,Wt,Ft)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,It,Wt,yt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,qt,yt.width,yt.height,yt.depth,0,It,Wt,yt.data);else if(b.isData3DTexture)j?(Nt&&i.texStorage3D(s.TEXTURE_3D,zt,qt,yt.width,yt.height,yt.depth),Et&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,It,Wt,yt.data)):i.texImage3D(s.TEXTURE_3D,0,qt,yt.width,yt.height,yt.depth,0,It,Wt,yt.data);else if(b.isFramebufferTexture){if(Nt)if(j)i.texStorage2D(s.TEXTURE_2D,zt,qt,yt.width,yt.height);else{let At=yt.width,vt=yt.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(s.TEXTURE_2D,Ft,qt,At,vt,0,It,Wt,null),At>>=1,vt>>=1}}else if(ie.length>0){if(j&&Nt){const At=Je(ie[0]);i.texStorage2D(s.TEXTURE_2D,zt,qt,At.width,At.height)}for(let At=0,vt=ie.length;At<vt;At++)wt=ie[At],j?Et&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,It,Wt,wt):i.texImage2D(s.TEXTURE_2D,At,qt,It,Wt,wt);b.generateMipmaps=!1}else if(j){if(Nt){const At=Je(yt);i.texStorage2D(s.TEXTURE_2D,zt,qt,At.width,At.height)}Et&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Wt,yt)}else i.texImage2D(s.TEXTURE_2D,0,qt,It,Wt,yt);S(b)&&v(ft),Pt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Rt(L,b,et){if(b.image.length!==6)return;const ft=St(L,b),pt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+et);const ct=r.get(pt);if(pt.version!==ct.__version||ft===!0){i.activeTexture(s.TEXTURE0+et);const Pt=Te.getPrimaries(Te.workingColorSpace),Ut=b.colorSpace===za?null:Te.getPrimaries(b.colorSpace),Gt=b.colorSpace===za||Pt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,yt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let vt=0;vt<6;vt++)!kt&&!yt?It[vt]=C(b.image[vt],!0,l.maxCubemapSize):It[vt]=yt?b.image[vt].image:b.image[vt],It[vt]=ae(b,It[vt]);const Wt=It[0],qt=u.convert(b.format,b.colorSpace),wt=u.convert(b.type),ie=O(b.internalFormat,qt,wt,b.colorSpace),j=b.isVideoTexture!==!0,Nt=ct.__version===void 0||ft===!0,Et=pt.dataReady;let zt=G(b,Wt);xt(s.TEXTURE_CUBE_MAP,b);let At;if(kt){j&&Nt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ie,Wt.width,Wt.height);for(let vt=0;vt<6;vt++){At=It[vt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];b.format!==mi?qt!==null?j?Et&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ne.width,ne.height,qt,ne.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,0,0,ne.width,ne.height,qt,wt,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft,ie,ne.width,ne.height,0,qt,wt,ne.data)}}}else{if(At=b.mipmaps,j&&Nt){At.length>0&&zt++;const vt=Je(It[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ie,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){j?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It[vt].width,It[vt].height,qt,wt,It[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,It[vt].width,It[vt].height,0,qt,wt,It[vt].data);for(let Ft=0;Ft<At.length;Ft++){const Ue=At[Ft].image[vt].image;j?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,Ue.width,Ue.height,qt,wt,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ie,Ue.width,Ue.height,0,qt,wt,Ue.data)}}else{j?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,qt,wt,It[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,qt,wt,It[vt]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];j?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,0,0,qt,wt,ne.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ft+1,ie,qt,wt,ne.image[vt])}}}S(b)&&v(s.TEXTURE_CUBE_MAP),ct.__version=pt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ct(L,b,et,ft,pt,ct){const Pt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),Gt=O(et.internalFormat,Pt,Ut,et.colorSpace),kt=r.get(b),yt=r.get(et);if(yt.__renderTarget=b,!kt.__hasExternalTextures){const It=Math.max(1,b.width>>ct),Wt=Math.max(1,b.height>>ct);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?i.texImage3D(pt,ct,Gt,It,Wt,b.depth,0,Pt,Ut,null):i.texImage2D(pt,ct,Gt,It,Wt,0,Pt,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ge(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,pt,yt.__webglTexture,0,Vt(b)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,pt,yt.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(L,b,et){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const ft=b.depthTexture,pt=ft&&ft.isDepthTexture?ft.type:null,ct=U(b.stencilBuffer,pt),Pt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=Vt(b);ge(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ct,b.width,b.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,L)}else{const ft=b.textures;for(let pt=0;pt<ft.length;pt++){const ct=ft[pt],Pt=u.convert(ct.format,ct.colorSpace),Ut=u.convert(ct.type),Gt=O(ct.internalFormat,Pt,Ut,ct.colorSpace),kt=Vt(b);et&&ge(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Gt,b.width,b.height):ge(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,Gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht(b.depthTexture,0);const pt=ft.__webglTexture,ct=Vt(b);if(b.depthTexture.format===Po)ge(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(b.depthTexture.format===Io)ge(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Oe(L){const b=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const pt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",pt)};ft.addEventListener("dispose",pt),b.__depthDisposeCallback=pt}b.__boundDepthTexture=ft}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?Qt(b.__webglFramebuffer[0],L):Qt(b.__webglFramebuffer,L)}else if(et){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=s.createRenderbuffer(),oe(b.__webglDepthbuffer[ft],L,!1);else{const pt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,ct)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),oe(b.__webglDepthbuffer,L,!1);else{const pt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(L,b,et){const ft=r.get(L);b!==void 0&&Ct(ft.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Oe(L)}function me(L){const b=L.texture,et=r.get(L),ft=r.get(b);L.addEventListener("dispose",B);const pt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=b.version,d.memory.textures++),ct){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)et.__webglFramebuffer[Ut][Gt]=s.createFramebuffer()}else et.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=r.get(pt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&ge(L)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];et.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),yt=u.convert(Gt.type),It=O(Gt.internalFormat,kt,yt,Gt.colorSpace,L.isXRRenderTarget===!0),Wt=Vt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,It,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),xt(s.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)Ct(et.__webglFramebuffer[Ut][Gt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else Ct(et.__webglFramebuffer[Ut],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(b)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=pt[Ut],yt=r.get(kt);i.bindTexture(s.TEXTURE_2D,yt.__webglTexture),xt(s.TEXTURE_2D,kt),Ct(et.__webglFramebuffer,L,kt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),S(kt)&&v(s.TEXTURE_2D)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),xt(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)Ct(et.__webglFramebuffer[Gt],L,b,s.COLOR_ATTACHMENT0,Ut,Gt);else Ct(et.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Ut,0);S(b)&&v(Ut),i.unbindTexture()}L.depthBuffer&&Oe(L)}function H(L){const b=L.textures;for(let et=0,ft=b.length;et<ft;et++){const pt=b[et];if(S(pt)){const ct=z(L),Pt=r.get(pt).__webglTexture;i.bindTexture(ct,Pt),v(ct),i.unbindTexture()}}}const xn=[],Se=[];function de(L){if(L.samples>0){if(ge(L)===!1){const b=L.textures,et=L.width,ft=L.height;let pt=s.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(L),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=L.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=r.get(b[kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,yt,0)}s.blitFramebuffer(0,0,et,ft,0,0,et,ft,pt,s.NEAREST),p===!0&&(xn.length=0,Se.length=0,xn.push(s.COLOR_ATTACHMENT0+kt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(xn.push(ct),Se.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const yt=r.get(b[kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,yt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Vt(L){return Math.min(l.maxSamples,L.samples)}function ge(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Yt(L){const b=d.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function ae(L,b){const et=L.colorSpace,ft=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Ms&&et!==za&&(Te.getTransfer(et)===Be?(ft!==mi||pt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=ot,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Fe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ge}function gT(s,t){function i(r,l=za){let u;const d=Te.getTransfer(l);if(r===wi)return s.UNSIGNED_BYTE;if(r===ph)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vv)return s.BYTE;if(r===_v)return s.SHORT;if(r===Lo)return s.UNSIGNED_SHORT;if(r===hh)return s.INT;if(r===Sr)return s.UNSIGNED_INT;if(r===ea)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===yv)return s.ALPHA;if(r===Sv)return s.RGB;if(r===mi)return s.RGBA;if(r===Po)return s.DEPTH_COMPONENT;if(r===Io)return s.DEPTH_STENCIL;if(r===Mv)return s.RED;if(r===gh)return s.RED_INTEGER;if(r===bv)return s.RG;if(r===vh)return s.RG_INTEGER;if(r===_h)return s.RGBA_INTEGER;if(r===Sc||r===Mc||r===bc||r===Ec)if(d===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===zd||r===Bd||r===Fd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Id)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd||r===Gd||r===Vd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Hd||r===Gd)return d===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Vd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kd||r===jd||r===Xd||r===Wd||r===qd||r===Yd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===th)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eh)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nh)return d===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tc||r===ih||r===ah)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Tc)return d===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ih)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ah)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ev||r===rh||r===sh||r===oh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===rh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const vT=`
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

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Gn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ga({vertexShader:vT,fragmentShader:_T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends Ts{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,T=null;const C=new xT,S=i.getContextAttributes();let v=null,z=null;const O=[],U=[],G=new De;let F=null;const B=new oi;B.viewport=new Ke;const X=new oi;X.viewport=new Ke;const D=[B,X],w=new GS;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let mt=O[J];return mt===void 0&&(mt=new dd,O[J]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(J){let mt=O[J];return mt===void 0&&(mt=new dd,O[J]=mt),mt.getGripSpace()},this.getHand=function(J){let mt=O[J];return mt===void 0&&(mt=new dd,O[J]=mt),mt.getHandSpace()};function ot(J){const mt=U.indexOf(J.inputSource);if(mt===-1)return;const Mt=O[mt];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,m||d),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function _t(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",ht);for(let J=0;J<O.length;J++){const mt=U[J];mt!==null&&(U[J]=null,O[J].disconnect(mt))}V=null,lt=null,C.reset(),t.setRenderTarget(v),M=null,x=null,_=null,l=null,z=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,Ct=null;S.depth&&(Ct=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=S.stencil?Io:Po,Rt=S.stencil?Oo:Sr);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),z=new Mr(x.textureWidth,x.textureHeight,{format:mi,type:wi,depthTexture:new zv(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Mr(M.framebufferWidth,M.framebufferHeight,{format:mi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ht(J){for(let mt=0;mt<J.removed.length;mt++){const Mt=J.removed[mt],Rt=U.indexOf(Mt);Rt>=0&&(U[Rt]=null,O[Rt].disconnect(Mt))}for(let mt=0;mt<J.added.length;mt++){const Mt=J.added[mt];let Rt=U.indexOf(Mt);if(Rt===-1){for(let oe=0;oe<O.length;oe++)if(oe>=U.length){U.push(Mt),Rt=oe;break}else if(U[oe]===null){U[oe]=Mt,Rt=oe;break}if(Rt===-1)break}const Ct=O[Rt];Ct&&Ct.connect(Mt)}}const I=new st,K=new st;function Y(J,mt,Mt){I.setFromMatrixPosition(mt.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const Rt=I.distanceTo(K),Ct=mt.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Qt=Ct[14]/(Ct[10]-1),Oe=Ct[14]/(Ct[10]+1),Fe=(Ct[9]+1)/Ct[5],me=(Ct[9]-1)/Ct[5],H=(Ct[8]-1)/Ct[0],xn=(oe[8]+1)/oe[0],Se=Qt*H,de=Qt*xn,Vt=Rt/(-H+xn),ge=Vt*-H;if(mt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=Qt+Vt,ae=Oe+Vt,Je=Se-ge,L=de+(Rt-ge),b=Fe*Oe/ae*Yt,et=me*Oe/ae*Yt;J.projectionMatrix.makePerspective(Je,L,b,et,Yt,ae),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function bt(J,mt){mt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(mt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let mt=J.near,Mt=J.far;C.texture!==null&&(C.depthNear>0&&(mt=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),w.near=X.near=B.near=mt,w.far=X.far=B.far=Mt,(V!==w.near||lt!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,lt=w.far),B.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,w.layers.mask=B.layers.mask|X.layers.mask;const Rt=J.parent,Ct=w.cameras;bt(w,Rt);for(let oe=0;oe<Ct.length;oe++)bt(Ct[oe],Rt);Ct.length===2?Y(w,B,X):w.projectionMatrix.copy(B.projectionMatrix),N(J,w,Rt)};function N(J,mt,Mt){Mt===null?J.matrix.copy(mt.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(mt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=lh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(w)};let tt=null;function xt(J,mt){if(g=mt.getViewerPose(m||d),T=mt,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let Rt=!1;Mt.length!==w.cameras.length&&(w.cameras.length=0,Rt=!0);for(let Qt=0;Qt<Mt.length;Qt++){const Oe=Mt[Qt];let Fe=null;if(M!==null)Fe=M.getViewport(Oe);else{const H=_.getViewSubImage(x,Oe);Fe=H.viewport,Qt===0&&(t.setRenderTargetTextures(z,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(z))}let me=D[Qt];me===void 0&&(me=new oi,me.layers.enable(Qt),me.viewport=new Ke,D[Qt]=me),me.matrix.fromArray(Oe.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Oe.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(w.matrix.copy(me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Rt===!0&&w.cameras.push(me)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Qt=_.getDepthInformation(Mt[0]);Qt&&Qt.isValid&&Qt.texture&&C.init(t,Qt,l.renderState)}}for(let Mt=0;Mt<O.length;Mt++){const Rt=U[Mt],Ct=O[Mt];Rt!==null&&Ct!==void 0&&Ct.update(Rt,mt,m||d)}tt&&tt(J,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),T=null}const St=new Hv;St.setAnimationLoop(xt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const hr=new Ci,ST=new Qe;function MT(s,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Ov(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,z,O,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,U)):v.isMeshMatcapMaterial?(u(S,v),T(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),C(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,z,O):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Hn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Hn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const z=t.get(v),O=z.envMap,U=z.envMapRotation;O&&(S.envMap.value=O,hr.copy(U),hr.x*=-1,hr.y*=-1,hr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),S.envMapRotation.value.setFromMatrix4(ST.makeRotationFromEuler(hr)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,z,O){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*z,S.scale.value=O*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,z){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const z=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function bT(s,t,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,O){const U=O.program;r.uniformBlockBinding(z,U)}function m(z,O){let U=l[z.id];U===void 0&&(T(z),U=g(z),l[z.id]=U,z.addEventListener("dispose",S));const G=O.program;r.updateUBOMapping(z,G);const F=t.render.frame;u[z.id]!==F&&(x(z),u[z.id]=F)}function g(z){const O=_();z.__bindingPointIndex=O;const U=s.createBuffer(),G=z.__size,F=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,U),U}function _(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const O=l[z.id],U=z.uniforms,G=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let F=0,B=U.length;F<B;F++){const X=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,w=X.length;D<w;D++){const V=X[D];if(M(V,F,D,G)===!0){const lt=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let _t=0;for(let ht=0;ht<ot.length;ht++){const I=ot[ht],K=C(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,lt+_t,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,_t),_t+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(z,O,U,G){const F=z.value,B=O+"_"+U;if(G[B]===void 0)return typeof F=="number"||typeof F=="boolean"?G[B]=F:G[B]=F.clone(),!0;{const X=G[B];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return G[B]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function T(z){const O=z.uniforms;let U=0;const G=16;for(let B=0,X=O.length;B<X;B++){const D=Array.isArray(O[B])?O[B]:[O[B]];for(let w=0,V=D.length;w<V;w++){const lt=D[w],ot=Array.isArray(lt.value)?lt.value:[lt.value];for(let _t=0,ht=ot.length;_t<ht;_t++){const I=ot[_t],K=C(I),Y=U%G,bt=Y%K.boundary,N=Y+bt;U+=bt,N!==0&&G-N<K.storage&&(U+=G-N),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=U,U+=K.storage}}}const F=U%G;return F>0&&(U+=G-F),z.__size=U,z.__cache={},this}function C(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function S(z){const O=z.target;O.removeEventListener("dispose",S);const U=d.indexOf(O.__bindingPointIndex);d.splice(U,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function v(){for(const z in l)s.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:p,update:m,dispose:v}}class ET{constructor(t={}){const{canvas:i=nS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),C=new Int32Array(4);let S=null,v=null;const z=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=si;let F=0,B=0,X=null,D=-1,w=null;const V=new Ke,lt=new Ke;let ot=null;const _t=new we(0);let ht=0,I=i.width,K=i.height,Y=1,bt=null,N=null;const tt=new Ke(0,0,I,K),xt=new Ke(0,0,I,K);let St=!1;const J=new Sh;let mt=!1,Mt=!1;const Rt=new Qe,Ct=new Qe,oe=new st,Qt=new Ke,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function me(){return X===null?Y:1}let H=r;function xn(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dh}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",vt,!1),H===null){const q="webgl2";if(H=xn(q,A),H===null)throw xn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,de,Vt,ge,Yt,ae,Je,L,b,et,ft,pt,ct,Pt,Ut,Gt,kt,yt,It,Wt,qt,wt,ie,j;function Nt(){Se=new OE(H),Se.init(),wt=new gT(H,Se),de=new RE(H,Se,t,wt),Vt=new pT(H,Se),de.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),ge=new zE(H),Yt=new eT,ae=new mT(H,Se,Vt,Yt,de,wt,ge),Je=new CE(U),L=new LE(U),b=new kS(H),ie=new TE(H,b),et=new PE(H,b,ge,ie),ft=new FE(H,et,b,ge),It=new BE(H,de,ae),Gt=new wE(Yt),pt=new tT(U,Je,L,Se,de,ie,Gt),ct=new MT(U,Yt),Pt=new iT,Ut=new cT(Se),yt=new EE(U,Je,L,Vt,ft,M,p),kt=new dT(U,ft,de),j=new bT(H,ge,de,Vt),Wt=new AE(H,Se,ge),qt=new IE(H,Se,ge),ge.programs=pt.programs,U.capabilities=de,U.extensions=Se,U.properties=Yt,U.renderLists=Pt,U.shadowMap=kt,U.state=Vt,U.info=ge}Nt();const Et=new yT(U,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(I,K,!1))},this.getSize=function(A){return A.set(I,K)},this.setSize=function(A,q,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,K=q,i.width=Math.floor(A*Y),i.height=Math.floor(q*Y),at===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(I*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,q,at){I=A,K=q,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(q*at),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,q,at,rt){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,q,at,rt),Vt.viewport(V.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,q,at,rt){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,q,at,rt),Vt.scissor(lt.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Vt.setScissorTest(St=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,at=!0){let rt=0;if(A){let Z=!1;if(X!==null){const Tt=X.texture.format;Z=Tt===_h||Tt===vh||Tt===gh}if(Z){const Tt=X.texture.type,Dt=Tt===wi||Tt===Sr||Tt===Lo||Tt===Oo||Tt===ph||Tt===mh,Ot=yt.getClearColor(),Bt=yt.getClearAlpha(),$t=Ot.r,Zt=Ot.g,jt=Ot.b;Dt?(T[0]=$t,T[1]=Zt,T[2]=jt,T[3]=Bt,H.clearBufferuiv(H.COLOR,0,T)):(C[0]=$t,C[1]=Zt,C[2]=jt,C[3]=Bt,H.clearBufferiv(H.COLOR,0,C))}else rt|=H.COLOR_BUFFER_BIT}q&&(rt|=H.DEPTH_BUFFER_BIT),at&&(rt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),yt.dispose(),Pt.dispose(),Ut.dispose(),Yt.dispose(),Je.dispose(),L.dispose(),ft.dispose(),ie.dispose(),j.dispose(),pt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",on),Et.removeEventListener("sessionend",yn),On.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ge.autoReset,q=kt.enabled,at=kt.autoUpdate,rt=kt.needsUpdate,Z=kt.type;Nt(),ge.autoReset=A,kt.enabled=q,kt.autoUpdate=at,kt.needsUpdate=rt,kt.type=Z}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const q=A.target;q.removeEventListener("dispose",Ft),ne(q)}function ne(A){Ue(A),Yt.remove(A)}function Ue(A){const q=Yt.get(A).programs;q!==void 0&&(q.forEach(function(at){pt.releaseProgram(at)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,at,rt,Z,Tt){q===null&&(q=Oe);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Xa(A,q,at,rt,Z);Vt.setMaterial(rt,Dt);let Bt=at.index,$t=1;if(rt.wireframe===!0){if(Bt=et.getWireframeAttribute(at),Bt===void 0)return;$t=2}const Zt=at.drawRange,jt=at.attributes.position;let ce=Zt.start*$t,Ae=(Zt.start+Zt.count)*$t;Tt!==null&&(ce=Math.max(ce,Tt.start*$t),Ae=Math.min(Ae,(Tt.start+Tt.count)*$t)),Bt!==null?(ce=Math.max(ce,0),Ae=Math.min(Ae,Bt.count)):jt!=null&&(ce=Math.max(ce,0),Ae=Math.min(Ae,jt.count));const Ve=Ae-ce;if(Ve<0||Ve===1/0)return;ie.setup(Z,rt,Ot,at,Bt);let ve,_e=Wt;if(Bt!==null&&(ve=b.get(Bt),_e=qt,_e.setIndex(ve)),Z.isMesh)rt.wireframe===!0?(Vt.setLineWidth(rt.wireframeLinewidth*me()),_e.setMode(H.LINES)):_e.setMode(H.TRIANGLES);else if(Z.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Vt.setLineWidth(Kt*me()),Z.isLineSegments?_e.setMode(H.LINES):Z.isLineLoop?_e.setMode(H.LINE_LOOP):_e.setMode(H.LINE_STRIP)}else Z.isPoints?_e.setMode(H.POINTS):Z.isSprite&&_e.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))_e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,qe=Z._multiDrawCounts,Me=Z._multiDrawCount,Tn=Bt?b.get(Bt).bytesPerElement:1,oa=Yt.get(rt).currentProgram.getUniforms();for(let ke=0;ke<Me;ke++)oa.setValue(H,"_gl_DrawID",ke),_e.render(Kt[ke]/Tn,qe[ke])}else if(Z.isInstancedMesh)_e.renderInstances(ce,Ve,Z.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,qe=Math.min(at.instanceCount,Kt);_e.renderInstances(ce,Ve,qe)}else _e.render(ce,Ve)};function be(A,q,at){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,ra(A,q,at),A.side=Ha,A.needsUpdate=!0,ra(A,q,at),A.side=Ti):ra(A,q,at)}this.compile=function(A,q,at=null){at===null&&(at=A),v=Ut.get(at),v.init(q),O.push(v),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),A!==at&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const rt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];be(Ot,at,Z),rt.add(Ot)}else be(Tt,at,Z),rt.add(Tt)}),v=O.pop(),rt},this.compileAsync=function(A,q,at=null){const rt=this.compile(A,q,at);return new Promise(Z=>{function Tt(){if(rt.forEach(function(Dt){Yt.get(Dt).currentProgram.isReady()&&rt.delete(Dt)}),rt.size===0){Z(A);return}setTimeout(Tt,10)}Se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Vn=null;function hn(A){Vn&&Vn(A)}function on(){On.stop()}function yn(){On.start()}const On=new Hv;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){Vn=A,Et.setAnimationLoop(A),A===null?On.stop():On.start()},Et.addEventListener("sessionstart",on),Et.addEventListener("sessionend",yn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(q),q=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,q,X),v=Ut.get(A,O.length),v.init(q),O.push(v),Ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,Mt),S=Pt.get(A,z.length),S.init(),z.push(S),Et.enabled===!0&&Et.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&ka(Tt,q,-1/0,U.sortObjects)}ka(A,q,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(bt,N),Fe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Fe&&yt.addToRenderList(S,A),this.info.render.frame++,mt===!0&&Gt.beginShadows();const at=v.state.shadowsArray;kt.render(at,A,q),mt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=S.opaque,Z=S.transmissive;if(v.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(Z.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const Bt=Tt[Dt];jo(rt,Z,A,Bt)}Fe&&yt.render(A);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const Bt=Tt[Dt];ko(S,A,Bt,Bt.viewport)}}else Z.length>0&&jo(rt,Z,A,q),Fe&&yt.render(A),ko(S,A,q);X!==null&&B===0&&(ae.updateMultisampleRenderTarget(X),ae.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(U,A,q),ie.resetDefaultState(),D=-1,w=null,O.pop(),O.length>0?(v=O[O.length-1],mt===!0&&Gt.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function ka(A,q,at,rt){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){rt&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const Dt=ft.update(A),Ot=A.material;Ot.visible&&S.push(A,Dt,Ot,at,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Dt=ft.update(A),Ot=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ot)){const Bt=Dt.groups;for(let $t=0,Zt=Bt.length;$t<Zt;$t++){const jt=Bt[$t],ce=Ot[jt.materialIndex];ce&&ce.visible&&S.push(A,Dt,ce,at,Qt.z,jt)}}else Ot.visible&&S.push(A,Dt,Ot,at,Qt.z,null)}}const Tt=A.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)ka(Tt[Dt],q,at,rt)}function ko(A,q,at,rt){const Z=A.opaque,Tt=A.transmissive,Dt=A.transparent;v.setupLightsView(at),mt===!0&&Gt.setGlobalState(U.clippingPlanes,at),rt&&Vt.viewport(V.copy(rt)),Z.length>0&&ja(Z,q,at),Tt.length>0&&ja(Tt,q,at),Dt.length>0&&ja(Dt,q,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function jo(A,q,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new Mr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?zo:wi,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||V;Tt.setSize(Dt.z*U.transmissionResolutionScale,Dt.w*U.transmissionResolutionScale);const Ot=U.getRenderTarget();U.setRenderTarget(Tt),U.getClearColor(_t),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),Fe&&yt.render(at);const Bt=U.toneMapping;U.toneMapping=Fa;const $t=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),mt===!0&&Gt.setGlobalState(U.clippingPlanes,rt),ja(A,at,rt),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let jt=0,ce=q.length;jt<ce;jt++){const Ae=q[jt],Ve=Ae.object,ve=Ae.geometry,_e=Ae.material,Kt=Ae.group;if(_e.side===Ti&&Ve.layers.test(rt.layers)){const qe=_e.side;_e.side=Hn,_e.needsUpdate=!0,aa(Ve,at,rt,ve,_e,Kt),_e.side=qe,_e.needsUpdate=!0,Zt=!0}}Zt===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Ot),U.setClearColor(_t,ht),$t!==void 0&&(rt.viewport=$t),U.toneMapping=Bt}function ja(A,q,at){const rt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Tt=A.length;Z<Tt;Z++){const Dt=A[Z],Ot=Dt.object,Bt=Dt.geometry,$t=Dt.group;let Zt=Dt.material;Zt.allowOverride===!0&&rt!==null&&(Zt=rt),Ot.layers.test(at.layers)&&aa(Ot,q,at,Bt,Zt,$t)}}function aa(A,q,at,rt,Z,Tt){A.onBeforeRender(U,q,at,rt,Z,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(U,q,at,rt,A,Tt),Z.transparent===!0&&Z.side===Ti&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,U.renderBufferDirect(at,q,rt,Z,A,Tt),Z.side=Ha,Z.needsUpdate=!0,U.renderBufferDirect(at,q,rt,Z,A,Tt),Z.side=Ti):U.renderBufferDirect(at,q,rt,Z,A,Tt),A.onAfterRender(U,q,at,rt,Z,Tt)}function ra(A,q,at){q.isScene!==!0&&(q=Oe);const rt=Yt.get(A),Z=v.state.lights,Tt=v.state.shadowsArray,Dt=Z.state.version,Ot=pt.getParameters(A,Z.state,Tt,q,at),Bt=pt.getProgramCacheKey(Ot);let $t=rt.programs;rt.environment=A.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(A.isMeshStandardMaterial?L:Je).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Ft),$t=new Map,rt.programs=$t);let Zt=$t.get(Bt);if(Zt!==void 0){if(rt.currentProgram===Zt&&rt.lightsStateVersion===Dt)return Ui(A,Ot),Zt}else Ot.uniforms=pt.getUniforms(A),A.onBeforeCompile(Ot,U),Zt=pt.acquireProgram(Ot,Bt),$t.set(Bt,Zt),rt.uniforms=Ot.uniforms;const jt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Gt.uniform),Ui(A,Ot),rt.needsLights=en(A),rt.lightsStateVersion=Dt,rt.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=Zt,rt.uniformsList=null,Zt}function Di(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Ac.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Ui(A,q){const at=Yt.get(A);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function Xa(A,q,at,rt,Z){q.isScene!==!0&&(q=Oe),ae.resetTextureUnits();const Tt=q.fog,Dt=rt.isMeshStandardMaterial?q.environment:null,Ot=X===null?U.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ms,Bt=(rt.isMeshStandardMaterial?L:Je).get(rt.envMap||Dt),$t=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Zt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),jt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,Ae=!!at.morphAttributes.color;let Ve=Fa;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ve=U.toneMapping);const ve=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,_e=ve!==void 0?ve.length:0,Kt=Yt.get(rt),qe=v.state.lights;if(mt===!0&&(Mt===!0||A!==w)){const pn=A===w&&rt.id===D;Gt.setState(rt,A,pn)}let Me=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==qe.state.version||Kt.outputColorSpace!==Ot||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Bt||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Zt||Kt.morphTargets!==jt||Kt.morphNormals!==ce||Kt.morphColors!==Ae||Kt.toneMapping!==Ve||Kt.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,Kt.__version=rt.version);let Tn=Kt.currentProgram;Me===!0&&(Tn=ra(rt,q,Z));let oa=!1,ke=!1,Li=!1;const He=Tn.getUniforms(),An=Kt.uniforms;if(Vt.useProgram(Tn.program)&&(oa=!0,ke=!0,Li=!0),rt.id!==D&&(D=rt.id,ke=!0),oa||w!==A){Vt.buffers.depth.getReversed()?(Rt.copy(A.projectionMatrix),aS(Rt),rS(Rt),He.setValue(H,"projectionMatrix",Rt)):He.setValue(H,"projectionMatrix",A.projectionMatrix),He.setValue(H,"viewMatrix",A.matrixWorldInverse);const Sn=He.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,oe.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&He.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,ke=!0,Li=!0)}if(Z.isSkinnedMesh){He.setOptional(H,Z,"bindMatrix"),He.setOptional(H,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(H,"boneTexture",pn.boneTexture,ae))}Z.isBatchedMesh&&(He.setOptional(H,Z,"batchingTexture"),He.setValue(H,"batchingTexture",Z._matricesTexture,ae),He.setOptional(H,Z,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",Z._indirectTexture,ae),He.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",Z._colorsTexture,ae));const ln=at.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&It.update(Z,at,Tn),(ke||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,He.setValue(H,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(An.envMap.value=Bt,An.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),ke&&(He.setValue(H,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&sa(An,Li),Tt&&rt.fog===!0&&ct.refreshFogUniforms(An,Tt),ct.refreshMaterialUniforms(An,rt,Y,K,v.state.transmissionRenderTarget[A.id]),Ac.upload(H,Di(Kt),An,ae)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ac.upload(H,Di(Kt),An,ae),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&He.setValue(H,"center",Z.center),He.setValue(H,"modelViewMatrix",Z.modelViewMatrix),He.setValue(H,"normalMatrix",Z.normalMatrix),He.setValue(H,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const pn=rt.uniformsGroups;for(let Sn=0,_i=pn.length;Sn<_i;Sn++){const Oi=pn[Sn];j.update(Oi,Tn),j.bind(Oi,Tn)}}return Tn}function sa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,at){const rt=Yt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Yt.get(A.texture).__webglTexture=q,Yt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const at=Yt.get(A);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const Xo=H.createFramebuffer();this.setRenderTarget=function(A,q=0,at=0){X=A,F=q,B=at;let rt=!0,Z=null,Tt=!1,Dt=!1;if(A){const Bt=Yt.get(A);if(Bt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),rt=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Bt.__hasExternalTextures)ae.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const jt=A.depthTexture;if(Bt.__boundDepthTexture!==jt){if(jt!==null&&Yt.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const Zt=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[q])?Z=Zt[q][at]:Z=Zt[q],Tt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?Z=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?Z=Zt[at]:Z=Zt,V.copy(A.viewport),lt.copy(A.scissor),ot=A.scissorTest}else V.copy(tt).multiplyScalar(Y).floor(),lt.copy(xt).multiplyScalar(Y).floor(),ot=St;if(at!==0&&(Z=Xo),Vt.bindFramebuffer(H.FRAMEBUFFER,Z)&&rt&&Vt.drawBuffers(A,Z),Vt.viewport(V),Vt.scissor(lt),Vt.setScissorTest(ot),Tt){const Bt=Yt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Bt.__webglTexture,at)}else if(Dt){const Bt=Yt.get(A.texture),$t=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bt.__webglTexture,at,$t)}else if(A!==null&&at!==0){const Bt=Yt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,q,at,rt,Z,Tt,Dt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Vt.bindFramebuffer(H.FRAMEBUFFER,Bt);try{const $t=A.textures[Ot],Zt=$t.format,jt=$t.type;if(!de.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-rt&&at>=0&&at<=A.height-Z&&(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(q,at,rt,Z,wt.convert(Zt),wt.convert(jt),Tt))}finally{const $t=X!==null?Yt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,q,at,rt,Z,Tt,Dt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(q>=0&&q<=A.width-rt&&at>=0&&at<=A.height-Z){Vt.bindFramebuffer(H.FRAMEBUFFER,Bt);const $t=A.textures[Ot],Zt=$t.format,jt=$t.type;if(!de.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(q,at,rt,Z,wt.convert(Zt),wt.convert(jt),0);const Ae=X!==null?Yt.get(X).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,Ae);const Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await iS(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ce),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(ce),H.deleteSync(Ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,at=0){const rt=Math.pow(2,-at),Z=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Dt=q!==null?q.x:0,Ot=q!==null?q.y:0;ae.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,Dt,Ot,Z,Tt),Vt.unbindTexture()};const Wo=H.createFramebuffer(),Ni=H.createFramebuffer();this.copyTextureToTexture=function(A,q,at=null,rt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Dt,Ot,Bt,$t,Zt,jt,ce,Ae,Ve;const ve=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)Dt=at.max.x-at.min.x,Ot=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,Zt=at.min.y,jt=at.isBox3?at.min.z:0;else{const ln=Math.pow(2,-Z);Dt=Math.floor(ve.width*ln),Ot=Math.floor(ve.height*ln),A.isDataArrayTexture?Bt=ve.depth:A.isData3DTexture?Bt=Math.floor(ve.depth*ln):Bt=1,$t=0,Zt=0,jt=0}rt!==null?(ce=rt.x,Ae=rt.y,Ve=rt.z):(ce=0,Ae=0,Ve=0);const _e=wt.convert(q.format),Kt=wt.convert(q.type);let qe;q.isData3DTexture?(ae.setTexture3D(q,0),qe=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),qe=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),Tn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),oa=H.getParameter(H.UNPACK_SKIP_PIXELS),ke=H.getParameter(H.UNPACK_SKIP_ROWS),Li=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ve.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ve.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const He=A.isDataArrayTexture||A.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const ln=Yt.get(A),pn=Yt.get(q),Sn=Yt.get(ln.__renderTarget),_i=Yt.get(pn.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Oi=0;Oi<Bt;Oi++)He&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,Z,jt+Oi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(q).__webglTexture,Tt,Ve+Oi)),H.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Yt.has(A)){const ln=Yt.get(A),pn=Yt.get(q);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Wo),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ni);for(let Sn=0;Sn<Bt;Sn++)He?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,Z,jt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,Z),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Ve+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Tt),Z!==0?H.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(qe,Tt,ce,Ae,Ve+Sn,$t,Zt,Dt,Ot):H.copyTexSubImage2D(qe,Tt,ce,Ae,$t,Zt,Dt,Ot);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(qe,Tt,ce,Ae,Ve,Dt,Ot,Bt,_e,Kt,ve.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(qe,Tt,ce,Ae,Ve,Dt,Ot,Bt,_e,ve.data):H.texSubImage3D(qe,Tt,ce,Ae,Ve,Dt,Ot,Bt,_e,Kt,ve):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,_e,Kt,ve.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,ce,Ae,ve.width,ve.height,_e,ve.data):H.texSubImage2D(H.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,_e,Kt,ve);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,oa),H.pixelStorei(H.UNPACK_SKIP_ROWS,ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Li),Tt===0&&q.generateMipmaps&&H.generateMipmap(qe),Vt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,at=null,rt=null,Z=0){return vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,at,rt,Z)},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Vt.unbindTexture()},this.resetState=function(){F=0,B=0,X=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}function TT(){const s=Ce.useRef(),[t,i]=fh.useState(null);return Ce.useEffect(()=>{try{if(!s.current)return;const r=setTimeout(()=>{if(!s.current)return;const l=s.current.clientWidth||400,u=s.current.clientHeight||300,d=new US,h=new oi(45,l/u,.1,100);h.position.set(0,-10,10),h.lookAt(0,0,0);const p=new ET({antialias:!0,alpha:!0});for(p.setSize(l,u),p.setClearColor(0,0);s.current.firstChild;)s.current.removeChild(s.current.firstChild);s.current.appendChild(p.domElement);const m=new HS(16777215,.8);d.add(m);const g=new FS(16777215,1);g.position.set(5,5,5),d.add(g);const _=3,x=3,M=50,T=6,C=new Va,S=[];for(let X=0;X<=M;X++){const D=X/M*T-T/2;for(let w=0;w<=M;w++){const V=w/M*T-T/2,lt=V*V/(x*x)-D*D/(_*_);S.push(D,V,lt)}}const v=new Float32Array(S);C.setAttribute("position",new vi(v,3));const z=[];for(let X=0;X<M;X++)for(let D=0;D<M;D++){const w=X*(M+1)+D,V=X*(M+1)+D+1,lt=(X+1)*(M+1)+D,ot=(X+1)*(M+1)+D+1;z.push(w,V,ot),z.push(w,ot,lt)}C.setIndex(z),C.computeVertexNormals();const O=new OS({color:5932799,side:Ti,flatShading:!1,transparent:!0,opacity:.85}),U=new Ri(C,O);d.add(U);let G;const F=()=>{s.current&&(G=requestAnimationFrame(F),U.rotation.z+=.005,U.rotation.x+=.002,p.render(d,h))};F();const B=()=>{if(!s.current)return;const X=s.current.clientWidth||400,D=s.current.clientHeight||300;h.aspect=X/D,h.updateProjectionMatrix(),p.setSize(X,D)};window.addEventListener("resize",B),s.current._cleanup=()=>{window.removeEventListener("resize",B),G&&cancelAnimationFrame(G),s.current&&p.domElement&&s.current.contains(p.domElement)&&s.current.removeChild(p.domElement),C.dispose(),O.dispose(),p.dispose()}},100);return()=>{clearTimeout(r),s.current&&s.current._cleanup&&s.current._cleanup()}}catch(r){console.error("Error in HyperbolicParaboloid:",r),i(r.message)}},[]),t?R.jsx("div",{style:{width:"100%",height:"300px",borderRadius:"16px",background:"linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",overflow:"hidden",border:"2px solid rgba(90, 134, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",textAlign:"center",padding:"20px"},children:R.jsxs("div",{children:[R.jsx("div",{className:"text-lg mb-2",children:"⚠️ 3D Visualization Error"}),R.jsx("div",{className:"text-sm opacity-75",children:"Mathematical equations shown below"})]})}):R.jsx("div",{ref:s,style:{width:"100%",height:"300px",borderRadius:"16px",background:"linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",overflow:"hidden",border:"2px solid rgba(90, 134, 255, 0.3)"}})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RT=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),sv=s=>{const t=RT(s);return t.charAt(0).toUpperCase()+t.slice(1)},Xv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=Ce.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},p)=>Ce.createElement("svg",{ref:p,...wT,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:Xv("lucide",l),...h},[...d.map(([m,g])=>Ce.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=(s,t)=>{const i=Ce.forwardRef(({className:r,...l},u)=>Ce.createElement(CT,{ref:u,iconNode:t,className:Xv(`lucide-${AT(sv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=sv(s),i};/**
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
 */const tA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],eA=sn("mail",tA);/**
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
 */const lA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],cA=sn("shield",lA);function uA({title:s,description:t,image:i}){return R.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-md",children:[R.jsx("div",{className:"relative aspect-square overflow-hidden",children:R.jsx("img",{src:i,alt:s,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105",loading:"lazy"})}),R.jsxs("div",{className:"p-4",children:[R.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:s}),R.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 line-clamp-3",children:t})]})]})}const lv={image:"assets/me.jpg",title:"Patiphan Akkahadsri"},fA="I am a student at KMITL, majoring in Information Technology on Software Development module.",cv=["Linear Algebra","Calculus","Discrete Mathematics","Probability and Statistics","Differential Geometry","Information Theory","Vector Calculus","Numerical Analysis","Optimization","Image Processing","Computer Vision","Digital Signal Processing"],ps=["I am a currently a student at School of Information Technology, King Mongkut's Institute of Technology Ladkrabang (KMITL).","Throughout my time at KMITL, I've developed a strong interest in the mathematical foundations of computer science. I particularly enjoy subjects","Driven by curiosity, I've explored more advanced topics such as",`I'm also familiar with Unix-based systems like macOS and Linux. 
    I often work in a dual-boot environment using both Windows and Arch Linux, 
    which gives me flexibility across different development ecosystems.`,`Not only I enjoy mathematics, but I also have a passion for coding.
    Not only do I enjoy mathematics, but I'm also passionate about coding.
I'm actively working on improving my skills by learning fundamental concepts like 
object-oriented programming (OOP), data structures, algorithms, functional programming, and web development.`,` love diving into the underlying mechanics of how things work and understanding the reasons behind certain approaches not just how they work, but why we do things a certain way. 
This deeper understanding helps me not only apply what I learn but also innovate and make informed decisions in my coding journey.`],uv=["bg-gradient-to-r from-purple-500 to-pink-500 text-white","bg-gradient-to-r from-blue-500 to-cyan-500 text-white","bg-gradient-to-r from-green-500 to-teal-500 text-white","bg-gradient-to-r from-orange-500 to-red-500 text-white","bg-gradient-to-r from-indigo-500 to-purple-500 text-white","bg-gradient-to-r from-pink-500 to-rose-500 text-white","bg-gradient-to-r from-cyan-500 to-blue-500 text-white","bg-gradient-to-r from-teal-500 to-green-500 text-white","bg-gradient-to-r from-yellow-500 to-orange-500 text-white","bg-gradient-to-r from-red-500 to-pink-500 text-white","bg-gradient-to-r from-violet-500 to-purple-500 text-white","bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"];function fv({topic:s,colorClass:t}){return R.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-200 ${t}`,children:s})}function dA(){return R.jsxs("div",{className:"max-w-3xl mx-auto p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-3xl shadow-2xl space-y-8 border border-gray-100 dark:border-gray-700",children:[R.jsxs("div",{className:"text-center mb-8",children:[R.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2",children:"About Me"}),R.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"})]}),R.jsx("div",{className:"bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700",children:R.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[0]})}),R.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700",children:[R.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4",children:ps[1]}),R.jsx("div",{className:"flex flex-wrap gap-2",children:cv.slice(0,4).map((s,t)=>R.jsx(fv,{topic:s,colorClass:uv[t]},s))})]}),R.jsxs("div",{className:"bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700",children:[R.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4",children:ps[2]}),R.jsx("div",{className:"flex flex-wrap gap-2",children:cv.slice(4).map((s,t)=>R.jsx(fv,{topic:s,colorClass:uv[t+4]},s))})]}),R.jsx("div",{className:"bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700",children:R.jsxs("div",{className:"flex items-start gap-4",children:[R.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center",children:R.jsx("span",{className:"text-2xl",children:"💻"})}),R.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[3]})]})}),R.jsx("div",{className:"bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700",children:R.jsxs("div",{className:"flex items-start gap-4",children:[R.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center",children:R.jsx("span",{className:"text-2xl",children:"🚀"})}),R.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[4]})]})}),R.jsx("div",{className:"bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700",children:R.jsxs("div",{className:"flex items-start gap-4",children:[R.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center",children:R.jsx("span",{className:"text-2xl",children:"🧠"})}),R.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ps[5]})]})}),R.jsx("div",{className:"flex justify-center mt-8",children:R.jsxs("div",{className:"flex space-x-2",children:[R.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full animate-pulse"}),R.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"}),R.jsx("div",{className:"w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"})]})})]})}function hA(){return R.jsx("div",{className:"px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-12",children:R.jsxs("div",{className:"flex flex-col xl:flex-row xl:gap-8 gap-8 items-start justify-center",children:[R.jsx("div",{className:"w-full xl:w-[30%] flex justify-center",children:R.jsx("div",{className:"transform hover:scale-105 transition-transform duration-300",children:R.jsx(uA,{title:lv.title,description:fA,image:lv.image})})}),R.jsx("div",{className:"w-full xl:w-[35%] flex justify-center",children:R.jsx(dA,{})}),R.jsxs("div",{className:"w-full xl:w-[35%] space-y-6",children:[R.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl shadow-2xl",children:[R.jsx("h3",{className:"text-xl font-bold text-white mb-4 text-center",children:"🌊 Interactive Hyperbolic Paraboloid"}),R.jsx(TT,{})]}),R.jsx(hy,{})]})]})})}const pA=[{id:"database",title:"Database & Cache / In-Memory Store",icon:R.jsx(Rc,{className:"w-5 h-5"}),color:"bg-blue-50 border-blue-200 dark:bg-blue-900 dark:border-blue-700",tools:[{name:"PostgreSQL",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{name:"MySQL",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},{name:"MongoDB",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"Neo4j",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg"},{name:"Redis",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"}]},{id:"messaging",title:"Message Broker",icon:R.jsx(iA,{className:"w-5 h-5"}),color:"bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700",tools:[{name:"RabbitMQ",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg"},{name:"Apache Kafka",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"}]},{id:"backend",title:"Backend & APIs",icon:R.jsx(Es,{className:"w-5 h-5"}),color:"bg-purple-50 border-purple-200 dark:bg-purple-900 dark:border-purple-700",tools:[{name:"REST API",logoUrl:"https://raw.githubusercontent.com/Edgar-P-yan/restful-api-university/master/restful-api-logo.png",details:{frameworks:[{name:"Django REST",url:"https://www.django-rest-framework.org/",logo:"https://www.django-rest-framework.org/img/logo.png"},{name:"Fiber (Go)",url:"https://gofiber.io/",logo:"https://gofiber.io/assets/images/logo.svg"},{name:"Axum (Rust)",url:"https://github.com/tokio-rs/axum",logo:"https://pbs.twimg.com/profile_images/1039634366207414272/bC40df3r_400x400.jpg"}],description:"Backend frameworks I have hands-on experience with"}},{name:"gRPC",logoUrl:"https://grpc.io/img/logos/grpc-icon-color.png",details:{description:"",features:["Protocol Buffers","Streaming"]}},{name:"MQTT",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mqtt-hor.svg/2560px-Mqtt-hor.svg.png",details:{description:"",features:["Pub/Sub"]}},{name:"WebSocket",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/1200px-WebSocket_colored_logo.svg.png",details:{frameworks:[{name:"Django Channel",url:"https://channels.readthedocs.io/en/latest/",logo:"https://www.svgrepo.com/show/353657/django-icon.svg"},{name:"Gorilla Mux",url:"https://github.com/gorilla/mux",logo:"https://image.pngaaa.com/423/570423-middle.png"}]}}]},{id:"ide",title:"IDE & Editors",icon:R.jsx(Es,{className:"w-5 h-5"}),color:"bg-orange-50 border-orange-200 dark:bg-orange-900 dark:border-orange-700",tools:[{name:"VS Code",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:"Neovim",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg"},{name:"PyCharm",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"},{name:"Goland",logoUrl:"https://dl.flathub.org/media/com/jetbrains/GoLand/7a25094fb5fa7badba596ffc68741397/icons/128x128@2/com.jetbrains.GoLand.png"},{name:"Rustrover",logoUrl:"https://dl.flathub.org/media/com/jetbrains/RustRover/1ad940a2336d45649b8cc0cc195c988a/icons/128x128@2/com.jetbrains.RustRover.png"},{name:"Jupyter",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"},{name:"Google Colab",logoUrl:"https://colab.research.google.com/img/colab_favicon_256px.png"},{name:"Arduino IDE",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg"}]},{id:"cv",title:"Computer Vision",icon:R.jsx(kT,{className:"w-5 h-5"}),color:"bg-red-50 border-red-200 dark:bg-red-900 dark:border-red-700",tools:[{name:"PyTorch",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"},{name:"NumPy",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"},{name:"OpenCV",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"},{name:"Roboflow",logoUrl:"https://security.roboflow.com/api/share/d560a04b-1859-4677-a8a3-e0a72dc70231/logo.png"},{name:"Pillow",logoUrl:"https://raw.githubusercontent.com/python-pillow/pillow-logo/main/pillow-logo-dark-text-1280x640.png"},{name:"Matplotlib",logoUrl:"https://miro.medium.com/v2/resize:fit:1200/1*Kzb1TcQsx4F12t-qsU7knA.png"}]},{id:"vcs",title:"Version Control",icon:R.jsx(qT,{className:"w-5 h-5"}),color:"bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600",tools:[{name:"Git",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"GitHub",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"GitLab",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"}]},{id:"cloud",title:"Cloud Platforms",icon:R.jsx(PT,{className:"w-5 h-5"}),color:"bg-sky-50 border-sky-200 dark:bg-sky-900 dark:border-sky-700",tools:[{name:"AWS",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",details:{services:["Lambda","CloudFormation","S3","EC2","SageMaker","API Gateway","RDS","DynamoDB"],description:"These are the AWS services I have worked with in real-world projects."}},{name:"Google Cloud",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",details:{services:["Cloud Storage (Bucket)","Compute Engine"],description:"These are the GCP services I have worked with in real-world projects"}}]},{id:"container",title:"Containerization",icon:R.jsx(BT,{className:"w-5 h-5"}),color:"bg-cyan-50 border-cyan-200 dark:bg-cyan-900 dark:border-cyan-700",tools:[{name:"Containerd",logoUrl:"https://containerd.io/img/logos/footer-logo.png"},{name:"Docker",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"Kubernetes",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"}]},{id:"cicd",title:"CI/CD & Build Tools",icon:R.jsx(oA,{className:"w-5 h-5"}),color:"bg-indigo-50 border-indigo-200 dark:bg-indigo-900 dark:border-indigo-700",tools:[{name:"Jenkins",logoUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"},{name:"Makefile",logoUrl:"https://static-00.iconduck.com/assets.00/file-type-makefile-icon-2048x2000-kjmtrypc.png"}]}];function mA({tool:s,categoryId:t,index:i,isHovered:r,onHover:l,onLeave:u,color:d}){const h=`${t}-${i}`;return R.jsxs("div",{className:`${d} rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg group/item cursor-pointer relative`,onMouseEnter:()=>l(h),onMouseLeave:u,children:[R.jsxs("div",{className:"flex flex-col items-center text-center space-y-2",children:[R.jsx("div",{className:"w-12 h-12 flex items-center justify-center",children:R.jsx("img",{src:s.logoUrl,alt:`${s.name} logo`,className:"max-w-full max-h-full object-contain transition-transform group-hover/item:scale-110",onError:p=>{p.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yNCAyMFYyOE0yMCAyNEgyOCIgc3Ryb2tlPSIjNmI3MjgwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=",p.target.alt=s.name}})}),R.jsx("span",{className:"text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight",children:s.name})]}),r&&s.details&&R.jsx(gA,{tool:s})]},h)}function gA({tool:s}){return R.jsxs("div",{className:"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 animate-in fade-in zoom-in-95 duration-200",children:[R.jsxs("div",{className:"text-sm",children:[R.jsx("h4",{className:"font-semibold text-gray-900 dark:text-gray-100 mb-2",children:s.name}),R.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-3 text-xs leading-relaxed",children:s.details.description}),s.details.frameworks&&R.jsx(vA,{title:"Frameworks Used:",children:s.details.frameworks.map((t,i)=>R.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group/link",children:[R.jsx("img",{src:t.logo,alt:t.name,className:"w-5 h-5 object-contain",onError:r=>{r.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0xMCA2VjE0TTYgMTBIMTQiIHN0cm9rZT0iIzZiNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+"}}),R.jsx("span",{className:"text-xs font-medium text-gray-700 dark:text-gray-300 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400",children:t.name}),R.jsx("svg",{className:"w-3 h-3 text-gray-400 dark:text-gray-500 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]},i))}),s.details.services&&R.jsx(dv,{title:"Services Used:",tags:s.details.services,color:"blue"}),s.details.features&&R.jsx(dv,{title:"Key Features:",tags:s.details.features,color:"green"})]}),R.jsx("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"})]})}function vA({title:s,children:t}){return R.jsxs("div",{className:"mb-3",children:[R.jsx("h5",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1 text-xs",children:s}),R.jsx("div",{className:"space-y-2",children:t})]})}function dv({title:s,tags:t,color:i}){const r={blue:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",red:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",green:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",yellow:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",purple:"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",gray:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"},l=r[i]||r.gray;return R.jsxs("div",{className:"mb-3",children:[R.jsx("h5",{className:"font-medium text-gray-800 dark:text-gray-200 mb-1 text-xs",children:s}),R.jsx("div",{className:"flex flex-wrap gap-1",children:t.map((u,d)=>R.jsx("span",{className:`px-2 py-1 ${l} rounded text-xs font-medium`,children:u},d))})]})}function _A({category:s,hoveredTool:t,onHover:i,onLeave:r}){return R.jsxs("div",{className:"group",children:[R.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[R.jsx("div",{className:`p-2 rounded-lg ${s.color}`,children:s.icon}),R.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors",children:s.title}),R.jsx("div",{className:"flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent ml-4"})]}),R.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3",children:s.tools.map((l,u)=>R.jsx(mA,{tool:l,categoryId:s.id,index:u,isHovered:t===`${s.id}-${u}`,onHover:i,onLeave:r,color:s.color},u))})]},s.id)}function xA(){const[s,t]=Ce.useState(null);return R.jsx("div",{className:"min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900",children:R.jsxs("div",{className:"container mx-auto px-4 py-8",children:[R.jsxs("div",{className:"mb-8 text-center",children:[R.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4",children:"Development Tools"}),R.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"These are the tools I'm most comfortable with and rely on regularly when building, testing, and shipping applications."})]}),R.jsx("div",{className:"space-y-8",children:pA.map(i=>R.jsx(_A,{category:i,hoveredTool:s,onHover:t,onLeave:()=>t(null)},i.id))})]})})}const yA=({language:s,index:t,getProficiencyLevel:i})=>{const r=i(s.proficiency);return R.jsxs("div",{className:`
        group relative 
        bg-white/70 dark:bg-gray-800/70 
        backdrop-blur-sm rounded-2xl p-6 
        shadow-lg border border-white/20 dark:border-gray-700 
        transition-all duration-500 
        hover:scale-105 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-gray-900/90
      `,style:{animationDelay:`${t*100}ms`},children:[R.jsx("div",{className:`
          absolute inset-0 bg-gradient-to-r ${s.color} 
          rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300
        `}),R.jsx("div",{className:"flex items-center justify-center mb-6 relative",children:R.jsx("div",{className:"relative p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300",children:R.jsx("img",{src:s.logoUrl,alt:`${s.name} logo`,className:"h-12 w-auto group-hover:scale-110 transition-transform duration-300"})})}),R.jsx("h3",{className:"text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white",children:s.name}),R.jsx("div",{className:"flex justify-center mb-4",children:R.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold ${r.color} bg-gray-100 dark:bg-gray-700`,children:r.level})}),R.jsxs("div",{className:"mb-6",children:[R.jsxs("div",{className:"flex justify-between items-center mb-2",children:[R.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:"Proficiency"}),R.jsxs("span",{className:"text-sm font-bold text-gray-900 dark:text-gray-100",children:[s.proficiency,"%"]})]}),R.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden",children:R.jsx("div",{className:`h-full bg-gradient-to-r ${s.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`,style:{width:`${s.proficiency}%`,animationDelay:`${t*200}ms`}})})]}),R.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300",children:s.description}),R.jsx("div",{className:`
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
        `,color:"from-orange-600 to-red-600"}],hv=s=>s>=90?{level:"Expert",color:"text-emerald-600"}:s>=80?{level:"Advanced",color:"text-blue-600"}:s>=60?{level:"Intermediate",color:"text-yellow-600"}:{level:"Beginner",color:"text-orange-600"};function SA(){return R.jsx("div",{className:`min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-20 
            dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/50 space-y-8`,children:R.jsxs("div",{className:"max-w-7xl mx-auto",children:[R.jsxs("div",{className:"text-center mb-12",children:[R.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4",children:"Programming Skills"}),R.jsx("p",{className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"A showcase of my programming language proficiency and experience"})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:Uo.map((s,t)=>(hv(s.proficiency),R.jsx(yA,{language:s,index:t,getProficiencyLevel:hv},s.id)))}),R.jsx("div",{className:"mt-16 text-center",children:R.jsxs("div",{className:"inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg",children:[R.jsxs("div",{className:"text-center",children:[R.jsx("div",{className:"text-2xl font-bold text-blue-600",children:Uo.length}),R.jsx("div",{className:"text-sm text-gray-600",children:"Languages"})]}),R.jsx("div",{className:"w-px h-8 bg-gray-300"}),R.jsxs("div",{className:"text-center",children:[R.jsxs("div",{className:"text-2xl font-bold text-green-600",children:[Math.round(Uo.reduce((s,t)=>s+t.proficiency,0)/Uo.length),"%"]}),R.jsx("div",{className:"text-sm text-gray-600",children:"Avg. Proficiency"})]}),R.jsx("div",{className:"w-px h-8 bg-gray-300"}),R.jsxs("div",{className:"text-center",children:[R.jsx("div",{className:"text-2xl font-bold text-purple-600",children:Uo.filter(s=>s.proficiency>=80).length}),R.jsx("div",{className:"text-sm text-gray-600",children:"Advanced+"})]})]})})]})})}function MA(){return R.jsx(R.Fragment,{children:R.jsxs("div",{className:"text-center",children:[R.jsx(xA,{}),R.jsx(SA,{})]})})}const bA={Django:{icon:rA,color:"text-green-600"},Vue:{icon:wc,color:"text-green-500"},"Vue 3":{icon:wc,color:"text-green-500"},Fiber:{icon:Es,color:"text-blue-500"},Go:{icon:Es,color:"text-blue-600"},Websocket:{icon:Rc,color:"text-orange-500"},"Nuxt 3":{icon:wc,color:"text-green-400"},OAuth:{icon:cA,color:"text-red-500"},REST:{icon:Rc,color:"text-purple-500"},API:{icon:Rc,color:"text-indigo-500"}},EA=[{id:1,title:"Lend System",description:"A comprehensive system for lending and borrowing items. Built with Django Rest Framework and Vue 3, featuring a monolithic architecture with REST API integration. Perfect for managing item loans with user authentication and tracking.",image:"https://picsum.photos/seed/lend/400/250",githubURL:"https://github.com/PatiphanAK/lend_sys",techStack:["Django","Vue 3","REST","API"],status:"Legacy",category:"Full Stack"},{id:2,title:"Quiz App",description:"An interactive quiz application inspired by Kahoot. Developed with Go Fiber backend, Gorilla WebSocket for real-time interactions, and Nuxt 3 frontend. Features Google OAuth2.0 authentication with secure HTTP cookie implementation.",image:"assets/project/quiz.png",githubURL:"https://github.com/PatiphanAK/leauge-of-quiz",techStack:["Go","Fiber","Websocket","Nuxt 3","OAuth"],status:"Active",category:"Real-time App"}];function TA({project:s}){const[t,i]=Ce.useState(!1);return R.jsxs("div",{className:"group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[R.jsx("div",{className:"absolute top-4 right-4 z-20",children:R.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${s.status==="Active"?"bg-green-100 text-green-700 border border-green-200":"bg-orange-100 text-orange-700 border border-orange-200"}`,children:s.status})}),R.jsxs("div",{className:"relative h-48 overflow-hidden",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"}),R.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"}),R.jsx("div",{className:"absolute bottom-4 left-4 z-20",children:R.jsx("span",{className:"px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800",children:s.category})})]}),R.jsxs("div",{className:"p-6 space-y-4",children:[R.jsx("h3",{className:"text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300",children:s.title}),R.jsx("p",{className:"text-gray-600 text-sm leading-relaxed line-clamp-4",children:s.description}),R.jsxs("div",{className:"space-y-3",children:[R.jsxs("h4",{className:"text-sm font-semibold text-gray-700 flex items-center gap-2",children:[R.jsx(Es,{className:"w-4 h-4"}),"Tech Stack"]}),R.jsx("div",{className:"flex flex-wrap gap-2",children:s.techStack.map((r,l)=>{const u=bA[r]||{icon:Es,color:"text-gray-600"},d=u.icon;return R.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200",style:{transform:t?"translateY(0)":"translateY(5px)",opacity:t?1:.8,transitionDelay:`${l*50}ms`},children:[R.jsx(d,{className:`w-4 h-4 ${u.color}`}),R.jsx("span",{className:"text-xs font-medium text-gray-700",children:r})]},l)})})]}),R.jsxs("div",{className:"flex gap-3 pt-4",children:[R.jsxs("a",{href:s.githubURL,target:"_blank",rel:"noopener noreferrer",className:"flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105",children:[R.jsx(ZT,{className:"w-4 h-4"}),R.jsx("span",{children:"View Code"})]}),R.jsx("button",{className:"flex items-center justify-center px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105",children:R.jsx(GT,{className:"w-4 h-4"})})]})]}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"})]})}function AA(){return R.jsxs("div",{className:"py-16 px-4 bg-gradient-to-br from-slate-50 to-white",children:[R.jsxs("div",{className:"max-w-7xl mx-auto",children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsxs("div",{className:"inline-flex items-center gap-3 mb-6",children:[R.jsx("div",{className:"p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg",children:R.jsx(wc,{className:"w-8 h-8 text-white"})}),R.jsx("h2",{className:"text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"Featured Projects"})]}),R.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed",children:"Showcasing my journey through different technologies and frameworks"})]}),R.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:EA.map((s,t)=>R.jsx("div",{style:{animationDelay:`${t*200}ms`,opacity:0,animation:"fadeInUp 0.8s ease forwards"},children:R.jsx(TA,{project:s})},s.id))}),R.jsx("div",{className:"text-center mt-16",children:R.jsxs("div",{className:"inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-200",children:[R.jsx(Wv,{className:"w-5 h-5 text-indigo-500"}),R.jsx("span",{className:"text-gray-700 font-medium",children:"More projects coming soon..."})]})})]}),R.jsx("style",{jsx:!0,children:`
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
            `})]})}const RA=[{id:1,image:"https://cmms.kmitl.ac.th/uploads/uploads/9b5d8ffe-78d9-463b-9286-f66f27e0d91b-1686793377632.png",degrees:"Bachelor of Science in Information Technology",school:"School of Information Technology, King Mongkut's Institute of Technology Ladkrabang",year:"2022 - Present",details:["Major in Information Technology","Minor in Software Development"]}];function wA({image:s,degrees:t,school:i,year:r,gpa:l,details:u}){const[d,h]=Ce.useState(!1);return R.jsxs("div",{className:"group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 hover:border-indigo-200/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),R.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"}),R.jsx("div",{className:"relative p-8",children:R.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start",children:[R.jsxs("div",{className:"relative flex-shrink-0 group/logo",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"}),R.jsx("div",{className:"relative bg-white p-6 rounded-2xl shadow-lg border border-slate-200/50 group-hover:shadow-xl transition-all duration-500",children:R.jsx("img",{src:s||"/api/placeholder/200/200",alt:`${i} logo`,className:"w-24 h-24 lg:w-32 lg:h-32 object-contain transform group-hover/logo:scale-105 transition-transform duration-500"})})]}),R.jsxs("div",{className:"flex-grow space-y-4",children:[R.jsx("div",{className:"space-y-2",children:R.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[R.jsx("div",{className:"p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg",children:R.jsx(qv,{className:"w-5 h-5 text-white"})}),R.jsx("h3",{className:"text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight",children:t})]})}),R.jsxs("div",{className:"flex items-start gap-3",children:[R.jsx("div",{className:"p-2 bg-slate-100 rounded-lg",children:R.jsx(ov,{className:"w-4 h-4 text-slate-600"})}),R.jsx("p",{className:"text-lg text-slate-700 font-medium leading-relaxed",children:i})]}),R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("div",{className:"p-2 bg-emerald-100 rounded-lg",children:R.jsx(Wv,{className:"w-4 h-4 text-emerald-600"})}),R.jsx("span",{className:"text-slate-600 font-medium px-4 py-2 bg-slate-100 rounded-full text-sm",children:r})]}),l&&R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("div",{className:"p-2 bg-amber-100 rounded-lg",children:R.jsx(ov,{className:"w-4 h-4 text-amber-600"})}),R.jsxs("span",{className:"text-amber-700 font-bold text-lg",children:["GPA ",l]})]}),u&&u.length>0&&R.jsxs("div",{className:"space-y-3 pt-4",children:[R.jsxs("h4",{className:"text-slate-700 font-semibold flex items-center gap-2",children:[R.jsx("div",{className:"w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"}),"Specializations"]}),R.jsx("div",{className:"grid gap-2",children:u.map((p,m)=>R.jsxs("div",{className:"flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:border-indigo-200 hover:bg-white/80 transition-all duration-300 group/detail",style:{animationDelay:`${m*100}ms`,opacity:d?1:.8,transform:d?"translateX(0)":"translateX(-10px)",transition:"all 0.3s ease"},children:[R.jsx(LT,{className:"w-4 h-4 text-indigo-500 group-hover/detail:text-purple-500 transition-colors duration-300"}),R.jsx("span",{className:"text-slate-700 font-medium",children:p})]},m))})]})]})]})})]})}function CA(){return R.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-16 px-4",children:[R.jsxs("div",{className:"max-w-4xl mx-auto text-center mb-16",children:[R.jsxs("div",{className:"inline-flex items-center gap-3 mb-6",children:[R.jsx("div",{className:"p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg",children:R.jsx(qv,{className:"w-8 h-8 text-white"})}),R.jsx("h2",{className:"text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"My Education"})]}),R.jsx("p",{className:"text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed",children:"Pursuing excellence in technology and innovation through dedicated academic journey"})]}),R.jsx("div",{className:"max-w-5xl mx-auto space-y-8",children:RA.map((s,t)=>R.jsx("div",{style:{animationDelay:`${t*200}ms`,opacity:0,animation:"fadeInUp 0.8s ease forwards"},children:R.jsx(wA,{image:s.image,degrees:s.degrees,school:s.school,year:s.year,gpa:s.gpa,details:s.details})},s.id))}),R.jsx("div",{className:"fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"}),R.jsx("div",{className:"fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none"}),R.jsx("style",{jsx:!0,children:`
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
          `})]})}const DA=[{id:1,platform:"Email",icon:eA,contact:"pakkahadsri@gmail.com",color:"from-red-500 to-pink-600",hoverColor:"hover:from-red-600 hover:to-pink-700"},{id:2,platform:"LinkedIn",icon:$T,contact:"https://www.linkedin.com/in/patiphan-akkahadsri-959535271/",color:"from-blue-500 to-indigo-600",hoverColor:"hover:from-blue-600 hover:to-indigo-700"},{id:3,platform:"Facebook",icon:XT,contact:"https://www.facebook.com/profile.php?id=100009448836193&locale=th_TH",color:"from-blue-600 to-purple-600",hoverColor:"hover:from-blue-700 hover:to-purple-700"}];function UA(){const s=async(t,i)=>{t.preventDefault();try{await navigator.clipboard.writeText(i)}catch{window.location.href=`mailto:${i}`}};return R.jsx("div",{className:"py-8 px-4",children:R.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[R.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Let's Connect"}),R.jsx("div",{className:"flex justify-center items-center gap-6",children:DA.map(t=>{const i=t.icon,r=!t.contact.startsWith("http");return R.jsxs("a",{href:t.contact.startsWith("http")?t.contact:`mailto:${t.contact}`,target:t.contact.startsWith("http")?"_blank":"_self",rel:"noopener noreferrer",onClick:r?l=>s(l,t.contact):void 0,className:"group relative p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-gray-200",title:t.platform,children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-r ${t.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}),R.jsx("div",{className:`relative p-3 bg-gradient-to-r ${t.color} ${t.hoverColor} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`,children:R.jsx(i,{className:"w-6 h-6 text-white"})})]},t.id)})}),R.jsx("p",{className:"text-sm text-gray-500 mt-6",children:"Feel free to reach out anytime! 🚀"})]})})}const NA=[{id:"home",component:R.jsx(cy,{})},{id:"about",component:R.jsx(hA,{})},{id:"skill",component:R.jsx(MA,{})},{id:"project",component:R.jsx(AA,{})},{id:"education",component:R.jsx(CA,{})},{id:"contact",component:R.jsx(UA,{})}];function LA(){return R.jsxs(R.Fragment,{children:[R.jsx(oy,{}),R.jsx("main",{className:"scroll-smooth",children:NA.map(({id:s,component:t})=>R.jsx("section",{id:s,className:s==="home"?"":"py-8",children:t},s))})]})}sy.createRoot(document.getElementById("root")).render(R.jsx(Ce.StrictMode,{children:R.jsx(LA,{})}));
