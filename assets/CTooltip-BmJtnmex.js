import{r as n,_ as z,R as r,b as s,c as G,P as e,q as J,f as K}from"./index-oeFLHF77.js";import{u as Q,p as U,q as W}from"./DefaultLayout-DaUUAvIm.js";import{g as X,e as Y}from"./getRTLPlacement-D3ttmTSo.js";var C=n.forwardRef(function(t,L){var S=t.children,d=t.animation,M=d===void 0?!0:d,q=t.className,H=t.container,m=t.content,v=t.delay,c=v===void 0?0:v,b=t.fallbackPlacements,x=b===void 0?["top","right","bottom","left"]:b,h=t.offset,F=h===void 0?[0,6]:h,g=t.onHide,P=t.onShow,y=t.placement,O=y===void 0?"top":y,w=t.trigger,a=w===void 0?["hover","focus"]:w,u=t.visible,_=z(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),o=n.useRef(null),l=n.useRef(null),j=Q(L,o),R=n.useRef("tooltip".concat(Math.floor(Math.random()*1e6))),p=U(),A=p.initPopper,k=p.destroyPopper,B=p.updatePopper,E=n.useState(!1),D=E[0],T=E[1],N=n.useState(u),f=N[0],i=N[1],I=typeof c=="number"?{show:c,hide:c}:c,V={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:x}},{name:"offset",options:{offset:F}}],placement:X(O,l.current)};return n.useEffect(function(){i(u)},[u]),n.useEffect(function(){return f&&(T(!0),o.current&&(o.current.classList.remove("fade","show"),k()),setTimeout(function(){l.current&&o.current&&(M&&o.current.classList.add("fade"),A(l.current,o.current,V),o.current.classList.add("show"),P&&P())},I.show)),function(){o.current&&(o.current.classList.remove("show"),g&&g(),Y(function(){k(),T(!1)},o.current))}},[f]),n.useEffect(function(){B()},[m]),r.createElement(r.Fragment,null,r.cloneElement(S,s(s(s(s(s({},f&&{"aria-describedby":R.current}),{ref:l}),(a==="click"||a.includes("click"))&&{onClick:function(){return i(!f)}}),(a==="focus"||a.includes("focus"))&&{onFocus:function(){return i(!0)},onBlur:function(){return i(!1)}}),(a==="hover"||a.includes("hover"))&&{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}})),r.createElement(W,{container:H,portal:!0},D&&r.createElement("div",s({className:G("tooltip","bs-tooltip-auto",q),id:R.current,ref:j,role:"tooltip"},_),r.createElement("div",{className:"tooltip-arrow"}),r.createElement("div",{className:"tooltip-inner"},m))))});C.propTypes={animation:e.bool,children:e.node,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:J,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),trigger:K,visible:e.bool};C.displayName="CTooltip";export{C};
