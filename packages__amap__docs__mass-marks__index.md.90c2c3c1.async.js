(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{KjXW:function(e,t,a){},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},QHlD:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),o=a("Ip/e"),i=a("upm9"),l=r.a.memo((e=>{var t=e.demos,a=t["mass-marks-demo-01"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"massmarks-\u6d77\u91cf\u70b9\u7c7b"},r.a.createElement(o["AnchorLink"],{to:"#massmarks-\u6d77\u91cf\u70b9\u7c7b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"MassMarks \u6d77\u91cf\u70b9\u7c7b"),r.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},r.a.createElement(o["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u9700\u8981\u5c55\u793a\u5927\u91cf\u70b9\u4f4d\u65f6")),r.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},r.a.createElement(o["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u793a\u4f8b"),r.a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},r.a.createElement(o["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528")),r.a.createElement(i["default"],t["mass-marks-demo-01"].previewerProps,r.a.createElement(a,null))))}));t["default"]=e=>{var t=r.a.useContext(o["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:a})}},upm9:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),o=a("VqeS"),i=a("MZF8"),l=a("Ip/e"),c=a("/kL3");a("KjXW");function u(e,t){return p(e)||f(e,t)||d(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(n=a.next()).done);i=!0)if(o.push(n.value),t&&o.length===t)break}catch(c){l=!0,r=c}finally{try{i||null==a["return"]||a["return"]()}finally{if(l)throw r}}return o}}function p(e){if(Array.isArray(e))return e}function b(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var v=function(e){var t,a,s,d=Object(n["useRef"])(),m=Object(n["useContext"])(l["context"]),f=m.locale,p=Object(l["useLocaleProps"])(f,e),v=Object(l["useDemoUrl"])(p.identifier),E=p.demoUrl||v,h=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(p.identifier),_=1===Object.keys(p.sources).length,y=Object(l["useCodeSandbox"])((null===(t=p.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:p),k=Object(l["useRiddle"])((null===(a=p.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:p),g=Object(l["useMotions"])(p.motions||[],d.current),w=u(g,2),j=w[0],O=w[1],x=Object(l["useCopy"])(),N=u(x,2),C=N[0],S=N[1],A=Object(n["useState"])((function(){return p.sources._?"_":Object.keys(p.sources)[0]})),I=u(A,2),L=I[0],M=I[1],R=Object(n["useState"])(b(L,p.sources[L])),T=u(R,2),U=T[0],P=T[1],D=Object(n["useState"])(Boolean(p.defaultShowCode)),F=u(D,2),X=F[0],$=F[1],B=Object(n["useState"])(Math.random()),J=u(B,2),K=J[0],Q=J[1],H=p.sources[L][U]||p.sources[L].content,V=Object(l["useTSPlaygroundUrl"])(f,H),W=Object(n["useRef"])(),Z=Object(l["usePrefersColor"])(),q=u(Z,1),G=q[0];function z(e){M(e),P(b(e,p.sources[e]))}return Object(n["useEffect"])((function(){Q(Math.random())}),[G]),r.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:K,src:E,ref:W}):p.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&r.a.createElement(l["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},y&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),k&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),p.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:O,onClick:function(){return j()}}),p.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return Q(Math.random())}}),!(null===(s=p.hideActions)||void 0===s?void 0:s.includes("EXTERNAL"))&&r.a.createElement(l["Link"],{target:"_blank",to:E},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:function(){return C(H)}}),"tsx"===U&&X&&r.a.createElement(l["Link"],{target:"_blank",to:V},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(X?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return $(!X)}})),X&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!_&&r.a.createElement(o["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:L,onChange:z},Object.keys(p.sources).map((function(e){return r.a.createElement(o["a"],{tab:"_"===e?"index.".concat(b(e,p.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(c["a"],{code:H,lang:U,showCopy:!1}))))};t["default"]=v}}]);