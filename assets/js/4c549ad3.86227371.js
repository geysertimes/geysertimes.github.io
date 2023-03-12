"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||n;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),i=a(6010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(n,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7462),i=a(7294),n=a(6010),l=a(2389),o=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:d,groupId:c,className:y}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,s.U)(),[w,T]=(0,i.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=c){const e=b[c];null!=e&&e!==w&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=N.indexOf(t),r=h[a].value;r!==w&&(O(t),T(r),null!=c&&g(c,String(r)))},I=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,n.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},y)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:I,onClick:x},l,{className:(0,n.Z)("tabs__item",m,l?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,i.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,l.Z)();return i.createElement(d,(0,r.Z)({key:String(t)},e))}},2004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=a(7462),i=(a(7294),a(3905)),n=a(5488),l=a(5162);const o={title:"Daily Geyser Activity"},s="View the daily geyser activity",p={unversionedId:"users/view-date",id:"users/view-date",title:"Daily Geyser Activity",description:"You can check out the daily geyser activity in summary or timeline mode.",source:"@site/docs/users/view-date.md",sourceDirName:"users",slug:"/users/view-date",permalink:"/users/view-date",draft:!1,editUrl:"https://github.com/geysertimes/docs/edit/main/docs/users/view-date.md",tags:[],version:"current",frontMatter:{title:"Daily Geyser Activity"},sidebar:"users",previous:{title:"Get Started",permalink:"/users/get-started"},next:{title:"Entry",permalink:"/users/view-entry"}},u={},m=[{value:"View the daily summary of geyser activity",id:"view-the-daily-summary-of-geyser-activity",level:2},{value:"View the daily timeline of geyser activity",id:"view-the-daily-timeline-of-geyser-activity",level:2},{value:"View the daily summary of specific dates",id:"view-the-daily-summary-of-specific-dates",level:2}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"view-the-daily-geyser-activity"},"View the daily geyser activity"),(0,i.kt)("p",null,"You can check out the daily geyser activity in summary or timeline mode. "),(0,i.kt)("h2",{id:"view-the-daily-summary-of-geyser-activity"},"View the daily summary of geyser activity"),(0,i.kt)(n.Z,{groupId:"os",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"View as Logbook"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hover over eruptions and notes for popups with additional information."))),(0,i.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,i.kt)("li",{parentName:"ul"},"In the menu of the top app bar, tap the ",(0,i.kt)("strong",{parentName:"li"},"down arrow \ud83d\udd3b"),". "),(0,i.kt)("li",{parentName:"ul"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"Summary"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hover over or long click on eruptions and notes for popups with additional information."))),(0,i.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,i.kt)("li",{parentName:"ul"},"In the menu of the top app bar, tap ",(0,i.kt)("strong",{parentName:"li"},"Summary"),".")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Flagged entries are marked with a flag icon and red text color. ")),(0,i.kt)("h2",{id:"view-the-daily-timeline-of-geyser-activity"},"View the daily timeline of geyser activity"),(0,i.kt)(n.Z,{groupId:"os",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"View as Timeline"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hover over eruptions and notes for popups with additional information."))),(0,i.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,i.kt)("li",{parentName:"ul"},"In the menu of the top app bar, tap the ",(0,i.kt)("strong",{parentName:"li"},"down arrow \ud83d\udd3b"),". "),(0,i.kt)("li",{parentName:"ul"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"Timeline"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hover over or long click on eruptions and notes for popups with additional information."))),(0,i.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,i.kt)("li",{parentName:"ul"},"In the menu of the top app bar, tap ",(0,i.kt)("strong",{parentName:"li"},"Timeline"),".")))),(0,i.kt)("h2",{id:"view-the-daily-summary-of-specific-dates"},"View the daily summary of specific dates"),(0,i.kt)(n.Z,{groupId:"os",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"<<<")," and ",(0,i.kt)("strong",{parentName:"li"},">>>")," to go to other days."))),(0,i.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,i.kt)("li",{parentName:"ul"},"Swipe left or right to go to other days.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"In the tabs displaying the dates, swipe left or right to the specific date."),(0,i.kt)("li",{parentName:"ul"},"Tap the specific date.")))),(0,i.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,i.kt)("li",{parentName:"ul"},"Swipe left or right to go to other days.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"In the tabs displaying the dates, swipe left or right to the specific date."),(0,i.kt)("li",{parentName:"ul"},"Tap the specific date."))))))}c.isMDXComponent=!0}}]);