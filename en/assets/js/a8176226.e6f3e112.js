"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[4407],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=r.createContext({}),u=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(i.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,i=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),d=u(t),m=a,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(k,l(l({ref:e},c),{},{components:t})):r.createElement(k,l({ref:e},c))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s.mdxType="string"==typeof n?n:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8608:function(n,e,t){t.r(e),t.d(e,{assets:function(){return i},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=t(3117),a=(t(7294),t(3905));const o={title:"2\uc7a5 \uace0\uacc4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8"},l=void 0,s={unversionedId:"books/functional-programming-in-javascript/02",id:"books/functional-programming-in-javascript/02",title:"2\uc7a5 \uace0\uacc4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8",description:"- \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ud568\uc218\ud615 \uc5b8\uc5b4\ub85c \uc801\ud569\ud55c \uc774\uc720",source:"@site/docs/books/functional-programming-in-javascript/02.md",sourceDirName:"books/functional-programming-in-javascript",slug:"/books/functional-programming-in-javascript/02",permalink:"/en/docs/books/functional-programming-in-javascript/02",draft:!1,editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/docs/books/functional-programming-in-javascript/02.md",tags:[],version:"current",frontMatter:{title:"2\uc7a5 \uace0\uacc4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8"},sidebar:"books",previous:{title:"1\uc7a5 \ud568\uc218\ud615 \uae38\ub4e4\uc774\uae30",permalink:"/en/docs/books/functional-programming-in-javascript/01"},next:{title:"3\uc7a5 \uc790\ub8cc\uad6c\uc870\ub294 \uc801\uac8c, \uc77c\uc740 \ub354 \ub9ce\uc774",permalink:"/en/docs/books/functional-programming-in-javascript/03"}},i={},u=[{value:"2.1 \uc65c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc778\uac00?",id:"21-\uc65c-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc778\uac00",level:2},{value:"2.2 \ud568\uc218\ud615 \ub300 \uac1d\uccb4\uc9c0\ud5a5",id:"22-\ud568\uc218\ud615-\ub300-\uac1d\uccb4\uc9c0\ud5a5",level:2},{value:"2.2.1 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\uc758 \uc0c1\ud0dc \uad00\ub9ac",id:"221-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\uac1d\uccb4\uc758-\uc0c1\ud0dc-\uad00\ub9ac",level:3},{value:"2.2.2 \uac1d\uccb4\ub97c \uac12\uc73c\ub85c \ucde8\uae09",id:"222-\uac1d\uccb4\ub97c-\uac12\uc73c\ub85c-\ucde8\uae09",level:3},{value:"2.5 \ub9c8\uce58\uba70",id:"25-\ub9c8\uce58\uba70",level:2}],c={toc:u};function p(n){let{components:e,...o}=n;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\uc774 \uc7a5\uc758 \ub0b4\uc6a9",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 \ud568\uc218\ud615 \uc5b8\uc5b4\ub85c \uc801\ud569\ud55c \uc774\uc720"),(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ub2e4\uc911 \ud328\ub7ec\ub2e4\uc784 \uac1c\ubc1c\uc774 \uac00\ub2a5\ud55c \uc5b8\uc5b4"),(0,a.kt)("li",{parentName:"ul"},"\ubd88\ubcc0\uc131 \ubc0f \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc815\ucc45"),(0,a.kt)("li",{parentName:"ul"},"\uace0\uacc4\ud568\uc218\uc640 \uc77c\uae09 \ud568\uc218"),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub85c\uc800\uc640 \uc2a4\ucf54\ud504 \uac1c\ub150"),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub85c\uc800\uc758 \ud65c\uc6a9"))),(0,a.kt)("blockquote",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"[\ub9cc\uc57d \ud5e4\ubc0d\uc6e8\uc774\uac00 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \ucf54\ub529\ud55c\ub2e4\uba74]","(\ud55c\ubc0f\ubbf8\ub514\uc5b4, 2016)"),(0,a.kt)("div",{style:{textAlign:"center"}},'"\uc790\uc5f0\uc5b4\ub294 \uc9c0\ubc30\uc801\uc778 \ud328\ub7ec\ub2e4\uc784\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4. \uac1c\ubc1c\uc790\ub4e4\uc740 \uc808\ucc28\uc801, \ud568\uc218\ud615, \uac1d\uccb4\uc9c0\ud5a5\ud615 \uc811\uadfc \ubc29\ubc95\uc774 \ub4e4\uc5b4 \uc788\ub294 \uc190\uac00\ubc29\uc5d0\uc11c \uc801\uc808\ud788 \uc11e\uc5b4 \uc4f0\uba74 \ub429\ub2c8\ub2e4."')),(0,a.kt)("h2",{id:"21-\uc65c-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc778\uac00"},"2.1 \uc65c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc778\uac00?"),(0,a.kt)("p",null,"\uc774\uc720\ub294 \ud3b8\uc7ac\uc131(\uc5b4\ub514\uc5d0\ub108 \uc788\uc74c) \ub54c\ubb38\uc785\ub2c8\ub2e4. \uac00\uc7a5 \ub110\ub9ac \uc4f0\uc774\ub294 \uc5b8\uc5b4\uc774\uc790. \uc6f9 \uc138\uc0c1\uc744 \ub300\ud45c\ud558\ub294 \ub9f9\uc8fc \uc5b8\uc5b4\uc774\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uad6c\ubb38\uc740 C \uc5b8\uc5b4\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc \ub9ac\uc2a4\ud504, \uc2a4\ud0b4 \uac19\uc740 \ud568\uc218\ud615 \uc5b8\uc5b4\uc758 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \ub9ac\uc2a4\ud504, \uc2a4\ud0b4\uc758 \uace0\uacc4\ud568\uc218, \ud074\ub85c\uc800, \ubc30\uc5f4 \ub9ac\ud130\ub7f4 \ub4f1 \uacf5\ud1b5\uc810\uc740 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uac00 FP \uae30\ubc95\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ud0c1\uc6d4\ud55c \ud50c\ub7ab\ud3fc\uc73c\ub85c \ubc1c\ub3cb\uc6c0\ud558\ub294 \ub370 \ucd08\uc11d\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud568\uc218\ub294 \uc8fc\uc694 ",(0,a.kt)("strong",{parentName:"p"},"\uc791\uc5c5 \ub2e8\uc704"),"\ub85c\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uac8c \ud560 \uc77c\uc744 \uc2dc\ud0a4\ub294 \uc5ed\ud560\ubfd0\ub9cc \uc544\ub2c8\ub77c \uac1d\uccb4 \uc815\uc758, \ubaa8\ub4c8 \uc0dd\uc131, \uc774\ubca4\ud2b8 \ucc98\ub9ac \ub4f1\uc758 \ucc45\uc784\ub3c4 \ub9e1\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5ec\ub7ec \uac00\uc9c0 \uac15\ub825\ud55c \ud568\uc218\ud615 \uc7a5\uce58\uac00 \ud0d1\uc7ac\ub418\uae34 \ud588\uc9c0\ub9cc, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc5b4\ub514\uae4c\uc9c0\ub098 \ud568\uc218\ud615\uc778 \ub3d9\uc2dc\uc5d0 \uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4\ub77c\ub294 \uc0ac\uc2e4\uc744 \uba85\uc2ec\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"22-\ud568\uc218\ud615-\ub300-\uac1d\uccb4\uc9c0\ud5a5"},"2.2 \ud568\uc218\ud615 \ub300 \uac1d\uccb4\uc9c0\ud5a5"),(0,a.kt)("p",null,"\uc5b4\ub5a4 \ud559\uc2b5 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc758 Student \uac1d\uccb4\ub97c \uac04\ub2e8\ud788 \ubaa8\ud615\ud654\ud55c\ub2e4\uace0 \ud569\uc2dc\ub2e4. Student\ub294 \ud074\ub798\uc2a4\ub098 \ud615\uc2dd \uacc4\uce35 \uad00\uc810\uc5d0\uc11c \uc131, \uc774\ub984, \uc8fc\uc18c \uac19\uc740 \uae30\ubcf8 \uc18d\uc131\uc744 \ud3ec\ud568\ud55c Person\uc758 \ud558\uc704\ud615\uc774\ub77c\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("admonition",{title:"\uac1d\uccb4\uc9c0\ud5a5 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\uac1d\uccb4 \uac04\uc758 \uad00\uacc4\ub97c ",(0,a.kt)("strong",{parentName:"p"},"\ud558\uc704\ud615")," \ud639\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud30c\uc0dd\uc131"),"\uc774\ub77c\uace0 \ud45c\ud604\ud558\ub294 \uac74, \uc774\ub4e4 \uc0ac\uc774\uc5d0 \uc874\uc7ac\ud558\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785 \uad00\uacc4\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uac1d\uccb4\uc9c0\ud5a5 \uc5b8\uc5b4\uc9c0\ub9cc \uc790\ubc14 \ub4f1 \ud0c0 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ub2f9\uc5f0\ud55c \ud074\ub798\uc2a4 \uc0c1\uc18d\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"admonition"},"ES6\ubd80\ud130\ub294 \uac1d\uccb4 \uac04 \ud504\ub85c\ud1a0\ud0c0\uc785 \ub9c1\ud06c\ub97c class\ub098 extends\uac19\uc774 \ubcf4\uae30 \uc88b\uc740 \ud0a4\uc6cc\ub4dc\ub85c \uc124\uc815 \uac00\ub2a5\ud558\uac8c \ub2e8\uc7a5\ud588\uc2b5\ub2c8\ub2e4. \uc9c1\uad00\uc801 \ucf54\ub4dc\ub85c \uac1d\uccb4 \uc0c1\uc18d\uc744 \ud45c\ud604\ud55c \uc758\ub3c4\ub294 \uc88b\uc9c0\ub9cc, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud504\ub85c\ud1a0\ud0c0\uc785 \uccb4\uc81c\uc758 \uc9c4\uc815\ud55c \uc791\ub3d9 \ubc29\uc2dd\uacfc \uac15\ub825\ud568\uc744 \uc560\uc368 \uc228\uae30\ub294 \uaf34\uc774 \ub418\uace0 \ub9d0\uc558\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ucd94\uac00\ud560 \uae30\ub2a5\uc774 \uc788\uc73c\uba74 Student \ubcf4\ub2e4 \ub354 \uad6c\uccb4\ud654\ud55c \ud615\uc2dd, \uc774\ub97c\ud14c\uba74 CollegeStudent \uac19\uc740 \ud615\uc2dd\uc744 \ub9cc\ub4e4\uc5b4 \ubd99\uc774\uba74 \ub429\ub2c8\ub2e4. \uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub7a8\uc758 \ud575\uc2ec\uc774 \uc0c8\ub85c\uc6b4 \ud30c\uc0dd \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uc5ec \ucf54\ub4dc\ub97c \uc7ac\uc0ac\uc6a9\ud558\ub294 \uac83\uc774\uc9c0\uc694. \ubb38\uc81c\ub294 \ubaa8\ub4e0 \ud558\uc704\ud615\uc5d0 \uc801\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\ub294 \uae30\uc874 \uac1d\uccb4\uc5d0 \ucd94\uac00\ud560 \ub54c\uc785\ub2c8\ub2e4. firstname, lastname\uc740 Person\uacfc \ud558\uc704\ud615 \ubaa8\ub450 \uc758\ubbf8\uac00 \uc788\uc9c0\ub9cc, workAddress\ub294 Student\ubcf4\ub2e4\ub294 (Person\uc758 \ud30c\uc0dd\ud615\uc778) Employee \uac1d\uccb4 \uc804\uc6a9 \uc18d\uc131\uc785\ub2c8\ub2e4. \uac1d\uccb4\uc9c0\ud5a5\uacfc \ud568\uc218\ud615\uc758 \uac00\uc7a5 \uc911\uc694\ud55c \ucc28\uc774\uc810\uc740 \ubc14\ub85c \uc774\ub7f0 \ub370\uc774\ud130(\uac1d\uccb4 \uc18d\uc131)\uc640 \uae30\ub2a5(\ud568\uc218)\uc744 \uc870\uc791\ud558\ub294 \ubc29\ubc95\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uba85\ub839\ud615 \ucf54\ub4dc\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uac1d\uccb4\uc9c0\ud5a5 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc778\uc2a4\ud134\uc2a4 \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \uac00\ubcc0 \uc0c1\ud0dc\ub97c \ub178\ucd9c\ud558\uace0 \uc870\uc791\ud560 \uc218 \uc788\ub3c4\ub85d, \uac1d\uccb4 \uae30\ubc18\uc758 \ucea1\uc290\ud654\uc5d0 \uc9c0\ub098\uce58\uac8c \uc758\uc874\ud55c \ucc44 \uac00\ubcc0 \uc0c1\ud0dc\uc758 \ubb34\uacb0\uc131\uc744 \uc720\uc9c0\ud569\ub2c8\ub2e4. \uacb0\uad6d \uac1d\uccb4\uc758 \ub370\uc774\ud130\uc640 \uc798\uac8c \ub098\ub25c \uae30\ub2a5\uc774 \ub2e8\ub2e8\ud788 \uc720\ucc29\ub418\uc5b4 \uc751\uc9d1\ub3c4\uac00 \ub192\uc740 \ud328\ud0a4\uc9c0\uac00 \ud615\uc131\ub429\ub2c8\ub2e4. \uacb0\uad6d \uac1d\uccb4\uc758 \ub370\uc774\ud130\uc640 \uc798\uac8c \ub098\ub25c \uae30\ub2a5\uc774 \ub2e8\ub2e8\ud788 \uc720\ucc29\ub418\uc5b4 \uc751\uc9d1\ub3c4\uac00 \ub192\uc740 \ud328\ud0a4\uc9c0\uac00 \ud615\uc131\ub429\ub2c8\ub2e4. \uc774\ub294 \uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub7a8\uc774 \ucd94\uad6c\ud558\ub294 \ubaa9\uc801\uc774\uc790, \ubaa8\ub4e0 \ucd94\uc0c1\ud654\uc758 \uc8fc\uc694 \ud615\ud0dc\uac00 \uac1d\uccb4\uc778 \uc774\uc720\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud55c\ud3b8, \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub7a8\uc740 \ud638\ucd9c\uc790\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uc228\uae38 \ud544\uc694 \uc5c6\uc774 \uc18c\uaddc\ubaa8\uc758, \uc544\uc8fc \ub2e8\uc21c\ud55c \uc790\ub8cc\ud615\ub9cc\uc744 \ub300\uc0c1\uc73c\ub85c \uc6c0\uc9c1\uc785\ub2c8\ub2e4. \ub9cc\uc0ac\uac00 \ubd88\ubcc0\uc774\ub2c8 \uc5bc\ub9c8\ub4e0\uc9c0 \uac1d\uccb4\ub97c \uc9c1\uc811 \ub9cc\uc838\ub3c4 \ub418\uc9c0\ub9cc, \uac1d\uccb4 \uc2a4\ucf54\ud504 \ubc16\uc5d0 \uc704\uce58\ud55c \uc77c\ubc18\uc801\uc778 \ud568\uc218\ub97c \uac70\uce58\ub294 \ud3b8\uc774 \uc88b\uaca0\uc8e0? \ud55c\ub9c8\ub514\ub85c \ub370\uc774\ud130\uc640 \uae30\ub2a5\uc744 \ub290\uc2a8\ud558\uac8c \uacb0\ud569\ud558\ub294 \uac81\ub2c8\ub2e4. \ud568\uc218\ud615 \ucf54\ub4dc\ub294 \uc798\uac8c \ub098\ub25c \uc778\uc2a4\ud134\uc2a4 \uba54\uc18c\ub4dc \ub300\uc2e0 \uc5ec\ub7ec \uc790\ub8cc\ud615\uc5d0 \ub450\ub8e8 \uc801\uc6a9 \uac00\ub2a5\ud558\uace0 \uad75\uac8c \ub098\ub25c \uc5f0\uc0b0\uc5d0 \ub354 \uc758\uc874\ud569\ub2c8\ub2e4. \ud568\uc218\ub294 \ud568\uc218\ud615 \ud328\ub7ec\ub2e4\uc784\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\uc8fc\ub41c \ucd94\uc0c1\ud654 \ud615\ud0dc"),"\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(965).Z,width:"1169",height:"633"})),(0,a.kt)("p",null,"\uc2e4\uc81c\ub85c \uc774 \uadf8\ub798\ud504\uc758 \uad50\ucc28\uc810\uc5d0\uc11c \ub450 \ud328\ub7ec\ub2e4\uc784\uc744 \ud568\uaed8 \ud65c\uc6a9\ud55c, \ucd5c\uace0\uc758 \uac1d\uccb4\uc9c0\ud5a5 \ucf54\ub4dc\ub97c \ubcf8 \uc801\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uac8c \ud558\ub824\uba74 \uac1d\uccb4\ub97c \ubd88\ubcc0 \uac1c\uccb4(entity)\ub098 \ubd88\ubcc0 \uac12\uc73c\ub85c \ubc14\ub77c\ubcf4\uace0 \uae30\ub2a5\uc744 \ud568\uc218\ub85c \ubd84\ub9ac\ud558\uc5ec \uac1d\uccb4 \ub0b4\uc5d0\uc11c \uc791\ub3d9\ub418\uac8c\ub054 \ud574\uc57c \ud569\ub2c8\ub2e4. Person \uac1d\uccb4\ub97c \uc608\ub85c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"get fullname() {\n  return [this._firstname, this._lastname].join(' ');\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uba54\uc11c\ub4dc\ub294 \ub300\uac8c this\ub85c \uac1d\uccb4 \uc0c1\ud0dc\uc5d0 \uc811\uadfc\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var fullname = person => [person.firstname, person.lastname].join(' ');\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"this\ub294 \uc0ac\uc2e4\uc0c1 \uc804\ub2ec\ubc1b\uc740 \uac1d\uccb4\ub85c \uad50\uccb4\ub429\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ub3d9\uc801 \ud615\uc2dd \uc5b8\uc5b4\ub77c\uc11c 2-2\uc5d0\uc11c \ubcf4\ub2e4\uc2dc\ud53c fullname()\uc740 Person\uc758 \ubaa8\ub4e0 \ud30c\uc0dd\ud615 \uac1d\uccb4(\ub610\ub294 \uc5ec\uae30\uc120 firstname, lastname \uc18d\uc131\uc744 \uc9c0\ub2cc \uac1d\uccb4 \uc804\ubd80)\uc5d0\uc11c \uc798 \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \uc77c\ubc18\ud654\ud55c \ub2e4\ud615\uc131 \ud568\uc218\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub2e4\uc2dc \ub9d0\ud574, \uae30\ubc18\ud615(Person)\uc744 \uac00\ub9ac\ud0a4\ub294 \ub808\ud37c\ub7f0\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \ud568\uc218\ub77c\uba74 \ud30c\uc0dd\uc131(Student, CollegeStudent) \uac1d\uccb4\uc5d0\uc11c\ub3c4 \ubb38\uc81c\uc5c6\uc774 \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(3625).Z,width:"1254",height:"878"})),(0,a.kt)("p",null,"[\uadf8\ub9bc 2-2]","\uc5d0\uc11c \ubcf4\ub2e4\uc2dc\ud53c, fullname()\uc744 \ub3c5\ub9bd\ud615 \ud568\uc218\ub85c \ubd84\ub9ac\ud558\uba74 \uac1d\uccb4 \ub370\uc774\ud130\ub97c this\ub85c \uc811\uadfc\ud560 \uc774\uc720\uac00 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4. this\ub97c \uc4f0\uba74 \uba54\uc11c\ub4dc \uc2a4\ucf54\ud504 \ubc16\uc5d0 \uc704\uce58\ud55c \uc778\uc2a4\ud134\uc2a4 \uc218\uc900\uc758 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc5b4\uc11c \ubd80\uc218\ud6a8\uacfc\ub97c \uc57c\uae30\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c FP\ub85c \uac1c\ubc1c\ud55c \ucf54\ub4dc\ub294 \uac1d\uccb4 \ub370\uc774\ud130\uac00 \ud2b9\uc815 \ucf54\ub4dc\uc5d0 \uc885\uc18d\ub418\uc9c0 \uc54a\uc544 \uc7ac\uc0ac\uc6a9\uc131, \uc720\uc9c0\ubcf4\uc218\uc131\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud30c\uc0dd\uc131\uc744 \uc5ec\ub7ff \ub9cc\ub4e4\uc9c0 \uc54a\uace0\ub3c4 \ud568\uc218\ub97c \ub2e4\ub978 \ud568\uc218\uc758 \uc778\uc218\ub85c \uc804\ub2ec\ud558\uc5ec \ud568\uc218\uc758 \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uba3c\uc800 Person \ud074\ub798\uc2a4\uc640 \ud558\uc704 \ud074\ub798\uc2a4 Student\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\ucf54\ub4dc 2-1 Person/Student \ud074\ub798\uc2a4 \uc815\uc758"',title:'"\ucf54\ub4dc',"2-1":!0,"Person/Student":!0,"\ud074\ub798\uc2a4":!0,'\uc815\uc758"':!0},"class Person {\n  constructor(firstname, lastname, ssn) {\n    this._firstname = firstname;\n    this._lastname = lastname;\n    this.ssn = ssn;\n    this._address = null;\n    this._birthYear = null;\n  }\n\n  get ssn() {\n    return this._ssn;\n  }\n\n  get firstname() {\n    return this._firstname;\n  }\n\n  get lastname() {\n    return this._lastname;\n  }\n\n  get address() {\n    return this._address;\n  }\n\n  get birthYear() {\n    return this._birthYear;\n  }\n\n  // \uc138\ud130 \uba54\uc11c\ub4dc\ub294 \uac1d\uccb4 \ubcc0\uc774\ub97c \uc9c0\uc6d0\ud558\uae30 \uc704\ud574\uc11c\uac00 \uc544\ub2c8\ub77c, \uc0dd\uc131\uc790\ub97c \uae38\uac8c \uc4f0\uc9c0 \uc54a\uace0\ub3c4 \uc18d\uc131\uc774 \ub2e4\ub978 \uac1d\uccb4\ub97c \uc27d\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uac1d\uccb4\ub294 \uc77c\ub2e8 \uc0dd\uc131\ub418\uace0 \ub0b4\uc6a9\uc774 \ucc44\uc6cc\uc9c0\uba74 \uc808\ub300\ub85c \uc0c1\ud0dc\uac00 \ubc14\ub00c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4(\uc774 \ubb38\uc81c\ub294 \uc774 \uc7a5 \ud6c4\ubc18\ubd80\uc5d0\uc11c \ub2e4\ub8f9\ub2c8\ub2e4).\n  set birthYear(year) {\n    this._birthYear = year;\n  }\n\n  set address(addr) {\n    this._address = addr;\n  }\n\n  toString() {\n    return `Person(${this._firstname}, ${this._lastname})`;\n  }\n}\n\nclass Student extends Person {\n  constructor(firstname, lastname, ssn, school) {\n    super(firstname, lastname, ssn);\n    this._school = school;\n  }\n\n  get school() {\n    return this._school;\n  }\n}\n")),(0,a.kt)("p",null,"\uc5b4\ub5a4 \uc0ac\ub78c(Person)\uacfc \uac70\uc8fc \uad6d\uac00\uac00 \uac19\uc740 \uc0ac\ub78c\uc744 \uc804\ubd80 \ucc3e\uace0, \uc5b4\ub5a4 \ud559\uc0dd(Student)\uacfc \uac70\uc8fc \uad6d\uac00\uc640 \ub2e4\ub2c8\ub294 \ud559\uad50\uac00 \ubaa8\ub450 \uac19\uc740 \ud559\uc0dd\uc744 \uc804\ubd80 \ucc3e\ub294 \ucf54\ub4dc\ub97c \uac1c\ubc1c\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uac1d\uccb4\uc9c0\ud5a5 \uc2a4\ud0c0\uc77c\ub85c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 this\uc640 super\ub85c \ud55c \uac1d\uccb4\uc640 \uadf8 \ubd80\ubaa8 \uac1d\uccb4\uac00 \ub2e8\ub2e8\ud788 \uacb0\ud569\ub41c \ucf54\ub4dc\uac00 \ub418\uaca0\uc8e0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Person \ud074\ub798\uc2a4\npersonInSameCountry(friends) {\n  var result = [];\n  for(let idx in friends) {\n    var friend = friends[idx];\n    if (this.address.country === friend.address.country) {\n      result.push(friend);\n    }\n  }\n  return result;\n}\n\n// Student \ud074\ub798\uc2a4\nstudentsInSameCountryAndSchool(friends) {\n  var closeFriends = super.peopleInSameCountry(friends);\n  var result = [];\n  for (let idx in closeFriends) {\n    var friend = closeFriends[idx];\n    if (friends.school === this.school) {\n      result.push(friend);\n    }\n  }\n  return result;\n}\n")),(0,a.kt)("p",null,"\ud55c\ud3b8, \uc21c\uc218\uc131\uacfc \ucc38\uc870 \ud22c\uba85\uc131\uc5d0 \uae30\ubc18\uc744 \ub454 FP \ubc29\uc2dd\uc744 \ub530\ub974\uba74, \uc0c1\ud0dc\uc640 \uae30\ub2a5\uc744 \ucca0\uc800\ud788 \ubd84\ub9ac\ud55c \ub2e4\uc74c \uc774\ub4e4\uc744 \ub2e4\uc2dc \uc870\ud569\ud55c \uc0c8\ub85c\uc6b4 \ud568\uc218\ub85c \uc5f0\uc0b0\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub2e4 \ubcf4\uba74 \ub370\uc774\ud130 \uc800\uc7a5\ub9cc\uc744 \ub9e1\uc740 \ub2e8\uc21c \uac1d\uccb4\uc640 \uc774\ub7f0 \uac1d\uccb4\ub97c \uc778\uc790\ub85c \ubc1b\uc544 \uc791\ub3d9\ud558\ub294 \ubc94\uc6a9 \ud568\uc218\ub97c \ub9cc\ub4e4 \uc218 \uc788\uace0, \ub2e4\uc2dc \uc774\ub4e4\uc744 \ud569\uc131\ud558\uc5ec \uc6d0\ud558\ub294 \uad6c\uccb4\uc801\uc778 \uae30\ub2a5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. '\ud569\uc131'\uc740 \ud568\uc218\ud615 \ud328\ub7ec\ub2e4\uc784\uc744 \ubd80\uac01\ud558\ub294 \ub610 \ub2e4\ub978 \uadfc\ubcf8\uc801\uc778 \ud2b9\uc9d5\uc785\ub2c8\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mock \ub370\uc774\ud130"',title:'"mock','\ub370\uc774\ud130"':!0},"var curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn State');\ncurry.address = new Address('US');\n\nvar turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton');\nturing.address = new Address('England');\n\nvar church = new Student('Alonzo', 'Church', '333-33-333', 'Princeton');\nchurch.address = new Address('US');\n\nvar kleene = new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton');\nkleene.address = new Address('US');\n")),(0,a.kt)("p",null,"\uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub7a8\uc740 Student\uc758 \uba54\uc11c\ub4dc\ub85c \uac19\uc740 \ud559\uad50\ub97c \ub2e4\ub2c8\ub294 \ud559\uc0dd\uc744 \ucc3e\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"church.studentsInSameCountryAndSchool([curry, turing, kleene]);\n// => [kleene]\n")),(0,a.kt)("p",null,"\ubc18\uba74, \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub7a8\uc740 \ubb38\uc81c\ub97c \uc791\uc740 \ud568\uc218\ub4e4\ub85c \uc798\uac8c \ub098\ub215\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var selector = (country, school) => \n  (student) =>\n    student.address.country === country &&\n    student.school === school;\n\nvar findStudentsBy = (friends, selector) => friends.filter(selector);\n\nfindStudentsBy([curry, turing, church, kleene], selector('US', 'Princeton')); // -> [church, kleene]\n")),(0,a.kt)("p",null,"\uac1d\uccb4\uc9c0\ud5a5\uc740 \ub370\uc774\ud130\uc640 \ub370\uc774\ud130 \uad00\uacc4\uc758 \ubcf8\uc9c8\uc5d0 \ucd08\uc810\uc744 \ub450\ub294 \ubc18\uba74, \ud568\uc218\ud615\uc758 \uad00\uc2ec\uc0ac\ub294 \ud574\uc57c \ud560 \uc77c, \uc989 \uae30\ub2a5\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\ub978 \ud328\ub7ec\ub2e4\uc784\uc774\uc9c0\ub9cc \ub458\uc744 \ubaa8\uc73c\uba74 \uac15\ub825\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud55c\ud3b8\uc73c\ub860 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud558\ub294 \ud615\uc2dd \uac04\uc758 \uad00\uacc4\uac00 \uc790\uc5f0\uc2a4\ub7ec\uc6b4 \ud48d\uc131\ud55c \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \uc190\uc5d0 \ub123\uace0, \ub2e4\ub978 \ud55c\ud3b8\uc73c\ub860 \uc774\ub4e4 \ud615\uc2dd\uc744 \uac00\uc9c0\uace0 \uc5b4\ub5a4 \uc77c\uc744 \ud560 \uc218 \uc788\ub294 \uc21c\uc218\ud568\uc218\uae4c\uc9c0 \uac70\uba38\uc958 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"221-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8-\uac1d\uccb4\uc758-\uc0c1\ud0dc-\uad00\ub9ac"},"2.2.1 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\uc758 \uc0c1\ud0dc \uad00\ub9ac"),(0,a.kt)("p",null,"\ud504\ub85c\uadf8\ub7a8\uc758 ",(0,a.kt)("strong",{parentName:"p"},"\uc0c1\ud0dc"),"\ub780 \uc5b4\ub290 \ud55c \uc2dc\uc810\uc5d0 \ucc0d\uc740 \ubaa8\ub4e0 \uac1d\uccb4\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\uc758 \uc2a4\ub0c5\uc0f7\uc785\ub2c8\ub2e4. \uac1d\uccb4 \uc0c1\ud0dc\ub97c \ubcf4\ud638\ud558\ub294 \uce21\uba74\uc5d0\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 \ucd5c\uc545\uc758 \uc5b8\uc5b4 \uc911 \ud558\ub0a9\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uac1d\uccb4\ub294 \ub108\ubb34\ub098 \ub3d9\uc801\uc774\uc5b4\uc11c \uc5b8\uc81c\uac74 \uc18d\uc131\uc744 \ucd94\uac00, \uc0ad\uc81c, \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc774\ub7f0 \ud2b9\uc131 \ub355\ubd84\uc5d0 \uc18d\uc131\uc744 \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ud558\ub294 \ub4f1 \uac1c\ubc1c\uc790\ub294 \uc5ec\ub7ec \uac00\uc9c0 \uc794\uc7ac\uc8fc\ub97c \ubd80\ub9b4 \uc790\uc720\uac00 \uc788\uc9c0\ub9cc, \uc911\ub300\ud615 \uaddc\ubaa8\uc758 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c\ub294 \uc790\uce6b \ub3c4\uc800\ud788 \uad00\ub9ac \uc548\ub418\ub294 \ucf54\ub4dc\ub85c \ubc1c\uc804\ud560 \uc18c\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucf54\ub4dc\ub97c \uc21c\uc218\ud568\uc218\ub85c \uc791\ub3d9\uc2dc\ud0a4\uba74 \uc774\ud574/\uad00\ub9ac\ud558\uae30\uac00 \ub354 \uc27d\ub2e4\uace0 \ud588\uc2b5\ub2c8\ub2e4. \ubd88\ubcc0 \uae30\ub2a5\uc744 \uc9c0\ub2cc \ubd88\ubcc0 \uac1d\uccb4\ub294 \uc21c\uc218 \uac1d\uccb4\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8\uc21c \uac1d\uccb4\uc5d0 \ud588\ub358 \uac83\ucc98\ub7fc \ud568\uc218\uc5d0\ub3c4 \uac19\uc740 \ucd94\ub860\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud568\uc218\ud615 \uc5b8\uc5b4\ub85c \uc4f8 \uacbd\uc6b0 \uc0c1\ud0dc \uad00\ub9ac\ub294 \uc544\uc8fc \uc911\ucc28\ub300\ud55c \ubb38\uc81c\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"222-\uac1d\uccb4\ub97c-\uac12\uc73c\ub85c-\ucde8\uae09"},"2.2.2 \uac1d\uccb4\ub97c \uac12\uc73c\ub85c \ucde8\uae09"),(0,a.kt)("p",null,"\ubd88\ubcc0\uc131\uc744 \ubc14\ud0d5\uc73c\ub85c \uc0ac\uace0\ud558\ub824\uba74 \uc0ac\uc2e4\uc0c1 \ubaa8\ub4e0 \uac1d\uccb4\ub97c \uac12\uc73c\ub85c \ucde8\uae09\ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub798\uc57c\ub9cc \uac1d\uccb4\uac00 \ub3c4\uc911\uc5d0 \ubc14\ub014\uc9c0 \ubaa8\ub978\ub2e4\ub294 \ubd88\uc548\uac10\uc744 \uac16\uc9c0 \uc54a\uace0 \uac1d\uccb4\ub97c \uc8fc\uace0\ubc1b\ub294 \ud568\uc218\ub97c \uad6c\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"const \ub9cc\ub4dc\ub85c\ub294 FP\uac00 \uc694\uad6c\ud558\ub294 \uc218\uc900\uc758 \ubd88\ubcc0\uc131\uc744 \uc2e4\ud604\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \ub354 \uc5c4\uaca9\ud55c \ubd88\ubcc0\uc131 \uc815\ucc45\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \ubcc0\uc774\ub97c \ubc29\uc9c0\ud560 \ubaa9\uc801\uc73c\ub85c \ucea1\uc290\ud654\ub3c4 \uc88b\uc740 \uc804\ub7b5\uc774\uace0, \uac1d\uccb4 \uad6c\uc870\uac00 \ub2e8\uc21c\ud558\uba74 ",(0,a.kt)("strong",{parentName:"p"},"\uac12 \uac1d\uccb4 \ud328\ud134"),"\ub3c4 \uad1c\ucc2e\uc740 \ubc29\uc548\uc785\ub2c8\ub2e4. \uac12 \uac1d\uccb4\ub294 \uac1d\uccb4\uc758 \ub3d9\ub4f1\uc131\uc774 \ud56d\ub4f1\uc131\uc774\ub098 \ub808\ud37c\ub7f0\uc2a4\uac00 \uc544\ub2cc, \uc624\uc9c1 \uac12\uc5d0 \ub530\ub77c \uc88c\uc6b0\ub418\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4. \uc77c\ub2e8 \uac12 \uac1d\uccb4\ub97c \uc120\uc5b8\ud55c \uc774\ud6c4\uc5d4 \uadf8 \uc0c1\ud0dc\ub294 \uc808\ub300 \ubcc0\ud558\uc9c0 \uc54a\uc9c0\uc694. \ubb38\uc790\uc5f4, \uc22b\uc790 \uc678\uc5d0\ub3c4 tuple, pair, point, zipCode, coordinate, money, date \uac19\uc740 \ud615\uc2dd\uc774 \ubaa8\ub450 \uac12 \uac1d\uccb4\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function zipCode(code, location) {\n  let _code = code;\n  let _location = location || '';\n\n  return {\n    code: function () {\n      return _code;\n    },\n    location: function () {\n      return _location;\n    },\n    fromString: function (str) {\n      let parts = str.split('-');\n      return zipCode(parts[0], parts[1]);\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\uba54\uc11c\ub4dc\ub97c \uc77c\ubd80\ub9cc \ud638\ucd9c\uc790\uc5d0 \uacf5\uac1c\ud558\uace0 _code, _location\ub97c pseudo-private \ubcc0\uc218\ucc98\ub7fc \ub2e4\ub8e8\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\uac1d\uccb4 \ub9ac\ud130\ub7f4 \uc778\ud130\ud398\uc774\uc2a4"),"\ub97c \ubc18\ud658\ud558\ub294 \uc2dd\uc73c\ub85c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud568\uc218\ub97c \uc774\uc6a9\ud558\uba74 \ub0b4\ubd80 \uc0c1\ud0dc \uc811\uadfc\uc744 \ucc28\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \ubcc0\uc218\ub294 \ud074\ub85c\uc800\ub97c \uac70\uccd0\uc57c\ub9cc \uac1d\uccb4 \ub9ac\ud130\ub7f4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ubc18\ud658\ub41c \uac1d\uccb4\ub294 \uc0ac\uc2e4\uc0c1 \ubcc0\uc774\ub97c \uc77c\uc73c\ud0a4\ub294 \uba54\uc11c\ub4dc\uac00 \uc5c6\ub294 \uae30\ubcf8\ud615\ucc98\ub7fc \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc0ac\ubcf8\uc744 \ub9cc\ub4e4\uc5b4 \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc \uc5ed\uc2dc \ubd88\ubcc0\uc131\uc744 \uad6c\ud604\ud558\ub294 \ub610 \ub2e4\ub978 \uc218\ub2e8\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"25-\ub9c8\uce58\uba70"},"2.5 \ub9c8\uce58\uba70"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub294 OOP\uc640 FP \uc591\ucabd \ub2e4 \uac00\ub2a5\ud55c \ud314\ubc29\ubbf8\uc778 \uc5b8\uc5b4\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"OOP\uc5d0 \ubd88\ubcc0\uc131\uc744 \ub3c4\uc785\ud558\uba74 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uba4b\uc9c0\uac8c \uc11e\uc5b4 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uace0\uacc4/\uc77c\uae09 \ud568\uc218\ub294 \ud568\uc218\ud615 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uad6c\uc0ac\ud558\ub294 \uadfc\uac04\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud074\ub85c\uc800\ub294 \uc815\ubcf4 \uac10\ucda4, \ubaa8\ub4c8 \uac1c\ubc1c\ubfd0\ub9cc \uc544\ub2c8\ub77c, \uc5ec\ub7ec \uc790\ub8cc\ud615\uc5d0 \uac78\uccd0 \uad75\uac8c \ub098\ub25c \ud568\uc218\uc5d0 \uc6d0\ud558\ub294 \uae30\ub2a5\uc744 \ub9e4\uac1c\ubcc0\uc218\ub85c \ub118\uae30\ub294 \ub4f1 \ub2e4\uc591\ud55c \uc4f0\uc784\uc0c8\ub97c \uc790\ub791\ud569\ub2c8\ub2e4.")))}p.isMDXComponent=!0},965:function(n,e,t){e.Z=t.p+"assets/images/2.1-c6cb8a27c273f0bddf54c578fdeff684.jpeg"},3625:function(n,e,t){e.Z=t.p+"assets/images/2.2-9a7a77288d20dfc4093f31b8e4d503f7.jpeg"}}]);