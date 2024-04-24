var Js=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var S=(e,t,n)=>(Js(e,t,"read from private field"),n?n.call(e):t.get(e)),$=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},N=(e,t,n,r)=>(Js(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var ja=(e,t,n,r)=>({set _(i){N(e,t,i,n)},get _(){return S(e,t,r)}}),oe=(e,t,n)=>(Js(e,t,"access private method"),n);function l0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ap(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rp={exports:{}},ws={},Np={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),u0=Symbol.for("react.portal"),c0=Symbol.for("react.fragment"),f0=Symbol.for("react.strict_mode"),d0=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),p0=Symbol.for("react.context"),m0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),v0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),Wf=Symbol.iterator;function w0(e){return e===null||typeof e!="object"?null:(e=Wf&&e[Wf]||e["@@iterator"],typeof e=="function"?e:null)}var Lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dp=Object.assign,Mp={};function ui(e,t,n){this.props=e,this.context=t,this.refs=Mp,this.updater=n||Lp}ui.prototype.isReactComponent={};ui.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ui.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fp(){}Fp.prototype=ui.prototype;function fc(e,t,n){this.props=e,this.context=t,this.refs=Mp,this.updater=n||Lp}var dc=fc.prototype=new Fp;dc.constructor=fc;Dp(dc,ui.prototype);dc.isPureReactComponent=!0;var Kf=Array.isArray,Up=Object.prototype.hasOwnProperty,hc={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function zp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Up.call(t,r)&&!jp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ea,type:e,key:a,ref:o,props:i,_owner:hc.current}}function _0(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function S0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gf=/\/+/g;function Zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S0(""+e.key):t.toString(36)}function po(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ea:case u0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Zs(o,0):r,Kf(i)?(n="",e!=null&&(n=e.replace(Gf,"$&/")+"/"),po(i,t,n,"",function(u){return u})):i!=null&&(pc(i)&&(i=_0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Kf(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Zs(a,s);o+=po(a,t,n,l,i)}else if(l=w0(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Zs(a,s++),o+=po(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function za(e,t,n){if(e==null)return e;var r=[],i=0;return po(e,r,"","",function(a){return t.call(n,a,i++)}),r}function k0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},mo={transition:null},E0={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:mo,ReactCurrentOwner:hc};z.Children={map:za,forEach:function(e,t,n){za(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return za(e,function(){t++}),t},toArray:function(e){return za(e,function(t){return t})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ui;z.Fragment=c0;z.Profiler=d0;z.PureComponent=fc;z.StrictMode=f0;z.Suspense=g0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dp({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=hc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Up.call(t,l)&&!jp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ea,type:e.type,key:i,ref:a,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:p0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h0,_context:e},e.Consumer=e};z.createElement=zp;z.createFactory=function(e){var t=zp.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:m0,render:e}};z.isValidElement=pc;z.lazy=function(e){return{$$typeof:y0,_payload:{_status:-1,_result:e},_init:k0}};z.memo=function(e,t){return{$$typeof:v0,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=mo.transition;mo.transition={};try{e()}finally{mo.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return Ce.current.useCallback(e,t)};z.useContext=function(e){return Ce.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ce.current.useEffect(e,t)};z.useId=function(){return Ce.current.useId()};z.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ce.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};z.useRef=function(e){return Ce.current.useRef(e)};z.useState=function(e){return Ce.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ce.current.useTransition()};z.version="18.2.0";Np.exports=z;var T=Np.exports;const _s=Ap(T),I0=l0({__proto__:null,default:_s},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=T,C0=Symbol.for("react.element"),T0=Symbol.for("react.fragment"),P0=Object.prototype.hasOwnProperty,x0=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O0={key:!0,ref:!0,__self:!0,__source:!0};function $p(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)P0.call(t,r)&&!O0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:C0,type:e,key:a,ref:o,props:i,_owner:x0.current}}ws.Fragment=T0;ws.jsx=$p;ws.jsxs=$p;Rp.exports=ws;var A=Rp.exports,Hl={},Bp={exports:{}},ze={},Hp={exports:{}},Vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,M){var U=O.length;O.push(M);e:for(;0<U;){var ne=U-1>>>1,fe=O[ne];if(0<i(fe,M))O[ne]=M,O[U]=fe,U=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],U=O.pop();if(U!==M){O[0]=U;e:for(var ne=0,fe=O.length,Fa=fe>>>1;ne<Fa;){var Ln=2*(ne+1)-1,Xs=O[Ln],Dn=Ln+1,Ua=O[Dn];if(0>i(Xs,U))Dn<fe&&0>i(Ua,Xs)?(O[ne]=Ua,O[Dn]=U,ne=Dn):(O[ne]=Xs,O[Ln]=U,ne=Ln);else if(Dn<fe&&0>i(Ua,U))O[ne]=Ua,O[Dn]=U,ne=Dn;else break e}}return M}function i(O,M){var U=O.sortIndex-M.sortIndex;return U!==0?U:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function y(O){if(w=!1,m(O),!v)if(n(l)!==null)v=!0,Qs(k);else{var M=n(u);M!==null&&Ys(y,M.startTime-O)}}function k(O,M){v=!1,w&&(w=!1,p(b),b=-1),g=!0;var U=h;try{for(m(M),f=n(l);f!==null&&(!(f.expirationTime>M)||O&&!Je());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var fe=ne(f.expirationTime<=M);M=e.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&r(l),m(M)}else r(l);f=n(l)}if(f!==null)var Fa=!0;else{var Ln=n(u);Ln!==null&&Ys(y,Ln.startTime-M),Fa=!1}return Fa}finally{f=null,h=U,g=!1}}var I=!1,C=null,b=-1,D=5,F=-1;function Je(){return!(e.unstable_now()-F<D)}function vi(){if(C!==null){var O=e.unstable_now();F=O;var M=!0;try{M=C(!0,O)}finally{M?yi():(I=!1,C=null)}}else I=!1}var yi;if(typeof d=="function")yi=function(){d(vi)};else if(typeof MessageChannel<"u"){var Vf=new MessageChannel,s0=Vf.port2;Vf.port1.onmessage=vi,yi=function(){s0.postMessage(null)}}else yi=function(){_(vi,0)};function Qs(O){C=O,I||(I=!0,yi())}function Ys(O,M){b=_(function(){O(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Qs(k))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var U=h;h=M;try{return O()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=h;h=O;try{return M()}finally{h=U}},e.unstable_scheduleCallback=function(O,M,U){var ne=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ne+U:ne):U=ne,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=U+fe,O={id:c++,callback:M,priorityLevel:O,startTime:U,expirationTime:fe,sortIndex:-1},U>ne?(O.sortIndex=U,t(u,O),n(l)===null&&O===n(u)&&(w?(p(b),b=-1):w=!0,Ys(y,U-ne))):(O.sortIndex=fe,t(l,O),v||g||(v=!0,Qs(k))),O},e.unstable_shouldYield=Je,e.unstable_wrapCallback=function(O){var M=h;return function(){var U=h;h=M;try{return O.apply(this,arguments)}finally{h=U}}}})(Vp);Hp.exports=Vp;var A0=Hp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp=T,je=A0;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kp=new Set,Wi={};function fr(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(Wi[e]=t,e=0;e<t.length;e++)Kp.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},Qf={};function N0(e){return Vl.call(Qf,e)?!0:Vl.call(qf,e)?!1:R0.test(e)?Qf[e]=!0:(qf[e]=!0,!1)}function L0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D0(e,t,n,r){if(t===null||typeof t>"u"||L0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var mc=/[\-:]([a-z])/g;function gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mc,gc);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mc,gc);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mc,gc);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function vc(e,t,n,r){var i=ve.hasOwnProperty(t)?ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D0(t,n,i,r)&&(n=null),r||i===null?N0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),_c=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Qp=Symbol.for("react.offscreen"),Yf=Symbol.iterator;function wi(e){return e===null||typeof e!="object"?null:(e=Yf&&e[Yf]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,el;function Ti(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function M0(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case Wl:return"Profiler";case yc:return"StrictMode";case Kl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qp:return(e.displayName||"Context")+".Consumer";case Gp:return(e._context.displayName||"Context")+".Provider";case wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _c:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function F0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U0(e){var t=Yp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ba(e){e._valueTracker||(e._valueTracker=U0(e))}function Xp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jp(e,t){t=t.checked,t!=null&&vc(e,"checked",t,!1)}function Yl(e,t){Jp(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||No(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Pi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Zp(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ed(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function em(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?em(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ha,tm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j0=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){j0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function nm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function rm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var z0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(e,t){if(t){if(z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function tu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function Sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ru=null,Nr=null,Lr=null;function td(e){if(e=Ca(e)){if(typeof ru!="function")throw Error(E(280));var t=e.stateNode;t&&(t=bs(t),ru(e.stateNode,e.type,t))}}function im(e){Nr?Lr?Lr.push(e):Lr=[e]:Nr=e}function am(){if(Nr){var e=Nr,t=Lr;if(Lr=Nr=null,td(e),t)for(e=0;e<t.length;e++)td(t[e])}}function om(e,t){return e(t)}function sm(){}var rl=!1;function lm(e,t,n){if(rl)return e(t,n);rl=!0;try{return om(e,t,n)}finally{rl=!1,(Nr!==null||Lr!==null)&&(sm(),am())}}function Gi(e,t){var n=e.stateNode;if(n===null)return null;var r=bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var iu=!1;if(Dt)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){iu=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{iu=!1}function $0(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ni=!1,Lo=null,Do=!1,au=null,B0={onError:function(e){Ni=!0,Lo=e}};function H0(e,t,n,r,i,a,o,s,l){Ni=!1,Lo=null,$0.apply(B0,arguments)}function V0(e,t,n,r,i,a,o,s,l){if(H0.apply(this,arguments),Ni){if(Ni){var u=Lo;Ni=!1,Lo=null}else throw Error(E(198));Do||(Do=!0,au=u)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function um(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nd(e){if(dr(e)!==e)throw Error(E(188))}function W0(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return nd(i),e;if(a===r)return nd(i),t;a=a.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function cm(e){return e=W0(e),e!==null?fm(e):null}function fm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fm(e);if(t!==null)return t;e=e.sibling}return null}var dm=je.unstable_scheduleCallback,rd=je.unstable_cancelCallback,K0=je.unstable_shouldYield,G0=je.unstable_requestPaint,re=je.unstable_now,q0=je.unstable_getCurrentPriorityLevel,kc=je.unstable_ImmediatePriority,hm=je.unstable_UserBlockingPriority,Mo=je.unstable_NormalPriority,Q0=je.unstable_LowPriority,pm=je.unstable_IdlePriority,Ss=null,vt=null;function Y0(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ss,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Z0,X0=Math.log,J0=Math.LN2;function Z0(e){return e>>>=0,e===0?32:31-(X0(e)/J0|0)|0}var Va=64,Wa=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=xi(s):(a&=o,a!==0&&(r=xi(a)))}else o=n&~i,o!==0?r=xi(o):a!==0&&(r=xi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),i=1<<n,r|=e[n],t&=~i;return r}function e1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=e1(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function ou(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mm(){var e=Va;return Va<<=1,!(Va&4194240)&&(Va=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ia(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function n1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function gm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vm,Ic,ym,wm,_m,su=!1,Ka=[],mn=null,gn=null,vn=null,qi=new Map,Qi=new Map,Zt=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function Si(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ca(t),t!==null&&Ic(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function i1(e,t,n,r,i){switch(t){case"focusin":return mn=Si(mn,e,t,n,r,i),!0;case"dragenter":return gn=Si(gn,e,t,n,r,i),!0;case"mouseover":return vn=Si(vn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qi.set(a,Si(qi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Qi.set(a,Si(Qi.get(a)||null,e,t,n,r,i)),!0}return!1}function Sm(e){var t=jn(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=um(n),t!==null){e.blockedOn=t,_m(e.priority,function(){ym(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nu=r,n.target.dispatchEvent(r),nu=null}else return t=Ca(n),t!==null&&Ic(t),e.blockedOn=n,!1;t.shift()}return!0}function ad(e,t,n){go(e)&&n.delete(t)}function a1(){su=!1,mn!==null&&go(mn)&&(mn=null),gn!==null&&go(gn)&&(gn=null),vn!==null&&go(vn)&&(vn=null),qi.forEach(ad),Qi.forEach(ad)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,su||(su=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,a1)))}function Yi(e){function t(i){return ki(i,e)}if(0<Ka.length){ki(Ka[0],e);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&ki(mn,e),gn!==null&&ki(gn,e),vn!==null&&ki(vn,e),qi.forEach(t),Qi.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)Sm(n),n.blockedOn===null&&Zt.shift()}var Dr=Vt.ReactCurrentBatchConfig,Uo=!0;function o1(e,t,n,r){var i=H,a=Dr.transition;Dr.transition=null;try{H=1,bc(e,t,n,r)}finally{H=i,Dr.transition=a}}function s1(e,t,n,r){var i=H,a=Dr.transition;Dr.transition=null;try{H=4,bc(e,t,n,r)}finally{H=i,Dr.transition=a}}function bc(e,t,n,r){if(Uo){var i=lu(e,t,n,r);if(i===null)pl(e,t,r,jo,n),id(e,r);else if(i1(i,e,t,n,r))r.stopPropagation();else if(id(e,r),t&4&&-1<r1.indexOf(e)){for(;i!==null;){var a=Ca(i);if(a!==null&&vm(a),a=lu(e,t,n,r),a===null&&pl(e,t,r,jo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var jo=null;function lu(e,t,n,r){if(jo=null,e=Sc(r),e=jn(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=um(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function km(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q0()){case kc:return 1;case hm:return 4;case Mo:case Q0:return 16;case pm:return 536870912;default:return 16}default:return 16}}var fn=null,Cc=null,vo=null;function Em(){if(vo)return vo;var e,t=Cc,n=t.length,r,i="value"in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return vo=i.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ga(){return!0}function od(){return!1}function $e(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ga:od,this.isPropagationStopped=od,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),t}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=$e(ci),ba=Z({},ci,{view:0,detail:0}),l1=$e(ba),al,ol,Ei,ks=Z({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(al=e.screenX-Ei.screenX,ol=e.screenY-Ei.screenY):ol=al=0,Ei=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),sd=$e(ks),u1=Z({},ks,{dataTransfer:0}),c1=$e(u1),f1=Z({},ba,{relatedTarget:0}),sl=$e(f1),d1=Z({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),h1=$e(d1),p1=Z({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m1=$e(p1),g1=Z({},ci,{data:0}),ld=$e(g1),v1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w1[e])?!!t[e]:!1}function Pc(){return _1}var S1=Z({},ba,{key:function(e){if(e.key){var t=v1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?y1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),k1=$e(S1),E1=Z({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=$e(E1),I1=Z({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),b1=$e(I1),C1=Z({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),T1=$e(C1),P1=Z({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x1=$e(P1),O1=[9,13,27,32],xc=Dt&&"CompositionEvent"in window,Li=null;Dt&&"documentMode"in document&&(Li=document.documentMode);var A1=Dt&&"TextEvent"in window&&!Li,Im=Dt&&(!xc||Li&&8<Li&&11>=Li),cd=" ",fd=!1;function bm(e,t){switch(e){case"keyup":return O1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function R1(e,t){switch(e){case"compositionend":return Cm(t);case"keypress":return t.which!==32?null:(fd=!0,cd);case"textInput":return e=t.data,e===cd&&fd?null:e;default:return null}}function N1(e,t){if(wr)return e==="compositionend"||!xc&&bm(e,t)?(e=Em(),vo=Cc=fn=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Im&&t.locale!=="ko"?null:t.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!L1[e.type]:t==="textarea"}function Tm(e,t,n,r){im(r),t=zo(t,"onChange"),0<t.length&&(n=new Tc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Di=null,Xi=null;function D1(e){Um(e,0)}function Es(e){var t=kr(e);if(Xp(t))return e}function M1(e,t){if(e==="change")return t}var Pm=!1;if(Dt){var ll;if(Dt){var ul="oninput"in document;if(!ul){var hd=document.createElement("div");hd.setAttribute("oninput","return;"),ul=typeof hd.oninput=="function"}ll=ul}else ll=!1;Pm=ll&&(!document.documentMode||9<document.documentMode)}function pd(){Di&&(Di.detachEvent("onpropertychange",xm),Xi=Di=null)}function xm(e){if(e.propertyName==="value"&&Es(Xi)){var t=[];Tm(t,Xi,e,Sc(e)),lm(D1,t)}}function F1(e,t,n){e==="focusin"?(pd(),Di=t,Xi=n,Di.attachEvent("onpropertychange",xm)):e==="focusout"&&pd()}function U1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Es(Xi)}function j1(e,t){if(e==="click")return Es(t)}function z1(e,t){if(e==="input"||e==="change")return Es(t)}function $1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:$1;function Ji(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vl.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gd(e,t){var n=md(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=md(n)}}function Om(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Om(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Am(){for(var e=window,t=No();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=No(e.document)}return t}function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function B1(e){var t=Am(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Om(n.ownerDocument.documentElement,n)){if(r!==null&&Oc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=gd(n,a);var o=gd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var H1=Dt&&"documentMode"in document&&11>=document.documentMode,_r=null,uu=null,Mi=null,cu=!1;function vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cu||_r==null||_r!==No(r)||(r=_r,"selectionStart"in r&&Oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mi&&Ji(Mi,r)||(Mi=r,r=zo(uu,"onSelect"),0<r.length&&(t=new Tc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},cl={},Rm={};Dt&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Is(e){if(cl[e])return cl[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rm)return cl[e]=t[n];return e}var Nm=Is("animationend"),Lm=Is("animationiteration"),Dm=Is("animationstart"),Mm=Is("transitionend"),Fm=new Map,yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Fm.set(e,t),fr(t,[e])}for(var fl=0;fl<yd.length;fl++){var dl=yd[fl],V1=dl.toLowerCase(),W1=dl[0].toUpperCase()+dl.slice(1);An(V1,"on"+W1)}An(Nm,"onAnimationEnd");An(Lm,"onAnimationIteration");An(Dm,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Mm,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function wd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V0(r,t,void 0,e),e.currentTarget=null}function Um(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;wd(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;wd(i,s,u),a=l}}}if(Do)throw e=au,Do=!1,au=null,e}function K(e,t){var n=t[mu];n===void 0&&(n=t[mu]=new Set);var r=e+"__bubble";n.has(r)||(jm(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),jm(n,e,r,t)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Qa]){e[Qa]=!0,Kp.forEach(function(n){n!=="selectionchange"&&(K1.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qa]||(t[Qa]=!0,hl("selectionchange",!1,t))}}function jm(e,t,n,r){switch(km(t)){case 1:var i=o1;break;case 4:i=s1;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=jn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}lm(function(){var u=a,c=Sc(n),f=[];e:{var h=Fm.get(e);if(h!==void 0){var g=Tc,v=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":g=k1;break;case"focusin":v="focus",g=sl;break;case"focusout":v="blur",g=sl;break;case"beforeblur":case"afterblur":g=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=c1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=b1;break;case Nm:case Lm:case Dm:g=h1;break;case Mm:g=T1;break;case"scroll":g=l1;break;case"wheel":g=x1;break;case"copy":case"cut":case"paste":g=m1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ud}var w=(t&4)!==0,_=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Gi(d,p),y!=null&&w.push(ea(d,y,m)))),_)break;d=d.return}0<w.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==nu&&(v=n.relatedTarget||n.fromElement)&&(jn(v)||v[Mt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?jn(v):null,v!==null&&(_=dr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=sd,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ud,y="onPointerLeave",p="onPointerEnter",d="pointer"),_=g==null?h:kr(g),m=v==null?h:kr(v),h=new w(y,d+"leave",g,n,c),h.target=_,h.relatedTarget=m,y=null,jn(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=m,w.relatedTarget=_,y=w),_=y,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=gr(m))d++;for(m=0,y=p;y;y=gr(y))m++;for(;0<d-m;)w=gr(w),d--;for(;0<m-d;)p=gr(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=gr(w),p=gr(p)}w=null}else w=null;g!==null&&_d(f,h,g,w,!1),v!==null&&_!==null&&_d(f,_,v,w,!0)}}e:{if(h=u?kr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=M1;else if(dd(h))if(Pm)k=z1;else{k=U1;var I=F1}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=j1);if(k&&(k=k(e,u))){Tm(f,k,n,c);break e}I&&I(e,h,u),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Xl(h,"number",h.value)}switch(I=u?kr(u):window,e){case"focusin":(dd(I)||I.contentEditable==="true")&&(_r=I,uu=u,Mi=null);break;case"focusout":Mi=uu=_r=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,vd(f,n,c);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":vd(f,n,c)}var C;if(xc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else wr?bm(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Im&&n.locale!=="ko"&&(wr||b!=="onCompositionStart"?b==="onCompositionEnd"&&wr&&(C=Em()):(fn=c,Cc="value"in fn?fn.value:fn.textContent,wr=!0)),I=zo(u,b),0<I.length&&(b=new ld(b,e,null,n,c),f.push({event:b,listeners:I}),C?b.data=C:(C=Cm(n),C!==null&&(b.data=C)))),(C=A1?R1(e,n):N1(e,n))&&(u=zo(u,"onBeforeInput"),0<u.length&&(c=new ld("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}Um(f,t)})}function ea(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Gi(e,n),a!=null&&r.unshift(ea(e,a,i)),a=Gi(e,t),a!=null&&r.push(ea(e,a,i))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _d(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Gi(n,a),l!=null&&o.unshift(ea(n,l,s))):i||(l=Gi(n,a),l!=null&&o.push(ea(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var G1=/\r\n?/g,q1=/\u0000|\uFFFD/g;function Sd(e){return(typeof e=="string"?e:""+e).replace(G1,`
`).replace(q1,"")}function Ya(e,t,n){if(t=Sd(t),Sd(e)!==t&&n)throw Error(E(425))}function $o(){}var fu=null,du=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,Y1=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(e){return kd.resolve(null).then(e).catch(X1)}:pu;function X1(e){setTimeout(function(){throw e})}function ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fi=Math.random().toString(36).slice(2),mt="__reactFiber$"+fi,ta="__reactProps$"+fi,Mt="__reactContainer$"+fi,mu="__reactEvents$"+fi,J1="__reactListeners$"+fi,Z1="__reactHandles$"+fi;function jn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ed(e);e!==null;){if(n=e[mt])return n;e=Ed(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){return e=e[mt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function bs(e){return e[ta]||null}var gu=[],Er=-1;function Rn(e){return{current:e}}function q(e){0>Er||(e.current=gu[Er],gu[Er]=null,Er--)}function W(e,t){Er++,gu[Er]=e.current,e.current=t}var Tn={},Se=Rn(Tn),Oe=Rn(!1),Zn=Tn;function ei(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Bo(){q(Oe),q(Se)}function Id(e,t,n){if(Se.current!==Tn)throw Error(E(168));W(Se,t),W(Oe,n)}function zm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,F0(e)||"Unknown",i));return Z({},n,r)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Zn=Se.current,W(Se,e),W(Oe,Oe.current),!0}function bd(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=zm(e,t,Zn),r.__reactInternalMemoizedMergedChildContext=e,q(Oe),q(Se),W(Se,e)):q(Oe),W(Oe,n)}var Ct=null,Cs=!1,gl=!1;function $m(e){Ct===null?Ct=[e]:Ct.push(e)}function ew(e){Cs=!0,$m(e)}function Nn(){if(!gl&&Ct!==null){gl=!0;var e=0,t=H;try{var n=Ct;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,Cs=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(e+1)),dm(kc,Nn),i}finally{H=t,gl=!1}}return null}var Ir=[],br=0,Vo=null,Wo=0,Ke=[],Ge=0,er=null,Pt=1,xt="";function Mn(e,t){Ir[br++]=Wo,Ir[br++]=Vo,Vo=e,Wo=t}function Bm(e,t,n){Ke[Ge++]=Pt,Ke[Ge++]=xt,Ke[Ge++]=er,er=e;var r=Pt;e=xt;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pt=1<<32-ot(t)+i|n<<i|r,xt=a+e}else Pt=1<<a|n<<i|r,xt=e}function Ac(e){e.return!==null&&(Mn(e,1),Bm(e,1,0))}function Rc(e){for(;e===Vo;)Vo=Ir[--br],Ir[br]=null,Wo=Ir[--br],Ir[br]=null;for(;e===er;)er=Ke[--Ge],Ke[Ge]=null,xt=Ke[--Ge],Ke[Ge]=null,Pt=Ke[--Ge],Ke[Ge]=null}var Fe=null,Me=null,Y=!1,it=null;function Hm(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Me=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:Pt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Me=null,!0):!1;default:return!1}}function vu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yu(e){if(Y){var t=Me;if(t){var n=t;if(!Cd(e,t)){if(vu(e))throw Error(E(418));t=yn(n.nextSibling);var r=Fe;t&&Cd(e,t)?Hm(r,n):(e.flags=e.flags&-4097|2,Y=!1,Fe=e)}}else{if(vu(e))throw Error(E(418));e.flags=e.flags&-4097|2,Y=!1,Fe=e}}}function Td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Xa(e){if(e!==Fe)return!1;if(!Y)return Td(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=Me)){if(vu(e))throw Vm(),Error(E(418));for(;t;)Hm(e,t),t=yn(t.nextSibling)}if(Td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Fe?yn(e.stateNode.nextSibling):null;return!0}function Vm(){for(var e=Me;e;)e=yn(e.nextSibling)}function ti(){Me=Fe=null,Y=!1}function Nc(e){it===null?it=[e]:it.push(e)}var tw=Vt.ReactCurrentBatchConfig;function et(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ko=Rn(null),Go=null,Cr=null,Lc=null;function Dc(){Lc=Cr=Go=null}function Mc(e){var t=Ko.current;q(Ko),e._currentValue=t}function wu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){Go=e,Lc=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Lc!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(Go===null)throw Error(E(308));Cr=e,Go.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var zn=null;function Fc(e){zn===null?zn=[e]:zn.push(e)}function Wm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,Fc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ec(e,n)}}function Pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qo(e,t,n,r){var i=e.updateQueue;Jt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,g=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=Z({},f,h);break e;case 2:Jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);nr|=o,e.lanes=o,e.memoizedState=f}}function xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Gm=new Wp.Component().refs;function _u(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ts={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Sn(e),a=Lt(r,i);a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,i),t!==null&&(st(t,e,i,r),wo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Sn(e),a=Lt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,i),t!==null&&(st(t,e,i,r),wo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Sn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,r),t!==null&&(st(t,e,r,n),wo(t,e,r))}};function Od(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,a):!0}function qm(e,t,n){var r=!1,i=Tn,a=t.contextType;return typeof a=="object"&&a!==null?a=Ye(a):(i=Ae(t)?Zn:Se.current,r=t.contextTypes,a=(r=r!=null)?ei(e,i):Tn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ad(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ts.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Gm,Uc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ye(a):(a=Ae(t)?Zn:Se.current,i.context=ei(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(_u(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ts.enqueueReplaceState(i,i.state,null),qo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===Gm&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ja(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rd(e){var t=e._init;return t(e._payload)}function Qm(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=kn(p,d),p.index=0,p.sibling=null,p}function a(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,y){return d===null||d.tag!==6?(d=El(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,y){var k=m.type;return k===yr?c(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&Rd(k)===d.type)?(y=i(d,m.props),y.ref=Ii(p,d,m),y.return=p,y):(y=bo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ii(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Il(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,y,k){return d===null||d.tag!==7?(d=Xn(m,p.mode,y,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=El(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $a:return m=bo(d.type,d.key,d.props,null,p.mode,m),m.ref=Ii(p,null,d),m.return=p,m;case vr:return d=Il(d,p.mode,m),d.return=p,d;case Xt:var y=d._init;return f(p,y(d._payload),m)}if(Pi(d)||wi(d))return d=Xn(d,p.mode,m,null),d.return=p,d;Ja(p,d)}return null}function h(p,d,m,y){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $a:return m.key===k?l(p,d,m,y):null;case vr:return m.key===k?u(p,d,m,y):null;case Xt:return k=m._init,h(p,d,k(m._payload),y)}if(Pi(m)||wi(m))return k!==null?null:c(p,d,m,y,null);Ja(p,m)}return null}function g(p,d,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,s(d,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $a:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,k);case vr:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,k);case Xt:var I=y._init;return g(p,d,m,I(y._payload),k)}if(Pi(y)||wi(y))return p=p.get(m)||null,c(d,p,y,k,null);Ja(d,y)}return null}function v(p,d,m,y){for(var k=null,I=null,C=d,b=d=0,D=null;C!==null&&b<m.length;b++){C.index>b?(D=C,C=null):D=C.sibling;var F=h(p,C,m[b],y);if(F===null){C===null&&(C=D);break}e&&C&&F.alternate===null&&t(p,C),d=a(F,d,b),I===null?k=F:I.sibling=F,I=F,C=D}if(b===m.length)return n(p,C),Y&&Mn(p,b),k;if(C===null){for(;b<m.length;b++)C=f(p,m[b],y),C!==null&&(d=a(C,d,b),I===null?k=C:I.sibling=C,I=C);return Y&&Mn(p,b),k}for(C=r(p,C);b<m.length;b++)D=g(C,p,b,m[b],y),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?b:D.key),d=a(D,d,b),I===null?k=D:I.sibling=D,I=D);return e&&C.forEach(function(Je){return t(p,Je)}),Y&&Mn(p,b),k}function w(p,d,m,y){var k=wi(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var I=k=null,C=d,b=d=0,D=null,F=m.next();C!==null&&!F.done;b++,F=m.next()){C.index>b?(D=C,C=null):D=C.sibling;var Je=h(p,C,F.value,y);if(Je===null){C===null&&(C=D);break}e&&C&&Je.alternate===null&&t(p,C),d=a(Je,d,b),I===null?k=Je:I.sibling=Je,I=Je,C=D}if(F.done)return n(p,C),Y&&Mn(p,b),k;if(C===null){for(;!F.done;b++,F=m.next())F=f(p,F.value,y),F!==null&&(d=a(F,d,b),I===null?k=F:I.sibling=F,I=F);return Y&&Mn(p,b),k}for(C=r(p,C);!F.done;b++,F=m.next())F=g(C,p,b,F.value,y),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?b:F.key),d=a(F,d,b),I===null?k=F:I.sibling=F,I=F);return e&&C.forEach(function(vi){return t(p,vi)}),Y&&Mn(p,b),k}function _(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===yr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case $a:e:{for(var k=m.key,I=d;I!==null;){if(I.key===k){if(k=m.type,k===yr){if(I.tag===7){n(p,I.sibling),d=i(I,m.props.children),d.return=p,p=d;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&Rd(k)===I.type){n(p,I.sibling),d=i(I,m.props),d.ref=Ii(p,I,m),d.return=p,p=d;break e}n(p,I);break}else t(p,I);I=I.sibling}m.type===yr?(d=Xn(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=bo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ii(p,d,m),y.return=p,p=y)}return o(p);case vr:e:{for(I=m.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Il(m,p.mode,y),d.return=p,p=d}return o(p);case Xt:return I=m._init,_(p,d,I(m._payload),y)}if(Pi(m))return v(p,d,m,y);if(wi(m))return w(p,d,m,y);Ja(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=El(m,p.mode,y),d.return=p,p=d),o(p)):n(p,d)}return _}var ni=Qm(!0),Ym=Qm(!1),Ta={},yt=Rn(Ta),na=Rn(Ta),ra=Rn(Ta);function $n(e){if(e===Ta)throw Error(E(174));return e}function jc(e,t){switch(W(ra,t),W(na,e),W(yt,Ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}q(yt),W(yt,t)}function ri(){q(yt),q(na),q(ra)}function Xm(e){$n(ra.current);var t=$n(yt.current),n=Zl(t,e.type);t!==n&&(W(na,e),W(yt,n))}function zc(e){na.current===e&&(q(yt),q(na))}var X=Rn(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function $c(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var _o=Vt.ReactCurrentDispatcher,yl=Vt.ReactCurrentBatchConfig,tr=0,J=null,le=null,he=null,Yo=!1,Fi=!1,ia=0,nw=0;function ye(){throw Error(E(321))}function Bc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,i,a){if(tr=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?ow:sw,e=n(r,i),Fi){a=0;do{if(Fi=!1,ia=0,25<=a)throw Error(E(301));a+=1,he=le=null,t.updateQueue=null,_o.current=lw,e=n(r,i)}while(Fi)}if(_o.current=Xo,t=le!==null&&le.next!==null,tr=0,he=le=J=null,Yo=!1,t)throw Error(E(300));return e}function Vc(){var e=ia!==0;return ia=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?J.memoizedState=he=e:he=he.next=e,he}function Xe(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=he===null?J.memoizedState:he.next;if(t!==null)he=t,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},he===null?J.memoizedState=he=e:he=he.next=e}return he}function aa(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((tr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,J.lanes|=c,nr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,ut(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,J.lanes|=a,nr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=Xe(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);ut(a,t.memoizedState)||(xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Jm(){}function Zm(e,t){var n=J,r=Xe(),i=t(),a=!ut(r.memoizedState,i);if(a&&(r.memoizedState=i,xe=!0),r=r.queue,Wc(ng.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,oa(9,tg.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(E(349));tr&30||eg(n,t,i)}return i}function eg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tg(e,t,n,r){t.value=n,t.getSnapshot=r,rg(t)&&ig(e)}function ng(e,t,n){return n(function(){rg(t)&&ig(e)})}function rg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function ig(e){var t=Ft(e,1);t!==null&&st(t,e,1,-1)}function Nd(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t.queue=e,e=e.dispatch=aw.bind(null,J,e),[t.memoizedState,e]}function oa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ag(){return Xe().memoizedState}function So(e,t,n,r){var i=ft();J.flags|=e,i.memoizedState=oa(1|t,n,void 0,r===void 0?null:r)}function Ps(e,t,n,r){var i=Xe();r=r===void 0?null:r;var a=void 0;if(le!==null){var o=le.memoizedState;if(a=o.destroy,r!==null&&Bc(r,o.deps)){i.memoizedState=oa(t,n,a,r);return}}J.flags|=e,i.memoizedState=oa(1|t,n,a,r)}function Ld(e,t){return So(8390656,8,e,t)}function Wc(e,t){return Ps(2048,8,e,t)}function og(e,t){return Ps(4,2,e,t)}function sg(e,t){return Ps(4,4,e,t)}function lg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ug(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4,4,lg.bind(null,t,e),n)}function Kc(){}function cg(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fg(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dg(e,t,n){return tr&21?(ut(n,t)||(n=mm(),J.lanes|=n,nr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function rw(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{H=n,yl.transition=r}}function hg(){return Xe().memoizedState}function iw(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pg(e))mg(t,n);else if(n=Wm(e,t,n,r),n!==null){var i=be();st(n,e,r,i),gg(n,t,r)}}function aw(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pg(e))mg(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,ut(s,o)){var l=t.interleaved;l===null?(i.next=i,Fc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Wm(e,t,i,r),n!==null&&(i=be(),st(n,e,r,i),gg(n,t,r))}}function pg(e){var t=e.alternate;return e===J||t!==null&&t===J}function mg(e,t){Fi=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ec(e,n)}}var Xo={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},ow={readContext:Ye,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Ld,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,lg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=iw.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Nd,useDebugValue:Kc,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Nd(!1),t=e[0];return e=rw.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=ft();if(Y){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),pe===null)throw Error(E(349));tr&30||eg(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ld(ng.bind(null,r,a,e),[e]),r.flags|=2048,oa(9,tg.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ft(),t=pe.identifierPrefix;if(Y){var n=xt,r=Pt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ia++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sw={readContext:Ye,useCallback:cg,useContext:Ye,useEffect:Wc,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:sg,useMemo:fg,useReducer:wl,useRef:ag,useState:function(){return wl(aa)},useDebugValue:Kc,useDeferredValue:function(e){var t=Xe();return dg(t,le.memoizedState,e)},useTransition:function(){var e=wl(aa)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Jm,useSyncExternalStore:Zm,useId:hg,unstable_isNewReconciler:!1},lw={readContext:Ye,useCallback:cg,useContext:Ye,useEffect:Wc,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:sg,useMemo:fg,useReducer:_l,useRef:ag,useState:function(){return _l(aa)},useDebugValue:Kc,useDeferredValue:function(e){var t=Xe();return le===null?t.memoizedState=e:dg(t,le.memoizedState,e)},useTransition:function(){var e=_l(aa)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Jm,useSyncExternalStore:Zm,useId:hg,unstable_isNewReconciler:!1};function ii(e,t){try{var n="",r=t;do n+=M0(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ku(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function vg(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zo||(Zo=!0,Ru=r),ku(e,t)},n}function yg(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ku(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ku(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Dd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ew.bind(null,e,t,n),t.then(e,e))}function Md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var cw=Vt.ReactCurrentOwner,xe=!1;function Ee(e,t,n,r){t.child=e===null?Ym(t,null,n,r):ni(t,e.child,n,r)}function Ud(e,t,n,r,i){n=n.render;var a=t.ref;return Mr(t,i),r=Hc(e,t,n,r,a,i),n=Vc(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(Y&&n&&Ac(t),t.flags|=1,Ee(e,t,r,i),t.child)}function jd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ef(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,wg(e,t,a,r,i)):(e=bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(o,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=kn(a,r),e.ref=t.ref,e.return=t,t.child=e}function wg(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ji(a,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return Eu(e,t,n,r,i)}function _g(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Pr,De),De|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Pr,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,W(Pr,De),De|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,W(Pr,De),De|=r;return Ee(e,t,i,n),t.child}function Sg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eu(e,t,n,r,i){var a=Ae(n)?Zn:Se.current;return a=ei(t,a),Mr(t,i),n=Hc(e,t,n,r,a,i),r=Vc(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(Y&&r&&Ac(t),t.flags|=1,Ee(e,t,n,i),t.child)}function zd(e,t,n,r,i){if(Ae(n)){var a=!0;Ho(t)}else a=!1;if(Mr(t,i),t.stateNode===null)ko(e,t),qm(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Ae(n)?Zn:Se.current,u=ei(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Ad(t,o,r,u),Jt=!1;var h=t.memoizedState;o.state=h,qo(t,r,o,i),l=t.memoizedState,s!==r||h!==l||Oe.current||Jt?(typeof c=="function"&&(_u(t,n,c,r),l=t.memoizedState),(s=Jt||Od(t,n,s,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Km(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:et(t.type,s),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=Ae(n)?Zn:Se.current,l=ei(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Ad(t,o,r,l),Jt=!1,h=t.memoizedState,o.state=h,qo(t,r,o,i);var v=t.memoizedState;s!==f||h!==v||Oe.current||Jt?(typeof g=="function"&&(_u(t,n,g,r),v=t.memoizedState),(u=Jt||Od(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Iu(e,t,n,r,a,i)}function Iu(e,t,n,r,i,a){Sg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&bd(t,n,!1),Ut(e,t,a);r=t.stateNode,cw.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ni(t,e.child,null,a),t.child=ni(t,null,s,a)):Ee(e,t,s,a),t.memoizedState=r.state,i&&bd(t,n,!0),t.child}function kg(e){var t=e.stateNode;t.pendingContext?Id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Id(e,t.context,!1),jc(e,t.containerInfo)}function $d(e,t,n,r,i){return ti(),Nc(i),t.flags|=256,Ee(e,t,n,r),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eg(e,t,n){var r=t.pendingProps,i=X.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(X,i&1),e===null)return yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=As(o,r,0,null),e=Xn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cu(n),t.memoizedState=bu,e):Gc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return fw(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=kn(s,a):(a=Xn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Cu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=bu,r}return a=e.child,e=a.sibling,r=kn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gc(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Za(e,t,n,r){return r!==null&&Nc(r),ni(t,e.child,null,n),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fw(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(E(422))),Za(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=As({mode:"visible",children:r.children},i,0,null),a=Xn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&ni(t,e.child,null,o),t.child.memoizedState=Cu(o),t.memoizedState=bu,a);if(!(t.mode&1))return Za(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(E(419)),r=Sl(a,r,void 0),Za(e,t,o,r)}if(s=(o&e.childLanes)!==0,xe||s){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Ft(e,i),st(r,e,i,-1))}return Zc(),r=Sl(Error(E(421))),Za(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Iw.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Me=yn(i.nextSibling),Fe=t,Y=!0,it=null,e!==null&&(Ke[Ge++]=Pt,Ke[Ge++]=xt,Ke[Ge++]=er,Pt=e.id,xt=e.overflow,er=t),t=Gc(t,r.children),t.flags|=4096,t)}function Bd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wu(e.return,t,n)}function kl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Ig(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ee(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bd(e,n,t);else if(e.tag===19)Bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(X,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kl(t,!0,n,null,a);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dw(e,t,n){switch(t.tag){case 3:kg(t),ti();break;case 5:Xm(t);break;case 1:Ae(t.type)&&Ho(t);break;case 4:jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?Eg(e,t,n):(W(X,X.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ig(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,_g(e,t,n)}return Ut(e,t,n)}var bg,Tu,Cg,Tg;bg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tu=function(){};Cg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(yt.current);var a=null;switch(n){case"input":i=Ql(e,i),r=Ql(e,r),a=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),a=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$o)}eu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Tg=function(e,t,n,r){n!==r&&(t.flags|=4)};function bi(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hw(e,t,n){var r=t.pendingProps;switch(Rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Ae(t.type)&&Bo(),we(t),null;case 3:return r=t.stateNode,ri(),q(Oe),q(Se),$c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(Du(it),it=null))),Tu(e,t),we(t),null;case 5:zc(t);var i=$n(ra.current);if(n=t.type,e!==null&&t.stateNode!=null)Cg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return we(t),null}if(e=$n(yt.current),Xa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[mt]=t,r[ta]=a,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)K(Oi[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Xf(r,a),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},K("invalid",r);break;case"textarea":Zf(r,a),K("invalid",r)}eu(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ya(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ya(r.textContent,s,e),i=["children",""+s]):Wi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Ba(r),Jf(r,a,!0);break;case"textarea":Ba(r),ed(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=$o)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=em(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mt]=t,e[ta]=r,bg(e,t,!1,!1),t.stateNode=e;e:{switch(o=tu(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)K(Oi[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Xf(e,r),i=Ql(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),K("invalid",e);break;case"textarea":Zf(e,r),i=Jl(e,r),K("invalid",e);break;default:i=r}eu(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?rm(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tm(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ki(e,l):typeof l=="number"&&Ki(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wi.hasOwnProperty(a)?l!=null&&a==="onScroll"&&K("scroll",e):l!=null&&vc(e,a,l,o))}switch(n){case"input":Ba(e),Jf(e,r,!1);break;case"textarea":Ba(e),ed(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Rr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Tg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=$n(ra.current),$n(yt.current),Xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(a=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Ya(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return we(t),null;case 13:if(q(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Me!==null&&t.mode&1&&!(t.flags&128))Vm(),ti(),t.flags|=98560,a=!1;else if(a=Xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[mt]=t}else ti(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),a=!1}else it!==null&&(Du(it),it=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ue===0&&(ue=3):Zc())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return ri(),Tu(e,t),e===null&&Zi(t.stateNode.containerInfo),we(t),null;case 10:return Mc(t.type._context),we(t),null;case 17:return Ae(t.type)&&Bo(),we(t),null;case 19:if(q(X),a=t.memoizedState,a===null)return we(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)bi(a,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qo(e),o!==null){for(t.flags|=128,bi(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}a.tail!==null&&re()>ai&&(t.flags|=128,r=!0,bi(a,!1),t.lanes=4194304)}else{if(!r)if(e=Qo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return we(t),null}else 2*re()-a.renderingStartTime>ai&&n!==1073741824&&(t.flags|=128,r=!0,bi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=re(),t.sibling=null,n=X.current,W(X,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function pw(e,t){switch(Rc(t),t.tag){case 1:return Ae(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ri(),q(Oe),q(Se),$c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(q(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(X),null;case 4:return ri(),null;case 10:return Mc(t.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var eo=!1,_e=!1,mw=typeof WeakSet=="function"?WeakSet:Set,x=null;function Tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Pu(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Hd=!1;function gw(e,t){if(fu=Uo,e=Am(),Oc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=o),h===a&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:e,selectionRange:n},Uo=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:et(t.type,w),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return v=Hd,Hd=!1,v}function Ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Pu(t,n,a)}i=i.next}while(i!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pg(e){var t=e.alternate;t!==null&&(e.alternate=null,Pg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[ta],delete t[mu],delete t[J1],delete t[Z1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xg(e){return e.tag===5||e.tag===3||e.tag===4}function Vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$o));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}var me=null,rt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Og(e,t,n),n=n.sibling}function Og(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ss,n)}catch{}switch(n.tag){case 5:_e||Tr(n,t);case 6:var r=me,i=rt;me=null,Gt(e,t,n),me=r,rt=i,me!==null&&(rt?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(rt?(e=me,n=n.stateNode,e.nodeType===8?ml(e.parentNode,n):e.nodeType===1&&ml(e,n),Yi(e)):ml(me,n.stateNode));break;case 4:r=me,i=rt,me=n.stateNode.containerInfo,rt=!0,Gt(e,t,n),me=r,rt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Pu(n,t,o),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!_e&&(Tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Gt(e,t,n),_e=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mw),t.forEach(function(r){var i=bw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:me=s.stateNode,rt=!1;break e;case 3:me=s.stateNode.containerInfo,rt=!0;break e;case 4:me=s.stateNode.containerInfo,rt=!0;break e}s=s.return}if(me===null)throw Error(E(160));Og(a,o,i),me=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ag(t,e),t=t.sibling}function Ag(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ct(e),r&4){try{Ui(3,e,e.return),xs(3,e)}catch(w){ee(e,e.return,w)}try{Ui(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ze(t,e),ct(e),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(Ze(t,e),ct(e),r&512&&n!==null&&Tr(n,n.return),e.flags&32){var i=e.stateNode;try{Ki(i,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Jp(i,a),tu(s,o);var u=tu(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?rm(i,f):c==="dangerouslySetInnerHTML"?tm(i,f):c==="children"?Ki(i,f):vc(i,c,f,u)}switch(s){case"input":Yl(i,a);break;case"textarea":Zp(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Rr(i,!!a.multiple,g,!1):h!==!!a.multiple&&(a.defaultValue!=null?Rr(i,!!a.multiple,a.defaultValue,!0):Rr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ta]=a}catch(w){ee(e,e.return,w)}}break;case 6:if(Ze(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){ee(e,e.return,w)}}break;case 3:if(Ze(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ze(t,e),ct(e);break;case 13:Ze(t,e),ct(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Yc=re())),r&4&&Wd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,Ze(t,e),_e=u):Ze(t,e),ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(x=e,c=e.child;c!==null;){for(f=x=c;x!==null;){switch(h=x,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ui(4,h,h.return);break;case 1:Tr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:Tr(h,h.return);break;case 22:if(h.memoizedState!==null){Gd(f);continue}}g!==null?(g.return=h,x=g):Gd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=nm("display",o))}catch(w){ee(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ee(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ze(t,e),ct(e),r&4&&Wd(e);break;case 21:break;default:Ze(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var a=Vd(e);Au(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Vd(e);Ou(e,s,o);break;default:throw Error(E(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vw(e,t,n){x=e,Rg(e)}function Rg(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||eo;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||_e;s=eo;var u=_e;if(eo=o,(_e=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?qd(i):l!==null?(l.return=o,x=l):qd(i);for(;a!==null;)x=a,Rg(a),a=a.sibling;x=i,eo=s,_e=u}Kd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,x=a):Kd(e)}}function Kd(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&xd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xd(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Yi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}_e||t.flags&512&&xu(t)}catch(h){ee(t,t.return,h)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Gd(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function qd(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var a=t.return;try{xu(t)}catch(l){ee(t,a,l)}break;case 5:var o=t.return;try{xu(t)}catch(l){ee(t,o,l)}}}catch(l){ee(t,t.return,l)}if(t===e){x=null;break}var s=t.sibling;if(s!==null){s.return=t.return,x=s;break}x=t.return}}var yw=Math.ceil,Jo=Vt.ReactCurrentDispatcher,qc=Vt.ReactCurrentOwner,Qe=Vt.ReactCurrentBatchConfig,B=0,pe=null,ie=null,ge=0,De=0,Pr=Rn(0),ue=0,sa=null,nr=0,Os=0,Qc=0,ji=null,Pe=null,Yc=0,ai=1/0,bt=null,Zo=!1,Ru=null,_n=null,to=!1,dn=null,es=0,zi=0,Nu=null,Eo=-1,Io=0;function be(){return B&6?re():Eo!==-1?Eo:Eo=re()}function Sn(e){return e.mode&1?B&2&&ge!==0?ge&-ge:tw.transition!==null?(Io===0&&(Io=mm()),Io):(e=H,e!==0||(e=window.event,e=e===void 0?16:km(e.type)),e):1}function st(e,t,n,r){if(50<zi)throw zi=0,Nu=null,Error(E(185));Ia(e,n,r),(!(B&2)||e!==pe)&&(e===pe&&(!(B&2)&&(Os|=n),ue===4&&en(e,ge)),Re(e,r),n===1&&B===0&&!(t.mode&1)&&(ai=re()+500,Cs&&Nn()))}function Re(e,t){var n=e.callbackNode;t1(e,t);var r=Fo(e,e===pe?ge:0);if(r===0)n!==null&&rd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rd(n),t===1)e.tag===0?ew(Qd.bind(null,e)):$m(Qd.bind(null,e)),Y1(function(){!(B&6)&&Nn()}),n=null;else{switch(gm(r)){case 1:n=kc;break;case 4:n=hm;break;case 16:n=Mo;break;case 536870912:n=pm;break;default:n=Mo}n=zg(n,Ng.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ng(e,t){if(Eo=-1,Io=0,B&6)throw Error(E(327));var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var r=Fo(e,e===pe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ts(e,r);else{t=r;var i=B;B|=2;var a=Dg();(pe!==e||ge!==t)&&(bt=null,ai=re()+500,Yn(e,t));do try{Sw();break}catch(s){Lg(e,s)}while(!0);Dc(),Jo.current=a,B=i,ie!==null?t=0:(pe=null,ge=0,t=ue)}if(t!==0){if(t===2&&(i=ou(e),i!==0&&(r=i,t=Lu(e,i))),t===1)throw n=sa,Yn(e,0),en(e,r),Re(e,re()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!ww(i)&&(t=ts(e,r),t===2&&(a=ou(e),a!==0&&(r=a,t=Lu(e,a))),t===1))throw n=sa,Yn(e,0),en(e,r),Re(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Fn(e,Pe,bt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=Yc+500-re(),10<t)){if(Fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pu(Fn.bind(null,e,Pe,bt),t);break}Fn(e,Pe,bt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-ot(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yw(r/1960))-r,10<r){e.timeoutHandle=pu(Fn.bind(null,e,Pe,bt),r);break}Fn(e,Pe,bt);break;case 5:Fn(e,Pe,bt);break;default:throw Error(E(329))}}}return Re(e,re()),e.callbackNode===n?Ng.bind(null,e):null}function Lu(e,t){var n=ji;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=ts(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Du(t)),e}function Du(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function ww(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!ut(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Qc,t&=~Os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function Qd(e){if(B&6)throw Error(E(327));Fr();var t=Fo(e,0);if(!(t&1))return Re(e,re()),null;var n=ts(e,t);if(e.tag!==0&&n===2){var r=ou(e);r!==0&&(t=r,n=Lu(e,r))}if(n===1)throw n=sa,Yn(e,0),en(e,t),Re(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,Pe,bt),Re(e,re()),null}function Xc(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(ai=re()+500,Cs&&Nn())}}function rr(e){dn!==null&&dn.tag===0&&!(B&6)&&Fr();var t=B;B|=1;var n=Qe.transition,r=H;try{if(Qe.transition=null,H=1,e)return e()}finally{H=r,Qe.transition=n,B=t,!(B&6)&&Nn()}}function Jc(){De=Pr.current,q(Pr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Q1(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:ri(),q(Oe),q(Se),$c();break;case 5:zc(r);break;case 4:ri();break;case 13:q(X);break;case 19:q(X);break;case 10:Mc(r.type._context);break;case 22:case 23:Jc()}n=n.return}if(pe=e,ie=e=kn(e.current,null),ge=De=t,ue=0,sa=null,Qc=Os=nr=0,Pe=ji=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}zn=null}return e}function Lg(e,t){do{var n=ie;try{if(Dc(),_o.current=Xo,Yo){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if(tr=0,he=le=J=null,Fi=!1,ia=0,qc.current=null,n===null||n.return===null){ue=1,sa=t,ie=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ge,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Md(o);if(g!==null){g.flags&=-257,Fd(g,o,s,a,t),g.mode&1&&Dd(a,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Dd(a,u,t),Zc();break e}l=Error(E(426))}}else if(Y&&s.mode&1){var _=Md(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Fd(_,o,s,a,t),Nc(ii(l,s));break e}}a=l=ii(l,s),ue!==4&&(ue=2),ji===null?ji=[a]:ji.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=vg(a,l,t);Pd(a,p);break e;case 1:s=l;var d=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_n===null||!_n.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=yg(a,s,t);Pd(a,y);break e}}a=a.return}while(a!==null)}Fg(n)}catch(k){t=k,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Dg(){var e=Jo.current;return Jo.current=Xo,e===null?Xo:e}function Zc(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(nr&268435455)&&!(Os&268435455)||en(pe,ge)}function ts(e,t){var n=B;B|=2;var r=Dg();(pe!==e||ge!==t)&&(bt=null,Yn(e,t));do try{_w();break}catch(i){Lg(e,i)}while(!0);if(Dc(),B=n,Jo.current=r,ie!==null)throw Error(E(261));return pe=null,ge=0,ue}function _w(){for(;ie!==null;)Mg(ie)}function Sw(){for(;ie!==null&&!K0();)Mg(ie)}function Mg(e){var t=jg(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Fg(e):ie=t,qc.current=null}function Fg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pw(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ie=null;return}}else if(n=hw(n,t,De),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ue===0&&(ue=5)}function Fn(e,t,n){var r=H,i=Qe.transition;try{Qe.transition=null,H=1,kw(e,t,n,r)}finally{Qe.transition=i,H=r}return null}function kw(e,t,n,r){do Fr();while(dn!==null);if(B&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(n1(e,a),e===pe&&(ie=pe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,zg(Mo,function(){return Fr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Qe.transition,Qe.transition=null;var o=H;H=1;var s=B;B|=4,qc.current=null,gw(e,n),Ag(n,e),B1(du),Uo=!!fu,du=fu=null,e.current=n,vw(n),G0(),B=s,H=o,Qe.transition=a}else e.current=n;if(to&&(to=!1,dn=e,es=i),a=e.pendingLanes,a===0&&(_n=null),Y0(n.stateNode),Re(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zo)throw Zo=!1,e=Ru,Ru=null,e;return es&1&&e.tag!==0&&Fr(),a=e.pendingLanes,a&1?e===Nu?zi++:(zi=0,Nu=e):zi=0,Nn(),null}function Fr(){if(dn!==null){var e=gm(es),t=Qe.transition,n=H;try{if(Qe.transition=null,H=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,es=0,B&6)throw Error(E(331));var i=B;for(B|=4,x=e.current;x!==null;){var a=x,o=a.child;if(x.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Ui(8,c,a)}var f=c.child;if(f!==null)f.return=c,x=f;else for(;x!==null;){c=x;var h=c.sibling,g=c.return;if(Pg(c),c===u){x=null;break}if(h!==null){h.return=g,x=h;break}x=g}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}x=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,x=o;else e:for(;x!==null;){if(a=x,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ui(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,x=p;break e}x=a.return}}var d=e.current;for(x=d;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=d;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xs(9,s)}}catch(k){ee(s,s.return,k)}if(s===o){x=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,x=y;break e}x=s.return}}if(B=i,Nn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ss,e)}catch{}r=!0}return r}finally{H=n,Qe.transition=t}}return!1}function Yd(e,t,n){t=ii(n,t),t=vg(e,t,1),e=wn(e,t,1),t=be(),e!==null&&(Ia(e,1,t),Re(e,t))}function ee(e,t,n){if(e.tag===3)Yd(e,e,n);else for(;t!==null;){if(t.tag===3){Yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=ii(n,e),e=yg(t,e,1),t=wn(t,e,1),e=be(),t!==null&&(Ia(t,1,e),Re(t,e));break}}t=t.return}}function Ew(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>re()-Yc?Yn(e,0):Qc|=n),Re(e,t)}function Ug(e,t){t===0&&(e.mode&1?(t=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):t=1);var n=be();e=Ft(e,t),e!==null&&(Ia(e,t,n),Re(e,n))}function Iw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ug(e,n)}function bw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Ug(e,n)}var jg;jg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,dw(e,t,n);xe=!!(e.flags&131072)}else xe=!1,Y&&t.flags&1048576&&Bm(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ko(e,t),e=t.pendingProps;var i=ei(t,Se.current);Mr(t,n),i=Hc(null,t,r,e,i,n);var a=Vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(a=!0,Ho(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uc(t),i.updater=Ts,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=Iu(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&Ac(t),Ee(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Tw(r),e=et(r,e),i){case 0:t=Eu(null,t,r,e,n);break e;case 1:t=zd(null,t,r,e,n);break e;case 11:t=Ud(null,t,r,e,n);break e;case 14:t=jd(null,t,r,et(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Eu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),zd(e,t,r,i,n);case 3:e:{if(kg(t),e===null)throw Error(E(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Km(e,t),qo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ii(Error(E(423)),t),t=$d(e,t,r,n,i);break e}else if(r!==i){i=ii(Error(E(424)),t),t=$d(e,t,r,n,i);break e}else for(Me=yn(t.stateNode.containerInfo.firstChild),Fe=t,Y=!0,it=null,n=Ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ti(),r===i){t=Ut(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Xm(t),e===null&&yu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,hu(r,i)?o=null:a!==null&&hu(r,a)&&(t.flags|=32),Sg(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&yu(t),null;case 13:return Eg(e,t,n);case 4:return jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ni(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Ud(e,t,r,i,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,W(Ko,r._currentValue),r._currentValue=o,a!==null)if(ut(a.value,o)){if(a.children===i.children&&!Oe.current){t=Ut(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Lt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),wu(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(E(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),wu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ee(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=Ye(i),r=r(i),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,i=et(r,t.pendingProps),i=et(r.type,i),jd(e,t,r,i,n);case 15:return wg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),ko(e,t),t.tag=1,Ae(r)?(e=!0,Ho(t)):e=!1,Mr(t,n),qm(t,r,i),Su(t,r,i,n),Iu(null,t,r,!0,e,n);case 19:return Ig(e,t,n);case 22:return _g(e,t,n)}throw Error(E(156,t.tag))};function zg(e,t){return dm(e,t)}function Cw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Cw(e,t,n,r)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tw(e){if(typeof e=="function")return ef(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wc)return 11;if(e===_c)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bo(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")ef(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case yr:return Xn(n.children,i,a,t);case yc:o=8,i|=8;break;case Wl:return e=qe(12,n,t,i|2),e.elementType=Wl,e.lanes=a,e;case Kl:return e=qe(13,n,t,i),e.elementType=Kl,e.lanes=a,e;case Gl:return e=qe(19,n,t,i),e.elementType=Gl,e.lanes=a,e;case Qp:return As(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gp:o=10;break e;case qp:o=9;break e;case wc:o=11;break e;case _c:o=14;break e;case Xt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Xn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Qp,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tf(e,t,n,r,i,a,o,s,l){return e=new Pw(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=qe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(a),e}function xw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $g(e){if(!e)return Tn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ae(n))return zm(e,n,t)}return t}function Bg(e,t,n,r,i,a,o,s,l){return e=tf(n,r,!0,e,i,a,o,s,l),e.context=$g(null),n=e.current,r=be(),i=Sn(n),a=Lt(r,i),a.callback=t??null,wn(n,a,i),e.current.lanes=i,Ia(e,i,r),Re(e,r),e}function Rs(e,t,n,r){var i=t.current,a=be(),o=Sn(i);return n=$g(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(i,t,o),e!==null&&(st(e,i,o,a),wo(e,i,o)),o}function ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nf(e,t){Xd(e,t),(e=e.alternate)&&Xd(e,t)}function Ow(){return null}var Hg=typeof reportError=="function"?reportError:function(e){console.error(e)};function rf(e){this._internalRoot=e}Ns.prototype.render=rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Rs(e,t,null,null)};Ns.prototype.unmount=rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){Rs(null,e,null,null)}),t[Mt]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=wm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&Sm(e)}};function af(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jd(){}function Aw(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=ns(o);a.call(u)}}var o=Bg(t,r,e,0,null,!1,!1,"",Jd);return e._reactRootContainer=o,e[Mt]=o.current,Zi(e.nodeType===8?e.parentNode:e),rr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ns(l);s.call(u)}}var l=tf(e,0,!1,null,null,!1,!1,"",Jd);return e._reactRootContainer=l,e[Mt]=l.current,Zi(e.nodeType===8?e.parentNode:e),rr(function(){Rs(t,l,n,r)}),l}function Ds(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=ns(o);s.call(l)}}Rs(t,o,e,i)}else o=Aw(n,t,e,i,r);return ns(o)}vm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xi(t.pendingLanes);n!==0&&(Ec(t,n|1),Re(t,re()),!(B&6)&&(ai=re()+500,Nn()))}break;case 13:rr(function(){var r=Ft(e,1);if(r!==null){var i=be();st(r,e,1,i)}}),nf(e,1)}};Ic=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=be();st(t,e,134217728,n)}nf(e,134217728)}};ym=function(e){if(e.tag===13){var t=Sn(e),n=Ft(e,t);if(n!==null){var r=be();st(n,e,t,r)}nf(e,t)}};wm=function(){return H};_m=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};ru=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bs(r);if(!i)throw Error(E(90));Xp(r),Yl(r,i)}}}break;case"textarea":Zp(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};om=Xc;sm=rr;var Rw={usingClientEntryPoint:!1,Events:[Ca,kr,bs,im,am,Xc]},Ci={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Nw={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||Ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Ss=no.inject(Nw),vt=no}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(t))throw Error(E(200));return xw(e,t,null,n)};ze.createRoot=function(e,t){if(!af(e))throw Error(E(299));var n=!1,r="",i=Hg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tf(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,Zi(e.nodeType===8?e.parentNode:e),new rf(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=cm(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return rr(e)};ze.hydrate=function(e,t,n){if(!Ls(t))throw Error(E(200));return Ds(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!af(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Hg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bg(t,null,e,1,n??null,i,!1,a,o),e[Mt]=t.current,Zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ns(t)};ze.render=function(e,t,n){if(!Ls(t))throw Error(E(200));return Ds(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ls(e))throw Error(E(40));return e._reactRootContainer?(rr(function(){Ds(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};ze.unstable_batchedUpdates=Xc;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ls(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ds(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(e){console.error(e)}}Vg(),Bp.exports=ze;var Lw=Bp.exports,Zd=Lw;Hl.createRoot=Zd.createRoot,Hl.hydrateRoot=Zd.hydrateRoot;var Ms=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Fs=typeof window>"u"||"Deno"in window;function tt(){}function Dw(e,t){return typeof e=="function"?e(t):e}function Mw(e){return typeof e=="number"&&e>=0&&e!==1/0}function Fw(e,t){return Math.max(e+(t||0)-Date.now(),0)}function eh(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==of(o,t.options))return!1}else if(!ua(t.queryKey,o))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||typeof i<"u"&&i!==t.state.fetchStatus||a&&!a(t))}function th(e,t){const{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(la(t.options.mutationKey)!==la(a))return!1}else if(!ua(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function of(e,t){return((t==null?void 0:t.queryKeyHashFn)||la)(e)}function la(e){return JSON.stringify(e,(t,n)=>Mu(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function ua(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!ua(e[n],t[n])):!1}function Wg(e,t){if(e===t)return e;const n=nh(e)&&nh(t);if(n||Mu(e)&&Mu(t)){const r=n?e:Object.keys(e),i=r.length,a=n?t:Object.keys(t),o=a.length,s=n?[]:{};let l=0;for(let u=0;u<o;u++){const c=n?u:a[u];!n&&e[c]===void 0&&t[c]===void 0&&r.includes(c)?(s[c]=void 0,l++):(s[c]=Wg(e[c],t[c]),s[c]===e[c]&&e[c]!==void 0&&l++)}return i===o&&l===i?e:s}return t}function nh(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Mu(e){if(!rh(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!rh(n)||!n.hasOwnProperty("isPrototypeOf"))}function rh(e){return Object.prototype.toString.call(e)==="[object Object]"}function Uw(e){return new Promise(t=>{setTimeout(t,e)})}function jw(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Wg(e,t):t}function zw(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function $w(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Kn,an,Br,Ep,Bw=(Ep=class extends Ms{constructor(){super();$(this,Kn,void 0);$(this,an,void 0);$(this,Br,void 0);N(this,Br,t=>{if(!Fs&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){S(this,an)||this.setEventListener(S(this,Br))}onUnsubscribe(){var t;this.hasListeners()||((t=S(this,an))==null||t.call(this),N(this,an,void 0))}setEventListener(t){var n;N(this,Br,t),(n=S(this,an))==null||n.call(this),N(this,an,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){S(this,Kn)!==t&&(N(this,Kn,t),this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){var t;return typeof S(this,Kn)=="boolean"?S(this,Kn):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Kn=new WeakMap,an=new WeakMap,Br=new WeakMap,Ep),Fu=new Bw,Hr,on,Vr,Ip,Hw=(Ip=class extends Ms{constructor(){super();$(this,Hr,!0);$(this,on,void 0);$(this,Vr,void 0);N(this,Vr,t=>{if(!Fs&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){S(this,on)||this.setEventListener(S(this,Vr))}onUnsubscribe(){var t;this.hasListeners()||((t=S(this,on))==null||t.call(this),N(this,on,void 0))}setEventListener(t){var n;N(this,Vr,t),(n=S(this,on))==null||n.call(this),N(this,on,t(this.setOnline.bind(this)))}setOnline(t){S(this,Hr)!==t&&(N(this,Hr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return S(this,Hr)}},Hr=new WeakMap,on=new WeakMap,Vr=new WeakMap,Ip),rs=new Hw;function Vw(e){return Math.min(1e3*2**e,3e4)}function sf(e){return(e??"online")==="online"?rs.isOnline():!0}var Kg=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function bl(e){return e instanceof Kg}function Gg(e){let t=!1,n=0,r=!1,i,a,o;const s=new Promise((_,p)=>{a=_,o=p}),l=_=>{var p;r||(g(new Kg(_)),(p=e.abort)==null||p.call(e))},u=()=>{t=!0},c=()=>{t=!1},f=()=>!Fu.isFocused()||e.networkMode!=="always"&&!rs.isOnline(),h=_=>{var p;r||(r=!0,(p=e.onSuccess)==null||p.call(e,_),i==null||i(),a(_))},g=_=>{var p;r||(r=!0,(p=e.onError)==null||p.call(e,_),i==null||i(),o(_))},v=()=>new Promise(_=>{var p;i=d=>{const m=r||!f();return m&&_(d),m},(p=e.onPause)==null||p.call(e)}).then(()=>{var _;i=void 0,r||(_=e.onContinue)==null||_.call(e)}),w=()=>{if(r)return;let _;try{_=e.fn()}catch(p){_=Promise.reject(p)}Promise.resolve(_).then(h).catch(p=>{var I;if(r)return;const d=e.retry??(Fs?0:3),m=e.retryDelay??Vw,y=typeof m=="function"?m(n,p):m,k=d===!0||typeof d=="number"&&n<d||typeof d=="function"&&d(n,p);if(t||!k){g(p);return}n++,(I=e.onFail)==null||I.call(e,n,p),Uw(y).then(()=>{if(f())return v()}).then(()=>{t?g(p):w()})})};return sf(e.networkMode)?w():v().then(w),{promise:s,cancel:l,continue:()=>(i==null?void 0:i())?s:Promise.resolve(),cancelRetry:u,continueRetry:c}}function Ww(){let e=[],t=0,n=h=>{h()},r=h=>{h()},i=h=>setTimeout(h,0);const a=h=>{i=h},o=h=>{let g;t++;try{g=h()}finally{t--,t||u()}return g},s=h=>{t?e.push(h):i(()=>{n(h)})},l=h=>(...g)=>{s(()=>{h(...g)})},u=()=>{const h=e;e=[],h.length&&i(()=>{r(()=>{h.forEach(g=>{n(g)})})})};return{batch:o,batchCalls:l,schedule:s,setNotifyFunction:h=>{n=h},setBatchNotifyFunction:h=>{r=h},setScheduler:a}}var Ie=Ww(),Gn,bp,qg=(bp=class{constructor(){$(this,Gn,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Mw(this.gcTime)&&N(this,Gn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Fs?1/0:5*60*1e3))}clearGcTimeout(){S(this,Gn)&&(clearTimeout(S(this,Gn)),N(this,Gn,void 0))}},Gn=new WeakMap,bp),Wr,Kr,He,sn,Ve,de,_a,qn,Gr,Co,nt,It,Cp,Kw=(Cp=class extends qg{constructor(t){super();$(this,Gr);$(this,nt);$(this,Wr,void 0);$(this,Kr,void 0);$(this,He,void 0);$(this,sn,void 0);$(this,Ve,void 0);$(this,de,void 0);$(this,_a,void 0);$(this,qn,void 0);N(this,qn,!1),N(this,_a,t.defaultOptions),oe(this,Gr,Co).call(this,t.options),N(this,de,[]),N(this,He,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,N(this,Wr,t.state||Gw(this.options)),this.state=S(this,Wr),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!S(this,de).length&&this.state.fetchStatus==="idle"&&S(this,He).remove(this)}setData(t,n){const r=jw(this.state.data,t,this.options);return oe(this,nt,It).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){oe(this,nt,It).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r;const n=S(this,sn);return(r=S(this,Ve))==null||r.cancel(t),n?n.then(tt).catch(tt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(S(this,Wr))}isActive(){return S(this,de).some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||S(this,de).some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Fw(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=S(this,de).find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=S(this,Ve))==null||n.continue()}onOnline(){var n;const t=S(this,de).find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=S(this,Ve))==null||n.continue()}addObserver(t){S(this,de).includes(t)||(S(this,de).push(t),this.clearGcTimeout(),S(this,He).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){S(this,de).includes(t)&&(N(this,de,S(this,de).filter(n=>n!==t)),S(this,de).length||(S(this,Ve)&&(S(this,qn)?S(this,Ve).cancel({revert:!0}):S(this,Ve).cancelRetry()),this.scheduleGc()),S(this,He).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return S(this,de).length}invalidate(){this.state.isInvalidated||oe(this,nt,It).call(this,{type:"invalidate"})}fetch(t,n){var u,c,f,h;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(S(this,sn))return(u=S(this,Ve))==null||u.continueRetry(),S(this,sn)}if(t&&oe(this,Gr,Co).call(this,t),!this.options.queryFn){const g=S(this,de).find(v=>v.options.queryFn);g&&oe(this,Gr,Co).call(this,g.options)}const r=new AbortController,i={queryKey:this.queryKey,meta:this.meta},a=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(N(this,qn,!0),r.signal)})};a(i);const o=()=>this.options.queryFn?(N(this,qn,!1),this.options.persister?this.options.persister(this.options.queryFn,i,this):this.options.queryFn(i)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),s={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};a(s),(c=this.options.behavior)==null||c.onFetch(s,this),N(this,Kr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=s.fetchOptions)==null?void 0:f.meta))&&oe(this,nt,It).call(this,{type:"fetch",meta:(h=s.fetchOptions)==null?void 0:h.meta});const l=g=>{var v,w,_,p;bl(g)&&g.silent||oe(this,nt,It).call(this,{type:"error",error:g}),bl(g)||((w=(v=S(this,He).config).onError)==null||w.call(v,g,this),(p=(_=S(this,He).config).onSettled)==null||p.call(_,this.state.data,g,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return N(this,Ve,Gg({fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:g=>{var v,w,_,p;if(typeof g>"u"){l(new Error(`${this.queryHash} data is undefined`));return}this.setData(g),(w=(v=S(this,He).config).onSuccess)==null||w.call(v,g,this),(p=(_=S(this,He).config).onSettled)==null||p.call(_,g,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:l,onFail:(g,v)=>{oe(this,nt,It).call(this,{type:"failed",failureCount:g,error:v})},onPause:()=>{oe(this,nt,It).call(this,{type:"pause"})},onContinue:()=>{oe(this,nt,It).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode})),N(this,sn,S(this,Ve).promise),S(this,sn)}},Wr=new WeakMap,Kr=new WeakMap,He=new WeakMap,sn=new WeakMap,Ve=new WeakMap,de=new WeakMap,_a=new WeakMap,qn=new WeakMap,Gr=new WeakSet,Co=function(t){this.options={...S(this,_a),...t},this.updateGcTime(this.options.gcTime)},nt=new WeakSet,It=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:sf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return bl(i)&&i.revert&&S(this,Kr)?{...S(this,Kr),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ie.batch(()=>{S(this,de).forEach(r=>{r.onQueryUpdate()}),S(this,He).notify({query:this,type:"updated",action:t})})},Cp);function Gw(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var dt,Tp,qw=(Tp=class extends Ms{constructor(t={}){super();$(this,dt,void 0);this.config=t,N(this,dt,new Map)}build(t,n,r){const i=n.queryKey,a=n.queryHash??of(i,n);let o=this.get(a);return o||(o=new Kw({cache:this,queryKey:i,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(o)),o}add(t){S(this,dt).has(t.queryHash)||(S(this,dt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=S(this,dt).get(t.queryHash);n&&(t.destroy(),n===t&&S(this,dt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ie.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return S(this,dt).get(t)}getAll(){return[...S(this,dt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>eh(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>eh(t,r)):n}notify(t){Ie.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ie.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ie.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},dt=new WeakMap,Tp),ht,Sa,Le,qr,pt,Yt,Pp,Qw=(Pp=class extends qg{constructor(t){super();$(this,pt);$(this,ht,void 0);$(this,Sa,void 0);$(this,Le,void 0);$(this,qr,void 0);this.mutationId=t.mutationId,N(this,Sa,t.defaultOptions),N(this,Le,t.mutationCache),N(this,ht,[]),this.state=t.state||Yw(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...S(this,Sa),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){S(this,ht).includes(t)||(S(this,ht).push(t),this.clearGcTimeout(),S(this,Le).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){N(this,ht,S(this,ht).filter(n=>n!==t)),this.scheduleGc(),S(this,Le).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){S(this,ht).length||(this.state.status==="pending"?this.scheduleGc():S(this,Le).remove(this))}continue(){var t;return((t=S(this,qr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,o,s,l,u,c,f,h,g,v,w,_,p,d,m,y,k,I,C;const n=()=>(N(this,qr,Gg({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(b,D)=>{oe(this,pt,Yt).call(this,{type:"failed",failureCount:b,error:D})},onPause:()=>{oe(this,pt,Yt).call(this,{type:"pause"})},onContinue:()=>{oe(this,pt,Yt).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),S(this,qr).promise),r=this.state.status==="pending";try{if(!r){oe(this,pt,Yt).call(this,{type:"pending",variables:t}),await((a=(i=S(this,Le).config).onMutate)==null?void 0:a.call(i,t,this));const D=await((s=(o=this.options).onMutate)==null?void 0:s.call(o,t));D!==this.state.context&&oe(this,pt,Yt).call(this,{type:"pending",context:D,variables:t})}const b=await n();return await((u=(l=S(this,Le).config).onSuccess)==null?void 0:u.call(l,b,t,this.state.context,this)),await((f=(c=this.options).onSuccess)==null?void 0:f.call(c,b,t,this.state.context)),await((g=(h=S(this,Le).config).onSettled)==null?void 0:g.call(h,b,null,this.state.variables,this.state.context,this)),await((w=(v=this.options).onSettled)==null?void 0:w.call(v,b,null,t,this.state.context)),oe(this,pt,Yt).call(this,{type:"success",data:b}),b}catch(b){try{throw await((p=(_=S(this,Le).config).onError)==null?void 0:p.call(_,b,t,this.state.context,this)),await((m=(d=this.options).onError)==null?void 0:m.call(d,b,t,this.state.context)),await((k=(y=S(this,Le).config).onSettled)==null?void 0:k.call(y,void 0,b,this.state.variables,this.state.context,this)),await((C=(I=this.options).onSettled)==null?void 0:C.call(I,void 0,b,t,this.state.context)),b}finally{oe(this,pt,Yt).call(this,{type:"error",error:b})}}}},ht=new WeakMap,Sa=new WeakMap,Le=new WeakMap,qr=new WeakMap,pt=new WeakSet,Yt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!sf(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ie.batch(()=>{S(this,ht).forEach(r=>{r.onMutationUpdate(t)}),S(this,Le).notify({mutation:this,type:"updated",action:t})})},Pp);function Yw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var We,ka,Qn,xp,Xw=(xp=class extends Ms{constructor(t={}){super();$(this,We,void 0);$(this,ka,void 0);$(this,Qn,void 0);this.config=t,N(this,We,[]),N(this,ka,0)}build(t,n,r){const i=new Qw({mutationCache:this,mutationId:++ja(this,ka)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){S(this,We).push(t),this.notify({type:"added",mutation:t})}remove(t){N(this,We,S(this,We).filter(n=>n!==t)),this.notify({type:"removed",mutation:t})}clear(){Ie.batch(()=>{S(this,We).forEach(t=>{this.remove(t)})})}getAll(){return S(this,We)}find(t){const n={exact:!0,...t};return S(this,We).find(r=>th(n,r))}findAll(t={}){return S(this,We).filter(n=>th(t,n))}notify(t){Ie.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){return N(this,Qn,(S(this,Qn)??Promise.resolve()).then(()=>{const t=S(this,We).filter(n=>n.state.isPaused);return Ie.batch(()=>t.reduce((n,r)=>n.then(()=>r.continue().catch(tt)),Promise.resolve()))}).then(()=>{N(this,Qn,void 0)})),S(this,Qn)}},We=new WeakMap,ka=new WeakMap,Qn=new WeakMap,xp);function Jw(e){return{onFetch:(t,n)=>{const r=async()=>{var v,w,_,p,d;const i=t.options,a=(_=(w=(v=t.fetchOptions)==null?void 0:v.meta)==null?void 0:w.fetchMore)==null?void 0:_.direction,o=((p=t.state.data)==null?void 0:p.pages)||[],s=((d=t.state.data)==null?void 0:d.pageParams)||[],l={pages:[],pageParams:[]};let u=!1;const c=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},f=t.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`))),h=async(m,y,k)=>{if(u)return Promise.reject();if(y==null&&m.pages.length)return Promise.resolve(m);const I={queryKey:t.queryKey,pageParam:y,direction:k?"backward":"forward",meta:t.options.meta};c(I);const C=await f(I),{maxPages:b}=t.options,D=k?$w:zw;return{pages:D(m.pages,C,b),pageParams:D(m.pageParams,y,b)}};let g;if(a&&o.length){const m=a==="backward",y=m?Zw:ih,k={pages:o,pageParams:s},I=y(i,k);g=await h(k,I,m)}else{g=await h(l,s[0]??i.initialPageParam);const m=e??o.length;for(let y=1;y<m;y++){const k=ih(i,g);g=await h(g,k)}}return g};t.options.persister?t.fetchFn=()=>{var i,a;return(a=(i=t.options).persister)==null?void 0:a.call(i,r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=r}}}function ih(e,{pages:t,pageParams:n}){const r=t.length-1;return e.getNextPageParam(t[r],t,n[r],n)}function Zw(e,{pages:t,pageParams:n}){var r;return(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n)}var se,ln,un,Qr,Yr,cn,Xr,Jr,Op,e_=(Op=class{constructor(e={}){$(this,se,void 0);$(this,ln,void 0);$(this,un,void 0);$(this,Qr,void 0);$(this,Yr,void 0);$(this,cn,void 0);$(this,Xr,void 0);$(this,Jr,void 0);N(this,se,e.queryCache||new qw),N(this,ln,e.mutationCache||new Xw),N(this,un,e.defaultOptions||{}),N(this,Qr,new Map),N(this,Yr,new Map),N(this,cn,0)}mount(){ja(this,cn)._++,S(this,cn)===1&&(N(this,Xr,Fu.subscribe(()=>{Fu.isFocused()&&(this.resumePausedMutations(),S(this,se).onFocus())})),N(this,Jr,rs.subscribe(()=>{rs.isOnline()&&(this.resumePausedMutations(),S(this,se).onOnline())})))}unmount(){var e,t;ja(this,cn)._--,S(this,cn)===0&&((e=S(this,Xr))==null||e.call(this),N(this,Xr,void 0),(t=S(this,Jr))==null||t.call(this),N(this,Jr,void 0))}isFetching(e){return S(this,se).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return S(this,ln).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=S(this,se).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);return t!==void 0?Promise.resolve(t):this.fetchQuery(e)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=S(this,se).get(r.queryHash),a=i==null?void 0:i.state.data,o=Dw(t,a);if(!(typeof o>"u"))return S(this,se).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return Ie.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=S(this,se).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=S(this,se);Ie.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=S(this,se),r={type:"active",...e};return Ie.batch(()=>(n.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=Ie.batch(()=>S(this,se).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(tt).catch(tt)}invalidateQueries(e={},t={}){return Ie.batch(()=>{if(S(this,se).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=Ie.batch(()=>S(this,se).findAll(e).filter(i=>!i.isDisabled()).map(i=>{let a=i.fetch(void 0,n);return n.throwOnError||(a=a.catch(tt)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(tt)}fetchQuery(e){const t=this.defaultQueryOptions(e);typeof t.retry>"u"&&(t.retry=!1);const n=S(this,se).build(this,t);return n.isStaleByTime(t.staleTime)?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(tt).catch(tt)}fetchInfiniteQuery(e){return e.behavior=Jw(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(tt).catch(tt)}resumePausedMutations(){return S(this,ln).resumePausedMutations()}getQueryCache(){return S(this,se)}getMutationCache(){return S(this,ln)}getDefaultOptions(){return S(this,un)}setDefaultOptions(e){N(this,un,e)}setQueryDefaults(e,t){S(this,Qr).set(la(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...S(this,Qr).values()];let n={};return t.forEach(r=>{ua(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){S(this,Yr).set(la(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...S(this,Yr).values()];let n={};return t.forEach(r=>{ua(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...S(this,un).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=of(t.queryKey,t)),typeof t.refetchOnReconnect>"u"&&(t.refetchOnReconnect=t.networkMode!=="always"),typeof t.throwOnError>"u"&&(t.throwOnError=!!t.suspense),typeof t.networkMode>"u"&&t.persister&&(t.networkMode="offlineFirst"),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...S(this,un).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){S(this,se).clear(),S(this,ln).clear()}},se=new WeakMap,ln=new WeakMap,un=new WeakMap,Qr=new WeakMap,Yr=new WeakMap,cn=new WeakMap,Xr=new WeakMap,Jr=new WeakMap,Op),t_=T.createContext(void 0),n_=({client:e,children:t})=>(T.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),A.jsx(t_.Provider,{value:e,children:t}));const r_={theme:"system",setTheme:()=>null},i_=T.createContext(r_);function a_({children:e,defaultTheme:t="system",storageKey:n="vite-ui-theme",...r}){const[i,a]=T.useState(()=>localStorage.getItem(n)||t);T.useEffect(()=>{const s=window.document.documentElement;if(s.classList.remove("light","dark"),i==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";s.classList.add(l);return}s.classList.add(i)},[i]);const o={theme:i,setTheme:s=>{localStorage.setItem(n,s),a(s)}};return A.jsx(i_.Provider,{...r,value:o,children:e})}/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}var hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hn||(hn={}));const ah="popstate";function o_(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Uu("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return l_(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s_(){return Math.random().toString(36).substr(2,8)}function oh(e,t){return{usr:e.state,key:e.key,idx:t}}function Uu(e,t,n,r){return n===void 0&&(n=null),ca({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?di(t):t,{state:n,key:t&&t.key||r||s_()})}function is(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function di(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function l_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=hn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ca({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=hn.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:s,location:w.location,delta:p})}function h(_,p){s=hn.Push;let d=Uu(w.location,_,p);n&&n(d,_),u=c()+1;let m=oh(d,u),y=w.createHref(d);try{o.pushState(m,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}a&&l&&l({action:s,location:w.location,delta:1})}function g(_,p){s=hn.Replace;let d=Uu(w.location,_,p);n&&n(d,_),u=c();let m=oh(d,u),y=w.createHref(d);o.replaceState(m,"",y),a&&l&&l({action:s,location:w.location,delta:0})}function v(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:is(_);return d=d.replace(/ $/,"%20"),ae(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ah,f),l=_,()=>{i.removeEventListener(ah,f),l=null}},createHref(_){return t(i,_)},createURL:v,encodeLocation(_){let p=v(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(_){return o.go(_)}};return w}var sh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sh||(sh={}));function u_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?di(t):t,i=lf(r.pathname||"/",n);if(i==null)return null;let a=Yg(e);c_(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let l=k_(i);o=w_(a[s],l)}return o}function Yg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=En([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(ae(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Yg(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:v_(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Xg(a.path))i(a,o,l)}),t}function Xg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Xg(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function c_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f_=/^:[\w-]+$/,d_=3,h_=2,p_=1,m_=10,g_=-2,lh=e=>e==="*";function v_(e,t){let n=e.split("/"),r=n.length;return n.some(lh)&&(r+=g_),t&&(r+=h_),n.filter(i=>!lh(i)).reduce((i,a)=>i+(f_.test(a)?d_:a===""?p_:m_),r)}function y_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function w_(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=__({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:En([i,c.pathname]),pathnameBase:C_(En([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=En([i,c.pathnameBase]))}return a}function __(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=S_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:g}=c;if(h==="*"){let w=s[f]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[f];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function S_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function k_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function E_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?di(e):e;return{pathname:n?n.startsWith("/")?n:I_(n,t):t,search:T_(r),hash:P_(i)}}function I_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function b_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jg(e,t){let n=b_(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=di(e):(i=ca({},e),ae(!i.pathname||!i.pathname.includes("?"),Cl("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),Cl("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),Cl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=E_(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const En=e=>e.join("/").replace(/\/\/+/g,"/"),C_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,P_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function x_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ev=["post","put","patch","delete"];new Set(ev);const O_=["get",...ev];new Set(O_);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}const uf=T.createContext(null),A_=T.createContext(null),hr=T.createContext(null),Us=T.createContext(null),pr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),tv=T.createContext(null);function R_(e,t){let{relative:n}=t===void 0?{}:t;Pa()||ae(!1);let{basename:r,navigator:i}=T.useContext(hr),{hash:a,pathname:o,search:s}=rv(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:En([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Pa(){return T.useContext(Us)!=null}function hi(){return Pa()||ae(!1),T.useContext(Us).location}function nv(e){T.useContext(hr).static||T.useLayoutEffect(e)}function N_(){let{isDataRoute:e}=T.useContext(pr);return e?W_():L_()}function L_(){Pa()||ae(!1);let e=T.useContext(uf),{basename:t,future:n,navigator:r}=T.useContext(hr),{matches:i}=T.useContext(pr),{pathname:a}=hi(),o=JSON.stringify(Jg(i,n.v7_relativeSplatPath)),s=T.useRef(!1);return nv(()=>{s.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Zg(u,JSON.parse(o),a,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:En([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,o,a,e])}function rv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(hr),{matches:i}=T.useContext(pr),{pathname:a}=hi(),o=JSON.stringify(Jg(i,r.v7_relativeSplatPath));return T.useMemo(()=>Zg(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function D_(e,t){return M_(e,t)}function M_(e,t,n,r){Pa()||ae(!1);let{navigator:i}=T.useContext(hr),{matches:a}=T.useContext(pr),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=hi(),c;if(t){var f;let _=typeof t=="string"?di(t):t;l==="/"||(f=_.pathname)!=null&&f.startsWith(l)||ae(!1),c=_}else c=u;let h=c.pathname||"/",g=h;if(l!=="/"){let _=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(_.length).join("/")}let v=u_(e,{pathname:g}),w=$_(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:En([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:En([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),a,n,r);return t&&w?T.createElement(Us.Provider,{value:{location:fa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:hn.Pop}},w):w}function F_(){let e=ov(),t=x_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const U_=T.createElement(F_,null);class j_ extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(pr.Provider,{value:this.props.routeContext},T.createElement(tv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z_(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(uf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(pr.Provider,{value:t},r)}function $_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id]));c>=0||ae(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:g}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,h)=>{let g,v=!1,w=null,_=null;n&&(g=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||U_,l&&(u<0&&h===0?(K_("route-fallback",!1),v=!0,_=null):u===h&&(v=!0,_=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,h+1)),d=()=>{let m;return g?m=w:v?m=_:f.route.Component?m=T.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,T.createElement(z_,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?T.createElement(j_,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var iv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(iv||{}),as=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(as||{});function B_(e){let t=T.useContext(uf);return t||ae(!1),t}function H_(e){let t=T.useContext(A_);return t||ae(!1),t}function V_(e){let t=T.useContext(pr);return t||ae(!1),t}function av(e){let t=V_(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function ov(){var e;let t=T.useContext(tv),n=H_(as.UseRouteError),r=av(as.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function W_(){let{router:e}=B_(iv.UseNavigateStable),t=av(as.UseNavigateStable),n=T.useRef(!1);return nv(()=>{n.current=!0}),T.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fa({fromRouteId:t},a)))},[e,t])}const uh={};function K_(e,t,n){!t&&!uh[e]&&(uh[e]=!0)}function ju(e){ae(!1)}function G_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=hn.Pop,navigator:a,static:o=!1,future:s}=e;Pa()&&ae(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:a,static:o,future:fa({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=di(r));let{pathname:c="/",search:f="",hash:h="",state:g=null,key:v="default"}=r,w=T.useMemo(()=>{let _=lf(c,l);return _==null?null:{location:{pathname:_,search:f,hash:h,state:g,key:v},navigationType:i}},[l,c,f,h,g,v,i]);return w==null?null:T.createElement(hr.Provider,{value:u},T.createElement(Us.Provider,{children:n,value:w}))}function q_(e){let{children:t,location:n}=e;return D_(zu(t),n)}new Promise(()=>{});function zu(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let a=[...t,i];if(r.type===T.Fragment){n.push.apply(n,zu(r.props.children,a));return}r.type!==ju&&ae(!1),!r.props.index||!r.props.children||ae(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=zu(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $u(){return $u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$u.apply(this,arguments)}function Q_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Y_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X_(e,t){return e.button===0&&(!t||t==="_self")&&!Y_(e)}const J_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Z_="6";try{window.__reactRouterVersion=Z_}catch{}const eS="startTransition",ch=I0[eS];function tS(e){let{basename:t,children:n,future:r,window:i}=e,a=T.useRef();a.current==null&&(a.current=o_({window:i,v5Compat:!0}));let o=a.current,[s,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(f=>{u&&ch?ch(()=>l(f)):l(f)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(G_,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const nS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,os=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,h=Q_(t,J_),{basename:g}=T.useContext(hr),v,w=!1;if(typeof u=="string"&&rS.test(u)&&(v=u,nS))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=lf(y.pathname,g);y.origin===m.origin&&k!=null?u=k+y.search+y.hash:w=!0}catch{}let _=R_(u,{relative:i}),p=iS(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||p(m)}return T.createElement("a",$u({},h,{href:v||_,onClick:w||a?r:d,ref:n,target:l}))});var fh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fh||(fh={}));var dh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dh||(dh={}));function iS(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=N_(),u=hi(),c=rv(e,{relative:o});return T.useCallback(f=>{if(X_(f,n)){f.preventDefault();let h=r!==void 0?r:is(u)===is(c);l(e,{replace:h,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},[u,l,c,r,i,n,e,a,o,s])}const aS=new e_,oS=({children:e})=>A.jsx(tS,{children:A.jsx(n_,{client:aS,children:A.jsx(a_,{defaultTheme:"system",storageKey:"vite-ui-theme",children:e})})}),sv=[];function hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hh(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ss(e){"@babel/helpers - typeof";return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ss(e)}function sS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ph(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lS(e,t,n){return t&&ph(e.prototype,t),n&&ph(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cf(e,t){return cS(e)||dS(e,t)||lv(e,t)||pS()}function xa(e){return uS(e)||fS(e)||lv(e)||hS()}function uS(e){if(Array.isArray(e))return Bu(e)}function cS(e){if(Array.isArray(e))return e}function fS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function lv(e,t){if(e){if(typeof e=="string")return Bu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bu(e,t)}}function Bu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mh=function(){},ff={},uv={},cv=null,fv={mark:mh,measure:mh};try{typeof window<"u"&&(ff=window),typeof document<"u"&&(uv=document),typeof MutationObserver<"u"&&(cv=MutationObserver),typeof performance<"u"&&(fv=performance)}catch{}var mS=ff.navigator||{},gh=mS.userAgent,vh=gh===void 0?"":gh,Pn=ff,Q=uv,yh=cv,ro=fv;Pn.document;var Wt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",dv=~vh.indexOf("MSIE")||~vh.indexOf("Trident/"),io,ao,oo,so,lo,jt="___FONT_AWESOME___",Hu=16,hv="fa",pv="svg-inline--fa",ir="data-fa-i2svg",Vu="data-fa-pseudo-element",gS="data-fa-pseudo-element-pending",df="data-prefix",hf="data-icon",wh="fontawesome-i2svg",vS="async",yS=["HTML","HEAD","STYLE","SCRIPT"],mv=function(){try{return!0}catch{return!1}}(),G="classic",te="sharp",pf=[G,te];function Oa(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var da=Oa((io={},ce(io,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ce(io,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),io)),ha=Oa((ao={},ce(ao,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(ao,te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ao)),pa=Oa((oo={},ce(oo,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(oo,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),oo)),wS=Oa((so={},ce(so,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(so,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),so)),_S=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,gv="fa-layers-text",SS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,kS=Oa((lo={},ce(lo,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(lo,te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),lo)),vv=[1,2,3,4,5,6,7,8,9,10],ES=vv.concat([11,12,13,14,15,16,17,18,19,20]),IS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ma=new Set;Object.keys(ha[G]).map(ma.add.bind(ma));Object.keys(ha[te]).map(ma.add.bind(ma));var bS=[].concat(pf,xa(ma),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bn.GROUP,Bn.SWAP_OPACITY,Bn.PRIMARY,Bn.SECONDARY]).concat(vv.map(function(e){return"".concat(e,"x")})).concat(ES.map(function(e){return"w-".concat(e)})),$i=Pn.FontAwesomeConfig||{};function CS(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function TS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var PS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];PS.forEach(function(e){var t=cf(e,2),n=t[0],r=t[1],i=TS(CS(n));i!=null&&($i[r]=i)})}var yv={styleDefault:"solid",familyDefault:"classic",cssPrefix:hv,replacementClass:pv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$i.familyPrefix&&($i.cssPrefix=$i.familyPrefix);var oi=P(P({},yv),$i);oi.autoReplaceSvg||(oi.observeMutations=!1);var R={};Object.keys(yv).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){oi[e]=n,Bi.forEach(function(r){return r(R)})},get:function(){return oi[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){oi.cssPrefix=t,Bi.forEach(function(n){return n(R)})},get:function(){return oi.cssPrefix}});Pn.FontAwesomeConfig=R;var Bi=[];function xS(e){return Bi.push(e),function(){Bi.splice(Bi.indexOf(e),1)}}var qt=Hu,gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function OS(e){if(!(!e||!Wt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Q.head.insertBefore(t,r),e}}var AS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ga(){for(var e=12,t="";e-- >0;)t+=AS[Math.random()*62|0];return t}function pi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function mf(e){return e.classList?pi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function wv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function RS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(wv(e[n]),'" ')},"").trim()}function js(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gf(e){return e.size!==gt.size||e.x!==gt.x||e.y!==gt.y||e.rotate!==gt.rotate||e.flipX||e.flipY}function NS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function LS(e){var t=e.transform,n=e.width,r=n===void 0?Hu:n,i=e.height,a=i===void 0?Hu:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&dv?l+="translate(".concat(t.x/qt-r/2,"em, ").concat(t.y/qt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/qt,"em), calc(-50% + ").concat(t.y/qt,"em)) "):l+="translate(".concat(t.x/qt,"em, ").concat(t.y/qt,"em) "),l+="scale(".concat(t.size/qt*(t.flipX?-1:1),", ").concat(t.size/qt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var DS=`:root, :host {
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
}`;function _v(){var e=hv,t=pv,n=R.cssPrefix,r=R.replacementClass,i=DS;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var _h=!1;function Tl(){R.autoAddCss&&!_h&&(OS(_v()),_h=!0)}var MS={mixout:function(){return{dom:{css:_v,insertCss:Tl}}},hooks:function(){return{beforeDOMElementCreation:function(){Tl()},beforeI2svg:function(){Tl()}}}},zt=Pn||{};zt[jt]||(zt[jt]={});zt[jt].styles||(zt[jt].styles={});zt[jt].hooks||(zt[jt].hooks={});zt[jt].shims||(zt[jt].shims=[]);var at=zt[jt],Sv=[],FS=function e(){Q.removeEventListener("DOMContentLoaded",e),ls=1,Sv.map(function(t){return t()})},ls=!1;Wt&&(ls=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),ls||Q.addEventListener("DOMContentLoaded",FS));function US(e){Wt&&(ls?setTimeout(e,0):Sv.push(e))}function Aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?wv(e):"<".concat(t," ").concat(RS(r),">").concat(a.map(Aa).join(""),"</").concat(t,">")}function Sh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jS=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Pl=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?jS(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function zS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Wu(e){var t=zS(e);return t.length===1?t[0].toString(16):null}function $S(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function kh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ku(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=kh(t);typeof at.hooks.addPack=="function"&&!i?at.hooks.addPack(e,kh(t)):at.styles[e]=P(P({},at.styles[e]||{}),a),e==="fas"&&Ku("fa",t)}var uo,co,fo,xr=at.styles,BS=at.shims,HS=(uo={},ce(uo,G,Object.values(pa[G])),ce(uo,te,Object.values(pa[te])),uo),vf=null,kv={},Ev={},Iv={},bv={},Cv={},VS=(co={},ce(co,G,Object.keys(da[G])),ce(co,te,Object.keys(da[te])),co);function WS(e){return~bS.indexOf(e)}function KS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!WS(i)?i:null}var Tv=function(){var t=function(a){return Pl(xr,function(o,s,l){return o[l]=Pl(s,a,{}),o},{})};kv=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Ev=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Cv=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in xr||R.autoFetchSvg,r=Pl(BS,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Iv=r.names,bv=r.unicodes,vf=zs(R.styleDefault,{family:R.familyDefault})};xS(function(e){vf=zs(e.styleDefault,{family:R.familyDefault})});Tv();function yf(e,t){return(kv[e]||{})[t]}function GS(e,t){return(Ev[e]||{})[t]}function Hn(e,t){return(Cv[e]||{})[t]}function Pv(e){return Iv[e]||{prefix:null,iconName:null}}function qS(e){var t=bv[e],n=yf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xn(){return vf}var wf=function(){return{prefix:null,iconName:null,rest:[]}};function zs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,i=da[r][e],a=ha[r][e]||ha[r][i],o=e in at.styles?e:null;return a||o||null}var Eh=(fo={},ce(fo,G,Object.keys(pa[G])),ce(fo,te,Object.keys(pa[te])),fo);function $s(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ce(t,G,"".concat(R.cssPrefix,"-").concat(G)),ce(t,te,"".concat(R.cssPrefix,"-").concat(te)),t),o=null,s=G;(e.includes(a[G])||e.some(function(u){return Eh[G].includes(u)}))&&(s=G),(e.includes(a[te])||e.some(function(u){return Eh[te].includes(u)}))&&(s=te);var l=e.reduce(function(u,c){var f=KS(R.cssPrefix,c);if(xr[c]?(c=HS[s].includes(c)?wS[s][c]:c,o=c,u.prefix=c):VS[s].indexOf(c)>-1?(o=c,u.prefix=zs(c,{family:s})):f?u.iconName=f:c!==R.replacementClass&&c!==a[G]&&c!==a[te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Pv(u.iconName):{},g=Hn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!xr.far&&xr.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},wf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(xr.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=Hn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=xn()||"fas"),l}var QS=function(){function e(){sS(this,e),this.definitions={}}return lS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Ku(s,o[s]);var l=pa[G][s];l&&Ku(l,o[s]),Tv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Ih=[],Or={},Ur={},YS=Object.keys(Ur);function XS(e,t){var n=t.mixoutsTo;return Ih=e,Or={},Object.keys(Ur).forEach(function(r){YS.indexOf(r)===-1&&delete Ur[r]}),Ih.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ss(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Or[o]||(Or[o]=[]),Or[o].push(a[o])})}r.provides&&r.provides(Ur)}),n}function Gu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Or[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ar(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Or[e]||[];i.forEach(function(a){a.apply(null,n)})}function $t(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ur[e]?Ur[e].apply(null,t):void 0}function qu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xn();if(t)return t=Hn(n,t)||t,Sh(xv.definitions,n,t)||Sh(at.styles,n,t)}var xv=new QS,JS=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,ar("noAuto")},ZS={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wt?(ar("beforeI2svg",t),$t("pseudoElements2svg",t),$t("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,US(function(){tk({autoReplaceSvgRoot:n}),ar("watch",t)})}},ek={icon:function(t){if(t===null)return null;if(ss(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Hn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zs(t[0]);return{prefix:r,iconName:Hn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(_S))){var i=$s(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||xn(),iconName:Hn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=xn();return{prefix:a,iconName:Hn(a,t)||t}}}},Be={noAuto:JS,config:R,dom:ZS,parse:ek,library:xv,findIconDefinition:qu,toHtml:Aa},tk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(at.styles).length>0||R.autoFetchSvg)&&Wt&&R.autoReplaceSvg&&Be.dom.i2svg({node:r})};function Bs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Wt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gf(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=js(P(P({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function rk(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:o}),children:r}]}]}function _f(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,_=v.height,p=i==="fak",d=[R.replacementClass,a?"".concat(R.cssPrefix,"-").concat(a):""].filter(function(D){return f.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(f.classes).join(" "),m={children:[],attributes:P(P({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(_)})},y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/_*16*.0625,"em")}:{};g&&(m.attributes[ir]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||ga())},children:[l]}),delete m.attributes.title);var k=P(P({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:P(P({},y),f.styles)}),I=r.found&&n.found?$t("generateAbstractMask",k)||{children:[],attributes:{}}:$t("generateAbstractIcon",k)||{children:[],attributes:{}},C=I.children,b=I.attributes;return k.children=C,k.attributes=b,s?rk(k):nk(k)}function bh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=P(P(P({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[ir]="");var c=P({},o.styles);gf(i)&&(c.transform=LS({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=js(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function ik(e){var t=e.content,n=e.title,r=e.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=js(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xl=at.styles;function Qu(e){var t=e[0],n=e[1],r=e.slice(4),i=cf(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Bn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Bn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Bn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var ak={found:!1,width:512,height:512};function ok(e,t){!mv&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Yu(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=xn()),new Promise(function(r,i){if($t("missingIconAbstract"),n==="fa"){var a=Pv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&xl[t]&&xl[t][e]){var o=xl[t][e];return r(Qu(o))}ok(e,t),r(P(P({},ak),{},{icon:R.showMissingIcons&&e?$t("missingIconAbstract")||{}:{}}))})}var Ch=function(){},Xu=R.measurePerformance&&ro&&ro.mark&&ro.measure?ro:{mark:Ch,measure:Ch},Ai='FA "6.5.2"',sk=function(t){return Xu.mark("".concat(Ai," ").concat(t," begins")),function(){return Ov(t)}},Ov=function(t){Xu.mark("".concat(Ai," ").concat(t," ends")),Xu.measure("".concat(Ai," ").concat(t),"".concat(Ai," ").concat(t," begins"),"".concat(Ai," ").concat(t," ends"))},Sf={begin:sk,end:Ov},To=function(){};function Th(e){var t=e.getAttribute?e.getAttribute(ir):null;return typeof t=="string"}function lk(e){var t=e.getAttribute?e.getAttribute(df):null,n=e.getAttribute?e.getAttribute(hf):null;return t&&n}function uk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function ck(){if(R.autoReplaceSvg===!0)return Po.replace;var e=Po[R.autoReplaceSvg];return e||Po.replace}function fk(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function dk(e){return Q.createElement(e)}function Av(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fk:dk:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Av(o,{ceFn:r}))}),i}function hk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Po={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Av(i),n)}),n.getAttribute(ir)===null&&R.keepOriginalSource){var r=Q.createComment(hk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~mf(n).indexOf(R.replacementClass))return Po.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===R.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Aa(s)}).join(`
`);n.setAttribute(ir,""),n.innerHTML=o}};function Ph(e){e()}function Rv(e,t){var n=typeof t=="function"?t:To;if(e.length===0)n();else{var r=Ph;R.mutateApproach===vS&&(r=Pn.requestAnimationFrame||Ph),r(function(){var i=ck(),a=Sf.begin("mutate");e.map(i),a(),n()})}}var kf=!1;function Nv(){kf=!0}function Ju(){kf=!1}var us=null;function xh(e){if(yh&&R.observeMutations){var t=e.treeCallback,n=t===void 0?To:t,r=e.nodeCallback,i=r===void 0?To:r,a=e.pseudoElementsCallback,o=a===void 0?To:a,s=e.observeMutationsRoot,l=s===void 0?Q:s;us=new yh(function(u){if(!kf){var c=xn();pi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Th(f.addedNodes[0])&&(R.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Th(f.target)&&~IS.indexOf(f.attributeName))if(f.attributeName==="class"&&lk(f.target)){var h=$s(mf(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(df,g||c),v&&f.target.setAttribute(hf,v)}else uk(f.target)&&i(f.target)})}}),Wt&&us.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pk(){us&&us.disconnect()}function mk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function gk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=$s(mf(e));return i.prefix||(i.prefix=xn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=GS(i.prefix,e.innerText)||yf(i.prefix,Wu(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function vk(e){var t=pi(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||ga()):(t["aria-hidden"]="true",t.focusable="false")),t}function yk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gk(e),r=n.iconName,i=n.prefix,a=n.rest,o=vk(e),s=Gu("parseNodeAttributes",{},e),l=t.styleParser?mk(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:gt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var wk=at.styles;function Lv(e){var t=R.autoReplaceSvg==="nest"?Oh(e,{styleParser:!1}):Oh(e);return~t.extra.classes.indexOf(gv)?$t("generateLayersText",e,t):$t("generateSvgReplacementMutation",e,t)}var On=new Set;pf.map(function(e){On.add("fa-".concat(e))});Object.keys(da[G]).map(On.add.bind(On));Object.keys(da[te]).map(On.add.bind(On));On=xa(On);function Ah(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(wh,"-").concat(f))},i=function(f){return n.remove("".concat(wh,"-").concat(f))},a=R.autoFetchSvg?On:pf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(wk));a.includes("fa")||a.push("fa");var o=[".".concat(gv,":not([").concat(ir,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(ir,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=pi(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Sf.begin("onTree"),u=s.reduce(function(c,f){try{var h=Lv(f);h&&c.push(h)}catch(g){mv||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Rv(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function _k(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lv(e).then(function(n){n&&Rv([n],t)})}function Sk(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:qu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qu(i||{})),e(r,P(P({},n),{},{mask:i}))}}var kk=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?gt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,_=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(t){var k=t.prefix,I=t.iconName,C=t.icon;return Bs(P({type:"icon"},t),function(){return ar("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(v||ga()):(d["aria-hidden"]="true",d.focusable="false")),_f({icons:{main:Qu(C),mask:l?Qu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:I,transform:P(P({},gt),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:y,classes:_}})})}},Ek={mixout:function(){return{icon:Sk(kk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ah,n.nodeCallback=_k,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,a=n.callback,o=a===void 0?function(){}:a;return Ah(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Yu(i,s),c.iconName?Yu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var _=cf(w,2),p=_[0],d=_[1];g([n,_f({icons:{main:p,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=js(s);l.length>0&&(i.style=l);var u;return gf(o)&&(u=$t("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Ik={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Bs({type:"layer"},function(){ar("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(xa(a)).join(" ")},children:o}]})}}}},bk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Bs({type:"counter",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),ik({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(xa(s))}})})}}}},Ck={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?gt:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Bs({type:"text",content:n},function(){return ar("beforeDOMElementCreation",{content:n,params:r}),bh({content:n,transform:P(P({},gt),a),title:s,extra:{attributes:f,styles:g,classes:["".concat(R.cssPrefix,"-layers-text")].concat(xa(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(dv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bh({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Tk=new RegExp('"',"ug"),Rh=[1105920,1112319];function Pk(e){var t=e.replace(Tk,""),n=$S(t,0),r=n>=Rh[0]&&n<=Rh[1],i=t.length===2?t[0]===t[1]:!1;return{value:Wu(i?t[0]:t),isSecondary:r||i}}function Nh(e,t){var n="".concat(gS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=pi(e.children),o=a.filter(function(C){return C.getAttribute(Vu)===t})[0],s=Pn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(SS),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:G,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ha[h][l[2].toLowerCase()]:kS[h][u],v=Pk(f),w=v.value,_=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=yf(g,w),m=d;if(p){var y=qS(w);y.iconName&&y.prefix&&(d=y.iconName,g=y.prefix)}if(d&&!_&&(!o||o.getAttribute(df)!==g||o.getAttribute(hf)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var k=yk(),I=k.extra;I.attributes[Vu]=t,Yu(d,g).then(function(C){var b=_f(P(P({},k),{},{icons:{main:C,mask:wf()},prefix:g,iconName:m,extra:I,watchable:!0})),D=Q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=b.map(function(F){return Aa(F)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function xk(e){return Promise.all([Nh(e,"::before"),Nh(e,"::after")])}function Ok(e){return e.parentNode!==document.head&&!~yS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Lh(e){if(Wt)return new Promise(function(t,n){var r=pi(e.querySelectorAll("*")).filter(Ok).map(xk),i=Sf.begin("searchPseudoElements");Nv(),Promise.all(r).then(function(){i(),Ju(),t()}).catch(function(){i(),Ju(),n()})})}var Ak={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Lh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;R.searchPseudoElements&&Lh(i)}}},Dh=!1,Rk={mixout:function(){return{dom:{unwatch:function(){Nv(),Dh=!0}}}},hooks:function(){return{bootstrap:function(){xh(Gu("mutationObserverCallbacks",{}))},noAuto:function(){pk()},watch:function(n){var r=n.observeMutationsRoot;Dh?Ju():xh(Gu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nk={mixout:function(){return{parse:{transform:function(n){return Mh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Mh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:h};return{tag:"g",attributes:P({},g.outer),children:[{tag:"g",attributes:P({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),g.path)}]}]}}}},Ol={x:0,y:0,width:"100%",height:"100%"};function Fh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lk(e){return e.tag==="g"?e.children:[e]}var Dk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?$s(i.split(" ").map(function(o){return o.trim()})):wf();return a.prefix||(a.prefix=xn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,h=o.icon,g=NS({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:P(P({},Ol),{},{fill:"white"})},w=c.children?{children:c.children.map(Fh)}:{},_={tag:"g",attributes:P({},g.inner),children:[Fh(P({tag:c.tag,attributes:P(P({},c.attributes),g.path)},w))]},p={tag:"g",attributes:P({},g.outer),children:[_]},d="mask-".concat(s||ga()),m="clip-".concat(s||ga()),y={tag:"mask",attributes:P(P({},Ol),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Lk(h)},y]};return r.push(k,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Ol)}),{children:r,attributes:i}}}},Mk={provides:function(t){var n=!1;Pn.matchMedia&&(n=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Uk=[MS,Ek,Ik,bk,Ck,Ak,Rk,Nk,Dk,Mk,Fk];XS(Uk,{mixoutsTo:Be});Be.noAuto;Be.config;Be.library;Be.dom;var Zu=Be.parse;Be.findIconDefinition;Be.toHtml;var jk=Be.icon;Be.layer;Be.text;Be.counter;var Dv={exports:{}},zk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$k=zk,Bk=$k;function Mv(){}function Fv(){}Fv.resetWarningCache=Mv;var Hk=function(){function e(r,i,a,o,s,l){if(l!==Bk){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Fv,resetWarningCache:Mv};return n.PropTypes=n,n};Dv.exports=Hk();var Vk=Dv.exports;const j=Ap(Vk);function Uh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uh(Object(n),!0).forEach(function(r){Ar(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cs(e){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cs(e)}function Ar(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Kk(e,t){if(e==null)return{};var n=Wk(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ec(e){return Gk(e)||qk(e)||Qk(e)||Yk()}function Gk(e){if(Array.isArray(e))return tc(e)}function qk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qk(e,t){if(e){if(typeof e=="string")return tc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tc(e,t)}}function tc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xk(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,_=e.flip,p=e.size,d=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Ar(t,"fa-".concat(p),typeof p<"u"&&p!==null),Ar(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Ar(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ar(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(k){return y[k]?k:null}).filter(function(k){return k})}function Jk(e){return e=e-0,e===e}function Uv(e){return Jk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Zk=["style"];function eE(e){return e.charAt(0).toUpperCase()+e.slice(1)}function tE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Uv(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[eE(i)]=a:t[i]=a,t},{})}function jv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return jv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=tE(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Uv(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Kk(n,Zk);return i.attrs.style=pn(pn({},i.attrs.style),o),e.apply(void 0,[t.tag,pn(pn({},i.attrs),s)].concat(ec(r)))}var zv=!1;try{zv=!0}catch{}function nE(){if(!zv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function jh(e){if(e&&cs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Zu.icon)return Zu.icon(e);if(e===null)return null;if(e&&cs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Al(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ar({},e,t):{}}var si=_s.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=jh(n),c=Al("classes",[].concat(ec(Xk(e)),ec(a.split(" ")))),f=Al("transform",typeof e.transform=="string"?Zu.transform(e.transform):e.transform),h=Al("mask",jh(r)),g=jk(u,pn(pn(pn(pn({},c),f),h),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!g)return nE("Could not find icon",u),null;var v=g.abstract,w={ref:t};return Object.keys(e).forEach(function(_){si.defaultProps.hasOwnProperty(_)||(w[_]=e[_])}),rE(v[0],w)});si.displayName="FontAwesomeIcon";si.propTypes={beat:j.bool,border:j.bool,beatFade:j.bool,bounce:j.bool,className:j.string,fade:j.bool,flash:j.bool,mask:j.oneOfType([j.object,j.array,j.string]),maskId:j.string,fixedWidth:j.bool,inverse:j.bool,flip:j.oneOf([!0,!1,"horizontal","vertical","both"]),icon:j.oneOfType([j.object,j.array,j.string]),listItem:j.bool,pull:j.oneOf(["right","left"]),pulse:j.bool,rotation:j.oneOf([0,90,180,270]),shake:j.bool,size:j.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.bool,spinPulse:j.bool,spinReverse:j.bool,symbol:j.oneOfType([j.bool,j.string]),title:j.string,titleId:j.string,transform:j.oneOfType([j.string,j.object]),swapOpacity:j.bool};si.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var rE=jv.bind(null,_s.createElement),iE={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},aE={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},oE=aE,zh={};/**
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
 */const $v=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,f=(a&3)<<4|s>>4;let h=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($v(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new lE;const h=a<<2|s>>4;if(r.push(h),u!==64){const g=s<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(e){const t=$v(e);return Bv.encodeByteArray(t,!0)},Hv=function(e){return uE(e).replace(/\./g,"")},Vv=function(e){try{return Bv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function cE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fE=()=>cE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof zh>"u")return;const e=zh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Vv(e[1]);return t&&JSON.parse(t)},Ef=()=>{try{return fE()||dE()||hE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pE=e=>{var t,n;return(n=(t=Ef())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Wv=()=>{var e;return(e=Ef())===null||e===void 0?void 0:e.config},Kv=e=>{var t;return(t=Ef())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Gv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function vE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yE(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function qv(){try{return typeof indexedDB=="object"}catch{return!1}}function Qv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function wE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _E="FirebaseError";class Et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_E,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?SE(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Et(i,s,r)}}function SE(e,t){return e.replace(kE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const kE=/\{\$([^}]+)}/g;function EE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function va(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if($h(a)&&$h(o)){if(!va(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $h(e){return e!==null&&typeof e=="object"}/**
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
 */function Ra(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function IE(e,t){const n=new bE(e,t);return n.subscribe.bind(n)}class bE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Rl),i.error===void 0&&(i.error=Rl),i.complete===void 0&&(i.complete=Rl);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rl(){}/**
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
 */const TE=1e3,PE=2,xE=4*60*60*1e3,OE=.5;function Bh(e,t=TE,n=PE){const r=t*Math.pow(n,e),i=Math.round(OE*r*(Math.random()-.5)*2);return Math.min(xE,r+i)}/**
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
 */function Kt(e){return e&&e._delegate?e._delegate:e}class St{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class AE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new mE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(NE(t))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=Un){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Un){return this.instances.has(t)}getOptions(t=Un){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Un){return this.component?this.component.multipleInstances?t:Un:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RE(e){return e===Un?void 0:e}function NE(e){return e.instantiationMode==="EAGER"}/**
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
 */class LE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new AE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const DE={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ME=V.INFO,FE={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},UE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=FE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class If{constructor(t){this.name=t,this._logLevel=ME,this._logHandler=UE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?DE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const jE=(e,t)=>t.some(n=>e instanceof n);let Hh,Vh;function zE(){return Hh||(Hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $E(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yv=new WeakMap,nc=new WeakMap,Xv=new WeakMap,Nl=new WeakMap,bf=new WeakMap;function BE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(In(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Yv.set(n,e)}).catch(()=>{}),bf.set(t,e),t}function HE(e){if(nc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});nc.set(e,t)}let rc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return nc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function VE(e){rc=e(rc)}function WE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ll(this),t,...n);return Xv.set(r,t.sort?t.sort():[t]),In(r)}:$E().includes(e)?function(...t){return e.apply(Ll(this),t),In(Yv.get(this))}:function(...t){return In(e.apply(Ll(this),t))}}function KE(e){return typeof e=="function"?WE(e):(e instanceof IDBTransaction&&HE(e),jE(e,zE())?new Proxy(e,rc):e)}function In(e){if(e instanceof IDBRequest)return BE(e);if(Nl.has(e))return Nl.get(e);const t=KE(e);return t!==e&&(Nl.set(e,t),bf.set(t,e)),t}const Ll=e=>bf.get(e);function Jv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=In(o);return r&&o.addEventListener("upgradeneeded",l=>{r(In(o.result),l.oldVersion,l.newVersion,In(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const GE=["get","getKey","getAll","getAllKeys","count"],qE=["put","add","delete","clear"],Dl=new Map;function Wh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Dl.get(t))return Dl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GE.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Dl.set(t,a),a}VE(e=>({...e,get:(t,n,r)=>Wh(t,n)||e.get(t,n,r),has:(t,n)=>!!Wh(t,n)||e.has(t,n)}));/**
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
 */class QE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ic="@firebase/app",Kh="0.10.1";/**
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
 */const or=new If("@firebase/app"),XE="@firebase/app-compat",JE="@firebase/analytics-compat",ZE="@firebase/analytics",eI="@firebase/app-check-compat",tI="@firebase/app-check",nI="@firebase/auth",rI="@firebase/auth-compat",iI="@firebase/database",aI="@firebase/database-compat",oI="@firebase/functions",sI="@firebase/functions-compat",lI="@firebase/installations",uI="@firebase/installations-compat",cI="@firebase/messaging",fI="@firebase/messaging-compat",dI="@firebase/performance",hI="@firebase/performance-compat",pI="@firebase/remote-config",mI="@firebase/remote-config-compat",gI="@firebase/storage",vI="@firebase/storage-compat",yI="@firebase/firestore",wI="@firebase/firestore-compat",_I="firebase",SI="10.11.0";/**
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
 */const ac="[DEFAULT]",kI={[ic]:"fire-core",[XE]:"fire-core-compat",[ZE]:"fire-analytics",[JE]:"fire-analytics-compat",[tI]:"fire-app-check",[eI]:"fire-app-check-compat",[nI]:"fire-auth",[rI]:"fire-auth-compat",[iI]:"fire-rtdb",[aI]:"fire-rtdb-compat",[oI]:"fire-fn",[sI]:"fire-fn-compat",[lI]:"fire-iid",[uI]:"fire-iid-compat",[cI]:"fire-fcm",[fI]:"fire-fcm-compat",[dI]:"fire-perf",[hI]:"fire-perf-compat",[pI]:"fire-rc",[mI]:"fire-rc-compat",[gI]:"fire-gcs",[vI]:"fire-gcs-compat",[yI]:"fire-fst",[wI]:"fire-fst-compat","fire-js":"fire-js",[_I]:"fire-js-all"};/**
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
 */const fs=new Map,EI=new Map,oc=new Map;function Gh(e,t){try{e.container.addComponent(t)}catch(n){or.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Bt(e){const t=e.name;if(oc.has(t))return or.debug(`There were multiple attempts to register component ${t}.`),!1;oc.set(t,e);for(const n of fs.values())Gh(n,e);for(const n of EI.values())Gh(n,e);return!0}function mi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ot(e){return e.settings!==void 0}/**
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
 */const II={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new mr("app","Firebase",II);/**
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
 */class bI{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Na=SI;function Zv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ac,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Wv()),!n)throw bn.create("no-options");const a=fs.get(i);if(a){if(va(n,a.options)&&va(r,a.config))return a;throw bn.create("duplicate-app",{appName:i})}const o=new LE(i);for(const l of oc.values())o.addComponent(l);const s=new bI(n,r,o);return fs.set(i,s),s}function ey(e=ac){const t=fs.get(e);if(!t&&e===ac&&Wv())return Zv();if(!t)throw bn.create("no-app",{appName:e});return t}function wt(e,t,n){var r;let i=(r=kI[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),or.warn(s.join(" "));return}Bt(new St(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const CI="firebase-heartbeat-database",TI=1,ya="firebase-heartbeat-store";let Ml=null;function ty(){return Ml||(Ml=Jv(CI,TI,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(e=>{throw bn.create("idb-open",{originalErrorMessage:e.message})})),Ml}async function PI(e){try{const n=(await ty()).transaction(ya),r=await n.objectStore(ya).get(ny(e));return await n.done,r}catch(t){if(t instanceof Et)or.warn(t.message);else{const n=bn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});or.warn(n.message)}}}async function qh(e,t){try{const r=(await ty()).transaction(ya,"readwrite");await r.objectStore(ya).put(t,ny(e)),await r.done}catch(n){if(n instanceof Et)or.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function ny(e){return`${e.name}!${e.options.appId}`}/**
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
 */const xI=1024,OI=30*24*60*60*1e3;class AI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=OI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qh(),{heartbeatsToSend:r,unsentEntries:i}=RI(this._heartbeatsCache.heartbeats),a=Hv(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Qh(){return new Date().toISOString().substring(0,10)}function RI(e,t=xI){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Yh(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qv()?Qv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yh(e){return Hv(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function LI(e){Bt(new St("platform-logger",t=>new QE(t),"PRIVATE")),Bt(new St("heartbeat",t=>new AI(t),"PRIVATE")),wt(ic,Kh,e),wt(ic,Kh,"esm2017"),wt("fire-js","")}LI("");var DI="firebase",MI="10.11.0";/**
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
 */wt(DI,MI,"app");const ry="@firebase/installations",Cf="0.6.6";/**
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
 */const iy=1e4,ay=`w:${Cf}`,oy="FIS_v2",FI="https://firebaseinstallations.googleapis.com/v1",UI=60*60*1e3,jI="installations",zI="Installations";/**
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
 */const $I={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},sr=new mr(jI,zI,$I);function sy(e){return e instanceof Et&&e.code.includes("request-failed")}/**
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
 */function ly({projectId:e}){return`${FI}/projects/${e}/installations`}function uy(e){return{token:e.token,requestStatus:2,expiresIn:HI(e.expiresIn),creationTime:Date.now()}}async function cy(e,t){const r=(await t.json()).error;return sr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fy({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function BI(e,{refreshToken:t}){const n=fy(e);return n.append("Authorization",VI(t)),n}async function dy(e){const t=await e();return t.status>=500&&t.status<600?e():t}function HI(e){return Number(e.replace("s","000"))}function VI(e){return`${oy} ${e}`}/**
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
 */async function WI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ly(e),i=fy(e),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:oy,appId:e.appId,sdkVersion:ay},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await dy(()=>fetch(r,s));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:uy(u.authToken)}}else throw await cy("Create Installation",l)}/**
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
 */function hy(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function KI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const GI=/^[cdef][\w-]{21}$/,sc="";function qI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=QI(e);return GI.test(n)?n:sc}catch{return sc}}function QI(e){return KI(e).substr(0,22)}/**
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
 */function Hs(e){return`${e.appName}!${e.appId}`}/**
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
 */const py=new Map;function my(e,t){const n=Hs(e);gy(n,t),YI(n,t)}function gy(e,t){const n=py.get(e);if(n)for(const r of n)r(t)}function YI(e,t){const n=XI();n&&n.postMessage({key:e,fid:t}),JI()}let Vn=null;function XI(){return!Vn&&"BroadcastChannel"in self&&(Vn=new BroadcastChannel("[Firebase] FID Change"),Vn.onmessage=e=>{gy(e.data.key,e.data.fid)}),Vn}function JI(){py.size===0&&Vn&&(Vn.close(),Vn=null)}/**
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
 */const ZI="firebase-installations-database",eb=1,lr="firebase-installations-store";let Fl=null;function Tf(){return Fl||(Fl=Jv(ZI,eb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(lr)}}})),Fl}async function ds(e,t){const n=Hs(e),i=(await Tf()).transaction(lr,"readwrite"),a=i.objectStore(lr),o=await a.get(n);return await a.put(t,n),await i.done,(!o||o.fid!==t.fid)&&my(e,t.fid),t}async function vy(e){const t=Hs(e),r=(await Tf()).transaction(lr,"readwrite");await r.objectStore(lr).delete(t),await r.done}async function Vs(e,t){const n=Hs(e),i=(await Tf()).transaction(lr,"readwrite"),a=i.objectStore(lr),o=await a.get(n),s=t(o);return s===void 0?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&my(e,s.fid),s}/**
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
 */async function Pf(e){let t;const n=await Vs(e.appConfig,r=>{const i=tb(r),a=nb(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===sc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function tb(e){const t=e||{fid:qI(),registrationStatus:0};return yy(t)}function nb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(sr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=rb(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ib(e)}:{installationEntry:t}}async function rb(e,t){try{const n=await WI(e,t);return ds(e.appConfig,n)}catch(n){throw sy(n)&&n.customData.serverCode===409?await vy(e.appConfig):await ds(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ib(e){let t=await Xh(e.appConfig);for(;t.registrationStatus===1;)await hy(100),t=await Xh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pf(e);return r||n}return t}function Xh(e){return Vs(e,t=>{if(!t)throw sr.create("installation-not-found");return yy(t)})}function yy(e){return ab(e)?{fid:e.fid,registrationStatus:0}:e}function ab(e){return e.registrationStatus===1&&e.registrationTime+iy<Date.now()}/**
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
 */async function ob({appConfig:e,heartbeatServiceProvider:t},n){const r=sb(e,n),i=BI(e,n),a=t.getImmediate({optional:!0});if(a){const u=await a.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:ay,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},l=await dy(()=>fetch(r,s));if(l.ok){const u=await l.json();return uy(u)}else throw await cy("Generate Auth Token",l)}function sb(e,{fid:t}){return`${ly(e)}/${t}/authTokens:generate`}/**
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
 */async function xf(e,t=!1){let n;const r=await Vs(e.appConfig,a=>{if(!wy(a))throw sr.create("not-registered");const o=a.authToken;if(!t&&cb(o))return a;if(o.requestStatus===1)return n=lb(e,t),a;{if(!navigator.onLine)throw sr.create("app-offline");const s=db(a);return n=ub(e,s),s}});return n?await n:r.authToken}async function lb(e,t){let n=await Jh(e.appConfig);for(;n.authToken.requestStatus===1;)await hy(100),n=await Jh(e.appConfig);const r=n.authToken;return r.requestStatus===0?xf(e,t):r}function Jh(e){return Vs(e,t=>{if(!wy(t))throw sr.create("not-registered");const n=t.authToken;return hb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ub(e,t){try{const n=await ob(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ds(e.appConfig,r),n}catch(n){if(sy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vy(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ds(e.appConfig,r)}throw n}}function wy(e){return e!==void 0&&e.registrationStatus===2}function cb(e){return e.requestStatus===2&&!fb(e)}function fb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+UI}function db(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function hb(e){return e.requestStatus===1&&e.requestTime+iy<Date.now()}/**
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
 */async function pb(e){const t=e,{installationEntry:n,registrationPromise:r}=await Pf(t);return r?r.catch(console.error):xf(t).catch(console.error),n.fid}/**
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
 */async function mb(e,t=!1){const n=e;return await gb(n),(await xf(n,t)).token}async function gb(e){const{registrationPromise:t}=await Pf(e);t&&await t}/**
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
 */function vb(e){if(!e||!e.options)throw Ul("App Configuration");if(!e.name)throw Ul("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ul(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ul(e){return sr.create("missing-app-config-values",{valueName:e})}/**
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
 */const _y="installations",yb="installations-internal",wb=e=>{const t=e.getProvider("app").getImmediate(),n=vb(t),r=mi(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_b=e=>{const t=e.getProvider("app").getImmediate(),n=mi(t,_y).getImmediate();return{getId:()=>pb(n),getToken:i=>mb(n,i)}};function Sb(){Bt(new St(_y,wb,"PUBLIC")),Bt(new St(yb,_b,"PRIVATE"))}Sb();wt(ry,Cf);wt(ry,Cf,"esm2017");/**
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
 */const hs="analytics",kb="firebase_id",Eb="origin",Ib=60*1e3,bb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Of="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ne=new If("@firebase/analytics");/**
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
 */const Cb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ue=new mr("analytics","Analytics",Cb);/**
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
 */function Tb(e){if(!e.startsWith(Of)){const t=Ue.create("invalid-gtag-resource",{gtagURL:e});return Ne.warn(t.message),""}return e}function Sy(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Pb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function xb(e,t){const n=Pb("firebase-js-sdk-policy",{createScriptURL:Tb}),r=document.createElement("script"),i=`${Of}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ob(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ab(e,t,n,r,i,a){const o=r[i];try{if(o)await t[o];else{const l=(await Sy(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(s){Ne.error(s)}e("config",i,a)}async function Rb(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const s=await Sy(n);for(const l of o){const u=s.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)a.push(c);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){Ne.error(a)}}function Nb(e,t,n,r){async function i(a,...o){try{if(a==="event"){const[s,l]=o;await Rb(e,t,n,s,l)}else if(a==="config"){const[s,l]=o;await Ab(e,t,n,r,s,l)}else if(a==="consent"){const[s]=o;e("consent","update",s)}else if(a==="get"){const[s,l,u]=o;e("get",s,l,u)}else if(a==="set"){const[s]=o;e("set",s)}else e(a,...o)}catch(s){Ne.error(s)}}return i}function Lb(e,t,n,r,i){let a=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=Nb(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function Db(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Of)&&n.src.includes(e))return n;return null}/**
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
 */const Mb=30,Fb=1e3;class Ub{constructor(t={},n=Fb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ky=new Ub;function jb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function zb(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:jb(r)},a=bb.replace("{app-id}",n),o=await fetch(a,i);if(o.status!==200&&o.status!==304){let s="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(s=l.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function $b(e,t=ky,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw Ue.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Ue.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Vb;return setTimeout(async()=>{s.abort()},n!==void 0?n:Ib),Ey({appId:r,apiKey:i,measurementId:a},o,s,t)}async function Ey(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ky){var a;const{appId:o,measurementId:s}=e;try{await Bb(r,t)}catch(l){if(s)return Ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:s};throw l}try{const l=await zb(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Hb(u)){if(i.deleteThrottleMetadata(o),s)return Ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:s};throw l}const c=Number((a=u==null?void 0:u.customData)===null||a===void 0?void 0:a.httpStatus)===503?Bh(n,i.intervalMillis,Mb):Bh(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ne.debug(`Calling attemptFetch again in ${c} millis`),Ey(e,f,r,i)}}function Bb(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(Ue.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Hb(e){if(!(e instanceof Et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Vb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Wb(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,o=Object.assign(Object.assign({},r),{send_to:a});e("event",n,o)}}/**
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
 */async function Kb(){if(qv())try{await Qv()}catch(e){return Ne.warn(Ue.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ne.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gb(e,t,n,r,i,a,o){var s;const l=$b(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ne.error(g)),t.push(l);const u=Kb().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);Db(a)||xb(a,c.measurementId),i("js",new Date);const h=(s=o==null?void 0:o.config)!==null&&s!==void 0?s:{};return h[Eb]="firebase",h.update=!0,f!=null&&(h[kb]=f),i("config",c.measurementId,h),c.measurementId}/**
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
 */class qb{constructor(t){this.app=t}_delete(){return delete Hi[this.app.options.appId],Promise.resolve()}}let Hi={},Zh=[];const ep={};let jl="dataLayer",Qb="gtag",tp,Iy,np=!1;function Yb(){const e=[];if(Gv()&&e.push("This is a browser extension environment."),wE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:t});Ne.warn(n.message)}}function Xb(e,t,n){Yb();const r=e.options.appId;if(!r)throw Ue.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(Hi[r]!=null)throw Ue.create("already-exists",{id:r});if(!np){Ob(jl);const{wrappedGtag:a,gtagCore:o}=Lb(Hi,Zh,ep,jl,Qb);Iy=a,tp=o,np=!0}return Hi[r]=Gb(e,Zh,ep,t,tp,jl,n),new qb(e)}function Jb(e=ey()){e=Kt(e);const t=mi(e,hs);return t.isInitialized()?t.getImmediate():Zb(e)}function Zb(e,t={}){const n=mi(e,hs);if(n.isInitialized()){const i=n.getImmediate();if(va(t,n.getOptions()))return i;throw Ue.create("already-initialized")}return n.initialize({options:t})}function eC(e,t,n,r){e=Kt(e),Wb(Iy,Hi[e.app.options.appId],t,n,r).catch(i=>Ne.error(i))}const rp="@firebase/analytics",ip="0.10.2";function tC(){Bt(new St(hs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Xb(r,i,n)},"PUBLIC")),Bt(new St("analytics-internal",e,"PRIVATE")),wt(rp,ip),wt(rp,ip,"esm2017");function e(t){try{const n=t.getProvider(hs).getImmediate();return{logEvent:(r,i,a)=>eC(n,r,i,a)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}tC();const nC={apiKey:"AIzaSyCAEYRQvBKsZ0kUfDGqI2GHJForvWjPcwg",authDomain:"gains-tracker-55dc4.firebaseapp.com",projectId:"gains-tracker-55dc4",storageBucket:"gains-tracker-55dc4.appspot.com",messagingSenderId:"989956774442",appId:"1:989956774442:web:cf6b3c58354f58abe40153",measurementId:"G-Z4JH3P6530"},Af=Zv(nC);Jb(Af);function Rf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rC=by,Cy=new mr("auth","Firebase",by());/**
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
 */const ps=new If("@firebase/auth");function iC(e,...t){ps.logLevel<=V.WARN&&ps.warn(`Auth (${Na}): ${e}`,...t)}function xo(e,...t){ps.logLevel<=V.ERROR&&ps.error(`Auth (${Na}): ${e}`,...t)}/**
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
 */function kt(e,...t){throw Lf(e,...t)}function lt(e,...t){return Lf(e,...t)}function Nf(e,t,n){const r=Object.assign(Object.assign({},rC()),{[t]:n});return new mr("auth","Firebase",r).create(t,{appName:e.name})}function Jn(e){return Nf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aC(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&kt(e,"argument-error"),Nf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cy.create(e,...t)}function L(e,t,...n){if(!e)throw Lf(t,...n)}function At(e){const t="INTERNAL ASSERTION FAILED: "+e;throw xo(t),new Error(t)}function Ht(e,t){e||At(t)}/**
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
 */function lc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function oC(){return ap()==="http:"||ap()==="https:"}function ap(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function sC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oC()||Gv()||"connection"in navigator)?navigator.onLine:!0}function lC(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class La{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ht(n>t,"Short delay should be less than long delay!"),this.isMobile=gE()||vE()}get(){return sC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Df(e,t){Ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ty{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cC=new La(3e4,6e4);function Mf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function gi(e,t,n,r,i={}){return Py(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Ra(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ty.fetch()(xy(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Py(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},uC),t);try{const i=new dC(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw ho(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ho(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ho(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nf(e,c,u);kt(e,c)}}catch(i){if(i instanceof Et)throw i;kt(e,"network-request-failed",{message:String(i)})}}async function fC(e,t,n,r,i={}){const a=await gi(e,t,n,r,i);return"mfaPendingCredential"in a&&kt(e,"multi-factor-auth-required",{_serverResponse:a}),a}function xy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Df(e.config,i):`${e.config.apiScheme}://${i}`}class dC{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),cC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function hC(e,t){return gi(e,"POST","/v1/accounts:delete",t)}async function Oy(e,t){return gi(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Vi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function pC(e,t=!1){const n=Kt(e),r=await n.getIdToken(t),i=Ff(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Vi(zl(i.auth_time)),issuedAtTime:Vi(zl(i.iat)),expirationTime:Vi(zl(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function zl(e){return Number(e)*1e3}function Ff(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vv(n);return i?JSON.parse(i):(xo("Failed to decode base64 JWT payload"),null)}catch(i){return xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function op(e){const t=Ff(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function wa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Et&&mC(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function mC({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class gC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ms(e){var t;const n=e.auth,r=await e.getIdToken(),i=await wa(e,Oy(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?Ay(a.providerUserInfo):[],s=yC(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new uc(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function vC(e){const t=Kt(e);await ms(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yC(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ay(e){return e.map(t=>{var{providerId:n}=t,r=Rf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wC(e,t){const n=await Py(e,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=xy(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Ty.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _C(e,t){return gi(e,"POST","/v2/accounts:revokeToken",Mf(e,t))}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):op(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){L(t.length!==0,"internal-error");const n=op(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await wC(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new jr;return r&&(L(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(L(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function Qt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Rt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=Rf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new uc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await wa(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return pC(this,t)}reload(){return vC(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ms(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Jn(this.auth));const t=await this.getIdToken();return await wa(this,hC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(s=n.tenantId)!==null&&s!==void 0?s:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:I,stsTokenManager:C}=n;L(m&&C,t,"internal-error");const b=jr.fromJSON(this.name,C);L(typeof m=="string",t,"internal-error"),Qt(f,t.name),Qt(h,t.name),L(typeof y=="boolean",t,"internal-error"),L(typeof k=="boolean",t,"internal-error"),Qt(g,t.name),Qt(v,t.name),Qt(w,t.name),Qt(_,t.name),Qt(p,t.name),Qt(d,t.name);const D=new Rt({uid:m,auth:t,email:h,emailVerified:y,displayName:f,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:b,createdAt:p,lastLoginAt:d});return I&&Array.isArray(I)&&(D.providerData=I.map(F=>Object.assign({},F))),_&&(D._redirectEventId=_),D}static async _fromIdTokenResponse(t,n,r=!1){const i=new jr;i.updateFromServerResponse(n);const a=new Rt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ms(a),a}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Ay(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),s=new jr;s.updateFromIdToken(r);const l=new Rt({uid:i.localId,auth:t,stsTokenManager:s,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new uc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,u),l}}/**
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
 */const sp=new Map;function Nt(e){Ht(e instanceof Function,"Expected a class definition");let t=sp.get(e);return t?(Ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sp.set(e,t),t)}/**
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
 */class Ry{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ry.type="NONE";const lp=Ry;/**
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
 */function Oo(e,t,n){return`firebase:${e}:${t}:${n}`}class zr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Oo(this.userKey,i.apiKey,a),this.fullPersistenceKey=Oo("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zr(Nt(lp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||Nt(lp);const o=Oo(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Rt._fromJSON(t,c);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new zr(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new zr(a,t,r))}}/**
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
 */function up(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ny(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fy(t))return"Blackberry";if(Uy(t))return"Webos";if(Uf(t))return"Safari";if((t.includes("chrome/")||Ly(t))&&!t.includes("edge/"))return"Chrome";if(My(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ny(e=ke()){return/firefox\//i.test(e)}function Uf(e=ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ly(e=ke()){return/crios\//i.test(e)}function Dy(e=ke()){return/iemobile/i.test(e)}function My(e=ke()){return/android/i.test(e)}function Fy(e=ke()){return/blackberry/i.test(e)}function Uy(e=ke()){return/webos/i.test(e)}function Ws(e=ke()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function SC(e=ke()){var t;return Ws(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function kC(){return yE()&&document.documentMode===10}function jy(e=ke()){return Ws(e)||My(e)||Uy(e)||Fy(e)||/windows phone/i.test(e)||Dy(e)}function EC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zy(e,t=[]){let n;switch(e){case"Browser":n=up(ke());break;case"Worker":n=`${up(ke())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Na}/${r}`}/**
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
 */class IC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bC(e,t={}){return gi(e,"GET","/v2/passwordPolicy",Mf(e,t))}/**
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
 */const CC=6;class TC{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class PC{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new IC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Oy(this,{idToken:t}),r=await Rt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(s,s))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ms(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ot(this.app))return Promise.reject(Jn(this));const n=t?Kt(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ot(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bC(this),n=new TC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _C(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Nt(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&iC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ks(e){return Kt(e)}class cp{constructor(t){this.auth=t,this.observer=null,this.addObserver=IE(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xC(e){jf=e}function OC(e){return jf.loadJS(e)}function AC(){return jf.gapiScript}function RC(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NC(e,t){const n=mi(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(va(a,t??{}))return i;kt(i,"already-initialized")}return n.initialize({options:t})}function LC(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function DC(e,t,n){const r=Ks(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=$y(t),{host:o,port:s}=MC(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FC()}function $y(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function MC(e){const t=$y(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:fp(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:fp(o)}}}function fp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function FC(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class By{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(t){return At("not implemented")}_linkToIdToken(t,n){return At("not implemented")}_getReauthenticationResolver(t){return At("not implemented")}}/**
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
 */async function $r(e,t){return fC(e,"POST","/v1/accounts:signInWithIdp",Mf(e,t))}/**
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
 */const UC="http://localhost";class ur extends By{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ur(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=Rf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ur(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return $r(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$r(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$r(t,n)}buildRequest(){const t={requestUri:UC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ra(n)}return t}}/**
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
 */class zf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends zf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends Da{constructor(){super("facebook.com")}static credential(t){return ur._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ur._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class nn extends Da{constructor(){super("github.com")}static credential(t){return ur._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return nn.credential(t.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
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
 */class rn extends Da{constructor(){super("twitter.com")}static credential(t,n){return ur._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await Rt._fromIdTokenResponse(t,r,i),o=dp(r);return new li({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=dp(r);return new li({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function dp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class gs extends Et{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new gs(t,n,r,i)}}function Hy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(e,a,t,r):a})}async function jC(e,t,n=!1){const r=await wa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return li._forOperation(e,"link",r)}/**
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
 */async function zC(e,t,n=!1){const{auth:r}=e;if(Ot(r.app))return Promise.reject(Jn(r));const i="reauthenticate";try{const a=await wa(e,Hy(r,i,t,e),n);L(a.idToken,r,"internal-error");const o=Ff(a.idToken);L(o,r,"internal-error");const{sub:s}=o;return L(e.uid===s,r,"user-mismatch"),li._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),a}}/**
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
 */async function $C(e,t,n=!1){if(Ot(e.app))return Promise.reject(Jn(e));const r="signIn",i=await Hy(e,r,t),a=await li._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}function BC(e,t,n,r){return Kt(e).onIdTokenChanged(t,n,r)}function HC(e,t,n){return Kt(e).beforeAuthStateChanged(t,n)}function VC(e){return Kt(e).signOut()}const vs="__sak";/**
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
 */class Vy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vs,"1"),this.storage.removeItem(vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function WC(){const e=ke();return Uf(e)||Ws(e)}const KC=1e3,GC=10;class Wy extends Vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WC()&&EC(),this.fallbackToPolling=jy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);kC()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,GC):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},KC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Wy.type="LOCAL";const qC=Wy;/**
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
 */class Ky extends Vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ky.type="SESSION";const Gy=Ky;/**
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
 */function QC(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Gs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await QC(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
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
 */function $f(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class YC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=$f("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(h.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _t(){return window}function XC(e){_t().location.href=e}/**
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
 */function qy(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function JC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function eT(){return qy()?self:null}/**
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
 */const Qy="firebaseLocalStorageDb",tT=1,ys="firebaseLocalStorage",Yy="fbase_key";class Ma{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qs(e,t){return e.transaction([ys],t?"readwrite":"readonly").objectStore(ys)}function nT(){const e=indexedDB.deleteDatabase(Qy);return new Ma(e).toPromise()}function cc(){const e=indexedDB.open(Qy,tT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ys,{keyPath:Yy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ys)?t(r):(r.close(),await nT(),t(await cc()))})})}async function hp(e,t,n){const r=qs(e,!0).put({[Yy]:t,value:n});return new Ma(r).toPromise()}async function rT(e,t){const n=qs(e,!1).get(t),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function pp(e,t){const n=qs(e,!0).delete(t);return new Ma(n).toPromise()}const iT=800,aT=3;class Xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>aT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(eT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await JC(),!this.activeServiceWorker)return;this.sender=new YC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await cc();return await hp(t,vs,"1"),await pp(t,vs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>rT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>pp(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=qs(i,!1).getAll();return new Ma(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xy.type="LOCAL";const oT=Xy;new La(3e4,6e4);/**
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
 */function Jy(e,t){return t?Nt(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Bf extends By{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $r(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $r(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $r(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function sT(e){return $C(e.auth,new Bf(e),e.bypassAuthState)}function lT(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),zC(n,new Bf(e),e.bypassAuthState)}async function uT(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),jC(n,new Bf(e),e.bypassAuthState)}/**
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
 */class Zy{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sT;case"linkViaPopup":case"linkViaRedirect":return uT;case"reauthViaPopup":case"reauthViaRedirect":return lT;default:kt(this.auth,"internal-error")}}resolve(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cT=new La(2e3,1e4);async function fT(e,t,n){if(Ot(e.app))return Promise.reject(lt(e,"operation-not-supported-in-this-environment"));const r=Ks(e);aC(e,t,zf);const i=Jy(r,n);return new Wn(r,"signInViaPopup",t,i).executeNotNull()}class Wn extends Zy{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const t=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cT.get())};t()}}Wn.currentPopupAction=null;/**
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
 */const dT="pendingRedirect",Ao=new Map;class hT extends Zy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ao.get(this.auth._key());if(!t){try{const r=await pT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ao.set(this.auth._key(),t)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pT(e,t){const n=vT(t),r=gT(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mT(e,t){Ao.set(e._key(),t)}function gT(e){return Nt(e._redirectPersistence)}function vT(e){return Oo(dT,e.config.apiKey,e.name)}async function yT(e,t,n=!1){if(Ot(e.app))return Promise.reject(Jn(e));const r=Ks(e),i=Jy(r,t),o=await new hT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const wT=10*60*1e3;class _T{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ST(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!e0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wT&&this.cachedEventUids.clear(),this.cachedEventUids.has(mp(t))}saveEventToCache(t){this.cachedEventUids.add(mp(t)),this.lastProcessedEventTime=Date.now()}}function mp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function e0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ST(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return e0(e);default:return!1}}/**
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
 */async function kT(e,t={}){return gi(e,"GET","/v1/projects",t)}/**
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
 */const ET=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IT=/^https?/;async function bT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await kT(e);for(const n of t)try{if(CT(n))return}catch{}kt(e,"unauthorized-domain")}function CT(e){const t=lc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IT.test(n))return!1;if(ET.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const TT=new La(3e4,6e4);function gp(){const e=_t().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function PT(e){return new Promise((t,n)=>{var r,i,a;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gp(),n(lt(e,"network-request-failed"))},timeout:TT.get()})}if(!((i=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=_t().gapi)===null||a===void 0)&&a.load)o();else{const s=RC("iframefcb");return _t()[s]=()=>{gapi.load?o():n(lt(e,"network-request-failed"))},OC(`${AC()}?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Ro=null,t})}let Ro=null;function xT(e){return Ro=Ro||PT(e),Ro}/**
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
 */const OT=new La(5e3,15e3),AT="__/auth/iframe",RT="emulator/auth/iframe",NT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DT(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Df(t,RT):`https://${e.config.authDomain}/${AT}`,r={apiKey:t.apiKey,appName:e.name,v:Na},i=LT.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ra(r).slice(1)}`}async function MT(e){const t=await xT(e),n=_t().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:DT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NT,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=lt(e,"network-request-failed"),s=_t().setTimeout(()=>{a(o)},OT.get());function l(){_t().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const FT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UT=500,jT=600,zT="_blank",$T="http://localhost";class vp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BT(e,t,n,r=UT,i=jT){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},FT),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ke().toLowerCase();n&&(s=Ly(u)?zT:n),Ny(u)&&(t=t||$T,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(SC(u)&&s!=="_self")return HT(t||"",s),new vp(null);const f=window.open(t||"",s,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new vp(f)}function HT(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VT="__/auth/handler",WT="emulator/auth/handler",KT=encodeURIComponent("fac");async function yp(e,t,n,r,i,a){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Na,eventId:i};if(t instanceof zf){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",EE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(a||{}))o[c]=f}if(t instanceof Da){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${KT}=${encodeURIComponent(l)}`:"";return`${GT(e)}?${Ra(s).slice(1)}${u}`}function GT({config:e}){return e.emulator?Df(e,WT):`https://${e.authDomain}/${VT}`}/**
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
 */const $l="webStorageSupport";class qT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gy,this._completeRedirectFn=yT,this._overrideRedirectResult=mT}async _openPopup(t,n,r,i){var a;Ht((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await yp(t,n,r,lc(),i);return BT(t,o,$f())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await yp(t,n,r,lc(),i);return XC(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await MT(t),r=new _T(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($l,{type:$l},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[$l];o!==void 0&&n(!!o),kt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bT(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return jy()||Uf()||Ws()}}const QT=qT;var wp="@firebase/auth",_p="1.7.1";/**
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
 */class YT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JT(e){Bt(new St("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zy(e)},u=new PC(r,i,a,l);return LC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Bt(new St("auth-internal",t=>{const n=Ks(t.getProvider("auth").getImmediate());return(r=>new YT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(wp,_p,XT(e)),wt(wp,_p,"esm2017")}/**
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
 */const ZT=5*60,eP=Kv("authIdTokenMaxAge")||ZT;let Sp=null;const tP=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eP)return;const i=n==null?void 0:n.token;Sp!==i&&(Sp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t0(e=ey()){const t=mi(e,"auth");if(t.isInitialized())return t.getImmediate();const n=NC(e,{popupRedirectResolver:QT,persistence:[oT,qC,Gy]}),r=Kv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const o=tP(a.toString());HC(n,o,()=>o(n.currentUser)),BC(n,s=>o(s))}}const i=pE("auth");return i&&DC(n,`http://${i}`),n}function nP(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}xC({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=lt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",nP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JT("Browser");const n0=t0(Af),Bl=new Tt,r0=async()=>{try{if(Bl.addScope("profile"),Bl.addScope("email"),!(await fT(n0,Bl)).user)throw new Error("User not found after login.")}catch(e){console.error("Error occurred during login:",e)}},i0=async()=>{try{await VC(n0),console.log("cool")}catch(e){console.error("Error occurred during logout:",e)}},rP=t0(Af),Hf=()=>{const[e,t]=T.useState({user:null,isAuthenticated:!1});return T.useEffect(()=>{const n=rP.onAuthStateChanged(r=>{t({user:r,isAuthenticated:!!r})});return()=>n()},[]),e},cr="70";function iP(){return A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"hidden md:block",children:A.jsx(aP,{})}),A.jsx("div",{className:"md:hidden",children:A.jsx(oP,{})})]})}function aP(){const e=Hf(),t=hi();return A.jsxs("nav",{className:"flex justify-between items-center mx-[20px]",style:{height:`${cr}px`},children:[A.jsxs("div",{className:"flex gap-[10px]",children:[A.jsxs(os,{to:"/",className:"flex items-center justify-center mr-[10px]",children:[A.jsx("div",{className:"font-bold",children:"Gains"}),A.jsx("div",{className:"",children:"Tracker"})]}),sv.map((n,r)=>A.jsx(os,{className:t.pathname===n.href?"text-foreground":"text-muted-foreground hover:text-foreground ",to:n.href,target:n.external?"_blank":void 0,children:n.title},r))]}),e.isAuthenticated?A.jsx("button",{onClick:i0,children:"Logout"}):A.jsx("button",{onClick:r0,children:"Login"})]})}function oP(){const e=Hf(),t=hi(),[n,r]=T.useState(!1),i=()=>{r(!n)};return A.jsxs(A.Fragment,{children:[A.jsxs("nav",{className:"flex justify-between items-center mx-[20px]",style:{height:`${cr}px`},children:[A.jsx("div",{className:"flex items-center",children:A.jsx("button",{className:"md:hidden",onClick:i,"aria-label":"Toggle Navigation Menu",children:A.jsx(si,{icon:iE,className:"h-5 w-5"})})}),e.isAuthenticated?A.jsx("button",{onClick:i0,children:"Logout"}):A.jsx("button",{onClick:r0,children:"Login"})]}),A.jsxs("div",{className:`absolute h-screen z-100 top-0 left-0 w-2/3 items-center content-center flex flex-col bg-card gap-[20px] transition-all duration-300 ${n?"translate-x-0":"-translate-x-full"}`,children:[A.jsxs("div",{className:"flex justify-between w-full px-[20px]",style:{height:`${cr}px`},children:[A.jsxs(os,{to:"/",className:"flex items-center justify-center w-min text-2xl",onClick:i,children:[A.jsx("div",{className:"font-bold",children:"Gains"}),A.jsx("div",{className:"",children:"Tracker"})]}),A.jsx("button",{className:"md:hidden",onClick:i,"aria-label":"Toggle Navigation Menu",children:A.jsx(si,{icon:oE,className:"h-5 w-5"})})]}),sv.map((a,o)=>A.jsx(os,{to:a.href,className:t.pathname===a.href?"text-foreground w-min text-xl":"text-muted-foreground hover:text-foreground w-min text-xl",target:a.external?"_blank":void 0,onClick:i,children:a.title},o))]})]})}const sP=()=>A.jsx("div",{className:"flex justify-center items-center",style:{height:`calc(100vh - ${cr}px)`},children:A.jsx("h1",{children:"Protected"})}),a0=({children:e})=>A.jsx("h1",{className:"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",children:e}),lP=()=>A.jsx("div",{className:"flex justify-center items-center",style:{height:`calc(100vh - ${cr}px)`},children:A.jsx(a0,{children:"Please Login"})}),uP=[{path:"/",element:A.jsx(sP,{})}],cP=[{path:"/",element:A.jsx(lP,{})}],o0=()=>{const e=ov(),t=e;return console.error(e),A.jsxs("div",{id:"error-page",className:"flex justify-center items-center",style:{height:`calc(100vh - ${cr}px)`},children:[A.jsx("h1",{children:"Oops!"}),A.jsx("p",{children:"Sorry, an unexpected error has occurred."}),A.jsx("p",{children:A.jsx("i",{children:t.statusText||t.message})})]})},fP=()=>A.jsx("div",{id:"fof-page",className:"flex justify-center items-center",style:{height:`calc(100vh - ${cr}px)`},children:A.jsx(a0,{children:"404"})}),kp=[{path:"*",element:A.jsx(fP,{}),errorElement:A.jsx(o0,{})}],dP=()=>{const t=Hf().isAuthenticated?uP.concat(kp):cP.concat(kp);return A.jsxs(q_,{children:[t.map(({path:n,element:r},i)=>A.jsx(ju,{path:n,element:r},i)),A.jsx(ju,{path:"*",element:A.jsx(o0,{})})]})};function hP(){return A.jsxs(oS,{children:[A.jsx(iP,{}),A.jsx(dP,{})]})}Hl.createRoot(document.getElementById("root")).render(A.jsx(_s.StrictMode,{children:A.jsx(hP,{})}));
