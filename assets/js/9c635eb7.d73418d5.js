"use strict";(self.webpackChunkkooku_log=self.webpackChunkkooku_log||[]).push([[5643],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1742:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),c=["components"],s={title:"React Concurrent suspense",date:new Date("2022-03-17T00:00:00.000Z"),tags:["react"],keywords:["react 18","react","concurrent mode","suspense","Lagacy Suspense","Concurrent Suspense"]},i=void 0,u={permalink:"/blog/react-concurrent-suspense",editUrl:"https://github.com/kooku0/kooku0.github.io/edit/main/blog/react-concurrent-suspense.md",source:"@site/blog/react-concurrent-suspense.md",title:"React Concurrent suspense",description:"\uc774\ubc88\uc5d0\ub294 React v18\uc5d0 \ucd94\uac00\ub41c Concurrent suspense\uc5d0 \ub300\ud574 \uc18c\uac1c\ud558\ub824\uace0 \ud569\ub2c8\ub2e4.",date:"2022-03-17T00:00:00.000Z",formattedDate:"2022\ub144 3\uc6d4 17\uc77c",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:4.49,truncated:!0,authors:[],frontMatter:{title:"React Concurrent suspense",date:"2022-03-17T00:00:00.000Z",tags:["react"],keywords:["react 18","react","concurrent mode","suspense","Lagacy Suspense","Concurrent Suspense"]},prevItem:{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0 SOLID \uc801\uc6a9\ud558\uae30",permalink:"/blog/\ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0-solid-\uc801\uc6a9\ud558\uae30"},nextItem:{title:"React v18 Concurrent mode",permalink:"/blog/react18-concurrent-mode"}},p={authorsImageUrls:[]},l=[{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:3}],d={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 React v18\uc5d0 \ucd94\uac00\ub41c Concurrent suspense\uc5d0 \ub300\ud574 \uc18c\uac1c\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\uc804 \ud3ec\uc2a4\ud305\uc778 ",(0,o.kt)("a",{parentName:"p",href:"https://kooku0.github.io/blog/react18-concurrent-mode/"},"React v18 Concurrent mode"),"\uc640 \uc774\uc5b4\uc9c0\ub294 \ub0b4\uc6a9\uc774\uae30\ub3c4 \ud558\uace0, \ub9ce\uc740 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ubd84\ub4e4\uc774 \uad00\uc2ec\uc788\uac8c \ubcf4\uace0 \ub2e4\ub8e8\uc5c8\ub358 \uc8fc\uc81c\uc785\ub2c8\ub2e4. \uad00\ub828 \uc720\ud29c\ube0c \uc601\uc0c1\uc774\ub098 \ube14\ub85c\uadf8 \uae00\ub3c4 \ub9ce\uc774 \uc788\uad6c\uc694."),(0,o.kt)("p",null,"Concurrent suspense\ub294 React v18\uc758 Concurrent mode \ub9e4\ucee4\ub2c8\uc998\uc744 \ud1b5\ud574 \uad6c\ud604\ub41c \uae30\ub2a5\uc785\ub2c8\ub2e4. \uc815\ud655\ud788\ub294 ",(0,o.kt)("strong",{parentName:"p"},"Concurrent mode\uc758 Intentional Loading Sequences"),"\ub97c \uad6c\ud604\ud588\uc8e0."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\uc2e4\uc81c Concurrent Suspense\uac00 \uac1c\ubc1c\ub41c\uac74 \uc624\ub798\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://ko.reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html"},"Building Great User Experiences with Concurrent Mode and Suspense")," \ud558\uc9c0\ub9cc React \ud300\uc5d0\uc11c\ub294 1\ub144\uac04 \uac80\uc99d\uacfc \ud14c\uc2a4\ud2b8\ub97c \ud558\uc600\uc8e0."))),(0,o.kt)("p",null,"\uc774\uc804\uc758 Suspense\ub294 v16.6\uc5d0 \ucd94\uac00\ub41c React.lazy\uc640 \ud568\uaed8 \ub3d9\uc791\ud558\ub294 Lazy Suspense \uc600\uc2b5\ub2c8\ub2e4. React.lazy\ub85c \uac10\uc2fc \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c\uc758 fallback\uc744 \ubcf4\uc5ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"v18\uc5d0 \uc815\uc2dd\uc73c\ub85c \ub9b4\ub9ac\uc988\ub418\ub294 Concurrent suspense\ub294 concurrent mode\uc758 \uc18c\uac1c\uc5d0\uc11c\ub3c4 \ubcf4\uc558\ub4ef\uc774 data fetching\uc774 \uc644\ub8cc\ub418\uc5b4 \ucda9\ubd84\ud55c \uc0c1\ud0dc\uac00 \ub420\ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0 \ud6c4 memory\uc5d0\uc11c \ub80c\ub354\ub9c1\uc744 \uc644\ub8cc\ud558\uc5ec \ubcf4\uc5ec\uc8fc\uac8c \ud558\ub294 \uae30\ub2a5\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c \ucf54\ub4dc\ub97c \ud1b5\ud574 \uad00\ub828 \uc8fc\uc694\uae30\ub2a5\ub4e4\uc744 \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const SUSPENSE_CONFIG = { timeoutMs: 2000 };\n\nfunction App() {\n  const [resource, setResource] = useState(initialResource);\n  /* highlight-next-line */\n  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);\n  return (\n    <>\n      <button\n        disabled={isPending}\n        onClick={() => {\n          startTransition(() => {\n            const nextUserId = getNextId(resource.userId);\n            setResource(fetchProfileData(nextUserId));\n          });\n        }}\n      >\n        Next\n      </button>\n      {isPending ? " Loading..." : null}\n      {/* highlight-next-line */}\n      <Suspense fallback={<Spinner />}>\n        <ProfilePage resource={resource} />\n      </Suspense>\n    </>\n  );\n}\n')),(0,o.kt)("p",null,"Susponse\ub85c \uac10\uc2fc ProfilePage\uc758 \uacbd\uc6b0 \ub0b4\ubd80\uc5d0 data-fetching\ud558\ub294 \ub85c\uc9c1\uc774 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4. data-fetching\uc911\uc77c \uacbd\uc6b0\uc5d0\ub294 Suspense\uc758 fallback\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"spinner"),"\uac00 \ubcf4\uc5ec\uc9c8\uaebc\ub77c\uace0 \uc608\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc React \ud300\uc740 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uac70\ub098 \ud654\uba74\uc774 \uc804\ud658\ub420 \ub54c loading\uc774\ub098 spinner \ub4f1\uc744 \ubcf4\uc5ec\uc8fc\ub294\uac8c \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \ub354 \uc624\ub798 \uae30\ub2e4\ub9b0\ub2e4 \ub77c\ub294 \ub290\ub08c\uc744 \ubc1b\uae30\uc5d0 \uc774\ub97c \ud574\uacb0\ud558\ub824\uace0 \ud588\uc2b5\ub2c8\ub2e4. \uc774 \ud574\uacb0\ubc29\uc548\uc774 ",(0,o.kt)("strong",{parentName:"p"},"\uc758\ub3c4\ub41c \uc9c0\uc5f0\ub85c\ub529"),"\uc785\ub2c8\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"\uc758\ub3c4\ub41c \uc9c0\uc5f0\ub85c\ub529\uc740")," data fetching\uc774 1\ucd08 \uc548\uc5d0 \uac70\uc758 \uc644\ub8cc\ub418\ub294 \uc810\uc5d0 \ucc29\uc548\ud558\uc5ec fetching\uc911\uc77c \ub54c \uc5b4\ub290 \uc815\ub3c4(\uc608\ub97c \ub4e4\uc5b4 1\ucd08)\uae30\uac04\uc740 \uc774\uc804 \ud654\uba74\uc744 \ubcf4\uc5ec\uc8fc\uace0(loading or spinner\ub294 \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\uc74c) \uc815\ud55c \uc2dc\uac04\uc774 \uc9c0\ub09c\ud6c4\uc5d0 data-fetching\uc774 \uc644\ub8cc\ub418\uc5b4 \ub80c\ub354\ub9c1\uc774 \ub2e4 \ub41c \ud654\uba74\uc744 \ubcf4\uc5ec\uc8fc\ub294 \uae30\ubc95\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub54c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"useTransition")," \uc73c\ub85c \uc774\ubc88\uc5d0 \uc0c8\ub85c \ub098\uc624\ub294 hooks\uc785\ub2c8\ub2e4~!"),(0,o.kt)("p",null,"Concurrent suspense\ub85c \uc778\ud574 UX \uce21\uba74\uc5d0\uc11c\ub3c4 \ud06c\uac8c \ud5a5\uc0c1\ub418\uc5c8\uace0 \ucf54\ub4dc\ub97c \uc9dc\ub294 \uac1c\ubc1c\uc790 \uc785\uc7a5\uc5d0\uc11c\ub3c4 \uc5c4\uccad\ub09c \ucf54\ub4dc\uac1c\uc120\uc744 \uc774\ub904\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc720\uc800\ub294 \uc0c8\ub85c\uc6b4 \ud654\uba74\uc774\ub098 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c \ub9e4\ubc88 loading\uc774\ub098 spinner\ub97c \ubcf4\uc9c0\uc54a\uc544\ub3c4\ub418\uace0, \uac1c\ubc1c\uc790 \uc785\uc7a5\uc5d0\uc11c\ub294 loading\uacfc \uad00\ub828\ub41c \ub2e4\ub978 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \ubd84\uae30\ucc98\ub9ac\ub97c \ub530\ub85c \ud574\uc8fc\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. \uc704\uc758 \ucf54\ub4dc\ub97c \uc608\ub85c \ub4e4\uc790\uba74 Suspense\uac00 \uc5c6\uc5c8\ub354\ub77c\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"ProfilePage"),"\uc5d0\uc11c fetching \uc911\uc77c\ub54c Spinner\ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc2e4\ud328\ud560 \ub54c\ub294 \uc2e4\ud328 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ud604\ud574\uc57c\ud558\uc9c0\ub9cc Concurrent suspense\ub97c \ub3c4\uc785\ud568\uc5d0 \ub530\ub77c ",(0,o.kt)("inlineCode",{parentName:"p"},"ProfilePage")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 \ud56d\uc0c1 \uc131\uacf5\uc0c1\ud0dc\uc758 \ucf54\ub4dc\ub9cc \uc791\uc131\ud558\uba74 \ub429\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc2e4\uc81c \uc5ed\ud560\uc5d0 \ub300\ud55c \ub85c\uc9c1\ub9cc \uad6c\ud604\ud558\uba74 \ub418\ub294\uac70\uc8e0."),(0,o.kt)("h3",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,o.kt)("p",null,"\uc774\ubc88 v18\uc740 react hooks\uac00 \ucc98\uc74c \ub098\uc654\uc744 \ub54c\ucc98\ub7fc React \uac1c\ubc1c\uc9c4\uc601\uc5d0\uc11c \ub9ce\uc740 \uc13c\uc138\uc774\uc158\uc744 \ubd88\ub7ec\uc77c\uc73c\ud0ac \uac83 \uac19\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);