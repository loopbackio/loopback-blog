"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3694],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3929:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Community Q&A Monthly Digest - April 2020",date:new Date("2020-04-29T00:00:00.000Z"),authors:"dhmlau",slug:"2020-april-slack-qa",tags:["Community","Slack","Q&A"]},l=void 0,p={permalink:"/2020-april-slack-qa",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-04-27-april-slack-qa.md",source:"@site/blog/2020/2020-04-27-april-slack-qa.md",title:"Community Q&A Monthly Digest - April 2020",description:"Originally published on strongloop.com",date:"2020-04-29T00:00:00.000Z",formattedDate:"April 29, 2020",tags:[{label:"Community",permalink:"/tags/community"},{label:"Slack",permalink:"/tags/slack"},{label:"Q&A",permalink:"/tags/q-a"}],readingTime:5.87,truncated:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"}],frontMatter:{title:"Community Q&A Monthly Digest - April 2020",date:"2020-04-29T00:00:00.000Z",authors:"dhmlau",slug:"2020-april-slack-qa",tags:["Community","Slack","Q&A"]},prevItem:{title:"LoopBack 4 April 2020 Milestone Update",permalink:"/april-2020-milestone"},nextItem:{title:"Build REST APIs for CRUD operations from a model without coding",permalink:"/model-to-rest-api-feature"}},c={authorsImageUrls:[void 0]},u=[{value:"Interested to Join our Slack Workspace?",id:"interested-to-join-our-slack-workspace",children:[],level:2}],h={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Originally published on ",(0,r.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,r.kt)("p",null,"In the past, we've explored a few options on providing a forum for our users to help each other: ",(0,r.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/loopbackjs"},"Google group"),", ",(0,r.kt)("a",{parentName:"p",href:"https://gitter.im/strongloop/loopback"},"Gitter")," and GitHub. We are pleased to announce that the LoopBack Slack workspace, ",(0,r.kt)("a",{parentName:"p",href:"https://loopbackio.slack.com/"},"https://loopbackio.slack.com/"),", is available for our users to join. Since Slack is quite commonly used, we thought it would be a good time for us to modernize our tooling for the LoopBack community helping out each other out. Also, the LoopBack core team uses Slack on a daily basis; it is helpful because it allows us to get notifications and communicate efficiently."),(0,r.kt)("p",null,"There have been lots of great questions and answers. We thought it would be helpful to curate some of the discussions here. Thanks again for submitting the questions and answers! "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question: I am trying to find a working implementation for TimeStamp Mixin to have time stamp automatic fields in the database. In the older version of LoopBack, I was capable to create a BaseEntity and BaseRepository and to extend them but now it is not working anymore. If I extend in the same way the controllers are not working anymore. The current example in the docs is based on adding the mixin to the Controller which I like much less. Any suggestions? Thanks.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer:")," For specifying the creation timestamp, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," property for the ",(0,r.kt)("inlineCode",{parentName:"p"},"@property")," decorator in your model. Something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  @property({\n    type: 'date',\n    default: () => new Date(),\n  })\n  createDate: string;\n")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"Moment.js")," to format the timestamp. "),(0,r.kt)("p",null,"Updating updatedAt field should be possible via 2 ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Via controller\nWhen a controller function is invoked, the current timestamp could be taken and then injected into the original request query before being passed into the repository function.\nYou can also write your own base class (without the ",(0,r.kt)("inlineCode",{parentName:"li"},"@model")," decorator) and then extend it where necessary."),(0,r.kt)("li",{parentName:"ol"},"Via datasource\nIt is possible to add a new function to the datasource which can mutate the query object and then pass it on.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Question: Kinda new to loopback, I want to learn more about decorators and how to custom loopback logic for more advanced usages, can you walk me through the process of creating custom decorators to create my own "hook" around a controller?')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer:")," A great starting point would be the ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Extending-LoopBack-4.html"},"Extending LoopBack 4")," docs."),(0,r.kt)("p",null,"These concepts are the building blocks of LB4. They serve a specific purpose while following the OOP paradigm.\nIt may look like a lot, but these are essentially the different extension points in LoopBack 4 (hence why LB4 is extremely extensible).\nLet's see if we can break it down:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Decorators (in general)"),"\nThe decorators in LB4 are no different to the standard decorators in TypeScript. They add metadata to classes, methods. properties, or parameters. They don't actually add any functionality, only metadata.\nThink of it like the file properties on your file system: It's not visible when interacting with the file normally, but those who want to access those properties will be able to via a standard interface.\nThere's more benefits to Decorators, but the above explanation is the watered-down gist of it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sequence (in general)"),"\nSequences are a group of Actions. It simply indicates which actions should be used by the server to process the request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sequence Actions (in general)"),'\nSequence Actions (or simply "Actions") are stateless, meaning that they only have the basic concept Elements.\nConverting into Express.js terminology; Think of an Action as an middleware. And think of an Element as the contents that a middleware receives. They work differently, but the high-level idea is about the same.\nThey are unaware of other higher-level concepts such as Controllers, DataSource, Models, etc.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Components (in general)"),"\nWhen adding functionality to LB4, you'll usually need to add a combination of Providers, Booters, etc. This can tedious to manage. Hence, Components are registered once in the LB4 Application, which will then register the other stuff for you.\n",(0,r.kt)("strong",{parentName:"p"},"@authenticate"),"\nAdds authentication metadata."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AuthenticationComponent"),"\nA component to register the necessary artifacts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AuthenticationActionProvider"),'\nThis is a Sequence Action. Essentially, it adds an "authentication" step to the Sequence.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AuthenticationStrategyProvider"),"\nThis is a standard interface that the @loopback/authentiation package understands. Hence, any authentication strategy that adopts this interface can be used in @loopback/authentication. Think of it like the standard interface for Passport.js uses to interface with many different authentication strategies"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question: I have experience with other ActiveRecord implementations. If I was able to utilize TypeORM, this would be more straightforward. You mentioned TypeORM is coming soon as an option for LoopBack 4?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer:")," You can track progress of a proof of concept here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/pull/4794"},"https://github.com/strongloop/loopback-next/pull/4794"),"\nLoopback 4 has been designed to allow flexibility so you can for example use TypeORM if you prefer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question: I am using mysql connector,  I have generated models using LB4 model, But when I migrate the models from loopback to database using ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm run migrate"),". The foreign key constraints were missing in database. I have many.model.ts files. How to have foreign key in database with npm run migrate.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer:")," AFAIK, you\u2019ll need to add some settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@model")," decorator on the FK configuration so that npm run migrate can pick up.\nI\u2019ve tried that for postgresql using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dhmlau/loopback4-coffeeshop/blob/master/src/models/review.model.ts#L4-L15"},"this snippet"),".  Hope it works for you for mysql as well."),(0,r.kt)("p",null,"There is an GitHub issue tracking the work to add constraints in db migration: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/2332"},"https://github.com/strongloop/loopback-next/issues/2332"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question: Can anyone point me in the right direction on how to do loggig in LB4?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer:")," You have lots of options.  If you want to do it inside of the context of the loopback application, with IoC binding, you can create a singleton service provider that returns the log utility of your choice.  For example, with winston:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// services/logger.service.ts\nimport { bind, BindingScope, Provider } from '@loopback/core';\nimport * as winston from 'winston';\nimport * as Transport from 'winston-transport';\n@bind({ scope: BindingScope.SINGLETON })\nexport class LogService implements Provider<winston.Logger> {\n  logger: winston.Logger;\n  constructor() {}\n  value() {\n    if (!this.logger) {\n      const transports: Transport[] = [];\n      transports.push(\n        new winston.transports.File({\n          handleExceptions: true,\n          format:winston.format.json(),\n          filename: '/path/t'\n        }),\n      );\n      this.logger = winston.createLogger({\n        transports,\n        exitOnError: false,\n      });\n    }\n    return this.logger;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"application.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// in constructor\nthis.bind('loggingKey').toProvider(Logger).inScope(BindingScope.SINGLETON);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"controller.ts (also applies for service.ts and others)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class HelloWorldController {\n  @get('/hello-world')\n  public async getHelloWorld(\n    @inject('loggingKey') logger: winston.Logger\n  ) {\n    logger.info('logging to a file!');\n    return 'Hello World';\n  }\n}\n")),(0,r.kt)("p",null,"With binding and injection, you can do some pretty cool stuff, like this extension that gives you a ",(0,r.kt)("inlineCode",{parentName:"p"},"@log(LOG_LEVEL.INFO)")," decorator that can be used to time a request:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/tree/master/examples/log-extension"},"https://github.com/strongloop/loopback-next/tree/master/examples/log-extension")),(0,r.kt)("p",null,"There's also the old school nodejs way of just importing a file that exports a log utility, all set up in the global scope. I believe most tutorials for utilities like winston start with that :)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question: Are there any solution to see the errors of model in the response of the request?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Answer:")," See ",(0,r.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Sequence.html#handling-errors"},"https://loopback.io/doc/en/lb4/Sequence.html#handling-errors")," for reference."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"interested-to-join-our-slack-workspace"},"Interested to Join our Slack Workspace?"),(0,r.kt)("p",null,"Simply click ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw"},"this invitation link")," to join. You can also find more channel details here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/5048"},"https://github.com/strongloop/loopback-next/issues/5048"),"."))}m.isMDXComponent=!0}}]);