"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{62821:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}});var i=r(52322),n=r(2784);var a=r(68683),o=r(68970),d=Object.defineProperty;const l=((e,t)=>d(e,"name",{value:t,configurable:!0}))(((e,t=0)=>{const r=(0,o.lz)().size,i=Object.keys(r);return r[i[Math.max(0,i.indexOf(String(e||"$4"))+t)]]||r.$4}),"getSize");var u=r(45482),s=r(59699),c=r(63035),h=r(92682),b=r(56695),f=r(4586),m=r(23917),p=r(63862),g=r(73456);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){w(e,t,r[t])}))}return e}function y(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,n,a=[],o=!0,d=!1;try{for(r=r.call(e);!(o=(i=r.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(l){d=!0,n=l}finally{try{o||null==r.return||r.return()}finally{if(d)throw n}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=Object.defineProperty,z=function(e,t){return j(e,"name",{value:t,configurable:!0})},k="Switch",R=(0,h.b)(k),S=x(R,1)[0],O=(R[1],x(S(k),2)),H=O[0],T=O[1],$=z((function(e,t){return(0,g.k)(l(e,1),t)}),"getSwitchHeight"),W=z((function(e,t){return(0,g.k)(l(e,3),t)}),"getSwitchWidth"),L=(0,u.z)(b.sL,{name:"Switch",tag:"button",borderRadius:1e3,borderWidth:2,borderColor:"transparent",backgroundColor:"$background",focusStyle:{borderColor:"$borderColorFocus"},variants:{size:{"...size":function(e,t){var r=$(e,t),i=r.height,n=r.minHeight,a=r.maxHeight,o=W(e,t),d=o.width,l=o.minWidth,u=o.maxWidth;return{height:i+2,minHeight:n+2,maxHeight:a+2,width:(0,s.Ve)(d)+4,minWidth:l+2,maxWidth:u+2}}}},defaultVariants:{size:"$4"}}),B=n.forwardRef((function(e,t){var r=e.__scopeSwitch,o=e.labeledBy,d=e.name,l=e.checked,u=e.defaultChecked,s=e.required,c=e.disabled,h=e.value,b=void 0===h?"on":h,f=e.onCheckedChange,g=e.size,_=void 0===g?"$4":g,w=y(e,["__scopeSwitch","labeledBy","name","checked","defaultChecked","required","disabled","value","onCheckedChange","size"]),j=x(n.useState(null),2),z=j[0],k=j[1],R=(0,a.e)(t,(function(e){return k(e)})),S=(0,p.t0)(z),O=o||S,T=n.useRef(!1),$=!z||Boolean(z.closest("form")),W=x((0,m.T)({prop:l,defaultProp:u||!1,onChange:f}),2),B=W[0],C=void 0!==B&&B,P=W[1];return(0,i.jsxs)(H,{scope:r,checked:C,disabled:c,size:_,children:[(0,i.jsx)(L,v({size:_,role:"switch","aria-checked":C,"aria-labelledby":O,"aria-required":s,"data-state":E(C),"data-disabled":c?"":void 0,disabled:c,tabIndex:c?void 0:0,value:b},w,{ref:R,onPress:function(t){var r;null==(r=e.onPress)||r.call(e,t),P((function(e){return!e})),$&&(T.current=t.isPropagationStopped(),T.current||t.stopPropagation())}})),$&&(0,i.jsx)(q,{control:z,bubbles:!T.current,name:d,value:b,checked:C,required:s,disabled:c,style:{transform:"translateX(-100%)"}})]})}));B.displayName=k;var C=L.extractable((0,c.Y)(B),{neverFlatten:!0}),P="SwitchThumb",F=(0,u.z)(f.K,{name:"SwitchThumb",backgroundColor:"$background",borderRadius:1e3,variants:{size:{"...size":$}},defaultVariants:{size:"$4"}}),I=F.extractable(n.forwardRef((function(e,t){var r=e.__scopeSwitch,n=y(e,["__scopeSwitch"]),a=T(P,r),o=a.size,d=a.disabled,u=a.checked;return(0,i.jsx)(F,v({size:o,"data-state":E(u),"data-disabled":d?"":void 0},n,{x:u?(0,s.Ve)(l(o,3))-(0,s.Ve)(l(o,1)):0,ref:t}))})),{neverFlatten:!0});I.displayName=P,C.Thumb=I;var q=z((function(e){e.control;var t=e.checked,r=e.bubbles,a=void 0===r||r,o=y(e,["control","checked","bubbles"]),d=n.useRef(null),l=function(e){const t=n.useRef({value:e,previous:e});return n.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(t);return n.useEffect((function(){var e=d.current,r=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(r,"checked").set;if(l!==t&&i){var n=new Event("click",{bubbles:a});i.call(e,t),e.dispatchEvent(n)}}),[l,t,a]),(0,i.jsx)("input",v({type:"checkbox","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:d,style:v({},e.style,{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))}),"BubbleInput");function E(e){return e?"checked":"unchecked"}z(E,"getState");function A(){return(0,i.jsxs)(b.FA,{alignItems:"_ai-17do05s",width:"_w-182r4c5",space:"$1",children:[(0,i.jsxs)(b.sL,{alignItems:"_ai-17do05s",space:"$2",children:[(0,i.jsx)(p.__,{tag:"label",size:"$2",minHeight:"_mih-zdo8n2",borderTopLeftRadius:"_btlr-14fwd1r",borderTopRightRadius:"_btrr-jibzt8",borderBottomRightRadius:"_bbrr-wuhapm",borderBottomLeftRadius:"_bblr-10aeuox",paddingRight:"_pr-va91w5",paddingLeft:"_pl-wh8jgo",paddingTop:"_pt-bv6h6f",paddingBottom:"_pb-15pd7xb",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4y8pm",lineHeight:"_lh-1x7rr0l",htmlFor:"switch-1",children:"Dark mode"}),(0,i.jsx)(C,{tag:"button",id:"switch-1",size:"$2",height:"_h-3ktl2w",minHeight:"_mih-jisvoq",maxHeight:"_mah-13zxg8s",width:"_w-1y5srx1",minWidth:"_miw-6ju4o7",maxWidth:"_maw-1h1d5g5",children:(0,i.jsx)(C.Thumb,{animation:"bouncy"})})]}),(0,i.jsxs)(b.sL,{alignItems:"_ai-17do05s",space:"$2",children:[(0,i.jsx)(p.__,{tag:"label",size:"$3",minHeight:"_mih-zdoav5",borderTopLeftRadius:"_btlr-14fwd2m",borderTopRightRadius:"_btrr-jibzu3",borderBottomRightRadius:"_bbrr-wuhaqh",borderBottomLeftRadius:"_bblr-10aeups",paddingRight:"_pr-1af660k",paddingLeft:"_pl-cem8pt",paddingTop:"_pt-bv6hx4",paddingBottom:"_pb-15pd8o0",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4y9gb",lineHeight:"_lh-1x7rrra",htmlFor:"switch-2",children:"Dark mode"}),(0,i.jsx)(C,{tag:"button",id:"switch-2",size:"$3",height:"_h-3ktltl",minHeight:"_mih-jiswff",maxHeight:"_mah-13zxgzh",width:"_w-1y5tewk",minWidth:"_miw-6ju5ew",maxWidth:"_maw-1h1d66u",children:(0,i.jsx)(C.Thumb,{animation:"bouncy"})})]}),(0,i.jsxs)(b.sL,{alignItems:"_ai-17do05s",space:"$2",children:[(0,i.jsx)(p.__,{tag:"label",size:"$4",minHeight:"_mih-zdofbb",borderTopLeftRadius:"_btlr-14fwd3h",borderTopRightRadius:"_btrr-jibzuy",borderBottomRightRadius:"_bbrr-wuharc",borderBottomLeftRadius:"_bblr-10aeuqn",paddingRight:"_pr-1af69q1",paddingLeft:"_pl-cemcfa",paddingTop:"_pt-bv6jei",paddingBottom:"_pb-15pda5e",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4ya70",lineHeight:"_lh-1x7rt8o",htmlFor:"switch-3",children:"Dark mode"}),(0,i.jsx)(C,{tag:"button",id:"switch-3",size:"$4",height:"_h-3ktmka",minHeight:"_mih-jisx64",maxHeight:"_mah-13zxhq6",width:"_w-1y5ujor",minWidth:"_miw-6ju65l",maxWidth:"_maw-1h1d6xj",children:(0,i.jsx)(C.Thumb,{animation:"bouncy"})})]}),(0,i.jsxs)("div",{className:" _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-1elmj36 _ai-17do05s ",children:[(0,i.jsx)(p.__,{tag:"label",size:"$5",minHeight:"_mih-zdp0tg",borderTopLeftRadius:"_btlr-14fwd4c",borderTopRightRadius:"_btrr-jibzvt",borderBottomRightRadius:"_bbrr-wuhas7",borderBottomLeftRadius:"_bblr-10aeuri",paddingRight:"_pr-1af6tqs",paddingLeft:"_pl-cemwg1",paddingTop:"_pt-bv6kvw",paddingBottom:"_pb-15pdbms",color:"_col-f1vuru",fontFamily:"_fofam-41wzum",fontWeight:"_fow-1lznk30",letterSpacing:"_letsp-1y1dvx7",fontSize:"_fos-1y4yd5s",lineHeight:"_lh-1x7sbs1",htmlFor:"switch-4",children:"Dark mode"}),(0,i.jsx)(C,{tag:"button",id:"switch-4",size:"$5",height:"_h-3ktnaz",minHeight:"_mih-jisxwt",maxHeight:"_mah-13zxigv",width:"_w-1y5vsx4",minWidth:"_miw-6ju6wa",maxWidth:"_maw-1h1d7o8",children:(0,i.jsx)(C.Thumb,{animation:"bouncy"})})]})]})}}}]);