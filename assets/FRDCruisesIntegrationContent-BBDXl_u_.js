import{j as e}from"./index-KIWeJkvA.js";function n(){return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"XeniApp : FRD - Cruise Integration - Get content - Static data to cache - MVP1"}),e.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),e.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),e.jsxs("div",{id:"page",children:[e.jsxs("div",{id:"main",className:"aui-page-panel",children:[e.jsxs("div",{id:"main-header",children:[e.jsx("div",{id:"breadcrumb-section",children:e.jsxs("ol",{id:"breadcrumbs",children:[e.jsx("li",{className:"first",children:e.jsx("span",{children:e.jsx("a",{href:"index.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Cruises-Integration_601980932.html",children:"Cruises Integration"})})})]})}),e.jsx("h1",{id:"title-heading",className:"pagetitle",children:e.jsx("span",{id:"title-text",children:"XeniApp : FRD - Cruise Integration - Get content - Static data to cache - MVP1"})})]}),e.jsxs("div",{id:"content",className:"view",children:[e.jsxs("div",{className:"page-metadata",children:["Created by ",e.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Apr 12, 2024"]}),e.jsxs("div",{id:"main-content",className:"wiki-content group",children:[e.jsx("h1",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Functionalobjective",children:"Functional objective"}),e.jsx("p",{children:"Get the data from TravelTek to pre-set the search widget options and the data to use in the availability search to offer."}),e.jsx("p",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Context",children:"Context"}),e.jsx("p",{children:"Based on the idea to create a new business line in the XENI App to offer cruise content to the consumer, it is required to get the base data to pre-set the widget with the following data:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Location to search"})}),e.jsx("li",{children:e.jsx("p",{children:"Preferred Line (Optional)"})}),e.jsx("li",{children:e.jsx("p",{children:"Ship static data."})})]}),e.jsx("h2",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-ProposalSolution",children:"Proposal Solution"}),e.jsxs("ol",{start:1,children:[e.jsx("li",{children:e.jsx("p",{children:"Cache the list of regions (Name, Id) (Attached)"})}),e.jsx("li",{children:e.jsx("p",{children:"Get the list of Cruise lines and cache"})}),e.jsx("li",{children:e.jsx("p",{children:"Create an update logic for Static data of each ship of a cruise Line."})}),e.jsxs("li",{children:[e.jsx("p",{children:"Create the Super Admin controls:"}),e.jsxs("ol",{start:1,children:[e.jsx("li",{children:e.jsx("p",{children:"General Markup for Cruise product."})}),e.jsx("li",{children:e.jsx("p",{children:"Toggle to enable cruise product to agencies"})}),e.jsx("li",{children:e.jsx("p",{children:"Enable Command Center for Agency Owners"})}),e.jsx("li",{children:e.jsx("p",{children:"Create the Markup for Agencies"})})]})]})]}),e.jsx("h2",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Proposalflow",children:"Proposal flow"}),e.jsx("p",{children:e.jsx("strong",{children:"Step 1: Get Static Data"})}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-left",alt:"GetStaticDataFlow.png",width:801,loading:"lazy",src:"attachments/602341378/602734692.png?width=801","data-image-src":"attachments/602341378/602734692.png","data-height":419,"data-width":801,"data-unresolved-comment-count":0,"data-linked-resource-id":602734692,"data-linked-resource-version":1,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"GetStaticDataFlow.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":602341378,"data-linked-resource-container-version":6,"data-media-id":"b4c9002e-224a-487f-8bb5-1221f75f4ecd","data-media-type":"file"})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-FunctionalRequirements",children:"Functional Requirements"}),e.jsx("h3",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-GetstaticData",children:"Get static Data"}),e.jsx("p",{}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1290,"data-layout":"default","data-local-id":"4b3bd7b2-f4a5-45a6-af7f-3b2b564633c1",className:"confluenceTable",children:[e.jsx("colgroup",{children:e.jsx("col",{})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"numberingColumn confluenceTh"}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Action"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Endpoint"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Params"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Comments"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"1"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Store the Cruise regions code"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Document sent it by Vendor"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"2"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Get the list of Cruise lines"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("a",{className:"external-link",href:"https://fusionapi.traveltek.net/0.9/interface.pl",rel:"nofollow",children:e.jsx("span",{className:"legacy-color-text-inverse",children:"https://fusionapi.traveltek.net/0.9/interface.pl"})})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'https://fusionapi.traveltek.net/0.9/interface.pl' \\",`
`,"--header 'Content-Type: application/x-www-form-urlencoded' \\",`
`,`--data-urlencode 'xml=<?xml version="1.0"?><request><auth username="xeni" password="xs81ds54" /><method action="getcruiselines" sitename="xeni.site.traveltek.net" /></request>'`]})})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"XML Content"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"3"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Cache the list of cruise lines "})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Store the info to expose in the proper UI component"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"4"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Get the list of Ships"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Each cruiseLine ID."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"5"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Get the ShipDetails"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:"https://fusionapi.traveltek.net/2.1/json/cruiseshipdetails.pl"})})}),e.jsxs("td",{className:"confluenceTd",children:[e.jsx("p",{children:e.jsxs("code",{children:["requestid=>","{","{","sessionId","}","}"]})}),e.jsx("p",{children:e.jsx("code",{children:'language=> Default "en"'})}),e.jsx("p",{children:e.jsx("code",{children:"shipid=ship list from cruiseLine."})})]}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"6"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Update cache logic"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Generate the logic to search the list of cruise providers enable for Xeni every N time."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"7"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Create XENI API Endpoints"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"To fetch the static data to hydrate UI."})})]})]})]})}),e.jsxs("p",{children:[e.jsx("strong",{children:"XENI APP"})," (Administration)"]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1290,"data-layout":"default","data-local-id":"3b9f422a-bf6d-4bf1-850d-5f9c3a2244ed",className:"confluenceTable",children:[e.jsx("colgroup",{children:e.jsx("col",{})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"numberingColumn confluenceTh"}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Section"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Comments"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"1"}),e.jsx("td",{"data-highlight-colour":"#b3d4ff",className:"confluenceTd",children:e.jsx("p",{children:e.jsx("strong",{children:"Super Admin User"})})}),e.jsx("td",{"data-highlight-colour":"#b3d4ff",className:"confluenceTd",children:e.jsx("p",{})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"2"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Create the Cruise section in the Dashboard"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Only Super Admin can access this section for setup the cruise product."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"3"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Create the activity Report"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"In the same way of the other services, it is required to create an activity report by agency and dd details of the transaction"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"4"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Markup Cruise product"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Super Admin can set a Markup by percentage or flat amount for each cruise transaction"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"5"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Create a toggle to enable the Cruise product by Tenant."})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The super admin is the responsible to allow the consumer tenant to display the Cruise Tab."})})]})]})]})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Technicalrequirements",children:"Technical requirements"}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1290,"data-layout":"default","data-local-id":"fcc4ad91-7075-4a8e-8631-d79f0652ec46",className:"confluenceTable",children:[e.jsx("colgroup",{children:e.jsx("col",{})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"numberingColumn confluenceTh"}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Action"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Description"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"1"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"SuperAdmin - Generate a Toggle to enable Cruise section in Xeni APP"})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Enable for Agencies the Cruise Tab in the Front End"})}),e.jsx("li",{children:e.jsx("p",{children:"Enable for Agencies Dashboard the Cruise Section (Agency Owners and Administrators)"})})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"2"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Agency Owner/ Agency administrator"})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Generate in the command center the section for these type of users to see"})}),e.jsxs("li",{children:[e.jsx("p",{children:"Add the activity report: (Like the other services)"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"bookings"})}),e.jsx("li",{children:e.jsx("p",{children:"Status"})}),e.jsx("li",{children:e.jsx("p",{children:"Details"})})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"Markup:"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsx("p",{children:"Allow agency to set a Markup for cruise service"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Percentage: Will use the base amount of the retail price + % of markup"})}),e.jsx("li",{children:e.jsx("p",{children:"Flat amount: Will add a flat amount to the top of the retail price with the agency description"})}),e.jsx("li",{children:e.jsx("p",{children:"Applicable: By passenger or by Booking."})})]})]})})]})]})})]})]})]})}),e.jsx("p",{children:e.jsx("br",{})}),e.jsxs("div",{id:"expander-608004864",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-608004864",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Request Example: Cruise lines - "})]}),e.jsx("div",{id:"expander-content-608004864",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'https://fusionapi.traveltek.net/0.9/interface.pl' \\",`
`,"--header 'Content-Type: application/x-www-form-urlencoded' \\",`
`,`--data-urlencode 'xml=<?xml version="1.0"?><request><auth username="xeni" password="xs81ds54" /><method action="getcruiselines" sitename="xeni.site.traveltek.net" /></request>'`]})})})})]}),e.jsxs("div",{id:"expander-821956590",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-821956590",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Response example: Cruise lines enabled for XENI"})]}),e.jsx("div",{id:"expander-content-821956590",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:['<?xml version="1.0"?>',`
`,'<response method="getcruiselines" success="Y">',`
`,"    ","<errors>",`
`,"  ","</errors>",`
`,"    ","<request>",`
`,"        ",'<auth password="xs81ds54" username="xeni" />',`
`,"        ",'<method action="getcruiselines" sitename="xeni.site.traveltek.net" />',`
`,"    ","</request>",`
`,"    ","<results>",`
`,"        ",'<line id="427" logourl="https://static.traveltek.net/cruisepics/logos/arosalogo1_resized.png" name="A-ROSA" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/arosalogo1_resized.png">',`
`,"            ","<ships>",`
`,"                ",'<ship id="5528" name="A-ROSA ALEA" />',`
`,"                ",'<ship id="5391" name="A-ROSA ALVA" />',`
`,"                ",'<ship id="2846" name="A-ROSA AQUA" />',`
`,"                ",'<ship id="5532" name="A-ROSA CLEA" />',`
`,"                ",'<ship id="2851" name="A-ROSA DONNA" />',`
`,"                ",'<ship id="2856" name="A-ROSA FLORA" />',`
`,"                ",'<ship id="4841" name="A-ROSA SENA" />',`
`,"                ",'<ship id="2849" name="A-ROSA SILVA" />',`
`,"                ",'<ship id="2855" name="A-ROSA STELLA" />',`
`,"                ",'<ship id="2847" name="A-ROSA VIVA" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="63" logourl="https://static.traveltek.net/cruisepics/logos/amawaterways.gif" name="AmaWaterways" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/amawaterways.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="1910" name="AmaBella" />',`
`,"                ",'<ship id="408" name="AmaCello" />',`
`,"                ",'<ship id="1058" name="AmaCerto" />',`
`,"                ",'<ship id="5733" name="AmaDahlia" />',`
`,"                ",'<ship id="407" name="AmaDante" />',`
`,"                ",'<ship id="3016" name="AmaDara" />',`
`,"                ",'<ship id="454" name="AmaDolce" />',`
`,"                ",'<ship id="4710" name="AmaDouro" />',`
`,"                ",'<ship id="3889" name="AmaKristina" />',`
`,"                ",'<ship id="4379" name="AmaLea" />',`
`,"                ",'<ship id="6515" name="AmaLilia" />',`
`,"                ",'<ship id="5459" name="AmaLucia" />',`
`,"                ",'<ship id="455" name="AmaLyra" />',`
`,"                ",'<ship id="6548" name="AmaMagdalena" />',`
`,"                ",'<ship id="4793" name="AmaMagna" />',`
`,"                ",'<ship id="6549" name="AmaMelodia" />',`
`,"                ",'<ship id="4709" name="AmaMora" />',`
`,"                ",'<ship id="1907" name="AmaPrima" />',`
`,"                ",'<ship id="2302" name="AmaReina" />',`
`,"                ",'<ship id="2679" name="AmaSerena" />',`
`,"                ",'<ship id="5213" name="AmaSiena" />',`
`,"                ",'<ship id="6670" name="AmaSintra" />',`
`,"                ",'<ship id="2282" name="AmaSonata" />',`
`,"                ",'<ship id="3536" name="AmaStella" />',`
`,"                ",'<ship id="4798" name="AmaVenita" />',`
`,"                ",'<ship id="1906" name="AmaVerde" />',`
`,"                ",'<ship id="1908" name="AmaVida" />',`
`,"                ",'<ship id="3531" name="AmaViola" />',`
`,"                ",'<ship id="1909" name="Zambezi Queen" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="848" logourl="https://static.traveltek.net/cruisepics/logos/Ambassador1_resized.gif" name="Ambassador Cruise Line" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/Ambassador1_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="6434" name="Ambience" />',`
`,"                ",'<ship id="6454" name="Ambition" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="66" logourl="https://static.traveltek.net/cruisepics/logos/azamara.gif" name="Azamara" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/azamara.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="414" name="Azamara Journey" />',`
`,"                ",'<ship id="6399" name="Azamara Onward" />',`
`,"                ",'<ship id="4678" name="Azamara Pursuit" />',`
`,"                ",'<ship id="415" name="Azamara Quest" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="121" logourl="https://static.traveltek.net/cruisepics/logos/bluelagooncruises.gif" name="Blue Lagoon Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/bluelagooncruises.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="779" name="MV Fiji Princess" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="8" logourl="https://static.traveltek.net/cruisepics/logos/carnival.gif" name="Carnival Cruise Line" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/carnival.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="1196" name="Carnival Breeze" />',`
`,"                ",'<ship id="6076" name="Carnival Celebration" />',`
`,"                ",'<ship id="34" name="Carnival Conquest" />',`
`,"                ",'<ship id="466" name="Carnival Dream" />',`
`,"                ",'<ship id="31" name="Carnival Elation" />',`
`,"                ",'<ship id="6551" name="Carnival Firenze" />',`
`,"                ",'<ship id="364" name="Carnival Freedom" />',`
`,"                ",'<ship id="39" name="Carnival Glory" />',`
`,"                ",'<ship id="4437" name="Carnival Horizon" />',`
`,"                ",'<ship id="6450" name="Carnival Jubilee" />',`
`,"                ",'<ship id="28" name="Carnival Legend" />',`
`,"                ",'<ship id="246" name="Carnival Liberty" />',`
`,"                ",'<ship id="6466" name="Carnival Luminosa" />',`
`,"                ",'<ship id="556" name="Carnival Magic" />',`
`,"                ",'<ship id="27" name="Carnival Miracle" />',`
`,"                ",'<ship id="4778" name="Carnival Panorama" />',`
`,"                ",'<ship id="21" name="Carnival Paradise" />',`
`,"                ",'<ship id="26" name="Carnival Pride" />',`
`,"                ",'<ship id="4962" name="Carnival Radiance" />',`
`,"                ",'<ship id="4982" name="Carnival Spirit" />',`
`,"                ",'<ship id="409" name="Carnival Splendor" />',`
`,"                ",'<ship id="4887" name="Carnival Sunrise" />',`
`,"                ",'<ship id="1895" name="Carnival Sunshine" />',`
`,"                ",'<ship id="245" name="Carnival Valor" />',`
`,"                ",'<ship id="6519" name="Carnival Venezia" />',`
`,"                ",'<ship id="3527" name="Carnival Vista" />',`
`,"                ",'<ship id="5149" name="Mardi Gras" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="3" logourl="https://static.traveltek.net/cruisepics/logos/celebritynew_resized.gif" name="Celebrity Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/celebritynew_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="4985" name="Celebrity Apex" />',`
`,"                ",'<ship id="6448" name="Celebrity Ascent" />',`
`,"                ",'<ship id="7" name="Celebrity Beyond" />',`
`,"                ",'<ship id="8" name="Celebrity Constellation" />',`
`,"                ",'<ship id="476" name="Celebrity Eclipse" />',`
`,"                ",'<ship id="4445" name="Celebrity Edge" />',`
`,"                ",'<ship id="442" name="Celebrity Equinox" />',`
`,"                ",'<ship id="4695" name="Celebrity Flora" />',`
`,"                ",'<ship id="13" name="Celebrity Infinity" />',`
`,"                ",'<ship id="6" name="Celebrity Millennium" />',`
`,"                ",'<ship id="1049" name="Celebrity Reflection" />',`
`,"                ",'<ship id="552" name="Celebrity Silhouette" />',`
`,"                ",'<ship id="427" name="Celebrity Solstice" />',`
`,"                ",'<ship id="12" name="Celebrity Summit" />',`
`,"                ",'<ship id="9" name="Celebrity Xcel" />',`
`,"                ",'<ship id="205" name="Celebrity Xpedition" />',`
`,"                ",'<ship id="4083" name="Celebrity Xploration" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="495" logourl="https://static.traveltek.net/cruisepics/logos/celestyalnewlogo_resized_resized_resized.png" name="Celestyal Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/celestyalnewlogo_resized_resized_resized.png">',`
`,"            ","<ships>",`
`,"                ",'<ship id="3497" name="Celestyal Crystal" />',`
`,"                ",'<ship id="6791" name="Celestyal Discovery" />',`
`,"                ",'<ship id="6550" name="Celestyal Journey" />',`
`,"                ",'<ship id="3498" name="Celestyal Olympia" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="9" logourl="https://static.traveltek.net/cruisepics/logos/costanew_resized.gif" name="Costa Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/costanew_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="475" name="Costa Deliziosa" />',`
`,"                ",'<ship id="2309" name="Costa Diadema" />',`
`,"                ",'<ship id="1056" name="Costa Fascinosa" />',`
`,"                ",'<ship id="563" name="Costa Favolosa" />',`
`,"                ",'<ship id="5261" name="Costa Firenze" />',`
`,"                ",'<ship id="52" name="Costa Fortuna" />',`
`,"                ",'<ship id="439" name="Costa Pacifica" />',`
`,"                ",'<ship id="365" name="Costa Serena" />',`
`,"                ",'<ship id="4689" name="Costa Smeralda" />',`
`,"                ",'<ship id="5507" name="Costa Toscana" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="5" logourl="https://static.traveltek.net/cruisepics/logos/cunard.gif" name="Cunard" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/cunard.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="6456" name="Queen Anne" />',`
`,"                ",'<ship id="472" name="Queen Elizabeth" />',`
`,"                ",'<ship id="56" name="Queen Mary 2" />',`
`,"                ",'<ship id="57" name="Queen Victoria" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="73" logourl="https://static.traveltek.net/cruisepics/logos/disneylogo_resized.gif" name="Disney Cruise Line" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/disneylogo_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="569" name="Disney Dream" />',`
`,"                ",'<ship id="743" name="Disney Fantasy" />',`
`,"                ",'<ship id="465" name="Disney Magic" />',`
`,"                ",'<ship id="6075" name="Disney Treasure" />',`
`,"                ",'<ship id="6074" name="Disney Wish" />',`
`,"                ",'<ship id="464" name="Disney Wonder" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="849" logourl="https://static.traveltek.net/cruisepics/logos/explora_resized.gif" name="Explora Journeys" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/explora_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="6436" name="EXPLORA I" />',`
`,"                ",'<ship id="6530" name="EXPLORA II" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="13" logourl="https://static.traveltek.net/cruisepics/logos/fredolsen.gif" name="Fred Olsen Cruise Lines" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/fredolsen.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="376" name="Balmoral" />',`
`,"                ",'<ship id="5798" name="Bolette" />',`
`,"                ",'<ship id="67" name="Borealis" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="15" logourl="https://static.traveltek.net/cruisepics/logos/HAL_Logo1_resized.jpg" name="Holland America Line" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/HAL_Logo1_resized.jpg">',`
`,"            ","<ships>",`
`,"                ",'<ship id="399" name="Eurodam" />',`
`,"                ",'<ship id="3496" name="Koningsdam" />',`
`,"                ",'<ship id="515" name="Nieuw Amsterdam" />',`
`,"                ",'<ship id="4517" name="Nieuw Statendam" />',`
`,"                ",'<ship id="81" name="Noordam" />',`
`,"                ",'<ship id="80" name="Oosterdam" />',`
`,"                ",'<ship id="83" name="Rotterdam" />',`
`,"                ",'<ship id="75" name="Volendam" />',`
`,"                ",'<ship id="72" name="Westerdam" />',`
`,"                ",'<ship id="74" name="Zaandam" />',`
`,"                ",'<ship id="84" name="Zuiderdam" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="31" logourl="https://static.traveltek.net/cruisepics/logos/hurti_coastal_2023_resized.gif" name="Hurtigruten" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/hurti_coastal_2023_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="199" name="MS Kong Harald" />',`
`,"                ",'<ship id="196" name="MS Nordkapp" />',`
`,"                ",'<ship id="197" name="MS Nordlys" />',`
`,"                ",'<ship id="194" name="MS Nordnorge" />',`
`,"                ",'<ship id="195" name="MS Polarlys" />',`
`,"                ",'<ship id="198" name="MS Richard With" />',`
`,"                ",'<ship id="192" name="MS Trollfjord" />',`
`,"                ",'<ship id="200" name="MS Vesterålen" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="702" logourl="https://static.traveltek.net/cruisepics/logos/margaritaville_resized.gif" name="Margaritaville at Sea" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/margaritaville_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="4862" name="Margaritaville at Sea Paradise" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="16" logourl="https://static.traveltek.net/cruisepics/logos/msccruise.gif" name="MSC Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/msccruise.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="185" name="MSC Armonia" />',`
`,"                ",'<ship id="4511" name="MSC Bellissima" />',`
`,"                ",'<ship id="1195" name="MSC Divina" />',`
`,"                ",'<ship id="6457" name="MSC Euribia" />',`
`,"                ",'<ship id="458" name="MSC Fantasia" />',`
`,"                ",'<ship id="4777" name="MSC Grandiosa" />',`
`,"                ",'<ship id="89" name="MSC Lirica" />',`
`,"                ",'<ship id="463" name="MSC Magnifica" />',`
`,"                ",'<ship id="3626" name="MSC Meraviglia" />',`
`,"                ",'<ship id="326" name="MSC Musica" />',`
`,"                ",'<ship id="86" name="MSC Opera" />',`
`,"                ",'<ship id="379" name="MSC Orchestra" />',`
`,"                ",'<ship id="428" name="MSC Poesia" />',`
`,"                ",'<ship id="1985" name="MSC Preziosa" />',`
`,"                ",'<ship id="6441" name="MSC Seascape" />',`
`,"                ",'<ship id="5299" name="MSC Seashore" />',`
`,"                ",'<ship id="3707" name="MSC Seaside" />',`
`,"                ",'<ship id="4104" name="MSC Seaview" />',`
`,"                ",'<ship id="244" name="MSC Sinfonia" />',`
`,"                ",'<ship id="462" name="MSC Splendida" />',`
`,"                ",'<ship id="4978" name="MSC Virtuosa" />',`
`,"                ",'<ship id="6514" name="MSC World America" />',`
`,"                ",'<ship id="6427" name="MSC World Europa" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="17" logourl="https://static.traveltek.net/cruisepics/logos/ncl.gif" name="Norwegian Cruise Line" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/ncl.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="6676" name="Norwegian Aqua" />',`
`,"                ",'<ship id="4362" name="Norwegian Bliss" />',`
`,"                ",'<ship id="1368" name="Norwegian Breakaway" />',`
`,"                ",'<ship id="94" name="Norwegian Dawn" />',`
`,"                ",'<ship id="4788" name="Norwegian Encore" />',`
`,"                ",'<ship id="478" name="Norwegian Epic" />',`
`,"                ",'<ship id="2716" name="Norwegian Escape" />',`
`,"                ",'<ship id="371" name="Norwegian Gem" />',`
`,"                ",'<ship id="2161" name="Norwegian Getaway" />',`
`,"                ",'<ship id="410" name="Norwegian Jade" />',`
`,"                ",'<ship id="248" name="Norwegian Jewel" />',`
`,"                ",'<ship id="4294" name="Norwegian Joy" />',`
`,"                ",'<ship id="368" name="Norwegian Pearl" />',`
`,"                ",'<ship id="6423" name="Norwegian Prima" />',`
`,"                ",'<ship id="98" name="Norwegian Sky" />',`
`,"                ",'<ship id="268" name="Norwegian Spirit" />',`
`,"                ",'<ship id="99" name="Norwegian Star" />',`
`,"                ",'<ship id="100" name="Norwegian Sun" />',`
`,"                ",'<ship id="6449" name="Norwegian Viva" />',`
`,"                ",'<ship id="103" name="Pride of America" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="48" logourl="https://static.traveltek.net/cruisepics/logos/oceania_new_logo__resized.gif" name="Oceania Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/oceania_new_logo__resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="6542" name="Allura" />',`
`,"                ",'<ship id="261" name="Insignia" />',`
`,"                ",'<ship id="555" name="Marina" />',`
`,"                ",'<ship id="260" name="Nautica" />',`
`,"                ",'<ship id="259" name="Regatta" />',`
`,"                ",'<ship id="1172" name="Riviera" />',`
`,"                ",'<ship id="3583" name="Sirena" />',`
`,"                ",'<ship id="6393" name="Vista" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="1" logourl="https://static.traveltek.net/cruisepics/logos/poc1_resized.gif" name="P&amp;O Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/poc1_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="180" name="Arcadia" />',`
`,"                ",'<ship id="6392" name="Arvia" />',`
`,"                ",'<ship id="3" name="Aurora" />',`
`,"                ",'<ship id="471" name="Azura" />',`
`,"                ",'<ship id="2649" name="Britannia" />',`
`,"                ",'<ship id="4905" name="Iona" />',`
`,"                ",'<ship id="396" name="Ventura" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="20" logourl="https://static.traveltek.net/cruisepics/logos/princessslogonew.png" name="Princess Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/princessslogonew.png">',`
`,"            ","<ships>",`
`,"                ",'<ship id="117" name="Caribbean Princess" />',`
`,"                ",'<ship id="121" name="Coral Princess" />',`
`,"                ",'<ship id="269" name="Crown Princess" />',`
`,"                ",'<ship id="119" name="Diamond Princess" />',`
`,"                ",'<ship id="5427" name="Discovery Princess" />',`
`,"                ",'<ship id="367" name="Emerald Princess" />',`
`,"                ",'<ship id="4964" name="Enchanted Princess" />',`
`,"                ",'<ship id="110" name="Grand Princess" />',`
`,"                ",'<ship id="116" name="Island Princess" />',`
`,"                ",'<ship id="3788" name="Majestic Princess" />',`
`,"                ",'<ship id="109" name="Regal Princess" />',`
`,"                ",'<ship id="115" name="Royal Princess" />',`
`,"                ",'<ship id="416" name="Ruby Princess" />',`
`,"                ",'<ship id="114" name="Sapphire Princess" />',`
`,"                ",'<ship id="4711" name="Sky Princess" />',`
`,"                ",'<ship id="6662" name="Star Princess" />',`
`,"                ",'<ship id="112" name="Sun Princess" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="21" logourl="https://static.traveltek.net/cruisepics/logos/regentsevenseas.gif" name="Regent Seven Seas Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/regentsevenseas.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="2678" name="Seven Seas Explorer" />',`
`,"                ",'<ship id="128" name="Seven Seas Grandeur" />',`
`,"                ",'<ship id="125" name="Seven Seas Mariner" />',`
`,"                ",'<ship id="123" name="Seven Seas Navigator" />',`
`,"                ",'<ship id="4697" name="Seven Seas Splendor" />',`
`,"                ",'<ship id="124" name="Seven Seas Voyager" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="22" logourl="https://static.traveltek.net/cruisepics/logos/rci.gif" name="Royal Caribbean International" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/rci.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="140" name="Adventure Of The Seas" />',`
`,"                ",'<ship id="481" name="Allure Of The Seas" />',`
`,"                ",'<ship id="2708" name="Anthem Of The Seas" />',`
`,"                ",'<ship id="147" name="Brilliance Of The Seas" />',`
`,"                ",'<ship id="146" name="Enchantment Of The Seas" />',`
`,"                ",'<ship id="136" name="Explorer Of The Seas" />',`
`,"                ",'<ship id="270" name="Freedom Of The Seas" />',`
`,"                ",'<ship id="144" name="Grandeur Of The Seas" />',`
`,"                ",'<ship id="3597" name="Harmony Of The Seas" />',`
`,"                ",'<ship id="6460" name="Icon Of The Seas" />',`
`,"                ",'<ship id="393" name="Independence Of The Seas" />',`
`,"                ",'<ship id="145" name="Jewel Of The Seas" />',`
`,"                ",'<ship id="369" name="Liberty Of The Seas" />',`
`,"                ",'<ship id="141" name="Mariner Of The Seas" />',`
`,"                ",'<ship id="130" name="Navigator Of The Seas" />',`
`,"                ",'<ship id="457" name="Oasis Of The Seas" />',`
`,"                ",'<ship id="5379" name="Odyssey Of The Seas" />',`
`,"                ",'<ship id="3605" name="Ovation Of The Seas" />',`
`,"                ",'<ship id="2472" name="Quantum Of The Seas" />',`
`,"                ",'<ship id="138" name="Radiance Of The Seas" />',`
`,"                ",'<ship id="137" name="Rhapsody Of The Seas" />',`
`,"                ",'<ship id="135" name="Serenade Of The Seas" />',`
`,"                ",'<ship id="4816" name="Spectrum Of The Seas" />',`
`,"                ",'<ship id="6677" name="Star Of The Seas" />',`
`,"                ",'<ship id="4439" name="Symphony Of The Seas" />',`
`,"                ",'<ship id="6512" name="Utopia Of The Seas" />',`
`,"                ",'<ship id="132" name="Vision Of The Seas" />',`
`,"                ",'<ship id="131" name="Voyager Of The Seas" />',`
`,"                ",'<ship id="5457" name="Wonder Of The Seas" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="24" logourl="https://static.traveltek.net/cruisepics/logos/seabourn.gif" name="Seabourn" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/seabourn.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="3534" name="Seabourn Encore" />',`
`,"                ",'<ship id="429" name="Seabourn Odyssey" />',`
`,"                ",'<ship id="4388" name="Seabourn Ovation" />',`
`,"                ",'<ship id="6446" name="Seabourn Pursuit" />',`
`,"                ",'<ship id="564" name="Seabourn Quest" />',`
`,"                ",'<ship id="473" name="Seabourn Sojourn" />',`
`,"                ",'<ship id="5267" name="Seabourn Venture" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="670" logourl="https://static.traveltek.net/cruisepics/logos/Ulogo_resized.gif" name="U by Uniworld" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/Ulogo_resized.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="4506" name="THE A" />',`
`,"                ",'<ship id="4505" name="THE B" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="84" logourl="https://static.traveltek.net/cruisepics/logos/uniworld_new_resized.png" name="Uniworld River Cruises" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/uniworld_new_resized.png">',`
`,"            ","<ships>",`
`,"                ",'<ship id="5490" name="Aria Amazon" />',`
`,"                ",'<ship id="3400" name="Ganges Voyager II" />',`
`,"                ",'<ship id="5168" name="Mekong Jewel" />',`
`,"                ",'<ship id="586" name="River Duchess" />',`
`,"                ",'<ship id="587" name="River Empress" />',`
`,"                ",'<ship id="588" name="River Princess" />',`
`,"                ",'<ship id="589" name="River Queen" />',`
`,"                ",'<ship id="594" name="River Tosca" />',`
`,"                ",'<ship id="648" name="River Victoria" />',`
`,"                ",'<ship id="646" name="S.S. Antoinette" />',`
`,"                ",'<ship id="592" name="S.S. Beatrice" />',`
`,"                ",'<ship id="4907" name="S.S. Bon Voyage" />',`
`,"                ",'<ship id="2312" name="S.S. Catherine" />',`
`,"                ",'<ship id="6679" name="S.S. Elisabeth" />',`
`,"                ",'<ship id="4019" name="S.S. Joie de Vivre" />',`
`,"                ",'<ship id="5166" name="S.S. La Venezia" />',`
`,"                ",'<ship id="2833" name="S.S. Maria Theresa" />',`
`,"                ",'<ship id="5167" name="S.S. São Gabriel" />',`
`,"                ",'<ship id="5165" name="S.S. Sphinx" />',`
`,"                ",'<ship id="6678" name="S.S. Victoria" />',`
`,"                ",'<ship id="4795" name="Sanctuary Yangzi Explorer" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"        ",'<line id="734" logourl="https://static.traveltek.net/cruisepics/logos/virginvoyages.gif" name="Virgin Voyages" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/virginvoyages.gif">',`
`,"            ","<ships>",`
`,"                ",'<ship id="6461" name="Brilliant Lady" />',`
`,"                ",'<ship id="6389" name="Resilient Lady" />',`
`,"                ",'<ship id="5150" name="Scarlet Lady" />',`
`,"                ",'<ship id="5500" name="Valiant Lady" />',`
`,"            ","</ships>",`
`,"        ","</line>",`
`,"    ","</results>",`
`,"</response>"]})})})})]}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Design",children:"Design"}),e.jsxs("p",{children:[e.jsx("a",{className:"external-link","data-card-appearance":"inline",href:"https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=0-1&mode=design&t=hJzrte09wyPjzkeb-0",rel:"nofollow",children:"https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=0-1&mode=design&t=hJzrte09wyPjzkeb-0"})," ","Cruise"]}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Documentation",children:"Documentation"}),e.jsxs("p",{children:[e.jsx("span",{className:"confluence-embedded-file-wrapper",children:e.jsx("a",{className:"confluence-embedded-file",href:"attachments/602341378/603455507.txt","data-nice-type":"Text File","data-file-src":"/wiki/download/attachments/602341378/List%20of%20Regions.txt?version=1&modificationDate=1704976656289&cacheVersion=1&api=v2","data-linked-resource-id":603455507,"data-linked-resource-type":"attachment","data-linked-resource-container-id":602341378,"data-linked-resource-default-alias":"List of Regions.txt","data-mime-type":"text/plain","data-has-thumbnail":"true","data-linked-resource-version":1,"data-media-id":"3f515b0b-bb09-4c97-969b-6bd991e9d63d","data-media-type":"file",children:e.jsx("img",{src:"attachments/thumbnails/602341378/603455507",height:250})})})," ",e.jsx("br",{})]}),e.jsx("p",{style:{marginLeft:"60.0px"}})]}),e.jsxs("div",{className:"pageSection group",children:[e.jsx("div",{className:"pageSectionHeader",children:e.jsx("h2",{id:"attachments",className:"pageSectionTitle",children:"Attachments:"})}),e.jsxs("div",{className:"greybox",align:"left",children:[e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341386.png",children:"GeoExpediaLocationsProcess.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341389.png",children:"ExpediaProperyIDs_logic.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341392.drawio",children:"ExpediaProperyIDs_logic.drawio"})," ","(binary/octet-stream)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341395.json",children:"RCI - XML 4.0.postman_collection.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341398.png",children:"RCI_B2B_Flow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341401.png",children:"image-20231205-123425.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341404.png",children:"image-20231205-123414.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341407.xls",children:"XML Super Region Codes.xls"})," ","(application/vnd.ms-excel)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341410.xls",children:"XML Prime Region Codes.xls"})," ","(application/vnd.ms-excel)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341413.json",children:"ExpediaTest.postman_environment.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341416.json",children:"EPS Rapid v3.postman_collection.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602341419.png",children:"AvailabilityFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/602734692.png",children:"GetStaticDataFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/603455507.txt",children:"List of Regions.txt"})," (text/plain)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/602341378/603455517.png",children:"image-20240111-125313.png"})," ","(image/png)",e.jsx("br",{})]})]})]})," "]}),e.jsx("div",{id:"footer",role:"contentinfo",children:e.jsxs("section",{className:"footer-body",children:[e.jsx("p",{children:"Document generated by Confluence on Jun 24, 2024 05:25"}),e.jsx("div",{id:"footer-logo",children:e.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{n as default};
