import{j as e}from"./index-BPboJRVX.js";function t(){return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"XeniApp : Cache cruise Ship data."}),e.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),e.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),e.jsxs("div",{id:"page",children:[e.jsxs("div",{id:"main",className:"aui-page-panel",children:[e.jsxs("div",{id:"main-header",children:[e.jsx("div",{id:"breadcrumb-section",children:e.jsxs("ol",{id:"breadcrumbs",children:[e.jsx("li",{className:"first",children:e.jsx("span",{children:e.jsx("a",{href:"index.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Cruises-Integration_601980932.html",children:"Cruises Integration"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"FRD---Cruise-Integration---Get-content---Static-data-to-cache---MVP1_602341378.html",children:"FRD - Cruise Integration - Get content - Static data to cache - MVP1"})})})]})}),e.jsx("h1",{id:"title-heading",className:"pagetitle",children:e.jsx("span",{id:"title-text",children:"XeniApp : Cache cruise Ship data."})})]}),e.jsxs("div",{id:"content",className:"view",children:[e.jsxs("div",{className:"page-metadata",children:["Created by ",e.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Apr 12, 2024"]}),e.jsxs("div",{id:"main-content",className:"wiki-content group",children:[e.jsx("hr",{}),e.jsx("style",{type:"text/css",dangerouslySetInnerHTML:{__html:`/*<![CDATA[*/
div.rbtoc1719206711268 {padding: 0px;}
div.rbtoc1719206711268 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1719206711268 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/`}}),e.jsx("div",{className:"toc-macro rbtoc1719206711268",children:e.jsx("ul",{className:"toc-indentation",children:e.jsxs("li",{children:[e.jsx("a",{href:"#CachecruiseShipdata.-Context",children:"Context"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsxs("li",{children:[e.jsx("a",{href:"#CachecruiseShipdata.-Authentication",children:"Authentication"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#CachecruiseShipdata.-Requestexample",children:"Request example"})}),e.jsx("li",{children:e.jsx("a",{href:"#CachecruiseShipdata.-ResponseExample",children:"Response Example"})})]})]}),e.jsxs("li",{children:[e.jsx("a",{href:"#CachecruiseShipdata.-CacheJob.",children:"Cache Job."}),e.jsx("ul",{className:"toc-indentation",children:e.jsxs("li",{children:[e.jsx("a",{href:"#CachecruiseShipdata.-OrchestrationLogic",children:"Orchestration Logic"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#CachecruiseShipdata.-Step1:Startpoint-Datacachefromhttps://fusionapi.traveltek.net/0.9/interface.pl",children:"Step 1: Start point - Data cache from https://fusionapi.traveltek.net/0.9/interface.pl"})}),e.jsx("li",{children:e.jsx("a",{href:"#CachecruiseShipdata.-Step2:GetauthorizationFusionAPI",children:"Step 2: Get authorization Fusion API"})}),e.jsx("li",{children:e.jsx("a",{href:"#CachecruiseShipdata.-Step3:GetShipDetails",children:"Step 3: Get Ship Details"})})]})]})})]}),e.jsx("li",{children:e.jsx("a",{href:"#CachecruiseShipdata.-StoreData",children:"Store Data"})}),e.jsx("li",{children:e.jsx("a",{href:"#CachecruiseShipdata.-XeniAPI-Cruise",children:"Xeni API - Cruise"})})]})]})})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h1",{id:"CachecruiseShipdata.-Context",children:"Context"}),e.jsx("p",{children:"To improve performance, cache the static data per each ship of the enabled cruise line for Xeni."}),e.jsx("hr",{}),e.jsx("h2",{id:"CachecruiseShipdata.-Authentication",children:"Authentication"}),e.jsxs("p",{children:["The first step to consume the FusionAPI of TravelTek vendor is to get the"," ",e.jsx("code",{children:"accessToken"})," based on Xeni credentials:"," ",e.jsx("a",{href:"Cruises-Integration_601980932.html","data-linked-resource-id":601980932,"data-linked-resource-version":11,"data-linked-resource-type":"page",children:"Cruises Integration"})," ","(API Details)"]}),e.jsx("h3",{id:"CachecruiseShipdata.-Requestexample",children:"Request example"}),e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'https://fusionapi.traveltek.net/2.1/json/token.pl' \\",`
`,"--header 'Content-Type: application/x-www-form-urlencoded' \\",`
`,"--header 'Accept: application/json; charset=utf-8' \\",`
`,"--header 'Authorization: Basic eGVuaTp4czgxZHM1NA==' \\",`
`,"--data-urlencode 'scope=portal' \\",`
`,"--data-urlencode 'grant_type=client_credentials'"]})})}),e.jsx("p",{}),e.jsx("h3",{id:"CachecruiseShipdata.-ResponseExample",children:"Response Example"}),e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"expires_in": "7200",',`
`,"    ",'"access_token": "97218e52p17f8-4e4c-b05f-c0c3a368bac9",',`
`,"    ",'"token_type": "bearer"',`
`,"}"]})})}),e.jsx("p",{}),e.jsxs("p",{children:[e.jsx("strong",{children:"access_token"}),": It is required to pass to the session payloads as the value of the param ",e.jsx("code",{children:"requestid"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"expired_at"}),": The time of access_token live. Expressed in Seconds. Based on this it is required to create a logic of access_token refresh and control the user session as well."]}),e.jsx("hr",{}),e.jsx("h2",{id:"CachecruiseShipdata.-CacheJob.",children:"Cache Job."}),e.jsxs("p",{children:["Based on the static data of each Cruise line enable for Xeni, it contains each shipId by Cruise line. ",e.jsx("br",{}),"To get the static data, it is required to iterate the /cruiseshipdetails.pl method."]}),e.jsx("h3",{id:"CachecruiseShipdata.-OrchestrationLogic",children:"Orchestration Logic"}),e.jsxs("h4",{id:"CachecruiseShipdata.-Step1:Startpoint-Datacachefromhttps://fusionapi.traveltek.net/0.9/interface.pl",children:["Step 1: Start point - Data cache from"," ",e.jsx("a",{className:"external-link",href:"https://fusionapi.traveltek.net/0.9/interface.pl",rel:"nofollow",children:e.jsx("span",{className:"legacy-color-text-inverse",children:"https://fusionapi.traveltek.net/0.9/interface.pl"})})]}),e.jsxs("div",{id:"expander-1012341850",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1012341850",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Static: Carnival Cruise line - Ships"})]}),e.jsx("div",{id:"expander-content-1012341850",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:[" ",'<line id="8" logourl="https://static.traveltek.net/cruisepics/logos/carnival.gif" name="Carnival Cruise Line" smalllogourl="https://static.traveltek.net/cruisepics/logos_small/carnival.gif">',`
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
`,"        ","</line>"]})})})})]}),e.jsx("h4",{id:"CachecruiseShipdata.-Step2:GetauthorizationFusionAPI",children:"Step 2: Get authorization Fusion API"}),e.jsxs("div",{id:"expander-2006281527",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-2006281527",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Get Token Request"})]}),e.jsx("div",{id:"expander-content-2006281527",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'https://fusionapi.traveltek.net/2.1/json/token.pl' \\",`
`,"--header 'Content-Type: application/x-www-form-urlencoded' \\",`
`,"--header 'Accept: application/json; charset=utf-8' \\",`
`,"--header 'Authorization: Basic eGVuaTp4czgxZHM1NA==' \\",`
`,"--data-urlencode 'scope=portal' \\",`
`,"--data-urlencode 'grant_type=client_credentials'"]})})})})]}),e.jsx("p",{}),e.jsxs("div",{id:"expander-1932417372",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1932417372",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Get Token Response"})]}),e.jsx("div",{id:"expander-content-1932417372",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",'"access_token":"87cb132epaf04-4f66-963c-d96fe398b90a","token_type":"bearer","expires_in":"7200"',"}"]})})})})]}),e.jsx("p",{}),e.jsx("h4",{id:"CachecruiseShipdata.-Step3:GetShipDetails",children:"Step 3: Get Ship Details"}),e.jsx("p",{children:e.jsx("strong",{children:"Params:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"requestId"}),": AccessToken"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"language"}),": Default 'en'"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"shipid"}),": shipid from <Ships><ship> id"]})})]}),e.jsx("p",{}),e.jsxs("div",{id:"expander-121972016",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-121972016",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"GET: /cruiseshipdetails.pl Request"})]}),e.jsx("div",{id:"expander-content-121972016",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'https://fusionapi.traveltek.net/2.1/json/cruiseshipdetails.pl?requestid=87cb132epaf04-4f66-963c-d96fe398b90a&language=en&shipid=1196' \\",`
`,"--header 'Accept: application/json; charset=utf-8'"]})})})})]}),e.jsxs("div",{id:"expander-1438016974",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1438016974",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"GET: /cruiseshipdetails.pl Response"})]}),e.jsx("div",{id:"expander-content-1438016974",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"errors": [],',`
`,"    ",'"meta": ',"{",`
`,"        ",'"criteria": ',"{",`
`,"            ",'"codetocruiseid": 0,',`
`,"            ",'"paxquerystring": "",',`
`,"            ",'"paxtotal": 0,',`
`,"            ",'"ratecodedetails": [],',`
`,"            ",'"ratecodes": []',`
`,"        ","}",",",`
`,"        ",'"defaultcurrency": ',"{","}",",",`
`,"        ",'"rows": 1',`
`,"    ","}",",",`
`,"    ",'"results": [',`
`,"        ","{",`
`,"            ",'"adultsonly": "N",',`
`,"            ",'"atolnumber": "",',`
`,"            ",'"cabintypes": [',`
`,"                ","{",`
`,"                    ",'"cabincode": "1A",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "E7D994",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Twin bed and one upper pullman. Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.\\r\\n",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1631711074.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Upper/Lower",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1631711074.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4A",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "00AD86",',`
`,"                    ",'"deckid": 4023,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606848.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606848.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4B",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "FCDEEB",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606970.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606970.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4C",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "FBA61C",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606975.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606975.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4D",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "DF93A3",',`
`,"                    ",'"deckid": 4028,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606980.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606980.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4E",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "C4DF9C",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606985.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606985.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4F",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "B4DFF4",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606989.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606989.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4G",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "EBD201",',`
`,"                    ",'"deckid": 4030,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606995.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606995.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4H",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "9AD3B7",',`
`,"                    ",'"deckid": 4032,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607000.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607000.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4J",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "B44A6F",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Picture window facing public observation deck.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607065.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom (Obstructed Views)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607065.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4S",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "74A534",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. Ample closet space.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\n\\r\\nUnique welcome ritual\\r\\nPriority spa reservations\\r\\nUnlimited use of Thermal Suites and Thalassotherapy Pool\\r\\nComplimentary scrub kit to use in our Thermal Suites\\r\\nTwo complimentary fitness classes (per guest)\\r\\nComplimentary body composition analysis\\r\\nExclusive discounts on treatments during port days\\r\\nCloud 9 Spa bathrobes and slippers\\r\\nUpgraded Elemis in-stateroom toiletries\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607502.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cloud 9 Spa Interior",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607502.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6A",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "F15923",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607299.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607299.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6L",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "F9A980",',`
`,"                    ",'"deckid": 4023,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower plus separate washroom with sink and junior tub. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607342.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Deluxe Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607342.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6M",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "E7B220",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower plus separate washroom with sink and junior tub. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607347.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Deluxe Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607347.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6N",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "A75E4A",',`
`,"                    ",'"deckid": 4023,',`
`,"                    ",'"description": "Two twin beds (convert to king), two upper pullmans and single sofa bed. Privacy curtain. Sofa and coffee table. Desk and seat. Full bathroom with shower plus separate washroom with sink and junior tub. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607355.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Deluxe Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607355.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6S",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "7CADBA",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. Ample closet space. Picture window facing public observation deck.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\n\\r\\nAmbulatory Accessible Stateroom: This stateroom is designed for use by guests with mobility limitations, who do not require the regular use of a wheelchair, scooter or other similar assistive devices. For example, it is ideal for guests who only use an assistive device (like a cane or walker) for traversing longer distances, and who may benefit from certain accessible features like grab bars, to assist with balance.\\r\\n\\r\\nUnique welcome ritual\\r\\nPriority spa reservations\\r\\nUnlimited use of Thermal Suites and Thalassotherapy Pool\\r\\nComplimentary scrub kit to use in our Thermal Suites\\r\\nTwo complimentary fitness classes (per guest)\\r\\nComplimentary body composition analysis\\r\\nExclusive discounts on treatments during port days\\r\\nCloud 9 Spa bathrobes and slippers\\r\\nUpgraded Elemis in-stateroom toiletries\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607470.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Spa Ocean View Stateroom (Obstructed View)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607470.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "7C",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "C7B2D6",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private cove balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607514.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cove Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607514.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8A",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "BD55A0",',`
`,"                    ",'"deckid": 4028,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462280.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462280.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8B",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "FFD88F",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Desk and seat. Sofa and coffee table. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462281.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462281.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8C",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "F27180",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462286.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462286.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8D",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "99B463",',`
`,"                    ",'"deckid": 4030,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011796.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011796.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8E",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "DCD3D0",',`
`,"                    ",'"deckid": 4032,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011803.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011803.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8F",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "B07588",',`
`,"                    ",'"deckid": 4032,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1606901923.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1606901923.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8G",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "ED1D30",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462347.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462347.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8M",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "A7A2A9",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private aft-facing extended balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607705.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Aft View Extended Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607705.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8N",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "C47C1E",',`
`,"                    ",'"deckid": 4030,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private aft-facing extended balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607727.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Aft View Extended Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607727.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8P",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "4E88C6",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. Ample closet space. Private balcony with patio chairs and table.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\n\\r\\nUnique welcome ritual\\r\\nPriority spa reservations\\r\\nUnlimited use of Thermal Suites and Thalassotherapy Pool\\r\\nComplimentary scrub kit to use in our Thermal Suites\\r\\nTwo complimentary fitness classes (per guest)\\r\\nComplimentary body composition analysis\\r\\nExclusive discounts on treatments during port days\\r\\nCloud 9 Spa bathrobes and slippers\\r\\nUpgraded Elemis in-stateroom toiletries\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013087.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cloud 9 Spa Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013087.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8S",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "CCE3F1",',`
`,"                    ",'"deckid": 4034,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. Ample closet space. Private balcony with patio chairs and table.\\r\\n\\r\\nUnique welcome ritual.\\r\\nPriority spa reservations.\\r\\nUnlimited use of Thermal Suites and Hydrotherapy Pool.\\r\\nComplimentary scrub kit to use in our Thermal Suites.\\r\\nTwo complimentary fitness classes (per guest).\\r\\nComplimentary body composition analysis.\\r\\nExclusive discounts on treatments during port days.\\r\\nCloud 9 Spa bathrobes and slippers.\\r\\nUpgraded Elemis in-stateroom toiletries.\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013332.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Spa Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013332.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "9C",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "EC037C",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private wraparound balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607775.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Premium Vista Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607775.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "BL",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",`"description": "Balcony staterooms were designed for maximum sea breeze and the most stunning views, so look to a balcony if you're looking to cruise aboard Carnival Breeze. Any time you're in your room, you're just steps away from your own personal outdoor oasis, featuring the sort of sea view you can also feel.\\r\\n\\r\\n\\r\\n\\r\\nDedicated room steward\\r\\nCarnival Comfort Collection® linens\\r\\nPlenty of closet and drawer space\\r\\nIn-room safe for valuables\\r\\nTelevision\\r\\nStateroom climate control\\r\\n",`,`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880487.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom (Guaranteed)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880487.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "GS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "DE761B",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/bidet/double sinks. Walk-in dressing area with vanity table, seat and ample closet space. Private large balcony with patio chairs and table.\\r\\n\\r\\nPriority check-in and boarding\\r\\nPriority dinner reservations for select specialty restaurants\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining)\\r\\nPriority debarkation at all ports\\r\\nTwo large bottles of water\\r\\nPillow-top mattresses\\r\\nBathrobes\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607836.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Grand Suite",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607836.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "IS",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",'"description": "This is an affordable way to cruise without leaving out the comfort or convenience! Great for curling up after a long day of fun.\\r\\n\\r\\n\\r\\nDedicated room steward\\r\\nCarnival Comfort Collection® linens\\r\\nPlenty of closet and drawer space\\r\\nIn-room safe for valuables\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358611.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Inside Stateroom (Guaranteed)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358611.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "JS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "697921",',`
`,"                    ",'"deckid": 4031,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa, armchair and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/double sinks. 2 large closets. Walk-in dressing area with ample closet space. Private standard-size balcony with obstructed view; patio chairs and table.\\r\\n\\r\\nPriority check-in and boarding\\r\\nPriority dinner reservations for select specialty restaurants\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining)\\r\\nPriority debarkation at all ports\\r\\nTwo large bottles of water\\r\\nPillow-top mattresses\\r\\nBathrobes\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608098.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Junior Suite(Obstructed View)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608098.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "OS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "00B1D2",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet space. Private large balcony with patio chairs and table.\\r\\n\\r\\nPriority check-in and boarding\\r\\nPriority dinner reservations for select specialty restaurants\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining)\\r\\nPriority debarkation at all ports\\r\\nTwo large bottles of water\\r\\nPillow-top mattresses\\r\\nBathrobes\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608104.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Ocean Suite",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608104.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "OV",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",'"description": "A picture window gives you views of scenery you won’t find anywhere on land, all from the comfort of your stateroom.\\r\\n\\r\\nDedicated room steward\\r\\nCarnival Comfort Collection® linens\\r\\nPlenty of closet and drawer space\\r\\nIn-room safe for valuables\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880549.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Ocean View Stateroom (Guaranteed)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880549.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "PT",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "CFA8A5",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Two porthole windows.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608114.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Porthole",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608114.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "SS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "00AAAD",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet space. Private large balcony with patio chairs and table.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\nNote: Exclusive amenities apply to 1st and 2nd guests only; 3rd and 4th guests are not entitled to the exclusive amenities.\\r\\n\\r\\nUnique welcome ritual.\\r\\nPriority spa reservations.\\r\\nUnlimited use of Thermal Suites and Hydrotherapy Pool.\\r\\nComplimentary scrub kit to use in our Thermal Suites.\\r\\nTwo complimentary fitness classes (per guest).\\r\\nComplimentary body composition analysis.\\r\\nExclusive discounts on treatments during port days.\\r\\nCloud 9 Spa bathrobes and slippers.\\r\\nUpgraded Elemis in-stateroom toiletries.\\r\\nPriority check-in and boarding.\\r\\nPriority dinner reservations for select specialty restaurants.\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining).\\r\\nPriority debarkation at all ports.\\r\\nTwo large bottles of water.\\r\\nPillow-top mattresses.\\r\\nDedicated room steward.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608124.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cloud 9 Spa Suite",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608124.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "ST",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",'"description": "Get all the comforts of home and then some, with absolutely none of the hassles. Since your suite gives you VIP status, you’re the priority when it comes to getting on and off the ship. Plus, you’ll receive a ton of exclusive amenities making this the ultimate way to cruise. Get comfy… stretch out, put your feet up, or just spend time on your balcony — you’ve got one of our most spacious rooms.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358917.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Suite - Guaranteed",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358917.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",`
`,"            ","],",`
`,"            ",'"code": "BR",',`
`,"            ",'"cruiseline": "Carnival Cruise Line",',`
`,"            ",'"decks": [',`
`,"                ","{",`
`,"                    ",'"caption": "Deck 1",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4023,',`
`,"                    ",'"imageid": 72572,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057897.png",',`
`,"                    ",'"name": "Deck 1 Riviera"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 2",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4024,',`
`,"                    ",'"imageid": 72568,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057879.png",',`
`,"                    ",'"name": "Deck 2 Main"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 3",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4025,',`
`,"                    ",'"imageid": 72567,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057875.png",',`
`,"                    ",'"name": "Deck 3 Lobby"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 4",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4026,',`
`,"                    ",'"imageid": 72569,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057883.png",',`
`,"                    ",'"name": "Deck 4 Mezzanine"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 5",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4027,',`
`,"                    ",'"imageid": 72571,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057890.png",',`
`,"                    ",'"name": "Deck 5 Promenade"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 6",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4028,',`
`,"                    ",'"imageid": 72575,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057918.png",',`
`,"                    ",'"name": "Deck 6 Upper"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 7",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4029,',`
`,"                    ",'"imageid": 72565,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057868.png",',`
`,"                    ",'"name": "Deck 7 Empress"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 8",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4030,',`
`,"                    ",'"imageid": 72576,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057923.png",',`
`,"                    ",'"name": "Deck 8 Verandah"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 9",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4031,',`
`,"                    ",'"imageid": 72577,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057927.png",',`
`,"                    ",'"name": "Deck 9 Vista"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 10",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4032,',`
`,"                    ",'"imageid": 72566,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057872.png",',`
`,"                    ",'"name": "Deck 10 Lido"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 11",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4033,',`
`,"                    ",'"imageid": 72570,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057886.png",',`
`,"                    ",'"name": "Deck 11 Panorama"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 12",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4034,',`
`,"                    ",'"imageid": 72574,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057915.png",',`
`,"                    ",'"name": "Deck 12 Spa"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 14",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4035,',`
`,"                    ",'"imageid": 72564,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057864.png",',`
`,"                    ",'"name": "Deck 14"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 15",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4036,',`
`,"                    ",'"imageid": 72573,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057901.png",',`
`,"                    ",'"name": "Deck 15 Serenity"',`
`,"                ","}",`
`,"            ","],",`
`,"            ",`"description": "On Carnival Breeze, fun-fan faves like SportSquare, and mouth-watering dining spots like Cucina del Capitano, are just the beginning of how this ship keeps the fun blazing.\\r\\n\\r\\nSpeaking of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or south-of-the-border taco goodness at BlueIguana Cantina. There’s always family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint — roadside-burger-shack style — featuring hot-off-the-grill burgers designed by celebrity chef Guy Fieri!\\r\\n\\r\\nThere are many fish in the sea, and Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And to go just a little less refined, stop by Pizza Pirate for a hot slice, the Carnival Deli for a true classic, or Guy’s Pig & Anchor Bar-B-Que Smokehouse to get a little messy with some signature — you guessed it — Guy Fieri BBQ. On this ship, you just can’t get enough Guy!\\r\\n\\r\\nCarnival Breeze has the whole family covered — with water, that is — with a 320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And for the bigger people, there’s time to be spent doing blissfully nothing at Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of course.\\r\\n\\r\\nKeep the fun going once the sun’s done for the day — have a truly moving experience at the multi-dimensional Thrill Theater, get your lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist Productions… or if you prefer to do your dancing on a dance floor, check out Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail concoctions made with ingredients a little less ordinary and flavors a lot more interesting.\\r\\n\\r\\nIf you notice a bit of the outdoors inside, don’t adjust your view. Carnival Breeze’s staterooms — and many of the public spaces around the ship — feature a scintillating tropical décor and contemporary furnishings that’ll transport you straight to warm Caribbean bliss.",`,`
`,"            ",'"descriptions": [],',`
`,"            ",'"facilities": [',`
`,"                ","{",`
`,"                    ",'"category": "Food and Drink",',`
`,"                    ",'"categoryid": "1",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "136",',`
`,"                            ",'"facilitytypeid": "136",',`
`,"                            ",'"name": "24-hour Room Service",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1181",',`
`,"                            ",'"facilitytypeid": "1181",',`
`,"                            ",'"name": "Alchemy Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "237",',`
`,"                            ",'"facilitytypeid": "237",',`
`,"                            ",'"name": "Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "267",',`
`,"                            ",'"facilitytypeid": "267",',`
`,"                            ",'"name": "BBQ",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "589",',`
`,"                            ",'"facilitytypeid": "589",',`
`,"                            ",'"name": "Bimini Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1185",',`
`,"                            ",'"facilitytypeid": "1185",',`
`,"                            ",'"name": "BlueIguana Tequila Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1190",',`
`,"                            ",'"facilitytypeid": "1190",',`
`,"                            ",'"name": "Carnival WaterWorks",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1629",',`
`,"                            ",'"facilitytypeid": "1629",',`
`,"                            ",'"name": "Cucina del Capitano",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "194",',`
`,"                            ",'"facilitytypeid": "194",',`
`,"                            ",'"name": "Dining Room",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1649",',`
`,"                            ",'"facilitytypeid": "1649",',`
`,"                            ",'"name": "Fahrenheit 555 Steakhouse",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "674",',`
`,"                            ",'"facilitytypeid": "674",',`
`,"                            ",'"name": "Lanai Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "753",',`
`,"                            ",'"facilitytypeid": "753",',`
`,"                            ",'"name": "Lobby Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "196",',`
`,"                            ",'"facilitytypeid": "196",',`
`,"                            ",'"name": "Piano Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "90",',`
`,"                            ",'"facilitytypeid": "90",',`
`,"                            ",'"name": "Pizzeria",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1184",',`
`,"                            ",'"facilitytypeid": "1184",',`
`,"                            ",'"name": "RedFrog Pub",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1186",',`
`,"                            ",'"facilitytypeid": "1186",',`
`,"                            ",'"name": "RedFrog Rum Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "398",',`
`,"                            ",'"facilitytypeid": "398",',`
`,"                            ",'"name": "Rising Tide Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1669",',`
`,"                            ",'"facilitytypeid": "1669",',`
`,"                            ",'"name": "Sapphire Dining Room",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "115",',`
`,"                            ",'"facilitytypeid": "115",',`
`,"                            ",'"name": "Sports Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1191",',`
`,"                            ",'"facilitytypeid": "1191",',`
`,"                            ",'"name": "Sports Square",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "598",',`
`,"                            ",'"facilitytypeid": "598",',`
`,"                            ",'"name": "Tequila/Tapas Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1003",',`
`,"                            ",'"facilitytypeid": "1003",',`
`,"                            ",'"name": "The Atrium",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Fitness",',`
`,"                    ",'"categoryid": "4",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "218",',`
`,"                            ",'"facilitytypeid": "218",',`
`,"                            ",'"name": "Fitness Center",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "148",',`
`,"                            ",'"facilitytypeid": "148",',`
`,"                            ",'"name": "Gym",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "177",',`
`,"                            ",'"facilitytypeid": "177",',`
`,"                            ",'"name": "Jogging Track",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1063",',`
`,"                            ",'"facilitytypeid": "1063",',`
`,"                            ",'"name": "Wellness Centre",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Other",',`
`,"                    ",'"categoryid": "7",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1188",',`
`,"                            ",'"facilitytypeid": "1188",',`
`,"                            ",'"name": "BlueIguana Cantina",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1182",',`
`,"                            ",'"facilitytypeid": "1182",',`
`,"                            ",'"name": "Bonsai Sushi",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1441",',`
`,"                            ",'"facilitytypeid": "1441",',`
`,"                            ",'"name": "Limelight Lounge",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "211",',`
`,"                            ",'"facilitytypeid": "211",',`
`,"                            ",'"name": "Shops",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1440",',`
`,"                            ",'"facilitytypeid": "1440",',`
`,"                            ",'"name": "The Fun Shops",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Relaxation",',`
`,"                    ",'"categoryid": "3",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1632",',`
`,"                            ",'"facilitytypeid": "1632",',`
`,"                            ",'"name": "Beach Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1437",',`
`,"                            ",'"facilitytypeid": "1437",',`
`,"                            ",'"name": "Cloud 9 Spa",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "188",',`
`,"                            ",'"facilitytypeid": "188",',`
`,"                            ",'"name": "Sauna",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1",',`
`,"                            ",'"facilitytypeid": "1",',`
`,"                            ",'"name": "Spa",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "53",',`
`,"                            ",'"facilitytypeid": "53",',`
`,"                            ",'"name": "Steam Room",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "462",',`
`,"                            ",'"facilitytypeid": "462",',`
`,"                            ",'"name": "Thalassotherapy Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Technology",',`
`,"                    ",'"categoryid": "6",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "6",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "3",',`
`,"                            ",'"facilitytypeid": "3",',`
`,"                            ",'"name": "Internet Cafe",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "6",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "178",',`
`,"                            ",'"facilitytypeid": "178",',`
`,"                            ",'"name": "Satelite Telephone",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "6",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "189",',`
`,"                            ",'"facilitytypeid": "189",',`
`,"                            ",'"name": "Satelite TV in Cabins",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Recreational",',`
`,"                    ",'"categoryid": "5",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1662",',`
`,"                            ",'"facilitytypeid": "1662",',`
`,"                            ",'"name": "Aft Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "455",',`
`,"                            ",'"facilitytypeid": "455",',`
`,"                            ",'"name": "Camp Carnival",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "64",',`
`,"                            ",'"facilitytypeid": "64",',`
`,"                            ",'"name": "Library",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1633",',`
`,"                            ",'"facilitytypeid": "1633",',`
`,"                            ",'"name": "Lido Marketplace",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "141",',`
`,"                            ",'"facilitytypeid": "141",',`
`,"                            ",'"name": "Nightclub",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1187",',`
`,"       ","                     ",'"facilitytypeid": "1187",',`
`,"                            ",'"name": "Tides Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Entertainment",',`
`,"                    ",'"categoryid": "2",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1666",',`
`,"                            ",'"facilitytypeid": "1666",',`
`,"                            ",'"name": "Camp Ocean",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1311",',`
`,"                            ",'"facilitytypeid": "1311",',`
`,"                            ",'"name": "Casino",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1634",',`
`,"                            ",'"facilitytypeid": "1634",',`
`,"                            ",'"name": "Cherry on Top",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "165",',`
`,"                            ",'"facilitytypeid": "165",',`
`,"                            ",`"name": "Children's Club",`,`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "443",',`
`,"                            ",'"facilitytypeid": "443",',`
`,"                            ",'"name": "Dance Club",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "157",',`
`,"                            ",'"facilitytypeid": "157",',`
`,"                            ",'"name": "Dance Floor",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "449",',`
`,"                            ",'"facilitytypeid": "449",',`
`,"                            ",'"name": "Gaming Club Casino",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "946",',`
`,"                            ",'"facilitytypeid": "946",',`
`,"                            ",'"name": "Night Club",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1635",',`
`,"                            ",'"facilitytypeid": "1635",',`
`,"                            ",'"name": "Ocean',"  ",'Plaza",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1668",',`
`,"                            ",'"facilitytypeid": "1668",',`
`,"                            ",'"name": "Ovation Theater",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1276",',`
`,"                            ",'"facilitytypeid": "1276",',`
`,"                            ",'"name": "Royal Theater",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "459",',`
`,"                            ",'"facilitytypeid": "459",',`
`,"                            ",'"name": "Seaside Theatre",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "149",',`
`,"                            ",'"facilitytypeid": "149",',`
`,"                            ",'"name": "Theatre",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",`
`,"            ","],",`
`,"            ",'"hidden": "N",',`
`,"            ",'"id": 1196,',`
`,"            ",'"images": [',`
`,"                ","{",`
`,"                    ",'"caption": "Carnival Breeze",',`
`,"                    ",'"default": "Y",',`
`,"                    ",'"id": "59101",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1595423212.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1595423212.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Suite",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64152",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653728.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608653728.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653728.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Spa",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64155",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653776.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608653776.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653776.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Waterworks",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64165",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654094.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654094.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654094.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Waterworks-1",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64166",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654118.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654118.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654118.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Alchemy Bar 1",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64170",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654364.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654364.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654364.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Alchemy Bar 2",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64173",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654390.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654390.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654390.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Pool",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "65711",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1610368302.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1610368302.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1610368302.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Alchemy Bar 3",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64176",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654406.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654406.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654406.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Serenity 5",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64191",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655132.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655132.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655132.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Serenity 4",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64192",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655166.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655166.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655166.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Camp Ocean 3",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64204",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655412.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655412.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655412.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Seuss At Sea 4",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64207",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655759.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655759.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655759.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Seuss At Sea 3",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64208",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655906.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655906.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655906.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Seuss At Sea 2",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64209",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655923.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655923.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655923.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Lip Sync Battle",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64215",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656183.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656183.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656183.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Blue Iguana Bar 4",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64216",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656217.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656217.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656217.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Redfrog Pub",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64217",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656253.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656253.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656253.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Thrill Theater",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64218",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656482.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656482.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656482.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Thrill Theater",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64219",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656506.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656506.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656506.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "lip",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67775",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190096.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626190096.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190096.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "live music",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67776",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190976.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626190976.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190976.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "atrium-1",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67777",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191313.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191313.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191313.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "blue-iguana-bar",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67778",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191334.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191334.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191334.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "spa-thalassotherapy",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67779",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191344.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191344.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191344.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "mini-golf",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67780",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191365.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191365.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191365.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "piano-bar",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67781",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191378.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191378.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191378.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "pools",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67782",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191381.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191381.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191381.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "skycourse",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67783",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191389.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191389.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191389.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",`
`,"            ","],",`
`,"            ",'"launched": "2011-09-16",',`
`,"            ",'"length": 1004,',`
`,"            ",'"lineid": 8,',`
`,"            ",'"name": "Carnival Breeze",',`
`,"            ",'"niceurl": "carnival-cruise-lines/carnival-breeze",',`
`,"            ",'"occupancy": 3690,',`
`,"            ",'"rating": 5,',`
`,"            ",`"shortdescription": "On Carnival Breeze, fun-fan faves like SportSquare, and mouth-watering dining spots like Cucina del Capitano, are just the beginning of how this ship keeps the fun blazing.\\r\\n\\r\\nSpeaking of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or south-of-the-border taco goodness at BlueIguana Cantina. There’s always family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint — roadside-burger-shack style — featuring hot-off-the-grill burgers designed by celebrity chef Guy Fieri!\\r\\n\\r\\nThere are many fish in the sea, and Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And to go just a little less refined, stop by Pizza Pirate for a hot slice, the Carnival Deli for a true classic, or Guy’s Pig & Anchor Bar-B-Que Smokehouse to get a little messy with some signature — you guessed it — Guy Fieri BBQ. On this ship, you just can’t get enough Guy!\\r\\n\\r\\nCarnival Breeze has the whole family covered — with water, that is — with a 320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And for the bigger people, there’s time to be spent doing blissfully nothing at Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of course.\\r\\n\\r\\nKeep the fun going once the sun’s done for the day — have a truly moving experience at the multi-dimensional Thrill Theater, get your lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist Productions… or if you prefer to do your dancing on a dance floor, check out Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail concoctions made with ingredients a little less ordinary and flavors a lot more interesting.\\r\\n\\r\\nIf you notice a bit of the outdoors inside, don’t adjust your view. Carnival Breeze’s staterooms — and many of the public spaces around the ship — feature a scintillating tropical décor and contemporary furnishings that’ll transport you straight to warm Caribbean bliss.",`,`
`,"            ",'"starrating": 5,',`
`,"            ",'"tonnage": 130000,',`
`,"            ",'"totalcabins": 1845,',`
`,"            ",'"totalcrew": 1386',`
`,"        ","}",`
`,"    ","],",`
`,"    ",'"timing": ',"{",`
`,"        ",'"items": [',`
`,"            ","{",`
`,"                ",'"description": "Initiate Endpoint",',`
`,"                ",'"time": "0.000010"',`
`,"            ","}",",",`
`,"            ","{",`
`,"                ",'"description": "Auth Check Pass",',`
`,"                ",'"time": "0.021485"',`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"total": "0.839460"',`
`,"    ","}",",",`
`,"    ",'"warnings": []',`
`,"}"]})})})})]}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"CachecruiseShipdata.-StoreData",children:"Store Data"}),e.jsx("p",{children:"In order to get the entire data required to hydrate the visual components for consumer to expose the offer per each cruise offer, the proposal flow contemplate:"}),e.jsx("p",{children:e.jsx("strong",{children:"cabins: (object)"})}),e.jsxs("div",{id:"expander-1662626815",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1662626815",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"cabins"})]}),e.jsx("div",{id:"expander-content-1662626815",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:['"cabintypes": [',`
`,"                ","{",`
`,"                    ",'"cabincode": "1A",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "E7D994",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Twin bed and one upper pullman. Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.\\r\\n",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1631711074.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Upper/Lower",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1631711074.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4A",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "00AD86",',`
`,"                    ",'"deckid": 4023,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606848.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606848.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4B",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "FCDEEB",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606970.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606970.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4C",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "FBA61C",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606975.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606975.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4D",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "DF93A3",',`
`,"                    ",'"deckid": 4028,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606980.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606980.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4E",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "C4DF9C",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606985.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606985.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4F",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "B4DFF4",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606989.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606989.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4G",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "EBD201",',`
`,"                    ",'"deckid": 4030,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606995.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606995.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4H",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "9AD3B7",',`
`,"                    ",'"deckid": 4032,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets.\\r\\n\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607000.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607000.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4J",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "B44A6F",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Picture window facing public observation deck.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607065.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Interior Stateroom (Obstructed Views)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607065.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "4S",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "74A534",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. Ample closet space.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\n\\r\\nUnique welcome ritual\\r\\nPriority spa reservations\\r\\nUnlimited use of Thermal Suites and Thalassotherapy Pool\\r\\nComplimentary scrub kit to use in our Thermal Suites\\r\\nTwo complimentary fitness classes (per guest)\\r\\nComplimentary body composition analysis\\r\\nExclusive discounts on treatments during port days\\r\\nCloud 9 Spa bathrobes and slippers\\r\\nUpgraded Elemis in-stateroom toiletries\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607502.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cloud 9 Spa Interior",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607502.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6A",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "F15923",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Desk and seat. Full bathroom with shower. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607299.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607299.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6L",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "F9A980",',`
`,"                    ",'"deckid": 4023,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower plus separate washroom with sink and junior tub. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607342.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Deluxe Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607342.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6M",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "E7B220",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower plus separate washroom with sink and junior tub. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607347.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Deluxe Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607347.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6N",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "A75E4A",',`
`,"                    ",'"deckid": 4023,',`
`,"                    ",'"description": "Two twin beds (convert to king), two upper pullmans and single sofa bed. Privacy curtain. Sofa and coffee table. Desk and seat. Full bathroom with shower plus separate washroom with sink and junior tub. 3 closets. Picture window.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607355.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Deluxe Ocean View Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607355.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "6S",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "7CADBA",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. Ample closet space. Picture window facing public observation deck.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\n\\r\\nAmbulatory Accessible Stateroom: This stateroom is designed for use by guests with mobility limitations, who do not require the regular use of a wheelchair, scooter or other similar assistive devices. For example, it is ideal for guests who only use an assistive device (like a cane or walker) for traversing longer distances, and who may benefit from certain accessible features like grab bars, to assist with balance.\\r\\n\\r\\nUnique welcome ritual\\r\\nPriority spa reservations\\r\\nUnlimited use of Thermal Suites and Thalassotherapy Pool\\r\\nComplimentary scrub kit to use in our Thermal Suites\\r\\nTwo complimentary fitness classes (per guest)\\r\\nComplimentary body composition analysis\\r\\nExclusive discounts on treatments during port days\\r\\nCloud 9 Spa bathrobes and slippers\\r\\nUpgraded Elemis in-stateroom toiletries\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607470.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Spa Ocean View Stateroom (Obstructed View)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607470.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "7C",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "C7B2D6",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private cove balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607514.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cove Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607514.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8A",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "BD55A0",',`
`,"                    ",'"deckid": 4028,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462280.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462280.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8B",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "FFD88F",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Desk and seat. Sofa and coffee table. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462281.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462281.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8C",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "F27180",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462286.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462286.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8D",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "99B463",',`
`,"                    ",'"deckid": 4030,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011796.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011796.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8E",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "DCD3D0",',`
`,"                    ",'"deckid": 4032,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011803.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011803.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8F",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "B07588",',`
`,"                    ",'"deckid": 4032,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1606901923.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1606901923.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8G",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "ED1D30",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462347.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462347.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8M",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "A7A2A9",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private aft-facing extended balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607705.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Aft View Extended Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607705.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8N",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "C47C1E",',`
`,"                    ",'"deckid": 4030,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private aft-facing extended balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607727.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Aft View Extended Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607727.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8P",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "4E88C6",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king), one upper pullman and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. Ample closet space. Private balcony with patio chairs and table.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\n\\r\\nUnique welcome ritual\\r\\nPriority spa reservations\\r\\nUnlimited use of Thermal Suites and Thalassotherapy Pool\\r\\nComplimentary scrub kit to use in our Thermal Suites\\r\\nTwo complimentary fitness classes (per guest)\\r\\nComplimentary body composition analysis\\r\\nExclusive discounts on treatments during port days\\r\\nCloud 9 Spa bathrobes and slippers\\r\\nUpgraded Elemis in-stateroom toiletries\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013087.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cloud 9 Spa Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013087.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "8S",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "CCE3F1",',`
`,"                    ",'"deckid": 4034,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower. Ample closet space. Private balcony with patio chairs and table.\\r\\n\\r\\nUnique welcome ritual.\\r\\nPriority spa reservations.\\r\\nUnlimited use of Thermal Suites and Hydrotherapy Pool.\\r\\nComplimentary scrub kit to use in our Thermal Suites.\\r\\nTwo complimentary fitness classes (per guest).\\r\\nComplimentary body composition analysis.\\r\\nExclusive discounts on treatments during port days.\\r\\nCloud 9 Spa bathrobes and slippers.\\r\\nUpgraded Elemis in-stateroom toiletries.\\r\\nDedicated room steward.\\r\\nSoft, cozy linens (Carnival Comfort Collection).\\r\\nIn-room safe for valuables.\\r\\nPlenty of closet and drawer space.\\r\\nTelevision.\\r\\nStateroom climate control.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013332.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Spa Balcony Stateroom",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013332.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "9C",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "EC037C",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Private wraparound balcony with patio chairs and table.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607775.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Premium Vista Balcony",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607775.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "BL",',`
`,"                    ",'"cabintype": "balcony",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",`"description": "Balcony staterooms were designed for maximum sea breeze and the most stunning views, so look to a balcony if you're looking to cruise aboard Carnival Breeze. Any time you're in your room, you're just steps away from your own personal outdoor oasis, featuring the sort of sea view you can also feel.\\r\\n\\r\\n\\r\\n\\r\\nDedicated room steward\\r\\nCarnival Comfort Collection® linens\\r\\nPlenty of closet and drawer space\\r\\nIn-room safe for valuables\\r\\nTelevision\\r\\nStateroom climate control\\r\\n",`,`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880487.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Balcony Stateroom (Guaranteed)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880487.png",',`
`,"                    ",'"sortweight": 40',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "GS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "DE761B",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/bidet/double sinks. Walk-in dressing area with vanity table, seat and ample closet space. Private large balcony with patio chairs and table.\\r\\n\\r\\nPriority check-in and boarding\\r\\nPriority dinner reservations for select specialty restaurants\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining)\\r\\nPriority debarkation at all ports\\r\\nTwo large bottles of water\\r\\nPillow-top mattresses\\r\\nBathrobes\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607836.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Grand Suite",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607836.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "IS",',`
`,"                    ",'"cabintype": "inside",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",'"description": "This is an affordable way to cruise without leaving out the comfort or convenience! Great for curling up after a long day of fun.\\r\\n\\r\\n\\r\\nDedicated room steward\\r\\nCarnival Comfort Collection® linens\\r\\nPlenty of closet and drawer space\\r\\nIn-room safe for valuables\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358611.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Inside Stateroom (Guaranteed)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358611.png",',`
`,"                    ",'"sortweight": 10',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "JS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "697921",',`
`,"                    ",'"deckid": 4031,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa, armchair and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/double sinks. 2 large closets. Walk-in dressing area with ample closet space. Private standard-size balcony with obstructed view; patio chairs and table.\\r\\n\\r\\nPriority check-in and boarding\\r\\nPriority dinner reservations for select specialty restaurants\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining)\\r\\nPriority debarkation at all ports\\r\\nTwo large bottles of water\\r\\nPillow-top mattresses\\r\\nBathrobes\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608098.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Junior Suite(Obstructed View)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608098.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "OS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "00B1D2",',`
`,"                    ",'"deckid": 4029,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet space. Private large balcony with patio chairs and table.\\r\\n\\r\\nPriority check-in and boarding\\r\\nPriority dinner reservations for select specialty restaurants\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining)\\r\\nPriority debarkation at all ports\\r\\nTwo large bottles of water\\r\\nPillow-top mattresses\\r\\nBathrobes\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608104.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Ocean Suite",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608104.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "OV",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",'"description": "A picture window gives you views of scenery you won’t find anywhere on land, all from the comfort of your stateroom.\\r\\n\\r\\nDedicated room steward\\r\\nCarnival Comfort Collection® linens\\r\\nPlenty of closet and drawer space\\r\\nIn-room safe for valuables\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880549.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Ocean View Stateroom (Guaranteed)",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880549.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "PT",',`
`,"                    ",'"cabintype": "outside",',`
`,"                    ",'"colourcode": "CFA8A5",',`
`,"                    ",'"deckid": 4024,',`
`,"                    ",'"description": "Two twin beds (convert to king). Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets. Two porthole windows.\\r\\n\\r\\nDedicated room steward\\r\\nSoft, cozy linens (Carnival Comfort Collection)\\r\\nIn-room safe for valuables\\r\\nPlenty of closet and drawer space\\r\\nTelevision\\r\\nStateroom climate control\\r\\nBathrobes upon request",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608114.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Porthole",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608114.png",',`
`,"                    ",'"sortweight": 30',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "SS",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "00AAAD",',`
`,"                    ",'"deckid": 4033,',`
`,"                    ",'"description": "Two twin beds (convert to king) and single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet space. Private large balcony with patio chairs and table.\\r\\n\\r\\nExclusive Cloud 9 Spa amenities: Priority spa reservations, free fitness classes, unlimited access to the thermal suites, exclusive discounts on treatments during port days and more.\\r\\nNote: Exclusive amenities apply to 1st and 2nd guests only; 3rd and 4th guests are not entitled to the exclusive amenities.\\r\\n\\r\\nUnique welcome ritual.\\r\\nPriority spa reservations.\\r\\nUnlimited use of Thermal Suites and Hydrotherapy Pool.\\r\\nComplimentary scrub kit to use in our Thermal Suites.\\r\\nTwo complimentary fitness classes (per guest).\\r\\nComplimentary body composition analysis.\\r\\nExclusive discounts on treatments during port days.\\r\\nCloud 9 Spa bathrobes and slippers.\\r\\nUpgraded Elemis in-stateroom toiletries.\\r\\nPriority check-in and boarding.\\r\\nPriority dinner reservations for select specialty restaurants.\\r\\nPriority main dining room time assignment (Early, Late or Your Time Dining).\\r\\nPriority debarkation at all ports.\\r\\nTwo large bottles of water.\\r\\nPillow-top mattresses.\\r\\nDedicated room steward.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608124.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Cloud 9 Spa Suite",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608124.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"cabincode": "ST",',`
`,"                    ",'"cabintype": "suite",',`
`,"                    ",'"colourcode": "",',`
`,"                    ",'"description": "Get all the comforts of home and then some, with absolutely none of the hassles. Since your suite gives you VIP status, you’re the priority when it comes to getting on and off the ship. Plus, you’ll receive a ton of exclusive amenities making this the ultimate way to cruise. Get comfy… stretch out, put your feet up, or just spend time on your balcony — you’ve got one of our most spacious rooms.",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358917.png",',`
`,"                    ",'"isdefault": "N",',`
`,"                    ",'"name": "Suite - Guaranteed",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358917.png",',`
`,"                    ",'"sortweight": 100',`
`,"                ","}",`
`,"            ","]"]})})})})]}),e.jsxs("div",{id:"expander-1938360073",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1938360073",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"decks: (object)"})]}),e.jsx("div",{id:"expander-content-1938360073",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["  ",'"decks": [',`
`,"                ","{",`
`,"                    ",'"caption": "Deck 1",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4023,',`
`,"                    ",'"imageid": 72572,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057897.png",',`
`,"                    ",'"name": "Deck 1 Riviera"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 2",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4024,',`
`,"                    ",'"imageid": 72568,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057879.png",',`
`,"                    ",'"name": "Deck 2 Main"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 3",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4025,',`
`,"                    ",'"imageid": 72567,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057875.png",',`
`,"                    ",'"name": "Deck 3 Lobby"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 4",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4026,',`
`,"                    ",'"imageid": 72569,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057883.png",',`
`,"                    ",'"name": "Deck 4 Mezzanine"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 5",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4027,',`
`,"                    ",'"imageid": 72571,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057890.png",',`
`,"                    ",'"name": "Deck 5 Promenade"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 6",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4028,',`
`,"                    ",'"imageid": 72575,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057918.png",',`
`,"                    ",'"name": "Deck 6 Upper"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 7",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4029,',`
`,"                    ",'"imageid": 72565,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057868.png",',`
`,"                    ",'"name": "Deck 7 Empress"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 8",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4030,',`
`,"                    ",'"imageid": 72576,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057923.png",',`
`,"                    ",'"name": "Deck 8 Verandah"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 9",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4031,',`
`,"                    ",'"imageid": 72577,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057927.png",',`
`,"                    ",'"name": "Deck 9 Vista"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 10",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4032,',`
`,"                    ",'"imageid": 72566,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057872.png",',`
`,"                    ",'"name": "Deck 10 Lido"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 11",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4033,',`
`,"                    ",'"imageid": 72570,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057886.png",',`
`,"                    ",'"name": "Deck 11 Panorama"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 12",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4034,',`
`,"                    ",'"imageid": 72574,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057915.png",',`
`,"                    ",'"name": "Deck 12 Spa"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 14",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4035,',`
`,"                    ",'"imageid": 72564,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057864.png",',`
`,"                    ",'"name": "Deck 14"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Deck 15",',`
`,"                    ",'"description": "",',`
`,"                    ",'"id": 4036,',`
`,"                    ",'"imageid": 72573,',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1655057901.png",',`
`,"                    ",'"name": "Deck 15 Serenity"',`
`,"                ","}",`
`,"            ","]"]})})})})]}),e.jsxs("div",{id:"expander-1344348904",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1344348904",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"description: (string)"})]}),e.jsx("div",{id:"expander-content-1344348904",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsx("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:`"description": "On Carnival Breeze, fun-fan faves like SportSquare, and mouth-watering dining spots like Cucina del Capitano, are just the beginning of how this ship keeps the fun blazing.\\r\\n\\r\\nSpeaking of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or south-of-the-border taco goodness at BlueIguana Cantina. There’s always family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint — roadside-burger-shack style — featuring hot-off-the-grill burgers designed by celebrity chef Guy Fieri!\\r\\n\\r\\nThere are many fish in the sea, and Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And to go just a little less refined, stop by Pizza Pirate for a hot slice, the Carnival Deli for a true classic, or Guy’s Pig & Anchor Bar-B-Que Smokehouse to get a little messy with some signature — you guessed it — Guy Fieri BBQ. On this ship, you just can’t get enough Guy!\\r\\n\\r\\nCarnival Breeze has the whole family covered — with water, that is — with a 320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And for the bigger people, there’s time to be spent doing blissfully nothing at Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of course.\\r\\n\\r\\nKeep the fun going once the sun’s done for the day — have a truly moving experience at the multi-dimensional Thrill Theater, get your lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist Productions… or if you prefer to do your dancing on a dance floor, check out Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail concoctions made with ingredients a little less ordinary and flavors a lot more interesting.\\r\\n\\r\\nIf you notice a bit of the outdoors inside, don’t adjust your view. Carnival Breeze’s staterooms — and many of the public spaces around the ship — feature a scintillating tropical décor and contemporary furnishings that’ll transport you straight to warm Caribbean bliss."`})})})})]}),e.jsxs("div",{id:"expander-1542198829",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1542198829",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"facilities (object)"})]}),e.jsx("div",{id:"expander-content-1542198829",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["  ",'"facilities": [',`
`,"                ","{",`
`,"                    ",'"category": "Food and Drink",',`
`,"                    ",'"categoryid": "1",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "136",',`
`,"                            ",'"facilitytypeid": "136",',`
`,"                            ",'"name": "24-hour Room Service",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1181",',`
`,"                            ",'"facilitytypeid": "1181",',`
`,"                            ",'"name": "Alchemy Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "237",',`
`,"                            ",'"facilitytypeid": "237",',`
`,"                            ",'"name": "Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "267",',`
`,"                            ",'"facilitytypeid": "267",',`
`,"                            ",'"name": "BBQ",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "589",',`
`,"                            ",'"facilitytypeid": "589",',`
`,"                            ",'"name": "Bimini Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1185",',`
`,"                            ",'"facilitytypeid": "1185",',`
`,"                            ",'"name": "BlueIguana Tequila Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1190",',`
`,"                            ",'"facilitytypeid": "1190",',`
`,"                            ",'"name": "Carnival WaterWorks",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1629",',`
`,"                            ",'"facilitytypeid": "1629",',`
`,"                            ",'"name": "Cucina del Capitano",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "194",',`
`,"                            ",'"facilitytypeid": "194",',`
`,"                            ",'"name": "Dining Room",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1649",',`
`,"                            ",'"facilitytypeid": "1649",',`
`,"                            ",'"name": "Fahrenheit 555 Steakhouse",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "674",',`
`,"                            ",'"facilitytypeid": "674",',`
`,"                            ",'"name": "Lanai Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "753",',`
`,"                            ",'"facilitytypeid": "753",',`
`,"                            ",'"name": "Lobby Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "196",',`
`,"                            ",'"facilitytypeid": "196",',`
`,"                            ",'"name": "Piano Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "90",',`
`,"                            ",'"facilitytypeid": "90",',`
`,"                            ",'"name": "Pizzeria",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1184",',`
`,"                            ",'"facilitytypeid": "1184",',`
`,"                            ",'"name": "RedFrog Pub",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1186",',`
`,"                            ",'"facilitytypeid": "1186",',`
`,"                            ",'"name": "RedFrog Rum Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "398",',`
`,"                            ",'"facilitytypeid": "398",',`
`,"                            ",'"name": "Rising Tide Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1669",',`
`,"                            ",'"facilitytypeid": "1669",',`
`,"                            ",'"name": "Sapphire Dining Room",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "115",',`
`,"                            ",'"facilitytypeid": "115",',`
`,"                            ",'"name": "Sports Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1191",',`
`,"                            ",'"facilitytypeid": "1191",',`
`,"                            ",'"name": "Sports Square",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "598",',`
`,"                            ",'"facilitytypeid": "598",',`
`,"                            ",'"name": "Tequila/Tapas Bar",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "1",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1003",',`
`,"                            ",'"facilitytypeid": "1003",',`
`,"                            ",'"name": "The Atrium",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Fitness",',`
`,"                    ",'"categoryid": "4",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "218",',`
`,"                            ",'"facilitytypeid": "218",',`
`,"                            ",'"name": "Fitness Center",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "148",',`
`,"                            ",'"facilitytypeid": "148",',`
`,"                            ",'"name": "Gym",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "177",',`
`,"                            ",'"facilitytypeid": "177",',`
`,"                            ",'"name": "Jogging Track",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "4",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1063",',`
`,"                            ",'"facilitytypeid": "1063",',`
`,"                            ",'"name": "Wellness Centre",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Other",',`
`,"                    ",'"categoryid": "7",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1188",',`
`,"                            ",'"facilitytypeid": "1188",',`
`,"                            ",'"name": "BlueIguana Cantina",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1182",',`
`,"                            ",'"facilitytypeid": "1182",',`
`,"                            ",'"name": "Bonsai Sushi",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1441",',`
`,"                            ",'"facilitytypeid": "1441",',`
`,"                            ",'"name": "Limelight Lounge",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "211",',`
`,"                            ",'"facilitytypeid": "211",',`
`,"                            ",'"name": "Shops",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "7",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1440",',`
`,"                            ",'"facilitytypeid": "1440",',`
`,"                            ",'"name": "The Fun Shops",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Relaxation",',`
`,"                    ",'"categoryid": "3",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1632",',`
`,"                            ",'"facilitytypeid": "1632",',`
`,"                            ",'"name": "Beach Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1437",',`
`,"                            ",'"facilitytypeid": "1437",',`
`,"                            ",'"name": "Cloud 9 Spa",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "188",',`
`,"                            ",'"facilitytypeid": "188",',`
`,"                            ",'"name": "Sauna",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1",',`
`,"                            ",'"facilitytypeid": "1",',`
`,"                            ",'"name": "Spa",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "53",',`
`,"                            ",'"facilitytypeid": "53",',`
`,"                            ",'"name": "Steam Room",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "3",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "462",',`
`,"                            ",'"facilitytypeid": "462",',`
`,"                            ",'"name": "Thalassotherapy Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Technology",',`
`,"                    ",'"categoryid": "6",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "6",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "3",',`
`,"                            ",'"facilitytypeid": "3",',`
`,"                            ",'"name": "Internet Cafe",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "6",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "178",',`
`,"                            ",'"facilitytypeid": "178",',`
`,"                            ",'"name": "Satelite Telephone",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "6",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "189",',`
`,"                            ",'"facilitytypeid": "189",',`
`,"                            ",'"name": "Satelite TV in Cabins",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Recreational",',`
`,"                    ",'"categoryid": "5",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1662",',`
`,"                            ",'"facilitytypeid": "1662",',`
`,"                            ",'"name": "Aft Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "455",',`
`,"                            ",'"facilitytypeid": "455",',`
`,"                            ",'"name": "Camp Carnival",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "64",',`
`,"                            ",'"facilitytypeid": "64",',`
`,"                            ",'"name": "Library",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1633",',`
`,"                            ",'"facilitytypeid": "1633",',`
`,"                            ",'"name": "Lido Marketplace",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "141",',`
`,"                            ",'"facilitytypeid": "141",',`
`,"                            ",'"name": "Nightclub",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "5",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1187",',`
`,"                            ",'"facilitytypeid": "1187",',`
`,"                            ",'"name": "Tides Pool",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"category": "Entertainment",',`
`,"                    ",'"categoryid": "2",',`
`,"                    ",'"item": [',`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1666",',`
`,"                            ",'"facilitytypeid": "1666",',`
`,"                            ",'"name": "Camp Ocean",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1311",',`
`,"                            ",'"facilitytypeid": "1311",',`
`,"                            ",'"name": "Casino",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1634",',`
`,"                            ",'"facilitytypeid": "1634",',`
`,"                            ",'"name": "Cherry on Top",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "165",',`
`,"                            ",'"facilitytypeid": "165",',`
`,"                            ",`"name": "Children's Club",`,`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "443",',`
`,"                            ",'"facilitytypeid": "443",',`
`,"                            ",'"name": "Dance Club",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "157",',`
`,"                            ",'"facilitytypeid": "157",',`
`,"                            ",'"name": "Dance Floor",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "449",',`
`,"                            ",'"facilitytypeid": "449",',`
`,"                            ",'"name": "Gaming Club Casino",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "946",',`
`,"                            ",'"facilitytypeid": "946",',`
`,"                            ",'"name": "Night Club",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1635",',`
`,"                            ",'"facilitytypeid": "1635",',`
`,"                            ",'"name": "Ocean',"  ",'Plaza",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1668",',`
`,"                            ",'"facilitytypeid": "1668",',`
`,"                            ",'"name": "Ovation Theater",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "1276",',`
`,"                            ",'"facilitytypeid": "1276",',`
`,"                            ",'"name": "Royal Theater",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "459",',`
`,"                            ",'"facilitytypeid": "459",',`
`,"                            ",'"name": "Seaside Theatre",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"categoryid": "2",',`
`,"                            ",'"description": null,',`
`,"                            ",'"facilityid": "149",',`
`,"                            ",'"facilitytypeid": "149",',`
`,"                            ",'"name": "Theatre",',`
`,"                            ",'"quantity": null',`
`,"                        ","}",`
`,"                    ","]",`
`,"                ","}",`
`,"            ","]"]})})})})]}),e.jsxs("div",{id:"expander-1001793128",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1001793128",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"images by type (Object)"})]}),e.jsx("div",{id:"expander-content-1001793128",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:['"images": [',`
`,"                ","{",`
`,"                    ",'"caption": "Carnival Breeze",',`
`,"                    ",'"default": "Y",',`
`,"                    ",'"id": "59101",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1595423212.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1595423212.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Suite",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64152",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653728.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608653728.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653728.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Spa",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64155",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653776.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608653776.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653776.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Waterworks",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64165",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654094.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654094.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654094.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Waterworks-1",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64166",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654118.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654118.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654118.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Alchemy Bar 1",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64170",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654364.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654364.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654364.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Alchemy Bar 2",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64173",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654390.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654390.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654390.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Pool",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "65711",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1610368302.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1610368302.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1610368302.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Alchemy Bar 3",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64176",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654406.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608654406.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654406.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Serenity 5",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64191",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655132.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655132.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655132.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Serenity 4",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64192",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655166.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655166.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655166.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Camp Ocean 3",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64204",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655412.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655412.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655412.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Seuss At Sea 4",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64207",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655759.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655759.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655759.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Seuss At Sea 3",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64208",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655906.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655906.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655906.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Seuss At Sea 2",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64209",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655923.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608655923.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655923.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Lip Sync Battle",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64215",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656183.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656183.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656183.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Blue Iguana Bar 4",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64216",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656217.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656217.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656217.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Redfrog Pub",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64217",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656253.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656253.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656253.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Thrill Theater",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64218",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656482.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656482.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656482.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "Thrill Theater",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "64219",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656506.png",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1608656506.png",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656506.png",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "lip",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67775",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190096.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626190096.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190096.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "live music",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67776",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190976.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626190976.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190976.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "atrium-1",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67777",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191313.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191313.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191313.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "blue-iguana-bar",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67778",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191334.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191334.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191334.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "spa-thalassotherapy",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67779",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191344.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191344.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191344.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "mini-golf",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67780",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191365.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191365.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191365.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "piano-bar",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67781",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191378.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191378.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191378.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "pools",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67782",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191381.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191381.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191381.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",",",`
`,"                ","{",`
`,"                    ",'"caption": "skycourse",',`
`,"                    ",'"default": "N",',`
`,"                    ",'"id": "67783",',`
`,"                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191389.jpg",',`
`,"                    ",'"originalimageurl": "https://static.traveltek.net/cruisepics/local_shipimages/1626191389.jpg",',`
`,"                    ",'"ownerid": "system",',`
`,"                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191389.jpg",',`
`,"                    ",'"type": "photo"',`
`,"                ","}",`
`,"            ","]"]})})})})]}),e.jsxs("div",{id:"expander-873941644",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-873941644",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"General Ship Information:"})]}),e.jsx("div",{id:"expander-content-873941644",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:['"launched": "2011-09-16",',`
`,'"length": 1004,',`
`,'"occupancy": 3690,',`
`,`"shortdescription": "On Carnival Breeze, fun-fan faves like SportSquare, and mouth-watering dining spots like Cucina del Capitano, are just the beginning of how this ship keeps the fun blazing.\\r\\n\\r\\nSpeaking of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or south-of-the-border taco goodness at BlueIguana Cantina. There’s always family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint — roadside-burger-shack style — featuring hot-off-the-grill burgers designed by celebrity chef Guy Fieri!\\r\\n\\r\\nThere are many fish in the sea, and Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And to go just a little less refined, stop by Pizza Pirate for a hot slice, the Carnival Deli for a true classic, or Guy’s Pig & Anchor Bar-B-Que Smokehouse to get a little messy with some signature — you guessed it — Guy Fieri BBQ. On this ship, you just can’t get enough Guy!\\r\\n\\r\\nCarnival Breeze has the whole family covered — with water, that is — with a 320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And for the bigger people, there’s time to be spent doing blissfully nothing at Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of course.\\r\\n\\r\\nKeep the fun going once the sun’s done for the day — have a truly moving experience at the multi-dimensional Thrill Theater, get your lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist Productions… or if you prefer to do your dancing on a dance floor, check out Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail concoctions made with ingredients a little less ordinary and flavors a lot more interesting.\\r\\n\\r\\nIf you notice a bit of the outdoors inside, don’t adjust your view. Carnival Breeze’s staterooms — and many of the public spaces around the ship — feature a scintillating tropical décor and contemporary furnishings that’ll transport you straight to warm Caribbean bliss.",`,`
`,'"starrating": 5,',`
`,'"tonnage": 130000,',`
`,'"totalcabins": 1845,',`
`,'"totalcrew": 1386']})})})})]}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"CachecruiseShipdata.-XeniAPI-Cruise",children:"Xeni API - Cruise"}),e.jsx("p",{className:"media-group",children:e.jsx("span",{className:"confluence-embedded-file-wrapper",children:e.jsx("a",{className:"confluence-embedded-file",href:"attachments/607485953/645922839.json","data-nice-type":"null","data-file-src":"/wiki/download/attachments/607485953/xeniAPI_Cruises.json?version=1&modificationDate=1712935526148&cacheVersion=1&api=v2","data-linked-resource-id":645922839,"data-linked-resource-type":"attachment","data-linked-resource-container-id":607485953,"data-linked-resource-default-alias":"xeniAPI_Cruises.json","data-mime-type":"application/json","data-has-thumbnail":"true","data-linked-resource-version":1,"data-media-id":"64beca43-d1b4-4764-9b7c-da1a7f59f278","data-media-type":"file",children:e.jsx("img",{src:"attachments/thumbnails/607485953/645922839",height:250})})})}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{})]}),e.jsxs("div",{className:"pageSection group",children:[e.jsx("div",{className:"pageSectionHeader",children:e.jsx("h2",{id:"attachments",className:"pageSectionTitle",children:"Attachments:"})}),e.jsxs("div",{className:"greybox",align:"left",children:[e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485961.png",children:"image-20240118-110648.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485964.png",children:"image-20240118-105612.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485967.png",children:"image-20240118-105528.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485970.png",children:"image-20240118-105438.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485973.png",children:"image-20240118-105243.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485976.png",children:"XeniOrchestrationCruiseAvailability.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485979.png",children:"image-20240115-111031.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485982.png",children:"availabilityRequestMatch.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/607485985.png",children:"AvailabilityCruiseFlowDiagram.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/607485953/645922839.json",children:"xeniAPI_Cruises.json"})," ","(application/json)",e.jsx("br",{})]})]})]})," "]}),e.jsx("div",{id:"footer",role:"contentinfo",children:e.jsxs("section",{className:"footer-body",children:[e.jsx("p",{children:"Document generated by Confluence on Jun 24, 2024 05:25"}),e.jsx("div",{id:"footer-logo",children:e.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{t as default};
