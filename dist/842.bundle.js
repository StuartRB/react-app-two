/*! For license information please see 842.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_two=self.webpackChunkreact_two||[]).push([[842],{540:(e,t,n)=>{e.exports=n(869)},842:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(540);console.log("BIG HAIRY ARSES!");const o=function(){return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("button",{onClick:function(){return alert("it works!")},style:{backgroundColor:"#4CAF50",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer",transition:"background-color 0.3s ease"}},"React App Two Button")))},u=function(){return r.createElement(r.Fragment,null,r.createElement("div",{style:{border:"1px solid red",padding:"1em"}},r.createElement("p",null,"Hello. Welcome to the Vegetables app. click below to continue"),r.createElement(o,null)))}},869:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function v(){}function _(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var S=_.prototype=new v;S.constructor=_,h(S,b.prototype),S.isPureReactComponent=!0;var E=Array.isArray,w={H:null,A:null,T:null,S:null},g=Object.prototype.hasOwnProperty;function k(e,t,r,o,u,c){return r=c.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:c}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var H=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function C(){}function $(e,t,o,u,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a,s,l=!1;if(null===e)l=!0;else switch(i){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0;break;case p:return $((l=e._init)(e._payload),t,o,u,c)}}if(l)return c=c(e),l=""===u?"."+j(e,0):u,E(c)?(o="",null!=l&&(o=l.replace(H,"$&/")+"/"),$(c,t,o,"",(function(e){return e}))):null!=c&&(R(c)&&(a=c,s=o+(null==c.key||e&&e.key===c.key?"":(""+c.key).replace(H,"$&/")+"/")+l,c=k(a.type,s,void 0,0,0,a.props)),t.push(c)),1;l=0;var f,y=""===u?".":u+":";if(E(e))for(var h=0;h<e.length;h++)l+=$(u=e[h],t,o,i=y+j(u,h),c);else if("function"==typeof(h=null===(f=e)||"object"!=typeof f?null:"function"==typeof(f=d&&f[d]||f["@@iterator"])?f:null))for(e=h.call(e),h=0;!(u=e.next()).done;)l+=$(u=u.value,t,o,i=y+j(u,h++),c);else if("object"===i){if("function"==typeof e.then)return $(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(C,C):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,u,c);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function x(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function O(){}t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=u,t.Suspense=l,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=h({},e.props),o=e.key;if(null!=t)for(u in t.ref,void 0!==t.key&&(o=""+t.key),t)!g.call(t,u)||"key"===u||"__self"===u||"__source"===u||"ref"===u&&void 0===t.ref||(r[u]=t[u]);var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){for(var c=Array(u),i=0;i<u;i++)c[i]=arguments[i+2];r.children=c}return k(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:i,_context:e},e},t.createElement=function(e,t,n){var r,o={},u=null;if(null!=t)for(r in void 0!==t.key&&(u=""+t.key),t)g.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];o.children=i}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return k(e,u,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),o=w.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(O,T)}catch(e){T(e)}finally{w.T=t}},t.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},t.use=function(e){return w.H.use(e)},t.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},t.useCallback=function(e,t){return w.H.useCallback(e,t)},t.useContext=function(e){return w.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return w.H.useEffect(e,t)},t.useId=function(){return w.H.useId()},t.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return w.H.useMemo(e,t)},t.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},t.useRef=function(e){return w.H.useRef(e)},t.useState=function(e){return w.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return w.H.useTransition()},t.version="19.0.0"}}]);