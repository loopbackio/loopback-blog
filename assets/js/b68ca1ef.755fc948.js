"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8696],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4068:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={title:"Community Q&A Monthly Digest - May 2020",date:new Date("2020-06-11T00:00:00.000Z"),authors:"dhmlau",slug:"2020-may-slack-qa",tags:["Community","Slack","Q&A"]},l=void 0,s={permalink:"/2020-may-slack-qa",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-06-10-may-slack-qa.md",source:"@site/blog/2020/2020-06-10-may-slack-qa.md",title:"Community Q&A Monthly Digest - May 2020",description:"Originally published on strongloop.com",date:"2020-06-11T00:00:00.000Z",formattedDate:"June 11, 2020",tags:[{label:"Community",permalink:"/tags/community"},{label:"Slack",permalink:"/tags/slack"},{label:"Q&A",permalink:"/tags/q-a"}],readingTime:2.225,truncated:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"}],frontMatter:{title:"Community Q&A Monthly Digest - May 2020",date:"2020-06-11T00:00:00.000Z",authors:"dhmlau",slug:"2020-may-slack-qa",tags:["Community","Slack","Q&A"]},prevItem:{title:"LoopBack 4 June 2020 Milestone Update",permalink:"/june-2020-milestone"},nextItem:{title:"How We Improved LoopBack REST Performance by 45%",permalink:"/2020-improve-looopback-performance-uuid"}},c={authorsImageUrls:[void 0]},u=[{value:"Interested to Join our Slack Workspace?",id:"interested-to-join-our-slack-workspace",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("p",null,"Since we made the ",(0,a.kt)("a",{parentName:"p",href:"https://loopbackio.slack.com/"},"LoopBack Slack community")," available, we are happy to see more and more users are joining. Let's see some of the questions and answers that we've highlighted below."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Question"),": In the ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Model.html#using-the-juggler-bridge"},"Model documentation page"),', it says "To define a model for use with the juggler bridge, extend your classes from Entity". What\'s the juggler bridge?'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer"),": the Juggler bridge is used to bridge the gap between ",(0,a.kt)("inlineCode",{parentName:"p"},"@loopback/repository")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"loopback-datasource-juggler"),". The former is used by LoopBack 4 to help define Models, Repositories, etc. It also allows for cross-datasource relations, etc. as they are enforced at the application level instead of the database."),(0,a.kt)("p",null,"The latter is the ORM/ODM that builds the queries and interacts with the database. It's from LoopBack 3 and is probably the only major component that didn't get revamped to keep backwards-compatibility."),(0,a.kt)("p",null,"Hence, the Juggler bridge helps bridge the gaps between these Node.js packages."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is, at it's core, a model that has an ID property. Looking at the source code for ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),", there's quite a bit of boilerplate code added."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Question:")," Is there a way to change the application port to string ? I am trying to deploy the application under Azure web app where the port is a string."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer"),": Use ",(0,a.kt)("inlineCode",{parentName:"p"},"port: +(process.env.BILLING_PORT || 3000),"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," converts a string to number. For the pipe, you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," property instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"port"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/blob/master/packages/http-server/src/__tests__/integration/http-server.integration.ts#L272"},"https://github.com/strongloop/loopback-next/blob/master/packages/http-server/src/",(0,a.kt)("strong",{parentName:"a"},"tests"),"/integration/http-server.integration.ts#L272"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Question:")," I have a model with a field which is defined as \u201cnumber\u201d. Working with Postgres. How should I define it to have the field as a double and not an integer ?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer:")," You can specify the dataType field to define a certain type of that column. For type Double, for example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@model()\nexport class Item extends Entity {\n  @property({\n    type: 'number',\n    id: true,\n    generated: false,\n  })\n  id?: number;\n  @property({\n    type: 'number',\n    postgresql: {\n      dataType: 'double precision',\n    },\n  })\n  price?: number;\n....\n")),(0,a.kt)("p",null,"Then run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," and then ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run migrate")," commands, the table should have columns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"price       |                | double precision\n")),(0,a.kt)("p",null,"Besides the data type, LB4 also allows you to describe tables via the model definition and/or property definition. See ",(0,a.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Model.html#data-mapping-properties"},"Data Mapping Properties")," for information."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Question:")," Is there client sdk for lb4 for api code generation? I tried with swagger codegen, but the generated code seems doesn't work."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer:")," You should try ",(0,a.kt)("inlineCode",{parentName:"p"},"lb4 openapi --client"),". It generates strongly-typed LoopBack service proxies over openapi spec using TypeScript. We use it to generate SDKs in TS."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"interested-to-join-our-slack-workspace"},"Interested to Join our Slack Workspace?"),(0,a.kt)("p",null,"Simply click ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw"},"this invitation link")," to join. You can also find more channel details here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5048"},"https://github.com/strongloop/loopback-next/issues/5048"),"."))}d.isMDXComponent=!0}}]);