import{r as w,_ as T,R as r,b as N,c as R,P as t,d as A,j as e}from"./index-KIWeJkvA.js";import{c as l,C as J}from"./index.es-CFWPrTXs.js";import{f as B,a as k,C as P}from"./index.esm-C_FpzrW6.js";import{h as O,i as $,j as D,k as x,b as f,K as V,H,q as K,t as I}from"./DefaultLayout-DBPfNGEY.js";import{a,C as y}from"./CRow-BH1ltTgt.js";import{C as W,a as S}from"./CCardBody-BEJiuWlv.js";import{C as te}from"./CCardHeader-kgv3Ll_p.js";import{c as re,b as ie,a as oe}from"./cib-twitter-CkoJaElQ.js";import{e as ne,c as Z,g as L,b as _,a as z,f as ce,h as U,k as q,d as G,j as Q,i as ee}from"./cil-user-follow-Cajvmh3i.js";import{C as ae}from"./CProgress-BeQLdJXw.js";import{c as se}from"./cil-user-Dlmw-Gem.js";import{C as de}from"./CCardGroup-DzssjZEI.js";var Y=w.forwardRef(function(s,i){var o=s.children,h=s.className,c=T(s,["children","className"]);return r.createElement("div",N({className:R("card-footer",h)},c,{ref:i}),o)});Y.propTypes={children:t.node,className:t.string};Y.displayName="CCardFooter";var E=w.forwardRef(function(s,i){var o,h=s.action,c=s.chart,d=s.className,m=s.color,u=s.title,g=s.value,j=T(s,["action","chart","className","color","title","value"]);return r.createElement(W,N({className:R((o={},o["bg-".concat(m)]=m,o["text-white"]=m,o),d)},j,{ref:i}),r.createElement(S,{className:"pb-0 d-flex justify-content-between align-items-start"},r.createElement("div",null,g&&r.createElement("div",{className:"fs-4 fw-semibold"},g),u&&r.createElement("div",null,u)),h),c)});E.propTypes={action:t.node,chart:t.oneOfType([t.string,t.node]),className:t.string,color:A,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};E.displayName="CWidgetStatsA";var v=w.forwardRef(function(s,i){var o=s.className,h=s.color,c=s.inverse,d=s.progress,m=s.text,u=s.title,g=s.value,j=T(s,["className","color","inverse","progress","text","title","value"]);return r.createElement(W,N({className:o,color:h},c&&{textColor:"white"},j,{ref:i}),r.createElement(S,null,g&&r.createElement("div",{className:"fs-4 fw-semibold"},g),u&&r.createElement("div",null,u),r.createElement(ae,N({className:"my-2",height:4},c&&{white:!0},d)),m&&r.createElement("small",{className:c?"text-white text-opacity-75":"text-body-secondary"},m)))});v.propTypes={className:t.string,color:A,inverse:t.bool,progress:t.object,text:t.string,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};v.displayName="CWidgetCWidgetStatsB";var n=w.forwardRef(function(s,i){var o=s.className,h=s.color,c=s.icon,d=s.inverse,m=s.progress,u=s.title,g=s.value,j=T(s,["className","color","icon","inverse","progress","title","value"]);return r.createElement(W,N({className:o,color:h},d&&{textColor:"white"},j,{ref:i}),r.createElement(S,null,c&&r.createElement("div",{className:R("text-end mb-4",d?"text-white text-opacity-75":"text-body-secondary")},c),g&&r.createElement("div",{className:"fs-4 fw-semibold"},g),u&&r.createElement("div",{className:d?"text-white text-opacity-75":"text-body-secondary"},u),r.createElement(ae,N({className:"mt-3 mb-0",height:4},d&&{white:!0},m))))});n.propTypes={className:t.string,color:A,icon:t.oneOfType([t.string,t.node]),inverse:t.bool,progress:t.object,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};n.displayName="CWidgetStatsCWidgetStatsC";var M=w.forwardRef(function(s,i){var o,h=s.className,c=s.chart,d=s.color,m=s.icon,u=s.values,g=T(s,["className","chart","color","icon","values"]);return r.createElement(W,N({className:h},g,{ref:i}),r.createElement(te,{className:R("position-relative d-flex justify-content-center align-items-center",(o={},o["bg-".concat(d)]=d,o))},m,c),r.createElement(S,{className:"row text-center"},u&&u.map(function(j,F){return r.createElement(r.Fragment,{key:F},F%2!==0&&r.createElement("div",{className:"vr"}),r.createElement(a,null,r.createElement("div",{className:"fs-5 fw-semibold"},j.value),r.createElement("div",{className:"text-uppercase text-body-secondary small"},j.title)))})))});M.propTypes={chart:t.oneOfType([t.string,t.node]),className:t.string,color:A,icon:t.oneOfType([t.string,t.node]),values:t.arrayOf(t.any)};M.displayName="CWidgetStatsD";var C=w.forwardRef(function(s,i){var o=s.chart,h=s.className,c=s.title,d=s.value,m=T(s,["chart","className","title","value"]);return r.createElement(W,N({className:R(h)},m,{ref:i}),r.createElement(S,{className:"text-center"},c&&r.createElement("div",{className:"text-body-secondary small text-uppercase fw-semibold"},c),d&&r.createElement("div",{className:"fs-6 fw-semibold py-3"},d),o))});C.propTypes={children:t.node,chart:t.oneOfType([t.string,t.node]),className:t.string,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};C.displayName="CWidgetStatsE";var p=w.forwardRef(function(s,i){var o=s.className,h=s.color,c=s.footer,d=s.icon,m=s.padding,u=m===void 0?!0:m,g=s.title,j=s.value,F=T(s,["className","color","footer","icon","padding","title","value"]);return r.createElement(W,N({className:o},F,{ref:i}),r.createElement(S,{className:"d-flex align-items-center ".concat(u===!1&&"p-0")},r.createElement("div",{className:"me-3 text-white bg-".concat(h," ").concat(u?"p-3":"p-4")},d),r.createElement("div",null,r.createElement("div",{className:"fs-6 fw-semibold text-".concat(h)},j),r.createElement("div",{className:"text-body-secondary text-uppercase fw-semibold small"},g))),c&&r.createElement(Y,null,c))});p.propTypes={className:t.string,color:A,footer:t.oneOfType([t.string,t.node]),icon:t.oneOfType([t.string,t.node]),padding:t.bool,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};p.displayName="CWidgetStatsF";var b=function(s,i){if(!(typeof window>"u")&&!(typeof document>"u")){var o=document.body;return window.getComputedStyle(o,null).getPropertyValue(s).replace(/^\s/,"")}};const X=s=>{const i={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return e.jsxs(y,{className:s.className,xs:{gutter:4},children:[e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(M,{...s.withCharts&&{chart:e.jsx(B,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:i})},icon:e.jsx(l,{icon:re,height:52,className:"my-4 text-white"}),values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],style:{"--cui-card-cap-bg":"#3b5998"}})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(M,{...s.withCharts&&{chart:e.jsx(B,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:i})},icon:e.jsx(l,{icon:ie,height:52,className:"my-4 text-white"}),values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],style:{"--cui-card-cap-bg":"#00aced"}})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(M,{...s.withCharts&&{chart:e.jsx(B,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:i})},icon:e.jsx(l,{icon:oe,height:52,className:"my-4 text-white"}),values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],style:{"--cui-card-cap-bg":"#4875b4"}})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(M,{color:"warning",...s.withCharts&&{chart:e.jsx(B,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:i})},icon:e.jsx(l,{icon:ne,height:52,className:"my-4 text-white"}),values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]})})]})};X.propTypes={className:t.string,withCharts:t.bool};const le=s=>{const i=w.useRef(null),o=w.useRef(null);return w.useEffect(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{i.current&&setTimeout(()=>{i.current.data.datasets[0].pointBackgroundColor=b("--cui-primary"),i.current.update()}),o.current&&setTimeout(()=>{o.current.data.datasets[0].pointBackgroundColor=b("--cui-info"),o.current.update()})})},[i,o]),e.jsxs(y,{className:s.className,xs:{gutter:4},children:[e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(E,{color:"primary",value:e.jsxs(e.Fragment,{children:["26K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-12.4% ",e.jsx(l,{icon:Z}),")"]})]}),title:"Users",action:e.jsxs(O,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(x,{children:"Action"}),e.jsx(x,{children:"Another action"}),e.jsx(x,{children:"Something else here..."}),e.jsx(x,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{ref:i,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:b("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(E,{color:"info",value:e.jsxs(e.Fragment,{children:["$6.200"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(40.9% ",e.jsx(l,{icon:_}),")"]})]}),title:"Income",action:e.jsxs(O,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(x,{children:"Action"}),e.jsx(x,{children:"Another action"}),e.jsx(x,{children:"Something else here..."}),e.jsx(x,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{ref:o,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:b("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(E,{color:"warning",value:e.jsxs(e.Fragment,{children:["2.49%"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(84.7% ",e.jsx(l,{icon:_}),")"]})]}),title:"Conversion Rate",action:e.jsxs(O,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(x,{children:"Action"}),e.jsx(x,{children:"Another action"}),e.jsx(x,{children:"Something else here..."}),e.jsx(x,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(k,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(E,{color:"danger",value:e.jsxs(e.Fragment,{children:["44K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-23.6% ",e.jsx(l,{icon:Z}),")"]})]}),title:"Sessions",action:e.jsxs(O,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(x,{children:"Action"}),e.jsx(x,{children:"Another action"}),e.jsx(x,{children:"Something else here..."}),e.jsx(x,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(P,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{border:{display:!1},grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})};le.propTypes={className:t.string,withCharts:t.bool};const Ne=()=>{const s=(i,o)=>Math.floor(Math.random()*(o-i+1)+i);return e.jsxs(W,{className:"mb-4",children:[e.jsx(te,{children:"Widgets"}),e.jsxs(S,{children:[e.jsx(f,{href:"components/widgets/#cwidgetstatsa",children:e.jsx(le,{})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsb",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{progress:{color:"success",value:89.9},text:"Lorem ipsum dolor sit amet enim.",title:"Widget title",value:"89.9%"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{value:"12.124",title:"Widget title",progress:{color:"info",value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{value:"$98.111,00",title:"Widget title",progress:{color:"warning",value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{value:"2 TB",title:"Widget title",progress:{color:"primary",value:89.9},text:"Lorem ipsum dolor sit amet enim."})})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsb",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{color:"success",inverse:!0,value:"89.9%",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{color:"info",inverse:!0,value:"12.124",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{color:"warning",inverse:!0,value:"$98.111,00",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{color:"primary",inverse:!0,value:"2 TB",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatse",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(C,{chart:e.jsx(P,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:b("--cui-danger"),borderColor:"transparent",borderWidth:1,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(C,{chart:e.jsx(P,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:b("--cui-primary"),borderColor:"transparent",borderWidth:1,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(C,{chart:e.jsx(P,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:b("--cui-success"),borderColor:"transparent",borderWidth:1,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(C,{chart:e.jsx(k,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:"transparent",borderColor:b("--cui-danger"),borderWidth:2,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(C,{chart:e.jsx(k,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:"transparent",borderColor:b("--cui-success"),borderWidth:2,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(C,{chart:e.jsx(k,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:"transparent",borderColor:b("--cui-info"),borderWidth:2,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsf",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:V,size:"xl"}),title:"income",value:"$1.999,50",color:"primary"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:se,size:"xl"}),title:"income",value:"$1.999,50",color:"info"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:H,size:"xl"}),title:"income",value:"$1.999,50",color:"warning"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:K,size:"xl"}),title:"income",value:"$1.999,50",color:"danger"})})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsf",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:V,size:"xl"}),title:"income",value:"$1.999,50",color:"primary",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:ce,size:"xl"}),title:"income",value:"$1.999,50",color:"info",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:H,size:"xl"}),title:"income",value:"$1.999,50",color:"warning",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:K,size:"xl"}),title:"income",value:"$1.999,50",color:"danger",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsf",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:V,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"primary"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:se,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"info"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:H,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"warning"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(p,{icon:e.jsx(l,{width:24,icon:K,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"danger"})})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsd",children:e.jsx(X,{})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsd",children:e.jsx(X,{withCharts:!0})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsc",children:e.jsxs(de,{className:"mb-4",children:[e.jsx(n,{icon:e.jsx(l,{icon:U,height:36}),value:"87.500",title:"Visitors",progress:{color:"info",value:75}}),e.jsx(n,{icon:e.jsx(l,{icon:q,height:36}),value:"385",title:"New Clients",progress:{color:"success",value:75}}),e.jsx(n,{icon:e.jsx(l,{icon:G,height:36}),value:"1238",title:"Products sold",progress:{color:"warning",value:75}}),e.jsx(n,{icon:e.jsx(l,{icon:I,height:36}),value:"28%",title:"Returning Visitors",progress:{color:"primary",value:75}}),e.jsx(n,{icon:e.jsx(l,{icon:Q,height:36}),value:"5:34:11",title:"Avg. Time",progress:{color:"danger",value:75}})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsc",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{icon:e.jsx(l,{icon:U,height:36}),value:"87.500",title:"Visitors",progress:{color:"info",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{icon:e.jsx(l,{icon:q,height:36}),value:"385",title:"New Clients",progress:{color:"success",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{icon:e.jsx(l,{icon:G,height:36}),value:"1238",title:"Products sold",progress:{color:"warning",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{icon:e.jsx(l,{icon:I,height:36}),value:"28%",title:"Returning Visitors",progress:{color:"primary",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{icon:e.jsx(l,{icon:Q,height:36}),value:"5:34:11",title:"Avg. Time",progress:{color:"danger",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{icon:e.jsx(l,{icon:ee,height:36}),value:"972",title:"Comments",progress:{color:"info",value:75}})})]})}),e.jsx(f,{href:"components/widgets/#cwidgetstatsc",children:e.jsxs(y,{xs:{gutter:4},children:[e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{color:"info",icon:e.jsx(l,{icon:U,height:36}),value:"87.500",title:"Visitors",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{color:"success",icon:e.jsx(l,{icon:q,height:36}),value:"385",title:"New Clients",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{color:"warning",icon:e.jsx(l,{icon:G,height:36}),value:"1238",title:"Products sold",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{color:"primary",icon:e.jsx(l,{icon:I,height:36}),value:"28%",title:"Returning Visitors",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{color:"danger",icon:e.jsx(l,{icon:Q,height:36}),value:"5:34:11",title:"Avg. Time",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(n,{color:"info",icon:e.jsx(l,{icon:ee,height:36}),value:"972",title:"Comments",inverse:!0,progress:{value:75}})})]})})]})]})};export{Ne as default};