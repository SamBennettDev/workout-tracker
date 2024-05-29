var Ed=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var E=(t,e,n)=>(Ed(t,e,"read from private field"),n?n.call(t):e.get(t)),F=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},O=(t,e,n,r)=>(Ed(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var ru=(t,e,n,r)=>({set _(i){O(t,e,i,n)},get _(){return E(t,e,r)}}),Y=(t,e,n)=>(Ed(t,e,"access private method"),n);function Xk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kw={exports:{}},ch={},Qw={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Il=Symbol.for("react.element"),Jk=Symbol.for("react.portal"),Zk=Symbol.for("react.fragment"),ex=Symbol.for("react.strict_mode"),tx=Symbol.for("react.profiler"),nx=Symbol.for("react.provider"),rx=Symbol.for("react.context"),ix=Symbol.for("react.forward_ref"),sx=Symbol.for("react.suspense"),ox=Symbol.for("react.memo"),ax=Symbol.for("react.lazy"),ov=Symbol.iterator;function lx(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var Gw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yw=Object.assign,Xw={};function go(t,e,n){this.props=t,this.context=e,this.refs=Xw,this.updater=n||Gw}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jw(){}Jw.prototype=go.prototype;function Pm(t,e,n){this.props=t,this.context=e,this.refs=Xw,this.updater=n||Gw}var Cm=Pm.prototype=new Jw;Cm.constructor=Pm;Yw(Cm,go.prototype);Cm.isPureReactComponent=!0;var av=Array.isArray,Zw=Object.prototype.hasOwnProperty,Rm={current:null},e1={key:!0,ref:!0,__self:!0,__source:!0};function t1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zw.call(e,r)&&!e1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Il,type:t,key:s,ref:o,props:i,_owner:Rm.current}}function ux(t,e){return{$$typeof:Il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Il}function cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lv=/\/+/g;function Td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cx(""+t.key):e.toString(36)}function Uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Il:case Jk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Td(o,0):r,av(i)?(n="",t!=null&&(n=t.replace(lv,"$&/")+"/"),Uu(i,e,n,"",function(u){return u})):i!=null&&(bm(i)&&(i=ux(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",av(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Td(s,a);o+=Uu(s,e,n,l,i)}else if(l=lx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Td(s,a++),o+=Uu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function iu(t,e,n){if(t==null)return t;var r=[],i=0;return Uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},ju={transition:null},dx={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:ju,ReactCurrentOwner:Rm};Z.Children={map:iu,forEach:function(t,e,n){iu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return iu(t,function(){e++}),e},toArray:function(t){return iu(t,function(e){return e})||[]},only:function(t){if(!bm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=go;Z.Fragment=Zk;Z.Profiler=tx;Z.PureComponent=Pm;Z.StrictMode=ex;Z.Suspense=sx;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zw.call(e,l)&&!e1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Il,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:rx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nx,_context:t},t.Consumer=t};Z.createElement=t1;Z.createFactory=function(t){var e=t1.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:ix,render:t}};Z.isValidElement=bm;Z.lazy=function(t){return{$$typeof:ax,_payload:{_status:-1,_result:t},_init:hx}};Z.memo=function(t,e){return{$$typeof:ox,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=ju.transition;ju.transition={};try{t()}finally{ju.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return pt.current.useCallback(t,e)};Z.useContext=function(t){return pt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return pt.current.useEffect(t,e)};Z.useId=function(){return pt.current.useId()};Z.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return pt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};Z.useRef=function(t){return pt.current.useRef(t)};Z.useState=function(t){return pt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return pt.current.useTransition()};Z.version="18.2.0";Qw.exports=Z;var I=Qw.exports;const hh=qw(I),fx=Xk({__proto__:null,default:hh},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=I,mx=Symbol.for("react.element"),gx=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,vx=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_x={key:!0,ref:!0,__self:!0,__source:!0};function n1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yx.call(e,r)&&!_x.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mx,type:t,key:s,ref:o,props:i,_owner:vx.current}}ch.Fragment=gx;ch.jsx=n1;ch.jsxs=n1;Kw.exports=ch;var _=Kw.exports,Sf={},r1={exports:{}},Dt={},i1={exports:{}},s1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,Q){var G=M.length;M.push(Q);e:for(;0<G;){var Ie=G-1>>>1,Ve=M[Ie];if(0<i(Ve,Q))M[Ie]=Q,M[G]=Ve,G=Ie;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var Q=M[0],G=M.pop();if(G!==Q){M[0]=G;e:for(var Ie=0,Ve=M.length,tu=Ve>>>1;Ie<tu;){var ti=2*(Ie+1)-1,wd=M[ti],ni=ti+1,nu=M[ni];if(0>i(wd,G))ni<Ve&&0>i(nu,wd)?(M[Ie]=nu,M[ni]=G,Ie=ni):(M[Ie]=wd,M[ti]=G,Ie=ti);else if(ni<Ve&&0>i(nu,G))M[Ie]=nu,M[ni]=G,Ie=ni;else break e}}return Q}function i(M,Q){var G=M.sortIndex-Q.sortIndex;return G!==0?G:M.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=M)r(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(u)}}function T(M){if(w=!1,g(M),!y)if(n(l)!==null)y=!0,vd(S);else{var Q=n(u);Q!==null&&_d(T,Q.startTime-M)}}function S(M,Q){y=!1,w&&(w=!1,m(N),N=-1),p=!0;var G=d;try{for(g(Q),h=n(l);h!==null&&(!(h.expirationTime>Q)||M&&!Gt());){var Ie=h.callback;if(typeof Ie=="function"){h.callback=null,d=h.priorityLevel;var Ve=Ie(h.expirationTime<=Q);Q=t.unstable_now(),typeof Ve=="function"?h.callback=Ve:h===n(l)&&r(l),g(Q)}else r(l);h=n(l)}if(h!==null)var tu=!0;else{var ti=n(u);ti!==null&&_d(T,ti.startTime-Q),tu=!1}return tu}finally{h=null,d=G,p=!1}}var C=!1,P=null,N=-1,U=5,B=-1;function Gt(){return!(t.unstable_now()-B<U)}function Ro(){if(P!==null){var M=t.unstable_now();B=M;var Q=!0;try{Q=P(!0,M)}finally{Q?bo():(C=!1,P=null)}}else C=!1}var bo;if(typeof f=="function")bo=function(){f(Ro)};else if(typeof MessageChannel<"u"){var sv=new MessageChannel,Yk=sv.port2;sv.port1.onmessage=Ro,bo=function(){Yk.postMessage(null)}}else bo=function(){v(Ro,0)};function vd(M){P=M,C||(C=!0,bo())}function _d(M,Q){N=v(function(){M(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,vd(S))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var Q=3;break;default:Q=d}var G=d;d=Q;try{return M()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var G=d;d=M;try{return Q()}finally{d=G}},t.unstable_scheduleCallback=function(M,Q,G){var Ie=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Ie+G:Ie):G=Ie,M){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=G+Ve,M={id:c++,callback:Q,priorityLevel:M,startTime:G,expirationTime:Ve,sortIndex:-1},G>Ie?(M.sortIndex=G,e(u,M),n(l)===null&&M===n(u)&&(w?(m(N),N=-1):w=!0,_d(T,G-Ie))):(M.sortIndex=Ve,e(l,M),y||p||(y=!0,vd(S))),M},t.unstable_shouldYield=Gt,t.unstable_wrapCallback=function(M){var Q=d;return function(){var G=d;d=Q;try{return M.apply(this,arguments)}finally{d=G}}}})(s1);i1.exports=s1;var wx=i1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=I,Nt=wx;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a1=new Set,wa={};function Wi(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(wa[t]=e,t=0;t<e.length;t++)a1.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,Ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uv={},cv={};function Tx(t){return Af.call(cv,t)?!0:Af.call(uv,t)?!1:Ex.test(t)?cv[t]=!0:(uv[t]=!0,!1)}function Ix(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sx(t,e,n,r){if(e===null||typeof e>"u"||Ix(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nm=/[\-:]([a-z])/g;function Om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nm,Om);Je[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nm,Om);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nm,Om);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dm(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sx(e,n,i,r)&&(n=null),r||i===null?Tx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,su=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),l1=Symbol.for("react.provider"),u1=Symbol.for("react.context"),Mm=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),Vm=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),c1=Symbol.for("react.offscreen"),hv=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=hv&&t[hv]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Id;function Bo(t){if(Id===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Id=e&&e[1]||""}return`
`+Id+t}var Sd=!1;function Ad(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function Ax(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=Ad(t.type,!1),t;case 11:return t=Ad(t.type.render,!1),t;case 1:return t=Ad(t.type,!0),t;default:return""}}function Cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case kf:return"Profiler";case Lm:return"StrictMode";case xf:return"Suspense";case Pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u1:return(t.displayName||"Context")+".Consumer";case l1:return(t._context.displayName||"Context")+".Provider";case Mm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vm:return e=t.displayName||null,e!==null?e:Cf(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Cf(t(e))}catch{}}return null}function kx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cf(e);case 8:return e===Lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xx(t){var e=h1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ou(t){t._valueTracker||(t._valueTracker=xx(t))}function d1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=h1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rf(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f1(t,e){e=e.checked,e!=null&&Dm(t,"checked",e,!1)}function bf(t,e){f1(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function Ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Ho(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function p1(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var au,g1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(au=au||document.createElement("div"),au.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=au.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Px=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){Px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function y1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function v1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=y1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Cx=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(Cx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=null;function Fm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,As=null,ks=null;function gv(t){if(t=kl(t)){if(typeof Ff!="function")throw Error(x(280));var e=t.stateNode;e&&(e=gh(e),Ff(t.stateNode,t.type,e))}}function _1(t){As?ks?ks.push(t):ks=[t]:As=t}function w1(){if(As){var t=As,e=ks;if(ks=As=null,gv(t),e)for(t=0;t<e.length;t++)gv(e[t])}}function E1(t,e){return t(e)}function T1(){}var kd=!1;function I1(t,e,n){if(kd)return t(e,n);kd=!0;try{return E1(t,e,n)}finally{kd=!1,(As!==null||ks!==null)&&(T1(),w1())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var r=gh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Uf=!1;if(Wn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Uf=!1}function Rx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var na=!1,lc=null,uc=!1,jf=null,bx={onError:function(t){na=!0,lc=t}};function Nx(t,e,n,r,i,s,o,a,l){na=!1,lc=null,Rx.apply(bx,arguments)}function Ox(t,e,n,r,i,s,o,a,l){if(Nx.apply(this,arguments),na){if(na){var u=lc;na=!1,lc=null}else throw Error(x(198));uc||(uc=!0,jf=u)}}function qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yv(t){if(qi(t)!==t)throw Error(x(188))}function Dx(t){var e=t.alternate;if(!e){if(e=qi(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yv(i),t;if(s===r)return yv(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function A1(t){return t=Dx(t),t!==null?k1(t):null}function k1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k1(t);if(e!==null)return e;t=t.sibling}return null}var x1=Nt.unstable_scheduleCallback,vv=Nt.unstable_cancelCallback,Lx=Nt.unstable_shouldYield,Mx=Nt.unstable_requestPaint,Se=Nt.unstable_now,Vx=Nt.unstable_getCurrentPriorityLevel,Um=Nt.unstable_ImmediatePriority,P1=Nt.unstable_UserBlockingPriority,cc=Nt.unstable_NormalPriority,Fx=Nt.unstable_LowPriority,C1=Nt.unstable_IdlePriority,dh=null,Tn=null;function Ux(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(dh,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:zx,jx=Math.log,$x=Math.LN2;function zx(t){return t>>>=0,t===0?32:31-(jx(t)/$x|0)|0}var lu=64,uu=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wo(a):(s&=o,s!==0&&(r=Wo(s)))}else o=n&~i,o!==0?r=Wo(o):s!==0&&(r=Wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function Bx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Bx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R1(){var t=lu;return lu<<=1,!(lu&4194240)&&(lu=64),t}function xd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function Wx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function b1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N1,$m,O1,D1,L1,zf=!1,cu=[],Pr=null,Cr=null,Rr=null,Ia=new Map,Sa=new Map,cr=[],qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _v(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Do(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=kl(e),e!==null&&$m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Kx(t,e,n,r,i){switch(e){case"focusin":return Pr=Do(Pr,t,e,n,r,i),!0;case"dragenter":return Cr=Do(Cr,t,e,n,r,i),!0;case"mouseover":return Rr=Do(Rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ia.set(s,Do(Ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sa.set(s,Do(Sa.get(s)||null,t,e,n,r,i)),!0}return!1}function M1(t){var e=ai(t.target);if(e!==null){var n=qi(e);if(n!==null){if(e=n.tag,e===13){if(e=S1(n),e!==null){t.blockedOn=e,L1(t.priority,function(){O1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vf=r,n.target.dispatchEvent(r),Vf=null}else return e=kl(n),e!==null&&$m(e),t.blockedOn=n,!1;e.shift()}return!0}function wv(t,e,n){$u(t)&&n.delete(e)}function Qx(){zf=!1,Pr!==null&&$u(Pr)&&(Pr=null),Cr!==null&&$u(Cr)&&(Cr=null),Rr!==null&&$u(Rr)&&(Rr=null),Ia.forEach(wv),Sa.forEach(wv)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,Qx)))}function Aa(t){function e(i){return Lo(i,t)}if(0<cu.length){Lo(cu[0],t);for(var n=1;n<cu.length;n++){var r=cu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&Lo(Pr,t),Cr!==null&&Lo(Cr,t),Rr!==null&&Lo(Rr,t),Ia.forEach(e),Sa.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)M1(n),n.blockedOn===null&&cr.shift()}var xs=tr.ReactCurrentBatchConfig,dc=!0;function Gx(t,e,n,r){var i=ie,s=xs.transition;xs.transition=null;try{ie=1,zm(t,e,n,r)}finally{ie=i,xs.transition=s}}function Yx(t,e,n,r){var i=ie,s=xs.transition;xs.transition=null;try{ie=4,zm(t,e,n,r)}finally{ie=i,xs.transition=s}}function zm(t,e,n,r){if(dc){var i=Bf(t,e,n,r);if(i===null)Vd(t,e,r,fc,n),_v(t,r);else if(Kx(i,t,e,n,r))r.stopPropagation();else if(_v(t,r),e&4&&-1<qx.indexOf(t)){for(;i!==null;){var s=kl(i);if(s!==null&&N1(s),s=Bf(t,e,n,r),s===null&&Vd(t,e,r,fc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var fc=null;function Bf(t,e,n,r){if(fc=null,t=Fm(r),t=ai(t),t!==null)if(e=qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=S1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fc=t,null}function V1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vx()){case Um:return 1;case P1:return 4;case cc:case Fx:return 16;case C1:return 536870912;default:return 16}default:return 16}}var Ir=null,Bm=null,zu=null;function F1(){if(zu)return zu;var t,e=Bm,n=e.length,r,i="value"in Ir?Ir.value:Ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zu=i.slice(t,1<r?1-r:void 0)}function Bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hu(){return!0}function Ev(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hu:Ev,this.isPropagationStopped=Ev,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hu)},persist:function(){},isPersistent:hu}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hm=Lt(yo),Al=ye({},yo,{view:0,detail:0}),Xx=Lt(Al),Pd,Cd,Mo,fh=ye({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Pd=t.screenX-Mo.screenX,Cd=t.screenY-Mo.screenY):Cd=Pd=0,Mo=t),Pd)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),Tv=Lt(fh),Jx=ye({},fh,{dataTransfer:0}),Zx=Lt(Jx),eP=ye({},Al,{relatedTarget:0}),Rd=Lt(eP),tP=ye({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),nP=Lt(tP),rP=ye({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iP=Lt(rP),sP=ye({},yo,{data:0}),Iv=Lt(sP),oP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lP[t])?!!e[t]:!1}function Wm(){return uP}var cP=ye({},Al,{key:function(t){if(t.key){var e=oP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wm,charCode:function(t){return t.type==="keypress"?Bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hP=Lt(cP),dP=ye({},fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=Lt(dP),fP=ye({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wm}),pP=Lt(fP),mP=ye({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),gP=Lt(mP),yP=ye({},fh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vP=Lt(yP),_P=[9,13,27,32],qm=Wn&&"CompositionEvent"in window,ra=null;Wn&&"documentMode"in document&&(ra=document.documentMode);var wP=Wn&&"TextEvent"in window&&!ra,U1=Wn&&(!qm||ra&&8<ra&&11>=ra),Av=" ",kv=!1;function j1(t,e){switch(t){case"keyup":return _P.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function EP(t,e){switch(t){case"compositionend":return $1(e);case"keypress":return e.which!==32?null:(kv=!0,Av);case"textInput":return t=e.data,t===Av&&kv?null:t;default:return null}}function TP(t,e){if(us)return t==="compositionend"||!qm&&j1(t,e)?(t=F1(),zu=Bm=Ir=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U1&&e.locale!=="ko"?null:e.data;default:return null}}var IP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IP[t.type]:e==="textarea"}function z1(t,e,n,r){_1(r),e=pc(e,"onChange"),0<e.length&&(n=new Hm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ia=null,ka=null;function SP(t){Z1(t,0)}function ph(t){var e=ds(t);if(d1(e))return t}function AP(t,e){if(t==="change")return e}var B1=!1;if(Wn){var bd;if(Wn){var Nd="oninput"in document;if(!Nd){var Pv=document.createElement("div");Pv.setAttribute("oninput","return;"),Nd=typeof Pv.oninput=="function"}bd=Nd}else bd=!1;B1=bd&&(!document.documentMode||9<document.documentMode)}function Cv(){ia&&(ia.detachEvent("onpropertychange",H1),ka=ia=null)}function H1(t){if(t.propertyName==="value"&&ph(ka)){var e=[];z1(e,ka,t,Fm(t)),I1(SP,e)}}function kP(t,e,n){t==="focusin"?(Cv(),ia=e,ka=n,ia.attachEvent("onpropertychange",H1)):t==="focusout"&&Cv()}function xP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ph(ka)}function PP(t,e){if(t==="click")return ph(e)}function CP(t,e){if(t==="input"||t==="change")return ph(e)}function RP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:RP;function xa(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Af.call(e,i)||!on(t[i],e[i]))return!1}return!0}function Rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bv(t,e){var n=Rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rv(n)}}function W1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q1(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bP(t){var e=q1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W1(n.ownerDocument.documentElement,n)){if(r!==null&&Km(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bv(n,s);var o=bv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NP=Wn&&"documentMode"in document&&11>=document.documentMode,cs=null,Hf=null,sa=null,Wf=!1;function Nv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||cs==null||cs!==ac(r)||(r=cs,"selectionStart"in r&&Km(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sa&&xa(sa,r)||(sa=r,r=pc(Hf,"onSelect"),0<r.length&&(e=new Hm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}function du(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:du("Animation","AnimationEnd"),animationiteration:du("Animation","AnimationIteration"),animationstart:du("Animation","AnimationStart"),transitionend:du("Transition","TransitionEnd")},Od={},K1={};Wn&&(K1=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function mh(t){if(Od[t])return Od[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K1)return Od[t]=e[n];return t}var Q1=mh("animationend"),G1=mh("animationiteration"),Y1=mh("animationstart"),X1=mh("transitionend"),J1=new Map,Ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){J1.set(t,e),Wi(e,[t])}for(var Dd=0;Dd<Ov.length;Dd++){var Ld=Ov[Dd],OP=Ld.toLowerCase(),DP=Ld[0].toUpperCase()+Ld.slice(1);Qr(OP,"on"+DP)}Qr(Q1,"onAnimationEnd");Qr(G1,"onAnimationIteration");Qr(Y1,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(X1,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LP=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Dv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ox(r,e,void 0,t),t.currentTarget=null}function Z1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dv(i,a,u),s=l}}}if(uc)throw t=jf,uc=!1,jf=null,t}function le(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var r=t+"__bubble";n.has(r)||(eE(e,t,2,!1),n.add(r))}function Md(t,e,n){var r=0;e&&(r|=4),eE(n,t,r,e)}var fu="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[fu]){t[fu]=!0,a1.forEach(function(n){n!=="selectionchange"&&(LP.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fu]||(e[fu]=!0,Md("selectionchange",!1,e))}}function eE(t,e,n,r){switch(V1(e)){case 1:var i=Gx;break;case 4:i=Yx;break;default:i=zm}n=i.bind(null,e,n,t),i=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ai(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}I1(function(){var u=s,c=Fm(n),h=[];e:{var d=J1.get(t);if(d!==void 0){var p=Hm,y=t;switch(t){case"keypress":if(Bu(n)===0)break e;case"keydown":case"keyup":p=hP;break;case"focusin":y="focus",p=Rd;break;case"focusout":y="blur",p=Rd;break;case"beforeblur":case"afterblur":p=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pP;break;case Q1:case G1:case Y1:p=nP;break;case X1:p=gP;break;case"scroll":p=Xx;break;case"wheel":p=vP;break;case"copy":case"cut":case"paste":p=iP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sv}var w=(e&4)!==0,v=!w&&t==="scroll",m=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,g;f!==null;){g=f;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,m!==null&&(T=Ta(f,m),T!=null&&w.push(Ca(f,T,g)))),v)break;f=f.return}0<w.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Vf&&(y=n.relatedTarget||n.fromElement)&&(ai(y)||y[qn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?ai(y):null,y!==null&&(v=qi(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(w=Tv,T="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Sv,T="onPointerLeave",m="onPointerEnter",f="pointer"),v=p==null?d:ds(p),g=y==null?d:ds(y),d=new w(T,f+"leave",p,n,c),d.target=v,d.relatedTarget=g,T=null,ai(c)===u&&(w=new w(m,f+"enter",y,n,c),w.target=g,w.relatedTarget=v,T=w),v=T,p&&y)t:{for(w=p,m=y,f=0,g=w;g;g=ns(g))f++;for(g=0,T=m;T;T=ns(T))g++;for(;0<f-g;)w=ns(w),f--;for(;0<g-f;)m=ns(m),g--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=ns(w),m=ns(m)}w=null}else w=null;p!==null&&Lv(h,d,p,w,!1),y!==null&&v!==null&&Lv(h,v,y,w,!0)}}e:{if(d=u?ds(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=AP;else if(xv(d))if(B1)S=CP;else{S=xP;var C=kP}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=PP);if(S&&(S=S(t,u))){z1(h,S,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Nf(d,"number",d.value)}switch(C=u?ds(u):window,t){case"focusin":(xv(C)||C.contentEditable==="true")&&(cs=C,Hf=u,sa=null);break;case"focusout":sa=Hf=cs=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Nv(h,n,c);break;case"selectionchange":if(NP)break;case"keydown":case"keyup":Nv(h,n,c)}var P;if(qm)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else us?j1(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(U1&&n.locale!=="ko"&&(us||N!=="onCompositionStart"?N==="onCompositionEnd"&&us&&(P=F1()):(Ir=c,Bm="value"in Ir?Ir.value:Ir.textContent,us=!0)),C=pc(u,N),0<C.length&&(N=new Iv(N,t,null,n,c),h.push({event:N,listeners:C}),P?N.data=P:(P=$1(n),P!==null&&(N.data=P)))),(P=wP?EP(t,n):TP(t,n))&&(u=pc(u,"onBeforeInput"),0<u.length&&(c=new Iv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}Z1(h,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ta(t,n),s!=null&&r.unshift(Ca(t,s,i)),s=Ta(t,e),s!=null&&r.push(Ca(t,s,i))),t=t.return}return r}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ta(n,s),l!=null&&o.unshift(Ca(n,l,a))):i||(l=Ta(n,s),l!=null&&o.push(Ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MP=/\r\n?/g,VP=/\u0000|\uFFFD/g;function Mv(t){return(typeof t=="string"?t:""+t).replace(MP,`
`).replace(VP,"")}function pu(t,e,n){if(e=Mv(e),Mv(t)!==e&&n)throw Error(x(425))}function mc(){}var qf=null,Kf=null;function Qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gf=typeof setTimeout=="function"?setTimeout:void 0,FP=typeof clearTimeout=="function"?clearTimeout:void 0,Vv=typeof Promise=="function"?Promise:void 0,UP=typeof queueMicrotask=="function"?queueMicrotask:typeof Vv<"u"?function(t){return Vv.resolve(null).then(t).catch(jP)}:Gf;function jP(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),yn="__reactFiber$"+vo,Ra="__reactProps$"+vo,qn="__reactContainer$"+vo,Yf="__reactEvents$"+vo,$P="__reactListeners$"+vo,zP="__reactHandles$"+vo;function ai(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fv(t);t!==null;){if(n=t[yn])return n;t=Fv(t)}return e}t=n,n=t.parentNode}return null}function kl(t){return t=t[yn]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function gh(t){return t[Ra]||null}var Xf=[],fs=-1;function Gr(t){return{current:t}}function de(t){0>fs||(t.current=Xf[fs],Xf[fs]=null,fs--)}function oe(t,e){fs++,Xf[fs]=t.current,t.current=e}var $r={},at=Gr($r),wt=Gr(!1),Pi=$r;function Zs(t,e){var n=t.type.contextTypes;if(!n)return $r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function gc(){de(wt),de(at)}function Uv(t,e,n){if(at.current!==$r)throw Error(x(168));oe(at,e),oe(wt,n)}function tE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,kx(t)||"Unknown",i));return ye({},n,r)}function yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,Pi=at.current,oe(at,t),oe(wt,wt.current),!0}function jv(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=tE(t,e,Pi),r.__reactInternalMemoizedMergedChildContext=t,de(wt),de(at),oe(at,t)):de(wt),oe(wt,n)}var Mn=null,yh=!1,Ud=!1;function nE(t){Mn===null?Mn=[t]:Mn.push(t)}function BP(t){yh=!0,nE(t)}function Yr(){if(!Ud&&Mn!==null){Ud=!0;var t=0,e=ie;try{var n=Mn;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,yh=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),x1(Um,Yr),i}finally{ie=e,Ud=!1}}return null}var ps=[],ms=0,vc=null,_c=0,$t=[],zt=0,Ci=null,Vn=1,Fn="";function ri(t,e){ps[ms++]=_c,ps[ms++]=vc,vc=t,_c=e}function rE(t,e,n){$t[zt++]=Vn,$t[zt++]=Fn,$t[zt++]=Ci,Ci=t;var r=Vn;t=Fn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-rn(e)+i|n<<i|r,Fn=s+t}else Vn=1<<s|n<<i|r,Fn=t}function Qm(t){t.return!==null&&(ri(t,1),rE(t,1,0))}function Gm(t){for(;t===vc;)vc=ps[--ms],ps[ms]=null,_c=ps[--ms],ps[ms]=null;for(;t===Ci;)Ci=$t[--zt],$t[zt]=null,Fn=$t[--zt],$t[zt]=null,Vn=$t[--zt],$t[zt]=null}var Ct=null,xt=null,pe=!1,en=null;function iE(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $v(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,xt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Vn,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,xt=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(pe){var e=xt;if(e){var n=e;if(!$v(t,e)){if(Jf(t))throw Error(x(418));e=br(n.nextSibling);var r=Ct;e&&$v(t,e)?iE(r,n):(t.flags=t.flags&-4097|2,pe=!1,Ct=t)}}else{if(Jf(t))throw Error(x(418));t.flags=t.flags&-4097|2,pe=!1,Ct=t}}}function zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function mu(t){if(t!==Ct)return!1;if(!pe)return zv(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qf(t.type,t.memoizedProps)),e&&(e=xt)){if(Jf(t))throw sE(),Error(x(418));for(;e;)iE(t,e),e=br(e.nextSibling)}if(zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=Ct?br(t.stateNode.nextSibling):null;return!0}function sE(){for(var t=xt;t;)t=br(t.nextSibling)}function eo(){xt=Ct=null,pe=!1}function Ym(t){en===null?en=[t]:en.push(t)}var HP=tr.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wc=Gr(null),Ec=null,gs=null,Xm=null;function Jm(){Xm=gs=Ec=null}function Zm(t){var e=wc.current;de(wc),t._currentValue=e}function ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Ec=t,Xm=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(Xm!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(Ec===null)throw Error(x(308));gs=t,Ec.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var li=null;function eg(t){li===null?li=[t]:li.push(t)}function oE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,eg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function tg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,eg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function Hu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}function Bv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,r){var i=t.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(d=e,p=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=ye({},h,d);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=h}}function Hv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var lE=new o1.Component().refs;function tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vh={isMounted:function(t){return(t=t._reactInternals)?qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Dr(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(sn(e,t,i,r),Hu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Dr(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(sn(e,t,i,r),Hu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=Dr(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(sn(e,t,r,n),Hu(e,t,r))}};function Wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(n,r)||!xa(i,s):!0}function uE(t,e,n){var r=!1,i=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=Et(e)?Pi:at.current,r=e.contextTypes,s=(r=r!=null)?Zs(t,i):$r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vh.enqueueReplaceState(e,e.state,null)}function np(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lE,tg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=Et(e)?Pi:at.current,i.context=Zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vh.enqueueReplaceState(i,i.state,null),Tc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===lE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function gu(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kv(t){var e=t._init;return e(t._payload)}function cE(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Lr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,T){return f===null||f.tag!==6?(f=qd(g,m.mode,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,T){var S=g.type;return S===ls?c(m,f,g.props.children,T,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lr&&Kv(S)===f.type)?(T=i(f,g.props),T.ref=Vo(m,f,g),T.return=m,T):(T=Yu(g.type,g.key,g.props,null,m.mode,T),T.ref=Vo(m,f,g),T.return=m,T)}function u(m,f,g,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Kd(g,m.mode,T),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,T,S){return f===null||f.tag!==7?(f=ki(g,m.mode,T,S),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=qd(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case su:return g=Yu(f.type,f.key,f.props,null,m.mode,g),g.ref=Vo(m,null,f),g.return=m,g;case as:return f=Kd(f,m.mode,g),f.return=m,f;case lr:var T=f._init;return h(m,T(f._payload),g)}if(Ho(f)||No(f))return f=ki(f,m.mode,g,null),f.return=m,f;gu(m,f)}return null}function d(m,f,g,T){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,f,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case su:return g.key===S?l(m,f,g,T):null;case as:return g.key===S?u(m,f,g,T):null;case lr:return S=g._init,d(m,f,S(g._payload),T)}if(Ho(g)||No(g))return S!==null?null:c(m,f,g,T,null);gu(m,g)}return null}function p(m,f,g,T,S){if(typeof T=="string"&&T!==""||typeof T=="number")return m=m.get(g)||null,a(f,m,""+T,S);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case su:return m=m.get(T.key===null?g:T.key)||null,l(f,m,T,S);case as:return m=m.get(T.key===null?g:T.key)||null,u(f,m,T,S);case lr:var C=T._init;return p(m,f,g,C(T._payload),S)}if(Ho(T)||No(T))return m=m.get(g)||null,c(f,m,T,S,null);gu(f,T)}return null}function y(m,f,g,T){for(var S=null,C=null,P=f,N=f=0,U=null;P!==null&&N<g.length;N++){P.index>N?(U=P,P=null):U=P.sibling;var B=d(m,P,g[N],T);if(B===null){P===null&&(P=U);break}t&&P&&B.alternate===null&&e(m,P),f=s(B,f,N),C===null?S=B:C.sibling=B,C=B,P=U}if(N===g.length)return n(m,P),pe&&ri(m,N),S;if(P===null){for(;N<g.length;N++)P=h(m,g[N],T),P!==null&&(f=s(P,f,N),C===null?S=P:C.sibling=P,C=P);return pe&&ri(m,N),S}for(P=r(m,P);N<g.length;N++)U=p(P,m,N,g[N],T),U!==null&&(t&&U.alternate!==null&&P.delete(U.key===null?N:U.key),f=s(U,f,N),C===null?S=U:C.sibling=U,C=U);return t&&P.forEach(function(Gt){return e(m,Gt)}),pe&&ri(m,N),S}function w(m,f,g,T){var S=No(g);if(typeof S!="function")throw Error(x(150));if(g=S.call(g),g==null)throw Error(x(151));for(var C=S=null,P=f,N=f=0,U=null,B=g.next();P!==null&&!B.done;N++,B=g.next()){P.index>N?(U=P,P=null):U=P.sibling;var Gt=d(m,P,B.value,T);if(Gt===null){P===null&&(P=U);break}t&&P&&Gt.alternate===null&&e(m,P),f=s(Gt,f,N),C===null?S=Gt:C.sibling=Gt,C=Gt,P=U}if(B.done)return n(m,P),pe&&ri(m,N),S;if(P===null){for(;!B.done;N++,B=g.next())B=h(m,B.value,T),B!==null&&(f=s(B,f,N),C===null?S=B:C.sibling=B,C=B);return pe&&ri(m,N),S}for(P=r(m,P);!B.done;N++,B=g.next())B=p(P,m,N,B.value,T),B!==null&&(t&&B.alternate!==null&&P.delete(B.key===null?N:B.key),f=s(B,f,N),C===null?S=B:C.sibling=B,C=B);return t&&P.forEach(function(Ro){return e(m,Ro)}),pe&&ri(m,N),S}function v(m,f,g,T){if(typeof g=="object"&&g!==null&&g.type===ls&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case su:e:{for(var S=g.key,C=f;C!==null;){if(C.key===S){if(S=g.type,S===ls){if(C.tag===7){n(m,C.sibling),f=i(C,g.props.children),f.return=m,m=f;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lr&&Kv(S)===C.type){n(m,C.sibling),f=i(C,g.props),f.ref=Vo(m,C,g),f.return=m,m=f;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===ls?(f=ki(g.props.children,m.mode,T,g.key),f.return=m,m=f):(T=Yu(g.type,g.key,g.props,null,m.mode,T),T.ref=Vo(m,f,g),T.return=m,m=T)}return o(m);case as:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Kd(g,m.mode,T),f.return=m,m=f}return o(m);case lr:return C=g._init,v(m,f,C(g._payload),T)}if(Ho(g))return y(m,f,g,T);if(No(g))return w(m,f,g,T);gu(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=qd(g,m.mode,T),f.return=m,m=f),o(m)):n(m,f)}return v}var to=cE(!0),hE=cE(!1),xl={},In=Gr(xl),ba=Gr(xl),Na=Gr(xl);function ui(t){if(t===xl)throw Error(x(174));return t}function ng(t,e){switch(oe(Na,e),oe(ba,t),oe(In,xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}de(In),oe(In,e)}function no(){de(In),de(ba),de(Na)}function dE(t){ui(Na.current);var e=ui(In.current),n=Df(e,t.type);e!==n&&(oe(ba,t),oe(In,n))}function rg(t){ba.current===t&&(de(In),de(ba))}var me=Gr(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jd=[];function ig(){for(var t=0;t<jd.length;t++)jd[t]._workInProgressVersionPrimary=null;jd.length=0}var Wu=tr.ReactCurrentDispatcher,$d=tr.ReactCurrentBatchConfig,Ri=0,ge=null,Ne=null,je=null,Sc=!1,oa=!1,Oa=0,WP=0;function Ze(){throw Error(x(321))}function sg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function og(t,e,n,r,i,s){if(Ri=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wu.current=t===null||t.memoizedState===null?GP:YP,t=n(r,i),oa){s=0;do{if(oa=!1,Oa=0,25<=s)throw Error(x(301));s+=1,je=Ne=null,e.updateQueue=null,Wu.current=XP,t=n(r,i)}while(oa)}if(Wu.current=Ac,e=Ne!==null&&Ne.next!==null,Ri=0,je=Ne=ge=null,Sc=!1,e)throw Error(x(300));return t}function ag(){var t=Oa!==0;return Oa=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ge.memoizedState=je=t:je=je.next=t,je}function Qt(){if(Ne===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=je===null?ge.memoizedState:je.next;if(e!==null)je=e,Ne=t;else{if(t===null)throw Error(x(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},je===null?ge.memoizedState=je=t:je=je.next=t}return je}function Da(t,e){return typeof e=="function"?e(t):e}function zd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ri&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=c,bi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,on(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bd(t){var e=Qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function fE(){}function pE(t,e){var n=ge,r=Qt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,lg(yE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,La(9,gE.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(x(349));Ri&30||mE(n,e,i)}return i}function mE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gE(t,e,n,r){e.value=n,e.getSnapshot=r,vE(e)&&_E(t)}function yE(t,e,n){return n(function(){vE(e)&&_E(t)})}function vE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function _E(t){var e=Kn(t,1);e!==null&&sn(e,t,1,-1)}function Qv(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=QP.bind(null,ge,t),[e.memoizedState,t]}function La(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function wE(){return Qt().memoizedState}function qu(t,e,n,r){var i=dn();ge.flags|=t,i.memoizedState=La(1|e,n,void 0,r===void 0?null:r)}function _h(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&sg(r,o.deps)){i.memoizedState=La(e,n,s,r);return}}ge.flags|=t,i.memoizedState=La(1|e,n,s,r)}function Gv(t,e){return qu(8390656,8,t,e)}function lg(t,e){return _h(2048,8,t,e)}function EE(t,e){return _h(4,2,t,e)}function TE(t,e){return _h(4,4,t,e)}function IE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function SE(t,e,n){return n=n!=null?n.concat([t]):null,_h(4,4,IE.bind(null,e,t),n)}function ug(){}function AE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xE(t,e,n){return Ri&21?(on(n,e)||(n=R1(),ge.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function qP(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=$d.transition;$d.transition={};try{t(!1),e()}finally{ie=n,$d.transition=r}}function PE(){return Qt().memoizedState}function KP(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CE(t))RE(e,n);else if(n=oE(t,e,n,r),n!==null){var i=dt();sn(n,t,r,i),bE(n,e,r)}}function QP(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CE(t))RE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var l=e.interleaved;l===null?(i.next=i,eg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=oE(t,e,i,r),n!==null&&(i=dt(),sn(n,t,r,i),bE(n,e,r))}}function CE(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function RE(t,e){oa=Sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jm(t,n)}}var Ac={readContext:Kt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},GP={readContext:Kt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:Gv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qu(4194308,4,IE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return qu(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KP.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:Qv,useDebugValue:ug,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=Qv(!1),e=t[0];return t=qP.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=dn();if(pe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),$e===null)throw Error(x(349));Ri&30||mE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gv(yE.bind(null,r,s,t),[t]),r.flags|=2048,La(9,gE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=$e.identifierPrefix;if(pe){var n=Fn,r=Vn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YP={readContext:Kt,useCallback:AE,useContext:Kt,useEffect:lg,useImperativeHandle:SE,useInsertionEffect:EE,useLayoutEffect:TE,useMemo:kE,useReducer:zd,useRef:wE,useState:function(){return zd(Da)},useDebugValue:ug,useDeferredValue:function(t){var e=Qt();return xE(e,Ne.memoizedState,t)},useTransition:function(){var t=zd(Da)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:fE,useSyncExternalStore:pE,useId:PE,unstable_isNewReconciler:!1},XP={readContext:Kt,useCallback:AE,useContext:Kt,useEffect:lg,useImperativeHandle:SE,useInsertionEffect:EE,useLayoutEffect:TE,useMemo:kE,useReducer:Bd,useRef:wE,useState:function(){return Bd(Da)},useDebugValue:ug,useDeferredValue:function(t){var e=Qt();return Ne===null?e.memoizedState=t:xE(e,Ne.memoizedState,t)},useTransition:function(){var t=Bd(Da)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:fE,useSyncExternalStore:pE,useId:PE,unstable_isNewReconciler:!1};function ro(t,e){try{var n="",r=e;do n+=Ax(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JP=typeof WeakMap=="function"?WeakMap:Map;function NE(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xc||(xc=!0,fp=r),rp(t,e)},n}function OE(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rp(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dC.bind(null,t,e,n),e.then(t,t))}function Xv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var ZP=tr.ReactCurrentOwner,_t=!1;function ct(t,e,n,r){e.child=t===null?hE(e,null,n,r):to(e,t.child,n,r)}function Zv(t,e,n,r,i){n=n.render;var s=e.ref;return Ps(e,i),r=og(t,e,n,r,s,i),n=ag(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(pe&&n&&Qm(e),e.flags|=1,ct(t,e,r,i),e.child)}function e0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,DE(t,e,s,r,i)):(t=Yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function DE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xa(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return ip(t,e,n,r,i)}function LE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(vs,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(vs,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(vs,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(vs,kt),kt|=r;return ct(t,e,i,n),e.child}function ME(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ip(t,e,n,r,i){var s=Et(n)?Pi:at.current;return s=Zs(e,s),Ps(e,i),n=og(t,e,n,r,s,i),r=ag(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(pe&&r&&Qm(e),e.flags|=1,ct(t,e,n,i),e.child)}function t0(t,e,n,r,i){if(Et(n)){var s=!0;yc(e)}else s=!1;if(Ps(e,i),e.stateNode===null)Ku(t,e),uE(e,n,r),np(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=Et(n)?Pi:at.current,u=Zs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qv(e,o,r,u),ur=!1;var d=e.memoizedState;o.state=d,Tc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||wt.current||ur?(typeof c=="function"&&(tp(e,n,c,r),l=e.memoizedState),(a=ur||Wv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,aE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=Et(n)?Pi:at.current,l=Zs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&qv(e,o,r,l),ur=!1,d=e.memoizedState,o.state=d,Tc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||wt.current||ur?(typeof p=="function"&&(tp(e,n,p,r),y=e.memoizedState),(u=ur||Wv(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return sp(t,e,n,r,s,i)}function sp(t,e,n,r,i,s){ME(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jv(e,n,!1),Qn(t,e,s);r=e.stateNode,ZP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&jv(e,n,!0),e.child}function VE(t){var e=t.stateNode;e.pendingContext?Uv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uv(t,e.context,!1),ng(t,e.containerInfo)}function n0(t,e,n,r,i){return eo(),Ym(i),e.flags|=256,ct(t,e,n,r),e.child}var op={dehydrated:null,treeContext:null,retryLane:0};function ap(t){return{baseLanes:t,cachePool:null,transitions:null}}function FE(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(me,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Th(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ap(n),e.memoizedState=op,t):cg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=op,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cg(t,e){return e=Th({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yu(t,e,n,r){return r!==null&&Ym(r),to(e,t.child,null,n),t=cg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hd(Error(x(422))),yu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Th({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=ap(o),e.memoizedState=op,s);if(!(e.mode&1))return yu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Hd(s,r,void 0),yu(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),sn(r,t,i,-1))}return gg(),r=Hd(Error(x(421))),yu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xt=br(i.nextSibling),Ct=e,pe=!0,en=null,t!==null&&($t[zt++]=Vn,$t[zt++]=Fn,$t[zt++]=Ci,Vn=t.id,Fn=t.overflow,Ci=e),e=cg(e,r.children),e.flags|=4096,e)}function r0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ep(t.return,e,n)}function Wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function UE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,n,e);else if(t.tag===19)r0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ic(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wd(e,!0,n,null,s);break;case"together":Wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tC(t,e,n){switch(e.tag){case 3:VE(e),eo();break;case 5:dE(e);break;case 1:Et(e.type)&&yc(e);break;case 4:ng(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(wc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?FE(t,e,n):(oe(me,me.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);oe(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return UE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,LE(t,e,n)}return Qn(t,e,n)}var jE,lp,$E,zE;jE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};$E=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ui(In.current);var s=null;switch(n){case"input":i=Rf(t,i),r=Rf(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mc)}Lf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};zE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fo(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nC(t,e,n){var r=e.pendingProps;switch(Gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return Et(e.type)&&gc(),et(e),null;case 3:return r=e.stateNode,no(),de(wt),de(at),ig(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(gp(en),en=null))),lp(t,e),et(e),null;case 5:rg(e);var i=ui(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)$E(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return et(e),null}if(t=ui(In.current),mu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)le(qo[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":dv(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":pv(r,s),le("invalid",r)}Lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pu(r.textContent,a,t),i=["children",""+a]):wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ou(r),fv(r,s,!0);break;case"textarea":ou(r),mv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Ra]=r,jE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)le(qo[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":dv(t,r),i=Rf(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),le("invalid",t);break;case"textarea":pv(t,r),i=Of(t,r),le("invalid",t);break;default:i=r}Lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?v1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&Dm(t,s,l,o))}switch(n){case"input":ou(t),fv(t,r,!1);break;case"textarea":ou(t),mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)zE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=ui(Na.current),ui(In.current),mu(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return et(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&xt!==null&&e.mode&1&&!(e.flags&128))sE(),eo(),e.flags|=98560,s=!1;else if(s=mu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[yn]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else en!==null&&(gp(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?De===0&&(De=3):gg())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return no(),lp(t,e),t===null&&Pa(e.stateNode.containerInfo),et(e),null;case 10:return Zm(e.type._context),et(e),null;case 17:return Et(e.type)&&gc(),et(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fo(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ic(t),o!==null){for(e.flags|=128,Fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>io&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ic(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return et(e),null}else 2*Se()-s.renderingStartTime>io&&n!==1073741824&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=me.current,oe(me,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return mg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function rC(t,e){switch(Gm(e),e.tag){case 1:return Et(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),de(wt),de(at),ig(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rg(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return no(),null;case 10:return Zm(e.type._context),null;case 22:case 23:return mg(),null;case 24:return null;default:return null}}var vu=!1,rt=!1,iC=typeof WeakSet=="function"?WeakSet:Set,L=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function up(t,e,n){try{n()}catch(r){_e(t,e,r)}}var i0=!1;function sC(t,e){if(qf=dc,t=q1(),Km(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},dc=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,v=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Xt(e.type,w),v);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(T){_e(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=i0,i0=!1,y}function aa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&up(e,n,s)}i=i.next}while(i!==r)}}function wh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function BE(t){var e=t.alternate;e!==null&&(t.alternate=null,BE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Ra],delete e[Yf],delete e[$P],delete e[zP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function HE(t){return t.tag===5||t.tag===3||t.tag===4}function s0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dp(t,e,n),t=t.sibling;t!==null;)dp(t,e,n),t=t.sibling}var He=null,Zt=!1;function ir(t,e,n){for(n=n.child;n!==null;)WE(t,e,n),n=n.sibling}function WE(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(dh,n)}catch{}switch(n.tag){case 5:rt||ys(n,e);case 6:var r=He,i=Zt;He=null,ir(t,e,n),He=r,Zt=i,He!==null&&(Zt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Zt?(t=He,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),Aa(t)):Fd(He,n.stateNode));break;case 4:r=He,i=Zt,He=n.stateNode.containerInfo,Zt=!0,ir(t,e,n),He=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&up(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!rt&&(ys(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,ir(t,e,n),rt=r):ir(t,e,n);break;default:ir(t,e,n)}}function o0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iC),e.forEach(function(r){var i=pC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Zt=!1;break e;case 3:He=a.stateNode.containerInfo,Zt=!0;break e;case 4:He=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(He===null)throw Error(x(160));WE(s,o,i),He=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qE(e,t),e=e.sibling}function qE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),hn(t),r&4){try{aa(3,t,t.return),wh(3,t)}catch(w){_e(t,t.return,w)}try{aa(5,t,t.return)}catch(w){_e(t,t.return,w)}}break;case 1:Yt(e,t),hn(t),r&512&&n!==null&&ys(n,n.return);break;case 5:if(Yt(e,t),hn(t),r&512&&n!==null&&ys(n,n.return),t.flags&32){var i=t.stateNode;try{Ea(i,"")}catch(w){_e(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&f1(i,s),Mf(a,o);var u=Mf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?v1(i,h):c==="dangerouslySetInnerHTML"?g1(i,h):c==="children"?Ea(i,h):Dm(i,c,h,u)}switch(a){case"input":bf(i,s);break;case"textarea":p1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ss(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ss(i,!!s.multiple,s.defaultValue,!0):Ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ra]=s}catch(w){_e(t,t.return,w)}}break;case 6:if(Yt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){_e(t,t.return,w)}}break;case 3:if(Yt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(w){_e(t,t.return,w)}break;case 4:Yt(e,t),hn(t);break;case 13:Yt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fg=Se())),r&4&&o0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(u=rt)||c,Yt(e,t),rt=u):Yt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,p=d.child,d.tag){case 0:case 11:case 14:case 15:aa(4,d,d.return);break;case 1:ys(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){_e(r,n,w)}}break;case 5:ys(d,d.return);break;case 22:if(d.memoizedState!==null){l0(h);continue}}p!==null?(p.return=d,L=p):l0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=y1("display",o))}catch(w){_e(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){_e(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yt(e,t),hn(t),r&4&&o0(t);break;case 21:break;default:Yt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(HE(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ea(i,""),r.flags&=-33);var s=s0(t);dp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=s0(t);hp(t,a,o);break;default:throw Error(x(161))}}catch(l){_e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oC(t,e,n){L=t,KE(t)}function KE(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||rt;a=vu;var u=rt;if(vu=o,(rt=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?u0(i):l!==null?(l.return=o,L=l):u0(i);for(;s!==null;)L=s,KE(s),s=s.sibling;L=i,vu=a,rt=u}a0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):a0(t)}}function a0(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||wh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Aa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}rt||e.flags&512&&cp(e)}catch(d){_e(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function l0(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function u0(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wh(4,e)}catch(l){_e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){_e(e,i,l)}}var s=e.return;try{cp(e)}catch(l){_e(e,s,l)}break;case 5:var o=e.return;try{cp(e)}catch(l){_e(e,o,l)}}}catch(l){_e(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var aC=Math.ceil,kc=tr.ReactCurrentDispatcher,hg=tr.ReactCurrentOwner,Wt=tr.ReactCurrentBatchConfig,ne=0,$e=null,xe=null,Ge=0,kt=0,vs=Gr(0),De=0,Ma=null,bi=0,Eh=0,dg=0,la=null,yt=null,fg=0,io=1/0,Ln=null,xc=!1,fp=null,Or=null,_u=!1,Sr=null,Pc=0,ua=0,pp=null,Qu=-1,Gu=0;function dt(){return ne&6?Se():Qu!==-1?Qu:Qu=Se()}function Dr(t){return t.mode&1?ne&2&&Ge!==0?Ge&-Ge:HP.transition!==null?(Gu===0&&(Gu=R1()),Gu):(t=ie,t!==0||(t=window.event,t=t===void 0?16:V1(t.type)),t):1}function sn(t,e,n,r){if(50<ua)throw ua=0,pp=null,Error(x(185));Sl(t,n,r),(!(ne&2)||t!==$e)&&(t===$e&&(!(ne&2)&&(Eh|=n),De===4&&hr(t,Ge)),Tt(t,r),n===1&&ne===0&&!(e.mode&1)&&(io=Se()+500,yh&&Yr()))}function Tt(t,e){var n=t.callbackNode;Hx(t,e);var r=hc(t,t===$e?Ge:0);if(r===0)n!==null&&vv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vv(n),e===1)t.tag===0?BP(c0.bind(null,t)):nE(c0.bind(null,t)),UP(function(){!(ne&6)&&Yr()}),n=null;else{switch(b1(r)){case 1:n=Um;break;case 4:n=P1;break;case 16:n=cc;break;case 536870912:n=C1;break;default:n=cc}n=tT(n,QE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function QE(t,e){if(Qu=-1,Gu=0,ne&6)throw Error(x(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=hc(t,t===$e?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cc(t,r);else{e=r;var i=ne;ne|=2;var s=YE();($e!==t||Ge!==e)&&(Ln=null,io=Se()+500,Ai(t,e));do try{cC();break}catch(a){GE(t,a)}while(!0);Jm(),kc.current=s,ne=i,xe!==null?e=0:($e=null,Ge=0,e=De)}if(e!==0){if(e===2&&(i=$f(t),i!==0&&(r=i,e=mp(t,i))),e===1)throw n=Ma,Ai(t,0),hr(t,r),Tt(t,Se()),n;if(e===6)hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!lC(i)&&(e=Cc(t,r),e===2&&(s=$f(t),s!==0&&(r=s,e=mp(t,s))),e===1))throw n=Ma,Ai(t,0),hr(t,r),Tt(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:ii(t,yt,Ln);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=fg+500-Se(),10<e)){if(hc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gf(ii.bind(null,t,yt,Ln),e);break}ii(t,yt,Ln);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aC(r/1960))-r,10<r){t.timeoutHandle=Gf(ii.bind(null,t,yt,Ln),r);break}ii(t,yt,Ln);break;case 5:ii(t,yt,Ln);break;default:throw Error(x(329))}}}return Tt(t,Se()),t.callbackNode===n?QE.bind(null,t):null}function mp(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(Ai(t,e).flags|=256),t=Cc(t,e),t!==2&&(e=yt,yt=n,e!==null&&gp(e)),t}function gp(t){yt===null?yt=t:yt.push.apply(yt,t)}function lC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~dg,e&=~Eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function c0(t){if(ne&6)throw Error(x(327));Cs();var e=hc(t,0);if(!(e&1))return Tt(t,Se()),null;var n=Cc(t,e);if(t.tag!==0&&n===2){var r=$f(t);r!==0&&(e=r,n=mp(t,r))}if(n===1)throw n=Ma,Ai(t,0),hr(t,e),Tt(t,Se()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ii(t,yt,Ln),Tt(t,Se()),null}function pg(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(io=Se()+500,yh&&Yr())}}function Ni(t){Sr!==null&&Sr.tag===0&&!(ne&6)&&Cs();var e=ne;ne|=1;var n=Wt.transition,r=ie;try{if(Wt.transition=null,ie=1,t)return t()}finally{ie=r,Wt.transition=n,ne=e,!(ne&6)&&Yr()}}function mg(){kt=vs.current,de(vs)}function Ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FP(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gc();break;case 3:no(),de(wt),de(at),ig();break;case 5:rg(r);break;case 4:no();break;case 13:de(me);break;case 19:de(me);break;case 10:Zm(r.type._context);break;case 22:case 23:mg()}n=n.return}if($e=t,xe=t=Lr(t.current,null),Ge=kt=e,De=0,Ma=null,dg=Eh=bi=0,yt=la=null,li!==null){for(e=0;e<li.length;e++)if(n=li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}li=null}return t}function GE(t,e){do{var n=xe;try{if(Jm(),Wu.current=Ac,Sc){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sc=!1}if(Ri=0,je=Ne=ge=null,oa=!1,Oa=0,hg.current=null,n===null||n.return===null){De=1,Ma=e,xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Xv(o);if(p!==null){p.flags&=-257,Jv(p,o,a,s,e),p.mode&1&&Yv(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Yv(s,u,e),gg();break e}l=Error(x(426))}}else if(pe&&a.mode&1){var v=Xv(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Jv(v,o,a,s,e),Ym(ro(l,a));break e}}s=l=ro(l,a),De!==4&&(De=2),la===null?la=[s]:la.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=NE(s,l,e);Bv(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Or===null||!Or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=OE(s,a,e);Bv(s,T);break e}}s=s.return}while(s!==null)}JE(n)}catch(S){e=S,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function YE(){var t=kc.current;return kc.current=Ac,t===null?Ac:t}function gg(){(De===0||De===3||De===2)&&(De=4),$e===null||!(bi&268435455)&&!(Eh&268435455)||hr($e,Ge)}function Cc(t,e){var n=ne;ne|=2;var r=YE();($e!==t||Ge!==e)&&(Ln=null,Ai(t,e));do try{uC();break}catch(i){GE(t,i)}while(!0);if(Jm(),ne=n,kc.current=r,xe!==null)throw Error(x(261));return $e=null,Ge=0,De}function uC(){for(;xe!==null;)XE(xe)}function cC(){for(;xe!==null&&!Lx();)XE(xe)}function XE(t){var e=eT(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?JE(t):xe=e,hg.current=null}function JE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rC(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,xe=null;return}}else if(n=nC(n,e,kt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);De===0&&(De=5)}function ii(t,e,n){var r=ie,i=Wt.transition;try{Wt.transition=null,ie=1,hC(t,e,n,r)}finally{Wt.transition=i,ie=r}return null}function hC(t,e,n,r){do Cs();while(Sr!==null);if(ne&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wx(t,s),t===$e&&(xe=$e=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_u||(_u=!0,tT(cc,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wt.transition,Wt.transition=null;var o=ie;ie=1;var a=ne;ne|=4,hg.current=null,sC(t,n),qE(n,t),bP(Kf),dc=!!qf,Kf=qf=null,t.current=n,oC(n),Mx(),ne=a,ie=o,Wt.transition=s}else t.current=n;if(_u&&(_u=!1,Sr=t,Pc=i),s=t.pendingLanes,s===0&&(Or=null),Ux(n.stateNode),Tt(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xc)throw xc=!1,t=fp,fp=null,t;return Pc&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===pp?ua++:(ua=0,pp=t):ua=0,Yr(),null}function Cs(){if(Sr!==null){var t=b1(Pc),e=Wt.transition,n=ie;try{if(Wt.transition=null,ie=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,Pc=0,ne&6)throw Error(x(331));var i=ne;for(ne|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:aa(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,p=c.return;if(BE(c),c===u){L=null;break}if(d!==null){d.return=p,L=d;break}L=p}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var v=w.sibling;w.sibling=null,w=v}while(w!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:aa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,L=g;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wh(9,a)}}catch(S){_e(a,a.return,S)}if(a===o){L=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,L=T;break e}L=a.return}}if(ne=i,Yr(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(dh,t)}catch{}r=!0}return r}finally{ie=n,Wt.transition=e}}return!1}function h0(t,e,n){e=ro(n,e),e=NE(t,e,1),t=Nr(t,e,1),e=dt(),t!==null&&(Sl(t,1,e),Tt(t,e))}function _e(t,e,n){if(t.tag===3)h0(t,t,n);else for(;e!==null;){if(e.tag===3){h0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=ro(n,t),t=OE(e,t,1),e=Nr(e,t,1),t=dt(),e!==null&&(Sl(e,1,t),Tt(e,t));break}}e=e.return}}function dC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ge&n)===n&&(De===4||De===3&&(Ge&130023424)===Ge&&500>Se()-fg?Ai(t,0):dg|=n),Tt(t,e)}function ZE(t,e){e===0&&(t.mode&1?(e=uu,uu<<=1,!(uu&130023424)&&(uu=4194304)):e=1);var n=dt();t=Kn(t,e),t!==null&&(Sl(t,e,n),Tt(t,n))}function fC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ZE(t,n)}function pC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),ZE(t,n)}var eT;eT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,tC(t,e,n);_t=!!(t.flags&131072)}else _t=!1,pe&&e.flags&1048576&&rE(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ku(t,e),t=e.pendingProps;var i=Zs(e,at.current);Ps(e,n),i=og(null,e,r,t,i,n);var s=ag();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tg(e),i.updater=vh,e.stateNode=i,i._reactInternals=e,np(e,r,t,n),e=sp(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Qm(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ku(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gC(r),t=Xt(r,t),i){case 0:e=ip(null,e,r,t,n);break e;case 1:e=t0(null,e,r,t,n);break e;case 11:e=Zv(null,e,r,t,n);break e;case 14:e=e0(null,e,r,Xt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),t0(t,e,r,i,n);case 3:e:{if(VE(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,aE(t,e),Tc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ro(Error(x(423)),e),e=n0(t,e,r,n,i);break e}else if(r!==i){i=ro(Error(x(424)),e),e=n0(t,e,r,n,i);break e}else for(xt=br(e.stateNode.containerInfo.firstChild),Ct=e,pe=!0,en=null,n=hE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===i){e=Qn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return dE(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qf(r,i)?o=null:s!==null&&Qf(r,s)&&(e.flags|=32),ME(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return FE(t,e,n);case 4:return ng(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=to(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Zv(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(wc,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!wt.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ep(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ps(e,n),i=Kt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),e0(t,e,r,i,n);case 15:return DE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Ku(t,e),e.tag=1,Et(r)?(t=!0,yc(e)):t=!1,Ps(e,n),uE(e,r,i),np(e,r,i,n),sp(null,e,r,!0,t,n);case 19:return UE(t,e,n);case 22:return LE(t,e,n)}throw Error(x(156,e.tag))};function tT(t,e){return x1(t,e)}function mC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new mC(t,e,n,r)}function yg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gC(t){if(typeof t=="function")return yg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mm)return 11;if(t===Vm)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return ki(n.children,i,s,e);case Lm:o=8,i|=8;break;case kf:return t=Ht(12,n,e,i|2),t.elementType=kf,t.lanes=s,t;case xf:return t=Ht(13,n,e,i),t.elementType=xf,t.lanes=s,t;case Pf:return t=Ht(19,n,e,i),t.elementType=Pf,t.lanes=s,t;case c1:return Th(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l1:o=10;break e;case u1:o=9;break e;case Mm:o=11;break e;case Vm:o=14;break e;case lr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function Th(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=c1,t.lanes=n,t.stateNode={isHidden:!1},t}function qd(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Kd(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vg(t,e,n,r,i,s,o,a,l){return t=new yC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tg(s),t}function vC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nT(t){if(!t)return $r;t=t._reactInternals;e:{if(qi(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Et(n))return tE(t,n,e)}return e}function rT(t,e,n,r,i,s,o,a,l){return t=vg(n,r,!0,t,i,s,o,a,l),t.context=nT(null),n=t.current,r=dt(),i=Dr(n),s=Bn(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,Sl(t,i,r),Tt(t,r),t}function Ih(t,e,n,r){var i=e.current,s=dt(),o=Dr(i);return n=nT(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(sn(t,i,o,s),Hu(t,i,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function d0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _g(t,e){d0(t,e),(t=t.alternate)&&d0(t,e)}function _C(){return null}var iT=typeof reportError=="function"?reportError:function(t){console.error(t)};function wg(t){this._internalRoot=t}Sh.prototype.render=wg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Ih(t,e,null,null)};Sh.prototype.unmount=wg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ni(function(){Ih(null,t,null,null)}),e[qn]=null}};function Sh(t){this._internalRoot=t}Sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=D1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&M1(t)}};function Eg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function f0(){}function wC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Rc(o);s.call(u)}}var o=rT(e,r,t,0,null,!1,!1,"",f0);return t._reactRootContainer=o,t[qn]=o.current,Pa(t.nodeType===8?t.parentNode:t),Ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rc(l);a.call(u)}}var l=vg(t,0,!1,null,null,!1,!1,"",f0);return t._reactRootContainer=l,t[qn]=l.current,Pa(t.nodeType===8?t.parentNode:t),Ni(function(){Ih(e,l,n,r)}),l}function kh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Rc(o);a.call(l)}}Ih(e,o,t,i)}else o=wC(n,e,t,i,r);return Rc(o)}N1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(jm(e,n|1),Tt(e,Se()),!(ne&6)&&(io=Se()+500,Yr()))}break;case 13:Ni(function(){var r=Kn(t,1);if(r!==null){var i=dt();sn(r,t,1,i)}}),_g(t,1)}};$m=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=dt();sn(e,t,134217728,n)}_g(t,134217728)}};O1=function(t){if(t.tag===13){var e=Dr(t),n=Kn(t,e);if(n!==null){var r=dt();sn(n,t,e,r)}_g(t,e)}};D1=function(){return ie};L1=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};Ff=function(t,e,n){switch(e){case"input":if(bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gh(r);if(!i)throw Error(x(90));d1(r),bf(r,i)}}}break;case"textarea":p1(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};E1=pg;T1=Ni;var EC={usingClientEntryPoint:!1,Events:[kl,ds,gh,_1,w1,pg]},Uo={findFiberByHostInstance:ai,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},TC={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A1(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||_C,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{dh=wu.inject(TC),Tn=wu}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EC;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eg(e))throw Error(x(200));return vC(t,e,null,n)};Dt.createRoot=function(t,e){if(!Eg(t))throw Error(x(299));var n=!1,r="",i=iT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vg(t,1,!1,null,null,n,!1,r,i),t[qn]=e.current,Pa(t.nodeType===8?t.parentNode:t),new wg(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=A1(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Ni(t)};Dt.hydrate=function(t,e,n){if(!Ah(e))throw Error(x(200));return kh(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Eg(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rT(e,null,t,1,n??null,i,!1,s,o),t[qn]=e.current,Pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sh(e)};Dt.render=function(t,e,n){if(!Ah(e))throw Error(x(200));return kh(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!Ah(t))throw Error(x(40));return t._reactRootContainer?(Ni(function(){kh(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1};Dt.unstable_batchedUpdates=pg;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ah(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return kh(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function sT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT)}catch(t){console.error(t)}}sT(),r1.exports=Dt;var IC=r1.exports,p0=IC;Sf.createRoot=p0.createRoot,Sf.hydrateRoot=p0.hydrateRoot;var Pl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},so=typeof window>"u"||"Deno"in window;function jt(){}function SC(t,e){return typeof t=="function"?t(e):t}function yp(t){return typeof t=="number"&&t>=0&&t!==1/0}function oT(t,e){return Math.max(t+(e||0)-Date.now(),0)}function m0(t,e){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:a}=t;if(o){if(r){if(e.queryHash!==Tg(o,e.options))return!1}else if(!Fa(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof i<"u"&&i!==e.state.fetchStatus||s&&!s(e))}function g0(t,e){const{exact:n,status:r,predicate:i,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Va(e.options.mutationKey)!==Va(s))return!1}else if(!Fa(e.options.mutationKey,s))return!1}return!(r&&e.state.status!==r||i&&!i(e))}function Tg(t,e){return((e==null?void 0:e.queryKeyHashFn)||Va)(t)}function Va(t){return JSON.stringify(t,(e,n)=>_p(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Fa(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Fa(t[n],e[n])):!1}function aT(t,e){if(t===e)return t;const n=y0(t)&&y0(e);if(n||_p(t)&&_p(e)){const r=n?t:Object.keys(t),i=r.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let u=0;u<o;u++){const c=n?u:s[u];!n&&t[c]===void 0&&e[c]===void 0&&r.includes(c)?(a[c]=void 0,l++):(a[c]=aT(t[c],e[c]),a[c]===t[c]&&t[c]!==void 0&&l++)}return i===o&&l===i?t:a}return e}function vp(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function y0(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function _p(t){if(!v0(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const n=e.prototype;return!(!v0(n)||!n.hasOwnProperty("isPrototypeOf"))}function v0(t){return Object.prototype.toString.call(t)==="[object Object]"}function AC(t){return new Promise(e=>{setTimeout(e,t)})}function wp(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?aT(t,e):e}function kC(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function xC(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var yi,gr,Vs,Vw,PC=(Vw=class extends Pl{constructor(){super();F(this,yi,void 0);F(this,gr,void 0);F(this,Vs,void 0);O(this,Vs,e=>{if(!so&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,gr)||this.setEventListener(E(this,Vs))}onUnsubscribe(){var e;this.hasListeners()||((e=E(this,gr))==null||e.call(this),O(this,gr,void 0))}setEventListener(e){var n;O(this,Vs,e),(n=E(this,gr))==null||n.call(this),O(this,gr,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){E(this,yi)!==e&&(O(this,yi,e),this.onFocus())}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){var e;return typeof E(this,yi)=="boolean"?E(this,yi):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},yi=new WeakMap,gr=new WeakMap,Vs=new WeakMap,Vw),bc=new PC,Fs,yr,Us,Fw,CC=(Fw=class extends Pl{constructor(){super();F(this,Fs,!0);F(this,yr,void 0);F(this,Us,void 0);O(this,Us,e=>{if(!so&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,yr)||this.setEventListener(E(this,Us))}onUnsubscribe(){var e;this.hasListeners()||((e=E(this,yr))==null||e.call(this),O(this,yr,void 0))}setEventListener(e){var n;O(this,Us,e),(n=E(this,yr))==null||n.call(this),O(this,yr,e(this.setOnline.bind(this)))}setOnline(e){E(this,Fs)!==e&&(O(this,Fs,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return E(this,Fs)}},Fs=new WeakMap,yr=new WeakMap,Us=new WeakMap,Fw),Nc=new CC;function RC(t){return Math.min(1e3*2**t,3e4)}function xh(t){return(t??"online")==="online"?Nc.isOnline():!0}var lT=class{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Qd(t){return t instanceof lT}function uT(t){let e=!1,n=0,r=!1,i,s,o;const a=new Promise((v,m)=>{s=v,o=m}),l=v=>{var m;r||(p(new lT(v)),(m=t.abort)==null||m.call(t))},u=()=>{e=!0},c=()=>{e=!1},h=()=>!bc.isFocused()||t.networkMode!=="always"&&!Nc.isOnline(),d=v=>{var m;r||(r=!0,(m=t.onSuccess)==null||m.call(t,v),i==null||i(),s(v))},p=v=>{var m;r||(r=!0,(m=t.onError)==null||m.call(t,v),i==null||i(),o(v))},y=()=>new Promise(v=>{var m;i=f=>{const g=r||!h();return g&&v(f),g},(m=t.onPause)==null||m.call(t)}).then(()=>{var v;i=void 0,r||(v=t.onContinue)==null||v.call(t)}),w=()=>{if(r)return;let v;try{v=t.fn()}catch(m){v=Promise.reject(m)}Promise.resolve(v).then(d).catch(m=>{var C;if(r)return;const f=t.retry??(so?0:3),g=t.retryDelay??RC,T=typeof g=="function"?g(n,m):g,S=f===!0||typeof f=="number"&&n<f||typeof f=="function"&&f(n,m);if(e||!S){p(m);return}n++,(C=t.onFail)==null||C.call(t,n,m),AC(T).then(()=>{if(h())return y()}).then(()=>{e?p(m):w()})})};return xh(t.networkMode)?w():y().then(w),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:u,continueRetry:c}}function bC(){let t=[],e=0,n=d=>{d()},r=d=>{d()},i=d=>setTimeout(d,0);const s=d=>{i=d},o=d=>{let p;e++;try{p=d()}finally{e--,e||u()}return p},a=d=>{e?t.push(d):i(()=>{n(d)})},l=d=>(...p)=>{a(()=>{d(...p)})},u=()=>{const d=t;t=[],d.length&&i(()=>{r(()=>{d.forEach(p=>{n(p)})})})};return{batch:o,batchCalls:l,schedule:a,setNotifyFunction:d=>{n=d},setBatchNotifyFunction:d=>{r=d},setScheduler:s}}var qe=bC(),vi,Uw,cT=(Uw=class{constructor(){F(this,vi,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),yp(this.gcTime)&&O(this,vi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(so?1/0:5*60*1e3))}clearGcTimeout(){E(this,vi)&&(clearTimeout(E(this,vi)),O(this,vi,void 0))}},vi=new WeakMap,Uw),js,$s,Vt,vr,Ft,Fe,hl,_i,zs,Xu,Jt,Dn,jw,NC=(jw=class extends cT{constructor(n){super();F(this,zs);F(this,Jt);F(this,js,void 0);F(this,$s,void 0);F(this,Vt,void 0);F(this,vr,void 0);F(this,Ft,void 0);F(this,Fe,void 0);F(this,hl,void 0);F(this,_i,void 0);O(this,_i,!1),O(this,hl,n.defaultOptions),Y(this,zs,Xu).call(this,n.options),O(this,Fe,[]),O(this,Vt,n.cache),this.queryKey=n.queryKey,this.queryHash=n.queryHash,O(this,js,n.state||OC(this.options)),this.state=E(this,js),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!E(this,Fe).length&&this.state.fetchStatus==="idle"&&E(this,Vt).remove(this)}setData(n,r){const i=wp(this.state.data,n,this.options);return Y(this,Jt,Dn).call(this,{data:i,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),i}setState(n,r){Y(this,Jt,Dn).call(this,{type:"setState",state:n,setStateOptions:r})}cancel(n){var i;const r=E(this,vr);return(i=E(this,Ft))==null||i.cancel(n),r?r.then(jt).catch(jt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,js))}isActive(){return E(this,Fe).some(n=>n.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||E(this,Fe).some(n=>n.getCurrentResult().isStale)}isStaleByTime(n=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!oT(this.state.dataUpdatedAt,n)}onFocus(){var r;const n=E(this,Fe).find(i=>i.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(r=E(this,Ft))==null||r.continue()}onOnline(){var r;const n=E(this,Fe).find(i=>i.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(r=E(this,Ft))==null||r.continue()}addObserver(n){E(this,Fe).includes(n)||(E(this,Fe).push(n),this.clearGcTimeout(),E(this,Vt).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){E(this,Fe).includes(n)&&(O(this,Fe,E(this,Fe).filter(r=>r!==n)),E(this,Fe).length||(E(this,Ft)&&(E(this,_i)?E(this,Ft).cancel({revert:!0}):E(this,Ft).cancelRetry()),this.scheduleGc()),E(this,Vt).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return E(this,Fe).length}invalidate(){this.state.isInvalidated||Y(this,Jt,Dn).call(this,{type:"invalidate"})}fetch(n,r){var c,h,d,p;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(E(this,vr))return(c=E(this,Ft))==null||c.continueRetry(),E(this,vr)}if(n&&Y(this,zs,Xu).call(this,n),!this.options.queryFn){const y=E(this,Fe).find(w=>w.options.queryFn);y&&Y(this,zs,Xu).call(this,y.options)}const i=new AbortController,s={queryKey:this.queryKey,meta:this.meta},o=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(O(this,_i,!0),i.signal)})};o(s);const a=()=>this.options.queryFn?(O(this,_i,!1),this.options.persister?this.options.persister(this.options.queryFn,s,this):this.options.queryFn(s)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),l={fetchOptions:r,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:a};o(l),(h=this.options.behavior)==null||h.onFetch(l,this),O(this,$s,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&Y(this,Jt,Dn).call(this,{type:"fetch",meta:(p=l.fetchOptions)==null?void 0:p.meta});const u=y=>{var w,v,m,f;Qd(y)&&y.silent||Y(this,Jt,Dn).call(this,{type:"error",error:y}),Qd(y)||((v=(w=E(this,Vt).config).onError)==null||v.call(w,y,this),(f=(m=E(this,Vt).config).onSettled)==null||f.call(m,this.state.data,y,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return O(this,Ft,uT({fn:l.fetchFn,abort:i.abort.bind(i),onSuccess:y=>{var w,v,m,f;if(typeof y>"u"){u(new Error(`${this.queryHash} data is undefined`));return}this.setData(y),(v=(w=E(this,Vt).config).onSuccess)==null||v.call(w,y,this),(f=(m=E(this,Vt).config).onSettled)==null||f.call(m,y,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(y,w)=>{Y(this,Jt,Dn).call(this,{type:"failed",failureCount:y,error:w})},onPause:()=>{Y(this,Jt,Dn).call(this,{type:"pause"})},onContinue:()=>{Y(this,Jt,Dn).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode})),O(this,vr,E(this,Ft).promise),E(this,vr)}},js=new WeakMap,$s=new WeakMap,Vt=new WeakMap,vr=new WeakMap,Ft=new WeakMap,Fe=new WeakMap,hl=new WeakMap,_i=new WeakMap,zs=new WeakSet,Xu=function(n){this.options={...E(this,hl),...n},this.updateGcTime(this.options.gcTime)},Jt=new WeakSet,Dn=function(n){const r=i=>{switch(n.type){case"failed":return{...i,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:n.meta??null,fetchStatus:xh(this.options.networkMode)?"fetching":"paused",...!i.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...i,data:n.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=n.error;return Qd(s)&&s.revert&&E(this,$s)?{...E(this,$s),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...n.state}}};this.state=r(this.state),qe.batch(()=>{E(this,Fe).forEach(i=>{i.onQueryUpdate()}),E(this,Vt).notify({query:this,type:"updated",action:n})})},jw);function OC(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=typeof e<"u",r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var fn,$w,DC=($w=class extends Pl{constructor(e={}){super();F(this,fn,void 0);this.config=e,O(this,fn,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??Tg(i,n);let o=this.get(s);return o||(o=new NC({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){E(this,fn).has(e.queryHash)||(E(this,fn).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=E(this,fn).get(e.queryHash);n&&(e.destroy(),n===e&&E(this,fn).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){qe.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return E(this,fn).get(e)}getAll(){return[...E(this,fn).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>m0(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>m0(e,r)):n}notify(e){qe.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){qe.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){qe.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},fn=new WeakMap,$w),pn,dl,At,Bs,mn,ar,zw,LC=(zw=class extends cT{constructor(n){super();F(this,mn);F(this,pn,void 0);F(this,dl,void 0);F(this,At,void 0);F(this,Bs,void 0);this.mutationId=n.mutationId,O(this,dl,n.defaultOptions),O(this,At,n.mutationCache),O(this,pn,[]),this.state=n.state||MC(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options={...E(this,dl),...n},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){E(this,pn).includes(n)||(E(this,pn).push(n),this.clearGcTimeout(),E(this,At).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){O(this,pn,E(this,pn).filter(r=>r!==n)),this.scheduleGc(),E(this,At).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){E(this,pn).length||(this.state.status==="pending"?this.scheduleGc():E(this,At).remove(this))}continue(){var n;return((n=E(this,Bs))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var s,o,a,l,u,c,h,d,p,y,w,v,m,f,g,T,S,C,P,N;const r=()=>(O(this,Bs,uT({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(U,B)=>{Y(this,mn,ar).call(this,{type:"failed",failureCount:U,error:B})},onPause:()=>{Y(this,mn,ar).call(this,{type:"pause"})},onContinue:()=>{Y(this,mn,ar).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),E(this,Bs).promise),i=this.state.status==="pending";try{if(!i){Y(this,mn,ar).call(this,{type:"pending",variables:n}),await((o=(s=E(this,At).config).onMutate)==null?void 0:o.call(s,n,this));const B=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,n));B!==this.state.context&&Y(this,mn,ar).call(this,{type:"pending",context:B,variables:n})}const U=await r();return await((c=(u=E(this,At).config).onSuccess)==null?void 0:c.call(u,U,n,this.state.context,this)),await((d=(h=this.options).onSuccess)==null?void 0:d.call(h,U,n,this.state.context)),await((y=(p=E(this,At).config).onSettled)==null?void 0:y.call(p,U,null,this.state.variables,this.state.context,this)),await((v=(w=this.options).onSettled)==null?void 0:v.call(w,U,null,n,this.state.context)),Y(this,mn,ar).call(this,{type:"success",data:U}),U}catch(U){try{throw await((f=(m=E(this,At).config).onError)==null?void 0:f.call(m,U,n,this.state.context,this)),await((T=(g=this.options).onError)==null?void 0:T.call(g,U,n,this.state.context)),await((C=(S=E(this,At).config).onSettled)==null?void 0:C.call(S,void 0,U,this.state.variables,this.state.context,this)),await((N=(P=this.options).onSettled)==null?void 0:N.call(P,void 0,U,n,this.state.context)),U}finally{Y(this,mn,ar).call(this,{type:"error",error:U})}}}},pn=new WeakMap,dl=new WeakMap,At=new WeakMap,Bs=new WeakMap,mn=new WeakSet,ar=function(n){const r=i=>{switch(n.type){case"failed":return{...i,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!xh(this.options.networkMode),status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...i,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:n.error,failureCount:i.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=r(this.state),qe.batch(()=>{E(this,pn).forEach(i=>{i.onMutationUpdate(n)}),E(this,At).notify({mutation:this,type:"updated",action:n})})},zw);function MC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ut,fl,wi,Bw,VC=(Bw=class extends Pl{constructor(e={}){super();F(this,Ut,void 0);F(this,fl,void 0);F(this,wi,void 0);this.config=e,O(this,Ut,[]),O(this,fl,0)}build(e,n,r){const i=new LC({mutationCache:this,mutationId:++ru(this,fl)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){E(this,Ut).push(e),this.notify({type:"added",mutation:e})}remove(e){O(this,Ut,E(this,Ut).filter(n=>n!==e)),this.notify({type:"removed",mutation:e})}clear(){qe.batch(()=>{E(this,Ut).forEach(e=>{this.remove(e)})})}getAll(){return E(this,Ut)}find(e){const n={exact:!0,...e};return E(this,Ut).find(r=>g0(n,r))}findAll(e={}){return E(this,Ut).filter(n=>g0(e,n))}notify(e){qe.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){return O(this,wi,(E(this,wi)??Promise.resolve()).then(()=>{const e=E(this,Ut).filter(n=>n.state.isPaused);return qe.batch(()=>e.reduce((n,r)=>n.then(()=>r.continue().catch(jt)),Promise.resolve()))}).then(()=>{O(this,wi,void 0)})),E(this,wi)}},Ut=new WeakMap,fl=new WeakMap,wi=new WeakMap,Bw);function FC(t){return{onFetch:(e,n)=>{const r=async()=>{var y,w,v,m,f;const i=e.options,s=(v=(w=(y=e.fetchOptions)==null?void 0:y.meta)==null?void 0:w.fetchMore)==null?void 0:v.direction,o=((m=e.state.data)==null?void 0:m.pages)||[],a=((f=e.state.data)==null?void 0:f.pageParams)||[],l={pages:[],pageParams:[]};let u=!1;const c=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},h=e.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`))),d=async(g,T,S)=>{if(u)return Promise.reject();if(T==null&&g.pages.length)return Promise.resolve(g);const C={queryKey:e.queryKey,pageParam:T,direction:S?"backward":"forward",meta:e.options.meta};c(C);const P=await h(C),{maxPages:N}=e.options,U=S?xC:kC;return{pages:U(g.pages,P,N),pageParams:U(g.pageParams,T,N)}};let p;if(s&&o.length){const g=s==="backward",T=g?UC:_0,S={pages:o,pageParams:a},C=T(i,S);p=await d(S,C,g)}else{p=await d(l,a[0]??i.initialPageParam);const g=t??o.length;for(let T=1;T<g;T++){const S=_0(i,p);p=await d(p,S)}}return p};e.options.persister?e.fetchFn=()=>{var i,s;return(s=(i=e.options).persister)==null?void 0:s.call(i,r,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=r}}}function _0(t,{pages:e,pageParams:n}){const r=e.length-1;return t.getNextPageParam(e[r],e,n[r],n)}function UC(t,{pages:e,pageParams:n}){var r;return(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n)}var be,_r,wr,Hs,Ws,Er,qs,Ks,Hw,jC=(Hw=class{constructor(t={}){F(this,be,void 0);F(this,_r,void 0);F(this,wr,void 0);F(this,Hs,void 0);F(this,Ws,void 0);F(this,Er,void 0);F(this,qs,void 0);F(this,Ks,void 0);O(this,be,t.queryCache||new DC),O(this,_r,t.mutationCache||new VC),O(this,wr,t.defaultOptions||{}),O(this,Hs,new Map),O(this,Ws,new Map),O(this,Er,0)}mount(){ru(this,Er)._++,E(this,Er)===1&&(O(this,qs,bc.subscribe(()=>{bc.isFocused()&&(this.resumePausedMutations(),E(this,be).onFocus())})),O(this,Ks,Nc.subscribe(()=>{Nc.isOnline()&&(this.resumePausedMutations(),E(this,be).onOnline())})))}unmount(){var t,e;ru(this,Er)._--,E(this,Er)===0&&((t=E(this,qs))==null||t.call(this),O(this,qs,void 0),(e=E(this,Ks))==null||e.call(this),O(this,Ks,void 0))}isFetching(t){return E(this,be).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return E(this,_r).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=E(this,be).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);return e!==void 0?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=E(this,be).get(r.queryHash),s=i==null?void 0:i.state.data,o=SC(e,s);if(!(typeof o>"u"))return E(this,be).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return qe.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=E(this,be).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=E(this,be);qe.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=E(this,be),r={type:"active",...t};return qe.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=qe.batch(()=>E(this,be).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(jt).catch(jt)}invalidateQueries(t={},e={}){return qe.batch(()=>{if(E(this,be).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=qe.batch(()=>E(this,be).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(jt)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(jt)}fetchQuery(t){const e=this.defaultQueryOptions(t);typeof e.retry>"u"&&(e.retry=!1);const n=E(this,be).build(this,e);return n.isStaleByTime(e.staleTime)?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(jt).catch(jt)}fetchInfiniteQuery(t){return t.behavior=FC(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(jt).catch(jt)}resumePausedMutations(){return E(this,_r).resumePausedMutations()}getQueryCache(){return E(this,be)}getMutationCache(){return E(this,_r)}getDefaultOptions(){return E(this,wr)}setDefaultOptions(t){O(this,wr,t)}setQueryDefaults(t,e){E(this,Hs).set(Va(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...E(this,Hs).values()];let n={};return e.forEach(r=>{Fa(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){E(this,Ws).set(Va(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...E(this,Ws).values()];let n={};return e.forEach(r=>{Fa(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...E(this,wr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Tg(e.queryKey,e)),typeof e.refetchOnReconnect>"u"&&(e.refetchOnReconnect=e.networkMode!=="always"),typeof e.throwOnError>"u"&&(e.throwOnError=!!e.suspense),typeof e.networkMode>"u"&&e.persister&&(e.networkMode="offlineFirst"),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...E(this,wr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){E(this,be).clear(),E(this,_r).clear()}},be=new WeakMap,_r=new WeakMap,wr=new WeakMap,Hs=new WeakMap,Ws=new WeakMap,Er=new WeakMap,qs=new WeakMap,Ks=new WeakMap,Hw),gt,ue,pl,ut,Ei,Qs,gn,ml,Gs,Ys,Ti,Ii,Tr,Xs,Si,Ko,gl,Ep,yl,Tp,vl,Ip,_l,Sp,wl,Ap,El,kp,Tl,xp,uh,hT,Ww,$C=(Ww=class extends Pl{constructor(e,n){super();F(this,Si);F(this,gl);F(this,yl);F(this,vl);F(this,_l);F(this,wl);F(this,El);F(this,Tl);F(this,uh);F(this,gt,void 0);F(this,ue,void 0);F(this,pl,void 0);F(this,ut,void 0);F(this,Ei,void 0);F(this,Qs,void 0);F(this,gn,void 0);F(this,ml,void 0);F(this,Gs,void 0);F(this,Ys,void 0);F(this,Ti,void 0);F(this,Ii,void 0);F(this,Tr,void 0);F(this,Xs,new Set);this.options=n,O(this,gt,e),O(this,gn,null),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(E(this,ue).addObserver(this),w0(E(this,ue),this.options)?Y(this,Si,Ko).call(this):this.updateResult(),Y(this,_l,Sp).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Pp(E(this,ue),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Pp(E(this,ue),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Y(this,wl,Ap).call(this),Y(this,El,kp).call(this),E(this,ue).removeObserver(this)}setOptions(e,n){const r=this.options,i=E(this,ue);if(this.options=E(this,gt).defaultQueryOptions(e),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");Y(this,Tl,xp).call(this),vp(this.options,r)||E(this,gt).getQueryCache().notify({type:"observerOptionsUpdated",query:E(this,ue),observer:this});const s=this.hasListeners();s&&E0(E(this,ue),i,this.options,r)&&Y(this,Si,Ko).call(this),this.updateResult(n),s&&(E(this,ue)!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&Y(this,gl,Ep).call(this);const o=Y(this,yl,Tp).call(this);s&&(E(this,ue)!==i||this.options.enabled!==r.enabled||o!==E(this,Tr))&&Y(this,vl,Ip).call(this,o)}getOptimisticResult(e){const n=E(this,gt).getQueryCache().build(E(this,gt),e),r=this.createResult(n,e);return BC(this,r)&&(O(this,ut,r),O(this,Qs,this.options),O(this,Ei,E(this,ue).state)),r}getCurrentResult(){return E(this,ut)}trackResult(e){const n={};return Object.keys(e).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(E(this,Xs).add(r),e[r])})}),n}getCurrentQuery(){return E(this,ue)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const n=E(this,gt).defaultQueryOptions(e),r=E(this,gt).getQueryCache().build(E(this,gt),n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(e){return Y(this,Si,Ko).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),E(this,ut)))}createResult(e,n){var C;const r=E(this,ue),i=this.options,s=E(this,ut),o=E(this,Ei),a=E(this,Qs),u=e!==r?e.state:E(this,pl),{state:c}=e;let{error:h,errorUpdatedAt:d,fetchStatus:p,status:y}=c,w=!1,v;if(n._optimisticResults){const P=this.hasListeners(),N=!P&&w0(e,n),U=P&&E0(e,r,n,i);(N||U)&&(p=xh(e.options.networkMode)?"fetching":"paused",c.dataUpdatedAt||(y="pending")),n._optimisticResults==="isRestoring"&&(p="idle")}if(n.select&&typeof c.data<"u")if(s&&c.data===(o==null?void 0:o.data)&&n.select===E(this,ml))v=E(this,Gs);else try{O(this,ml,n.select),v=n.select(c.data),v=wp(s==null?void 0:s.data,v,n),O(this,Gs,v),O(this,gn,null)}catch(P){O(this,gn,P)}else v=c.data;if(typeof n.placeholderData<"u"&&typeof v>"u"&&y==="pending"){let P;if(s!=null&&s.isPlaceholderData&&n.placeholderData===(a==null?void 0:a.placeholderData))P=s.data;else if(P=typeof n.placeholderData=="function"?n.placeholderData((C=E(this,Ys))==null?void 0:C.state.data,E(this,Ys)):n.placeholderData,n.select&&typeof P<"u")try{P=n.select(P),O(this,gn,null)}catch(N){O(this,gn,N)}typeof P<"u"&&(y="success",v=wp(s==null?void 0:s.data,P,n),w=!0)}E(this,gn)&&(h=E(this,gn),v=E(this,Gs),d=Date.now(),y="error");const m=p==="fetching",f=y==="pending",g=y==="error",T=f&&m;return{status:y,fetchStatus:p,isPending:f,isSuccess:y==="success",isError:g,isInitialLoading:T,isLoading:T,data:v,dataUpdatedAt:c.dataUpdatedAt,error:h,errorUpdatedAt:d,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>u.dataUpdateCount||c.errorUpdateCount>u.errorUpdateCount,isFetching:m,isRefetching:m&&!f,isLoadingError:g&&c.dataUpdatedAt===0,isPaused:p==="paused",isPlaceholderData:w,isRefetchError:g&&c.dataUpdatedAt!==0,isStale:Ig(e,n),refetch:this.refetch}}updateResult(e){const n=E(this,ut),r=this.createResult(E(this,ue),this.options);if(O(this,Ei,E(this,ue).state),O(this,Qs,this.options),E(this,Ei).data!==void 0&&O(this,Ys,E(this,ue)),vp(r,n))return;O(this,ut,r);const i={},s=()=>{if(!n)return!0;const{notifyOnChangeProps:o}=this.options,a=typeof o=="function"?o():o;if(a==="all"||!a&&!E(this,Xs).size)return!0;const l=new Set(a??E(this,Xs));return this.options.throwOnError&&l.add("error"),Object.keys(E(this,ut)).some(u=>{const c=u;return E(this,ut)[c]!==n[c]&&l.has(c)})};(e==null?void 0:e.listeners)!==!1&&s()&&(i.listeners=!0),Y(this,uh,hT).call(this,{...i,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Y(this,_l,Sp).call(this)}},gt=new WeakMap,ue=new WeakMap,pl=new WeakMap,ut=new WeakMap,Ei=new WeakMap,Qs=new WeakMap,gn=new WeakMap,ml=new WeakMap,Gs=new WeakMap,Ys=new WeakMap,Ti=new WeakMap,Ii=new WeakMap,Tr=new WeakMap,Xs=new WeakMap,Si=new WeakSet,Ko=function(e){Y(this,Tl,xp).call(this);let n=E(this,ue).fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(jt)),n},gl=new WeakSet,Ep=function(){if(Y(this,wl,Ap).call(this),so||E(this,ut).isStale||!yp(this.options.staleTime))return;const n=oT(E(this,ut).dataUpdatedAt,this.options.staleTime)+1;O(this,Ti,setTimeout(()=>{E(this,ut).isStale||this.updateResult()},n))},yl=new WeakSet,Tp=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(E(this,ue)):this.options.refetchInterval)??!1},vl=new WeakSet,Ip=function(e){Y(this,El,kp).call(this),O(this,Tr,e),!(so||this.options.enabled===!1||!yp(E(this,Tr))||E(this,Tr)===0)&&O(this,Ii,setInterval(()=>{(this.options.refetchIntervalInBackground||bc.isFocused())&&Y(this,Si,Ko).call(this)},E(this,Tr)))},_l=new WeakSet,Sp=function(){Y(this,gl,Ep).call(this),Y(this,vl,Ip).call(this,Y(this,yl,Tp).call(this))},wl=new WeakSet,Ap=function(){E(this,Ti)&&(clearTimeout(E(this,Ti)),O(this,Ti,void 0))},El=new WeakSet,kp=function(){E(this,Ii)&&(clearInterval(E(this,Ii)),O(this,Ii,void 0))},Tl=new WeakSet,xp=function(){const e=E(this,gt).getQueryCache().build(E(this,gt),this.options);if(e===E(this,ue))return;const n=E(this,ue);O(this,ue,e),O(this,pl,e.state),this.hasListeners()&&(n==null||n.removeObserver(this),e.addObserver(this))},uh=new WeakSet,hT=function(e){qe.batch(()=>{e.listeners&&this.listeners.forEach(n=>{n(E(this,ut))}),E(this,gt).getQueryCache().notify({query:E(this,ue),type:"observerResultsUpdated"})})},Ww);function zC(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function w0(t,e){return zC(t,e)||t.state.dataUpdatedAt>0&&Pp(t,e,e.refetchOnMount)}function Pp(t,e,n){if(e.enabled!==!1){const r=typeof n=="function"?n(t):n;return r==="always"||r!==!1&&Ig(t,e)}return!1}function E0(t,e,n,r){return n.enabled!==!1&&(t!==e||r.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&Ig(t,n)}function Ig(t,e){return t.isStaleByTime(e.staleTime)}function BC(t,e){return!vp(t.getCurrentResult(),e)}var dT=I.createContext(void 0),HC=t=>{const e=I.useContext(dT);if(t)return t;if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},WC=({client:t,children:e})=>(I.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),_.jsx(dT.Provider,{value:t,children:e})),fT=I.createContext(!1),qC=()=>I.useContext(fT);fT.Provider;function KC(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var QC=I.createContext(KC()),GC=()=>I.useContext(QC);function YC(t,e){return typeof t=="function"?t(...e):!!t}var XC=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},JC=t=>{I.useEffect(()=>{t.clearReset()},[t])},ZC=({result:t,errorResetBoundary:e,throwOnError:n,query:r})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&YC(n,[t.error,r]),eR=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},tR=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,nR=(t,e,n)=>e.fetchOptimistic(t).catch(()=>{n.clearReset()});function rR(t,e,n){const r=HC(n),i=qC(),s=GC(),o=r.defaultQueryOptions(t);o._optimisticResults=i?"isRestoring":"optimistic",eR(o),XC(o,s),JC(s);const[a]=I.useState(()=>new e(r,o)),l=a.getOptimisticResult(o);if(I.useSyncExternalStore(I.useCallback(u=>{const c=i?()=>{}:a.subscribe(qe.batchCalls(u));return a.updateResult(),c},[a,i]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),I.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),tR(o,l))throw nR(o,a,s);if(ZC({result:l,errorResetBoundary:s,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash)}))throw l.error;return o.notifyOnChangeProps?l:a.trackResult(l)}function iR(t,e){return rR(t,$C,e)}const sR={theme:"system",setTheme:()=>null},pT=I.createContext(sR);function oR({children:t,defaultTheme:e="system",storageKey:n="vite-ui-theme",...r}){const[i,s]=I.useState(()=>localStorage.getItem(n)||e);I.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),i==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(i)},[i]);const o={theme:i,setTheme:a=>{localStorage.setItem(n,a),s(a)}};return _.jsx(pT.Provider,{...r,value:o,children:t})}const aR=()=>{const t=I.useContext(pT);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ua.apply(this,arguments)}var Ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ar||(Ar={}));const T0="popstate";function lR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Oc(i)}return cR(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uR(){return Math.random().toString(36).substr(2,8)}function I0(t,e){return{usr:t.state,key:t.key,idx:e}}function Cp(t,e,n,r){return n===void 0&&(n=null),Ua({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_o(e):e,{state:n,key:e&&e.key||r||uR()})}function Oc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _o(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ar.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ua({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ar.Pop;let v=c(),m=v==null?null:v-u;u=v,l&&l({action:a,location:w.location,delta:m})}function d(v,m){a=Ar.Push;let f=Cp(w.location,v,m);n&&n(f,v),u=c()+1;let g=I0(f,u),T=w.createHref(f);try{o.pushState(g,"",T)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(T)}s&&l&&l({action:a,location:w.location,delta:1})}function p(v,m){a=Ar.Replace;let f=Cp(w.location,v,m);n&&n(f,v),u=c();let g=I0(f,u),T=w.createHref(f);o.replaceState(g,"",T),s&&l&&l({action:a,location:w.location,delta:0})}function y(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof v=="string"?v:Oc(v);return f=f.replace(/ $/,"%20"),Pe(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(T0,h),l=v,()=>{i.removeEventListener(T0,h),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let m=y(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(v){return o.go(v)}};return w}var S0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(S0||(S0={}));function hR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_o(e):e,i=Sg(r.pathname||"/",n);if(i==null)return null;let s=gT(t);dR(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=SR(i);o=ER(s[a],l)}return o}function gT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Mr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:_R(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of yT(s.path))i(s,o,l)}),e}function yT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function dR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fR=/^:[\w-]+$/,pR=3,mR=2,gR=1,yR=10,vR=-2,A0=t=>t==="*";function _R(t,e){let n=t.split("/"),r=n.length;return n.some(A0)&&(r+=vR),e&&(r+=mR),n.filter(i=>!A0(i)).reduce((i,s)=>i+(fR.test(s)?pR:s===""?gR:yR),r)}function wR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ER(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=TR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Mr([i,c.pathname]),pathnameBase:PR(Mr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Mr([i,c.pathnameBase]))}return s}function TR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let w=a[h]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[h];return p&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function IR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function SR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function AR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_o(t):t;return{pathname:n?n.startsWith("/")?n:kR(n,e):e,search:CR(r),hash:RR(i)}}function kR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vT(t,e){let n=xR(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _T(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_o(t):(i=Ua({},t),Pe(!i.pathname||!i.pathname.includes("?"),Gd("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Gd("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Gd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=AR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Mr=t=>t.join("/").replace(/\/\/+/g,"/"),PR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const wT=["post","put","patch","delete"];new Set(wT);const NR=["get",...wT];new Set(NR);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ja.apply(this,arguments)}const Ag=I.createContext(null),OR=I.createContext(null),Ki=I.createContext(null),Ph=I.createContext(null),Qi=I.createContext({outlet:null,matches:[],isDataRoute:!1}),ET=I.createContext(null);function DR(t,e){let{relative:n}=e===void 0?{}:e;Cl()||Pe(!1);let{basename:r,navigator:i}=I.useContext(Ki),{hash:s,pathname:o,search:a}=ST(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Mr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Cl(){return I.useContext(Ph)!=null}function wo(){return Cl()||Pe(!1),I.useContext(Ph).location}function TT(t){I.useContext(Ki).static||I.useLayoutEffect(t)}function IT(){let{isDataRoute:t}=I.useContext(Qi);return t?qR():LR()}function LR(){Cl()||Pe(!1);let t=I.useContext(Ag),{basename:e,future:n,navigator:r}=I.useContext(Ki),{matches:i}=I.useContext(Qi),{pathname:s}=wo(),o=JSON.stringify(vT(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return TT(()=>{a.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=_T(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Mr([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function ST(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(Ki),{matches:i}=I.useContext(Qi),{pathname:s}=wo(),o=JSON.stringify(vT(i,r.v7_relativeSplatPath));return I.useMemo(()=>_T(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function MR(t,e){return VR(t,e)}function VR(t,e,n,r){Cl()||Pe(!1);let{navigator:i}=I.useContext(Ki),{matches:s}=I.useContext(Qi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=wo(),c;if(e){var h;let v=typeof e=="string"?_o(e):e;l==="/"||(h=v.pathname)!=null&&h.startsWith(l)||Pe(!1),c=v}else c=u;let d=c.pathname||"/",p=d;if(l!=="/"){let v=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=hR(t,{pathname:p}),w=zR(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Mr([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Mr([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&w?I.createElement(Ph.Provider,{value:{location:ja({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ar.Pop}},w):w}function FR(){let t=xT(),e=bR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const UR=I.createElement(FR,null);class jR extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(Qi.Provider,{value:this.props.routeContext},I.createElement(ET.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $R(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Ag);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Qi.Provider,{value:e},r)}function zR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||Pe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:p}=n,y=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let p,y=!1,w=null,v=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||UR,l&&(u<0&&d===0?(KR("route-fallback",!1),y=!0,v=null):u===d&&(y=!0,v=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,d+1)),f=()=>{let g;return p?g=w:y?g=v:h.route.Component?g=I.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,I.createElement($R,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?I.createElement(jR,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var AT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(AT||{}),Dc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Dc||{});function BR(t){let e=I.useContext(Ag);return e||Pe(!1),e}function HR(t){let e=I.useContext(OR);return e||Pe(!1),e}function WR(t){let e=I.useContext(Qi);return e||Pe(!1),e}function kT(t){let e=WR(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function xT(){var t;let e=I.useContext(ET),n=HR(Dc.UseRouteError),r=kT(Dc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function qR(){let{router:t}=BR(AT.UseNavigateStable),e=kT(Dc.UseNavigateStable),n=I.useRef(!1);return TT(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ja({fromRouteId:e},s)))},[t,e])}const k0={};function KR(t,e,n){!e&&!k0[t]&&(k0[t]=!0)}function Rp(t){Pe(!1)}function QR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ar.Pop,navigator:s,static:o=!1,future:a}=t;Cl()&&Pe(!1);let l=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:o,future:ja({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=_o(r));let{pathname:c="/",search:h="",hash:d="",state:p=null,key:y="default"}=r,w=I.useMemo(()=>{let v=Sg(c,l);return v==null?null:{location:{pathname:v,search:h,hash:d,state:p,key:y},navigationType:i}},[l,c,h,d,p,y,i]);return w==null?null:I.createElement(Ki.Provider,{value:u},I.createElement(Ph.Provider,{children:n,value:w}))}function GR(t){let{children:e,location:n}=t;return MR(bp(e),n)}new Promise(()=>{});function bp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,bp(r.props.children,s));return}r.type!==Rp&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Np(){return Np=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Np.apply(this,arguments)}function YR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JR(t,e){return t.button===0&&(!e||e==="_self")&&!XR(t)}const ZR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],e2="6";try{window.__reactRouterVersion=e2}catch{}const t2="startTransition",x0=fx[t2];function n2(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=lR({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&x0?x0(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(QR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const r2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vr=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=YR(e,ZR),{basename:p}=I.useContext(Ki),y,w=!1;if(typeof u=="string"&&i2.test(u)&&(y=u,r2))try{let g=new URL(window.location.href),T=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=Sg(T.pathname,p);T.origin===g.origin&&S!=null?u=S+T.search+T.hash:w=!0}catch{}let v=DR(u,{relative:i}),m=s2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||m(g)}return I.createElement("a",Np({},d,{href:y||v,onClick:w||s?r:f,ref:n,target:l}))});var P0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(P0||(P0={}));var C0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(C0||(C0={}));function s2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=IT(),u=wo(),c=ST(t,{relative:o});return I.useCallback(h=>{if(JR(h,n)){h.preventDefault();let d=r!==void 0?r:Oc(u)===Oc(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}var R0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},o2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},CT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new a2;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l2=function(t){const e=PT(t);return CT.encodeByteArray(e,!0)},Lc=function(t){return l2(t).replace(/\./g,"")},RT=function(t){try{return CT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=()=>u2().__FIREBASE_DEFAULTS__,h2=()=>{if(typeof process>"u"||typeof R0>"u")return;const t=R0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},d2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&RT(t[1]);return e&&JSON.parse(e)},Ch=()=>{try{return c2()||h2()||d2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bT=t=>{var e,n;return(n=(e=Ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},f2=t=>{const e=bT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},NT=()=>{var t;return(t=Ch())===null||t===void 0?void 0:t.config},OT=t=>{var e;return(e=Ch())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lc(JSON.stringify(n)),Lc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function y2(){var t;const e=(t=Ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function v2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _2(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w2(){return!y2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kg(){try{return typeof indexedDB=="object"}catch{return!1}}function LT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function E2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=T2,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new St(i,a,r)}}function I2(t,e){return t.replace(S2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const S2=/\{\$([^}]+)}/g;function A2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $a(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(b0(s)&&b0(o)){if(!$a(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function b0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function k2(t,e){const n=new x2(t,e);return n.subscribe.bind(n)}class x2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yd),i.error===void 0&&(i.error=Yd),i.complete===void 0&&(i.complete=Yd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=1e3,R2=2,b2=4*60*60*1e3,N2=.5;function N0(t,e=C2,n=R2){const r=e*Math.pow(n,t),i=Math.round(N2*r*(Math.random()-.5)*2);return Math.min(b2,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new p2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L2(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D2(t){return t===si?void 0:t}function L2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new O2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const V2={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},F2=ee.INFO,U2={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},j2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=U2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rh{constructor(e){this.name=e,this._logLevel=F2,this._logHandler=j2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const $2=(t,e)=>e.some(n=>t instanceof n);let O0,D0;function z2(){return O0||(O0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B2(){return D0||(D0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const MT=new WeakMap,Op=new WeakMap,VT=new WeakMap,Xd=new WeakMap,xg=new WeakMap;function H2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&MT.set(n,t)}).catch(()=>{}),xg.set(e,t),e}function W2(t){if(Op.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Op.set(t,e)}let Dp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Op.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function q2(t){Dp=t(Dp)}function K2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jd(this),e,...n);return VT.set(r,e.sort?e.sort():[e]),Fr(r)}:B2().includes(t)?function(...e){return t.apply(Jd(this),e),Fr(MT.get(this))}:function(...e){return Fr(t.apply(Jd(this),e))}}function Q2(t){return typeof t=="function"?K2(t):(t instanceof IDBTransaction&&W2(t),$2(t,z2())?new Proxy(t,Dp):t)}function Fr(t){if(t instanceof IDBRequest)return H2(t);if(Xd.has(t))return Xd.get(t);const e=Q2(t);return e!==t&&(Xd.set(t,e),xg.set(e,t)),e}const Jd=t=>xg.get(t);function FT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fr(o.result),l.oldVersion,l.newVersion,Fr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const G2=["get","getKey","getAll","getAllKeys","count"],Y2=["put","add","delete","clear"],Zd=new Map;function L0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zd.get(e))return Zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||G2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zd.set(e,s),s}q2(t=>({...t,get:(e,n,r)=>L0(e,n)||t.get(e,n,r),has:(e,n)=>!!L0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lp="@firebase/app",M0="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Rh("@firebase/app"),Z2="@firebase/app-compat",eb="@firebase/analytics-compat",tb="@firebase/analytics",nb="@firebase/app-check-compat",rb="@firebase/app-check",ib="@firebase/auth",sb="@firebase/auth-compat",ob="@firebase/database",ab="@firebase/database-compat",lb="@firebase/functions",ub="@firebase/functions-compat",cb="@firebase/installations",hb="@firebase/installations-compat",db="@firebase/messaging",fb="@firebase/messaging-compat",pb="@firebase/performance",mb="@firebase/performance-compat",gb="@firebase/remote-config",yb="@firebase/remote-config-compat",vb="@firebase/storage",_b="@firebase/storage-compat",wb="@firebase/firestore",Eb="@firebase/firestore-compat",Tb="firebase",Ib="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="[DEFAULT]",Sb={[Lp]:"fire-core",[Z2]:"fire-core-compat",[tb]:"fire-analytics",[eb]:"fire-analytics-compat",[rb]:"fire-app-check",[nb]:"fire-app-check-compat",[ib]:"fire-auth",[sb]:"fire-auth-compat",[ob]:"fire-rtdb",[ab]:"fire-rtdb-compat",[lb]:"fire-fn",[ub]:"fire-fn-compat",[cb]:"fire-iid",[hb]:"fire-iid-compat",[db]:"fire-fcm",[fb]:"fire-fcm-compat",[pb]:"fire-perf",[mb]:"fire-perf-compat",[gb]:"fire-rc",[yb]:"fire-rc-compat",[vb]:"fire-gcs",[_b]:"fire-gcs-compat",[wb]:"fire-fst",[Eb]:"fire-fst-compat","fire-js":"fire-js",[Tb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map,Ab=new Map,Vp=new Map;function V0(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(Vp.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;Vp.set(e,t);for(const n of Mc.values())V0(n,t);for(const n of Ab.values())V0(n,t);return!0}function Yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Gi("app","Firebase",kb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=Ib;function UT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ur.create("bad-app-name",{appName:String(i)});if(n||(n=NT()),!n)throw Ur.create("no-options");const s=Mc.get(i);if(s){if($a(n,s.options)&&$a(r,s.config))return s;throw Ur.create("duplicate-app",{appName:i})}const o=new M2(i);for(const l of Vp.values())o.addComponent(l);const a=new xb(n,r,o);return Mc.set(i,a),a}function Pg(t=Mp){const e=Mc.get(t);if(!e&&t===Mp&&NT())return UT();if(!e)throw Ur.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let i=(r=Sb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}Rn(new an(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="firebase-heartbeat-database",Cb=1,za="firebase-heartbeat-store";let ef=null;function jT(){return ef||(ef=FT(Pb,Cb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(za)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),ef}async function Rb(t){try{const n=(await jT()).transaction(za),r=await n.objectStore(za).get($T(t));return await n.done,r}catch(e){if(e instanceof St)Oi.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function F0(t,e){try{const r=(await jT()).transaction(za,"readwrite");await r.objectStore(za).put(e,$T(t)),await r.done}catch(n){if(n instanceof St)Oi.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function $T(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=1024,Nb=30*24*60*60*1e3;class Ob{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=U0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Nb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U0(),{heartbeatsToSend:r,unsentEntries:i}=Db(this._heartbeatsCache.heartbeats),s=Lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function U0(){return new Date().toISOString().substring(0,10)}function Db(t,e=bb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),j0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),j0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kg()?LT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function j0(t){return Lc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){Rn(new an("platform-logger",e=>new X2(e),"PRIVATE")),Rn(new an("heartbeat",e=>new Ob(e),"PRIVATE")),qt(Lp,M0,t),qt(Lp,M0,"esm2017"),qt("fire-js","")}Mb("");function Cg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vb=zT,BT=new Gi("auth","Firebase",zT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Rh("@firebase/auth");function Fb(t,...e){Vc.logLevel<=ee.WARN&&Vc.warn(`Auth (${Eo}): ${t}`,...e)}function Ju(t,...e){Vc.logLevel<=ee.ERROR&&Vc.error(`Auth (${Eo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Rg(t,...e)}function Sn(t,...e){return Rg(t,...e)}function HT(t,e,n){const r=Object.assign(Object.assign({},Vb()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return HT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BT.create(t,...e)}function $(t,e,...n){if(!t)throw Rg(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ju(e),new Error(e)}function Gn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ub(){return $0()==="http:"||$0()==="https:"}function $0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ub()||DT()||"connection"in navigator)?navigator.onLine:!0}function $b(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=g2()||v2()}get(){return jb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=new bl(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cn(t,e,n,r,i={}){return qT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WT.fetch()(KT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function qT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zb),e);try{const i=new Wb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw HT(t,c,u);ln(t,c)}}catch(i){if(i instanceof St)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function Nl(t,e,n,r,i={}){const s=await cn(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function KT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bg(t.config,i):`${t.config.apiScheme}://${i}`}function Hb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),Bb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function z0(t){return t!==void 0&&t.enterprise!==void 0}class qb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Kb(t,e){return cn(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e){return cn(t,"POST","/v1/accounts:delete",e)}async function QT(t,e){return cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gb(t,e=!1){const n=Re(t),r=await n.getIdToken(e),i=Ng(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ca(tf(i.auth_time)),issuedAtTime:ca(tf(i.iat)),expirationTime:ca(tf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tf(t){return Number(t)*1e3}function Ng(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const i=RT(n);return i?JSON.parse(i):(Ju("Failed to decode base64 JWT payload"),null)}catch(i){return Ju("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function B0(t){const e=Ng(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&Yb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Di(t,QT(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GT(s.providerUserInfo):[],a=Zb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Up(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Jb(t){const e=Re(t);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GT(t){return t.map(e=>{var{providerId:n}=e,r=Cg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t,e){const n=await qT(t,{},async()=>{const r=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=KT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tN(t,e){return cn(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):B0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=B0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Rs;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Up(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gb(this,e)}reload(){return Jb(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Di(this,Qb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:T,isAnonymous:S,providerData:C,stsTokenManager:P}=n;$(g&&P,e,"internal-error");const N=Rs.fromJSON(this.name,P);$(typeof g=="string",e,"internal-error"),sr(h,e.name),sr(d,e.name),$(typeof T=="boolean",e,"internal-error"),$(typeof S=="boolean",e,"internal-error"),sr(p,e.name),sr(y,e.name),sr(w,e.name),sr(v,e.name),sr(m,e.name),sr(f,e.name);const U=new jn({uid:g,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:p,tenantId:w,stsTokenManager:N,createdAt:m,lastLoginAt:f});return C&&Array.isArray(C)&&(U.providerData=C.map(B=>Object.assign({},B))),v&&(U._redirectEventId=v),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rs;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?GT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Rs;a.updateFromIdToken(r);const l=new jn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Up(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new Map;function $n(t){Gn(t instanceof Function,"Expected a class definition");let e=H0.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,H0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YT.type="NONE";const W0=YT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs($n(W0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$n(W0);const o=Zu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=jn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new bs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tI(e))return"Blackberry";if(nI(e))return"Webos";if(Og(e))return"Safari";if((e.includes("chrome/")||JT(e))&&!e.includes("edge/"))return"Chrome";if(eI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XT(t=Ce()){return/firefox\//i.test(t)}function Og(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JT(t=Ce()){return/crios\//i.test(t)}function ZT(t=Ce()){return/iemobile/i.test(t)}function eI(t=Ce()){return/android/i.test(t)}function tI(t=Ce()){return/blackberry/i.test(t)}function nI(t=Ce()){return/webos/i.test(t)}function bh(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nN(t=Ce()){var e;return bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rN(){return _2()&&document.documentMode===10}function rI(t=Ce()){return bh(t)||eI(t)||nI(t)||tI(t)||/windows phone/i.test(t)||ZT(t)}function iN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t,e=[]){let n;switch(t){case"Browser":n=q0(Ce());break;case"Worker":n=`${q0(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Eo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t,e={}){return cn(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=6;class lN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new K0(this),this.idTokenSubscription=new K0(this),this.beforeStateQueue=new sN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await QT(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$b()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(An(this));const n=e?Re(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oN(this),n=new lN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return Re(t)}class K0{constructor(e){this.auth=e,this.observer=null,this.addObserver=k2(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cN(t){Nh=t}function sI(t){return Nh.loadJS(t)}function hN(){return Nh.recaptchaEnterpriseScript}function dN(){return Nh.gapiScript}function fN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pN="recaptcha-enterprise",mN="NO_RECAPTCHA";class gN{constructor(e){this.type=pN,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Kb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;z0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&z0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hN();l.length!==0&&(l+=a),sI(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Q0(t,e,n,r=!1){const i=new gN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Q0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Q0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t,e){const n=Yi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($a(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function vN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _N(t,e,n){const r=Xr(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=oI(e),{host:o,port:a}=wN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||EN()}function oI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wN(t){const e=oI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:G0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:G0(o)}}}function G0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function TN(t,e){return cn(t,"POST","/v1/accounts:update",e)}async function IN(t,e){return cn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e){return Nl(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function AN(t,e){return cn(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function kN(t,e){return AN(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,e){return Nl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function PN(t,e){return Nl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Dg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ba(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ba(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(e,n,"signInWithPassword",SN);case"emailLink":return xN(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(e,r,"signUpPassword",IN);case"emailLink":return PN(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return Nl(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="http://localhost";class Li extends Dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:CN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bN(t){const e=Qo(Go(t)).link,n=e?Qo(Go(e)).deep_link_id:null,r=Qo(Go(t)).deep_link_id;return(r?Qo(Go(r)).link:null)||r||n||e||t}class Lg{constructor(e){var n,r,i,s,o,a;const l=Qo(Go(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=RN((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bN(e);try{return new Lg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,n){return Ba._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lg.parseLink(n);return $(r,"argument-error"),Ba._fromEmailAndCode(e,r.code,r.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends aI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ol{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ol{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ol{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e){return Nl(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=Y0(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Y0(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Y0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends St{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jc(e,n,r,i)}}function lI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jc._fromErrorAndOperation(t,s,e,r):s})}async function ON(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await Di(t,lI(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Ng(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e,n=!1){if(tn(t.app))return Promise.reject(An(t));const r="signIn",i=await lI(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function LN(t,e){return uI(Xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VN(t,e,n){const r=Xr(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&MN(r,i,n),await Uc(r,i,"getOobCode",kN)}async function FN(t,e,n){if(tn(t.app))return Promise.reject(An(t));const r=Xr(t),o=await Uc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cI(t),l}),a=await Mi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function UN(t,e,n){return tn(t.app)?Promise.reject(An(t)):LN(Re(t),To.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cI(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t,e){return cn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Re(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Di(r,jN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function zN(t,e){const n=Re(t);return tn(n.auth.app)?Promise.reject(An(n.auth)):BN(n,e,null)}async function BN(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Di(t,TN(r,s));await t._updateTokensIfNecessary(o,!0)}function HN(t,e,n,r){return Re(t).onIdTokenChanged(e,n,r)}function WN(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function qN(t,e,n,r){return Re(t).onAuthStateChanged(e,n,r)}function KN(t){return Re(t).signOut()}const $c="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(){const t=Ce();return Og(t)||bh(t)}const GN=1e3,YN=10;class dI extends hI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QN()&&iN(),this.fallbackToPolling=rI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dI.type="LOCAL";const XN=dI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI extends hI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fI.type="SESSION";const pI=fI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await JN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Mg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function eO(t){kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function tO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rO(){return mI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="firebaseLocalStorageDb",iO=1,zc="firebaseLocalStorage",yI="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dh(t,e){return t.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function sO(){const t=indexedDB.deleteDatabase(gI);return new Dl(t).toPromise()}function jp(){const t=indexedDB.open(gI,iO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zc,{keyPath:yI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zc)?e(r):(r.close(),await sO(),e(await jp()))})})}async function X0(t,e,n){const r=Dh(t,!0).put({[yI]:e,value:n});return new Dl(r).toPromise()}async function oO(t,e){const n=Dh(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function J0(t,e){const n=Dh(t,!0).delete(e);return new Dl(n).toPromise()}const aO=800,lO=3;class vI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oh._getInstance(rO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tO(),!this.activeServiceWorker)return;this.sender=new ZN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jp();return await X0(e,$c,"1"),await J0(e,$c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>X0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>J0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dh(i,!1).getAll();return new Dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vI.type="LOCAL";const uO=vI;new bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t,e){return e?$n(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends Dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hO(t){return uI(t.auth,new Vg(t),t.bypassAuthState)}function dO(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),DN(n,new Vg(t),t.bypassAuthState)}async function fO(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),ON(n,new Vg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hO;case"linkViaPopup":case"linkViaRedirect":return fO;case"reauthViaPopup":case"reauthViaRedirect":return dO;default:ln(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new bl(2e3,1e4);class _s extends _I{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Mg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pO.get())};e()}}_s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="pendingRedirect",ec=new Map;class gO extends _I{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ec.get(this.auth._key());if(!e){try{const r=await yO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ec.set(this.auth._key(),e)}return this.bypassAuthState||ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yO(t,e){const n=wO(e),r=_O(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vO(t,e){ec.set(t._key(),e)}function _O(t){return $n(t._redirectPersistence)}function wO(t){return Zu(mO,t.config.apiKey,t.name)}async function EO(t,e,n=!1){if(tn(t.app))return Promise.reject(An(t));const r=Xr(t),i=cO(r,e),o=await new gO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=10*60*1e3;class IO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Z0(e))}saveEventToCache(e){this.cachedEventUids.add(Z0(e)),this.lastProcessedEventTime=Date.now()}}function Z0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e={}){return cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xO=/^https?/;async function PO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AO(t);for(const n of e)try{if(CO(n))return}catch{}ln(t,"unauthorized-domain")}function CO(t){const e=Fp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xO.test(n))return!1;if(kO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=new bl(3e4,6e4);function e_(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bO(t){return new Promise((e,n)=>{var r,i,s;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(Sn(t,"network-request-failed"))},timeout:RO.get()})}if(!((i=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kn().gapi)===null||s===void 0)&&s.load)o();else{const a=fN("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},sI(`${dN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw tc=null,e})}let tc=null;function NO(t){return tc=tc||bO(t),tc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=new bl(5e3,15e3),DO="__/auth/iframe",LO="emulator/auth/iframe",MO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FO(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bg(e,LO):`https://${t.config.authDomain}/${DO}`,r={apiKey:e.apiKey,appName:t.name,v:Eo},i=VO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rl(r).slice(1)}`}async function UO(t){const e=await NO(t),n=kn().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:FO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=kn().setTimeout(()=>{s(o)},OO.get());function l(){kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$O=500,zO=600,BO="_blank",HO="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WO(t,e,n,r=$O,i=zO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ce().toLowerCase();n&&(a=JT(u)?BO:n),XT(u)&&(e=e||HO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(nN(u)&&a!=="_self")return qO(e||"",a),new t_(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new t_(h)}function qO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO="__/auth/handler",QO="emulator/auth/handler",GO=encodeURIComponent("fac");async function n_(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Eo,eventId:i};if(e instanceof aI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",A2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ol){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${GO}=${encodeURIComponent(l)}`:"";return`${YO(t)}?${Rl(a).slice(1)}${u}`}function YO({config:t}){return t.emulator?bg(t,QO):`https://${t.authDomain}/${KO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="webStorageSupport";class XO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pI,this._completeRedirectFn=EO,this._overrideRedirectResult=vO}async _openPopup(e,n,r,i){var s;Gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,Fp(),i);return WO(e,o,Mg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await n_(e,n,r,Fp(),i);return eO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UO(e),r=new IO(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nf,{type:nf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nf];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rI()||Og()||bh()}}const JO=XO;var r_="@firebase/auth",i_="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tD(t){Rn(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iI(t)},u=new uN(r,i,s,l);return vN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new an("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new ZO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(r_,i_,eD(t)),qt(r_,i_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=5*60,rD=OT("authIdTokenMaxAge")||nD;let s_=null;const iD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rD)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ll(t=Pg()){const e=Yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yN(t,{popupRedirectResolver:JO,persistence:[uO,XN,pI]}),r=OT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=iD(s.toString());WN(n,o,()=>o(n.currentUser)),HN(n,a=>o(a))}}const i=bT("auth");return i&&_N(n,`http://${i}`),n}function sD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tD("Browser");var oD="firebase",aD="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(oD,aD,"app");const EI="@firebase/installations",Fg="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=1e4,II=`w:${Fg}`,SI="FIS_v2",lD="https://firebaseinstallations.googleapis.com/v1",uD=60*60*1e3,cD="installations",hD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vi=new Gi(cD,hD,dD);function AI(t){return t instanceof St&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI({projectId:t}){return`${lD}/projects/${t}/installations`}function xI(t){return{token:t.token,requestStatus:2,expiresIn:pD(t.expiresIn),creationTime:Date.now()}}async function PI(t,e){const r=(await e.json()).error;return Vi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function CI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fD(t,{refreshToken:e}){const n=CI(t);return n.append("Authorization",mD(e)),n}async function RI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pD(t){return Number(t.replace("s","000"))}function mD(t){return`${SI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=kI(t),i=CI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:SI,appId:t.appId,sdkVersion:II},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await RI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:xI(u.authToken)}}else throw await PI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=/^[cdef][\w-]{21}$/,$p="";function _D(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wD(t);return vD.test(n)?n:$p}catch{return $p}}function wD(t){return yD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new Map;function OI(t,e){const n=Lh(t);DI(n,e),ED(n,e)}function DI(t,e){const n=NI.get(t);if(n)for(const r of n)r(e)}function ED(t,e){const n=TD();n&&n.postMessage({key:t,fid:e}),ID()}let ci=null;function TD(){return!ci&&"BroadcastChannel"in self&&(ci=new BroadcastChannel("[Firebase] FID Change"),ci.onmessage=t=>{DI(t.data.key,t.data.fid)}),ci}function ID(){NI.size===0&&ci&&(ci.close(),ci=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="firebase-installations-database",AD=1,Fi="firebase-installations-store";let rf=null;function Ug(){return rf||(rf=FT(SD,AD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}})),rf}async function Bc(t,e){const n=Lh(t),i=(await Ug()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&OI(t,e.fid),e}async function LI(t){const e=Lh(t),r=(await Ug()).transaction(Fi,"readwrite");await r.objectStore(Fi).delete(e),await r.done}async function Mh(t,e){const n=Lh(t),i=(await Ug()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&OI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t){let e;const n=await Mh(t.appConfig,r=>{const i=kD(r),s=xD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===$p?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kD(t){const e=t||{fid:_D(),registrationStatus:0};return MI(e)}function xD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CD(t)}:{installationEntry:e}}async function PD(t,e){try{const n=await gD(t,e);return Bc(t.appConfig,n)}catch(n){throw AI(n)&&n.customData.serverCode===409?await LI(t.appConfig):await Bc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CD(t){let e=await o_(t.appConfig);for(;e.registrationStatus===1;)await bI(100),e=await o_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jg(t);return r||n}return e}function o_(t){return Mh(t,e=>{if(!e)throw Vi.create("installation-not-found");return MI(e)})}function MI(t){return RD(t)?{fid:t.fid,registrationStatus:0}:t}function RD(t){return t.registrationStatus===1&&t.registrationTime+TI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD({appConfig:t,heartbeatServiceProvider:e},n){const r=ND(t,n),i=fD(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:II,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await RI(()=>fetch(r,a));if(l.ok){const u=await l.json();return xI(u)}else throw await PI("Generate Auth Token",l)}function ND(t,{fid:e}){return`${kI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t,e=!1){let n;const r=await Mh(t.appConfig,s=>{if(!VI(s))throw Vi.create("not-registered");const o=s.authToken;if(!e&&LD(o))return s;if(o.requestStatus===1)return n=OD(t,e),s;{if(!navigator.onLine)throw Vi.create("app-offline");const a=VD(s);return n=DD(t,a),a}});return n?await n:r.authToken}async function OD(t,e){let n=await a_(t.appConfig);for(;n.authToken.requestStatus===1;)await bI(100),n=await a_(t.appConfig);const r=n.authToken;return r.requestStatus===0?$g(t,e):r}function a_(t){return Mh(t,e=>{if(!VI(e))throw Vi.create("not-registered");const n=e.authToken;return FD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function DD(t,e){try{const n=await bD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bc(t.appConfig,r),n}catch(n){if(AI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await LI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bc(t.appConfig,r)}throw n}}function VI(t){return t!==void 0&&t.registrationStatus===2}function LD(t){return t.requestStatus===2&&!MD(t)}function MD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+uD}function VD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function FD(t){return t.requestStatus===1&&t.requestTime+TI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t){const e=t,{installationEntry:n,registrationPromise:r}=await jg(e);return r?r.catch(console.error):$g(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e=!1){const n=t;return await $D(n),(await $g(n,e)).token}async function $D(t){const{registrationPromise:e}=await jg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){if(!t||!t.options)throw sf("App Configuration");if(!t.name)throw sf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sf(t){return Vi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="installations",BD="installations-internal",HD=t=>{const e=t.getProvider("app").getImmediate(),n=zD(e),r=Yi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WD=t=>{const e=t.getProvider("app").getImmediate(),n=Yi(e,FI).getImmediate();return{getId:()=>UD(n),getToken:i=>jD(n,i)}};function qD(){Rn(new an(FI,HD,"PUBLIC")),Rn(new an(BD,WD,"PRIVATE"))}qD();qt(EI,Fg);qt(EI,Fg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="analytics",KD="firebase_id",QD="origin",GD=60*1e3,YD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Rh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Gi("analytics","Analytics",XD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JD(t){if(!t.startsWith(zg)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function UI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ZD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function eL(t,e){const n=ZD("firebase-js-sdk-policy",{createScriptURL:JD}),r=document.createElement("script"),i=`${zg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function tL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function nL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await UI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){It.error(a)}t("config",i,s)}async function rL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await UI(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function iL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await rL(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await nL(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){It.error(a)}}return i}function sL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=iL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function oL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=30,lL=1e3;class uL{constructor(e={},n=lL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jI=new uL;function cL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function hL(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:cL(r)},s=YD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function dL(t,e=jI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new mL;return setTimeout(async()=>{a.abort()},n!==void 0?n:GD),$I({appId:r,apiKey:i,measurementId:s},o,a,e)}async function $I(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=jI){var s;const{appId:o,measurementId:a}=t;try{await fL(r,e)}catch(l){if(a)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await hL(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!pL(u)){if(i.deleteThrottleMetadata(o),a)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?N0(n,i.intervalMillis,aL):N0(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),It.debug(`Calling attemptFetch again in ${c} millis`),$I(t,h,r,i)}}function fL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pL(t){if(!(t instanceof St)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class mL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(){if(kg())try{await LT()}catch(t){return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vL(t,e,n,r,i,s,o){var a;const l=dL(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>It.error(p)),e.push(l);const u=yL().then(p=>{if(p)return r.getId()}),[c,h]=await Promise.all([l,u]);oL(s)||eL(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[QD]="firebase",d.update=!0,h!=null&&(d[KD]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.app=e}_delete(){return delete ha[this.app.options.appId],Promise.resolve()}}let ha={},l_=[];const u_={};let of="dataLayer",wL="gtag",c_,zI,h_=!1;function EL(){const t=[];if(DT()&&t.push("This is a browser extension environment."),E2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function TL(t,e,n){EL();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(ha[r]!=null)throw Rt.create("already-exists",{id:r});if(!h_){tL(of);const{wrappedGtag:s,gtagCore:o}=sL(ha,l_,u_,of,wL);zI=s,c_=o,h_=!0}return ha[r]=vL(t,l_,u_,e,c_,of,n),new _L(t)}function IL(t=Pg()){t=Re(t);const e=Yi(t,Hc);return e.isInitialized()?e.getImmediate():SL(t)}function SL(t,e={}){const n=Yi(t,Hc);if(n.isInitialized()){const i=n.getImmediate();if($a(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function AL(t,e,n,r){t=Re(t),gL(zI,ha[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const d_="@firebase/analytics",f_="0.10.2";function kL(){Rn(new an(Hc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return TL(r,i,n)},"PUBLIC")),Rn(new an("analytics-internal",t,"PRIVATE")),qt(d_,f_),qt(d_,f_,"esm2017");function t(e){try{const n=e.getProvider(Hc).getImmediate();return{logEvent:(r,i,s)=>AL(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}kL();var xL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Bg=Bg||{},H=xL||self;function Vh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ml(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PL(t){return Object.prototype.hasOwnProperty.call(t,af)&&t[af]||(t[af]=++CL)}var af="closure_uid_"+(1e9*Math.random()>>>0),CL=0;function RL(t,e,n){return t.call.apply(t.bind,arguments)}function bL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=RL:st=bL,st.apply(null,arguments)}function Tu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Jr(){this.s=this.s,this.o=this.o}var NL=0;Jr.prototype.s=!1;Jr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),NL!=0)&&PL(this)};Jr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const BI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Hg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function p_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var OL=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};H.addEventListener("test",n,e),H.removeEventListener("test",n,e)}catch{}return t}();function Ha(t){return/^[\s\xa0]*$/.test(t)}function Fh(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function vn(t){return Fh().indexOf(t)!=-1}function Wg(t){return Wg[" "](t),t}Wg[" "]=function(){};function DL(t,e){var n=k4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var LL=vn("Opera"),oo=vn("Trident")||vn("MSIE"),HI=vn("Edge"),zp=HI||oo,WI=vn("Gecko")&&!(Fh().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge"))&&!(vn("Trident")||vn("MSIE"))&&!vn("Edge"),ML=Fh().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge");function qI(){var t=H.document;return t?t.documentMode:void 0}var Bp;e:{var lf="",uf=function(){var t=Fh();if(WI)return/rv:([^\);]+)(\)|;)/.exec(t);if(HI)return/Edge\/([\d\.]+)/.exec(t);if(oo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ML)return/WebKit\/(\S+)/.exec(t);if(LL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uf&&(lf=uf?uf[1]:""),oo){var cf=qI();if(cf!=null&&cf>parseFloat(lf)){Bp=String(cf);break e}}Bp=lf}var Hp;if(H.document&&oo){var m_=qI();Hp=m_||parseInt(Bp,10)||void 0}else Hp=void 0;var VL=Hp;function Wa(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(WI){e:{try{Wg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Wa.$.h.call(this)}}Be(Wa,ot);var FL={2:"touch",3:"pen",4:"mouse"};Wa.prototype.h=function(){Wa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vl="closure_listenable_"+(1e6*Math.random()|0),UL=0;function jL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++UL,this.fa=this.ia=!1}function Uh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $L(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function KI(t){const e={};for(const n in t)e[n]=t[n];return e}const g_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function QI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<g_.length;s++)n=g_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function jh(t){this.src=t,this.g={},this.h=0}jh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new jL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Wp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=BI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Uh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Kg="closure_lm_"+(1e6*Math.random()|0),hf={};function GI(t,e,n,r,i){if(r&&r.once)return XI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)GI(t,e[s],n,r,i);return null}return n=Yg(n),t&&t[Vl]?t.O(e,n,Ml(r)?!!r.capture:!!r,i):YI(t,e,n,!1,r,i)}function YI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ml(i)?!!i.capture:!!i,a=Gg(t);if(a||(t[Kg]=a=new jh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=zL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)OL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ZI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zL(){function t(n){return e.call(t.src,t.listener,n)}const e=BL;return t}function XI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)XI(t,e[s],n,r,i);return null}return n=Yg(n),t&&t[Vl]?t.P(e,n,Ml(r)?!!r.capture:!!r,i):YI(t,e,n,!0,r,i)}function JI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)JI(t,e[s],n,r,i);else r=Ml(r)?!!r.capture:!!r,n=Yg(n),t&&t[Vl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qp(s,n,r,i),-1<n&&(Uh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qp(e,n,r,i)),(n=-1<t?e[t]:null)&&Qg(n))}function Qg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vl])Wp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ZI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gg(e))?(Wp(n,t),n.h==0&&(n.src=null,e[Kg]=null)):Uh(t)}}}function ZI(t){return t in hf?hf[t]:hf[t]="on"+t}function BL(t,e){if(t.fa)t=!0;else{e=new Wa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Qg(t),t=n.call(r,e)}return t}function Gg(t){return t=t[Kg],t instanceof jh?t:null}var df="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yg(t){return typeof t=="function"?t:(t[df]||(t[df]=function(e){return t.handleEvent(e)}),t[df])}function ze(){Jr.call(this),this.i=new jh(this),this.S=this,this.J=null}Be(ze,Jr);ze.prototype[Vl]=!0;ze.prototype.removeEventListener=function(t,e,n,r){JI(this,t,e,n,r)};function Ye(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),QI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Iu(o,r,!0,e)&&i}if(o=e.g=t,i=Iu(o,r,!0,e)&&i,i=Iu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Iu(o,r,!1,e)&&i}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Uh(n[r]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Iu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xg=H.JSON.stringify;class HL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function WL(){var t=Jg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qL{constructor(){this.h=this.g=null}add(e,n){const r=eS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var eS=new HL(()=>new KL,t=>t.reset());class KL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GL(t){H.setTimeout(()=>{throw t},0)}let qa,Ka=!1,Jg=new qL,tS=()=>{const t=H.Promise.resolve(void 0);qa=()=>{t.then(YL)}};var YL=()=>{for(var t;t=WL();){try{t.h.call(t.g)}catch(n){GL(n)}var e=eS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ka=!1};function $h(t,e){ze.call(this),this.h=t||1,this.g=e||H,this.j=st(this.qb,this),this.l=Date.now()}Be($h,ze);b=$h.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ye(this,"tick"),this.ga&&(Zg(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){$h.$.N.call(this),Zg(this),delete this.g};function ey(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function nS(t){t.g=ey(()=>{t.g=null,t.i&&(t.i=!1,nS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XL extends Jr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nS(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qa(t){Jr.call(this),this.h=t,this.g={}}Be(Qa,Jr);var y_=[];function rS(t,e,n,r){Array.isArray(n)||(n&&(y_[0]=n.toString()),n=y_);for(var i=0;i<n.length;i++){var s=GI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function iS(t){qg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qg(e)},t),t.g={}}Qa.prototype.N=function(){Qa.$.N.call(this),iS(this)};Qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zh(){this.g=!0}zh.prototype.Ea=function(){this.g=!1};function JL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ws(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+t4(t,n)+(r?" "+r:"")})}function e4(t,e){t.info(function(){return"TIMEOUT: "+e})}zh.prototype.info=function(){};function t4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xg(n)}catch{return e}}var Xi={},v_=null;function Bh(){return v_=v_||new ze}Xi.Ta="serverreachability";function sS(t){ot.call(this,Xi.Ta,t)}Be(sS,ot);function Ga(t){const e=Bh();Ye(e,new sS(e))}Xi.STAT_EVENT="statevent";function oS(t,e){ot.call(this,Xi.STAT_EVENT,t),this.stat=e}Be(oS,ot);function ht(t){const e=Bh();Ye(e,new oS(e,t))}Xi.Ua="timingevent";function aS(t,e){ot.call(this,Xi.Ua,t),this.size=e}Be(aS,ot);function Fl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},lS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ty(){}ty.prototype.h=null;function __(t){return t.h||(t.h=t.i())}function uS(){}var Ul={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ny(){ot.call(this,"d")}Be(ny,ot);function ry(){ot.call(this,"c")}Be(ry,ot);var Kp;function Wh(){}Be(Wh,ty);Wh.prototype.g=function(){return new XMLHttpRequest};Wh.prototype.i=function(){return{}};Kp=new Wh;function jl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qa(this),this.P=n4,t=zp?125:void 0,this.V=new $h(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cS}function cS(){this.i=null,this.g="",this.h=!1}var n4=45e3,hS={},Qp={};b=jl.prototype;b.setTimeout=function(t){this.P=t};function Gp(t,e,n){t.L=1,t.A=Kh(Yn(e)),t.u=n,t.S=!0,dS(t,null)}function dS(t,e){t.G=Date.now(),$l(t),t.B=Yn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),wS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new cS,t.g=$S(t.l,n?e:null,!t.u),0<t.O&&(t.M=new XL(st(t.Pa,t,t.g),t.O)),rS(t.U,t.g,"readystatechange",t.nb),e=t.I?KI(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ga(),JL(t.j,t.v,t.B,t.m,t.W,t.u)}b.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||zp||this.g&&(this.h.h||this.g.ja()||I_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ga(3):Ga(2)),qh(this);var n=this.g.da();this.ca=n;t:if(fS(this)){var r=I_(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),da(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ZL(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var u=a;break t}}u=null}if(n=u)ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yp(this,n);else{this.i=!1,this.s=3,ht(12),hi(this),da(this);break e}}this.S?(pS(this,c,o),zp&&this.i&&c==3&&(rS(this.U,this.V,"tick",this.mb),this.V.start())):(ws(this.j,this.m,o,null),Yp(this,o)),c==4&&hi(this),this.i&&!this.J&&(c==4?VS(this.l,this):(this.i=!1,$l(this)))}else I4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),hi(this),da(this)}}}catch{}finally{}};function fS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function pS(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=r4(t,n),i==Qp){e==4&&(t.s=4,ht(14),r=!1),ws(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hS){t.s=4,ht(15),ws(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ws(t.j,t.m,i,null),Yp(t,i);fS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),uy(e),e.M=!0,ht(11))):(ws(t.j,t.m,n,"[Invalid Chunked Response]"),hi(t),da(t))}b.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.o<e.length&&(qh(this),pS(this,t,e),this.i&&t!=4&&$l(this))}};function r4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Qp:(n=Number(e.substring(n,r)),isNaN(n)?hS:(r+=1,r+n>e.length?Qp:(e=e.slice(r,r+n),t.o=r+n,e)))}b.cancel=function(){this.J=!0,hi(this)};function $l(t){t.Y=Date.now()+t.P,mS(t,t.P)}function mS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Fl(st(t.lb,t),e)}function qh(t){t.C&&(H.clearTimeout(t.C),t.C=null)}b.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(e4(this.j,this.B),this.L!=2&&(Ga(),ht(17)),hi(this),this.s=2,da(this)):mS(this,this.Y-t)};function da(t){t.l.H==0||t.J||VS(t.l,t)}function hi(t){qh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Zg(t.V),iS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Yp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Xp(n.i,t))){if(!t.K&&Xp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Kc(n),Xh(n);else break e;ly(n),ht(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Fl(st(n.ib,n),6e3));if(1>=IS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else di(n,11)}else if((t.K||n.g==t)&&Kc(n),!Ha(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(iy(s,s.h),s.h=null))}if(r.F){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,he(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=jS(r,r.J?r.pa:null,r.Y),o.K){SS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(qh(a),$l(a)),r.g=o}else LS(r);0<n.j.length&&Jh(n)}else u[0]!="stop"&&u[0]!="close"||di(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?di(n,7):ay(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ga(4)}catch{}}function i4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function s4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function gS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=s4(t),r=i4(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var yS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function o4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xi){this.h=t.h,Wc(this,t.j),this.s=t.s,this.g=t.g,qc(this,t.m),this.l=t.l;var e=t.i,n=new Ya;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),w_(this,n),this.o=t.o}else t&&(e=String(t).match(yS))?(this.h=!1,Wc(this,e[1]||"",!0),this.s=Yo(e[2]||""),this.g=Yo(e[3]||"",!0),qc(this,e[4]),this.l=Yo(e[5]||"",!0),w_(this,e[6]||"",!0),this.o=Yo(e[7]||"")):(this.h=!1,this.i=new Ya(null,this.h))}xi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xo(e,E_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xo(e,E_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xo(n,n.charAt(0)=="/"?u4:l4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xo(n,h4)),t.join("")};function Yn(t){return new xi(t)}function Wc(t,e,n){t.j=n?Yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function w_(t,e,n){e instanceof Ya?(t.i=e,d4(t.i,t.h)):(n||(e=Xo(e,c4)),t.i=new Ya(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Kh(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,a4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function a4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var E_=/[#\/\?@]/g,l4=/[#\?:]/g,u4=/[#\?]/g,c4=/[#\?@]/g,h4=/#/g;function Ya(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zr(t){t.g||(t.g=new Map,t.h=0,t.i&&o4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=Ya.prototype;b.add=function(t,e){Zr(this),this.i=null,t=Io(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vS(t,e){Zr(t),e=Io(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _S(t,e){return Zr(t),e=Io(t,e),t.g.has(e)}b.forEach=function(t,e){Zr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.ta=function(){Zr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.Z=function(t){Zr(this);let e=[];if(typeof t=="string")_S(this,t)&&(e=e.concat(this.g.get(Io(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Zr(this),this.i=null,t=Io(this,t),_S(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wS(t,e,n){vS(t,e),0<n.length&&(t.i=null,t.g.set(Io(t,e),Hg(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Io(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function d4(t,e){e&&!t.j&&(Zr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(vS(this,r),wS(this,i,n))},t)),t.j=e}var f4=class{constructor(t,e){this.g=t,this.map=e}};function ES(t){this.l=t||p4,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var p4=10;function TS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function IS(t){return t.h?1:t.g?t.g.size:0}function Xp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function iy(t,e){t.g?t.g.add(e):t.h=e}function SS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ES.prototype.cancel=function(){if(this.i=AS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function AS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Hg(t.i)}var m4=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function g4(){this.g=new m4}function y4(t,e,n){const r=n||"";try{gS(t,function(i,s){let o=i;Ml(i)&&(o=Xg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function v4(t,e){const n=new zh;if(H.Image){const r=new Image;r.onload=Tu(Su,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Tu(Su,n,r,"TestLoadImage: error",!1,e),r.onabort=Tu(Su,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Tu(Su,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Su(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qh(t){this.l=t.ec||null,this.j=t.ob||!1}Be(Qh,ty);Qh.prototype.g=function(){return new Gh(this.l,this.j)};Qh.prototype.i=function(t){return function(){return t}}({});function Gh(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=sy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(Gh,ze);var sy=0;b=Gh.prototype;b.open=function(t,e){if(this.readyState!=sy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xa(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zl(this)),this.readyState=sy};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xa(this)),this.g&&(this.readyState=3,Xa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function kS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zl(this):Xa(this),this.readyState==3&&kS(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,zl(this))};b.Ya=function(t){this.g&&(this.response=t,zl(this))};b.ka=function(){this.g&&zl(this)};function zl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xa(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _4=H.JSON.parse;function Te(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xS,this.L=this.M=!1}Be(Te,ze);var xS="",w4=/^https?$/i,E4=["POST","PUT"];b=Te.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Kp.g(),this.C=this.u?__(this.u):__(Kp),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){T_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=BI(E4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{RS(this),0<this.B&&((this.L=T4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=ey(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){T_(this,s)}};function T4(t){return oo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof Bg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function T_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,PS(t),Yh(t)}function PS(t){t.F||(t.F=!0,Ye(t,"complete"),Ye(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),Yh(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yh(this,!0)),Te.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?CS(this):this.kb())};b.kb=function(){CS(this)};function CS(t){if(t.h&&typeof Bg<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)ey(t.La,0,t);else if(Ye(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(yS)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),r=!w4.test(i?i.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var s=2<_n(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",PS(t)}}finally{Yh(t)}}}}function Yh(t,e){if(t.g){RS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function RS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}b.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_4(e)}};function I_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case xS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function I4(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ha(t[r]))continue;var n=QL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}$L(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bS(t){let e="";return qg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function oy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function jo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function NS(t){this.Ga=0,this.j=[],this.l=new zh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jo("baseRetryDelayMs",5e3,t),this.hb=jo("retryDelaySeedMs",1e4,t),this.eb=jo("forwardChannelMaxRetries",2,t),this.xa=jo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ES(t&&t.concurrentRequestLimit),this.Ja=new g4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=NS.prototype;b.ra=8;b.H=1;function ay(t){if(OS(t),t.H==3){var e=t.W++,n=Yn(t.I);if(he(n,"SID",t.K),he(n,"RID",e),he(n,"TYPE","terminate"),Bl(t,n),e=new jl(t,t.l,e),e.L=2,e.A=Kh(Yn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.A,n=!0),n||(e.g=$S(e.l,null),e.g.ha(e.A)),e.G=Date.now(),$l(e)}US(t)}function Xh(t){t.g&&(uy(t),t.g.cancel(),t.g=null)}function OS(t){Xh(t),t.u&&(H.clearTimeout(t.u),t.u=null),Kc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Jh(t){if(!TS(t.i)&&!t.m){t.m=!0;var e=t.Na;qa||tS(),Ka||(qa(),Ka=!0),Jg.add(e,t),t.C=0}}function S4(t,e){return IS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Fl(st(t.Na,t,e),FS(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new jl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=KI(s),QI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=DS(this,i,e),n=Yn(this.I),he(n,"RID",t),he(n,"CVER",22),this.F&&he(n,"X-HTTP-Session-Id",this.F),Bl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(bS(s)))+"&"+e:this.o&&oy(n,this.o,s)),iy(this.i,i),this.bb&&he(n,"TYPE","init"),this.P?(he(n,"$req",e),he(n,"SID","null"),i.aa=!0,Gp(i,n,null)):Gp(i,n,e),this.H=2}}else this.H==3&&(t?S_(this,t):this.j.length==0||TS(this.i)||S_(this))};function S_(t,e){var n;e?n=e.m:n=t.W++;const r=Yn(t.I);he(r,"SID",t.K),he(r,"RID",n),he(r,"AID",t.V),Bl(t,r),t.o&&t.s&&oy(r,t.o,t.s),n=new jl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=DS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),iy(t.i,n),Gp(n,r,e)}function Bl(t,e){t.na&&qg(t.na,function(n,r){he(e,r,n)}),t.h&&gS({},function(n,r){he(e,r,n)})}function DS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{y4(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function LS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qa||tS(),Ka||(qa(),Ka=!0),Jg.add(e,t),t.A=0}}function ly(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Fl(st(t.Ma,t),FS(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,MS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Fl(st(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),Xh(this),MS(this))};function uy(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function MS(t){t.g=new jl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Yn(t.wa);he(e,"RID","rpc"),he(e,"SID",t.K),he(e,"AID",t.V),he(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&he(e,"TO",t.qa),he(e,"TYPE","xmlhttp"),Bl(t,e),t.o&&t.s&&oy(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Kh(Yn(e)),n.u=null,n.S=!0,dS(n,t)}b.ib=function(){this.v!=null&&(this.v=null,Xh(this),ly(this),ht(19))};function Kc(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function VS(t,e){var n=null;if(t.g==e){Kc(t),uy(t),t.g=null;var r=2}else if(Xp(t.i,e))n=e.F,SS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Bh(),Ye(r,new aS(r,n)),Jh(t)}else LS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&S4(t,e)||r==2&&ly(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:di(t,5);break;case 4:di(t,10);break;case 3:di(t,6);break;default:di(t,2)}}}function FS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function di(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new xi("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Wc(n,"https"),Kh(n)),v4(n.toString(),r)}else ht(2);t.H=0,t.h&&t.h.za(e),US(t),OS(t)}b.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function US(t){if(t.H=0,t.ma=[],t.h){const e=AS(t.i);(e.length!=0||t.j.length!=0)&&(p_(t.ma,e),p_(t.ma,t.j),t.i.i.length=0,Hg(t.j),t.j.length=0),t.h.ya()}}function jS(t,e,n){var r=n instanceof xi?Yn(n):new xi(n);if(r.g!="")e&&(r.g=e+"."+r.g),qc(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new xi(null);r&&Wc(s,r),e&&(s.g=e),i&&qc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&he(r,n,e),he(r,"VER",t.ra),Bl(t,r),r}function $S(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Te(new Qh({ob:n})):new Te(t.va),e.Oa(t.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function zS(){}b=zS.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Qc(){if(oo&&!(10<=Number(VL)))throw Error("Environmental error: no available transport.")}Qc.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){ze.call(this),this.g=new NS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new So(this)}Be(Ot,ze);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=jS(t,null,t.Y),Jh(t)};Ot.prototype.close=function(){ay(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xg(t),t=n);e.j.push(new f4(e.fb++,t)),e.H==3&&Jh(e)};Ot.prototype.N=function(){this.g.h=null,delete this.j,ay(this.g),delete this.g,Ot.$.N.call(this)};function BS(t){ny.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(BS,ny);function HS(){ry.call(this),this.status=1}Be(HS,ry);function So(t){this.g=t}Be(So,zS);So.prototype.Ba=function(){Ye(this.g,"a")};So.prototype.Aa=function(t){Ye(this.g,new BS(t))};So.prototype.za=function(t){Ye(this.g,new HS)};So.prototype.ya=function(){Ye(this.g,"b")};function A4(){this.blockSize=-1}function un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(un,A4);un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ff(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}un.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ff(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ff(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ff(this,r),i=0;break}}this.h=i,this.i+=e};un.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var k4={};function cy(t){return-128<=t&&128>t?DL(t,function(e){return new se([e|0],0>e?-1:0)}):new se([t|0],0>t?-1:0)}function wn(t){if(isNaN(t)||!isFinite(t))return Os;if(0>t)return Ke(wn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Jp;return new se(e,0)}function WS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(WS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wn(Math.pow(e,8)),r=Os,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=wn(Math.pow(e,s)),r=r.R(s).add(wn(o))):(r=r.R(n),r=r.add(wn(o)))}return r}var Jp=4294967296,Os=cy(0),Zp=cy(1),A_=cy(16777216);b=se.prototype;b.ea=function(){if(Bt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Jp+r)*e,e*=Jp}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(Bt(this))return"-"+Ke(this).toString(t);for(var e=wn(Math.pow(t,6)),n=this,r="";;){var i=Yc(n,e).g;n=Gc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,zn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Bt(t){return t.h==-1}b.X=function(t){return t=Gc(this,t),Bt(t)?-1:zn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new se(n,~t.h).add(Zp)}b.abs=function(){return Bt(this)?Ke(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new se(n,n[n.length-1]&-2147483648?-1:0)};function Gc(t,e){return t.add(Ke(e))}b.R=function(t){if(zn(this)||zn(t))return Os;if(Bt(this))return Bt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(Bt(t))return Ke(this.R(Ke(t)));if(0>this.X(A_)&&0>t.X(A_))return wn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Au(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Au(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Au(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Au(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new se(n,0)};function Au(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function $o(t,e){this.g=t,this.h=e}function Yc(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new $o(Os,Os);if(Bt(t))return e=Yc(Ke(t),e),new $o(Ke(e.g),Ke(e.h));if(Bt(e))return e=Yc(t,Ke(e)),new $o(Ke(e.g),e.h);if(30<t.g.length){if(Bt(t)||Bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Zp,r=e;0>=r.X(t);)n=k_(n),r=k_(r);var i=rs(n,1),s=rs(r,1);for(r=rs(r,2),n=rs(n,2);!zn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=rs(r,1),n=rs(n,1)}return e=Gc(t,i.R(e)),new $o(i,e)}for(i=Os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=wn(n),o=s.R(e);Bt(o)||0<o.X(t);)n-=r,s=wn(n),o=s.R(e);zn(s)&&(s=Zp),i=i.add(s),t=Gc(t,o)}return new $o(i,t)}b.gb=function(t){return Yc(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new se(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new se(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new se(n,this.h^t.h)};function k_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new se(n,t.h)}function rs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new se(i,t.h)}Qc.prototype.createWebChannel=Qc.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;Hh.NO_ERROR=0;Hh.TIMEOUT=8;Hh.HTTP_ERROR=6;lS.COMPLETE="complete";uS.EventType=Ul;Ul.OPEN="a";Ul.CLOSE="b";Ul.ERROR="c";Ul.MESSAGE="d";ze.prototype.listen=ze.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;un.prototype.digest=un.prototype.l;un.prototype.reset=un.prototype.reset;un.prototype.update=un.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=wn;se.fromString=WS;var x4=function(){return new Qc},P4=function(){return Bh()},pf=Hh,C4=lS,R4=Xi,x_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ku=uS,b4=Te,N4=un,Ds=se;const P_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Rh("@firebase/firestore");function zo(){return Ui.logLevel}function R(t,...e){if(Ui.logLevel<=ee.DEBUG){const n=e.map(hy);Ui.debug(`Firestore (${Ao}): ${t}`,...n)}}function bn(t,...e){if(Ui.logLevel<=ee.ERROR){const n=e.map(hy);Ui.error(`Firestore (${Ao}): ${t}`,...n)}}function ao(t,...e){if(Ui.logLevel<=ee.WARN){const n=e.map(hy);Ui.warn(`Firestore (${Ao}): ${t}`,...n)}}function hy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function ae(t,e){t||W()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends St{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class D4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class L4{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new qS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new nt(e)}}class M4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new M4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new F4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=j4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function lo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new Le(0,0))}static max(){return new q(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Ja{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const $4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Ja{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return $4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ee.fromString(e))}static fromName(e){return new z(Ee.fromString(e).popFirst(5))}static empty(){return new z(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ee(e.slice()))}}function z4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new zr(i,z.empty(),e)}function B4(t){return new zr(t.readTime,t.key,-1)}class zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zr(q.min(),z.empty(),-1)}static max(){return new zr(q.max(),z.empty(),-1)}}function H4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==W4)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Hn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new fa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=fy(r.target.error);this.V.reject(new fa(e,i))}}static open(e,n,r,i){try{return new dy(n,e.transaction(i,r))}catch(s){throw new fa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Q4(n)}}class fi{constructor(e,n,r){this.name=e,this.version=n,this.p=r,fi.S(Ce())===12.2&&bn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),oi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!kg())return!1;if(fi.C())return!0;const e=Ce(),n=fi.S(e),r=0<n&&n<10,i=fi.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new fa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new fa(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=dy.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),A.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class K4{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return oi(this.k.delete())}}class fa extends j{constructor(e,n){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Wl(t){return t.name==="IndexedDbTransactionError"}class Q4{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),oi(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),oi(this.store.add(e))}get(e){return oi(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),oi(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),oi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new A((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new A((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new A((r,i)=>{n.onerror=s=>{const o=fy(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new K4(a),u=n(a.primaryKey,a.value,l);if(u instanceof A){const c=u.catch(h=>(l.done(),A.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function oi(t){return new A((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=fy(r.target.error);n(i)}})}let C_=!1;function fy(t){const e=fi.S(Ce());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return C_||(C_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}py._e=-1;function Zh(t){return t==null}function Xc(t){return t===0&&1/t==-1/0}function G4(t){return typeof t=="number"&&Number.isInteger(t)&&!Xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b_(this.data.getIterator())}getIteratorFrom(e){return new b_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class b_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Xe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new GS("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Y4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(ae(!!t),typeof t=="string"){let e=0;const n=Y4.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ji(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gy(t){const e=t.mapValue.fields.__previous_value__;return my(e)?gy(e):e}function Za(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class el{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new el("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof el&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?my(t)?4:J4(t)?9007199254740991:10:W()}function Nn(t,e){if(t===e)return!0;const n=$i(t);if(n!==$i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Za(t).isEqual(Za(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Br(i.timestampValue),a=Br(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ji(i.bytesValue).isEqual(ji(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),a=ke(s.doubleValue);return o===a?Xc(o)===Xc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return lo(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(R_(o)!==R_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Nn(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function tl(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function uo(t,e){if(t===e)return 0;const n=$i(t),r=$i(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ke(s.integerValue||s.doubleValue),l=ke(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return N_(t.timestampValue,e.timestampValue);case 4:return N_(Za(t),Za(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ji(s),l=ji(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=re(a[u],l[u]);if(c!==0)return c}return re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=re(ke(s.latitude),ke(o.latitude));return a!==0?a:re(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=uo(a[u],l[u]);if(c)return c}return re(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Pu.mapValue&&o===Pu.mapValue)return 0;if(s===Pu.mapValue)return 1;if(o===Pu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=re(l[h],c[h]);if(d!==0)return d;const p=uo(a[l[h]],u[c[h]]);if(p!==0)return p}return re(l.length,c.length)}(t.mapValue,e.mapValue);default:throw W()}}function N_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Br(t),r=Br(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function co(t){return em(t)}function em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ji(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=em(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${em(n.fields[o])}`;return i+"}"}(t.mapValue):W()}function tm(t){return!!t&&"integerValue"in t}function yy(t){return!!t&&"arrayValue"in t}function O_(t){return!!t&&"nullValue"in t}function D_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function pa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function J4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pa(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(pa(this.value))}}function YS(t){const e=[];return Ji(t.fields,(n,r)=>{const i=new Qe([n]);if(nc(r)){const s=YS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new it(e,0,q.min(),q.min(),q.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,q.min(),q.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,q.min(),q.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.position=e,this.inclusive=n}}function L_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=uo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function M_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Z4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{}class Oe extends XS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tM(e,n,r):n==="array-contains"?new iM(e,r):n==="in"?new sM(e,r):n==="not-in"?new oM(e,r):n==="array-contains-any"?new aM(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nM(e,r):new rM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(uo(n,this.value)):n!==null&&$i(this.value)===$i(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends XS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new On(e,n)}matches(e){return JS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function JS(t){return t.op==="and"}function ZS(t){return eM(t)&&JS(t)}function eM(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function nm(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+co(t.value);if(ZS(t))return t.filters.map(e=>nm(e)).join(",");{const e=t.filters.map(n=>nm(n)).join(",");return`${t.op}(${e})`}}function eA(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eA(o,i.filters[a]),!0):!1}(t,e):void W()}function tA(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(tA).join(" ,")+"}"}(t):"Filter"}class tM extends Oe{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class nM extends Oe{constructor(e,n){super(e,"in",n),this.keys=nA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rM extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=nA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class iM extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yy(n)&&tl(n.arrayValue,this.value)}}class sM extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tl(this.value.arrayValue,n)}}class oM extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tl(this.value.arrayValue,n)}}class aM extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function V_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lM(t,e,n,r,i,s,o)}function vy(t){const e=K(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>co(r)).join(",")),e.ce=n}return e.ce}function _y(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Z4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!M_(t.startAt,e.startAt)&&M_(t.endAt,e.endAt)}function rm(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function uM(t,e,n,r,i,s,o,a){return new ed(t,e,n,r,i,s,o,a)}function wy(t){return new ed(t)}function F_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cM(t){return t.collectionGroup!==null}function ma(t){const e=K(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Xe(Qe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Zc(s,r))}),n.has(Qe.keyField().canonicalString())||e.le.push(new Zc(Qe.keyField(),r))}return e.le}function xn(t){const e=K(t);return e.he||(e.he=hM(e,ma(t))),e.he}function hM(t,e){if(t.limitType==="F")return V_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zc(i.field,s)});const n=t.endAt?new Jc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jc(t.startAt.position,t.startAt.inclusive):null;return V_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function im(t,e,n){return new ed(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function td(t,e){return _y(xn(t),xn(e))&&t.limitType===e.limitType}function rA(t){return`${vy(xn(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tA(i)).join(", ")}]`),Zh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>co(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>co(i)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function nd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ma(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=L_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ma(r),i)||r.endAt&&!function(o,a,l){const u=L_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ma(r),i))}(t,e)}function dM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iA(t){return(e,n)=>{let r=!1;for(const i of ma(t)){const s=fM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fM(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?uo(l,u):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=new ve(z.comparator);function Xn(){return pM}const sA=new ve(z.comparator);function Jo(...t){let e=sA;for(const n of t)e=e.insert(n.key,n);return e}function oA(t){let e=sA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pi(){return ga()}function aA(){return ga()}function ga(){return new ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const mM=new ve(z.comparator),gM=new Xe(z.comparator);function J(...t){let e=gM;for(const n of t)e=e.add(n);return e}const yM=new Xe(re);function vM(){return yM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(e)?"-0":e}}function uA(t){return{integerValue:""+t}}function _M(t,e){return G4(e)?uA(e):lA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this._=void 0}}function wM(t,e,n){return t instanceof eh?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&my(s)&&(s=gy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof nl?hA(t,e):t instanceof rl?dA(t,e):function(i,s){const o=cA(i,s),a=U_(o)+U_(i.Ie);return tm(o)&&tm(i.Ie)?uA(a):lA(i.serializer,a)}(t,e)}function EM(t,e,n){return t instanceof nl?hA(t,e):t instanceof rl?dA(t,e):n}function cA(t,e){return t instanceof th?function(r){return tm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class eh extends rd{}class nl extends rd{constructor(e){super(),this.elements=e}}function hA(t,e){const n=fA(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class rl extends rd{constructor(e){super(),this.elements=e}}function dA(t,e){let n=fA(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class th extends rd{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function U_(t){return ke(t.integerValue||t.doubleValue)}function fA(t){return yy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof nl&&i instanceof nl||r instanceof rl&&i instanceof rl?lo(r.elements,i.elements,Nn):r instanceof th&&i instanceof th?Nn(r.Ie,i.Ie):r instanceof eh&&i instanceof eh}(t.transform,e.transform)}class IM{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class id{}function pA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gA(t.key,Pn.none()):new ql(t.key,t.data,Pn.none());{const n=t.data,r=vt.empty();let i=new Xe(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ei(t.key,r,new Pt(i.toArray()),Pn.none())}}function SM(t,e,n){t instanceof ql?function(i,s,o){const a=i.value.clone(),l=$_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(i,s,o){if(!rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=$_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(mA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ya(t,e,n,r){return t instanceof ql?function(s,o,a,l){if(!rc(s.precondition,o))return a;const u=s.value.clone(),c=z_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(s,o,a,l){if(!rc(s.precondition,o))return a;const u=z_(s.fieldTransforms,l,o),c=o.data;return c.setAll(mA(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function AM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cA(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function j_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&lo(r,i,(s,o)=>TM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ql extends id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ei extends id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $_(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EM(o,a,n[i]))}return r}function z_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wM(s,o,e))}return r}class gA extends id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kM extends id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=pA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(n,r)=>j_(n,r))&&lo(this.baseMutations,e.baseMutations,(n,r)=>j_(n,r))}}class Ey{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return mM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ey(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,te;function RM(t){switch(t){default:return W();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function yA(t){if(t===void 0)return bn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Ae.OK:return k.OK;case Ae.CANCELLED:return k.CANCELLED;case Ae.UNKNOWN:return k.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return k.INTERNAL;case Ae.UNAVAILABLE:return k.UNAVAILABLE;case Ae.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ae.NOT_FOUND:return k.NOT_FOUND;case Ae.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ae.ABORTED:return k.ABORTED;case Ae.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ae.DATA_LOSS:return k.DATA_LOSS;default:return W()}}(te=Ae||(Ae={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=new Ds([4294967295,4294967295],0);function B_(t){const e=bM().encode(t),n=new N4;return n.update(e),new Uint8Array(n.digest())}function H_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ds([n,r],0),new Ds([i,s],0)]}class Ty{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zo(`Invalid padding: ${n}`);if(r<0)throw new Zo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ds.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Ds.fromNumber(r)));return i.compare(NM)===1&&(i=new Ds([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=B_(e),[r,i]=H_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ty(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=B_(e),[r,i]=H_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Kl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sd(q.min(),i,new ve(re),Xn(),J())}}class Kl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Kl(r,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class vA{constructor(e,n){this.targetId=e,this.fe=n}}class _A{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class W_{constructor(){this.ge=0,this.pe=K_(),this.ye=lt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=J(),n=J(),r=J();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Kl(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=K_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ae(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class OM{constructor(e){this.Be=e,this.ke=new Map,this.qe=Xn(),this.Qe=q_(),this.Ke=new ve(re)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(rm(s))if(r===0){const o=new z(s.path);this.We(n,o,it.newNoDocument(o,q.min()))}else ae(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ji(r).toUint8Array()}catch(l){if(l instanceof GS)return ao("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ty(o,i,s)}catch(l){return ao(l instanceof Zo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&rm(a.target)){const l=new z(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,it.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=J();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new sd(e,n,this.Ke,this.qe,r);return this.qe=Xn(),this.Qe=q_(),this.Ke=new ve(re),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new W_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Xe(re),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new W_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function q_(){return new ve(z.comparator)}function K_(){return new ve(z.comparator)}const DM={asc:"ASCENDING",desc:"DESCENDING"},LM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MM={and:"AND",or:"OR"};class VM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sm(t,e){return t.useProto3Json||Zh(e)?e:{value:e}}function nh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FM(t,e){return nh(t,e.toTimestamp())}function Cn(t){return ae(!!t),q.fromTimestamp(function(n){const r=Br(n);return new Le(r.seconds,r.nanos)}(t))}function Iy(t,e){return om(t,e).canonicalString()}function om(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EA(t){const e=Ee.fromString(t);return ae(kA(e)),e}function am(t,e){return Iy(t.databaseId,e.path)}function mf(t,e){const n=EA(e);if(n.get(1)!==t.databaseId.projectId)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(IA(n))}function TA(t,e){return Iy(t.databaseId,e)}function UM(t){const e=EA(t);return e.length===4?Ee.emptyPath():IA(e)}function lm(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IA(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Q_(t,e,n){return{name:am(t,e),fields:n.value.mapValue.fields}}function jM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ae(c===void 0||typeof c=="string"),lt.fromBase64String(c||"")):(ae(c===void 0||c instanceof Buffer||c instanceof Uint8Array),lt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:yA(u.code);return new j(c,u.message||"")}(o);n=new _A(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mf(t,r.document.name),s=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):q.min(),a=new vt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ic(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mf(t,r.document),s=r.readTime?Cn(r.readTime):q.min(),o=it.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mf(t,r.document),s=r.removedTargetIds||[];n=new ic([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CM(i,s),a=r.targetId;n=new vA(a,o)}}return n}function $M(t,e){let n;if(e instanceof ql)n={update:Q_(t,e.key,e.value)};else if(e instanceof gA)n={delete:am(t,e.key)};else if(e instanceof ei)n={update:Q_(t,e.key,e.data),updateMask:YM(e.fieldMask)};else{if(!(e instanceof kM))return W();n={verify:am(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof eh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof nl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof rl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof th)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function zM(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Cn(i.updateTime):Cn(s);return o.isEqual(q.min())&&(o=Cn(s)),new IM(o,i.transformResults||[])}(n,e))):[]}function BM(t,e){return{documents:[TA(t,e.path)]}}function HM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TA(t,i);const s=function(u){if(u.length!==0)return AA(On.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:ss(d.field),direction:KM(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=sm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function WM(t){let e=UM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=SA(h);return d instanceof On&&ZS(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Zc(os(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Zh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Jc(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Jc(p,d)}(n.endAt)),uM(e,i,o,s,a,"F",l,u)}function qM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=os(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=os(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=os(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=os(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(os(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>SA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function KM(t){return DM[t]}function QM(t){return LM[t]}function GM(t){return MM[t]}function ss(t){return{fieldPath:t.canonicalString()}}function os(t){return Qe.fromServerFormat(t.fieldPath)}function AA(t){return t instanceof Oe?function(n){if(n.op==="=="){if(D_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(O_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(D_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(O_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:QM(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(i=>AA(i));return r.length===1?r[0]:{compositeFilter:{op:GM(n.op),filters:r}}}(t):W()}function YM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r,i,s=q.min(),o=q.min(),a=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.ct=e}}function JM(t){const e=WM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?im(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this._n=new eV}addToCollectionParentIndex(e,n){return this._n.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(zr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(zr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class eV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ho(0)}static Ln(){return new ho(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(){this.changes=new ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ya(r.mutation,i,Pt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Jo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=ga(),a=function(){return ga()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ei)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ya(c.mutation,u,c.mutation.getFieldMask(),Le.now())):o.set(u.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new nV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ga();let i=new ve((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Pt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=aA();c.forEach(d=>{if(!s.has(d)){const p=pA(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(pi());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(c=>({batchId:a,changes:oA(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=Jo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Jo();return this.indexManager.getCollectionParents(e,s).next(a=>A.forEach(a,l=>{const u=function(h,d){return new ed(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,it.newInvalidDocument(c)))});let a=Jo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ya(c.mutation,u,Pt.empty(),Le.now()),nd(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return A.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Cn(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:JM(i.bundledQuery),readTime:Cn(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.overlays=new ve(z.comparator),this.hr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pi();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=pi(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=pi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=pi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PM(n,r));let s=this.hr.get(n);s===void 0&&(s=J(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.Pr=new Xe(Ue.Ir),this.Tr=new Xe(Ue.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ue(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new z(new Ee([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new z(new Ee([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=J();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return z.comparator(e.key,n.key)||re(e.pr,n.pr)}static Er(e,n){return re(e.pr,n.pr)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Xe(Ue.Ir)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ue(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(re);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),A.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new z(s),0);let a=new Xe(re);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),A.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return A.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ue(n,0),i=this.wr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.vr=e,this.docs=function(){return new ve(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||H4(B4(c),r)<=0||(i.has(c.key)||nd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W()}Fr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lV(this)}getSize(e){return A.resolve(this.size)}}class lV extends tV{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.persistence=e,this.Mr=new ko(n=>vy(n),_y),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Sy,this.targetCount=0,this.Lr=ho.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),A.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ho(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.qn(n),A.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n){this.Br={},this.overlays={},this.kr=new py(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new uV(this),this.indexManager=new ZM,this.remoteDocumentCache=function(i){return new aV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new XM(n),this.$r=new iV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new oV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new hV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class hV extends q4{constructor(e){super(),this.currentSequenceNumber=e}}class Ay{constructor(e){this.persistence=e,this.zr=new Sy,this.jr=null}static Hr(e){return new Ay(e)}get Jr(){if(this.jr)return this.jr;throw W()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Jr,r=>{const i=z.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return A.or([()=>A.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ky(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return w2()?8:fi.v(Ce())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(zo()<=ee.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),A.resolve()):(zo()<=ee.DEBUG&&R("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(zo()<=ee.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):A.resolve())}ji(e,n){if(F_(n))return A.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=im(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,im(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return F_(n)||i.isEqual(q.min())?A.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?A.resolve(null):(zo()<=ee.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),is(n)),this.es(e,o,n,z4(i,-1)).next(a=>a))})}Zi(e,n){let r=new Xe(iA(e));return n.forEach((i,s)=>{nd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return zo()<=ee.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",is(n)),this.zi.getDocumentsMatchingQuery(e,n,zr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ve(re),this.rs=new ko(s=>vy(s),_y),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rV(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function mV(t,e,n,r){return new pV(t,e,n,r)}async function xA(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function gV(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=A.resolve();return d.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(w=>{const v=u.docVersions.get(y);ae(v!==null),w.version.compareTo(v)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=J();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PA(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function yV(t,e){const n=K(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(w,v,m){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.Qr.updateTargetData(s,p))});let l=Xn(),u=J();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(vV(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(q.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function vV(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function _V(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wV(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function um(t,e,n){const r=K(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Wl(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function G_(t,e,n){const r=K(t);let i=q.min(),s=J();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=K(l),d=h.rs.get(c);return d!==void 0?A.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:J())).next(a=>(EV(r,dM(e),a),{documents:a,hs:s})))}function EV(t,e,n){let r=t.ss.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Y_{constructor(){this.activeTargetIds=vM()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TV{constructor(){this.no=new Y_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Y_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu=null;function gf(){return Cu===null?Cu=function(){return 268435456+Math.round(2147483648*Math.random())}():Cu++,"0x"+Cu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class kV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=gf(),l=this.bo(n,r.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ao("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ao}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=SV[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=gf();return new Promise((o,a)=>{const l=new b4;l.setWithCredentials(!0),l.listenOnce(C4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case pf.NO_ERROR:const c=l.getResponseJson();R(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case pf.TIMEOUT:R(tt,`RPC '${e}' ${s} timed out`),a(new j(k.DEADLINE_EXCEEDED,"Request time out"));break;case pf.HTTP_ERROR:const h=l.getStatus();if(R(tt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const m=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(m)>=0?m:k.UNKNOWN}(p.status);a(new j(y,p.message))}else a(new j(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(k.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{R(tt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(tt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=gf(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=x4(),a=P4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(tt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const y=new AV({lo:v=>{p?R(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(R(tt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),R(tt,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},ho:()=>h.close()}),w=(v,m,f)=>{v.listen(m,g=>{try{f(g)}catch(T){setTimeout(()=>{throw T},0)}})};return w(h,ku.EventType.OPEN,()=>{p||R(tt,`RPC '${e}' stream ${i} transport opened.`)}),w(h,ku.EventType.CLOSE,()=>{p||(p=!0,R(tt,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),w(h,ku.EventType.ERROR,v=>{p||(p=!0,ao(tt,`RPC '${e}' stream ${i} transport errored:`,v),y.Vo(new j(k.UNAVAILABLE,"The operation could not be completed")))}),w(h,ku.EventType.MESSAGE,v=>{var m;if(!p){const f=v.data[0];ae(!!f);const g=f,T=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(T){R(tt,`RPC '${e}' stream ${i} received error:`,T);const S=T.status;let C=function(U){const B=Ae[U];if(B!==void 0)return yA(B)}(S),P=T.message;C===void 0&&(C=k.INTERNAL,P="Unknown error status: "+S+" with message "+T.message),p=!0,y.Vo(new j(C,P)),h.close()}else R(tt,`RPC '${e}' stream ${i} received:`,f),y.mo(f)}}),w(a,R4.STAT_EVENT,v=>{v.stat===x_.PROXY?R(tt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===x_.NOPROXY&&R(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function yf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){return new VM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new CA(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new j(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xV extends RA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=jM(this.serializer,e),r=function(s){if(!("targetChange"in s))return q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Cn(o.readTime):q.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=lm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=rm(l)?{documents:BM(s,l)}:{query:HM(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wA(s,o.resumeToken);const u=sm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=nh(s,o.snapshotVersion.toTimestamp());const u=sm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=qM(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=lm(this.serializer),n.removeTarget=e,this.t_(n)}}class PV extends RA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=zM(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.T_(r,n)}return ae(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=lm(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$M(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,om(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(k.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,om(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(k.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class RV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(bn(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Zi(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=K(l);u.v_.add(4),await Ql(u),u.x_.set("Unknown"),u.v_.delete(4),await ad(u)}(this))})}),this.x_=new RV(r,i)}}async function ad(t){if(Zi(t))for(const e of t.F_)await e(!0)}async function Ql(t){for(const e of t.F_)await e(!1)}function bA(t,e){const n=K(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Ry(n)?Cy(n):xo(n).Jo()&&Py(n,e))}function xy(t,e){const n=K(t),r=xo(n);n.C_.delete(e),r.Jo()&&NA(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Zi(n)&&n.x_.set("Unknown"))}function Py(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xo(t).c_(e)}function NA(t,e){t.O_.Oe(e),xo(t).l_(e)}function Cy(t){t.O_=new OM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),xo(t).start(),t.x_.p_()}function Ry(t){return Zi(t)&&!xo(t).Ho()&&t.C_.size>0}function Zi(t){return K(t).v_.size===0}function OA(t){t.O_=void 0}async function NV(t){t.C_.forEach((e,n)=>{Py(t,e)})}async function OV(t,e){OA(t),Ry(t)?(t.x_.S_(e),Cy(t)):t.x_.set("Unknown")}async function DV(t,e,n){if(t.x_.set("Online"),e instanceof _A&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rh(t,r)}else if(e instanceof ic?t.O_.$e(e):e instanceof vA?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(q.min()))try{const r=await PA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),NA(s,l);const h=new kr(c.target,l,u,c.sequenceNumber);Py(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await rh(t,r)}}async function rh(t,e,n){if(!Wl(e))throw e;t.v_.add(1),await Ql(t),t.x_.set("Offline"),n||(n=()=>PA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await ad(t)})}function DA(t,e){return e().catch(n=>rh(t,n,e))}async function ld(t){const e=K(t),n=Hr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;LV(e);)try{const i=await _V(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,MV(e,i)}catch(i){await rh(e,i)}LA(e)&&MA(e)}function LV(t){return Zi(t)&&t.D_.length<10}function MV(t,e){t.D_.push(e);const n=Hr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function LA(t){return Zi(t)&&!Hr(t).Ho()&&t.D_.length>0}function MA(t){Hr(t).start()}async function VV(t){Hr(t).d_()}async function FV(t){const e=Hr(t);for(const n of t.D_)e.I_(n.mutations)}async function UV(t,e,n){const r=t.D_.shift(),i=Ey.from(r,e,n);await DA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ld(t)}async function jV(t,e){e&&Hr(t).P_&&await async function(r,i){if(function(o){return RM(o)&&o!==k.ABORTED}(i.code)){const s=r.D_.shift();Hr(r).Zo(),await DA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ld(r)}}(t,e),LA(t)&&MA(t)}async function J_(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Zi(n);n.v_.add(3),await Ql(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await ad(n)}async function $V(t,e){const n=K(t);e?(n.v_.delete(2),await ad(n)):e||(n.v_.add(2),await Ql(n),n.x_.set("Unknown"))}function xo(t){return t.N_||(t.N_=function(n,r,i){const s=K(n);return s.R_(),new xV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:NV.bind(null,t),To:OV.bind(null,t),u_:DV.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Ry(t)?Cy(t):t.x_.set("Unknown")):(await t.N_.stop(),OA(t))})),t.N_}function Hr(t){return t.L_||(t.L_=function(n,r,i){const s=K(n);return s.R_(),new PV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:VV.bind(null,t),To:jV.bind(null,t),E_:FV.bind(null,t),T_:UV.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await ld(t)):(await t.L_.stop(),t.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new by(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ny(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Wl(t))return new j(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Jo(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.B_=new ve(z.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):W():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fo(e,n,Ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class BV{constructor(){this.queries=new ko(e=>rA(e),td),this.onlineState="Unknown",this.W_=new Set}}async function HV(t,e){const n=K(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new zV,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ny(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&Oy(n)}async function WV(t,e){const n=K(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qV(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&Oy(n)}function KV(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Oy(t){t.W_.forEach(e=>{e.next()})}var cm,ew;(ew=cm||(cm={})).j_="default",ew.Cache="cache";class QV{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==cm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.key=e}}class FA{constructor(e){this.key=e}}class GV{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=J(),this.mutatedKeys=J(),this.ha=iA(e),this.Pa=new Ls(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Z_,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=nd(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?y!==w&&(r.track({type:3,doc:p}),v=!0):this.da(d,p)||(r.track({type:2,doc:p}),v=!0,(l&&this.ha(p,l)>0||u&&this.ha(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,h)=>function(p,y){const w=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return w(p)-w(y)}(c.type,h.type)||this.ha(c.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new fo(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Z_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=J(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new FA(r))}),this.la.forEach(r=>{e.has(r)||n.push(new VA(r))}),n}fa(e){this.ua=e.hs,this.la=J();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return fo.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class YV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XV{constructor(e){this.key=e,this.pa=!1}}class JV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ko(a=>rA(a),td),this.Sa=new Map,this.ba=new Set,this.Da=new ve(z.comparator),this.Ca=new Map,this.va=new Sy,this.Fa={},this.Ma=new Map,this.xa=ho.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function ZV(t,e,n=!0){const r=HA(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await UA(r,e,n,!0),i}async function e3(t,e){const n=HA(t);await UA(n,e,!0,!1)}async function UA(t,e,n,r){const i=await wV(t.localStore,xn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await t3(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&bA(t.remoteStore,i),a}async function t3(t,e,n,r,i){t.Na=(h,d,p)=>async function(w,v,m,f){let g=v.view.Ta(m);g.Xi&&(g=await G_(w.localStore,v.query,!1).then(({documents:P})=>v.view.Ta(P,g)));const T=f&&f.targetChanges.get(v.targetId),S=f&&f.targetMismatches.get(v.targetId)!=null,C=v.view.applyChanges(g,w.isPrimaryClient,T,S);return nw(w,v.targetId,C.Va),C.snapshot}(t,h,d,p);const s=await G_(t.localStore,e,!0),o=new GV(e,s.hs),a=o.Ta(s.documents),l=Kl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);nw(t,n,u.Va);const c=new YV(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function n3(t,e,n){const r=K(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!td(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await um(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&xy(r.remoteStore,i.targetId),hm(r,i.targetId)}).catch(Hl)):(hm(r,i.targetId),await um(r.localStore,i.targetId,!0))}async function r3(t,e){const n=K(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xy(n.remoteStore,r.targetId))}async function i3(t,e,n){const r=h3(t);try{const i=await function(o,a){const l=K(o),u=Le.now(),c=a.reduce((p,y)=>p.add(y.key),J());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Xn(),w=J();return l.os.getEntries(p,c).next(v=>{y=v,y.forEach((m,f)=>{f.isValidDocument()||(w=w.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(v=>{h=v;const m=[];for(const f of a){const g=AM(f,h.get(f.key).overlayedDocument);g!=null&&m.push(new ei(f.key,g,YS(g.value.mapValue),Pn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(v=>{d=v;const m=v.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(p,v.batchId,m)})}).then(()=>({batchId:d.batchId,changes:oA(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new ve(re)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Gl(r,i.changes),await ld(r.remoteStore)}catch(i){const s=Ny(i,"Failed to persist write");n.reject(s)}}async function jA(t,e){const n=K(t);try{const r=await yV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?ae(o.pa):i.removedDocuments.size>0&&(ae(o.pa),o.pa=!1))}),await Gl(n,r,e)}catch(r){await Hl(r)}}function tw(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.Q_)d.G_(a)&&(u=!0)}),u&&Oy(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function s3(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new ve(z.comparator);o=o.insert(s,it.newNoDocument(s,q.min()));const a=J().add(s),l=new sd(q.min(),new Map,new ve(re),o,a);await jA(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),Dy(r)}else await um(r.localStore,e,!1).then(()=>hm(r,e,n)).catch(Hl)}async function o3(t,e){const n=K(t),r=e.batch.batchId;try{const i=await gV(n.localStore,e);zA(n,r,null),$A(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gl(n,i)}catch(i){await Hl(i)}}async function a3(t,e,n){const r=K(t);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ae(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);zA(r,e,n),$A(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gl(r,i)}catch(i){await Hl(i)}}function $A(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function zA(t,e,n){const r=K(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function hm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||BA(t,r)})}function BA(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(xy(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Dy(t))}function nw(t,e,n){for(const r of n)r instanceof VA?(t.va.addReference(r.key,e),l3(t,r)):r instanceof FA?(R("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||BA(t,r.key)):W()}function l3(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ba.add(r),Dy(t))}function Dy(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new z(Ee.fromString(e)),r=t.xa.next();t.Ca.set(r,new XV(n)),t.Da=t.Da.insert(n,r),bA(t.remoteStore,new kr(xn(wy(n.path)),r,"TargetPurposeLimboResolution",py._e))}}async function Gl(t,e,n){const r=K(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ky.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=K(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(u,d=>A.forEach(d.qi,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>A.forEach(d.Qi,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Wl(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.ns.get(d),y=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(d,w)}}}(r.localStore,s))}async function u3(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await xA(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new j(k.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gl(n,r.us)}}function c3(t,e){const n=K(t),r=n.Ca.get(e);if(r&&r.pa)return J().add(r.key);{let i=J();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function HA(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s3.bind(null,e),e.ya.u_=qV.bind(null,e.eventManager),e.ya.La=KV.bind(null,e.eventManager),e}function h3(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a3.bind(null,e),e}class rw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=od(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mV(this.persistence,new fV,e.initialUser,this.serializer)}createPersistence(e){return new cV(Ay.Hr,this.serializer)}createSharedClientState(e){return new TV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d3{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u3.bind(null,this.syncEngine),await $V(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BV}()}createDatastore(e){const n=od(e.databaseInfo.databaseId),r=function(s){return new kV(s)}(e.databaseInfo);return function(s,o,a,l){return new CV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new bV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>tw(this.syncEngine,n,0),function(){return X_.D()?new X_:new IV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new JV(i,s,o,a,l,u);return c&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=K(r);R("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Ql(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=KS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ny(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vf(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await g3(t);R("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>J_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>J_(e.remoteStore,i)),t._onlineComponents=e}function m3(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function g3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!m3(n))throw n;ao("Error using user provided cache. Falling back to memory cache: "+n),await vf(t,new rw)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await vf(t,new rw);return t._offlineComponents}async function WA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await iw(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await iw(t,new d3))),t._onlineComponents}function y3(t){return WA(t).then(e=>e.syncEngine)}async function v3(t){const e=await WA(t),n=e.eventManager;return n.onListen=ZV.bind(null,e.syncEngine),n.onUnlisten=n3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=e3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=r3.bind(null,e.syncEngine),n}function _3(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new f3({next:d=>{o.enqueueAndForget(()=>WV(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new j(k.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new j(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new QV(wy(a.path),c,{includeMetadataChanges:!0,ta:!0});return HV(s,h)}(await v3(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t,e,n){if(!n)throw new j(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function E3(t,e,n,r){if(e===!0&&r===!0)throw new j(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ow(t){if(!z.isDocumentKey(t))throw new j(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ly(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ly(t);throw new j(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}E3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class My{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new O4;switch(r.type){case"firstParty":return new V4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sw.get(n);r&&(R("ComponentProvider","Removing Datastore"),sw.delete(n),r.terminate())}(this),Promise.resolve()}}function T3(t,e,n,r={}){var i;const s=(t=zi(t,My))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=nt.MOCK_USER;else{a=m2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new j(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(u)}t._authCredentials=new D4(new qS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vy(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new il(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class il extends Vy{constructor(e,n,r){super(e,n,wy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new z(e))}withConverter(e){return new il(this.firestore,e,this._path)}}function es(t,e,...n){if(t=Re(t),arguments.length===1&&(e=KS.newId()),w3("doc","path",e),t instanceof My){const r=Ee.fromString(e,...n);return ow(r),new bt(t,null,new z(r))}{if(!(t instanceof bt||t instanceof il))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return ow(r),new bt(t.firestore,t instanceof il?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new CA(this,"async_queue_retry"),this.cu=()=>{const n=yf();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=yf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Hn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Wl(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=by.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&W()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class ud extends My{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new I3}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QA(this),this._firestoreClient.terminate()}}function S3(t,e){const n=typeof t=="object"?t:Pg(),r=typeof t=="string"?t:e||"(default)",i=Yi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=f2("firestore");s&&T3(i,...s)}return i}function KA(t){return t._firestoreClient||QA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new X4(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,qA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new p3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new po(lt.fromBase64String(e))}catch(n){throw new j(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new po(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3=/^__.*__$/;class k3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new ql(e,this.data,n,this.fieldTransforms)}}class GA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ei(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function YA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class jy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new jy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return ih(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(YA(this.Vu)&&A3.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class x3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||od(e)}Cu(e,n,r,i=!1){return new jy({Vu:e,methodName:n,Du:r,path:Qe.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XA(t){const e=t._freezeSettings(),n=od(t._databaseId);return new x3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function P3(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);$y("Data must be an object, but it was:",o,r);const a=JA(r,o);let l,u;if(s.merge)l=new Pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=dm(e,h,n);if(!o.contains(d))throw new j(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ek(c,d)||c.push(d)}l=new Pt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new k3(new vt(a),l,u)}class hd extends Fy{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hd}}function C3(t,e,n,r){const i=t.Cu(1,e,n);$y("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();Ji(r,(l,u)=>{const c=zy(e,l,n);u=Re(u);const h=i.yu(c);if(u instanceof hd)s.push(c);else{const d=dd(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Pt(s);return new GA(o,a,i.fieldTransforms)}function R3(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[dm(e,r,n)],l=[i];if(s.length%2!=0)throw new j(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(dm(e,s[d])),l.push(s[d+1]);const u=[],c=vt.empty();for(let d=a.length-1;d>=0;--d)if(!ek(u,a[d])){const p=a[d];let y=l[d];y=Re(y);const w=o.yu(p);if(y instanceof hd)u.push(p);else{const v=dd(y,w);v!=null&&(u.push(p),c.set(p,v))}}const h=new Pt(u);return new GA(c,h,o.fieldTransforms)}function dd(t,e){if(ZA(t=Re(t)))return $y("Unsupported field value:",e,t),JA(t,e);if(t instanceof Fy)return function(r,i){if(!YA(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=dd(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _M(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:nh(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nh(i.serializer,s)}}if(r instanceof Uy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof po)return{bytesValue:wA(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Iy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Ly(r)}`)}(t,e)}function JA(t,e){const n={};return QS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(t,(r,i)=>{const s=dd(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ZA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Uy||t instanceof po||t instanceof bt||t instanceof Fy)}function $y(t,e,n){if(!ZA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ly(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function dm(t,e,n){if((e=Re(e))instanceof cd)return e._internalPath;if(typeof e=="string")return zy(t,e);throw ih("Field path arguments must be of type string or ",t,!1,void 0,n)}const b3=new RegExp("[~\\*/\\[\\]]");function zy(t,e,n){if(e.search(b3)>=0)throw ih(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cd(...e.split("."))._internalPath}catch{throw ih(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ih(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(k.INVALID_ARGUMENT,a+t+l)}function ek(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new N3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nk("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class N3 extends tk{data(){return super.data()}}function nk(t,e){return typeof e=="string"?zy(t,e):e instanceof cd?e._internalPath:e._delegate._internalPath}class O3{convertValue(e,n="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Uy(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ae(kA(r));const i=new el(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D3(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rk extends tk{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new M3(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nk("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class M3 extends rk{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t){t=zi(t,bt);const e=zi(t.firestore,ud);return _3(KA(e),t._key).then(n=>U3(e,t,n))}class V3 extends O3{constructor(e){super(),this.firestore=e}convertBytes(e){return new po(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function F3(t,e,n){t=zi(t,bt);const r=zi(t.firestore,ud),i=D3(t.converter,e,n);return ik(r,[P3(XA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pn.none())])}function Xl(t,e,n,...r){t=zi(t,bt);const i=zi(t.firestore,ud),s=XA(i);let o;return o=typeof(e=Re(e))=="string"||e instanceof cd?R3(s,"updateDoc",t._key,e,n,r):C3(s,"updateDoc",t._key,e),ik(i,[o.toMutation(t._key,Pn.exists(!0))])}function ik(t,e){return function(r,i){const s=new Hn;return r.asyncQueue.enqueueAndForget(async()=>i3(await y3(r),i,s)),s.promise}(KA(t),e)}function U3(t,e,n){const r=n.docs.get(e._key),i=new V3(t);return new rk(t,i,e._key,r,new L3(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ao=i})(Eo),Rn(new an("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ud(new L4(r.getProvider("auth-internal")),new U4(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new j(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new el(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qt(P_,"4.6.0",e),qt(P_,"4.6.0","esm2017")})();const j3={apiKey:"AIzaSyCAEYRQvBKsZ0kUfDGqI2GHJForvWjPcwg",authDomain:"gains-tracker-55dc4.firebaseapp.com",projectId:"gains-tracker-55dc4",storageBucket:"gains-tracker-55dc4.appspot.com",messagingSenderId:"989956774442",appId:"1:989956774442:web:cf6b3c58354f58abe40153",measurementId:"G-Z4JH3P6530"},By=UT(j3),sk=Ll(By);IL(By);const ts=S3(By),ok=I.createContext(void 0),$3=({children:t})=>{const[e,n]=I.useState(null);return I.useEffect(()=>{const r=qN(sk,i=>{console.log(i),n(i)});return()=>r()},[]),_.jsx(ok.Provider,{value:{currentUser:e},children:t})},ak=async t=>{const e=es(ts,"users",t),n={exercises:{"Bench Press":{history:{}},Squat:{history:{}},Deadlift:{history:{}}},program:{0:{exercises:[],name:"Sun"},1:{exercises:[],name:"Mon"},2:{exercises:[],name:"Tue"},3:{exercises:[],name:"Wed"},4:{exercises:[],name:"Thu"},5:{exercises:[],name:"Fri"},6:{exercises:[],name:"Sat"}}};try{await F3(e,n),console.log("Database seeded successfully.")}catch(r){throw console.error("Error seeding database:",r),r}},lk=async t=>{try{const e=es(ts,"users",t),n=await Yl(e);if(!n.exists())return await ak(t),lk(t);const r=n.data();return console.log(r),r}catch(e){throw console.error("Error fetching exercise data:",e),e}};async function uk(t,e,n){try{const r=t.get("exerciseName");if(r&&r.trim()){const i=es(ts,"users",e),s=await Yl(i);if(s.exists()){const o=s.data(),a=o==null?void 0:o.program;a&&a[n]&&a[n].exercises?a[n].exercises.includes(r.trim())?console.warn("Exercise already exists in the array."):(a[n].exercises.push(r.trim()),await Xl(i,{program:a})):console.warn("Day or exercises array not found in program.")}else console.warn("User document not found.")}else console.warn("Exercise name is empty or invalid.")}catch(r){throw console.error("Error adding exercise:",r),r}}async function ck(t,e,n){try{const r=es(ts,"users",e),i=await Yl(r);if(i.exists()){const s=i.data(),o=s==null?void 0:s.program;if(o&&o[n]&&o[n].exercises){const a=o[n].exercises;if(a.includes(t.trim())){const l=a.filter(u=>u!==t.trim());o[n].exercises=l,await Xl(r,{program:o}),console.log("Exercise deleted successfully.")}else console.warn("Exercise not found in the array.")}else console.warn("Day or exercises array not found in program.")}else console.warn("Document for the current day not found.")}catch(r){throw console.error("Error deleting exercise:",r),r}}const Po=()=>{const t=I.useContext(ok);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},hk={exerciseData:{exercises:{},program:{}},isLoading:!1,error:null,addExerciseAndUpdateVersion:uk,deleteExerciseAndUpdateVersion:ck,incrementVersion:()=>{}},dk=I.createContext(hk),z3=({children:t})=>{const e=Po().currentUser,[n,r]=I.useState(hk.exerciseData),[i,s]=I.useState(!1),[o,a]=I.useState(null),[l,u]=I.useState(0),{data:c,error:h,isLoading:d}=iR({queryKey:["exerciseData",l],enabled:e!==null,queryFn:()=>lk((e==null?void 0:e.uid)??"")});I.useEffect(()=>{c&&r(c)},[c]),I.useEffect(()=>{h&&a(h)},[h]),I.useEffect(()=>{s(d)},[d]);const p=async(v,m,f)=>{await uk(v,m,f),u(g=>g+1)},y=async(v,m,f)=>{await ck(v,m,f),u(g=>g+1)},w=()=>{u(v=>v+1)};return _.jsx(dk.Provider,{value:{exerciseData:n,isLoading:i,error:o,addExerciseAndUpdateVersion:p,deleteExerciseAndUpdateVersion:y,incrementVersion:w},children:t})},Hy=I.createContext({currentDay:new Date().getDay(),nextDay:()=>{},prevDay:()=>{}}),B3=({children:t})=>{const[e,n]=I.useState(new Date().getDay());console.log(new Date().getDay());const r=()=>{n((e+1)%7)},i=()=>{n((e+6)%7)};return _.jsx(Hy.Provider,{value:{currentDay:e,nextDay:r,prevDay:i},children:t})},H3=new jC,W3=({children:t})=>_.jsx(n2,{children:_.jsx($3,{children:_.jsx(WC,{client:H3,children:_.jsx(oR,{defaultTheme:"system",storageKey:"vite-ui-theme",children:_.jsx(z3,{children:_.jsx(B3,{children:t})})})})})}),q3=Ll(),K3=(t,e)=>UN(q3,t,e).then(n=>n).catch(n=>{const r=n.code,i=n.message;throw console.error(`Error [${r}]: ${i}`),n}),Q3=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(null),o=u=>{e(u.target.value)},a=u=>{r(u.target.value)},l=async u=>{u.preventDefault();try{const c=await K3(t,n);console.log("User signed in:",c.user)}catch(c){c instanceof St?(s(c.message),console.error("Error signing in:",c)):(console.error("Unexpected error:",c),s("An unexpected error occurred."))}};return _.jsx(_.Fragment,{children:_.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:_.jsx("div",{className:"w-full bg-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0",children:_.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[_.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl",children:"Sign in to your account"}),_.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:l,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-foreground",children:"Your email"}),_.jsx("input",{onChange:o,type:"email",name:"email",id:"email",className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",placeholder:"name@company.com",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-foreground",children:"Password"}),_.jsx("input",{onChange:a,type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",required:!0})]}),_.jsx("div",{className:"flex items-center justify-between",children:_.jsx(Vr,{to:"/forgot-password",className:"text-sm font-medium text-muted-foreground hover:underline",children:"Forgot password?"})}),_.jsx("button",{type:"submit",className:"w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:"Sign in"}),_.jsxs("p",{className:"text-sm font-light text-muted-foreground",children:["No Account?"," ",_.jsx(Vr,{to:"/signup",className:"font-medium text-muted-foreground hover:underline",children:"Sign up"})]})]}),i&&_.jsx("div",{className:"text-red-500",children:i})]})})})})},G3=Ll(),Y3=(t,e)=>FN(G3,t,e).then(n=>n).catch(n=>{const r=n.code,i=n.message;throw console.error(`Error [${r}]: ${i}`),n}),X3=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(""),[i,s]=I.useState(""),[o,a]=I.useState(null),l=IT(),u=p=>{e(p.target.value)},c=p=>{r(p.target.value)},h=p=>{s(p.target.value)},d=async p=>{if(p.preventDefault(),n!==i){a("Passwords do not match.");return}try{const y=await Y3(t,n);console.log("User signed up:",y.user),l("/")}catch(y){y instanceof St?(a(y.message),console.error("Error signing up:",y)):(console.error("Unexpected error:",y),a("An unexpected error occurred."))}};return _.jsx(_.Fragment,{children:_.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:_.jsx("div",{className:"w-full bg-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0",children:_.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[_.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl",children:"Create a new account"}),_.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:d,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-foreground",children:"Your email"}),_.jsx("input",{onChange:u,type:"email",name:"email",id:"email",className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",placeholder:"name@company.com",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-foreground",children:"Password"}),_.jsx("input",{onChange:c,type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"password-confirm",className:"block mb-2 text-sm font-medium text-foreground",children:"Confirm Password"}),_.jsx("input",{onChange:h,type:"password",name:"password-confirm",id:"password-confirm",placeholder:"••••••••",className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",required:!0})]}),_.jsx("button",{type:"submit",className:"w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:"Create Account"})]}),o&&_.jsx("div",{className:"text-red-500",children:o})]})})})})},Wy=({children:t})=>_.jsx("h1",{className:"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",children:t}),J3=({children:t})=>_.jsx("h3",{className:"scroll-m-20 text-2xl font-semibold tracking-tight",children:t}),Z3=async()=>{try{await KN(sk)}catch(t){console.error("Error occurred during logout:",t)}},eF=()=>{var e;const t=Po().currentUser;return _.jsxs(_.Fragment,{children:[t!=null&&t.photoURL?_.jsx("img",{className:"object-cover w-[100px] h-[100px] rounded-full drop-shadow-2xl",src:t.photoURL,alt:"User profile"}):_.jsx("svg",{className:"object-cover w-[100px] h-[100px] rounded-full",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",children:_.jsx("path",{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"})}),_.jsxs(Wy,{children:["Hey ",(e=t==null?void 0:t.displayName)==null?void 0:e.split(" ")[0]]}),_.jsxs("div",{className:"flex flex-col gap-[10px] w-[211px]",children:[_.jsx(Vr,{to:"/account-settings",className:"w-full text-foreground bg-accent hover:bg-primary focus:ring-4  focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:"Settings"}),_.jsx("button",{onClick:Z3,className:"w-full text-foreground bg-accent hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:"Logout"})]})]})},tF=Ll(),nF=async t=>{await VN(tF,t)},rF=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(null),[i,s]=I.useState(null),o=l=>{e(l.target.value)},a=async l=>{l.preventDefault(),r(null),s(null);try{await nF(t),r("Password reset email sent successfully.")}catch(u){u instanceof St?(s(u.message),console.error("Error sending reset email:",u)):(console.error("Unexpected error:",u),s("An unexpected error occurred."))}};return _.jsx(_.Fragment,{children:_.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:_.jsx("div",{className:"w-full bg-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0",children:_.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[_.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl",children:"Reset your password"}),_.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:a,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-foreground",children:"Your email"}),_.jsx("input",{onChange:o,type:"email",name:"email",id:"email",className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",placeholder:"name@company.com",required:!0})]}),_.jsx("button",{type:"submit",className:"w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:"Send Password Reset Email"})]}),n&&_.jsx("div",{className:"text-green-500",children:n}),i&&_.jsx("div",{className:"text-red-500",children:i})]})})})})},iF=async(t,e,n)=>{try{await $N(t,{displayName:e,photoURL:n}),console.log("User profile updated successfully")}catch(r){console.error("Error updating profile:",r)}},sF=async(t,e)=>{try{await zN(t,e),console.log("User email updated successfully")}catch(n){console.error("Error updating email:",n)}},oF=()=>{const e=Ll().currentUser,[n,r]=I.useState((e==null?void 0:e.displayName)||""),[i,s]=I.useState((e==null?void 0:e.photoURL)||""),[o,a]=I.useState((e==null?void 0:e.email)||""),[l,u]=I.useState(null),[c,h]=I.useState(null),d=v=>{r(v.target.value)},p=v=>{s(v.target.value)},y=v=>{a(v.target.value)},w=async v=>{if(v.preventDefault(),!!e)try{u(null),h(null),(n!==e.displayName||i!==e.photoURL)&&await iF(e,n,i),o!==e.email&&await sF(e,o),h("Profile updated successfully!")}catch(m){u("An error occurred while updating your profile."),console.error("Error updating profile:",m)}};return _.jsx(_.Fragment,{children:_.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",children:_.jsx("div",{className:"w-full bg-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0",children:_.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[_.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl",children:"Update your profile"}),_.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:w,children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"displayName",className:"block mb-2 text-sm font-medium text-foreground",children:"Display Name"}),_.jsx("input",{onChange:d,type:"text",name:"displayName",id:"displayName",value:n,className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",placeholder:"John Doe"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"photoURL",className:"block mb-2 text-sm font-medium text-foreground",children:"Photo URL"}),_.jsx("input",{onChange:p,type:"text",name:"photoURL",id:"photoURL",value:i,className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",placeholder:"https://example.com/photo.jpg"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-foreground",children:"Email"}),_.jsx("input",{onChange:y,type:"email",name:"email",id:"email",value:o,className:"bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5",placeholder:"name@company.com",required:!0})]}),_.jsx("button",{type:"submit",className:"w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:"Update Profile"})]}),l&&_.jsx("div",{className:"text-red-500",children:l}),c&&_.jsx("div",{className:"text-green-500",children:c})]})})})})};function aF(){const t=new Date,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}async function lF(t,e,n){const r=t.get("name");let i=t.get("reps"),s=t.get("weight");typeof i!="string"&&i!==null&&(i=i.toString()),typeof s!="string"&&s!==null&&(s=s.toString());const o=aF();try{const a=es(ts,"users",e);i&&s&&(n.history[o]={0:{reps:i,weight:s}},await Xl(a,{[`exercises.${r}`]:n}),console.log("Exercise updated successfully."))}catch(a){throw console.error("Error updating exercise:",a),a}}var fk={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},pk={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},fm={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},uF={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},cF=uF,hF={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},dF={prefix:"fas",iconName:"less-than",icon:[384,512,[62774],"3c","M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"]},fF={prefix:"fas",iconName:"greater-than",icon:[384,512,[62769],"3e","M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"]},pF={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},mF={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};function lw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?lw(Object(n),!0).forEach(function(r){Me(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sh(t){"@babel/helpers - typeof";return sh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sh(t)}function gF(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yF(t,e,n){return e&&uw(t.prototype,e),n&&uw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Me(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qy(t,e){return _F(t)||EF(t,e)||mk(t,e)||IF()}function Jl(t){return vF(t)||wF(t)||mk(t)||TF()}function vF(t){if(Array.isArray(t))return pm(t)}function _F(t){if(Array.isArray(t))return t}function wF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function EF(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function mk(t,e){if(t){if(typeof t=="string")return pm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pm(t,e)}}function pm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function TF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cw=function(){},Ky={},gk={},yk=null,vk={mark:cw,measure:cw};try{typeof window<"u"&&(Ky=window),typeof document<"u"&&(gk=document),typeof MutationObserver<"u"&&(yk=MutationObserver),typeof performance<"u"&&(vk=performance)}catch{}var SF=Ky.navigator||{},hw=SF.userAgent,dw=hw===void 0?"":hw,Wr=Ky,fe=gk,fw=yk,Ru=vk;Wr.document;var rr=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",_k=~dw.indexOf("MSIE")||~dw.indexOf("Trident/"),bu,Nu,Ou,Du,Lu,Jn="___FONT_AWESOME___",mm=16,wk="fa",Ek="svg-inline--fa",Bi="data-fa-i2svg",gm="data-fa-pseudo-element",AF="data-fa-pseudo-element-pending",Qy="data-prefix",Gy="data-icon",pw="fontawesome-i2svg",kF="async",xF=["HTML","HEAD","STYLE","SCRIPT"],Tk=function(){try{return!0}catch{return!1}}(),ce="classic",we="sharp",Yy=[ce,we];function Zl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ce]}})}var sl=Zl((bu={},Me(bu,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Me(bu,we,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),bu)),ol=Zl((Nu={},Me(Nu,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Me(Nu,we,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Nu)),al=Zl((Ou={},Me(Ou,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Me(Ou,we,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ou)),PF=Zl((Du={},Me(Du,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Me(Du,we,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Du)),CF=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ik="fa-layers-text",RF=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bF=Zl((Lu={},Me(Lu,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Me(Lu,we,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Lu)),Sk=[1,2,3,4,5,6,7,8,9,10],NF=Sk.concat([11,12,13,14,15,16,17,18,19,20]),OF=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ll=new Set;Object.keys(ol[ce]).map(ll.add.bind(ll));Object.keys(ol[we]).map(ll.add.bind(ll));var DF=[].concat(Yy,Jl(ll),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mi.GROUP,mi.SWAP_OPACITY,mi.PRIMARY,mi.SECONDARY]).concat(Sk.map(function(t){return"".concat(t,"x")})).concat(NF.map(function(t){return"w-".concat(t)})),va=Wr.FontAwesomeConfig||{};function LF(t){var e=fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function MF(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(fe&&typeof fe.querySelector=="function"){var VF=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];VF.forEach(function(t){var e=qy(t,2),n=e[0],r=e[1],i=MF(LF(n));i!=null&&(va[r]=i)})}var Ak={styleDefault:"solid",familyDefault:"classic",cssPrefix:wk,replacementClass:Ek,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};va.familyPrefix&&(va.cssPrefix=va.familyPrefix);var mo=D(D({},Ak),va);mo.autoReplaceSvg||(mo.observeMutations=!1);var V={};Object.keys(Ak).forEach(function(t){Object.defineProperty(V,t,{enumerable:!0,set:function(n){mo[t]=n,_a.forEach(function(r){return r(V)})},get:function(){return mo[t]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,_a.forEach(function(n){return n(V)})},get:function(){return mo.cssPrefix}});Wr.FontAwesomeConfig=V;var _a=[];function FF(t){return _a.push(t),function(){_a.splice(_a.indexOf(t),1)}}var or=mm,En={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function UF(t){if(!(!t||!rr)){var e=fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return fe.head.insertBefore(e,r),t}}var jF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ul(){for(var t=12,e="";t-- >0;)e+=jF[Math.random()*62|0];return e}function Co(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xy(t){return t.classList?Co(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function kk(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $F(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(kk(t[n]),'" ')},"").trim()}function fd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Jy(t){return t.size!==En.size||t.x!==En.x||t.y!==En.y||t.rotate!==En.rotate||t.flipX||t.flipY}function zF(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function BF(t){var e=t.transform,n=t.width,r=n===void 0?mm:n,i=t.height,s=i===void 0?mm:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&_k?l+="translate(".concat(e.x/or-r/2,"em, ").concat(e.y/or-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/or,"em), calc(-50% + ").concat(e.y/or,"em)) "):l+="translate(".concat(e.x/or,"em, ").concat(e.y/or,"em) "),l+="scale(".concat(e.size/or*(e.flipX?-1:1),", ").concat(e.size/or*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var HF=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xk(){var t=wk,e=Ek,n=V.cssPrefix,r=V.replacementClass,i=HF;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var mw=!1;function _f(){V.autoAddCss&&!mw&&(UF(xk()),mw=!0)}var WF={mixout:function(){return{dom:{css:xk,insertCss:_f}}},hooks:function(){return{beforeDOMElementCreation:function(){_f()},beforeI2svg:function(){_f()}}}},Zn=Wr||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var nn=Zn[Jn],Pk=[],qF=function t(){fe.removeEventListener("DOMContentLoaded",t),oh=1,Pk.map(function(e){return e()})},oh=!1;rr&&(oh=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),oh||fe.addEventListener("DOMContentLoaded",qF));function KF(t){rr&&(oh?setTimeout(t,0):Pk.push(t))}function eu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?kk(t):"<".concat(e," ").concat($F(r),">").concat(s.map(eu).join(""),"</").concat(e,">")}function gw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var QF=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},wf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?QF(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function GF(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ym(t){var e=GF(t);return e.length===1?e[0].toString(16):null}function YF(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function yw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function vm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=yw(e);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(t,yw(e)):nn.styles[t]=D(D({},nn.styles[t]||{}),s),t==="fas"&&vm("fa",e)}var Mu,Vu,Fu,Es=nn.styles,XF=nn.shims,JF=(Mu={},Me(Mu,ce,Object.values(al[ce])),Me(Mu,we,Object.values(al[we])),Mu),Zy=null,Ck={},Rk={},bk={},Nk={},Ok={},ZF=(Vu={},Me(Vu,ce,Object.keys(sl[ce])),Me(Vu,we,Object.keys(sl[we])),Vu);function e5(t){return~DF.indexOf(t)}function t5(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!e5(i)?i:null}var Dk=function(){var e=function(s){return wf(Es,function(o,a,l){return o[l]=wf(a,s,{}),o},{})};Ck=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Rk=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Ok=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Es||V.autoFetchSvg,r=wf(XF,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});bk=r.names,Nk=r.unicodes,Zy=pd(V.styleDefault,{family:V.familyDefault})};FF(function(t){Zy=pd(t.styleDefault,{family:V.familyDefault})});Dk();function ev(t,e){return(Ck[t]||{})[e]}function n5(t,e){return(Rk[t]||{})[e]}function gi(t,e){return(Ok[t]||{})[e]}function Lk(t){return bk[t]||{prefix:null,iconName:null}}function r5(t){var e=Nk[t],n=ev("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qr(){return Zy}var tv=function(){return{prefix:null,iconName:null,rest:[]}};function pd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ce:n,i=sl[r][t],s=ol[r][t]||ol[r][i],o=t in nn.styles?t:null;return s||o||null}var vw=(Fu={},Me(Fu,ce,Object.keys(al[ce])),Me(Fu,we,Object.keys(al[we])),Fu);function md(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Me(e,ce,"".concat(V.cssPrefix,"-").concat(ce)),Me(e,we,"".concat(V.cssPrefix,"-").concat(we)),e),o=null,a=ce;(t.includes(s[ce])||t.some(function(u){return vw[ce].includes(u)}))&&(a=ce),(t.includes(s[we])||t.some(function(u){return vw[we].includes(u)}))&&(a=we);var l=t.reduce(function(u,c){var h=t5(V.cssPrefix,c);if(Es[c]?(c=JF[a].includes(c)?PF[a][c]:c,o=c,u.prefix=c):ZF[a].indexOf(c)>-1?(o=c,u.prefix=pd(c,{family:a})):h?u.iconName=h:c!==V.replacementClass&&c!==s[ce]&&c!==s[we]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?Lk(u.iconName):{},p=gi(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Es.far&&Es.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},tv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===we&&(Es.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=gi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qr()||"fas"),l}var i5=function(){function t(){gF(this,t),this.definitions={}}return yF(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),vm(a,o[a]);var l=al[ce][a];l&&vm(l,o[a]),Dk()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),_w=[],Ts={},Ms={},s5=Object.keys(Ms);function o5(t,e){var n=e.mixoutsTo;return _w=t,Ts={},Object.keys(Ms).forEach(function(r){s5.indexOf(r)===-1&&delete Ms[r]}),_w.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),sh(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ts[o]||(Ts[o]=[]),Ts[o].push(s[o])})}r.provides&&r.provides(Ms)}),n}function _m(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ts[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Hi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ts[t]||[];i.forEach(function(s){s.apply(null,n)})}function er(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ms[t]?Ms[t].apply(null,e):void 0}function wm(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||qr();if(e)return e=gi(n,e)||e,gw(Mk.definitions,n,e)||gw(nn.styles,n,e)}var Mk=new i5,a5=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Hi("noAuto")},l5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(Hi("beforeI2svg",e),er("pseudoElements2svg",e),er("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,KF(function(){c5({autoReplaceSvgRoot:n}),Hi("watch",e)})}},u5={icon:function(e){if(e===null)return null;if(sh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:gi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=pd(e[0]);return{prefix:r,iconName:gi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(V.cssPrefix,"-"))>-1||e.match(CF))){var i=md(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||qr(),iconName:gi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=qr();return{prefix:s,iconName:gi(s,e)||e}}}},Mt={noAuto:a5,config:V,dom:l5,parse:u5,library:Mk,findIconDefinition:wm,toHtml:eu},c5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(nn.styles).length>0||V.autoFetchSvg)&&rr&&V.autoReplaceSvg&&Mt.dom.i2svg({node:r})};function gd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return eu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(rr){var r=fe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function h5(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Jy(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=fd(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function d5(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function nv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,d=t.watchable,p=d===void 0?!1:d,y=r.found?r:n,w=y.width,v=y.height,m=i==="fak",f=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(U){return h.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(h.classes).join(" "),g={children:[],attributes:D(D({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:f,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(v)})},T=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(w/v*16*.0625,"em")}:{};p&&(g.attributes[Bi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||ul())},children:[l]}),delete g.attributes.title);var S=D(D({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},T),h.styles)}),C=r.found&&n.found?er("generateAbstractMask",S)||{children:[],attributes:{}}:er("generateAbstractIcon",S)||{children:[],attributes:{}},P=C.children,N=C.attributes;return S.children=P,S.attributes=N,a?d5(S):h5(S)}function ww(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Bi]="");var c=D({},o.styles);Jy(i)&&(c.transform=BF({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=fd(c);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function f5(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=fd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ef=nn.styles;function Em(t){var e=t[0],n=t[1],r=t.slice(4),i=qy(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(mi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(mi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(mi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var p5={found:!1,width:512,height:512};function m5(t,e){!Tk&&!V.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tm(t,e){var n=e;return e==="fa"&&V.styleDefault!==null&&(e=qr()),new Promise(function(r,i){if(er("missingIconAbstract"),n==="fa"){var s=Lk(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ef[e]&&Ef[e][t]){var o=Ef[e][t];return r(Em(o))}m5(t,e),r(D(D({},p5),{},{icon:V.showMissingIcons&&t?er("missingIconAbstract")||{}:{}}))})}var Ew=function(){},Im=V.measurePerformance&&Ru&&Ru.mark&&Ru.measure?Ru:{mark:Ew,measure:Ew},ea='FA "6.5.2"',g5=function(e){return Im.mark("".concat(ea," ").concat(e," begins")),function(){return Vk(e)}},Vk=function(e){Im.mark("".concat(ea," ").concat(e," ends")),Im.measure("".concat(ea," ").concat(e),"".concat(ea," ").concat(e," begins"),"".concat(ea," ").concat(e," ends"))},rv={begin:g5,end:Vk},sc=function(){};function Tw(t){var e=t.getAttribute?t.getAttribute(Bi):null;return typeof e=="string"}function y5(t){var e=t.getAttribute?t.getAttribute(Qy):null,n=t.getAttribute?t.getAttribute(Gy):null;return e&&n}function v5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(V.replacementClass)}function _5(){if(V.autoReplaceSvg===!0)return oc.replace;var t=oc[V.autoReplaceSvg];return t||oc.replace}function w5(t){return fe.createElementNS("http://www.w3.org/2000/svg",t)}function E5(t){return fe.createElement(t)}function Fk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?w5:E5:n;if(typeof t=="string")return fe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Fk(o,{ceFn:r}))}),i}function T5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var oc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Fk(i),n)}),n.getAttribute(Bi)===null&&V.keepOriginalSource){var r=fe.createComment(T5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Xy(n).indexOf(V.replacementClass))return oc.replace(e);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return eu(a)}).join(`
`);n.setAttribute(Bi,""),n.innerHTML=o}};function Iw(t){t()}function Uk(t,e){var n=typeof e=="function"?e:sc;if(t.length===0)n();else{var r=Iw;V.mutateApproach===kF&&(r=Wr.requestAnimationFrame||Iw),r(function(){var i=_5(),s=rv.begin("mutate");t.map(i),s(),n()})}}var iv=!1;function jk(){iv=!0}function Sm(){iv=!1}var ah=null;function Sw(t){if(fw&&V.observeMutations){var e=t.treeCallback,n=e===void 0?sc:e,r=t.nodeCallback,i=r===void 0?sc:r,s=t.pseudoElementsCallback,o=s===void 0?sc:s,a=t.observeMutationsRoot,l=a===void 0?fe:a;ah=new fw(function(u){if(!iv){var c=qr();Co(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Tw(h.addedNodes[0])&&(V.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&V.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Tw(h.target)&&~OF.indexOf(h.attributeName))if(h.attributeName==="class"&&y5(h.target)){var d=md(Xy(h.target)),p=d.prefix,y=d.iconName;h.target.setAttribute(Qy,p||c),y&&h.target.setAttribute(Gy,y)}else v5(h.target)&&i(h.target)})}}),rr&&ah.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function I5(){ah&&ah.disconnect()}function S5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function A5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=md(Xy(t));return i.prefix||(i.prefix=qr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=n5(i.prefix,t.innerText)||ev(i.prefix,ym(t.innerText))),!i.iconName&&V.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function k5(t){var e=Co(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||ul()):(e["aria-hidden"]="true",e.focusable="false")),e}function x5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:En,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Aw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=A5(t),r=n.iconName,i=n.prefix,s=n.rest,o=k5(t),a=_m("parseNodeAttributes",{},t),l=e.styleParser?S5(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:En,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var P5=nn.styles;function $k(t){var e=V.autoReplaceSvg==="nest"?Aw(t,{styleParser:!1}):Aw(t);return~e.extra.classes.indexOf(Ik)?er("generateLayersText",t,e):er("generateSvgReplacementMutation",t,e)}var Kr=new Set;Yy.map(function(t){Kr.add("fa-".concat(t))});Object.keys(sl[ce]).map(Kr.add.bind(Kr));Object.keys(sl[we]).map(Kr.add.bind(Kr));Kr=Jl(Kr);function kw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();var n=fe.documentElement.classList,r=function(h){return n.add("".concat(pw,"-").concat(h))},i=function(h){return n.remove("".concat(pw,"-").concat(h))},s=V.autoFetchSvg?Kr:Yy.map(function(c){return"fa-".concat(c)}).concat(Object.keys(P5));s.includes("fa")||s.push("fa");var o=[".".concat(Ik,":not([").concat(Bi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Bi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Co(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=rv.begin("onTree"),u=a.reduce(function(c,h){try{var d=$k(h);d&&c.push(d)}catch(p){Tk||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(d){Uk(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),h(d)})})}function C5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$k(t).then(function(n){n&&Uk([n],e)})}function R5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:wm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:wm(i||{})),t(r,D(D({},n),{},{mask:i}))}}var b5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?En:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,d=h===void 0?null:h,p=n.titleId,y=p===void 0?null:p,w=n.classes,v=w===void 0?[]:w,m=n.attributes,f=m===void 0?{}:m,g=n.styles,T=g===void 0?{}:g;if(e){var S=e.prefix,C=e.iconName,P=e.icon;return gd(D({type:"icon"},e),function(){return Hi("beforeDOMElementCreation",{iconDefinition:e,params:n}),V.autoA11y&&(d?f["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(y||ul()):(f["aria-hidden"]="true",f.focusable="false")),nv({icons:{main:Em(P),mask:l?Em(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:D(D({},En),i),symbol:o,title:d,maskId:c,titleId:y,extra:{attributes:f,styles:T,classes:v}})})}},N5={mixout:function(){return{icon:R5(b5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=kw,n.nodeCallback=C5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,o=s===void 0?function(){}:s;return kw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,d=r.extra;return new Promise(function(p,y){Promise.all([Tm(i,a),c.iconName?Tm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var v=qy(w,2),m=v[0],f=v[1];p([n,nv({icons:{main:m,mask:f},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=fd(a);l.length>0&&(i.style=l);var u;return Jy(o)&&(u=er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},O5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return gd({type:"layer"},function(){Hi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(Jl(s)).join(" ")},children:o}]})}}}},D5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return gd({type:"counter",content:n},function(){return Hi("beforeDOMElementCreation",{content:n,params:r}),f5({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(Jl(a))}})})}}}},L5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?En:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return gd({type:"text",content:n},function(){return Hi("beforeDOMElementCreation",{content:n,params:r}),ww({content:n,transform:D(D({},En),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(V.cssPrefix,"-layers-text")].concat(Jl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(_k){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ww({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},M5=new RegExp('"',"ug"),xw=[1105920,1112319];function V5(t){var e=t.replace(M5,""),n=YF(e,0),r=n>=xw[0]&&n<=xw[1],i=e.length===2?e[0]===e[1]:!1;return{value:ym(i?e[0]:e),isSecondary:r||i}}function Pw(t,e){var n="".concat(AF).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Co(t.children),o=s.filter(function(P){return P.getAttribute(gm)===e})[0],a=Wr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(RF),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?we:ce,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ol[d][l[2].toLowerCase()]:bF[d][u],y=V5(h),w=y.value,v=y.isSecondary,m=l[0].startsWith("FontAwesome"),f=ev(p,w),g=f;if(m){var T=r5(w);T.iconName&&T.prefix&&(f=T.iconName,p=T.prefix)}if(f&&!v&&(!o||o.getAttribute(Qy)!==p||o.getAttribute(Gy)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var S=x5(),C=S.extra;C.attributes[gm]=e,Tm(f,p).then(function(P){var N=nv(D(D({},S),{},{icons:{main:P,mask:tv()},prefix:p,iconName:g,extra:C,watchable:!0})),U=fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(U,t.firstChild):t.appendChild(U),U.outerHTML=N.map(function(B){return eu(B)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function F5(t){return Promise.all([Pw(t,"::before"),Pw(t,"::after")])}function U5(t){return t.parentNode!==document.head&&!~xF.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(gm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Cw(t){if(rr)return new Promise(function(e,n){var r=Co(t.querySelectorAll("*")).filter(U5).map(F5),i=rv.begin("searchPseudoElements");jk(),Promise.all(r).then(function(){i(),Sm(),e()}).catch(function(){i(),Sm(),n()})})}var j5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Cw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;V.searchPseudoElements&&Cw(i)}}},Rw=!1,$5={mixout:function(){return{dom:{unwatch:function(){jk(),Rw=!0}}}},hooks:function(){return{bootstrap:function(){Sw(_m("mutationObserverCallbacks",{}))},noAuto:function(){I5()},watch:function(n){var r=n.observeMutationsRoot;Rw?Sm():Sw(_m("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},bw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},z5={mixout:function(){return{parse:{transform:function(n){return bw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=bw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:d};return{tag:"g",attributes:D({},p.outer),children:[{tag:"g",attributes:D({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),p.path)}]}]}}}},Tf={x:0,y:0,width:"100%",height:"100%"};function Nw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function B5(t){return t.tag==="g"?t.children:[t]}var H5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?md(i.split(" ").map(function(o){return o.trim()})):tv();return s.prefix||(s.prefix=qr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,d=o.icon,p=zF({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:D(D({},Tf),{},{fill:"white"})},w=c.children?{children:c.children.map(Nw)}:{},v={tag:"g",attributes:D({},p.inner),children:[Nw(D({tag:c.tag,attributes:D(D({},c.attributes),p.path)},w))]},m={tag:"g",attributes:D({},p.outer),children:[v]},f="mask-".concat(a||ul()),g="clip-".concat(a||ul()),T={tag:"mask",attributes:D(D({},Tf),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:B5(d)},T]};return r.push(S,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(f,")")},Tf)}),{children:r,attributes:i}}}},W5={provides:function(e){var n=!1;Wr.matchMedia&&(n=Wr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},q5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},K5=[WF,N5,O5,D5,L5,j5,$5,z5,H5,W5,q5];o5(K5,{mixoutsTo:Mt});Mt.noAuto;Mt.config;Mt.library;Mt.dom;var Am=Mt.parse;Mt.findIconDefinition;Mt.toHtml;var Q5=Mt.icon;Mt.layer;Mt.text;Mt.counter;var zk={exports:{}},G5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y5=G5,X5=Y5;function Bk(){}function Hk(){}Hk.resetWarningCache=Bk;var J5=function(){function t(r,i,s,o,a,l){if(l!==X5){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Hk,resetWarningCache:Bk};return n.PropTypes=n,n};zk.exports=J5();var Z5=zk.exports;const X=qw(Z5);function Ow(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ow(Object(n),!0).forEach(function(r){Is(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ow(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lh(t){"@babel/helpers - typeof";return lh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lh(t)}function Is(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tU(t,e){if(t==null)return{};var n=eU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function km(t){return nU(t)||rU(t)||iU(t)||sU()}function nU(t){if(Array.isArray(t))return xm(t)}function rU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function iU(t,e){if(t){if(typeof t=="string")return xm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xm(t,e)}}function xm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function sU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oU(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,d=t.fixedWidth,p=t.inverse,y=t.border,w=t.listItem,v=t.flip,m=t.size,f=t.rotation,g=t.pull,T=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":p,"fa-border":y,"fa-li":w,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},Is(e,"fa-".concat(m),typeof m<"u"&&m!==null),Is(e,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Is(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Is(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(S){return T[S]?S:null}).filter(function(S){return S})}function aU(t){return t=t-0,t===t}function Wk(t){return aU(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var lU=["style"];function uU(t){return t.charAt(0).toUpperCase()+t.slice(1)}function cU(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Wk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[uU(i)]=s:e[i]=s,e},{})}function qk(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return qk(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=cU(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Wk(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=tU(n,lU);return i.attrs.style=xr(xr({},i.attrs.style),o),t.apply(void 0,[e.tag,xr(xr({},i.attrs),a)].concat(km(r)))}var Kk=!1;try{Kk=!0}catch{}function hU(){if(!Kk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Dw(t){if(t&&lh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Am.icon)return Am.icon(t);if(t===null)return null;if(t&&lh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function If(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Is({},t,e):{}}var ft=hh.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Dw(n),c=If("classes",[].concat(km(oU(t)),km(s.split(" ")))),h=If("transform",typeof t.transform=="string"?Am.transform(t.transform):t.transform),d=If("mask",Dw(r)),p=Q5(u,xr(xr(xr(xr({},c),h),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return hU("Could not find icon",u),null;var y=p.abstract,w={ref:e};return Object.keys(t).forEach(function(v){ft.defaultProps.hasOwnProperty(v)||(w[v]=t[v])}),dU(y[0],w)});ft.displayName="FontAwesomeIcon";ft.propTypes={beat:X.bool,border:X.bool,beatFade:X.bool,bounce:X.bool,className:X.string,fade:X.bool,flash:X.bool,mask:X.oneOfType([X.object,X.array,X.string]),maskId:X.string,fixedWidth:X.bool,inverse:X.bool,flip:X.oneOf([!0,!1,"horizontal","vertical","both"]),icon:X.oneOfType([X.object,X.array,X.string]),listItem:X.bool,pull:X.oneOf(["right","left"]),pulse:X.bool,rotation:X.oneOf([0,90,180,270]),shake:X.bool,size:X.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:X.bool,spinPulse:X.bool,spinReverse:X.bool,symbol:X.oneOfType([X.bool,X.string]),title:X.string,titleId:X.string,transform:X.oneOfType([X.string,X.object]),swapOpacity:X.bool};ft.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var dU=qk.bind(null,hh.createElement);const Qk=()=>{const{currentDay:t,nextDay:e,prevDay:n}=I.useContext(Hy);return{currentDay:t,nextDay:e,prevDay:n}},yd=()=>{const t=I.useContext(dk);if(!t)throw new Error("useExerciseData must be used within an ExerciseDataProvider");return t};function fU({exerciseName:t,exerciseData:e}){var y;const n=Po().currentUser,{deleteExerciseAndUpdateVersion:r,incrementVersion:i}=yd(),{currentDay:s}=Qk(),o=Object.keys(e.history).map(w=>({dateString:w,parsedDate:new Date(w)}));o.sort((w,v)=>v.parsedDate.getTime()-w.parsedDate.getTime());const a=((y=o[0])==null?void 0:y.dateString)||null,l=a?e.history[a]:null,u=l?l[0].weight:null,c=l?l[0].reps:null,h=u!==null?u.toString():void 0,d=c!==null?c.toString():void 0,p=async w=>{w.preventDefault();const v=new FormData(w.currentTarget);n&&(await lF(v,n.uid,e),i())};return _.jsxs("div",{className:"w-full h-[175px] flex flex-col text-2xl",children:[_.jsxs("div",{className:"bg-muted h-[50px] w-full flex justify-between items-center rounded-t-lg",children:[_.jsx("div",{className:"px-3",children:_.jsx(ft,{icon:fm,className:"h-5 w-5 text-muted"})}),_.jsx(J3,{children:t}),_.jsx("button",{onClick:()=>{n&&r(t,n==null?void 0:n.uid,s.toString())},className:"px-3",children:_.jsx(ft,{icon:fm,className:"h-5 w-5"})})]}),_.jsxs("form",{onSubmit:p,children:[_.jsx("input",{type:"hidden",value:t,name:"name"}),_.jsxs("div",{className:"bg-card h-[75px] w-full flex justify-around items-center text-lg",children:[_.jsxs("div",{className:"relative flex gap-2 w-1/3 h-2/3 jusity-center items-center",children:[_.jsx("input",{inputMode:"numeric",name:"weight",className:"rounded-lg w-[100px] h-full bg-card border border-muted-foreground text-3xl text-center font-medium",placeholder:h}),_.jsx("div",{className:"absolute top-[0px] right-[33px] w-[33px] h-[1px] bg-card"}),_.jsx("h1",{className:"z-2 text-muted-foreground absolute top-[-13px] right-[34px]",children:"Lbs"})]}),_.jsxs("div",{className:"relative flex gap-2 w-1/3 h-2/3 jusity-center items-center",children:[_.jsx("input",{inputMode:"numeric",name:"reps",className:"rounded-lg w-[100px] h-full bg-card border border border-muted-foreground text-3xl text-center font-medium",placeholder:d}),_.jsx("div",{className:"absolute top-[0px] right-[33px] w-[46px] h-[1px] bg-card"}),_.jsx("h1",{className:"z-2 text-muted-foreground absolute top-[-13px] right-[34px]",children:"Reps"})]})]}),_.jsx("div",{className:"bg-muted h-[50px] w-full flex justify-between items-center rounded-b-lg",children:_.jsx("button",{type:"submit",className:"w-full h-full text-muted-foreground",children:"Update"})})]})]})}function pU(){const t=Po().currentUser,{exerciseData:e,addExerciseAndUpdateVersion:n}=yd(),{currentDay:r}=I.useContext(Hy),[i,s]=I.useState(""),o=async l=>{l.preventDefault();const u=new FormData(l.currentTarget);u.append("exerciseName",i),t&&await n(u,t.uid,r.toString())},a=Object.entries(e.exercises??{}).map(([l])=>({name:l})).filter(({name:l})=>{var u;return!((u=e.program[r])!=null&&u.exercises.includes(l))});return _.jsxs("div",{className:"w-full h-[150px] flex flex-col text-2xl",children:[_.jsx("div",{className:"bg-muted h-[50px] w-full flex justify-center items-center rounded-t-lg",children:_.jsx("h1",{className:"w-fit",children:"Add Exercise"})}),_.jsxs("form",{onSubmit:o,children:[_.jsx("div",{className:"bg-muted h-3/5 w-full flex justify-around items-center text-lg",children:_.jsx("div",{className:"flex gap-2 w-4/5 h-2/3 jusity-center items-center",children:_.jsxs("select",{name:"exercise",className:"rounded-lg w-full h-full bg-muted border border-muted-foreground text-3xl text-center font-medium",value:i,onChange:l=>s(l.target.value),children:[_.jsx("option",{value:""}),a.map((l,u)=>_.jsx("option",{value:l.name,children:l.name},u))]})})}),_.jsx("div",{className:"bg-muted h-[50px] w-full flex justify-between items-center rounded-b-lg",children:_.jsx("button",{type:"submit",className:"w-full h-full text-muted-foreground",children:"Add"})})]})]})}const cl="70",Lw=()=>{const{exerciseData:t,isLoading:e,error:n}=yd(),{currentDay:r,nextDay:i,prevDay:s}=Qk();if(e)return _.jsx("div",{children:"Loading..."});if(n)return _.jsxs("div",{children:["Error: ",n.message]});if(t){const o=t.program[r],a=(o==null?void 0:o.exercises)??[],l=(o==null?void 0:o.name)??"";return _.jsxs("div",{className:"h-full w-full flex flex-col justify-between items-center overflow-y-scroll",children:[_.jsxs("div",{className:"flex justify-around items-center w-full max-w-[450px]",style:{height:`${cl}px`},children:[_.jsx("button",{onClick:s,className:"h-5 w-5",children:_.jsx(ft,{icon:dF,className:"h-5 w-5"})}),_.jsx("h2",{className:"text-2xl",children:l.toUpperCase()}),_.jsx("button",{onClick:i,className:"h-5 w-5",children:_.jsx(ft,{icon:fF,className:"h-5 w-5"})})]}),_.jsxs("div",{className:"flex justify-start items-center flex-col gap-5 overflow-x-scroll w-full max-w-[350px] pt-5",style:{height:`calc(100dvh - ${cl}px)`},children:[a.map(u=>{const c=t.exercises[u];return _.jsx(fU,{exerciseName:u,exerciseData:c},u)}),_.jsx(pU,{})]})]})}return null},mU=()=>_.jsx(_.Fragment,{children:_.jsx(Wy,{children:"Please Login"})}),gU=async(t,e)=>{const n=e.replace(/\b\w/g,i=>i.toUpperCase()),r={history:{}};try{console.log(t);const i=es(ts,"users",t),s=await Yl(i);if(console.log("here"),s.exists()){const o=s.data(),a=o==null?void 0:o.exercises;console.log(a);const l={...o.exercises,[n]:r};await Xl(i,{exercises:l}),console.log("New exercise created successfully.")}else ak(t),console.log("New exercise created successfully.")}catch(i){throw console.error("Error creating new exercise:",i),i}},yU=async(t,e)=>{const n=es(ts,"users",t);try{const r=await Yl(n);if(r.exists()){const i=r.data(),s={...i.exercises};delete s[e];for(const o of Object.values(i.program))o.exercises&&(o.exercises=o.exercises.filter(a=>a!==e));await Xl(n,{exercises:s,program:i.program}),console.log("Exercise deleted successfully from both exercises and program.")}else console.warn("User document not found.")}catch(r){throw console.error("Error deleting exercise:",r),r}},vU=()=>{const t=Po().currentUser,{exerciseData:e,isLoading:n,error:r,incrementVersion:i}=yd(),[s,o]=I.useState("");if(n)return _.jsx("div",{children:"Loading..."});if(r)return _.jsx("div",{children:"Error loading exercises."});const a=Object.keys(e.exercises),l=async()=>{if(s.trim()&&t)try{await gU(t.uid,s.trim()),o(""),i()}catch{alert("Error creating exercise.")}else alert("Exercise name cannot be empty.")},u=async c=>{if(window.confirm("Are you sure you want to delete this exercise? This will also delete the exercise history.")&&t)try{await yU(t.uid,c),i()}catch{alert("Error deleting exercise.")}};return _.jsxs("div",{className:"h-full w-full flex flex-col justify-start gap-[20px] items-center pt-[20px] max-w-[350px] overflow-y-scroll",children:[_.jsx("ul",{className:"w-full gap-[10px] flex flex-col",children:a.map(c=>_.jsxs("li",{className:"bg-card h-[100px] w-full flex justify-between px-[20px] items-center rounded-lg text-2xl font-semibold tracking-tight",children:[c,_.jsx("button",{onClick:()=>u(c),children:_.jsx(ft,{icon:fm})})]},c))}),_.jsxs("div",{className:"bg-card h-[100px] w-full relative flex justify-between px-[20px] items-center rounded-lg py-[23px]",children:[_.jsx("input",{type:"text",value:s,onChange:c=>o(c.target.value),className:"rounded-lg w-3/4 h-full bg-card border border border-muted-foreground text-3xl text-center font-medium"}),_.jsx("div",{className:"absolute top-[23px] right-[106px] w-[109px] h-[1px] bg-card"}),_.jsx("h1",{className:"z-2 text-muted-foreground absolute top-[10px] right-[107px]",children:"New Exercise"}),_.jsx("button",{onClick:l,children:_.jsx(ft,{className:"text-2xl",icon:pF})})]})]})},_U=[{path:"/",element:_.jsx(Lw,{})},{path:"/account",element:_.jsx(eF,{})},{path:"/signup",element:_.jsx(Lw,{})},{path:"/account-settings",element:_.jsx(oF,{})},{path:"/exercise-list",element:_.jsx(vU,{})}],wU=[{path:"/",element:_.jsx(mU,{})},{path:"/Account",element:_.jsx(Q3,{})},{path:"/Signup",element:_.jsx(X3,{})},{path:"/forgot-password",element:_.jsx(rF,{})}],Gk=()=>{const t=xT(),e=t;return console.error(t),_.jsxs(_.Fragment,{children:[_.jsx("h1",{children:"Oops!"}),_.jsx("p",{children:"Sorry, an unexpected error has occurred."}),_.jsx("p",{children:_.jsx("i",{children:e.statusText||e.message})})]})},EU=()=>_.jsx(_.Fragment,{children:_.jsx(Wy,{children:"404"})}),Mw=[{path:"*",element:_.jsx(EU,{}),errorElement:_.jsx(Gk,{})}],TU=()=>{const{currentUser:t}=Po(),e=t?_U.concat(Mw):wU.concat(Mw);return _.jsxs(GR,{children:[e.map(({path:n,element:r},i)=>_.jsx(Rp,{path:n,element:r},i)),_.jsx(Rp,{path:"*",element:_.jsx(Gk,{})})]})};function IU(){const{theme:t,setTheme:e}=aR(),[n,r]=I.useState(t==="dark"),i=()=>{r(!n),e(n?"light":"dark")};return _.jsxs("label",{className:"inline-flex items-center cursor-pointer relative",children:[_.jsx("input",{type:"checkbox",className:"sr-only peer",checked:n,onChange:i}),_.jsx("div",{className:"relative w-14 h-7 bg-card peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-foreground after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-foreground-muted"}),_.jsx("div",{className:`absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-6 h-6 -ml-3 text-foreground ${n?"opacity-100":"opacity-0"}`,children:_.jsx(ft,{icon:mF})}),_.jsx("div",{className:`absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 -mr-3 text-foreground ${n?"opacity-0":"opacity-100"}`,children:_.jsx(ft,{icon:hF})})]})}const SU=[{title:"Exercise List",href:"/exercise-list",icon:fk}],AU=[{title:"Home",href:"/",icon:cF},{title:"List",href:"/Exercise-List",icon:fk}];function kU(){const t=wo();return _.jsxs("nav",{className:" justify-between items-center mx-[20px] hidden md:flex",style:{height:`${cl}px`},children:[_.jsxs("div",{className:"flex gap-[10px]",children:[_.jsxs(Vr,{to:"/",className:"flex items-center justify-center mr-[10px]",children:[_.jsx("div",{className:"font-bold",children:"React"}),_.jsx("div",{className:"",children:"Essentials"})]}),SU.map((e,n)=>_.jsx(Vr,{className:t.pathname===e.href?"text-foreground":"text-muted-foreground hover:text-foreground ",to:e.href,target:e.external?"_blank":void 0,children:e.title},n))]}),_.jsxs("div",{className:"flex justify-center items-center gap-[20px]",children:[_.jsx(IU,{}),_.jsx(Vr,{className:t.pathname==="/Account"?"text-foreground w-full h-full flex items-center justify-center":"text-muted-foreground hover:text-foreground w-full h-full flex items-center justify-center",to:"/Account",children:_.jsx(ft,{icon:pk,className:"text-xl"})},"Account")]})]})}function xU(){const t=wo();return _.jsxs("nav",{className:"flex justify-around items-center md:hidden bg-card",style:{height:`${cl}px`},children:[AU.map(e=>_.jsx(Vr,{className:t.pathname===e.href?"text-foreground w-full h-full flex items-center justify-center":"text-muted-foreground hover:text-foreground w-full h-full flex items-center justify-center",to:e.href,target:e.external?"_blank":void 0,children:_.jsx(ft,{icon:e.icon,size:"2x"})},e.title)),_.jsx(Vr,{className:t.pathname==="/Account"?"text-foreground w-full h-full flex items-center justify-center":"text-muted-foreground hover:text-foreground w-full h-full flex items-center justify-center",to:"/Account",children:_.jsx(ft,{icon:pk,size:"2x"})},"Account")]})}const PU=({children:t})=>_.jsx("div",{className:"flex flex-col justify-center items-center bg-background gap-[32px]",style:{height:`calc(100dvh - ${cl}px)`},children:t});function CU(){return _.jsxs(W3,{children:[_.jsx(kU,{}),_.jsx(PU,{children:_.jsx(TU,{})}),_.jsx(xU,{})]})}Sf.createRoot(document.getElementById("root")).render(_.jsx(hh.StrictMode,{children:_.jsx(CU,{})}));
