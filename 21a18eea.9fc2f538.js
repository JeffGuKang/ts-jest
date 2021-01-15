(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(98)),c={id:"version-checking",title:"Version checking"},a={unversionedId:"version-checking",id:"version-checking",isDocsHomePage:!1,title:"Version checking",description:"By default, ts-jest supports a range of versions for jest/typescript. One uses incompatible versions will receive a warning",source:"@site/docs/version-checking.md",slug:"/version-checking",permalink:"/ts-jest/docs/version-checking",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/version-checking.md",version:"current",sidebar:"docs",previous:{title:"Options",permalink:"/ts-jest/docs/options"},next:{title:"Test helpers",permalink:"/ts-jest/docs/test-helpers"}},s=[{value:"Note",id:"note",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," supports a range of versions for ",Object(i.b)("inlineCode",{parentName:"p"},"jest"),"/",Object(i.b)("inlineCode",{parentName:"p"},"typescript"),". One uses incompatible versions will receive a warning\nmessage while running tests. This warning message can be opt-out by setting environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER"),":"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Linux/MacOS")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"export TS_JEST_DISABLE_VER_CHECKER=true\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Windows")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"set TS_JEST_DISABLE_VER_CHECKER=true\n")),Object(i.b)("h3",{id:"note"},"Note"),Object(i.b)("p",null,"As long as the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER")," stays, the warning message will no longer show.\nThis can lead to unexpected errors due to the usage of incompatible versions' dependencies. Use this environment variable with precautions."))}l.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(f,a(a({ref:t},p),{},{components:n})):o.a.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);