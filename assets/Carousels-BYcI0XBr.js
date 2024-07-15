import{j as e}from"./index-oeFLHF77.js";const n=()=>e.jsx("div",{className:"theme-default aui-theme-default",children:e.jsxs("div",{id:"page",children:[e.jsxs("div",{id:"main",className:"aui-page-panel",children:[e.jsxs("div",{id:"main-header",children:[e.jsx("div",{id:"breadcrumb-section",children:e.jsxs("ol",{id:"breadcrumbs",children:[e.jsx("li",{className:"first",children:e.jsx("span",{children:e.jsx("a",{href:"index.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Split-payment_585728003.html",children:"Split payment"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"BRD---Split-payments---2023-11-15_585957377.html",children:"BRD - Split payments - 2023-11-15"})})})]})}),e.jsx("h1",{id:"title-heading",className:"pagetitle",children:e.jsx("span",{id:"title-text",children:"XeniApp : POC - Split payment Skybird"})})]}),e.jsxs("div",{id:"content",className:"view",children:[e.jsxs("div",{className:"page-metadata",children:["Created by ",e.jsx("span",{className:"author",children:"Gerardo Nizetich"}),", last modified on Dec 07, 2023"]}),e.jsxs("div",{id:"main-content",className:"wiki-content group",children:[e.jsx("style",{type:"text/css",children:`
                div.rbtoc1720512150529 {padding: 0px;}
                div.rbtoc1720512150529 ul {list-style: disc;margin-left: 0px;}
                div.rbtoc1720512150529 li {margin-left: 0px;padding-left: 0px;}
              `}),e.jsx("div",{className:"toc-macro rbtoc1720512150529",children:e.jsxs("ul",{className:"toc-indentation",children:[e.jsxs("li",{children:[e.jsx("a",{href:"#POC-SplitpaymentSkybird-Context",children:"Context"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#POC-SplitpaymentSkybird-Proposalflow",children:"Proposal flow"})}),e.jsx("li",{children:e.jsx("a",{href:"#POC-SplitpaymentSkybird-TechnicalRequirements",children:"Technical Requirements"})})]})]}),e.jsx("li",{children:e.jsx("a",{href:"#POC-SplitpaymentSkybird-Checklist",children:"Check list"})})]})}),e.jsx("hr",{}),e.jsx("h1",{id:"POC-SplitpaymentSkybird-Context",children:"Context"}),e.jsx("p",{children:"Skybird vendor confirmed that they can manage the payment through the merchant id of the validating carrier. This is the best option to create a PoC for the flow proposed and analyze the data of 1 vendor."}),e.jsx("hr",{}),e.jsx("h2",{id:"POC-SplitpaymentSkybird-Proposalflow",children:"Proposal flow"}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-left",width:"1011",loading:"lazy",src:"/src/attachments/589627496/592805892.png?width=1011",alt:"Proposal Flow"})}),e.jsx("hr",{}),e.jsx("h2",{id:"POC-SplitpaymentSkybird-TechnicalRequirements",children:"Technical Requirements"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Identify the Bookings to process from Skybird"})}),e.jsx("li",{children:e.jsx("p",{children:"Avoid the debit of the Booking through Xeni Payment gateway"})}),e.jsx("li",{children:e.jsx("p",{children:"Thomalex resend to the vendor (Skybird) and wait for the response."})}),e.jsx("li",{children:e.jsx("p",{children:"Received the transaction response."})}),e.jsxs("li",{children:[e.jsx("p",{children:"Send a notification to customer to advice the status of the transaction"}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("p",{children:"In case Transaction OK: Advise consumer that the debit will be enter in his Credit Card with the Validating carrier name."})})})]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Proposal Technical Flow"})}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-left",width:"745",loading:"lazy",src:"/src/attachments/589627496/592805931.png?width=745",alt:"Technical Flow"})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h1",{id:"POC-SplitpaymentSkybird-Checklist",children:"Check list"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Thomalex"}),": Validating flow with them"]})}),e.jsxs("li",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Skybird"}),": Create the right environment for testing"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Do we have the API documentation of Skybird?"})}),e.jsx("li",{children:e.jsx("p",{children:"Is it possible to connect directly with them without Thomalex in the middle? (Not now, this is for the future)"})})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"How to build the prototype in Xeni for this project?"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("a",{className:"confluence-userlink user-mention",href:"https://xeni-workspace.atlassian.net/wiki/people/63bc5b4a04b5f5c7b5ecee8b?ref=confluence",target:"_blank",rel:"noopener noreferrer",children:"Rajesh"})," ","and"," ",e.jsx("a",{className:"confluence-userlink user-mention",href:"https://xeni-workspace.atlassian.net/wiki/people/5f97a08244658b007112ee94?ref=confluence",target:"_blank",rel:"noopener noreferrer",children:"Ayush Kumar"})]})}),e.jsx("li",{children:e.jsx("p",{children:"How can we detach the flight services from our Checkout logic"})})]})]})]})]}),e.jsxs("div",{className:"pageSection group",children:[e.jsx("div",{className:"pageSectionHeader",children:e.jsx("h2",{id:"attachments",className:"pageSectionTitle",children:"Attachments:"})}),e.jsxs("div",{className:"greybox",align:"left",children:[e.jsx("img",{src:"images/icons/bullet_blue.gif",height:"8",width:"8",alt:""}),e.jsx("a",{href:"https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/592773126.png",children:"PocSkybird_SplitPayment.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:"8",width:"8",alt:""}),e.jsx("a",{href:"https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/592805892.png",children:"PocSkybird_SplitPayment.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:"8",width:"8",alt:""}),e.jsx("a",{href:"https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/593133579.png",children:"SplitPymntTicketingFlow.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:"8",width:"8",alt:""}),e.jsx("a",{href:"https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/592805931.png",children:"SplitPymntTicketingFlow.png"})," ","(image/png)",e.jsx("br",{})]})]})]})]}),e.jsx("div",{id:"footer",role:"contentinfo",children:e.jsxs("section",{className:"footer-body",children:[e.jsx("p",{children:"Document generated by Confluence on Jul 09, 2024 08:02"}),e.jsx("div",{id:"footer-logo",children:e.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})});export{n as default};
