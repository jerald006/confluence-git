import{j as e}from"./index-DLzoeoce.js";function s(){return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"XeniApp : FRD - FOID Inclusion - MVP1"}),e.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),e.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),e.jsxs("div",{id:"page",children:[e.jsxs("div",{id:"main",className:"aui-page-panel",children:[e.jsxs("div",{id:"main-header",children:[e.jsx("div",{id:"breadcrumb-section",children:e.jsxs("ol",{id:"breadcrumbs",children:[e.jsx("li",{className:"first",children:e.jsx("span",{children:e.jsx("a",{href:"index.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Passenger-Additional-Information._585728037.html",children:"Passenger Additional Information."})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"FOID-inclusion_593100817.html",children:"FOID inclusion"})})})]})}),e.jsx("h1",{id:"title-heading",className:"pagetitle",children:e.jsx("span",{id:"title-text",children:"XeniApp : FRD - FOID Inclusion - MVP1"})})]}),e.jsxs("div",{id:"content",className:"view",children:[e.jsxs("div",{className:"page-metadata",children:["Created by ",e.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Dec 27, 2023"]}),e.jsxs("div",{id:"main-content",className:"wiki-content group",children:[e.jsx("style",{type:"text/css",dangerouslySetInnerHTML:{__html:`/*<![CDATA[*/
div.rbtoc1719206652614 {padding: 0px;}
div.rbtoc1719206652614 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1719206652614 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/`}}),e.jsx("div",{className:"toc-macro rbtoc1719206652614",children:e.jsx("ul",{className:"toc-indentation",children:e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-Functionalobjective",children:"Functional objective"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-Context",children:"Context"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-Prerequisites",children:"Prerequisites"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-MVPScope",children:"MVP Scope"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-Functionalflow",children:"Functional flow"})}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-Technicalrequirements",children:"Technical requirements"}),e.jsx("ul",{className:"toc-indentation",children:e.jsx("li",{children:e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-Prerequisites.1",children:"Prerequisites"})})})]}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-FOIDInclusion-MVP1-Design",children:"Design"})})]})]})})}),e.jsx("hr",{}),e.jsx("h1",{id:"FRD-FOIDInclusion-MVP1-Functionalobjective",children:"Functional objective"}),e.jsx("p",{children:"All the reservations created through Flight Product must include the SSR:FOID to avoid any issues at the time of ticketing."}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-FOIDInclusion-MVP1-Context",children:"Context"}),e.jsxs("p",{children:["In the Airline industry, every time more Airlines claim the form of identification (FOID) of each passenger in the booking at the time of Ticketing. ",e.jsx("br",{}),"We are facing some problems with this rule, since some ticketings failed because of it, and solving the problem requires manual intervention, for reservation through Sabre and Amadeus GDSs."]}),e.jsx("div",{className:"panel",style:{backgroundColor:"#EAE6FF",borderColor:"#998DD9",borderWidth:1},children:e.jsx("div",{className:"panelContent",style:{backgroundColor:"#EAE6FF"},children:e.jsx("p",{children:"TravelFusion is not a standard GDS, so they do not claim for FOID. Anyway, the idea is to pass via Thomalex the FOID information for every reservation."})})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-FOIDInclusion-MVP1-Prerequisites",children:"Prerequisites"}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("p",{children:"Get the National Identification of each passenger in a booking."})})}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-FOIDInclusion-MVP1-MVPScope",children:"MVP Scope"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Pass the ID Number to the Thomalex endpoint /cart/book"})}),e.jsx("li",{children:e.jsx("p",{children:"Not pass the ID Type"})}),e.jsx("li",{children:e.jsx("p",{children:"Not Pass the Nationality code"})}),e.jsx("li",{children:e.jsx("p",{children:"Applicable for All reservation created in Xeni"})}),e.jsx("li",{children:e.jsx("p",{children:"Implemented only for GDSs Sabre and Amadeus (TravelFusion not required the FOID inclusion)."})})]}),e.jsxs("div",{className:"confluence-information-macro confluence-information-macro-information",children:[e.jsx("span",{className:"aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon"}),e.jsx("div",{className:"confluence-information-macro-body",children:e.jsxs("p",{children:["The inclusion of extra information will demand to create new commands in Thomalex to send the ID Type as variable and Nationality. ",e.jsx("br",{}),"These actions will be face in a further version of the MVP."]})})]}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-FOIDInclusion-MVP1-Functionalflow",children:"Functional flow"}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1196,"data-layout":"default","data-local-id":"5bd18828-d36f-41a3-aa2a-6ad8eae71235",className:"confluenceTable",children:[e.jsx("colgroup",{children:e.jsx("col",{style:{width:"1196.0px"}})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Functional Items"})})})}),e.jsx("tr",{children:e.jsxs("td",{className:"confluenceTd",children:[e.jsx("p",{children:"Add in the passenger detail page components to get the passenger Identification for each as required."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Type of Identification: PP - Passport/ NI - National Identification"})}),e.jsx("li",{children:e.jsxs("p",{children:["Identification Id: It is a string that could be only numbers or Numbers and letters."," "]})})]})]})}),e.jsx("tr",{children:e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Split the Passport information and move to a different optional collapsable section right below the Passenger details form."})})}),e.jsx("tr",{children:e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["The identification ID Number must be passed to Thomalex endpoint:"," ",e.jsx("a",{className:"external-link",href:"https://rest.resvoyage.com/docs/index#!/ShoppingCart/ShoppingCart_Book",rel:"nofollow",children:"POST"})," ",e.jsx("a",{className:"external-link",href:"https://rest.resvoyage.com/docs/index#!/ShoppingCart/ShoppingCart_Book",rel:"nofollow",children:e.jsx("u",{children:"/api/v1/cart/book"})}),e.jsx("u",{children:"."})]})})}),e.jsx("tr",{children:e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["All the transactions created in Sabre and Amadeus have to hold the FOID at the time of Ticketing."," "]})})}),e.jsx("tr",{children:e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The passenger additional information - Passport, should be required in case of an International itinerary (Arrival point is in a different country of the departure point)"})})}),e.jsx("tr",{children:e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"If the passport is required, the section has to be expanded automatically."})})})]})]})}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-FOIDInclusion-MVP1-Technicalrequirements",children:"Technical requirements"}),e.jsx("h3",{id:"FRD-FOIDInclusion-MVP1-Prerequisites.1",children:"Prerequisites"}),e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Provider"}),": Thomalex"]})})}),e.jsx("p",{}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1290,"data-layout":"default","data-local-id":"89b82340-700d-479b-ae97-20aa502d1e55",className:"confluenceTable",children:[e.jsxs("colgroup",{children:[e.jsx("col",{}),e.jsx("col",{style:{width:"531.0px"}}),e.jsx("col",{style:{width:"715.0px"}})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"numberingColumn confluenceTh"}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Action"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Comments"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"1"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Update the Passenger Details form in the UI accordingly to the Designs"})}),e.jsxs("td",{className:"confluenceTd",children:[e.jsx("p",{children:"Add the fields:"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Title:"})," Traveler identification."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Nationality : Required. Dropdown to pick the country of nationality."})}),e.jsx("li",{children:e.jsx("p",{children:"Type of Document: Required. Dropdown list. Select, NationalId, Passport."})}),e.jsx("li",{children:e.jsx("p",{children:"DocumentID: Required. Accept Numbers and Letters. From 6 to 12 chars"})})]})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"2"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Split the Passenger Detail Passport Data and move to a new section"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Create a new section in the landing, collapsable, that holds the passenger Passport for this MVP"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"3"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Collect the data and pass the passenger identification to Thomalex"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("p",{children:["The documentID only should be passed in the property"," ",e.jsx("code",{children:'"Travellers[n].NationalIdentity"'})]})})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"4"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Identify type of Trip (Domestic and International)"})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Domestic: The departure and the arrival airport are in the same county in each segment of the itinerary."})}),e.jsx("li",{children:e.jsx("p",{children:"International: The departure and the arrival airport are in different countries in a segment of the itinerary."})})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"5"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Make the “Passport” information required."})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"If the passport is required for the destination, then the “Passenger Additional Information” has to be expanded and a message indicating “Passenger Passport is required”."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"6"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Passing Passport Information to Vendor"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The same logic as Today."})})]})]})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"confluence-information-macro confluence-information-macro-note",children:[e.jsx("span",{className:"aui-icon aui-icon-small aui-iconfont-warning confluence-information-macro-icon"}),e.jsxs("div",{className:"confluence-information-macro-body",children:[e.jsx("p",{children:e.jsx("strong",{children:"Risks"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"We need to build the current commandBuilder in Test into Prod."})}),e.jsx("li",{children:e.jsx("p",{children:"We need to have the correct commandBuilder for each instance of vendors sites. (AccessFare - Sabre, TravelFusion, Amadeus)."})}),e.jsx("li",{children:e.jsxs("p",{children:["We need to coordinate with Thomalex for every need to deploy the chances in CommandBuilder.",e.jsx("br",{})]})})]})]})]}),e.jsx("p",{}),e.jsx("p",{}),e.jsxs("div",{id:"expander-691158804",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-691158804",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Request example create Booking"})]}),e.jsx("div",{id:"expander-content-691158804",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"sessionId": "',"{","{","ThomalexSessionId","}","}",'",',`
`,"    ",'"Travellers": [',`
`,"        ","{",`
`,"            ",'"Title": "MR",',`
`,"            ",'"FirstName": "GERARDO",',`
`,"            ",'"MiddleName": "",',`
`,"            ",'"LastName": "NIZETICH",',`
`,"            ",'"TypeCode": "ADT",',`
`,"            ",'"Id": "d2de49cb-6d18-4e4e-8c33-623860e9deae",',`
`,"            ",'"NationalIdentity": "23516364N",',`
`,"            ",'"MobilePhone": "",',`
`,"            ",'"MobilePhoneCode": "",',`
`,"            ",'"DateOfBirthString": "1973-10-30T15:00:00.000Z",',`
`,"            ",'"Gender": "1",',`
`,"            ",'"UserRole": "PRNTADMIN",',`
`,"            ",'"CountryOfNationality": "AR",',`
`,"            ",'"Email": "gerardo@xeni.com",',`
`,"            ",'"Phone": "5491154548655"',`
`,"        ","}",`
`,"    ","],",`
`,"    ",'"PaymentDetails": [',`
`,"        ","{",`
`,"            ",'"TravelType": "AIR",',`
`,"            ",'"CorporateCreditCard": false,',`
`,"            ",'"PaymentOption": "CallMe"',`
`,"        ","}",`
`,"    ","],",`
`,"    ",'"IsPnrModifyRequest": false,',`
`,"    ",'"IAgreeAgencyTermsAndConditions": true,',`
`,"    ",'"ShoppingCartId": "',"{","{","CartSessionId","}","}",'",',`
`,"    ",'"BookingOnHold": false',`
`,"}"]})})})})]}),e.jsx("p",{}),e.jsxs("div",{id:"expander-2010936799",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-2010936799",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Response example:"})]}),e.jsx("div",{id:"expander-content-2010936799",className:"expand-content",children:e.jsx("p",{children:"The response is not modified. "})})]}),e.jsx("p",{}),e.jsx("p",{children:e.jsx("br",{})}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-FOIDInclusion-MVP1-Design",children:"Design"}),e.jsx("p",{children:"Draft Idea to discuss"}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-center",width:1294,loading:"lazy",src:"attachments/593395713/598867971.png?width=1294","data-image-src":"attachments/593395713/598867971.png","data-height":932,"data-width":2133,"data-unresolved-comment-count":0,"data-linked-resource-id":598867971,"data-linked-resource-version":1,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"UI_paxDetail_update.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":593395713,"data-linked-resource-container-version":6,"data-media-id":"30098ca5-3c18-406f-8f5a-28c6e6ed51c7","data-media-type":"file"})}),e.jsx("p",{}),e.jsx("p",{children:e.jsx("strong",{children:"Official Design of the components"})}),e.jsxs("p",{children:[e.jsx("strong",{children:"MVP1 "}),"-"," ",e.jsx("a",{className:"external-link","data-card-appearance":"inline",href:"https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=5138-23052&mode=design&t=w8K00P8ktFBujpPA-0",rel:"nofollow",children:"https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=5138-23052&mode=design&t=w8K00P8ktFBujpPA-0"})," "]}),e.jsxs("div",{className:"confluence-information-macro confluence-information-macro-information",children:[e.jsx("span",{className:"aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon"}),e.jsxs("div",{className:"confluence-information-macro-body",children:[e.jsx("p",{children:"The new section of “Passenger Additional Information” is for each passenger, and for this MVP will hold only the Passport information, further we need to include there:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Frequent Flyer:"})," Up to 3 per passenger and Segment association"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Special Meals: "}),"Each traveler can request special meal for each segment in the itinerary"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Special Services:"})," Each traveler can request special services per segment like wheel chair, onboard assistance, Baby Crib, etc"," "]})}),e.jsxs("li",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Travel Documentation"}),": Apart from passport, the user can enter:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"DOCA"}),": Residence or Destination Address"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"DOCA"}),": Redress Number, Known Traveler ID or VISA information for a certain segment."," "]})})]})]})]})]})]}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{children:e.jsx("br",{})}),e.jsx("p",{style:{marginLeft:"60.0px"}})]}),e.jsxs("div",{className:"pageSection group",children:[e.jsx("div",{className:"pageSectionHeader",children:e.jsx("h2",{id:"attachments",className:"pageSectionTitle",children:"Attachments:"})}),e.jsxs("div",{className:"greybox",align:"left",children:[e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/593395713/596410511.png",children:"PassengerDetails_Update_Draft.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/593395713/598867971.png",children:"UI_paxDetail_update.png"})," ","(image/png)",e.jsx("br",{})]})]})]})," "]}),e.jsx("div",{id:"footer",role:"contentinfo",children:e.jsxs("section",{className:"footer-body",children:[e.jsx("p",{children:"Document generated by Confluence on Jun 24, 2024 05:24"}),e.jsx("div",{id:"footer-logo",children:e.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{s as default};