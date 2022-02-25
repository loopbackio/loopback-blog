"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1165],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"LoopBack 4 December 2019 Milestone Update",date:new Date("2020-01-08T00:00:00.000Z"),authors:"agnes512",slug:"december-2019-milestone",tags:["Milestone update"]},p=void 0,c={permalink:"/december-2019-milestone",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-01-08-december-milestone.md",source:"@site/blog/2020/2020-01-08-december-milestone.md",title:"LoopBack 4 December 2019 Milestone Update",description:"Originally published on strongloop.com",date:"2020-01-08T00:00:00.000Z",formattedDate:"January 8, 2020",tags:[{label:"Milestone update",permalink:"/tags/milestone-update"}],readingTime:10.895,truncated:!0,authors:[{name:"Agnes Lin",title:"LoopBack Maintainer",url:"https://github.com/agnes512",imageURL:"https://avatars3.githubusercontent.com/u/50331796",key:"agnes512"}],frontMatter:{title:"LoopBack 4 December 2019 Milestone Update",date:"2020-01-08T00:00:00.000Z",authors:"agnes512",slug:"december-2019-milestone",tags:["Milestone update"]},prevItem:{title:"LoopBack 4 2019 Q4 Overview",permalink:"/loopback4-2019-q4-overview"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"It's 2\ufe0f\u20e30\ufe0f\u20e32\ufe0f\u20e30\ufe0f\u20e3!"),(0,a.kt)("p",null,"Happy New Year! Is the snow dancing outside of your window or is the sunshine bringing warmth and glow to the grass around you? No matter where you are, the LoopBack team is thankful for you being with us through 2019! It means a lot to us that you choose LoopBack for your applications and projects."),(0,a.kt)("p",null,"We're also excited to have ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/derdeka"},"Denny"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dougal83"},"Douglas"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/achrinza"},"Rifa")," as LoopBack maintainers! They've been actively helpful in our community. We appreciate all the contributions and great work. Welcome to the team!"),(0,a.kt)("p",null,"Even though this past December was a short month due to the holidays, the list of the accomplished tasks is not short! Check out the sections below for the progress we made in each area:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#from-model-definition-to-rest-api"},"From Model Definition to REST API"),": build a LB4 app with just models!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inclusion-of-related-models"},"Inclusion of Related Models"),": enable custom scope for inclusion."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#authentication"},"Authentication"),": new added user profile factory and StrategyAdapter."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#allowing-interceptor-to-be-invoked-based-on-the-source"},"@loopback/context Improvement"),": invoke interceptors based on their callers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#improving-application-life-cycle-states"},"Application Life Cycle"),": application states and the shutdown hooks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#openapi-enhancer-service"},"OpenAPI Enhancer Service"),": contribute OpenAPI spec pieces from extensions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#improving-juggler-and-connectors"},"Improving Juggler and Connectors"),": new property settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new-eslint-rules"},"New ESLint Rules"),": applied new ",(0,a.kt)("inlineCode",{parentName:"li"},"@typescript-eslint")," rules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#documentation-improvements"},"Documentation Improvements"))))}f.isMDXComponent=!0}}]);