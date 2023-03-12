"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[630],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),u=a(7094),s=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:l,values:p,groupId:d,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,u.U)(),[N,T]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=d){const e=v[d];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),n=f[a].value;n!==N&&(w(t),T(n),null!=d&&g(d,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:E},l,{className:(0,o.Z)("tabs__item",m,l?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},7778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={title:"Submit Attachment"},u="Add attachments to entries",s={unversionedId:"users/submit-attachment",id:"users/submit-attachment",title:"Submit Attachment",description:"You can add attachments to entries, such as YouTube videos or Flickr photos.",source:"@site/docs/users/submit-attachment.md",sourceDirName:"users",slug:"/users/submit-attachment",permalink:"/users/submit-attachment",draft:!1,editUrl:"https://github.com/geysertimes/docs/edit/main/docs/users/submit-attachment.md",tags:[],version:"current",frontMatter:{title:"Submit Attachment"},sidebar:"users",previous:{title:"Submit Reaction",permalink:"/users/submit-reaction"},next:{title:"Edit Eruption",permalink:"/users/edit-eruption"}},c={},m=[],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-attachments-to-entries"},"Add attachments to entries"),(0,r.kt)("p",null,"You can add attachments to entries, such as YouTube videos or Flickr photos."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To contribute data, a GeyserTimes account is required. If you don't have a GeyserTimes account, you can ",(0,r.kt)("a",{parentName:"p",href:"/users/account-signup"},"sign up to GeyserTimes")," for free. ")),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note you want to add an attachment to. "),(0,r.kt)("li",{parentName:"ul"},"In the tabs, click ",(0,r.kt)("strong",{parentName:"li"},"Add Attachment"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter the URL to your attachment and your comment into the text fields. "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Attachment"),"."))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note you want to add an attachment to. "),(0,r.kt)("li",{parentName:"ul"},"In the bottom app bar, click the ",(0,r.kt)("strong",{parentName:"li"},"Attach icon (\ud83d\udcce)"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter the URL to your attachment and your comment into the text fields. "),(0,r.kt)("li",{parentName:"ul"},"Tap ",(0,r.kt)("strong",{parentName:"li"},"Submit"),"."))),(0,r.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note you want to add an attachment to. "),(0,r.kt)("li",{parentName:"ul"},"In the bottom app bar, click the ",(0,r.kt)("strong",{parentName:"li"},"Attach icon (\ud83d\udcce)"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter the URL to your attachment and your comment into the text fields. "),(0,r.kt)("li",{parentName:"ul"},"Tap ",(0,r.kt)("strong",{parentName:"li"},"Submit"),".")))))}d.isMDXComponent=!0}}]);