"use strict";(self.webpackChunkkearisp=self.webpackChunkkearisp||[]).push([[979],{9979:(n,e,t)=>{t.r(e),t.d(e,{default:()=>C});var o=t(9379),a=t(5043),r=t(853),c=t(8903);class s{constructor(n){this.canny=n}identify(n,e,t){this.canny&&this.canny("identify",{appID:n,user:e},t)}authenticateCannyLink(n){return this.canny?this.canny("authenticateCannyLink",n):n}render(n){this.canny&&this.canny("render",n)}initChangelog(n){this.canny&&this.canny("initChangelog",n)}closeChangelog(){this.canny&&this.canny("closeChangelog")}}var i=function(n,e,t,o){return new(t||(t=Promise))((function(a,r){function c(n){try{i(o.next(n))}catch(e){r(e)}}function s(n){try{i(o.throw(n))}catch(e){r(e)}}function i(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,s)}i((o=o.apply(n,e||[])).next())}))};class l{get Canny(){return window.Canny}load(n,e){return i(this,void 0,void 0,(function*(){if(this.Canny)return this.Canny;const t=document.createElement("script");t.type="text/javascript",t.async=!0;const o=new URL("https://canny.io/sdk.js");return n&&(o.hostname="".concat(n,".canny.io")),e&&(o.hostname=e),t.src=o.toString(),new Promise(((n,e)=>{t.onload=()=>{n(this.Canny)},t.onerror=n=>{e(n)},document.head.append(t)}))}))}}const u=(0,a.createContext)({isLoaded:!1,canny:new s(null)}),d=()=>(0,a.useContext)(u);var y=t(579),h=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(n);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(t[o[a]]=n[o[a]])}return t};const p=n=>{const{component:e="button",align:t="left",position:o="bottom",labelIDs:r,children:c}=n,s=h(n,["component","align","position","labelIDs","children"]),{isLoaded:i,appId:l,canny:u}=d();return(0,a.useEffect)((()=>{if(i&&l)return u.initChangelog({appID:l,align:t,position:o,labelIDs:r}),()=>u.closeChangelog()}),[i,l,t,o,r]),(0,y.jsx)(e,Object.assign({},s,{"data-canny-changelog":"",children:c}))};var f=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(n);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(t[o[a]]=n[o[a]])}return t};const b=n=>{const{component:e="div",basePath:t,boardToken:o,ssoToken:r,theme:c,onLoadCallback:s}=n,i=f(n,["component","basePath","boardToken","ssoToken","theme","onLoadCallback"]),l=(0,a.useRef)();l.current=s;const{isLoaded:u,canny:h}=d();return(0,a.useEffect)((()=>{u&&h.render({basePath:t,boardToken:o,ssoToken:r,theme:c,onLoadCallback:l.current})}),[r,o,t,u,c]),(0,y.jsx)(e,Object.assign({},i,{"data-canny":""}))};var m=function(n,e,t,o){return new(t||(t=Promise))((function(a,r){function c(n){try{i(o.next(n))}catch(e){r(e)}}function s(n){try{i(o.throw(n))}catch(e){r(e)}}function i(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,s)}i((o=o.apply(n,e||[])).next())}))};const g=n=>{const{appId:e,domain:t,subdomain:o,user:r,children:c,onIdentify:i}=n,[d,h]=(0,a.useState)(!1),p=(0,a.useRef)(null),f=(0,a.useRef)({appId:e,user:r,onIdentify:i}),b=(0,a.useMemo)((()=>new s(p.current)),[d]);return(0,a.useEffect)((()=>{m(void 0,void 0,void 0,(function*(){const n=new l;try{p.current=yield n.load(o,t),h(!0)}catch(e){console.error(e)}}))}),[]),(0,a.useEffect)((()=>{f.current={appId:e,user:r,onIdentify:i}}),[e,r,i]),(0,a.useEffect)((()=>{d&&b.identify(f.current.appId,f.current.user,f.current.onIdentify)}),[d]),(0,y.jsx)(u.Provider,{value:{appId:e,isLoaded:d,canny:b},children:c})};var k=t(9573);const v=()=>{const{canny:n,isLoaded:e}=d();if(e)return(0,y.jsx)("a",{href:n.authenticateCannyLink(location.href),children:"Auth"})},j=n=>(0,y.jsx)("button",(0,o.A)({},n)),C=()=>{const{mode:n="dark"}=(0,r.Ut)(),e=(0,a.useCallback)((()=>{console.log("Identity!")}),[]),t=(0,a.useCallback)((()=>{console.log("LOADED!")}),[]);return(0,y.jsxs)(g,{appId:k.wT,subdomain:"kearisp",user:{id:"1",name:"Test User",email:"test@test.com"},onIdentify:e,children:[(0,y.jsx)(b,{theme:["light","dark"].includes(n)?n:"dark",boardToken:k.rt,onLoadCallback:t}),(0,y.jsxs)(c.Ay,{container:!0,justifyContent:"center",justifyItems:"center",children:[(0,y.jsx)(c.Ay,{item:!0,children:(0,y.jsx)(p,{component:j,type:"button",align:"top",position:"right",labelIDs:[],children:"Change log"})}),(0,y.jsx)(c.Ay,{item:!0,children:(0,y.jsx)(v,{})})]})]})}}}]);
//# sourceMappingURL=979.988609f6.chunk.js.map