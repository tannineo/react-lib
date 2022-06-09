import{j as o}from"./jsx-runtime.0bb0cdfc.js";import"./index.c8fbd8de.js";const t=({children:e})=>o("button",{className:"bg-light border rounded-md cursor-pointer bg-gray-200 border-gray-700 text-black text-xl py-2 px-4",dark:"text-white bg-gray-700 border-gray-200",onClick:()=>alert("This is an alert"),children:e});var n=t;try{t.displayName="TestButton",t.__docgenInfo={description:"",displayName:"TestButton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TestButton.tsx#TestButton"]={docgenInfo:t.__docgenInfo,name:"TestButton",path:"src/components/TestButton.tsx#TestButton"})}catch{}var a={parameters:{storySource:{source:`import TestButton from './TestButton'

export default {
  title: 'Test Button',
  component: TestButton,
}

export const Test = () => <TestButton>Button</TestButton>
`,locationsMap:{test:{startLoc:{col:20,line:8},endLoc:{col:57,line:8},startBody:{col:20,line:8},endBody:{col:57,line:8}}}}},title:"Test Button",component:n};const c=()=>o(n,{children:"Button"}),u=["Test"];export{c as Test,u as __namedExportsOrder,a as default};
//# sourceMappingURL=TestButton.stories.6bdd48fd.js.map
