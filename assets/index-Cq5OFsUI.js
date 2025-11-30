(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oa={exports:{}},os={},ia={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.element"),Nd=Symbol.for("react.portal"),Sd=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Ed=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Dd=Symbol.for("react.memo"),Pd=Symbol.for("react.lazy"),Ho=Symbol.iterator;function Ad(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var aa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ca=Object.assign,da={};function dn(e,t,n){this.props=e,this.context=t,this.refs=da,this.updater=n||aa}dn.prototype.isReactComponent={};dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ua(){}ua.prototype=dn.prototype;function Wl(e,t,n){this.props=e,this.context=t,this.refs=da,this.updater=n||aa}var Gl=Wl.prototype=new ua;Gl.constructor=Wl;ca(Gl,dn.prototype);Gl.isPureReactComponent=!0;var Wo=Array.isArray,fa=Object.prototype.hasOwnProperty,Yl={current:null},pa={key:!0,ref:!0,__self:!0,__source:!0};function ha(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)fa.call(t,r)&&!pa.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:er,type:e,key:o,ref:i,props:l,_owner:Yl.current}}function Id(e,t){return{$$typeof:er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===er}function Ld(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Go=/\/+/g;function Cs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ld(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case er:case Nd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Cs(i,0):r,Wo(l)?(n="",e!=null&&(n=e.replace(Go,"$&/")+"/"),Sr(l,t,n,"",function(d){return d})):l!=null&&(ql(l)&&(l=Id(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Go,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Wo(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Cs(o,a);i+=Sr(o,t,n,c,l)}else if(c=Ad(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Cs(o,a++),i+=Sr(o,t,n,c,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Md(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Cr={transition:null},Od={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Yl};function ma(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=dn;A.Fragment=Sd;A.Profiler=kd;A.PureComponent=Wl;A.StrictMode=Cd;A.Suspense=Rd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;A.act=ma;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ca({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Yl.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)fa.call(t,c)&&!pa.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:er,type:e.type,key:l,ref:o,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:Ed,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};A.createElement=ha;A.createFactory=function(e){var t=ha.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:_d,render:e}};A.isValidElement=ql;A.lazy=function(e){return{$$typeof:Pd,_payload:{_status:-1,_result:e},_init:Md}};A.memo=function(e,t){return{$$typeof:Dd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};A.unstable_act=ma;A.useCallback=function(e,t){return de.current.useCallback(e,t)};A.useContext=function(e){return de.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return de.current.useDeferredValue(e)};A.useEffect=function(e,t){return de.current.useEffect(e,t)};A.useId=function(){return de.current.useId()};A.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return de.current.useMemo(e,t)};A.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};A.useRef=function(e){return de.current.useRef(e)};A.useState=function(e){return de.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return de.current.useTransition()};A.version="18.3.1";ia.exports=A;var w=ia.exports;const Xs=jd(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=w,Ud=Symbol.for("react.element"),Vd=Symbol.for("react.fragment"),Bd=Object.prototype.hasOwnProperty,zd=Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$d={key:!0,ref:!0,__self:!0,__source:!0};function ga(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Bd.call(t,r)&&!$d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ud,type:e,key:o,ref:i,props:l,_owner:zd.current}}os.Fragment=Vd;os.jsx=ga;os.jsxs=ga;oa.exports=os;var s=oa.exports,Zs={},xa={exports:{}},we={},va={exports:{}},ya={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,D){var P=k.length;k.push(D);e:for(;0<P;){var Y=P-1>>>1,Z=k[Y];if(0<l(Z,D))k[Y]=D,k[P]=Z,P=Y;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],P=k.pop();if(P!==D){k[0]=P;e:for(var Y=0,Z=k.length,lr=Z>>>1;Y<lr;){var bt=2*(Y+1)-1,Ss=k[bt],wt=bt+1,or=k[wt];if(0>l(Ss,P))wt<Z&&0>l(or,Ss)?(k[Y]=or,k[wt]=P,Y=wt):(k[Y]=Ss,k[bt]=P,Y=bt);else if(wt<Z&&0>l(or,P))k[Y]=or,k[wt]=P,Y=wt;else break e}}return D}function l(k,D){var P=k.sortIndex-D.sortIndex;return P!==0?P:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var c=[],d=[],g=1,x=null,f=3,v=!1,j=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(k){for(var D=n(d);D!==null;){if(D.callback===null)r(d);else if(D.startTime<=k)r(d),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(d)}}function y(k){if(N=!1,h(k),!j)if(n(c)!==null)j=!0,js(C);else{var D=n(d);D!==null&&Ns(y,D.startTime-k)}}function C(k,D){j=!1,N&&(N=!1,p(_),_=-1),v=!0;var P=f;try{for(h(D),x=n(c);x!==null&&(!(x.expirationTime>D)||k&&!_e());){var Y=x.callback;if(typeof Y=="function"){x.callback=null,f=x.priorityLevel;var Z=Y(x.expirationTime<=D);D=e.unstable_now(),typeof Z=="function"?x.callback=Z:x===n(c)&&r(c),h(D)}else r(c);x=n(c)}if(x!==null)var lr=!0;else{var bt=n(d);bt!==null&&Ns(y,bt.startTime-D),lr=!1}return lr}finally{x=null,f=P,v=!1}}var T=!1,E=null,_=-1,G=5,I=-1;function _e(){return!(e.unstable_now()-I<G)}function pn(){if(E!==null){var k=e.unstable_now();I=k;var D=!0;try{D=E(!0,k)}finally{D?hn():(T=!1,E=null)}}else T=!1}var hn;if(typeof u=="function")hn=function(){u(pn)};else if(typeof MessageChannel<"u"){var $o=new MessageChannel,wd=$o.port2;$o.port1.onmessage=pn,hn=function(){wd.postMessage(null)}}else hn=function(){V(pn,0)};function js(k){E=k,T||(T=!0,hn())}function Ns(k,D){_=V(function(){k(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){j||v||(j=!0,js(C))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var P=f;f=D;try{return k()}finally{f=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=f;f=k;try{return D()}finally{f=P}},e.unstable_scheduleCallback=function(k,D,P){var Y=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Y+P:Y):P=Y,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,k={id:g++,callback:D,priorityLevel:k,startTime:P,expirationTime:Z,sortIndex:-1},P>Y?(k.sortIndex=P,t(d,k),n(c)===null&&k===n(d)&&(N?(p(_),_=-1):N=!0,Ns(y,P-Y))):(k.sortIndex=Z,t(c,k),j||v||(j=!0,js(C))),k},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(k){var D=f;return function(){var P=f;f=D;try{return k.apply(this,arguments)}finally{f=P}}}})(ya);va.exports=ya;var Hd=va.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=w,be=Hd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ba=new Set,On={};function It(e,t){nn(e,t),nn(e+"Capture",t)}function nn(e,t){for(On[e]=t,e=0;e<t.length;e++)ba.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Js=Object.prototype.hasOwnProperty,Gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yo={},qo={};function Yd(e){return Js.call(qo,e)?!0:Js.call(Yo,e)?!1:Gd.test(e)?qo[e]=!0:(Yo[e]=!0,!1)}function qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qd(e,t,n,r){if(t===null||typeof t>"u"||qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ql=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ql,Kl);re[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ql,Kl);re[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ql,Kl);re[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qd(t,n,l,r)&&(n=null),r||l===null?Yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),wa=Symbol.for("react.provider"),ja=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Na=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function mn(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,ks;function Nn(e){if(ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ks=t&&t[1]||""}return`
`+ks+e}var Ts=!1;function Es(e,t){if(!e||Ts)return"";Ts=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var c=`
`+l[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=a);break}}}finally{Ts=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function Kd(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=Es(e.type,!1),e;case 11:return e=Es(e.type.render,!1),e;case 1:return e=Es(e.type,!0),e;default:return""}}function rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case Ot:return"Portal";case el:return"Profiler";case Zl:return"StrictMode";case tl:return"Suspense";case nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ja:return(e.displayName||"Context")+".Consumer";case wa:return(e._context.displayName||"Context")+".Provider";case Jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return t=e.displayName||null,t!==null?t:rl(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return rl(e(t))}catch{}}return null}function Xd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zd(e){var t=Sa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=Zd(e))}function Ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ka(e,t){t=t.checked,t!=null&&Xl(e,"checked",t,!1)}function ll(e,t){ka(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&ol(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ol(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Sn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function Ta(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ea(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ea(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,_a=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function Ra(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Da(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ra(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var eu=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cl(e,t){if(t){if(eu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,Xt=null,Zt=null;function ei(e){if(e=rr(e)){if(typeof fl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=us(t),fl(e.stateNode,e.type,t))}}function Pa(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function Aa(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,ei(e),t)for(e=0;e<t.length;e++)ei(t[e])}}function Ia(e,t){return e(t)}function La(){}var _s=!1;function Ma(e,t,n){if(_s)return e(t,n);_s=!0;try{return Ia(e,t,n)}finally{_s=!1,(Xt!==null||Zt!==null)&&(La(),Aa())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=us(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var pl=!1;if(qe)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){pl=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{pl=!1}function tu(e,t,n,r,l,o,i,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var En=!1,Or=null,Fr=!1,hl=null,nu={onError:function(e){En=!0,Or=e}};function ru(e,t,n,r,l,o,i,a,c){En=!1,Or=null,tu.apply(nu,arguments)}function su(e,t,n,r,l,o,i,a,c){if(ru.apply(this,arguments),En){if(En){var d=Or;En=!1,Or=null}else throw Error(b(198));Fr||(Fr=!0,hl=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ti(e){if(Lt(e)!==e)throw Error(b(188))}function lu(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ti(l),e;if(o===r)return ti(l),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Fa(e){return e=lu(e),e!==null?Ua(e):null}function Ua(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ua(e);if(t!==null)return t;e=e.sibling}return null}var Va=be.unstable_scheduleCallback,ni=be.unstable_cancelCallback,ou=be.unstable_shouldYield,iu=be.unstable_requestPaint,q=be.unstable_now,au=be.unstable_getCurrentPriorityLevel,no=be.unstable_ImmediatePriority,Ba=be.unstable_UserBlockingPriority,Ur=be.unstable_NormalPriority,cu=be.unstable_LowPriority,za=be.unstable_IdlePriority,is=null,Be=null;function du(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(is,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:pu,uu=Math.log,fu=Math.LN2;function pu(e){return e>>>=0,e===0?32:31-(uu(e)/fu|0)|0}var ur=64,fr=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Cn(a):(o&=i,o!==0&&(r=Cn(o)))}else i=n&~l,i!==0?r=Cn(i):o!==0&&(r=Cn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),l=1<<n,r|=e[n],t&=~l;return r}function hu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Le(o),a=1<<i,c=l[i];c===-1?(!(a&n)||a&r)&&(l[i]=hu(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $a(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function Rs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function gu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Le(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function Ha(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wa,so,Ga,Ya,qa,gl=!1,pr=[],it=null,at=null,ct=null,Vn=new Map,Bn=new Map,rt=[],xu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ri(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function xn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&so(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function vu(e,t,n,r,l){switch(t){case"focusin":return it=xn(it,e,t,n,r,l),!0;case"dragenter":return at=xn(at,e,t,n,r,l),!0;case"mouseover":return ct=xn(ct,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Vn.set(o,xn(Vn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Bn.set(o,xn(Bn.get(o)||null,e,t,n,r,l)),!0}return!1}function Qa(e){var t=St(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Oa(n),t!==null){e.blockedOn=t,qa(e.priority,function(){Ga(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=rr(n),t!==null&&so(t),e.blockedOn=n,!1;t.shift()}return!0}function si(e,t,n){kr(e)&&n.delete(t)}function yu(){gl=!1,it!==null&&kr(it)&&(it=null),at!==null&&kr(at)&&(at=null),ct!==null&&kr(ct)&&(ct=null),Vn.forEach(si),Bn.forEach(si)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,yu)))}function zn(e){function t(l){return vn(l,e)}if(0<pr.length){vn(pr[0],e);for(var n=1;n<pr.length;n++){var r=pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&vn(it,e),at!==null&&vn(at,e),ct!==null&&vn(ct,e),Vn.forEach(t),Bn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Qa(n),n.blockedOn===null&&rt.shift()}var Jt=Ze.ReactCurrentBatchConfig,Br=!0;function bu(e,t,n,r){var l=M,o=Jt.transition;Jt.transition=null;try{M=1,lo(e,t,n,r)}finally{M=l,Jt.transition=o}}function wu(e,t,n,r){var l=M,o=Jt.transition;Jt.transition=null;try{M=4,lo(e,t,n,r)}finally{M=l,Jt.transition=o}}function lo(e,t,n,r){if(Br){var l=xl(e,t,n,r);if(l===null)Vs(e,t,r,zr,n),ri(e,r);else if(vu(l,e,t,n,r))r.stopPropagation();else if(ri(e,r),t&4&&-1<xu.indexOf(e)){for(;l!==null;){var o=rr(l);if(o!==null&&Wa(o),o=xl(e,t,n,r),o===null&&Vs(e,t,r,zr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vs(e,t,r,null,n)}}var zr=null;function xl(e,t,n,r){if(zr=null,e=to(r),e=St(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Oa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zr=e,null}function Ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(au()){case no:return 1;case Ba:return 4;case Ur:case cu:return 16;case za:return 536870912;default:return 16}default:return 16}}var lt=null,oo=null,Tr=null;function Xa(){if(Tr)return Tr;var e,t=oo,n=t.length,r,l="value"in lt?lt.value:lt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Tr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function li(){return!1}function je(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hr:li,this.isPropagationStopped=li,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=je(un),nr=H({},un,{view:0,detail:0}),ju=je(nr),Ds,Ps,yn,as=H({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(Ds=e.screenX-yn.screenX,Ps=e.screenY-yn.screenY):Ps=Ds=0,yn=e),Ds)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),oi=je(as),Nu=H({},as,{dataTransfer:0}),Su=je(Nu),Cu=H({},nr,{relatedTarget:0}),As=je(Cu),ku=H({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Tu=je(ku),Eu=H({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_u=je(Eu),Ru=H({},un,{data:0}),ii=je(Ru),Du={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Au[e])?!!t[e]:!1}function ao(){return Iu}var Lu=H({},nr,{key:function(e){if(e.key){var t=Du[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mu=je(Lu),Ou=H({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ai=je(Ou),Fu=H({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),Uu=je(Fu),Vu=H({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bu=je(Vu),zu=H({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$u=je(zu),Hu=[9,13,27,32],co=qe&&"CompositionEvent"in window,_n=null;qe&&"documentMode"in document&&(_n=document.documentMode);var Wu=qe&&"TextEvent"in window&&!_n,Za=qe&&(!co||_n&&8<_n&&11>=_n),ci=" ",di=!1;function Ja(e,t){switch(e){case"keyup":return Hu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Gu(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(di=!0,ci);case"textInput":return e=t.data,e===ci&&di?null:e;default:return null}}function Yu(e,t){if(Ut)return e==="compositionend"||!co&&Ja(e,t)?(e=Xa(),Tr=oo=lt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Za&&t.locale!=="ko"?null:t.data;default:return null}}var qu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qu[e.type]:t==="textarea"}function tc(e,t,n,r){Pa(r),t=$r(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,$n=null;function Qu(e){fc(e,0)}function cs(e){var t=zt(e);if(Ca(t))return e}function Ku(e,t){if(e==="change")return t}var nc=!1;if(qe){var Is;if(qe){var Ls="oninput"in document;if(!Ls){var fi=document.createElement("div");fi.setAttribute("oninput","return;"),Ls=typeof fi.oninput=="function"}Is=Ls}else Is=!1;nc=Is&&(!document.documentMode||9<document.documentMode)}function pi(){Rn&&(Rn.detachEvent("onpropertychange",rc),$n=Rn=null)}function rc(e){if(e.propertyName==="value"&&cs($n)){var t=[];tc(t,$n,e,to(e)),Ma(Qu,t)}}function Xu(e,t,n){e==="focusin"?(pi(),Rn=t,$n=n,Rn.attachEvent("onpropertychange",rc)):e==="focusout"&&pi()}function Zu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cs($n)}function Ju(e,t){if(e==="click")return cs(t)}function ef(e,t){if(e==="input"||e==="change")return cs(t)}function tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:tf;function Hn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Js.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function hi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mi(e,t){var n=hi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hi(n)}}function sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nf(e){var t=lc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sc(n.ownerDocument.documentElement,n)){if(r!==null&&uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=mi(n,o);var i=mi(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rf=qe&&"documentMode"in document&&11>=document.documentMode,Vt=null,vl=null,Dn=null,yl=!1;function gi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yl||Vt==null||Vt!==Mr(r)||(r=Vt,"selectionStart"in r&&uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Hn(Dn,r)||(Dn=r,r=$r(vl,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},Ms={},oc={};qe&&(oc=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function ds(e){if(Ms[e])return Ms[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oc)return Ms[e]=t[n];return e}var ic=ds("animationend"),ac=ds("animationiteration"),cc=ds("animationstart"),dc=ds("transitionend"),uc=new Map,xi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){uc.set(e,t),It(t,[e])}for(var Os=0;Os<xi.length;Os++){var Fs=xi[Os],sf=Fs.toLowerCase(),lf=Fs[0].toUpperCase()+Fs.slice(1);xt(sf,"on"+lf)}xt(ic,"onAnimationEnd");xt(ac,"onAnimationIteration");xt(cc,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(dc,"onTransitionEnd");nn("onMouseEnter",["mouseout","mouseover"]);nn("onMouseLeave",["mouseout","mouseover"]);nn("onPointerEnter",["pointerout","pointerover"]);nn("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),of=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function vi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,su(r,t,void 0,e),e.currentTarget=null}function fc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==o&&l.isPropagationStopped())break e;vi(l,a,d),o=c}else for(i=0;i<r.length;i++){if(a=r[i],c=a.instance,d=a.currentTarget,a=a.listener,c!==o&&l.isPropagationStopped())break e;vi(l,a,d),o=c}}}if(Fr)throw e=hl,Fr=!1,hl=null,e}function F(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(pc(t,e,2,!1),n.add(r))}function Us(e,t,n){var r=0;t&&(r|=4),pc(n,e,r,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[gr]){e[gr]=!0,ba.forEach(function(n){n!=="selectionchange"&&(of.has(n)||Us(n,!1,e),Us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,Us("selectionchange",!1,t))}}function pc(e,t,n,r){switch(Ka(t)){case 1:var l=bu;break;case 4:l=wu;break;default:l=lo}n=l.bind(null,t,n,e),l=void 0,!pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vs(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;i=i.return}for(;a!==null;){if(i=St(a),i===null)return;if(c=i.tag,c===5||c===6){r=o=i;continue e}a=a.parentNode}}r=r.return}Ma(function(){var d=o,g=to(n),x=[];e:{var f=uc.get(e);if(f!==void 0){var v=io,j=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":v=Mu;break;case"focusin":j="focus",v=As;break;case"focusout":j="blur",v=As;break;case"beforeblur":case"afterblur":v=As;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=oi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Su;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Uu;break;case ic:case ac:case cc:v=Tu;break;case dc:v=Bu;break;case"scroll":v=ju;break;case"wheel":v=$u;break;case"copy":case"cut":case"paste":v=_u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ai}var N=(t&4)!==0,V=!N&&e==="scroll",p=N?f!==null?f+"Capture":null:f;N=[];for(var u=d,h;u!==null;){h=u;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,p!==null&&(y=Un(u,p),y!=null&&N.push(Gn(u,y,h)))),V)break;u=u.return}0<N.length&&(f=new v(f,j,null,n,g),x.push({event:f,listeners:N}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ul&&(j=n.relatedTarget||n.fromElement)&&(St(j)||j[Qe]))break e;if((v||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,v?(j=n.relatedTarget||n.toElement,v=d,j=j?St(j):null,j!==null&&(V=Lt(j),j!==V||j.tag!==5&&j.tag!==6)&&(j=null)):(v=null,j=d),v!==j)){if(N=oi,y="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(N=ai,y="onPointerLeave",p="onPointerEnter",u="pointer"),V=v==null?f:zt(v),h=j==null?f:zt(j),f=new N(y,u+"leave",v,n,g),f.target=V,f.relatedTarget=h,y=null,St(g)===d&&(N=new N(p,u+"enter",j,n,g),N.target=h,N.relatedTarget=V,y=N),V=y,v&&j)t:{for(N=v,p=j,u=0,h=N;h;h=Mt(h))u++;for(h=0,y=p;y;y=Mt(y))h++;for(;0<u-h;)N=Mt(N),u--;for(;0<h-u;)p=Mt(p),h--;for(;u--;){if(N===p||p!==null&&N===p.alternate)break t;N=Mt(N),p=Mt(p)}N=null}else N=null;v!==null&&yi(x,f,v,N,!1),j!==null&&V!==null&&yi(x,V,j,N,!0)}}e:{if(f=d?zt(d):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var C=Ku;else if(ui(f))if(nc)C=ef;else{C=Zu;var T=Xu}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Ju);if(C&&(C=C(e,d))){tc(x,C,n,g);break e}T&&T(e,f,d),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&ol(f,"number",f.value)}switch(T=d?zt(d):window,e){case"focusin":(ui(T)||T.contentEditable==="true")&&(Vt=T,vl=d,Dn=null);break;case"focusout":Dn=vl=Vt=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,gi(x,n,g);break;case"selectionchange":if(rf)break;case"keydown":case"keyup":gi(x,n,g)}var E;if(co)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ut?Ja(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Za&&n.locale!=="ko"&&(Ut||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ut&&(E=Xa()):(lt=g,oo="value"in lt?lt.value:lt.textContent,Ut=!0)),T=$r(d,_),0<T.length&&(_=new ii(_,e,null,n,g),x.push({event:_,listeners:T}),E?_.data=E:(E=ec(n),E!==null&&(_.data=E)))),(E=Wu?Gu(e,n):Yu(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(g=new ii("onBeforeInput","beforeinput",null,n,g),x.push({event:g,listeners:d}),g.data=E))}fc(x,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Un(e,n),o!=null&&r.unshift(Gn(e,o,l)),o=Un(e,t),o!=null&&r.push(Gn(e,o,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,l?(c=Un(n,o),c!=null&&i.unshift(Gn(n,c,a))):l||(c=Un(n,o),c!=null&&i.push(Gn(n,c,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var af=/\r\n?/g,cf=/\u0000|\uFFFD/g;function bi(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(cf,"")}function xr(e,t,n){if(t=bi(t),bi(e)!==t&&n)throw Error(b(425))}function Hr(){}var bl=null,wl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,df=typeof clearTimeout=="function"?clearTimeout:void 0,wi=typeof Promise=="function"?Promise:void 0,uf=typeof queueMicrotask=="function"?queueMicrotask:typeof wi<"u"?function(e){return wi.resolve(null).then(e).catch(ff)}:Nl;function ff(e){setTimeout(function(){throw e})}function Bs(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);zn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ji(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+fn,Yn="__reactProps$"+fn,Qe="__reactContainer$"+fn,Sl="__reactEvents$"+fn,pf="__reactListeners$"+fn,hf="__reactHandles$"+fn;function St(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ji(e);e!==null;){if(n=e[Ve])return n;e=ji(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[Ve]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function us(e){return e[Yn]||null}var Cl=[],$t=-1;function vt(e){return{current:e}}function U(e){0>$t||(e.current=Cl[$t],Cl[$t]=null,$t--)}function O(e,t){$t++,Cl[$t]=e.current,e.current=t}var gt={},ie=vt(gt),he=vt(!1),_t=gt;function rn(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Wr(){U(he),U(ie)}function Ni(e,t,n){if(ie.current!==gt)throw Error(b(168));O(ie,t),O(he,n)}function hc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(b(108,Xd(e)||"Unknown",l));return H({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,_t=ie.current,O(ie,e),O(he,he.current),!0}function Si(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=hc(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,U(he),U(ie),O(ie,e)):U(he),O(he,n)}var He=null,fs=!1,zs=!1;function mc(e){He===null?He=[e]:He.push(e)}function mf(e){fs=!0,mc(e)}function yt(){if(!zs&&He!==null){zs=!0;var e=0,t=M;try{var n=He;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,fs=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),Va(no,yt),l}finally{M=t,zs=!1}}return null}var Ht=[],Wt=0,Yr=null,qr=0,Ne=[],Se=0,Rt=null,We=1,Ge="";function jt(e,t){Ht[Wt++]=qr,Ht[Wt++]=Yr,Yr=e,qr=t}function gc(e,t,n){Ne[Se++]=We,Ne[Se++]=Ge,Ne[Se++]=Rt,Rt=e;var r=We;e=Ge;var l=32-Le(r)-1;r&=~(1<<l),n+=1;var o=32-Le(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,We=1<<32-Le(t)+l|n<<l|r,Ge=o+e}else We=1<<o|n<<l|r,Ge=e}function fo(e){e.return!==null&&(jt(e,1),gc(e,1,0))}function po(e){for(;e===Yr;)Yr=Ht[--Wt],Ht[Wt]=null,qr=Ht[--Wt],Ht[Wt]=null;for(;e===Rt;)Rt=Ne[--Se],Ne[Se]=null,Ge=Ne[--Se],Ne[Se]=null,We=Ne[--Se],Ne[Se]=null}var ye=null,ve=null,B=!1,Ie=null;function xc(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ci(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:We,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(B){var t=ve;if(t){var n=t;if(!Ci(e,t)){if(kl(e))throw Error(b(418));t=dt(n.nextSibling);var r=ye;t&&Ci(e,t)?xc(r,n):(e.flags=e.flags&-4097|2,B=!1,ye=e)}}else{if(kl(e))throw Error(b(418));e.flags=e.flags&-4097|2,B=!1,ye=e}}}function ki(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function vr(e){if(e!==ye)return!1;if(!B)return ki(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=ve)){if(kl(e))throw vc(),Error(b(418));for(;t;)xc(e,t),t=dt(t.nextSibling)}if(ki(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?dt(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=ve;e;)e=dt(e.nextSibling)}function sn(){ve=ye=null,B=!1}function ho(e){Ie===null?Ie=[e]:Ie.push(e)}var gf=Ze.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function yr(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ti(e){var t=e._init;return t(e._payload)}function yc(e){function t(p,u){if(e){var h=p.deletions;h===null?(p.deletions=[u],p.flags|=16):h.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function l(p,u){return p=ht(p,u),p.index=0,p.sibling=null,p}function o(p,u,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<u?(p.flags|=2,u):h):(p.flags|=2,u)):(p.flags|=1048576,u)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,u,h,y){return u===null||u.tag!==6?(u=Qs(h,p.mode,y),u.return=p,u):(u=l(u,h),u.return=p,u)}function c(p,u,h,y){var C=h.type;return C===Ft?g(p,u,h.props.children,y,h.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tt&&Ti(C)===u.type)?(y=l(u,h.props),y.ref=bn(p,u,h),y.return=p,y):(y=Lr(h.type,h.key,h.props,null,p.mode,y),y.ref=bn(p,u,h),y.return=p,y)}function d(p,u,h,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Ks(h,p.mode,y),u.return=p,u):(u=l(u,h.children||[]),u.return=p,u)}function g(p,u,h,y,C){return u===null||u.tag!==7?(u=Et(h,p.mode,y,C),u.return=p,u):(u=l(u,h),u.return=p,u)}function x(p,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Qs(""+u,p.mode,h),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ar:return h=Lr(u.type,u.key,u.props,null,p.mode,h),h.ref=bn(p,null,u),h.return=p,h;case Ot:return u=Ks(u,p.mode,h),u.return=p,u;case tt:var y=u._init;return x(p,y(u._payload),h)}if(Sn(u)||mn(u))return u=Et(u,p.mode,h,null),u.return=p,u;yr(p,u)}return null}function f(p,u,h,y){var C=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:a(p,u,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ar:return h.key===C?c(p,u,h,y):null;case Ot:return h.key===C?d(p,u,h,y):null;case tt:return C=h._init,f(p,u,C(h._payload),y)}if(Sn(h)||mn(h))return C!==null?null:g(p,u,h,y,null);yr(p,h)}return null}function v(p,u,h,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(h)||null,a(u,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ar:return p=p.get(y.key===null?h:y.key)||null,c(u,p,y,C);case Ot:return p=p.get(y.key===null?h:y.key)||null,d(u,p,y,C);case tt:var T=y._init;return v(p,u,h,T(y._payload),C)}if(Sn(y)||mn(y))return p=p.get(h)||null,g(u,p,y,C,null);yr(u,y)}return null}function j(p,u,h,y){for(var C=null,T=null,E=u,_=u=0,G=null;E!==null&&_<h.length;_++){E.index>_?(G=E,E=null):G=E.sibling;var I=f(p,E,h[_],y);if(I===null){E===null&&(E=G);break}e&&E&&I.alternate===null&&t(p,E),u=o(I,u,_),T===null?C=I:T.sibling=I,T=I,E=G}if(_===h.length)return n(p,E),B&&jt(p,_),C;if(E===null){for(;_<h.length;_++)E=x(p,h[_],y),E!==null&&(u=o(E,u,_),T===null?C=E:T.sibling=E,T=E);return B&&jt(p,_),C}for(E=r(p,E);_<h.length;_++)G=v(E,p,_,h[_],y),G!==null&&(e&&G.alternate!==null&&E.delete(G.key===null?_:G.key),u=o(G,u,_),T===null?C=G:T.sibling=G,T=G);return e&&E.forEach(function(_e){return t(p,_e)}),B&&jt(p,_),C}function N(p,u,h,y){var C=mn(h);if(typeof C!="function")throw Error(b(150));if(h=C.call(h),h==null)throw Error(b(151));for(var T=C=null,E=u,_=u=0,G=null,I=h.next();E!==null&&!I.done;_++,I=h.next()){E.index>_?(G=E,E=null):G=E.sibling;var _e=f(p,E,I.value,y);if(_e===null){E===null&&(E=G);break}e&&E&&_e.alternate===null&&t(p,E),u=o(_e,u,_),T===null?C=_e:T.sibling=_e,T=_e,E=G}if(I.done)return n(p,E),B&&jt(p,_),C;if(E===null){for(;!I.done;_++,I=h.next())I=x(p,I.value,y),I!==null&&(u=o(I,u,_),T===null?C=I:T.sibling=I,T=I);return B&&jt(p,_),C}for(E=r(p,E);!I.done;_++,I=h.next())I=v(E,p,_,I.value,y),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?_:I.key),u=o(I,u,_),T===null?C=I:T.sibling=I,T=I);return e&&E.forEach(function(pn){return t(p,pn)}),B&&jt(p,_),C}function V(p,u,h,y){if(typeof h=="object"&&h!==null&&h.type===Ft&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ar:e:{for(var C=h.key,T=u;T!==null;){if(T.key===C){if(C=h.type,C===Ft){if(T.tag===7){n(p,T.sibling),u=l(T,h.props.children),u.return=p,p=u;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===tt&&Ti(C)===T.type){n(p,T.sibling),u=l(T,h.props),u.ref=bn(p,T,h),u.return=p,p=u;break e}n(p,T);break}else t(p,T);T=T.sibling}h.type===Ft?(u=Et(h.props.children,p.mode,y,h.key),u.return=p,p=u):(y=Lr(h.type,h.key,h.props,null,p.mode,y),y.ref=bn(p,u,h),y.return=p,p=y)}return i(p);case Ot:e:{for(T=h.key;u!==null;){if(u.key===T)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(p,u.sibling),u=l(u,h.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Ks(h,p.mode,y),u.return=p,p=u}return i(p);case tt:return T=h._init,V(p,u,T(h._payload),y)}if(Sn(h))return j(p,u,h,y);if(mn(h))return N(p,u,h,y);yr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(p,u.sibling),u=l(u,h),u.return=p,p=u):(n(p,u),u=Qs(h,p.mode,y),u.return=p,p=u),i(p)):n(p,u)}return V}var ln=yc(!0),bc=yc(!1),Qr=vt(null),Kr=null,Gt=null,mo=null;function go(){mo=Gt=Kr=null}function xo(e){var t=Qr.current;U(Qr),e._currentValue=t}function El(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function en(e,t){Kr=e,mo=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(mo!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if(Kr===null)throw Error(b(308));Gt=e,Kr.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var Ct=null;function vo(e){Ct===null?Ct=[e]:Ct.push(e)}function wc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,vo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ke(e,n)}return l=r.interleaved,l===null?(t.next=t,vo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ke(e,n)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}function Ei(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var c=a,d=c.next;c.next=null,i===null?o=d:i.next=d,i=c;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=c))}if(o!==null){var x=l.baseState;i=0,g=d=c=null,a=o;do{var f=a.lane,v=a.eventTime;if((r&f)===f){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var j=e,N=a;switch(f=t,v=n,N.tag){case 1:if(j=N.payload,typeof j=="function"){x=j.call(v,x,f);break e}x=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=N.payload,f=typeof j=="function"?j.call(v,x,f):j,f==null)break e;x=H({},x,f);break e;case 2:nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=l.effects,f===null?l.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=v,c=x):g=g.next=v,i|=f;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;f=a,a=f.next,f.next=null,l.lastBaseUpdate=f,l.shared.pending=null}}while(!0);if(g===null&&(c=x),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Pt|=i,e.lanes=i,e.memoizedState=x}}function _i(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(b(191,l));l.call(r)}}}var sr={},ze=vt(sr),qn=vt(sr),Qn=vt(sr);function kt(e){if(e===sr)throw Error(b(174));return e}function bo(e,t){switch(O(Qn,t),O(qn,e),O(ze,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}U(ze),O(ze,t)}function on(){U(ze),U(qn),U(Qn)}function Nc(e){kt(Qn.current);var t=kt(ze.current),n=al(t,e.type);t!==n&&(O(qn,e),O(ze,n))}function wo(e){qn.current===e&&(U(ze),U(qn))}var z=vt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $s=[];function jo(){for(var e=0;e<$s.length;e++)$s[e]._workInProgressVersionPrimary=null;$s.length=0}var Rr=Ze.ReactCurrentDispatcher,Hs=Ze.ReactCurrentBatchConfig,Dt=0,$=null,K=null,J=null,Jr=!1,Pn=!1,Kn=0,xf=0;function se(){throw Error(b(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function So(e,t,n,r,l,o){if(Dt=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?wf:jf,e=n(r,l),Pn){o=0;do{if(Pn=!1,Kn=0,25<=o)throw Error(b(301));o+=1,J=K=null,t.updateQueue=null,Rr.current=Nf,e=n(r,l)}while(Pn)}if(Rr.current=es,t=K!==null&&K.next!==null,Dt=0,J=K=$=null,Jr=!1,t)throw Error(b(300));return e}function Co(){var e=Kn!==0;return Kn=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Ee(){if(K===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,K=e;else{if(e===null)throw Error(b(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function Xn(e,t){return typeof t=="function"?t(e):t}function Ws(e){var t=Ee(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,c=null,d=o;do{var g=d.lane;if((Dt&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var x={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=x,i=r):c=c.next=x,$.lanes|=g,Pt|=g}d=d.next}while(d!==null&&d!==o);c===null?i=r:c.next=a,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,$.lanes|=o,Pt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gs(e){var t=Ee(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Oe(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Sc(){}function Cc(e,t){var n=$,r=Ee(),l=t(),o=!Oe(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,ko(Ec.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Zn(9,Tc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(b(349));Dt&30||kc(n,t,l)}return l}function kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tc(e,t,n,r){t.value=n,t.getSnapshot=r,_c(t)&&Rc(e)}function Ec(e,t,n){return n(function(){_c(t)&&Rc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Rc(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function Ri(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,$,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dc(){return Ee().memoizedState}function Dr(e,t,n,r){var l=Ue();$.flags|=e,l.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function ps(e,t,n,r){var l=Ee();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&No(r,i.deps)){l.memoizedState=Zn(t,n,o,r);return}}$.flags|=e,l.memoizedState=Zn(1|t,n,o,r)}function Di(e,t){return Dr(8390656,8,e,t)}function ko(e,t){return ps(2048,8,e,t)}function Pc(e,t){return ps(4,2,e,t)}function Ac(e,t){return ps(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lc(e,t,n){return n=n!=null?n.concat([e]):null,ps(4,4,Ic.bind(null,t,e),n)}function To(){}function Mc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fc(e,t,n){return Dt&21?(Oe(n,t)||(n=$a(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function vf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Hs.transition;Hs.transition={};try{e(!1),t()}finally{M=n,Hs.transition=r}}function Uc(){return Ee().memoizedState}function yf(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vc(e))Bc(t,n);else if(n=wc(e,t,n,r),n!==null){var l=ce();Me(n,e,r,l),zc(n,t,r)}}function bf(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))Bc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,i)){var c=t.interleaved;c===null?(l.next=l,vo(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=wc(e,t,l,r),n!==null&&(l=ce(),Me(n,e,r,l),zc(n,t,r))}}function Vc(e){var t=e.alternate;return e===$||t!==null&&t===$}function Bc(e,t){Pn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}var es={readContext:Te,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},wf={readContext:Te,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Di,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Ri,useDebugValue:To,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Ri(!1),t=e[0];return e=vf.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Ue();if(B){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ee===null)throw Error(b(349));Dt&30||kc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Di(Ec.bind(null,r,o,e),[e]),r.flags|=2048,Zn(9,Tc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ue(),t=ee.identifierPrefix;if(B){var n=Ge,r=We;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jf={readContext:Te,useCallback:Mc,useContext:Te,useEffect:ko,useImperativeHandle:Lc,useInsertionEffect:Pc,useLayoutEffect:Ac,useMemo:Oc,useReducer:Ws,useRef:Dc,useState:function(){return Ws(Xn)},useDebugValue:To,useDeferredValue:function(e){var t=Ee();return Fc(t,K.memoizedState,e)},useTransition:function(){var e=Ws(Xn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Uc,unstable_isNewReconciler:!1},Nf={readContext:Te,useCallback:Mc,useContext:Te,useEffect:ko,useImperativeHandle:Lc,useInsertionEffect:Pc,useLayoutEffect:Ac,useMemo:Oc,useReducer:Gs,useRef:Dc,useState:function(){return Gs(Xn)},useDebugValue:To,useDeferredValue:function(e){var t=Ee();return K===null?t.memoizedState=e:Fc(t,K.memoizedState,e)},useTransition:function(){var e=Gs(Xn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Uc,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=pt(e),o=Ye(r,l);o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Me(t,e,l,r),_r(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=pt(e),o=Ye(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Me(t,e,l,r),_r(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=pt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Me(t,e,r,n),_r(t,e,r))}};function Pi(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(l,o):!0}function $c(e,t,n){var r=!1,l=gt,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(l=me(t)?_t:ie.current,r=t.contextTypes,o=(r=r!=null)?rn(e,l):gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ai(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},yo(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Te(o):(o=me(t)?_t:ie.current,l.context=rn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_l(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&hs.enqueueReplaceState(l,l.state,null),Xr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=Kd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sf=typeof WeakMap=="function"?WeakMap:Map;function Hc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ns||(ns=!0,Bl=r),Dl(e,t)},n}function Wc(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Dl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dl(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ii(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ff.bind(null,e,t,n),t.then(e,e))}function Li(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mi(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var Cf=Ze.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?bc(t,null,n,r):ln(t,e.child,n,r)}function Oi(e,t,n,r,l){n=n.render;var o=t.ref;return en(t,l),r=So(e,t,n,r,o,l),n=Co(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&n&&fo(t),t.flags|=1,ae(e,t,r,l),t.child)}function Fi(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Lo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gc(e,t,o,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(i,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Hn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Pl(e,t,n,r,l)}function Yc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(qt,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(qt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,O(qt,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,O(qt,xe),xe|=r;return ae(e,t,l,n),t.child}function qc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,l){var o=me(n)?_t:ie.current;return o=rn(t,o),en(t,l),n=So(e,t,n,r,o,l),r=Co(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&r&&fo(t),t.flags|=1,ae(e,t,n,l),t.child)}function Ui(e,t,n,r,l){if(me(n)){var o=!0;Gr(t)}else o=!1;if(en(t,l),t.stateNode===null)Pr(e,t),$c(t,n,r),Rl(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var c=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Te(d):(d=me(n)?_t:ie.current,d=rn(t,d));var g=n.getDerivedStateFromProps,x=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||c!==d)&&Ai(t,i,r,d),nt=!1;var f=t.memoizedState;i.state=f,Xr(t,r,i,l),c=t.memoizedState,a!==r||f!==c||he.current||nt?(typeof g=="function"&&(_l(t,n,g,r),c=t.memoizedState),(a=nt||Pi(t,n,a,r,f,c,d))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=d,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,jc(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Pe(t.type,a),i.props=d,x=t.pendingProps,f=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=Te(c):(c=me(n)?_t:ie.current,c=rn(t,c));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==x||f!==c)&&Ai(t,i,r,c),nt=!1,f=t.memoizedState,i.state=f,Xr(t,r,i,l);var j=t.memoizedState;a!==x||f!==j||he.current||nt?(typeof v=="function"&&(_l(t,n,v,r),j=t.memoizedState),(d=nt||Pi(t,n,d,r,f,j,c)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,j,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,j,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),i.props=r,i.state=j,i.context=c,r=d):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Al(e,t,n,r,o,l)}function Al(e,t,n,r,l,o){qc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Si(t,n,!1),Xe(e,t,o);r=t.stateNode,Cf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=ln(t,e.child,null,o),t.child=ln(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,l&&Si(t,n,!0),t.child}function Qc(e){var t=e.stateNode;t.pendingContext?Ni(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ni(e,t.context,!1),bo(e,t.containerInfo)}function Vi(e,t,n,r,l){return sn(),ho(l),t.flags|=256,ae(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,t,n){var r=t.pendingProps,l=z.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(z,l&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=xs(i,r,0,null),e=Et(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ll(n),t.memoizedState=Il,e):Eo(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return kf(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ht(l,c),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=ht(a,o):(o=Et(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ll(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eo(e,t){return t=xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function br(e,t,n,r){return r!==null&&ho(r),ln(t,e.child,null,n),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Ys(Error(b(422))),br(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=xs({mode:"visible",children:r.children},l,0,null),o=Et(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ln(t,e.child,null,i),t.child.memoizedState=Ll(i),t.memoizedState=Il,o);if(!(t.mode&1))return br(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=Ys(o,r,void 0),br(e,t,i,r)}if(a=(i&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ke(e,l),Me(r,e,l,-1))}return Io(),r=Ys(Error(b(421))),br(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Uf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ve=dt(l.nextSibling),ye=t,B=!0,Ie=null,e!==null&&(Ne[Se++]=We,Ne[Se++]=Ge,Ne[Se++]=Rt,We=e.id,Ge=e.overflow,Rt=t),t=Eo(t,r.children),t.flags|=4096,t)}function Bi(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),El(e.return,t,n)}function qs(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Xc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bi(e,n,t);else if(e.tag===19)Bi(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(z,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),qs(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}qs(t,!0,n,null,o);break;case"together":qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tf(e,t,n){switch(t.tag){case 3:Qc(t),sn();break;case 5:Nc(t);break;case 1:me(t.type)&&Gr(t);break;case 4:bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Qr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(z,z.current&1),t.flags|=128,null):n&t.child.childLanes?Kc(e,t,n):(O(z,z.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);O(z,z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(z,z.current),r)break;return null;case 22:case 23:return t.lanes=0,Yc(e,t,n)}return Xe(e,t,n)}var Zc,Ml,Jc,ed;Zc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ml=function(){};Jc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,kt(ze.current);var o=null;switch(n){case"input":l=sl(e,l),r=sl(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=il(e,l),r=il(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}cl(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(On.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(i in a)!a.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&a[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(On.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&F("scroll",e),o||a===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function wn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ef(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Wr(),le(t),null;case 3:return r=t.stateNode,on(),U(he),U(ie),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Hl(Ie),Ie=null))),Ml(e,t),le(t),null;case 5:wo(t);var l=kt(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Jc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return le(t),null}if(e=kt(ze.current),vr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Yn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<kn.length;l++)F(kn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ko(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Zo(r,o),F("invalid",r)}cl(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),l=["children",""+a]):On.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&F("scroll",r)}switch(n){case"input":cr(r),Xo(r,o,!0);break;case"textarea":cr(r),Jo(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ea(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[Yn]=r,Zc(e,t,!1,!1),t.stateNode=e;e:{switch(i=dl(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<kn.length;l++)F(kn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Ko(e,r),l=sl(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":Zo(e,r),l=il(e,r),F("invalid",e);break;default:l=r}cl(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?Da(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_a(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fn(e,c):typeof c=="number"&&Fn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(On.hasOwnProperty(o)?c!=null&&o==="onScroll"&&F("scroll",e):c!=null&&Xl(e,o,c,i))}switch(n){case"input":cr(e),Xo(e,r,!1);break;case"textarea":cr(e),Jo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=kt(Qn.current),kt(ze.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return le(t),null;case 13:if(U(z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&ve!==null&&t.mode&1&&!(t.flags&128))vc(),sn(),t.flags|=98560,o=!1;else if(o=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Ve]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Ie!==null&&(Hl(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||z.current&1?X===0&&(X=3):Io())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return on(),Ml(e,t),e===null&&Wn(t.stateNode.containerInfo),le(t),null;case 10:return xo(t.type._context),le(t),null;case 17:return me(t.type)&&Wr(),le(t),null;case 19:if(U(z),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)wn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Zr(e),i!==null){for(t.flags|=128,wn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(z,z.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>cn&&(t.flags|=128,r=!0,wn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!B)return le(t),null}else 2*q()-o.renderingStartTime>cn&&n!==1073741824&&(t.flags|=128,r=!0,wn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=z.current,O(z,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function _f(e,t){switch(po(t),t.tag){case 1:return me(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),U(he),U(ie),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wo(t),null;case 13:if(U(z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(z),null;case 4:return on(),null;case 10:return xo(t.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var wr=!1,oe=!1,Rf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Ol(e,t,n){try{n()}catch(r){W(e,t,r)}}var zi=!1;function Df(e,t){if(bl=Br,e=lc(),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,c=-1,d=0,g=0,x=e,f=null;t:for(;;){for(var v;x!==n||l!==0&&x.nodeType!==3||(a=i+l),x!==o||r!==0&&x.nodeType!==3||(c=i+r),x.nodeType===3&&(i+=x.nodeValue.length),(v=x.firstChild)!==null;)f=x,x=v;for(;;){if(x===e)break t;if(f===n&&++d===l&&(a=i),f===o&&++g===r&&(c=i),(v=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wl={focusedElem:e,selectionRange:n},Br=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var N=j.memoizedProps,V=j.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?N:Pe(t.type,N),V);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){W(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return j=zi,zi=!1,j}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ol(t,n,o)}l=l.next}while(l!==r)}}function ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Yn],delete t[Sl],delete t[pf],delete t[hf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nd(e){return e.tag===5||e.tag===3||e.tag===4}function $i(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var te=null,Ae=!1;function Je(e,t,n){for(n=n.child;n!==null;)rd(e,t,n),n=n.sibling}function rd(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(is,n)}catch{}switch(n.tag){case 5:oe||Yt(n,t);case 6:var r=te,l=Ae;te=null,Je(e,t,n),te=r,Ae=l,te!==null&&(Ae?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ae?(e=te,n=n.stateNode,e.nodeType===8?Bs(e.parentNode,n):e.nodeType===1&&Bs(e,n),zn(e)):Bs(te,n.stateNode));break;case 4:r=te,l=Ae,te=n.stateNode.containerInfo,Ae=!0,Je(e,t,n),te=r,Ae=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ol(n,t,i),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!oe&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Je(e,t,n),oe=r):Je(e,t,n);break;default:Je(e,t,n)}}function Hi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rf),t.forEach(function(r){var l=Vf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Ae=!1;break e;case 3:te=a.stateNode.containerInfo,Ae=!0;break e;case 4:te=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(te===null)throw Error(b(160));rd(o,i,l),te=null,Ae=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){W(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sd(t,e),t=t.sibling}function sd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Fe(e),r&4){try{An(3,e,e.return),ms(3,e)}catch(N){W(e,e.return,N)}try{An(5,e,e.return)}catch(N){W(e,e.return,N)}}break;case 1:Re(t,e),Fe(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(Re(t,e),Fe(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var l=e.stateNode;try{Fn(l,"")}catch(N){W(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ka(l,o),dl(a,i);var d=dl(a,o);for(i=0;i<c.length;i+=2){var g=c[i],x=c[i+1];g==="style"?Da(l,x):g==="dangerouslySetInnerHTML"?_a(l,x):g==="children"?Fn(l,x):Xl(l,g,x,d)}switch(a){case"input":ll(l,o);break;case"textarea":Ta(l,o);break;case"select":var f=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Kt(l,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?Kt(l,!!o.multiple,o.defaultValue,!0):Kt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Yn]=o}catch(N){W(e,e.return,N)}}break;case 6:if(Re(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(b(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(N){W(e,e.return,N)}}break;case 3:if(Re(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(N){W(e,e.return,N)}break;case 4:Re(t,e),Fe(e);break;case 13:Re(t,e),Fe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Do=q())),r&4&&Hi(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||g,Re(t,e),oe=d):Re(t,e),Fe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(x=S=g;S!==null;){switch(f=S,v=f.child,f.tag){case 0:case 11:case 14:case 15:An(4,f,f.return);break;case 1:Yt(f,f.return);var j=f.stateNode;if(typeof j.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(N){W(r,n,N)}}break;case 5:Yt(f,f.return);break;case 22:if(f.memoizedState!==null){Gi(x);continue}}v!==null?(v.return=f,S=v):Gi(x)}g=g.sibling}e:for(g=null,x=e;;){if(x.tag===5){if(g===null){g=x;try{l=x.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=x.stateNode,c=x.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Ra("display",i))}catch(N){W(e,e.return,N)}}}else if(x.tag===6){if(g===null)try{x.stateNode.nodeValue=d?"":x.memoizedProps}catch(N){W(e,e.return,N)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;g===x&&(g=null),x=x.return}g===x&&(g=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Re(t,e),Fe(e),r&4&&Hi(e);break;case 21:break;default:Re(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nd(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Fn(l,""),r.flags&=-33);var o=$i(e);Vl(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=$i(e);Ul(e,a,i);break;default:throw Error(b(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pf(e,t,n){S=e,ld(e)}function ld(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||wr;if(!i){var a=l.alternate,c=a!==null&&a.memoizedState!==null||oe;a=wr;var d=oe;if(wr=i,(oe=c)&&!d)for(S=l;S!==null;)i=S,c=i.child,i.tag===22&&i.memoizedState!==null?Yi(l):c!==null?(c.return=i,S=c):Yi(l);for(;o!==null;)S=o,ld(o),o=o.sibling;S=l,wr=a,oe=d}Wi(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Wi(e)}}function Wi(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||ms(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_i(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_i(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var x=g.dehydrated;x!==null&&zn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}oe||t.flags&512&&Fl(t)}catch(f){W(t,t.return,f)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Gi(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Yi(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ms(4,t)}catch(c){W(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){W(t,l,c)}}var o=t.return;try{Fl(t)}catch(c){W(t,o,c)}break;case 5:var i=t.return;try{Fl(t)}catch(c){W(t,i,c)}}}catch(c){W(t,t.return,c)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var Af=Math.ceil,ts=Ze.ReactCurrentDispatcher,_o=Ze.ReactCurrentOwner,ke=Ze.ReactCurrentBatchConfig,L=0,ee=null,Q=null,ne=0,xe=0,qt=vt(0),X=0,Jn=null,Pt=0,gs=0,Ro=0,In=null,fe=null,Do=0,cn=1/0,$e=null,ns=!1,Bl=null,ft=null,jr=!1,ot=null,rs=0,Ln=0,zl=null,Ar=-1,Ir=0;function ce(){return L&6?q():Ar!==-1?Ar:Ar=q()}function pt(e){return e.mode&1?L&2&&ne!==0?ne&-ne:gf.transition!==null?(Ir===0&&(Ir=$a()),Ir):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ka(e.type)),e):1}function Me(e,t,n,r){if(50<Ln)throw Ln=0,zl=null,Error(b(185));tr(e,n,r),(!(L&2)||e!==ee)&&(e===ee&&(!(L&2)&&(gs|=n),X===4&&st(e,ne)),ge(e,r),n===1&&L===0&&!(t.mode&1)&&(cn=q()+500,fs&&yt()))}function ge(e,t){var n=e.callbackNode;mu(e,t);var r=Vr(e,e===ee?ne:0);if(r===0)n!==null&&ni(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ni(n),t===1)e.tag===0?mf(qi.bind(null,e)):mc(qi.bind(null,e)),uf(function(){!(L&6)&&yt()}),n=null;else{switch(Ha(r)){case 1:n=no;break;case 4:n=Ba;break;case 16:n=Ur;break;case 536870912:n=za;break;default:n=Ur}n=pd(n,od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function od(e,t){if(Ar=-1,Ir=0,L&6)throw Error(b(327));var n=e.callbackNode;if(tn()&&e.callbackNode!==n)return null;var r=Vr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ss(e,r);else{t=r;var l=L;L|=2;var o=ad();(ee!==e||ne!==t)&&($e=null,cn=q()+500,Tt(e,t));do try{Mf();break}catch(a){id(e,a)}while(!0);go(),ts.current=o,L=l,Q!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(l=ml(e),l!==0&&(r=l,t=$l(e,l))),t===1)throw n=Jn,Tt(e,0),st(e,r),ge(e,q()),n;if(t===6)st(e,r);else{if(l=e.current.alternate,!(r&30)&&!If(l)&&(t=ss(e,r),t===2&&(o=ml(e),o!==0&&(r=o,t=$l(e,o))),t===1))throw n=Jn,Tt(e,0),st(e,r),ge(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Nt(e,fe,$e);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Do+500-q(),10<t)){if(Vr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Nl(Nt.bind(null,e,fe,$e),t);break}Nt(e,fe,$e);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Le(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Af(r/1960))-r,10<r){e.timeoutHandle=Nl(Nt.bind(null,e,fe,$e),r);break}Nt(e,fe,$e);break;case 5:Nt(e,fe,$e);break;default:throw Error(b(329))}}}return ge(e,q()),e.callbackNode===n?od.bind(null,e):null}function $l(e,t){var n=In;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=ss(e,t),e!==2&&(t=fe,fe=n,t!==null&&Hl(t)),e}function Hl(e){fe===null?fe=e:fe.push.apply(fe,e)}function If(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Oe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~Ro,t&=~gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function qi(e){if(L&6)throw Error(b(327));tn();var t=Vr(e,0);if(!(t&1))return ge(e,q()),null;var n=ss(e,t);if(e.tag!==0&&n===2){var r=ml(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=Jn,Tt(e,0),st(e,t),ge(e,q()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,fe,$e),ge(e,q()),null}function Po(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(cn=q()+500,fs&&yt())}}function At(e){ot!==null&&ot.tag===0&&!(L&6)&&tn();var t=L;L|=1;var n=ke.transition,r=M;try{if(ke.transition=null,M=1,e)return e()}finally{M=r,ke.transition=n,L=t,!(L&6)&&yt()}}function Ao(){xe=qt.current,U(qt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,df(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:on(),U(he),U(ie),jo();break;case 5:wo(r);break;case 4:on();break;case 13:U(z);break;case 19:U(z);break;case 10:xo(r.type._context);break;case 22:case 23:Ao()}n=n.return}if(ee=e,Q=e=ht(e.current,null),ne=xe=t,X=0,Jn=null,Ro=gs=Pt=0,fe=In=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Ct=null}return e}function id(e,t){do{var n=Q;try{if(go(),Rr.current=es,Jr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(Dt=0,J=K=$=null,Pn=!1,Kn=0,_o.current=null,n===null||n.return===null){X=1,Jn=t,Q=null;break}e:{var o=e,i=n.return,a=n,c=t;if(t=ne,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=a,x=g.tag;if(!(g.mode&1)&&(x===0||x===11||x===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Li(i);if(v!==null){v.flags&=-257,Mi(v,i,a,o,t),v.mode&1&&Ii(o,d,t),t=v,c=d;var j=t.updateQueue;if(j===null){var N=new Set;N.add(c),t.updateQueue=N}else j.add(c);break e}else{if(!(t&1)){Ii(o,d,t),Io();break e}c=Error(b(426))}}else if(B&&a.mode&1){var V=Li(i);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Mi(V,i,a,o,t),ho(an(c,a));break e}}o=c=an(c,a),X!==4&&(X=2),In===null?In=[o]:In.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Hc(o,c,t);Ei(o,p);break e;case 1:a=c;var u=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ft===null||!ft.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Wc(o,a,t);Ei(o,y);break e}}o=o.return}while(o!==null)}dd(n)}catch(C){t=C,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ad(){var e=ts.current;return ts.current=es,e===null?es:e}function Io(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Pt&268435455)&&!(gs&268435455)||st(ee,ne)}function ss(e,t){var n=L;L|=2;var r=ad();(ee!==e||ne!==t)&&($e=null,Tt(e,t));do try{Lf();break}catch(l){id(e,l)}while(!0);if(go(),L=n,ts.current=r,Q!==null)throw Error(b(261));return ee=null,ne=0,X}function Lf(){for(;Q!==null;)cd(Q)}function Mf(){for(;Q!==null&&!ou();)cd(Q)}function cd(e){var t=fd(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?dd(e):Q=t,_o.current=null}function dd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_f(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=Ef(n,t,xe),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function Nt(e,t,n){var r=M,l=ke.transition;try{ke.transition=null,M=1,Of(e,t,n,r)}finally{ke.transition=l,M=r}return null}function Of(e,t,n,r){do tn();while(ot!==null);if(L&6)throw Error(b(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(gu(e,o),e===ee&&(Q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,pd(Ur,function(){return tn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ke.transition,ke.transition=null;var i=M;M=1;var a=L;L|=4,_o.current=null,Df(e,n),sd(n,e),nf(wl),Br=!!bl,wl=bl=null,e.current=n,Pf(n),iu(),L=a,M=i,ke.transition=o}else e.current=n;if(jr&&(jr=!1,ot=e,rs=l),o=e.pendingLanes,o===0&&(ft=null),du(n.stateNode),ge(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ns)throw ns=!1,e=Bl,Bl=null,e;return rs&1&&e.tag!==0&&tn(),o=e.pendingLanes,o&1?e===zl?Ln++:(Ln=0,zl=e):Ln=0,yt(),null}function tn(){if(ot!==null){var e=Ha(rs),t=ke.transition,n=M;try{if(ke.transition=null,M=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,rs=0,L&6)throw Error(b(331));var l=L;for(L|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:An(8,g,o)}var x=g.child;if(x!==null)x.return=g,S=x;else for(;S!==null;){g=S;var f=g.sibling,v=g.return;if(td(g),g===d){S=null;break}if(f!==null){f.return=v,S=f;break}S=v}}}var j=o.alternate;if(j!==null){var N=j.child;if(N!==null){j.child=null;do{var V=N.sibling;N.sibling=null,N=V}while(N!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:An(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,S=p;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){i=S;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,S=h;else e:for(i=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ms(9,a)}}catch(C){W(a,a.return,C)}if(a===i){S=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,S=y;break e}S=a.return}}if(L=l,yt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(is,e)}catch{}r=!0}return r}finally{M=n,ke.transition=t}}return!1}function Qi(e,t,n){t=an(n,t),t=Hc(e,t,1),e=ut(e,t,1),t=ce(),e!==null&&(tr(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)Qi(e,e,n);else for(;t!==null;){if(t.tag===3){Qi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=an(n,e),e=Wc(t,e,1),t=ut(t,e,1),e=ce(),t!==null&&(tr(t,1,e),ge(t,e));break}}t=t.return}}function Ff(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>q()-Do?Tt(e,0):Ro|=n),ge(e,t)}function ud(e,t){t===0&&(e.mode&1?(t=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):t=1);var n=ce();e=Ke(e,t),e!==null&&(tr(e,t,n),ge(e,n))}function Uf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ud(e,n)}function Vf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),ud(e,n)}var fd;fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Tf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&gc(t,qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=rn(t,ie.current);en(t,n),l=So(null,t,r,e,l,n);var o=Co();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Gr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yo(t),l.updater=hs,t.stateNode=l,l._reactInternals=t,Rl(t,r,e,n),t=Al(null,t,r,!0,o,n)):(t.tag=0,B&&o&&fo(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=zf(r),e=Pe(r,e),l){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=Ui(null,t,r,e,n);break e;case 11:t=Oi(null,t,r,e,n);break e;case 14:t=Fi(null,t,r,Pe(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Pl(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ui(e,t,r,l,n);case 3:e:{if(Qc(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,l=o.element,jc(e,t),Xr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=an(Error(b(423)),t),t=Vi(e,t,r,n,l);break e}else if(r!==l){l=an(Error(b(424)),t),t=Vi(e,t,r,n,l);break e}else for(ve=dt(t.stateNode.containerInfo.firstChild),ye=t,B=!0,Ie=null,n=bc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Nc(t),e===null&&Tl(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,jl(r,l)?i=null:o!==null&&jl(r,o)&&(t.flags|=32),qc(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return Kc(e,t,n);case 4:return bo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Oi(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,O(Qr,r._currentValue),r._currentValue=i,o!==null)if(Oe(o.value,i)){if(o.children===l.children&&!he.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ye(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),El(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(b(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),El(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,en(t,n),l=Te(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),Fi(e,t,r,l,n);case 15:return Gc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Pr(e,t),t.tag=1,me(r)?(e=!0,Gr(t)):e=!1,en(t,n),$c(t,r,l),Rl(t,r,l,n),Al(null,t,r,!0,e,n);case 19:return Xc(e,t,n);case 22:return Yc(e,t,n)}throw Error(b(156,t.tag))};function pd(e,t){return Va(e,t)}function Bf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Bf(e,t,n,r)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zf(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===eo)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Lo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ft:return Et(n.children,l,o,t);case Zl:i=8,l|=8;break;case el:return e=Ce(12,n,t,l|2),e.elementType=el,e.lanes=o,e;case tl:return e=Ce(13,n,t,l),e.elementType=tl,e.lanes=o,e;case nl:return e=Ce(19,n,t,l),e.elementType=nl,e.lanes=o,e;case Na:return xs(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wa:i=10;break e;case ja:i=9;break e;case Jl:i=11;break e;case eo:i=14;break e;case tt:i=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ce(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Et(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function xs(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=Na,e.lanes=n,e.stateNode={isHidden:!1},e}function Qs(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Ks(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $f(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rs(0),this.expirationTimes=Rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Mo(e,t,n,r,l,o,i,a,c){return e=new $f(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(o),e}function Hf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hd(e){if(!e)return gt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(me(n))return hc(e,n,t)}return t}function md(e,t,n,r,l,o,i,a,c){return e=Mo(n,r,!0,e,l,o,i,a,c),e.context=hd(null),n=e.current,r=ce(),l=pt(n),o=Ye(r,l),o.callback=t??null,ut(n,o,l),e.current.lanes=l,tr(e,l,r),ge(e,r),e}function vs(e,t,n,r){var l=t.current,o=ce(),i=pt(l);return n=hd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,i),e!==null&&(Me(e,l,i,o),_r(e,l,i)),i}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ki(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oo(e,t){Ki(e,t),(e=e.alternate)&&Ki(e,t)}function Wf(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}ys.prototype.render=Fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));vs(e,t,null,null)};ys.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){vs(null,e,null,null)}),t[Qe]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ya();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Qa(e)}};function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xi(){}function Gf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=ls(i);o.call(d)}}var i=md(t,r,e,0,null,!1,!1,"",Xi);return e._reactRootContainer=i,e[Qe]=i.current,Wn(e.nodeType===8?e.parentNode:e),At(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=ls(c);a.call(d)}}var c=Mo(e,0,!1,null,null,!1,!1,"",Xi);return e._reactRootContainer=c,e[Qe]=c.current,Wn(e.nodeType===8?e.parentNode:e),At(function(){vs(t,c,n,r)}),c}function ws(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var c=ls(i);a.call(c)}}vs(t,i,e,l)}else i=Gf(n,t,e,l,r);return ls(i)}Wa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(ro(t,n|1),ge(t,q()),!(L&6)&&(cn=q()+500,yt()))}break;case 13:At(function(){var r=Ke(e,1);if(r!==null){var l=ce();Me(r,e,1,l)}}),Oo(e,1)}};so=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ce();Me(t,e,134217728,n)}Oo(e,134217728)}};Ga=function(e){if(e.tag===13){var t=pt(e),n=Ke(e,t);if(n!==null){var r=ce();Me(n,e,t,r)}Oo(e,t)}};Ya=function(){return M};qa=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};fl=function(e,t,n){switch(t){case"input":if(ll(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=us(r);if(!l)throw Error(b(90));Ca(r),ll(r,l)}}}break;case"textarea":Ta(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ia=Po;La=At;var Yf={usingClientEntryPoint:!1,Events:[rr,zt,us,Pa,Aa,Po]},jn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qf={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fa(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||Wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{is=Nr.inject(qf),Be=Nr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uo(t))throw Error(b(200));return Hf(e,t,null,n)};we.createRoot=function(e,t){if(!Uo(e))throw Error(b(299));var n=!1,r="",l=gd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Mo(e,1,!1,null,null,n,!1,r,l),e[Qe]=t.current,Wn(e.nodeType===8?e.parentNode:e),new Fo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Fa(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return At(e)};we.hydrate=function(e,t,n){if(!bs(t))throw Error(b(200));return ws(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Uo(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=gd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=md(t,null,e,1,n??null,l,!1,o,i),e[Qe]=t.current,Wn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ys(t)};we.render=function(e,t,n){if(!bs(t))throw Error(b(200));return ws(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!bs(e))throw Error(b(40));return e._reactRootContainer?(At(function(){ws(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};we.unstable_batchedUpdates=Po;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bs(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return ws(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd)}catch(e){console.error(e)}}xd(),xa.exports=we;var Qf=xa.exports,Zi=Qf;Zs.createRoot=Zi.createRoot,Zs.hydrateRoot=Zi.hydrateRoot;var De=(e=>(e.DESIGN_PATTERNS="design_patterns",e.SOLID="solid",e.ARCHITECTURE="architecture",e))(De||{}),m=(e=>(e.FACTORY="factory",e.ABSTRACT_FACTORY="abstract_factory",e.BUILDER="builder",e.PROTOTYPE="prototype",e.SINGLETON="singleton",e.ADAPTER="adapter",e.BRIDGE="bridge",e.COMPOSITE="composite",e.DECORATOR="decorator",e.FACADE="facade",e.FLYWEIGHT="flyweight",e.PROXY="proxy",e.CHAIN_OF_RESPONSIBILITY="chain_of_responsibility",e.COMMAND="command",e.INTERPRETER="interpreter",e.ITERATOR="iterator",e.MEDIATOR="mediator",e.MEMENTO="memento",e.OBSERVER="observer",e.STATE="state",e.STRATEGY="strategy",e.TEMPLATE_METHOD="template_method",e.VISITOR="visitor",e.SRP="srp",e.OCP="ocp",e.LSP="lsp",e.ISP="isp",e.DIP="dip",e.MVC="mvc",e.MVVM="mvvm",e.MONOLITH="monolith",e.MICROSERVICES="microservices",e.LAYERED="layered",e.EVENT_DRIVEN="event_driven",e.DDD="ddd",e.SAGA="saga",e.SERVERLESS="serverless",e.CLIENT_SERVER="client_server",e))(m||{}),R=(e=>(e.CREATIONAL="Creational",e.STRUCTURAL="Structural",e.BEHAVIORAL="Behavioral",e.SOLID_PRINCIPLES="SOLID Principles",e.ARCHITECTURE_STYLES="Architecture Styles",e))(R||{});const Ji={[m.FACTORY]:{id:m.FACTORY,title:"Factory Method",category:R.CREATIONAL,shortDescription:"Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.",concept:"Imagine a logistics company. Initially, you only have trucks. Later, you add ships. A 'Factory' handles the creation logic. You just ask for a 'Vehicle' to deliver 'Cargo', and the factory decides whether to give you a Truck or a Ship based on the route.",technicalDefinition:"Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.",whyUseIt:["When you don't know beforehand the exact types and dependencies of the objects your code should work with.","To provide users of your library or framework with a way to extend its internal components.","To decouple product creation code from the product that is actually used."],takeaways:["Creates objects without specifying the exact class.","Delegates instantiation logic to a special method.","Useful when product types are dynamic.","Adheres to the Single Responsibility Principle."],code:{typescript:`
// 1. Common Interface
interface Transport {
  deliver(): void;
}

// 2. Concrete Products
class Truck implements Transport {
  deliver(): void {
    console.log("🚚 Delivering by land in a box.");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("🚢 Delivering by sea in a container.");
  }
}

// 3. Creator (Factory)
abstract class Logistics {
  // The Factory Method
  abstract createTransport(): Transport;

  // Core business logic uses the factory method
  planDelivery(): void {
    const transport = this.createTransport();
    console.log("Logistics: Plan started.");
    transport.deliver();
  }
}

// 4. Concrete Creators
class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

// Usage
console.log("--- Road Trip ---");
const road = new RoadLogistics();
road.planDelivery();

console.log("\\n--- Sea Voyage ---");
const sea = new SeaLogistics();
sea.planDelivery();
`,python:`
from abc import ABC, abstractmethod

# 1. Product Interface
class Transport(ABC):
    @abstractmethod
    def deliver(self):
        pass

# 2. Concrete Products
class Truck(Transport):
    def deliver(self):
        print("🚚 Delivering by land in a box.")

class Ship(Transport):
    def deliver(self):
        print("🚢 Delivering by sea in a container.")

# 3. Creator (Factory)
class Logistics(ABC):
    @abstractmethod
    def create_transport(self) -> Transport:
        pass

    def plan_delivery(self):
        # Calls the factory method to get a product
        transport = self.create_transport()
        print(f"Logistics: Plan started.")
        transport.deliver()

# 4. Concrete Creators
class RoadLogistics(Logistics):
    def create_transport(self) -> Transport:
        return Truck()

class SeaLogistics(Logistics):
    def create_transport(self) -> Transport:
        return Ship()

# Usage
if __name__ == "__main__":
    print("--- Road Trip ---")
    road = RoadLogistics()
    road.plan_delivery()

    print("\\n--- Sea Voyage ---")
    sea = SeaLogistics()
    sea.plan_delivery()
`,cpp:`
#include <iostream>
#include <memory>
using namespace std;

// 1. Product Interface
class Transport {
public:
    virtual void deliver() = 0;
    virtual ~Transport() {}
};

// 2. Concrete Products
class Truck : public Transport {
public:
    void deliver() override {
        cout << "🚚 Delivering by land in a box." << endl;
    }
};

class Ship : public Transport {
public:
    void deliver() override {
        cout << "🚢 Delivering by sea in a container." << endl;
    }
};

// 3. Creator (Factory)
class Logistics {
public:
    virtual unique_ptr<Transport> createTransport() = 0;

    void planDelivery() {
        unique_ptr<Transport> transport = createTransport();
        cout << "Logistics: Plan started." << endl;
        transport->deliver();
    }
    virtual ~Logistics() {}
};

// 4. Concrete Creators
class RoadLogistics : public Logistics {
public:
    unique_ptr<Transport> createTransport() override {
        return make_unique<Truck>();
    }
};

class SeaLogistics : public Logistics {
public:
    unique_ptr<Transport> createTransport() override {
        return make_unique<Ship>();
    }
};

// Usage
int main() {
    cout << "--- Road Trip ---" << endl;
    unique_ptr<Logistics> road = make_unique<RoadLogistics>();
    road->planDelivery();

    cout << "\\n--- Sea Voyage ---" << endl;
    unique_ptr<Logistics> sea = make_unique<SeaLogistics>();
    sea->planDelivery();

    return 0;
}
`}},[m.ABSTRACT_FACTORY]:{id:m.ABSTRACT_FACTORY,title:"Abstract Factory",category:R.CREATIONAL,shortDescription:"Lets you produce families of related objects without specifying their concrete classes.",concept:"Think of a furniture shop. You need a sofa, a chair, and a coffee table. An Abstract Factory ensures that if you choose the 'Modern' style, you get a Modern Sofa, Modern Chair, and Modern Table. If you choose 'Victorian', you get the full Victorian set. You don't mix and match accidentally.",technicalDefinition:"Provides an interface for creating families of related or dependent objects without specifying their concrete classes.",whyUseIt:["When your code needs to work with various families of related products.","To enforce consistency among products.","When you want to isolate concrete classes from client code."],takeaways:["Creates families of related objects.","Ensures products from the same factory match.","Client code works with interfaces, not concrete classes.","Adding new product families is easy; adding new products is hard."],code:{typescript:`
// 1. Abstract Products
interface Chair {
  sitOn(): void;
}

interface Table {
  putCoffee(): void;
}

// 2. Concrete Families (Modern)
class ModernChair implements Chair {
  sitOn() { console.log("🪑 Sitting on a sleek Modern Chair."); }
}
class ModernTable implements Table {
  putCoffee() { console.log("☕ Placing coffee on a glass Modern Table."); }
}

// 3. Concrete Families (Victorian)
class VictorianChair implements Chair {
  sitOn() { console.log("🛋️ Sitting on an elegant Victorian Chair."); }
}
class VictorianTable implements Table {
  putCoffee() { console.log("🪵 Placing coffee on a wooden Victorian Table."); }
}

// 4. Abstract Factory
interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}

// 5. Concrete Factories
class ModernFactory implements FurnitureFactory {
  createChair() { return new ModernChair(); }
  createTable() { return new ModernTable(); }
}

class VictorianFactory implements FurnitureFactory {
  createChair() { return new VictorianChair(); }
  createTable() { return new VictorianTable(); }
}

// 6. Client Code
function furnishHome(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();
  
  chair.sitOn();
  table.putCoffee();
}

// Usage
console.log("--- Modern Room ---");
furnishHome(new ModernFactory());

console.log("\\n--- Victorian Room ---");
furnishHome(new VictorianFactory());
`,python:`
from abc import ABC, abstractmethod

# 1. Abstract Products
class Chair(ABC):
    @abstractmethod
    def sit_on(self): pass

class Table(ABC):
    @abstractmethod
    def put_coffee(self): pass

# 2. Concrete Families (Modern)
class ModernChair(Chair):
    def sit_on(self): print("🪑 Sitting on a sleek Modern Chair.")

class ModernTable(Table):
    def put_coffee(self): print("☕ Placing coffee on a glass Modern Table.")

# 3. Concrete Families (Victorian)
class VictorianChair(Chair):
    def sit_on(self): print("🛋️ Sitting on an elegant Victorian Chair.")

class VictorianTable(Table):
    def put_coffee(self): print("🪵 Placing coffee on a wooden Victorian Table.")

# 4. Abstract Factory
class FurnitureFactory(ABC):
    @abstractmethod
    def create_chair(self) -> Chair: pass
    @abstractmethod
    def create_table(self) -> Table: pass

# 5. Concrete Factories
class ModernFactory(FurnitureFactory):
    def create_chair(self): return ModernChair()
    def create_table(self): return ModernTable()

class VictorianFactory(FurnitureFactory):
    def create_chair(self): return VictorianChair()
    def create_table(self): return VictorianTable()

# 6. Client Code
def furnish_home(factory: FurnitureFactory):
    chair = factory.create_chair()
    table = factory.create_table()
    chair.sit_on()
    table.put_coffee()

# Usage
if __name__ == "__main__":
    print("--- Modern Room ---")
    furnish_home(ModernFactory())

    print("\\n--- Victorian Room ---")
    furnish_home(VictorianFactory())
`,cpp:`
#include <iostream>
using namespace std;

// 1. Abstract Products
class Chair {
public: virtual void sitOn() = 0;
};
class Table {
public: virtual void putCoffee() = 0;
};

// 2. Concrete Families
class ModernChair : public Chair {
public: void sitOn() override { cout << "🪑 Sitting on Modern Chair." << endl; }
};
class ModernTable : public Table {
public: void putCoffee() override { cout << "☕ Coffee on Modern Table." << endl; }
};

class VictorianChair : public Chair {
public: void sitOn() override { cout << "🛋️ Sitting on Victorian Chair." << endl; }
};
class VictorianTable : public Table {
public: void putCoffee() override { cout << "🪵 Coffee on Victorian Table." << endl; }
};

// 3. Abstract Factory
class FurnitureFactory {
public:
    virtual Chair* createChair() = 0;
    virtual Table* createTable() = 0;
};

// 4. Concrete Factories
class ModernFactory : public FurnitureFactory {
public:
    Chair* createChair() override { return new ModernChair(); }
    Table* createTable() override { return new ModernTable(); }
};

class VictorianFactory : public FurnitureFactory {
public:
    Chair* createChair() override { return new VictorianChair(); }
    Table* createTable() override { return new VictorianTable(); }
};

// 5. Client
void furnishHome(FurnitureFactory* factory) {
    Chair* chair = factory->createChair();
    Table* table = factory->createTable();
    chair->sitOn();
    table->putCoffee();
    delete chair;
    delete table;
}

int main() {
    cout << "--- Modern Room ---" << endl;
    ModernFactory modern;
    furnishHome(&modern);

    cout << "\\n--- Victorian Room ---" << endl;
    VictorianFactory victorian;
    furnishHome(&victorian);
    return 0;
}
`}},[m.BUILDER]:{id:m.BUILDER,title:"Builder",category:R.CREATIONAL,shortDescription:"Lets you construct complex objects step by step. The same construction process can produce different types and representations of an object.",concept:"Ordering a custom burger. You don't just say 'Burger'. You say: Bun type? Sesame. Patties? Two. Cheese? Cheddar. Sauce? BBQ. The 'Builder' takes these individual steps and assembles the final complex object (the custom burger) tailored to your choices.",technicalDefinition:"Separates the construction of a complex object from its representation so that the same construction process can create different representations.",whyUseIt:["To get rid of a 'telescoping constructor' (constructors with 10 optional parameters).","When you want your code to be able to create different representations of some product.","To construct Complex objects step-by-step."],takeaways:["Separates construction from representation.","Allows fine-grained control over the construction process.","Isolates code for construction and assembly.","Often used for fluent interfaces (method chaining)."],code:{typescript:`
// 1. The Complex Product
class Computer {
  public cpu: string = '';
  public ram: string = '';
  public storage: string = '';
  public gpu: string = '';

  displaySpecs() {
    console.log(\`🖥️ Specs: CPU=\${this.cpu}, RAM=\${this.ram}, Storage=\${this.storage}, GPU=\${this.gpu}\`);
  }
}

// 2. The Builder Interface
interface ComputerBuilder {
  setCPU(cpu: string): this;
  setRAM(ram: string): this;
  setStorage(storage: string): this;
  setGPU(gpu: string): this;
  build(): Computer;
}

// 3. Concrete Builder
class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  reset() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): this {
    this.computer.cpu = cpu;
    return this;
  }
  setRAM(ram: string): this {
    this.computer.ram = ram;
    return this;
  }
  setStorage(storage: string): this {
    this.computer.storage = storage;
    return this;
  }
  setGPU(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    const result = this.computer;
    this.reset(); // Prepare for next build
    return result;
  }
}

// Usage (Fluent Interface)
const builder = new GamingComputerBuilder();

const myRig = builder
  .setCPU("Intel i9")
  .setRAM("32GB")
  .setStorage("1TB SSD")
  .setGPU("Nvidia RTX 4090")
  .build();

myRig.displaySpecs();

const officePC = builder
  .setCPU("Intel i5")
  .setRAM("16GB")
  .setStorage("512GB SSD")
  .build(); // No GPU

officePC.displaySpecs();
`,python:`
# 1. The Complex Product
class Computer:
    def __init__(self):
        self.cpu = ""
        self.ram = ""
        self.storage = ""
        self.gpu = "Integrated"

    def display_specs(self):
        print(f"🖥️ Specs: CPU={self.cpu}, RAM={self.ram}, Storage={self.storage}, GPU={self.gpu}")

# 2. The Builder
class ComputerBuilder:
    def __init__(self):
        self.computer = Computer()

    def reset(self):
        self.computer = Computer()

    def set_cpu(self, cpu):
        self.computer.cpu = cpu
        return self # Return self for chaining

    def set_ram(self, ram):
        self.computer.ram = ram
        return self

    def set_storage(self, storage):
        self.computer.storage = storage
        return self

    def set_gpu(self, gpu):
        self.computer.gpu = gpu
        return self

    def build(self):
        product = self.computer
        self.reset()
        return product

# Usage
if __name__ == "__main__":
    builder = ComputerBuilder()

    my_rig = (builder
        .set_cpu("Intel i9")
        .set_ram("32GB")
        .set_storage("1TB SSD")
        .set_gpu("RTX 4090")
        .build())
    
    my_rig.display_specs()

    office_pc = (builder
        .set_cpu("Intel i5")
        .set_ram("16GB")
        .set_storage("512GB SSD")
        .build())
    
    office_pc.display_specs()
`,cpp:`
#include <iostream>
#include <string>
using namespace std;

// 1. Product
class Computer {
public:
    string cpu, ram, storage, gpu = "Integrated";
    void display() {
        cout << "🖥️ Specs: " << cpu << ", " << ram << ", " << storage << ", " << gpu << endl;
    }
};

// 2. Builder
class ComputerBuilder {
private:
    Computer computer;
public:
    ComputerBuilder& setCPU(string cpu) {
        computer.cpu = cpu;
        return *this;
    }
    ComputerBuilder& setRAM(string ram) {
        computer.ram = ram;
        return *this;
    }
    ComputerBuilder& setStorage(string storage) {
        computer.storage = storage;
        return *this;
    }
    ComputerBuilder& setGPU(string gpu) {
        computer.gpu = gpu;
        return *this;
    }
    Computer build() {
        return computer; // Return copy
    }
};

// Usage
int main() {
    ComputerBuilder builder;
    
    Computer gamingPC = builder.setCPU("Intel i9")
                               .setRAM("32GB")
                               .setStorage("1TB NVMe")
                               .setGPU("RTX 4090")
                               .build();
    gamingPC.display();

    // Reset builder logic would be needed here for a new object usually
    // or instantiate a new builder
    ComputerBuilder builder2;
    Computer officePC = builder2.setCPU("i5").setRAM("16GB").setStorage("512GB").build();
    officePC.display();

    return 0;
}
`}},[m.PROTOTYPE]:{id:m.PROTOTYPE,title:"Prototype",category:R.CREATIONAL,shortDescription:"Lets you copy existing objects without making your code dependent on their classes.",concept:"Cell division (Mitosis). A cell doesn't ask a factory to build a new cell from scratch. Instead, it copies itself. The new cell is an exact clone of the prototype. Useful when creating a new object from scratch is expensive or complicated.",technicalDefinition:"Specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype.",whyUseIt:["When your code shouldn't depend on the concrete classes of objects that you need to copy.","When creating an object from scratch is resource-intensive (e.g., database calls).","To avoid subclassing just to initialize objects differently."],takeaways:["Clones objects to create new ones.","Hides the complexity of creating new instances.","avoid repetitive initialization code.","Useful for heavy objects like database configurations."],code:{typescript:`
// 1. Prototype Interface
interface Prototype {
  clone(): Prototype;
}

// 2. Concrete Prototype
class SmartPhone implements Prototype {
  public model: string;
  public color: string;
  public apps: string[];

  constructor(model: string, color: string, apps: string[] = []) {
    this.model = model;
    this.color = color;
    this.apps = apps;
  }

  // Deep Copy Logic
  clone(): SmartPhone {
    // We create a new object with the same primitive values
    // And importantly, we COPY the array (reference type) to avoid sharing it
    const clone = new SmartPhone(this.model, this.color, [...this.apps]);
    return clone;
  }

  display() {
    console.log(\`📱 \${this.model} (\${this.color}) - Apps: \${this.apps.join(', ')}\`);
  }
}

// Usage
const original = new SmartPhone("Galaxy S24", "Black", ["Maps", "Browser"]);
console.log("Original:");
original.display();

// Clone it
const copy = original.clone();
console.log("Clone (Initial):");
copy.display();

// Modify Copy (Should not affect Original)
copy.color = "Silver";
copy.apps.push("Games");

console.log("\\n--- After Modification ---");
console.log("Original (Unchanged):");
original.display();
console.log("Clone (Modified):");
copy.display();
`,python:`
import copy

# 1. Prototype Class
class SmartPhone:
    def __init__(self, model, color, apps=None):
        self.model = model
        self.color = color
        self.apps = apps if apps else []

    # Python's built-in hooks for copying
    def clone(self):
        return copy.deepcopy(self)

    def display(self):
        print(f"📱 {self.model} ({self.color}) - Apps: {', '.join(self.apps)}")

# Usage
if __name__ == "__main__":
    original = SmartPhone("Galaxy S24", "Black", ["Maps", "Browser"])
    print("Original:")
    original.display()

    # Create a clone
    cloned_phone = original.clone()
    
    # Modify clone
    cloned_phone.color = "Silver"
    cloned_phone.apps.append("Games")

    print("\\n--- After Modification ---")
    print("Original (Should remain Black with 2 apps):")
    original.display()
    print("Clone (Should be Silver with 3 apps):")
    cloned_phone.display()
`,cpp:`
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class SmartPhone {
public:
    string model;
    string color;
    vector<string> apps;

    SmartPhone(string m, string c, vector<string> a) : model(m), color(c), apps(a) {}

    // Copy Constructor (Handles deep copy automatically for vector)
    SmartPhone(const SmartPhone& other) 
        : model(other.model), color(other.color), apps(other.apps) {}

    // Clone Method
    SmartPhone* clone() {
        return new SmartPhone(*this); // Calls copy constructor
    }

    void display() {
        cout << "📱 " << model << " (" << color << ") - Apps: ";
        for(const auto& app : apps) cout << app << " ";
        cout << endl;
    }
};

int main() {
    vector<string> apps = {"Maps", "Browser"};
    SmartPhone* original = new SmartPhone("Galaxy S24", "Black", apps);
    
    SmartPhone* copyPhone = original->clone();
    copyPhone->color = "Silver";
    copyPhone->apps.push_back("Games");

    cout << "Original:" << endl;
    original->display();
    
    cout << "Clone:" << endl;
    copyPhone->display();

    delete original;
    delete copyPhone;
    return 0;
}
`}},[m.SINGLETON]:{id:m.SINGLETON,title:"Singleton",category:R.CREATIONAL,shortDescription:"Lets you ensure that a class has only one instance, while providing a global access point to this instance.",concept:"The President of a country. There can only be one active president at a time. Whenever anyone refers to 'The President', they are referring to that same single person. The system prevents multiple people from holding the title simultaneously.",technicalDefinition:"Ensures a class has only one instance and provides a global point of access to it.",whyUseIt:["When a class in your program should have just a single instance available to all clients (e.g., a database connection shared by all parts of the app).","To control access to a shared resource.","To provide a global access point."],takeaways:["Guarantees only one instance exists.","Provides a global access point.","Lazy initialization is common.","Can be difficult to unit test (global state)."],code:{typescript:`
class DatabaseConnection {
  // 1. Static variable to hold the single instance
  private static instance: DatabaseConnection;

  // 2. Private constructor prevents direct 'new DatabaseConnection()' calls
  private constructor() {
    console.log("🔌 Initializing DB Connection... (Should only happen once)");
  }

  // 3. Static method to access the instance
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(\`Running Query: \${sql}\`);
  }
}

// Usage
// const db = new DatabaseConnection(); // Error: constructor is private

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

db1.query("SELECT * FROM users");
db2.query("UPDATE users SET name='Alice'");

if (db1 === db2) {
  console.log("✅ Both variables hold the exact same instance.");
}
`,python:`
class DatabaseConnection:
    _instance = None

    # Python's constructor allocator
    def __new__(cls):
        if cls._instance is None:
            print("🔌 Initializing DB Connection...")
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
        return cls._instance

    def query(self, sql):
        print(f"Running Query: {sql}")

# Usage
if __name__ == "__main__":
    db1 = DatabaseConnection()
    db2 = DatabaseConnection()

    db1.query("SELECT * FROM users")

    if db1 is db2:
        print("✅ Both variables hold the exact same instance.")
`,cpp:`
#include <iostream>
using namespace std;

class DatabaseConnection {
private:
    static DatabaseConnection* instance;
    
    // Private Constructor
    DatabaseConnection() {
        cout << "🔌 Initializing DB Connection..." << endl;
    }

public:
    // Delete copy constructor to prevent cloning
    DatabaseConnection(const DatabaseConnection&) = delete;

    static DatabaseConnection* getInstance() {
        if (instance == nullptr) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    void query(string sql) {
        cout << "Running Query: " << sql << endl;
    }
};

// Initialize static member
DatabaseConnection* DatabaseConnection::instance = nullptr;

int main() {
    DatabaseConnection* db1 = DatabaseConnection::getInstance();
    DatabaseConnection* db2 = DatabaseConnection::getInstance();

    db1->query("SELECT * FROM users");

    if (db1 == db2) {
        cout << "✅ Both variables hold the exact same instance." << endl;
    }
    return 0;
}
`}},[m.ADAPTER]:{id:m.ADAPTER,title:"Adapter",category:R.STRUCTURAL,shortDescription:"Allows objects with incompatible interfaces to collaborate.",concept:"A travel power plug adapter. Your laptop plug (Client) doesn't fit into the foreign wall socket (Service). The adapter sits in the middle, translating the shape of your plug into the shape of the socket, allowing electricity to flow.",technicalDefinition:"Converts the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.",whyUseIt:["When you want to use an existing class, but its interface isn't compatible with the rest of your code.","When you want to reuse several existing subclasses that lack some common functionality that can't be added to the superclass."],takeaways:["Converts one interface to another.","Allows incompatible classes to work together.","Useful for integrating legacy code.","Can be implemented via inheritance (Class Adapter) or composition (Object Adapter)."],code:{typescript:`
// 1. Target Interface (What the client expects)
interface USBCPort {
  connectUSBC(): void;
}

// 2. Adaptee (The old legacy class, incompatible)
class OldUSBADrive {
  insertUSBA(): void {
    console.log("💾 USB-A Drive inserted.");
  }
}

// 3. Adapter (Makes Adaptee look like Target)
class USBCAdapter implements USBCPort {
  private drive: OldUSBADrive;

  constructor(drive: OldUSBADrive) {
    this.drive = drive;
  }

  connectUSBC(): void {
    console.log("🔌 Adapter converting USB-C call to USB-A...");
    this.drive.insertUSBA();
  }
}

// Usage
const myLaptop = {
  connectDevice: (device: USBCPort) => {
    device.connectUSBC();
  }
};

const oldDrive = new OldUSBADrive();
// myLaptop.connectDevice(oldDrive); // Error! Incompatible.

const adapter = new USBCAdapter(oldDrive);
myLaptop.connectDevice(adapter); // Works!
`,python:`
# 1. Target Interface (Conceptually)
class USBCPort:
    def connect_usbc(self): pass

# 2. Adaptee
class OldUSBADrive:
    def insert_usba(self):
        print("💾 USB-A Drive inserted.")

# 3. Adapter
class USBCAdapter:
    def __init__(self, drive):
        self.drive = drive

    def connect_usbc(self):
        print("🔌 Adapter converting USB-C call to USB-A...")
        self.drive.insert_usba()

# Usage
def connect_device_to_laptop(device):
    device.connect_usbc()

old_drive = OldUSBADrive()
# connect_device_to_laptop(old_drive) # Fails

adapter = USBCAdapter(old_drive)
connect_device_to_laptop(adapter) # Works
`,cpp:`
#include <iostream>
using namespace std;

// 1. Target
class USBCPort {
public:
    virtual void connectUSBC() = 0;
};

// 2. Adaptee
class OldUSBADrive {
public:
    void insertUSBA() {
        cout << "💾 USB-A Drive inserted." << endl;
    }
};

// 3. Adapter
class USBCAdapter : public USBCPort {
private:
    OldUSBADrive* drive;
public:
    USBCAdapter(OldUSBADrive* d) : drive(d) {}
    
    void connectUSBC() override {
        cout << "🔌 Adapter converting USB-C to USB-A..." << endl;
        drive->insertUSBA();
    }
};

// Usage
int main() {
    OldUSBADrive* oldDrive = new OldUSBADrive();
    USBCAdapter* adapter = new USBCAdapter(oldDrive);
    
    adapter->connectUSBC();
    
    delete oldDrive;
    delete adapter;
    return 0;
}
`}},[m.BRIDGE]:{id:m.BRIDGE,title:"Bridge",category:R.STRUCTURAL,shortDescription:"Lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently.",concept:"A remote control (Abstraction) and a TV (Implementation). You can have a basic remote or a fancy remote. You can have a Sony TV or a Samsung TV. The remote doesn't need to know the inner details of the TV brand; it just sends signals. You can develop new remotes without changing TVs, and vice versa.",technicalDefinition:"Decouples an abstraction from its implementation so that the two can vary independently.",whyUseIt:["When you want to divide and organize a monolithic class that has several variants of functionality.","To extend a class in several orthogonal (independent) dimensions.","To switch implementations at runtime."],takeaways:["Separates abstraction from implementation.","Both hierarchies can grow independently.","Prevents Cartesian product complexity explosion.","Uses composition over inheritance."],code:{typescript:`
// 1. Implementation Interface
interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
}

// 2. Concrete Implementations
class TV implements Device {
  private on = false;
  isEnabled() { return this.on; }
  enable() { this.on = true; console.log("📺 TV turned ON"); }
  disable() { this.on = false; console.log("📺 TV turned OFF"); }
}

class Radio implements Device {
  private on = false;
  isEnabled() { return this.on; }
  enable() { this.on = true; console.log("📻 Radio turned ON"); }
  disable() { this.on = false; console.log("📻 Radio turned OFF"); }
}

// 3. Abstraction
class RemoteControl {
  constructor(protected device: Device) {}

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
}

// 4. Refined Abstraction
class AdvancedRemote extends RemoteControl {
  mute() {
    console.log("🔇 Muting device...");
    // Complex logic here
  }
}

// Usage
const tv = new TV();
const remote = new RemoteControl(tv);
remote.togglePower(); // Turns TV On

const radio = new Radio();
const advancedRemote = new AdvancedRemote(radio);
advancedRemote.togglePower(); // Turns Radio On
advancedRemote.mute();
`,python:`
# 1. Implementation
class Device:
    def is_enabled(self): pass
    def enable(self): pass
    def disable(self): pass

# 2. Concrete Implementations
class TV(Device):
    def __init__(self): self.on = False
    def is_enabled(self): return self.on
    def enable(self): 
        self.on = True
        print("📺 TV turned ON")
    def disable(self): 
        self.on = False
        print("📺 TV turned OFF")

class Radio(Device):
    def __init__(self): self.on = False
    def is_enabled(self): return self.on
    def enable(self): 
        self.on = True
        print("📻 Radio turned ON")
    def disable(self): 
        self.on = False
        print("📻 Radio turned OFF")

# 3. Abstraction
class RemoteControl:
    def __init__(self, device):
        self.device = device
    
    def toggle_power(self):
        if self.device.is_enabled():
            self.device.disable()
        else:
            self.device.enable()

# 4. Refined Abstraction
class AdvancedRemote(RemoteControl):
    def mute(self):
        print("🔇 Muting device...")

# Usage
tv = TV()
remote = RemoteControl(tv)
remote.toggle_power()

radio = Radio()
adv_remote = AdvancedRemote(radio)
adv_remote.toggle_power()
adv_remote.mute()
`,cpp:`
#include <iostream>
using namespace std;

// 1. Implementation
class Device {
public:
    virtual bool isEnabled() = 0;
    virtual void enable() = 0;
    virtual void disable() = 0;
};

// 2. Concrete Implementations
class TV : public Device {
    bool on = false;
public:
    bool isEnabled() override { return on; }
    void enable() override { on = true; cout << "📺 TV turned ON" << endl; }
    void disable() override { on = false; cout << "📺 TV turned OFF" << endl; }
};

class Radio : public Device {
    bool on = false;
public:
    bool isEnabled() override { return on; }
    void enable() override { on = true; cout << "📻 Radio turned ON" << endl; }
    void disable() override { on = false; cout << "📻 Radio turned OFF" << endl; }
};

// 3. Abstraction
class RemoteControl {
protected:
    Device* device;
public:
    RemoteControl(Device* d) : device(d) {}
    virtual void togglePower() {
        if(device->isEnabled()) device->disable();
        else device->enable();
    }
};

// 4. Refined Abstraction
class AdvancedRemote : public RemoteControl {
public:
    AdvancedRemote(Device* d) : RemoteControl(d) {}
    void mute() {
        cout << "🔇 Muting device..." << endl;
    }
};

int main() {
    TV tv;
    RemoteControl remote(&tv);
    remote.togglePower();

    Radio radio;
    AdvancedRemote advRemote(&radio);
    advRemote.togglePower();
    advRemote.mute();
    return 0;
}
`}},[m.COMPOSITE]:{id:m.COMPOSITE,title:"Composite",category:R.STRUCTURAL,shortDescription:"Lets you compose objects into tree structures and then work with these structures as if they were individual objects.",concept:"A file system structure. A folder can contain files or other folders. If you want to know the 'size' of a folder, you don't care if it contains a single file or a nested tree of folders. You just call `getSize()` and it recursively calculates the total. The client treats files and folders uniformly.",technicalDefinition:"Composes objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",whyUseIt:["When you need to implement a tree-like object structure.","When you want the client code to treat simple and complex elements uniformly."],takeaways:["Treats individual objects and compositions uniformly.","Ideal for tree structures (UI trees, file systems).","Simplifies client code.","Makes it easy to add new component types."],code:{typescript:`
// 1. Component
abstract class FileSystemNode {
  constructor(public name: string) {}
  abstract getSize(): number;
}

// 2. Leaf
class File extends FileSystemNode {
  constructor(name: string, private size: number) {
    super(name);
  }
  getSize(): number {
    return this.size;
  }
}

// 3. Composite
class Folder extends FileSystemNode {
  private children: FileSystemNode[] = [];

  add(node: FileSystemNode) {
    this.children.push(node);
  }

  getSize(): number {
    // Recursive magic happens here
    return this.children.reduce((acc, child) => acc + child.getSize(), 0);
  }
}

// Usage
const root = new Folder("Root");
const folderA = new Folder("My Documents");
const folderB = new Folder("Images");

const file1 = new File("resume.pdf", 500);
const file2 = new File("photo.png", 2000);
const file3 = new File("notes.txt", 100);

folderA.add(file1);
folderB.add(file2);
root.add(folderA);
root.add(folderB);
root.add(file3); // Adding file directly to root

console.log(\`Total Size: \${root.getSize()} KB\`);
// Output: 2600 KB (500 + 2000 + 100)
`,python:`
from abc import ABC, abstractmethod

# 1. Component
class FileSystemNode(ABC):
    def __init__(self, name):
        self.name = name

    @abstractmethod
    def get_size(self): pass

# 2. Leaf
class File(FileSystemNode):
    def __init__(self, name, size):
        super().__init__(name)
        self.size = size

    def get_size(self):
        return self.size

# 3. Composite
class Folder(FileSystemNode):
    def __init__(self, name):
        super().__init__(name)
        self.children = []

    def add(self, node):
        self.children.append(node)

    def get_size(self):
        # Recursive summation
        return sum(child.get_size() for child in self.children)

# Usage
root = Folder("Root")
folder_a = Folder("Documents")
folder_b = Folder("Images")

root.add(folder_a)
root.add(folder_b)

folder_a.add(File("resume.pdf", 500))
folder_b.add(File("photo.png", 2000))
root.add(File("notes.txt", 100))

print(f"Total Size: {root.get_size()} KB")
`,cpp:`
#include <iostream>
#include <vector>
#include <string>
#include <numeric>
using namespace std;

// 1. Component
class FileSystemNode {
protected:
    string name;
public:
    FileSystemNode(string n) : name(n) {}
    virtual int getSize() = 0;
    virtual ~FileSystemNode() {}
};

// 2. Leaf
class File : public FileSystemNode {
    int size;
public:
    File(string n, int s) : FileSystemNode(n), size(s) {}
    int getSize() override { return size; }
};

// 3. Composite
class Folder : public FileSystemNode {
    vector<FileSystemNode*> children;
public:
    Folder(string n) : FileSystemNode(n) {}
    
    void add(FileSystemNode* node) {
        children.push_back(node);
    }
    
    int getSize() override {
        int total = 0;
        for(auto child : children) {
            total += child->getSize();
        }
        return total;
    }
};

int main() {
    Folder* root = new Folder("Root");
    Folder* docs = new Folder("Docs");
    
    docs->add(new File("resume.pdf", 500));
    root->add(docs);
    root->add(new File("photo.png", 2000));
    
    cout << "Total Size: " << root->getSize() << " KB" << endl;
    return 0;
}
`}},[m.DECORATOR]:{id:m.DECORATOR,title:"Decorator",category:R.STRUCTURAL,shortDescription:"Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.",concept:"Wearing clothes. You (the Object) are the same person whether you're naked or dressed. But if it's cold, you put on a sweater (Decorator). If it's raining, you put a raincoat over the sweater. You are 'decorating' yourself with layers that add functionality (warmth, dryness) without changing who you are.",technicalDefinition:"Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.",whyUseIt:["When you need to assign extra behaviors to objects at runtime without breaking the code that uses these objects.","When it's awkward or not possible to extend a class's behavior using inheritance."],takeaways:["Adds behavior dynamically.","Alternative to subclassing for extending functionality.","Supports recursive composition (onion layers).","Adheres to Open/Closed Principle."],code:{typescript:`
// 1. Component Interface
interface Coffee {
  cost(): number;
  description(): string;
}

// 2. Concrete Component
class SimpleCoffee implements Coffee {
  cost() { return 10; }
  description() { return "Coffee"; }
}

// 3. Base Decorator
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost() { return this.coffee.cost(); }
  description() { return this.coffee.description(); }
}

// 4. Concrete Decorators
class Milk extends CoffeeDecorator {
  cost() { return super.cost() + 2; }
  description() { return super.description() + ", Milk"; }
}

class Sugar extends CoffeeDecorator {
  cost() { return super.cost() + 1; }
  description() { return super.description() + ", Sugar"; }
}

class Vanilla extends CoffeeDecorator {
  cost() { return super.cost() + 3; }
  description() { return super.description() + ", Vanilla"; }
}

// Usage
let myCoffee = new SimpleCoffee();
console.log(\`\${myCoffee.description()} = $\${myCoffee.cost()}\`);

myCoffee = new Milk(myCoffee);
console.log(\`\${myCoffee.description()} = $\${myCoffee.cost()}\`);

// Double Sugar
myCoffee = new Sugar(new Sugar(myCoffee));
console.log(\`\${myCoffee.description()} = $\${myCoffee.cost()}\`);
// Output: Coffee, Milk, Sugar, Sugar = $14
`,python:`
# 1. Component
class Coffee:
    def cost(self): return 10
    def description(self): return "Coffee"

# 2. Decorators
class CoffeeDecorator:
    def __init__(self, coffee):
        self._coffee = coffee
    
    def cost(self): return self._coffee.cost()
    def description(self): return self._coffee.description()

class Milk(CoffeeDecorator):
    def cost(self): return self._coffee.cost() + 2
    def description(self): return self._coffee.description() + ", Milk"

class Sugar(CoffeeDecorator):
    def cost(self): return self._coffee.cost() + 1
    def description(self): return self._coffee.description() + ", Sugar"

# Usage
my_coffee = Coffee()
my_coffee = Milk(my_coffee)
my_coffee = Sugar(my_coffee)

print(f"{my_coffee.description()} = \${my_coffee.cost()}")
`,cpp:`
#include <iostream>
#include <string>
using namespace std;

// 1. Component
class Coffee {
public:
    virtual int cost() { return 10; }
    virtual string description() { return "Coffee"; }
    virtual ~Coffee() {}
};

// 2. Decorator
class CoffeeDecorator : public Coffee {
protected:
    Coffee* coffee;
public:
    CoffeeDecorator(Coffee* c) : coffee(c) {}
};

class Milk : public CoffeeDecorator {
public:
    Milk(Coffee* c) : CoffeeDecorator(c) {}
    int cost() override { return coffee->cost() + 2; }
    string description() override { return coffee->description() + ", Milk"; }
};

class Sugar : public CoffeeDecorator {
public:
    Sugar(Coffee* c) : CoffeeDecorator(c) {}
    int cost() override { return coffee->cost() + 1; }
    string description() override { return coffee->description() + ", Sugar"; }
};

int main() {
    Coffee* myCoffee = new Coffee();
    myCoffee = new Milk(myCoffee);
    myCoffee = new Sugar(myCoffee);
    
    cout << myCoffee->description() << " = $" << myCoffee->cost() << endl;
    return 0;
}
`}},[m.FACADE]:{id:m.FACADE,title:"Facade",category:R.STRUCTURAL,shortDescription:"Provides a simplified interface to a library, a framework, or any other complex set of classes.",concept:"A home theater system remote. To watch a movie, you might need to turn on the TV, set the input, turn on the speakers, set the volume, turn on the DVD player, and press play. A Facade is a single button 'Watch Movie' that does all of this for you behind the scenes, hiding the complexity.",technicalDefinition:"Provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.",whyUseIt:["When you need to have a limited but straightforward interface to a complex subsystem.","When you want to structure a subsystem into layers."],takeaways:["Simplifies a complex system interface.","Decouples client from the subsystem.","Does not prevent access to the deeper system if needed.","Commonly used to wrap libraries."],code:{typescript:`
// Complex Subsystem Parts
class Amplifier {
  on() { console.log("Amp On"); }
  setVolume(v: number) { console.log(\`Volume set to \${v}\`); }
}

class Projector {
  on() { console.log("Projector On"); }
  setInput(input: string) { console.log(\`Input set to \${input}\`); }
}

class Lights {
  dim(level: number) { console.log(\`Lights dimmed to \${level}%\`); }
}

// Facade
class HomeTheaterFacade {
  constructor(
    private amp: Amplifier,
    private proj: Projector,
    private lights: Lights
  ) {}

  watchMovie(movie: string) {
    console.log(\`--- Get ready to watch \${movie} ---\`);
    this.lights.dim(10);
    this.amp.on();
    this.amp.setVolume(5);
    this.proj.on();
    this.proj.setInput("BluRay");
  }
}

// Usage
const homeTheater = new HomeTheaterFacade(
  new Amplifier(),
  new Projector(),
  new Lights()
);

homeTheater.watchMovie("Inception");
`,python:`
# Subsystems
class Amplifier:
    def on(self): print("Amp On")
    def set_volume(self, v): print(f"Volume set to {v}")

class Projector:
    def on(self): print("Projector On")
    def set_input(self, i): print(f"Input set to {i}")

class Lights:
    def dim(self, l): print(f"Lights dimmed to {l}%")

# Facade
class HomeTheaterFacade:
    def __init__(self, amp, proj, lights):
        self.amp = amp
        self.proj = proj
        self.lights = lights

    def watch_movie(self, movie):
        print(f"--- Get ready to watch {movie} ---")
        self.lights.dim(10)
        self.amp.on()
        self.amp.set_volume(5)
        self.proj.on()
        self.proj.set_input("BluRay")

# Usage
home = HomeTheaterFacade(Amplifier(), Projector(), Lights())
home.watch_movie("Matrix")
`,cpp:`
#include <iostream>
#include <string>
using namespace std;

// Subsystems
class Amplifier {
public: void on() { cout << "Amp On" << endl; }
};
class Projector {
public: void on() { cout << "Projector On" << endl; }
};
class Lights {
public: void dim() { cout << "Lights dimmed" << endl; }
};

// Facade
class HomeTheaterFacade {
    Amplifier amp;
    Projector proj;
    Lights lights;
public:
    void watchMovie() {
        cout << "--- Watching Movie ---" << endl;
        lights.dim();
        amp.on();
        proj.on();
    }
};

int main() {
    HomeTheaterFacade home;
    home.watchMovie();
    return 0;
}
`}},[m.FLYWEIGHT]:{id:m.FLYWEIGHT,title:"Flyweight",category:R.STRUCTURAL,shortDescription:"Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.",concept:"A forest in a video game. Drawing 1 million unique trees would crash the game. Instead, you create one 'Tree Type' object (green texture, pine shape) and reuse it 1 million times, only changing the position (x, y) for each instance. The heavy data is shared; the unique data is lightweight.",technicalDefinition:"Uses sharing to support large numbers of fine-grained objects efficiently.",whyUseIt:["When your program needs to spawn a huge number of similar objects.","When your app runs out of RAM due to object overhead."],takeaways:["Optimizes memory usage.","Separates intrinsic (shared) and extrinsic (unique) state.","Intrinsic state is immutable.","Essential for game development and graphics."],code:{typescript:`
// 1. Intrinsic State (Shared, Heavy)
class TreeType {
  constructor(private name: string, private color: string, private texture: string) {}

  draw(x: number, y: number) {
    console.log(\`Drawing \${this.name} (\${this.color}) at x:\${x}, y:\${y}\`);
  }
}

// 2. Factory (Manages Cache)
class TreeFactory {
  static treeTypes: Record<string, TreeType> = {};

  static getTreeType(name: string, color: string, texture: string) {
    const key = \`\${name}-\${color}\`;
    if (!this.treeTypes[key]) {
      console.log(\`Creating new TreeType: \${name}\`);
      this.treeTypes[key] = new TreeType(name, color, texture);
    }
    return this.treeTypes[key];
  }
}

// 3. Extrinsic State (Context, Unique)
class Tree {
  constructor(
    private x: number, 
    private y: number, 
    private type: TreeType
  ) {}

  draw() {
    this.type.draw(this.x, this.y);
  }
}

// Usage: Planting a forest
const forest: Tree[] = [];
const type1 = TreeFactory.getTreeType("Oak", "Green", "TextureA");
const type2 = TreeFactory.getTreeType("Pine", "DarkGreen", "TextureB");

// Reusing existing type!
const type3 = TreeFactory.getTreeType("Oak", "Green", "TextureA"); 

forest.push(new Tree(1, 2, type1));
forest.push(new Tree(5, 5, type2));
forest.push(new Tree(10, 20, type3)); // Uses cached Oak

forest.forEach(t => t.draw());
// Only 2 TreeTypes created for 3 trees.
`,python:`
# 1. Intrinsic
class TreeType:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def draw(self, x, y):
        print(f"Drawing {self.name} ({self.color}) at {x}, {y}")

# 2. Factory
class TreeFactory:
    _types = {}

    @staticmethod
    def get_tree_type(name, color):
        key = (name, color)
        if key not in TreeFactory._types:
            print(f"Creating new TreeType: {name}")
            TreeFactory._types[key] = TreeType(name, color)
        return TreeFactory._types[key]

# 3. Extrinsic
class Tree:
    def __init__(self, x, y, tree_type):
        self.x = x
        self.y = y
        self.type = tree_type
    
    def draw(self):
        self.type.draw(self.x, self.y)

# Usage
type_a = TreeFactory.get_tree_type("Oak", "Green")
type_b = TreeFactory.get_tree_type("Pine", "DarkGreen")
type_c = TreeFactory.get_tree_type("Oak", "Green") # Reuses type_a

t1 = Tree(1, 1, type_a)
t2 = Tree(2, 5, type_b)
t3 = Tree(10, 10, type_c)

t1.draw()
t2.draw()
t3.draw()
`,cpp:`
#include <iostream>
#include <map>
#include <string>
using namespace std;

// 1. Intrinsic
class TreeType {
    string name;
public:
    TreeType(string n) : name(n) {}
    void draw(int x, int y) {
        cout << "Drawing " << name << " at " << x << "," << y << endl;
    }
};

// 2. Factory
class TreeFactory {
    static map<string, TreeType*> types;
public:
    static TreeType* getTreeType(string name) {
        if (types.find(name) == types.end()) {
            cout << "Creating new " << name << endl;
            types[name] = new TreeType(name);
        }
        return types[name];
    }
};
map<string, TreeType*> TreeFactory::types;

// 3. Extrinsic
class Tree {
    int x, y;
    TreeType* type;
public:
    Tree(int x, int y, TreeType* t) : x(x), y(y), type(t) {}
    void draw() { type->draw(x, y); }
};

int main() {
    TreeType* oak = TreeFactory::getTreeType("Oak");
    TreeType* pine = TreeFactory::getTreeType("Pine");
    TreeType* oak2 = TreeFactory::getTreeType("Oak"); // Returns existing

    Tree t1(1, 2, oak);
    Tree t2(5, 5, pine);
    Tree t3(10, 20, oak2);

    t1.draw();
    t2.draw();
    t3.draw();
    return 0;
}
`}},[m.PROXY]:{id:m.PROXY,title:"Proxy",category:R.STRUCTURAL,shortDescription:"Lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.",concept:"A credit card. It is a proxy for the cash in your bank account. You can use it to pay, but the bank (the real object) checks if you have funds before approving. It acts as a gateway and control mechanism without you needing to carry the actual cash bundle.",technicalDefinition:"Provides a surrogate or placeholder for another object to control access to it.",whyUseIt:["Lazy initialization (virtual proxy).","Access control (protection proxy).","Local execution of a remote service (remote proxy).","Logging requests (logging proxy)."],takeaways:["Controls access to an object.","Can handle lazy loading/caching.","Client doesn't know it's using a proxy.","Adds a layer of security or management."],code:{typescript:`
interface Video {
  play(): void;
}

class RealVideo implements Video {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(\`Loading \${this.filename} from disk... (Heavy Operation)\`);
  }

  play() {
    console.log(\`Playing \${this.filename}\`);
  }
}

// Proxy
class ProxyVideo implements Video {
  private realVideo: RealVideo | null = null;

  constructor(private filename: string) {}

  play() {
    // Lazy Initialization:
    // Only create the heavy object when needed
    if (this.realVideo === null) {
      this.realVideo = new RealVideo(this.filename);
    }
    this.realVideo.play();
  }
}

// Usage
const video = new ProxyVideo("tutorial.mp4");

// Video is NOT loaded yet (saving memory)
console.log("Video object created. Nothing loaded.");

// Video loads now
video.play(); 

// Video plays immediately (already loaded)
video.play(); 
`,python:`
class RealVideo:
    def __init__(self, filename):
        self.filename = filename
        print(f"Loading {filename} from disk... (Heavy)")
    
    def play(self):
        print(f"Playing {self.filename}")

class ProxyVideo:
    def __init__(self, filename):
        self.filename = filename
        self.real_video = None
    
    def play(self):
        if self.real_video is None:
            self.real_video = RealVideo(self.filename)
        self.real_video.play()

# Usage
video = ProxyVideo("movie.mp4")
print("Proxy created.")
video.play() # Loads now
video.play() # Cached
`,cpp:`
#include <iostream>
#include <string>
using namespace std;

class Video {
public:
    virtual void play() = 0;
};

class RealVideo : public Video {
    string filename;
public:
    RealVideo(string f) : filename(f) {
        cout << "Loading " << filename << "..." << endl;
    }
    void play() override {
        cout << "Playing " << filename << endl;
    }
};

class ProxyVideo : public Video {
    RealVideo* realVideo;
    string filename;
public:
    ProxyVideo(string f) : filename(f), realVideo(nullptr) {}
    
    void play() override {
        if (!realVideo) {
            realVideo = new RealVideo(filename);
        }
        realVideo->play();
    }
};

int main() {
    ProxyVideo video("movie.mp4");
    cout << "Proxy created" << endl;
    video.play();
    video.play();
    return 0;
}
`}},[m.CHAIN_OF_RESPONSIBILITY]:{id:m.CHAIN_OF_RESPONSIBILITY,title:"Chain of Responsibility",category:R.BEHAVIORAL,shortDescription:"Lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.",concept:"Tech support. You call the help desk (Level 1). If they can't fix it, they pass you to a specialist (Level 2). If it's a bug, it goes to a developer (Level 3). The request travels up the chain until someone handles it.",technicalDefinition:"Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chains the receiving objects and passes the request along the chain until an object handles it.",whyUseIt:["When your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.","When it's essential to execute several handlers in a specific order."],takeaways:["Decouples sender and receiver.","Handlers can be added dynamically.","Request can stop at any point in the chain.","No guarantee the request will be handled."],code:{typescript:`
// 1. Handler Interface
abstract class Approver {
  protected next: Approver | null = null;

  setNext(handler: Approver): Approver {
    this.next = handler;
    return handler; // Returning handler allows chaining
  }

  abstract handleRequest(amount: number): void;
}

// 2. Concrete Handlers
class TeamLead extends Approver {
  handleRequest(amount: number) {
    if (amount <= 1000) {
      console.log(\`✅ TeamLead approved $\${amount}\`);
    } else if (this.next) {
      console.log("TeamLead can't approve. Passing to Manager...");
      this.next.handleRequest(amount);
    }
  }
}

class Manager extends Approver {
  handleRequest(amount: number) {
    if (amount <= 5000) {
      console.log(\`✅ Manager approved $\${amount}\`);
    } else if (this.next) {
      console.log("Manager can't approve. Passing to Director...");
      this.next.handleRequest(amount);
    }
  }
}

class Director extends Approver {
  handleRequest(amount: number) {
    if (amount <= 10000) {
      console.log(\`✅ Director approved $\${amount}\`);
    } else {
      console.log("❌ Director: Too expensive! Meeting required.");
    }
  }
}

// Usage
const lead = new TeamLead();
const manager = new Manager();
const director = new Director();

// Build Chain: Lead -> Manager -> Director
lead.setNext(manager).setNext(director);

console.log("--- Request 500 ---");
lead.handleRequest(500);

console.log("\\n--- Request 3000 ---");
lead.handleRequest(3000);

console.log("\\n--- Request 20000 ---");
lead.handleRequest(20000);
`,python:`
class Approver:
    def __init__(self):
        self.next = None

    def set_next(self, handler):
        self.next = handler
        return handler

    def handle(self, amount):
        if self.next:
            self.next.handle(amount)
        else:
            print("❌ No one could approve.")

class TeamLead(Approver):
    def handle(self, amount):
        if amount <= 1000:
            print(f"✅ Lead approved \${amount}")
        else:
            print("Lead passing...")
            super().handle(amount)

class Manager(Approver):
    def handle(self, amount):
        if amount <= 5000:
            print(f"✅ Manager approved \${amount}")
        else:
            print("Manager passing...")
            super().handle(amount)

# Usage
lead = TeamLead()
manager = Manager()
lead.set_next(manager)

lead.handle(500)
lead.handle(3000)
`,cpp:`
#include <iostream>
using namespace std;

class Approver {
protected:
    Approver* next = nullptr;
public:
    void setNext(Approver* n) { next = n; }
    virtual void handle(int amount) {
        if (next) next->handle(amount);
        else cout << "❌ Denied." << endl;
    }
};

class Lead : public Approver {
public:
    void handle(int amount) override {
        if (amount <= 1000) cout << "✅ Lead approved." << endl;
        else Approver::handle(amount);
    }
};

class Manager : public Approver {
public:
    void handle(int amount) override {
        if (amount <= 5000) cout << "✅ Manager approved." << endl;
        else Approver::handle(amount);
    }
};

int main() {
    Lead lead;
    Manager manager;
    lead.setNext(&manager);
    
    lead.handle(500);
    lead.handle(3000);
    return 0;
}
`}},[m.COMMAND]:{id:m.COMMAND,title:"Command",category:R.BEHAVIORAL,shortDescription:"Turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.",concept:"A Text Editor with Undo/Redo. Every time you type a character or make text bold, the editor doesn't just execute the logic instantly; it wraps that action in a Command object (e.g., 'TypeCommand', 'FormatCommand') and pushes it onto a history stack. When you hit Ctrl+Z (Undo), the editor pops the last command and calls its 'undo()' method to reverse the change. This turns actions into objects.",technicalDefinition:"Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.",whyUseIt:["When you want to parameterize objects with operations.","When you need to queue operations, schedule their execution, or execute them remotely.","When you need to implement reversible operations (Undo/Redo)."],takeaways:["Encapsulates a request as an object.","Enables Undo/Redo functionality.","Decouples invoker from receiver.","Support for logging and queuing requests."],code:{typescript:`
// 1. Command Interface
interface Command {
  execute(): void;
  undo(): void;
}

// 2. Receiver (The thing doing the work)
class TextEditor {
  private content: string = "";

  addText(text: string) {
    this.content += text;
    console.log(\`Current Content: "\${this.content}"\`);
  }

  deleteText(length: number) {
    this.content = this.content.slice(0, -length);
    console.log(\`Current Content: "\${this.content}"\`);
  }
}

// 3. Concrete Command
class TypeCommand implements Command {
  constructor(private editor: TextEditor, private text: string) {}

  execute() {
    this.editor.addText(this.text);
  }

  undo() {
    console.log(\`Undoing type: "\${this.text}"\`);
    this.editor.deleteText(this.text.length);
  }
}

// 4. Invoker (History Manager)
class CommandHistory {
  private history: Command[] = [];

  executeCommand(cmd: Command) {
    cmd.execute();
    this.history.push(cmd);
  }

  undo() {
    const cmd = this.history.pop();
    if (cmd) cmd.undo();
  }
}

// Usage
const editor = new TextEditor();
const history = new CommandHistory();

history.executeCommand(new TypeCommand(editor, "Hello "));
history.executeCommand(new TypeCommand(editor, "World!"));

console.log("--- Undo ---");
history.undo(); // Removes "World!"
`,python:`
# Receiver
class TextEditor:
    def __init__(self):
        self.content = ""
    
    def add(self, text):
        self.content += text
        print(f"Content: {self.content}")
    
    def remove(self, length):
        self.content = self.content[:-length]
        print(f"Content: {self.content}")

# Command
class TypeCommand:
    def __init__(self, editor, text):
        self.editor = editor
        self.text = text
    
    def execute(self):
        self.editor.add(self.text)
    
    def undo(self):
        self.editor.remove(len(self.text))

# Invoker
history = []
editor = TextEditor()

cmd1 = TypeCommand(editor, "Hello")
cmd1.execute()
history.append(cmd1)

cmd2 = TypeCommand(editor, " World")
cmd2.execute()
history.append(cmd2)

print("--- Undo ---")
last = history.pop()
last.undo()
`,cpp:`
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class TextEditor {
    string content;
public:
    void add(string t) {
        content += t;
        cout << "Content: " << content << endl;
    }
    void remove(int len) {
        content = content.substr(0, content.length() - len);
        cout << "Content: " << content << endl;
    }
};

class Command {
public:
    virtual void execute() = 0;
    virtual void undo() = 0;
};

class TypeCommand : public Command {
    TextEditor* editor;
    string text;
public:
    TypeCommand(TextEditor* e, string t) : editor(e), text(t) {}
    void execute() override { editor->add(text); }
    void undo() override { editor->remove(text.length()); }
};

int main() {
    TextEditor editor;
    TypeCommand cmd(&editor, "Hello");
    
    cmd.execute();
    cmd.undo();
    
    return 0;
}
`}},[m.INTERPRETER]:{id:m.INTERPRETER,title:"Interpreter",category:R.BEHAVIORAL,shortDescription:"Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.",concept:"Translating Morse code. You have a specific set of rules (grammar) where dots and dashes map to letters. The Interpreter pattern defines these rules so a sentence '... --- ...' can be interpreted into 'SOS'. It's about building a mini-language processor.",technicalDefinition:"Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.",whyUseIt:["When you have a simple grammar to process.","When efficiency is not a critical concern (as it can be slow).","Common in SQL parsers, math expression evaluators, or regex engines."],takeaways:["Defines a grammar for a language.","Maps domain rules to classes.","Good for simple languages, bad for complex ones.","Usually implements an 'interpret' method."],code:{typescript:`
// 1. Expression Interface
interface Expression {
  interpret(): number;
}

// 2. Terminal Expression (Number)
class NumberExpr implements Expression {
  constructor(private value: number) {}
  interpret(): number {
    return this.value;
  }
}

// 3. Non-Terminal Expression (Operation)
class AddExpr implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class SubtractExpr implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

// Usage: Representing "10 + 5 - 2"
// Tree: Minus(Plus(10, 5), 2)

const ten = new NumberExpr(10);
const five = new NumberExpr(5);
const two = new NumberExpr(2);

const tenPlusFive = new AddExpr(ten, five); // 15
const result = new SubtractExpr(tenPlusFive, two); // 15 - 2

console.log(\`Result: \${result.interpret()}\`); // 13
`,python:`
class Expression:
    def interpret(self): pass

class Number(Expression):
    def __init__(self, val): self.val = val
    def interpret(self): return self.val

class Add(Expression):
    def __init__(self, left, right):
        self.left = left
        self.right = right
    def interpret(self):
        return self.left.interpret() + self.right.interpret()

# 10 + 5
expr = Add(Number(10), Number(5))
print(expr.interpret())
`,cpp:`
#include <iostream>
using namespace std;

class Expression {
public:
    virtual int interpret() = 0;
};

class Number : public Expression {
    int val;
public:
    Number(int v) : val(v) {}
    int interpret() override { return val; }
};

class Add : public Expression {
    Expression *left, *right;
public:
    Add(Expression* l, Expression* r) : left(l), right(r) {}
    int interpret() override { 
        return left->interpret() + right->interpret(); 
    }
};

int main() {
    Number ten(10);
    Number five(5);
    Add sum(&ten, &five);
    cout << sum.interpret() << endl; // 15
    return 0;
}
`}},[m.ITERATOR]:{id:m.ITERATOR,title:"Iterator",category:R.BEHAVIORAL,shortDescription:"Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).",concept:"A tour guide. You are at a museum (the Collection). You don't know the layout. The tour guide (Iterator) leads you to the 'next' exhibit, then the 'next', ensuring you see everything without you needing to know the map of the building.",technicalDefinition:"Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.",whyUseIt:["When your collection has a complex data structure under the hood, but you want to hide its complexity from clients.","When you want to reduce duplication of the traversal code across your app.","To traverse different structures in a uniform way."],takeaways:["Provides a standard way to traverse collections.","Decouples algorithms from data structures.","Supports different traversal strategies (DFS, BFS).","Single Responsibility Principle."],code:{typescript:`
// 1. Iterator Interface
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// 2. Collection Interface
interface Aggregator {
  createIterator(): Iterator<string>;
}

// 3. Concrete Collection
class Playlist implements Aggregator {
  private songs: string[] = [];

  addSong(song: string) {
    this.songs.push(song);
  }

  createIterator(): Iterator<string> {
    return new PlaylistIterator(this.songs);
  }
}

// 4. Concrete Iterator
class PlaylistIterator implements Iterator<string> {
  private position: number = 0;

  constructor(private collection: string[]) {}

  hasNext(): boolean {
    return this.position < this.collection.length;
  }

  next(): string {
    const song = this.collection[this.position];
    this.position++;
    return song;
  }
}

// Usage
const myPlaylist = new Playlist();
myPlaylist.addSong("Bohemian Rhapsody");
myPlaylist.addSong("Hotel California");
myPlaylist.addSong("Imagine");

const iterator = myPlaylist.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
`,python:`
# Python has built-in iterator support (__iter__ and __next__)

class Playlist:
    def __init__(self):
        self.songs = []
    
    def add(self, song):
        self.songs.append(song)
    
    def __iter__(self):
        return PlaylistIterator(self)

class PlaylistIterator:
    def __init__(self, playlist):
        self._playlist = playlist
        self._index = 0
    
    def __next__(self):
        if self._index < len(self._playlist.songs):
            song = self._playlist.songs[self._index]
            self._index += 1
            return song
        raise StopIteration

# Usage
pl = Playlist()
pl.add("Song A")
pl.add("Song B")

for song in pl:
    print(song)
`,cpp:`
#include <iostream>
#include <vector>
using namespace std;

// C++ standard uses begin() and end() with operator overloading
// but here is a manual implementation

class Iterator {
public:
    virtual bool hasNext() = 0;
    virtual string next() = 0;
};

class Playlist {
    vector<string> songs;
public:
    void add(string s) { songs.push_back(s); }
    
    // Simple inner class iterator
    class PlaylistIterator : public Iterator {
        Playlist& pl;
        int index = 0;
    public:
        PlaylistIterator(Playlist& p) : pl(p) {}
        bool hasNext() override { return index < pl.songs.size(); }
        string next() override { return pl.songs[index++]; }
    };

    Iterator* createIterator() {
        return new PlaylistIterator(*this);
    }
};

int main() {
    Playlist pl;
    pl.add("Song 1");
    pl.add("Song 2");
    
    Iterator* it = pl.createIterator();
    while(it->hasNext()) {
        cout << it->next() << endl;
    }
    return 0;
}
`}},[m.MEDIATOR]:{id:m.MEDIATOR,title:"Mediator",category:R.BEHAVIORAL,shortDescription:"Lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.",concept:"Air Traffic Control. Planes (Components) don't talk to each other to decide who lands first. They talk to the Tower (Mediator). The Tower tells Plane A to wait and Plane B to land. This prevents a chaotic mesh of communication and crashes.",technicalDefinition:"Defines an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.",whyUseIt:["When it's hard to change some of the classes because they are tightly coupled to a bunch of other classes.","When you can't reuse a component in a different program because it's too dependent on other components."],takeaways:["Centralizes communication.","Reduces coupling between components.","Components communicate only with the mediator.","Can become a 'God Object' if not careful."],code:{typescript:`
interface Mediator {
  notify(sender: object, event: string): void;
}

// Concrete Mediator
class ChatRoom implements Mediator {
  notify(sender: object, event: string): void {
    if (sender instanceof User) {
      console.log(\`[ChatRoom] \${sender.name} says: \${event}\`);
    }
  }
}

// Colleague
class User {
  constructor(public name: string, private mediator: Mediator) {}

  send(message: string) {
    this.mediator.notify(this, message);
  }
}

// Usage
const room = new ChatRoom();
const alice = new User("Alice", room);
const bob = new User("Bob", room);

alice.send("Hi Bob!");
bob.send("Hey Alice!");
`,python:`
class ChatRoom:
    def show_message(self, user, message):
        print(f"[{user.name}]: {message}")

class User:
    def __init__(self, name, chat_room):
        self.name = name
        self.chat_room = chat_room
    
    def send(self, msg):
        self.chat_room.show_message(self, msg)

room = ChatRoom()
alice = User("Alice", room)
bob = User("Bob", room)

alice.send("Hello!")
`,cpp:`
#include <iostream>
#include <string>
using namespace std;

class Mediator;

class User {
    Mediator* mediator;
    string name;
public:
    User(string n, Mediator* m);
    string getName() { return name; }
    void send(string msg);
};

class Mediator {
public:
    virtual void showMessage(User* user, string msg) = 0;
};

class ChatRoom : public Mediator {
public:
    void showMessage(User* user, string msg) override {
        cout << user->getName() << ": " << msg << endl;
    }
};

// Implementations
User::User(string n, Mediator* m) : name(n), mediator(m) {}
void User::send(string msg) { mediator->showMessage(this, msg); }

int main() {
    ChatRoom room;
    User alice("Alice", &room);
    alice.send("Hello World");
    return 0;
}
`}},[m.MEMENTO]:{id:m.MEMENTO,title:"Memento",category:R.BEHAVIORAL,shortDescription:"Lets you save and restore the previous state of an object without revealing the details of its implementation.",concept:"Save points in a video game. Before a boss fight, you save your game. The save file (Memento) holds your health, inventory, and location. If you die, you reload the save file to restore that exact state. The game system stores the file but doesn't peek inside it.",technicalDefinition:"Without violating encapsulation, captures and externalizes an object's internal state so that the object can be restored to this state later.",whyUseIt:["When you want to produce snapshots of the object's state to be able to restore a previous state of the object.","When direct access to the object's fields/getters/setters violates its encapsulation."],takeaways:["Captures internal state without breaking encapsulation.","Enables generic Undo/Redo mechanisms.","The 'Caretaker' stores the memento but can't read it.","Can be expensive if state is large."],code:{typescript:`
// 1. Memento (Stores State)
class GameSave {
  constructor(private level: number, private health: number) {}

  getState() {
    return { level: this.level, health: this.health };
  }
}

// 2. Originator (Creates and Restores Memento)
class Game {
  private level = 1;
  private health = 100;

  play() {
    this.level++;
    this.health -= 10;
    console.log(\`Playing... Level: \${this.level}, Health: \${this.health}\`);
  }

  save(): GameSave {
    console.log("Creating Save Point...");
    return new GameSave(this.level, this.health);
  }

  load(save: GameSave) {
    const state = save.getState();
    this.level = state.level;
    this.health = state.health;
    console.log(\`Game Loaded! Level: \${this.level}, Health: \${this.health}\`);
  }
}

// 3. Caretaker (Manages Saves)
const game = new Game();
game.play(); // Lvl 2
game.play(); // Lvl 3

const saveFile = game.save(); // Save at Lvl 3

game.play(); // Lvl 4
game.play(); // Lvl 5 (Oops, died)

console.log("Restoring...");
game.load(saveFile); // Back to Lvl 3
`,python:`
class Memento:
    def __init__(self, state):
        self._state = state
    def get_state(self):
        return self._state

class Originator:
    def __init__(self):
        self._state = ""

    def set(self, state):
        print(f"Setting state to {state}")
        self._state = state

    def save(self):
        return Memento(self._state)

    def restore(self, memento):
        self._state = memento.get_state()
        print(f"Restored to {self._state}")

# Usage
originator = Originator()
originator.set("State 1")
saved = originator.save()
originator.set("State 2")
originator.restore(saved)
`,cpp:`
#include <iostream>
#include <string>
using namespace std;

class Memento {
    string state;
public:
    Memento(string s) : state(s) {}
    string getState() { return state; }
};

class Originator {
    string state;
public:
    void setState(string s) {
        state = s;
        cout << "State set to " << state << endl;
    }
    Memento save() { return Memento(state); }
    void restore(Memento m) {
        state = m.getState();
        cout << "Restored to " << state << endl;
    }
};

int main() {
    Originator org;
    org.setState("Level 1");
    Memento save = org.save();
    
    org.setState("Level 2");
    org.restore(save);
    return 0;
}
`}},[m.OBSERVER]:{id:m.OBSERVER,title:"Observer Pattern",category:R.BEHAVIORAL,shortDescription:"Notify multiple objects about events happening to the object they're observing.",concept:"Imagine a YouTuber (Subject) and their Subscribers (Observers). When the YouTuber uploads a video, all subscribers get a notification automatically. They don't have to check the channel every 5 minutes.",technicalDefinition:"Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",whyUseIt:["When a change to one object requires changing others, and you don't know how many objects need to be changed.","To establish a one-to-many dependency between objects.","To decouple the subject from the observers."],takeaways:["Subject maintains a list of observers.","Observers subscribe/unsubscribe dynamically.","Subject notifies all observers on state change.","Promotes loose coupling between components."],code:{typescript:`
// 1. Observer Interface
interface Observer {
  update(videoTitle: string): void;
}

// 2. Concrete Observer
class Subscriber implements Observer {
  constructor(private name: string) {}
  
  update(videoTitle: string): void {
    console.log(\`\${this.name} got notified: New video '\${videoTitle}' uploaded!\`);
  }
}

// 3. Subject (Observable)
class YouTubeChannel {
  private subscribers: Observer[] = [];

  subscribe(observer: Observer) {
    this.subscribers.push(observer);
    console.log("New subscriber added.");
  }

  unsubscribe(observer: Observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  uploadVideo(title: string) {
    console.log(\`Uploading video: \${title}...\`);
    this.notifySubscribers(title);
  }

  private notifySubscribers(title: string) {
    this.subscribers.forEach(sub => sub.update(title));
  }
}

// Usage
const channel = new YouTubeChannel();
const bob = new Subscriber("Bob");
const alice = new Subscriber("Alice");

channel.subscribe(bob);
channel.subscribe(alice);

channel.uploadVideo("Design Patterns Course");
// Both Bob and Alice get notified
`,python:`
class Subscriber:
    def __init__(self, name):
        self.name = name
    def update(self, message):
        print(f"{self.name} received: {message}")

class Channel:
    def __init__(self):
        self.subs = []
    
    def subscribe(self, sub):
        self.subs.append(sub)
    
    def notify(self, msg):
        for sub in self.subs:
            sub.update(msg)

channel = Channel()
channel.subscribe(Subscriber("Alice"))
channel.subscribe(Subscriber("Bob"))

channel.notify("New Video Uploaded!")
`,cpp:`
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Observer {
public:
    virtual void update(string msg) = 0;
};

class Subscriber : public Observer {
    string name;
public:
    Subscriber(string n) : name(n) {}
    void update(string msg) override {
        cout << name << " got: " << msg << endl;
    }
};

class Channel {
    vector<Observer*> subs;
public:
    void subscribe(Observer* o) { subs.push_back(o); }
    void notify(string msg) {
        for(auto s : subs) s->update(msg);
    }
};

int main() {
    Channel ch;
    Subscriber s1("Alice");
    Subscriber s2("Bob");
    
    ch.subscribe(&s1);
    ch.subscribe(&s2);
    
    ch.notify("New Video!");
    return 0;
}
`}},[m.STATE]:{id:m.STATE,title:"State",category:R.BEHAVIORAL,shortDescription:"Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.",concept:"Your smartphone. When it's 'Unlocked', pressing the volume button changes the ringer volume. When it's 'Locked', pressing the volume button might light up the screen or do nothing. The phone is the same object, but its behavior changes completely based on its current state.",technicalDefinition:"Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.",whyUseIt:["When you have an object that behaves differently depending on its current state.","When you have a massive switch-case statement based on state variables.","To avoid polluted code with state-dependent conditionals."],takeaways:["Encapsulates state-specific behavior in classes.","Context delegates work to the current state object.","States can trigger transitions to other states.","Eliminates large conditional logic."],code:{typescript:`
// 1. State Interface
interface State {
  pressPlay(player: AudioPlayer): void;
}

// 2. Context
class AudioPlayer {
  private state: State;

  constructor() {
    this.state = new StoppedState(); // Initial State
  }

  setState(state: State) {
    this.state = state;
    console.log(\`State changed to: \${state.constructor.name}\`);
  }

  pressPlay() {
    this.state.pressPlay(this);
  }
}

// 3. Concrete States
class StoppedState implements State {
  pressPlay(player: AudioPlayer) {
    console.log("Starting playback...");
    player.setState(new PlayingState());
  }
}

class PlayingState implements State {
  pressPlay(player: AudioPlayer) {
    console.log("Pausing playback...");
    player.setState(new PausedState());
  }
}

class PausedState implements State {
  pressPlay(player: AudioPlayer) {
    console.log("Resuming playback...");
    player.setState(new PlayingState());
  }
}

// Usage
const player = new AudioPlayer();
player.pressPlay(); // Starts Playing
player.pressPlay(); // Pauses
player.pressPlay(); // Resumes
`,python:`
class State:
    def press_play(self, player): pass

class StoppedState(State):
    def press_play(self, player):
        print("Starting...")
        player.state = PlayingState()

class PlayingState(State):
    def press_play(self, player):
        print("Pausing...")
        player.state = PausedState()

class PausedState(State):
    def press_play(self, player):
        print("Resuming...")
        player.state = PlayingState()

class Player:
    def __init__(self):
        self.state = StoppedState()
    
    def press_button(self):
        self.state.press_play(self)

p = Player()
p.press_button() # Start
p.press_button() # Pause
`,cpp:`
#include <iostream>
using namespace std;

class Player; // Forward declaration

class State {
public:
    virtual void pressPlay(Player* p) = 0;
};

class PlayingState;
class PausedState;

class StoppedState : public State {
public:
    void pressPlay(Player* p);
};

class Player {
public:
    State* state;
    Player();
    void pressButton() { state->pressPlay(this); }
    void setState(State* s) { state = s; }
};

// Implementations needed outside class due to circular dependency in C++
// Simplified for this view: In C++, these would be separated into .cpp files
`}},[m.STRATEGY]:{id:m.STRATEGY,title:"Strategy Pattern",category:R.BEHAVIORAL,shortDescription:"Define a family of algorithms, put each in a separate class, and make their objects interchangeable.",concept:"Navigation App. The app can calculate a route from A to B. It can use different algorithms (strategies) depending on the transport mode: Driving, Walking, or Public Transport. The 'Navigator' class delegates the calculation to the specific strategy selected by the user. The destination is the same, but the path, time, and cost differ.",analogy:"Getting to the airport. You can take a taxi (RoadStrategy), take a bus (PublicTransportStrategy), or walk (WalkingStrategy). The goal is the same, but the strategy defines the trade-offs (Speed vs. Cost vs. Effort).",technicalDefinition:"Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.",whyUseIt:["When you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime.","To isolate the business logic of a class from the implementation details of algorithms.","To avoid massive switch/if-else statements."],takeaways:["Encapsulate algorithms into separate classes.","Context class uses a Strategy interface.","Strategies can be swapped at runtime.","Follows the Open/Closed Principle."],code:{typescript:`
// 1. Strategy Interface
interface RouteStrategy {
  calculate(a: string, b: string): void;
}

// 2. Concrete Strategies
class CarStrategy implements RouteStrategy {
  calculate(a: string, b: string) { 
    console.log(\`🚗 Calculating driving route from \${a} to \${b}. (Fastest)\`); 
  }
}

class WalkStrategy implements RouteStrategy {
  calculate(a: string, b: string) { 
    console.log(\`🚶 Calculating walking route from \${a} to \${b}. (Scenic)\`); 
  }
}

class BusStrategy implements RouteStrategy {
  calculate(a: string, b: string) { 
    console.log(\`🚌 Calculating bus route from \${a} to \${b}. (Cheapest)\`); 
  }
}

// 3. Context
class Navigator {
  private strategy: RouteStrategy;

  constructor(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  setStrategy(s: RouteStrategy) { 
    this.strategy = s; 
  }
  
  buildRoute(a: string, b: string) {
    this.strategy.calculate(a, b);
  }
}

// Usage
const nav = new Navigator(new CarStrategy());
nav.buildRoute("Home", "Work"); // Car

nav.setStrategy(new WalkStrategy());
nav.buildRoute("Home", "Park"); // Walk
`,python:`
class Strategy:
    def calculate(self, a, b): pass

class Car(Strategy):
    def calculate(self, a, b): print("🚗 Driving route")

class Walk(Strategy):
    def calculate(self, a, b): print("🚶 Walking route")

class Navigator:
    def __init__(self, strategy):
        self.strategy = strategy
    
    def set_strategy(self, strategy):
        self.strategy = strategy
    
    def build_route(self, a, b):
        self.strategy.calculate(a, b)

nav = Navigator(Car())
nav.build_route("A", "B")
nav.set_strategy(Walk())
nav.build_route("A", "B")
`,cpp:`
#include <iostream>
using namespace std;

class Strategy {
public:
    virtual void calculate() = 0;
};

class Car : public Strategy {
    void calculate() override { cout << "🚗 Driving route" << endl; }
};

class Walk : public Strategy {
    void calculate() override { cout << "🚶 Walking route" << endl; }
};

class Navigator {
    Strategy* strategy;
public:
    Navigator(Strategy* s) : strategy(s) {}
    void setStrategy(Strategy* s) { strategy = s; }
    void buildRoute() { strategy->calculate(); }
};

int main() {
    Car car;
    Walk walk;
    
    Navigator nav(&car);
    nav.buildRoute();
    
    nav.setStrategy(&walk);
    nav.buildRoute();
    return 0;
}
`}},[m.TEMPLATE_METHOD]:{id:m.TEMPLATE_METHOD,title:"Template Method",category:R.BEHAVIORAL,shortDescription:"Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.",concept:"Making Tea or Coffee. The general steps are the same: 1. Boil Water, 2. Brew, 3. Pour in Cup, 4. Add Condiments. A 'Beverage' class defines this flow. 'Tea' subclasses provide specific brewing (steeping) and condiments (lemon). 'Coffee' subclasses provide dripping and sugar/milk. The structure remains identical.",technicalDefinition:"Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.",whyUseIt:["When you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure.","When you have several classes that contain almost identical algorithms with some minor differences."],takeaways:["Defines the algorithm structure in a base class.","Subclasses implement specific steps.","Avoids code duplication.","Controls the extension points of the algorithm."],code:{typescript:`
// 1. Abstract Base Class
abstract class HotBeverage {
  // The Template Method (Final - shouldn't be overridden usually)
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  // Common steps
  boilWater() { console.log("🔥 Boiling water"); }
  pourInCup() { console.log("🍶 Pouring into cup"); }
  
  // Abstract steps (Subclasses MUST implement)
  abstract brew(): void;
  abstract addCondiments(): void;
}

// 2. Concrete Classes
class Tea extends HotBeverage {
  brew() { console.log("🍃 Steeping the tea"); }
  addCondiments() { console.log("🍋 Adding Lemon"); }
}

class Coffee extends HotBeverage {
  brew() { console.log("☕ Dripping Coffee through filter"); }
  addCondiments() { console.log("🍬 Adding Sugar and Milk"); }
}

// Usage
console.log("--- Making Tea ---");
const tea = new Tea();
tea.prepareRecipe();

console.log("\\n--- Making Coffee ---");
const coffee = new Coffee();
coffee.prepareRecipe();
`,python:`
from abc import ABC, abstractmethod

class HotBeverage(ABC):
    def prepare_recipe(self):
        self.boil()
        self.brew()
        self.pour()
        self.add_condiments()
    
    def boil(self): print("🔥 Boiling water")
    def pour(self): print("🍶 Pouring into cup")
    
    @abstractmethod
    def brew(self): pass
    
    @abstractmethod
    def add_condiments(self): pass

class Tea(HotBeverage):
    def brew(self): print("🍃 Steeping tea")
    def add_condiments(self): print("🍋 Adding Lemon")

class Coffee(HotBeverage):
    def brew(self): print("☕ Dripping coffee")
    def add_condiments(self): print("🍬 Adding Sugar")

tea = Tea()
tea.prepare_recipe()
`,cpp:`
#include <iostream>
using namespace std;

class HotBeverage {
public:
    void prepareRecipe() {
        boil();
        brew();
        pour();
        addCondiments();
    }
    void boil() { cout << "🔥 Boiling water" << endl; }
    void pour() { cout << "🍶 Pouring into cup" << endl; }
    virtual void brew() = 0;
    virtual void addCondiments() = 0;
};

class Tea : public HotBeverage {
    void brew() override { cout << "🍃 Steeping tea" << endl; }
    void addCondiments() override { cout << "🍋 Adding Lemon" << endl; }
};

int main() {
    Tea tea;
    tea.prepareRecipe();
    return 0;
}
`}},[m.VISITOR]:{id:m.VISITOR,title:"Visitor",category:R.BEHAVIORAL,shortDescription:"Lets you separate algorithms from the objects on which they operate.",concept:"A Zoo. You have different animals (Lion, Dolphin). You want to perform different operations like 'Health Check' (by a Vet) or 'Feed' (by a Feeder). Instead of adding `checkHealth()` and `feed()` methods to the Animal classes (polluting them), you create `VetVisitor` and `FeederVisitor`. The Visitor knows how to handle each animal type.",technicalDefinition:"Represents an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.",whyUseIt:["When you need to perform an operation on all elements of a complex object structure (e.g., an object tree).","When you want to clean up the business logic of auxiliary behaviors.","When a behavior makes sense only for some classes of a class hierarchy."],takeaways:["Separates algorithm from object structure.","Adds new operations without changing object classes.","Uses 'Double Dispatch'.","Good for complex data structures like trees/graphs."],code:{typescript:`
// 1. Element Interfaces
interface Animal {
  accept(visitor: Visitor): void;
}

// 2. Concrete Elements
class Lion implements Animal {
  accept(visitor: Visitor) {
    // Double dispatch: calls specific visitLion method
    visitor.visitLion(this);
  }
  roar() { console.log("Lion: Roar!"); }
}

class Dolphin implements Animal {
  accept(visitor: Visitor) {
    visitor.visitDolphin(this);
  }
  swim() { console.log("Dolphin: Swimming..."); }
}

// 3. Visitor Interface
interface Visitor {
  visitLion(lion: Lion): void;
  visitDolphin(dolphin: Dolphin): void;
}

// 4. Concrete Visitors
class Vet implements Visitor {
  visitLion(lion: Lion) {
    console.log("👨‍⚕️ Vet: Checking Lion's teeth.");
    lion.roar();
  }
  visitDolphin(dolphin: Dolphin) {
    console.log("👨‍⚕️ Vet: Checking Dolphin's fins.");
    dolphin.swim();
  }
}

class Feeder implements Visitor {
  visitLion(lion: Lion) {
    console.log("🥩 Feeder: Giving steak to Lion.");
  }
  visitDolphin(dolphin: Dolphin) {
    console.log("🐟 Feeder: Giving fish to Dolphin.");
  }
}

// Usage
const zoo: Animal[] = [new Lion(), new Dolphin()];
const vet = new Vet();
const feeder = new Feeder();

console.log("--- Vet Visit ---");
zoo.forEach(animal => animal.accept(vet));

console.log("\\n--- Feeding Time ---");
zoo.forEach(animal => animal.accept(feeder));
`,python:`
class Lion:
    def accept(self, visitor):
        visitor.visit_lion(self)

class Dolphin:
    def accept(self, visitor):
        visitor.visit_dolphin(self)

class Vet:
    def visit_lion(self, lion):
        print("👨‍⚕️ Vet: Checking Lion.")
    def visit_dolphin(self, dolphin):
        print("👨‍⚕️ Vet: Checking Dolphin.")

class Feeder:
    def visit_lion(self, lion):
        print("🥩 Feeder: Feeding Lion.")
    def visit_dolphin(self, dolphin):
        print("🐟 Feeder: Feeding Dolphin.")

# Usage
zoo = [Lion(), Dolphin()]
vet = Vet()
feeder = Feeder()

print("--- Vet ---")
for a in zoo: a.accept(vet)

print("--- Feeder ---")
for a in zoo: a.accept(feeder)
`,cpp:`
#include <iostream>
#include <vector>
using namespace std;

class Lion;
class Dolphin;

class Visitor {
public:
    virtual void visitLion(Lion* l) = 0;
    virtual void visitDolphin(Dolphin* d) = 0;
};

class Animal {
public:
    virtual void accept(Visitor* v) = 0;
};

class Lion : public Animal {
public:
    void accept(Visitor* v) override { v->visitLion(this); }
    void roar() { cout << "Roar!" << endl; }
};

class Dolphin : public Animal {
public:
    void accept(Visitor* v) override { v->visitDolphin(this); }
};

class Vet : public Visitor {
public:
    void visitLion(Lion* l) override { 
        cout << "Vet: Checking Lion. "; 
        l->roar();
    }
    void visitDolphin(Dolphin* d) override { 
        cout << "Vet: Checking Dolphin." << endl; 
    }
};

int main() {
    Lion l;
    Dolphin d;
    Vet v;
    
    l.accept(&v);
    d.accept(&v);
    return 0;
}
`}},[m.SRP]:{id:m.SRP,title:"Single Responsibility Principle (SRP)",category:R.SOLID_PRINCIPLES,shortDescription:"A class should have one, and only one, reason to change.",concept:"A Swiss Army Knife vs. A Chef's Knife. A Swiss Army Knife tries to do everything (cut, screw, saw, open cans) but does none of them perfectly. A Chef's Knife does one thing: cut food, and it does it exceptionally well. In code, if a class handles User Authentication AND Sending Emails, changing the email provider might break the login logic.",technicalDefinition:"A module should be responsible to one, and only one, actor. This principle states that a class should gather together things that change for the same reason, and separate things that change for different reasons.",whyUseIt:["To lower coupling between classes.","To make classes easier to understand and maintain.","To reduce the risk of side effects when changing code."],takeaways:["One class = One job.","High cohesion, low coupling.","Easier testing and maintenance.","Avoid 'God Objects'."]},[m.OCP]:{id:m.OCP,title:"Open/Closed Principle (OCP)",category:R.SOLID_PRINCIPLES,shortDescription:"Software entities should be open for extension, but closed for modification.",concept:"Extension cords and Power Strips. The wall outlet is 'closed' for modification (you don't drill into the wall to add more sockets). However, it is 'open' for extension because you can plug in a power strip to add more devices. You extend the functionality without changing the core infrastructure.",technicalDefinition:"Software artifacts should be open for extension but closed for modification. This means functionality can be added without changing existing source code, typically achieved through polymorphism and interfaces.",whyUseIt:["To prevent breaking existing code when adding new features.","To create flexible and scalable systems.","To allow third-party extensions."],takeaways:["Extend functionality via inheritance or interfaces.","Don't modify existing, tested code.","Use polymorphism to switch behaviors.","Key for plugin architectures."]},[m.LSP]:{id:m.LSP,title:"Liskov Substitution Principle (LSP)",category:R.SOLID_PRINCIPLES,shortDescription:"Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.",concept:"The 'Square is a Rectangle' trap. In math, a square is a rectangle. In code, if you have a Rectangle class where you can set width and height independently, and you create a Square subclass that forces them to be equal, you break the parent class's behavior. If code expects to set width=5 and height=10 to get area=50, the Square will give area=100 (10x10). The subclass broke the contract.",technicalDefinition:"Subtypes must be substitutable for their base types. If your code works with a 'Vehicle', it should work with a 'Car' or 'Truck' without breaking or needing to check 'is this a Truck?'.",whyUseIt:["To ensure inheritance hierarchies are logical and robust.","To prevent unexpected bugs when using polymorphism.","To keep code verifiable."],takeaways:["Subclasses must honor the contract of the superclass.","Don't throw exceptions for expected methods.","Derived classes should extend, not replace.","Beware of empty method overrides."]},[m.ISP]:{id:m.ISP,title:"Interface Segregation Principle (ISP)",category:R.SOLID_PRINCIPLES,shortDescription:"Clients should not be forced to depend upon interfaces that they do not use.",concept:"A giant office printer vs a simple desktop printer. If you have an interface 'IMachine' with 'print()', 'scan()', and 'fax()', a simple printer is forced to implement 'scan' and 'fax' even if it can't do them. It's better to split them into 'IPrinter', 'IScanner', 'IFax'.",technicalDefinition:"Clients should not be forced to depend upon interfaces that they do not use. This principle suggests splitting large interfaces into smaller, more specific ones so that clients only need to know about the methods that are of interest to them.",whyUseIt:["To avoid 'fat' interfaces.","To prevent classes from implementing dummy methods.","To decouple systems."],takeaways:["Split large interfaces into smaller ones.","Role Interfaces > Header Interfaces.","Clients only know about methods they use.","Reduces impact of changes."]},[m.DIP]:{id:m.DIP,title:"Dependency Inversion Principle (DIP)",category:R.SOLID_PRINCIPLES,shortDescription:"High-level modules should not depend on low-level modules. Both should depend on abstractions.",concept:"A User Service (High Level) needing data. Without DIP, the Service is hardcoded to connect to a specific 'PostgresDatabase' (Low Level). If you want to switch to 'MongoDB', you have to rewrite the Service. With DIP, the Service depends on an 'IDatabase' interface. You can 'inject' Postgres, Mongo, or any other DB that fits the interface without touching the Service code.",technicalDefinition:"High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.",whyUseIt:["To reduce coupling between modules.","To make code easy to unit test (mocking dependencies).","To allow swapping implementations (e.g., SQL to MongoDB)."],takeaways:["Depend on abstractions, not concretions.","Use Dependency Injection.","Invert the flow of control.","Makes systems modular."]},[m.MVC]:{id:m.MVC,title:"Model-View-Controller (MVC)",category:R.ARCHITECTURE_STYLES,shortDescription:"Separates an application into three main logical components: the Model, the View, and the Controller.",concept:"A design pattern that decouples the user interface (View), the data (Model), and the application logic (Controller). The Controller receives user input, manipulates the Model, and the Model updates the View. This separation allows developers to modify each component independently.",useCase:"Ruby on Rails, Django, Laravel, and ASP.NET MVC. Commonly used in traditional server-side rendered web applications where the server handles logic (Controller) and data (Model) and sends HTML (View) to the browser.",technicalDefinition:"An architectural style that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.",whyUseIt:["To organize code for maintainability.","To allow multiple views for the same model.","To separate business logic from UI logic."],takeaways:["Model: Data and logic.","View: UI display.","Controller: Handles input and updates Model.","Standard for web frameworks (Rails, Django)."]},[m.MVVM]:{id:m.MVVM,title:"Model-View-ViewModel (MVVM)",category:R.ARCHITECTURE_STYLES,shortDescription:"Facilitates a separation of development of the graphical user interface from the development of the business logic or back-end logic.",concept:"An evolution of MVC where the 'Controller' is replaced by a 'ViewModel'. The ViewModel exposes streams of data relevant to the View. The critical difference is 'Data Binding'—the View automatically updates when the ViewModel changes, without manual intervention.",useCase:"Modern Frontend Frameworks like React (with hooks), Vue.js, Angular, and Desktop frameworks like WPF (Windows Presentation Foundation) or Xamarin Forms. It powers single-page applications (SPAs) where the UI must stay in sync with state.",technicalDefinition:"An architectural style where the View binds directly to properties on the ViewModel. The ViewModel exposes data from the Model in a way the View can consume. Unlike MVC, there is no Controller mediating every single update; changes propagate via Data Binding.",whyUseIt:["To enable data binding (automatic UI updates).","To separate UI logic from business logic (easier testing).","Common in modern frontend frameworks (React, Vue, Angular)."],takeaways:["ViewModel adapts Model for View.","Two-way data binding removes glue code.","View is declarative.","ViewModel doesn't know about the View."]},[m.MONOLITH]:{id:m.MONOLITH,title:"Monolithic Architecture",category:R.ARCHITECTURE_STYLES,shortDescription:"A single-tiered software application in which the user interface and data access code are combined into a single program from a single platform.",concept:"The traditional way of building applications where all distinct modules (database access, business logic, UI handling) are packaged and deployed as a single, unified unit. If one part breaks, the whole application might crash.",useCase:"Early-stage Startups, Simple CRUD Apps, Wordpress sites. Perfect for Minimum Viable Products (MVPs) because it is faster to develop, easier to deploy, and simpler to test when the team and codebase are small.",technicalDefinition:"A traditional unified model for the design of a software program. A monolithic application is built as a single unit, where all disparate components (data access, business logic, UI) are tightly coupled and deployed together.",whyUseIt:["Simple to develop and deploy initially.","Better performance (no network overhead).","Easy to debug (single process)."],takeaways:["Unified codebase.","Single deployment unit.","Harder to scale parts independently.","Tight coupling."]},[m.MICROSERVICES]:{id:m.MICROSERVICES,title:"Microservices Architecture",category:R.ARCHITECTURE_STYLES,shortDescription:"An architectural style that structures an application as a collection of services that are highly maintainable and testable, loosely coupled, independently deployable, and organized around business capabilities.",concept:"Decomposing a massive application into a suite of small services, each running in its own process and communicating with lightweight mechanisms (often HTTP). Each service is built around a specific business capability and is independently deployable.",useCase:"Netflix, Amazon, Uber, Spotify. Used by large-scale organizations with complex domains and large teams. It allows different teams to own different services (e.g., 'Payment Team', 'Recommendation Team') and deploy them independently.",technicalDefinition:"An architectural style where an application is structured as a collection of small, autonomous services, modeled around a business domain. Services communicate via lightweight protocols (e.g., HTTP/REST) and are independently deployable.",whyUseIt:["To allow independent deployment and scaling of services.","To improve fault isolation (one service crash doesn't kill the system).","To enable using different technologies for different services."],takeaways:["Loosely coupled services.","Independently deployable.","Organized around business capabilities.","Introduces complexity (distributed systems)."]},[m.LAYERED]:{id:m.LAYERED,title:"Layered (N-Tier) Architecture",category:R.ARCHITECTURE_STYLES,shortDescription:"Organizes code into horizontal layers, where each layer has a specific responsibility and only interacts with the layer directly below it.",concept:"Structuring an application into logical layers where requests flow downwards. Typically involves a Presentation Layer (UI), Business Logic Layer (Rules), and Data Access Layer (Database). Lower layers don't know about upper layers.",useCase:"Enterprise Java Beans (EJB), Corporate Business Applications, and traditional .NET enterprise apps. Used when security and strict separation of concerns are critical (e.g., banking software where the UI must never touch the database directly).",technicalDefinition:"An architectural style that separates an application into logical layers (e.g., Presentation, Business, Data Access), enforcing a strict dependency direction (usually top-down). Each layer has a specific responsibility and abstracts the layer below it.",whyUseIt:["Standard for enterprise applications.","Ease of maintenance and testing (separation of concerns).","Security: UI cannot access Database directly."],takeaways:["Strict separation of concerns.","Requests flow down, responses flow up.","Easy to replace a layer (e.g., switch UI).","Can introduce latency."]},[m.EVENT_DRIVEN]:{id:m.EVENT_DRIVEN,title:"Event-Driven Architecture",category:R.ARCHITECTURE_STYLES,shortDescription:"A software architecture paradigm promoting the production, detection, consumption of, and reaction to events.",concept:"A design where services communicate by emitting 'events' (facts that happened) asynchronously, rather than calling each other directly. Producers don't know who is listening, and Consumers react to events as they arrive.",useCase:"Stock Trading Platforms, IoT Systems (Smart Homes), Real-time Analytics (Clickstream tracking). Used wherever immediate responsiveness and high scalability are required, handling millions of events asynchronously.",technicalDefinition:"An architectural style promoting the production, detection, consumption of, and reaction to events. Decoupled services communicate asynchronously via an Event Bus or Message Broker, rather than direct request/response calls.",whyUseIt:["To decouple services (Producers don't know Consumers).","For asynchronous processing and high scalability.","Real-time applications."],takeaways:["Decoupled components.","Asynchronous communication.","Highly scalable.","Event Bus / Message Broker is central."]},[m.DDD]:{id:m.DDD,title:"Domain-Driven Design (DDD)",category:R.ARCHITECTURE_STYLES,shortDescription:"An approach to software development that centers the design on the domain logic of the application.",concept:"A methodology where the code structure and language closely match the real-world business domain. It emphasizes splitting complex domains into 'Bounded Contexts' where models are valid and consistent.",useCase:"Complex Enterprise Systems with intricate business rules, such as Insurance Policy Management, Logistics & Shipping Routing, or Core Banking Systems. It helps developers and domain experts speak the same language.",technicalDefinition:"An architectural style and software development approach that focuses on modeling the software to match a domain according to input from that domain's experts. It heavily uses concepts like Ubiquitous Language, Bounded Contexts, Entities, Value Objects, and Aggregates.",whyUseIt:["For complex systems where business logic is intricate.","To ensure developers and business experts speak the same language.","To organize code around business boundaries rather than technical layers."],takeaways:["Focus on Core Domain.","Ubiquitous Language (Common vocabulary).","Bounded Contexts (Clear boundaries).","Model-driven design."]},[m.SAGA]:{id:m.SAGA,title:"Saga Pattern",category:R.ARCHITECTURE_STYLES,shortDescription:"A sequence of local transactions where each transaction updates data within a single service.",concept:"A way to handle long-running transactions in distributed systems (like Microservices). Since you can't lock multiple databases at once, you execute a series of local steps. If one fails, you execute 'compensating transactions' to undo the previous steps.",useCase:"Travel Booking Systems (Flight + Hotel + Car), E-commerce Order Fulfillment (Inventory -> Payment -> Shipping). Used when a transaction spans multiple microservices and cannot use standard database ACID locks.",technicalDefinition:"An architectural style for managing distributed transactions. A Saga is a sequence of local transactions. Each local transaction updates the database and publishes a message or event to trigger the next local transaction in the saga. If a local transaction fails, the saga executes compensating transactions that undo the changes that were made by the preceding local transactions.",whyUseIt:["To maintain data consistency across distributed services (Microservices).","When you cannot use standard ACID transactions (2PC) across multiple databases.","To handle long-running business processes."],takeaways:["Manages distributed transactions.","Uses Compensating Transactions for rollback.","Can be Choreography-based (Events) or Orchestration-based (Central Coordinator).","Eventually Consistent."]},[m.SERVERLESS]:{id:m.SERVERLESS,title:"Serverless Architecture",category:R.ARCHITECTURE_STYLES,shortDescription:"A cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources.",concept:"An execution model where the cloud provider (AWS, Azure) dynamically manages the allocation of machine resources. Code runs in stateless containers that are event-triggered and ephemeral (they disappear after use).",useCase:"Image Processing Pipelines (User uploads photo -> resize function runs), Cron Jobs, Chatbots, and sporadic API workloads. Ideal for tasks that run infrequently or need to scale from zero to thousands instantly without managing servers.",technicalDefinition:"An architectural style where the application logic is executed in stateless compute containers (FaaS - Functions as a Service) that are event-triggered and ephemeral. The cloud provider fully manages the infrastructure, scaling, and provisioning.",whyUseIt:["To reduce operational cost (Pay-per-use).","To eliminate infrastructure management.","For automatic scaling from zero to infinity."],takeaways:["No server management.","Event-driven execution.","Pay only for execution time.","Stateless functions (FaaS)."]},[m.CLIENT_SERVER]:{id:m.CLIENT_SERVER,title:"Client-Server Architecture",category:R.ARCHITECTURE_STYLES,shortDescription:"A distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.",concept:"A centralized architecture where multiple 'Clients' (end-user devices) request resources or services from a central 'Server'. The Server manages security, data, and logic, while the Client handles presentation.",useCase:"The World Wide Web (Browsers requesting pages), Email Systems (Outlook connecting to Exchange), Online Banking, Multiplayer Games. It is the foundational model of the internet.",technicalDefinition:"An architectural style where the system is divided into two distinct parts: Clients (requesters) and Servers (providers). Clients initiate communication sessions with servers which await incoming requests. It is the foundational architecture of the Web (Browser = Client, Web Server = Server).",whyUseIt:["To centralize data and security on the server.","To allow many users to access the same resources.","To separate the user interface (Client) from data management (Server)."],takeaways:["Centralized control and data.","Request-Response model.","Scalability (Vertical or Horizontal).","Foundation of the Internet (HTTP)."]}},Kf=({code:e})=>{const[t,n]=w.useState("typescript"),r=l=>{switch(l){case"typescript":return"TypeScript / JS";case"python":return"Python";case"cpp":return"C++"}};return s.jsxs("div",{className:"flex flex-col border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-slate-900 text-slate-200",children:[s.jsxs("div",{className:"flex items-center bg-slate-800 border-b border-slate-700",children:[s.jsx("div",{className:"px-4 py-3 font-mono text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Implementation"}),s.jsx("div",{className:"flex",children:["typescript","python","cpp"].map(l=>s.jsx("button",{onClick:()=>n(l),className:`px-4 py-3 text-xs font-bold transition-colors border-r border-slate-700
                ${t===l?"bg-slate-900 text-indigo-400 border-t-2 border-t-indigo-500":"bg-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-700 border-t-2 border-t-transparent"}
              `,children:r(l)},l))})]}),s.jsxs("div",{className:"p-0 overflow-x-auto relative group",children:[s.jsx("pre",{className:"p-6 text-sm font-mono leading-relaxed tab-4",children:s.jsx("code",{className:"language-typescript",children:e[t]})}),s.jsx("button",{onClick:()=>navigator.clipboard.writeText(e[t]),className:"absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity",children:"Copy"})]})]})},Xf=()=>{const[e,t]=w.useState([{id:1,name:"Alice",isSubscribed:!0,lastNotification:null},{id:2,name:"Bob",isSubscribed:!1,lastNotification:null}]),[n,r]=w.useState(3),[l,o]=w.useState(""),[i,a]=w.useState(!1),c=()=>{t(f=>[...f,{id:n,name:`User ${n}`,isSubscribed:!0,lastNotification:null}]),r(f=>f+1)},d=f=>{t(v=>v.filter(j=>j.id!==f))},g=f=>{t(v=>v.map(j=>j.id===f?{...j,isSubscribed:!j.isSubscribed}:j))},x=()=>{l&&(a(!0),setTimeout(()=>{t(f=>f.map(v=>({...v,lastNotification:v.isSubscribed?l:v.lastNotification}))),a(!1),o("")},600))};return s.jsxs("div",{className:"flex flex-col gap-6 w-full min-h-[500px]",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsxs("h3",{className:"text-lg font-semibold mb-4 text-slate-800 flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"📢"})," Subject (Publisher)"]}),s.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[s.jsx("input",{type:"text",value:l,onChange:f=>o(f.target.value),placeholder:"Type a notification message...",className:"flex-1 min-w-[200px] p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900"}),s.jsx("button",{onClick:x,disabled:!l||i,className:`px-6 py-3 rounded-lg font-medium text-white transition-all transform active:scale-95 whitespace-nowrap
              ${!l||i?"bg-slate-300 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"}`,children:i?"Sending...":"Notify Subscribers"})]})]}),s.jsxs("div",{className:"flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 overflow-y-auto max-h-[500px]",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4 flex-wrap gap-2",children:[s.jsx("h3",{className:"text-lg font-semibold text-slate-800",children:"Subscriber List"}),s.jsxs("button",{onClick:c,className:"px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 text-slate-700 text-sm font-bold flex items-center gap-2",children:[s.jsx("span",{children:"+"})," Add Subscriber"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.map(f=>s.jsxs("div",{className:`p-4 rounded-lg shadow-sm border transition-all relative group
                 ${f.isSubscribed?"bg-white border-slate-200":"bg-slate-100 border-slate-200 opacity-80"}
              `,children:[s.jsx("button",{onClick:()=>d(f.id),className:"absolute top-2 right-2 text-slate-300 hover:text-red-500 transition-colors",title:"Remove User",children:"✕"}),s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors
                      ${f.isSubscribed?"bg-blue-100 text-blue-600":"bg-slate-200 text-slate-400"}
                    `,children:"👤"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-slate-700",children:f.name}),s.jsx("button",{onClick:()=>g(f.id),className:`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border transition-all
                          ${f.isSubscribed?"bg-green-100 text-green-700 border-green-200 hover:bg-green-200":"bg-slate-200 text-slate-500 border-slate-300 hover:bg-slate-300"}
                        `,children:f.isSubscribed?"Subscribed":"Unsubscribed"})]})]}),s.jsx("div",{className:`p-3 rounded text-sm min-h-[60px] flex items-center justify-center text-center transition-colors duration-500 border
                    ${f.isSubscribed?f.lastNotification?"bg-blue-50 text-blue-900 border-blue-100":"bg-slate-50 text-slate-400 border-slate-100 italic":"bg-transparent border-dashed border-slate-300 text-slate-400 text-xs"}
                 `,children:f.isSubscribed?f.lastNotification?`"${f.lastNotification}"`:"Waiting for updates...":"User is not listening."})]},f.id)),e.length===0&&s.jsx("div",{className:"col-span-full text-center py-10 text-slate-400",children:"No users found. Add a subscriber to start."})]})]})]})},Zf=()=>{const[e,t]=w.useState("car"),[n,r]=w.useState("Home"),[l,o]=w.useState("Airport"),[i,a]=w.useState("idle"),[c,d]=w.useState(null),g=f=>{t(f),d(null),a("idle"),x(f)},x=(f=e)=>{a("calculating"),d(null),setTimeout(()=>{let v={time:"",cost:"",path:""};switch(f){case"car":v={time:"25 mins",cost:"$15 (Fuel + Parking)",path:"Takes highway, fastest route but risk of traffic."};break;case"walking":v={time:"4 hours",cost:"$0",path:"Scenic route through park. Free but exhausting."};break;case"public_transport":v={time:"45 mins",cost:"$3 (Bus Ticket)",path:"Bus Line 42 -> Train Line B. Economical balance."};break}d(v),a("success")},1e3)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-indigo-500"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-2",children:"🗺️ Route Planner"}),s.jsx("p",{className:"text-sm text-slate-500 mb-6",children:"Select a transport mode (Strategy). The app (Context) will use the corresponding algorithm to calculate the route."}),s.jsxs("div",{className:"space-y-4 mb-6",children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Start Point (A)"}),s.jsx("input",{type:"text",value:n,onChange:f=>r(f.target.value),className:"bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Destination (B)"}),s.jsx("input",{type:"text",value:l,onChange:f=>o(f.target.value),className:"bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase mb-2 block",children:"Choose Strategy"}),s.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[s.jsxs("button",{onClick:()=>g("car"),className:`p-3 rounded-lg border-2 flex flex-col items-center justify-center gap-1 transition-all
                        ${e==="car"?"bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm":"bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"}
                      `,children:[s.jsx("span",{className:"text-2xl",children:"🚗"}),s.jsx("span",{className:"text-[10px] font-bold",children:"Driving"})]}),s.jsxs("button",{onClick:()=>g("public_transport"),className:`p-3 rounded-lg border-2 flex flex-col items-center justify-center gap-1 transition-all
                        ${e==="public_transport"?"bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm":"bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"}
                      `,children:[s.jsx("span",{className:"text-2xl",children:"🚌"}),s.jsx("span",{className:"text-[10px] font-bold",children:"Transit"})]}),s.jsxs("button",{onClick:()=>g("walking"),className:`p-3 rounded-lg border-2 flex flex-col items-center justify-center gap-1 transition-all
                        ${e==="walking"?"bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm":"bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"}
                      `,children:[s.jsx("span",{className:"text-2xl",children:"🚶"}),s.jsx("span",{className:"text-[10px] font-bold",children:"Walking"})]})]})]})]})]}),s.jsxs("div",{className:"bg-slate-100 rounded-xl p-0 relative overflow-hidden shadow-inner border border-slate-200 flex flex-col h-[400px]",children:[s.jsx("div",{className:"absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1.5px,transparent_1.5px)] [background-size:20px_20px]"}),s.jsx("div",{className:"absolute top-4 right-4 bg-white/80 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-slate-500 border border-slate-200",children:"Map View"}),s.jsxs("svg",{className:"w-full h-full relative z-10",viewBox:"0 0 600 300",preserveAspectRatio:"xMidYMid slice",children:[s.jsxs("defs",{children:[s.jsx("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:s.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:e==="car"?"#6366f1":e==="public_transport"?"#e11d48":"#10b981"})}),s.jsx("filter",{id:"shadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:s.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"2",floodOpacity:"0.3"})})]}),i==="success"&&s.jsx("path",{d:e==="car"?"M 60 60 Q 300 10 540 240":e==="public_transport"?"M 60 60 L 60 240 L 540 240":"M 60 60 L 540 240",fill:"none",stroke:e==="car"?"#6366f1":e==="public_transport"?"#e11d48":"#10b981",strokeWidth:"6",strokeLinecap:"round",strokeDasharray:e==="walking"?"12,8":"0",markerEnd:"url(#arrow)",className:"animate-[dash_1s_ease-out_forwards]",pathLength:"1",filter:"url(#shadow)"}),s.jsxs("g",{transform:"translate(60, 60)",children:[s.jsx("circle",{r:"18",fill:"#3b82f6",stroke:"white",strokeWidth:"4",filter:"url(#shadow)"}),s.jsx("text",{y:"5",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",fontFamily:"sans-serif",children:"A"}),s.jsx("foreignObject",{x:"-50",y:"-45",width:"100",height:"30",style:{overflow:"visible"},children:s.jsx("div",{className:"flex justify-center",children:s.jsx("div",{className:"bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md border border-blue-400 whitespace-nowrap",children:n||"Start"})})})]}),s.jsxs("g",{transform:"translate(540, 240)",children:[s.jsx("circle",{r:"18",fill:"#ef4444",stroke:"white",strokeWidth:"4",filter:"url(#shadow)"}),s.jsx("text",{y:"5",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",fontFamily:"sans-serif",children:"B"}),s.jsx("foreignObject",{x:"-50",y:"25",width:"100",height:"30",style:{overflow:"visible"},children:s.jsx("div",{className:"flex justify-center",children:s.jsx("div",{className:"bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md border border-red-400 whitespace-nowrap",children:l||"Destination"})})})]})]}),i==="success"&&c&&s.jsxs("div",{className:"absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg shadow-xl border border-slate-200 animate-[slideUp_0.3s] z-20",children:[s.jsxs("div",{className:"flex justify-between items-start mb-2",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-2xl font-black text-slate-800",children:c.time}),s.jsx("div",{className:"text-sm font-bold text-green-600",children:c.cost})]}),s.jsx("div",{className:"text-4xl bg-slate-100 p-2 rounded-lg",children:e==="car"?"🚗":e==="public_transport"?"🚌":"🚶"})]}),s.jsx("div",{className:"text-xs text-slate-500 border-t pt-2 mt-2 font-medium",children:c.path})]}),i==="calculating"&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px] z-30 transition-all",children:s.jsxs("div",{className:"flex flex-col items-center bg-white px-6 py-4 rounded-xl shadow-2xl border border-slate-100 animate-[pop_0.2s]",children:[s.jsx("div",{className:"w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"}),s.jsx("div",{className:"text-xs font-bold text-indigo-800 mt-3",children:"Calculating Route..."}),s.jsxs("div",{className:"text-[10px] text-slate-400 mt-1",children:["Applying ",e," algorithm"]})]})})]})]}),s.jsx("style",{children:`
        @keyframes dash {
          from { stroke-dashoffset: 1; stroke-dasharray: 1; }
          to { stroke-dashoffset: 0; stroke-dasharray: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pop {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `})]})},ea=["#ef4444","#3b82f6","#10b981","#f59e0b","#8b5cf6"],Jf=()=>{const[e,t]=w.useState([]),[n,r]=w.useState("circle"),l=()=>{const i={id:Date.now(),type:n,color:ea[Math.floor(Math.random()*ea.length)],createdAt:Date.now()};t(a=>[i,...a])},o=()=>t([]);return s.jsxs("div",{className:"flex flex-col w-full gap-6",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between flex-wrap gap-4",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"🏭 Shape Factory"}),s.jsx("p",{className:"text-slate-500 text-sm",children:"Client code asks the factory for a shape, not knowing the specific class implementation."})]}),s.jsx("div",{className:"flex items-center gap-4 bg-slate-50 p-2 rounded-lg border border-slate-200",children:s.jsxs("div",{className:"flex gap-2 flex-wrap",children:[s.jsx("button",{onClick:()=>r("circle"),className:`px-4 py-2 rounded font-medium transition-colors ${n==="circle"?"bg-white shadow text-blue-600":"text-slate-500 hover:text-slate-700"}`,children:"Circle Factory"}),s.jsx("button",{onClick:()=>r("square"),className:`px-4 py-2 rounded font-medium transition-colors ${n==="square"?"bg-white shadow text-blue-600":"text-slate-500 hover:text-slate-700"}`,children:"Square Factory"}),s.jsx("button",{onClick:()=>r("triangle"),className:`px-4 py-2 rounded font-medium transition-colors ${n==="triangle"?"bg-white shadow text-blue-600":"text-slate-500 hover:text-slate-700"}`,children:"Triangle Factory"})]})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:l,className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 font-medium",children:"Produce Shape"}),s.jsx("button",{onClick:o,className:"px-4 py-2.5 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors",children:"Clear"})]})]}),s.jsx("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[300px] relative",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",children:[e.map(i=>s.jsxs("div",{className:"aspect-square flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm animate-[pop_0.4s_ease-out]",children:[s.jsx("div",{className:"w-16 h-16 transition-all",style:{backgroundColor:i.color,borderRadius:i.type==="circle"?"50%":i.type==="square"?"8px":"0",clipPath:i.type==="triangle"?"polygon(50% 0%, 0% 100%, 100% 100%)":"none"}}),s.jsx("span",{className:"mt-3 text-xs font-mono text-slate-400 uppercase tracking-wide",children:i.type})]},i.id)),e.length===0&&s.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-slate-300",children:[s.jsx("span",{className:"text-4xl mb-4",children:"📦"}),s.jsx("p",{children:"Factory floor is empty. Start production!"})]})]})}),s.jsx("style",{children:`
        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `})]})},ta={createChair:()=>({style:"Modern",icon:"🪑",sitOn:()=>"Sitting on a sleek, minimalist chair."}),createTable:()=>({style:"Modern",icon:"⬛",putCoffee:()=>"Placing coffee on a glass table."})},na={createChair:()=>({style:"Victorian",icon:"🛋️",sitOn:()=>"Sitting on a velvet, cushioned chair."}),createTable:()=>({style:"Victorian",icon:"🪵",putCoffee:()=>"Placing coffee on an ornate wooden table."})},ra={createChair:()=>({style:"Rustic",icon:"🪵",sitOn:()=>"Sitting on a rough log bench."}),createTable:()=>null},ep=()=>{const[e,t]=w.useState("Modern"),[n,r]=w.useState([]),l=()=>{let i;e==="Modern"?i=ta.createChair():e==="Victorian"?i=na.createChair():i=ra.createChair(),r(a=>[i,...a])},o=()=>{let i;e==="Modern"?i=ta.createTable():e==="Victorian"?i=na.createTable():i=ra.createTable(),i?r(a=>[i,...a]):alert(`Sorry! The ${e} Factory does not manufacture tables.`)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-2",children:"🪑 Furniture Manufacturing Plant"}),s.jsx("p",{className:"text-slate-500 mb-6 text-sm",children:"Select a factory configuration (Style). The client code (buttons) doesn't need to know the specific class of furniture it's creating, just that it asks the selected factory for a product."}),s.jsx("div",{className:"grid grid-cols-3 gap-4 mb-8",children:["Modern","Victorian","Rustic"].map(i=>s.jsxs("button",{onClick:()=>t(i),className:`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
                 ${e===i?"border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200":"border-slate-200 hover:border-slate-300"}
               `,children:[s.jsx("span",{className:"text-2xl",children:i==="Modern"?"🏙️":i==="Victorian"?"🏰":"⛺"}),s.jsxs("span",{className:"font-bold text-sm",children:[i," Factory"]})]},i))}),s.jsxs("div",{className:"bg-slate-50 p-6 rounded-xl border border-slate-200",children:[s.jsx("h4",{className:"font-bold text-slate-700 mb-4 uppercase text-xs tracking-wider",children:"Production Control"}),s.jsxs("div",{className:"flex gap-4",children:[s.jsxs("button",{onClick:l,className:"flex-1 py-3 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-400 transition-all font-semibold text-slate-700 flex items-center justify-center gap-2",children:[s.jsx("span",{children:"🪑"})," Manufacture Chair"]}),s.jsxs("button",{onClick:o,className:`flex-1 py-3 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow-md transition-all font-semibold text-slate-700 flex items-center justify-center gap-2
                  ${e==="Rustic"?"opacity-50 cursor-not-allowed bg-slate-100":"hover:border-indigo-400"}
                `,title:e==="Rustic"?"Not available in this factory":"",children:[s.jsx("span",{children:"☕"})," Manufacture Table"]})]}),e==="Rustic"&&s.jsx("div",{className:"text-center text-xs text-orange-500 mt-2 font-medium",children:"* The Rustic factory currently only produces chairs (2 kinds of table limit)."})]})]}),s.jsxs("div",{className:"bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-xl border border-slate-300 min-h-[200px]",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h4",{className:"font-bold text-slate-700",children:"Showroom Inventory"}),s.jsx("button",{onClick:()=>r([]),className:"text-xs text-slate-500 hover:text-red-500",children:"Clear Floor"})]}),s.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.map((i,a)=>s.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md border border-slate-200 animate-[pop_0.3s_ease-out] flex flex-col items-center w-32",children:[s.jsx("div",{className:"text-4xl mb-2",children:i.icon}),s.jsx("div",{className:"text-xs font-bold text-slate-800",children:i.style}),s.jsx("div",{className:"text-[10px] text-slate-500 uppercase",children:"sitOn"in i?"Chair":"Table"})]},a)),n.length===0&&s.jsx("div",{className:"w-full h-32 flex items-center justify-center text-slate-400 italic",children:"No furniture manufactured yet."})]})]})]})},tp=()=>{const[e,t]=w.useState({head:"basic",torso:"basic",arms:"basic",legs:"basic"}),n=(r,l)=>({head:{basic:"😐",warrior:"😠",alien:"👽",tech:"🤖"},torso:{basic:"👕",warrior:"🛡️",alien:"🟢",tech:"🎛️"},arms:{basic:"💪",warrior:"🗡️",alien:"🛸",tech:"🔧"},legs:{basic:"👖",warrior:"🦵",alien:"🐙",tech:"⚙️"}})[l][r];return s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsx("h3",{className:"text-lg font-bold text-slate-800 mb-6",children:"🛠️ Robot Builder"}),s.jsx("div",{className:"space-y-6",children:Object.keys(e).map(r=>s.jsxs("div",{className:"space-y-2",children:[s.jsx("label",{className:"text-sm font-semibold text-slate-500 uppercase tracking-wider",children:r}),s.jsx("div",{className:"flex gap-2",children:["basic","warrior","alien","tech"].map(l=>s.jsx("button",{onClick:()=>t(o=>({...o,[r]:l})),className:`flex-1 py-2 text-2xl rounded-lg border transition-all hover:-translate-y-1
                      ${e[r]===l?"bg-indigo-50 border-indigo-500 shadow-sm":"bg-white border-slate-200 hover:bg-slate-50"}
                    `,title:l,children:n(l,r)},l))})]},r))}),s.jsx("div",{className:"mt-8 pt-6 border-t border-slate-100",children:s.jsx("button",{onClick:()=>t({head:"basic",torso:"basic",arms:"basic",legs:"basic"}),className:"text-sm text-slate-400 hover:text-red-500 transition-colors",children:"Reset Builder"})})]}),s.jsxs("div",{className:"bg-slate-900 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner",children:[s.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center animate-[bounce_2s_infinite]",children:[s.jsx("div",{className:"text-6xl mb-[-10px] z-20 transition-all duration-300 transform hover:scale-110",children:n(e.head,"head")}),s.jsxs("div",{className:"flex items-center justify-center -space-x-4 z-10",children:[s.jsx("div",{className:"text-5xl transform -rotate-12 origin-top-right transition-all duration-300 hover:rotate-0",children:n(e.arms,"arms")}),s.jsx("div",{className:"text-7xl z-10 transition-all duration-300 hover:scale-105",children:n(e.torso,"torso")}),s.jsx("div",{className:"text-5xl transform rotate-12 origin-top-left transition-all duration-300 hover:rotate-0",children:n(e.arms,"arms")})]}),s.jsx("div",{className:"text-6xl mt-[-15px] z-0 transition-all duration-300 transform hover:scale-110",children:n(e.legs,"legs")})]}),s.jsxs("div",{className:"mt-12 text-center relative z-10",children:[s.jsx("div",{className:"inline-block px-4 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700",children:"Product Ready"}),s.jsx("h2",{className:"text-2xl font-bold text-white mt-2 capitalize",children:e.head===e.torso&&e.torso===e.arms?`Full ${e.head} Bot`:"Custom Hybrid Bot"})]})]})]})},np=()=>{const[e,t]=w.useState({model:"Galaxy X",color:"Phantom Black",storage:256,battery:100}),[n,r]=w.useState([]),l=()=>{const a={...e};r(c=>[...c,a])},o=(a,c)=>{t(d=>({...d,[a]:c}))},i=(a,c,d)=>{r(g=>g.map((x,f)=>f===a?{...x,[c]:d}:x))};return s.jsx("div",{className:"flex flex-col gap-8 w-full",children:s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[s.jsxs("div",{className:"lg:col-span-4 bg-white p-6 rounded-xl shadow-lg border border-indigo-100 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-indigo-500"}),s.jsxs("h3",{className:"font-bold text-slate-800 mb-6 flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"📐"})," Master Prototype"]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Model Name"}),s.jsx("input",{type:"text",value:e.model,onChange:a=>o("model",a.target.value),className:"w-full border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-1 font-semibold text-slate-700 bg-transparent"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-xs font-bold text-slate-400 uppercase",children:"Color Finish"}),s.jsx("div",{className:"flex gap-2 mt-2",children:["Phantom Black","Glacial Silver","Rose Gold"].map(a=>s.jsx("button",{onClick:()=>o("color",a),className:`w-8 h-8 rounded-full border-2 shadow-sm transition-transform hover:scale-110
                            ${a==="Phantom Black"?"bg-slate-900":a==="Glacial Silver"?"bg-slate-200":"bg-rose-300"}
                            ${e.color===a?"border-indigo-500 scale-110":"border-transparent"}
                          `,title:a},a))})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"text-xs font-bold text-slate-400 uppercase",children:["Storage: ",e.storage," GB"]}),s.jsx("input",{type:"range",min:"64",max:"1024",step:"64",value:e.storage,onChange:a=>o("storage",Number(a.target.value)),className:"w-full accent-indigo-600 mt-2"})]})]}),s.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-100",children:[s.jsxs("button",{onClick:l,className:"w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 active:scale-95 transition-all font-bold flex items-center justify-center gap-2",children:[s.jsx("span",{children:"📠"})," Clone to Inventory"]}),s.jsx("p",{className:"text-[10px] text-center text-slate-400 mt-2",children:"Creates an exact copy without re-running initialization logic."})]})]}),s.jsxs("div",{className:"lg:col-span-8 bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-300 min-h-[400px]",children:[s.jsxs("div",{className:"flex justify-between items-center mb-6",children:[s.jsxs("h3",{className:"font-bold text-slate-600",children:["Inventory (",n.length," items)"]}),n.length>0&&s.jsx("button",{onClick:()=>r([]),className:"text-xs text-red-500 hover:text-red-700",children:"Clear All"})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:[n.map((a,c)=>s.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-slate-200 animate-[fadeIn_0.3s] group relative",children:[s.jsxs("div",{className:"absolute top-2 right-2 text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded",children:["#",c+1]}),s.jsx("div",{className:"flex justify-center mb-4",children:s.jsx("div",{className:`w-16 h-28 rounded-2xl border-4 border-slate-300 shadow-inner flex items-center justify-center
                          ${a.color==="Phantom Black"?"bg-slate-800":a.color==="Glacial Silver"?"bg-slate-100":"bg-rose-200"}
                        `,children:s.jsx("span",{className:"text-2xl",children:"📱"})})}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("div",{className:"font-bold text-slate-800 text-sm truncate",children:a.model}),s.jsx("div",{className:"text-xs text-slate-500",children:a.color}),s.jsxs("div",{className:"text-xs text-slate-500",children:[a.storage," GB"]})]}),s.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity",children:[s.jsx("label",{className:"text-[10px] font-bold text-slate-400",children:"Customize Clone"}),s.jsxs("select",{className:"w-full text-xs border rounded mt-1 bg-slate-50",onChange:d=>i(c,"color",d.target.value),value:a.color,children:[s.jsx("option",{value:"Phantom Black",children:"Black"}),s.jsx("option",{value:"Glacial Silver",children:"Silver"}),s.jsx("option",{value:"Rose Gold",children:"Gold"})]})]})]},c)),n.length===0&&s.jsxs("div",{className:"col-span-full flex flex-col items-center justify-center text-slate-300 mt-10",children:[s.jsx("div",{className:"text-4xl mb-2",children:"📦"}),s.jsx("p",{children:"Inventory is empty."}),s.jsx("p",{className:"text-sm",children:"Configure the prototype and click Clone."})]})]})]})]})})};class Qt{constructor(){this.scores=[],this.scores=[{id:"p1",name:"Player 1",score:0},{id:"p2",name:"Player 2",score:0}]}static getInstance(){return Qt.instance||(Qt.instance=new Qt),Qt.instance}updateScore(t,n){const r=this.scores.find(l=>l.id===t);r&&(r.score+=n,this.scores.sort((l,o)=>o.score-l.score))}reset(){this.scores.forEach(t=>t.score=0)}}const rp=()=>{const[,e]=w.useState(0),t=Qt.getInstance(),n=(i,a)=>{t.updateScore(i,a),e(c=>c+1)},r=()=>{t.reset(),e(i=>i+1)},l=t.scores.findIndex(i=>i.id==="p1")+1,o=t.scores.findIndex(i=>i.id==="p2")+1;return s.jsxs("div",{className:"flex flex-col gap-8 w-full",children:[s.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border-b-4 border-red-500 shadow-sm relative",children:[s.jsx("div",{className:"absolute -top-3 left-4 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold",children:"Device A"}),s.jsx("h3",{className:"font-bold text-slate-800 text-lg mb-1",children:"Player 1"}),s.jsx("div",{className:"text-xs text-slate-400 mb-6",children:"Connected to Global Leaderboard"}),s.jsxs("div",{className:"flex gap-2 mb-4",children:[s.jsx("button",{onClick:()=>n("p1",100),className:"flex-1 py-2 bg-red-50 text-red-700 font-bold rounded hover:bg-red-100 border border-red-200",children:"Win Match (+100)"}),s.jsx("button",{onClick:()=>n("p1",50),className:"flex-1 py-2 bg-red-50 text-red-700 font-bold rounded hover:bg-red-100 border border-red-200",children:"Bonus (+50)"})]}),s.jsxs("div",{className:"bg-slate-100 p-3 rounded text-center",children:[s.jsx("div",{className:"text-xs text-slate-500 uppercase",children:"My Rank"}),s.jsxs("div",{className:"text-2xl font-black text-slate-700",children:["#",l]})]})]}),s.jsxs("div",{className:"w-full md:w-80 bg-slate-900 rounded-2xl p-6 text-white shadow-2xl border-4 border-yellow-400 relative overflow-hidden flex flex-col",children:[s.jsx("div",{className:"absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:"text-4xl mb-2",children:"🏆"}),s.jsx("h3",{className:"font-bold text-yellow-400 tracking-widest uppercase text-sm",children:"Global Leaderboard"}),s.jsx("div",{className:"text-[10px] text-slate-400",children:"(Singleton Instance)"})]}),s.jsx("div",{className:"space-y-2 flex-1",children:t.scores.map((i,a)=>s.jsxs("div",{className:`flex justify-between items-center p-3 rounded bg-white/10 border transition-all duration-500
                   ${a===0?"border-yellow-500/50 bg-yellow-500/10":"border-transparent"}
                `,children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`font-mono font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs
                        ${a===0?"bg-yellow-400 text-black":"bg-slate-700 text-slate-400"}
                      `,children:a+1}),s.jsx("span",{className:"font-bold text-sm",children:i.name})]}),s.jsx("div",{className:"font-mono text-green-400",children:i.score})]},i.id))}),s.jsx("button",{onClick:r,className:"mt-6 text-xs text-slate-600 hover:text-slate-400 underline self-center",children:"Reset Season"})]}),s.jsxs("div",{className:"flex-1 bg-white p-6 rounded-xl border-b-4 border-blue-500 shadow-sm relative",children:[s.jsx("div",{className:"absolute -top-3 left-4 bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold",children:"Device B"}),s.jsx("h3",{className:"font-bold text-slate-800 text-lg mb-1",children:"Player 2"}),s.jsx("div",{className:"text-xs text-slate-400 mb-6",children:"Connected to Global Leaderboard"}),s.jsxs("div",{className:"flex gap-2 mb-4",children:[s.jsx("button",{onClick:()=>n("p2",100),className:"flex-1 py-2 bg-blue-50 text-blue-700 font-bold rounded hover:bg-blue-100 border border-blue-200",children:"Win Match (+100)"}),s.jsx("button",{onClick:()=>n("p2",50),className:"flex-1 py-2 bg-blue-50 text-blue-700 font-bold rounded hover:bg-blue-100 border border-blue-200",children:"Bonus (+50)"})]}),s.jsxs("div",{className:"bg-slate-100 p-3 rounded text-center",children:[s.jsx("div",{className:"text-xs text-slate-500 uppercase",children:"My Rank"}),s.jsxs("div",{className:"text-2xl font-black text-slate-700",children:["#",o]})]})]})]}),s.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 p-4 rounded-xl text-center text-sm text-indigo-800",children:[s.jsx("strong",{children:"Key Concept:"}),' Even though Player 1 and Player 2 are on different "devices", they both reference the exact same ',s.jsx("code",{children:"Leaderboard.instance"}),". There is no synchronization logic needed between them because the object itself is shared memory."]})]})},sp=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState("idle"),l=()=>{r(e?"success":"failed")};return s.jsxs("div",{className:"flex flex-col gap-8 w-full",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 items-center",children:[s.jsxs("div",{className:"bg-slate-800 p-6 rounded-xl border-4 border-slate-600 shadow-xl flex flex-col items-center relative h-64 justify-center",children:[s.jsx("div",{className:"absolute top-2 left-4 text-xs font-bold text-slate-400 uppercase",children:"Target (System)"}),s.jsx("div",{className:"text-6xl mb-4",children:"💻"}),s.jsx("div",{className:"text-white font-bold mb-2",children:"Modern Laptop"}),s.jsxs("div",{className:"bg-black px-4 py-2 rounded-lg border border-slate-600 flex flex-col items-center mt-2 group relative",children:[s.jsx("div",{className:"w-12 h-4 bg-slate-900 rounded-full border border-slate-700 mb-1"}),s.jsx("div",{className:"text-[10px] text-slate-400 font-mono",children:"USB-C Port"}),s.jsx("div",{className:`absolute -right-3 top-2 w-2 h-2 rounded-full ${n==="success"?"bg-green-500 shadow-[0_0_10px_#22c55e]":"bg-red-500"} ${n==="idle"?"opacity-0":"opacity-100"}`})]})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[s.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-slate-200 w-full text-center",children:[s.jsx("h4",{className:"font-bold text-slate-700 mb-3 text-sm",children:"Select Equipment"}),s.jsx("button",{onClick:()=>{t(!e),r("idle")},className:`w-full py-2 rounded-lg border-2 transition-all font-bold text-sm flex items-center justify-center gap-2
                    ${e?"bg-indigo-50 border-indigo-500 text-indigo-700":"bg-slate-50 border-slate-200 text-slate-400"}
                  `,children:e?"✅ Adapter Equipped":"⬜ No Adapter"})]}),s.jsx("div",{className:"relative w-full h-12 flex items-center justify-center",children:e?s.jsxs("div",{className:"w-32 h-10 bg-indigo-600 rounded flex items-center justify-between px-2 text-white shadow-lg animate-[fadeIn_0.3s]",children:[s.jsx("div",{className:"w-4 h-2 bg-slate-300 rounded-sm"})," ",s.jsx("span",{className:"text-[10px] font-bold tracking-tighter",children:"DONGLE"}),s.jsx("div",{className:"w-6 h-3 bg-black rounded-sm border border-slate-500"})," "]}):s.jsx("div",{className:"text-xs text-slate-400 italic",children:"Direct Connection..."})}),s.jsx("button",{onClick:l,className:`px-8 py-3 rounded-full font-bold text-white shadow-lg transition-transform active:scale-95
                 ${e?"bg-green-600 hover:bg-green-700":"bg-slate-700 hover:bg-slate-800"}
               `,children:"Attempt Connection"})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center h-64 justify-center",children:[s.jsx("div",{className:"absolute top-2 right-4 text-xs font-bold text-slate-400 uppercase",children:"Adaptee (Legacy)"}),s.jsx("div",{className:"text-5xl mb-4 text-blue-600",children:"💾"}),s.jsx("div",{className:"text-slate-800 font-bold mb-2",children:"Old Flash Drive"}),s.jsx("div",{className:"bg-slate-300 w-16 h-8 rounded-sm border-2 border-slate-400 mt-2 flex items-center justify-center shadow-inner",children:s.jsx("div",{className:"w-12 h-4 bg-white border border-slate-300"})}),s.jsx("div",{className:"text-[10px] text-slate-400 font-mono mt-1",children:"USB-A Connector"})]})]}),s.jsx("div",{className:`p-4 rounded-xl text-center font-bold text-lg transition-all
          ${n==="idle"?"opacity-0":"opacity-100"}
          ${n==="success"?"bg-green-100 text-green-700 border border-green-200":"bg-red-100 text-red-700 border border-red-200"}
       `,children:n==="success"?"✅ SUCCESS: Adapter converted USB-A interface to USB-C!":"❌ FAILED: Incompatible Interfaces. Cannot plug USB-A into USB-C."})]})},lp=()=>{const[e,t]=w.useState({enabled:!1,volume:30}),[n,r]=w.useState({enabled:!1,volume:50}),[l,o]=w.useState("tv"),[i,a]=w.useState("basic"),c=()=>{l==="tv"?t(v=>({...v,enabled:!v.enabled})):r(v=>({...v,enabled:!v.enabled}))},d=()=>{l==="tv"?t(v=>({...v,volume:Math.max(0,v.volume-10)})):r(v=>({...v,volume:Math.max(0,v.volume-10)}))},g=()=>{l==="tv"?t(v=>({...v,volume:Math.min(100,v.volume+10)})):r(v=>({...v,volume:Math.min(100,v.volume+10)}))},x=()=>{l==="tv"?t(v=>({...v,volume:0})):r(v=>({...v,volume:0}))},f=l==="tv"?e:n;return s.jsx("div",{className:"flex flex-col gap-8 w-full",children:s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 flex flex-col items-center",children:[s.jsx("div",{className:"text-slate-400 text-xs font-bold uppercase tracking-widest mb-4",children:"Abstraction Layer"}),s.jsxs("div",{className:"bg-slate-700 p-1 rounded-lg mb-6 flex gap-2",children:[s.jsx("button",{onClick:()=>a("basic"),className:`px-3 py-1 rounded text-sm ${i==="basic"?"bg-white text-slate-900":"text-slate-300"}`,children:"Basic Remote"}),s.jsx("button",{onClick:()=>a("advanced"),className:`px-3 py-1 rounded text-sm ${i==="advanced"?"bg-white text-slate-900":"text-slate-300"}`,children:"Advanced Remote"})]}),s.jsxs("div",{className:"bg-slate-900 p-6 rounded-xl border border-slate-600 w-48 shadow-2xl flex flex-col gap-4",children:[s.jsx("button",{onClick:c,className:"w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 self-center shadow-lg active:scale-95 transition-transform",children:"⏻"}),s.jsxs("div",{className:"flex justify-between mt-2",children:[s.jsx("button",{onClick:d,className:"w-10 h-10 bg-slate-700 rounded text-white hover:bg-slate-600",children:"-"}),s.jsx("button",{onClick:g,className:"w-10 h-10 bg-slate-700 rounded text-white hover:bg-slate-600",children:"+"})]}),i==="advanced"&&s.jsx("button",{onClick:x,className:"w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-xs font-bold uppercase tracking-wider",children:"Mute (Adv)"})]}),s.jsxs("p",{className:"text-slate-500 text-sm mt-4 text-center",children:["The remote works with ANY device. ",s.jsx("br",{}),"It doesn't care if it's a TV or Radio."]})]}),s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("div",{className:"text-slate-400 text-xs font-bold uppercase tracking-widest text-center",children:"Implementation Layer"}),s.jsxs("div",{className:"flex gap-4 mb-2 justify-center",children:[s.jsx("button",{onClick:()=>o("tv"),className:`px-4 py-2 rounded-lg border-2 font-bold ${l==="tv"?"border-blue-500 bg-blue-50 text-blue-700":"border-slate-200 bg-white text-slate-400"}`,children:"Television"}),s.jsx("button",{onClick:()=>o("radio"),className:`px-4 py-2 rounded-lg border-2 font-bold ${l==="radio"?"border-orange-500 bg-orange-50 text-orange-700":"border-slate-200 bg-white text-slate-400"}`,children:"Radio"})]}),s.jsxs("div",{className:`flex-1 rounded-xl border-2 transition-all duration-500 flex items-center justify-center relative overflow-hidden shadow-sm
               ${l==="tv"?"bg-black border-slate-800":"bg-orange-100 border-orange-200"}
             `,children:[l==="tv"?s.jsxs("div",{className:`w-full h-full flex items-center justify-center flex-col transition-opacity duration-500 ${e.enabled?"opacity-100":"opacity-10"}`,children:[s.jsx("div",{className:"w-48 h-32 bg-gradient-to-tr from-blue-600 to-purple-600 rounded shadow-lg animate-pulse"}),s.jsxs("div",{className:"mt-4 text-white font-mono",children:["Volume: ",e.volume,"%"]})]}):s.jsxs("div",{className:`w-full h-full flex items-center justify-center flex-col transition-opacity duration-500 ${n.enabled?"opacity-100":"opacity-40"}`,children:[s.jsx("div",{className:"w-32 h-32 rounded-full border-8 border-orange-400 bg-orange-200 flex items-center justify-center shadow-inner",children:s.jsx("div",{className:"w-24 h-1 bg-slate-800 animate-spin",style:{animationDuration:"3s"}})}),s.jsxs("div",{className:"mt-4 text-orange-800 font-mono font-bold",children:["Volume: ",n.volume,"%"]})]}),!f.enabled&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white font-bold text-xl",children:"OFF"})]})]})]})})},op={id:"root",name:"Root",type:"folder",children:[{id:"f1",name:"Documents",type:"folder",children:[{id:"fi1",name:"Resume.pdf",type:"file",size:450},{id:"fi2",name:"Notes.txt",type:"file",size:12}]},{id:"f2",name:"Images",type:"folder",children:[{id:"fi3",name:"Vacation.png",type:"file",size:2500},{id:"fi4",name:"Profile.jpg",type:"file",size:1200}]},{id:"fi5",name:"config.json",type:"file",size:5}]},vd=e=>{var t;return e.type==="file"?e.size||0:((t=e.children)==null?void 0:t.reduce((n,r)=>n+vd(r),0))||0},ip=()=>{const[e]=w.useState(op),[t,n]=w.useState({root:!0,f1:!0,f2:!0}),r=o=>{n(i=>({...i,[o]:!i[o]}))},l=(o,i=0)=>{const a=o.type==="folder",c=vd(o),d=t[o.id];return s.jsxs("div",{style:{marginLeft:`${i*24}px`},className:"mb-2",children:[s.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg border transition-colors cursor-pointer hover:bg-slate-50
             ${a?"bg-white border-slate-200":"bg-slate-50 border-transparent"}
           `,onClick:()=>a&&r(o.id),children:[s.jsx("span",{className:"text-lg w-6 text-center",children:a?d?"📂":"📁":"📄"}),s.jsx("span",{className:"font-medium text-slate-700",children:o.name}),s.jsx("div",{className:"ml-auto flex items-center gap-2",children:s.jsx("span",{className:"text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded",children:c>1e3?`${(c/1024).toFixed(1)} MB`:`${c} KB`})})]}),a&&d&&o.children&&s.jsx("div",{className:"border-l-2 border-slate-100 ml-4 mt-1",children:o.children.map(g=>l(g,i))})]},o.id)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-indigo-800 text-sm mb-2",children:[s.jsx("strong",{children:"Composite Pattern Logic:"})," The client asks the root folder for its size. The folder asks its children. Files return their size, folders recurse. The client treats both uniformly."]}),s.jsx("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-hidden",children:l(e)})]})};class ap{getDescription(){return"Novice Adventurer"}getAttack(){return 10}getDefense(){return 5}}class Vo{constructor(t){this.character=t}}class cp extends Vo{getDescription(){return this.character.getDescription()+" with Sword"}getAttack(){return this.character.getAttack()+15}getDefense(){return this.character.getDefense()+2}}class dp extends Vo{getDescription(){return this.character.getDescription()+" in Iron Armor"}getAttack(){return this.character.getAttack()}getDefense(){return this.character.getDefense()+20}}class up extends Vo{getDescription(){return"Enchanted "+this.character.getDescription()}getAttack(){return this.character.getAttack()+10}getDefense(){return this.character.getDefense()+10}}const fp=()=>{const[e,t]=w.useState([]);let n=new ap;e.forEach(l=>{l==="sword"&&(n=new cp(n)),l==="armor"&&(n=new dp(n)),l==="aura"&&(n=new up(n))});const r=l=>{e.includes(l)?t(o=>o.filter(i=>i!==l)):t(o=>[...o,l])};return s.jsxs("div",{className:"flex flex-col gap-8 w-full",children:[s.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-800",children:[s.jsx("strong",{children:"Analogy:"}),' In an RPG, equipping items wraps the character in new layers. The character object itself remains the same, but the "Decorators" (Armor, Weapon) intercept calls to calculate stats, adding their own values to the result.']}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-6",children:"🎒 Equipment Inventory"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("button",{onClick:()=>r("sword"),className:`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all group
                    ${e.includes("sword")?"border-red-500 bg-red-50":"border-slate-200 hover:border-red-300"}
                  `,children:[s.jsx("div",{className:"text-2xl",children:"⚔️"}),s.jsxs("div",{className:"text-left flex-1",children:[s.jsx("div",{className:"font-bold text-slate-700",children:"Rusty Broadsword"}),s.jsx("div",{className:"text-xs text-slate-500",children:"+15 Atk, +2 Def"})]}),s.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${e.includes("sword")?"bg-red-500 border-red-500 text-white":"border-slate-300"}`,children:e.includes("sword")&&"✓"})]}),s.jsxs("button",{onClick:()=>r("armor"),className:`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all group
                    ${e.includes("armor")?"border-slate-600 bg-slate-100":"border-slate-200 hover:border-slate-400"}
                  `,children:[s.jsx("div",{className:"text-2xl",children:"🛡️"}),s.jsxs("div",{className:"text-left flex-1",children:[s.jsx("div",{className:"font-bold text-slate-700",children:"Iron Plate Body"}),s.jsx("div",{className:"text-xs text-slate-500",children:"+0 Atk, +20 Def"})]}),s.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${e.includes("armor")?"bg-slate-600 border-slate-600 text-white":"border-slate-300"}`,children:e.includes("armor")&&"✓"})]}),s.jsxs("button",{onClick:()=>r("aura"),className:`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all group
                    ${e.includes("aura")?"border-purple-500 bg-purple-50":"border-slate-200 hover:border-purple-300"}
                  `,children:[s.jsx("div",{className:"text-2xl",children:"✨"}),s.jsxs("div",{className:"text-left flex-1",children:[s.jsx("div",{className:"font-bold text-slate-700",children:"Magic Aura"}),s.jsx("div",{className:"text-xs text-slate-500",children:"+10 Atk, +10 Def"})]}),s.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${e.includes("aura")?"bg-purple-500 border-purple-500 text-white":"border-slate-300"}`,children:e.includes("aura")&&"✓"})]})]})]}),s.jsxs("div",{className:"bg-slate-900 rounded-xl p-8 flex flex-col items-center justify-between relative overflow-hidden shadow-inner",children:[s.jsxs("div",{className:"relative w-40 h-40 flex items-center justify-center mt-4",children:[s.jsx("div",{className:"text-[100px] absolute z-10 transition-transform hover:scale-105 cursor-default",title:"Base Character",children:"🧍"}),e.includes("armor")&&s.jsx("div",{className:"text-[60px] absolute z-20 top-10 left-8 animate-[pop_0.3s]",children:"🛡️"}),e.includes("sword")&&s.jsx("div",{className:"text-[60px] absolute z-20 top-8 right-0 rotate-12 animate-[pop_0.3s]",children:"⚔️"}),e.includes("aura")&&s.jsx("div",{className:"absolute inset-0 z-0 bg-purple-500/30 blur-xl rounded-full animate-pulse"})]}),s.jsxs("div",{className:"w-full bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-600 mt-8",children:[s.jsx("div",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-600 pb-2",children:"Stats Calculator"}),s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("span",{className:"text-red-400 font-bold",children:"Attack Power"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-2 w-32 bg-slate-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-red-500 transition-all duration-500",style:{width:`${n.getAttack()/50*100}%`}})}),s.jsx("span",{className:"text-white font-mono w-6 text-right",children:n.getAttack()})]})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-blue-400 font-bold",children:"Defense Power"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"h-2 w-32 bg-slate-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-blue-500 transition-all duration-500",style:{width:`${n.getDefense()/50*100}%`}})}),s.jsx("span",{className:"text-white font-mono w-6 text-right",children:n.getDefense()})]})]}),s.jsxs("div",{className:"mt-4 text-xs text-slate-400 italic text-center",children:['"',n.getDescription(),'"']})]})]})]}),s.jsx("style",{children:`
        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
       `})]})},pp=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[l,o]=w.useState(!1),[i,a]=w.useState(!0),[c,d]=w.useState(!1),g=()=>{t(!1),r(!0),o(!0),a(!1),d(!0)},x=()=>{t(!0),r(!1),o(!1),a(!0),d(!1)},f=()=>{t(!1),r(!1),o(!1),a(!0),d(!1)};return s.jsx("div",{className:"flex flex-col gap-8 w-full",children:s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-slate-200",children:[s.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:"📱 Smart Home App (Facade)"}),s.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[s.jsxs("button",{onClick:g,className:"p-4 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition-all text-left group",children:[s.jsx("div",{className:"font-bold text-lg",children:"🎬 Movie Mode"}),s.jsx("div",{className:"text-indigo-200 text-sm opacity-80 group-hover:opacity-100",children:"Dims lights, TV on, Sound on, Blinds closed."})]}),s.jsxs("button",{onClick:x,className:"p-4 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition-all text-left group",children:[s.jsx("div",{className:"font-bold text-lg",children:"📖 Reading Mode"}),s.jsx("div",{className:"text-amber-100 text-sm opacity-80 group-hover:opacity-100",children:"Lights bright, TV off, Quiet."})]}),s.jsxs("button",{onClick:f,className:"p-4 bg-slate-700 text-white rounded-xl shadow hover:bg-slate-800 transition-all text-left",children:[s.jsx("div",{className:"font-bold text-lg",children:"🏠 Leaving Home"}),s.jsx("div",{className:"text-slate-300 text-sm",children:"Shut down everything."})]})]})]}),s.jsxs("div",{className:"bg-slate-50 p-6 rounded-xl border border-slate-200",children:[s.jsx("h3",{className:"text-sm font-bold text-slate-500 uppercase tracking-widest mb-6",children:"Complex Subsystem State"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:`p-4 rounded-lg border-2 transition-all ${e?"bg-yellow-100 border-yellow-400 text-yellow-700":"bg-slate-200 border-transparent text-slate-400"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"💡"}),s.jsxs("div",{className:"font-bold",children:["Lights ",e?"ON":"OFF"]})]}),s.jsxs("div",{className:`p-4 rounded-lg border-2 transition-all ${n?"bg-blue-100 border-blue-400 text-blue-700":"bg-slate-200 border-transparent text-slate-400"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"📺"}),s.jsxs("div",{className:"font-bold",children:["TV ",n?"ON":"OFF"]})]}),s.jsxs("div",{className:`p-4 rounded-lg border-2 transition-all ${l?"bg-purple-100 border-purple-400 text-purple-700":"bg-slate-200 border-transparent text-slate-400"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"🔊"}),s.jsxs("div",{className:"font-bold",children:["Sound ",l?"ON":"OFF"]})]}),s.jsxs("div",{className:`p-4 rounded-lg border-2 transition-all ${i?"bg-sky-100 border-sky-400 text-sky-700":"bg-slate-800 text-white"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"🪟"}),s.jsxs("div",{className:"font-bold",children:["Blinds ",i?"OPEN":"CLOSED"]})]}),s.jsxs("div",{className:`p-4 rounded-lg border-2 transition-all ${c?"bg-cyan-100 border-cyan-400 text-cyan-700":"bg-slate-200 border-transparent text-slate-400"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"❄️"}),s.jsxs("div",{className:"font-bold",children:["AC ",c?"ON":"OFF"]})]})]})]})]})})};class hp{constructor(t,n,r){this.name=t,this.color=n,this.icon=r}draw(t,n,r){t.font="20px serif",t.fillStyle=this.color,t.fillText(this.icon,n,r)}}const zo=class zo{static getTreeType(t,n,r){const l=t+n;return this.types[l]||(this.types[l]=new hp(t,n,r)),this.types[l]}};zo.types={};let Mn=zo;const mp=()=>{const[e,t]=w.useState(0),n=Xs.useRef(null),r=Xs.useRef([]),l=a=>{const c=Mn.getTreeType("Oak","green","🌳"),d=Mn.getTreeType("Pine","darkgreen","🌲");for(let g=0;g<a;g++){const x=Math.random()>.5?c:d;r.current.push({x:Math.random()*600,y:Math.random()*300,type:x})}t(g=>g+a),o()},o=()=>{const a=n.current;if(!a)return;const c=a.getContext("2d");c&&(c.clearRect(0,0,a.width,a.height),r.current.forEach(d=>{d.type.draw(c,d.x,d.y)}))};w.useEffect(()=>{o()},[]);const i=Object.keys(Mn.types).length;return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-slate-800",children:"🌲 Forest Renderer"}),s.jsxs("p",{className:"text-sm text-slate-500 mt-1",children:["Total Trees: ",s.jsx("strong",{className:"text-slate-900",children:e}),s.jsx("span",{className:"mx-2",children:"|"}),"Tree Objects in Memory: ",s.jsx("strong",{className:"text-green-600",children:i})," (Flyweights)"]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>l(100),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Plant 100"}),s.jsx("button",{onClick:()=>l(1e3),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",children:"Plant 1000"}),s.jsx("button",{onClick:()=>{r.current=[],t(0),o()},className:"px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300",children:"Clear"})]})]}),s.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-inner relative h-[300px]",children:[s.jsx("canvas",{ref:n,width:600,height:300,className:"w-full h-full object-cover"}),s.jsx("div",{className:"absolute bottom-2 right-2 text-xs text-slate-400",children:"*Canvas render simulates game engine"})]})]})},gp=()=>{const[e,t]=w.useState("idle"),n=()=>{e!=="playing"&&e==="idle"&&(t("downloading"),setTimeout(()=>{t("playing")},2e3))},r=()=>{t("idle")};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900",children:[s.jsx("strong",{children:"Why use a Proxy?"})," Imagine a webpage with 10 videos. Loading all 10 heavy video files immediately would crash the browser. A ",s.jsx("strong",{children:"Virtual Proxy"}),' loads a lightweight "Thumbnail" first. The heavy "Real Video" object is only created/downloaded when you actually click play. This saves massive amounts of memory and bandwidth.']}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[s.jsxs("div",{className:"bg-black rounded-xl overflow-hidden shadow-2xl aspect-video relative border-4 border-slate-700",children:[e==="idle"&&s.jsxs("div",{onClick:n,className:"w-full h-full bg-slate-800 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-750 transition-colors group",children:[s.jsx("div",{className:"w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform",children:s.jsx("div",{className:"ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent"})}),s.jsx("div",{className:"font-bold text-white",children:"Watch 4K Video"}),s.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"Filesize: 500MB"})]}),e==="downloading"&&s.jsxs("div",{className:"w-full h-full bg-slate-900 flex flex-col items-center justify-center",children:[s.jsx("div",{className:"w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"}),s.jsx("div",{className:"text-indigo-400 font-mono text-sm",children:"Proxy: Initializing Real Object..."}),s.jsx("div",{className:"text-slate-500 text-xs mt-1",children:"Downloading 500MB..."})]}),e==="playing"&&s.jsxs("div",{className:"w-full h-full bg-slate-900 relative",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-purple-900 via-indigo-900 to-slate-900 animate-[pulse_3s_infinite]"}),s.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("span",{className:"text-4xl",children:"🍿"}),s.jsx("div",{className:"text-white font-bold mt-2 text-shadow",children:"Playing Content"})]})}),s.jsxs("div",{className:"absolute bottom-0 left-0 right-0 h-10 bg-black/50 flex items-center px-4 gap-2",children:[s.jsx("div",{className:"text-white",children:"❚❚"}),s.jsx("div",{className:"h-1 bg-slate-500 flex-1 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-red-500 w-1/3 animate-[loading_10s_linear]"})})]})]})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full flex flex-col justify-center",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-6",children:"Performance Monitor"}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[s.jsx("span",{className:"text-slate-500",children:"Bandwidth Used"}),s.jsx("span",{className:`font-bold ${e==="idle"?"text-green-600":"text-red-600"}`,children:e==="idle"?"50 KB":"500 MB"})]}),s.jsx("div",{className:"h-2 bg-slate-100 rounded-full overflow-hidden",children:s.jsx("div",{className:`h-full transition-all duration-1000 ${e==="idle"?"w-[1%] bg-green-500":"w-full bg-red-500"}`})})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[s.jsx("span",{className:"text-slate-500",children:"Memory Allocation"}),s.jsx("span",{className:`font-bold ${e==="idle"?"text-green-600":"text-red-600"}`,children:e==="idle"?"Low":"High"})]}),s.jsx("div",{className:"h-2 bg-slate-100 rounded-full overflow-hidden",children:s.jsx("div",{className:`h-full transition-all duration-1000 ${e==="idle"?"w-[5%] bg-green-500":"w-[90%] bg-red-500"}`})})]}),s.jsx("div",{className:"p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed",children:e==="idle"?"✅ PROXY ACTIVE: The expensive 'RealVideo' object has NOT been created yet. We are showing a cheap placeholder. No heavy data has been fetched.":"⚠️ REAL OBJECT ACTIVE: The user requested the video. The Proxy has initialized the heavy object and downloaded the data."}),e!=="idle"&&s.jsx("button",{onClick:r,className:"w-full py-2 border border-slate-300 rounded text-slate-500 hover:bg-slate-50 text-sm",children:"Reset Demo"})]})]})]})]})};class Bo{constructor(){this.next=null}setNext(t){return this.next=t,t}}class xp extends Bo{handle(t){return t<=100?"✅ Approved by Team Lead":this.next?this.next.handle(t):"❌ Request too large for everyone."}}class vp extends Bo{handle(t){return t<=1e3?"✅ Approved by Manager":this.next?this.next.handle(t):"❌ Request too large for everyone."}}class yp extends Bo{handle(t){return t<=5e3?"✅ Approved by CEO":"❌ Denied by CEO (Too expensive!)"}}const yd=new xp,bp=new vp,wp=new yp;yd.setNext(bp).setNext(wp);const jp=()=>{const[e,t]=w.useState(50),[n,r]=w.useState(null),[l,o]=w.useState(null),i=()=>{r(null),o(null);const a=[{handler:"Lead",limit:100},{handler:"Manager",limit:1e3},{handler:"CEO",limit:5e3}];let c=0;const d=()=>{if(c>=a.length){r(yd.handle(e));return}o(a[c].handler),e<=a[c].limit?setTimeout(()=>{r(`${a[c].handler} approved it!`)},600):(c++,setTimeout(d,600))};d()};return s.jsxs("div",{className:"flex flex-col gap-8 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-4",children:"💰 Expense Approval System"}),s.jsxs("div",{className:"flex items-center justify-center gap-4",children:[s.jsx("input",{type:"range",min:"10",max:"6000",step:"10",value:e,onChange:a=>t(Number(a.target.value)),className:"w-64 accent-indigo-600"}),s.jsxs("span",{className:"font-mono text-xl font-bold text-indigo-700 w-24",children:["$",e]})]}),s.jsx("button",{onClick:i,className:"mt-4 px-8 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 active:scale-95 transition-all",children:"Submit Request"})]}),s.jsxs("div",{className:"flex justify-between items-center relative py-8 px-4 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden",children:[s.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0"}),["Lead","Manager","CEO"].map(a=>s.jsxs("div",{className:`relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 shadow-sm bg-white transition-all duration-300
             ${l===a?"border-yellow-400 scale-110 ring-4 ring-yellow-100":"border-slate-300"}
             ${n&&n.includes(a)?"border-green-500 bg-green-50":""}
           `,children:[s.jsx("span",{className:"text-2xl",children:a==="Lead"?"🧑‍💻":a==="Manager"?"👔":"🎩"}),s.jsx("span",{className:"text-xs font-bold mt-1 text-slate-600",children:a}),s.jsx("span",{className:"text-[10px] text-slate-400",children:a==="Lead"?"< $100":a==="Manager"?"< $1k":"< $5k"})]},a))]}),n&&s.jsx("div",{className:`p-4 text-center rounded-lg font-bold text-lg animate-[fadeIn_0.5s]
          ${n.includes("Approved")?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}
        `,children:n})]})},Np=()=>{const[e,t]=w.useState(""),[n,r]=w.useState([]),l=d=>{d.execute(),r(g=>[...g,d])},o=()=>{if(n.length===0)return;n[n.length-1].undo(),r(g=>g.slice(0,-1))},i=d=>({label:`Typed "${d}"`,execute:()=>t(g=>g+d),undo:()=>t(g=>g.slice(0,-d.length))}),a=()=>{const d=e;return{label:"Cleared Text",execute:()=>t(""),undo:()=>t(d)}},c=d=>({label:`Added ${d}`,execute:()=>t(g=>g+d),undo:()=>t(g=>g.slice(0,-2))});return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-4 flex items-center gap-2",children:"📝 Text Editor (Invoker)"}),s.jsxs("div",{className:"flex gap-2 mb-4 flex-wrap",children:[s.jsx("button",{onClick:()=>l(i("Hello ")),className:"px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium",children:'Type "Hello "'}),s.jsx("button",{onClick:()=>l(i("World ")),className:"px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium",children:'Type "World "'}),s.jsx("button",{onClick:()=>l(c("👋")),className:"px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium",children:"Add 👋"}),s.jsx("button",{onClick:()=>l(c("🚀")),className:"px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium",children:"Add 🚀"}),s.jsx("button",{onClick:()=>l(a()),className:"px-3 py-2 bg-red-50 border border-red-200 text-red-600 rounded hover:bg-red-100 text-sm font-medium ml-auto",children:"Clear All"})]}),s.jsxs("div",{className:"w-full h-32 p-4 bg-slate-50 border-2 border-slate-300 rounded-lg font-mono text-lg text-slate-800 shadow-inner flex items-start",children:[e,s.jsx("span",{className:"animate-pulse border-r-2 border-slate-800 h-6 ml-1"})]}),s.jsx("div",{className:"mt-4 flex justify-end",children:s.jsxs("button",{onClick:o,disabled:n.length===0,className:"flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:[s.jsx("span",{children:"↩"})," Undo Last Command"]})})]}),s.jsxs("div",{className:"bg-slate-800 p-6 rounded-xl border border-slate-700",children:[s.jsx("h4",{className:"text-slate-400 text-xs font-bold uppercase tracking-widest mb-4",children:"Command History Stack"}),s.jsxs("div",{className:"space-y-2 flex flex-col-reverse",children:[n.map((d,g)=>s.jsxs("div",{className:"bg-slate-700 text-slate-200 p-3 rounded flex justify-between items-center border-l-4 border-indigo-500 animate-[slideIn_0.3s]",children:[s.jsxs("span",{className:"font-mono text-sm",children:[g+1,". ",d.label]}),s.jsx("span",{className:"text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400",children:"Stored Object"})]},g)),n.length===0&&s.jsx("div",{className:"text-slate-500 text-sm italic text-center py-4",children:"History is empty. Perform actions above."})]})]}),s.jsx("style",{children:`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `})]})};class Sp{constructor(t){this.value=t}interpret(){return this.value}}class Cp{constructor(t,n){this.left=t,this.right=n}interpret(t){return this.left.interpret(t)+this.right.interpret(t)}}class kp{constructor(t,n){this.left=t,this.right=n}interpret(t){return this.left.interpret(t)-this.right.interpret(t)}}const Tp=()=>{const[e,t]=w.useState("5 10 +"),[n,r]=w.useState(null),l=()=>{const o=[];e.split(" ").forEach(a=>{if(a==="+"){const c=o.pop(),d=o.pop();o.push(new Cp(d,c))}else if(a==="-"){const c=o.pop(),d=o.pop();o.push(new kp(d,c))}else o.push(new Sp(parseInt(a)))}),o.length===1?r(o[0].interpret({})):r(NaN)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2",children:"RPN Math Interpreter"}),s.jsx("p",{className:"text-sm text-slate-500 mb-4",children:"Enter numbers and operators (+, -) in postfix notation."}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx("input",{type:"text",value:e,onChange:o=>t(o.target.value),className:"flex-1 border border-slate-300 rounded-lg px-4 py-2 font-mono text-lg bg-white text-slate-900 shadow-sm",placeholder:"e.g. 10 5 +"}),s.jsx("button",{onClick:l,className:"bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700",children:"Interpret"})]})]}),s.jsx("div",{className:"bg-slate-900 text-green-400 p-8 rounded-xl font-mono text-3xl text-center shadow-inner",children:n!==null?isNaN(n)?s.jsx("span",{className:"text-red-400",children:"Syntax Error"}):n:s.jsx("span",{className:"opacity-30 text-xl",children:"Waiting..."})}),s.jsxs("div",{className:"bg-amber-50 p-4 rounded text-sm text-amber-800 border border-amber-100",children:[s.jsx("strong",{children:"Example:"}),' "10 5 -" means (10 - 5). "5 5 + 2 -" means (5 + 5 - 2). The Interpreter builds an expression tree object structure to evaluate this string.']})]})},sa=[{title:"Bohemian Rhapsody",artist:"Queen"},{title:"Imagine",artist:"John Lennon"},{title:"Hotel California",artist:"Eagles"},{title:"Billie Jean",artist:"Michael Jackson"}],Ep=()=>{const[e,t]=w.useState(0),n=sa[e],r=e<sa.length-1,l=e>0,o=()=>{r&&t(a=>a+1)},i=()=>{l&&t(a=>a-1)};return s.jsxs("div",{className:"flex flex-col items-center gap-8 w-full",children:[s.jsxs("div",{className:"w-full max-w-sm bg-slate-900 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-indigo-500/30 to-transparent"}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center text-center mt-4",children:[s.jsx("div",{className:"w-40 h-40 bg-slate-800 rounded-lg shadow-lg mb-6 flex items-center justify-center text-4xl border border-slate-700",children:"🎵"}),s.jsx("h3",{className:"text-xl font-bold mb-1",children:n.title}),s.jsx("p",{className:"text-slate-400 text-sm mb-8",children:n.artist}),s.jsxs("div",{className:"flex items-center gap-6 w-full justify-center",children:[s.jsx("button",{onClick:i,disabled:!l,className:"text-2xl hover:text-indigo-400 disabled:opacity-20 disabled:hover:text-white transition-colors",children:"⏮"}),s.jsx("button",{className:"w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-xl shadow-lg hover:scale-105 transition-transform",children:"▶"}),s.jsx("button",{onClick:o,disabled:!r,className:"text-2xl hover:text-indigo-400 disabled:opacity-20 disabled:hover:text-white transition-colors",children:"⏭"})]})]})]}),s.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 text-sm text-slate-600 max-w-md text-center",children:["The UI doesn't know the underlying array structure. It just uses ",s.jsx("code",{children:"next()"})," and ",s.jsx("code",{children:"hasNext()"})," provided by the iterator logic."]})]})},_p=()=>{const[e,t]=w.useState([]),[n,r]=w.useState(!0),[l,o]=w.useState("Flying"),[i,a]=w.useState("Grounded"),c=(x,f,v="info")=>{t(j=>[...j,{id:Date.now()+Math.random(),source:x,message:f,type:v}])},d=()=>{t([]),r(!0),o("Flying"),a("Grounded")},g=(x,f)=>{c(x,`Requesting to ${f}`,"request"),setTimeout(()=>{if(!n){c("Tower",`Negative ${x}. Runway is occupied. Hold position.`,"denial");return}c("Tower",`Permission granted to ${f}, ${x}.`,"approval"),r(!1),setTimeout(()=>{x==="Flight 101"&&f==="land"?(o("Landed"),c(x,"Landed safely. Runway vacated.","info")):x==="Flight 202"&&f==="takeoff"&&(a("Flying"),c(x,"Airborne. Runway vacated.","info")),r(!0),c("Tower","Runway is now clear.","info")},2e3)},800)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900 mb-2 flex justify-between items-center",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Analogy:"})," Pilots (Colleagues) do not talk to each other to decide who lands. They talk to the ATC Tower (Mediator). The Tower enforces the rules (only one plane on runway) and coordinates the actions."]}),s.jsx("button",{onClick:d,className:"px-3 py-1 bg-white border border-indigo-200 text-indigo-700 rounded text-xs font-bold hover:bg-indigo-100 whitespace-nowrap ml-4",children:"↺ Reset Demo"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-end min-h-[300px]",children:[s.jsxs("div",{className:"bg-white p-4 rounded-xl border border-blue-200 shadow-sm flex flex-col items-center gap-4 relative",children:[s.jsx("div",{className:"text-4xl",children:l==="Flying"?"✈️":"🛬"}),s.jsx("div",{className:"font-bold text-slate-700",children:"Flight 101"}),s.jsxs("div",{className:`text-xs px-2 py-1 rounded font-mono ${l==="Flying"?"bg-blue-100 text-blue-700":"bg-slate-100 text-slate-500"}`,children:["Status: ",l]}),l==="Flying"&&s.jsx("button",{onClick:()=>g("Flight 101","land"),disabled:!n,className:"w-full py-2 bg-blue-600 text-white rounded text-xs font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:"Request Landing"})]}),s.jsxs("div",{className:"flex flex-col items-center justify-end h-full",children:[s.jsxs("div",{className:"bg-slate-800 text-white p-6 rounded-t-2xl w-full text-center border-b-4 border-slate-600 relative shadow-2xl z-10",children:[s.jsx("div",{className:"text-5xl mb-2",children:"🗼"}),s.jsx("div",{className:"font-bold text-lg",children:"ATC Tower"}),s.jsx("div",{className:"text-[10px] text-slate-400 uppercase tracking-widest mb-4",children:"Mediator"}),s.jsxs("div",{className:`inline-block px-3 py-1 rounded text-xs font-bold transition-colors
                   ${n?"bg-green-500 text-white":"bg-red-500 text-white animate-pulse"}
                `,children:["RUNWAY: ",n?"CLEAR":"OCCUPIED"]})]}),s.jsx("div",{className:"w-full h-4 bg-slate-400"})]}),s.jsxs("div",{className:"bg-white p-4 rounded-xl border border-orange-200 shadow-sm flex flex-col items-center gap-4 relative",children:[s.jsx("div",{className:"text-4xl",children:i==="Grounded"?"🛫":"✈️"}),s.jsx("div",{className:"font-bold text-slate-700",children:"Flight 202"}),s.jsxs("div",{className:`text-xs px-2 py-1 rounded font-mono ${i==="Flying"?"bg-blue-100 text-blue-700":"bg-slate-100 text-slate-500"}`,children:["Status: ",i]}),i==="Grounded"&&s.jsx("button",{onClick:()=>g("Flight 202","takeoff"),disabled:!n,className:"w-full py-2 bg-orange-600 text-white rounded text-xs font-bold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:"Request Takeoff"})]})]}),s.jsxs("div",{className:"bg-slate-900 rounded-xl p-4 border border-slate-700 h-48 overflow-y-auto custom-scrollbar flex flex-col-reverse",children:[e.length===0&&s.jsx("div",{className:"text-slate-500 text-center text-sm mt-4",children:"Radio silence..."}),e.map(x=>s.jsxs("div",{className:`mb-2 text-xs font-mono p-2 rounded border-l-4 animate-[slideIn_0.2s]
                ${x.source==="Tower"?"bg-slate-800 border-yellow-500 text-yellow-100":"bg-slate-800 border-blue-500 text-blue-100"}
             `,children:[s.jsxs("span",{className:"font-bold opacity-50 mr-2",children:["[",x.source,"]:"]}),s.jsx("span",{className:x.type==="denial"?"text-red-400":x.type==="approval"?"text-green-400":"",children:x.message})]},x.id))]})]})},Rp=()=>{const[e,t]=w.useState(""),[n,r]=w.useState([]),l=()=>{const i={content:e,timestamp:Date.now()};r(a=>[...a,i])},o=i=>{t(i.content)};return s.jsx("div",{className:"flex flex-col gap-6 w-full",children:s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h3",{className:"font-bold text-slate-800",children:"Editor (Originator)"}),s.jsx("button",{onClick:l,className:"text-xs bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 shadow-sm transition-all active:scale-95",children:"Create Snapshot"})]}),s.jsx("textarea",{value:e,onChange:i=>t(i.target.value),placeholder:"Start typing...",className:"flex-1 w-full p-4 border border-slate-300 rounded-xl resize-none focus:ring-2 focus:ring-indigo-500 outline-none shadow-inner bg-white text-slate-900 transition-all focus:border-indigo-500"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"font-bold text-slate-800",children:"History (Caretaker)"}),s.jsxs("div",{className:"flex-1 bg-slate-50 border border-slate-200 rounded-xl overflow-y-auto p-2 custom-scrollbar space-y-2",children:[n.length===0&&s.jsx("div",{className:"text-slate-400 text-sm text-center mt-10",children:"No saved states."}),n.map((i,a)=>s.jsxs("div",{className:"bg-white p-3 rounded shadow-sm border border-slate-200 flex justify-between items-center group animate-[fadeIn_0.3s]",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"text-xs font-bold text-slate-600",children:["Snapshot #",a+1]}),s.jsx("div",{className:"text-[10px] text-slate-400",children:new Date(i.timestamp).toLocaleTimeString()}),s.jsxs("div",{className:"text-xs text-slate-500 truncate w-32 opacity-70 italic",children:['"',i.content,'"']})]}),s.jsx("button",{onClick:()=>o(i),className:"text-xs bg-white border border-slate-300 text-slate-600 px-3 py-1.5 rounded hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-300 transition-all font-medium",children:"Restore"})]},i.timestamp))]})]})]})})},Dp=()=>{const[e,t]=w.useState("stopped"),[n,r]=w.useState(0);w.useEffect(()=>{let c;return e==="playing"&&(c=window.setInterval(()=>{r(d=>d>=100?0:d+1)},50)),()=>clearInterval(c)},[e]);const l=()=>{(e==="stopped"||e==="paused")&&t("playing")},o=()=>{e==="playing"&&t("paused")},i=()=>{(e==="playing"||e==="paused")&&(t("stopped"),r(0))},a=c=>{let d=!1;return c==="play"?d=e==="stopped"||e==="paused":c==="pause"?d=e==="playing":c==="stop"&&(d=e==="playing"||e==="paused"),d?"bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg scale-105 cursor-pointer":"bg-slate-800 text-slate-600 cursor-not-allowed opacity-50"};return s.jsx("div",{className:"flex flex-col items-center gap-8 w-full",children:s.jsxs("div",{className:"bg-slate-900 rounded-2xl p-8 w-full max-w-md shadow-2xl relative overflow-hidden",children:[s.jsxs("div",{className:"flex items-center justify-center h-32 mb-6",children:[e==="stopped"&&s.jsx("div",{className:"text-slate-600 text-6xl",children:"⏹"}),e==="paused"&&s.jsx("div",{className:"text-yellow-500 text-6xl animate-pulse",children:"⏸"}),e==="playing"&&s.jsx("div",{className:"flex gap-1 items-end h-16",children:[1,2,3,4,5].map(c=>s.jsx("div",{className:"w-4 bg-green-500 animate-[bounce_0.5s_infinite]",style:{height:"100%",animationDelay:`${c*.1}s`}},c))})]}),s.jsx("div",{className:"w-full bg-slate-700 h-2 rounded-full mb-8 overflow-hidden",children:s.jsx("div",{className:"h-full bg-indigo-500 transition-all duration-75",style:{width:`${n}%`}})}),s.jsxs("div",{className:"flex justify-center gap-4",children:[s.jsx("button",{onClick:i,disabled:e==="stopped",className:`p-4 rounded-full transition-all duration-300 font-bold ${a("stop")}`,title:"Stop",children:"⏹"}),s.jsx("button",{onClick:l,disabled:e==="playing",className:`p-4 rounded-full transition-all duration-300 font-bold ${a("play")}`,title:"Play",children:"▶"}),s.jsx("button",{onClick:o,disabled:e!=="playing",className:`p-4 rounded-full transition-all duration-300 font-bold ${a("pause")}`,title:"Pause",children:"⏸"})]}),s.jsxs("div",{className:"text-center mt-6 text-slate-500 text-sm font-mono",children:["Current State: ",s.jsx("span",{className:"text-white uppercase font-bold",children:e})]}),s.jsx("div",{className:"text-center mt-2 text-xs text-slate-600",children:"Buttons highlight only if the transition is valid from the current state."})]})})},Pp=()=>{const[e,t]=w.useState("tea"),[n,r]=w.useState([]),[l,o]=w.useState(!1),i=async()=>{o(!0),r([]);const a=c=>r(d=>[...d,c]);a("🔥 Boiling water..."),await new Promise(c=>setTimeout(c,800)),a(e==="tea"?"🍵 Steeping the tea bag...":"☕ Dripping coffee through filter..."),await new Promise(c=>setTimeout(c,800)),a("🍶 Pouring into cup..."),await new Promise(c=>setTimeout(c,800)),a(e==="tea"?"🍋 Adding lemon...":"🥛 Adding sugar and milk..."),await new Promise(c=>setTimeout(c,800)),a("✅ Enjoy your beverage!"),o(!1)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900",children:[s.jsx("strong",{children:"Analogy:"})," Making Tea and Coffee follows the same recipe structure (Boil -> Brew -> Pour -> Condiments). The ",s.jsx("strong",{children:"Template Method"})," defines this flow in a base class, while subclasses provide specific implementations for brewing and condiments."]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-6",children:"🥤 Beverage Machine"}),s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsxs("button",{onClick:()=>t("tea"),disabled:l,className:`flex-1 p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3
                 ${e==="tea"?"border-green-500 bg-green-50 text-green-800 shadow-md":"border-slate-200 text-slate-400 hover:border-green-200"}
               `,children:[s.jsx("span",{className:"text-4xl",children:"🍵"}),s.jsx("span",{className:"font-bold",children:"Tea"})]}),s.jsxs("button",{onClick:()=>t("coffee"),disabled:l,className:`flex-1 p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3
                 ${e==="coffee"?"border-amber-700 bg-amber-50 text-amber-900 shadow-md":"border-slate-200 text-slate-400 hover:border-amber-200"}
               `,children:[s.jsx("span",{className:"text-4xl",children:"☕"}),s.jsx("span",{className:"font-bold",children:"Coffee"})]})]}),s.jsx("button",{onClick:i,disabled:l,className:"w-full bg-slate-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-900 disabled:opacity-50 shadow-lg active:scale-95 transition-all",children:l?"Preparing...":`Prepare ${e==="tea"?"Tea":"Coffee"}`})]}),s.jsxs("div",{className:"bg-slate-900 p-6 rounded-xl shadow-inner font-mono text-sm min-h-[240px] border border-slate-700 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-10 text-6xl pointer-events-none",children:e==="tea"?"🍵":"☕"}),s.jsxs("div",{className:"space-y-3 relative z-10",children:[n.map((a,c)=>s.jsxs("div",{className:"text-green-400 animate-[slideRight_0.3s]",children:[s.jsxs("span",{className:"text-slate-500 mr-3",children:["Step ",c+1,":"]}),a]},c)),n.length===0&&s.jsx("div",{className:"text-slate-600 italic mt-8 text-center",children:"Select a beverage and start..."})]})]}),s.jsx("style",{children:`
         @keyframes slideRight {
           from { opacity: 0; transform: translateX(-10px); }
           to { opacity: 1; transform: translateX(0); }
         }
       `})]})},Ap=()=>{const[e]=w.useState([{id:1,species:"Lion",icon:"🦁"},{id:2,species:"Dolphin",icon:"🐬"},{id:3,species:"Monkey",icon:"🐒"}]),[t,n]=w.useState(null),[r,l]=w.useState([]),o=i=>{n(i),l([]);const a=[];e.forEach(c=>{i==="vet"?(c.species==="Lion"&&a.push("🦁 Lion: Vet checking teeth and claws."),c.species==="Dolphin"&&a.push("🐬 Dolphin: Vet checking fins and blowhole."),c.species==="Monkey"&&a.push("🐒 Monkey: Vet checking temperature.")):(c.species==="Lion"&&a.push("🦁 Lion: Feeder gave steak."),c.species==="Dolphin"&&a.push("🐬 Dolphin: Feeder gave fish."),c.species==="Monkey"&&a.push("🐒 Monkey: Feeder gave banana."))}),l(a)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900",children:[s.jsx("strong",{children:"Analogy:"})," The animals (Lion, Dolphin) don't know how to treat illnesses or feed themselves. A ",s.jsx("strong",{children:"Visitor"}),' (Vet or Feeder) comes to them. The logic for treating/feeding is in the Visitor, not the Animal class. This lets you add new operations (e.g., "Trainer") without changing the Animal classes.']}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-4",children:"🌳 City Zoo (Object Structure)"}),s.jsx("div",{className:"grid grid-cols-1 gap-3",children:e.map(i=>s.jsxs("div",{className:"flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100",children:[s.jsx("div",{className:"text-3xl",children:i.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-slate-700",children:i.species}),s.jsx("div",{className:"text-xs text-slate-400",children:"Concrete Element"})]})]},i.id))})]}),s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("h3",{className:"font-bold text-slate-800",children:"Select a Visitor"}),s.jsxs("button",{onClick:()=>o("vet"),className:`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3
                ${t==="vet"?"bg-red-50 border-red-400 shadow-md":"bg-white border-slate-200 hover:border-red-200"}
              `,children:[s.jsx("div",{className:"text-3xl bg-white p-2 rounded-full shadow-sm border",children:"👨‍⚕️"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-red-900",children:"Veterinarian Visitor"}),s.jsx("div",{className:"text-xs text-red-700",children:"Performs health checks specific to each animal."})]})]}),s.jsxs("button",{onClick:()=>o("feeder"),className:`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3
                ${t==="feeder"?"bg-green-50 border-green-400 shadow-md":"bg-white border-slate-200 hover:border-green-200"}
              `,children:[s.jsx("div",{className:"text-3xl bg-white p-2 rounded-full shadow-sm border",children:"🥕"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-green-900",children:"Zookeeper (Feeder) Visitor"}),s.jsx("div",{className:"text-xs text-green-700",children:"Provides specific food for each animal."})]})]})]})]}),r.length>0&&s.jsxs("div",{className:"bg-slate-900 p-6 rounded-xl shadow-inner border border-slate-700",children:[s.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-widest mb-4",children:t==="vet"?"🏥 Medical Report":"🍽️ Feeding Report"}),s.jsx("div",{className:"space-y-2",children:r.map((i,a)=>s.jsxs("div",{className:"text-white font-mono text-sm animate-[fadeIn_0.3s]",style:{animationDelay:`${a*.1}s`},children:[s.jsx("span",{className:"text-green-500 mr-2",children:"✓"})," ",i]},a))})]})]})},Ip=()=>{const[e,t]=w.useState("messy");return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"flex gap-4 mb-4 justify-center",children:[s.jsx("button",{onClick:()=>t("messy"),className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="messy"?"bg-red-50 border-red-500 text-red-700":"border-slate-200"}`,children:"Messy (God Class)"}),s.jsx("button",{onClick:()=>t("clean"),className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="clean"?"bg-green-50 border-green-500 text-green-700":"border-slate-200"}`,children:"Clean (SRP)"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:`p-6 rounded-xl border-2 transition-all ${e==="messy"?"border-red-400 bg-red-50":"border-slate-200 opacity-50"}`,children:[s.jsx("h4",{className:"font-bold text-lg mb-2",children:"🚫 UserManager (God Class)"}),s.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[s.jsx("div",{className:"bg-white p-2 rounded border border-red-200",children:"authenticateUser()"}),s.jsx("div",{className:"bg-white p-2 rounded border border-red-200",children:"validateEmail()"}),s.jsx("div",{className:"bg-white p-2 rounded border border-red-200",children:"sendWelcomeEmail()"}),s.jsx("div",{className:"bg-white p-2 rounded border border-red-200",children:"logLoginAttempt()"}),s.jsx("div",{className:"bg-white p-2 rounded border border-red-200",children:"renderUserProfileHTML()"})]}),s.jsx("div",{className:"mt-4 text-xs text-red-700 font-bold",children:"⚠️ Logic for Auth, Email, Logging, and UI all mixed!"})]}),s.jsxs("div",{className:`p-6 rounded-xl border-2 transition-all ${e==="clean"?"border-green-400 bg-green-50":"border-slate-200 opacity-50"}`,children:[s.jsx("h4",{className:"font-bold text-lg mb-2",children:"✅ Separated Classes"}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsxs("div",{className:"p-3 bg-white rounded border border-green-200 shadow-sm",children:[s.jsx("div",{className:"font-bold text-xs text-green-800 uppercase",children:"AuthService"}),s.jsx("div",{className:"font-mono text-xs mt-1",children:"authenticateUser()"})]}),s.jsxs("div",{className:"p-3 bg-white rounded border border-green-200 shadow-sm",children:[s.jsx("div",{className:"font-bold text-xs text-green-800 uppercase",children:"EmailSender"}),s.jsx("div",{className:"font-mono text-xs mt-1",children:"sendWelcomeEmail()"})]}),s.jsxs("div",{className:"p-3 bg-white rounded border border-green-200 shadow-sm",children:[s.jsx("div",{className:"font-bold text-xs text-green-800 uppercase",children:"Logger"}),s.jsx("div",{className:"font-mono text-xs mt-1",children:"logActivity()"})]})]})]})]})]})},Lp=()=>{const[e,t]=w.useState("without"),[n,r]=w.useState(["Rectangle","Circle"]),l=()=>{n.includes("Triangle")||r(o=>[...o,"Triangle"])};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-indigo-50 p-4 rounded-xl text-indigo-900 text-sm mb-4",children:[s.jsx("strong",{children:"Scenario:"})," We want to add a ",s.jsx("code",{children:"Triangle"})," to our Area Calculator."]}),s.jsxs("div",{className:"flex gap-4 mb-4 justify-center",children:[s.jsx("button",{onClick:()=>{t("without"),r(["Rectangle","Circle"])},className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="without"?"bg-red-50 border-red-500 text-red-700":"border-slate-200"}`,children:"Without OCP"}),s.jsx("button",{onClick:()=>{t("with"),r(["Rectangle","Circle"])},className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="with"?"bg-green-50 border-green-500 text-green-700":"border-slate-200"}`,children:"With OCP"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h4",{className:"font-bold mb-4",children:"Supported Shapes"}),s.jsx("div",{className:"flex gap-2 flex-wrap mb-6",children:n.map(o=>s.jsx("span",{className:"px-3 py-1 bg-slate-100 rounded-full text-sm border border-slate-300",children:o},o))}),s.jsx("button",{onClick:l,disabled:n.includes("Triangle"),className:"w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50",children:"+ Add Triangle Feature"})]}),s.jsxs("div",{className:`p-6 rounded-xl border-2 transition-all ${e==="without"?"border-red-400 bg-red-50":"border-green-400 bg-green-50"}`,children:[s.jsx("h4",{className:"font-bold mb-2",children:e==="without"?"🚫 AreaCalculator.ts":"✅ AreaCalculator.ts"}),e==="without"?s.jsxs("div",{className:"font-mono text-xs bg-white p-3 rounded border border-red-200 overflow-x-auto",children:[s.jsx("div",{className:"text-slate-400",children:"// We have to MODIFY this class to add Triangle"}),s.jsxs("div",{children:["class AreaCalculator ","{"]}),s.jsxs("div",{className:"pl-4",children:["calculate(shape) ","{"]}),s.jsx("div",{className:"pl-8",children:"if (shape.type == 'Rect') return w * h;"}),s.jsx("div",{className:"pl-8",children:"else if (shape.type == 'Circle') return πr²;"}),n.includes("Triangle")&&s.jsx("div",{className:"pl-8 text-red-600 font-bold bg-red-100 animate-[pulse_1s_infinite]",children:"// MODIFIED HERE!"}),n.includes("Triangle")&&s.jsx("div",{className:"pl-8 text-red-600 font-bold",children:"else if (shape.type == 'Triangle') ..."}),s.jsx("div",{className:"pl-4",children:"}"}),s.jsx("div",{children:"}"})]}):s.jsxs("div",{className:"font-mono text-xs bg-white p-3 rounded border border-green-200 overflow-x-auto",children:[s.jsx("div",{className:"text-slate-400",children:"// This class is CLOSED for modification"}),s.jsxs("div",{children:["class AreaCalculator ","{"]}),s.jsxs("div",{className:"pl-4",children:["calculate(shape: Shape) ","{"]}),s.jsx("div",{className:"pl-8 text-green-700 font-bold",children:"return shape.area();"}),s.jsx("div",{className:"pl-4",children:"}"}),s.jsx("div",{children:"}"}),s.jsx("br",{}),s.jsx("div",{className:"text-slate-400",children:"// We just EXTEND by adding a new file"}),n.includes("Triangle")&&s.jsx("div",{className:"mt-2 text-green-700 font-bold animate-[fadeIn_0.5s]",children:"class Triangle implements Shape..."})]})]})]})]})},Mp=()=>{const[e,t]=w.useState("without"),[n,r]=w.useState(4),[l,o]=w.useState(5),i=n*l;return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"flex gap-4 mb-4 justify-center",children:[s.jsx("button",{onClick:()=>t("without"),className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="without"?"bg-red-50 border-red-500 text-red-700":"border-slate-200"}`,children:"Without LSP"}),s.jsx("button",{onClick:()=>t("with"),className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="with"?"bg-green-50 border-green-500 text-green-700":"border-slate-200"}`,children:"With LSP"})]}),s.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200 mb-4",children:[s.jsxs("p",{className:"text-sm text-slate-600 mb-2",children:[s.jsx("strong",{children:"Test Case:"})," Create shape, set width to ",n,", set height to ",l,"."]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsxs("label",{className:"text-xs font-bold uppercase text-slate-500",children:["Test Width: ",s.jsx("input",{type:"number",value:n,onChange:a=>r(Number(a.target.value)),className:"border rounded p-1 w-12 ml-2 bg-white shadow-sm"})]}),s.jsxs("label",{className:"text-xs font-bold uppercase text-slate-500",children:["Test Height: ",s.jsx("input",{type:"number",value:l,onChange:a=>o(Number(a.target.value)),className:"border rounded p-1 w-12 ml-2 bg-white shadow-sm"})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"p-6 rounded-xl border-2 border-slate-200 bg-slate-50 flex flex-col items-center",children:[s.jsx("h4",{className:"font-bold text-slate-700 mb-2",children:"Object A: Rectangle"}),e==="without"?s.jsx("div",{className:"text-xs font-mono text-slate-500 mb-4",children:"class Rectangle"}):s.jsx("div",{className:"text-xs font-mono text-slate-500 mb-4",children:"class Rectangle implements Shape"}),s.jsx("div",{className:"w-32 h-20 bg-blue-500 flex items-center justify-center text-white font-bold transition-all",style:{width:n*10,height:l*10},children:i}),s.jsxs("div",{className:"mt-2 text-xs text-slate-500",children:["W: ",n,", H: ",l]}),s.jsx("div",{className:"mt-2 text-green-600 font-bold text-sm",children:"✅ Behaved as expected"})]}),s.jsxs("div",{className:`p-6 rounded-xl border-2 flex flex-col items-center transition-all ${e==="without"?"border-red-300 bg-red-50":"border-green-300 bg-green-50"}`,children:[s.jsx("h4",{className:"font-bold text-slate-700 mb-2",children:"Object B: Square"}),e==="without"?s.jsx("div",{className:"text-xs font-mono text-red-600 mb-4",children:"class Square extends Rectangle"}):s.jsx("div",{className:"text-xs font-mono text-green-600 mb-4",children:"class Square implements Shape"}),s.jsx("div",{className:`flex items-center justify-center text-white font-bold transition-all ${e==="without"?"bg-red-500":"bg-green-500"}`,style:{width:e==="without"?l*10:n*10,height:l*10},children:e==="without"?l*l:n*n}),e==="without"?s.jsxs("div",{className:"mt-4 text-center",children:[s.jsx("div",{className:"text-xs text-red-700 font-bold mb-1",children:"❌ Violation!"}),s.jsxs("div",{className:"text-xs text-slate-600 max-w-[200px]",children:["Code set Height=",l,", but Square forced Width to match (",l,"). Area is ",l*l,", expected ",n*l,"."]})]}):s.jsxs("div",{className:"mt-4 text-center",children:[s.jsx("div",{className:"text-xs text-green-700 font-bold mb-1",children:"✅ Correct"}),s.jsx("div",{className:"text-xs text-slate-600 max-w-[200px]",children:'Square is independent. It ignores the "Set Height" meant for rectangles or treats it as "Set Side". No broken inheritance contract.'})]})]})]})]})},Op=()=>{const[e,t]=w.useState("without"),[n,r]=w.useState("modern"),l={modern:["Print","Scan","Fax"],old:["Print"]},o=e==="without"?[{name:"IMachine",methods:["Print","Scan","Fax"]}]:[{name:"IPrinter",methods:["Print"]},{name:"IScanner",methods:["Scan"]},{name:"IFax",methods:["Fax"]}];return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"flex gap-4 mb-4 justify-center",children:[s.jsx("button",{onClick:()=>t("without"),className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="without"?"bg-red-50 border-red-500 text-red-700":"border-slate-200"}`,children:"Without ISP"}),s.jsx("button",{onClick:()=>t("with"),className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="with"?"bg-green-50 border-green-500 text-green-700":"border-slate-200"}`,children:"With ISP"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("h4",{className:"font-bold text-slate-800 mb-4",children:"Interface Definitions"}),s.jsx("div",{className:"space-y-4",children:o.map(i=>s.jsxs("div",{className:"border border-indigo-200 rounded bg-indigo-50 p-3",children:[s.jsxs("div",{className:"font-mono text-xs font-bold text-indigo-700 mb-2",children:["interface ",i.name]}),s.jsx("div",{className:"space-y-1 pl-2",children:i.methods.map(a=>s.jsxs("div",{className:"text-xs text-slate-600 font-mono flex items-center gap-2",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),a,"()"]},a))})]},i.name))})]}),s.jsxs("div",{className:"bg-slate-50 p-6 rounded-xl border border-slate-200",children:[s.jsx("h4",{className:"font-bold text-slate-800 mb-4",children:"Implementation"}),s.jsxs("div",{className:"flex gap-2 mb-6",children:[s.jsx("button",{onClick:()=>r("modern"),className:`flex-1 py-2 text-sm rounded ${n==="modern"?"bg-slate-800 text-white":"bg-white border"}`,children:"Modern Printer"}),s.jsx("button",{onClick:()=>r("old"),className:`flex-1 py-2 text-sm rounded ${n==="old"?"bg-slate-800 text-white":"bg-white border"}`,children:"Old Printer"})]}),s.jsxs("div",{className:"space-y-2",children:[["Print","Scan","Fax"].map(i=>{const a=l[n].includes(i);return e==="with"&&!a?null:s.jsxs("div",{className:`p-3 rounded border flex items-center justify-between
                      ${a?"bg-white border-green-200":"bg-red-50 border-red-200"}
                    `,children:[s.jsxs("span",{className:"text-sm font-mono",children:[i,"()"]}),a?s.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded",children:"Implemented"}):s.jsx("span",{className:"text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-bold",children:e==="without"?"Exception: Not Supported!":""})]},i)}),e==="without"&&n==="old"&&s.jsxs("div",{className:"mt-4 text-xs text-red-600 bg-red-100 p-2 rounded",children:[s.jsx("strong",{children:"Violation:"})," OldPrinter implements IMachine, so it must define Scan() and Fax() even if they just throw errors. Client code might crash calling them."]})]})]})]})]})},Fp=()=>{const[e,t]=w.useState("without"),[n,r]=w.useState(null),l=o=>{if(e==="without"&&o==="mongo"){alert("Compilation Error: UserService class is tightly coupled to PostgresDB. Cannot pass MongoDB instance.");return}r(o)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"flex gap-4 mb-4 justify-center",children:[s.jsx("button",{onClick:()=>{t("without"),r(null)},className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="without"?"bg-red-50 border-red-500 text-red-700":"border-slate-200"}`,children:"Without DIP"}),s.jsx("button",{onClick:()=>{t("with"),r(null)},className:`px-4 py-2 rounded-lg font-bold border-2 ${e==="with"?"bg-green-50 border-green-500 text-green-700":"border-slate-200"}`,children:"With DIP"})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 items-center",children:[s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("h4",{className:"font-bold text-slate-800 text-center",children:"Available Databases"}),s.jsxs("button",{onClick:()=>l("postgres"),className:`p-4 rounded-xl border-2 transition-all flex items-center gap-3 shadow-sm
                 ${n==="postgres"?"border-blue-500 bg-blue-50 ring-2 ring-blue-200":"bg-white border-slate-200 hover:border-blue-300"}
               `,children:[s.jsx("div",{className:"text-3xl",children:"🐘"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-bold text-slate-700",children:"PostgresDB"}),s.jsx("div",{className:"text-xs text-slate-400",children:"SQL Database"})]})]}),s.jsxs("button",{onClick:()=>l("mongo"),className:`p-4 rounded-xl border-2 transition-all flex items-center gap-3 shadow-sm group
                 ${n==="mongo"?"border-green-500 bg-green-50 ring-2 ring-green-200":"bg-white border-slate-200 hover:border-green-300"}
                 ${e==="without"?"opacity-60":""}
               `,children:[s.jsx("div",{className:"text-3xl",children:"🍃"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-bold text-slate-700",children:"MongoDB"}),s.jsx("div",{className:"text-xs text-slate-400",children:"NoSQL Database"})]}),e==="without"&&s.jsx("div",{className:"ml-auto text-xl text-red-500 group-hover:scale-110 transition-transform",title:"Incompatible",children:"🚫"})]})]}),s.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[s.jsx("div",{className:"w-full h-2 rounded-full mb-2 relative overflow-hidden bg-slate-200",children:n&&s.jsx("div",{className:`absolute inset-0 animate-[loading_1s_infinite] 
                    ${n==="postgres"?"bg-blue-400":"bg-green-400"}
                  `})}),s.jsx("div",{className:"text-3xl transform rotate-90 lg:rotate-0",children:e==="with"?"🔌":"🔗"}),s.jsx("div",{className:"text-xs font-mono mt-2 text-slate-400",children:e==="with"?"Injecting via IDatabase":"Direct Instantiation"})]}),s.jsxs("div",{className:"bg-slate-800 p-6 rounded-xl border border-slate-700 text-white shadow-xl relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-0 right-0 p-2 opacity-10 text-6xl",children:"⚙️"}),s.jsx("h4",{className:"font-bold text-lg mb-4 text-white",children:"UserService"}),s.jsx("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded border border-slate-600 mb-4",children:e==="without"?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-pink-400",children:"class"})," UserService ","{",s.jsx("br",{}),"  db: ",s.jsx("span",{className:"text-blue-300",children:"PostgresDB"}),";",s.jsx("br",{}),"  constructor() ","{",s.jsx("br",{}),"    ",s.jsx("span",{className:"text-slate-500",children:"// TIGHT COUPLING!"}),s.jsx("br",{}),"    this.db = ",s.jsx("span",{className:"text-pink-400",children:"new"})," PostgresDB();",s.jsx("br",{}),"  ","}",s.jsx("br",{}),"}"]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-pink-400",children:"class"})," UserService ","{",s.jsx("br",{}),"  db: ",s.jsx("span",{className:"text-yellow-300",children:"IDatabase"}),";",s.jsx("br",{}),"  constructor(db: ",s.jsx("span",{className:"text-yellow-300",children:"IDatabase"}),") ","{",s.jsx("br",{}),"    ",s.jsx("span",{className:"text-slate-500",children:"// LOOSE COUPLING"}),s.jsx("br",{}),"    this.db = db;",s.jsx("br",{}),"  ","}",s.jsx("br",{}),"}"]})}),s.jsx("div",{className:`p-3 rounded text-center text-sm font-bold transition-all
               ${n?"bg-white text-slate-900":"bg-slate-700 text-slate-400"}
            `,children:n?s.jsxs("span",{children:["Fetching Data from ",s.jsx("span",{className:n==="postgres"?"text-blue-600":"text-green-600",children:n==="postgres"?"Postgres":"Mongo"}),"..."]}):"Waiting for DB..."})]})]}),s.jsx("style",{children:`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `})]})},Up=()=>{const[e,t]=w.useState(0),[n,r]=w.useState(null),l=o=>{r("controller"),setTimeout(()=>{o==="increment"&&t(i=>i+1),o==="reset"&&t(0),r("model"),setTimeout(()=>{r("view"),setTimeout(()=>r(null),500)},500)},500)};return s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center",children:[s.jsxs("div",{className:`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
         ${n==="view"?"border-green-500 bg-green-50 scale-105 shadow-lg":"border-slate-200 bg-white"}
       `,children:[s.jsx("div",{className:"text-4xl mb-2",children:"👁️"}),s.jsx("h4",{className:"font-bold",children:"View"}),s.jsx("div",{className:"text-3xl font-bold mt-4 text-slate-800",children:e}),s.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Displays Data"})]}),s.jsxs("div",{className:`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
         ${n==="controller"?"border-blue-500 bg-blue-50 scale-105 shadow-lg":"border-slate-200 bg-white"}
       `,children:[s.jsx("div",{className:"text-4xl mb-2",children:"🎮"}),s.jsx("h4",{className:"font-bold",children:"Controller"}),s.jsxs("div",{className:"flex gap-2 mt-4",children:[s.jsx("button",{onClick:()=>l("increment"),className:"px-3 py-1 bg-slate-800 text-white rounded text-sm hover:bg-slate-700",children:"+1"}),s.jsx("button",{onClick:()=>l("reset"),className:"px-3 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200",children:"Reset"})]}),s.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Handles Input"})]}),s.jsxs("div",{className:`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
         ${n==="model"?"border-purple-500 bg-purple-50 scale-105 shadow-lg":"border-slate-200 bg-white"}
       `,children:[s.jsx("div",{className:"text-4xl mb-2",children:"💾"}),s.jsx("h4",{className:"font-bold",children:"Model"}),s.jsxs("div",{className:"font-mono bg-slate-100 p-2 rounded mt-2 text-xs",children:["data: ","{ value: "+e+" }"]}),s.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Manages Logic"})]})]})},Vp=()=>{const[e,t]=w.useState(20),n=Math.round(e*9/5+32),r=e<15?"text-blue-500":e>30?"text-red-500":"text-green-500",l=e<15?"Freezing":e>30?"Hot":"Pleasant";return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-slate-50 border border-slate-200 p-4 rounded-lg text-sm text-slate-600 mb-2",children:[s.jsx("strong",{children:"Key Difference:"})," In MVVM, multiple Views can bind to the same ViewModel. When the ViewModel state changes, ALL Views update automatically (Data Binding). No controller manually updating each one."]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch",children:[s.jsxs("div",{className:"border-2 border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-100 opacity-70",children:[s.jsx("h4",{className:"font-bold text-slate-600 mb-2",children:"Model (Raw Data)"}),s.jsx("div",{className:"font-mono bg-white p-2 border rounded",children:"{ temp: "+e+" }"})]}),s.jsxs("div",{className:"border-4 border-indigo-500 rounded-xl p-4 flex flex-col items-center justify-center bg-indigo-50 relative",children:[s.jsx("div",{className:"absolute -top-3 bg-indigo-500 text-white px-2 py-0.5 rounded text-xs font-bold",children:"ViewModel"}),s.jsx("p",{className:"text-xs text-center text-indigo-800 mb-2",children:"Exposes bindable properties"}),s.jsxs("ul",{className:"text-sm font-mono text-indigo-900 text-left space-y-1",children:[s.jsxs("li",{children:["temp: ",e]}),s.jsxs("li",{children:["tempF: ",n]}),s.jsxs("li",{children:["color: '",r,"'"]}),s.jsxs("li",{children:["text: '",l,"'"]})]})]}),s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs("div",{className:"bg-white p-4 border-2 border-green-400 rounded-xl shadow-sm relative",children:[s.jsx("div",{className:"absolute -top-3 right-4 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold",children:"View 1: Slider"}),s.jsx("input",{type:"range",min:"0",max:"50",value:e,onChange:o=>t(Number(o.target.value)),className:"w-full accent-green-600"}),s.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"Binds to 'temp' (Two-way)"})]}),s.jsxs("div",{className:"bg-white p-4 border-2 border-green-400 rounded-xl shadow-sm relative text-center",children:[s.jsx("div",{className:"absolute -top-3 right-4 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold",children:"View 2: Gauge"}),s.jsxs("div",{className:`text-3xl font-bold transition-colors ${r}`,children:[e,"°C"]}),s.jsxs("div",{className:"text-sm text-slate-500",children:["(",n,"°F) - ",l]})]})]})]})]})},Bp=()=>{const[e,t]=w.useState(0),n=()=>{e===0&&(t(1),setTimeout(()=>t(2),600),setTimeout(()=>t(3),1200),setTimeout(()=>t(4),2200),setTimeout(()=>t(5),2800),setTimeout(()=>t(0),3400))};return s.jsxs("div",{className:"w-full flex flex-col gap-2",children:[s.jsxs("div",{className:`p-4 rounded-xl border-2 transition-all relative
         ${e===1||e===5?"border-blue-500 bg-blue-50 shadow-lg":"border-slate-200 bg-white"}
       `,children:[s.jsx("div",{className:"font-bold text-slate-800",children:"Presentation Layer (UI)"}),s.jsx("div",{className:"text-xs text-slate-500",children:"Handles user interaction."}),s.jsx("button",{onClick:n,disabled:e!==0,className:"absolute right-4 top-1/2 -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white rounded text-sm disabled:opacity-0 transition-opacity",children:"Send Request"})]}),s.jsx("div",{className:"h-6 flex justify-center",children:s.jsx("div",{className:`w-1 h-full transition-colors ${e===1?"bg-blue-500":e===5?"bg-green-500":"bg-slate-200"}`})}),s.jsxs("div",{className:`p-4 rounded-xl border-2 transition-all
         ${e===2||e===4?"border-purple-500 bg-purple-50 shadow-lg":"border-slate-200 bg-white"}
       `,children:[s.jsx("div",{className:"font-bold text-slate-800",children:"Business Logic Layer"}),s.jsx("div",{className:"text-xs text-slate-500",children:"Validates rules, processes calculations."})]}),s.jsx("div",{className:"h-6 flex justify-center",children:s.jsx("div",{className:`w-1 h-full transition-colors ${e===2?"bg-purple-500":e===4?"bg-green-500":"bg-slate-200"}`})}),s.jsxs("div",{className:`p-4 rounded-xl border-2 transition-all
         ${e===3?"border-green-500 bg-green-50 shadow-lg":"border-slate-200 bg-white"}
       `,children:[s.jsx("div",{className:"font-bold text-slate-800",children:"Data Access Layer"}),s.jsx("div",{className:"text-xs text-slate-500",children:"Communicates with Database/Files."}),e===3&&s.jsx("div",{className:"mt-2 text-xs font-bold text-green-700 animate-pulse",children:"Running SQL Query..."})]})]})},zp=()=>{const[e,t]=w.useState([]),[n,r]=w.useState(null),l=o=>{if(n)return;const i=Math.floor(Math.random()*1e3).toString(),a={id:i,type:o,stage:"producer"};r(a),setTimeout(()=>{r({...a,stage:"transit-to-bus"})},100),setTimeout(()=>{t(c=>[`${o} #${i}`,...c].slice(0,5)),r({...a,stage:"bus"})},800),setTimeout(()=>{r({...a,stage:"transit-to-consumer"})},1300),setTimeout(()=>{r({...a,stage:"consumer"})},2e3),setTimeout(()=>{r(null)},2500)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full relative min-h-[400px]",children:[s.jsxs("div",{className:"grid grid-cols-1 gap-12 items-center relative z-10",children:[s.jsx("div",{className:"flex justify-center",children:s.jsxs("div",{className:"border-2 border-slate-300 rounded-xl p-6 bg-slate-50 text-center w-80 relative z-20",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📢"}),s.jsx("div",{className:"font-bold text-slate-700 mb-4",children:"Producer Service"}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{onClick:()=>l("ORDER_PLACED"),disabled:!!n,className:"bg-indigo-600 text-white px-3 py-1.5 text-xs font-bold rounded shadow hover:bg-indigo-700 disabled:opacity-50",children:"Publish Order"}),s.jsx("button",{onClick:()=>l("USER_SIGNED_UP"),disabled:!!n,className:"bg-pink-600 text-white px-3 py-1.5 text-xs font-bold rounded shadow hover:bg-pink-700 disabled:opacity-50",children:"Publish Signup"})]})]})}),s.jsx("div",{className:"flex justify-center",children:s.jsxs("div",{className:"border-2 border-indigo-200 bg-indigo-50 rounded-xl w-full max-w-lg h-32 flex flex-col items-center relative overflow-hidden shadow-inner z-10",children:[s.jsx("div",{className:"w-full bg-indigo-200 text-indigo-800 text-xs font-bold text-center py-1",children:"EVENT BUS / BROKER"}),s.jsxs("div",{className:"flex-1 w-full p-2 space-y-1 overflow-y-auto flex flex-col items-center",children:[e.map((o,i)=>s.jsx("div",{className:"px-3 py-1 bg-white rounded shadow-sm text-xs font-mono w-64 text-center animate-[slideDown_0.3s_ease-out]",children:o},i)),e.length===0&&s.jsx("span",{className:"text-indigo-300 text-xs italic mt-4",children:"No events in queue"})]})]})}),s.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[s.jsxs("div",{className:`border-2 rounded-xl p-4 text-center transition-all duration-300 ${(n==null?void 0:n.stage)==="consumer"&&n.type==="ORDER_PLACED"?"border-green-500 bg-green-50 scale-105":"border-slate-200"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"📦"}),s.jsx("div",{className:"text-xs font-bold",children:"Inventory Service"}),s.jsx("div",{className:"text-[10px] text-slate-500",children:"Handles Orders"})]}),s.jsxs("div",{className:`border-2 rounded-xl p-4 text-center transition-all duration-300 ${(n==null?void 0:n.stage)==="consumer"&&n.type==="USER_SIGNED_UP"?"border-pink-500 bg-pink-50 scale-105":"border-slate-200"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"📧"}),s.jsx("div",{className:"text-xs font-bold",children:"Email Service"}),s.jsx("div",{className:"text-[10px] text-slate-500",children:"Handles Signups"})]}),s.jsxs("div",{className:`border-2 rounded-xl p-4 text-center transition-all duration-300 ${(n==null?void 0:n.stage)==="consumer"?"border-blue-500 bg-blue-50 scale-105":"border-slate-200"}`,children:[s.jsx("div",{className:"text-2xl mb-1",children:"📊"}),s.jsx("div",{className:"text-xs font-bold",children:"Analytics Service"}),s.jsx("div",{className:"text-[10px] text-slate-500",children:"Logs Everything"})]})]})]}),n&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`absolute w-4 h-4 rounded-full shadow-lg z-50 transition-all duration-[700ms] ease-in-out
               ${n.type==="ORDER_PLACED"?"bg-indigo-600":"bg-pink-600"}
               ${n.stage==="producer"?"opacity-100 top-[15%] left-[50%]":""}
               ${n.stage==="transit-to-bus"?"top-[40%] left-[50%]":""}
               ${n.stage==="bus"?"opacity-0 top-[40%] left-[50%]":""}
               
               ${n.stage==="transit-to-consumer"?n.type==="ORDER_PLACED"?"top-[85%] left-[16%]":"top-[85%] left-[50%]":""}
               ${n.stage==="consumer"?"opacity-0 top-[85%] left-[50%]":""}
             `,style:n.stage==="transit-to-consumer"?{}:{transform:"translate(-50%, -50%)"}}),(n.stage==="transit-to-consumer"||n.stage==="consumer")&&s.jsx("div",{className:`absolute w-4 h-4 rounded-full shadow-lg z-50 transition-all duration-[700ms] ease-in-out
                ${n.type==="ORDER_PLACED"?"bg-indigo-400":"bg-pink-400"}
                
                ${n.stage==="transit-to-consumer"?"top-[85%] left-[84%] opacity-100":"top-[40%] left-[50%] opacity-0"}
                ${n.stage==="consumer"?"opacity-0 top-[85%] left-[84%]":""}
              `,style:{animation:"splitToAnalytics 0.7s forwards"}})]}),s.jsx("style",{children:`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splitToAnalytics {
          0% { top: 40%; left: 50%; opacity: 1; }
          100% { top: 85%; left: 84%; opacity: 1; }
        }
       `})]})},la=()=>{const[e,t]=w.useState("monolith"),[n,r]=w.useState({auth:!0,pay:!0,product:!0}),l=i=>{r(a=>({...a,[i]:!a[i]}))},o=e==="monolith"&&(!n.auth||!n.pay||!n.product);return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"flex justify-center gap-4 mb-4",children:[s.jsx("button",{onClick:()=>t("monolith"),className:`px-4 py-2 rounded font-bold ${e==="monolith"?"bg-slate-800 text-white":"bg-slate-200"}`,children:"Monolith"}),s.jsx("button",{onClick:()=>t("micro"),className:`px-4 py-2 rounded font-bold ${e==="micro"?"bg-indigo-600 text-white":"bg-slate-200"}`,children:"Microservices"})]}),s.jsx("div",{className:"min-h-[250px] bg-slate-50 border border-slate-200 rounded-xl p-8 flex items-center justify-center",children:e==="monolith"?s.jsxs("div",{className:`p-8 rounded-2xl border-4 transition-all duration-500 text-center
             ${o?"bg-red-100 border-red-500":"bg-white border-slate-400"}
           `,children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏢"}),s.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Monolith App"}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{onClick:()=>l("auth"),className:`px-2 py-1 rounded text-xs ${n.auth?"bg-green-200 text-green-800":"bg-red-500 text-white"}`,children:"Auth"}),s.jsx("button",{onClick:()=>l("pay"),className:`px-2 py-1 rounded text-xs ${n.pay?"bg-green-200 text-green-800":"bg-red-500 text-white"}`,children:"Payments"}),s.jsx("button",{onClick:()=>l("product"),className:`px-2 py-1 rounded text-xs ${n.product?"bg-green-200 text-green-800":"bg-red-500 text-white"}`,children:"Products"})]}),s.jsx("div",{className:`mt-4 font-bold ${o?"text-red-600":"text-green-600"}`,children:o?"SYSTEM CRASHED! (One bug kills all)":"System Operational"})]}):s.jsxs("div",{className:"flex flex-wrap gap-8 justify-center",children:[[{id:"auth",icon:"🔐",label:"Auth Service"},{id:"pay",icon:"💳",label:"Payment Service"},{id:"product",icon:"📦",label:"Product Service"}].map(i=>s.jsxs("div",{className:`p-4 w-32 rounded-xl border-2 transition-all duration-300 text-center
                  ${n[i.id]?"bg-white border-green-400 shadow-md":"bg-red-50 border-red-400 opacity-70"}
                `,children:[s.jsx("div",{className:"text-4xl mb-2",children:i.icon}),s.jsx("div",{className:"font-bold text-xs mb-2",children:i.label}),s.jsx("button",{onClick:()=>l(i.id),className:`w-full py-1 rounded text-[10px] font-bold ${n[i.id]?"bg-green-100 text-green-700":"bg-red-500 text-white"}`,children:n[i.id]?"Online":"CRASHED"})]},i.id)),s.jsx("div",{className:"w-full text-center text-slate-500 text-sm mt-4",children:"If one service crashes, the others stay online!"})]})})]})},$p=()=>{const[e,t]=w.useState("idle"),[n,r]=w.useState([]),l=()=>{e==="idle"&&(t("requesting"),r(o=>[...o,"REQ: GET /api/data"]),setTimeout(()=>{t("processing"),setTimeout(()=>{t("responding"),r(o=>[...o,"RES: 200 OK { data: ... }"]),setTimeout(()=>t("idle"),800)},1e3)},800))};return s.jsxs("div",{className:"flex flex-col gap-8 w-full",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 md:px-12 py-8 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden",children:[s.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[s.jsx("div",{className:"w-24 h-20 bg-white border-2 border-slate-300 rounded-lg flex items-center justify-center shadow-md",children:s.jsx("span",{className:"text-4xl",children:"💻"})}),s.jsx("span",{className:"font-bold text-slate-700 mt-2",children:"Client"}),s.jsx("button",{onClick:l,disabled:e!=="idle",className:"mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50",children:"Send Request"})]}),s.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[s.jsxs("div",{className:`w-24 h-24 bg-slate-800 border-4 border-slate-600 rounded-lg flex flex-col items-center justify-center shadow-xl transition-all
               ${e==="processing"?"scale-105 shadow-blue-500/50":""}
             `,children:[s.jsx("span",{className:"text-4xl",children:"🗄️"}),e==="processing"&&s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"})]}),s.jsx("span",{className:"font-bold text-slate-700 mt-2",children:"Server"})]}),(e==="requesting"||e==="responding")&&s.jsx("div",{className:`absolute top-1/2 w-8 h-6 bg-yellow-400 rounded border border-yellow-600 flex items-center justify-center text-[10px] font-bold shadow-md z-20
              ${e==="requesting"?"animate-[moveRight_0.8s_linear]":"animate-[moveLeft_0.8s_linear]"}
            `,children:e==="requesting"?"REQ":"RES"}),s.jsx("div",{className:"absolute top-[40%] left-20 right-20 h-1 bg-slate-200 -z-0"})]}),s.jsxs("div",{className:"bg-slate-900 text-green-400 p-4 rounded-xl font-mono text-xs h-32 overflow-y-auto",children:[n.map((o,i)=>s.jsx("div",{children:o},i)),n.length===0&&s.jsx("span",{className:"opacity-50",children:"Console idle..."})]}),s.jsx("style",{children:`
         @keyframes moveRight { from { left: 20%; } to { left: 80%; } }
         @keyframes moveLeft { from { left: 80%; } to { left: 20%; } }
       `})]})},Hp=()=>{const[e,t]=w.useState([]),[n,r]=w.useState(0),l=()=>{const o=Date.now();t(i=>[...i,o]),setTimeout(()=>{r(i=>i+2e-4),t(i=>i.filter(a=>a!==o))},2e3)};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-slate-800",children:"Cloud Provider (AWS Lambda / Azure Functions)"}),s.jsx("p",{className:"text-xs text-slate-500",children:"Functions spin up on demand and vanish when done."})]}),s.jsxs("div",{className:"text-right",children:[s.jsx("div",{className:"text-xs font-bold text-slate-400 uppercase",children:"Total Bill"}),s.jsxs("div",{className:"text-2xl font-mono text-green-600",children:["$",n.toFixed(5)]})]})]}),s.jsxs("div",{className:"bg-slate-50 min-h-[250px] rounded-xl border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center relative",children:[e.length===0&&s.jsx("div",{className:"text-slate-400 text-sm mb-4",children:"No active servers. Paying $0."}),s.jsx("div",{className:"flex flex-wrap gap-4 justify-center",children:e.map(o=>s.jsxs("div",{className:"w-24 h-24 bg-orange-50 border-2 border-orange-400 rounded-xl flex flex-col items-center justify-center animate-[pop_0.3s_ease-out] shadow-md",children:[s.jsx("span",{className:"text-3xl animate-spin",children:"⚙️"}),s.jsx("span",{className:"text-[10px] font-bold text-orange-800 mt-2",children:"Processing..."})]},o))}),s.jsx("button",{onClick:l,className:"absolute bottom-6 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 active:scale-95 transition-all",children:"Trigger Event ⚡"})]})]})},Wp=()=>{const[e,t]=w.useState([{name:"Order Service",status:"pending"},{name:"Inventory Service",status:"pending"},{name:"Payment Service",status:"pending"}]),[n,r]=w.useState(!1),l=()=>{t([{name:"Order Service",status:"pending"},{name:"Inventory Service",status:"pending"},{name:"Payment Service",status:"pending"}])},o=(a,c)=>{t(d=>d.map((g,x)=>x===a?{...g,status:c}:g))},i=async a=>{n||(r(!0),l(),await new Promise(c=>setTimeout(c,600)),o(0,"success"),await new Promise(c=>setTimeout(c,600)),o(1,"success"),await new Promise(c=>setTimeout(c,600)),a?(o(2,"failed"),await new Promise(c=>setTimeout(c,800)),o(1,"compensating"),await new Promise(c=>setTimeout(c,600)),o(1,"compensated"),await new Promise(c=>setTimeout(c,600)),o(0,"compensating"),await new Promise(c=>setTimeout(c,600)),o(0,"compensated")):o(2,"success"),r(!1))};return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"flex justify-center gap-4",children:[s.jsx("button",{onClick:()=>i(!1),disabled:n,className:"bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 disabled:opacity-50",children:"Book Trip (Success)"}),s.jsx("button",{onClick:()=>i(!0),disabled:n,className:"bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 disabled:opacity-50",children:"Book Trip (Payment Fail)"})]}),s.jsxs("div",{className:"flex justify-between items-center relative px-8 py-12 bg-slate-50 border border-slate-200 rounded-xl",children:[s.jsx("div",{className:"absolute top-1/2 left-12 right-12 h-1 bg-slate-200 -z-0"}),e.map((a,c)=>s.jsxs("div",{className:`relative z-10 w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center bg-white shadow-sm transition-all duration-500
                ${a.status==="pending"?"border-slate-300":""}
                ${a.status==="success"?"border-green-500 bg-green-50 scale-110":""}
                ${a.status==="failed"?"border-red-500 bg-red-50":""}
                ${a.status==="compensating"?"border-yellow-400 bg-yellow-50 animate-pulse":""}
                ${a.status==="compensated"?"border-orange-500 bg-orange-100 opacity-60":""}
             `,children:[s.jsx("div",{className:"text-2xl mb-1",children:c===0?"📝":c===1?"📦":"💳"}),s.jsx("div",{className:"text-[10px] font-bold text-center leading-tight",children:a.name}),s.jsx("div",{className:`text-[10px] font-bold uppercase mt-1
                   ${a.status==="success"?"text-green-600":""}
                   ${a.status==="failed"?"text-red-600":""}
                   ${a.status==="compensated"?"text-orange-600":""}
                `,children:a.status})]},c))]}),s.jsx("div",{className:"text-center text-sm text-slate-500",children:e[2].status==="failed"?"Payment Failed! Rolling back transactions...":"Process Flow"})]})},Gp=()=>{const[e,t]=w.useState("sales");return s.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center",children:[s.jsx("h3",{className:"font-bold text-slate-800 mb-2",children:"Bounded Contexts"}),s.jsx("p",{className:"text-sm text-slate-500 max-w-lg mx-auto mb-6",children:`In DDD, the same entity (e.g., "Product") means different things in different contexts. We don't create one giant "God Class" for Product.`}),s.jsxs("div",{className:"flex justify-center gap-0 border rounded-lg overflow-hidden w-fit mx-auto",children:[s.jsx("button",{onClick:()=>t("sales"),className:`px-6 py-2 font-bold transition-all ${e==="sales"?"bg-indigo-600 text-white":"bg-slate-100 hover:bg-slate-200"}`,children:"Sales Context"}),s.jsx("button",{onClick:()=>t("shipping"),className:`px-6 py-2 font-bold transition-all ${e==="shipping"?"bg-orange-600 text-white":"bg-slate-100 hover:bg-slate-200"}`,children:"Shipping Context"})]})]}),s.jsxs("div",{className:`p-8 rounded-xl border-4 transition-all duration-500 flex flex-col items-center min-h-[300px] justify-center relative overflow-hidden
          ${e==="sales"?"border-indigo-200 bg-indigo-50":"border-orange-200 bg-orange-50"}
       `,children:[s.jsxs("div",{className:"absolute top-0 left-0 bg-white/50 p-2 text-xs font-bold uppercase tracking-widest rounded-br-lg",children:[e," Domain"]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-lg w-64 border border-slate-200 relative z-10",children:[s.jsxs("div",{className:"text-center border-b pb-2 mb-4",children:[s.jsx("div",{className:"text-xs text-slate-400 uppercase",children:"Entity"}),s.jsx("div",{className:"text-xl font-bold text-slate-800",children:"Product (ID: 101)"})]}),s.jsx("div",{className:"space-y-3",children:e==="sales"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-slate-500",children:"Name:"}),s.jsx("span",{className:"font-bold",children:"iPhone 15"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-slate-500",children:"Price:"}),s.jsx("span",{className:"font-bold text-green-600",children:"$999.00"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-slate-500",children:"Discount:"}),s.jsx("span",{className:"font-bold text-indigo-600",children:"Active"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-slate-500",children:"Weight:"}),s.jsx("span",{className:"font-bold",children:"171g"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-slate-500",children:"Dimensions:"}),s.jsx("span",{className:"font-bold",children:"147 x 71 x 7 mm"})]}),s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-slate-500",children:"Shipping Class:"}),s.jsx("span",{className:"font-bold text-orange-600",children:"Fragile"})]})]})})]}),s.jsx("div",{className:"mt-8 text-center text-slate-500 text-sm max-w-md",children:e==="sales"?"Sales cares about pricing, descriptions, and marketing rules. It doesn't care about box dimensions.":"Shipping cares about weight, dimensions, and handling. It doesn't care about the price or marketing."})]})]})},Yp=({title:e})=>s.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 p-8 text-center",children:[s.jsx("div",{className:"text-5xl mb-4 opacity-50",children:"🚧"}),s.jsx("h3",{className:"text-lg font-semibold text-slate-600 mb-2",children:"Simulation Under Construction"}),s.jsxs("p",{className:"max-w-md",children:["The interactive demo for ",s.jsx("strong",{children:e})," is currently being built. You can still learn the concepts and key takeaways above!"]})]}),et={_a:"U2hpdmFtIFNpbmdoYWw=",_l:"aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoaXZhbS1zaW5naGFsLTY1YWI2OTExOS8=",d:e=>{try{return atob(e)}catch{return"Unknown"}}},qp=()=>{const[e,t]=w.useState(null),[n,r]=w.useState(null);w.useEffect(()=>{const a=et.d(et._a),c=et.d(et._l);console.log(`%c Crafted by ${a} `,"background: #0f172a; color: #818cf8; font-size: 14px; padding: 4px; border-radius: 4px; font-weight: bold;"),console.log(`%c Connect: ${c} `,"background: #fff; color: #0f172a; font-size: 12px; padding: 2px; border-radius: 2px;")},[]);const l=()=>e===De.DESIGN_PATTERNS?[{category:R.CREATIONAL,items:[{name:"Factory Method",id:m.FACTORY},{name:"Abstract Factory",id:m.ABSTRACT_FACTORY},{name:"Builder",id:m.BUILDER},{name:"Prototype",id:m.PROTOTYPE},{name:"Singleton",id:m.SINGLETON}]},{category:R.STRUCTURAL,items:[{name:"Adapter",id:m.ADAPTER},{name:"Bridge",id:m.BRIDGE},{name:"Composite",id:m.COMPOSITE},{name:"Decorator",id:m.DECORATOR},{name:"Facade",id:m.FACADE},{name:"Flyweight",id:m.FLYWEIGHT},{name:"Proxy",id:m.PROXY}]},{category:R.BEHAVIORAL,items:[{name:"Chain of Responsibility",id:m.CHAIN_OF_RESPONSIBILITY},{name:"Command",id:m.COMMAND},{name:"Interpreter",id:m.INTERPRETER},{name:"Iterator",id:m.ITERATOR},{name:"Mediator",id:m.MEDIATOR},{name:"Memento",id:m.MEMENTO},{name:"Observer",id:m.OBSERVER},{name:"State",id:m.STATE},{name:"Strategy",id:m.STRATEGY},{name:"Template Method",id:m.TEMPLATE_METHOD},{name:"Visitor",id:m.VISITOR}]}]:e===De.SOLID?[{category:R.SOLID_PRINCIPLES,items:[{name:"Single Responsibility",id:m.SRP},{name:"Open/Closed",id:m.OCP},{name:"Liskov Substitution",id:m.LSP},{name:"Interface Segregation",id:m.ISP},{name:"Dependency Inversion",id:m.DIP}]}]:e===De.ARCHITECTURE?[{category:R.ARCHITECTURE_STYLES,items:[{name:"MVC",id:m.MVC},{name:"MVVM",id:m.MVVM},{name:"Monolith",id:m.MONOLITH},{name:"Microservices",id:m.MICROSERVICES},{name:"Layered (N-Tier)",id:m.LAYERED},{name:"Event-Driven",id:m.EVENT_DRIVEN},{name:"Domain-Driven Design",id:m.DDD},{name:"Saga Pattern",id:m.SAGA},{name:"Serverless",id:m.SERVERLESS},{name:"Client-Server",id:m.CLIENT_SERVER}]}]:[],o=()=>{var a;switch(n){case m.FACTORY:return s.jsx(Jf,{});case m.ABSTRACT_FACTORY:return s.jsx(ep,{});case m.BUILDER:return s.jsx(tp,{});case m.PROTOTYPE:return s.jsx(np,{});case m.SINGLETON:return s.jsx(rp,{});case m.ADAPTER:return s.jsx(sp,{});case m.BRIDGE:return s.jsx(lp,{});case m.COMPOSITE:return s.jsx(ip,{});case m.DECORATOR:return s.jsx(fp,{});case m.FACADE:return s.jsx(pp,{});case m.FLYWEIGHT:return s.jsx(mp,{});case m.PROXY:return s.jsx(gp,{});case m.OBSERVER:return s.jsx(Xf,{});case m.STRATEGY:return s.jsx(Zf,{});case m.CHAIN_OF_RESPONSIBILITY:return s.jsx(jp,{});case m.COMMAND:return s.jsx(Np,{});case m.INTERPRETER:return s.jsx(Tp,{});case m.ITERATOR:return s.jsx(Ep,{});case m.MEDIATOR:return s.jsx(_p,{});case m.MEMENTO:return s.jsx(Rp,{});case m.STATE:return s.jsx(Dp,{});case m.TEMPLATE_METHOD:return s.jsx(Pp,{});case m.VISITOR:return s.jsx(Ap,{});case m.SRP:return s.jsx(Ip,{});case m.OCP:return s.jsx(Lp,{});case m.LSP:return s.jsx(Mp,{});case m.ISP:return s.jsx(Op,{});case m.DIP:return s.jsx(Fp,{});case m.MVC:return s.jsx(Up,{});case m.MVVM:return s.jsx(Vp,{});case m.MONOLITH:return s.jsx(la,{});case m.MICROSERVICES:return s.jsx(la,{});case m.LAYERED:return s.jsx(Bp,{});case m.EVENT_DRIVEN:return s.jsx(zp,{});case m.CLIENT_SERVER:return s.jsx($p,{});case m.SERVERLESS:return s.jsx(Hp,{});case m.SAGA:return s.jsx(Wp,{});case m.DDD:return s.jsx(Gp,{});default:return s.jsx(Yp,{title:((a=Ji[n])==null?void 0:a.title)||"this pattern"})}},i=n?Ji[n]:null;return s.jsxs("div",{className:"flex h-screen bg-slate-50 text-slate-900 font-sans",children:[e&&s.jsxs("aside",{className:"w-20 lg:w-72 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0 transition-all z-20 shadow-2xl",children:[s.jsxs("div",{className:"p-6 font-bold text-white text-xl tracking-tight flex flex-col gap-1 border-b border-slate-800 bg-slate-900 cursor-pointer",onClick:()=>{t(null),r(null)},children:[s.jsx("span",{className:"text-xs text-indigo-400 uppercase tracking-wider font-semibold hover:text-indigo-300 transition-colors",children:"← Back to Home"}),s.jsx("span",{className:"truncate text-lg lg:text-xl leading-tight mt-2",children:i?i.title:e===De.DESIGN_PATTERNS?"Design Patterns":e===De.SOLID?"SOLID Principles":"Architecture"})]}),s.jsx("nav",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-6 custom-scrollbar",children:s.jsx("div",{children:s.jsx("div",{className:"space-y-6",children:l().map(a=>s.jsxs("div",{children:[s.jsx("h4",{className:"px-2 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2 opacity-80",children:a.category}),s.jsx("div",{className:"space-y-1",children:a.items.map(c=>{const d=n===c.id;return s.jsx("button",{onClick:()=>{c.id&&r(c.id)},className:`w-full text-left px-3 py-2 rounded-md transition-all text-sm
                              ${d?"bg-slate-800 text-white font-medium border-l-2 border-indigo-500":"text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"}
                            `,children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("span",{children:c.name})})},c.name)})})]},a.category))})})}),s.jsx("div",{className:"p-4 border-t border-slate-800 text-[10px] text-slate-600 flex justify-center",children:s.jsxs("a",{href:et.d(et._l),target:"_blank",rel:"noopener noreferrer",className:"hover:text-indigo-400 transition-colors cursor-pointer",children:["Crafted by ",et.d(et._a)]})})]}),s.jsxs("main",{className:"flex-1 flex flex-col min-w-0 overflow-hidden relative bg-slate-50",children:[!e&&s.jsx("div",{className:"flex-1 overflow-y-auto p-6 lg:p-12 flex flex-col items-center justify-center",children:s.jsxs("div",{className:"max-w-5xl w-full",children:[s.jsxs("header",{className:"text-center mb-16",children:[s.jsxs("h1",{className:"text-4xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight",children:["Let's Upskill",s.jsx("span",{className:"block text-2xl lg:text-3xl font-normal text-indigo-600 mt-4 tracking-normal font-mono",children:"Master Software Engineering. Interactively."})]}),s.jsx("p",{className:"text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed",children:"Select a module to begin your journey."})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[s.jsxs("button",{onClick:()=>{t(De.DESIGN_PATTERNS),r(m.FACTORY)},className:"group bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-indigo-500 transition-all text-left relative overflow-hidden h-80 flex flex-col justify-end",children:[s.jsx("div",{className:"absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity",children:s.jsx("span",{className:"text-9xl font-black",children:"DP"})}),s.jsx("div",{className:"text-5xl mb-6",children:"🧩"}),s.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors",children:"Design Patterns"}),s.jsx("p",{className:"text-slate-500 text-sm leading-relaxed",children:"Gang of Four patterns. Reusable solutions to common software problems."})]}),s.jsxs("button",{onClick:()=>{t(De.SOLID),r(m.SRP)},className:"group bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-green-500 transition-all text-left relative overflow-hidden h-80 flex flex-col justify-end",children:[s.jsx("div",{className:"absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity",children:s.jsx("span",{className:"text-9xl font-black",children:"S"})}),s.jsx("div",{className:"text-5xl mb-6",children:"💎"}),s.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors",children:"SOLID Principles"}),s.jsx("p",{className:"text-slate-500 text-sm leading-relaxed",children:"Five essential principles for writing clean, maintainable, and scalable object-oriented code."})]}),s.jsxs("button",{onClick:()=>{t(De.ARCHITECTURE),r(m.MVC)},className:"group bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all text-left relative overflow-hidden h-80 flex flex-col justify-end",children:[s.jsx("div",{className:"absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity",children:s.jsx("span",{className:"text-9xl font-black",children:"AR"})}),s.jsx("div",{className:"text-5xl mb-6",children:"🏛️"}),s.jsx("h2",{className:"text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors",children:"Software Architecture"}),s.jsx("p",{className:"text-slate-500 text-sm leading-relaxed",children:"High-level structures. MVC, MVVM, Microservices, and more."})]})]})]})}),e&&s.jsx("div",{className:"flex-1 overflow-y-auto custom-scrollbar scroll-smooth",children:s.jsxs("div",{className:"max-w-6xl mx-auto p-6 lg:p-12 space-y-16",children:[!n&&s.jsxs("div",{className:"flex flex-col items-center justify-center h-full pt-20",children:[s.jsx("div",{className:"text-6xl mb-6",children:e===De.DESIGN_PATTERNS?"🧩":e===De.SOLID?"💎":"🏛️"}),s.jsx("h2",{className:"text-4xl font-bold text-slate-900 mb-4 text-center capitalize",children:e.replace("_"," ")}),s.jsx("p",{className:"text-xl text-slate-500 text-center max-w-xl",children:"Select a topic from the sidebar to view its concept, explanation, and interactive demo."})]}),n&&i&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"flex items-center gap-3",children:s.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 border border-indigo-200",children:i.category})}),s.jsx("h1",{className:"text-4xl lg:text-5xl font-black text-slate-900 tracking-tight",children:i.title})]}),s.jsx("section",{children:s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:s.jsxs("div",{className:"lg:col-span-8",children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[s.jsx("span",{children:"💡"})," Core Concept"]}),s.jsx("div",{className:"prose prose-lg text-slate-600 leading-relaxed max-w-none",children:s.jsx("p",{children:i.concept})}),s.jsxs("div",{className:"mt-8",children:[s.jsx("h3",{className:"text-lg font-bold text-slate-900 mb-4",children:"Why use it?"}),s.jsx("div",{className:"grid gap-3",children:i.whyUseIt.map((a,c)=>s.jsxs("div",{className:"flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-200 shadow-sm",children:[s.jsx("div",{className:"w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mt-0.5 flex-shrink-0",children:"✓"}),s.jsx("span",{className:"text-slate-700 text-sm font-medium",children:a})]},c))})]})]})})}),i.analogy&&s.jsxs("section",{children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[s.jsx("span",{children:"📖"})," Real World Analogy"]}),s.jsx("div",{className:"bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl text-slate-700 leading-relaxed text-lg shadow-sm",children:i.analogy})]}),i.useCase&&s.jsxs("section",{children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[s.jsx("span",{children:"🌍"})," Real World Use Case"]}),s.jsx("div",{className:"bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl text-slate-700 leading-relaxed text-lg shadow-sm",children:i.useCase})]}),s.jsxs("section",{className:"bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden ring-1 ring-slate-100",children:[s.jsxs("div",{className:"bg-slate-50 border-b border-slate-200 px-6 py-4 flex justify-between items-center",children:[s.jsxs("h2",{className:"text-lg font-bold text-slate-800 flex items-center gap-2",children:[s.jsx("span",{children:"🎮"})," Interactive Demo"]}),s.jsx("span",{className:"text-xs font-medium text-slate-400 uppercase tracking-wide",children:"Live Simulation"})]}),s.jsx("div",{className:"p-6 lg:p-8",children:o()})]}),i.technicalDefinition&&s.jsxs("section",{children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[s.jsx("span",{children:"🎓"})," Technical Definition"]}),s.jsxs("div",{className:"bg-slate-100 border-l-4 border-indigo-500 p-6 rounded-r-xl italic text-slate-700 leading-relaxed font-serif text-lg",children:['"',i.technicalDefinition,'"']})]}),i.code&&s.jsxs("section",{children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[s.jsx("span",{children:"💻"})," Code Implementation"]}),s.jsx(Kf,{code:i.code})]}),s.jsxs("section",{children:[s.jsxs("h2",{className:"text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2",children:[s.jsx("span",{children:"🔑"})," Key Takeaways"]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.takeaways.map((a,c)=>s.jsxs("div",{className:"flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm",children:[s.jsx("div",{className:"w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-indigo-200",children:c+1}),s.jsx("span",{className:"text-slate-700 font-medium pt-1",children:a})]},c))})]}),s.jsx("div",{className:"h-20"})," "]})]})})]}),s.jsx("style",{children:`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `})]})},bd=document.getElementById("root");if(!bd)throw new Error("Could not find root element to mount to");const Qp=Zs.createRoot(bd);Qp.render(s.jsx(Xs.StrictMode,{children:s.jsx(qp,{})}));
