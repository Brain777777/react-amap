(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{KjXW:function(e,t,n){},MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},rk85:function(e,t,n){"use strict";function r(){var e=a(n("1QO0"));return r=function(){return e},e}function o(){var e=n("Ip/e");return o=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(e){return e.render()},s=function(e,t){var n=[],a=e.match.params.uuid,i=void 0===e.location.query.wrapper,u=t[a];if(u){var s=c(c({},u.previewerProps),{},{hideActions:(u.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(s.motions=(s.motions||[]).slice(),s.motions.unshift("autoplay"),s.motions.every((function(e){return!e.startsWith("capture")}))&&s.motions.push("capture:[id|=root]")),n=i?[r()["default"].createElement(l,{render:function(){return(0,o().useMotions)(s.motions||[],"undefined"!==typeof window?document.documentElement:null),r()["default"].createElement("div",{},r()["default"].createElement(u.component))}})]:[s,r()["default"].createElement(u.component)]}return n};t["default"]=s},upm9:function(e,t,n){"use strict";n.r(t);var r=n("1QO0"),o=n.n(r),a=n("VqeS"),i=n("MZF8"),c=n("Ip/e"),u=n("/kL3");n("KjXW");function l(e,t){return p(e)||f(e,t)||d(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(a.push(r.value),t&&a.length===t)break}catch(u){c=!0,o=u}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw o}}return a}}function p(e){if(Array.isArray(e))return e}function b(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,s,d=Object(r["useRef"])(),m=Object(r["useContext"])(c["context"]),f=m.locale,p=Object(c["useLocaleProps"])(f,e),v=Object(c["useDemoUrl"])(p.identifier),y=p.demoUrl||v,_=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(p.identifier),O=1===Object.keys(p.sources).length,h=Object(c["useCodeSandbox"])((null===(t=p.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:p),j=Object(c["useRiddle"])((null===(n=p.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:p),w=Object(c["useMotions"])(p.motions||[],d.current),E=l(w,2),g=E[0],k=E[1],S=Object(c["useCopy"])(),C=l(S,2),N=C[0],x=C[1],P=Object(r["useState"])((function(){return p.sources._?"_":Object.keys(p.sources)[0]})),A=l(P,2),M=A[0],L=A[1],I=Object(r["useState"])(b(M,p.sources[M])),R=l(I,2),D=R[0],T=R[1],U=Object(r["useState"])(Boolean(p.defaultShowCode)),X=l(U,2),$=X[0],q=X[1],B=Object(r["useState"])(Math.random()),J=l(B,2),K=J[0],W=J[1],F=p.sources[M][D]||p.sources[M].content,Q=Object(c["useTSPlaygroundUrl"])(f,F),V=Object(r["useRef"])(),Z=Object(c["usePrefersColor"])(),G=l(Z,1),H=G[0];function z(e){L(e),T(b(e,p.sources[e]))}return Object(r["useEffect"])((function(){W(Math.random())}),[H]),o.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",_?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&o.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),o.a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?o.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:K,src:y,ref:V}):p.children),o.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&o.a.createElement(c["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),o.a.createElement("div",{className:"__dumi-default-previewer-actions"},h&&o.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:h}),j&&o.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:j}),p.motions&&o.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:k,onClick:function(){return g()}}),p.iframe&&o.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return W(Math.random())}}),!(null===(s=p.hideActions)||void 0===s?void 0:s.includes("EXTERNAL"))&&o.a.createElement(c["Link"],{target:"_blank",to:y},o.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),o.a.createElement("span",null),o.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return N(F)}}),"tsx"===D&&$&&o.a.createElement(c["Link"],{target:"_blank",to:Q},o.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),o.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat($?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return q(!$)}})),$&&o.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!O&&o.a.createElement(a["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:M,onChange:z},Object.keys(p.sources).map((function(e){return o.a.createElement(a["a"],{tab:"_"===e?"index.".concat(b(e,p.sources[e])):e,key:e})}))),o.a.createElement("div",{className:"__dumi-default-previewer-source"},o.a.createElement(u["a"],{code:F,lang:D,showCopy:!1}))))};t["default"]=v}}]);