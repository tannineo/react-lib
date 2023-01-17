import{r as ir}from"./index-248772ff.js";import{M as or}from"./index-6e049f2d.js";import{u as ke}from"./index-05f06210.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./index-06b6f0f9.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./chunk-XHUUYXNA-75191bd6.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-be132fda.js";import"./_getTag-3fe263e1.js";import"./index-3bc78f68.js";var T={},sr={get exports(){return T},set exports(h){T=h}},I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var h=ir,E=Symbol.for("react.element"),C=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),q=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),J=Symbol.iterator,xe="@@iterator";function _e(e){if(e===null||typeof e!="object")return null;var r=J&&e[J]||e[xe];return typeof r=="function"?r:null}var R=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function p(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Te("error",e,t)}}function Te(e,r,t){{var n=R.ReactDebugCurrentFrame,s=n.getStackAddendum();s!==""&&(r+="%s",t=t.concat([s]));var l=t.map(function(o){return String(o)});l.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,l)}}var Ce=!1,Se=!1,je=!1,Pe=!1,Oe=!1,Q;Q=Symbol.for("react.module.reference");function De(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===X||Oe||e===H||e===L||e===N||Pe||e===we||Ce||Se||je||typeof e=="object"&&e!==null&&(e.$$typeof===U||e.$$typeof===j||e.$$typeof===K||e.$$typeof===q||e.$$typeof===S||e.$$typeof===Q||e.getModuleId!==void 0))}function Fe(e,r,t){var n=e.displayName;if(n)return n;var s=r.displayName||r.name||"";return s!==""?t+"("+s+")":t}function Z(e){return e.displayName||"Context"}function v(e){if(e==null)return null;if(typeof e.tag=="number"&&p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case C:return"Portal";case X:return"Profiler";case H:return"StrictMode";case L:return"Suspense";case N:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q:var r=e;return Z(r)+".Consumer";case K:var t=e;return Z(t._context)+".Provider";case S:return Fe(e,e.render,"ForwardRef");case j:var n=e.displayName||null;return n!==null?n:v(e.type)||"Memo";case U:{var s=e,l=s._payload,o=s._init;try{return v(o(l))}catch{return null}}}return null}var y=Object.assign,x=0,ee,re,te,ne,ae,ie,oe;function se(){}se.__reactDisabledLog=!0;function Ae(){{if(x===0){ee=console.log,re=console.info,te=console.warn,ne=console.error,ae=console.group,ie=console.groupCollapsed,oe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}x++}}function Ie(){{if(x--,x===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:y({},e,{value:ee}),info:y({},e,{value:re}),warn:y({},e,{value:te}),error:y({},e,{value:ne}),group:y({},e,{value:ae}),groupCollapsed:y({},e,{value:ie}),groupEnd:y({},e,{value:oe})})}x<0&&p("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var W=R.ReactCurrentDispatcher,M;function P(e,r,t){{if(M===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}}var Y=!1,O;{var Le=typeof WeakMap=="function"?WeakMap:Map;O=new Le}function le(e,r){if(!e||Y)return"";{var t=O.get(e);if(t!==void 0)return t}var n;Y=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var l;l=W.current,W.current=null,Ae();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(b){n=b}Reflect.construct(e,[],o)}else{try{o.call()}catch(b){n=b}e.call(o.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var i=b.stack.split(`
`),m=n.stack.split(`
`),f=i.length-1,d=m.length-1;f>=1&&d>=0&&i[f]!==m[d];)d--;for(;f>=1&&d>=0;f--,d--)if(i[f]!==m[d]){if(f!==1||d!==1)do if(f--,d--,d<0||i[f]!==m[d]){var g=`
`+i[f].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&O.set(e,g),g}while(f>=1&&d>=0);break}}}finally{Y=!1,W.current=l,Ie(),Error.prepareStackTrace=s}var w=e?e.displayName||e.name:"",Re=w?P(w):"";return typeof e=="function"&&O.set(e,Re),Re}function Ne(e,r,t){return le(e,!1)}function Ue(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function D(e,r,t){if(e==null)return"";if(typeof e=="function")return le(e,Ue(e));if(typeof e=="string")return P(e);switch(e){case L:return P("Suspense");case N:return P("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case S:return Ne(e.render);case j:return D(e.type,r,t);case U:{var n=e,s=n._payload,l=n._init;try{return D(l(s),r,t)}catch{}}}return""}var F=Object.prototype.hasOwnProperty,ce={},ue=R.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=D(e.type,e._source,r?r.type:null);ue.setExtraStackFrame(t)}else ue.setExtraStackFrame(null)}function We(e,r,t,n,s){{var l=Function.call.bind(F);for(var o in e)if(l(e,o)){var i=void 0;try{if(typeof e[o]!="function"){var m=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}i=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){i=f}i&&!(i instanceof Error)&&(A(s),p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof i),A(null)),i instanceof Error&&!(i.message in ce)&&(ce[i.message]=!0,A(s),p("Failed %s type: %s",t,i.message),A(null))}}}var Me=Array.isArray;function $(e){return Me(e)}function Ye(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function $e(e){try{return fe(e),!1}catch{return!0}}function fe(e){return""+e}function de(e){if($e(e))return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ye(e)),fe(e)}var _=R.ReactCurrentOwner,Ve={key:!0,ref:!0,__self:!0,__source:!0},pe,me,V;V={};function Be(e){if(F.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ze(e){if(F.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ge(e,r){if(typeof e.ref=="string"&&_.current&&r&&_.current.stateNode!==r){var t=v(_.current.type);V[t]||(p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',v(_.current.type),e.ref),V[t]=!0)}}function He(e,r){{var t=function(){pe||(pe=!0,p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Xe(e,r){{var t=function(){me||(me=!0,p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Ke=function(e,r,t,n,s,l,o){var i={$$typeof:E,type:e,key:r,ref:t,props:o,_owner:l};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function qe(e,r,t,n,s){{var l,o={},i=null,m=null;t!==void 0&&(de(t),i=""+t),ze(r)&&(de(r.key),i=""+r.key),Be(r)&&(m=r.ref,Ge(r,s));for(l in r)F.call(r,l)&&!Ve.hasOwnProperty(l)&&(o[l]=r[l]);if(e&&e.defaultProps){var f=e.defaultProps;for(l in f)o[l]===void 0&&(o[l]=f[l])}if(i||m){var d=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&He(o,d),m&&Xe(o,d)}return Ke(e,i,m,s,n,_.current,o)}}var B=R.ReactCurrentOwner,ge=R.ReactDebugCurrentFrame;function k(e){if(e){var r=e._owner,t=D(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}var z;z=!1;function G(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function he(){{if(B.current){var e=v(B.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Je(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var ve={};function Qe(e){{var r=he();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function be(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Qe(r);if(ve[t])return;ve[t]=!0;var n="";e&&e._owner&&e._owner!==B.current&&(n=" It was passed a child from "+v(e._owner.type)+"."),k(e),p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),k(null)}}function ye(e,r){{if(typeof e!="object")return;if($(e))for(var t=0;t<e.length;t++){var n=e[t];G(n)&&be(n,r)}else if(G(e))e._store&&(e._store.validated=!0);else if(e){var s=_e(e);if(typeof s=="function"&&s!==e.entries)for(var l=s.call(e),o;!(o=l.next()).done;)G(o.value)&&be(o.value,r)}}}function Ze(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===S||r.$$typeof===j))t=r.propTypes;else return;if(t){var n=v(r);We(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!z){z=!0;var s=v(r);p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",s||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function er(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){k(e),p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),k(null);break}}e.ref!==null&&(k(e),p("Invalid attribute `ref` supplied to `React.Fragment`."),k(null))}}function Ee(e,r,t,n,s,l){{var o=De(e);if(!o){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var m=Je(s);m?i+=m:i+=he();var f;e===null?f="null":$(e)?f="array":e!==void 0&&e.$$typeof===E?(f="<"+(v(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,i)}var d=qe(e,r,t,s,l);if(d==null)return d;if(o){var g=r.children;if(g!==void 0)if(n)if($(g)){for(var w=0;w<g.length;w++)ye(g[w],e);Object.freeze&&Object.freeze(g)}else p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ye(g,e)}return e===u?er(d):Ze(d),d}}function rr(e,r,t){return Ee(e,r,t,!0)}function tr(e,r,t){return Ee(e,r,t,!1)}var nr=tr,ar=rr;I.Fragment=u,I.jsx=nr,I.jsxs=ar})();(function(h){h.exports=I})(sr);const lr=T.Fragment,a=T.jsx,c=T.jsxs,cr=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,ur=""+new URL("colors-ac9401f3.svg",import.meta.url).href,fr=""+new URL("comments-f15a6837.svg",import.meta.url).href,dr=""+new URL("direction-94a9917f.svg",import.meta.url).href,pr=""+new URL("flow-275142c6.svg",import.meta.url).href,mr=""+new URL("plugin-57148314.svg",import.meta.url).href,gr=""+new URL("repo-fb4ece47.svg",import.meta.url).href,hr=""+new URL("stackalt-2ad81543.svg",import.meta.url).href;function Or(h={}){const{wrapper:E}=Object.assign({},ke(),h.components);return E?a(E,Object.assign({},h,{children:a(C,{})})):C();function C(){const u=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},ke(),h.components);return c(lr,{children:[a(or,{title:"Example/Introduction"}),`
`,a("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,a(u.h1,{children:"Welcome to Storybook"}),`
`,c(u.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,a(u.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,c(u.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,a(u.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,a(u.a,{href:"https://componentdriven.org",children:a(u.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,a("div",{className:"subheading",children:"Configure"}),`
`,c("div",{className:"link-list",children:[c("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[a("img",{src:mr,alt:"plugin"}),a("span",{children:c(u.p,{children:[a("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),c("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[a("img",{src:hr,alt:"Build"}),a("span",{children:c(u.p,{children:[a("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),c("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[a("img",{src:ur,alt:"colors"}),a("span",{children:c(u.p,{children:[a("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),c("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[a("img",{src:pr,alt:"flow"}),a("span",{children:c(u.p,{children:[a("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,a("div",{className:"subheading",children:"Learn"}),`
`,c("div",{className:"link-list",children:[c("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[a("img",{src:gr,alt:"repo"}),a("span",{children:c(u.p,{children:[a("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),c("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[a("img",{src:dr,alt:"direction"}),a("span",{children:c(u.p,{children:[a("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),c("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[a("img",{src:cr,alt:"code"}),a("span",{children:c(u.p,{children:[a("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),c("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[a("img",{src:fr,alt:"comments"}),a("span",{children:c(u.p,{children:[a("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,a("div",{className:"tip-wrapper",children:c(u.p,{children:[a("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,a("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}export{Or as default};
//# sourceMappingURL=Introduction-9ac68da8.js.map
