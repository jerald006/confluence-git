import{g as s}from"./getTransitionDurationFromElement-Cpu4p4hx.js";import{p as a}from"./DefaultLayout-CRX_iHWq.js";var u=function(t){typeof t=="function"&&t()},g=function(t){t.dispatchEvent(new Event("transitionend"))},p=function(t,e,r){if(r===void 0&&(r=!0),!r){u(t);return}var f=5,o=s(e)+f,n=!1,i=function(d){var v=d.target;v===e&&(n=!0,e.removeEventListener("transitionend",i),u(t))};e.addEventListener("transitionend",i),setTimeout(function(){n||g(e)},o)},m=function(t,e){switch(t){case"right":return a(e)?"left":"right";case"left":return a(e)?"right":"left";default:return t}};export{p as e,m as g};
