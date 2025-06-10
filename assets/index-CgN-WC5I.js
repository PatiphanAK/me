(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Dx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Rf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function Ux(){if(Ig)return _o;Ig=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return _o.Fragment=e,_o.jsx=i,_o.jsxs=i,_o}var zg;function Nx(){return zg||(zg=1,Rf.exports=Ux()),Rf.exports}var H=Nx(),wf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Lx(){if(Bg)return re;Bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,w={};function y(U,tt,xt){this.props=U,this.context=tt,this.refs=w,this.updater=xt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(U,tt,xt){this.props=U,this.context=tt,this.refs=w,this.updater=xt||M}var L=I.prototype=new _;L.constructor=I,A(L,y.prototype),L.isPureReactComponent=!0;var D=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function B(U,tt,xt,yt,J,mt){return xt=mt.ref,{$$typeof:o,type:U,key:tt,ref:xt!==void 0?xt:null,props:mt}}function W(U,tt){return B(U.type,tt,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return tt[xt]})}var F=/\/+/g;function lt(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):tt.toString(36)}function ot(){}function vt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ot,ot):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,tt,xt,yt,J){var mt=typeof U;(mt==="undefined"||mt==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case e:Mt=!0;break;case g:return Mt=U._init,ht(Mt(U._payload),tt,xt,yt,J)}}if(Mt)return J=J(U),Mt=yt===""?"."+lt(U,0):yt,D(J)?(xt="",Mt!=null&&(xt=Mt.replace(F,"$&/")+"/"),ht(J,tt,xt,"",function(oe){return oe})):J!=null&&(C(J)&&(J=W(J,xt+(J.key==null||U&&U.key===J.key?"":(""+J.key).replace(F,"$&/")+"/")+Mt)),tt.push(J)),1;Mt=0;var Rt=yt===""?".":yt+":";if(D(U))for(var Ct=0;Ct<U.length;Ct++)yt=U[Ct],mt=Rt+lt(yt,Ct),Mt+=ht(yt,tt,xt,mt,J);else if(Ct=S(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(yt=U.next()).done;)yt=yt.value,mt=Rt+lt(yt,Ct++),Mt+=ht(yt,tt,xt,mt,J);else if(mt==="object"){if(typeof U.then=="function")return ht(vt(U),tt,xt,yt,J);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function P(U,tt,xt){if(U==null)return U;var yt=[],J=0;return ht(U,yt,"","",function(mt){return tt.call(xt,mt,J++)}),yt}function K(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Et(){}return re.Children={map:P,forEach:function(U,tt,xt){P(U,function(){tt.apply(this,arguments)},xt)},count:function(U){var tt=0;return P(U,function(){tt++}),tt},toArray:function(U){return P(U,function(tt){return tt})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=I,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return k.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,tt,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=A({},U.props),J=U.key,mt=void 0;if(tt!=null)for(Mt in tt.ref!==void 0&&(mt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!X.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(yt[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)yt.children=xt;else if(1<Mt){for(var Rt=Array(Mt),Ct=0;Ct<Mt;Ct++)Rt[Ct]=arguments[Ct+2];yt.children=Rt}return B(U.type,J,void 0,void 0,mt,yt)},re.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,tt,xt){var yt,J={},mt=null;if(tt!=null)for(yt in tt.key!==void 0&&(mt=""+tt.key),tt)X.call(tt,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(J[yt]=tt[yt]);var Mt=arguments.length-2;if(Mt===1)J.children=xt;else if(1<Mt){for(var Rt=Array(Mt),Ct=0;Ct<Mt;Ct++)Rt[Ct]=arguments[Ct+2];J.children=Rt}if(U&&U.defaultProps)for(yt in Mt=U.defaultProps,Mt)J[yt]===void 0&&(J[yt]=Mt[yt]);return B(U,mt,void 0,void 0,null,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:h,render:U}},re.isValidElement=C,re.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:K}},re.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},re.startTransition=function(U){var tt=k.T,xt={};k.T=xt;try{var yt=U(),J=k.S;J!==null&&J(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,Y)}catch(mt){Y(mt)}finally{k.T=tt}},re.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},re.use=function(U){return k.H.use(U)},re.useActionState=function(U,tt,xt){return k.H.useActionState(U,tt,xt)},re.useCallback=function(U,tt){return k.H.useCallback(U,tt)},re.useContext=function(U){return k.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,tt){return k.H.useDeferredValue(U,tt)},re.useEffect=function(U,tt,xt){var yt=k.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,tt)},re.useId=function(){return k.H.useId()},re.useImperativeHandle=function(U,tt,xt){return k.H.useImperativeHandle(U,tt,xt)},re.useInsertionEffect=function(U,tt){return k.H.useInsertionEffect(U,tt)},re.useLayoutEffect=function(U,tt){return k.H.useLayoutEffect(U,tt)},re.useMemo=function(U,tt){return k.H.useMemo(U,tt)},re.useOptimistic=function(U,tt){return k.H.useOptimistic(U,tt)},re.useReducer=function(U,tt,xt){return k.H.useReducer(U,tt,xt)},re.useRef=function(U){return k.H.useRef(U)},re.useState=function(U){return k.H.useState(U)},re.useSyncExternalStore=function(U,tt,xt){return k.H.useSyncExternalStore(U,tt,xt)},re.useTransition=function(){return k.H.useTransition()},re.version="19.1.0",re}var Fg;function Jd(){return Fg||(Fg=1,wf.exports=Lx()),wf.exports}var Nn=Jd();const Ox=Dx(Nn);var Cf={exports:{}},vo={},Df={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Px(){return Hg||(Hg=1,function(o){function e(P,K){var Y=P.length;P.push(K);t:for(;0<Y;){var Et=Y-1>>>1,U=P[Et];if(0<l(U,K))P[Et]=K,P[Y]=U,Y=Et;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],Y=P.pop();if(Y!==K){P[0]=Y;t:for(var Et=0,U=P.length,tt=U>>>1;Et<tt;){var xt=2*(Et+1)-1,yt=P[xt],J=xt+1,mt=P[J];if(0>l(yt,Y))J<U&&0>l(mt,yt)?(P[Et]=mt,P[J]=Y,Et=J):(P[Et]=yt,P[xt]=Y,Et=xt);else if(J<U&&0>l(mt,Y))P[Et]=mt,P[J]=Y,Et=J;else break t}}return K}function l(P,K){var Y=P.sortIndex-K.sortIndex;return Y!==0?Y:P.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,S=3,M=!1,A=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=P)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function k(P){if(w=!1,D(P),!A)if(i(m)!==null)A=!0,X||(X=!0,lt());else{var K=i(p);K!==null&&ht(k,K.startTime-P)}}var X=!1,B=-1,W=5,C=-1;function R(){return y?!0:!(o.unstable_now()-C<W)}function F(){if(y=!1,X){var P=o.unstable_now();C=P;var K=!0;try{t:{A=!1,w&&(w=!1,I(B),B=-1),M=!0;var Y=S;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,S=v.priorityLevel;var U=Et(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,D(P),K=!0;break e}v===i(m)&&r(m),D(P)}else r(m);v=i(m)}if(v!==null)K=!0;else{var tt=i(p);tt!==null&&ht(k,tt.startTime-P),K=!1}}break t}finally{v=null,S=Y,M=!1}K=void 0}}finally{K?lt():X=!1}}}var lt;if(typeof L=="function")lt=function(){L(F)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,vt=ot.port2;ot.port1.onmessage=F,lt=function(){vt.postMessage(null)}}else lt=function(){_(F,0)};function ht(P,K){B=_(function(){P(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Y=S;S=K;try{return P()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return K()}finally{S=Y}},o.unstable_scheduleCallback=function(P,K,Y){var Et=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Et+Y:Et):Y=Et,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,P={id:g++,callback:K,priorityLevel:P,startTime:Y,expirationTime:U,sortIndex:-1},Y>Et?(P.sortIndex=Y,e(p,P),i(m)===null&&P===i(p)&&(w?(I(B),B=-1):w=!0,ht(k,Y-Et))):(P.sortIndex=U,e(m,P),A||M||(A=!0,X||(X=!0,lt()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var K=S;return function(){var Y=S;S=K;try{return P.apply(this,arguments)}finally{S=Y}}}}(Uf)),Uf}var Gg;function Ix(){return Gg||(Gg=1,Df.exports=Px()),Df.exports}var Nf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function zx(){if(Vg)return An;Vg=1;var o=Jd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.1.0",An}var kg;function Bx(){if(kg)return Nf.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=zx(),Nf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Fx(){if(Xg)return vo;Xg=1;var o=Ix(),e=Jd(),i=Bx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,b=c.child;b;){if(b===a){x=!0,a=c,s=f;break}if(b===s){x=!0,s=c,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,s=c;break}if(b===s){x=!0,s=f,a=c;break}b=b.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case y:return"Profiler";case w:return"StrictMode";case k:return"Suspense";case X:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case L:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:vt(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return vt(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Et=[],U=-1;function tt(t){return{current:t}}function xt(t){0>U||(t.current=Et[U],Et[U]=null,U--)}function yt(t,n){U++,Et[U]=t.current,t.current=n}var J=tt(null),mt=tt(null),Mt=tt(null),Rt=tt(null);function Ct(t,n){switch(yt(Mt,n),yt(mt,t),yt(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ug(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ug(n),t=fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xt(J),yt(J,t)}function oe(){xt(J),xt(mt),xt(Mt)}function Qt(t){t.memoizedState!==null&&yt(Rt,t);var n=J.current,a=fg(n,t.type);n!==a&&(yt(mt,t),yt(J,a))}function Le(t){mt.current===t&&(xt(J),xt(mt)),Rt.current===t&&(xt(Rt),fo._currentValue=Y)}var Be=Object.prototype.hasOwnProperty,me=o.unstable_scheduleCallback,z=o.unstable_cancelCallback,_n=o.unstable_shouldYield,ye=o.unstable_requestPaint,de=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Qe=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ft=null,pt=null;function ct(t){if(typeof E=="function"&&et(t),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,t)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(t){return t>>>=0,t===0?32:31-(Ut(t)/Gt|0)|0}var St=256,It=4194304;function qt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function jt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=qt(s):(x&=b,x!==0?c=qt(x):a||(a=b&~t,a!==0&&(c=qt(a))))):(b=s&~f,b!==0?c=qt(b):x!==0?c=qt(x):a||(a=s&~t,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function wt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=St;return St<<=1,(St&4194048)===0&&(St=256),t}function Nt(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function zt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function At(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,O=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-Pt(a),gt=1<<ut;b[ut]=0,O[ut]=-1;var nt=$[ut];if(nt!==null)for($[ut]=null,ut=0;ut<nt.length;ut++){var it=nt[ut];it!==null&&(it.lane&=-536870913)}a&=~gt}s!==0&&_t(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function _t(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ft(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function De(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ee(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Dg(t.type))}function Gn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,vn="__reactProps$"+fn,Ln="__reactContainer$"+fn,Ga="__reactEvents$"+fn,Po="__reactListeners$"+fn,Io="__reactHandles$"+fn,Va="__reactResources$"+fn,ia="__reactMarker$"+fn;function aa(t){delete t[rn],delete t[vn],delete t[Ga],delete t[Po],delete t[Io]}function Ci(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ln]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=mg(t);t!==null;){if(a=t[rn])return a;t=mg(t)}return n}t=a,a=t.parentNode}return null}function Di(t){if(t=t[rn]||t[Ln]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ka(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ra(t){var n=t[Va];return n||(n=t[Va]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[ia]=!0}var zo=new Set,Bo={};function Ui(t,n){T(t,n),T(t+"Capture",n)}function T(t,n){for(Bo[t]=n,t=0;t<n.length;t++)zo.add(n[t])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function Z(t){return Be.call(rt,t)?!0:Be.call(at,t)?!1:j.test(t)?rt[t]=!0:(at[t]=!0,!1)}function Tt(t,n,a){if(Z(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Dt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ot(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Bt,$t;function Zt(t){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+t+$t}var Xt=!1;function ce(t,n){if(!t||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var nt=it}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(it){nt=it}t.call(gt.prototype)}}else{try{throw Error()}catch(it){nt=it}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var O=x.split(`
`),$=b.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===$.length)for(s=O.length-1,c=$.length-1;1<=s&&0<=c&&O[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==$[c]){var ut=`
`+O[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zt(a):""}function Ae(t){switch(t.tag){case 26:case 27:case 5:return Zt(t.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return Zt("Activity");default:return""}}function Ge(t){try{var n="";do n+=Ae(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=ve(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){t._valueTracker||(t._valueTracker=Kt(t))}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ve(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function En(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var sa=/[\n"\\]/g;function Ve(t){return t.replace(sa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(t,n,a,s,c,f,x,b){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+_e(n)):t.value!==""+_e(n)&&(t.value=""+_e(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?bn(t,x,_e(n)):a!=null?bn(t,x,_e(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+_e(b):t.removeAttribute("name")}function Fe(t,n,a,s,c,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function bn(t,n,a){n==="number"&&En(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+_e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+_e(a):""}function xn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=_e(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function _i(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Li.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function fh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&uh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&uh(t,f,n[f])}function Tc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return C0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ac=null;function Rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,Mr=null;function dh(t){var n=Di(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ni(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[vn]||null;if(!c)throw Error(r(90));Ni(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Me(s)}break t;case"textarea":dn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var wc=!1;function hh(t,n,a){if(wc)return t(n,a);wc=!0;try{var s=t(n);return s}finally{if(wc=!1,(yr!==null||Mr!==null)&&(bl(),yr&&(n=yr,t=Mr,Mr=yr=null,dh(n),t)))for(n=0;n<t.length;n++)dh(t[n])}}function bs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if(Oi)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Cc=!1}var oa=null,Dc=null,Ho=null;function ph(){if(Ho)return Ho;var t,n=Dc,a=n.length,s,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Ho=c.slice(t,1<s?1-s:void 0)}function Go(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function mh(){return!1}function On(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vo:mh,this.isPropagationStopped=mh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=On(Xa),As=g({},Xa,{view:0,detail:0}),D0=On(As),Uc,Nc,Rs,Xo=g({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(Uc=t.screenX-Rs.screenX,Nc=t.screenY-Rs.screenY):Nc=Uc=0,Rs=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),gh=On(Xo),U0=g({},Xo,{dataTransfer:0}),N0=On(U0),L0=g({},As,{relatedTarget:0}),Lc=On(L0),O0=g({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=On(O0),I0=g({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=On(I0),B0=g({},Xa,{data:0}),_h=On(B0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=G0[t])?!!n[t]:!1}function Oc(){return V0}var k0=g({},As,{key:function(t){if(t.key){var n=F0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X0=On(k0),W0=g({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=On(W0),q0=g({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),j0=On(q0),Y0=g({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=On(Y0),K0=g({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=On(K0),J0=g({},Xa,{newState:0,oldState:0}),$0=On(J0),tv=[9,13,27,32],Pc=Oi&&"CompositionEvent"in window,ws=null;Oi&&"documentMode"in document&&(ws=document.documentMode);var ev=Oi&&"TextEvent"in window&&!ws,xh=Oi&&(!Pc||ws&&8<ws&&11>=ws),Sh=" ",yh=!1;function Mh(t,n){switch(t){case"keyup":return tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function nv(t,n){switch(t){case"compositionend":return Eh(n);case"keypress":return n.which!==32?null:(yh=!0,Sh);case"textInput":return t=n.data,t===Sh&&yh?null:t;default:return null}}function iv(t,n){if(Er)return t==="compositionend"||!Pc&&Mh(t,n)?(t=ph(),Ho=Dc=oa=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xh&&n.locale!=="ko"?null:n.data;default:return null}}var av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!av[t.type]:n==="textarea"}function Th(t,n,a,s){yr?Mr?Mr.push(s):Mr=[s]:yr=s,n=Dl(n,"onChange"),0<n.length&&(a=new ko("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Cs=null,Ds=null;function rv(t){rg(t,0)}function Wo(t){var n=ka(t);if(Me(n))return t}function Ah(t,n){if(t==="change")return n}var Rh=!1;if(Oi){var Ic;if(Oi){var zc="oninput"in document;if(!zc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),zc=typeof wh.oninput=="function"}Ic=zc}else Ic=!1;Rh=Ic&&(!document.documentMode||9<document.documentMode)}function Ch(){Cs&&(Cs.detachEvent("onpropertychange",Dh),Ds=Cs=null)}function Dh(t){if(t.propertyName==="value"&&Wo(Ds)){var n=[];Th(n,Ds,t,Rc(t)),hh(rv,n)}}function sv(t,n,a){t==="focusin"?(Ch(),Cs=n,Ds=a,Cs.attachEvent("onpropertychange",Dh)):t==="focusout"&&Ch()}function ov(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Ds)}function lv(t,n){if(t==="click")return Wo(n)}function cv(t,n){if(t==="input"||t==="change")return Wo(n)}function uv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:uv;function Us(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Be.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,n){var a=Uh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Uh(a)}}function Lh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Oh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=En(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=En(t.document)}return n}function Bc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fv=Oi&&"documentMode"in document&&11>=document.documentMode,br=null,Fc=null,Ns=null,Hc=!1;function Ph(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||br==null||br!==En(s)||(s=br,"selectionStart"in s&&Bc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Us(Ns,s)||(Ns=s,s=Dl(Fc,"onSelect"),0<s.length&&(n=new ko("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=br)))}function Wa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Gc={},Ih={};Oi&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function qa(t){if(Gc[t])return Gc[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ih)return Gc[t]=n[a];return t}var zh=qa("animationend"),Bh=qa("animationiteration"),Fh=qa("animationstart"),dv=qa("transitionrun"),hv=qa("transitionstart"),pv=qa("transitioncancel"),Hh=qa("transitionend"),Gh=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vc.push("scrollEnd");function oi(t,n){Gh.set(t,n),Ui(n,[t])}var Vh=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=Vh.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ge(n)},Vh.set(t,n),n)}return{value:t,source:n,stack:Ge(n)}}var Jn=[],Ar=0,kc=0;function qo(){for(var t=Ar,n=kc=Ar=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&kh(a,c,f)}}function jo(t,n,a,s){Jn[Ar++]=t,Jn[Ar++]=n,Jn[Ar++]=a,Jn[Ar++]=s,kc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Xc(t,n,a,s){return jo(t,n,a,s),Yo(t)}function Rr(t,n){return jo(t,null,null,n),Yo(t)}function kh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Yo(t){if(50<io)throw io=0,Ku=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var wr={};function mv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new mv(t,n,a,s)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xh(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zo(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Wc(t)&&(x=1);else if(typeof t=="string")x=_x(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=kn(31,a,n,c),t.elementType=C,t.lanes=f,t;case A:return ja(a.children,c,f,n);case w:x=8,c|=24;break;case y:return t=kn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case k:return t=kn(13,a,n,c),t.elementType=k,t.lanes=f,t;case X:return t=kn(19,a,n,c),t.elementType=X,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:x=10;break t;case I:x=9;break t;case D:x=11;break t;case B:x=14;break t;case W:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ja(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function qc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function jc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cr=[],Dr=0,Ko=null,Qo=0,$n=[],ti=0,Ya=null,Ii=1,zi="";function Za(t,n){Cr[Dr++]=Qo,Cr[Dr++]=Ko,Ko=t,Qo=n}function Wh(t,n,a){$n[ti++]=Ii,$n[ti++]=zi,$n[ti++]=Ya,Ya=t;var s=Ii;t=zi;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ii=1<<32-Pt(n)+c|a<<c|s,zi=f+t}else Ii=1<<f|a<<c|s,zi=t}function Yc(t){t.return!==null&&(Za(t,1),Wh(t,1,0))}function Zc(t){for(;t===Ko;)Ko=Cr[--Dr],Cr[Dr]=null,Qo=Cr[--Dr],Cr[Dr]=null;for(;t===Ya;)Ya=$n[--ti],$n[ti]=null,zi=$n[--ti],$n[ti]=null,Ii=$n[--ti],$n[ti]=null}var Dn=null,je=null,Re=!1,Ka=null,vi=!1,Kc=Error(r(519));function Qa(t){var n=Error(r(418,""));throw Ps(Qn(n,t)),Kc}function qh(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[vn]=s,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)pe(ro[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Fe(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),qe(n);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),xn(n,s.value,s.defaultValue,s.children),qe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||cg(n.textContent,a)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||Qa(t)}function jh(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Dn=Dn.return}}function Ls(t){if(t!==Dn)return!1;if(!Re)return jh(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hf(t.type,t.memoizedProps)),a=!a),a&&je&&Qa(t),jh(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){je=ci(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}je=null}}else n===27?(n=je,Ea(t.type)?(t=_f,_f=null,je=t):je=n):je=Dn?ci(t.stateNode.nextSibling):null;return!0}function Os(){je=Dn=null,Re=!1}function Yh(){var t=Ka;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),Ka=null),t}function Ps(t){Ka===null?Ka=[t]:Ka.push(t)}var Qc=tt(null),Ja=null,Bi=null;function la(t,n,a){yt(Qc,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=Qc.current,xt(Qc)}function Jc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function $c(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var O=0;O<n.length;O++)if(b.context===n[O]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Jc(f.return,a,t),s||(x=null);break t}f=b.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Jc(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Is(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var b=c.type;Vn(c.pendingProps.value,x.value)||(t!==null?t.push(b):t=[b])}}else if(c===Rt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(fo):t=[fo])}c=c.return}t!==null&&$c(n,t,a,s),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Zh(Ja,t)}function $o(t,n){return Ja===null&&$a(t),Zh(t,n)}function Zh(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var gv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},_v=o.unstable_scheduleCallback,vv=o.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tu(){return{controller:new gv,data:new Map,refCount:0}}function zs(t){t.refCount--,t.refCount===0&&_v(vv,function(){t.controller.abort()})}var Bs=null,eu=0,Ur=0,Nr=null;function xv(t,n){if(Bs===null){var a=Bs=[];eu=0,Ur=af(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return eu++,n.then(Kh,Kh),n}function Kh(){if(--eu===0&&Bs!==null){Nr!==null&&(Nr.status="fulfilled");var t=Bs;Bs=null,Ur=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Sv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Qh=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&xv(t,n),Qh!==null&&Qh(t,n)};var tr=tt(null);function nu(){var t=tr.current;return t!==null?t:ke.pooledCache}function tl(t,n){n===null?yt(tr,tr.current):yt(tr,n.pool)}function Jh(){var t=nu();return t===null?null:{parent:on._currentValue,pool:t}}var Fs=Error(r(460)),$h=Error(r(474)),el=Error(r(542)),iu={then:function(){}};function tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nl(){}function ep(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(nl,nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ip(t),t;default:if(typeof n.status=="string")n.then(nl,nl);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ip(t),t}throw Hs=n,Fs}}var Hs=null;function np(){if(Hs===null)throw Error(r(459));var t=Hs;return Hs=null,t}function ip(t){if(t===Fs||t===el)throw Error(r(483))}var ca=!1;function au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Yo(t),kh(t,null,a),n}return jo(t,s,n,a),Yo(t)}function Gs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}function su(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ou=!1;function Vs(){if(ou){var t=Nr;if(t!==null)throw t}}function ks(t,n,a,s){ou=!1;var c=t.updateQueue;ca=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var O=b,$=O.next;O.next=null,x===null?f=$:x.next=$,x=O;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==x&&(b===null?ut.firstBaseUpdate=$:b.next=$,ut.lastBaseUpdate=O))}if(f!==null){var gt=c.baseState;x=0,ut=$=O=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(Se&nt)===nt:(s&nt)===nt){nt!==0&&nt===Ur&&(ou=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=t,Jt=b;nt=n;var Ie=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(Ie,gt,nt);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(Ie,gt,nt):ee,nt==null)break t;gt=g({},gt,nt);break t;case 2:ca=!0}}nt=b.callback,nt!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?($=ut=it,O=gt):ut=ut.next=it,x|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(O=gt),c.baseState=O,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),xa|=x,t.lanes=x,t.memoizedState=gt}}function ap(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function rp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ap(a[t],n)}var Lr=tt(null),il=tt(0);function sp(t,n){t=qi,yt(il,t),yt(Lr,n),qi=t|n.baseLanes}function lu(){yt(il,qi),yt(Lr,Lr.current)}function cu(){qi=il.current,xt(Lr),xt(il)}var da=0,ue=null,Oe=null,en=null,al=!1,Or=!1,er=!1,rl=0,Xs=0,Pr=null,yv=0;function Je(){throw Error(r(321))}function uu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function fu(t,n,a,s,c,f){return da=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?kp:Xp,er=!1,f=a(s,c),er=!1,Or&&(f=lp(n,a,s,c)),op(t),f}function op(t){P.H=fl;var n=Oe!==null&&Oe.next!==null;if(da=0,en=Oe=ue=null,al=!1,Xs=0,Pr=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&Jo(t)&&(hn=!0))}function lp(t,n,a,s){ue=t;var c=0;do{if(Or&&(Pr=null),Xs=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,en=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=wv,f=n(a,s)}while(Or);return f}function Mv(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Ws(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(ue.flags|=1024),n}function du(){var t=rl!==0;return rl=0,t}function hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pu(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}da=0,en=Oe=ue=null,Or=!1,Xs=rl=0,Pr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=t:en=en.next=t,en}function nn(){if(Oe===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Oe=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},en===null?ue.memoizedState=en=t:en=en.next=t}return en}function mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(t){var n=Xs;return Xs+=1,Pr===null&&(Pr=[]),t=ep(Pr,t,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?kp:Xp),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ws(t);if(t.$$typeof===L)return Tn(t)}throw Error(r(438,String(t)))}function gu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=mu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=nn();return _u(n,Oe,t)}function _u(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=x=null,O=null,$=n,ut=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Se&gt)===gt:(da&gt)===gt){var nt=$.revertLane;if(nt===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Ur&&(ut=!0);else if((da&nt)===nt){$=$.next,nt===Ur&&(ut=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(b=O=gt,x=f):O=O.next=gt,ue.lanes|=nt,xa|=nt;gt=$.action,er&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(b=O=nt,x=f):O=O.next=nt,ue.lanes|=gt,xa|=gt;$=$.next}while($!==null&&$!==n);if(O===null?x=f:O.next=b,!Vn(f,t.memoizedState)&&(hn=!0,ut&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function vu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Vn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function cp(t,n,a){var s=ue,c=nn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Vn((Oe||c).memoizedState,a);x&&(c.memoizedState=a,hn=!0),c=c.queue;var b=dp.bind(null,s,c,t);if(qs(2048,8,b,[t]),c.getSnapshot!==n||x||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Ir(9,ll(),fp.bind(null,s,c,a,n),null),ke===null)throw Error(r(349));f||(da&124)!==0||up(s,n,a)}return a}function up(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=mu(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fp(t,n,a,s){n.value=a,n.getSnapshot=s,hp(n)&&pp(t)}function dp(t,n,a){return a(function(){hp(n)&&pp(t)})}function hp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function pp(t){var n=Rr(t,2);n!==null&&Yn(n,t,2)}function xu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),er){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function mp(t,n,a,s){return t.baseState=a,_u(t,Oe,typeof s=="function"?s:Hi)}function Ev(t,n,a,s,c){if(ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var b=a(c,s),O=P.S;O!==null&&O(x,b),_p(t,n,b)}catch($){Su(t,n,$)}finally{P.T=f}}else try{f=a(c,s),_p(t,n,f)}catch($){Su(t,n,$)}}function _p(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vp(t,n,s)},function(s){return Su(t,n,s)}):vp(t,n,a)}function vp(t,n,a){n.status="fulfilled",n.value=a,xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gp(t,a)))}function Su(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xp(n),n=n.next;while(n!==s)}t.action=null}function xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sp(t,n){return n}function yp(t,n){if(Re){var a=ke.formState;if(a!==null){t:{var s=ue;if(Re){if(je){e:{for(var c=je,f=vi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=ci(c.nextSibling),s=c.data==="F!";break t}}Qa(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:n},a.queue=s,a=Hp.bind(null,ue,s),s.dispatch=a,s=xu(!1),f=Tu.bind(null,ue,!1,s.queue),s=Pn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Ev.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mp(t){var n=nn();return Ep(n,Oe,t)}function Ep(t,n,a){if(n=_u(t,n,Sp)[0],t=ol(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ws(n)}catch(x){throw x===Fs?el:x}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Ir(9,ll(),bv.bind(null,c,a),null)),[s,f,t]}function bv(t,n){t.action=n}function bp(t){var n=nn(),a=Oe;if(a!==null)return Ep(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ir(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=mu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ll(){return{destroy:void 0,resource:void 0}}function Tp(){return nn().memoizedState}function cl(t,n,a,s){var c=Pn();s=s===void 0?null:s,ue.flags|=t,c.memoizedState=Ir(1|n,ll(),a,s)}function qs(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Oe!==null&&s!==null&&uu(s,Oe.memoizedState.deps)?c.memoizedState=Ir(n,f,a,s):(ue.flags|=t,c.memoizedState=Ir(1|n,f,a,s))}function Ap(t,n){cl(8390656,8,t,n)}function Rp(t,n){qs(2048,8,t,n)}function wp(t,n){return qs(4,2,t,n)}function Cp(t,n){return qs(4,4,t,n)}function Dp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Up(t,n,a){a=a!=null?a.concat([t]):null,qs(4,4,Dp.bind(null,n,t),a)}function yu(){}function Np(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&uu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&uu(n,s[1]))return s[0];if(s=t(),er){ct(!0);try{t()}finally{ct(!1)}}return a.memoizedState=[s,n],s}function Mu(t,n,a){return a===void 0||(da&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Im(),ue.lanes|=t,xa|=t,a)}function Op(t,n,a,s){return Vn(a,n)?a:Lr.current!==null?(t=Mu(t,a,s),Vn(t,n)||(hn=!0),t):(da&42)===0?(hn=!0,t.memoizedState=a):(t=Im(),ue.lanes|=t,xa|=t,n)}function Pp(t,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var x=P.T,b={};P.T=b,Tu(t,!1,n,a);try{var O=c(),$=P.S;if($!==null&&$(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=Sv(O,s);js(t,n,ut,jn(t))}else js(t,n,s,jn(t))}catch(gt){js(t,n,{then:function(){},status:"rejected",reason:gt},jn())}finally{K.p=f,P.T=x}}function Tv(){}function Eu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Ip(t).queue;Pp(t,c,n,Y,a===null?Tv:function(){return zp(t),a(s)})}function Ip(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zp(t){var n=Ip(t).next.queue;js(t,n,{},jn())}function bu(){return Tn(fo)}function Bp(){return nn().memoizedState}function Fp(){return nn().memoizedState}function Av(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=ua(a);var s=fa(n,t,a);s!==null&&(Yn(s,n,a),Gs(s,n,a)),n={cache:tu()},t.payload=n;return}n=n.return}}function Rv(t,n,a){var s=jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ul(t)?Gp(n,a):(a=Xc(t,n,a,s),a!==null&&(Yn(a,t,s),Vp(a,n,s)))}function Hp(t,n,a){var s=jn();js(t,n,a,s)}function js(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(t))Gp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(c.hasEagerState=!0,c.eagerState=b,Vn(b,x))return jo(t,n,c,0),ke===null&&qo(),!1}catch{}finally{}if(a=Xc(t,n,c,s),a!==null)return Yn(a,t,s),Vp(a,n,s),!0}return!1}function Tu(t,n,a,s){if(s={lane:2,revertLane:af(),action:s,hasEagerState:!1,eagerState:null,next:null},ul(t)){if(n)throw Error(r(479))}else n=Xc(t,a,s,2),n!==null&&Yn(n,t,2)}function ul(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Gp(t,n){Or=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}var fl={readContext:Tn,use:sl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},kp={readContext:Tn,use:sl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Ap,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,Dp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var s=t();if(er){ct(!0);try{t()}finally{ct(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Pn();if(a!==void 0){var c=a(n);if(er){ct(!0);try{a(n)}finally{ct(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Rv.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=xu(t);var n=t.queue,a=Hp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:yu,useDeferredValue:function(t,n){var a=Pn();return Mu(a,t,n)},useTransition:function(){var t=xu(!1);return t=Pp.bind(null,ue,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,c=Pn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||up(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ap(dp.bind(null,s,f,t),[t]),s.flags|=2048,Ir(9,ll(),fp.bind(null,s,f,a,n),null),a},useId:function(){var t=Pn(),n=ke.identifierPrefix;if(Re){var a=zi,s=Ii;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=yv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:bu,useFormState:yp,useActionState:yp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:gu,useCacheRefresh:function(){return Pn().memoizedState=Av.bind(null,ue)}},Xp={readContext:Tn,use:sl,useCallback:Np,useContext:Tn,useEffect:Rp,useImperativeHandle:Up,useInsertionEffect:wp,useLayoutEffect:Cp,useMemo:Lp,useReducer:ol,useRef:Tp,useState:function(){return ol(Hi)},useDebugValue:yu,useDeferredValue:function(t,n){var a=nn();return Op(a,Oe.memoizedState,t,n)},useTransition:function(){var t=ol(Hi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:cp,useId:Bp,useHostTransitionStatus:bu,useFormState:Mp,useActionState:Mp,useOptimistic:function(t,n){var a=nn();return mp(a,Oe,t,n)},useMemoCache:gu,useCacheRefresh:Fp},wv={readContext:Tn,use:sl,useCallback:Np,useContext:Tn,useEffect:Rp,useImperativeHandle:Up,useInsertionEffect:wp,useLayoutEffect:Cp,useMemo:Lp,useReducer:vu,useRef:Tp,useState:function(){return vu(Hi)},useDebugValue:yu,useDeferredValue:function(t,n){var a=nn();return Oe===null?Mu(a,t,n):Op(a,Oe.memoizedState,t,n)},useTransition:function(){var t=vu(Hi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:cp,useId:Bp,useHostTransitionStatus:bu,useFormState:bp,useActionState:bp,useOptimistic:function(t,n){var a=nn();return Oe!==null?mp(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:gu,useCacheRefresh:Fp},zr=null,Ys=0;function dl(t){var n=Ys;return Ys+=1,zr===null&&(zr=[]),ep(zr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function hl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wp(t){var n=t._init;return n(t._payload)}function qp(t){function n(q,G){if(t){var Q=q.deletions;Q===null?(q.deletions=[G],q.flags|=16):Q.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Pi(q,G),q.index=0,q.sibling=null,q}function f(q,G,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<G?(q.flags|=67108866,G):Q):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,G,Q,dt){return G===null||G.tag!==6?(G=qc(Q,q.mode,dt),G.return=q,G):(G=c(G,Q),G.return=q,G)}function O(q,G,Q,dt){var Ht=Q.type;return Ht===A?ut(q,G,Q.props.children,dt,Q.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Wp(Ht)===G.type)?(G=c(G,Q.props),Zs(G,Q),G.return=q,G):(G=Zo(Q.type,Q.key,Q.props,null,q.mode,dt),Zs(G,Q),G.return=q,G)}function $(q,G,Q,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=jc(Q,q.mode,dt),G.return=q,G):(G=c(G,Q.children||[]),G.return=q,G)}function ut(q,G,Q,dt,Ht){return G===null||G.tag!==7?(G=ja(Q,q.mode,dt,Ht),G.return=q,G):(G=c(G,Q),G.return=q,G)}function gt(q,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=qc(""+G,q.mode,Q),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return Q=Zo(G.type,G.key,G.props,null,q.mode,Q),Zs(Q,G),Q.return=q,Q;case M:return G=jc(G,q.mode,Q),G.return=q,G;case W:var dt=G._init;return G=dt(G._payload),gt(q,G,Q)}if(ht(G)||lt(G))return G=ja(G,q.mode,Q,null),G.return=q,G;if(typeof G.then=="function")return gt(q,dl(G),Q);if(G.$$typeof===L)return gt(q,$o(q,G),Q);hl(q,G)}return null}function nt(q,G,Q,dt){var Ht=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:b(q,G,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Ht?O(q,G,Q,dt):null;case M:return Q.key===Ht?$(q,G,Q,dt):null;case W:return Ht=Q._init,Q=Ht(Q._payload),nt(q,G,Q,dt)}if(ht(Q)||lt(Q))return Ht!==null?null:ut(q,G,Q,dt,null);if(typeof Q.then=="function")return nt(q,G,dl(Q),dt);if(Q.$$typeof===L)return nt(q,G,$o(q,Q),dt);hl(q,Q)}return null}function it(q,G,Q,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(Q)||null,b(G,q,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case S:return q=q.get(dt.key===null?Q:dt.key)||null,O(G,q,dt,Ht);case M:return q=q.get(dt.key===null?Q:dt.key)||null,$(G,q,dt,Ht);case W:var fe=dt._init;return dt=fe(dt._payload),it(q,G,Q,dt,Ht)}if(ht(dt)||lt(dt))return q=q.get(Q)||null,ut(G,q,dt,Ht,null);if(typeof dt.then=="function")return it(q,G,Q,dl(dt),Ht);if(dt.$$typeof===L)return it(q,G,Q,$o(G,dt),Ht);hl(G,dt)}return null}function ee(q,G,Q,dt){for(var Ht=null,fe=null,Wt=G,te=G=0,mn=null;Wt!==null&&te<Q.length;te++){Wt.index>te?(mn=Wt,Wt=null):mn=Wt.sibling;var be=nt(q,Wt,Q[te],dt);if(be===null){Wt===null&&(Wt=mn);break}t&&Wt&&be.alternate===null&&n(q,Wt),G=f(be,G,te),fe===null?Ht=be:fe.sibling=be,fe=be,Wt=mn}if(te===Q.length)return a(q,Wt),Re&&Za(q,te),Ht;if(Wt===null){for(;te<Q.length;te++)Wt=gt(q,Q[te],dt),Wt!==null&&(G=f(Wt,G,te),fe===null?Ht=Wt:fe.sibling=Wt,fe=Wt);return Re&&Za(q,te),Ht}for(Wt=s(Wt);te<Q.length;te++)mn=it(Wt,q,te,Q[te],dt),mn!==null&&(t&&mn.alternate!==null&&Wt.delete(mn.key===null?te:mn.key),G=f(mn,G,te),fe===null?Ht=mn:fe.sibling=mn,fe=mn);return t&&Wt.forEach(function(wa){return n(q,wa)}),Re&&Za(q,te),Ht}function Jt(q,G,Q,dt){if(Q==null)throw Error(r(151));for(var Ht=null,fe=null,Wt=G,te=G=0,mn=null,be=Q.next();Wt!==null&&!be.done;te++,be=Q.next()){Wt.index>te?(mn=Wt,Wt=null):mn=Wt.sibling;var wa=nt(q,Wt,be.value,dt);if(wa===null){Wt===null&&(Wt=mn);break}t&&Wt&&wa.alternate===null&&n(q,Wt),G=f(wa,G,te),fe===null?Ht=wa:fe.sibling=wa,fe=wa,Wt=mn}if(be.done)return a(q,Wt),Re&&Za(q,te),Ht;if(Wt===null){for(;!be.done;te++,be=Q.next())be=gt(q,be.value,dt),be!==null&&(G=f(be,G,te),fe===null?Ht=be:fe.sibling=be,fe=be);return Re&&Za(q,te),Ht}for(Wt=s(Wt);!be.done;te++,be=Q.next())be=it(Wt,q,te,be.value,dt),be!==null&&(t&&be.alternate!==null&&Wt.delete(be.key===null?te:be.key),G=f(be,G,te),fe===null?Ht=be:fe.sibling=be,fe=be);return t&&Wt.forEach(function(Cx){return n(q,Cx)}),Re&&Za(q,te),Ht}function Ie(q,G,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:t:{for(var Ht=Q.key;G!==null;){if(G.key===Ht){if(Ht=Q.type,Ht===A){if(G.tag===7){a(q,G.sibling),dt=c(G,Q.props.children),dt.return=q,q=dt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Wp(Ht)===G.type){a(q,G.sibling),dt=c(G,Q.props),Zs(dt,Q),dt.return=q,q=dt;break t}a(q,G);break}else n(q,G);G=G.sibling}Q.type===A?(dt=ja(Q.props.children,q.mode,dt,Q.key),dt.return=q,q=dt):(dt=Zo(Q.type,Q.key,Q.props,null,q.mode,dt),Zs(dt,Q),dt.return=q,q=dt)}return x(q);case M:t:{for(Ht=Q.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(q,G.sibling),dt=c(G,Q.children||[]),dt.return=q,q=dt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}dt=jc(Q,q.mode,dt),dt.return=q,q=dt}return x(q);case W:return Ht=Q._init,Q=Ht(Q._payload),Ie(q,G,Q,dt)}if(ht(Q))return ee(q,G,Q,dt);if(lt(Q)){if(Ht=lt(Q),typeof Ht!="function")throw Error(r(150));return Q=Ht.call(Q),Jt(q,G,Q,dt)}if(typeof Q.then=="function")return Ie(q,G,dl(Q),dt);if(Q.$$typeof===L)return Ie(q,G,$o(q,Q),dt);hl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(q,G.sibling),dt=c(G,Q),dt.return=q,q=dt):(a(q,G),dt=qc(Q,q.mode,dt),dt.return=q,q=dt),x(q)):a(q,G)}return function(q,G,Q,dt){try{Ys=0;var Ht=Ie(q,G,Q,dt);return zr=null,Ht}catch(Wt){if(Wt===Fs||Wt===el)throw Wt;var fe=kn(29,Wt,null,q.mode);return fe.lanes=dt,fe.return=q,fe}finally{}}}var Br=qp(!0),jp=qp(!1),ei=tt(null),xi=null;function ha(t){var n=t.alternate;yt(ln,ln.current&1),yt(ei,t),xi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(xi=t)}function Yp(t){if(t.tag===22){if(yt(ln,ln.current),yt(ei,t),xi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(xi=t)}}else pa()}function pa(){yt(ln,ln.current),yt(ei,ei.current)}function Gi(t){xt(ei),xi===t&&(xi=null),xt(ln)}var ln=tt(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Au(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ru={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=jn(),c=ua(s);c.payload=n,a!=null&&(c.callback=a),n=fa(t,c,s),n!==null&&(Yn(n,t,s),Gs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=jn(),c=ua(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=fa(t,c,s),n!==null&&(Yn(n,t,s),Gs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),s=ua(a);s.tag=2,n!=null&&(s.callback=n),n=fa(t,s,a),n!==null&&(Yn(n,t,a),Gs(n,t,a))}};function Zp(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Us(a,s)||!Us(c,f):!0}function Kp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ru.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qp(t){ml(t)}function Jp(t){console.error(t)}function $p(t){ml(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function wu(t,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function em(t){return t=ua(t),t.tag=3,t}function nm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){tm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){tm(n,a,s),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Cv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return xi===null?Ju():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===iu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),tf(t,s,c)),!1;case 22:return a.flags|=65536,s===iu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),tf(t,s,c)),!1}throw Error(r(435,a.tag))}return tf(t,s,c),Ju(),!1}if(Re)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Kc&&(t=Error(r(422),{cause:s}),Ps(Qn(t,a)))):(s!==Kc&&(n=Error(r(423),{cause:s}),Ps(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=wu(t.stateNode,s,c),su(t,c),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),no===null?no=[f]:no.push(f),Ye!==4&&(Ye=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=wu(a.stateNode,s,t),su(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=em(c),nm(c,t,a,s),su(a,c),!1}a=a.return}while(a!==null);return!1}var im=Error(r(461)),hn=!1;function Sn(t,n,a,s){n.child=t===null?jp(n,null,a,s):Br(n,t.child,a,s)}function am(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var b in s)b!=="ref"&&(x[b]=s[b])}else x=s;return $a(n),s=fu(t,n,a,x,f,c),b=du(),t!==null&&!hn?(hu(t,n,c),Vi(t,n,c)):(Re&&b&&Yc(n),n.flags|=1,Sn(t,n,s,c),n.child)}function rm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Wc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,sm(t,n,f,s,c)):(t=Zo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Iu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Us,a(x,s)&&t.ref===n.ref)return Vi(t,n,c)}return n.flags|=1,t=Pi(f,s),t.ref=n.ref,t.return=n,n.child=t}function sm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Us(f,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=f,Iu(t,c))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,Vi(t,n,c)}return Cu(t,n,a,s,c)}function om(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return lm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,f!==null?f.cachePool:null),f!==null?sp(n,f):lu(),Yp(n);else return n.lanes=n.childLanes=536870912,lm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(tl(n,f.cachePool),sp(n,f),pa(),n.memoizedState=null):(t!==null&&tl(n,null),lu(),pa());return Sn(t,n,c,a),n.child}function lm(t,n,a,s){var c=nu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&tl(n,null),lu(),Yp(n),t!==null&&Is(t,n,s,!0),null}function _l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Cu(t,n,a,s,c){return $a(n),a=fu(t,n,a,s,void 0,c),s=du(),t!==null&&!hn?(hu(t,n,c),Vi(t,n,c)):(Re&&s&&Yc(n),n.flags|=1,Sn(t,n,a,c),n.child)}function cm(t,n,a,s,c,f){return $a(n),n.updateQueue=null,a=lp(n,s,a,c),op(t),s=du(),t!==null&&!hn?(hu(t,n,f),Vi(t,n,f)):(Re&&s&&Yc(n),n.flags|=1,Sn(t,n,a,f),n.child)}function um(t,n,a,s,c){if($a(n),n.stateNode===null){var f=wr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ru,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},au(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):wr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Au(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Ru.enqueueReplaceState(f,f.state,null),ks(n,s,f,c),Vs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,O=nr(a,b);f.props=O;var $=f.context,ut=a.contextType;x=wr,typeof ut=="object"&&ut!==null&&(x=Tn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==x)&&Kp(n,f,s,x),ca=!1;var nt=n.memoizedState;f.state=nt,ks(n,s,f,c),Vs(),$=n.memoizedState,b||nt!==$||ca?(typeof gt=="function"&&(Au(n,a,gt,s),$=n.memoizedState),(O=ca||Zp(n,a,O,s,nt,$,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ru(t,n),x=n.memoizedProps,ut=nr(a,x),f.props=ut,gt=n.pendingProps,nt=f.context,$=a.contextType,O=wr,typeof $=="object"&&$!==null&&(O=Tn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||nt!==O)&&Kp(n,f,s,O),ca=!1,nt=n.memoizedState,f.state=nt,ks(n,s,f,c),Vs();var it=n.memoizedState;x!==gt||nt!==it||ca||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof b=="function"&&(Au(n,a,b,s),it=n.memoizedState),(ut=ca||Zp(n,a,ut,s,nt,it,O)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=O,s=ut):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,_l(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Br(n,t.child,null,c),n.child=Br(n,null,a,c)):Sn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Vi(t,n,c),t}function fm(t,n,a,s){return Os(),n.flags|=256,Sn(t,n,a,s),n.child}var Du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(t){return{baseLanes:t,cachePool:Jh()}}function Nu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function dm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(c?ha(n):pa(),Re){var b=je,O;if(O=b){t:{for(O=b,b=vi;O.nodeType!==8;){if(!b){b=null;break t}if(O=ci(O.nextSibling),O===null){b=null;break t}}b=O}b!==null?(n.memoizedState={dehydrated:b,treeContext:Ya!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},O=kn(18,null,null,0),O.stateNode=b,O.return=n,n.child=O,Dn=n,je=null,O=!0):O=!1}O||Qa(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return gf(b)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return b=s.children,s=s.fallback,c?(pa(),c=n.mode,b=vl({mode:"hidden",children:b},c),s=ja(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,c=n.child,c.memoizedState=Uu(a),c.childLanes=Nu(t,x,a),n.memoizedState=Du,s):(ha(n),Lu(n,b))}if(O=t.memoizedState,O!==null&&(b=O.dehydrated,b!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Ou(t,n,a)):n.memoizedState!==null?(pa(),n.child=t.child,n.flags|=128,n=null):(pa(),c=s.fallback,b=n.mode,s=vl({mode:"visible",children:s.children},b),c=ja(c,b,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Br(n,t.child,null,a),s=n.child,s.memoizedState=Uu(a),s.childLanes=Nu(t,x,a),n.memoizedState=Du,n=c);else if(ha(n),gf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,Ps({value:s,source:null,stack:null}),n=Ou(t,n,a)}else if(hn||Is(t,n,a,!1),x=(a&t.childLanes)!==0,hn||x){if(x=ke,x!==null&&(s=a&-a,s=(s&42)!==0?1:ne(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,Rr(t,s),Yn(x,t,s),im;b.data==="$?"||Ju(),n=Ou(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,je=ci(b.nextSibling),Dn=n,Re=!0,Ka=null,vi=!1,t!==null&&($n[ti++]=Ii,$n[ti++]=zi,$n[ti++]=Ya,Ii=t.id,zi=t.overflow,Ya=n),n=Lu(n,s.children),n.flags|=4096);return n}return c?(pa(),c=s.fallback,b=n.mode,O=t.child,$=O.sibling,s=Pi(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,$!==null?c=Pi($,c):(c=ja(c,b,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,b=t.child.memoizedState,b===null?b=Uu(a):(O=b.cachePool,O!==null?($=on._currentValue,O=O.parent!==$?{parent:$,pool:$}:O):O=Jh(),b={baseLanes:b.baseLanes|a,cachePool:O}),c.memoizedState=b,c.childLanes=Nu(t,x,a),n.memoizedState=Du,s):(ha(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Lu(t,n){return n=vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vl(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ou(t,n,a){return Br(n,t.child,null,a),t=Lu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function hm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Jc(t.return,n,a)}function Pu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function pm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Sn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,a,n);else if(t.tag===19)hm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(yt(ln,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Pu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Pu(n,!0,a,null,f);break;case"together":Pu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Iu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function Dv(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),la(n,on,t.memoizedState.cache),Os();break;case 27:case 5:Qt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?dm(t,n,a):(ha(n),t=Vi(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Is(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return pm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,om(t,n,a);case 24:la(n,on,t.memoizedState.cache)}return Vi(t,n,a)}function mm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Iu(t,a)&&(n.flags&128)===0)return hn=!1,Dv(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,Re&&(n.flags&1048576)!==0&&Wh(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Wc(s)?(t=nr(s,t),n.tag=1,n=um(null,n,s,t,a)):(n.tag=0,n=Cu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===D){n.tag=11,n=am(null,n,s,t,a);break t}else if(c===B){n.tag=14,n=rm(null,n,s,t,a);break t}}throw n=vt(s)||s,Error(r(306,n,""))}}return n;case 0:return Cu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=nr(s,n.pendingProps),um(t,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,ru(t,n),ks(n,s,null,a);var x=n.memoizedState;if(s=x.cache,la(n,on,s),s!==f.cache&&$c(n,[on],a,!0),Vs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=fm(t,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),Ps(c),n=fm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=ci(t.firstChild),Dn=n,Re=!0,Ka=null,vi=!0,a=jp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),s===c){n=Vi(t,n,a);break t}Sn(t,n,s,a)}n=n.child}return n;case 26:return _l(t,n),t===null?(a=xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,t=n.pendingProps,s=Nl(Mt.current).createElement(a),s[rn]=n,s[vn]=t,Mn(s,a,t),tn(s),n.stateNode=s):n.memoizedState=xg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qt(n),t===null&&Re&&(s=n.stateNode=gg(n.type,n.pendingProps,Mt.current),Dn=n,vi=!0,c=je,Ea(n.type)?(_f=c,je=ci(s.firstChild)):je=c),Sn(t,n,n.pendingProps.children,a),_l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((c=s=je)&&(s=ax(s,n.type,n.pendingProps,vi),s!==null?(n.stateNode=s,Dn=n,je=ci(s.firstChild),vi=!1,c=!0):c=!1),c||Qa(n)),Qt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,hf(c,f)?s=null:x!==null&&hf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=fu(t,n,Mv,null,null,a),fo._currentValue=c),_l(t,n),Sn(t,n,s,a),n.child;case 6:return t===null&&Re&&((t=a=je)&&(a=rx(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Dn=n,je=null,t=!0):t=!1),t||Qa(n)),null;case 13:return dm(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Br(n,null,s,a):Sn(t,n,s,a),n.child;case 11:return am(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,la(n,n.type,s.value),Sn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=Tn(c),s=s(c),n.flags|=1,Sn(t,n,s,a),n.child;case 14:return rm(t,n,n.type,n.pendingProps,a);case 15:return sm(t,n,n.type,n.pendingProps,a);case 19:return pm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=vl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return om(t,n,a);case 24:return $a(n),s=Tn(on),t===null?(c=nu(),c===null&&(c=ke,f=tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},au(n),la(n,on,c)):((t.lanes&a)!==0&&(ru(t,n),ks(n,null,null,a),Vs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),la(n,on,s)):(s=f.cache,la(n,on,s),s!==c.cache&&$c(n,[on],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(t){t.flags|=4}function gm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bg(n)){if(n=ei.current,n!==null&&((Se&4194048)===Se?xi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==xi))throw Hs=iu,$h;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nt():536870912,t.lanes|=n,Vr|=n)}function Ks(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Uv(t,n,a){var s=n.pendingProps;switch(Zc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yh())),We(n),null;case 26:return a=n.memoizedState,t===null?(ki(n),a!==null?(We(n),gm(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ki(n),We(n),gm(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==s&&ki(n),We(n),n.flags&=-16777217),null;case 27:Le(n),a=Mt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=J.current,Ls(n)?qh(n):(t=gg(c,s,a),n.stateNode=t,ki(n))}return We(n),null;case 5:if(Le(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=J.current,Ls(n))qh(n);else{switch(c=Nl(Mt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[rn]=n,t[vn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Mn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ki(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Mt.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||cg(t.nodeValue,a)),t||Qa(n)}else t=Nl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=Yh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),We(n),null;case 4:return oe(),t===null&&lf(n.stateNode.containerInfo),We(n),null;case 10:return Fi(n.type),We(n),null;case 19:if(xt(ln),c=n.memoizedState,c===null)return We(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Ks(c,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,Ks(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xh(a,t),a=a.sibling;return yt(ln,ln.current&1|2),n.child}t=t.sibling}c.tail!==null&&de()>Ml&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304)}else{if(!s)if(t=pl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),Ks(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return We(n),null}else 2*de()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,t=ln.current,yt(ln,s?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Gi(n),cu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&xt(tr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(on),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Nv(t,n){switch(Zc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(on),oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xt(ln),null;case 4:return oe(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),cu(),t!==null&&xt(tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(on),null;case 25:return null;default:return null}}function _m(t,n){switch(Zc(n),n.tag){case 3:Fi(on),oe();break;case 26:case 27:case 5:Le(n);break;case 4:oe();break;case 13:Gi(n);break;case 19:xt(ln);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),cu(),t!==null&&xt(tr);break;case 24:Fi(on)}}function Qs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(b){He(n,n.return,b)}}function ma(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,c=n;var O=a,$=b;try{$()}catch(ut){He(c,O,ut)}}}s=s.next}while(s!==f)}}catch(ut){He(n,n.return,ut)}}function vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{rp(n,a)}catch(s){He(t,t.return,s)}}}function xm(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){He(t,n,s)}}function Js(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){He(t,n,c)}}function Si(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){He(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(t,n,c)}else a.current=null}function Sm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){He(t,t.return,c)}}function zu(t,n,a){try{var s=t.stateNode;$v(s,t.type,a,n),s[vn]=n}catch(c){He(t,t.return,c)}}function ym(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function Bu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ym(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Fu(t,n,a),t=t.sibling;t!==null;)Fu(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function Mm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[rn]=t,n[vn]=a}catch(f){He(t,t.return,f)}}var Xi=!1,$e=!1,Hu=!1,Em=typeof WeakSet=="function"?WeakSet:Set,pn=null;function Lv(t,n){if(t=t.containerInfo,ff=Bl,t=Oh(t),Bc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,O=-1,$=0,ut=0,gt=t,nt=null;e:for(;;){for(var it;gt!==a||c!==0&&gt.nodeType!==3||(b=x+c),gt!==f||s!==0&&gt.nodeType!==3||(O=x+s),gt.nodeType===3&&(x+=gt.nodeValue.length),(it=gt.firstChild)!==null;)nt=gt,gt=it;for(;;){if(gt===t)break e;if(nt===a&&++$===c&&(b=x),nt===f&&++ut===s&&(O=x),(it=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=it}a=b===-1||O===-1?null:{start:b,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(df={focusedElem:t,selectionRange:a},Bl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=nr(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){He(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function bm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ga(t,a),s&4&&Qs(5,a);break;case 1:if(ga(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){He(a,a.return,x)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){He(a,a.return,x)}}s&64&&vm(a),s&512&&Js(a,a.return);break;case 3:if(ga(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rp(t,n)}catch(x){He(a,a.return,x)}}break;case 27:n===null&&s&4&&Mm(a);case 26:case 5:ga(t,a),n===null&&s&4&&Sm(a),s&512&&Js(a,a.return);break;case 12:ga(t,a);break;case 13:ga(t,a),s&4&&Rm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vv.bind(null,a),sx(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||$e,c=Xi;var f=$e;Xi=s,($e=n)&&!f?_a(t,a,(a.subtreeFlags&8772)!==0):ga(t,a),Xi=c,$e=f}break;case 30:break;default:ga(t,a)}}function Tm(t){var n=t.alternate;n!==null&&(t.alternate=null,Tm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xe=null,In=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Am(t,n,a),a=a.sibling}function Am(t,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:$e||Si(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Si(a,n);var s=Xe,c=In;Ea(a.type)&&(Xe=a.stateNode,In=!1),Wi(t,n,a),oo(a.stateNode),Xe=s,In=c;break;case 5:$e||Si(a,n);case 6:if(s=Xe,c=In,Xe=null,Wi(t,n,a),Xe=s,In=c,Xe!==null)if(In)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:Xe!==null&&(In?(t=Xe,pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),go(t)):pg(Xe,a.stateNode));break;case 4:s=Xe,c=In,Xe=a.stateNode.containerInfo,In=!0,Wi(t,n,a),Xe=s,In=c;break;case 0:case 11:case 14:case 15:$e||ma(2,a,n),$e||ma(4,a,n),Wi(t,n,a);break;case 1:$e||(Si(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&xm(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:$e=(s=$e)||a.memoizedState!==null,Wi(t,n,a),$e=s;break;default:Wi(t,n,a)}}function Rm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{go(t)}catch(a){He(n,n.return,a)}}function Ov(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Em),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Em),n;default:throw Error(r(435,t.tag))}}function Gu(t,n){var a=Ov(t);n.forEach(function(s){var c=kv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Ea(b.type)){Xe=b.stateNode,In=!1;break t}break;case 5:Xe=b.stateNode,In=!1;break t;case 3:case 4:Xe=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Xe===null)throw Error(r(160));Am(f,x,c),Xe=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wm(n,t),n=n.sibling}var li=null;function wm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(ma(3,t,t.return),Qs(3,t),ma(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&($e||a===null||Si(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(Xn(n,t),Wn(t),s&512&&($e||a===null||Si(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ia]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[rn]=t,tn(f),s=f;break t;case"link":var x=Mg("link","href",c).get(s+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Mg("meta","content",c).get(s+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,tn(f),s=f}t.stateNode=s}else Eg(c,t.type,t.stateNode);else t.stateNode=yg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Eg(c,t.type,t.stateNode):yg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&zu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&($e||a===null||Si(a,a.return)),a!==null&&s&4&&zu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&($e||a===null||Si(a,a.return)),t.flags&32){c=t.stateNode;try{_i(c,"")}catch(it){He(t,t.return,it)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,zu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Hu=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){He(t,t.return,it)}}break;case 3:if(Pl=null,c=li,li=Ll(n.containerInfo),Xn(n,t),li=c,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(it){He(t,t.return,it)}Hu&&(Hu=!1,Cm(t));break;case 4:s=li,li=Ll(t.stateNode.containerInfo),Xn(n,t),Wn(t),li=s;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ju=de()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gu(t,s)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,$=Xi,ut=$e;if(Xi=$||c,$e=ut||O,Xn(n,t),$e=ut,Xi=$,Wn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Xi||$e||ir(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=O.stateNode;var gt=O.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){He(O,O.return,it)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(it){He(O,O.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Gu(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gu(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(ym(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Bu(t);Sl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(_i(x,""),a.flags&=-33);var b=Bu(t);Sl(t,b,x);break;case 3:case 4:var O=a.stateNode.containerInfo,$=Bu(t);Fu(t,$,O);break;default:throw Error(r(161))}}catch(ut){He(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(t,n.alternate,n),n=n.sibling}function ir(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),ir(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xm(n,n.return,a),ir(n);break;case 27:oo(n.stateNode);case 26:case 5:Si(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}t=t.sibling}}function _a(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:_a(c,f,a),Qs(4,f);break;case 1:if(_a(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){He(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)ap(O[c],b)}catch($){He(s,s.return,$)}}a&&x&64&&vm(f),Js(f,f.return);break;case 27:Mm(f);case 26:case 5:_a(c,f,a),a&&s===null&&x&4&&Sm(f),Js(f,f.return);break;case 12:_a(c,f,a);break;case 13:_a(c,f,a),a&&x&4&&Rm(c,f);break;case 22:f.memoizedState===null&&_a(c,f,a),Js(f,f.return);break;case 30:break;default:_a(c,f,a)}n=n.sibling}}function Vu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zs(a))}function ku(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zs(t))}function yi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dm(t,n,a,s),n=n.sibling}function Dm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&Qs(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zs(t)));break;case 12:if(c&2048){yi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){He(n,n.return,O)}}else yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,s):$s(t,n):f._visibility&2?yi(t,n,a,s):(f._visibility|=2,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Vu(x,n);break;case 24:yi(t,n,a,s),c&2048&&ku(n.alternate,n);break;default:yi(t,n,a,s)}}function Fr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,b=a,O=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:Fr(f,x,b,O,c),Qs(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Fr(f,x,b,O,c):$s(f,x):(ut._visibility|=2,Fr(f,x,b,O,c)),c&&$&2048&&Vu(x.alternate,x);break;case 24:Fr(f,x,b,O,c),c&&$&2048&&ku(x.alternate,x);break;default:Fr(f,x,b,O,c)}n=n.sibling}}function $s(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:$s(a,s),c&2048&&Vu(s.alternate,s);break;case 24:$s(a,s),c&2048&&ku(s.alternate,s);break;default:$s(a,s)}n=n.sibling}}var to=8192;function Hr(t){if(t.subtreeFlags&to)for(t=t.child;t!==null;)Um(t),t=t.sibling}function Um(t){switch(t.tag){case 26:Hr(t),t.flags&to&&t.memoizedState!==null&&xx(li,t.memoizedState,t.memoizedProps);break;case 5:Hr(t);break;case 3:case 4:var n=li;li=Ll(t.stateNode.containerInfo),Hr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=to,to=16777216,Hr(t),to=n):Hr(t));break;default:Hr(t)}}function Nm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Om(s,t)}Nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(t),t=t.sibling}function Lm(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&ma(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yl(t)):eo(t);break;default:eo(t)}}function yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Om(s,t)}Nm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ma(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}t=t.sibling}}function Om(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var c=s.sibling,f=s.return;if(Tm(s),s===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var Pv={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Iv=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,he=null,Se=0,Ne=0,qn=null,va=!1,Gr=!1,Xu=!1,qi=0,Ye=0,xa=0,ar=0,Wu=0,ni=0,Vr=0,no=null,zn=null,qu=!1,ju=0,Ml=1/0,El=null,Sa=null,yn=0,ya=null,kr=null,Xr=0,Yu=0,Zu=null,Pm=null,io=0,Ku=null;function jn(){if((Ue&2)!==0&&Se!==0)return Se&-Se;if(P.T!==null){var t=Ur;return t!==0?t:af()}return Ee()}function Im(){ni===0&&(ni=(Se&536870912)===0||Re?V():536870912);var t=ei.current;return t!==null&&(t.flags|=32),ni}function Yn(t,n,a){(t===ke&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),Ma(t,Se,ni,!1)),zt(t,a),((Ue&2)===0||t!==ke)&&(t===ke&&((Ue&2)===0&&(ar|=a),Ye===4&&Ma(t,Se,ni,!1)),Mi(t))}function zm(t,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||wt(t,n),c=s?Fv(t,n):$u(t,n,!0),f=s;do{if(c===0){Gr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zv(a)){c=$u(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=t;c=no;var O=b.current.memoizedState.isDehydrated;if(O&&(Wr(b,x).flags|=256),x=$u(b,x,!1),x!==2){if(Xu&&!O){b.errorRecoveryDisabledLanes|=f,ar|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,ni,!va);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=ju+300-de(),10<c)){if(Ma(s,n,ni,!va),jt(s,0,!0)!==0)break t;s.timeoutHandle=dg(Bm.bind(null,s,a,zn,El,qu,n,ni,ar,Vr,va,f,2,-0,0),c);break t}Bm(s,a,zn,El,qu,n,ni,ar,Vr,va,f,0,-0,0)}}break}while(!0);Mi(t)}function Bm(t,n,a,s,c,f,x,b,O,$,ut,gt,nt,it){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(uo={stylesheets:null,count:0,unsuspend:vx},Um(n),gt=Sx(),gt!==null)){t.cancelPendingCommit=gt(Wm.bind(null,t,n,f,a,s,c,x,b,O,ut,1,nt,it)),Ma(t,f,x,!$);return}Wm(t,n,f,a,s,c,x,b,O)}function zv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~Wu,n&=~ar,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&_t(t,a,n)}function bl(){return(Ue&6)===0?(ao(0),!1):!0}function Qu(){if(he!==null){if(Ne===0)var t=he.return;else t=he,Bi=Ja=null,pu(t),zr=null,Ys=0,t=he;for(;t!==null;)_m(t.alternate,t),t=t.return;he=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ex(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qu(),ke=t,he=a=Pi(t.current,null),Se=n,Ne=0,qn=null,va=!1,Gr=wt(t,n),Xu=!1,Vr=ni=Wu=ar=xa=Ye=0,zn=no=null,qu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return qi=n,qo(),a}function Fm(t,n){ue=null,P.H=fl,n===Fs||n===el?(n=np(),Ne=3):n===$h?(n=np(),Ne=4):Ne=n===im?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,he===null&&(Ye=1,gl(t,Qn(n,t.current)))}function Hm(){var t=P.H;return P.H=fl,t===null?fl:t}function Gm(){var t=P.A;return P.A=Pv,t}function Ju(){Ye=4,va||(Se&4194048)!==Se&&ei.current!==null||(Gr=!0),(xa&134217727)===0&&(ar&134217727)===0||ke===null||Ma(ke,Se,ni,!1)}function $u(t,n,a){var s=Ue;Ue|=2;var c=Hm(),f=Gm();(ke!==t||Se!==n)&&(El=null,Wr(t,n)),n=!1;var x=Ye;t:do try{if(Ne!==0&&he!==null){var b=he,O=qn;switch(Ne){case 8:Qu(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var $=Ne;if(Ne=0,qn=null,qr(t,b,O,$),a&&Gr){x=0;break t}break;default:$=Ne,Ne=0,qn=null,qr(t,b,O,$)}}Bv(),x=Ye;break}catch(ut){Fm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Bi=Ja=null,Ue=s,P.H=c,P.A=f,he===null&&(ke=null,Se=0,qo()),x}function Bv(){for(;he!==null;)Vm(he)}function Fv(t,n){var a=Ue;Ue|=2;var s=Hm(),c=Gm();ke!==t||Se!==n?(El=null,Ml=de()+500,Wr(t,n)):Gr=wt(t,n);t:do try{if(Ne!==0&&he!==null){n=he;var f=qn;e:switch(Ne){case 1:Ne=0,qn=null,qr(t,n,f,1);break;case 2:case 9:if(tp(f)){Ne=0,qn=null,km(n);break}n=function(){Ne!==2&&Ne!==9||ke!==t||(Ne=7),Mi(t)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:tp(f)?(Ne=0,qn=null,km(n)):(Ne=0,qn=null,qr(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var b=he;if(!x||bg(x)){Ne=0,qn=null;var O=b.sibling;if(O!==null)he=O;else{var $=b.return;$!==null?(he=$,Tl($)):he=null}break e}}Ne=0,qn=null,qr(t,n,f,5);break;case 6:Ne=0,qn=null,qr(t,n,f,6);break;case 8:Qu(),Ye=6;break t;default:throw Error(r(462))}}Hv();break}catch(ut){Fm(t,ut)}while(!0);return Bi=Ja=null,P.H=s,P.A=c,Ue=a,he!==null?0:(ke=null,Se=0,qo(),Ye)}function Hv(){for(;he!==null&&!_n();)Vm(he)}function Vm(t){var n=mm(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?Tl(t):he=n}function km(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=cm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=cm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:pu(n);default:_m(a,n),n=he=Xh(n,qi),n=mm(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?Tl(t):he=n}function qr(t,n,a,s){Bi=Ja=null,pu(n),zr=null,Ys=0;var c=n.return;try{if(Cv(t,c,n,a,Se)){Ye=1,gl(t,Qn(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ye=1,gl(t,Qn(a,t.current)),he=null;return}n.flags&32768?(Re||s===1?t=!0:Gr||(Se&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),Xm(n,t)):Tl(n)}function Tl(t){var n=t;do{if((n.flags&32768)!==0){Xm(n,va);return}t=n.return;var a=Uv(n.alternate,n,qi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ye===0&&(Ye=5)}function Xm(t,n){do{var a=Nv(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ye=6,he=null}function Wm(t,n,a,s,c,f,x,b,O){t.cancelPendingCommit=null;do Al();while(yn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=kc,At(t,a,f,x,b,O),t===ke&&(he=ke=null,Se=0),kr=n,ya=t,Xr=a,Yu=f,Zu=c,Pm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xv(ae,function(){return Km(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=K.p,K.p=2,x=Ue,Ue|=4;try{Lv(t,n,a)}finally{Ue=x,K.p=c,P.T=s}}yn=1,qm(),jm(),Ym()}}function qm(){if(yn===1){yn=0;var t=ya,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=K.p;K.p=2;var c=Ue;Ue|=4;try{wm(n,t);var f=df,x=Oh(t.containerInfo),b=f.focusedElem,O=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&Lh(b.ownerDocument.documentElement,b)){if(O!==null&&Bc(b)){var $=O.start,ut=O.end;if(ut===void 0&&(ut=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ut,b.value.length);else{var gt=b.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ee=b.textContent.length,Jt=Math.min(O.start,ee),Ie=O.end===void 0?Jt:Math.min(O.end,ee);!it.extend&&Jt>Ie&&(x=Ie,Ie=Jt,Jt=x);var q=Nh(b,Jt),G=Nh(b,Ie);if(q&&G&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var Q=gt.createRange();Q.setStart(q.node,q.offset),it.removeAllRanges(),Jt>Ie?(it.addRange(Q),it.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),it.addRange(Q))}}}}for(gt=[],it=b;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var dt=gt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Bl=!!ff,df=ff=null}finally{Ue=c,K.p=s,P.T=a}}t.current=n,yn=2}}function jm(){if(yn===2){yn=0;var t=ya,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=K.p;K.p=2;var c=Ue;Ue|=4;try{bm(t,n.alternate,n)}finally{Ue=c,K.p=s,P.T=a}}yn=3}}function Ym(){if(yn===4||yn===3){yn=0,ye();var t=ya,n=kr,a=Xr,s=Pm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,kr=ya=null,Zm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Sa=null),De(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=K.p,K.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var b=s[x];f(b.value,{componentStack:b.stack})}}finally{P.T=n,K.p=c}}(Xr&3)!==0&&Al(),Mi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Ku?io++:(io=0,Ku=t):io=0,ao(0)}}function Zm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zs(n)))}function Al(t){return qm(),jm(),Ym(),Km()}function Km(){if(yn!==5)return!1;var t=ya,n=Yu;Yu=0;var a=De(Xr),s=P.T,c=K.p;try{K.p=32>a?32:a,P.T=null,a=Zu,Zu=null;var f=ya,x=Xr;if(yn=0,kr=ya=null,Xr=0,(Ue&6)!==0)throw Error(r(331));var b=Ue;if(Ue|=4,Lm(f.current),Dm(f,f.current,x,a),Ue=b,ao(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{K.p=c,P.T=s,Zm(t,n)}}function Qm(t,n,a){n=Qn(a,n),n=wu(t.stateNode,n,2),t=fa(t,n,2),t!==null&&(zt(t,2),Mi(t))}function He(t,n,a){if(t.tag===3)Qm(t,t,a);else for(;n!==null;){if(n.tag===3){Qm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){t=Qn(a,t),a=em(2),s=fa(n,a,2),s!==null&&(nm(a,s,n,t),zt(s,2),Mi(s));break}}n=n.return}}function tf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Iv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Xu=!0,c.add(a),t=Gv.bind(null,t,n,a),n.then(t,t))}function Gv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Se&a)===a&&(Ye===4||Ye===3&&(Se&62914560)===Se&&300>de()-ju?(Ue&2)===0&&Wr(t,0):Wu|=a,Vr===Se&&(Vr=0)),Mi(t)}function Jm(t,n){n===0&&(n=Nt()),t=Rr(t,n),t!==null&&(zt(t,n),Mi(t))}function Vv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Jm(t,a)}function kv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Jm(t,a)}function Xv(t,n){return me(t,n)}var Rl=null,jr=null,ef=!1,wl=!1,nf=!1,rr=0;function Mi(t){t!==jr&&t.next===null&&(jr===null?Rl=jr=t:jr=jr.next=t),wl=!0,ef||(ef=!0,qv())}function ao(t,n){if(!nf&&wl){nf=!0;do for(var a=!1,s=Rl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ng(s,f))}else f=Se,f=jt(s,s===ke?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||wt(s,f)||(a=!0,ng(s,f));s=s.next}while(a);nf=!1}}function Wv(){$m()}function $m(){wl=ef=!1;var t=0;rr!==0&&(tx()&&(t=rr),rr=0);for(var n=de(),a=null,s=Rl;s!==null;){var c=s.next,f=tg(s,n);f===0?(s.next=null,a===null?Rl=c:a.next=c,c===null&&(jr=a)):(a=s,(t!==0||(f&3)!==0)&&(wl=!0)),s=c}ao(t)}function tg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Pt(f),b=1<<x,O=c[x];O===-1?((b&a)===0||(b&s)!==0)&&(c[x]=ie(b,n)):O<=n&&(t.expiredLanes|=b),f&=~b}if(n=ke,a=Se,a=jt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&z(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&z(s),De(a)){case 2:case 8:a=Yt;break;case 32:a=ae;break;case 268435456:a=N;break;default:a=ae}return s=eg.bind(null,t),a=me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&z(s),t.callbackPriority=2,t.callbackNode=null,2}function eg(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var s=Se;return s=jt(t,t===ke?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(zm(t,s,n),tg(t,de()),t.callbackNode!=null&&t.callbackNode===a?eg.bind(null,t):null)}function ng(t,n){if(Al())return null;zm(t,n,!0)}function qv(){nx(function(){(Ue&6)!==0?me(ge,Wv):$m()})}function af(){return rr===0&&(rr=V()),rr}function ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function ag(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function jv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=ig((c[vn]||null).action),x=s.submitter;x&&(n=(n=x[vn]||null)?ig(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new ko("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var O=x?ag(c,x):new FormData(c);Eu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(b.preventDefault(),O=x?ag(c,x):new FormData(c),Eu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var rf=0;rf<Vc.length;rf++){var sf=Vc[rf],Yv=sf.toLowerCase(),Zv=sf[0].toUpperCase()+sf.slice(1);oi(Yv,"on"+Zv)}oi(zh,"onAnimationEnd"),oi(Bh,"onAnimationIteration"),oi(Fh,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(dv,"onTransitionRun"),oi(hv,"onTransitionStart"),oi(pv,"onTransitionCancel"),oi(Hh,"onTransitionEnd"),T("onMouseEnter",["mouseout","mouseover"]),T("onMouseLeave",["mouseout","mouseover"]),T("onPointerEnter",["pointerout","pointerover"]),T("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function rg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var b=s[x],O=b.instance,$=b.currentTarget;if(b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){ml(ut)}c.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(b=s[x],O=b.instance,$=b.currentTarget,b=b.listener,O!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){ml(ut)}c.currentTarget=null,f=O}}}}function pe(t,n){var a=n[Ga];a===void 0&&(a=n[Ga]=new Set);var s=t+"__bubble";a.has(s)||(sg(n,t,2,!1),a.add(s))}function of(t,n,a){var s=0;n&&(s|=4),sg(a,t,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function lf(t){if(!t[Cl]){t[Cl]=!0,zo.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||of(a,!1,t),of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,of("selectionchange",!1,n))}}function sg(t,n,a,s){switch(Dg(n)){case 2:var c=Ex;break;case 8:c=bx;break;default:c=Mf}a=c.bind(null,n,a,t),c=void 0,!Cc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function cf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var b=s.stateNode.containerInfo;if(b===c)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;b!==null;){if(x=Ci(b),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue t}b=b.parentNode}}s=s.return}hh(function(){var $=f,ut=Rc(a),gt=[];t:{var nt=Gh.get(t);if(nt!==void 0){var it=ko,ee=t;switch(t){case"keypress":if(Go(a)===0)break t;case"keydown":case"keyup":it=X0;break;case"focusin":ee="focus",it=Lc;break;case"focusout":ee="blur",it=Lc;break;case"beforeblur":case"afterblur":it=Lc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=j0;break;case zh:case Bh:case Fh:it=P0;break;case Hh:it=Z0;break;case"scroll":case"scrollend":it=D0;break;case"wheel":it=Q0;break;case"copy":case"cut":case"paste":it=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=vh;break;case"toggle":case"beforetoggle":it=$0}var Jt=(n&4)!==0,Ie=!Jt&&(t==="scroll"||t==="scrollend"),q=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var G=$,Q;G!==null;){var dt=G;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||q===null||(dt=bs(G,q),dt!=null&&Jt.push(so(G,dt,Q))),Ie)break;G=G.return}0<Jt.length&&(nt=new it(nt,ee,null,a,ut),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",nt&&a!==Ac&&(ee=a.relatedTarget||a.fromElement)&&(Ci(ee)||ee[Ln]))break t;if((it||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=$,ee=ee?Ci(ee):null,ee!==null&&(Ie=u(ee),Jt=ee.tag,ee!==Ie||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=$),it!==ee)){if(Jt=gh,dt="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=vh,dt="onPointerLeave",q="onPointerEnter",G="pointer"),Ie=it==null?nt:ka(it),Q=ee==null?nt:ka(ee),nt=new Jt(dt,G+"leave",it,a,ut),nt.target=Ie,nt.relatedTarget=Q,dt=null,Ci(ut)===$&&(Jt=new Jt(q,G+"enter",ee,a,ut),Jt.target=Q,Jt.relatedTarget=Ie,dt=Jt),Ie=dt,it&&ee)e:{for(Jt=it,q=ee,G=0,Q=Jt;Q;Q=Yr(Q))G++;for(Q=0,dt=q;dt;dt=Yr(dt))Q++;for(;0<G-Q;)Jt=Yr(Jt),G--;for(;0<Q-G;)q=Yr(q),Q--;for(;G--;){if(Jt===q||q!==null&&Jt===q.alternate)break e;Jt=Yr(Jt),q=Yr(q)}Jt=null}else Jt=null;it!==null&&og(gt,nt,it,Jt,!1),ee!==null&&Ie!==null&&og(gt,Ie,ee,Jt,!0)}}t:{if(nt=$?ka($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=Ah;else if(bh(nt))if(Rh)Ht=cv;else{Ht=ov;var fe=sv}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Tc($.elementType)&&(Ht=Ah):Ht=lv;if(Ht&&(Ht=Ht(t,$))){Th(gt,Ht,a,ut);break t}fe&&fe(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&bn(nt,"number",nt.value)}switch(fe=$?ka($):window,t){case"focusin":(bh(fe)||fe.contentEditable==="true")&&(br=fe,Fc=$,Ns=null);break;case"focusout":Ns=Fc=br=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Ph(gt,a,ut);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Ph(gt,a,ut)}var Wt;if(Pc)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Er?Mh(t,a)&&(te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(xh&&a.locale!=="ko"&&(Er||te!=="onCompositionStart"?te==="onCompositionEnd"&&Er&&(Wt=ph()):(oa=ut,Dc="value"in oa?oa.value:oa.textContent,Er=!0)),fe=Dl($,te),0<fe.length&&(te=new _h(te,t,null,a,ut),gt.push({event:te,listeners:fe}),Wt?te.data=Wt:(Wt=Eh(a),Wt!==null&&(te.data=Wt)))),(Wt=ev?nv(t,a):iv(t,a))&&(te=Dl($,"onBeforeInput"),0<te.length&&(fe=new _h("onBeforeInput","beforeinput",null,a,ut),gt.push({event:fe,listeners:te}),fe.data=Wt)),jv(gt,t,$,a,ut)}rg(gt,n)})}function so(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Dl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=bs(t,a),c!=null&&s.unshift(so(t,c,f)),c=bs(t,n),c!=null&&s.push(so(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function og(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var b=a,O=b.alternate,$=b.stateNode;if(b=b.tag,O!==null&&O===s)break;b!==5&&b!==26&&b!==27||$===null||(O=$,c?($=bs(a,f),$!=null&&x.unshift(so(a,$,O))):c||($=bs(a,f),$!=null&&x.push(so(a,$,O)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function cg(t,n){return n=lg(n),lg(t)===n}function Ul(){}function Pe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||_i(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&_i(t,""+s);break;case"className":Dt(t,"class",s);break;case"tabIndex":Dt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(t,a,s);break;case"style":fh(t,s,f);break;case"data":if(n!=="object"){Dt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",c.name,c,null),Pe(t,n,"formEncType",c.formEncType,c,null),Pe(t,n,"formMethod",c.formMethod,c,null),Pe(t,n,"formTarget",c.formTarget,c,null)):(Pe(t,n,"encType",c.encType,c,null),Pe(t,n,"method",c.method,c,null),Pe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":Ot(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ot(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ot(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ot(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ot(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ot(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ot(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,Tt(t,a,s))}}function uf(t,n,a,s,c,f){switch(a){case"style":fh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?_i(t,s):(typeof s=="number"||typeof s=="bigint")&&_i(t,""+s);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,x,a,null)}}c&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var b=f=x=c=null,O=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":x=ut;break;case"checked":O=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Pe(t,n,s,ut,a,null)}}Fe(t,f,b,O,$,x,c,!1),qe(t);return;case"select":pe("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":s=b;default:Pe(t,n,c,b,a,null)}n=f,a=x,t.multiple=!!s,n!=null?sn(t,!!s,n,!1):a!=null&&sn(t,!!s,a,!0);return;case"textarea":pe("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Pe(t,n,x,b,a,null)}xn(t,s,c,f),qe(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(t,n,O,s,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(s=0;s<ro.length;s++)pe(ro[s],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,$,s,a,null)}return;default:if(Tc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&uf(t,n,ut,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Pe(t,n,b,s,a,null))}function $v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,b=null,O=null,$=null,ut=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=gt;default:s.hasOwnProperty(it)||Pe(t,n,it,null,s,gt)}}for(var nt in s){var it=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(it!=null||gt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ut=it;break;case"value":x=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Pe(t,n,nt,it,s,gt)}}Ni(t,x,b,O,$,ut,f,c);return;case"select":it=x=b=nt=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":it=O;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==O&&Pe(t,n,c,f,s,O)}n=b,a=x,s=it,nt!=null?sn(t,!!a,nt,!1):!!s!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(t,n,b,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Pe(t,n,x,c,s,f)}dn(t,nt,it);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:Pe(t,n,ee,null,s,nt)}for(O in s)if(nt=s[O],it=a[O],s.hasOwnProperty(O)&&nt!==it&&(nt!=null||it!=null))switch(O){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(t,n,O,nt,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!s.hasOwnProperty(Jt)&&Pe(t,n,Jt,null,s,nt);for($ in s)if(nt=s[$],it=a[$],s.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Pe(t,n,$,nt,s,it)}return;default:if(Tc(n)){for(var Ie in a)nt=a[Ie],a.hasOwnProperty(Ie)&&nt!==void 0&&!s.hasOwnProperty(Ie)&&uf(t,n,Ie,void 0,s,nt);for(ut in s)nt=s[ut],it=a[ut],!s.hasOwnProperty(ut)||nt===it||nt===void 0&&it===void 0||uf(t,n,ut,nt,s,it);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!s.hasOwnProperty(q)&&Pe(t,n,q,null,s,nt);for(gt in s)nt=s[gt],it=a[gt],!s.hasOwnProperty(gt)||nt===it||nt==null&&it==null||Pe(t,n,gt,nt,s,it)}var ff=null,df=null;function Nl(t){return t.nodeType===9?t:t.ownerDocument}function ug(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pf=null;function tx(){var t=window.event;return t&&t.type==="popstate"?t===pf?!1:(pf=t,!0):(pf=null,!1)}var dg=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(ix)}:dg;function ix(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function pg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&oo(x.documentElement),a&2&&oo(x.body),a&4)for(a=x.head,oo(a),x=a.firstChild;x;){var b=x.nextSibling,O=x.nodeName;x[ia]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=b}}if(c===0){t.removeChild(f),go(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);go(n)}function mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mf(a),aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ax(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ia])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function rx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function sx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var _f=null;function mg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function gg(t,n,a){switch(n=Nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);aa(t)}var ii=new Map,_g=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ji=K.d;K.d={f:ox,r:lx,D:cx,C:ux,L:fx,m:dx,X:px,S:hx,M:mx};function ox(){var t=ji.f(),n=bl();return t||n}function lx(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?zp(n):ji.r(t)}var Zr=typeof document>"u"?null:document;function vg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),_g.has(c)||(_g.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),tn(n),s.head.appendChild(n)))}}function cx(t){ji.D(t),vg("dns-prefetch",t,null)}function ux(t,n){ji.C(t,n),vg("preconnect",t,n)}function fx(t,n,a){ji.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(t)+'"]';var f=c;switch(n){case"style":f=Kr(t);break;case"script":f=Qr(t)}ii.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(lo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),Mn(n,"link",t),tn(n),s.head.appendChild(n)))}}function dx(t,n){ji.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(s)+'"][href="'+Ve(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(t)}if(!ii.has(f)&&(t=g({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),Mn(s,"link",t),tn(s),a.head.appendChild(s)}}}function hx(t,n,a){ji.S(t,n,a);var s=Zr;if(s&&t){var c=ra(s).hoistableStyles,f=Kr(t);n=n||"default";var x=c.get(f);if(!x){var b={loading:0,preload:null};if(x=s.querySelector(lo(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&vf(t,a);var O=x=s.createElement("link");tn(O),Mn(O,"link",t),O._p=new Promise(function($,ut){O.onload=$,O.onerror=ut}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ol(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:b},c.set(f,x)}}}function px(t,n){ji.X(t,n);var a=Zr;if(a&&t){var s=ra(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(co(c)),f||(t=g({src:t,async:!0},n),(n=ii.get(c))&&xf(t,n),f=a.createElement("script"),tn(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function mx(t,n){ji.M(t,n);var a=Zr;if(a&&t){var s=ra(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(co(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&xf(t,n),f=a.createElement("script"),tn(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function xg(t,n,a,s){var c=(c=Mt.current)?Ll(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Kr(a.href),a=ra(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Kr(a.href);var f=ra(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(lo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||gx(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(a),a=ra(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Kr(t){return'href="'+Ve(t)+'"'}function lo(t){return'link[rel="stylesheet"]['+t+"]"}function Sg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function gx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),tn(n),t.head.appendChild(n))}function Qr(t){return'[src="'+Ve(t)+'"]'}function co(t){return"script[async]"+t}function yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tn(s),Mn(s,"style",c),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":c=Kr(a.href);var f=t.querySelector(lo(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=Sg(a),(c=ii.get(c))&&vf(s,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var x=f;return x._p=new Promise(function(b,O){x.onload=b,x.onerror=O}),Mn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=Qr(a.src),(c=t.querySelector(co(f)))?(n.instance=c,tn(c),c):(s=a,(c=ii.get(f))&&(s=g({},a),xf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var b=s[x];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function Mg(t,n,a){if(Pl===null){var s=new Map,c=Pl=new Map;c.set(a,s)}else c=Pl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ia]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var b=s.get(x);b?b.push(f):s.set(x,[f])}}return s}function Eg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function _x(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var uo=null;function vx(){}function xx(t,n,a){if(uo===null)throw Error(r(475));var s=uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Kr(a.href),f=t.querySelector(lo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Il.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Sg(a),(c=ii.get(c))&&vf(a,c),f=f.createElement("link"),tn(f);var x=f;x._p=new Promise(function(b,O){x.onload=b,x.onerror=O}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Il.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Sx(){if(uo===null)throw Error(r(475));var t=uo;return t.stylesheets&&t.count===0&&Sf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Sf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Il(){if(this.count--,this.count===0){if(this.stylesheets)Sf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Sf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(yx,t),zl=null,Il.call(t))}function yx(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Il.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var fo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Mx(t,n,a,s,c,f,x,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Tg(t,n,a,s,c,f,x,b,O,$,ut,gt){return t=new Mx(t,n,a,x,b,O,$,gt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=tu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},au(f),t}function Ag(t){return t?(t=wr,t):wr}function Rg(t,n,a,s,c,f){c=Ag(c),s.context===null?s.context=c:s.pendingContext=c,s=ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=fa(t,s,n),a!==null&&(Yn(a,t,n),Gs(a,t,n))}function wg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function yf(t,n){wg(t,n),(t=t.alternate)&&wg(t,n)}function Cg(t){if(t.tag===13){var n=Rr(t,67108864);n!==null&&Yn(n,t,67108864),yf(t,67108864)}}var Bl=!0;function Ex(t,n,a,s){var c=P.T;P.T=null;var f=K.p;try{K.p=2,Mf(t,n,a,s)}finally{K.p=f,P.T=c}}function bx(t,n,a,s){var c=P.T;P.T=null;var f=K.p;try{K.p=8,Mf(t,n,a,s)}finally{K.p=f,P.T=c}}function Mf(t,n,a,s){if(Bl){var c=Ef(s);if(c===null)cf(t,n,s,Fl,a),Ug(t,s);else if(Ax(c,t,n,a,s))s.stopPropagation();else if(Ug(t,s),n&4&&-1<Tx.indexOf(t)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=qt(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var O=1<<31-Pt(x);b.entanglements[1]|=O,x&=~O}Mi(f),(Ue&6)===0&&(Ml=de()+500,ao(0))}}break;case 13:b=Rr(f,2),b!==null&&Yn(b,f,2),bl(),yf(f,2)}if(f=Ef(s),f===null&&cf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else cf(t,n,s,null,a)}}function Ef(t){return t=Rc(t),bf(t)}var Fl=null;function bf(t){if(Fl=null,t=Ci(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ge:return 2;case Yt:return 8;case ae:case Qe:return 32;case N:return 268435456;default:return 32}default:return 32}}var Tf=!1,ba=null,Ta=null,Aa=null,ho=new Map,po=new Map,Ra=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(n.pointerId)}}function mo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&Cg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ax(t,n,a,s,c){switch(n){case"focusin":return ba=mo(ba,t,n,a,s,c),!0;case"dragenter":return Ta=mo(Ta,t,n,a,s,c),!0;case"mouseover":return Aa=mo(Aa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return ho.set(f,mo(ho.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,po.set(f,mo(po.get(f)||null,t,n,a,s,c)),!0}return!1}function Ng(t){var n=Ci(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var s=jn();s=ne(s);var c=Rr(a,s);c!==null&&Yn(c,a,s),yf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ef(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ac=s,a.target.dispatchEvent(s),Ac=null}else return n=Di(a),n!==null&&Cg(n),t.blockedOn=a,!1;n.shift()}return!0}function Lg(t,n,a){Hl(t)&&a.delete(n)}function Rx(){Tf=!1,ba!==null&&Hl(ba)&&(ba=null),Ta!==null&&Hl(Ta)&&(Ta=null),Aa!==null&&Hl(Aa)&&(Aa=null),ho.forEach(Lg),po.forEach(Lg)}function Gl(t,n){t.blockedOn===n&&(t.blockedOn=null,Tf||(Tf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Rx)))}var Vl=null;function Og(t){Vl!==t&&(Vl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(bf(s||a)===null)continue;break}var f=Di(a);f!==null&&(t.splice(n,3),n-=3,Eu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function go(t){function n(O){return Gl(O,t)}ba!==null&&Gl(ba,t),Ta!==null&&Gl(Ta,t),Aa!==null&&Gl(Aa,t),ho.forEach(n),po.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Ng(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[vn]||null;if(typeof f=="function")x||Og(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[vn]||null)b=x.formAction;else if(bf(c)!==null)continue}else b=x.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),Og(a)}}}function Af(t){this._internalRoot=t}kl.prototype.render=Af.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();Rg(a,s,t,n,null,null)},kl.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rg(t.current,2,null,t,null,null),bl(),n[Ln]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ee();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&Ng(t)}};var Pg=e.version;if(Pg!=="19.1.0")throw Error(r(527,Pg,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var wx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{ft=Xl.inject(wx),pt=Xl}catch{}}return vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Qp,f=Jp,x=$p,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Tg(t,1,!1,null,null,a,s,c,f,x,b,null),t[Ln]=n.current,lf(t),new Af(n)},vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Qp,x=Jp,b=$p,O=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Tg(t,1,!0,n,a??null,s,c,f,x,b,O,$),n.context=Ag(null),a=n.current,s=jn(),s=ne(s),c=ua(s),c.callback=null,fa(a,c,s),a=s,n.current.lanes=a,zt(n,a),Mi(n),t[Ln]=n.current,lf(t),new kl(n)},vo.version="19.1.0",vo}var Wg;function Hx(){if(Wg)return Cf.exports;Wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=Fx(),Cf.exports}var Gx=Hx();const Vx=["home","about","framework","project","contact"];function kx(){return H.jsxs("div",{className:"navbar bg-base-100 sticky top-0 z-50 shadow-md",children:[H.jsx("div",{className:"flex-1",children:H.jsx("a",{className:"btn btn-ghost text-xl",children:"My Portfolio"})}),H.jsx("div",{className:"flex-none",children:H.jsx("ul",{className:"menu menu-horizontal px-1",children:Vx.map(o=>H.jsx("li",{children:H.jsx("a",{href:`#${o}`,className:"capitalize",children:o})},o))})})]})}const qg=[`Hello I'm "Ta"`,"I interested in Software Development","I really love Mathematics","I love to learn new things"];function Xx(){const[o,e]=Nn.useState(""),[i,r]=Nn.useState(0),[l,u]=Nn.useState(0),[d,h]=Nn.useState(!1),[m,p]=Nn.useState(!1);return Nn.useEffect(()=>{const g=qg[i],v=110,S=55,M=1500,A=700,w=I=>I+(Math.random()*30-15);let y=w(d?S:v);m&&(y=d?A:M);const _=setTimeout(()=>{if(m){p(!1),d?(h(!1),r((i+1)%qg.length)):h(!0);return}d?(e(g.slice(0,l-1)),u(l-1),l-1===0&&p(!0)):(e(g.slice(0,l+1)),u(l+1),l+1===g.length&&p(!0))},y);return()=>clearTimeout(_)},[l,d,i,m]),H.jsxs("h2",{className:"text-3xl font-semibold text-center mt-8",children:[o,H.jsx("span",{className:"animate-pulse",children:"|"})]})}function Wx(){return H.jsxs("div",{className:"flex flex-col",children:[H.jsx("div",{className:"hero min-h-[60vh] bg-base-200",style:{backgroundImage:"url(/me/assets/background.jpg)",backgroundSize:"cover",backgroundPosition:"center"}}),H.jsx("div",{className:"-mt-1",children:H.jsx(Xx,{})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="177",qx=0,jg=1,jx=2,K_=1,Yx=2,$i=3,Ba=0,Fn=1,bi=2,Ia=0,ps=1,Yg=2,Zg=3,Kg=4,Zx=5,pr=100,Kx=101,Qx=102,Jx=103,$x=104,tS=200,eS=201,nS=202,iS=203,fd=204,dd=205,aS=206,rS=207,sS=208,oS=209,lS=210,cS=211,uS=212,fS=213,dS=214,hd=0,pd=1,md=2,_s=3,gd=4,_d=5,vd=6,xd=7,Q_=0,hS=1,pS=2,za=0,mS=1,gS=2,_S=3,vS=4,xS=5,SS=6,yS=7,J_=300,vs=301,xs=302,Sd=303,yd=304,Mc=306,Md=1e3,gr=1001,Ed=1002,mi=1003,MS=1004,Wl=1005,Ti=1006,Lf=1007,_r=1008,Ri=1009,$_=1010,t0=1011,To=1012,th=1013,xr=1014,ta=1015,Co=1016,eh=1017,nh=1018,Ao=1020,e0=35902,n0=1021,i0=1022,pi=1023,Ro=1026,wo=1027,a0=1028,ih=1029,r0=1030,ah=1031,rh=1033,hc=33776,pc=33777,mc=33778,gc=33779,bd=35840,Td=35841,Ad=35842,Rd=35843,wd=36196,Cd=37492,Dd=37496,Ud=37808,Nd=37809,Ld=37810,Od=37811,Pd=37812,Id=37813,zd=37814,Bd=37815,Fd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,_c=36492,Wd=36494,qd=36495,s0=36283,jd=36284,Yd=36285,Zd=36286,ES=3200,bS=3201,o0=0,TS=1,Pa="",ri="srgb",Ss="srgb-linear",xc="linear",ze="srgb",Jr=7680,Qg=519,AS=512,RS=513,wS=514,l0=515,CS=516,DS=517,US=518,NS=519,Jg=35044,$g="300 es",ea=2e3,Sc=2001;class Ms{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,Kd=180/Math.PI;function Do(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function LS(o,e){return(o%e+e)%e}function Pf(o,e,i){return(1-i)*o+i*e}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,i=0){Ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Uo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const S=u[d+0],M=u[d+1],A=u[d+2],w=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=w;return}if(v!==w||m!==S||p!==M||g!==A){let y=1-h;const _=m*S+p*M+g*A+v*w,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const k=Math.sqrt(L),X=Math.atan2(k,_*I);y=Math.sin(y*X)/k,h=Math.sin(h*X)/k}const D=h*I;if(m=m*y+S*D,p=p*y+M*D,g=g*y+A*D,v=v*y+w*D,y===1-h){const k=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=k,p*=k,g*=k,v*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[d],S=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+g*v+m*M-p*S,e[i+1]=m*A+g*S+p*v-h*M,e[i+2]=p*A+g*M+h*S-m*v,e[i+3]=g*A-h*v-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),S=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*g*v+p*M*A,this._y=p*M*v-S*g*A,this._z=p*g*A+S*M*v,this._w=p*g*v-S*M*A;break;case"YXZ":this._x=S*g*v+p*M*A,this._y=p*M*v-S*g*A,this._z=p*g*A-S*M*v,this._w=p*g*v+S*M*A;break;case"ZXY":this._x=S*g*v-p*M*A,this._y=p*M*v+S*g*A,this._z=p*g*A+S*M*v,this._w=p*g*v-S*M*A;break;case"ZYX":this._x=S*g*v-p*M*A,this._y=p*M*v+S*g*A,this._z=p*g*A-S*M*v,this._w=p*g*v+S*M*A;break;case"YZX":this._x=S*g*v+p*M*A,this._y=p*M*v+S*g*A,this._z=p*g*A-S*M*v,this._w=p*g*v-S*M*A;break;case"XZY":this._x=S*g*v-p*M*A,this._y=p*M*v-S*g*A,this._z=p*g*A+S*M*v,this._w=p*g*v+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+h+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=d*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(t_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(t_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return If.copy(this).projectOnVector(e),this.sub(If)}reflect(e){return this.sub(If.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const If=new st,t_=new Uo;class se{constructor(e,i,r,l,u,d,h,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],M=r[5],A=r[8],w=l[0],y=l[3],_=l[6],I=l[1],L=l[4],D=l[7],k=l[2],X=l[5],B=l[8];return u[0]=d*w+h*I+m*k,u[3]=d*y+h*L+m*X,u[6]=d*_+h*D+m*B,u[1]=p*w+g*I+v*k,u[4]=p*y+g*L+v*X,u[7]=p*_+g*D+v*B,u[2]=S*w+M*I+A*k,u[5]=S*y+M*L+A*X,u[8]=S*_+M*D+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*d-h*p,S=h*m-g*u,M=p*u-d*m,A=i*v+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(l*p-g*r)*w,e[2]=(h*r-l*d)*w,e[3]=S*w,e[4]=(g*i-l*m)*w,e[5]=(l*u-h*i)*w,e[6]=M*w,e[7]=(r*m-p*i)*w,e[8]=(d*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(zf.makeScale(e,i)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new se;function c0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function OS(){const o=yc("canvas");return o.style.display="block",o}const e_={};function ms(o){o in e_||(e_[o]=!0,console.warn(o))}function PS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function IS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const n_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BS(){const o={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===ze&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ze&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?xc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ss]:{primaries:e,whitePoint:r,transfer:xc,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Te=BS();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class FS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$r===void 0&&($r=yc("canvas")),$r.width=e.width,$r.height=e.height;const l=$r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=na(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HS=0;class sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Bf(l[d].image)):u.push(Bf(l[d]))}else u=Bf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Bf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GS=0;const Ff=new st;class Hn extends Ms{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=gr,l=gr,u=Ti,d=_r,h=pi,m=Ri,p=Hn.DEFAULT_ANISOTROPY,g=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Do(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ff).x}get height(){return this.source.getSize(Ff).y}get depth(){return this.source.getSize(Ff).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=J_;Hn.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,i=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],S=m[1],M=m[5],A=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-w)<.01&&Math.abs(A-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+w)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,k=(_+1)/2,X=(g+S)/4,B=(v+w)/4,W=(A+y)/4;return L>D&&L>k?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=X/r,u=B/r):D>k?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=X/l,u=W/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=B/u,l=W/u),this.set(r,l,u,i),this}let I=Math.sqrt((y-A)*(y-A)+(v-w)*(v-w)+(S-g)*(S-g));return Math.abs(I)<.001&&(I=1),this.x=(y-A)/I,this.y=(v-w)/I,this.z=(S-g)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends Ms{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Ze(0,0,e,i),this.scissorTest=!1,this.viewport=new Ze(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Hn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new sh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends VS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class u0 extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kS extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,ui):ui.fromBufferAttribute(u,d),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),jl.subVectors(this.max,So),ts.subVectors(e.a,So),es.subVectors(e.b,So),ns.subVectors(e.c,So),Ca.subVectors(es,ts),Da.subVectors(ns,es),sr.subVectors(ts,ns);let i=[0,-Ca.z,Ca.y,0,-Da.z,Da.y,0,-sr.z,sr.y,Ca.z,0,-Ca.x,Da.z,0,-Da.x,sr.z,0,-sr.x,-Ca.y,Ca.x,0,-Da.y,Da.x,0,-sr.y,sr.x,0];return!Hf(i,ts,es,ns,jl)||(i=[1,0,0,0,1,0,0,0,1],!Hf(i,ts,es,ns,jl))?!1:(Yl.crossVectors(Ca,Da),i=[Yl.x,Yl.y,Yl.z],Hf(i,ts,es,ns,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new st,new st,new st,new st,new st,new st,new st,new st],ui=new st,ql=new No,ts=new st,es=new st,ns=new st,Ca=new st,Da=new st,sr=new st,So=new st,jl=new st,Yl=new st,or=new st;function Hf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){or.fromArray(o,u);const h=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=e.dot(or),p=i.dot(or),g=r.dot(or);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const XS=new No,yo=new st,Gf=new st;class oh{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):XS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Gf)),this.expandByPoint(yo.copy(e.center).sub(Gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new st,Vf=new st,Zl=new st,Ua=new st,kf=new st,Kl=new st,Xf=new st;class WS{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Vf.copy(e).add(i).multiplyScalar(.5),Zl.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Vf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Zl),h=Ua.dot(this.direction),m=-Ua.dot(Zl),p=Ua.lengthSq(),g=Math.abs(1-d*d);let v,S,M,A;if(g>0)if(v=d*m-h,S=d*h-m,A=u*g,v>=0)if(S>=-A)if(S<=A){const w=1/g;v*=w,S*=w,M=v*(v+d*S+2*h)+S*(d*v+S+2*m)+p}else S=u,v=Math.max(0,-(d*S+h)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(d*S+h)),M=-v*v+S*(S+2*m)+p;else S<=-A?(v=Math.max(0,-(-d*u+h)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=A?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(d*u+h)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=d>0?-u:u,v=Math.max(0,-(d*S+h)),M=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Vf).addScaledVector(Zl,S),M}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,d=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,d=(e.min.y-S.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(h=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,u){kf.subVectors(i,e),Kl.subVectors(r,e),Xf.crossVectors(kf,Kl);let d=this.direction.dot(Xf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ua.subVectors(this.origin,e);const m=h*this.direction.dot(Kl.crossVectors(Ua,Kl));if(m<0)return null;const p=h*this.direction.dot(kf.cross(Ua));if(p<0||m+p>d)return null;const g=-h*Ua.dot(Xf);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,i,r,l,u,d,h,m,p,g,v,S,M,A,w,y){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,v,S,M,A,w,y)}set(e,i,r,l,u,d,h,m,p,g,v,S,M,A,w,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=M,_[7]=A,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),d=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=d*g,M=d*v,A=h*g,w=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=S-w*p,i[9]=-h*m,i[2]=w-S*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*g,M=m*v,A=p*g,w=p*v;i[0]=S+w*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-A,i[6]=w+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*g,M=m*v,A=p*g,w=p*v;i[0]=S-w*h,i[4]=-d*v,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*g,i[9]=w-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*g,M=d*v,A=h*g,w=h*v;i[0]=m*g,i[4]=A*p-M,i[8]=S*p+w,i[1]=m*v,i[5]=w*p+S,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,A=h*m,w=h*p;i[0]=m*g,i[4]=w-S*v,i[8]=A*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+A,i[10]=S-w*v}else if(e.order==="XZY"){const S=d*m,M=d*p,A=h*m,w=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+w,i[5]=d*g,i[9]=M*v-A,i[2]=A*v-M,i[6]=h*g,i[10]=w*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,jS)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(r,Zn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(r,Zn)),Na.normalize(),Ql.crossVectors(Zn,Na),l[0]=Na.x,l[4]=Ql.x,l[8]=Zn.x,l[1]=Na.y,l[5]=Ql.y,l[9]=Zn.y,l[2]=Na.z,l[6]=Ql.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],M=r[13],A=r[2],w=r[6],y=r[10],_=r[14],I=r[3],L=r[7],D=r[11],k=r[15],X=l[0],B=l[4],W=l[8],C=l[12],R=l[1],F=l[5],lt=l[9],ot=l[13],vt=l[2],ht=l[6],P=l[10],K=l[14],Y=l[3],Et=l[7],U=l[11],tt=l[15];return u[0]=d*X+h*R+m*vt+p*Y,u[4]=d*B+h*F+m*ht+p*Et,u[8]=d*W+h*lt+m*P+p*U,u[12]=d*C+h*ot+m*K+p*tt,u[1]=g*X+v*R+S*vt+M*Y,u[5]=g*B+v*F+S*ht+M*Et,u[9]=g*W+v*lt+S*P+M*U,u[13]=g*C+v*ot+S*K+M*tt,u[2]=A*X+w*R+y*vt+_*Y,u[6]=A*B+w*F+y*ht+_*Et,u[10]=A*W+w*lt+y*P+_*U,u[14]=A*C+w*ot+y*K+_*tt,u[3]=I*X+L*R+D*vt+k*Y,u[7]=I*B+L*F+D*ht+k*Et,u[11]=I*W+L*lt+D*P+k*U,u[15]=I*C+L*ot+D*K+k*tt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],S=e[10],M=e[14],A=e[3],w=e[7],y=e[11],_=e[15];return A*(+u*m*v-l*p*v-u*h*S+r*p*S+l*h*M-r*m*M)+w*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*g-u*m*g)+y*(+i*p*v-i*h*M-u*d*v+r*d*M+u*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*S+l*d*v-r*d*S+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],S=e[10],M=e[11],A=e[12],w=e[13],y=e[14],_=e[15],I=v*y*p-w*S*p+w*m*M-h*y*M-v*m*_+h*S*_,L=A*S*p-g*y*p-A*m*M+d*y*M+g*m*_-d*S*_,D=g*w*p-A*v*p+A*h*M-d*w*M-g*h*_+d*v*_,k=A*v*m-g*w*m-A*h*S+d*w*S+g*h*y-d*v*y,X=i*I+r*L+l*D+u*k;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return e[0]=I*B,e[1]=(w*S*u-v*y*u-w*l*M+r*y*M+v*l*_-r*S*_)*B,e[2]=(h*y*u-w*m*u+w*l*p-r*y*p-h*l*_+r*m*_)*B,e[3]=(v*m*u-h*S*u-v*l*p+r*S*p+h*l*M-r*m*M)*B,e[4]=L*B,e[5]=(g*y*u-A*S*u+A*l*M-i*y*M-g*l*_+i*S*_)*B,e[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*_-i*m*_)*B,e[7]=(d*S*u-g*m*u+g*l*p-i*S*p-d*l*M+i*m*M)*B,e[8]=D*B,e[9]=(A*v*u-g*w*u-A*r*M+i*w*M+g*r*_-i*v*_)*B,e[10]=(d*w*u-A*h*u+A*r*p-i*w*p-d*r*_+i*h*_)*B,e[11]=(g*h*u-d*v*u-g*r*p+i*v*p+d*r*M-i*h*M)*B,e[12]=k*B,e[13]=(g*w*l-A*v*l+A*r*S-i*w*S-g*r*y+i*v*y)*B,e[14]=(A*h*l-d*w*l-A*r*m+i*w*m+d*r*y-i*h*y)*B,e[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*S+i*h*S)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,v=h+h,S=u*p,M=u*g,A=u*v,w=d*g,y=d*v,_=h*v,I=m*p,L=m*g,D=m*v,k=r.x,X=r.y,B=r.z;return l[0]=(1-(w+_))*k,l[1]=(M+D)*k,l[2]=(A-L)*k,l[3]=0,l[4]=(M-D)*X,l[5]=(1-(S+_))*X,l[6]=(y+I)*X,l[7]=0,l[8]=(A+L)*B,l[9]=(y-I)*B,l[10]=(1-(S+w))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const d=is.set(l[4],l[5],l[6]).length(),h=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/u,g=1/d,v=1/h;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ea){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let M,A;if(h===ea)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Sc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ea){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(d-u),S=(i+e)*p,M=(r+l)*g;let A,w;if(h===ea)A=(d+u)*v,w=-2*v;else if(h===Sc)A=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new st,fi=new Ke,qS=new st(0,0,0),jS=new st(1,1,1),Na=new st,Ql=new st,Zn=new st,a_=new Ke,r_=new Uo;class wi{constructor(e=0,i=0,r=0,l=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return r_.setFromEuler(this),this.setFromQuaternion(r_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YS=0;const s_=new st,as=new Uo,Ki=new Ke,Jl=new st,Mo=new st,ZS=new st,KS=new Uo,o_=new st(1,0,0),l_=new st(0,1,0),c_=new st(0,0,1),u_={type:"added"},QS={type:"removed"},rs={type:"childadded",child:null},Wf={type:"childremoved",child:null};class Cn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new st,i=new wi,r=new Uo,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new se}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(o_,e)}rotateY(e){return this.rotateOnAxis(l_,e)}rotateZ(e){return this.rotateOnAxis(c_,e)}translateOnAxis(e,i){return s_.copy(e).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(o_,e)}translateY(e){return this.translateOnAxis(l_,e)}translateZ(e){return this.translateOnAxis(c_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Mo,Jl,this.up):Ki.lookAt(Jl,Mo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Ki),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u_),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(QS),Wf.child=e,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u_),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),v=d(e.shapes),S=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new st(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new st,Qi=new st,qf=new st,Ji=new st,ss=new st,os=new st,f_=new st,jf=new st,Yf=new st,Zf=new st,Kf=new Ze,Qf=new Ze,Jf=new Ze;class hi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),di.subVectors(e,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){di.subVectors(l,i),Qi.subVectors(r,i),qf.subVectors(e,i);const d=di.dot(di),h=di.dot(Qi),m=di.dot(qf),p=Qi.dot(Qi),g=Qi.dot(qf),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-h*g)*S,A=(d*g-h*m)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(d,Ji.y),m.addScaledVector(h,Ji.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return Kf.setScalar(0),Qf.setScalar(0),Jf.setScalar(0),Kf.fromBufferAttribute(e,i),Qf.fromBufferAttribute(e,r),Jf.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Kf,u.x),d.addScaledVector(Qf,u.y),d.addScaledVector(Jf,u.z),d}static isFrontFacing(e,i,r,l){return di.subVectors(r,i),Qi.subVectors(e,i),di.cross(Qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),di.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ss.subVectors(l,r),os.subVectors(u,r),jf.subVectors(e,r);const m=ss.dot(jf),p=os.dot(jf);if(m<=0&&p<=0)return i.copy(r);Yf.subVectors(e,l);const g=ss.dot(Yf),v=os.dot(Yf);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(ss,d);Zf.subVectors(e,u);const M=ss.dot(Zf),A=os.dot(Zf);if(A>=0&&M<=A)return i.copy(u);const w=M*p-m*A;if(w<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(os,h);const y=g*A-M*v;if(y<=0&&v-g>=0&&M-A>=0)return f_.subVectors(u,l),h=(v-g)/(v-g+(M-A)),i.copy(l).addScaledVector(f_,h);const _=1/(y+w+S);return d=w*_,h=S*_,i.copy(r).addScaledVector(ss,d).addScaledVector(os,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},$l={h:0,s:0,l:0};function $f(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=LS(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=$f(d,u,e+1/3),this.g=$f(d,u,e),this.b=$f(d,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=d0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Te.workingToColorSpace(wn.copy(this),e),Math.round(xe(wn.r*255,0,255))*65536+Math.round(xe(wn.g*255,0,255))*256+Math.round(xe(wn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ri){Te.workingToColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(La),this.setHSL(La.h+e,La.s+i,La.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(La),e.getHSL($l);const r=Pf(La.h,$l.h,i),l=Pf(La.s,$l.s,i),u=Pf(La.l,$l.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new we;we.NAMES=d0;let JS=0;class Lo extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=ps,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=dd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fd&&(r.blendSrc=this.blendSrc),this.blendDst!==dd&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class h0 extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new st,tc=new Ce;let $S=0;class gi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Jg,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jg&&(e.usage=this.usage),e}}class p0 extends gi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class m0 extends gi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vr extends gi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ty=0;const ai=new Ke,td=new Cn,ls=new st,Kn=new No,Eo=new No,gn=new st;class Ha extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?m0:p0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new vr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Eo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(Kn.min,Eo.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,Eo.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(Eo.min),Kn.expandByPoint(Eo.max))}Kn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)gn.fromBufferAttribute(h,p),m&&(ls.fromBufferAttribute(e,p),gn.add(ls)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new st,m[W]=new st;const p=new st,g=new st,v=new st,S=new Ce,M=new Ce,A=new Ce,w=new st,y=new st;function _(W,C,R){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,R),S.fromBufferAttribute(u,W),M.fromBufferAttribute(u,C),A.fromBufferAttribute(u,R),g.sub(p),v.sub(p),M.sub(S),A.sub(S);const F=1/(M.x*A.y-A.x*M.y);isFinite(F)&&(w.copy(g).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(F),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(F),h[W].add(w),h[C].add(w),h[R].add(w),m[W].add(y),m[C].add(y),m[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let W=0,C=I.length;W<C;++W){const R=I[W],F=R.start,lt=R.count;for(let ot=F,vt=F+lt;ot<vt;ot+=3)_(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const L=new st,D=new st,k=new st,X=new st;function B(W){k.fromBufferAttribute(l,W),X.copy(k);const C=h[W];L.copy(C),L.sub(k.multiplyScalar(k.dot(C))).normalize(),D.crossVectors(X,C);const F=D.dot(m[W])<0?-1:1;d.setXYZW(W,L.x,L.y,L.z,F)}for(let W=0,C=I.length;W<C;++W){const R=I[W],F=R.start,lt=R.count;for(let ot=F,vt=F+lt;ot<vt;ot+=3)B(e.getX(ot+0)),B(e.getX(ot+1)),B(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new st,u=new st,d=new st,h=new st,m=new st,p=new st,g=new st,v=new st;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),w=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,S=new p.constructor(m.length*g);let M=0,A=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*g;for(let _=0;_<g;_++)S[A++]=p[M++]}return new gi(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ha,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const S=p[g],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let S=0,M=v.length;S<M;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d_=new Ke,lr=new WS,ec=new oh,h_=new st,nc=new st,ic=new st,ac=new st,ed=new st,rc=new st,p_=new st,sc=new st;class Ai extends Cn{constructor(e=new Ha,i=new h0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(ed.fromBufferAttribute(v,e),d?rc.addScaledVector(ed,g):rc.addScaledVector(ed.sub(i),g))}i.add(rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(u),lr.copy(e.ray).recast(e.near),!(ec.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ec,h_)===null||lr.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(d_.copy(u).invert(),lr.copy(e.ray).applyMatrix4(d_),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,lr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,w=S.length;A<w;A++){const y=S[A],_=d[y.materialIndex],I=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,k=L;D<k;D+=3){const X=h.getX(D),B=h.getX(D+1),W=h.getX(D+2);l=oc(this,_,e,r,p,g,v,X,B,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let y=A,_=w;y<_;y+=3){const I=h.getX(y),L=h.getX(y+1),D=h.getX(y+2);l=oc(this,d,e,r,p,g,v,I,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,w=S.length;A<w;A++){const y=S[A],_=d[y.materialIndex],I=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,k=L;D<k;D+=3){const X=D,B=D+1,W=D+2;l=oc(this,_,e,r,p,g,v,X,B,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=A,_=w;y<_;y+=3){const I=y,L=y+1,D=y+2;l=oc(this,d,e,r,p,g,v,I,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ey(o,e,i,r,l,u,d,h){let m;if(e.side===Fn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ba,h),m===null)return null;sc.copy(h),sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(sc);return p<i.near||p>i.far?null:{distance:p,point:sc.clone(),object:o}}function oc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,nc),o.getVertexPosition(m,ic),o.getVertexPosition(p,ac);const g=ey(o,e,i,r,nc,ic,ac,p_);if(g){const v=new st;hi.getBarycoord(p_,nc,ic,ac,v),l&&(g.uv=hi.getInterpolatedAttribute(l,h,m,p,v,new Ce)),u&&(g.uv1=hi.getInterpolatedAttribute(u,h,m,p,v,new Ce)),d&&(g.normal=hi.getInterpolatedAttribute(d,h,m,p,v,new st),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new st,materialIndex:0};hi.getNormal(nc,ic,ac,S.normal),g.face=S,g.barycoord=v}return g}class Oo extends Ha{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],v=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vr(p,3)),this.setAttribute("normal",new vr(g,3)),this.setAttribute("uv",new vr(v,2));function A(w,y,_,I,L,D,k,X,B,W,C){const R=D/B,F=k/W,lt=D/2,ot=k/2,vt=X/2,ht=B+1,P=W+1;let K=0,Y=0;const Et=new st;for(let U=0;U<P;U++){const tt=U*F-ot;for(let xt=0;xt<ht;xt++){const yt=xt*R-lt;Et[w]=yt*I,Et[y]=tt*L,Et[_]=vt,p.push(Et.x,Et.y,Et.z),Et[w]=0,Et[y]=0,Et[_]=X>0?1:-1,g.push(Et.x,Et.y,Et.z),v.push(xt/B),v.push(1-U/W),K+=1}}for(let U=0;U<W;U++)for(let tt=0;tt<B;tt++){const xt=S+tt+ht*U,yt=S+tt+ht*(U+1),J=S+(tt+1)+ht*(U+1),mt=S+(tt+1)+ht*U;m.push(xt,yt,mt),m.push(yt,J,mt),Y+=6}h.addGroup(M,Y,C),M+=Y,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=ys(o[i]);for(const l in r)e[l]=r[l]}return e}function ny(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function g0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const iy={clone:ys,merge:Un};var ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class _0 extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ea}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new st,m_=new Ce,g_=new Ce;class si extends _0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Kd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,i){return this.getViewBounds(e,m_,g_),i.subVectors(g_,m_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Of*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,us=1;class sy extends Cn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(cs,us,e,i);l.layers=this.layers,this.add(l);const u=new si(cs,us,e,i);u.layers=this.layers,this.add(u);const d=new si(cs,us,e,i);d.layers=this.layers,this.add(d);const h=new si(cs,us,e,i);h.layers=this.layers,this.add(h);const m=new si(cs,us,e,i);m.layers=this.layers,this.add(m);const p=new si(cs,us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class v0 extends Hn{constructor(e=[],i=vs,r,l,u,d,h,m,p,g){super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oy extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new v0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Oo(5,5,5),u=new Fa({name:"CubemapFromEquirect",uniforms:ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ia});u.uniforms.tEquirect.value=i;const d=new Ai(l,u),h=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ti),new sy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class lc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ly={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ly)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new lc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class cy extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const id=new st,uy=new st,fy=new se;class dr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=id.subVectors(r,i).cross(uy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(id),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||fy.getNormalMatrix(e),l=this.coplanarPoint(id).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new oh,cc=new st;class lh{constructor(e=new dr,i=new dr,r=new dr,l=new dr,u=new dr,d=new dr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ea){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],S=l[7],M=l[8],A=l[9],w=l[10],y=l[11],_=l[12],I=l[13],L=l[14],D=l[15];if(r[0].setComponents(m-u,S-p,y-M,D-_).normalize(),r[1].setComponents(m+u,S+p,y+M,D+_).normalize(),r[2].setComponents(m+d,S+g,y+A,D+I).normalize(),r[3].setComponents(m-d,S-g,y-A,D-I).normalize(),r[4].setComponents(m-h,S-v,y-w,D-L).normalize(),i===ea)r[5].setComponents(m+h,S+v,y+w,D+L).normalize();else if(i===Sc)r[5].setComponents(h,v,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x0 extends Hn{constructor(e,i,r=xr,l,u,d,h=mi,m=mi,p,g=Ro,v=1){if(g!==Ro&&g!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ec extends Ha{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,S=i/m,M=[],A=[],w=[],y=[];for(let _=0;_<g;_++){const I=_*S-d;for(let L=0;L<p;L++){const D=L*v-u;A.push(D,-I,0),w.push(0,0,1),y.push(L/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<h;I++){const L=I+p*_,D=I+p*(_+1),k=I+1+p*(_+1),X=I+1+p*_;M.push(L,D,X),M.push(D,k,X)}this.setIndex(M),this.setAttribute("position",new vr(A,3)),this.setAttribute("normal",new vr(w,3)),this.setAttribute("uv",new vr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class dy extends Lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o0,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hy extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ES,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class py extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class S0 extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ad=new Ke,__=new st,v_=new st;class my{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;__.setFromMatrixPosition(e.matrixWorld),i.position.copy(__),v_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(v_),i.updateMatrixWorld(),ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y0 extends _0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class gy extends my{constructor(){super(new y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _y extends S0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new gy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vy extends S0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xy extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function x_(o,e,i,r){const l=Sy(r);switch(i){case n0:return o*e;case a0:return o*e/l.components*l.byteLength;case ih:return o*e/l.components*l.byteLength;case r0:return o*e*2/l.components*l.byteLength;case ah:return o*e*2/l.components*l.byteLength;case i0:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case rh:return o*e*4/l.components*l.byteLength;case hc:case pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Td:case Rd:return Math.max(o,16)*Math.max(e,8)/4;case bd:case Ad:return Math.max(o,8)*Math.max(e,8)/2;case wd:case Cd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case _c:case Wd:case qd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case s0:case jd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Yd:case Zd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Sy(o){switch(o){case Ri:case $_:return{byteLength:1,components:1};case To:case t0:case Co:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case xr:case th:case ta:return{byteLength:4,components:1};case e0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function M0(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function yy(o){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<v.length;M++){const A=v[S],w=v[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++S,v[S]=w)}v.length=S+1;for(let M=0,A=v.length;M<A;M++){const w=v[M];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var My=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ey=`#ifdef USE_ALPHAHASH
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
#endif`,by=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dy=`#ifdef USE_BATCHING
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
#endif`,Uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Py=`#ifdef USE_IRIDESCENCE
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
#endif`,Iy=`#ifdef USE_BUMPMAP
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
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wy=`#define PI 3.141592653589793
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
} // validated`,qy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jy=`vec3 transformedNormal = objectNormal;
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
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tM=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
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
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
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
#endif`,SM=`struct PhysicalMaterial {
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
}`,yM=`
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UM=`#if defined( USE_POINTS_UV )
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
#endif`,NM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`#ifdef USE_MORPHTARGETS
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
#endif`,BM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
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
#endif`,WM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sE=`float getShadowMask() {
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
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,OE=`uniform vec3 diffuse;
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
}`,PE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,zE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,HE=`#define MATCAP
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
}`,GE=`#define NORMAL
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
}`,VE=`#define NORMAL
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
}`,kE=`#define PHONG
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
}`,XE=`#define PHONG
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
}`,WE=`#define STANDARD
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
}`,qE=`#define STANDARD
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
}`,jE=`#define TOON
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
}`,YE=`#define TOON
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
}`,ZE=`uniform float size;
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,JE=`uniform vec3 color;
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
}`,$E=`uniform float rotation;
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
}`,tb=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:My,alphahash_pars_fragment:Ey,alphamap_fragment:by,alphamap_pars_fragment:Ty,alphatest_fragment:Ay,alphatest_pars_fragment:Ry,aomap_fragment:wy,aomap_pars_fragment:Cy,batching_pars_vertex:Dy,batching_vertex:Uy,begin_vertex:Ny,beginnormal_vertex:Ly,bsdfs:Oy,iridescence_fragment:Py,bumpmap_pars_fragment:Iy,clipping_planes_fragment:zy,clipping_planes_pars_fragment:By,clipping_planes_pars_vertex:Fy,clipping_planes_vertex:Hy,color_fragment:Gy,color_pars_fragment:Vy,color_pars_vertex:ky,color_vertex:Xy,common:Wy,cube_uv_reflection_fragment:qy,defaultnormal_vertex:jy,displacementmap_pars_vertex:Yy,displacementmap_vertex:Zy,emissivemap_fragment:Ky,emissivemap_pars_fragment:Qy,colorspace_fragment:Jy,colorspace_pars_fragment:$y,envmap_fragment:tM,envmap_common_pars_fragment:eM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:aM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:dM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:xM,lights_physical_pars_fragment:SM,lights_fragment_begin:yM,lights_fragment_maps:MM,lights_fragment_end:EM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:RM,map_fragment:wM,map_pars_fragment:CM,map_particle_fragment:DM,map_particle_pars_fragment:UM,metalnessmap_fragment:NM,metalnessmap_pars_fragment:LM,morphinstance_vertex:OM,morphcolor_vertex:PM,morphnormal_vertex:IM,morphtarget_pars_vertex:zM,morphtarget_vertex:BM,normal_fragment_begin:FM,normal_fragment_maps:HM,normal_pars_fragment:GM,normal_pars_vertex:VM,normal_vertex:kM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:jM,iridescence_pars_fragment:YM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:$M,dithering_pars_fragment:tE,roughnessmap_fragment:eE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:aE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:xE,worldpos_vertex:SE,background_vert:yE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:bE,cube_vert:TE,cube_frag:AE,depth_vert:RE,depth_frag:wE,distanceRGBA_vert:CE,distanceRGBA_frag:DE,equirect_vert:UE,equirect_frag:NE,linedashed_vert:LE,linedashed_frag:OE,meshbasic_vert:PE,meshbasic_frag:IE,meshlambert_vert:zE,meshlambert_frag:BE,meshmatcap_vert:FE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:kE,meshphong_frag:XE,meshphysical_vert:WE,meshphysical_frag:qE,meshtoon_vert:jE,meshtoon_frag:YE,points_vert:ZE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:$E,sprite_frag:tb},Lt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ei={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ei.physical={uniforms:Un([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const uc={r:0,b:0,g:0},ur=new wi,eb=new Ke;function nb(o,e,i,r,l,u,d){const h=new we(0);let m=u===!0?0:1,p,g,v=null,S=0,M=null;function A(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function w(L){let D=!1;const k=A(L);k===null?_(h,m):k&&k.isColor&&(_(k,1),D=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?r.buffers.color.setClear(0,0,0,1,d):X==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,D){const k=A(D);k&&(k.isCubeTexture||k.mapping===Mc)?(g===void 0&&(g=new Ai(new Oo(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:ys(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(D.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(ur)),g.material.toneMapped=Te.getTransfer(k.colorSpace)!==ze,(v!==k||S!==k.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=k,S=k.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Ai(new Ec(2,2),new Fa({name:"BackgroundMaterial",uniforms:ys(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Te.getTransfer(k.colorSpace)!==ze,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||S!==k.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=k,S=k.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(uc,g0(o)),r.buffers.color.setClear(uc.r,uc.g,uc.b,D,d)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:w,addToRenderList:y,dispose:I}}function ib(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(R,F,lt,ot,vt){let ht=!1;const P=v(ot,lt,F);u!==P&&(u=P,p(u.object)),ht=M(R,ot,lt,vt),ht&&A(R,ot,lt,vt),vt!==null&&e.update(vt,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,D(R,F,lt,ot),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,F,lt){const ot=lt.wireframe===!0;let vt=r[R.id];vt===void 0&&(vt={},r[R.id]=vt);let ht=vt[F.id];ht===void 0&&(ht={},vt[F.id]=ht);let P=ht[ot];return P===void 0&&(P=S(m()),ht[ot]=P),P}function S(R){const F=[],lt=[],ot=[];for(let vt=0;vt<i;vt++)F[vt]=0,lt[vt]=0,ot[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:lt,attributeDivisors:ot,object:R,attributes:{},index:null}}function M(R,F,lt,ot){const vt=u.attributes,ht=F.attributes;let P=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){const U=vt[Y];let tt=ht[Y];if(tt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),U===void 0||U.attribute!==tt||tt&&U.data!==tt.data)return!0;P++}return u.attributesNum!==P||u.index!==ot}function A(R,F,lt,ot){const vt={},ht=F.attributes;let P=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){let U=ht[Y];U===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const tt={};tt.attribute=U,U&&U.data&&(tt.data=U.data),vt[Y]=tt,P++}u.attributes=vt,u.attributesNum=P,u.index=ot}function w(){const R=u.newAttributes;for(let F=0,lt=R.length;F<lt;F++)R[F]=0}function y(R){_(R,0)}function _(R,F){const lt=u.newAttributes,ot=u.enabledAttributes,vt=u.attributeDivisors;lt[R]=1,ot[R]===0&&(o.enableVertexAttribArray(R),ot[R]=1),vt[R]!==F&&(o.vertexAttribDivisor(R,F),vt[R]=F)}function I(){const R=u.newAttributes,F=u.enabledAttributes;for(let lt=0,ot=F.length;lt<ot;lt++)F[lt]!==R[lt]&&(o.disableVertexAttribArray(lt),F[lt]=0)}function L(R,F,lt,ot,vt,ht,P){P===!0?o.vertexAttribIPointer(R,F,lt,vt,ht):o.vertexAttribPointer(R,F,lt,ot,vt,ht)}function D(R,F,lt,ot){w();const vt=ot.attributes,ht=lt.getAttributes(),P=F.defaultAttributeValues;for(const K in ht){const Y=ht[K];if(Y.location>=0){let Et=vt[K];if(Et===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const U=Et.normalized,tt=Et.itemSize,xt=e.get(Et);if(xt===void 0)continue;const yt=xt.buffer,J=xt.type,mt=xt.bytesPerElement,Mt=J===o.INT||J===o.UNSIGNED_INT||Et.gpuType===th;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,Ct=Rt.stride,oe=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Y.locationSize;Qt++)_(Y.location+Qt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<Y.locationSize;Qt++)y(Y.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Qt=0;Qt<Y.locationSize;Qt++)L(Y.location+Qt,tt/Y.locationSize,J,U,Ct*mt,(oe+tt/Y.locationSize*Qt)*mt,Mt)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<Y.locationSize;Rt++)_(Y.location+Rt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)y(Y.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Rt=0;Rt<Y.locationSize;Rt++)L(Y.location+Rt,tt/Y.locationSize,J,U,tt*mt,tt/Y.locationSize*Rt*mt,Mt)}}else if(P!==void 0){const U=P[K];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}I()}function k(){W();for(const R in r){const F=r[R];for(const lt in F){const ot=F[lt];for(const vt in ot)g(ot[vt].object),delete ot[vt];delete F[lt]}delete r[R]}}function X(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const lt in F){const ot=F[lt];for(const vt in ot)g(ot[vt].object),delete ot[vt];delete F[lt]}delete r[R.id]}function B(R){for(const F in r){const lt=r[F];if(lt[R.id]===void 0)continue;const ot=lt[R.id];for(const vt in ot)g(ot[vt].object),delete ot[vt];delete lt[R.id]}}function W(){C(),d=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:X,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function ab(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A];i.update(M,r,1)}function m(p,g,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],g[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let A=0;for(let w=0;w<v;w++)A+=g[w]*S[w];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function rb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==pi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const W=B===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ri&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ta&&!W)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,X=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:k,maxSamples:X}}function sb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new dr,h=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||l;return l=S,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,M){const A=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||u&&!y)u?g(null):p();else{const I=u?0:r,L=I*4;let D=_.clippingState||null;m.value=D,D=g(A,S,L,M);for(let k=0;k!==L;++k)D[k]=i[k];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,M,A){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,A!==!0||y===null){const _=M+w*4,I=S.matrixWorldInverse;h.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,D=M;L!==w;++L,D+=4)d.copy(v[L]).applyMatrix4(I,h),d.normal.toArray(y,D),y[D+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function ob(o){let e=new WeakMap;function i(d,h){return h===Sd?d.mapping=vs:h===yd&&(d.mapping=xs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Sd||h===yd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new oy(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const hs=4,S_=[.125,.215,.35,.446,.526,.582],mr=20,rd=new y0,y_=new we;let sd=null,od=0,ld=0,cd=!1;const hr=(1+Math.sqrt(5))/2,fs=1/hr,M_=[new st(-hr,fs,0),new st(hr,fs,0),new st(-fs,0,hr),new st(fs,0,hr),new st(0,hr,-fs),new st(0,hr,fs),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],lb=new st;class E_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=lb}=u;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Co,format:pi,colorSpace:Ss,depthBuffer:!1},l=b_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cb(u)),this._blurMaterial=ub(u,e,i)}return l}_compileMaterial(e){const i=new Ai(this._lodPlanes[0],e);this._renderer.compile(i,rd)}_sceneToCubeUV(e,i,r,l,u){const m=new si(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(y_),v.toneMapping=za,v.autoClear=!1;const A=new h0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),w=new Ai(new Oo,A);let y=!1;const _=e.background;_?_.isColor&&(A.color.copy(_),e.background=null,y=!0):(A.color.copy(y_),y=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[I],u.y,u.z)):L===1?(m.up.set(0,0,p[I]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[I],u.z)):(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[I]));const D=this._cubeSize;fc(l,L*D,I>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(w,m),v.render(e,m)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=M,v.autoClear=S,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===vs||e.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ai(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;fc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,rd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=M_[(l-u-1)%M_.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ai(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*mr-1),w=u/A,y=isFinite(u)?1+Math.floor(g*w):mr;y>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const _=[];let I=0;for(let B=0;B<mr;++B){const W=B/w,C=Math.exp(-W*W/2);_.push(C),B===0?I+=C:B<y&&(I+=2*C)}for(let B=0;B<_.length;B++)_[B]=_[B]/I;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:L}=this;S.dTheta.value=A,S.mipInt.value=L-r;const D=this._sizeLods[l],k=3*D*(l>L-hs?l-L+hs:0),X=4*(this._cubeSize-D);fc(i,k,X,3*D,2*D),m.setRenderTarget(i),m.render(v,rd)}}function cb(o){const e=[],i=[],r=[];let l=o;const u=o-hs+1+S_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-hs?m=S_[d-o+hs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,A=6,w=3,y=2,_=1,I=new Float32Array(w*A*M),L=new Float32Array(y*A*M),D=new Float32Array(_*A*M);for(let X=0;X<M;X++){const B=X%3*2/3-1,W=X>2?0:-1,C=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];I.set(C,w*A*X),L.set(S,y*A*X);const R=[X,X,X,X,X,X];D.set(R,_*A*X)}const k=new Ha;k.setAttribute("position",new gi(I,w)),k.setAttribute("uv",new gi(L,y)),k.setAttribute("faceIndex",new gi(D,_)),e.push(k),l>hs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function b_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Mc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function ub(o,e,i){const r=new Float32Array(mr),l=new st(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function T_(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function A_(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function fb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Sd||m===yd,g=m===vs||m===xs;if(p||g){let v=e.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new E_(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new E_(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function db(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ms("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function hb(o,e,i,r){const l={},u=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,A=v.attributes.position;let w=0;if(M!==null){const I=M.array;w=M.version;for(let L=0,D=I.length;L<D;L+=3){const k=I[L+0],X=I[L+1],B=I[L+2];S.push(k,X,X,B,B,k)}}else if(A!==void 0){const I=A.array;w=A.version;for(let L=0,D=I.length/3-1;L<D;L+=3){const k=L+0,X=L+1,B=L+2;S.push(k,X,X,B,B,k)}}else return;const y=new(c0(S)?m0:p0)(S,1);y.version=w;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function pb(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,S*d,A),i.update(M,r,A))}function g(S,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,A);let y=0;for(let _=0;_<A;_++)y+=M[_];i.update(y,r,1)}function v(S,M,A,w){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/d,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,w,0,A);let _=0;for(let I=0;I<A;I++)_+=M[I]*w[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function mb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function gb(o,e,i){const r=new WeakMap,l=new Ze;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(h);if(S===void 0||S.count!==v){let R=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;A===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let k=h.attributes.position.count*D,X=1;k>e.maxTextureSize&&(X=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*X*4*v),W=new u0(B,k,X,v);W.type=ta,W.needsUpdate=!0;const C=D*4;for(let F=0;F<v;F++){const lt=_[F],ot=I[F],vt=L[F],ht=k*X*4*F;for(let P=0;P<lt.count;P++){const K=P*C;A===!0&&(l.fromBufferAttribute(lt,P),B[ht+K+0]=l.x,B[ht+K+1]=l.y,B[ht+K+2]=l.z,B[ht+K+3]=0),w===!0&&(l.fromBufferAttribute(ot,P),B[ht+K+4]=l.x,B[ht+K+5]=l.y,B[ht+K+6]=l.z,B[ht+K+7]=0),y===!0&&(l.fromBufferAttribute(vt,P),B[ht+K+8]=l.x,B[ht+K+9]=l.y,B[ht+K+10]=l.z,B[ht+K+11]=vt.itemSize===4?l.w:1)}}S={count:v,texture:W,size:new Ce(k,X)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const w=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function _b(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const E0=new Hn,R_=new x0(1,1),b0=new u0,T0=new kS,A0=new v0,w_=[],C_=[],D_=new Float32Array(16),U_=new Float32Array(9),N_=new Float32Array(4);function Es(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=w_[l];if(u===void 0&&(u=new Float32Array(l),w_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function bc(o,e){let i=C_[e];i===void 0&&(i=new Int32Array(e),C_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function vb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function Mb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;N_.set(r),o.uniformMatrix2fv(this.addr,!1,N_),un(i,r)}}function Eb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;U_.set(r),o.uniformMatrix3fv(this.addr,!1,U_),un(i,r)}}function bb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;D_.set(r),o.uniformMatrix4fv(this.addr,!1,D_),un(i,r)}}function Tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function Cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function Nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function Lb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(R_.compareFunction=l0,u=R_):u=E0,i.setTexture2D(e||u,l)}function Ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||T0,l)}function Pb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||A0,l)}function Ib(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||b0,l)}function zb(o){switch(o){case 5126:return vb;case 35664:return xb;case 35665:return Sb;case 35666:return yb;case 35674:return Mb;case 35675:return Eb;case 35676:return bb;case 5124:case 35670:return Tb;case 35667:case 35671:return Ab;case 35668:case 35672:return Rb;case 35669:case 35673:return wb;case 5125:return Cb;case 36294:return Db;case 36295:return Ub;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Bb(o,e){o.uniform1fv(this.addr,e)}function Fb(o,e){const i=Es(e,this.size,2);o.uniform2fv(this.addr,i)}function Hb(o,e){const i=Es(e,this.size,3);o.uniform3fv(this.addr,i)}function Gb(o,e){const i=Es(e,this.size,4);o.uniform4fv(this.addr,i)}function Vb(o,e){const i=Es(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kb(o,e){const i=Es(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Xb(o,e){const i=Es(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Wb(o,e){o.uniform1iv(this.addr,e)}function qb(o,e){o.uniform2iv(this.addr,e)}function jb(o,e){o.uniform3iv(this.addr,e)}function Yb(o,e){o.uniform4iv(this.addr,e)}function Zb(o,e){o.uniform1uiv(this.addr,e)}function Kb(o,e){o.uniform2uiv(this.addr,e)}function Qb(o,e){o.uniform3uiv(this.addr,e)}function Jb(o,e){o.uniform4uiv(this.addr,e)}function $b(o,e,i){const r=this.cache,l=e.length,u=bc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||E0,u[d])}function tT(o,e,i){const r=this.cache,l=e.length,u=bc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||T0,u[d])}function eT(o,e,i){const r=this.cache,l=e.length,u=bc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||A0,u[d])}function nT(o,e,i){const r=this.cache,l=e.length,u=bc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||b0,u[d])}function iT(o){switch(o){case 5126:return Bb;case 35664:return Fb;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return kb;case 35676:return Xb;case 5124:case 35670:return Wb;case 35667:case 35671:return qb;case 35668:case 35672:return jb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return Kb;case 36295:return Qb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return nT}}class aT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=zb(i.type)}}class rT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iT(i.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function L_(o,e){o.seq.push(e),o.map[e.id]=e}function oT(o,e,i){const r=o.name,l=r.length;for(ud.lastIndex=0;;){const u=ud.exec(r),d=ud.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){L_(i,p===void 0?new aT(h,o,e):new rT(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new sT(h),L_(i,v)),i=v}}}class vc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);oT(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function O_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const lT=37297;let cT=0;function uT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const P_=new se;function fT(o){Te._getMatrix(P_,Te.workingColorSpace,o);const e=`mat3( ${P_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case xc:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function I_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+uT(o.getShaderSource(e),d)}else return l}function dT(o,e){const i=fT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function hT(o,e){let i;switch(e){case mS:i="Linear";break;case gS:i="Reinhard";break;case _S:i="Cineon";break;case vS:i="ACESFilmic";break;case SS:i="AgX";break;case yS:i="Neutral";break;case xS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new st;function pT(){Te.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function gT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _T(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function bo(o){return o!==""}function z_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(o){return o.replace(vT,ST)}const xT=new Map;function ST(o,e){let i=le[e];if(i===void 0){const r=xT.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qd(i)}const yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(o){return o.replace(yT,MT)}function MT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function H_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ET(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===K_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Q_:e="ENVMAP_BLENDING_MULTIPLY";break;case hS:e="ENVMAP_BLENDING_MIX";break;case pS:e="ENVMAP_BLENDING_ADD";break}return e}function RT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function wT(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=ET(i),p=bT(i),g=TT(i),v=AT(i),S=RT(i),M=mT(i),A=gT(u),w=l.createProgram();let y,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),_.length>0&&(_+=`
`)):(y=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),_=[H_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?le.tonemapping_pars_fragment:"",i.toneMapping!==za?hT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,dT("linearToOutputTexel",i.outputColorSpace),pT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),d=Qd(d),d=z_(d,i),d=B_(d,i),h=Qd(h),h=z_(h,i),h=B_(h,i),d=F_(d),h=F_(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+y+d,D=I+_+h,k=O_(l,l.VERTEX_SHADER,L),X=O_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,k),l.attachShader(w,X),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(w).trim(),ot=l.getShaderInfoLog(k).trim(),vt=l.getShaderInfoLog(X).trim();let ht=!0,P=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,k,X);else{const K=I_(l,k,"vertex"),Y=I_(l,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+lt+`
`+K+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(ot===""||vt==="")&&(P=!1);P&&(F.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:ot,prefix:y},fragmentShader:{log:vt,prefix:_}})}l.deleteShader(k),l.deleteShader(X),W=new vc(l,w),C=_T(l,w)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,lT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=X,this}let CT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new UT(e),i.set(e,r)),r}}class UT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function NT(o,e,i,r,l,u,d){const h=new f0,m=new DT,p=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,F,lt,ot){const vt=lt.fog,ht=ot.geometry,P=C.isMeshStandardMaterial?lt.environment:null,K=(C.isMeshStandardMaterial?i:e).get(C.envMap||P),Y=K&&K.mapping===Mc?K.image.height:null,Et=A[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,tt=U!==void 0?U.length:0;let xt=0;ht.morphAttributes.position!==void 0&&(xt=1),ht.morphAttributes.normal!==void 0&&(xt=2),ht.morphAttributes.color!==void 0&&(xt=3);let yt,J,mt,Mt;if(Et){const Ee=Ei[Et];yt=Ee.vertexShader,J=Ee.fragmentShader}else yt=C.vertexShader,J=C.fragmentShader,m.update(C),mt=m.getVertexShaderID(C),Mt=m.getFragmentShaderID(C);const Rt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),oe=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,Le=!!C.map,Be=!!C.matcap,me=!!K,z=!!C.aoMap,_n=!!C.lightMap,ye=!!C.bumpMap,de=!!C.normalMap,Vt=!!C.displacementMap,ge=!!C.emissiveMap,Yt=!!C.metalnessMap,ae=!!C.roughnessMap,Qe=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,et=C.iridescence>0,ft=C.sheen>0,pt=C.transmission>0,ct=Qe&&!!C.anisotropyMap,Pt=N&&!!C.clearcoatMap,Ut=N&&!!C.clearcoatNormalMap,Gt=N&&!!C.clearcoatRoughnessMap,kt=et&&!!C.iridescenceMap,St=et&&!!C.iridescenceThicknessMap,It=ft&&!!C.sheenColorMap,qt=ft&&!!C.sheenRoughnessMap,jt=!!C.specularMap,wt=!!C.specularColorMap,ie=!!C.specularIntensityMap,V=pt&&!!C.transmissionMap,Nt=pt&&!!C.thicknessMap,bt=!!C.gradientMap,zt=!!C.alphaMap,At=C.alphaTest>0,_t=!!C.alphaHash,Ft=!!C.extensions;let ne=za;C.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const De={shaderID:Et,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:J,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:oe,instancingColor:oe&&ot.instanceColor!==null,instancingMorph:oe&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ss,alphaToCoverage:!!C.alphaToCoverage,map:Le,matcap:Be,envMap:me,envMapMode:me&&K.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:_n,bumpMap:ye,normalMap:de,displacementMap:S&&Vt,emissiveMap:ge,normalMapObjectSpace:de&&C.normalMapType===TS,normalMapTangentSpace:de&&C.normalMapType===o0,metalnessMap:Yt,roughnessMap:ae,anisotropy:Qe,anisotropyMap:ct,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:It,sheenRoughnessMap:qt,specularMap:jt,specularColorMap:wt,specularIntensityMap:ie,transmission:pt,transmissionMap:V,thicknessMap:Nt,gradientMap:bt,opaque:C.transparent===!1&&C.blending===ps&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:At,alphaHash:_t,combine:C.combine,mapUv:Le&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:_n&&w(C.lightMap.channel),bumpMapUv:ye&&w(C.bumpMap.channel),normalMapUv:de&&w(C.normalMap.channel),displacementMapUv:Vt&&w(C.displacementMap.channel),emissiveMapUv:ge&&w(C.emissiveMap.channel),metalnessMapUv:Yt&&w(C.metalnessMap.channel),roughnessMapUv:ae&&w(C.roughnessMap.channel),anisotropyMapUv:ct&&w(C.anisotropyMap.channel),clearcoatMapUv:Pt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:St&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:It&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:qt&&w(C.sheenRoughnessMap.channel),specularMapUv:jt&&w(C.specularMap.channel),specularColorMapUv:wt&&w(C.specularColorMap.channel),specularIntensityMapUv:ie&&w(C.specularIntensityMap.channel),transmissionMapUv:V&&w(C.transmissionMap.channel),thicknessMapUv:Nt&&w(C.thicknessMap.channel),alphaMapUv:zt&&w(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(de||Qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ht.attributes.uv&&(Le||zt),fog:!!vt,useFog:C.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:ot.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Le&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:ge&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===bi,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ft&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&C.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)R.push(F),R.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(I(R,C),L(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function I(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),C.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),C.push(h.mask)}function D(C){const R=A[C.type];let F;if(R){const lt=Ei[R];F=iy.clone(lt.uniforms)}else F=C.uniforms;return F}function k(C,R){let F;for(let lt=0,ot=g.length;lt<ot;lt++){const vt=g[lt];if(vt.cacheKey===R){F=vt,++F.usedTimes;break}}return F===void 0&&(F=new wT(o,R,C,u),g.push(F)),F}function X(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function B(C){m.remove(C)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:k,releaseProgram:X,releaseShaderCache:B,programs:g,dispose:W}}function LT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function OT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function G_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function V_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v,S,M,A,w,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:A,renderOrder:v.renderOrder,z:w,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=w,_.group=y),e++,_}function h(v,S,M,A,w,y){const _=d(v,S,M,A,w,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,S,M,A,w,y){const _=d(v,S,M,A,w,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||OT),r.length>1&&r.sort(S||G_),l.length>1&&l.sort(S||G_)}function g(){for(let v=e,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function PT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new V_,o.set(r,[d])):l>=u.length?(d=new V_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function IT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new we};break;case"SpotLight":i={position:new st,direction:new st,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function zT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let BT=0;function FT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HT(o){const e=new IT,i=zT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new Ke,d=new Ke;function h(p){let g=0,v=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,A=0,w=0,y=0,_=0,I=0,L=0,D=0,k=0,X=0,B=0;p.sort(FT);for(let C=0,R=p.length;C<R;C++){const F=p[C],lt=F.color,ot=F.intensity,vt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=lt.r*ot,v+=lt.g*ot,S+=lt.b*ot;else if(F.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(F.sh.coefficients[P],ot);B++}else if(F.isDirectionalLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=F.shadow.matrix,I++}r.directional[M]=P,M++}else if(F.isSpotLight){const P=e.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(lt).multiplyScalar(ot),P.distance=vt,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,r.spot[w]=P;const K=F.shadow;if(F.map&&(r.spotLightMap[k]=F.map,k++,K.updateMatrices(F),F.castShadow&&X++),r.spotLightMatrix[w]=K.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[w]=Y,r.spotShadowMap[w]=ht,D++}w++}else if(F.isRectAreaLight){const P=e.get(F);P.color.copy(lt).multiplyScalar(ot),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=P,y++}else if(F.isPointLight){const P=e.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ht,r.pointShadowMatrix[A]=F.shadow.matrix,L++}r.point[A]=P,A++}else if(F.isHemisphereLight){const P=e.get(F);P.skyColor.copy(F.color).multiplyScalar(ot),P.groundColor.copy(F.groundColor).multiplyScalar(ot),r.hemi[_]=P,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==M||W.pointLength!==A||W.spotLength!==w||W.rectAreaLength!==y||W.hemiLength!==_||W.numDirectionalShadows!==I||W.numPointShadows!==L||W.numSpotShadows!==D||W.numSpotMaps!==k||W.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+k-X,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=B,W.directionalLength=M,W.pointLength=A,W.spotLength=w,W.rectAreaLength=y,W.hemiLength=_,W.numDirectionalShadows=I,W.numPointShadows=L,W.numSpotShadows=D,W.numSpotMaps=k,W.numLightProbes=B,r.version=BT++)}function m(p,g){let v=0,S=0,M=0,A=0,w=0;const y=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const L=p[_];if(L.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),d.identity(),u.copy(L.matrixWorld),u.premultiply(y),d.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(L.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function k_(o){const e=new HT(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function GT(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new k_(o),e.set(l,[h])):u>=d.length?(h=new k_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
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
}`;function XT(o,e,i){let r=new lh;const l=new Ce,u=new Ce,d=new Ze,h=new hy({depthPacking:bS}),m=new py,p={},g=i.maxTextureSize,v={[Ba]:Fn,[Fn]:Ba,[bi]:bi},S=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:VT,fragmentShader:kT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ha;A.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ai(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K_;let _=this.type;this.render=function(X,B,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||X.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ia),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ot=_!==$i&&this.type===$i,vt=_===$i&&this.type!==$i;for(let ht=0,P=X.length;ht<P;ht++){const K=X[ht],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Et=Y.getFrameExtents();if(l.multiply(Et),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,Y.mapSize.y=u.y)),Y.map===null||ot===!0||vt===!0){const tt=this.type!==$i?{minFilter:mi,magFilter:mi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Sr(l.x,l.y,tt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let tt=0;tt<U;tt++){const xt=Y.getViewport(tt);d.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),lt.viewport(d),Y.updateMatrices(K,tt),r=Y.getFrustum(),D(B,W,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===$i&&I(Y,W),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(C,R,F)};function I(X,B){const W=e.update(w);S.defines.VSM_SAMPLES!==X.blurSamples&&(S.defines.VSM_SAMPLES=X.blurSamples,M.defines.VSM_SAMPLES=X.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new Sr(l.x,l.y)),S.uniforms.shadow_pass.value=X.map.texture,S.uniforms.resolution.value=X.mapSize,S.uniforms.radius.value=X.radius,o.setRenderTarget(X.mapPass),o.clear(),o.renderBufferDirect(B,null,W,S,w,null),M.uniforms.shadow_pass.value=X.mapPass.texture,M.uniforms.resolution.value=X.mapSize,M.uniforms.radius.value=X.radius,o.setRenderTarget(X.map),o.clear(),o.renderBufferDirect(B,null,W,M,w,null)}function L(X,B,W,C){let R=null;const F=W.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(F!==void 0)R=F;else if(R=W.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const lt=R.uuid,ot=B.uuid;let vt=p[lt];vt===void 0&&(vt={},p[lt]=vt);let ht=vt[ot];ht===void 0&&(ht=R.clone(),vt[ot]=ht,B.addEventListener("dispose",k)),R=ht}if(R.visible=B.visible,R.wireframe=B.wireframe,C===$i?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:v[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=o.properties.get(R);lt.light=W}return R}function D(X,B,W,C,R){if(X.visible===!1)return;if(X.layers.test(B.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&R===$i)&&(!X.frustumCulled||r.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,X.matrixWorld);const ot=e.update(X),vt=X.material;if(Array.isArray(vt)){const ht=ot.groups;for(let P=0,K=ht.length;P<K;P++){const Y=ht[P],Et=vt[Y.materialIndex];if(Et&&Et.visible){const U=L(X,Et,C,R);X.onBeforeShadow(o,X,B,W,ot,U,Y),o.renderBufferDirect(W,null,ot,U,X,Y),X.onAfterShadow(o,X,B,W,ot,U,Y)}}}else if(vt.visible){const ht=L(X,vt,C,R);X.onBeforeShadow(o,X,B,W,ot,ht,null),o.renderBufferDirect(W,null,ot,ht,X,null),X.onAfterShadow(o,X,B,W,ot,ht,null)}}const lt=X.children;for(let ot=0,vt=lt.length;ot<vt;ot++)D(lt[ot],B,W,C,R)}function k(X){X.target.removeEventListener("dispose",k);for(const W in p){const C=p[W],R=X.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const WT={[hd]:pd,[md]:vd,[gd]:xd,[_s]:_d,[pd]:hd,[vd]:md,[xd]:gd,[_d]:_s};function qT(o,e){function i(){let V=!1;const Nt=new Ze;let bt=null;const zt=new Ze(0,0,0,0);return{setMask:function(At){bt!==At&&!V&&(o.colorMask(At,At,At,At),bt=At)},setLocked:function(At){V=At},setClear:function(At,_t,Ft,ne,De){De===!0&&(At*=ne,_t*=ne,Ft*=ne),Nt.set(At,_t,Ft,ne),zt.equals(Nt)===!1&&(o.clearColor(At,_t,Ft,ne),zt.copy(Nt))},reset:function(){V=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let V=!1,Nt=!1,bt=null,zt=null,At=null;return{setReversed:function(_t){if(Nt!==_t){const Ft=e.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Nt=_t;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(_t){_t?Rt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!V&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Nt&&(_t=WT[_t]),zt!==_t){switch(_t){case hd:o.depthFunc(o.NEVER);break;case pd:o.depthFunc(o.ALWAYS);break;case md:o.depthFunc(o.LESS);break;case _s:o.depthFunc(o.LEQUAL);break;case gd:o.depthFunc(o.EQUAL);break;case _d:o.depthFunc(o.GEQUAL);break;case vd:o.depthFunc(o.GREATER);break;case xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){V=_t},setClear:function(_t){At!==_t&&(Nt&&(_t=1-_t),o.clearDepth(_t),At=_t)},reset:function(){V=!1,bt=null,zt=null,At=null,Nt=!1}}}function l(){let V=!1,Nt=null,bt=null,zt=null,At=null,_t=null,Ft=null,ne=null,De=null;return{setTest:function(Ee){V||(Ee?Rt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!V&&(o.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Gn,fn){(bt!==Ee||zt!==Gn||At!==fn)&&(o.stencilFunc(Ee,Gn,fn),bt=Ee,zt=Gn,At=fn)},setOp:function(Ee,Gn,fn){(_t!==Ee||Ft!==Gn||ne!==fn)&&(o.stencilOp(Ee,Gn,fn),_t=Ee,Ft=Gn,ne=fn)},setLocked:function(Ee){V=Ee},setClear:function(Ee){De!==Ee&&(o.clearStencil(Ee),De=Ee)},reset:function(){V=!1,Nt=null,bt=null,zt=null,At=null,_t=null,Ft=null,ne=null,De=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,M=[],A=null,w=!1,y=null,_=null,I=null,L=null,D=null,k=null,X=null,B=new we(0,0,0),W=0,C=!1,R=null,F=null,lt=null,ot=null,vt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=K>=2);let Et=null,U={};const tt=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),yt=new Ze().fromArray(tt),J=new Ze().fromArray(xt);function mt(V,Nt,bt,zt){const At=new Uint8Array(4),_t=o.createTexture();o.bindTexture(V,_t),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<bt;Ft++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Nt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return _t}const Mt={};Mt[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Rt(o.DEPTH_TEST),d.setFunc(_s),ye(!1),de(jg),Rt(o.CULL_FACE),z(Ia);function Rt(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function Ct(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function oe(V,Nt){return v[V]!==Nt?(o.bindFramebuffer(V,Nt),v[V]=Nt,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Nt),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(V,Nt){let bt=M,zt=!1;if(V){bt=S.get(Nt),bt===void 0&&(bt=[],S.set(Nt,bt));const At=V.textures;if(bt.length!==At.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ft=At.length;_t<Ft;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=At.length,zt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(bt)}function Le(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const Be={[pr]:o.FUNC_ADD,[Kx]:o.FUNC_SUBTRACT,[Qx]:o.FUNC_REVERSE_SUBTRACT};Be[Jx]=o.MIN,Be[$x]=o.MAX;const me={[tS]:o.ZERO,[eS]:o.ONE,[nS]:o.SRC_COLOR,[fd]:o.SRC_ALPHA,[lS]:o.SRC_ALPHA_SATURATE,[sS]:o.DST_COLOR,[aS]:o.DST_ALPHA,[iS]:o.ONE_MINUS_SRC_COLOR,[dd]:o.ONE_MINUS_SRC_ALPHA,[oS]:o.ONE_MINUS_DST_COLOR,[rS]:o.ONE_MINUS_DST_ALPHA,[cS]:o.CONSTANT_COLOR,[uS]:o.ONE_MINUS_CONSTANT_COLOR,[fS]:o.CONSTANT_ALPHA,[dS]:o.ONE_MINUS_CONSTANT_ALPHA};function z(V,Nt,bt,zt,At,_t,Ft,ne,De,Ee){if(V===Ia){w===!0&&(Ct(o.BLEND),w=!1);return}if(w===!1&&(Rt(o.BLEND),w=!0),V!==Zx){if(V!==y||Ee!==C){if((_!==pr||D!==pr)&&(o.blendEquation(o.FUNC_ADD),_=pr,D=pr),Ee)switch(V){case ps:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFunc(o.ONE,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Kg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ps:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Kg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,k=null,X=null,B.set(0,0,0),W=0,y=V,C=Ee}return}At=At||Nt,_t=_t||bt,Ft=Ft||zt,(Nt!==_||At!==D)&&(o.blendEquationSeparate(Be[Nt],Be[At]),_=Nt,D=At),(bt!==I||zt!==L||_t!==k||Ft!==X)&&(o.blendFuncSeparate(me[bt],me[zt],me[_t],me[Ft]),I=bt,L=zt,k=_t,X=Ft),(ne.equals(B)===!1||De!==W)&&(o.blendColor(ne.r,ne.g,ne.b,De),B.copy(ne),W=De),y=V,C=!1}function _n(V,Nt){V.side===bi?Ct(o.CULL_FACE):Rt(o.CULL_FACE);let bt=V.side===Fn;Nt&&(bt=!bt),ye(bt),V.blending===ps&&V.transparent===!1?z(Ia):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const zt=V.stencilWrite;h.setTest(zt),zt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function de(V){V!==qx?(Rt(o.CULL_FACE),V!==F&&(V===jg?o.cullFace(o.BACK):V===jx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),F=V}function Vt(V){V!==lt&&(P&&o.lineWidth(V),lt=V)}function ge(V,Nt,bt){V?(Rt(o.POLYGON_OFFSET_FILL),(ot!==Nt||vt!==bt)&&(o.polygonOffset(Nt,bt),ot=Nt,vt=bt)):Ct(o.POLYGON_OFFSET_FILL)}function Yt(V){V?Rt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ae(V){V===void 0&&(V=o.TEXTURE0+ht-1),Et!==V&&(o.activeTexture(V),Et=V)}function Qe(V,Nt,bt){bt===void 0&&(Et===null?bt=o.TEXTURE0+ht-1:bt=Et);let zt=U[bt];zt===void 0&&(zt={type:void 0,texture:void 0},U[bt]=zt),(zt.type!==V||zt.texture!==Nt)&&(Et!==bt&&(o.activeTexture(bt),Et=bt),o.bindTexture(V,Nt||Mt[V]),zt.type=V,zt.texture=Nt)}function N(){const V=U[Et];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(V){yt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),yt.copy(V))}function qt(V){J.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),J.copy(V))}function jt(V,Nt){let bt=p.get(Nt);bt===void 0&&(bt=new WeakMap,p.set(Nt,bt));let zt=bt.get(V);zt===void 0&&(zt=o.getUniformBlockIndex(Nt,V.name),bt.set(V,zt))}function wt(V,Nt){const zt=p.get(Nt).get(V);m.get(Nt)!==zt&&(o.uniformBlockBinding(Nt,zt,V.__bindingPointIndex),m.set(Nt,zt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Et=null,U={},v={},S=new WeakMap,M=[],A=null,w=!1,y=null,_=null,I=null,L=null,D=null,k=null,X=null,B=new we(0,0,0),W=0,C=!1,R=null,F=null,lt=null,ot=null,vt=null,yt.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Rt,disable:Ct,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Le,setBlending:z,setMaterial:_n,setFlipSided:ye,setCullFace:de,setLineWidth:Vt,setPolygonOffset:ge,setScissorTest:Yt,activeTexture:ae,bindTexture:Qe,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:kt,texImage3D:St,updateUBOMapping:jt,uniformBlockBinding:wt,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:ft,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:It,viewport:qt,reset:ie}}function jT(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,g=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):yc("canvas")}function w(N,E,et){let ft=1;const pt=Qe(N);if((pt.width>et||pt.height>et)&&(ft=et/Math.max(pt.width,pt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(ft*pt.width),Pt=Math.floor(ft*pt.height);v===void 0&&(v=A(ct,Pt));const Ut=E?A(ct,Pt):v;return Ut.width=ct,Ut.height=Pt,Ut.getContext("2d").drawImage(N,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ct+"x"+Pt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,E,et,ft,pt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=E;if(E===o.RED&&(et===o.FLOAT&&(ct=o.R32F),et===o.HALF_FLOAT&&(ct=o.R16F),et===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.R8UI),et===o.UNSIGNED_SHORT&&(ct=o.R16UI),et===o.UNSIGNED_INT&&(ct=o.R32UI),et===o.BYTE&&(ct=o.R8I),et===o.SHORT&&(ct=o.R16I),et===o.INT&&(ct=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ct=o.RG32F),et===o.HALF_FLOAT&&(ct=o.RG16F),et===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RG8UI),et===o.UNSIGNED_SHORT&&(ct=o.RG16UI),et===o.UNSIGNED_INT&&(ct=o.RG32UI),et===o.BYTE&&(ct=o.RG8I),et===o.SHORT&&(ct=o.RG16I),et===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),et===o.UNSIGNED_INT&&(ct=o.RGB32UI),et===o.BYTE&&(ct=o.RGB8I),et===o.SHORT&&(ct=o.RGB16I),et===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),et===o.UNSIGNED_INT&&(ct=o.RGBA32UI),et===o.BYTE&&(ct=o.RGBA8I),et===o.SHORT&&(ct=o.RGBA16I),et===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),E===o.RGBA){const Pt=pt?xc:Te.getTransfer(ft);et===o.FLOAT&&(ct=o.RGBA32F),et===o.HALF_FLOAT&&(ct=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ct=Pt===ze?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function D(N,E){let et;return N?E===null||E===xr||E===Ao?et=o.DEPTH24_STENCIL8:E===ta?et=o.DEPTH32F_STENCIL8:E===To&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===Ao?et=o.DEPTH_COMPONENT24:E===ta?et=o.DEPTH_COMPONENT32F:E===To&&(et=o.DEPTH_COMPONENT16),et}function k(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==mi&&N.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function X(N){const E=N.target;E.removeEventListener("dispose",X),W(E),E.isVideoTexture&&g.delete(E)}function B(N){const E=N.target;E.removeEventListener("dispose",B),R(E)}function W(N){const E=r.get(N);if(E.__webglInit===void 0)return;const et=N.source,ft=S.get(et);if(ft){const pt=ft[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&C(N),Object.keys(ft).length===0&&S.delete(et)}r.remove(N)}function C(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const et=N.source,ft=S.get(et);delete ft[E.__cacheKey],d.memory.textures--}function R(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let pt=0;pt<E.__webglFramebuffer[ft].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ft=0,pt=et.length;ft<pt;ft++){const ct=r.get(et[ft]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),r.remove(et[ft])}r.remove(N)}let F=0;function lt(){F=0}function ot(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function vt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ht(N,E){const et=r.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(et,N,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function P(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function K(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Mt(et,N,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function Y(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){Rt(et,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const Et={[Md]:o.REPEAT,[gr]:o.CLAMP_TO_EDGE,[Ed]:o.MIRRORED_REPEAT},U={[mi]:o.NEAREST,[MS]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[Lf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},tt={[AS]:o.NEVER,[NS]:o.ALWAYS,[RS]:o.LESS,[l0]:o.LEQUAL,[wS]:o.EQUAL,[US]:o.GEQUAL,[CS]:o.GREATER,[DS]:o.NOTEQUAL};function xt(N,E){if(E.type===ta&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ti||E.magFilter===Lf||E.magFilter===Wl||E.magFilter===_r||E.minFilter===Ti||E.minFilter===Lf||E.minFilter===Wl||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Et[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Et[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Et[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==Wl&&E.minFilter!==_r||E.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",X));const ft=E.source;let pt=S.get(ft);pt===void 0&&(pt={},S.set(ft,pt));const ct=vt(E);if(ct!==N.__cacheKey){pt[ct]===void 0&&(pt[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),pt[ct].usedTimes++;const Pt=pt[N.__cacheKey];Pt!==void 0&&(pt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&C(E)),N.__cacheKey=ct,N.__webglTexture=pt[ct].texture}return et}function J(N,E,et){return Math.floor(Math.floor(N/et)/E)}function mt(N,E,et,ft){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ft,E.data);else{ct.sort((St,It)=>St.start-It.start);let Pt=0;for(let St=1;St<ct.length;St++){const It=ct[Pt],qt=ct[St],jt=It.start+It.count,wt=J(qt.start,E.width,4),ie=J(It.start,E.width,4);qt.start<=jt+1&&wt===ie&&J(qt.start+qt.count-1,E.width,4)===wt?It.count=Math.max(It.count,qt.start+qt.count-It.start):(++Pt,ct[Pt]=qt)}ct.length=Pt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let St=0,It=ct.length;St<It;St++){const qt=ct[St],jt=Math.floor(qt.start/4),wt=Math.ceil(qt.count/4),ie=jt%E.width,V=Math.floor(jt/E.width),Nt=wt,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ie,V,Nt,bt,et,ft,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function Mt(N,E,et){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const pt=yt(N,E),ct=E.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+et);const Pt=r.get(ct);if(ct.version!==Pt.__version||pt===!0){i.activeTexture(o.TEXTURE0+et);const Ut=Te.getPrimaries(Te.workingColorSpace),Gt=E.colorSpace===Pa?null:Te.getPrimaries(E.colorSpace),kt=E.colorSpace===Pa||Ut===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let St=w(E.image,!1,l.maxTextureSize);St=ae(E,St);const It=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let jt=L(E.internalFormat,It,qt,E.colorSpace,E.isVideoTexture);xt(ft,E);let wt;const ie=E.mipmaps,V=E.isVideoTexture!==!0,Nt=Pt.__version===void 0||pt===!0,bt=ct.dataReady,zt=k(E,St);if(E.isDepthTexture)jt=D(E.format===wo,E.type),Nt&&(V?i.texStorage2D(o.TEXTURE_2D,1,jt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,jt,St.width,St.height,0,It,qt,null));else if(E.isDataTexture)if(ie.length>0){V&&Nt&&i.texStorage2D(o.TEXTURE_2D,zt,jt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)wt=ie[At],V?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,wt.width,wt.height,It,qt,wt.data):i.texImage2D(o.TEXTURE_2D,At,jt,wt.width,wt.height,0,It,qt,wt.data);E.generateMipmaps=!1}else V?(Nt&&i.texStorage2D(o.TEXTURE_2D,zt,jt,St.width,St.height),bt&&mt(E,St,It,qt)):i.texImage2D(o.TEXTURE_2D,0,jt,St.width,St.height,0,It,qt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,jt,ie[0].width,ie[0].height,St.depth);for(let At=0,_t=ie.length;At<_t;At++)if(wt=ie[At],E.format!==pi)if(It!==null)if(V){if(bt)if(E.layerUpdates.size>0){const Ft=x_(wt.width,wt.height,E.format,E.type);for(const ne of E.layerUpdates){const De=wt.data.subarray(ne*Ft/wt.data.BYTES_PER_ELEMENT,(ne+1)*Ft/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,ne,wt.width,wt.height,1,It,De)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,St.depth,It,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,jt,wt.width,wt.height,St.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,St.depth,It,qt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,jt,wt.width,wt.height,St.depth,0,It,qt,wt.data)}else{V&&Nt&&i.texStorage2D(o.TEXTURE_2D,zt,jt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)wt=ie[At],E.format!==pi?It!==null?V?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,wt.width,wt.height,It,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,At,jt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,wt.width,wt.height,It,qt,wt.data):i.texImage2D(o.TEXTURE_2D,At,jt,wt.width,wt.height,0,It,qt,wt.data)}else if(E.isDataArrayTexture)if(V){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,jt,St.width,St.height,St.depth),bt)if(E.layerUpdates.size>0){const At=x_(St.width,St.height,E.format,E.type);for(const _t of E.layerUpdates){const Ft=St.data.subarray(_t*At/St.data.BYTES_PER_ELEMENT,(_t+1)*At/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,It,qt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,It,qt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,St.width,St.height,St.depth,0,It,qt,St.data);else if(E.isData3DTexture)V?(Nt&&i.texStorage3D(o.TEXTURE_3D,zt,jt,St.width,St.height,St.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,It,qt,St.data)):i.texImage3D(o.TEXTURE_3D,0,jt,St.width,St.height,St.depth,0,It,qt,St.data);else if(E.isFramebufferTexture){if(Nt)if(V)i.texStorage2D(o.TEXTURE_2D,zt,jt,St.width,St.height);else{let At=St.width,_t=St.height;for(let Ft=0;Ft<zt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,jt,At,_t,0,It,qt,null),At>>=1,_t>>=1}}else if(ie.length>0){if(V&&Nt){const At=Qe(ie[0]);i.texStorage2D(o.TEXTURE_2D,zt,jt,At.width,At.height)}for(let At=0,_t=ie.length;At<_t;At++)wt=ie[At],V?bt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,It,qt,wt):i.texImage2D(o.TEXTURE_2D,At,jt,It,qt,wt);E.generateMipmaps=!1}else if(V){if(Nt){const At=Qe(St);i.texStorage2D(o.TEXTURE_2D,zt,jt,At.width,At.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,qt,St)}else i.texImage2D(o.TEXTURE_2D,0,jt,It,qt,St);y(E)&&_(ft),Pt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Rt(N,E,et){if(E.image.length!==6)return;const ft=yt(N,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const ct=r.get(pt);if(pt.version!==ct.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const Pt=Te.getPrimaries(Te.workingColorSpace),Ut=E.colorSpace===Pa?null:Te.getPrimaries(E.colorSpace),Gt=E.colorSpace===Pa||Pt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!kt&&!St?It[_t]=w(E.image[_t],!0,l.maxCubemapSize):It[_t]=St?E.image[_t].image:E.image[_t],It[_t]=ae(E,It[_t]);const qt=It[0],jt=u.convert(E.format,E.colorSpace),wt=u.convert(E.type),ie=L(E.internalFormat,jt,wt,E.colorSpace),V=E.isVideoTexture!==!0,Nt=ct.__version===void 0||ft===!0,bt=pt.dataReady;let zt=k(E,qt);xt(o.TEXTURE_CUBE_MAP,E);let At;if(kt){V&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,qt.width,qt.height);for(let _t=0;_t<6;_t++){At=It[_t].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==pi?jt!==null?V?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,jt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,jt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,jt,wt,ne.data)}}}else{if(At=E.mipmaps,V&&Nt){At.length>0&&zt++;const _t=Qe(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,jt,wt,It[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,It[_t].width,It[_t].height,0,jt,wt,It[_t].data);for(let Ft=0;Ft<At.length;Ft++){const De=At[Ft].image[_t].image;V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,De.width,De.height,jt,wt,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,De.width,De.height,0,jt,wt,De.data)}}else{V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,jt,wt,It[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,jt,wt,It[_t]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];V?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,jt,wt,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,jt,wt,ne.image[_t])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ct.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ct(N,E,et,ft,pt,ct){const Pt=u.convert(et.format,et.colorSpace),Ut=u.convert(et.type),Gt=L(et.internalFormat,Pt,Ut,et.colorSpace),kt=r.get(E),St=r.get(et);if(St.__renderTarget=E,!kt.__hasExternalTextures){const It=Math.max(1,E.width>>ct),qt=Math.max(1,E.height>>ct);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,ct,Gt,It,qt,E.depth,0,Pt,Ut,null):i.texImage2D(pt,ct,Gt,It,qt,0,Pt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),ge(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,pt,St.__webglTexture,0,Vt(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,pt,St.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(N,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ft=E.depthTexture,pt=ft&&ft.isDepthTexture?ft.type:null,ct=D(E.stencilBuffer,pt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Vt(E);ge(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,N)}else{const ft=E.textures;for(let pt=0;pt<ft.length;pt++){const ct=ft[pt],Pt=u.convert(ct.format,ct.colorSpace),Ut=u.convert(ct.type),Gt=L(ct.internalFormat,Pt,Ut,ct.colorSpace),kt=Vt(E);et&&ge(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Gt,E.width,E.height):ge(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const pt=ft.__webglTexture,ct=Vt(E);if(E.depthTexture.format===Ro)ge(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===wo)ge(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Le(N){const E=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",pt)};ft.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ft}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Qt(E.__webglFramebuffer[0],N):Qt(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),oe(E.__webglDepthbuffer[ft],N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ct)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),oe(E.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(N,E,et){const ft=r.get(N);E!==void 0&&Ct(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Le(N)}function me(N){const E=N.texture,et=r.get(N),ft=r.get(E);N.addEventListener("dispose",B);const pt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,d.memory.textures++),ct){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)et.__webglFramebuffer[Ut][Gt]=o.createFramebuffer()}else et.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=r.get(pt[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&ge(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];et.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const kt=u.convert(Gt.format,Gt.colorSpace),St=u.convert(Gt.type),It=L(Gt.internalFormat,kt,St,Gt.colorSpace,N.isXRRenderTarget===!0),qt=Vt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,It,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),xt(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Ct(et.__webglFramebuffer[Ut][Gt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else Ct(et.__webglFramebuffer[Ut],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=pt.length;Ut<Gt;Ut++){const kt=pt[Ut],St=r.get(kt);i.bindTexture(o.TEXTURE_2D,St.__webglTexture),xt(o.TEXTURE_2D,kt),Ct(et.__webglFramebuffer,N,kt,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),y(kt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ft.__webglTexture),xt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Ct(et.__webglFramebuffer[Gt],N,E,o.COLOR_ATTACHMENT0,Ut,Gt);else Ct(et.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Ut,0);y(E)&&_(Ut),i.unbindTexture()}N.depthBuffer&&Le(N)}function z(N){const E=N.textures;for(let et=0,ft=E.length;et<ft;et++){const pt=E[et];if(y(pt)){const ct=I(N),Pt=r.get(pt).__webglTexture;i.bindTexture(ct,Pt),_(ct),i.unbindTexture()}}}const _n=[],ye=[];function de(N){if(N.samples>0){if(ge(N)===!1){const E=N.textures,et=N.width,ft=N.height;let pt=o.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(N),Ut=E.length>1;if(Ut)for(let kt=0;kt<E.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=N.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const St=r.get(E[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,pt,o.NEAREST),m===!0&&(_n.length=0,ye.length=0,_n.push(o.COLOR_ATTACHMENT0+kt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(_n.push(ct),ye.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_n))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<E.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const St=r.get(E[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Vt(N){return Math.min(l.maxSamples,N.samples)}function ge(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(N){const E=d.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function ae(N,E){const et=N.colorSpace,ft=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==Ss&&et!==Pa&&(Te.getTransfer(et)===ze?(ft!==pi||pt!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Be,this.setupRenderTarget=me,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ge}function YT(o,e){function i(r,l=Pa){let u;const d=Te.getTransfer(l);if(r===Ri)return o.UNSIGNED_BYTE;if(r===eh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===nh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===e0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===$_)return o.BYTE;if(r===t0)return o.SHORT;if(r===To)return o.UNSIGNED_SHORT;if(r===th)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===Co)return o.HALF_FLOAT;if(r===n0)return o.ALPHA;if(r===i0)return o.RGB;if(r===pi)return o.RGBA;if(r===Ro)return o.DEPTH_COMPONENT;if(r===wo)return o.DEPTH_STENCIL;if(r===a0)return o.RED;if(r===ih)return o.RED_INTEGER;if(r===r0)return o.RG;if(r===ah)return o.RG_INTEGER;if(r===rh)return o.RGBA_INTEGER;if(r===hc||r===pc||r===mc||r===gc)if(d===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===Td||r===Ad||r===Rd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===bd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Td)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ad)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wd||r===Cd||r===Dd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===wd||r===Cd)return d===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Dd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ud||r===Nd||r===Ld||r===Od||r===Pd||r===Id||r===zd||r===Bd||r===Fd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ud)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ld)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Od)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Id)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xd)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_c||r===Wd||r===qd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===_c)return d===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===s0||r===jd||r===Yd||r===Zd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===_c)return u.COMPRESSED_RED_RGTC1_EXT;if(r===jd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ao?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const ZT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KT=`
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

}`;class QT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Fa({vertexShader:ZT,fragmentShader:KT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JT extends Ms{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,S=null,M=null,A=null;const w=new QT,y=i.getContextAttributes();let _=null,I=null;const L=[],D=[],k=new Ce;let X=null;const B=new si;B.viewport=new Ze;const W=new si;W.viewport=new Ze;const C=[B,W],R=new xy;let F=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let mt=L[J];return mt===void 0&&(mt=new nd,L[J]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(J){let mt=L[J];return mt===void 0&&(mt=new nd,L[J]=mt),mt.getGripSpace()},this.getHand=function(J){let mt=L[J];return mt===void 0&&(mt=new nd,L[J]=mt),mt.getHandSpace()};function ot(J){const mt=D.indexOf(J.inputSource);if(mt===-1)return;const Mt=L[mt];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,p||d),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function vt(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",ht);for(let J=0;J<L.length;J++){const mt=D[J];mt!==null&&(D[J]=null,L[J].disconnect(mt))}F=null,lt=null,w.reset(),e.setRenderTarget(_),M=null,S=null,v=null,l=null,I=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?wo:Ro,Rt=y.stencil?Ao:xr);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),I=new Sr(S.textureWidth,S.textureHeight,{format:pi,type:Ri,depthTexture:new x0(S.textureWidth,S.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Sr(M.framebufferWidth,M.framebufferHeight,{format:pi,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(J){for(let mt=0;mt<J.removed.length;mt++){const Mt=J.removed[mt],Rt=D.indexOf(Mt);Rt>=0&&(D[Rt]=null,L[Rt].disconnect(Mt))}for(let mt=0;mt<J.added.length;mt++){const Mt=J.added[mt];let Rt=D.indexOf(Mt);if(Rt===-1){for(let oe=0;oe<L.length;oe++)if(oe>=D.length){D.push(Mt),Rt=oe;break}else if(D[oe]===null){D[oe]=Mt,Rt=oe;break}if(Rt===-1)break}const Ct=L[Rt];Ct&&Ct.connect(Mt)}}const P=new st,K=new st;function Y(J,mt,Mt){P.setFromMatrixPosition(mt.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const Rt=P.distanceTo(K),Ct=mt.projectionMatrix.elements,oe=Mt.projectionMatrix.elements,Qt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Be=(Ct[9]+1)/Ct[5],me=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],_n=(oe[8]+1)/oe[0],ye=Qt*z,de=Qt*_n,Vt=Rt/(-z+_n),ge=Vt*-z;if(mt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=Qt+Vt,ae=Le+Vt,Qe=ye-ge,N=de+(Rt-ge),E=Be*Le/ae*Yt,et=me*Le/ae*Yt;J.projectionMatrix.makePerspective(Qe,N,E,et,Yt,ae),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,mt){mt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(mt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let mt=J.near,Mt=J.far;w.texture!==null&&(w.depthNear>0&&(mt=w.depthNear),w.depthFar>0&&(Mt=w.depthFar)),R.near=W.near=B.near=mt,R.far=W.far=B.far=Mt,(F!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,lt=R.far),B.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,R.layers.mask=B.layers.mask|W.layers.mask;const Rt=J.parent,Ct=R.cameras;Et(R,Rt);for(let oe=0;oe<Ct.length;oe++)Et(Ct[oe],Rt);Ct.length===2?Y(R,B,W):R.projectionMatrix.copy(B.projectionMatrix),U(J,R,Rt)};function U(J,mt,Mt){Mt===null?J.matrix.copy(mt.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(mt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Kd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let tt=null;function xt(J,mt){if(g=mt.getViewerPose(p||d),A=mt,g!==null){const Mt=g.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let Rt=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let Qt=0;Qt<Mt.length;Qt++){const Le=Mt[Qt];let Be=null;if(M!==null)Be=M.getViewport(Le);else{const z=v.getViewSubImage(S,Le);Be=z.viewport,Qt===0&&(e.setRenderTargetTextures(I,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(I))}let me=C[Qt];me===void 0&&(me=new si,me.layers.enable(Qt),me.viewport=new Ze,C[Qt]=me),me.matrix.fromArray(Le.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Le.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Be.x,Be.y,Be.width,Be.height),Qt===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(me)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Qt=v.getDepthInformation(Mt[0]);Qt&&Qt.isValid&&Qt.texture&&w.init(e,Qt,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const Rt=D[Mt],Ct=L[Mt];Rt!==null&&Ct!==void 0&&Ct.update(Rt,mt,p||d)}tt&&tt(J,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),A=null}const yt=new M0;yt.setAnimationLoop(xt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const fr=new wi,$T=new Ke;function tA(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,g0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,I,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),A(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,I,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),L=I.envMap,D=I.envMapRotation;L&&(y.envMap.value=L,fr.copy(D),fr.x*=-1,fr.y*=-1,fr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),y.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(fr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,I,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function eA(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,L){const D=L.program;r.uniformBlockBinding(I,D)}function p(I,L){let D=l[I.id];D===void 0&&(A(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",y));const k=L.program;r.updateUBOMapping(I,k);const X=e.render.frame;u[I.id]!==X&&(S(I),u[I.id]=X)}function g(I){const L=v();I.__bindingPointIndex=L;const D=o.createBuffer(),k=I.__size,X=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,k,X),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function v(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const L=l[I.id],D=I.uniforms,k=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let X=0,B=D.length;X<B;X++){const W=Array.isArray(D[X])?D[X]:[D[X]];for(let C=0,R=W.length;C<R;C++){const F=W[C];if(M(F,X,C,k)===!0){const lt=F.__offset,ot=Array.isArray(F.value)?F.value:[F.value];let vt=0;for(let ht=0;ht<ot.length;ht++){const P=ot[ht],K=w(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,lt+vt,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,vt),vt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,L,D,k){const X=I.value,B=L+"_"+D;if(k[B]===void 0)return typeof X=="number"||typeof X=="boolean"?k[B]=X:k[B]=X.clone(),!0;{const W=k[B];if(typeof X=="number"||typeof X=="boolean"){if(W!==X)return k[B]=X,!0}else if(W.equals(X)===!1)return W.copy(X),!0}return!1}function A(I){const L=I.uniforms;let D=0;const k=16;for(let B=0,W=L.length;B<W;B++){const C=Array.isArray(L[B])?L[B]:[L[B]];for(let R=0,F=C.length;R<F;R++){const lt=C[R],ot=Array.isArray(lt.value)?lt.value:[lt.value];for(let vt=0,ht=ot.length;vt<ht;vt++){const P=ot[vt],K=w(P),Y=D%k,Et=Y%K.boundary,U=Y+Et;D+=Et,U!==0&&k-U<K.storage&&(D+=k-U),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=K.storage}}}const X=D%k;return X>0&&(D+=k-X),I.__size=D,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class nA{constructor(e={}){const{canvas:i=OS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let k=!1;this._outputColorSpace=ri;let X=0,B=0,W=null,C=-1,R=null;const F=new Ze,lt=new Ze;let ot=null;const vt=new we(0);let ht=0,P=i.width,K=i.height,Y=1,Et=null,U=null;const tt=new Ze(0,0,P,K),xt=new Ze(0,0,P,K);let yt=!1;const J=new lh;let mt=!1,Mt=!1;const Rt=new Ke,Ct=new Ke,oe=new st,Qt=new Ze,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function me(){return W===null?Y:1}let z=r;function _n(T,j){return i.getContext(T,j)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$d}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",_t,!1),z===null){const j="webgl2";if(z=_n(j,T),z===null)throw _n(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,de,Vt,ge,Yt,ae,Qe,N,E,et,ft,pt,ct,Pt,Ut,Gt,kt,St,It,qt,jt,wt,ie,V;function Nt(){ye=new db(z),ye.init(),wt=new YT(z,ye),de=new rb(z,ye,e,wt),Vt=new qT(z,ye),de.reverseDepthBuffer&&S&&Vt.buffers.depth.setReversed(!0),ge=new mb(z),Yt=new LT,ae=new jT(z,ye,Vt,Yt,de,wt,ge),Qe=new ob(D),N=new fb(D),E=new yy(z),ie=new ib(z,E),et=new hb(z,E,ge,ie),ft=new _b(z,et,E,ge),It=new gb(z,de,ae),Gt=new sb(Yt),pt=new NT(D,Qe,N,ye,de,ie,Gt),ct=new tA(D,Yt),Pt=new PT,Ut=new GT(ye),St=new nb(D,Qe,N,Vt,ft,M,m),kt=new XT(D,ft,de),V=new eA(z,ge,de,Vt),qt=new ab(z,ye,ge),jt=new pb(z,ye,ge),ge.programs=pt.programs,D.capabilities=de,D.extensions=ye,D.properties=Yt,D.renderLists=Pt,D.shadowMap=kt,D.state=Vt,D.info=ge}Nt();const bt=new JT(D,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(P,K,!1))},this.getSize=function(T){return T.set(P,K)},this.setSize=function(T,j,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,K=j,i.width=Math.floor(T*Y),i.height=Math.floor(j*Y),at===!0&&(i.style.width=T+"px",i.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(P*Y,K*Y).floor()},this.setDrawingBufferSize=function(T,j,at){P=T,K=j,Y=at,i.width=Math.floor(T*at),i.height=Math.floor(j*at),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(tt)},this.setViewport=function(T,j,at,rt){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,j,at,rt),Vt.viewport(F.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(xt)},this.setScissor=function(T,j,at,rt){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,j,at,rt),Vt.scissor(lt.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){Vt.setScissorTest(yt=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,at=!0){let rt=0;if(T){let Z=!1;if(W!==null){const Tt=W.texture.format;Z=Tt===rh||Tt===ah||Tt===ih}if(Z){const Tt=W.texture.type,Dt=Tt===Ri||Tt===xr||Tt===To||Tt===Ao||Tt===eh||Tt===nh,Ot=St.getClearColor(),Bt=St.getClearAlpha(),$t=Ot.r,Zt=Ot.g,Xt=Ot.b;Dt?(A[0]=$t,A[1]=Zt,A[2]=Xt,A[3]=Bt,z.clearBufferuiv(z.COLOR,0,A)):(w[0]=$t,w[1]=Zt,w[2]=Xt,w[3]=Bt,z.clearBufferiv(z.COLOR,0,w))}else rt|=z.COLOR_BUFFER_BIT}j&&(rt|=z.DEPTH_BUFFER_BIT),at&&(rt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),Pt.dispose(),Ut.dispose(),Yt.dispose(),Qe.dispose(),N.dispose(),ft.dispose(),ie.dispose(),V.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",rn),bt.removeEventListener("sessionend",vn),Ln.stop()};function zt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const T=ge.autoReset,j=kt.enabled,at=kt.autoUpdate,rt=kt.needsUpdate,Z=kt.type;Nt(),ge.autoReset=T,kt.enabled=j,kt.autoUpdate=at,kt.needsUpdate=rt,kt.type=Z}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ft(T){const j=T.target;j.removeEventListener("dispose",Ft),ne(j)}function ne(T){De(T),Yt.remove(T)}function De(T){const j=Yt.get(T).programs;j!==void 0&&(j.forEach(function(at){pt.releaseProgram(at)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,at,rt,Z,Tt){j===null&&(j=Le);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=ka(T,j,at,rt,Z);Vt.setMaterial(rt,Dt);let Bt=at.index,$t=1;if(rt.wireframe===!0){if(Bt=et.getWireframeAttribute(at),Bt===void 0)return;$t=2}const Zt=at.drawRange,Xt=at.attributes.position;let ce=Zt.start*$t,Ae=(Zt.start+Zt.count)*$t;Tt!==null&&(ce=Math.max(ce,Tt.start*$t),Ae=Math.min(Ae,(Tt.start+Tt.count)*$t)),Bt!==null?(ce=Math.max(ce,0),Ae=Math.min(Ae,Bt.count)):Xt!=null&&(ce=Math.max(ce,0),Ae=Math.min(Ae,Xt.count));const Ge=Ae-ce;if(Ge<0||Ge===1/0)return;ie.setup(Z,rt,Ot,at,Bt);let _e,ve=qt;if(Bt!==null&&(_e=E.get(Bt),ve=jt,ve.setIndex(_e)),Z.isMesh)rt.wireframe===!0?(Vt.setLineWidth(rt.wireframeLinewidth*me()),ve.setMode(z.LINES)):ve.setMode(z.TRIANGLES);else if(Z.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Vt.setLineWidth(Kt*me()),Z.isLineSegments?ve.setMode(z.LINES):Z.isLineLoop?ve.setMode(z.LINE_LOOP):ve.setMode(z.LINE_STRIP)}else Z.isPoints?ve.setMode(z.POINTS):Z.isSprite&&ve.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,qe=Z._multiDrawCounts,Me=Z._multiDrawCount,En=Bt?E.get(Bt).bytesPerElement:1,sa=Yt.get(rt).currentProgram.getUniforms();for(let Ve=0;Ve<Me;Ve++)sa.setValue(z,"_gl_DrawID",Ve),ve.render(Kt[Ve]/En,qe[Ve])}else if(Z.isInstancedMesh)ve.renderInstances(ce,Ge,Z.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,qe=Math.min(at.instanceCount,Kt);ve.renderInstances(ce,Ge,qe)}else ve.render(ce,Ge)};function Ee(T,j,at){T.transparent===!0&&T.side===bi&&T.forceSinglePass===!1?(T.side=Fn,T.needsUpdate=!0,aa(T,j,at),T.side=Ba,T.needsUpdate=!0,aa(T,j,at),T.side=bi):aa(T,j,at)}this.compile=function(T,j,at=null){at===null&&(at=T),_=Ut.get(at),_.init(j),L.push(_),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),T!==at&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const rt=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];Ee(Ot,at,Z),rt.add(Ot)}else Ee(Tt,at,Z),rt.add(Tt)}),_=L.pop(),rt},this.compileAsync=function(T,j,at=null){const rt=this.compile(T,j,at);return new Promise(Z=>{function Tt(){if(rt.forEach(function(Dt){Yt.get(Dt).currentProgram.isReady()&&rt.delete(Dt)}),rt.size===0){Z(T);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Gn=null;function fn(T){Gn&&Gn(T)}function rn(){Ln.stop()}function vn(){Ln.start()}const Ln=new M0;Ln.setAnimationLoop(fn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(T){Gn=T,bt.setAnimationLoop(T),T===null?Ln.stop():Ln.start()},bt.addEventListener("sessionstart",rn),bt.addEventListener("sessionend",vn),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,j,W),_=Ut.get(T,L.length),_.init(j),L.push(_),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,mt=Gt.init(this.clippingPlanes,Mt),y=Pt.get(T,I.length),y.init(),I.push(y),bt.enabled===!0&&bt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Ga(Tt,j,-1/0,D.sortObjects)}Ga(T,j,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Et,U),Be=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Be&&St.addToRenderList(y,T),this.info.render.frame++,mt===!0&&Gt.beginShadows();const at=_.state.shadowsArray;kt.render(at,T,j),mt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,Z=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Z.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const Bt=Tt[Dt];Io(rt,Z,T,Bt)}Be&&St.render(T);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const Bt=Tt[Dt];Po(y,T,Bt,Bt.viewport)}}else Z.length>0&&Io(rt,Z,T,j),Be&&St.render(T),Po(y,T,j);W!==null&&B===0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W)),T.isScene===!0&&T.onAfterRender(D,T,j),ie.resetDefaultState(),C=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],mt===!0&&Gt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ga(T,j,at,rt){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)at=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){rt&&Qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ct);const Dt=ft.update(T),Ot=T.material;Ot.visible&&y.push(T,Dt,Ot,at,Qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const Dt=ft.update(T),Ot=T.material;if(rt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qt.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Qt.copy(Dt.boundingSphere.center)),Qt.applyMatrix4(T.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ot)){const Bt=Dt.groups;for(let $t=0,Zt=Bt.length;$t<Zt;$t++){const Xt=Bt[$t],ce=Ot[Xt.materialIndex];ce&&ce.visible&&y.push(T,Dt,ce,at,Qt.z,Xt)}}else Ot.visible&&y.push(T,Dt,Ot,at,Qt.z,null)}}const Tt=T.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)Ga(Tt[Dt],j,at,rt)}function Po(T,j,at,rt){const Z=T.opaque,Tt=T.transmissive,Dt=T.transparent;_.setupLightsView(at),mt===!0&&Gt.setGlobalState(D.clippingPlanes,at),rt&&Vt.viewport(F.copy(rt)),Z.length>0&&Va(Z,j,at),Tt.length>0&&Va(Tt,j,at),Dt.length>0&&Va(Dt,j,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Io(T,j,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new Sr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Co:Ri,minFilter:_r,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||F;Tt.setSize(Dt.z*D.transmissionResolutionScale,Dt.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(vt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Be&&St.render(at);const Bt=D.toneMapping;D.toneMapping=za;const $t=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),mt===!0&&Gt.setGlobalState(D.clippingPlanes,rt),Va(T,at,rt),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Xt=0,ce=j.length;Xt<ce;Xt++){const Ae=j[Xt],Ge=Ae.object,_e=Ae.geometry,ve=Ae.material,Kt=Ae.group;if(ve.side===bi&&Ge.layers.test(rt.layers)){const qe=ve.side;ve.side=Fn,ve.needsUpdate=!0,ia(Ge,at,rt,_e,ve,Kt),ve.side=qe,ve.needsUpdate=!0,Zt=!0}}Zt===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Ot),D.setClearColor(vt,ht),$t!==void 0&&(rt.viewport=$t),D.toneMapping=Bt}function Va(T,j,at){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Tt=T.length;Z<Tt;Z++){const Dt=T[Z],Ot=Dt.object,Bt=Dt.geometry,$t=Dt.group;let Zt=Dt.material;Zt.allowOverride===!0&&rt!==null&&(Zt=rt),Ot.layers.test(at.layers)&&ia(Ot,j,at,Bt,Zt,$t)}}function ia(T,j,at,rt,Z,Tt){T.onBeforeRender(D,j,at,rt,Z,Tt),T.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(D,j,at,rt,T,Tt),Z.transparent===!0&&Z.side===bi&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,D.renderBufferDirect(at,j,rt,Z,T,Tt),Z.side=Ba,Z.needsUpdate=!0,D.renderBufferDirect(at,j,rt,Z,T,Tt),Z.side=bi):D.renderBufferDirect(at,j,rt,Z,T,Tt),T.onAfterRender(D,j,at,rt,Z,Tt)}function aa(T,j,at){j.isScene!==!0&&(j=Le);const rt=Yt.get(T),Z=_.state.lights,Tt=_.state.shadowsArray,Dt=Z.state.version,Ot=pt.getParameters(T,Z.state,Tt,j,at),Bt=pt.getProgramCacheKey(Ot);let $t=rt.programs;rt.environment=T.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(T.isMeshStandardMaterial?N:Qe).get(T.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",Ft),$t=new Map,rt.programs=$t);let Zt=$t.get(Bt);if(Zt!==void 0){if(rt.currentProgram===Zt&&rt.lightsStateVersion===Dt)return Di(T,Ot),Zt}else Ot.uniforms=pt.getUniforms(T),T.onBeforeCompile(Ot,D),Zt=pt.acquireProgram(Ot,Bt),$t.set(Bt,Zt),rt.uniforms=Ot.uniforms;const Xt=rt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Di(T,Ot),rt.needsLights=tn(T),rt.lightsStateVersion=Dt,rt.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=Zt,rt.uniformsList=null,Zt}function Ci(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=vc.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Di(T,j){const at=Yt.get(T);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function ka(T,j,at,rt,Z){j.isScene!==!0&&(j=Le),ae.resetTextureUnits();const Tt=j.fog,Dt=rt.isMeshStandardMaterial?j.environment:null,Ot=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ss,Bt=(rt.isMeshStandardMaterial?N:Qe).get(rt.envMap||Dt),$t=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Zt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,Ae=!!at.morphAttributes.color;let Ge=za;rt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const _e=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ve=_e!==void 0?_e.length:0,Kt=Yt.get(rt),qe=_.state.lights;if(mt===!0&&(Mt===!0||T!==R)){const dn=T===R&&rt.id===C;Gt.setState(rt,T,dn)}let Me=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==qe.state.version||Kt.outputColorSpace!==Ot||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Bt||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Zt||Kt.morphTargets!==Xt||Kt.morphNormals!==ce||Kt.morphColors!==Ae||Kt.toneMapping!==Ge||Kt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,Kt.__version=rt.version);let En=Kt.currentProgram;Me===!0&&(En=aa(rt,j,Z));let sa=!1,Ve=!1,Ni=!1;const Fe=En.getUniforms(),bn=Kt.uniforms;if(Vt.useProgram(En.program)&&(sa=!0,Ve=!0,Ni=!0),rt.id!==C&&(C=rt.id,Ve=!0),sa||R!==T){Vt.buffers.depth.getReversed()?(Rt.copy(T.projectionMatrix),IS(Rt),zS(Rt),Fe.setValue(z,"projectionMatrix",Rt)):Fe.setValue(z,"projectionMatrix",T.projectionMatrix),Fe.setValue(z,"viewMatrix",T.matrixWorldInverse);const xn=Fe.map.cameraPosition;xn!==void 0&&xn.setValue(z,oe.setFromMatrixPosition(T.matrixWorld)),de.logarithmicDepthBuffer&&Fe.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Fe.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Ve=!0,Ni=!0)}if(Z.isSkinnedMesh){Fe.setOptional(z,Z,"bindMatrix"),Fe.setOptional(z,Z,"bindMatrixInverse");const dn=Z.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Fe.setValue(z,"boneTexture",dn.boneTexture,ae))}Z.isBatchedMesh&&(Fe.setOptional(z,Z,"batchingTexture"),Fe.setValue(z,"batchingTexture",Z._matricesTexture,ae),Fe.setOptional(z,Z,"batchingIdTexture"),Fe.setValue(z,"batchingIdTexture",Z._indirectTexture,ae),Fe.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Fe.setValue(z,"batchingColorTexture",Z._colorsTexture,ae));const sn=at.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&It.update(Z,at,En),(Ve||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Fe.setValue(z,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(bn.envMap.value=Bt,bn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(bn.envMapIntensity.value=j.environmentIntensity),Ve&&(Fe.setValue(z,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&ra(bn,Ni),Tt&&rt.fog===!0&&ct.refreshFogUniforms(bn,Tt),ct.refreshMaterialUniforms(bn,rt,Y,K,_.state.transmissionRenderTarget[T.id]),vc.upload(z,Ci(Kt),bn,ae)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(vc.upload(z,Ci(Kt),bn,ae),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Fe.setValue(z,"center",Z.center),Fe.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Fe.setValue(z,"normalMatrix",Z.normalMatrix),Fe.setValue(z,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const dn=rt.uniformsGroups;for(let xn=0,_i=dn.length;xn<_i;xn++){const Li=dn[xn];V.update(Li,En),V.bind(Li,En)}}return En}function ra(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,j,at){const rt=Yt.get(T);rt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Yt.get(T.texture).__webglTexture=j,Yt.get(T.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const at=Yt.get(T);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const zo=z.createFramebuffer();this.setRenderTarget=function(T,j=0,at=0){W=T,X=j,B=at;let rt=!0,Z=null,Tt=!1,Dt=!1;if(T){const Bt=Yt.get(T);if(Bt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(z.FRAMEBUFFER,null),rt=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(Bt.__hasExternalTextures)ae.rebindTextures(T,Yt.get(T.texture).__webglTexture,Yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xt=T.depthTexture;if(Bt.__boundDepthTexture!==Xt){if(Xt!==null&&Yt.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const Zt=Yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?Z=Zt[j][at]:Z=Zt[j],Tt=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?Z=Yt.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?Z=Zt[at]:Z=Zt,F.copy(T.viewport),lt.copy(T.scissor),ot=T.scissorTest}else F.copy(tt).multiplyScalar(Y).floor(),lt.copy(xt).multiplyScalar(Y).floor(),ot=yt;if(at!==0&&(Z=zo),Vt.bindFramebuffer(z.FRAMEBUFFER,Z)&&rt&&Vt.drawBuffers(T,Z),Vt.viewport(F),Vt.scissor(lt),Vt.setScissorTest(ot),Tt){const Bt=Yt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,at)}else if(Dt){const Bt=Yt.get(T.texture),$t=j;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,at,$t)}else if(T!==null&&at!==0){const Bt=Yt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(T,j,at,rt,Z,Tt,Dt,Ot=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Vt.bindFramebuffer(z.FRAMEBUFFER,Bt);try{const $t=T.textures[Ot],Zt=$t.format,Xt=$t.type;if(!de.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-rt&&at>=0&&at<=T.height-Z&&(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(j,at,rt,Z,wt.convert(Zt),wt.convert(Xt),Tt))}finally{const $t=W!==null?Yt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,j,at,rt,Z,Tt,Dt,Ot=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(j>=0&&j<=T.width-rt&&at>=0&&at<=T.height-Z){Vt.bindFramebuffer(z.FRAMEBUFFER,Bt);const $t=T.textures[Ot],Zt=$t.format,Xt=$t.type;if(!de.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(j,at,rt,Z,wt.convert(Zt),wt.convert(Xt),0);const Ae=W!==null?Yt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(z.FRAMEBUFFER,Ae);const Ge=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await PS(z,Ge,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(ce),z.deleteSync(Ge),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,at=0){const rt=Math.pow(2,-at),Z=Math.floor(T.image.width*rt),Tt=Math.floor(T.image.height*rt),Dt=j!==null?j.x:0,Ot=j!==null?j.y:0;ae.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,at,0,0,Dt,Ot,Z,Tt),Vt.unbindTexture()};const Bo=z.createFramebuffer(),Ui=z.createFramebuffer();this.copyTextureToTexture=function(T,j,at=null,rt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Dt,Ot,Bt,$t,Zt,Xt,ce,Ae,Ge;const _e=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(at!==null)Dt=at.max.x-at.min.x,Ot=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,Zt=at.min.y,Xt=at.isBox3?at.min.z:0;else{const sn=Math.pow(2,-Z);Dt=Math.floor(_e.width*sn),Ot=Math.floor(_e.height*sn),T.isDataArrayTexture?Bt=_e.depth:T.isData3DTexture?Bt=Math.floor(_e.depth*sn):Bt=1,$t=0,Zt=0,Xt=0}rt!==null?(ce=rt.x,Ae=rt.y,Ge=rt.z):(ce=0,Ae=0,Ge=0);const ve=wt.convert(j.format),Kt=wt.convert(j.type);let qe;j.isData3DTexture?(ae.setTexture3D(j,0),qe=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ae.setTexture2DArray(j,0),qe=z.TEXTURE_2D_ARRAY):(ae.setTexture2D(j,0),qe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const Me=z.getParameter(z.UNPACK_ROW_LENGTH),En=z.getParameter(z.UNPACK_IMAGE_HEIGHT),sa=z.getParameter(z.UNPACK_SKIP_PIXELS),Ve=z.getParameter(z.UNPACK_SKIP_ROWS),Ni=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_e.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,Zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xt);const Fe=T.isDataArrayTexture||T.isData3DTexture,bn=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const sn=Yt.get(T),dn=Yt.get(j),xn=Yt.get(sn.__renderTarget),_i=Yt.get(dn.__renderTarget);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,xn.__webglFramebuffer),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Li=0;Li<Bt;Li++)Fe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Yt.get(T).__webglTexture,Z,Xt+Li),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Yt.get(j).__webglTexture,Tt,Ge+Li)),z.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||Yt.has(T)){const sn=Yt.get(T),dn=Yt.get(j);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,Bo),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ui);for(let xn=0;xn<Bt;xn++)Fe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,sn.__webglTexture,Z,Xt+xn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,sn.__webglTexture,Z),bn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,Tt,Ge+xn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,Tt),Z!==0?z.blitFramebuffer($t,Zt,Dt,Ot,ce,Ae,Dt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):bn?z.copyTexSubImage3D(qe,Tt,ce,Ae,Ge+xn,$t,Zt,Dt,Ot):z.copyTexSubImage2D(qe,Tt,ce,Ae,$t,Zt,Dt,Ot);Vt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else bn?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(qe,Tt,ce,Ae,Ge,Dt,Ot,Bt,ve,Kt,_e.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(qe,Tt,ce,Ae,Ge,Dt,Ot,Bt,ve,_e.data):z.texSubImage3D(qe,Tt,ce,Ae,Ge,Dt,Ot,Bt,ve,Kt,_e):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,ve,Kt,_e.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,ce,Ae,_e.width,_e.height,ve,_e.data):z.texSubImage2D(z.TEXTURE_2D,Tt,ce,Ae,Dt,Ot,ve,Kt,_e);z.pixelStorei(z.UNPACK_ROW_LENGTH,Me),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,En),z.pixelStorei(z.UNPACK_SKIP_PIXELS,sa),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ve),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ni),Tt===0&&j.generateMipmaps&&z.generateMipmap(qe),Vt.unbindTexture()},this.copyTextureToTexture3D=function(T,j,at=null,rt=null,Z=0){return ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,j,at,rt,Z)},this.initRenderTarget=function(T){Yt.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),Vt.unbindTexture()},this.resetState=function(){X=0,B=0,W=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),X_=o=>{const e=aA(o);return e.charAt(0).toUpperCase()+e.slice(1)},R0=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=Nn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...h},m)=>Nn.createElement("svg",{ref:m,...rA,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:R0("lucide",l),...h},[...d.map(([p,g])=>Nn.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=(o,e)=>{const i=Nn.forwardRef(({className:r,...l},u)=>Nn.createElement(sA,{ref:u,iconNode:e,className:R0(`lucide-${iA(X_(o))}`,`lucide-${o}`,r),...l}));return i.displayName=X_(o),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],W_=oA("github",lA);function cA({title:o,description:e,image:i,githubURL:r,tags:l=[]}){return H.jsxs("div",{className:"bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100",children:[H.jsxs("div",{className:"relative",children:[H.jsx("img",{src:i,alt:o,className:"w-full h-48 object-cover"}),H.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300",children:r&&H.jsx("div",{className:"absolute bottom-4 right-4",children:H.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors shadow-lg","aria-label":"View on GitHub",children:H.jsx(W_,{size:20})})})})]}),H.jsxs("div",{className:"p-5",children:[H.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:o}),l.length>0&&H.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:l.map((u,d)=>H.jsx("span",{className:"px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full",children:u},d))}),H.jsx("p",{className:"text-gray-600",children:e}),r&&H.jsx("div",{className:"mt-4",children:H.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm",children:[H.jsx(W_,{size:18,className:"mr-2"}),"View Project"]})})]})]})}function uA({title:o,description:e,image:i}){return H.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-md",children:[H.jsx("div",{className:"relative aspect-square overflow-hidden",children:H.jsx("img",{src:i,alt:o,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105",loading:"lazy"})}),H.jsxs("div",{className:"p-4",children:[H.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:o}),H.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 line-clamp-3",children:e})]})]})}const q_={image:"assets/me.jpg",title:"Patiphan Akkahadsri"},fA="I am a student at KMITL, majoring in Information Technology on Software Development module.",j_=["Linear Algebra","Calculus","Discrete Mathematics","Probability and Statistics","Differential Geometry","Information Theory","Vector Calculus","Numerical Analysis","Optimization","Image Processing","Computer Vision","Digital Signal Processing"],ds=["I am a currently a student at School of Information Technology, King Mongkut's Institute of Technology Ladkrabang (KMITL).","Throughout my time at KMITL, I've developed a strong interest in the mathematical foundations of computer science. I particularly enjoy subjects","Driven by curiosity, I've explored more advanced topics such as",`I'm also familiar with Unix-based systems like macOS and Linux. 
    I often work in a dual-boot environment using both Windows and Ubuntu, 
    which gives me flexibility across different development ecosystems.`,`Not only I enjoy mathematics, but I also have a passion for coding.
    Not only do I enjoy mathematics, but I'm also passionate about coding.
I'm actively working on improving my skills by learning fundamental concepts like 
object-oriented programming (OOP), data structures, algorithms, functional programming, and web development.`,` love diving into the underlying mechanics of how things work and understanding the reasons behind certain approaches not just how they work, but why we do things a certain way. 
This deeper understanding helps me not only apply what I learn but also innovate and make informed decisions in my coding journey.`],Y_=["bg-gradient-to-r from-purple-500 to-pink-500 text-white","bg-gradient-to-r from-blue-500 to-cyan-500 text-white","bg-gradient-to-r from-green-500 to-teal-500 text-white","bg-gradient-to-r from-orange-500 to-red-500 text-white","bg-gradient-to-r from-indigo-500 to-purple-500 text-white","bg-gradient-to-r from-pink-500 to-rose-500 text-white","bg-gradient-to-r from-cyan-500 to-blue-500 text-white","bg-gradient-to-r from-teal-500 to-green-500 text-white","bg-gradient-to-r from-yellow-500 to-orange-500 text-white","bg-gradient-to-r from-red-500 to-pink-500 text-white","bg-gradient-to-r from-violet-500 to-purple-500 text-white","bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"];function Z_({topic:o,colorClass:e}){return H.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-200 ${e}`,children:o})}function dA(){const o=Nn.useRef(),[e,i]=Ox.useState(null);return Nn.useEffect(()=>{try{if(!o.current)return;const r=setTimeout(()=>{if(!o.current)return;const l=o.current.clientWidth||400,u=o.current.clientHeight||300,d=new cy,h=new si(45,l/u,.1,100);h.position.set(0,-10,10),h.lookAt(0,0,0);const m=new nA({antialias:!0,alpha:!0});for(m.setSize(l,u),m.setClearColor(0,0);o.current.firstChild;)o.current.removeChild(o.current.firstChild);o.current.appendChild(m.domElement);const p=new vy(16777215,.8);d.add(p);const g=new _y(16777215,1);g.position.set(5,5,5),d.add(g);const v=3,S=3,M=50,A=6,w=new Ha,y=[];for(let W=0;W<=M;W++){const C=W/M*A-A/2;for(let R=0;R<=M;R++){const F=R/M*A-A/2,lt=F*F/(S*S)-C*C/(v*v);y.push(C,F,lt)}}const _=new Float32Array(y);w.setAttribute("position",new gi(_,3));const I=[];for(let W=0;W<M;W++)for(let C=0;C<M;C++){const R=W*(M+1)+C,F=W*(M+1)+C+1,lt=(W+1)*(M+1)+C,ot=(W+1)*(M+1)+C+1;I.push(R,F,ot),I.push(R,ot,lt)}w.setIndex(I),w.computeVertexNormals();const L=new dy({color:5932799,side:bi,flatShading:!1,transparent:!0,opacity:.85}),D=new Ai(w,L);d.add(D);let k;const X=()=>{o.current&&(k=requestAnimationFrame(X),D.rotation.z+=.005,D.rotation.x+=.002,m.render(d,h))};X();const B=()=>{if(!o.current)return;const W=o.current.clientWidth||400,C=o.current.clientHeight||300;h.aspect=W/C,h.updateProjectionMatrix(),m.setSize(W,C)};window.addEventListener("resize",B),o.current._cleanup=()=>{window.removeEventListener("resize",B),k&&cancelAnimationFrame(k),o.current&&m.domElement&&o.current.contains(m.domElement)&&o.current.removeChild(m.domElement),w.dispose(),L.dispose(),m.dispose()}},100);return()=>{clearTimeout(r),o.current&&o.current._cleanup&&o.current._cleanup()}}catch(r){console.error("Error in HyperbolicParaboloid:",r),i(r.message)}},[]),e?H.jsx("div",{style:{width:"100%",height:"300px",borderRadius:"16px",background:"linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",overflow:"hidden",border:"2px solid rgba(90, 134, 255, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",textAlign:"center",padding:"20px"},children:H.jsxs("div",{children:[H.jsx("div",{className:"text-lg mb-2",children:"⚠️ 3D Visualization Error"}),H.jsx("div",{className:"text-sm opacity-75",children:"Mathematical equations shown below"})]})}):H.jsx("div",{ref:o,style:{width:"100%",height:"300px",borderRadius:"16px",background:"linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",overflow:"hidden",border:"2px solid rgba(90, 134, 255, 0.3)"}})}function hA(){return H.jsxs("div",{className:"space-y-6",children:[H.jsxs("div",{className:"bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700",children:[H.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[H.jsx("span",{className:"text-2xl mr-2",children:"📐"}),"Hyperbolic Paraboloid Equation"]}),H.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-center text-lg border shadow-sm",children:[H.jsx("div",{className:"text-blue-600 dark:text-blue-400 font-bold",children:"z = y²/b² - x²/a²"}),H.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:"where a = 3, b = 3"})]})]}),H.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700",children:[H.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[H.jsx("span",{className:"text-2xl mr-2",children:"📏"}),"Surface Area Analysis"]}),H.jsxs("div",{className:"space-y-3",children:[H.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:H.jsx("div",{className:"font-mono text-sm",children:H.jsx("div",{className:"text-green-600 dark:text-green-400 font-bold",children:"∂z/∂x = -2x/a², ∂z/∂y = 2y/b²"})})}),H.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:H.jsx("div",{className:"font-mono text-sm",children:H.jsx("div",{className:"text-green-600 dark:text-green-400 font-bold",children:"dS = √(1 + (∂z/∂x)² + (∂z/∂y)²) dx dy"})})}),H.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:H.jsx("div",{className:"font-mono text-sm",children:H.jsx("div",{className:"text-green-600 dark:text-green-400 font-bold",children:"dS = √(1 + 4x²/9 + 4y²/9) dx dy"})})})]})]}),H.jsxs("div",{className:"bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700",children:[H.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[H.jsx("span",{className:"text-2xl mr-2",children:"📊"}),"Volume Under Surface"]}),H.jsxs("div",{className:"space-y-3",children:[H.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:H.jsx("div",{className:"font-mono text-sm",children:H.jsx("div",{className:"text-orange-600 dark:text-orange-400 font-bold",children:"V = ∫∫ |y²/9 - x²/9| dx dy"})})}),H.jsx("div",{className:"bg-white dark:bg-gray-800 p-3 rounded-lg",children:H.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Region: [-3, 3] × [-3, 3]"})}),H.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[H.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-center",children:[H.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Positive Volume"}),H.jsx("div",{className:"font-bold text-blue-600 dark:text-blue-400",children:"≈ 24 units³"})]}),H.jsxs("div",{className:"bg-red-50 dark:bg-red-900/30 p-3 rounded-lg text-center",children:[H.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Negative Volume"}),H.jsx("div",{className:"font-bold text-red-600 dark:text-red-400",children:"≈ -24 units³"})]})]})]})]}),H.jsxs("div",{className:"bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700",children:[H.jsxs("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center",children:[H.jsx("span",{className:"text-2xl mr-2",children:"⚡"}),"Mathematical Properties"]}),H.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[H.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[H.jsx("div",{className:"font-semibold text-purple-600 dark:text-purple-400 mb-2",children:"Curvature"}),H.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Saddle point at origin",H.jsx("br",{}),"Gaussian curvature: K = -4/(9(1 + 4r²/9)²)"]})]}),H.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg",children:[H.jsx("div",{className:"font-semibold text-purple-600 dark:text-purple-400 mb-2",children:"Asymptotes"}),H.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Hyperbolic curves:",H.jsx("br",{}),"y = ±x (when z = 0)"]})]})]})]})]})}function pA(){return H.jsxs("div",{className:"max-w-3xl mx-auto p-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-3xl shadow-2xl space-y-8 border border-gray-100 dark:border-gray-700",children:[H.jsxs("div",{className:"text-center mb-8",children:[H.jsx("h2",{className:"text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2",children:"About Me"}),H.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"})]}),H.jsx("div",{className:"bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700",children:H.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ds[0]})}),H.jsxs("div",{className:"bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 p-6 rounded-2xl border border-green-200 dark:border-green-700",children:[H.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4",children:ds[1]}),H.jsx("div",{className:"flex flex-wrap gap-2",children:j_.slice(0,4).map((o,e)=>H.jsx(Z_,{topic:o,colorClass:Y_[e]},o))})]}),H.jsxs("div",{className:"bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700",children:[H.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4",children:ds[2]}),H.jsx("div",{className:"flex flex-wrap gap-2",children:j_.slice(4).map((o,e)=>H.jsx(Z_,{topic:o,colorClass:Y_[e+4]},o))})]}),H.jsx("div",{className:"bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700",children:H.jsxs("div",{className:"flex items-start gap-4",children:[H.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center",children:H.jsx("span",{className:"text-2xl",children:"💻"})}),H.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ds[3]})]})}),H.jsx("div",{className:"bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-700",children:H.jsxs("div",{className:"flex items-start gap-4",children:[H.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center",children:H.jsx("span",{className:"text-2xl",children:"🚀"})}),H.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ds[4]})]})}),H.jsx("div",{className:"bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700",children:H.jsxs("div",{className:"flex items-start gap-4",children:[H.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center",children:H.jsx("span",{className:"text-2xl",children:"🧠"})}),H.jsx("p",{className:"text-gray-700 dark:text-gray-300 text-lg leading-relaxed",children:ds[5]})]})}),H.jsx("div",{className:"flex justify-center mt-8",children:H.jsxs("div",{className:"flex space-x-2",children:[H.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full animate-pulse"}),H.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"}),H.jsx("div",{className:"w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"})]})})]})}function mA(){return H.jsx("div",{className:"px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen py-12",children:H.jsxs("div",{className:"flex flex-col xl:flex-row xl:gap-8 gap-8 items-start justify-center",children:[H.jsx("div",{className:"w-full xl:w-[30%] flex justify-center",children:H.jsx("div",{className:"transform hover:scale-105 transition-transform duration-300",children:H.jsx(uA,{title:q_.title,description:fA,image:q_.image})})}),H.jsx("div",{className:"w-full xl:w-[35%] flex justify-center",children:H.jsx(pA,{})}),H.jsxs("div",{className:"w-full xl:w-[35%] space-y-6",children:[H.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl shadow-2xl",children:[H.jsx("h3",{className:"text-xl font-bold text-white mb-4 text-center",children:"🌊 Interactive Hyperbolic Paraboloid"}),H.jsx(dA,{})]}),H.jsx(hA,{})]})]})})}const gA=[{id:1,name:"Vue.js",logoUrl:"https://vuejs.org/images/logo.png"},{id:2,name:"TypeScript",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png"},{id:3,name:"Django Rest Framework",logoUrl:"https://www.django-rest-framework.org/img/logo.png"},{id:4,name:"Tailwind CSS",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg"},{id:5,name:"PostgreSQL",logoUrl:"https://www.postgresql.org/media/img/about/press/elephant.png"},{id:6,name:"MongoDB",logoUrl:"https://www.mongodb.com/assets/images/global/leaf.png"},{id:7,name:"Pytorch",logoUrl:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3qPNeH7GljKLjwxeeS3uqDHmrdaKgUPjNnCHBi5ggZs6x_TZJFU-FbG9_oCy-E0hH3rPaiGBwTEZw1NUX5C5zHHmfqhnFV37nxdGwRqE"},{id:8,name:"OpenCV",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/OpenCV_logo_black.svg/1200px-OpenCV_logo_black.svg.png"},{id:9,name:"Fiber",logoUrl:"https://avatars.githubusercontent.com/u/59947262?s=160&v=4"},{id:10,name:"Docker",logoUrl:"https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"},{id:11,name:"RabbitMQ",logoUrl:"https://www.rabbitmq.com/assets/files/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg"},{id:12,name:"Numpy",logoUrl:"https://numpy.org/images/logo.svg"},{id:13,name:"Git",logoUrl:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"},{id:14,name:"DaisyUI",logoUrl:"https://images.seeklogo.com/logo-png/55/1/daisyui-logo-png_seeklogo-554509.png"},{id:15,name:"Swagger",logoUrl:"https://logowik.com/content/uploads/images/swagger6360.jpg"},{id:16,name:"AWS",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"}];function _A(){return H.jsx("div",{className:"container mx-auto px-4 py-8",children:H.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",children:gA.map(o=>H.jsx("div",{className:"bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-center justify-center h-32 transition-all duration-300 hover:scale-105 hover:shadow-lg",children:H.jsx("img",{src:o.logoUrl,alt:`${o.name} logo`,className:"max-h-16 max-w-full",onError:e=>{e.target.src="/api/placeholder/150/80",e.target.alt=o.name}})},o.id))})})}const vA=[{id:1,name:"Python",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",proficiency:80,description:"I know about basic syntax, data types, control flow, functions, and modules. I have experience with libraries like NumPy, Pandas, SciPy, OpenCV, Pytorch ,and Matplotlib. I also have some experience with web frameworks like FastAPI and Django."},{id:2,name:"JavaScript",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",proficiency:40,description:"I have a good understanding of JavaScript, and a little bit of ES6 ECMA6. I have used frameworks like React and Vue.js for building user interfaces."},{id:3,name:"Go",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",proficiency:35,description:`After hand-on a little bit of Go, I interested in Go because of its simplicity and performance. 
        So I have been learning Go for a while by Tour of Go and Coding it from scratch to work with file system.`},{id:4,name:"Bash & Shell Script",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/1200px-Gnu-bash-logo.svg.png",proficiency:15,description:"Linux is my main OS. So I was using bash and shell script to automate my work such as basic commands, file manipulation, cornjob,and scripting."},{id:5,name:"C",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",proficiency:20,description:`
        At school and 42Bangkok, I learned C programming, using unixstd.h and libc to interact with the file system. This helped me understand how file systems and the kernel work at a low level.
        `},{id:6,name:"Rust",logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",proficiency:8,description:`After the trend of rewriting system 
        I start learning rust from scratch because of I interestend on it performane green software engineering  `}];function xA(){return H.jsx("div",{className:"container mx-auto p-4",children:H.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:vA.map(o=>H.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg",children:[H.jsx("div",{className:"flex items-center justify-center mb-4",children:H.jsx("img",{src:o.logoUrl,alt:`${o.name} logo`,className:"h-16 w-auto"})}),H.jsx("h3",{className:"text-xl font-semibold text-center mb-2",children:o.name}),H.jsxs("div",{className:"relative pt-1",children:[H.jsxs("div",{className:"flex mb-2 items-center justify-between",children:[H.jsx("span",{className:"text-sm font-semibold",children:o.name}),H.jsxs("span",{className:"text-sm font-semibold",children:[o.proficiency,"%"]})]}),H.jsx("div",{className:"flex mb-2",children:H.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:H.jsx("div",{className:"bg-blue-600 h-2 rounded-full",style:{width:`${o.proficiency}%`}})})})]}),H.jsx("p",{className:"text-gray-600 text-sm ",children:o.description})]},o.id))})})}function SA(){return H.jsx(H.Fragment,{children:H.jsxs("div",{className:"text-center",children:[H.jsx("h2",{className:"text-4xl font-bold",children:"My Skills on Tool"}),H.jsx(_A,{}),H.jsx("h2",{className:"text-4xl font-bold",children:"How I rate my core skills"}),H.jsx(xA,{})]})})}const yA=[{title:"Lend System",description:`A system for lending and borrowing items. developed with Django Rest and Vue 3.
        This project is monolithic and using Rest API. It is a simple system for lending and borrowing items. this code is not good so I will rewrite it in the future.`,image:"https://picsum.photos/seed/picsum/200/300",githubURL:"https://github.com/PatiphanAK/lend_sys"},{title:"Quiz App",description:`A quiz application inspired by Kahoot. Developed with Fiber, Gorilla Websocket and Nuxt 3. connect with Google OAuth2.0
         Implemented secure authentication via HTTP cookies.`,image:"assets/project/quiz.png",githubURL:"https://github.com/PatiphanAK/leauge-of-quiz"}];function MA(){return H.jsxs("div",{className:"text-center",children:[H.jsx("h2",{className:"text-4xl font-bold",children:"Projects"}),H.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mt-4 px-4",children:yA.map((o,e)=>H.jsx(cA,{title:o.title,description:o.description,image:o.image,githubURL:o.githubURL},e))})]})}const EA=[{id:1,image:"https://www.hr.kmitl.ac.th/wp-content/uploads/2020/08/cropped-kmitl-logoThai.png",degrees:"Bachelor of Science in Information Technology",school:"School of Information Technology, King Mongkut's Institute of Technology Ladkrabang",year:"2022 - Present",details:["Major in Information Technology"]}];function bA({image:o,degrees:e,school:i,year:r,gpa:l,details:u}){return H.jsx("div",{className:"bg-base-100 p-6 rounded-lg shadow-md",children:H.jsxs("div",{className:"flex flex-col sm:flex-row gap-6",children:[H.jsx("div",{className:"flex-shrink-0 flex items-center justify-center",children:H.jsx("img",{src:o||"/api/placeholder/200/200",alt:`${i} logo`,className:"w-32 h-32 object-contain"})}),H.jsxs("div",{className:"flex-grow",children:[H.jsx("h3",{className:"text-xl font-bold text-primary",children:e}),H.jsx("p",{className:"text-lg mt-1",children:i}),H.jsx("p",{className:"mt-2",children:r}),l&&H.jsxs("p",{className:"font-medium",children:["GPA ",l]}),u&&u.length>0&&H.jsx("ul",{className:"mt-2 list-disc pl-5 space-y-1",children:u.map((d,h)=>H.jsx("li",{children:d},h))})]})]})})}function TA(){return H.jsxs("div",{className:"py-8",children:[H.jsx("h2",{className:"text-3xl font-bold text-center mb-8",children:"My Education"}),H.jsx("div",{className:"max-w-3xl mx-auto space-y-6",children:EA.map(o=>H.jsx(bA,{image:o.image,degrees:o.degrees,school:o.school,year:o.year,gpa:o.gpa,details:o.details},o.id))})]})}const AA=[{id:1,platform:"Email",icon:"https://www.svgrepo.com/show/14478/email.svg",contact:"pakkahadsri@gmail.com"},{id:2,platform:"LinkedIn",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",contact:"https://www.linkedin.com/in/patiphan-akkahadsri-959535271/"},{id:3,facebook:"Facebook",icon:"https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid",contact:"https://www.facebook.com/profile.php?id=100009448836193&locale=th_TH"}];function RA(){return H.jsx("div",{className:"container mx-auto px-4 py-8",children:H.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6",children:AA.map(o=>H.jsxs("a",{href:o.contact.startsWith("http")?o.contact:`mailto:${o.contact}`,target:o.contact.startsWith("http")?"_blank":null,rel:"noopener noreferrer",className:"bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col items-center justify-center h-48",children:[H.jsx("img",{src:o.icon,alt:o.platform,className:"w-12 h-12 mb-4"}),H.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:o.platform}),H.jsx("p",{className:"text-gray-700 text-sm text-center",children:o.contact.startsWith("http")?"Visit Profile":o.contact})]},o.id))})})}function wA(){return H.jsxs("div",{className:"text-center",children:[H.jsx("h2",{className:"text-4xl font-bold",children:"Contact"}),H.jsx("p",{className:"mt-4",children:"Feel free to reach out to me!"}),H.jsx("p",{className:"mt-4",children:"That right on my stack I have hand-on vue but this portfolio I using react for learning new thing"}),H.jsx("div",{className:"mt-8",children:RA()})]})}const CA=[{id:"home",component:H.jsx(Wx,{})},{id:"about",component:H.jsx(mA,{})},{id:"framework",component:H.jsx(SA,{})},{id:"project",component:H.jsx(MA,{})},{id:"education",component:H.jsx(TA,{})},{id:"contact",component:H.jsx(wA,{})}];function DA(){return H.jsxs(H.Fragment,{children:[H.jsx(kx,{}),H.jsx("main",{className:"scroll-smooth",children:CA.map(({id:o,component:e})=>H.jsx("section",{id:o,className:o==="home"?"":"py-16",children:e},o))})]})}Gx.createRoot(document.getElementById("root")).render(H.jsx(Nn.StrictMode,{children:H.jsx(DA,{})}));
