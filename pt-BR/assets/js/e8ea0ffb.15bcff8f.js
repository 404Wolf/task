"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[467],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=s,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2034:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var a=t(3117),s=(t(7294),t(3905));const r={slug:"/styleguide/",sidebar_position:8},o="Guia de estilo",i={unversionedId:"styleguide",id:"styleguide",title:"Guia de estilo",description:"This is the official Task styleguide for Taskfile.yml files. This guide contains some basic instructions to keep your Taskfile clean and familiar to other users.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/styleguide.md",sourceDirName:".",slug:"/styleguide/",permalink:"/pt-BR/styleguide/",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/styleguide/",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Perguntas frequentes",permalink:"/pt-BR/faq/"},next:{title:"Changelog",permalink:"/pt-BR/changelog/"}},l={},c=[{value:"Use <code>Taskfile.yml</code> and not <code>taskfile.yml</code>",id:"use-taskfileyml-and-not-taskfileyml",level:2},{value:"Use the correct order of keywords",id:"use-the-correct-order-of-keywords",level:2},{value:"Use 2 spaces for indentation",id:"use-2-spaces-for-indentation",level:2},{value:"Separate with spaces the mains sections",id:"separate-with-spaces-the-mains-sections",level:2},{value:"Add spaces between tasks",id:"add-spaces-between-tasks",level:2},{value:"Use upper-case variable names",id:"use-upper-case-variable-names",level:2},{value:"Don&#39;t wrap vars in spaces when templating",id:"dont-wrap-vars-in-spaces-when-templating",level:2},{value:"Separate task name words with a dash",id:"separate-task-name-words-with-a-dash",level:2},{value:"Use colon for task namespacing",id:"use-colon-for-task-namespacing",level:2},{value:"Prefer external scripts over complex multi-line commands",id:"prefer-external-scripts-over-complex-multi-line-commands",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"guia-de-estilo"},"Guia de estilo"),(0,s.kt)("p",null,"This is the official Task styleguide for ",(0,s.kt)("inlineCode",{parentName:"p"},"Taskfile.yml")," files. This guide contains some basic instructions to keep your Taskfile clean and familiar to other users."),(0,s.kt)("p",null,"This contains general guidelines, but they don't necessarily need to be strictly followed. Feel free to disagree and proceed differently at some point if you need or want to. Also, feel free to open issues or pull requests with improvements to this guide."),(0,s.kt)("h2",{id:"use-taskfileyml-and-not-taskfileyml"},"Use ",(0,s.kt)("inlineCode",{parentName:"h2"},"Taskfile.yml")," and not ",(0,s.kt)("inlineCode",{parentName:"h2"},"taskfile.yml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\ntaskfile.yml\n\n\n# good\nTaskfile.yml\n")),(0,s.kt)("p",null,"This is important especially for Linux users. Windows and macOS have case insensitive filesystems, so ",(0,s.kt)("inlineCode",{parentName:"p"},"taskfile.yml")," will end up working, even that not officially supported. On Linux, only ",(0,s.kt)("inlineCode",{parentName:"p"},"Taskfile.yml")," will work, though."),(0,s.kt)("h2",{id:"use-the-correct-order-of-keywords"},"Use the correct order of keywords"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"version:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"includes:")),(0,s.kt)("li",{parentName:"ul"},"Configuration ones, like ",(0,s.kt)("inlineCode",{parentName:"li"},"output:"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"silent:"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"method:")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"run:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"vars:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"env:"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"dotenv:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"tasks:"))),(0,s.kt)("h2",{id:"use-2-spaces-for-indentation"},"Use 2 spaces for indentation"),(0,s.kt)("p",null,"This is the most common convention for YAML files, and Task follows it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\ntasks:\n    foo:\n        cmds:\n            - echo 'foo'\n\n\n# good\ntasks:\n  foo:\n    cmds:\n      - echo 'foo'\n")),(0,s.kt)("h2",{id:"separate-with-spaces-the-mains-sections"},"Separate with spaces the mains sections"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\nincludes:\n  docker: ./docker/Taskfile.yml\noutput: prefixed\nvars:\n  FOO: bar\nenv:\n  BAR: baz\ntasks:\n  # ...\n\n\n# good\nversion: '3'\n\nincludes:\n  docker: ./docker/Taskfile.yml\n\noutput: prefixed\n\nvars:\n  FOO: bar\n\nenv:\n  BAR: baz\n\ntasks:\n  # ...\n")),(0,s.kt)("h2",{id:"add-spaces-between-tasks"},"Add spaces between tasks"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  foo:\n    cmds:\n      - echo 'foo'\n  bar:\n    cmds:\n      - echo 'bar'\n  baz:\n    cmds:\n      - echo 'baz'\n\n\n# good\nversion: '3'\n\ntasks:\n  foo:\n    cmds:\n      - echo 'foo'\n\n  bar:\n    cmds:\n      - echo 'bar'\n\n  baz:\n    cmds:\n      - echo 'baz'\n")),(0,s.kt)("h2",{id:"use-upper-case-variable-names"},"Use upper-case variable names"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\nvars:\n  binary_name: myapp\n\ntasks:\n  build:\n    cmds:\n      - go build -o {{.binary_name}} .\n\n\n# good\nversion: '3'\n\nvars:\n  BINARY_NAME: myapp\n\ntasks:\n  build:\n    cmds:\n      - go build -o {{.BINARY_NAME}} .\n")),(0,s.kt)("h2",{id:"dont-wrap-vars-in-spaces-when-templating"},"Don't wrap vars in spaces when templating"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  greet:\n    cmds:\n      - echo '{{ .MESSAGE }}'\n\n\n# good\nversion: '3'\n\ntasks:\n  greet:\n    cmds:\n      - echo '{{.MESSAGE}}'\n")),(0,s.kt)("p",null,"This convention is also used by most people for any Go templating."),(0,s.kt)("h2",{id:"separate-task-name-words-with-a-dash"},"Separate task name words with a dash"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  do_something_fancy:\n    cmds:\n      - echo 'Do something'\n\n\n# good\nversion: '3'\n\ntasks:\n  do-something-fancy:\n    cmds:\n      - echo 'Do something'\n")),(0,s.kt)("h2",{id:"use-colon-for-task-namespacing"},"Use colon for task namespacing"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# good\nversion: '3'\n\ntasks:\n  docker:build:\n    cmds:\n      - docker ...\n\n  docker:run:\n    cmds:\n      - docker-compose ...\n")),(0,s.kt)("p",null,"This is also done automatically when using included Taskfiles."),(0,s.kt)("h2",{id:"prefer-external-scripts-over-complex-multi-line-commands"},"Prefer external scripts over complex multi-line commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  build:\n    cmds:\n      - |\n        for i in $(seq 1 10); do\n          echo $i\n          echo \"some other complex logic\"\n        done'\n\n# good\nversion: '3'\n\ntasks:\n  build:\n    cmds:\n      - ./scripts/my_complex_script.sh\n")))}p.isMDXComponent=!0}}]);