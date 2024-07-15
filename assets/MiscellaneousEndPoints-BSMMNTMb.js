import{j as e}from"./index-KIWeJkvA.js";function s(){return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"XeniApp : Miscellaneous endpoints"}),e.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),e.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),e.jsxs("div",{id:"page",children:[e.jsxs("div",{id:"main",className:"aui-page-panel",children:[e.jsxs("div",{id:"main-header",children:[e.jsx("div",{id:"breadcrumb-section",children:e.jsx("ol",{id:"breadcrumbs",children:e.jsx("li",{className:"first",children:e.jsx("span",{children:e.jsx("a",{href:"index.html",children:"XeniApp"})})})})}),e.jsx("h1",{id:"title-heading",className:"pagetitle",children:e.jsx("span",{id:"title-text",children:"XeniApp : Miscellaneous endpoints"})})]}),e.jsxs("div",{id:"content",className:"view",children:[e.jsxs("div",{className:"page-metadata",children:["Created by ",e.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Jul 09, 2024"]}),e.jsxs("div",{id:"main-content",className:"wiki-content group",children:[e.jsx("hr",{}),e.jsx("h1",{id:"Miscellaneousendpoints-Overview",children:"Overview"}),e.jsx("p",{children:"The objective of these endpoints is to transfer the Static data for users to resolve queries related to:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Airports data"})}),e.jsx("li",{children:e.jsx("p",{children:"Carriers"})}),e.jsx("li",{children:e.jsx("p",{children:"Aircrafts"})})]}),e.jsx("p",{children:"Also, the idea is to offer rich content to hydrate UI with reference images."}),e.jsx("hr",{}),e.jsx("h2",{id:"Miscellaneousendpoints-BusinessObjective:",children:"Business Objective:"}),e.jsxs("p",{children:["The idea from XENI is to get independence of the static data content avoiding any dependency from vendor content and have a single source to keep the GUI standardize alongside the vendor who provide the dynamic data."," "]}),e.jsx("hr",{}),e.jsx("h2",{id:"Miscellaneousendpoints-FunctionalRequirements",children:"Functional Requirements"}),e.jsx("p",{}),e.jsx("h3",{id:"Miscellaneousendpoints-BasicData",children:"Basic Data"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("p",{children:"Store the list of IATA Airport codes."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Airport Names"})}),e.jsx("li",{children:e.jsx("p",{children:"Associated City"})}),e.jsx("li",{children:e.jsx("p",{children:"Geo Location (lon/lat)"})}),e.jsx("li",{children:e.jsx("p",{children:"Associated State/Province"})}),e.jsx("li",{children:e.jsx("p",{children:"Country code."})})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"Store the list of IATA carrier codes"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Carrier Code"})}),e.jsx("li",{children:e.jsx("p",{children:"Carrier Name"})}),e.jsx("li",{children:e.jsx("p",{children:"Carrier Logo"})}),e.jsx("li",{children:e.jsx("p",{children:"IATA Designator number"})})]})]}),e.jsx("li",{children:e.jsx("p",{})}),e.jsxs("li",{children:[e.jsx("p",{children:"Store the list of City Codes (non-airport) & geo Location (lon/lat)"}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("p",{children:"IATA City code (ex: NYC)"})})})]}),e.jsxs("li",{children:[e.jsx("p",{children:"Store the list of Aircraft codes (ICAO/Aircrafts)"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Aircraft code"})}),e.jsx("li",{children:e.jsx("p",{children:"Aircraft Name"})})]})]})]}),e.jsx("h3",{id:"Miscellaneousendpoints-Rich-content",children:"Rich-content"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("p",{children:"Airports"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Reference Images"})}),e.jsx("li",{children:e.jsx("p",{children:"Airport Map"})}),e.jsxs("li",{children:[e.jsx("p",{children:"Offer Services"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Lounge rooms"})}),e.jsx("li",{children:e.jsx("p",{children:"Parking"})}),e.jsx("li",{children:e.jsx("p",{children:"Shuttle"})}),e.jsx("li",{children:e.jsx("p",{children:"Distances"})})]})]})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"Destinations:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Reference Images"})}),e.jsx("li",{children:e.jsx("p",{children:"Reference points of interest"})}),e.jsx("li",{children:e.jsx("p",{children:"Distances"})})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"Carriers"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("p",{children:"Representative images"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Aircrafts"})}),e.jsx("li",{children:e.jsx("p",{children:"Seats by Cabin"})}),e.jsx("li",{children:e.jsx("p",{children:"Extra services"})}),e.jsx("li",{children:e.jsx("p",{children:"Rich logos"})})]})]})})]})]}),e.jsx("hr",{}),e.jsx("h2",{id:"Miscellaneousendpoints-Endpoints",children:"Endpoints "}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"/Location/decode: "})}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Decode"}),": Given a type of code => Return the associating data"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:e.jsx("strong",{children:"by CityCode"})})}),e.jsx("li",{children:e.jsx("p",{children:e.jsx("strong",{children:"byCountryCode"})})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"All"}),": Return the entire list of cities in DB: (Pagination?)"]})})]})]})})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"/airports/getAirports:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"airportCode:"})," return the data associated"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"all"}),": Return the list of IATA airports in system (pagination?)"]})})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"/flights/carrier:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"carrier Code"}),": Return the data including Logo"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"all"}),": Return the entire list of Carriers data."]})})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Get meals"})}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("p",{children:"Given a Meal code return the value of the meal. "})})})]})]}),e.jsx("p",{})]})]})," "]}),e.jsx("div",{id:"footer",role:"contentinfo",children:e.jsxs("section",{className:"footer-body",children:[e.jsx("p",{children:"Document generated by Confluence on Jul 10, 2024 07:50"}),e.jsx("div",{id:"footer-logo",children:e.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{s as default};