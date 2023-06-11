"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[795],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={slug:"/experiments/workflow/"},o="Workflow",s={unversionedId:"experiments/workflow",id:"experiments/workflow",title:"Workflow",description:"Experiments are a way for us to test out new features in Task before committing to them in a major release. Because this concept is built around the idea of feedback from our community, we have built a workflow for the process of introducing these changes. This ensures that experiments are given the attention and time that they need and that we are getting the best possible results out of them.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/experiments/workflow.md",sourceDirName:"experiments",slug:"/experiments/workflow/",permalink:"/pt-BR/experiments/workflow/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/experiments/workflow/"},sidebar:"tutorialSidebar",previous:{title:"Experiments",permalink:"/pt-BR/experiments/"},next:{title:"Integrations",permalink:"/pt-BR/integrations/"}},l={},p=[{value:"1. Proposal",id:"1-proposal",level:2},{value:"2. Draft",id:"2-draft",level:2},{value:"3. Candidate",id:"3-candidate",level:2},{value:"4. Stable",id:"4-stable",level:2},{value:"5. Released",id:"5-released",level:2},{value:"Abandoned / Superseded",id:"abandoned--superseded",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"Experiments are a way for us to test out new features in Task before committing to them in a major release. Because this concept is built around the idea of feedback from our community, we have built a workflow for the process of introducing these changes. This ensures that experiments are given the attention and time that they need and that we are getting the best possible results out of them."),(0,r.kt)("p",null,"The sections below describe the various stages that an experiment must go through from its proposal all the way to being released in a major version of Task."),(0,r.kt)("h2",{id:"1-proposal"},"1. Proposal"),(0,r.kt)("p",null,"All experimental features start with a proposal in the form of a GitHub issue. If the maintainers decide that an issue has enough support and is a breaking change or is complex/controversial enough to require user feedback, then the issue will be marked with the ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20proposal-purple",alt:"proposal"})," label. At this point, the issue becomes a proposal and a period of consultation begins. During this period, we request that users provide feedback on the proposal and how it might effect their use of Task. It is up to the discretion of the maintainers to decide how long this period lasts."),(0,r.kt)("h2",{id:"2-draft"},"2. Draft"),(0,r.kt)("p",null,"Once a proposal's consultation ends, a contributor may pick up the work and begin the initial implementation. Once a PR is opened, the maintainers will ensure that it meets the requirements for an experimental feature (i.e. flags are in the right format etc) and merge the feature. Once this code is released, the status will be updated via the ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20draft-purple",alt:"draft"})," label. This indicates that an implementation is now available for use in a release and the experiment is open for feedback."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"During the draft period, major changes to the implementation may be made based on the feedback received from users. There are ",(0,r.kt)("em",{parentName:"p"},"no stability guarantees")," and experimental features may be abandoned ",(0,r.kt)("em",{parentName:"p"},"at any time"),".")),(0,r.kt)("h2",{id:"3-candidate"},"3. Candidate"),(0,r.kt)("p",null,"Once an acceptable level of consensus has been reached by the community and feedback/changes are less frequent/significant, the status may be updated via the ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20candidate-purple",alt:"candidate"})," label. This indicates that a proposal is ",(0,r.kt)("em",{parentName:"p"},"likely")," to accepted and will enter a period for final comments and minor changes."),(0,r.kt)("h2",{id:"4-stable"},"4. Stable"),(0,r.kt)("p",null,"Once a suitable amount of time has passed with no changes or feedback, an experiment will be given the ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20stable-purple",alt:"stable"})," label. At this point, the functionality will be treated like any other feature in Task and any changes ",(0,r.kt)("em",{parentName:"p"},"must")," be backward compatible. This allows users to migrate to the new functionality without having to worry about anything breaking in future releases. This provides the best experience for users migrating to a new major version."),(0,r.kt)("h2",{id:"5-released"},"5. Released"),(0,r.kt)("p",null,"When making a new major release of Task, all experiments marked as ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20stable-purple",alt:"stable"})," will move to ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20released-purple",alt:"released"})," and their behaviors will become the new default in Task. Experiments in an earlier stage (i.e. not stable) cannot be released and so will continue to be experiments in the new version."),(0,r.kt)("h2",{id:"abandoned--superseded"},"Abandoned / Superseded"),(0,r.kt)("p",null,"If an experiment is unsuccessful at any point then it will be given the ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20abandoned-purple",alt:"abandoned"})," or ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/experiment:%20superseded-purple",alt:"superseded"})," labels depending on which is more suitable. These experiments will be removed from Task."))}d.isMDXComponent=!0}}]);