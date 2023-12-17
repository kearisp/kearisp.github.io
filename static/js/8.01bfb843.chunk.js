"use strict";(self.webpackChunkkearisp=self.webpackChunkkearisp||[]).push([[8],{4008:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(2791),o=a(1614),s=a(3366),r=a(7462),i=a(3733),d=a(4419),c=a(6934),l=a(1402);const u=n.createContext({});var p=a(5878),m=a(1217);function b(e){return(0,m.Z)("MuiList",e)}(0,p.Z)("MuiList",["root","padding","dense","subheader"]);var g=a(184);const y=["children","className","component","dense","disablePadding","subheader"],h=(0,c.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disablePadding&&t.padding,a.dense&&t.dense,a.subheader&&t.subheader]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),v=n.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiList"}),{children:o,className:c,component:p="ul",dense:m=!1,disablePadding:v=!1,subheader:x}=a,f=(0,s.Z)(a,y),Z=n.useMemo((()=>({dense:m})),[m]),S=(0,r.Z)({},a,{component:p,dense:m,disablePadding:v}),w=(e=>{const{classes:t,disablePadding:a,dense:n,subheader:o}=e,s={root:["root",!a&&"padding",n&&"dense",o&&"subheader"]};return(0,d.Z)(s,b,t)})(S);return(0,g.jsx)(u.Provider,{value:Z,children:(0,g.jsxs)(h,(0,r.Z)({as:p,className:(0,i.Z)(w.root,c),ref:t,ownerState:S},f,{children:[x,o]}))})}));var x=a(627),f=a(2065),Z=a(7296);const S=function(e,t){var a,o;return n.isValidElement(e)&&-1!==t.indexOf(null!=(a=e.type.muiName)?a:null==(o=e.type)||null==(o=o._payload)||null==(o=o.value)?void 0:o.muiName)};var w=a(162),C=a(2071);function k(e){return(0,m.Z)("MuiListItem",e)}const P=(0,p.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const I=(0,p.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function N(e){return(0,m.Z)("MuiListItemSecondaryAction",e)}(0,p.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);const R=["className"],M=(0,c.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),G=n.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:o}=a,c=(0,s.Z)(a,R),p=n.useContext(u),m=(0,r.Z)({},a,{disableGutters:p.disableGutters}),b=(e=>{const{disableGutters:t,classes:a}=e,n={root:["root",t&&"disableGutters"]};return(0,d.Z)(n,N,a)})(m);return(0,g.jsx)(M,(0,r.Z)({className:(0,i.Z)(b.root,o),ownerState:m,ref:t},c))}));G.muiName="ListItemSecondaryAction";const L=G,j=["className"],A=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],T=(0,c.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&{["& > .".concat(I.root)]:{paddingRight:48}},{["&.".concat(P.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(P.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,f.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(P.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,f.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(P.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},a.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(P.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,f.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,f.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}},a.hasSecondaryAction&&{paddingRight:48})})),W=(0,c.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),O=n.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiListItem"}),{alignItems:o="center",autoFocus:c=!1,button:p=!1,children:m,className:b,component:y,components:h={},componentsProps:v={},ContainerComponent:f="li",ContainerProps:{className:I}={},dense:N=!1,disabled:R=!1,disableGutters:M=!1,disablePadding:G=!1,divider:O=!1,focusVisibleClassName:F,secondaryAction:V,selected:B=!1,slotProps:q={},slots:X={}}=a,z=(0,s.Z)(a.ContainerProps,j),D=(0,s.Z)(a,A),E=n.useContext(u),U=n.useMemo((()=>({dense:N||E.dense||!1,alignItems:o,disableGutters:M})),[o,E.dense,N,M]),Y=n.useRef(null);(0,w.Z)((()=>{c&&Y.current&&Y.current.focus()}),[c]);const _=n.Children.toArray(m),H=_.length&&S(_[_.length-1],["ListItemSecondaryAction"]),J=(0,r.Z)({},a,{alignItems:o,autoFocus:c,button:p,dense:U.dense,disabled:R,disableGutters:M,disablePadding:G,divider:O,hasSecondaryAction:H,selected:B}),K=(e=>{const{alignItems:t,button:a,classes:n,dense:o,disabled:s,disableGutters:r,disablePadding:i,divider:c,hasSecondaryAction:l,selected:u}=e,p={root:["root",o&&"dense",!r&&"gutters",!i&&"padding",c&&"divider",s&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",l&&"secondaryAction",u&&"selected"],container:["container"]};return(0,d.Z)(p,k,n)})(J),Q=(0,C.Z)(Y,t),$=X.root||h.Root||T,ee=q.root||v.root||{},te=(0,r.Z)({className:(0,i.Z)(K.root,ee.className,b),disabled:R},D);let ae=y||"li";return p&&(te.component=y||"div",te.focusVisibleClassName=(0,i.Z)(P.focusVisible,F),ae=Z.Z),H?(ae=te.component||y?ae:"div","li"===f&&("li"===ae?ae="div":"li"===te.component&&(te.component="div")),(0,g.jsx)(u.Provider,{value:U,children:(0,g.jsxs)(W,(0,r.Z)({as:f,className:(0,i.Z)(K.container,I),ref:Q,ownerState:J},z,{children:[(0,g.jsx)($,(0,r.Z)({},ee,!(0,x.X)($)&&{as:ae,ownerState:(0,r.Z)({},J,ee.ownerState)},te,{children:_})),_.pop()]}))})):(0,g.jsx)(u.Provider,{value:U,children:(0,g.jsxs)($,(0,r.Z)({},ee,{as:ae,ref:Q},!(0,x.X)($)&&{ownerState:(0,r.Z)({},J,ee.ownerState)},te,{children:[_,V&&(0,g.jsx)(L,{children:V})]}))})}));var F=a(890);function V(e){return(0,m.Z)("MuiListItemText",e)}const B=(0,p.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),q=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],X=(0,c.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[{["& .".concat(B.primary)]:t.primary},{["& .".concat(B.secondary)]:t.secondary},t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),z=n.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiListItemText"}),{children:o,className:c,disableTypography:p=!1,inset:m=!1,primary:b,primaryTypographyProps:y,secondary:h,secondaryTypographyProps:v}=a,x=(0,s.Z)(a,q),{dense:f}=n.useContext(u);let Z=null!=b?b:o,S=h;const w=(0,r.Z)({},a,{disableTypography:p,inset:m,primary:!!Z,secondary:!!S,dense:f}),C=(e=>{const{classes:t,inset:a,primary:n,secondary:o,dense:s}=e,r={root:["root",a&&"inset",s&&"dense",n&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,d.Z)(r,V,t)})(w);return null==Z||Z.type===F.Z||p||(Z=(0,g.jsx)(F.Z,(0,r.Z)({variant:f?"body2":"body1",className:C.primary,component:null!=y&&y.variant?void 0:"span",display:"block"},y,{children:Z}))),null==S||S.type===F.Z||p||(S=(0,g.jsx)(F.Z,(0,r.Z)({variant:"body2",className:C.secondary,color:"text.secondary",display:"block"},v,{children:S}))),(0,g.jsxs)(X,(0,r.Z)({className:(0,i.Z)(C.root,c),ownerState:w,ref:t},x,{children:[Z,S]}))})),D=()=>{const[e]=(0,n.useState)(["react-canny","@kearisp/cli","@wocker/ws","@wocker/core","@wocker/utils","@wocker/mariadb-plugin","@wocker/serveo-plugin"]),[t,a]=(0,n.useState)({});return(0,n.useEffect)((()=>{const t=new AbortController;return(async()=>{try{for(const n of e){const e=await fetch("https://registry.npmjs.org/".concat(encodeURIComponent(n)),{signal:t.signal});if(200!==e.status)continue;const o=await e.json();a((e=>({...e,[n]:o})))}}catch(n){}})(),()=>t.abort()}),[]),(0,g.jsx)(o.Z,{children:(0,g.jsx)(v,{children:e.map(((e,a)=>{const{"dist-tags":{latest:n=""}={}}=t[e]||{};return(0,g.jsx)(O,{children:(0,g.jsx)(z,{primary:e,secondary:n})},a)}))})})}},627:(e,t,a)=>{function n(e){return"string"===typeof e}a.d(t,{X:()=>n})},1614:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(3366),o=a(7462),s=a(2791),r=a(3733),i=a(1122),d=a(1217),c=a(4419),l=a(6083);const u=(0,a(4046).ZP)();var p=a(5080),m=a(184);const b=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,p.Z)(),y=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t["maxWidth".concat((0,i.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),h=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:g});var v=a(4036),x=a(6934),f=a(1402);const Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=y,useThemeProps:a=h,componentName:l="MuiContainer"}=e,u=t((e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:a}=e;return a.fixed&&Object.keys(t.breakpoints.values).reduce(((e,a)=>{const n=a,o=t.breakpoints.values[n];return 0!==o&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({},"xs"===a.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},a.maxWidth&&"xs"!==a.maxWidth&&{[t.breakpoints.up(a.maxWidth)]:{maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)}})})),p=s.forwardRef((function(e,t){const s=a(e),{className:p,component:g="div",disableGutters:y=!1,fixed:h=!1,maxWidth:v="lg"}=s,x=(0,n.Z)(s,b),f=(0,o.Z)({},s,{component:g,disableGutters:y,fixed:h,maxWidth:v}),Z=((e,t)=>{const{classes:a,fixed:n,disableGutters:o,maxWidth:s}=e,r={root:["root",s&&"maxWidth".concat((0,i.Z)(String(s))),n&&"fixed",o&&"disableGutters"]};return(0,c.Z)(r,(e=>(0,d.Z)(t,e)),a)})(f,l);return(0,m.jsx)(u,(0,o.Z)({as:g,ownerState:f,className:(0,r.Z)(Z.root,p),ref:t},x))}));return p}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t["maxWidth".concat((0,v.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,f.Z)({props:e,name:"MuiContainer"})}),S=Z}}]);
//# sourceMappingURL=8.01bfb843.chunk.js.map