import{r as u,_ as b,R as v,b as w,c as j,P as d,j as e}from"./index-oeFLHF77.js";import{_ as G,f as J,a as Q,T as U,u as X,b as A}from"./DefaultLayout-DaUUAvIm.js";import"./index.es-Bu3AXYcB.js";import{C as Z,a as ee}from"./CRow-DJYEdTVn.js";import{C as T,a as I}from"./CCardBody-CQd88IBd.js";import{C as K}from"./CCardHeader-DwYqs9Dq.js";import"./cil-user-Dlmw-Gem.js";var V=u.createContext({}),E=u.forwardRef(function(s,a){var c=s.children,t=s.activeItemKey,r=s.alwaysOpen,h=r===void 0?!1:r,l=s.className,i=s.flush,o=b(s,["children","activeItemKey","alwaysOpen","className","flush"]),n=u.useState(t),m=n[0],p=n[1];return v.createElement("div",w({className:j("accordion",{"accordion-flush":i},l)},o,{ref:a}),v.createElement(V.Provider,{value:{_activeItemKey:m,alwaysOpen:h,setActiveKey:p}},c))});E.propTypes={alwaysOpen:d.bool,activeItemKey:d.oneOfType([d.number,d.string]),children:d.node,className:d.string,flush:d.bool};E.displayName="CAccordion";var L=u.createContext({}),g=u.forwardRef(function(s,a){var c=s.children,t=s.className,r=s.itemKey,h=b(s,["children","className","itemKey"]),l=u.useRef(r??Math.random().toString(36).slice(2,11)),i=u.useContext(V),o=i._activeItemKey,n=i.alwaysOpen,m=i.setActiveKey,p=u.useState(o===l.current),f=p[0],C=p[1];return u.useEffect(function(){!n&&f&&m(l.current)},[f]),u.useEffect(function(){C(o===l.current)},[o]),v.createElement("div",w({className:j("accordion-item",t)},h,{ref:a}),v.createElement(L.Provider,{value:{setVisible:C,visible:f}},c))});g.propTypes={children:d.node,className:d.string,itemKey:d.oneOfType([d.number,d.string])};g.displayName="CAccordionItem";function H(){return H=Object.assign?Object.assign.bind():function(s){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&(s[t]=c[t])}return s},H.apply(this,arguments)}function se(s,a){return s.classList?!!a&&s.classList.contains(a):(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+a+" ")!==-1}function te(s,a){s.classList?s.classList.add(a):se(s,a)||(typeof s.className=="string"?s.className=s.className+" "+a:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+a))}function P(s,a){return s.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ne(s,a){s.classList?s.classList.remove(a):typeof s.className=="string"?s.className=P(s.className,a):s.setAttribute("class",P(s.className&&s.className.baseVal||"",a))}var ie=function(a,c){return a&&c&&c.split(" ").forEach(function(t){return te(a,t)})},R=function(a,c){return a&&c&&c.split(" ").forEach(function(t){return ne(a,t)})},O=function(s){G(a,s);function a(){for(var t,r=arguments.length,h=new Array(r),l=0;l<r;l++)h[l]=arguments[l];return t=s.call.apply(s,[this].concat(h))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(i,o){var n=t.resolveArguments(i,o),m=n[0],p=n[1];t.removeClasses(m,"exit"),t.addClass(m,p?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(i,o)},t.onEntering=function(i,o){var n=t.resolveArguments(i,o),m=n[0],p=n[1],f=p?"appear":"enter";t.addClass(m,f,"active"),t.props.onEntering&&t.props.onEntering(i,o)},t.onEntered=function(i,o){var n=t.resolveArguments(i,o),m=n[0],p=n[1],f=p?"appear":"enter";t.removeClasses(m,f),t.addClass(m,f,"done"),t.props.onEntered&&t.props.onEntered(i,o)},t.onExit=function(i){var o=t.resolveArguments(i),n=o[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(i)},t.onExiting=function(i){var o=t.resolveArguments(i),n=o[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(i)},t.onExited=function(i){var o=t.resolveArguments(i),n=o[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(i)},t.resolveArguments=function(i,o){return t.props.nodeRef?[t.props.nodeRef.current,i]:[i,o]},t.getClassNames=function(i){var o=t.props.classNames,n=typeof o=="string",m=n&&o?o+"-":"",p=n?""+m+i:o[i],f=n?p+"-active":o[i+"Active"],C=n?p+"-done":o[i+"Done"];return{baseClassName:p,activeClassName:f,doneClassName:C}},t}var c=a.prototype;return c.addClass=function(r,h,l){var i=this.getClassNames(h)[l+"ClassName"],o=this.getClassNames("enter"),n=o.doneClassName;h==="appear"&&l==="done"&&n&&(i+=" "+n),l==="active"&&r&&J(r),i&&(this.appliedClasses[h][l]=i,ie(r,i))},c.removeClasses=function(r,h){var l=this.appliedClasses[h],i=l.base,o=l.active,n=l.done;this.appliedClasses[h]={},i&&R(r,i),o&&R(r,o),n&&R(r,n)},c.render=function(){var r=this.props;r.classNames;var h=Q(r,["classNames"]);return v.createElement(U,H({},h,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(v.Component);O.defaultProps={classNames:""};O.propTypes={};var $=u.forwardRef(function(s,a){var c=s.children,t=s.className,r=s.horizontal,h=s.onHide,l=s.onShow,i=s.visible,o=b(s,["children","className","horizontal","onHide","onShow","visible"]),n=u.useRef(null),m=X(a,n),p=u.useState(),f=p[0],C=p[1],Y=u.useState(),B=Y[0],N=Y[1],_=function(){if(l&&l(),r){n.current&&N(n.current.scrollWidth);return}n.current&&C(n.current.scrollHeight)},z=function(){if(r){N(0);return}C(0)},W=function(){if(r){n.current&&N(n.current.scrollWidth);return}n.current&&C(n.current.scrollHeight)},D=function(){if(h&&h(),r){N(0);return}C(0)},F=function(){if(r){N(0);return}C(0)};return v.createElement(O,{in:i,nodeRef:n,onEntering:_,onEntered:z,onExit:W,onExiting:D,onExited:F,timeout:350},function(S){var k=f===0?null:{height:f},q=B===0?null:{width:B};return v.createElement("div",w({className:j(t,{"collapse-horizontal":r,collapsing:S==="entering"||S==="exiting","collapse show":S==="entered",collapse:S==="exited"}),style:w(w({},k),q)},o,{ref:m}),c)})});$.propTypes={children:d.node,className:d.string,horizontal:d.bool,onHide:d.func,onShow:d.func,visible:d.bool};$.displayName="CCollapse";var x=u.forwardRef(function(s,a){var c=s.children,t=s.className,r=b(s,["children","className"]),h=u.useContext(L).visible;return v.createElement($,{className:"accordion-collapse",visible:h},v.createElement("div",w({className:j("accordion-body",t)},r,{ref:a}),c))});x.propTypes={children:d.node,className:d.string};x.displayName="CAccordionBody";var M=u.forwardRef(function(s,a){var c=s.children,t=s.className,r=b(s,["children","className"]),h=u.useContext(L),l=h.visible,i=h.setVisible;return v.createElement("button",w({type:"button",className:j("accordion-button",{collapsed:!l},t),"aria-expanded":!l,onClick:function(){return i(!l)}},r,{ref:a}),c)});M.propTypes={children:d.node,className:d.string};M.displayName="CAccordionButton";var y=u.forwardRef(function(s,a){var c=s.children,t=s.className,r=b(s,["children","className"]);return v.createElement("div",w({className:j("accordion-header",t)},r,{ref:a}),v.createElement(M,null,c))});y.propTypes={children:d.node,className:d.string};y.displayName="CAccordionHeader";const ue=()=>e.jsx(Z,{children:e.jsxs(ee,{xs:12,children:[e.jsxs(T,{className:"mb-4",children:[e.jsx(K,{children:e.jsx("strong",{children:"React Accordion"})}),e.jsxs(I,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(A,{href:"components/accordion",children:e.jsxs(E,{activeItemKey:2,children:[e.jsxs(g,{itemKey:1,children:[e.jsx(y,{children:"Accordion Item #1"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(g,{itemKey:2,children:[e.jsx(y,{children:"Accordion Item #2"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(g,{itemKey:3,children:[e.jsx(y,{children:"Accordion Item #3"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),e.jsxs(T,{className:"mb-4",children:[e.jsxs(K,{children:[e.jsx("strong",{children:"React Accordion"})," ",e.jsx("small",{children:"Flush"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"flush"})," to remove the default ",e.jsx("code",{children:"background-color"}),", some borders, and some rounded corners to render accordions edge-to-edge with their parent container."]}),e.jsx(A,{href:"components/accordion#flush",children:e.jsxs(E,{flush:!0,children:[e.jsxs(g,{itemKey:1,children:[e.jsx(y,{children:"Accordion Item #1"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(g,{itemKey:2,children:[e.jsx(y,{children:"Accordion Item #2"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(g,{itemKey:3,children:[e.jsx(y,{children:"Accordion Item #3"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),e.jsxs(T,{className:"mb-4",children:[e.jsxs(K,{children:[e.jsx("strong",{children:"React Accordion"})," ",e.jsx("small",{children:"Always open"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"alwaysOpen"})," property to make accordion items stay open when another item is opened."]}),e.jsx(A,{href:"components/accordion#flush",children:e.jsxs(E,{alwaysOpen:!0,children:[e.jsxs(g,{itemKey:1,children:[e.jsx(y,{children:"Accordion Item #1"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(g,{itemKey:2,children:[e.jsx(y,{children:"Accordion Item #2"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(g,{itemKey:3,children:[e.jsx(y,{children:"Accordion Item #3"}),e.jsxs(x,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]})]})});export{ue as default};
