"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6815],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4410:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"LoopBack 4 2020 Q1 Overview",date:new Date("2020-04-15T00:00:00.000Z"),authors:"dhmlau",slug:"loopback-4-2020-q1-overview",tags:["Quarterly update"]},p=void 0,u={permalink:"/loopback-4-2020-q1-overview",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-04-15-loopback-q1-overview.md",source:"@site/blog/2020/2020-04-15-loopback-q1-overview.md",title:"LoopBack 4 2020 Q1 Overview",description:"Originally published on strongloop.com",date:"2020-04-15T00:00:00.000Z",formattedDate:"April 15, 2020",tags:[{label:"Quarterly update",permalink:"/tags/quarterly-update"}],readingTime:6.26,truncated:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"}],frontMatter:{title:"LoopBack 4 2020 Q1 Overview",date:"2020-04-15T00:00:00.000Z",authors:"dhmlau",slug:"loopback-4-2020-q1-overview",tags:["Quarterly update"]},prevItem:{title:"Build REST APIs for CRUD operations from a model without coding",permalink:"/model-to-rest-api-feature"},nextItem:{title:"LoopBack 4 March 2020 Milestone Update",permalink:"/march-2020-milestone"}},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Originally published on ",(0,o.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,o.kt)("p",null,"The past few weeks have been challenging for many of us. While this pandemic situation affected our lives in different ways, we hope you all stay safe."),(0,o.kt)("p",null,"In Q1, we continued to make good progress in the following areas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#migration-guide"},"Migration guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#migration-tooling-and-examples"},"Migration Tooling and Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#from-model-definitions-to-rest-apis"},"From Model Definitions to REST APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#newly-added-examples"},"Newly added examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#newly-added-extensions"},"Newly added extensions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enhancements-in-loopback-core-and-openapi-areas"},"Enhancements in LoopBack core and OpenAPI areas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rework-of-shopping-example"},"Rework of shopping example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#refreshed-look-for-loopback-documentation"},"Refreshed look for LoopBack documentation"))),(0,o.kt)("p",null,"Let's take a closer look."))}f.isMDXComponent=!0}}]);