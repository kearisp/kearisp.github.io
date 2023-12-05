"use strict";(self.webpackChunkkearisp=self.webpackChunkkearisp||[]).push([[950],{1950:(n,e,t)=>{t.r(e),t.d(e,{default:()=>j});var o=t(2791),a=t(1605),r=t(3066);class c{constructor(n){this.canny=n}identify(n,e){this.canny("identify",{appID:n,user:e})}render(n){this.canny&&this.canny("render",n)}initChangelog(n){this.canny&&this.canny("initChangelog",n)}closeChangelog(){this.canny&&this.canny("closeChangelog")}}var s=function(n,e,t,o){return new(t||(t=Promise))((function(a,r){function c(n){try{i(o.next(n))}catch(e){r(e)}}function s(n){try{i(o.throw(n))}catch(e){r(e)}}function i(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,s)}i((o=o.apply(n,e||[])).next())}))};class i{get Canny(){return window.Canny}load(n,e){return s(this,void 0,void 0,(function*(){if(this.Canny)return this.Canny;const t=document.createElement("script");t.type="text/javascript",t.async=!0;const o=new URL("https://canny.io/sdk.js");return n&&(o.hostname="".concat(n,".canny.io")),e&&(o.hostname=e),t.src=o.toString(),new Promise(((n,e)=>{t.onload=()=>{n(this.Canny)},t.onerror=n=>{e(n)},document.head.append(t)}))}))}}const l=(0,o.createContext)({isLoaded:!1,canny:new c(null)}),u=()=>(0,o.useContext)(l);var d=t(184),p=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(n);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(t[o[a]]=n[o[a]])}return t};const h=n=>{const{component:e="button",align:t="left",position:a="bottom",labelIDs:r,children:c}=n,s=p(n,["component","align","position","labelIDs","children"]),{isLoaded:i,appId:l,canny:h}=u();return(0,o.useEffect)((()=>{if(i&&l)return h.initChangelog({appID:l,align:t,position:a,labelIDs:r}),()=>h.closeChangelog()}),[i,l,t,a,r]),(0,d.jsx)(e,Object.assign({},s,{"data-canny-changelog":"",children:c}))};var y=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(n);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(t[o[a]]=n[o[a]])}return t};const f=n=>{const{component:e="div",basePath:t,boardToken:a,ssoToken:r,theme:c,onLoadCallback:s}=n,i=y(n,["component","basePath","boardToken","ssoToken","theme","onLoadCallback"]),l=(0,o.useRef)();l.current=s;const{isLoaded:p,canny:h}=u();return(0,o.useEffect)((()=>{p&&h.render({basePath:t,boardToken:a,ssoToken:r,theme:c,onLoadCallback:l.current})}),[r,a,t,p,c]),(0,d.jsx)(e,Object.assign({},i,{"data-canny":""}))};var b=function(n,e,t,o){return new(t||(t=Promise))((function(a,r){function c(n){try{i(o.next(n))}catch(e){r(e)}}function s(n){try{i(o.throw(n))}catch(e){r(e)}}function i(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,s)}i((o=o.apply(n,e||[])).next())}))};const m=n=>{const{appId:e,domain:t,subdomain:a,user:r,children:s}=n,[u,p]=(0,o.useState)(!1),h=(0,o.useRef)(null),y=(0,o.useMemo)((()=>new c(h.current)),[u]);return(0,o.useEffect)((()=>{b(void 0,void 0,void 0,(function*(){const n=new i;try{h.current=yield n.load(a,t),p(!0)}catch(e){console.error(e)}}))}),[]),(0,o.useEffect)((()=>{u&&y.identify(e,r)}),[u,e,r]),(0,d.jsx)(l.Provider,{value:{appId:e,isLoaded:u,canny:y},children:s})};var g=t(1668);const v=n=>(0,d.jsx)("button",{...n}),j=()=>{const{mode:n="dark"}=(0,a.tv)(),e=(0,o.useCallback)((()=>{console.log("LOADED!")}),[]);return(0,d.jsxs)(m,{appId:g.YC,subdomain:"kearisp",user:{id:"1",name:"Test User",email:"test@test.com"},children:[(0,d.jsx)(f,{theme:["light","dark"].includes(n)?n:"dark",boardToken:g.Wv,onLoadCallback:e}),(0,d.jsx)(r.ZP,{container:!0,justifyContent:"center",justifyItems:"center",children:(0,d.jsx)(r.ZP,{item:!0,children:(0,d.jsx)(h,{component:v,type:"button",align:"top",position:"right",labelIDs:[],children:"Change log"})})})]})}}}]);
//# sourceMappingURL=950.7d428fe5.chunk.js.map