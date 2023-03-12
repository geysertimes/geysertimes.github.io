"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),u=n(7094),p=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function s(e){const{lazy:t,block:n,defaultValue:l,values:s,groupId:d,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=s??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,u.U)(),[v,N]=(0,r.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=d){const e=g[d];null!=e&&e!==v&&f.some((t=>t.value===e))&&N(e)}const w=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==v&&(I(t),N(a),null!=d&&T(d,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:w},l,{className:(0,o.Z)("tabs__item",m,l?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},9425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={title:"Edit Reaction"},u="Edit or delete a comment, confirm or flag",p={unversionedId:"users/edit-reaction",id:"users/edit-reaction",title:"Edit Reaction",description:"You can edit or delete your comments, confirms and flags.",source:"@site/docs/users/edit-reaction.md",sourceDirName:"users",slug:"/users/edit-reaction",permalink:"/users/edit-reaction",draft:!1,editUrl:"https://github.com/geysertimes/docs/edit/main/docs/users/edit-reaction.md",tags:[],version:"current",frontMatter:{title:"Edit Reaction"},sidebar:"users",previous:{title:"Edit Note",permalink:"/users/edit-note"},next:{title:"Edit Attachment",permalink:"/users/edit-attachment"}},c={},m=[{value:"Edit a comment",id:"edit-a-comment",level:2},{value:"Delete a comment",id:"delete-a-comment",level:2},{value:"Delete a confirm",id:"delete-a-confirm",level:2},{value:"Edit a flag",id:"edit-a-flag",level:2},{value:"Delete a flag",id:"delete-a-flag",level:2}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edit-or-delete-a-comment-confirm-or-flag"},"Edit or delete a comment, confirm or flag"),(0,r.kt)("p",null,"You can edit or delete your comments, confirms and flags. "),(0,r.kt)("h2",{id:"edit-a-comment"},"Edit a comment"),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note on which you commented. "),(0,r.kt)("li",{parentName:"ul"},"In the tabs, click ",(0,r.kt)("strong",{parentName:"li"},"Comments"),"."),(0,r.kt)("li",{parentName:"ul"},"In the card of the comment, click ",(0,r.kt)("strong",{parentName:"li"},"Edit"),". "),(0,r.kt)("li",{parentName:"ul"},"Edit the comment."),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Check icon (\u2714\ufe0f)"),"."))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note on which you commented. "),(0,r.kt)("li",{parentName:"ul"},"In the card of the comment, tap ",(0,r.kt)("strong",{parentName:"li"},"Edit"),". "),(0,r.kt)("li",{parentName:"ul"},"Edit the comment."),(0,r.kt)("li",{parentName:"ul"},"Tap ",(0,r.kt)("strong",{parentName:"li"},"Submit"),"."))),(0,r.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note on which you commented. "),(0,r.kt)("li",{parentName:"ul"},"In the card of the comment, tap ",(0,r.kt)("strong",{parentName:"li"},"Edit"),". "),(0,r.kt)("li",{parentName:"ul"},"Edit the comment."),(0,r.kt)("li",{parentName:"ul"},"Tap ",(0,r.kt)("strong",{parentName:"li"},"Submit"),".")))),(0,r.kt)("h2",{id:"delete-a-comment"},"Delete a comment"),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://geysertimes.org"},"GeyserTimes")," with your browser."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note on which you commented. "),(0,r.kt)("li",{parentName:"ul"},"In the tabs, click ",(0,r.kt)("strong",{parentName:"li"},"Comments"),"."),(0,r.kt)("li",{parentName:"ul"},"In the card of the comment, click ",(0,r.kt)("strong",{parentName:"li"},"Delete"),". "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"OK")," in the dialog to proceed."))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note on which you commented. "),(0,r.kt)("li",{parentName:"ul"},"In the card of the comment, tap ",(0,r.kt)("strong",{parentName:"li"},"Delete"),". "),(0,r.kt)("li",{parentName:"ul"},"Tap ",(0,r.kt)("strong",{parentName:"li"},"Delete")," in the dialog to proceed."))),(0,r.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the GeyserTimes app."),(0,r.kt)("li",{parentName:"ul"},"Log in to your account."),(0,r.kt)("li",{parentName:"ul"},"Open the eruption or note on which you commented. "),(0,r.kt)("li",{parentName:"ul"},"In the card of the comment, tap ",(0,r.kt)("strong",{parentName:"li"},"Delete"),". "),(0,r.kt)("li",{parentName:"ul"},"Tap ",(0,r.kt)("strong",{parentName:"li"},"Delete")," in the dialog to proceed.")))),(0,r.kt)("h2",{id:"delete-a-confirm"},"Delete a confirm"),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Visit [GeyserTimes](https://geysertimes.org) with your browser.\n* Log in to your account.\n* Open the eruption or note that you confirmed. \n* In the tabs, click **Confirms**.\n* In the card of the confirm, click **Delete**. \n* Click **OK** in the dialog to proceed.\n"))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Open the GeyserTimes app.\n* Log in to your account.\n* Open the eruption or note that you confirmed. \n* In the card of the confirm, tap **Delete**. \n* Tap **Delete** in the dialog to proceed.\n"))),(0,r.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Open the GeyserTimes app.\n* Log in to your account.\n* Open the eruption or note that you confirmed. \n* In the card of the confirm, tap **Delete**. \n* Tap **Delete** in the dialog to proceed.\n")))),(0,r.kt)("h2",{id:"edit-a-flag"},"Edit a flag"),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Visit [GeyserTimes](https://geysertimes.org) with your browser.\n* Log in to your account.\n* Open the eruption or note that you flagged. \n* In the tabs, click **Flags**.\n* In the card of the flag, click **Edit**. \n* Edit the flag.\n* Click the **Check icon (\u2714\ufe0f)**.\n"))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Open the GeyserTimes app.\n* Log in to your account.\n* Open the eruption or note that you flagged. \n* In the card of the flag, tap **Edit**. \n* Edit the flag.\n* Tap **Submit**.\n"))),(0,r.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Open the GeyserTimes app.\n* Log in to your account.\n* Open the eruption or note that you flagged. \n* In the card of the flag, tap **Edit**. \n* Edit the flag.\n* Tap **Submit**.\n")))),(0,r.kt)("h2",{id:"delete-a-flag"},"Delete a flag"),(0,r.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",label:"Website",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Visit [GeyserTimes](https://geysertimes.org) with your browser.\n* Log in to your account.\n* Open the eruption or note that you flagged. \n* In the tabs, click **Flags**.\n* In the card of the flag, click **Delete**. \n* Click **OK** in the dialog to proceed.\n"))),(0,r.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Open the GeyserTimes app.\n* Log in to your account.\n* Open the eruption or note that you flagged. \n* In the card of the flag, tap **Delete**. \n* Tap **Delete** in the dialog to proceed.\n"))),(0,r.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Open the GeyserTimes app.\n* Log in to your account.\n* Open the eruption or note that you flagged. \n* In the card of the flag, tap **Delete**. \n* Tap **Delete** in the dialog to proceed.\n")))))}d.isMDXComponent=!0}}]);