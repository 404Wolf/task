"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[195],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return u}});var a=n(3117),o=(n(7294),n(3905));const r={slug:"/faq/",sidebar_position:7},s="FAQ",i={unversionedId:"faq",id:"faq",title:"FAQ",description:"This page contains a list of frequently asked questions about Task.",source:"@site/i18n/ru-RU/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq/",permalink:"/ru-RU/faq/",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/faq/",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",permalink:"/ru-RU/integrations/"},next:{title:"\u0421\u0442\u0430\u0439\u043b\u0433\u0430\u0439\u0434",permalink:"/ru-RU/styleguide/"}},l={},u=[{value:"Why won&#39;t my task update my shell environment?",id:"why-wont-my-task-update-my-shell-environment",level:2},{value:"I can&#39;t reuse my shell in a task&#39;s commands",id:"i-cant-reuse-my-shell-in-a-tasks-commands",level:2},{value:"&#39;x&#39; builtin command doesn&#39;t work on Windows",id:"x-builtin-command-doesnt-work-on-windows",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("p",null,"This page contains a list of frequently asked questions about Task."),(0,o.kt)("h2",{id:"why-wont-my-task-update-my-shell-environment"},"Why won't my task update my shell environment?"),(0,o.kt)("p",null,"This is a limitation of how shells work. Task runs as a subprocess of your current shell, so it can't change the environment of the shell that started it. This limitation is shared by other task runners and build tools too."),(0,o.kt)("p",null,"A common way to work around this is to create a task that will generate output that can be parsed by your shell. For example, to set an environment variable on your shell you can write a task like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'my-shell-env:\n  cmds:\n    - echo "export FOO=foo"\n    - echo "export BAR=bar"\n')),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"eval $(task my-shell-env)")," and the variables ",(0,o.kt)("inlineCode",{parentName:"p"},"$FOO")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$BAR")," will be available in your shell."),(0,o.kt)("h2",{id:"i-cant-reuse-my-shell-in-a-tasks-commands"},"I can't reuse my shell in a task's commands"),(0,o.kt)("p",null,"Task runs each command as a separate shell process, so something you do in one command won't effect any future commands. For example, this won't work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\n\ntasks:\n  foo:\n    cmds:\n      - a=foo\n      - echo $a\n      # outputs \"\"\n")),(0,o.kt)("p",null,"To work around this you can either use a multiline command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\n\ntasks:\n  foo:\n    cmds:\n      - |\n        a=foo\n        echo $a\n      # outputs \"foo\"\n")),(0,o.kt)("p",null,"Or for more complex multi-line commands it is recommended to move your code into a separate file and call that instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\n\ntasks:\n  foo:\n    cmds:\n      - ./foo-printer.bash\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\na=foo\necho $a\n")),(0,o.kt)("h2",{id:"x-builtin-command-doesnt-work-on-windows"},"'x' builtin command doesn't work on Windows"),(0,o.kt)("p",null,"The default shell on Windows (",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"powershell"),") do not have commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"rm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cp")," available as builtins. This means that these commands won't work. If you want to make your Taskfile fully cross-platform, you'll need to work around this limitation using one of the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"{{OS}}")," function to run an OS-specific script."),(0,o.kt)("li",{parentName:"ul"},"Use something like ",(0,o.kt)("inlineCode",{parentName:"li"},'{{if eq OS "windows"}}powershell {{end}}<my_cmd>')," to detect windows and run the command in Powershell directly."),(0,o.kt)("li",{parentName:"ul"},"Use a shell on Windows that supports these commands as builtins, such as ",(0,o.kt)("a",{parentName:"li",href:"https://gitforwindows.org/"},"Git Bash")," or ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"WSL"),".")),(0,o.kt)("p",null,"We want to make improvements to this part of Task and the issues below track this work. Constructive comments and contributions are very welcome!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-task/task/issues/197"},"#197")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mvdan/sh/issues/93"},"mvdan/sh#93")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mvdan/sh/issues/97"},"mvdan/sh#97"))))}c.isMDXComponent=!0}}]);