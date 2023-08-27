"use strict";(self.webpackChunkezyvuefree=self.webpackChunkezyvuefree||[]).push([[9341],{19341:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(15671),o=r(43144),i=r(60136),n=r(29388),l=r(72791),s=r(2451),c=r(91523),h=r(80184),p=function(e){(0,i.Z)(l,e);var t=(0,n.Z)(l);function l(){return(0,a.Z)(this,l),t.apply(this,arguments)}return(0,o.Z)(l,[{key:"render",value:function(){return(0,h.jsxs)("div",{className:"help-page",children:[(0,h.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,h.jsx)(c.rU,{to:"/help",children:"Help Center"}),(0,h.jsx)(c.rU,{to:"/help/editing",children:"Editing"}),(0,h.jsx)(c.rU,{to:"/help/effects",children:"Effects"})]}),(0,h.jsx)("h2",{children:"Post-Processing Effects"}),(0,h.jsx)("p",{children:"Post processing effects are special effects applied to the final rendered image of each frame."}),(0,h.jsx)("h4",{children:"Bloom"}),(0,h.jsxs)("p",{children:["The Bloom effect makes bright part of an object glow, such as neon lights when viewed through a camera.",(0,h.jsx)("br",{})]}),(0,h.jsx)("img",{alt:"configurator",src:r(51979)}),(0,h.jsx)("h5",{children:"Options"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"Strength - the intensity of glow"}),(0,h.jsx)("li",{children:"Threshold - determines which areas glow"}),(0,h.jsx)("li",{children:"Radius - the radius of the glow area"})]}),(0,h.jsx)("h4",{children:"Depth of field"}),(0,h.jsx)("img",{alt:"configurator",src:r(85544)}),(0,h.jsx)("p",{children:"This simulates how camera lenses focus at a certain distance while everything else is out of focus and blurred."}),(0,h.jsx)("h5",{children:"Options"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"Focus - distance to the point of focus"}),(0,h.jsx)("li",{children:"Apertue - the smaller the value is, the shallower the depth of field is"}),(0,h.jsx)("li",{children:"blur - amount of blur used"})]})]})}}]),l}(l.Component)},2451:function(e,t,r){r.d(t,{Z:function(){return g}});var a=r(87462),o=r(93433),i=r(45987),n=r(72791),l=(r(57441),r(28182)),s=r(38317),c=r(38302),h=r(13108),p=(0,r(94327).Z)(n.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=r(26706);var u=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,h._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=(0,i.Z)(e,["classes"]);return n.createElement(d.Z,(0,a.Z)({component:"li",className:t.root,focusRipple:!0},r),n.createElement(p,{className:t.icon}))}));var f=n.forwardRef((function(e,t){var r=e.children,s=e.classes,h=e.className,p=e.component,d=void 0===p?"nav":p,f=e.expandText,g=void 0===f?"Show path":f,m=e.itemsAfterCollapse,y=void 0===m?1:m,x=e.itemsBeforeCollapse,v=void 0===x?1:x,b=e.maxItems,j=void 0===b?8:b,Z=e.separator,w=void 0===Z?"/":Z,k=(0,i.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=n.useState(!1),E=C[0],B=C[1],N=n.Children.toArray(r).filter((function(e){return n.isValidElement(e)})).map((function(e,t){return n.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return n.createElement(c.Z,(0,a.Z)({ref:t,component:d,color:"textSecondary",className:(0,l.Z)(s.root,h)},k),n.createElement("ol",{className:s.ol},function(e,t,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,n.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},r)):a.push(o),a}),[])}(E||j&&N.length<=j?N:function(e){return v+y>=e.length?e:[].concat((0,o.Z)(e.slice(0,v)),[n.createElement(u,{"aria-label":g,key:"ellipsis",onClick:function(e){B(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,o.Z)(e.slice(e.length-y,e.length)))}(N),s.separator,w)))})),g=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},38302:function(e,t,r){var a=r(87462),o=r(45987),i=r(72791),n=r(28182),l=r(38317),s=r(91122),c={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},h=i.forwardRef((function(e,t){var r=e.align,l=void 0===r?"inherit":r,h=e.classes,p=e.className,d=e.color,u=void 0===d?"initial":d,f=e.component,g=e.display,m=void 0===g?"initial":g,y=e.gutterBottom,x=void 0!==y&&y,v=e.noWrap,b=void 0!==v&&v,j=e.paragraph,Z=void 0!==j&&j,w=e.variant,k=void 0===w?"body1":w,C=e.variantMapping,E=void 0===C?c:C,B=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=f||(Z?"p":E[k]||c[k])||"span";return i.createElement(N,(0,a.Z)({className:(0,n.Z)(h.root,p,"inherit"!==k&&h[k],"initial"!==u&&h["color".concat((0,s.Z)(u))],b&&h.noWrap,x&&h.gutterBottom,Z&&h.paragraph,"inherit"!==l&&h["align".concat((0,s.Z)(l))],"initial"!==m&&h["display".concat((0,s.Z)(m))]),ref:t},B))}));t.Z=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(h)},51979:function(e,t,r){e.exports=r.p+"static/media/bloom.cb305b01fad3a6a00fcb.jpg"},85544:function(e,t,r){e.exports=r.p+"static/media/dof.66fe7ecae0909a2b366f.jpg"}}]);
//# sourceMappingURL=9341.6cbb266b.chunk.js.map