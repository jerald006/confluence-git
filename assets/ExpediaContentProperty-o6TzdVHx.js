import{j as n}from"./index-DR-7AHGB.js";function r(){return n.jsxs(n.Fragment,{children:[n.jsx("title",{children:"XeniApp : FRD - Expedia Integration - Get content property IDs - MVP1"}),n.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),n.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),n.jsxs("div",{id:"page",children:[n.jsxs("div",{id:"main",className:"aui-page-panel",children:[n.jsxs("div",{id:"main-header",children:[n.jsx("div",{id:"breadcrumb-section",children:n.jsxs("ol",{id:"breadcrumbs",children:[n.jsx("li",{className:"first",children:n.jsx("span",{children:n.jsx("a",{href:"index.html",children:"XeniApp"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"Expedia-Integration_594935911.html",children:"Expedia Integration"})})})]})}),n.jsx("h1",{id:"title-heading",className:"pagetitle",children:n.jsx("span",{id:"title-text",children:"XeniApp : FRD - Expedia Integration - Get content property IDs - MVP1"})})]}),n.jsxs("div",{id:"content",className:"view",children:[n.jsxs("div",{className:"page-metadata",children:["Created by ",n.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Dec 26, 2023"]}),n.jsxs("div",{id:"main-content",className:"wiki-content group",children:[n.jsx("h1",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-Functionalobjective",children:"Functional objective"}),n.jsxs("p",{children:["Get the list of property IDs from Expedia and store them in DB to resolve the availability search faster based on the Expedia Locations."," "]}),n.jsx("p",{}),n.jsx("h2",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-Context",children:"Context"}),n.jsxs("p",{children:["The availability method of Expedia requires a list of ",n.jsx("code",{children:"properties"})," to then, get the availability and price of each property. ",n.jsx("br",{}),"Based on it, as the information data from Expedia are semi-dynamic, it is required to get the list of Expedia Regions and associate the list of properties. it would be good to get the list of ",n.jsx("code",{children:"propertyIDs"})," and resolve the list of properties based on a customer search location, requiring the availability directly in the transaction."]}),n.jsx("h2",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-ProposalSolution",children:"Proposal Solution"}),n.jsxs("ol",{start:1,children:[n.jsx("li",{children:n.jsx("p",{children:"Get the list of Expedia Regions"})}),n.jsx("li",{children:n.jsx("p",{children:"Match the Expedia locations in the Hotel search box in the UI. "})}),n.jsx("li",{children:n.jsx("p",{children:"Get the list of Regions and PropertyIds associated to each region."})}),n.jsx("li",{children:n.jsx("p",{children:"Get the entire list of properties from Expedia based on pagination."})}),n.jsx("li",{children:n.jsxs("p",{children:["Generate an Update logic periodically to keep the Expedia content up to date."," "]})}),n.jsx("li",{children:n.jsx("p",{children:"Generate a logic to update inactive properties."})})]}),n.jsx("h2",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-Proposalflow",children:"Proposal flow"}),n.jsx("p",{children:n.jsx("strong",{children:"Step 1: GeoExpediaLocations"})}),n.jsx("span",{className:"confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size",children:n.jsx("img",{className:"confluence-embedded-image image-center",alt:"GeoExpediaLocationsProcess.png",width:1294,loading:"lazy",src:"/src/attachments/595689473/599588891.png?width=1294","data-image-src":"attachments/595689473/599588891.png","data-height":1506,"data-width":2285,"data-unresolved-comment-count":0,"data-linked-resource-id":599588891,"data-linked-resource-version":1,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"GeoExpediaLocationsProcess.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":595689473,"data-linked-resource-container-version":12,"data-media-id":"e2b8d43e-466f-4c6d-b71c-1feea4188ede","data-media-type":"file"})}),n.jsx("p",{children:n.jsx("strong",{children:"Step2: Get Properties Detail information"})}),n.jsx("span",{className:"confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size",children:n.jsx("img",{className:"confluence-embedded-image image-center",width:1294,loading:"lazy",src:"/src/attachments/595689473/595525679.png?width=1294","data-image-src":"attachments/595689473/595525679.png","data-height":738,"data-width":1371,"data-unresolved-comment-count":0,"data-linked-resource-id":595525679,"data-linked-resource-version":2,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"ExpediaProperyIDs_logic.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":595689473,"data-linked-resource-container-version":12,"data-media-id":"27b22e88-9b69-45cf-9aaf-bc5b6a9bb8b7","data-media-type":"file"})}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-FunctionalRequirements",children:"Functional Requirements"}),n.jsx("div",{className:"table-wrap",children:n.jsxs("table",{"data-table-width":1290,"data-layout":"default","data-local-id":"3b9f422a-bf6d-4bf1-850d-5f9c3a2244ed",className:"confluenceTable",children:[n.jsx("colgroup",{children:n.jsx("col",{})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{className:"numberingColumn confluenceTh"}),n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Action"})})}),n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Endpoint"})})}),n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Params"})})}),n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Comments"})})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"1"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create a Cron to Fetch the list of Expedia Locations"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"GET: /regions"})}),n.jsx("td",{className:"confluenceTd",children:n.jsxs("p",{children:["supply_source: expedia",n.jsx("br",{}),"include: standard",n.jsx("br",{}),"include: details",n.jsx("br",{}),"language: en-US"]})}),n.jsx("td",{className:"confluenceTd",children:n.jsxs("p",{children:["This method return pagination Link to fetch the entire list over 600.000.",n.jsx("br",{}),"This method will return the list of regions and the associated list of property_Ids"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"2"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create pagination logic"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"GET: regions"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"token"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"The link token received in the previous response payload."})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"3"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create a Cron to fetch the list of Properties from Expedia"})}),n.jsx("td",{className:"confluenceTd",children:n.jsxs("p",{children:["GET: ",n.jsx("span",{className:"legacy-color-text-inverse",children:"/"}),"properties/content"]})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"support: expedia"})}),n.jsxs("td",{className:"confluenceTd",children:[n.jsx("p",{children:"Get only the “Expedia” content and store the data of each property for further use and resolution."}),n.jsxs("p",{children:["The information of the entire list of properties should be split in chunks based on the pagination logic."," "]})]})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"4"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create pagination Logic"})}),n.jsx("td",{className:"confluenceTd",children:n.jsxs("p",{children:["GET: ",n.jsx("span",{className:"legacy-color-text-inverse",children:"/"}),"properties/content"]})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"token"})}),n.jsxs("td",{className:"confluenceTd",children:[n.jsx("p",{children:"Get the token from the first response of content endpoint call."}),n.jsx("p",{children:"Iteration required until got the last property returned by the end-point."})]})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"5"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create an Expedia Store"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"TBD"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"TBD"})}),n.jsx("td",{className:"confluenceTd",children:n.jsxs("p",{children:["This should contains the relevant information of each propertyId accordingly to our UI needs mapping. ",n.jsx("br",{}),"Also we need to add Active/Inactive property for Update logic"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"6"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create an UpdateLogic"})}),n.jsx("td",{className:"confluenceTd",children:n.jsxs("p",{children:["GET: ",n.jsx("span",{className:"legacy-color-text-inverse",children:"/"}),"properties/inactive"]})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"since = Date"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"It will return the list of inactive properties for Expedia from a given date (since param), it is optional and we can make our first call without it and from the 2nd create the proper logic based on the last update."})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"7"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create an Endpoint to fetch the Expedia Content from Storage"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"TBD"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"TBD"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Passing the PropertyID, get the property information to resolve the frontend needs."})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"8"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"SuperAdmin switch to decide Customers to consume Expedia or Zenthrum"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsxs("p",{children:["This is for the MVP1, as a Beta Pilot implementation by Customers (Canary).",n.jsx("br",{}),"Based on this the matching of the data with the current hotels DB is not needed, we will be focus only on Expedia content."]})})]})]})]})}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-Technicalrequirements",children:"Technical requirements"}),n.jsx("div",{className:"table-wrap",children:n.jsxs("table",{"data-table-width":1290,"data-layout":"default","data-local-id":"fcc4ad91-7075-4a8e-8631-d79f0652ec46",className:"confluenceTable",children:[n.jsx("colgroup",{children:n.jsx("col",{})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{className:"numberingColumn confluenceTh"}),n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Action"})})}),n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Comments"})})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"1"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Connect with Expedia Rapid API"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"2"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create the storage for Expedia Content"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"3"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Create the proper environment Branch for Expedia hotel conent."})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"4"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Get the list of Country Location Ids"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Based on the list of countries we orchestrate a 2nd call to fetch the list of cities and properties associated to each region."})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"5"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Get the list of property Ids of a country group by locationId"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"2nd level or grouping hotels"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"6"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Get the list of properties detail by Country/Region/location"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"GET: Content"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"7"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Populate the list of location in our Search Box of Hotels"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Include in the search box only the Expedia Locations"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"numberingColumn confluenceTd",children:"8"}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"SuperAdmin - Create a Toggle to enable Expedia Content or Zenthrum content."})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"For release MVP1 purpose we only allow to consume expedia or zenthrum, not combined"})})]})]})]})}),n.jsx("p",{children:n.jsx("br",{})}),n.jsxs("div",{id:"expander-187757641",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-187757641",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Request Example: GET /regions"})]}),n.jsx("div",{id:"expander-content-187757641",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'https://test.ean.com/v3/regions?include=standard&include=property_ids&language=en-US&supply_source=expedia' \\",`
`,"--header 'Authorization;' \\",`
`,"--header 'Customer-Ip: 5.5.5.5' \\",`
`,"--header 'Accept: application/json' \\",`
`,"--header 'Accept-Encoding: gzip' \\",`
`,"--header 'Cookie: ak_bmsc=D8BB0C7302EC6248627EB19C67BC1CD0~000000000000000000000000000000~YAAQUMgwF5MOzISMAQAA8uAJpha2fZKSJ6NVdgJJdsIah1gc7dSUGyi6zTdTYJXB1zfk7utldgApl6v7TOxM5uG8RgLeCB/jnvUo+qXQV0T5VQTVFqTTlzfEon/QUW9mFdA1k9nlTiOM2JssqatzmbYG4VI/5KQNI+KdY9asyaty4+t0K3/Mw1TvSBUhKSZfo32kR1J5+v6CiZuznuBoNV5NjtV44CYT9TtNatF6ivBAVx1gAs5VDboVXNKRrH8yLoE33I28yevhAh82No63cZsmol5ztvveivNL2p+zZGDWbnKc04jz2/oB+0GxjNSnbwBZ6KhljV75udu2xI0Sre1w8/doH2ZthzMA/spEbQoMDg/JsDlKIg==; bm_sv=B845FD0BB570B452DC92D935FEF2162D~YAAQZE5OaKyhmZ2MAQAAkfgYphbwpdGP2Xg7RbTnOMj8nCvfkseiYb0x/L1/rSLACXTPR6ld7IWWYY2aUroUBXx8/O0bHUGGA3lRohY2IxHNZ6N3uFxF+DhG6I7b43nwSFSbiALQ3JK/rg9ZCgcnpW3be0ZgNEy/233wHvOoTPtxyt5NJH9slfDQ5OQoRa7856Qs3uqrWTVHhlMOxOORbxgEN2m2WEWt/rXYmH2+Yz7T9Y4dYlXDRLUIYZV7~1'"]})})})})]}),n.jsxs("div",{id:"expander-2108626061",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-2108626061",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Response example Page1 : GET/regions"})]}),n.jsx("div",{id:"expander-content-2108626061",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["[",`
`,"    ","{",`
`,"        ",'"id": "1",',`
`,"        ",'"type": "country",',`
`,"        ",'"name": "Afghanistan",',`
`,"        ",'"name_full": "Afghanistan",',`
`,"        ",'"country_code": "AF"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10",',`
`,"        ",'"type": "country",',`
`,"        ",'"name": "Australia",',`
`,"        ",'"name_full": "Australia",',`
`,"        ",'"country_code": "AU",',`
`,"        ",'"property_ids": [',`
`,"            ",'"8640320",',`
`,"            ",'"22274354",',`
`,"            ",'"3424849",',`
`,"            ",'"5578137",',`
`,"            ",'"2694753",',`
`,"            ",'"1217",',`
`,"            ",'"902462",',`
`,"            ",'"13927",',`
`,"            ",'"3514642",',`
`,"            ",'"15231298",',`
`,"            ",'"2946967",',`
`,"            ",'"43684",',`
`,"            ",'"89850281",',`
`,"            ",'"76420969",',`
`,"            ",'"845350",',`
`,"            ",'"12919300",',`
`,"            ",'"34532107",',`
`,"            ",'"548789",',`
`,"            ",'"4610",',`
`,"            ",'"523380",',`
`,"            ",'"179004",',`
`,"            ",'"972547",',`
`,"            ",'"64896705",',`
`,"            ",'"1862508",',`
`,"            ",'"43437",',`
`,"            ",'"445455",',`
`,"            ",'"83005087",',`
`,"            ",'"12516115",',`
`,"            ",'"74738108",',`
`,"            ",'"1233",',`
`,"            ",'"15271653",',`
`,"            ",'"15055710",',`
`,"            ",'"3911029",',`
`,"            ",'"6921",',`
`,"            ",'"17300567",',`
`,"            ",'"40217964",',`
`,"            ",'"1734516",',`
`,"            ",'"455484",',`
`,"            ",'"452097",',`
`,"            ",'"5297604",',`
`,"            ",'"6022221",',`
`,"            ",'"43661",',`
`,"            ",'"93476355",',`
`,"            ",'"2220",',`
`,"            ",'"20594078",',`
`,"            ",'"4818614",',`
`,"            ",'"90233387",',`
`,"            ",'"1690948",',`
`,"            ",'"284308",',`
`,"            ",'"95452496",',`
`,"            ",'"16464052",',`
`,"            ",'"12516366",',`
`,"            ",'"46298237",',`
`,"            ",'"89924963",',`
`,"            ",'"11974",',`
`,"            ",'"2279492",',`
`,"            ",'"16032",',`
`,"            ",'"20530",',`
`,"            ",'"22958",',`
`,"            ",'"76557648",',`
`,"            ",'"1570129",',`
`,"            ",'"456649",',`
`,"            ",'"18573",',`
`,"            ",'"43419",',`
`,"            ",'"1927122",',`
`,"            ",'"1706014",',`
`,"            ",'"7065414",',`
`,"            ",'"447801",',`
`,"            ",'"470820",',`
`,"            ",'"525112",',`
`,"            ",'"1139",',`
`,"            ",'"9679406",',`
`,"            ",'"1721897",',`
`,"            ",'"447800",',`
`,"            ",'"2159078",',`
`,"            ",'"9625622",',`
`,"            ",'"2159076",',`
`,"            ",'"18067552",',`
`,"            ",'"4526",',`
`,"            ",'"18225",',`
`,"            ",'"43522",',`
`,"            ",'"15130172",',`
`,"            ",'"1765210",',`
`,"            ",'"19290835",',`
`,"            ",'"1357421",',`
`,"            ",'"69551401",',`
`,"            ",'"9679656",',`
`,"            ",'"1773945",',`
`,"            ",'"2112",',`
`,"            ",'"29367557",',`
`,"            ",'"13261331",',`
`,"            ",'"7296629",',`
`,"            ",'"4497855",',`
`,"            ",'"7699045",',`
`,"            ",'"2130",',`
`,"            ",'"19290828",',`
`,"            ",'"70939632",',`
`,"            ",'"1348725",',`
`,"            ",'"54710175",',`
`,"            ",'"74533229",',`
`,"            ",'"57242156",',`
`,"            ",'"95855308",',`
`,"            ",'"15696412",',`
`,"            ",'"1240241",',`
`,"            ",'"3424854",',`
`,"            ",'"9360673",',`
`,"            ",'"541927",',`
`,"            ",'"15818033",',`
`,"            ",'"2281424",',`
`,"            ",'"535260",',`
`,"            ",'"38420088",',`
`,"            ",'"1234925",',`
`,"            ",'"7708",',`
`,"            ",'"19290815",',`
`,"            ",'"3033860",',`
`,"            ",'"4451632",',`
`,"            ",'"29367535",',`
`,"            ",'"2419560",',`
`,"            ",'"13500954",',`
`,"            ",'"22629613",',`
`,"            ",'"3363",',`
`,"            ",'"40902",',`
`,"            ",'"4349675",',`
`,"            ",'"582734",',`
`,"            ",'"19290807",',`
`,"            ",'"18367534",',`
`,"            ",'"14677166",',`
`,"            ",'"45709219",',`
`,"            ",'"57242412",',`
`,"            ",'"16913",',`
`,"            ",'"12314221",',`
`,"            ",'"2649543",',`
`,"            ",'"13057644",',`
`,"            ",'"2432787",',`
`,"            ",'"8290624",',`
`,"            ",'"14796194",',`
`,"            ",'"89699120",',`
`,"            ",'"34457",',`
`,"            ",'"1954794",',`
`,"            ",'"35386205",',`
`,"            ",'"1122914",',`
`,"            ",'"12204",',`
`,"            ",'"13340702",',`
`,"            ",'"5932305",',`
`,"            ",'"914181",',`
`,"            ",'"55296085",',`
`,"            ",'"6428660",',`
`,"            ",'"22576",',`
`,"            ",'"197866",',`
`,"            ",'"83825946",',`
`,"            ",'"10230",',`
`,"            ",'"885402",',`
`,"            ",'"1515932",',`
`,"            ",'"10478",',`
`,"            ",'"72545549",',`
`,"            ",'"72544455",',`
`,"            ",'"451160",',`
`,"            ",'"17311731",',`
`,"            ",'"16009954",',`
`,"            ",'"13521416",',`
`,"            ",'"66516298",',`
`,"            ",'"452004",',`
`,"            ",'"24618",',`
`,"            ",'"20497",',`
`,"            ",'"14728472",',`
`,"            ",'"25943",',`
`,"            ",'"892250",',`
`,"            ",'"37412650",',`
`,"            ",'"9627528",',`
`,"            ",'"28093",',`
`,"            ",'"64470024",',`
`,"            ",'"9438248",',`
`,"            ",'"63862732",',`
`,"            ",'"42412995",',`
`,"            ",'"47961",',`
`,"            ",'"23775",',`
`,"            ",'"428345",',`
`,"            ",'"19264843",',`
`,"            ",'"580529",',`
`,"            ",'"845390",',`
`,"            ",'"454969",',`
`,"            ",'"607881",',`
`,"            ",'"73473975",',`
`,"            ",'"12401",',`
`,"            ",'"21574264",',`
`,"            ",'"45852781",',`
`,"            ",'"19178209",',`
`,"            ",'"96348027",',`
`,"            ",'"871443",',`
`,"            ",'"21612140",',`
`,"            ",'"6918338",',`
`,"            ",'"2266432",',`
`,"            ",'"11768",',`
`,"            ",'"578459",',`
`,"            ",'"867194",',`
`,"            ",'"3036629",',`
`,"            ",'"31199461",',`
`,"            ",'"18157417",',`
`,"            ",'"95110734",',`
`,"            ",'"116312",',`
`,"            ",'"3556580",',`
`,"            ",'"3872770",',`
`,"            ",'"73369716",',`
`,"            ",'"1791546",',`
`,"            ",'"5492",',`
`,"            ",'"5130",',`
`,"            ",'"68053304",',`
`,"            ",'"24101534",',`
`,"            ",'"54032015",',`
`,"            ",'"9624124",',`
`,"            ",'"19692893",',`
`,"            ",'"451478",',`
`,"            ",'"109",',`
`,"            ",'"4619963",',`
`,"            ",'"192021",',`
`,"            ",'"451473",',`
`,"            ",'"977630",',`
`,"            ",'"564357",',`
`,"            ",'"41979241",',`
`,"            ",'"1544556",',`
`,"            ",'"163237",',`
`,"            ",'"7566",',`
`,"            ",'"1189555",',`
`,"            ",'"15231738",',`
`,"            ",'"16438119",',`
`,"            ",'"4537611",',`
`,"            ",'"65924",',`
`,"            ",'"522715",',`
`,"            ",'"5094788",',`
`,"            ",'"3049430",',`
`,"            ",'"804599",',`
`,"            ",'"13368",',`
`,"            ",'"18811",',`
`,"            ",'"564002",',`
`,"            ",'"535903",',`
`,"            ",'"74301718",',`
`,"            ",'"564369",',`
`,"            ",'"564003",',`
`,"            ",'"40173100",',`
`,"            ",'"19295763",',`
`,"            ",'"31983230",',`
`,"            ",'"564008",',`
`,"            ",'"440886",',`
`,"            ",'"19006226",',`
`,"            ",'"12456551",',`
`,"            ",'"67662961",',`
`,"            ",'"119509",',`
`,"            ",'"911501",',`
`,"            ",'"2744318",',`
`,"            ",'"554653",',`
`,"            ",'"554654",',`
`,"            ",'"15454091",',`
`,"            ",'"16764",',`
`,"            ",'"22394359",',`
`,"            ",'"1661759",',`
`,"            ",'"4200133",',`
`,"            ",'"69222416",',`
`,"            ",'"55501376",',`
`,"            ",'"5555953",',`
`,"            ",'"15985472",',`
`,"            ",'"62678",',`
`,"            ",'"89443176",',`
`,"            ",'"460489",',`
`,"            ",'"63305062",',`
`,"            ",'"35189773",',`
`,"            ",'"9629846",',`
`,"            ",'"460492",',`
`,"            ",'"6616616",',`
`,"            ",'"36133388",',`
`,"            ",'"9628635",',`
`,"            ",'"15886",',`
`,"            ",'"24027561",',`
`,"            ",'"539146",',`
`,"            ",'"539147",',`
`,"            ",'"449362",',`
`,"            ",'"62684",',`
`,"            ",'"88838086",',`
`,"            ",'"89735812",',`
`,"            ",'"9202222",',`
`,"            ",'"460495",',`
`,"            ",'"27632",',`
`,"            ",'"906291",',`
`,"            ",'"1833510",',`
`,"            ",'"460498",',`
`,"            ",'"41329638",',`
`,"            ",'"4082",',`
`,"            ",'"96133976",',`
`,"            ",'"460380",',`
`,"            ",'"9628766",',`
`,"            ",'"11665037",',`
`,"            ",'"178970",',`
`,"            ",'"7365",',`
`,"            ",'"15740",',`
`,"            ",'"76928434",',`
`,"            ",'"24417317",',`
`,"            ",'"6419325",',`
`,"            ",'"40937",',`
`,"            ",'"199746",',`
`,"            ",'"460470",',`
`,"            ",'"22271",',`
`,"            ",'"84247",',`
`,"            ",'"24331",',`
`,"            ",'"44386684",',`
`,"            ",'"84243",',`
`,"            ",'"84245",',`
`,"            ",'"981639",',`
`,"            ",'"19295854",',`
`,"            ",'"9720960",',`
`,"            ",'"8463",',`
`,"            ",'"39541982",',`
`,"            ",'"565416",',`
`,"            ",'"41523348",',`
`,"            ",'"7861558",',`
`,"            ",'"200438",',`
`,"            ",'"460350",',`
`,"            ",'"460471",',`
`,"            ",'"24105",',`
`,"            ",'"460477",',`
`,"            ",'"460476",',`
`,"            ",'"26407",',`
`,"            ",'"460475",',`
`,"            ",'"2005055",',`
`,"            ",'"75072085",',`
`,"            ",'"11787958",',`
`,"            ",'"27851",',`
`,"            ",'"460480",',`
`,"            ",'"1555664",',`
`,"            ",'"48179957",',`
`,"            ",'"808888",',`
`,"            ",'"978580",',`
`,"            ",'"33512844",',`
`,"            ",'"54960",',`
`,"            ",'"980658",',`
`,"            ",'"7249",',`
`,"            ",'"21054386",',`
`,"            ",'"1541194",',`
`,"            ",'"9442",',`
`,"            ",'"2172870",',`
`,"            ",'"17445687",',`
`,"            ",'"3938900",',`
`,"            ",'"11362",',`
`,"            ",'"426577",',`
`,"            ",'"22136",',`
`,"            ",'"10504306",',`
`,"            ",'"426574",',`
`,"            ",'"1343834",',`
`,"            ",'"1386520",',`
`,"            ",'"9725165",',`
`,"            ",'"564346",',`
`,"            ",'"7153",',`
`,"            ",'"48713352",',`
`,"            ",'"1859086",',`
`,"            ",'"519115",',`
`,"            ",'"2319623",',`
`,"            ",'"426104",',`
`,"            ",'"78099407",',`
`,"            ",'"36862886",',`
`,"            ",'"64787",',`
`,"            ",'"1639985",',`
`,"            ",'"23356",',`
`,"            ",'"425374",',`
`,"            ",'"8240",',`
`,"            ",'"40904",',`
`,"            ",'"93518690",',`
`,"            ",'"18106833",',`
`,"            ",'"1657042",',`
`,"            ",'"84251",',`
`,"            ",'"90952354",',`
`,"            ",'"201315",',`
`,"            ",'"28216",',`
`,"            ",'"15859271",',`
`,"            ",'"9425764",',`
`,"            ",'"1103949",',`
`,"            ",'"9627169",',`
`,"            ",'"1731",',`
`,"            ",'"70972402",',`
`,"            ",'"17157188",',`
`,"            ",'"82665",',`
`,"            ",'"15876729",',`
`,"            ",'"1889244",',`
`,"            ",'"9725141",',`
`,"            ",'"36392302",',`
`,"            ",'"86157490",',`
`,"            ",'"564406",',`
`,"            ",'"564404",',`
`,"            ",'"428823",',`
`,"            ",'"93646575",',`
`,"            ",'"3806",',`
`,"            ",'"82772",',`
`,"            ",'"82774",',`
`,"            ",'"525280",',`
`,"            ",'"864494",',`
`,"            ",'"2961625",',`
`,"            ",'"9624903",',`
`,"            ",'"8224462",',`
`,"            ",'"1837939",',`
`,"            ",'"1747",',`
`,"            ",'"564653",',`
`,"            ",'"9425749",',`
`,"            ",'"10907",',`
`,"            ",'"4687342",',`
`,"            ",'"528639",',`
`,"            ",'"564419",',`
`,"            ",'"43718",',`
`,"            ",'"967114",',`
`,"            ",'"8153",',`
`,"            ",'"163097",',`
`,"            ",'"15004842",',`
`,"            ",'"94630726",',`
`,"            ",'"3005124",',`
`,"            ",'"982625",',`
`,"            ",'"45764718",',`
`,"            ",'"19627566",',`
`,"            ",'"11718621",',`
`,"            ",'"425333",',`
`,"            ",'"425456",',`
`,"            ",'"24468861",',`
`,"            ",'"27477",',`
`,"            ",'"3190217",',`
`,"            ",'"82929224",',`
`,"            ",'"904952",',`
`,"            ",'"898381",',`
`,"            ",'"45716692",',`
`,"            ",'"44219547",',`
`,"            ",'"17053183",',`
`,"            ",'"8283982",',`
`,"            ",'"20235443",',`
`,"            ",'"460501",',`
`,"            ",'"20372234",',`
`,"            ",'"1833523",',`
`,"            ",'"885392",',`
`,"            ",'"26479",',`
`,"            ",'"57794898",',`
`,"            ",'"15876772",',`
`,"            ",'"911017",',`
`,"            ",'"8710043",',`
`,"            ",'"11594369",',`
`,"            ",'"90350847",',`
`,"            ",'"4807",',`
`,"            ",'"23824073",',`
`,"            ",'"24053",',`
`,"            ",'"2862",',`
`,"            ",'"423677",',`
`,"            ",'"17834087",',`
`,"            ",'"564600",',`
`,"            ",'"460514",',`
`,"            ",'"17690830",',`
`,"            ",'"9035",',`
`,"            ",'"40898",',`
`,"            ",'"564969",',`
`,"            ",'"460511",',`
`,"            ",'"8065",',`
`,"            ",'"38400078",',`
`,"            ",'"912237",',`
`,"            ",'"549038",',`
`,"            ",'"4819",',`
`,"            ",'"89646350",',`
`,"            ",'"8782320",',`
`,"            ",'"68166",',`
`,"            ",'"19290798",',`
`,"            ",'"903405",',`
`,"            ",'"67610514",',`
`,"            ",'"17742",',`
`,"            ",'"14111",',`
`,"            ",'"16892",',`
`,"            ",'"26579",',`
`,"            ",'"447792",',`
`,"            ",'"64814",',`
`,"            ",'"25019183",',`
`,"            ",'"447798",',`
`,"            ",'"7413530",',`
`,"            ",'"44902282",',`
`,"            ",'"28774152",',`
`,"            ",'"525179",',`
`,"            ",'"4238660",',`
`,"            ",'"3952812",',`
`,"            ",'"17436921",',`
`,"            ",'"95106922",',`
`,"            ",'"40101010",',`
`,"            ",'"19290784",',`
`,"            ",'"55365550",',`
`,"            ",'"23144912",',`
`,"            ",'"4528332",',`
`,"            ",'"26759803",',`
`,"            ",'"481895",',`
`,"            ",'"7281317",',`
`,"            ",'"450947",',`
`,"            ",'"22051922",',`
`,"            ",'"100415513",',`
`,"            ",'"875000",',`
`,"            ",'"9328440",',`
`,"            ",'"36379202",',`
`,"            ",'"26464",',`
`,"            ",'"6944157",',`
`,"            ",'"912494",',`
`,"            ",'"178896",',`
`,"            ",'"19290776",',`
`,"            ",'"455159"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100",',`
`,"        ",'"type": "country",',`
`,"        ",'"name": "Liberia",',`
`,"        ",'"name_full": "Liberia",',`
`,"        ",'"country_code": "LR",',`
`,"        ",'"property_ids": [',`
`,"            ",'"42251658",',`
`,"            ",'"16391384",',`
`,"            ",'"92078668",',`
`,"            ",'"19435003",',`
`,"            ",'"74209089",',`
`,"            ",'"92200307",',`
`,"            ",'"58048361",',`
`,"            ",'"89698857",',`
`,"            ",'"16106903",',`
`,"            ",'"15958334",',`
`,"            ",'"39752997",',`
`,"            ",'"90750205",',`
`,"            ",'"99412571",',`
`,"            ",'"19690066",',`
`,"            ",'"16092955",',`
`,"            ",'"19157342",',`
`,"            ",'"19716492",',`
`,"            ",'"50716467",',`
`,"            ",'"35250275",',`
`,"            ",'"39798935",',`
`,"            ",'"35232244",',`
`,"            ",'"44658163",',`
`,"            ",'"19722838",',`
`,"            ",'"44968015",',`
`,"            ",'"98067132",',`
`,"            ",'"19671026",',`
`,"            ",'"98512030",',`
`,"            ",'"25062315",',`
`,"            ",'"66305118",',`
`,"            ",'"48478960",',`
`,"            ",'"16361709",',`
`,"            ",'"40102493",',`
`,"            ",'"37139885",',`
`,"            ",'"23564348",',`
`,"            ",'"15881162"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1000",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Dallas",',`
`,"        ",'"name_full": "Dallas, Texas, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"21301",',`
`,"            ",'"23605",',`
`,"            ",'"37209678",',`
`,"            ",'"480790",',`
`,"            ",'"19583",',`
`,"            ",'"439428",',`
`,"            ",'"73785",',`
`,"            ",'"1355314",',`
`,"            ",'"59859484",',`
`,"            ",'"9064",',`
`,"            ",'"93029233",',`
`,"            ",'"13929",',`
`,"            ",'"12674653",',`
`,"            ",'"12333924",',`
`,"            ",'"56225820",',`
`,"            ",'"5930",',`
`,"            ",'"20388736",',`
`,"            ",'"44916180",',`
`,"            ",'"18267",',`
`,"            ",'"34428360",',`
`,"            ",'"6128990",',`
`,"            ",'"92049416",',`
`,"            ",'"74641",',`
`,"            ",'"117205",',`
`,"            ",'"2506489",',`
`,"            ",'"39019661",',`
`,"            ",'"92565672",',`
`,"            ",'"96219727",',`
`,"            ",'"93572982",',`
`,"            ",'"897228",',`
`,"            ",'"51006849",',`
`,"            ",'"126",',`
`,"            ",'"14991009",',`
`,"            ",'"95469239",',`
`,"            ",'"998976",',`
`,"            ",'"19689",',`
`,"            ",'"58983648",',`
`,"            ",'"94958205",',`
`,"            ",'"70985654",',`
`,"            ",'"94910341",',`
`,"            ",'"2840564",',`
`,"            ",'"94352852",',`
`,"            ",'"74985819",',`
`,"            ",'"27064",',`
`,"            ",'"10515",',`
`,"            ",'"22438606",',`
`,"            ",'"202274",',`
`,"            ",'"94954401",',`
`,"            ",'"4513061",',`
`,"            ",'"33807716",',`
`,"            ",'"33807715",',`
`,"            ",'"33807714",',`
`,"            ",'"33807713",',`
`,"            ",'"76598861",',`
`,"            ",'"428680",',`
`,"            ",'"23836",',`
`,"            ",'"9414",',`
`,"            ",'"1708925",',`
`,"            ",'"43540",',`
`,"            ",'"453181",',`
`,"            ",'"40397",',`
`,"            ",'"33807719",',`
`,"            ",'"21890",',`
`,"            ",'"67457",',`
`,"            ",'"82893946",',`
`,"            ",'"16402977",',`
`,"            ",'"21951466",',`
`,"            ",'"52028272",',`
`,"            ",'"21899",',`
`,"            ",'"33807721",',`
`,"            ",'"572570",',`
`,"            ",'"33807720",',`
`,"            ",'"4071694",',`
`,"            ",'"17789323",',`
`,"            ",'"94955167",',`
`,"            ",'"10882",',`
`,"            ",'"12147",',`
`,"            ",'"93547862",',`
`,"            ",'"18575",',`
`,"            ",'"8331909",',`
`,"            ",'"1209294",',`
`,"            ",'"22935314",',`
`,"            ",'"93205873",',`
`,"            ",'"2004999",',`
`,"            ",'"94372724",',`
`,"            ",'"94357855",',`
`,"            ",'"67389038",',`
`,"            ",'"76860046",',`
`,"            ",'"92386953",',`
`,"            ",'"27967",',`
`,"            ",'"6307171",',`
`,"            ",'"79459",',`
`,"            ",'"20096",',`
`,"            ",'"93572809",',`
`,"            ",'"100640024",',`
`,"            ",'"538556",',`
`,"            ",'"3062181",',`
`,"            ",'"22935323",',`
`,"            ",'"116713",',`
`,"            ",'"853722",',`
`,"            ",'"13211754",',`
`,"            ",'"92614177",',`
`,"            ",'"17840128",',`
`,"            ",'"19317",',`
`,"            ",'"50848694",',`
`,"            ",'"4488581",',`
`,"            ",'"74984491",',`
`,"            ",'"94910543",',`
`,"            ",'"41333",',`
`,"            ",'"37198950",',`
`,"            ",'"92891515",',`
`,"            ",'"203958",',`
`,"            ",'"41336",',`
`,"            ",'"440511",',`
`,"            ",'"1691854",',`
`,"            ",'"41339",',`
`,"            ",'"36075099",',`
`,"            ",'"77613",',`
`,"            ",'"50474212",',`
`,"            ",'"67432168",',`
`,"            ",'"480180",',`
`,"            ",'"57201520",',`
`,"            ",'"94423378",',`
`,"            ",'"22945",',`
`,"            ",'"46150757",',`
`,"            ",'"38962836",',`
`,"            ",'"22022",',`
`,"            ",'"13279740",',`
`,"            ",'"94910654",',`
`,"            ",'"19057395",',`
`,"            ",'"16709",',`
`,"            ",'"13209587",',`
`,"            ",'"741",',`
`,"            ",'"23594",',`
`,"            ",'"50268",',`
`,"            ",'"44916290",',`
`,"            ",'"49178153",',`
`,"            ",'"5528",',`
`,"            ",'"19863",',`
`,"            ",'"41310",',`
`,"            ",'"2366821",',`
`,"            ",'"12380646",',`
`,"            ",'"202767",',`
`,"            ",'"17347951",',`
`,"            ",'"83812169",',`
`,"            ",'"16088437",',`
`,"            ",'"92847586",',`
`,"            ",'"1298",',`
`,"            ",'"94953137",',`
`,"            ",'"16238",',`
`,"            ",'"20154562",',`
`,"            ",'"102479",',`
`,"            ",'"15689105",',`
`,"            ",'"54049455",',`
`,"            ",'"16137806",',`
`,"            ",'"57077186",',`
`,"            ",'"99424747",',`
`,"            ",'"158950",',`
`,"            ",'"1481600",',`
`,"            ",'"15399",',`
`,"            ",'"42991",',`
`,"            ",'"46230516",',`
`,"            ",'"48476371",',`
`,"            ",'"45870240",',`
`,"            ",'"24302",',`
`,"            ",'"19899523",',`
`,"            ",'"9472",',`
`,"            ",'"280804",',`
`,"            ",'"11629238",',`
`,"            ",'"2442695",',`
`,"            ",'"94953125",',`
`,"            ",'"116884",',`
`,"            ",'"94910192",',`
`,"            ",'"94910193",',`
`,"            ",'"91330611",',`
`,"            ",'"14030",',`
`,"            ",'"23191910",',`
`,"            ",'"13187",',`
`,"            ",'"280919",',`
`,"            ",'"92844401",',`
`,"            ",'"24753",',`
`,"            ",'"24755",',`
`,"            ",'"2957215",',`
`,"            ",'"26715443",',`
`,"            ",'"5185026",',`
`,"            ",'"24756",',`
`,"            ",'"26492",',`
`,"            ",'"559819",',`
`,"            ",'"100625951",',`
`,"            ",'"899348",',`
`,"            ",'"120682",',`
`,"            ",'"996161",',`
`,"            ",'"41181001",',`
`,"            ",'"120448",',`
`,"            ",'"914184",',`
`,"            ",'"41721558",',`
`,"            ",'"94959123",',`
`,"            ",'"455880",',`
`,"            ",'"76599792",',`
`,"            ",'"92350449",',`
`,"            ",'"93202515",',`
`,"            ",'"27512362",',`
`,"            ",'"27532194",',`
`,"            ",'"63681061",',`
`,"            ",'"93602722",',`
`,"            ",'"12425",',`
`,"            ",'"19979",',`
`,"            ",'"794528",',`
`,"            ",'"92884604",',`
`,"            ",'"27293806",',`
`,"            ",'"94910601",',`
`,"            ",'"50613444",',`
`,"            ",'"94910965",',`
`,"            ",'"11789",',`
`,"            ",'"93597036",',`
`,"            ",'"69260912",',`
`,"            ",'"25265",',`
`,"            ",'"1438742",',`
`,"            ",'"46150705",',`
`,"            ",'"95849964",',`
`,"            ",'"27833778",',`
`,"            ",'"18228514",',`
`,"            ",'"104598",',`
`,"            ",'"93199310",',`
`,"            ",'"40414",',`
`,"            ",'"24363183",',`
`,"            ",'"94350802",',`
`,"            ",'"40413",',`
`,"            ",'"22685",',`
`,"            ",'"40411",',`
`,"            ",'"20941",',`
`,"            ",'"3790206",',`
`,"            ",'"13319774",',`
`,"            ",'"204400",',`
`,"            ",'"116440",',`
`,"            ",'"9399248",',`
`,"            ",'"87658276",',`
`,"            ",'"1421",',`
`,"            ",'"90324792",',`
`,"            ",'"41527556",',`
`,"            ",'"64251",',`
`,"            ",'"89152345",',`
`,"            ",'"92556091",',`
`,"            ",'"23982",',`
`,"            ",'"19950411",',`
`,"            ",'"26458",',`
`,"            ",'"17495183",',`
`,"            ",'"31917058",',`
`,"            ",'"1469238",',`
`,"            ",'"28075",',`
`,"            ",'"94368098",',`
`,"            ",'"282336",',`
`,"            ",'"474443",',`
`,"            ",'"93201572",',`
`,"            ",'"12059",',`
`,"            ",'"94952420",',`
`,"            ",'"7672",',`
`,"            ",'"694226",',`
`,"            ",'"92181332",',`
`,"            ",'"64148",',`
`,"            ",'"44921244",',`
`,"            ",'"93575830",',`
`,"            ",'"18280",',`
`,"            ",'"94962691",',`
`,"            ",'"87833714",',`
`,"            ",'"94371276",',`
`,"            ",'"101973",',`
`,"            ",'"18277907",',`
`,"            ",'"85063",',`
`,"            ",'"16307"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10000",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Williamsburg",',`
`,"        ",'"name_full": "Williamsburg, Iowa, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"8416304",',`
`,"            ",'"42562",',`
`,"            ",'"1096618",',`
`,"            ",'"573454",',`
`,"            ",'"78180462"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10001",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Highland Beach",',`
`,"        ",'"name_full": "Highland Beach, Florida, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"7025"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100011",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Eaton Rapids",',`
`,"        ",'"name_full": "Eaton Rapids, Michigan, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100015",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Eatonville",',`
`,"        ",'"name_full": "Eatonville, Washington, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"94965744",',`
`,"            ",'"93199528",',`
`,"            ",'"93205855"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10003",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Stockbridge",',`
`,"        ",'"name_full": "Stockbridge, Georgia, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"42159",',`
`,"            ",'"894616",',`
`,"            ",'"15858453",',`
`,"            ",'"889356",',`
`,"            ",'"34001242",',`
`,"            ",'"16224",',`
`,"            ",'"100849264",',`
`,"            ",'"892573",',`
`,"            ",'"700126",',`
`,"            ",'"27831",',`
`,"            ",'"100849737",',`
`,"            ",'"100849989",',`
`,"            ",'"100849328",',`
`,"            ",'"11223085",',`
`,"            ",'"100849932",',`
`,"            ",'"10544565",',`
`,"            ",'"11267756",',`
`,"            ",'"1753826",',`
`,"            ",'"1567232",',`
`,"            ",'"96047907",',`
`,"            ",'"1730130",',`
`,"            ",'"50544",',`
`,"            ",'"1101742",',`
`,"            ",'"45239388"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10004",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "La Grange",',`
`,"        ",'"name_full": "La Grange, Kentucky, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"200839",',`
`,"            ",'"907446",',`
`,"            ",'"34182534",',`
`,"            ",'"581092",',`
`,"            ",'"16995"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10005",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Mount Vernon",',`
`,"        ",'"name_full": "Mount Vernon, Kentucky, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"9653",',`
`,"            ",'"535577",',`
`,"            ",'"2784468",',`
`,"            ",'"3987",',`
`,"            ",'"34056134"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10007",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Orange",',`
`,"        ",'"name_full": "Orange, Texas, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"2945614",',`
`,"            ",'"94959268",',`
`,"            ",'"2518617",',`
`,"            ",'"40534",',`
`,"            ",'"2647819",',`
`,"            ",'"33791033",',`
`,"            ",'"856104",',`
`,"            ",'"45246047",',`
`,"            ",'"11329",',`
`,"            ",'"27273",',`
`,"            ",'"5494361",',`
`,"            ",'"2319428",',`
`,"            ",'"1513710"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10008",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Three Rivers",',`
`,"        ",'"name_full": "Three Rivers, California, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"55355",',`
`,"            ",'"11769",',`
`,"            ",'"564999",',`
`,"            ",'"94955821",',`
`,"            ",'"93600321",',`
`,"            ",'"2975732"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10009",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Troutville",',`
`,"        ",'"name_full": "Troutville, Virginia, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"25827",',`
`,"            ",'"2434330",',`
`,"            ",'"847206",',`
`,"            ",'"18639",',`
`,"            ",'"19965"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1001",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Degahbur",',`
`,"        ",'"name_full": "Degahbur, Somali Region, Ethiopia",',`
`,"        ",'"country_code": "ET"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10011",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Glenham",',`
`,"        ",'"name_full": "Glenham, New York, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10012",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "La Plata",',`
`,"        ",'"name_full": "La Plata, Maryland, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"1457493",',`
`,"            ",'"7476367",',`
`,"            ",'"32608515"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10013",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Snoqualmie",',`
`,"        ",'"name_full": "Snoqualmie, Washington, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"31891811",',`
`,"            ",'"4779"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10014",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Troy",',`
`,"        ",'"name_full": "Troy, Illinois, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"446536",',`
`,"            ",'"1090603",',`
`,"            ",'"482646",',`
`,"            ",'"486803",',`
`,"            ",'"15041234",',`
`,"            ",'"94624699"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10015",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Thornton",',`
`,"        ",'"name_full": "Thornton, Colorado, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"94502582",',`
`,"            ",'"1029934",',`
`,"            ",'"13340807",',`
`,"            ",'"94740444",',`
`,"            ",'"33660875",',`
`,"            ",'"62798",',`
`,"            ",'"5286947",',`
`,"            ",'"51007205",',`
`,"            ",'"71135048",',`
`,"            ",'"20216",',`
`,"            ",'"208811",',`
`,"            ",'"98548462",',`
`,"            ",'"168379",',`
`,"            ",'"93561168",',`
`,"            ",'"94383899"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10016",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Thorofare",',`
`,"        ",'"name_full": "Thorofare, New Jersey, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"16219"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100173",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Eddyville",',`
`,"        ",'"name_full": "Eddyville, Kentucky, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"94956931",',`
`,"            ",'"282460",',`
`,"            ",'"3823905",',`
`,"            ",'"93561323"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10018",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Ponte Vedra Beach",',`
`,"        ",'"name_full": "Ponte Vedra Beach, Florida, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"73729975",',`
`,"            ",'"93207670",',`
`,"            ",'"71141817",',`
`,"            ",'"55056052",',`
`,"            ",'"76934551",',`
`,"            ",'"55057243",',`
`,"            ",'"98555174",',`
`,"            ",'"72048278",',`
`,"            ",'"55082810",',`
`,"            ",'"55082799",',`
`,"            ",'"79808829",',`
`,"            ",'"55056305",',`
`,"            ",'"55058005",',`
`,"            ",'"99261170",',`
`,"            ",'"55056267",',`
`,"            ",'"13621",',`
`,"            ",'"94323547",',`
`,"            ",'"975423",',`
`,"            ",'"92200952",',`
`,"            ",'"55056307",',`
`,"            ",'"903879",',`
`,"            ",'"90165761",',`
`,"            ",'"81719734",',`
`,"            ",'"25311",',`
`,"            ",'"55082809",',`
`,"            ",'"55056280",',`
`,"            ",'"90166170",',`
`,"            ",'"55056555",',`
`,"            ",'"95266459",',`
`,"            ",'"90226041",',`
`,"            ",'"73735599",',`
`,"            ",'"73735457",',`
`,"            ",'"79793134",',`
`,"            ",'"55055921",',`
`,"            ",'"55056438",',`
`,"            ",'"79793677"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100186",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Eden",',`
`,"        ",'"name_full": "Eden, Utah, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"93545909",',`
`,"            ",'"94315345",',`
`,"            ",'"94959312",',`
`,"            ",'"98548939",',`
`,"            ",'"94508689",',`
`,"            ",'"94960144",',`
`,"            ",'"90226558",',`
`,"            ",'"93548073",',`
`,"            ",'"5576186",',`
`,"            ",'"93202519",',`
`,"            ",'"94411945",',`
`,"            ",'"93587081",',`
`,"            ",'"90229831",',`
`,"            ",'"94374103",',`
`,"            ",'"94370000",',`
`,"            ",'"93561263",',`
`,"            ",'"94959063",',`
`,"            ",'"94956178",',`
`,"            ",'"95867153",',`
`,"            ",'"93201194",',`
`,"            ",'"93545741"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10019",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Roslyn",',`
`,"        ",'"name_full": "Roslyn, New York, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"1966955",',`
`,"            ",'"21238"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1002",',`
`,"        ",'"type": "high_level_region",',`
`,"        ",'"name": "Mudgee Wine Region",',`
`,"        ",'"name_full": "Mudgee Wine Region, New South Wales, Australia",',`
`,"        ",'"country_code": "AU",',`
`,"        ",'"property_ids": [',`
`,"            ",'"5190676",',`
`,"            ",'"87484013",',`
`,"            ",'"15516803",',`
`,"            ",'"48423423",',`
`,"            ",'"18617799",',`
`,"            ",'"27944",',`
`,"            ",'"93200437",',`
`,"            ",'"9629142",',`
`,"            ",'"9628032",',`
`,"            ",'"48423387",',`
`,"            ",'"9623783",',`
`,"            ",'"1627760",',`
`,"            ",'"59939620",',`
`,"            ",'"9624779",',`
`,"            ",'"72051274",',`
`,"            ",'"4917257",',`
`,"            ",'"23610857",',`
`,"            ",'"9623571",',`
`,"            ",'"9625970",',`
`,"            ",'"71990888",',`
`,"            ",'"62966957",',`
`,"            ",'"9623630",',`
`,"            ",'"15828444",',`
`,"            ",'"61198960",',`
`,"            ",'"32634960",',`
`,"            ",'"29475066",',`
`,"            ",'"23690001"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10020",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Nanuet",',`
`,"        ",'"name_full": "Nanuet, New York, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"1551336",',`
`,"            ",'"985904",',`
`,"            ",'"172075",',`
`,"            ",'"736",',`
`,"            ",'"694250"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10021",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "New Windsor",',`
`,"        ",'"name_full": "New Windsor, New York, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"1764709",',`
`,"            ",'"875625",',`
`,"            ",'"2814379"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10022",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Loveland",',`
`,"        ",'"name_full": "Loveland, Colorado, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"1988041",',`
`,"            ",'"100850034",',`
`,"            ",'"50989838",',`
`,"            ",'"897818",',`
`,"            ",'"89840423",',`
`,"            ",'"89840422",',`
`,"            ",'"93205158",',`
`,"            ",'"89840421",',`
`,"            ",'"94958229",',`
`,"            ",'"16153452",',`
`,"            ",'"89840705",',`
`,"            ",'"98550284",',`
`,"            ",'"93575515",',`
`,"            ",'"89870550",',`
`,"            ",'"1982900",',`
`,"            ",'"94956207",',`
`,"            ",'"93206160",',`
`,"            ",'"94958378",',`
`,"            ",'"63036",',`
`,"            ",'"32626879",',`
`,"            ",'"93546597",',`
`,"            ",'"37265363",',`
`,"            ",'"15417980",',`
`,"            ",'"93575609",',`
`,"            ",'"96513186",',`
`,"            ",'"96513183",',`
`,"            ",'"89840481",',`
`,"            ",'"96513184",',`
`,"            ",'"96513181",',`
`,"            ",'"96513182",',`
`,"            ",'"93205097",',`
`,"            ",'"1357117",',`
`,"            ",'"1481597",',`
`,"            ",'"93548007",',`
`,"            ",'"89870696",',`
`,"            ",'"15273474",',`
`,"            ",'"89870579",',`
`,"            ",'"93547639",',`
`,"            ",'"1710772",',`
`,"            ",'"93589235",',`
`,"            ",'"2232382",',`
`,"            ",'"94953470",',`
`,"            ",'"10236",',`
`,"            ",'"327605",',`
`,"            ",'"126620",',`
`,"            ",'"34289727",',`
`,"            ",'"89870292",',`
`,"            ",'"93570856",',`
`,"            ",'"93207449",',`
`,"            ",'"99350520",',`
`,"            ",'"41968",',`
`,"            ",'"94953859",',`
`,"            ",'"94959809",',`
`,"            ",'"89870089",',`
`,"            ",'"37047384",',`
`,"            ",'"93203645",',`
`,"            ",'"89870764",',`
`,"            ",'"89840266",',`
`,"            ",'"94962925",',`
`,"            ",'"2333439"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100239",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Edenwold",',`
`,"        ",'"name_full": "Edenwold, Tennessee, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10024",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Old Westbury",',`
`,"        ",'"name_full": "Old Westbury, New York, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100241",',`
`,"        ",'"type": "neighborhood",',`
`,"        ",'"name": "Ederville",',`
`,"        ",'"name_full": "Ederville, Fort Worth, Texas, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10025",',`
`,"        ",'"type": "neighborhood",',`
`,"        ",'"name": "Landover",',`
`,"        ",'"name_full": "Landover, Hyattsville, Maryland, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"11388",',`
`,"            ",'"26597444",',`
`,"            ",'"18669"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10026",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Fernley",',`
`,"        ",'"name_full": "Fernley, Nevada, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"3117218",',`
`,"            ",'"66557",',`
`,"            ",'"8260636"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100264",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Edgefield",',`
`,"        ",'"name_full": "Edgefield, South Carolina, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"5686670"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10028",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Totowa",',`
`,"        ",'"name_full": "Totowa, New Jersey, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"23304"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10029",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tryon",',`
`,"        ",'"name_full": "Tryon, North Carolina, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"93600841",',`
`,"            ",'"34844143",',`
`,"            ",'"93205150"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1003",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Durango",',`
`,"        ",'"name_full": "Durango, Durango, Mexico",',`
`,"        ",'"country_code": "MX",',`
`,"        ",'"property_ids": [',`
`,"            ",'"859364",',`
`,"            ",'"5567081",',`
`,"            ",'"92431123",',`
`,"            ",'"7217058",',`
`,"            ",'"12798963",',`
`,"            ",'"35869518",',`
`,"            ",'"1691327",',`
`,"            ",'"13498592",',`
`,"            ",'"1702286",',`
`,"            ",'"2246564",',`
`,"            ",'"15083782",',`
`,"            ",'"15362846",',`
`,"            ",'"15237519",',`
`,"            ",'"15089699",',`
`,"            ",'"1228372",',`
`,"            ",'"22789619",',`
`,"            ",'"86612573",',`
`,"            ",'"19405717",',`
`,"            ",'"19660777"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10030",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Trinidad",',`
`,"        ",'"name_full": "Trinidad, Colorado, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"6478",',`
`,"            ",'"2159054",',`
`,"            ",'"906741",',`
`,"            ",'"92190599",',`
`,"            ",'"94955853",',`
`,"            ",'"20716",',`
`,"            ",'"82500834",',`
`,"            ",'"75156202",',`
`,"            ",'"7874006",',`
`,"            ",'"20227",',`
`,"            ",'"1957163"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10031",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Taranto",',`
`,"        ",'"name_full": "Taranto, Puglia, Italy",',`
`,"        ",'"country_code": "IT",',`
`,"        ",'"property_ids": [',`
`,"            ",'"37146572",',`
`,"            ",'"22664015",',`
`,"            ",'"20205513",',`
`,"            ",'"96216004",',`
`,"            ",'"23594437",',`
`,"            ",'"100567299",',`
`,"            ",'"1853332",',`
`,"            ",'"32396104",',`
`,"            ",'"34279300",',`
`,"            ",'"20260292",',`
`,"            ",'"45907287",',`
`,"            ",'"30235851",',`
`,"            ",'"14731056",',`
`,"            ",'"41337511",',`
`,"            ",'"1303601",',`
`,"            ",'"42420236",',`
`,"            ",'"29857072",',`
`,"            ",'"30072786",',`
`,"            ",'"5407285",',`
`,"            ",'"100936046",',`
`,"            ",'"19814879",',`
`,"            ",'"1304370",',`
`,"            ",'"1467745",',`
`,"            ",'"7089553",',`
`,"            ",'"66781452",',`
`,"            ",'"22687397",',`
`,"            ",'"27525961",',`
`,"            ",'"27522177",',`
`,"            ",'"53821232",',`
`,"            ",'"8355512",',`
`,"            ",'"37634761",',`
`,"            ",'"33006402",',`
`,"            ",'"46193330",',`
`,"            ",'"1348640",',`
`,"            ",'"96467229",',`
`,"            ",'"11448882",',`
`,"            ",'"19805555",',`
`,"            ",'"49951749",',`
`,"            ",'"95280455",',`
`,"            ",'"38572321",',`
`,"            ",'"18675958",',`
`,"            ",'"12569315",',`
`,"            ",'"3612818",',`
`,"            ",'"20260272",',`
`,"            ",'"27398921",',`
`,"            ",'"89733075",',`
`,"            ",'"22377722",',`
`,"            ",'"93449996",',`
`,"            ",'"20614042",',`
`,"            ",'"32697870",',`
`,"            ",'"12568961",',`
`,"            ",'"22664109",',`
`,"            ",'"32396014",',`
`,"            ",'"2523505",',`
`,"            ",'"2506746",',`
`,"            ",'"32970885",',`
`,"            ",'"32801914",',`
`,"            ",'"13214407",',`
`,"            ",'"10348126"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10032",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tabibuga",',`
`,"        ",'"name_full": "Tabibuga, Jiwaka, Papua New Guinea",',`
`,"        ",'"country_code": "PG"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100320",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Edgewater",',`
`,"        ",'"name_full": "Edgewater, Colorado, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"94352996",',`
`,"            ",'"35177566",',`
`,"            ",'"99883913",',`
`,"            ",'"94503599"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10033",',`
`,"        ",'"type": "high_level_region",',`
`,"        ",'"name": "Tablas Island",',`
`,"        ",'"name_full": "Tablas Island, Mimaropa, Philippines",',`
`,"        ",'"country_code": "PH",',`
`,"        ",'"property_ids": [',`
`,"            ",'"17282235",',`
`,"            ",'"16432355",',`
`,"            ",'"20069053",',`
`,"            ",'"23595902"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10035",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "St. Joseph",',`
`,"        ",'"name_full": "St. Joseph, Minnesota, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"16778118"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100354",',`
`,"        ",'"type": "neighborhood",',`
`,"        ",'"name": "Edgewood",',`
`,"        ",'"name_full": "Edgewood, Orlando, Florida, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10036",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tucumcari",',`
`,"        ",'"name_full": "Tucumcari, New Mexico, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"855627",',`
`,"            ",'"48225404",',`
`,"            ",'"1658964",',`
`,"            ",'"16499",',`
`,"            ",'"19544631",',`
`,"            ",'"78765045",',`
`,"            ",'"13729",',`
`,"            ",'"2593952",',`
`,"            ",'"996364",',`
`,"            ",'"36681032",',`
`,"            ",'"17349",',`
`,"            ",'"7509"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100364",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Edgewood",',`
`,"        ",'"name_full": "Edgewood, Texas, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"32151693"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10037",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tulcea",',`
`,"        ",'"name_full": "Tulcea, Tulcea County, Romania",',`
`,"        ",'"country_code": "RO",',`
`,"        ",'"property_ids": [',`
`,"            ",'"43990172",',`
`,"            ",'"2938757",',`
`,"            ",'"2835827",',`
`,"            ",'"90164219"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10038",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Truth or Consequences",',`
`,"        ",'"name_full": "Truth or Consequences, New Mexico, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"83268570",',`
`,"            ",'"5126840",',`
`,"            ",'"424526",',`
`,"            ",'"22154",',`
`,"            ",'"78100460",',`
`,"            ",'"50314",',`
`,"            ",'"92722279",',`
`,"            ",'"94342794"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10039",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tocumwal",',`
`,"        ",'"name_full": "Tocumwal, New South Wales, Australia",',`
`,"        ",'"country_code": "AU",',`
`,"        ",'"property_ids": [',`
`,"            ",'"9723794",',`
`,"            ",'"15993359",',`
`,"            ",'"17497372",',`
`,"            ",'"12776557",',`
`,"            ",'"84873673"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10041",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tandag",',`
`,"        ",'"name_full": "Tandag, Caraga, Philippines",',`
`,"        ",'"country_code": "PH",',`
`,"        ",'"property_ids": [',`
`,"            ",'"89744658",',`
`,"            ",'"37967845"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10042",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Taldykorgan",',`
`,"        ",'"name_full": "Taldykorgan, Jetisu Region, Kazakhstan",',`
`,"        ",'"country_code": "KZ",',`
`,"        ",'"property_ids": [',`
`,"            ",'"18675767",',`
`,"            ",'"37180801"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10043",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Bensalem",',`
`,"        ",'"name_full": "Bensalem, Pennsylvania, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"8268807",',`
`,"            ",'"117069",',`
`,"            ",'"73971829",',`
`,"            ",'"881840",',`
`,"            ",'"21490631",',`
`,"            ",'"74243787",',`
`,"            ",'"14963",',`
`,"            ",'"6526",',`
`,"            ",'"13900",',`
`,"            ",'"2244243",',`
`,"            ",'"858732"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10044",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Teterboro",',`
`,"        ",'"name_full": "Teterboro, New Jersey, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10045",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tatitlek",',`
`,"        ",'"name_full": "Tatitlek, Alaska, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10046",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Temora",',`
`,"        ",'"name_full": "Temora, New South Wales, Australia",',`
`,"        ",'"country_code": "AU",',`
`,"        ",'"property_ids": [',`
`,"            ",'"18598102",',`
`,"            ",'"78056217",',`
`,"            ",'"32732765",',`
`,"            ",'"19108700"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10047",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tavernier",',`
`,"        ",'"name_full": "Tavernier, Florida, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"3489061",',`
`,"            ",'"1576773",',`
`,"            ",'"89692202",',`
`,"            ",'"93202227",',`
`,"            ",'"5502",',`
`,"            ",'"13279636",',`
`,"            ",'"93061348"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10048",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Podgorica",',`
`,"        ",'"name_full": "Podgorica, Podgorica Capital City, Montenegro",',`
`,"        ",'"country_code": "ME",',`
`,"        ",'"property_ids": [',`
`,"            ",'"34537991",',`
`,"            ",'"4880406",',`
`,"            ",'"35600723",',`
`,"            ",'"21593285",',`
`,"            ",'"38705002",',`
`,"            ",'"94406591",',`
`,"            ",'"4441119",',`
`,"            ",'"5809415",',`
`,"            ",'"36888576",',`
`,"            ",'"2226922",',`
`,"            ",'"3512222",',`
`,"            ",'"44804534",',`
`,"            ",'"41333831",',`
`,"            ",'"99272578",',`
`,"            ",'"95848770",',`
`,"            ",'"36914930",',`
`,"            ",'"41912558",',`
`,"            ",'"3908768",',`
`,"            ",'"23654839",',`
`,"            ",'"45207268",',`
`,"            ",'"90828945",',`
`,"            ",'"95289612",',`
`,"            ",'"16417326",',`
`,"            ",'"3778297",',`
`,"            ",'"76400220",',`
`,"            ",'"2461278",',`
`,"            ",'"96259269",',`
`,"            ",'"34880567",',`
`,"            ",'"2292981",',`
`,"            ",'"27091085"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10049",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tuskegee",',`
`,"        ",'"name_full": "Tuskegee, Alabama, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"93575559",',`
`,"            ",'"99956447",',`
`,"            ",'"94953081",',`
`,"            ",'"100100397",',`
`,"            ",'"94406467",',`
`,"            ",'"1874143",',`
`,"            ",'"94371630"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1005",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Dhahran",',`
`,"        ",'"name_full": "Dhahran, Eastern Province, Saudi Arabia",',`
`,"        ",'"country_code": "SA",',`
`,"        ",'"property_ids": [',`
`,"            ",'"9712870",',`
`,"            ",'"34831940",',`
`,"            ",'"75283394",',`
`,"            ",'"18516726",',`
`,"            ",'"41527375",',`
`,"            ",'"71537785",',`
`,"            ",'"13402532"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10050",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tongliao",',`
`,"        ",'"name_full": "Tongliao, Inner Mongolia, China",',`
`,"        ",'"country_code": "CN",',`
`,"        ",'"property_ids": [',`
`,"            ",'"7020498",',`
`,"            ",'"20376181"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10051",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Targovishte",',`
`,"        ",'"name_full": "Targovishte, Targovishte Province, Bulgaria",',`
`,"        ",'"country_code": "BG",',`
`,"        ",'"property_ids": [',`
`,"            ",'"41332824"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10052",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Warren",',`
`,"        ",'"name_full": "Warren, New Jersey, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"315"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10053",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Windham",',`
`,"        ",'"name_full": "Windham, Maine, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"9312400"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10055",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Thorshofn",',`
`,"        ",'"name_full": "Thorshofn, Langanesbyggð, Northeastern Region, Iceland",',`
`,"        ",'"country_code": "IS",',`
`,"        ",'"property_ids": [',`
`,"            ",'"18438840",',`
`,"            ",'"35140405",',`
`,"            ",'"18154764",',`
`,"            ",'"18438776"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10056",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Thermopolis",',`
`,"        ",'"name_full": "Thermopolis, Wyoming, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"94375850",',`
`,"            ",'"99883912",',`
`,"            ",'"100152678",',`
`,"            ",'"13577798",',`
`,"            ",'"17392",',`
`,"            ",'"98554041",',`
`,"            ",'"93586721",',`
`,"            ",'"13164632",',`
`,"            ",'"93587080",',`
`,"            ",'"296682",',`
`,"            ",'"460057"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10057",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Raynham",',`
`,"        ",'"name_full": "Raynham, Massachusetts, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"21666",',`
`,"            ",'"45237302",',`
`,"            ",'"1199972",',`
`,"            ",'"280901"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10058",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tirupati",',`
`,"        ",'"name_full": "Tirupati, Andhra Pradesh, India",',`
`,"        ",'"country_code": "IN",',`
`,"        ",'"property_ids": [',`
`,"            ",'"76460094",',`
`,"            ",'"11281512",',`
`,"            ",'"28825777",',`
`,"            ",'"8301777",',`
`,"            ",'"11848575",',`
`,"            ",'"93047374",',`
`,"            ",'"28962521",',`
`,"            ",'"93047372",',`
`,"            ",'"10091896",',`
`,"            ",'"22844464",',`
`,"            ",'"40151847",',`
`,"            ",'"18960586",',`
`,"            ",'"93047090",',`
`,"            ",'"27561950",',`
`,"            ",'"44254528",',`
`,"            ",'"74630190",',`
`,"            ",'"37180938",',`
`,"            ",'"100991933",',`
`,"            ",'"95471882",',`
`,"            ",'"25150345",',`
`,"            ",'"38406660",',`
`,"            ",'"76161809",',`
`,"            ",'"34941190",',`
`,"            ",'"36300168",',`
`,"            ",'"12300065",',`
`,"            ",'"35794639",',`
`,"            ",'"74591471",',`
`,"            ",'"99635328",',`
`,"            ",'"27562630",',`
`,"            ",'"23172262",',`
`,"            ",'"41911617",',`
`,"            ",'"9807212",',`
`,"            ",'"33900849",',`
`,"            ",'"92351125",',`
`,"            ",'"99545191",',`
`,"            ",'"8058022",',`
`,"            ",'"45692741",',`
`,"            ",'"92813787",',`
`,"            ",'"24048452",',`
`,"            ",'"91884010",',`
`,"            ",'"36887937",',`
`,"            ",'"11093024",',`
`,"            ",'"33900767",',`
`,"            ",'"28963312",',`
`,"            ",'"23172280",',`
`,"            ",'"92135163",',`
`,"            ",'"36066503",',`
`,"            ",'"36886845",',`
`,"            ",'"36762469",',`
`,"            ",'"38406601",',`
`,"            ",'"22835334",',`
`,"            ",'"2801528",',`
`,"            ",'"4668460",',`
`,"            ",'"38975574",',`
`,"            ",'"17416956",',`
`,"            ",'"100204365",',`
`,"            ",'"78486719",',`
`,"            ",'"48293634",',`
`,"            ",'"8630848",',`
`,"            ",'"23172291",',`
`,"            ",'"571554",',`
`,"            ",'"99744874",',`
`,"            ",'"91637462",',`
`,"            ",'"1764389",',`
`,"            ",'"2801531",',`
`,"            ",'"23172286",',`
`,"            ",'"23172288",',`
`,"            ",'"96187719",',`
`,"            ",'"39268905",',`
`,"            ",'"36762475",',`
`,"            ",'"32774142",',`
`,"            ",'"75589323",',`
`,"            ",'"26546915",',`
`,"            ",'"28061162",',`
`,"            ",'"3829916",',`
`,"            ",'"23172289",',`
`,"            ",'"22163390",',`
`,"            ",'"42090331"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10059",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tivat",',`
`,"        ",'"name_full": "Tivat, Tivat Municipality, Montenegro",',`
`,"        ",'"country_code": "ME",',`
`,"        ",'"property_ids": [',`
`,"            ",'"38193139",',`
`,"            ",'"22576994",',`
`,"            ",'"21359556",',`
`,"            ",'"21878466",',`
`,"            ",'"21891482",',`
`,"            ",'"83747304",',`
`,"            ",'"26589756",',`
`,"            ",'"27920830",',`
`,"            ",'"32614440",',`
`,"            ",'"38110866",',`
`,"            ",'"48534104",',`
`,"            ",'"36926454",',`
`,"            ",'"90325931",',`
`,"            ",'"76916732",',`
`,"            ",'"34575846",',`
`,"            ",'"27188045",',`
`,"            ",'"23549357",',`
`,"            ",'"36468923",',`
`,"            ",'"32003934",',`
`,"            ",'"22281527",',`
`,"            ",'"23250228",',`
`,"            ",'"22820861",',`
`,"            ",'"66775335",',`
`,"            ",'"95111685",',`
`,"            ",'"45359950",',`
`,"            ",'"22867079",',`
`,"            ",'"52732640",',`
`,"            ",'"8206933",',`
`,"            ",'"66775587",',`
`,"            ",'"21300450",',`
`,"            ",'"90327548",',`
`,"            ",'"22230173",',`
`,"            ",'"22708737",',`
`,"            ",'"95905239",',`
`,"            ",'"90327425",',`
`,"            ",'"33761242",',`
`,"            ",'"36820627",',`
`,"            ",'"24027751",',`
`,"            ",'"4796626",',`
`,"            ",'"38876903",',`
`,"            ",'"95905240",',`
`,"            ",'"66726935",',`
`,"            ",'"21122832",',`
`,"            ",'"68099776",',`
`,"            ",'"35651435",',`
`,"            ",'"95705152",',`
`,"            ",'"6029526",',`
`,"            ",'"36383900",',`
`,"            ",'"79801238",',`
`,"            ",'"33073926",',`
`,"            ",'"15086378",',`
`,"            ",'"34857938",',`
`,"            ",'"95045043",',`
`,"            ",'"30330015",',`
`,"            ",'"95045042",',`
`,"            ",'"33238207",',`
`,"            ",'"48920786",',`
`,"            ",'"95045045",',`
`,"            ",'"55294779",',`
`,"            ",'"22820869",',`
`,"            ",'"21878479",',`
`,"            ",'"33825726",',`
`,"            ",'"32614628",',`
`,"            ",'"3081143",',`
`,"            ",'"69209259",',`
`,"            ",'"95045028",',`
`,"            ",'"22396081",',`
`,"            ",'"17438697",',`
`,"            ",'"32837209",',`
`,"            ",'"45465818",',`
`,"            ",'"95332647",',`
`,"            ",'"90326599",',`
`,"            ",'"5257859",',`
`,"            ",'"22248508",',`
`,"            ",'"90327364"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1006",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Dothan",',`
`,"        ",'"name_full": "Dothan, Alabama, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"26838",',`
`,"            ",'"1880290",',`
`,"            ",'"563945",',`
`,"            ",'"8334619",',`
`,"            ",'"2249",',`
`,"            ",'"93546585",',`
`,"            ",'"17246277",',`
`,"            ",'"1793626",',`
`,"            ",'"76489943",',`
`,"            ",'"63653166",',`
`,"            ",'"2583388",',`
`,"            ",'"16080",',`
`,"            ",'"1151973",',`
`,"            ",'"19372",',`
`,"            ",'"1139923",',`
`,"            ",'"855710",',`
`,"            ",'"4760959",',`
`,"            ",'"41944",',`
`,"            ",'"94947560",',`
`,"            ",'"2682645",',`
`,"            ",'"2631499",',`
`,"            ",'"50565",',`
`,"            ",'"14246",',`
`,"            ",'"16700686",',`
`,"            ",'"67470"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10060",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Titusville",',`
`,"        ",'"name_full": "Titusville, Florida, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"894949",',`
`,"            ",'"21325",',`
`,"            ",'"29825726",',`
`,"            ",'"46898089",',`
`,"            ",'"4953450",',`
`,"            ",'"2009507",',`
`,"            ",'"93532766",',`
`,"            ",'"93536781",',`
`,"            ",'"1000701",',`
`,"            ",'"93536862",',`
`,"            ",'"93532709",',`
`,"            ",'"44354265",',`
`,"            ",'"3373690",',`
`,"            ",'"1377273",',`
`,"            ",'"93202861",',`
`,"            ",'"18517712",',`
`,"            ",'"74255843",',`
`,"            ",'"94960517",',`
`,"            ",'"5835",',`
`,"            ",'"5924",',`
`,"            ",'"9678289"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10061",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Waitomo Caves",',`
`,"        ",'"name_full": "Waitomo Caves, Waikato, New Zealand",',`
`,"        ",'"country_code": "NZ",',`
`,"        ",'"property_ids": [',`
`,"            ",'"9624297",',`
`,"            ",'"16121337",',`
`,"            ",'"19526472",',`
`,"            ",'"16000266",',`
`,"            ",'"90928857"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10062",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tanjung Selor",',`
`,"        ",'"name_full": "Tanjung Selor, North Kalimantan, Indonesia",',`
`,"        ",'"country_code": "ID",',`
`,"        ",'"property_ids": [',`
`,"            ",'"44815017",',`
`,"            ",'"92332414"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10064",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Truckee",',`
`,"        ",'"name_full": "Truckee, California, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"83963089",',`
`,"            ",'"93205396",',`
`,"            ",'"1398685",',`
`,"            ",'"94958820",',`
`,"            ",'"94466491",',`
`,"            ",'"11287577",',`
`,"            ",'"94305807",',`
`,"            ",'"94336678",',`
`,"            ",'"94356687",',`
`,"            ",'"11547735",',`
`,"            ",'"94334406",',`
`,"            ",'"11557151",',`
`,"            ",'"99049476",',`
`,"            ",'"98544720",',`
`,"            ",'"94306186",',`
`,"            ",'"82686650",',`
`,"            ",'"94956883",',`
`,"            ",'"83910795",',`
`,"            ",'"78698476",',`
`,"            ",'"100012187",',`
`,"            ",'"99286138",',`
`,"            ",'"89318992",',`
`,"            ",'"93546709",',`
`,"            ",'"94334380",',`
`,"            ",'"94466401",',`
`,"            ",'"83313214",',`
`,"            ",'"94446096",',`
`,"            ",'"84023509",',`
`,"            ",'"71615073",',`
`,"            ",'"6500222",',`
`,"            ",'"94960173",',`
`,"            ",'"61620049",',`
`,"            ",'"94501908",',`
`,"            ",'"96396225",',`
`,"            ",'"2758953",',`
`,"            ",'"94321113",',`
`,"            ",'"61619617",',`
`,"            ",'"93589326",',`
`,"            ",'"94308359",',`
`,"            ",'"49172070",',`
`,"            ",'"94338312",',`
`,"            ",'"74280044",',`
`,"            ",'"94313576",',`
`,"            ",'"84015610",',`
`,"            ",'"93207113",',`
`,"            ",'"94355293",',`
`,"            ",'"84023556",',`
`,"            ",'"84023434",',`
`,"            ",'"83910608",',`
`,"            ",'"94336930",',`
`,"            ",'"1483290",',`
`,"            ",'"73441361",',`
`,"            ",'"94419081",',`
`,"            ",'"76739094",',`
`,"            ",'"84015726",',`
`,"            ",'"2794782",',`
`,"            ",'"74728549",',`
`,"            ",'"94306191",',`
`,"            ",'"94334361",',`
`,"            ",'"11493122",',`
`,"            ",'"78697669",',`
`,"            ",'"84015688",',`
`,"            ",'"94334402",',`
`,"            ",'"83985589",',`
`,"            ",'"83985588",',`
`,"            ",'"11287745",',`
`,"            ",'"94446792",',`
`,"            ",'"100375395",',`
`,"            ",'"61620067",',`
`,"            ",'"94306352",',`
`,"            ",'"71122632",',`
`,"            ",'"11557046",',`
`,"            ",'"11557201",',`
`,"            ",'"1222190",',`
`,"            ",'"100127132",',`
`,"            ",'"94360185",',`
`,"            ",'"21103",',`
`,"            ",'"71122979",',`
`,"            ",'"100389109",',`
`,"            ",'"11496820",',`
`,"            ",'"94305290",',`
`,"            ",'"94443975",',`
`,"            ",'"61619083",',`
`,"            ",'"94965790",',`
`,"            ",'"94953855",',`
`,"            ",'"599023",',`
`,"            ",'"78700705",',`
`,"            ",'"83910633",',`
`,"            ",'"83910756",',`
`,"            ",'"93600379",',`
`,"            ",'"84015866",',`
`,"            ",'"61618957",',`
`,"            ",'"94306146",',`
`,"            ",'"72501248",',`
`,"            ",'"16428367",',`
`,"            ",'"82709427",',`
`,"            ",'"11496651",',`
`,"            ",'"84023425",',`
`,"            ",'"84023423",',`
`,"            ",'"94463331",',`
`,"            ",'"99228112",',`
`,"            ",'"37499495",',`
`,"            ",'"73462448",',`
`,"            ",'"11287763",',`
`,"            ",'"73462450",',`
`,"            ",'"11557180",',`
`,"            ",'"39407818",',`
`,"            ",'"94379376",',`
`,"            ",'"11557222",',`
`,"            ",'"78546775",',`
`,"            ",'"71122177",',`
`,"            ",'"94315433",',`
`,"            ",'"84023517",',`
`,"            ",'"61575514",',`
`,"            ",'"11496563",',`
`,"            ",'"97105494",',`
`,"            ",'"435849",',`
`,"            ",'"93198432",',`
`,"            ",'"61619260",',`
`,"            ",'"101029374",',`
`,"            ",'"11564852",',`
`,"            ",'"61618973",',`
`,"            ",'"61619269",',`
`,"            ",'"94463913",',`
`,"            ",'"91580502",',`
`,"            ",'"88088159",',`
`,"            ",'"94319230",',`
`,"            ",'"71615028",',`
`,"            ",'"89437137",',`
`,"            ",'"61620135",',`
`,"            ",'"71122963",',`
`,"            ",'"94956105",',`
`,"            ",'"94957710",',`
`,"            ",'"71122164",',`
`,"            ",'"94320956",',`
`,"            ",'"98544725",',`
`,"            ",'"83963134",',`
`,"            ",'"100935019",',`
`,"            ",'"94446515",',`
`,"            ",'"83722313",',`
`,"            ",'"100341812",',`
`,"            ",'"98544729",',`
`,"            ",'"94353620",',`
`,"            ",'"83985539",',`
`,"            ",'"84023490",',`
`,"            ",'"94318492",',`
`,"            ",'"90707428",',`
`,"            ",'"96403512",',`
`,"            ",'"84015636",',`
`,"            ",'"83963090",',`
`,"            ",'"100874577",',`
`,"            ",'"94305069",',`
`,"            ",'"77859592"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10065",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tak",',`
`,"        ",'"name_full": "Tak, Tak Province, Thailand",',`
`,"        ",'"country_code": "TH",',`
`,"        ",'"property_ids": [',`
`,"            ",'"22733954",',`
`,"            ",'"31933226",',`
`,"            ",'"11900964",',`
`,"            ",'"22700636",',`
`,"            ",'"28963500",',`
`,"            ",'"12779072",',`
`,"            ",'"29696182"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10066",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Hope Town",',`
`,"        ",'"name_full": "Hope Town, Hope Town, Bahamas",',`
`,"        ",'"country_code": "BS",',`
`,"        ",'"property_ids": [',`
`,"            ",'"95511651"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10067",',`
`,"        ",'"type": "multi_city_vicinity",',`
`,"        ",'"name": "Toluca (and vicinity)",',`
`,"        ",'"name_full": "Toluca (and vicinity), State of Mexico, Mexico",',`
`,"        ",'"country_code": "MX",',`
`,"        ",'"property_ids": [',`
`,"            ",'"70608412",',`
`,"            ",'"12680143",',`
`,"            ",'"19948670",',`
`,"            ",'"404568",',`
`,"            ",'"11988354",',`
`,"            ",'"9402966",',`
`,"            ",'"5414946",',`
`,"            ",'"39072168",',`
`,"            ",'"73459387",',`
`,"            ",'"20040349",',`
`,"            ",'"14769817",',`
`,"            ",'"2759550",',`
`,"            ",'"3296924",',`
`,"            ",'"14637104",',`
`,"            ",'"8119256",',`
`,"            ",'"12752480",',`
`,"            ",'"1387232",',`
`,"            ",'"437731",',`
`,"            ",'"2348275",',`
`,"            ",'"7836212",',`
`,"            ",'"30087361",',`
`,"            ",'"12010043",',`
`,"            ",'"16088562",',`
`,"            ",'"1668622",',`
`,"            ",'"889380",',`
`,"            ",'"10117766",',`
`,"            ",'"200083",',`
`,"            ",'"69554312",',`
`,"            ",'"2303353",',`
`,"            ",'"6453610",',`
`,"            ",'"100259454",',`
`,"            ",'"4613289",',`
`,"            ",'"4112126",',`
`,"            ",'"10534337",',`
`,"            ",'"77939954",',`
`,"            ",'"3181098",',`
`,"            ",'"19194659",',`
`,"            ",'"4308463",',`
`,"            ",'"2233279",',`
`,"            ",'"2211843",',`
`,"            ",'"56013610",',`
`,"            ",'"81932736",',`
`,"            ",'"99963211",',`
`,"            ",'"11236689",',`
`,"            ",'"10480562",',`
`,"            ",'"88263238",',`
`,"            ",'"51676415",',`
`,"            ",'"12526075",',`
`,"            ",'"20875288",',`
`,"            ",'"60454007",',`
`,"            ",'"12636716",',`
`,"            ",'"95162976",',`
`,"            ",'"9478646",',`
`,"            ",'"9867217",',`
`,"            ",'"9365704",',`
`,"            ",'"18606615",',`
`,"            ",'"1263464",',`
`,"            ",'"1695487",',`
`,"            ",'"48420747",',`
`,"            ",'"1155397",',`
`,"            ",'"46121895",',`
`,"            ",'"560787",',`
`,"            ",'"36151063",',`
`,"            ",'"3551622",',`
`,"            ",'"4427799",',`
`,"            ",'"56013604",',`
`,"            ",'"8308064",',`
`,"            ",'"22756352",',`
`,"            ",'"519033",',`
`,"            ",'"8048691",',`
`,"            ",'"27844006",',`
`,"            ",'"10561792",',`
`,"            ",'"28974551",',`
`,"            ",'"75271680",',`
`,"            ",'"12427872",',`
`,"            ",'"2590965",',`
`,"            ",'"1973076"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10068",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tulagi Island",',`
`,"        ",'"name_full": "Tulagi Island, Central Province, Solomon Islands",',`
`,"        ",'"country_code": "SB"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10069",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tumolbil",',`
`,"        ",'"name_full": "Tumolbil, Sandaun, Papua New Guinea",',`
`,"        ",'"country_code": "PG"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1007",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Dibrugarh",',`
`,"        ",'"name_full": "Dibrugarh, Assam, India",',`
`,"        ",'"country_code": "IN",',`
`,"        ",'"property_ids": [',`
`,"            ",'"26985175",',`
`,"            ",'"29312815",',`
`,"            ",'"65364105",',`
`,"            ",'"25785985",',`
`,"            ",'"35201161",',`
`,"            ",'"40151917",',`
`,"            ",'"92512328",',`
`,"            ",'"100146935",',`
`,"            ",'"83928698",',`
`,"            ",'"36349031",',`
`,"            ",'"91393889",',`
`,"            ",'"70091051",',`
`,"            ",'"94892824",',`
`,"            ",'"87905480",',`
`,"            ",'"100515106",',`
`,"            ",'"96964590",',`
`,"            ",'"37808646",',`
`,"            ",'"66239681",',`
`,"            ",'"100053573",',`
`,"            ",'"65366761"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10071",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tierra Verde",',`
`,"        ",'"name_full": "Tierra Verde, Florida, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"92705337",',`
`,"            ",'"93536719",',`
`,"            ",'"43992712"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10072",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Live Oak",',`
`,"        ",'"name_full": "Live Oak, Florida, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"6383",',`
`,"            ",'"78514312",',`
`,"            ",'"1378708",',`
`,"            ",'"94360172",',`
`,"            ",'"3861",',`
`,"            ",'"798756"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10074",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tiom",',`
`,"        ",'"name_full": "Tiom, Highland Papua, Indonesia",',`
`,"        ",'"country_code": "ID"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10075",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Thames",',`
`,"        ",'"name_full": "Thames, Waikato, New Zealand",',`
`,"        ",'"country_code": "NZ",',`
`,"        ",'"property_ids": [',`
`,"            ",'"3605878",',`
`,"            ",'"23619",',`
`,"            ",'"7249666",',`
`,"            ",'"9628613",',`
`,"            ",'"15827575",',`
`,"            ",'"33005093",',`
`,"            ",'"94698769",',`
`,"            ",'"9849018",',`
`,"            ",'"9627719",',`
`,"            ",'"41825952"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10076",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tanahgrogot",',`
`,"        ",'"name_full": "Tanahgrogot, East Kalimantan, Indonesia",',`
`,"        ",'"country_code": "ID",',`
`,"        ",'"property_ids": [',`
`,"            ",'"100777692"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10077",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Trinidad",',`
`,"        ",'"name_full": "Trinidad, Sancti Spiritus, Cuba",',`
`,"        ",'"country_code": "CU"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10078",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Ternopil",',`
`,"        ",'"name_full": "Ternopil, Ternopil Oblast, Ukraine",',`
`,"        ",'"country_code": "UA",',`
`,"        ",'"property_ids": [',`
`,"            ",'"37039248",',`
`,"            ",'"42314689"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1008",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Antsiranana",',`
`,"        ",'"name_full": "Antsiranana, Diana, Madagascar",',`
`,"        ",'"country_code": "MG",',`
`,"        ",'"property_ids": [',`
`,"            ",'"35891711",',`
`,"            ",'"33142032",',`
`,"            ",'"22868575",',`
`,"            ",'"39500268",',`
`,"            ",'"10610646",',`
`,"            ",'"14765042",',`
`,"            ",'"36895946",',`
`,"            ",'"93456241",',`
`,"            ",'"35623430",',`
`,"            ",'"37490977",',`
`,"            ",'"41834566",',`
`,"            ",'"100943472",',`
`,"            ",'"11943335",',`
`,"            ",'"34919010",',`
`,"            ",'"35775288"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10080",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Newton",',`
`,"        ",'"name_full": "Newton, Iowa, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"2303780",',`
`,"            ",'"40266",',`
`,"            ",'"7782906",',`
`,"            ",'"23992",',`
`,"            ",'"7757",',`
`,"            ",'"897842",',`
`,"            ",'"98557860",',`
`,"            ",'"171241"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10081",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Stung Treng",',`
`,"        ",'"name_full": "Stung Treng, Stung Treng, Cambodia",',`
`,"        ",'"country_code": "KH",',`
`,"        ",'"property_ids": [',`
`,"            ",'"19399293"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10082",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Torrance",',`
`,"        ",'"name_full": "Torrance, California, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"4089",',`
`,"            ",'"6027",',`
`,"            ",'"19189",',`
`,"            ",'"25795",',`
`,"            ",'"79470",',`
`,"            ",'"202559",',`
`,"            ",'"25549",',`
`,"            ",'"13279580",',`
`,"            ",'"3935",',`
`,"            ",'"3338",',`
`,"            ",'"1102455",',`
`,"            ",'"13896",',`
`,"            ",'"14325",',`
`,"            ",'"3073973",',`
`,"            ",'"328454",',`
`,"            ",'"2406288",',`
`,"            ",'"51308",',`
`,"            ",'"15328"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10083",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Troy",',`
`,"        ",'"name_full": "Troy, Alabama, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"24606",',`
`,"            ",'"1037686",',`
`,"            ",'"2713087",',`
`,"            ",'"25782",',`
`,"            ",'"24883",',`
`,"            ",'"20195",',`
`,"            ",'"1880929"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10084",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Lexington",',`
`,"        ",'"name_full": "Lexington, South Carolina, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"91916506",',`
`,"            ",'"1823665",',`
`,"            ",'"250862",',`
`,"            ",'"42858",',`
`,"            ",'"49035821",',`
`,"            ",'"94956631",',`
`,"            ",'"93537818",',`
`,"            ",'"67880",',`
`,"            ",'"18900"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10085",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Murrells Inlet",',`
`,"        ",'"name_full": "Murrells Inlet, South Carolina, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"93198770",',`
`,"            ",'"93537447",',`
`,"            ",'"93537249",',`
`,"            ",'"94960540",',`
`,"            ",'"93537404",',`
`,"            ",'"93537888",',`
`,"            ",'"94958983",',`
`,"            ",'"94956160",',`
`,"            ",'"94956080",',`
`,"            ",'"93537523",',`
`,"            ",'"100152681",',`
`,"            ",'"93537443",',`
`,"            ",'"93537245",',`
`,"            ",'"100152682",',`
`,"            ",'"94381715",',`
`,"            ",'"94346087",',`
`,"            ",'"98554913",',`
`,"            ",'"898111",',`
`,"            ",'"93201552",',`
`,"            ",'"94955994",',`
`,"            ",'"93198721",',`
`,"            ",'"50942515",',`
`,"            ",'"98548763",',`
`,"            ",'"24082784",',`
`,"            ",'"93202280",',`
`,"            ",'"93537811",',`
`,"            ",'"94528056",',`
`,"            ",'"4101644",',`
`,"            ",'"1862436",',`
`,"            ",'"9747860",',`
`,"            ",'"98548749",',`
`,"            ",'"90847841",',`
`,"            ",'"93537254",',`
`,"            ",'"94960490",',`
`,"            ",'"94351267",',`
`,"            ",'"75290288",',`
`,"            ",'"90727557",',`
`,"            ",'"93537291",',`
`,"            ",'"98554868",',`
`,"            ",'"93537372",',`
`,"            ",'"92786650",',`
`,"            ",'"98554866",',`
`,"            ",'"93537095",',`
`,"            ",'"2270677",',`
`,"            ",'"98548752",',`
`,"            ",'"94958132",',`
`,"            ",'"93537700",',`
`,"            ",'"94959610",',`
`,"            ",'"94419446",',`
`,"            ",'"93537828",',`
`,"            ",'"93537825",',`
`,"            ",'"93537621",',`
`,"            ",'"93537223",',`
`,"            ",'"94373435",',`
`,"            ",'"94373116",',`
`,"            ",'"94351524",',`
`,"            ",'"93200288",',`
`,"            ",'"94539627",',`
`,"            ",'"93198744",',`
`,"            ",'"93537819",',`
`,"            ",'"59068032",',`
`,"            ",'"99499962",',`
`,"            ",'"93537316",',`
`,"            ",'"2918097",',`
`,"            ",'"93537237",',`
`,"            ",'"93537279",',`
`,"            ",'"93537070",',`
`,"            ",'"93537074",',`
`,"            ",'"93537350",',`
`,"            ",'"93204570",',`
`,"            ",'"99978088",',`
`,"            ",'"94494269"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10086",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Taiping",',`
`,"        ",'"name_full": "Taiping, Perak, Malaysia",',`
`,"        ",'"country_code": "MY",',`
`,"        ",'"property_ids": [',`
`,"            ",'"23163025",',`
`,"            ",'"55025926",',`
`,"            ",'"12063307",',`
`,"            ",'"45907262",',`
`,"            ",'"50723414",',`
`,"            ",'"70067108",',`
`,"            ",'"20240298",',`
`,"            ",'"33666211",',`
`,"            ",'"34910658",',`
`,"            ",'"42714045",',`
`,"            ",'"8655125",',`
`,"            ",'"45906897",',`
`,"            ",'"11975266",',`
`,"            ",'"8411575",',`
`,"            ",'"12223915",',`
`,"            ",'"19929505",',`
`,"            ",'"27436629",',`
`,"            ",'"33263221",',`
`,"            ",'"8156768",',`
`,"            ",'"88375652",',`
`,"            ",'"89586951",',`
`,"            ",'"21185381",',`
`,"            ",'"16111261",',`
`,"            ",'"20300285",',`
`,"            ",'"97672906",',`
`,"            ",'"11973750",',`
`,"            ",'"49023905",',`
`,"            ",'"11975332",',`
`,"            ",'"12616132",',`
`,"            ",'"17262795",',`
`,"            ",'"41371649",',`
`,"            ",'"12616398",',`
`,"            ",'"15066891",',`
`,"            ",'"57242681",',`
`,"            ",'"4860534"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10087",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Tonopah",',`
`,"        ",'"name_full": "Tonopah, Nevada, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"11187369",',`
`,"            ",'"59675002",',`
`,"            ",'"15610",',`
`,"            ",'"26684286"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "100870",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Eldred",',`
`,"        ",'"name_full": "Eldred, Illinois, United States of America",',`
`,"        ",'"country_code": "US"',`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10088",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Llandrindod Wells",',`
`,"        ",'"name_full": "Llandrindod Wells, Wales, United Kingdom",',`
`,"        ",'"country_code": "GB",',`
`,"        ",'"property_ids": [',`
`,"            ",'"29777998",',`
`,"            ",'"10691",',`
`,"            ",'"91906973",',`
`,"            ",'"29429297",',`
`,"            ",'"38083849",',`
`,"            ",'"14919024",',`
`,"            ",'"2254556",',`
`,"            ",'"4850394",',`
`,"            ",'"6342948",',`
`,"            ",'"32004308"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "1009",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Dijon",',`
`,"        ",`"name_full": "Dijon, Côte-d'Or, France",`,`
`,"        ",'"country_code": "FR",',`
`,"        ",'"property_ids": [',`
`,"            ",'"1181157",',`
`,"            ",'"3700534",',`
`,"            ",'"1177490",',`
`,"            ",'"92330304",',`
`,"            ",'"2542869",',`
`,"            ",'"1781",',`
`,"            ",'"108581",',`
`,"            ",'"390",',`
`,"            ",'"4180611",',`
`,"            ",'"9140",',`
`,"            ",'"1165592",',`
`,"            ",'"11163834",',`
`,"            ",'"17742968",',`
`,"            ",'"8830809",',`
`,"            ",'"90854897",',`
`,"            ",'"9825711",',`
`,"            ",'"1195087",',`
`,"            ",'"20267",',`
`,"            ",'"564922",',`
`,"            ",'"93259987",',`
`,"            ",'"10074524",',`
`,"            ",'"99320510",',`
`,"            ",'"90079261",',`
`,"            ",'"1150005",',`
`,"            ",'"1383246",',`
`,"            ",'"15281656",',`
`,"            ",'"15882879",',`
`,"            ",'"1650032",',`
`,"            ",'"9477840",',`
`,"            ",'"1382912",',`
`,"            ",'"2987639",',`
`,"            ",'"16873433",',`
`,"            ",'"8674338",',`
`,"            ",'"78620536",',`
`,"            ",'"8816",',`
`,"            ",'"14766369",',`
`,"            ",'"13234092",',`
`,"            ",'"37811334",',`
`,"            ",'"6002048",',`
`,"            ",'"23380",',`
`,"            ",'"2303266",',`
`,"            ",'"1064473",',`
`,"            ",'"12370850",',`
`,"            ",'"96059787",',`
`,"            ",'"1133621",',`
`,"            ",'"1150020",',`
`,"            ",'"1609491",',`
`,"            ",'"1150026",',`
`,"            ",'"90914740",',`
`,"            ",'"76577213"',`
`,"        ","]",`
`,"    ","}",",",`
`,"    ","{",`
`,"        ",'"id": "10090",',`
`,"        ",'"type": "city",',`
`,"        ",'"name": "Feasterville-Trevose",',`
`,"        ",'"name_full": "Feasterville-Trevose, Pennsylvania, United States of America",',`
`,"        ",'"country_code": "US",',`
`,"        ",'"property_ids": [',`
`,"            ",'"20585",',`
`,"            ",'"2510",',`
`,"            ",'"76975888",',`
`,"            ",'"123428",',`
`,"            ",'"894634"',`
`,"        ","]",`
`,"    ","}",`
`,"]"]})})})})]}),n.jsx("p",{}),n.jsxs("div",{id:"expander-266438164",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-266438164",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Request example: GET:/properties/content FULL"})]}),n.jsx("div",{id:"expander-content-266438164",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["GET https://test.ean.com/v3/properties/content?language=en-US&supply_source=expedia:"," ","{",`
`,"  ",'"Network": ',"{",`
`,"    ",'"addresses": ',"{",`
`,"      ",'"local": ',"{",`
`,"        ",'"address": "172.17.0.2",',`
`,"        ",'"family": "IPv4",',`
`,"        ",'"port": 41964',`
`,"      ","}",",",`
`,"      ",'"remote": ',"{",`
`,"        ",'"address": "23.48.203.73",',`
`,"        ",'"family": "IPv4",',`
`,"        ",'"port": 443',`
`,"      ","}",`
`,"    ","}",",",`
`,"    ",'"tls": ',"{",`
`,"      ",'"reused": false,',`
`,"      ",'"authorized": true,',`
`,"      ",'"authorizationError": null,',`
`,"      ",'"cipher": ',"{",`
`,"        ",'"name": "TLS_AES_256_GCM_SHA384",',`
`,"        ",'"standardName": "TLS_AES_256_GCM_SHA384",',`
`,"        ",'"version": "TLSv1.3"',`
`,"      ","}",",",`
`,"      ",'"protocol": "TLSv1.3",',`
`,"      ",'"ephemeralKeyInfo": ',"{",`
`,"        ",'"type": "ECDH",',`
`,"        ",'"name": "X25519",',`
`,"        ",'"size": 253',`
`,"      ","}",",",`
`,"      ",'"peerCertificate": ',"{",`
`,"        ",'"subject": ',"{",`
`,"          ",'"commonName": "api.ean.com",',`
`,"          ",'"alternativeNames": "DNS:api.ean.com, DNS:api.eancdn.com, DNS:book.api.ean.com, DNS:i.travelapi.com, DNS:test.ean.com"',`
`,"        ","}",",",`
`,"        ",'"issuer": ',"{",`
`,"          ",'"country": "US",',`
`,"          ",`"organization": "Let's Encrypt",`,`
`,"          ",'"commonName": "R3"',`
`,"        ","}",",",`
`,"        ",'"validFrom": "Nov',"  ",'7 04:28:40 2023 GMT",',`
`,"        ",'"validTo": "Feb',"  ",'5 04:28:39 2024 GMT",',`
`,"        ",'"fingerprint": "88:45:D0:0C:D3:22:C6:2C:2E:C5:C9:F4:52:D6:2D:98:00:42:FE:43",',`
`,"        ",'"serialNumber": "035D916C24AA8B717F0EB9C84791F884DC6D"',`
`,"      ","}",`
`,"    ","}",`
`,"  ","}",",",`
`,"  ",'"Request Headers": ',"{",`
`,"    ",'"authorization": "EAN apikey=7jccsh7fcsa4istr92ua4843b3,signature=e48e9ddd4922c2f569e1c406cf66447727885833d86ea4e66eb77dc4854491258d2ec36223743934b985de6bde609f2f4716dd1533056c5b42b24ac9e6d143d7,timestamp=1702649903",',`
`,"    ",'"customer-ip": "5.5.5.5",',`
`,"    ",'"accept": "application/json",',`
`,"    ",'"accept-encoding": "gzip",',`
`,"    ",'"user-agent": "EPS Rapid Postman Collection - 2023-07-12",',`
`,"    ",'"cache-control": "no-cache",',`
`,"    ",'"postman-token": "3169868d-1175-409d-b777-62c8b7f0bf05",',`
`,"    ",'"host": "test.ean.com",',`
`,"    ",'"connection": "keep-alive"',`
`,"  ","}",`
`,"}",`
`]})})})})]}),n.jsx("p",{}),n.jsxs("div",{id:"expander-85816864",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-85816864",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Response example: GET:/properties/content - Headers - To capture the Link Pagination - Body is too large"})]}),n.jsx("div",{id:"expander-content-85816864",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["GET https://test.ean.com/v3/properties/content?language=en-US&supply_source=expedia:"," ","{",`
`,"  ",'"Response Headers": ',"{",`
`,"    ",'"content-type": "application/json",',`
`,"    ",'"vary": [',`
`,"      ",'"Origin",',`
`,"      ",'"Access-Control-Request-Method",',`
`,"      ",'"Access-Control-Request-Headers",',`
`,"      ",'"accept-encoding"',`
`,"    ","],",`
`,"    ",'"load": "250",',`
`,"    ",'"pagination-total-results": "609684",',`
`,"    ",'"link": "<https://test.ean.com/v3/properties/content?token=Q11RF1Vda1JREAQQCQcAVQhXEwdISQtLAxUECwUGUBVXA0sCAG1VVxFXeFYEQwB3C1AbUlQMVFAFAFACaEBFR0RGW0ppQF9ARQFRWFFMEVNcWFQTWAULVUwEV1MIXQgVZTcQcF8EUAhLQQlcBQ0FWQtVAl0AAQ==>; rel=\\"next\\"; expires=2023-12-15T14:20:25.609714926Z",',`
`,"    ",'"content-encoding": "gzip",',`
`,"    ",'"server": "EAN",',`
`,"    ",'"cache-control": "no-cache, no-store, max-age=0, must-revalidate",',`
`,"    ",'"pragma": "no-cache",',`
`,"    ",'"expires": "0",',`
`,"    ",'"x-content-type-options": "nosniff",',`
`,"    ",'"strict-transport-security": "max-age=31536000 ; includeSubDomains",',`
`,"    ",'"x-frame-options": "DENY",',`
`,"    ",'"x-xss-protection": "0",',`
`,"    ",'"referrer-policy": "no-referrer",',`
`,"    ",'"transaction-id": "954ed8a8-74c5-4b11-a9f1-ca7bc4c4bd82",',`
`,"    ",'"region": "us-west-2",',`
`,"    ",'"date": "Fri, 15 Dec 2023 14:18:25 GMT",',`
`,"    ",'"transfer-encoding": "chunked",',`
`,"    ",'"connection": [',`
`,"      ",'"keep-alive",',`
`,"      ",'"Transfer-Encoding"',`
`,"    ","]",`
`,"  ","}",`
`,"}",`
`]})})})})]}),n.jsxs("div",{id:"expander-1021297431",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-1021297431",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsxs("span",{className:"expand-control-text",children:["Request example: GET:/properties/inactive -"," "]})]}),n.jsx("div",{id:"expander-content-1021297431",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["GET https://test.ean.com/v3/properties/inactive?since=2023-12-12: ","{",`
`,"  ",'"Network": ',"{",`
`,"    ",'"addresses": ',"{",`
`,"      ",'"local": ',"{",`
`,"        ",'"address": "172.17.0.2",',`
`,"        ",'"family": "IPv4",',`
`,"        ",'"port": 57530',`
`,"      ","}",",",`
`,"      ",'"remote": ',"{",`
`,"        ",'"address": "23.48.203.81",',`
`,"        ",'"family": "IPv4",',`
`,"        ",'"port": 443',`
`,"      ","}",`
`,"    ","}",",",`
`,"    ",'"tls": ',"{",`
`,"      ",'"reused": false,',`
`,"      ",'"authorized": true,',`
`,"      ",'"authorizationError": null,',`
`,"      ",'"cipher": ',"{",`
`,"        ",'"name": "TLS_AES_256_GCM_SHA384",',`
`,"        ",'"standardName": "TLS_AES_256_GCM_SHA384",',`
`,"        ",'"version": "TLSv1.3"',`
`,"      ","}",",",`
`,"      ",'"protocol": "TLSv1.3",',`
`,"      ",'"ephemeralKeyInfo": ',"{",`
`,"        ",'"type": "ECDH",',`
`,"        ",'"name": "X25519",',`
`,"        ",'"size": 253',`
`,"      ","}",",",`
`,"      ",'"peerCertificate": ',"{",`
`,"        ",'"subject": ',"{",`
`,"          ",'"commonName": "api.ean.com",',`
`,"          ",'"alternativeNames": "DNS:api.ean.com, DNS:api.eancdn.com, DNS:book.api.ean.com, DNS:i.travelapi.com, DNS:test.ean.com"',`
`,"        ","}",",",`
`,"        ",'"issuer": ',"{",`
`,"          ",'"country": "US",',`
`,"          ",`"organization": "Let's Encrypt",`,`
`,"          ",'"commonName": "R3"',`
`,"        ","}",",",`
`,"        ",'"validFrom": "Nov',"  ",'7 04:28:40 2023 GMT",',`
`,"        ",'"validTo": "Feb',"  ",'5 04:28:39 2024 GMT",',`
`,"        ",'"fingerprint": "88:45:D0:0C:D3:22:C6:2C:2E:C5:C9:F4:52:D6:2D:98:00:42:FE:43",',`
`,"        ",'"serialNumber": "035D916C24AA8B717F0EB9C84791F884DC6D"',`
`,"      ","}",`
`,"    ","}",`
`,"  ","}",",",`
`,"  ",'"Request Headers": ',"{",`
`,"    ",'"authorization": "EAN apikey=7jccsh7fcsa4istr92ua4843b3,signature=d3f2e6582c4a9fafe1ee15956a5d008d61c00d5057b91068b8f76368012faee97ce0cb7b839549ab66b6559526dd9757cc5808d40d3d946c922f464d9e61b2c5,timestamp=1702651766",',`
`,"    ",'"customer-ip": "5.5.5.5",',`
`,"    ",'"accept": "application/json",',`
`,"    ",'"accept-encoding": "gzip",',`
`,"    ",'"user-agent": "EPS Rapid Postman Collection - 2023-07-12",',`
`,"    ",'"cache-control": "no-cache",',`
`,"    ",'"postman-token": "c6f85446-180a-4661-9a9d-00dfb63d04f0",',`
`,"    ",'"host": "test.ean.com",',`
`,"    ",'"connection": "keep-alive"',`
`,"  ","}",`
`,"}",`
`,`
`]})})})})]}),n.jsx("p",{}),n.jsxs("div",{id:"expander-677321840",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-677321840",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Response Example: List of inactive properties with Pagination"})]}),n.jsx("div",{id:"expander-content-677321840",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:['"Response Headers": ',"{",`
`,"    ",'"content-type": "application/json",',`
`,"    ",'"vary": [',`
`,"      ",'"Origin",',`
`,"      ",'"Access-Control-Request-Method",',`
`,"      ",'"Access-Control-Request-Headers",',`
`,"      ",'"accept-encoding"',`
`,"    ","],",`
`,"    ",'"pagination-total-results": "3657",',`
`,"    ",'"load": "1000",',`
`,"    ",'"link": "<https://test.ean.com/v3/properties/inactive?token=Q11RF1Vda1JREAQQCQcJUwpTB1IIHwdBFg9LXEYJUQhUAksCBxRVVmBVDUEHJwYHHFZ0VlMbV1kEClEDAlcFaBJFXl1VVg0HB1AHSAUGTAcKF3ZdUQcOQUwIDQ4BC1EMB1QH>; rel=\\"next\\"; expires=2023-12-15T14:51:27.485337013Z",',`
`,"    ",'"content-encoding": "gzip",',`
`,"    ",'"server": "EAN",',`
`,"    ",'"cache-control": "no-cache, no-store, max-age=0, must-revalidate",',`
`,"    ",'"pragma": "no-cache",',`
`,"    ",'"expires": "0",',`
`,"    ",'"x-content-type-options": "nosniff",',`
`,"    ",'"strict-transport-security": "max-age=31536000 ; includeSubDomains",',`
`,"    ",'"x-frame-options": "DENY",',`
`,"    ",'"x-xss-protection": "0",',`
`,"    ",'"referrer-policy": "no-referrer",',`
`,"    ",'"transaction-id": "3d370d19-bf27-4af5-b2e8-cb9e5356031a",',`
`,"    ",'"region": "us-west-2",',`
`,"    ",'"content-length": "3920",',`
`,"    ",'"date": "Fri, 15 Dec 2023 14:49:27 GMT",',`
`,"    ",'"connection": "keep-alive"',`
`,"  ","}",",",`
`,"  ",'"Response_Body":',"{",`
`,"  ","[","{",'"property_id":"100000346"',"}",",","{",'"property_id":"100000493"',"}",",","{",'"property_id":"100004195"',"}",",","{",'"property_id":"100004918"',"}",",","{",'"property_id":"100009118"',"}",",","{",'"property_id":"100011135"',"}",",","{",'"property_id":"100011428"',"}",",","{",'"property_id":"100020312"',"}",",","{",'"property_id":"100021811"',"}",",","{",'"property_id":"100022514"',"}",",","{",'"property_id":"100022537"',"}",",","{",'"property_id":"100032176"',"}",",","{",'"property_id":"100037938"',"}",",","{",'"property_id":"100038455"',"}",",","{",'"property_id":"100040245"',"}",",","{",'"property_id":"100044943"',"}",",","{",'"property_id":"100046879"',"}",",","{",'"property_id":"100051728"',"}",",","{",'"property_id":"100082728"',"}",",","{",'"property_id":"100096053"',"}",",","{",'"property_id":"100104643"',"}",",","{",'"property_id":"100110518"',"}",",","{",'"property_id":"100130151"',"}",",","{",'"property_id":"100133316"',"}",",","{",'"property_id":"100134036"',"}",",","{",'"property_id":"100135187"',"}",",","{",'"property_id":"100138941"',"}",",","{",'"property_id":"100149073"',"}",",","{",'"property_id":"100149233"',"}",",","{",'"property_id":"100149273"',"}",",","{",'"property_id":"100149294"',"}",",","{",'"property_id":"100149356"',"}",",","{",'"property_id":"100160227"',"}",",","{",'"property_id":"100166087"',"}",",","{",'"property_id":"100169868"',"}",",","{",'"property_id":"100170962"',"}",",","{",'"property_id":"100172973"',"}",",","{",'"property_id":"100174927"',"}",",","{",'"property_id":"100175648"',"}",",","{",'"property_id":"100182290"',"}",",","{",'"property_id":"100187887"',"}",",","{",'"property_id":"100200058"',"}",",","{",'"property_id":"100200870"',"}",",","{",'"property_id":"100201122"',"}",",","{",'"property_id":"100204886"',"}",",","{",'"property_id":"100205704"',"}",",","{",'"property_id":"100207405"',"}",",","{",'"property_id":"100210703"',"}",",","{",'"property_id":"100211698"',"}",",","{",'"property_id":"100212499"',"}",",","{",'"property_id":"100214553"',"}",",","{",'"property_id":"100215852"',"}",",","{",'"property_id":"100216209"',"}",",","{",'"property_id":"100217422"',"}",",","{",'"property_id":"100217993"',"}",",","{",'"property_id":"100226207"',"}",",","{",'"property_id":"100231137"',"}",",","{",'"property_id":"100231454"',"}",",","{",'"property_id":"100246877"',"}",",","{",'"property_id":"100258645"',"}",",","{",'"property_id":"100259664"',"}",",","{",'"property_id":"100283742"',"}",",","{",'"property_id":"100283764"',"}",",","{",'"property_id":"100287016"',"}",",","{",'"property_id":"100287814"',"}",",","{",'"property_id":"100287830"',"}",",","{",'"property_id":"100289499"',"}",",","{",'"property_id":"100289939"',"}",",","{",'"property_id":"100292214"',"}",",","{",'"property_id":"100294196"',"}",",","{",'"property_id":"100294356"',"}",",","{",'"property_id":"100296042"',"}",",","{",'"property_id":"100298230"',"}",",","{",'"property_id":"100300630"',"}",",","{",'"property_id":"100304011"',"}",",","{",'"property_id":"100310753"',"}",",","{",'"property_id":"100311219"',"}",",","{",'"property_id":"100312273"',"}",",","{",'"property_id":"100315353"',"}",",","{",'"property_id":"100316546"',"}",",","{",'"property_id":"100316865"',"}",",","{",'"property_id":"100318720"',"}",",","{",'"property_id":"100318750"',"}",",","{",'"property_id":"100319040"',"}",",","{",'"property_id":"100320784"',"}",",","{",'"property_id":"100324211"',"}",",","{",'"property_id":"100325511"',"}",",","{",'"property_id":"100329529"',"}",",","{",'"property_id":"100330147"',"}",",","{",'"property_id":"100331035"',"}",",","{",'"property_id":"100333748"',"}",",","{",'"property_id":"100336307"',"}",",","{",'"property_id":"100336723"',"}",",","{",'"property_id":"100339097"',"}",",","{",'"property_id":"100339111"',"}",",","{",'"property_id":"100339568"',"}",",","{",'"property_id":"100339654"',"}",",","{",'"property_id":"100341489"',"}",",","{",'"property_id":"100344053"',"}",",","{",'"property_id":"100346052"',"}",",","{",'"property_id":"100346308"',"}",",","{",'"property_id":"100347163"',"}",",","{",'"property_id":"100347799"',"}",",","{",'"property_id":"100348419"',"}",",","{",'"property_id":"100349102"',"}",",","{",'"property_id":"100349729"',"}",",","{",'"property_id":"100350904"',"}",",","{",'"property_id":"100351822"',"}",",","{",'"property_id":"100352923"',"}",",","{",'"property_id":"100355484"',"}",",","{",'"property_id":"100356355"',"}",",","{",'"property_id":"100357001"',"}",",","{",'"property_id":"100358231"',"}",",","{",'"property_id":"100360649"',"}",",","{",'"property_id":"100362629"',"}",",","{",'"property_id":"100366046"',"}",",","{",'"property_id":"100366918"',"}",",","{",'"property_id":"100366965"',"}",",","{",'"property_id":"100367052"',"}",",","{",'"property_id":"100367087"',"}",",","{",'"property_id":"100368825"',"}",",","{",'"property_id":"100368924"',"}",",","{",'"property_id":"100369322"',"}",",","{",'"property_id":"100369413"',"}",",","{",'"property_id":"100369429"',"}",",","{",'"property_id":"100370022"',"}",",","{",'"property_id":"100371731"',"}",",","{",'"property_id":"100371756"',"}",",","{",'"property_id":"100375401"',"}",",","{",'"property_id":"100375898"',"}",",","{",'"property_id":"100376470"',"}",",","{",'"property_id":"100377307"',"}",",","{",'"property_id":"100378771"',"}",",","{",'"property_id":"100379402"',"}",",","{",'"property_id":"100379570"',"}",",","{",'"property_id":"100379579"',"}",",","{",'"property_id":"100381554"',"}",",","{",'"property_id":"100382519"',"}",",","{",'"property_id":"100383504"',"}",",","{",'"property_id":"100384161"',"}",",","{",'"property_id":"100384165"',"}",",","{",'"property_id":"100384183"',"}",",","{",'"property_id":"100384191"',"}",",","{",'"property_id":"100387166"',"}",",","{",'"property_id":"100387637"',"}",",","{",'"property_id":"100388141"',"}",",","{",'"property_id":"100388843"',"}",",","{",'"property_id":"100389194"',"}",",","{",'"property_id":"100390928"',"}",",","{",'"property_id":"100390943"',"}",",","{",'"property_id":"100390961"',"}",",","{",'"property_id":"100391013"',"}",",","{",'"property_id":"100391048"',"}",",","{",'"property_id":"100391060"',"}",",","{",'"property_id":"100391088"',"}",",","{",'"property_id":"100391101"',"}",",","{",'"property_id":"100391111"',"}",",","{",'"property_id":"100391181"',"}",",","{",'"property_id":"100391853"',"}",",","{",'"property_id":"100392489"',"}",",","{",'"property_id":"100392517"',"}",",","{",'"property_id":"100392532"',"}",",","{",'"property_id":"100401320"',"}",",","{",'"property_id":"100401735"',"}",",","{",'"property_id":"100401740"',"}",",","{",'"property_id":"100401788"',"}",",","{",'"property_id":"100401810"',"}",",","{",'"property_id":"100402146"',"}",",","{",'"property_id":"100404016"',"}",",","{",'"property_id":"100406034"',"}",",","{",'"property_id":"100406148"',"}",",","{",'"property_id":"100406582"',"}",",","{",'"property_id":"100406593"',"}",",","{",'"property_id":"100409996"',"}",",","{",'"property_id":"100410775"',"}",",","{",'"property_id":"100412023"',"}",",","{",'"property_id":"100412155"',"}",",","{",'"property_id":"100415667"',"}",",","{",'"property_id":"100424147"',"}",",","{",'"property_id":"100424966"',"}",",","{",'"property_id":"100425109"',"}",",","{",'"property_id":"100425502"',"}",",","{",'"property_id":"100425669"',"}",",","{",'"property_id":"100429865"',"}",",","{",'"property_id":"100430457"',"}",",","{",'"property_id":"100433012"',"}",",","{",'"property_id":"100436178"',"}",",","{",'"property_id":"100436637"',"}",",","{",'"property_id":"100440767"',"}",",","{",'"property_id":"100450724"',"}",",","{",'"property_id":"100451044"',"}",",","{",'"property_id":"100452246"',"}",",","{",'"property_id":"100452608"',"}",",","{",'"property_id":"100453024"',"}",",","{",'"property_id":"100453121"',"}",",","{",'"property_id":"100453689"',"}",",","{",'"property_id":"100453964"',"}",",","{",'"property_id":"100455474"',"}",",","{",'"property_id":"100456134"',"}",",","{",'"property_id":"100457845"',"}",",","{",'"property_id":"100460201"',"}",",","{",'"property_id":"100464574"',"}",",","{",'"property_id":"100466004"',"}",",","{",'"property_id":"100466272"',"}",",","{",'"property_id":"100468520"',"}",",","{",'"property_id":"100468903"',"}",",","{",'"property_id":"100469540"',"}",",","{",'"property_id":"100470076"',"}",",","{",'"property_id":"100474233"',"}",",","{",'"property_id":"100474615"',"}",",","{",'"property_id":"100474880"',"}",",","{",'"property_id":"100475929"',"}",",","{",'"property_id":"100478959"',"}",",","{",'"property_id":"100483585"',"}",",","{",'"property_id":"100486038"',"}",",","{",'"property_id":"100497469"',"}",",","{",'"property_id":"100498124"',"}",",","{",'"property_id":"100508655"',"}",",","{",'"property_id":"100509668"',"}",",","{",'"property_id":"100512837"',"}",",","{",'"property_id":"100516571"',"}",",","{",'"property_id":"100524739"',"}",",","{",'"property_id":"100526559"',"}",",","{",'"property_id":"100526735"',"}",",","{",'"property_id":"100527148"',"}",",","{",'"property_id":"100529222"',"}",",","{",'"property_id":"100529890"',"}",",","{",'"property_id":"100531707"',"}",",","{",'"property_id":"100533393"',"}",",","{",'"property_id":"100535107"',"}",",","{",'"property_id":"100543019"',"}",",","{",'"property_id":"100543848"',"}",",","{",'"property_id":"100548317"',"}",",","{",'"property_id":"100550342"',"}",",","{",'"property_id":"100556761"',"}",",","{",'"property_id":"100559504"',"}",",","{",'"property_id":"100566646"',"}",",","{",'"property_id":"100567981"',"}",",","{",'"property_id":"100568435"',"}",",","{",'"property_id":"100570317"',"}",",","{",'"property_id":"100571697"',"}",",","{",'"property_id":"100572043"',"}",",","{",'"property_id":"100572292"',"}",",","{",'"property_id":"100572946"',"}",",","{",'"property_id":"100575140"',"}",",","{",'"property_id":"100575246"',"}",",","{",'"property_id":"100577573"',"}",",","{",'"property_id":"100582358"',"}",",","{",'"property_id":"100582362"',"}",",","{",'"property_id":"100593257"',"}",",","{",'"property_id":"100596743"',"}",",","{",'"property_id":"100599512"',"}",",","{",'"property_id":"100600807"',"}",",","{",'"property_id":"100601236"',"}",",","{",'"property_id":"100601713"',"}",",","{",'"property_id":"100601765"',"}",",","{",'"property_id":"100601862"',"}",",","{",'"property_id":"100602074"',"}",",","{",'"property_id":"100602434"',"}",",","{",'"property_id":"100602822"',"}",",","{",'"property_id":"100602938"',"}",",","{",'"property_id":"100603057"',"}",",","{",'"property_id":"100603133"',"}",",","{",'"property_id":"100603286"',"}",",","{",'"property_id":"100603326"',"}",",","{",'"property_id":"100604746"',"}",",","{",'"property_id":"100604877"',"}",",","{",'"property_id":"100605431"',"}",",","{",'"property_id":"100606613"',"}",",","{",'"property_id":"100608023"',"}",",","{",'"property_id":"100609059"',"}",",","{",'"property_id":"100609346"',"}",",","{",'"property_id":"100613232"',"}",",","{",'"property_id":"100616406"',"}",",","{",'"property_id":"100616411"',"}",",","{",'"property_id":"100619722"',"}",",","{",'"property_id":"100620073"',"}",",","{",'"property_id":"100620076"',"}",",","{",'"property_id":"100620097"',"}",",","{",'"property_id":"100620198"',"}",",","{",'"property_id":"100620242"',"}",",","{",'"property_id":"100622182"',"}",",","{",'"property_id":"100625077"',"}",",","{",'"property_id":"100625086"',"}",",","{",'"property_id":"100625741"',"}",",","{",'"property_id":"100639258"',"}",",","{",'"property_id":"100640833"',"}",",","{",'"property_id":"100642075"',"}",",","{",'"property_id":"100649245"',"}",",","{",'"property_id":"100649263"',"}",",","{",'"property_id":"100649269"',"}",",","{",'"property_id":"100649271"',"}",",","{",'"property_id":"100649276"',"}",",","{",'"property_id":"100649283"',"}",",","{",'"property_id":"100649676"',"}",",","{",'"property_id":"100650861"',"}",",","{",'"property_id":"100652128"',"}",",","{",'"property_id":"100652191"',"}",",","{",'"property_id":"100652478"',"}",",","{",'"property_id":"100652589"',"}",",","{",'"property_id":"100652669"',"}",",","{",'"property_id":"100652780"',"}",",","{",'"property_id":"100654205"',"}",",","{",'"property_id":"100657934"',"}",",","{",'"property_id":"100665316"',"}",",","{",'"property_id":"100665731"',"}",",","{",'"property_id":"100669977"',"}",",","{",'"property_id":"100675807"',"}",",","{",'"property_id":"100676584"',"}",",","{",'"property_id":"100679857"',"}",",","{",'"property_id":"100684323"',"}",",","{",'"property_id":"100685513"',"}",",","{",'"property_id":"100686655"',"}",",","{",'"property_id":"100688954"',"}",",","{",'"property_id":"100688962"',"}",",","{",'"property_id":"100689673"',"}",",","{",'"property_id":"100690786"',"}",",","{",'"property_id":"100690986"',"}",",","{",'"property_id":"100691028"',"}",",","{",'"property_id":"100692448"',"}",",","{",'"property_id":"100695576"',"}",",","{",'"property_id":"100696992"',"}",",","{",'"property_id":"100699468"',"}",",","{",'"property_id":"100700044"',"}",",","{",'"property_id":"100700064"',"}",",","{",'"property_id":"100700757"',"}",",","{",'"property_id":"100700767"',"}",",","{",'"property_id":"100701454"',"}",",","{",'"property_id":"100701628"',"}",",","{",'"property_id":"100703398"',"}",",","{",'"property_id":"100706222"',"}",",","{",'"property_id":"100707537"',"}",",","{",'"property_id":"100708401"',"}",",","{",'"property_id":"100712429"',"}",",","{",'"property_id":"100713738"',"}",",","{",'"property_id":"100713740"',"}",",","{",'"property_id":"100716638"',"}",",","{",'"property_id":"100716646"',"}",",","{",'"property_id":"100717952"',"}",",","{",'"property_id":"100717980"',"}",",","{",'"property_id":"100718245"',"}",",","{",'"property_id":"100718416"',"}",",","{",'"property_id":"100719357"',"}",",","{",'"property_id":"100719570"',"}",",","{",'"property_id":"100719710"',"}",",","{",'"property_id":"100719966"',"}",",","{",'"property_id":"100723531"',"}",",","{",'"property_id":"100724104"',"}",",","{",'"property_id":"100724150"',"}",",","{",'"property_id":"100726142"',"}",",","{",'"property_id":"100727220"',"}",",","{",'"property_id":"100728466"',"}",",","{",'"property_id":"100728490"',"}",",","{",'"property_id":"100728509"',"}",",","{",'"property_id":"100728552"',"}",",","{",'"property_id":"100728726"',"}",",","{",'"property_id":"100728936"',"}",",","{",'"property_id":"100728942"',"}",",","{",'"property_id":"100729241"',"}",",","{",'"property_id":"100729349"',"}",",","{",'"property_id":"100729449"',"}",",","{",'"property_id":"100731027"',"}",",","{",'"property_id":"100737965"',"}",",","{",'"property_id":"100739592"',"}",",","{",'"property_id":"100740057"',"}",",","{",'"property_id":"100740662"',"}",",","{",'"property_id":"100740680"',"}",",","{",'"property_id":"100742658"',"}",",","{",'"property_id":"100742824"',"}",",","{",'"property_id":"100743021"',"}",",","{",'"property_id":"100743959"',"}",",","{",'"property_id":"100744292"',"}",",","{",'"property_id":"100744300"',"}",",","{",'"property_id":"100745356"',"}",",","{",'"property_id":"100746439"',"}",",","{",'"property_id":"100746462"',"}",",","{",'"property_id":"100746472"',"}",",","{",'"property_id":"100746483"',"}",",","{",'"property_id":"100747315"',"}",",","{",'"property_id":"100748495"',"}",",","{",'"property_id":"100748505"',"}",",","{",'"property_id":"100748604"',"}",",","{",'"property_id":"100748615"',"}",",","{",'"property_id":"100749302"',"}",",","{",'"property_id":"100749599"',"}",",","{",'"property_id":"100749613"',"}",",","{",'"property_id":"100749729"',"}",",","{",'"property_id":"100749801"',"}",",","{",'"property_id":"100749971"',"}",",","{",'"property_id":"100767290"',"}",",","{",'"property_id":"100768056"',"}",",","{",'"property_id":"100769120"',"}",",","{",'"property_id":"100773614"',"}",",","{",'"property_id":"100773847"',"}",",","{",'"property_id":"100773851"',"}",",","{",'"property_id":"100774748"',"}",",","{",'"property_id":"100775250"',"}",",","{",'"property_id":"100776536"',"}",",","{",'"property_id":"100777045"',"}",",","{",'"property_id":"100777846"',"}",",","{",'"property_id":"100777877"',"}",",","{",'"property_id":"100777903"',"}",",","{",'"property_id":"100777912"',"}",",","{",'"property_id":"100777927"',"}",",","{",'"property_id":"100777932"',"}",",","{",'"property_id":"100777948"',"}",",","{",'"property_id":"100777954"',"}",",","{",'"property_id":"100777978"',"}",",","{",'"property_id":"100777987"',"}",",","{",'"property_id":"100777993"',"}",",","{",'"property_id":"100778000"',"}",",","{",'"property_id":"100778010"',"}",",","{",'"property_id":"100778035"',"}",",","{",'"property_id":"100778334"',"}",",","{",'"property_id":"100778726"',"}",",","{",'"property_id":"100778729"',"}",",","{",'"property_id":"100779760"',"}",",","{",'"property_id":"100781014"',"}",",","{",'"property_id":"100781085"',"}",",","{",'"property_id":"100781537"',"}",",","{",'"property_id":"100781578"',"}",",","{",'"property_id":"100781662"',"}",",","{",'"property_id":"100781712"',"}",",","{",'"property_id":"100781940"',"}",",","{",'"property_id":"100784010"',"}",",","{",'"property_id":"100784087"',"}",",","{",'"property_id":"100785236"',"}",",","{",'"property_id":"100787262"',"}",",","{",'"property_id":"100789124"',"}",",","{",'"property_id":"100790130"',"}",",","{",'"property_id":"100791958"',"}",",","{",'"property_id":"100793853"',"}",",","{",'"property_id":"100793861"',"}",",","{",'"property_id":"100794823"',"}",",","{",'"property_id":"100796481"',"}",",","{",'"property_id":"100796580"',"}",",","{",'"property_id":"100797055"',"}",",","{",'"property_id":"100798435"',"}",",","{",'"property_id":"100799242"',"}",",","{",'"property_id":"100799245"',"}",",","{",'"property_id":"100799253"',"}",",","{",'"property_id":"100804286"',"}",",","{",'"property_id":"100804339"',"}",",","{",'"property_id":"100804429"',"}",",","{",'"property_id":"100804729"',"}",",","{",'"property_id":"100804768"',"}",",","{",'"property_id":"100805053"',"}",",","{",'"property_id":"100807623"',"}",",","{",'"property_id":"100808274"',"}",",","{",'"property_id":"100808299"',"}",",","{",'"property_id":"100808304"',"}",",","{",'"property_id":"100808321"',"}",",","{",'"property_id":"100808544"',"}",",","{",'"property_id":"100808939"',"}",",","{",'"property_id":"100808996"',"}",",","{",'"property_id":"100809190"',"}",",","{",'"property_id":"100809221"',"}",",","{",'"property_id":"100809302"',"}",",","{",'"property_id":"100811092"',"}",",","{",'"property_id":"100811706"',"}",",","{",'"property_id":"100811710"',"}",",","{",'"property_id":"100813118"',"}",",","{",'"property_id":"100813767"',"}",",","{",'"property_id":"100814142"',"}",",","{",'"property_id":"100814146"',"}",",","{",'"property_id":"100814150"',"}",",","{",'"property_id":"100814153"',"}",",","{",'"property_id":"100814157"',"}",",","{",'"property_id":"100814161"',"}",",","{",'"property_id":"100814212"',"}",",","{",'"property_id":"100814216"',"}",",","{",'"property_id":"100814218"',"}",",","{",'"property_id":"100814244"',"}",",","{",'"property_id":"100814708"',"}",",","{",'"property_id":"100815140"',"}",",","{",'"property_id":"100817171"',"}",",","{",'"property_id":"100817428"',"}",",","{",'"property_id":"100818755"',"}",",","{",'"property_id":"100819103"',"}",",","{",'"property_id":"100820744"',"}",",","{",'"property_id":"100820811"',"}",",","{",'"property_id":"100821447"',"}",",","{",'"property_id":"100821822"',"}",",","{",'"property_id":"100821916"',"}",",","{",'"property_id":"100822564"',"}",",","{",'"property_id":"100827100"',"}",",","{",'"property_id":"100827134"',"}",",","{",'"property_id":"100827287"',"}",",","{",'"property_id":"100831769"',"}",",","{",'"property_id":"100832790"',"}",",","{",'"property_id":"100837118"',"}",",","{",'"property_id":"100841130"',"}",",","{",'"property_id":"100841164"',"}",",","{",'"property_id":"100841232"',"}",",","{",'"property_id":"100841819"',"}",",","{",'"property_id":"100842555"',"}",",","{",'"property_id":"100842828"',"}",",","{",'"property_id":"100842864"',"}",",","{",'"property_id":"100844347"',"}",",","{",'"property_id":"100845088"',"}",",","{",'"property_id":"100845209"',"}",",","{",'"property_id":"100845318"',"}",",","{",'"property_id":"100845433"',"}",",","{",'"property_id":"100845467"',"}",",","{",'"property_id":"100846547"',"}",",","{",'"property_id":"100846696"',"}",",","{",'"property_id":"100847135"',"}",",","{",'"property_id":"100847209"',"}",",","{",'"property_id":"100847458"',"}",",","{",'"property_id":"100847640"',"}",",","{",'"property_id":"100847812"',"}",",","{",'"property_id":"100848437"',"}",",","{",'"property_id":"100850509"',"}",",","{",'"property_id":"100850937"',"}",",","{",'"property_id":"100853676"',"}",",","{",'"property_id":"100854172"',"}",",","{",'"property_id":"100854179"',"}",",","{",'"property_id":"100854246"',"}",",","{",'"property_id":"100855657"',"}",",","{",'"property_id":"100855829"',"}",",","{",'"property_id":"100856145"',"}",",","{",'"property_id":"100857125"',"}",",","{",'"property_id":"100857178"',"}",",","{",'"property_id":"100858577"',"}",",","{",'"property_id":"100858768"',"}",",","{",'"property_id":"100858797"',"}",",","{",'"property_id":"100859030"',"}",",","{",'"property_id":"100859211"',"}",",","{",'"property_id":"100859295"',"}",",","{",'"property_id":"100859768"',"}",",","{",'"property_id":"100861925"',"}",",","{",'"property_id":"100862052"',"}",",","{",'"property_id":"100862752"',"}",",","{",'"property_id":"100863225"',"}",",","{",'"property_id":"100863447"',"}",",","{",'"property_id":"100864301"',"}",",","{",'"property_id":"100864417"',"}",",","{",'"property_id":"100864447"',"}",",","{",'"property_id":"100864782"',"}",",","{",'"property_id":"100865733"',"}",",","{",'"property_id":"100865740"',"}",",","{",'"property_id":"100865743"',"}",",","{",'"property_id":"100865903"',"}",",","{",'"property_id":"100865979"',"}",",","{",'"property_id":"100865982"',"}",",","{",'"property_id":"100866098"',"}",",","{",'"property_id":"100866102"',"}",",","{",'"property_id":"100866202"',"}",",","{",'"property_id":"100866824"',"}",",","{",'"property_id":"100866917"',"}",",","{",'"property_id":"100867026"',"}",",","{",'"property_id":"100867100"',"}",",","{",'"property_id":"100867329"',"}",",","{",'"property_id":"100868573"',"}",",","{",'"property_id":"100868760"',"}",",","{",'"property_id":"100869342"',"}",",","{",'"property_id":"100869352"',"}",",","{",'"property_id":"100870027"',"}",",","{",'"property_id":"100871351"',"}",",","{",'"property_id":"100871627"',"}",",","{",'"property_id":"100872043"',"}",",","{",'"property_id":"100872048"',"}",",","{",'"property_id":"100872768"',"}",",","{",'"property_id":"100872811"',"}",",","{",'"property_id":"100873085"',"}",",","{",'"property_id":"100873148"',"}",",","{",'"property_id":"100873201"',"}",",","{",'"property_id":"100873209"',"}",",","{",'"property_id":"100873211"',"}",",","{",'"property_id":"100873213"',"}",",","{",'"property_id":"100873217"',"}",",","{",'"property_id":"100873226"',"}",",","{",'"property_id":"100873245"',"}",",","{",'"property_id":"100873255"',"}",",","{",'"property_id":"100873259"',"}",",","{",'"property_id":"100873296"',"}",",","{",'"property_id":"100873298"',"}",",","{",'"property_id":"100873343"',"}",",","{",'"property_id":"100873357"',"}",",","{",'"property_id":"100873359"',"}",",","{",'"property_id":"100873365"',"}",",","{",'"property_id":"100873378"',"}",",","{",'"property_id":"100873446"',"}",",","{",'"property_id":"100873473"',"}",",","{",'"property_id":"100873480"',"}",",","{",'"property_id":"100873499"',"}",",","{",'"property_id":"100873544"',"}",",","{",'"property_id":"100873563"',"}",",","{",'"property_id":"100873569"',"}",",","{",'"property_id":"100873574"',"}",",","{",'"property_id":"100873585"',"}",",","{",'"property_id":"100873601"',"}",",","{",'"property_id":"100873636"',"}",",","{",'"property_id":"100873642"',"}",",","{",'"property_id":"100873650"',"}",",","{",'"property_id":"100873653"',"}",",","{",'"property_id":"100873671"',"}",",","{",'"property_id":"100873673"',"}",",","{",'"property_id":"100873710"',"}",",","{",'"property_id":"100874199"',"}",",","{",'"property_id":"100874829"',"}",",","{",'"property_id":"100875938"',"}",",","{",'"property_id":"100875994"',"}",",","{",'"property_id":"100876070"',"}",",","{",'"property_id":"100876442"',"}",",","{",'"property_id":"100876445"',"}",",","{",'"property_id":"100876651"',"}",",","{",'"property_id":"100877091"',"}",",","{",'"property_id":"100877152"',"}",",","{",'"property_id":"100877191"',"}",",","{",'"property_id":"100877594"',"}",",","{",'"property_id":"100878095"',"}",",","{",'"property_id":"100878400"',"}",",","{",'"property_id":"100878422"',"}",",","{",'"property_id":"100878672"',"}",",","{",'"property_id":"100878739"',"}",",","{",'"property_id":"100878992"',"}",",","{",'"property_id":"100879035"',"}",",","{",'"property_id":"100879442"',"}",",","{",'"property_id":"100879866"',"}",",","{",'"property_id":"100879887"',"}",",","{",'"property_id":"100880213"',"}",",","{",'"property_id":"100880349"',"}",",","{",'"property_id":"100880372"',"}",",","{",'"property_id":"100880782"',"}",",","{",'"property_id":"100880784"',"}",",","{",'"property_id":"100880827"',"}",",","{",'"property_id":"100880940"',"}",",","{",'"property_id":"100881340"',"}",",","{",'"property_id":"100881425"',"}",",","{",'"property_id":"100882008"',"}",",","{",'"property_id":"100882109"',"}",",","{",'"property_id":"100882209"',"}",",","{",'"property_id":"100882268"',"}",",","{",'"property_id":"100882611"',"}",",","{",'"property_id":"100882615"',"}",",","{",'"property_id":"100882625"',"}",",","{",'"property_id":"100882645"',"}",",","{",'"property_id":"100882672"',"}",",","{",'"property_id":"100882698"',"}",",","{",'"property_id":"100882730"',"}",",","{",'"property_id":"100882745"',"}",",","{",'"property_id":"100882747"',"}",",","{",'"property_id":"100882768"',"}",",","{",'"property_id":"100882774"',"}",",","{",'"property_id":"100882780"',"}",",","{",'"property_id":"100882792"',"}",",","{",'"property_id":"100882800"',"}",",","{",'"property_id":"100883045"',"}",",","{",'"property_id":"100883327"',"}",",","{",'"property_id":"100884307"',"}",",","{",'"property_id":"100884482"',"}",",","{",'"property_id":"100884494"',"}",",","{",'"property_id":"100884536"',"}",",","{",'"property_id":"100884756"',"}",",","{",'"property_id":"100885960"',"}",",","{",'"property_id":"100886711"',"}",",","{",'"property_id":"100887205"',"}",",","{",'"property_id":"100887413"',"}",",","{",'"property_id":"100888896"',"}",",","{",'"property_id":"100890750"',"}",",","{",'"property_id":"100891464"',"}",",","{",'"property_id":"100891935"',"}",",","{",'"property_id":"100892018"',"}",",","{",'"property_id":"100893386"',"}",",","{",'"property_id":"100894090"',"}",",","{",'"property_id":"100894342"',"}",",","{",'"property_id":"100894517"',"}",",","{",'"property_id":"100894525"',"}",",","{",'"property_id":"100894527"',"}",",","{",'"property_id":"100894529"',"}",",","{",'"property_id":"100894531"',"}",",","{",'"property_id":"100894533"',"}",",","{",'"property_id":"100894535"',"}",",","{",'"property_id":"100895010"',"}",",","{",'"property_id":"100895229"',"}",",","{",'"property_id":"100895233"',"}",",","{",'"property_id":"100895242"',"}",",","{",'"property_id":"100895383"',"}",",","{",'"property_id":"100895506"',"}",",","{",'"property_id":"100896424"',"}",",","{",'"property_id":"100896697"',"}",",","{",'"property_id":"100896744"',"}",",","{",'"property_id":"100896750"',"}",",","{",'"property_id":"100896861"',"}",",","{",'"property_id":"100896894"',"}",",","{",'"property_id":"100897002"',"}",",","{",'"property_id":"100897004"',"}",",","{",'"property_id":"100897038"',"}",",","{",'"property_id":"100897046"',"}",",","{",'"property_id":"100897084"',"}",",","{",'"property_id":"100897101"',"}",",","{",'"property_id":"100897118"',"}",",","{",'"property_id":"100897128"',"}",",","{",'"property_id":"100897140"',"}",",","{",'"property_id":"100897149"',"}",",","{",'"property_id":"100897291"',"}",",","{",'"property_id":"100897437"',"}",",","{",'"property_id":"100897708"',"}",",","{",'"property_id":"100897820"',"}",",","{",'"property_id":"100898410"',"}",",","{",'"property_id":"100898631"',"}",",","{",'"property_id":"100898809"',"}",",","{",'"property_id":"100899040"',"}",",","{",'"property_id":"100899252"',"}",",","{",'"property_id":"100899266"',"}",",","{",'"property_id":"100899271"',"}",",","{",'"property_id":"100899273"',"}",",","{",'"property_id":"100899310"',"}",",","{",'"property_id":"100899524"',"}",",","{",'"property_id":"100899847"',"}",",","{",'"property_id":"100900038"',"}",",","{",'"property_id":"100900121"',"}",",","{",'"property_id":"100900214"',"}",",","{",'"property_id":"100900744"',"}",",","{",'"property_id":"100900749"',"}",",","{",'"property_id":"100901442"',"}",",","{",'"property_id":"100901446"',"}",",","{",'"property_id":"100901468"',"}",",","{",'"property_id":"100901481"',"}",",","{",'"property_id":"100902011"',"}",",","{",'"property_id":"100902227"',"}",",","{",'"property_id":"100903842"',"}",",","{",'"property_id":"100908471"',"}",",","{",'"property_id":"100910287"',"}",",","{",'"property_id":"100912776"',"}",",","{",'"property_id":"100915641"',"}",",","{",'"property_id":"100916803"',"}",",","{",'"property_id":"100917581"',"}",",","{",'"property_id":"100917633"',"}",",","{",'"property_id":"100917642"',"}",",","{",'"property_id":"100917698"',"}",",","{",'"property_id":"100917735"',"}",",","{",'"property_id":"100917860"',"}",",","{",'"property_id":"100917886"',"}",",","{",'"property_id":"100917899"',"}",",","{",'"property_id":"100918173"',"}",",","{",'"property_id":"100918212"',"}",",","{",'"property_id":"100919491"',"}",",","{",'"property_id":"100919698"',"}",",","{",'"property_id":"100920497"',"}",",","{",'"property_id":"100920960"',"}",",","{",'"property_id":"100921034"',"}",",","{",'"property_id":"100923976"',"}",",","{",'"property_id":"100923982"',"}",",","{",'"property_id":"100924031"',"}",",","{",'"property_id":"100924091"',"}",",","{",'"property_id":"100924101"',"}",",","{",'"property_id":"100924133"',"}",",","{",'"property_id":"100924159"',"}",",","{",'"property_id":"100924379"',"}",",","{",'"property_id":"100924556"',"}",",","{",'"property_id":"100924774"',"}",",","{",'"property_id":"100924868"',"}",",","{",'"property_id":"100924982"',"}",",","{",'"property_id":"100925126"',"}",",","{",'"property_id":"100925134"',"}",",","{",'"property_id":"100925214"',"}",",","{",'"property_id":"100925414"',"}",",","{",'"property_id":"100925502"',"}",",","{",'"property_id":"100925671"',"}",",","{",'"property_id":"100925723"',"}",",","{",'"property_id":"100925822"',"}",",","{",'"property_id":"100925874"',"}",",","{",'"property_id":"100925882"',"}",",","{",'"property_id":"100926104"',"}",",","{",'"property_id":"100926244"',"}",",","{",'"property_id":"100926739"',"}",",","{",'"property_id":"100927416"',"}",",","{",'"property_id":"100927557"',"}",",","{",'"property_id":"100927723"',"}",",","{",'"property_id":"100927735"',"}",",","{",'"property_id":"100927754"',"}",",","{",'"property_id":"100927768"',"}",",","{",'"property_id":"100927770"',"}",",","{",'"property_id":"100927776"',"}",",","{",'"property_id":"100927790"',"}",",","{",'"property_id":"100928050"',"}",",","{",'"property_id":"100928452"',"}",",","{",'"property_id":"100928463"',"}",",","{",'"property_id":"100929041"',"}",",","{",'"property_id":"100929047"',"}",",","{",'"property_id":"100929212"',"}",",","{",'"property_id":"100929214"',"}",",","{",'"property_id":"100929224"',"}",",","{",'"property_id":"100929226"',"}",",","{",'"property_id":"100929365"',"}",",","{",'"property_id":"100929393"',"}",",","{",'"property_id":"100929513"',"}",",","{",'"property_id":"100929696"',"}",",","{",'"property_id":"100929834"',"}",",","{",'"property_id":"100930045"',"}",",","{",'"property_id":"100930182"',"}",",","{",'"property_id":"100930208"',"}",",","{",'"property_id":"100930459"',"}",",","{",'"property_id":"100930582"',"}",",","{",'"property_id":"100930608"',"}",",","{",'"property_id":"100930936"',"}",",","{",'"property_id":"100931062"',"}",",","{",'"property_id":"100931079"',"}",",","{",'"property_id":"100931153"',"}",",","{",'"property_id":"100931229"',"}",",","{",'"property_id":"100931249"',"}",",","{",'"property_id":"100931690"',"}",",","{",'"property_id":"100931692"',"}",",","{",'"property_id":"100931694"',"}",",","{",'"property_id":"100931696"',"}",",","{",'"property_id":"100931698"',"}",",","{",'"property_id":"100931700"',"}",",","{",'"property_id":"100931710"',"}",",","{",'"property_id":"100931714"',"}",",","{",'"property_id":"100931723"',"}",",","{",'"property_id":"100931783"',"}",",","{",'"property_id":"100931812"',"}",",","{",'"property_id":"100931906"',"}",",","{",'"property_id":"100931994"',"}",",","{",'"property_id":"100932411"',"}",",","{",'"property_id":"100932952"',"}",",","{",'"property_id":"100933395"',"}",",","{",'"property_id":"100933577"',"}",",","{",'"property_id":"100933622"',"}",",","{",'"property_id":"100934270"',"}",",","{",'"property_id":"100934303"',"}",",","{",'"property_id":"100934330"',"}",",","{",'"property_id":"100934351"',"}",",","{",'"property_id":"100934423"',"}",",","{",'"property_id":"100934425"',"}",",","{",'"property_id":"100934557"',"}",",","{",'"property_id":"100934569"',"}",",","{",'"property_id":"100934571"',"}",",","{",'"property_id":"100935326"',"}",",","{",'"property_id":"100935364"',"}",",","{",'"property_id":"100935916"',"}",",","{",'"property_id":"100935966"',"}",",","{",'"property_id":"100936348"',"}",",","{",'"property_id":"100936679"',"}",",","{",'"property_id":"100936725"',"}",",","{",'"property_id":"100936917"',"}",",","{",'"property_id":"100937037"',"}",",","{",'"property_id":"100938744"',"}",",","{",'"property_id":"100939023"',"}",",","{",'"property_id":"100939928"',"}",",","{",'"property_id":"100940104"',"}",",","{",'"property_id":"100940172"',"}",",","{",'"property_id":"100940409"',"}",",","{",'"property_id":"100940422"',"}",",","{",'"property_id":"100940632"',"}",",","{",'"property_id":"100940727"',"}",",","{",'"property_id":"100941030"',"}",",","{",'"property_id":"100941663"',"}",",","{",'"property_id":"100941781"',"}",",","{",'"property_id":"100941837"',"}",",","{",'"property_id":"100942136"',"}",",","{",'"property_id":"100942157"',"}",",","{",'"property_id":"100942177"',"}",",","{",'"property_id":"100943021"',"}",",","{",'"property_id":"100943049"',"}",",","{",'"property_id":"100943288"',"}",",","{",'"property_id":"100943854"',"}",",","{",'"property_id":"100944394"',"}",",","{",'"property_id":"100944405"',"}",",","{",'"property_id":"100944459"',"}",",","{",'"property_id":"100944655"',"}",",","{",'"property_id":"100944715"',"}",",","{",'"property_id":"100944733"',"}",",","{",'"property_id":"100944745"',"}",",","{",'"property_id":"100944748"',"}",",","{",'"property_id":"100944749"',"}",",","{",'"property_id":"100944752"',"}",",","{",'"property_id":"100944753"',"}",",","{",'"property_id":"100944835"',"}",",","{",'"property_id":"100945082"',"}",",","{",'"property_id":"100945551"',"}",",","{",'"property_id":"100946555"',"}",",","{",'"property_id":"100946587"',"}",",","{",'"property_id":"100946602"',"}",",","{",'"property_id":"100946612"',"}",",","{",'"property_id":"100947212"',"}",",","{",'"property_id":"100949392"',"}",",","{",'"property_id":"100949532"',"}",",","{",'"property_id":"100950273"',"}",",","{",'"property_id":"100950704"',"}",",","{",'"property_id":"100950891"',"}",",","{",'"property_id":"100950988"',"}",",","{",'"property_id":"100951047"',"}",",","{",'"property_id":"100951371"',"}",",","{",'"property_id":"100951435"',"}",",","{",'"property_id":"100951475"',"}",",","{",'"property_id":"100951619"',"}",",","{",'"property_id":"100951847"',"}",",","{",'"property_id":"100952081"',"}",",","{",'"property_id":"100952379"',"}",",","{",'"property_id":"100956304"',"}",",","{",'"property_id":"100956426"',"}",",","{",'"property_id":"100957797"',"}",",","{",'"property_id":"100959697"',"}",",","{",'"property_id":"100960129"',"}",",","{",'"property_id":"100961249"',"}",",","{",'"property_id":"100962025"',"}",",","{",'"property_id":"100964008"',"}",",","{",'"property_id":"100965365"',"}",",","{",'"property_id":"100968061"',"}",",","{",'"property_id":"101696"',"}",",","{",'"property_id":"10195003"',"}",",","{",'"property_id":"10231221"',"}",",","{",'"property_id":"1037778"',"}",",","{",'"property_id":"104084"',"}",",","{",'"property_id":"104135"',"}",",","{",'"property_id":"10476779"',"}",",","{",'"property_id":"1060281"',"}",",","{",'"property_id":"11070373"',"}",",","{",'"property_id":"11095731"',"}",",","{",'"property_id":"1113548"',"}",",","{",'"property_id":"1150079"',"}",",","{",'"property_id":"1150114"',"}",",","{",'"property_id":"11533881"',"}",",","{",'"property_id":"1169867"',"}",",","{",'"property_id":"117313"',"}",",","{",'"property_id":"11782028"',"}",",","{",'"property_id":"11785771"',"}",",","{",'"property_id":"11785777"',"}",",","{",'"property_id":"11785848"',"}",",","{",'"property_id":"11824789"',"}",",","{",'"property_id":"118677"',"}",",","{",'"property_id":"11900760"',"}",",","{",'"property_id":"119128"',"}",",","{",'"property_id":"119149"',"}",",","{",'"property_id":"11969246"',"}",",","{",'"property_id":"12066812"',"}",",","{",'"property_id":"12211"',"}",",","{",'"property_id":"12321651"',"}",",","{",'"property_id":"12475408"',"}",",","{",'"property_id":"1248230"',"}",",","{",'"property_id":"12576572"',"}",",","{",'"property_id":"12623197"',"}",",","{",'"property_id":"12777380"',"}",",","{",'"property_id":"12826575"',"}",",","{",'"property_id":"13091203"',"}",",","{",'"property_id":"13134014"',"}",",","{",'"property_id":"13144371"',"}",",","{",'"property_id":"13299507"',"}",",","{",'"property_id":"13308491"',"}",",","{",'"property_id":"13462568"',"}",",","{",'"property_id":"1382829"',"}",",","{",'"property_id":"1394909"',"}",",","{",'"property_id":"14690107"',"}",",","{",'"property_id":"14690431"',"}",",","{",'"property_id":"14767833"',"}",",","{",'"property_id":"15046"',"}",",","{",'"property_id":"15221195"',"}",",","{",'"property_id":"15235127"',"}",",","{",'"property_id":"15832929"',"}",",","{",'"property_id":"1594106"',"}",",","{",'"property_id":"16013"',"}",",","{",'"property_id":"16043508"',"}",",","{",'"property_id":"16270434"',"}",",","{",'"property_id":"1629075"',"}",",","{",'"property_id":"16327708"',"}",",","{",'"property_id":"16423162"',"}",",","{",'"property_id":"16435454"',"}",",","{",'"property_id":"1658957"',"}",",","{",'"property_id":"16635"',"}",",","{",'"property_id":"1687730"',"}",",","{",'"property_id":"17033166"',"}",",","{",'"property_id":"17274175"',"}",",","{",'"property_id":"1740931"',"}",",","{",'"property_id":"17422574"',"}",",","{",'"property_id":"1746294"',"}",",","{",'"property_id":"17486074"',"}",",","{",'"property_id":"18261418"',"}",",","{",'"property_id":"18366106"',"}",",","{",'"property_id":"18366124"',"}",",","{",'"property_id":"18639440"',"}",",","{",'"property_id":"18641903"',"}",",","{",'"property_id":"18673388"',"}",",","{",'"property_id":"18693419"',"}",",","{",'"property_id":"18765211"',"}",",","{",'"property_id":"18766854"',"}",",","{",'"property_id":"18770105"',"}",",","{",'"property_id":"18773223"',"}",",","{",'"property_id":"18783748"',"}",",","{",'"property_id":"18833836"',"}",",","{",'"property_id":"18965959"',"}",",","{",'"property_id":"18975428"',"}",",","{",'"property_id":"18979768"',"}",",","{",'"property_id":"18991178"',"}",",","{",'"property_id":"19006281"',"}",",","{",'"property_id":"19122013"',"}",",","{",'"property_id":"19252372"',"}",",","{",'"property_id":"19261502"',"}",",","{",'"property_id":"19283233"',"}",",","{",'"property_id":"19292889"',"}",",","{",'"property_id":"19361764"',"}",",","{",'"property_id":"19485326"',"}",",","{",'"property_id":"19485682"',"}",",","{",'"property_id":"19485771"',"}",",","{",'"property_id":"19513671"',"}",",","{",'"property_id":"19513732"',"}",",","{",'"property_id":"19537295"',"}",",","{",'"property_id":"19626208"',"}","]",`
`,"  ","}",`
`,"  ",`
`,"  "]})})})})]}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-Design",children:"Design"}),n.jsx("p",{}),n.jsx("p",{}),n.jsx("p",{}),n.jsx("p",{}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-ExpediaIntegration-GetcontentpropertyIDs-MVP1-Documentation",children:"Documentation"}),n.jsx("p",{children:n.jsx("br",{})}),n.jsx("p",{style:{marginLeft:"60.0px"}})]}),n.jsxs("div",{className:"pageSection group",children:[n.jsx("div",{className:"pageSectionHeader",children:n.jsx("h2",{id:"attachments",className:"pageSectionTitle",children:"Attachments:"})}),n.jsxs("div",{className:"greybox",align:"left",children:[n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689482.png",children:"AvailabilityFlow.png"})," (image/png)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689485.json",children:"EPS Rapid v3.postman_collection.json"})," ","(application/json)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689488.json",children:"ExpediaTest.postman_environment.json"})," ","(application/json)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689491.xls",children:"XML Prime Region Codes.xls"})," ","(application/vnd.ms-excel)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689494.xls",children:"XML Super Region Codes.xls"})," ","(application/vnd.ms-excel)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689497.png",children:"image-20231205-123414.png"})," ","(image/png)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689500.png",children:"image-20231205-123425.png"})," ","(image/png)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689503.png",children:"RCI_B2B_Flow.png"})," (image/png)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595689506.json",children:"RCI - XML 4.0.postman_collection.json"})," ","(application/json)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595460124.drawio",children:"ExpediaProperyIDs_logic.drawio"})," ","(binary/octet-stream)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595460134.png",children:"ExpediaProperyIDs_logic.png"})," ","(image/png)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/595525679.png",children:"ExpediaProperyIDs_logic.png"})," ","(image/png)",n.jsx("br",{}),n.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),n.jsx("a",{href:"attachments/595689473/599588891.png",children:"GeoExpediaLocationsProcess.png"})," ","(image/png)",n.jsx("br",{})]})]})]})," "]}),n.jsx("div",{id:"footer",role:"contentinfo",children:n.jsxs("section",{className:"footer-body",children:[n.jsx("p",{children:"Document generated by Confluence on Jun 24, 2024 05:24"}),n.jsx("div",{id:"footer-logo",children:n.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{r as default};
