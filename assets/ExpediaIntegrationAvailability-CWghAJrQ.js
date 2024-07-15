import{j as e}from"./index-KIWeJkvA.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"XeniApp : FRD - Expedia Integration - Availability - MVP1"}),e.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),e.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),e.jsxs("div",{id:"page",children:[e.jsxs("div",{id:"main",className:"aui-page-panel",children:[e.jsxs("div",{id:"main-header",children:[e.jsx("div",{id:"breadcrumb-section",children:e.jsxs("ol",{id:"breadcrumbs",children:[e.jsx("li",{className:"first",children:e.jsx("span",{children:e.jsx("a",{href:"index.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Expedia-Integration_594935911.html",children:"Expedia Integration"})})})]})}),e.jsx("h1",{id:"title-heading",className:"pagetitle",children:e.jsx("span",{id:"title-text",children:"XeniApp : FRD - Expedia Integration - Availability - MVP1"})})]}),e.jsxs("div",{id:"content",className:"view",children:[e.jsxs("div",{className:"page-metadata",children:["Created by ",e.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Jan 16, 2024"]}),e.jsxs("div",{id:"main-content",className:"wiki-content group",children:[e.jsx("style",{type:"text/css",dangerouslySetInnerHTML:{__html:`/*<![CDATA[*/
div.rbtoc1719206674053 {padding: 0px;}
div.rbtoc1719206674053 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1719206674053 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/`}}),e.jsx("div",{className:"toc-macro rbtoc1719206674053",children:e.jsx("ul",{className:"toc-indentation",children:e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-Functionalobjective",children:"Functional objective"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-OptionsAnalysis.",children:"Options Analysis."})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-Prerequisites",children:"Prerequisites"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-ProposalFlow",children:"Proposal Flow"})}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-XeniAPI",children:"Xeni API"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-AvailabilityResponseExample",children:"Availability Response Example"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-HotelDetails",children:"Hotel Details"})})]})]}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-FunctionalRequirements",children:"Functional Requirements"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-Technicalrequirements",children:"Technical requirements"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-Design",children:"Design"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-ExpediaIntegration-Availability-MVP1-Documentation",children:"Documentation"})})]})]})})}),e.jsx("hr",{}),e.jsx("h1",{id:"FRD-ExpediaIntegration-Availability-MVP1-Functionalobjective",children:"Functional objective"}),e.jsx("p",{children:"Offer to Xeni´s consumers more hotel content based on Expedia integration."}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-OptionsAnalysis.",children:"Options Analysis."}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Direct Connection with Current Hotel API"})}),e.jsx("li",{children:e.jsx("p",{children:"Direct Connection with a Wrapper to a New API to explode in future."})})]}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-Prerequisites",children:"Prerequisites"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Expedia API connectivity"})}),e.jsx("li",{children:e.jsx("p",{children:"List of Expedia PropertyIDs."})})]}),e.jsx("hr",{}),e.jsx("p",{}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-ProposalFlow",children:"Proposal Flow"}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-center",width:1294,loading:"lazy",src:"/src/attachments/595132418/594968695.png?width=1294","data-image-src":"attachments/595132418/594968695.png","data-height":516,"data-width":1636,"data-unresolved-comment-count":0,"data-linked-resource-id":594968695,"data-linked-resource-version":3,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"AvailabilityFlow.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":595132418,"data-linked-resource-container-version":11,"data-media-id":"beb73c04-f658-4815-8718-c83436a05c3b","data-media-type":"file"})}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-XeniAPI",children:"Xeni API"}),e.jsx("h3",{id:"FRD-ExpediaIntegration-Availability-MVP1-AvailabilityResponseExample",children:"Availability Response Example"}),e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsx("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence"})})}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("h3",{id:"FRD-ExpediaIntegration-Availability-MVP1-HotelDetails",children:e.jsx("strong",{children:"Hotel Details"})}),e.jsx("p",{children:e.jsx("strong",{children:"Request"})}),e.jsx("div",{className:"panel",style:{backgroundColor:"#EAE6FF",borderColor:"#998DD9",borderWidth:1},children:e.jsx("div",{className:"panelContent",style:{backgroundColor:"#EAE6FF"},children:e.jsx("p",{children:"Expedia Integration must be identified with a new Hotel vendor ID. "})})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-FunctionalRequirements",children:"Functional Requirements"}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1244,"data-layout":"default","data-local-id":"6e911ce1-f96e-490f-ba82-e90a19255f16",className:"confluenceTable",children:[e.jsx("colgroup",{children:e.jsx("col",{})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"numberingColumn confluenceTh"}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Requirement"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"1"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Get Expedia availability"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"2"}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["Create RPC to match the HotelSearch to the expedia endpoint:"," ",e.jsx("code",{children:"/v3/properties/availability"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"3"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Crete the RPC to Match the Expedia Content + Availability response with Xeni HotelSearch response."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"4"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Hotel Detail, UI Hydration"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"numberingColumn confluenceTd",children:"5"}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Built the Hotel Cards and Hotel Detail offer."})})]})]})]})}),e.jsx("p",{}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-Technicalrequirements",children:"Technical requirements"}),e.jsx("p",{children:e.jsx("br",{})}),e.jsxs("div",{id:"expander-2077616106",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-2077616106",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Request example: /v3/properties/availability"})]}),e.jsx("div",{id:"expander-content-2077616106",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location --globoff 'https://test.ean.com/v3/properties/availability?checkin=","{","{","checkin","}","}","&checkout=","{","{","checkout","}","}","&country_code=US&currency=USD&language=en-US&occupancy=2-9%2C4&property_id=100118572&rate_plan_count=1&sales_channel=website&sales_environment=hotel_only&property_id=1000446' \\",`
`,"--header 'Authorization;' \\",`
`,"--header 'Customer-Ip: 5.5.5.5' \\",`
`,"--header 'Accept: application/json' \\",`
`,"--header 'Accept-Encoding: gzip'"]})})})})]}),e.jsx("p",{}),e.jsxs("div",{id:"expander-964683567",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-964683567",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Response example: /v3/properties/availability"})]}),e.jsx("div",{id:"expander-content-964683567",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["[",`
`,"    ","{",`
`,"        ",'"property_id": "1000446",',`
`,"        ",'"status": "available",',`
`,"        ",'"rooms": [',`
`,"            ","{",`
`,"                ",'"id": "322049337",',`
`,"                ",'"room_name": "Standard Room, 2 Queen Beds, Non Smoking, Refrigerator & Microwave",',`
`,"                ",'"rates": [',`
`,"                    ","{",`
`,"                        ",'"id": "390240841",',`
`,"                        ",'"status": "available",',`
`,"                        ",'"available_rooms": 20,',`
`,"                        ",'"refundable": false,',`
`,"                        ",'"member_deal_available": false,',`
`,"                        ",'"sale_scenario": ',"{",`
`,"                            ",'"package": false,',`
`,"                            ",'"member": false,',`
`,"                            ",'"corporate": false,',`
`,"                            ",'"distribution": false',`
`,"                        ","}",",",`
`,"                        ",'"merchant_of_record": "expedia",',`
`,"                        ",'"amenities": ',"{",`
`,"                            ",'"1073742786": ',"{",`
`,"                                ",'"id": "1073742786",',`
`,"                                ",'"name": "Free breakfast"',`
`,"                            ","}",",",`
`,"                            ",'"2109": ',"{",`
`,"                                ",'"id": "2109",',`
`,"                                ",'"name": "Free self parking"',`
`,"                            ","}",",",`
`,"                            ",'"2192": ',"{",`
`,"                                ",'"id": "2192",',`
`,"                                ",'"name": "Free WiFi"',`
`,"                            ","}",`
`,"                        ","}",",",`
`,"                        ",'"links": ',"{",`
`,"                            ",'"payment_options": ',"{",`
`,"                                ",'"method": "GET",',`
`,"                                ",'"href": "/v3/properties/1000446/payment-options?token=REhZAQsABAoHQhMHUlNCF1ELUj1DVhdLBQMES1REClxLQg5cRR8WBlIBSxZdCFRpTQxRWV1TVVcHDAcDH1UBC1IbAwMFUB0NBQcCSAQHBA8LCFMDVldQVh8IVURWUAdWRDtZVWgTVgBXRgBccWBiJH0vdENSQkoRXA5WRGsVVhdKX19db1xXWVMOAlcFAglVFFkABAAVVQ5SB0xQBFQGHwwBAFxQUVUEA1cCURJQQUEVX1wHEGkLEwwBTFAfAB0MFUQHRBdfVlY-XV0OBVBQXF8JWlEVVQJUURkEB1ZWSAsEUQdJV1YGVAIMUFIMUlQAHkdXEUVQUV5GB0UMAhoVUAoUEkcWQkUPXgNDOVtJAEcARQhWAmhbV1NXCV4vcmoneCR5NxJVVQxQE1lNUQFsRAhcVgpWVQELSwdUFAABMQUHQQt1UlcVAyIFVBYNWARVVQdXUlVpFFBXEVdMEB1vAldVB19ta0UDVkRaAglUFFIKBAUOWAxbUVVUVhoHU08DBx5ABERBWlZFOxEQW1BZCV06XAYND1MJUFYAH1ZBEUoDXwVKCGw3JxIHUQFXDVxDTVgHVFYBTlEAFFMNFBVDQkRaXlZEbFlRClAAQ3dcBFVTQkBYCVZdAgFVCAANAV8="',`
`,"                            ","}",`
`,"                        ","}",",",`
`,"                        ",'"bed_groups": ',"{",`
`,"                            ",'"37340": ',"{",`
`,"                                ",'"id": "37340",',`
`,"                                ",'"description": "2 Queen Beds",',`
`,"                                ",'"links": ',"{",`
`,"                                    ",'"price_check": ',"{",`
`,"                                        ",'"method": "GET",',`
`,"                                        ",'"href": "/v3/properties/1000446/rooms/322049337/rates/390240841?token=F~Oj46Zz8xJDEdYQQMGWNjVzowZlg6C1ILUksJCBgFVHpsA1YBARRUUhlVAC43M2Bya0FRUgAAUgIIX08MC1NUHwAABAEbUQAHUk8NUQYNV1IPAQMDB1M_FghTVVNTAV5cHQAHBFJMBwBcVklZVQsHTAtVA1BQAwoGC1RWVVZgBVUJAAAKQjEGVA4IHGME6zEyCfM4NFEPUgxRr2A-BkYyR1BQXEUkUAZHl2AAPU8RQEsRVRNYQGcXBlRaIABVFx8bQF4YUkYMG2kUUVxdFkoXSExRDEFRRUpBDgZNOYA1ZwFRqDNiVlYIT1UIgzA1jTBnyDU57DUypGE1_jdkxjVnkmdADVJVBANWUlEcVQMAAxhVAVJbSA8EXQEfVVAHDgtdVlNVUAFWgmArUwgLB0gCAkwAC2NVVAkIUgxTCB8AXAQGUwwFUVNqimEyEwvNctxZ"',`
`,"                                    ","}",`
`,"                                ","}",",",`
`,"                                ",'"configuration": [',`
`,"                                    ","{",`
`,"                                        ",'"type": "QueenBed",',`
`,"                                        ",'"size": "Queen",',`
`,"                                        ",'"quantity": 2',`
`,"                                    ","}",`
`,"                                ","]",`
`,"                            ","}",`
`,"                        ","}",",",`
`,"                        ",'"cancel_penalties": [',`
`,"                            ","{",`
`,"                                ",'"start": "2023-01-17T16:00:00.000-05:00",',`
`,"                                ",'"end": "2024-01-17T17:00:00.000-05:00",',`
`,"                                ",'"percent": "100%",',`
`,"                                ",'"currency": "USD"',`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"occupancy_pricing": ',"{",`
`,"                            ",'"2-9,4": ',"{",`
`,"                                ",'"nightly": [',`
`,"                                    ","[",`
`,"                                        ","{",`
`,"                                            ",'"type": "tax_and_service_fee",',`
`,"                                            ",'"value": "24.81",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"type": "base_rate",',`
`,"                                            ",'"value": "144.49",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ","[",`
`,"                                        ","{",`
`,"                                            ",'"type": "tax_and_service_fee",',`
`,"                                            ",'"value": "24.81",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"type": "base_rate",',`
`,"                                            ",'"value": "144.49",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",`
`,"                                    ","]",`
`,"                                ","],",`
`,"                                ",'"totals": ',"{",`
`,"                                    ",'"exclusive": ',"{",`
`,"                                        ",'"billable_currency": ',"{",`
`,"                                            ",'"value": "288.98",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",",",`
`,"                                        ",'"request_currency": ',"{",`
`,"                                            ",'"value": "288.98",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",`
`,"                                    ","}",",",`
`,"                                    ",'"inclusive": ',"{",`
`,"                                        ",'"billable_currency": ',"{",`
`,"                                            ",'"value": "338.60",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",",",`
`,"                                        ",'"request_currency": ',"{",`
`,"                                            ",'"value": "338.60",',`
`,"                                            ",'"currency": "USD"',`
`,"                                        ","}",`
`,"                                    ","}",`
`,"                                ","}",`
`,"                            ","}",`
`,"                        ","}",`
`,"                    ","}",`
`,"                ","]",`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"links": ',"{",`
`,"            ",'"additional_rates": ',"{",`
`,"                ",'"method": "GET",',`
`,"                ",'"href": "/v3/properties/1000446/availability?token=REhZAQsABAoHQhIKW0ZADFYCahJRTQoENTJ4d3F1L3codEBBUF8BEUYNVwNrFVxDSwZQWRZUEwhVFBFcXRYQQFFQUkFEWl5SaBZdAQkNBwAOBwBQA0lWBQADHQIFCwUVCFZTBRpRAAYBB10HAloBVF1ARgxFUmYRShNWC0AUUgBQQllcXlRfO1VKCRVHBEIVVgJaRBJZD1sYCFMfDUNRcQETURAVQQ1ZUBNuFVFAR1sOXm4LBgsGVVUBUwYIUx4BCgIAGlAACgpMVgkBUUsMDQsJVFEPAQVVBwMWF1NYAEA6AVoFCwtVDV5PBlNHDEUGHkddF0RaWw1rD1FYVwEDXQNdDFBOVgRUUksFBVBbSA0AAlQVVwQADVYGVgBaAF0HFgBPAFhHQwtaDwUfWARdVxRQVFJZAF0VM2VAS1BNAGtZFExdDQ0NFhBfEEpXBAkXA0MPBUhAWlxIQktZFgFvEVRQDD1bVxYIQwkBUwRCQVAOBBU6VAwQChcJDFpSDBYPWFdEAFpqW11bHUcFUVhVF1kRUAZvTQtUA1sLCQcHTglUHFcLYQhVRgclCVARVXIDCEsMXVQFVFUAClJuFABfXkBTRQ4QUF9AWRZGHGtXDlJdDGBmEgEEQlABDQYTWw5dUw9fXQpTA1EMGVRQGQkFR0kHRxFfUks6QxFcUF0KVjtQUg0FAQUFVA4eBRdGE1VdWhgEZDF8R1UARwpXQA8NVWpWWgQIWwdYCFEXBVxWV1kORUVfUAZQVxwEU0gADBV6W1IBXBdDVAVQBgoGAlAECgAJ"',`
`,"            ","}",",",`
`,"            ",'"recommendations": ',"{",`
`,"                ",'"method": "GET",',`
`,"                ",'"href": "/v3/properties/availability?token=REhZAQsABAoHQhIKW0ZADFYCahJRTQoENTJ4d3F1L3codEBBUF8BEUYNVwNrFVxDSwZQWRZUEwhVFBFcXRYQQFFQUkFEWl5SaBZdAQkNBwAOBwBQA0lWBQADHQIFCwUVCFZTBRpRAAYBB10HAloBVF1ARgxFUmYRShNWC0AUUgBQQllcXlRfO1VKCRVHBEIVVgJaRBJZD1sYCFMfDUNRcQETURAVQQ1ZUBNuFVFAR1sOXm4LBgsGVVUBUwYIUx4BCgIAGlAACgpMVgkBUUsMDQsJVFEPAQVVBwMWF1NYAEA6AVoFCwtVDV5PBlNHDEUGHkddF0RaWw1rD1FYVwEDXQNdDFBOVgRUUksFBVBbSA0AAlQVVwQADVYGVgBaAF0HFglWDVNHUQVQXF1XGTBgFhNQR1I7CkNMD1kIBBdKCkFEB10JEAJAWQcdFlBbERIXA0cDPhVfU11nB1ZNDBANUB5CAw5dSzwDWUJaFFsKX1QMFVsNXhYDDzoJDFtORAVXXl1CBEJQUGxDDQwHCQQAVwtIBFAdCFptV1ccCnQEVx1VcFMCGwBdUwRTDVUHVmkQXwxZEAFHXkdSVhdaRhRPbVdZU1YLZmMTUgNEDFAJURBbWVBWXw0LDwtVAgIYCFcVAVMQQ1YTRw1dRjsRRldUCFUDagxVCg9UA1UDDxIFRhZLU15QSQhmN3MeCwNGClVHUA9ebgFQAFYPUA0PBEAAWlBWWQoTQV8GBVMFSwQCGQNYFkMHBFMQBl9XBzpBR1xJVkUWTjtfXQVQBAkDAFIDH3pYB1ZTQkYOCQYEVQsEXAJSVgc="',`
`,"            ","}",`
`,"        ","}",",",`
`,"        ",'"score": 240',`
`,"    ","}",`
`,"]"]})})})})]}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-Design",children:"Design"}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-ExpediaIntegration-Availability-MVP1-Documentation",children:"Documentation"}),e.jsx("p",{children:e.jsx("br",{})}),e.jsx("p",{style:{marginLeft:"60.0px"}})]}),e.jsxs("div",{className:"pageSection group",children:[e.jsx("div",{className:"pageSectionHeader",children:e.jsx("h2",{id:"attachments",className:"pageSectionTitle",children:"Attachments:"})}),e.jsxs("div",{className:"greybox",align:"left",children:[e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/595132425.json",children:"RCI - XML 4.0.postman_collection.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/595132428.png",children:"RCI_B2B_Flow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/595132431.png",children:"image-20231205-123425.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/595132434.png",children:"image-20231205-123414.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/595132437.xls",children:"XML Super Region Codes.xls"})," ","(application/vnd.ms-excel)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/595132440.xls",children:"XML Prime Region Codes.xls"})," ","(application/vnd.ms-excel)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/594935966.json",children:"ExpediaTest.postman_environment.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/594968679.json",children:"EPS Rapid v3.postman_collection.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/594804824.json",children:"EPS Rapid v3.postman_collection.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/594804839.png",children:"AvailabilityFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/595197991.png",children:"AvailabilityFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"/src/attachments/595132418/594968695.png",children:"AvailabilityFlow.png"})," (image/png)",e.jsx("br",{})]})]})]})," "]}),e.jsx("div",{id:"footer",role:"contentinfo",children:e.jsxs("section",{className:"footer-body",children:[e.jsx("p",{children:"Document generated by Confluence on Jun 24, 2024 05:24"}),e.jsx("div",{id:"footer-logo",children:e.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{i as default};
