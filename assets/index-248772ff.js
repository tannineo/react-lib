import{g as At}from"./_commonjsHelpers-042e6b4d.js";function jt(b,s){for(var F=0;F<s.length;F++){const _=s[F];if(typeof _!="string"&&!Array.isArray(_)){for(const C in _)if(C!=="default"&&!(C in b)){const w=Object.getOwnPropertyDescriptor(_,C);w&&Object.defineProperty(b,C,w.get?w:{enumerable:!0,get:()=>_[C]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var re={},Dt={get exports(){return re},set exports(b){re=b}},te={},It={get exports(){return te},set exports(b){te=b}};/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(b,s){(function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var F="18.2.0",_=Symbol.for("react.element"),C=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),W=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),yr=Symbol.for("react.offscreen"),Te=Symbol.iterator,hr="@@iterator";function Oe(e){if(e===null||typeof e!="object")return null;var r=Te&&e[Te]||e[hr];return typeof r=="function"?r:null}var Se={current:null},P={transition:null},m={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},E={current:null},$={},Y=null;function Pe(e){Y=e}$.setExtraStackFrame=function(e){Y=e},$.getCurrentStack=null,$.getStackAddendum=function(){var e="";Y&&(e+=Y);var r=$.getCurrentStack;return r&&(e+=r()||""),e};var mr=!1,gr=!1,br=!1,_r=!1,Er=!1,k={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:P,ReactCurrentOwner:E};k.ReactDebugCurrentFrame=$,k.ReactCurrentActQueue=m;function A(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];ke("warn",e,t)}}function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];ke("error",e,t)}}function ke(e,r,t){{var n=k.ReactDebugCurrentFrame,a=n.getStackAddendum();a!==""&&(r+="%s",t=t.concat([a]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ae={};function ie(e,r){{var t=e.constructor,n=t&&(t.displayName||t.name)||"ReactClass",a=n+"."+r;if(Ae[a])return;f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",r,n),Ae[a]=!0}}var je={isMounted:function(e){return!1},enqueueForceUpdate:function(e,r,t){ie(e,"forceUpdate")},enqueueReplaceState:function(e,r,t,n){ie(e,"replaceState")},enqueueSetState:function(e,r,t,n){ie(e,"setState")}},R=Object.assign,se={};Object.freeze(se);function O(e,r,t){this.props=e,this.context=r,this.refs=se,this.updater=t||je}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};{var ce={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Rr=function(e,r){Object.defineProperty(O.prototype,e,{get:function(){A("%s(...) is deprecated in plain JavaScript React classes. %s",r[0],r[1])}})};for(var fe in ce)ce.hasOwnProperty(fe)&&Rr(fe,ce[fe])}function De(){}De.prototype=O.prototype;function le(e,r,t){this.props=e,this.context=r,this.refs=se,this.updater=t||je}var de=le.prototype=new De;de.constructor=le,R(de,O.prototype),de.isPureReactComponent=!0;function Cr(){var e={current:null};return Object.seal(e),e}var wr=Array.isArray;function z(e){return wr(e)}function Tr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Or(e){try{return Ie(e),!1}catch{return!0}}function Ie(e){return""+e}function B(e){if(Or(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Tr(e)),Ie(e)}function Sr(e,r,t){var n=e.displayName;if(n)return n;var a=r.displayName||r.name||"";return a!==""?t+"("+a+")":t}function Fe(e){return e.displayName||"Context"}function T(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case C:return"Portal";case ae:return"Profiler";case ne:return"StrictMode";case U:return"Suspense";case ue:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case W:var r=e;return Fe(r)+".Consumer";case oe:var t=e;return Fe(t._context)+".Provider";case L:return Sr(e,e.render,"ForwardRef");case S:var n=e.displayName||null;return n!==null?n:T(e.type)||"Memo";case V:{var a=e,u=a._payload,o=a._init;try{return T(o(u))}catch{return null}}}return null}var M=Object.prototype.hasOwnProperty,Le={key:!0,ref:!0,__self:!0,__source:!0},$e,Me,pe;pe={};function xe(e){if(M.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ne(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Pr(e,r){var t=function(){$e||($e=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}function kr(e,r){var t=function(){Me||(Me=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}function Ar(e){if(typeof e.ref=="string"&&E.current&&e.__self&&E.current.stateNode!==e.__self){var r=T(E.current.type);pe[r]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',r,e.ref),pe[r]=!0)}}var ve=function(e,r,t,n,a,u,o){var i={$$typeof:_,type:e,key:r,ref:t,props:o,_owner:u};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function jr(e,r,t){var n,a={},u=null,o=null,i=null,c=null;if(r!=null){xe(r)&&(o=r.ref,Ar(r)),Ne(r)&&(B(r.key),u=""+r.key),i=r.__self===void 0?null:r.__self,c=r.__source===void 0?null:r.__source;for(n in r)M.call(r,n)&&!Le.hasOwnProperty(n)&&(a[n]=r[n])}var l=arguments.length-2;if(l===1)a.children=t;else if(l>1){for(var d=Array(l),p=0;p<l;p++)d[p]=arguments[p+2];Object.freeze&&Object.freeze(d),a.children=d}if(e&&e.defaultProps){var v=e.defaultProps;for(n in v)a[n]===void 0&&(a[n]=v[n])}if(u||o){var y=typeof e=="function"?e.displayName||e.name||"Unknown":e;u&&Pr(a,y),o&&kr(a,y)}return ve(e,u,o,i,c,E.current,a)}function Dr(e,r){var t=ve(e.type,r,e.ref,e._self,e._source,e._owner,e.props);return t}function Ir(e,r,t){if(e==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,a=R({},e.props),u=e.key,o=e.ref,i=e._self,c=e._source,l=e._owner;if(r!=null){xe(r)&&(o=r.ref,l=E.current),Ne(r)&&(B(r.key),u=""+r.key);var d;e.type&&e.type.defaultProps&&(d=e.type.defaultProps);for(n in r)M.call(r,n)&&!Le.hasOwnProperty(n)&&(r[n]===void 0&&d!==void 0?a[n]=d[n]:a[n]=r[n])}var p=arguments.length-2;if(p===1)a.children=t;else if(p>1){for(var v=Array(p),y=0;y<p;y++)v[y]=arguments[y+2];a.children=v}return ve(e.type,u,o,i,c,l,a)}function j(e){return typeof e=="object"&&e!==null&&e.$$typeof===_}var We=".",Fr=":";function Lr(e){var r=/[=:]/g,t={"=":"=0",":":"=2"},n=e.replace(r,function(a){return t[a]});return"$"+n}var Ue=!1,$r=/\/+/g;function Ve(e){return e.replace($r,"$&/")}function ye(e,r){return typeof e=="object"&&e!==null&&e.key!=null?(B(e.key),Lr(""+e.key)):r.toString(36)}function H(e,r,t,n,a){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(u){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case _:case C:o=!0}}if(o){var i=e,c=a(i),l=n===""?We+ye(i,0):n;if(z(c)){var d="";l!=null&&(d=Ve(l)+"/"),H(c,r,d,"",function(kt){return kt})}else c!=null&&(j(c)&&(c.key&&(!i||i.key!==c.key)&&B(c.key),c=Dr(c,t+(c.key&&(!i||i.key!==c.key)?Ve(""+c.key)+"/":"")+l)),r.push(c));return 1}var p,v,y=0,h=n===""?We:n+Fr;if(z(e))for(var ee=0;ee<e.length;ee++)p=e[ee],v=h+ye(p,ee),y+=H(p,r,t,v,a);else{var we=Oe(e);if(typeof we=="function"){var dr=e;we===dr.entries&&(Ue||A("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ue=!0);for(var St=we.call(dr),pr,Pt=0;!(pr=St.next()).done;)p=pr.value,v=h+ye(p,Pt++),y+=H(p,r,t,v,a)}else if(u==="object"){var vr=String(e);throw new Error("Objects are not valid as a React child (found: "+(vr==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":vr)+"). If you meant to render a collection of children, use an array instead.")}}return y}function K(e,r,t){if(e==null)return e;var n=[],a=0;return H(e,n,"","",function(u){return r.call(t,u,a++)}),n}function Mr(e){var r=0;return K(e,function(){r++}),r}function xr(e,r,t){K(e,function(){r.apply(this,arguments)},t)}function Nr(e){return K(e,function(r){return r})||[]}function Wr(e){if(!j(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}function Ur(e){var r={$$typeof:W,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};r.Provider={$$typeof:oe,_context:r};var t=!1,n=!1,a=!1;{var u={$$typeof:W,_context:r};Object.defineProperties(u,{Provider:{get:function(){return n||(n=!0,f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(o){r.Provider=o}},_currentValue:{get:function(){return r._currentValue},set:function(o){r._currentValue=o}},_currentValue2:{get:function(){return r._currentValue2},set:function(o){r._currentValue2=o}},_threadCount:{get:function(){return r._threadCount},set:function(o){r._threadCount=o}},Consumer:{get:function(){return t||(t=!0,f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}},displayName:{get:function(){return r.displayName},set:function(o){a||(A("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",o),a=!0)}}}),r.Consumer=u}return r._currentRenderer=null,r._currentRenderer2=null,r}var x=-1,he=0,Ye=1,Vr=2;function Yr(e){if(e._status===x){var r=e._result,t=r();if(t.then(function(u){if(e._status===he||e._status===x){var o=e;o._status=Ye,o._result=u}},function(u){if(e._status===he||e._status===x){var o=e;o._status=Vr,o._result=u}}),e._status===x){var n=e;n._status=he,n._result=t}}if(e._status===Ye){var a=e._result;return a===void 0&&f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,a),"default"in a||f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,a),a.default}else throw e._result}function zr(e){var r={_status:x,_result:e},t={$$typeof:V,_payload:r,_init:Yr};{var n,a;Object.defineProperties(t,{defaultProps:{configurable:!0,get:function(){return n},set:function(u){f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=u,Object.defineProperty(t,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return a},set:function(u){f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),a=u,Object.defineProperty(t,"propTypes",{enumerable:!0})}}})}return t}function Br(e){e!=null&&e.$$typeof===S?f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?f("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&f("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&(e.defaultProps!=null||e.propTypes!=null)&&f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var r={$$typeof:L,render:e};{var t;Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(n){t=n,!e.name&&!e.displayName&&(e.displayName=n)}})}return r}var ze;ze=Symbol.for("react.module.reference");function Be(e){return!!(typeof e=="string"||typeof e=="function"||e===w||e===ae||Er||e===ne||e===U||e===ue||_r||e===yr||mr||gr||br||typeof e=="object"&&e!==null&&(e.$$typeof===V||e.$$typeof===S||e.$$typeof===oe||e.$$typeof===W||e.$$typeof===L||e.$$typeof===ze||e.getModuleId!==void 0))}function Hr(e,r){Be(e)||f("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e);var t={$$typeof:S,type:e,compare:r===void 0?null:r};{var n;Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(a){n=a,!e.name&&!e.displayName&&(e.displayName=a)}})}return t}function g(){var e=Se.current;return e===null&&f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function Kr(e){var r=g();if(e._context!==void 0){var t=e._context;t.Consumer===e?f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):t.Provider===e&&f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e)}function Gr(e){var r=g();return r.useState(e)}function qr(e,r,t){var n=g();return n.useReducer(e,r,t)}function Qr(e){var r=g();return r.useRef(e)}function Xr(e,r){var t=g();return t.useEffect(e,r)}function Jr(e,r){var t=g();return t.useInsertionEffect(e,r)}function Zr(e,r){var t=g();return t.useLayoutEffect(e,r)}function et(e,r){var t=g();return t.useCallback(e,r)}function rt(e,r){var t=g();return t.useMemo(e,r)}function tt(e,r,t){var n=g();return n.useImperativeHandle(e,r,t)}function nt(e,r){{var t=g();return t.useDebugValue(e,r)}}function at(){var e=g();return e.useTransition()}function ot(e){var r=g();return r.useDeferredValue(e)}function ut(){var e=g();return e.useId()}function it(e,r,t){var n=g();return n.useSyncExternalStore(e,r,t)}var N=0,He,Ke,Ge,qe,Qe,Xe,Je;function Ze(){}Ze.__reactDisabledLog=!0;function st(){{if(N===0){He=console.log,Ke=console.info,Ge=console.warn,qe=console.error,Qe=console.group,Xe=console.groupCollapsed,Je=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ze,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}}function ct(){{if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:He}),info:R({},e,{value:Ke}),warn:R({},e,{value:Ge}),error:R({},e,{value:qe}),group:R({},e,{value:Qe}),groupCollapsed:R({},e,{value:Xe}),groupEnd:R({},e,{value:Je})})}N<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var me=k.ReactCurrentDispatcher,ge;function G(e,r,t){{if(ge===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ge=n&&n[1]||""}return`
`+ge+e}}var be=!1,q;{var ft=typeof WeakMap=="function"?WeakMap:Map;q=new ft}function er(e,r){if(!e||be)return"";{var t=q.get(e);if(t!==void 0)return t}var n;be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=me.current,me.current=null,st();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(h){n=h}Reflect.construct(e,[],o)}else{try{o.call()}catch(h){n=h}e.call(o.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),c=n.stack.split(`
`),l=i.length-1,d=c.length-1;l>=1&&d>=0&&i[l]!==c[d];)d--;for(;l>=1&&d>=0;l--,d--)if(i[l]!==c[d]){if(l!==1||d!==1)do if(l--,d--,d<0||i[l]!==c[d]){var p=`
`+i[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&q.set(e,p),p}while(l>=1&&d>=0);break}}}finally{be=!1,me.current=u,ct(),Error.prepareStackTrace=a}var v=e?e.displayName||e.name:"",y=v?G(v):"";return typeof e=="function"&&q.set(e,y),y}function lt(e,r,t){return er(e,!1)}function dt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function Q(e,r,t){if(e==null)return"";if(typeof e=="function")return er(e,dt(e));if(typeof e=="string")return G(e);switch(e){case U:return G("Suspense");case ue:return G("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case L:return lt(e.render);case S:return Q(e.type,r,t);case V:{var n=e,a=n._payload,u=n._init;try{return Q(u(a),r,t)}catch{}}}return""}var rr={},tr=k.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,t=Q(e.type,e._source,r?r.type:null);tr.setExtraStackFrame(t)}else tr.setExtraStackFrame(null)}function pt(e,r,t,n,a){{var u=Function.call.bind(M);for(var o in e)if(u(e,o)){var i=void 0;try{if(typeof e[o]!="function"){var c=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){i=l}i&&!(i instanceof Error)&&(X(a),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof i),X(null)),i instanceof Error&&!(i.message in rr)&&(rr[i.message]=!0,X(a),f("Failed %s type: %s",t,i.message),X(null))}}}function D(e){if(e){var r=e._owner,t=Q(e.type,e._source,r?r.type:null);Pe(t)}else Pe(null)}var _e;_e=!1;function nr(){if(E.current){var e=T(E.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}function vt(e){if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}function yt(e){return e!=null?vt(e.__source):""}var ar={};function ht(e){var r=nr();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}function or(e,r){if(!(!e._store||e._store.validated||e.key!=null)){e._store.validated=!0;var t=ht(r);if(!ar[t]){ar[t]=!0;var n="";e&&e._owner&&e._owner!==E.current&&(n=" It was passed a child from "+T(e._owner.type)+"."),D(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}}function ur(e,r){if(typeof e=="object"){if(z(e))for(var t=0;t<e.length;t++){var n=e[t];j(n)&&or(n,r)}else if(j(e))e._store&&(e._store.validated=!0);else if(e){var a=Oe(e);if(typeof a=="function"&&a!==e.entries)for(var u=a.call(e),o;!(o=u.next()).done;)j(o.value)&&or(o.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===L||r.$$typeof===S))t=r.propTypes;else return;if(t){var n=T(r);pt(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!_e){_e=!0;var a=T(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",a||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function mt(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function sr(e,r,t){var n=Be(e);if(!n){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var u=yt(r);u?a+=u:a+=nr();var o;e===null?o="null":z(e)?o="array":e!==void 0&&e.$$typeof===_?(o="<"+(T(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):o=typeof e,f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",o,a)}var i=jr.apply(this,arguments);if(i==null)return i;if(n)for(var c=2;c<arguments.length;c++)ur(arguments[c],e);return e===w?mt(i):ir(i),i}var cr=!1;function gt(e){var r=sr.bind(null,e);return r.type=e,cr||(cr=!0,A("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(r,"type",{enumerable:!1,get:function(){return A("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),r}function bt(e,r,t){for(var n=Ir.apply(this,arguments),a=2;a<arguments.length;a++)ur(arguments[a],n.type);return ir(n),n}function _t(e,r){var t=P.transition;P.transition={};var n=P.transition;P.transition._updatedFibers=new Set;try{e()}finally{if(P.transition=t,t===null&&n._updatedFibers){var a=n._updatedFibers.size;a>10&&A("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear()}}}var fr=!1,J=null;function Et(e){if(J===null)try{var r=("require"+Math.random()).slice(0,7),t=b&&b[r];J=t.call(b,"timers").setImmediate}catch{J=function(a){fr===!1&&(fr=!0,typeof MessageChannel>"u"&&f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var u=new MessageChannel;u.port1.onmessage=a,u.port2.postMessage(void 0)}}return J(e)}var I=0,lr=!1;function Rt(e){{var r=I;I++,m.current===null&&(m.current=[]);var t=m.isBatchingLegacy,n;try{if(m.isBatchingLegacy=!0,n=e(),!t&&m.didScheduleLegacyUpdate){var a=m.current;a!==null&&(m.didScheduleLegacyUpdate=!1,Ce(a))}}catch(v){throw Z(r),v}finally{m.isBatchingLegacy=t}if(n!==null&&typeof n=="object"&&typeof n.then=="function"){var u=n,o=!1,i={then:function(v,y){o=!0,u.then(function(h){Z(r),I===0?Ee(h,v,y):v(h)},function(h){Z(r),y(h)})}};return!lr&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){o||(lr=!0,f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),i}else{var c=n;if(Z(r),I===0){var l=m.current;l!==null&&(Ce(l),m.current=null);var d={then:function(v,y){m.current===null?(m.current=[],Ee(c,v,y)):v(c)}};return d}else{var p={then:function(v,y){v(c)}};return p}}}}function Z(e){e!==I-1&&f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),I=e}function Ee(e,r,t){{var n=m.current;if(n!==null)try{Ce(n),Et(function(){n.length===0?(m.current=null,r(e)):Ee(e,r,t)})}catch(a){t(a)}else r(e)}}var Re=!1;function Ce(e){if(!Re){Re=!0;var r=0;try{for(;r<e.length;r++){var t=e[r];do t=t(!0);while(t!==null)}e.length=0}catch(n){throw e=e.slice(r+1),n}finally{Re=!1}}}var Ct=sr,wt=bt,Tt=gt,Ot={map:K,forEach:xr,count:Mr,toArray:Nr,only:Wr};s.Children=Ot,s.Component=O,s.Fragment=w,s.Profiler=ae,s.PureComponent=le,s.StrictMode=ne,s.Suspense=U,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k,s.cloneElement=wt,s.createContext=Ur,s.createElement=Ct,s.createFactory=Tt,s.createRef=Cr,s.forwardRef=Br,s.isValidElement=j,s.lazy=zr,s.memo=Hr,s.startTransition=_t,s.unstable_act=Rt,s.useCallback=et,s.useContext=Kr,s.useDebugValue=nt,s.useDeferredValue=ot,s.useEffect=Xr,s.useId=ut,s.useImperativeHandle=tt,s.useInsertionEffect=Jr,s.useLayoutEffect=Zr,s.useMemo=rt,s.useReducer=qr,s.useRef=Qr,s.useState=Gr,s.useSyncExternalStore=it,s.useTransition=at,s.version=F,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()})(It,te);(function(b){b.exports=te})(Dt);const Ft=At(re),$t=jt({__proto__:null,default:Ft},[re]);export{Ft as R,$t as a,re as r};
//# sourceMappingURL=index-248772ff.js.map