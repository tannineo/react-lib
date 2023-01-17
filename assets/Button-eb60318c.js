import{r as er}from"./index-248772ff.js";var F={},rr={get exports(){return F},set exports(b){F=b}},z={};/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var b=er,R=Symbol.for("react.element"),A=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),H=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),K=Symbol.iterator,Re="@@iterator";function _e(e){if(e===null||typeof e!="object")return null;var r=K&&e[K]||e[Re];return typeof r=="function"?r:null}var y=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];Te("error",e,t)}}function Te(e,r,t){{var a=y.ReactDebugCurrentFrame,i=a.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ce=!1,Pe=!1,we=!1,Oe=!1,Se=!1,X;X=Symbol.for("react.module.reference");function ke(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===P||Se||e===C||e===I||e===W||Oe||e===Ee||Ce||Pe||we||typeof e=="object"&&e!==null&&(e.$$typeof===$||e.$$typeof===O||e.$$typeof===G||e.$$typeof===H||e.$$typeof===w||e.$$typeof===X||e.getModuleId!==void 0))}function je(e,r,t){var a=e.displayName;if(a)return a;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function J(e){return e.displayName||"Context"}function v(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case A:return"Portal";case P:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case W:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H:var r=e;return J(r)+".Consumer";case G:var t=e;return J(t._context)+".Provider";case w:return je(e,e.render,"ForwardRef");case O:var a=e.displayName||null;return a!==null?a:v(e.type)||"Memo";case $:{var i=e,u=i._payload,o=i._init;try{return v(o(u))}catch{return null}}}return null}var g=Object.assign,_=0,Z,Q,ee,re,te,ae,ne;function oe(){}oe.__reactDisabledLog=!0;function xe(){{if(_===0){Z=console.log,Q=console.info,ee=console.warn,re=console.error,te=console.group,ae=console.groupCollapsed,ne=console.groupEnd;var e={configurable:!0,enumerable:!0,value:oe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}_++}}function De(){{if(_--,_===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:g({},e,{value:Z}),info:g({},e,{value:Q}),warn:g({},e,{value:ee}),error:g({},e,{value:re}),group:g({},e,{value:te}),groupCollapsed:g({},e,{value:ae}),groupEnd:g({},e,{value:ne})})}_<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var V=y.ReactCurrentDispatcher,Y;function S(e,r,t){{if(Y===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);Y=a&&a[1]||""}return`
`+Y+e}}var N=!1,k;{var Fe=typeof WeakMap=="function"?WeakMap:Map;k=new Fe}function ie(e,r){if(!e||N)return"";{var t=k.get(e);if(t!==void 0)return t}var a;N=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=V.current,V.current=null,xe();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(p){a=p}Reflect.construct(e,[],o)}else{try{o.call()}catch(p){a=p}e.call(o.prototype)}}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var n=p.stack.split(`
`),c=a.stack.split(`
`),l=n.length-1,s=c.length-1;l>=1&&s>=0&&n[l]!==c[s];)s--;for(;l>=1&&s>=0;l--,s--)if(n[l]!==c[s]){if(l!==1||s!==1)do if(l--,s--,s<0||n[l]!==c[s]){var d=`
`+n[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),typeof e=="function"&&k.set(e,d),d}while(l>=1&&s>=0);break}}}finally{N=!1,V.current=u,De(),Error.prepareStackTrace=i}var E=e?e.displayName||e.name:"",ye=E?S(E):"";return typeof e=="function"&&k.set(e,ye),ye}function Ae(e,r,t){return ie(e,!1)}function Ie(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function j(e,r,t){if(e==null)return"";if(typeof e=="function")return ie(e,Ie(e));if(typeof e=="string")return S(e);switch(e){case I:return S("Suspense");case W:return S("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case w:return Ae(e.render);case O:return j(e.type,r,t);case $:{var a=e,i=a._payload,u=a._init;try{return j(u(i),r,t)}catch{}}}return""}var x=Object.prototype.hasOwnProperty,ue={},le=y.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=j(e.type,e._source,r?r.type:null);le.setExtraStackFrame(t)}else le.setExtraStackFrame(null)}function We(e,r,t,a,i){{var u=Function.call.bind(x);for(var o in e)if(u(e,o)){var n=void 0;try{if(typeof e[o]!="function"){var c=Error((a||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}n=e[o](r,o,a,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){n=l}n&&!(n instanceof Error)&&(D(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",t,o,typeof n),D(null)),n instanceof Error&&!(n.message in ue)&&(ue[n.message]=!0,D(i),f("Failed %s type: %s",t,n.message),D(null))}}}var $e=Array.isArray;function M(e){return $e(e)}function Ve(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ye(e){try{return se(e),!1}catch{return!0}}function se(e){return""+e}function fe(e){if(Ye(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ve(e)),se(e)}var T=y.ReactCurrentOwner,Ne={key:!0,ref:!0,__self:!0,__source:!0},ce,de,U;U={};function Me(e){if(x.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ue(e){if(x.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Le(e,r){if(typeof e.ref=="string"&&T.current&&r&&T.current.stateNode!==r){var t=v(T.current.type);U[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',v(T.current.type),e.ref),U[t]=!0)}}function Be(e,r){{var t=function(){ce||(ce=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function qe(e,r){{var t=function(){de||(de=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ze=function(e,r,t,a,i,u,o){var n={$$typeof:R,type:e,key:r,ref:t,props:o,_owner:u};return n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(n,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(n,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n};function Ge(e,r,t,a,i){{var u,o={},n=null,c=null;t!==void 0&&(fe(t),n=""+t),Ue(r)&&(fe(r.key),n=""+r.key),Me(r)&&(c=r.ref,Le(r,i));for(u in r)x.call(r,u)&&!Ne.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var l=e.defaultProps;for(u in l)o[u]===void 0&&(o[u]=l[u])}if(n||c){var s=typeof e=="function"?e.displayName||e.name||"Unknown":e;n&&Be(o,s),c&&qe(o,s)}return ze(e,n,c,i,a,T.current,o)}}var L=y.ReactCurrentOwner,ve=y.ReactDebugCurrentFrame;function h(e){if(e){var r=e._owner,t=j(e.type,e._source,r?r.type:null);ve.setExtraStackFrame(t)}else ve.setExtraStackFrame(null)}var B;B=!1;function q(e){return typeof e=="object"&&e!==null&&e.$$typeof===R}function pe(){{if(L.current){var e=v(L.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function He(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var be={};function Ke(e){{var r=pe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function ge(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Ke(r);if(be[t])return;be[t]=!0;var a="";e&&e._owner&&e._owner!==L.current&&(a=" It was passed a child from "+v(e._owner.type)+"."),h(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,a),h(null)}}function me(e,r){{if(typeof e!="object")return;if(M(e))for(var t=0;t<e.length;t++){var a=e[t];q(a)&&ge(a,r)}else if(q(e))e._store&&(e._store.validated=!0);else if(e){var i=_e(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)q(o.value)&&ge(o.value,r)}}}function Xe(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===w||r.$$typeof===O))t=r.propTypes;else return;if(t){var a=v(r);We(t,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!B){B=!0;var i=v(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Je(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var a=r[t];if(a!=="children"&&a!=="key"){h(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),h(null);break}}e.ref!==null&&(h(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),h(null))}}function Ze(e,r,t,a,i,u){{var o=ke(e);if(!o){var n="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=He(i);c?n+=c:n+=pe();var l;e===null?l="null":M(e)?l="array":e!==void 0&&e.$$typeof===R?(l="<"+(v(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):l=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",l,n)}var s=Ge(e,r,t,i,u);if(s==null)return s;if(o){var d=r.children;if(d!==void 0)if(a)if(M(d)){for(var E=0;E<d.length;E++)me(d[E],e);Object.freeze&&Object.freeze(d)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else me(d,e)}return e===m?Je(s):Xe(s),s}}var Qe=Ze;z.Fragment=m,z.jsxDEV=Qe})();(function(b){b.exports=z})(rr);const nr=F.Fragment,tr=F.jsxDEV;const he=({primary:b=!1,size:R="medium",backgroundColor:A,label:m,...C})=>{const P=b?"storybook-button--primary":"storybook-button--secondary";return tr("button",{type:"button",className:["storybook-button",`storybook-button--${R}`,P,"text-red-700"].join(" "),style:{backgroundColor:A},...C,children:m},void 0,!1,{fileName:"/Users/cary/Work/react-lib/src/stories/Button.tsx",lineNumber:41,columnNumber:5},globalThis)};try{he.displayName="Button",he.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{he as B,nr as F,tr as j};
//# sourceMappingURL=Button-eb60318c.js.map