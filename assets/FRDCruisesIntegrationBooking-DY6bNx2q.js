import{j as e}from"./index-Cz61bUsI.js";function s(){return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"XeniApp : FRD - Cruise Integration -Booking - MVP1"}),e.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),e.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),e.jsxs("div",{id:"page",children:[e.jsxs("div",{id:"main",className:"aui-page-panel",children:[e.jsxs("div",{id:"main-header",children:[e.jsx("div",{id:"breadcrumb-section",children:e.jsxs("ol",{id:"breadcrumbs",children:[e.jsx("li",{className:"first",children:e.jsx("span",{children:e.jsx("a",{href:"index.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),e.jsx("li",{children:e.jsx("span",{children:e.jsx("a",{href:"Cruises-Integration_601980932.html",children:"Cruises Integration"})})})]})}),e.jsx("h1",{id:"title-heading",className:"pagetitle",children:e.jsx("span",{id:"title-text",children:"XeniApp : FRD - Cruise Integration -Booking - MVP1"})})]}),e.jsxs("div",{id:"content",className:"view",children:[e.jsxs("div",{className:"page-metadata",children:["Created by ",e.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Feb 12, 2024"]}),e.jsxs("div",{id:"main-content",className:"wiki-content group",children:[e.jsx("style",{type:"text/css",dangerouslySetInnerHTML:{__html:`/*<![CDATA[*/
div.rbtoc1719206766274 {padding: 0px;}
div.rbtoc1719206766274 ul {list-style: none;margin-left: 0px;}
div.rbtoc1719206766274 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/`}}),e.jsx("div",{className:"toc-macro rbtoc1719206766274",children:e.jsx("ul",{className:"toc-indentation",children:e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Functionalobjective",children:"Functional objective"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Context",children:"Context"})}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-ProposalSolution",children:"Proposal Solution"}),e.jsx("ul",{className:"toc-indentation",children:e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Cruisebookingflow",children:"Cruise booking flow"})})})]}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-FunctionalDescription",children:"Functional Description"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Additemtovendorbasket",children:"Add item to vendor basket"})}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-UIComponent:",children:"UI Component:"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Cruise:Details",children:"Cruise: Details"})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Cruise:Pricedetails",children:"Cruise: Price details"})})]})]}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Cruise:DiningOptions",children:"Cruise: Dining Options"}),e.jsx("ul",{className:"toc-indentation",children:e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Cruise:passengerdetails",children:"Cruise: passenger details"})})})]}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-BillingInformation.",children:"Billing Information."})}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Extraservices",children:"Extra services"})})]})]}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-ConfirmationPage",children:"Confirmation Page"}),e.jsx("ul",{className:"toc-indentation",children:e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Matchingcomponents:",children:"Matching components:"})})})]}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-ErrorHandling",children:"Error Handling"}),e.jsxs("ul",{className:"toc-indentation",children:[e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Addbasketitem",children:"Add basket item"})}),e.jsxs("li",{children:[e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Bookingprocess",children:"Booking process"}),e.jsx("ul",{className:"toc-indentation",children:e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-RemoveItemfromBasket:",children:"Remove Item from Basket:"})})})]})]})]}),e.jsx("li",{children:e.jsx("a",{href:"#FRD-CruiseIntegration-Booking-MVP1-Design",children:"Design"})})]})]})})}),e.jsx("h1",{id:"FRD-CruiseIntegration-Booking-MVP1-Functionalobjective",children:"Functional objective"}),e.jsx("p",{children:"Once the user selects the grade type and the selected cabin, it is required to process the booking and payment of the item. For this purpose, the flow should be:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"BasketAdd - The selected identified item should be added to the vendor´s basket"})}),e.jsx("li",{children:e.jsx("p",{children:"Expose a screen for travelers to select the dining details"})}),e.jsx("li",{children:e.jsx("p",{children:"Present to the travelers the personal information form to enter details"})}),e.jsx("li",{children:e.jsx("p",{children:"create the booking on the vendor side with the payment details. (/book.pl)"})}),e.jsx("li",{children:e.jsx("p",{children:"Process the agency markup debit (Xeni payment gateway)."})}),e.jsx("li",{children:e.jsx("p",{children:"Present to the traveler the final screen of the booked detailed item."})}),e.jsx("li",{children:e.jsx("p",{children:"Booking receipt."})})]}),e.jsx("h2",{id:"FRD-CruiseIntegration-Booking-MVP1-Context",children:"Context"}),e.jsx("p",{children:"The user has already selected the cruise item to consume."}),e.jsx("h2",{id:"FRD-CruiseIntegration-Booking-MVP1-ProposalSolution",children:"Proposal Solution"}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-Cruisebookingflow",children:e.jsx("strong",{children:"Cruise booking flow"})}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-left",alt:"CruiseBookingFlow.png",width:867,loading:"lazy",src:"attachments/609976321/610304001.png?width=867","data-image-src":"attachments/609976321/610304001.png","data-height":1112,"data-width":867,"data-unresolved-comment-count":0,"data-linked-resource-id":610304001,"data-linked-resource-version":2,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"CruiseBookingFlow.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":609976321,"data-linked-resource-container-version":12,"data-media-id":"5a24846b-b4d1-4e62-8021-2fef1ad31f3a","data-media-type":"file"})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Booking-MVP1-FunctionalDescription",children:"Functional Description"}),e.jsx("p",{}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-Additemtovendorbasket",children:"Add item to vendor basket"}),e.jsx("p",{children:"The vendor offer an endpoint to add a selected item into the basket with a 14 minutes on Hold (No Deposit, no guarantee) in order to process the payment and confirm the booking."}),e.jsxs("div",{id:"expander-77166805",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-77166805",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"POST: /basketadd.pl"})]}),e.jsx("div",{id:"expander-content-77166805",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'https://fusionapi.traveltek.net/2.1/json/basketadd.pl?requestid=10147191me09e-48c2-90c8-20322bbf185f&sessionkey=C9F4FF82-6A90n42C1-8206-F0CF4E9790E1&resultkey=null&type=cruise&resultno=212_0.1058090091&gradeno=212%3APGO%3A2&cabinresult=212%3APGO%3A2_0&ratecode=PGO&site=xeni.site.traveltek.net&currency=USD&sid=49572' \\",`
`,"--header 'Accept: application/json; charset=utf-8'"]})})})})]}),e.jsx("p",{}),e.jsx("p",{children:e.jsx("strong",{children:"Params:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"requestid"}),": Authorization accessToken"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"sessionkey"}),": The session key started by consumer, returned in the response body of /cruisecabin.pl"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"resultkey"}),": Value returned from /cruisecabingrades.pl"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"type"}),': always "cruise"']})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"resultno"}),": Returned in the response of /cruisecabin.pl"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"gradeno"}),": The selected grade number returned on the /cruisecabin.pl as Criteria."]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"cabinresult"}),": Returned in the selected option from /cruisecabin.pl"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"ratecode"}),": Returned from the selected option of /cruisecabin.pl"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"site"}),": From vault - The Xeni site in the vendor"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"SID"}),": From vault - The SiteId of XENI in the vendor config."]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"currency"}),": The display preferred currency"]})})]}),e.jsx("hr",{}),e.jsxs("p",{children:["The body of the response contains the data to process the booking:",e.jsx("br",{})]}),e.jsxs("div",{id:"expander-1707801357",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1707801357",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"Response"})]}),e.jsx("div",{id:"expander-content-1707801357",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"errors": [],',`
`,"    ",'"meta": ',"{",`
`,"        ",'"criteria": ',"{",`
`,"            ",'"adults": "2",',`
`,"            ",'"children": "0",',`
`,"            ",'"clientcode": "XEN",',`
`,"            ",'"codetocruiseid": 1824281,',`
`,"            ",'"enddate": "2024-02-26",',`
`,"            ",'"infants": "0",',`
`,"            ",'"paxquerystring": "children=0&adults=2&infants=0",',`
`,"            ",'"paxtotal": 2,',`
`,"            ",'"searchno": 1058090091,',`
`,"            ",'"sessionkey": "C9F4FF82-6A90n42C1-8206-F0CF4E9790E1",',`
`,"            ",'"sid": "49572",',`
`,"            ",'"startdate": "2024-02-22",',`
`,"            ",'"type": "basket"',`
`,"        ","}",",",`
`,"        ",'"defaultcurrency": ',"{",`
`,"            ",'"code": "USD",',`
`,"            ",'"symbol": "&dollar;"',`
`,"        ","}",",",`
`,"        ",'"rows": 1',`
`,"    ","}",",",`
`,"    ",'"results": [',`
`,"        ","{",`
`,"            ",'"basketitems": [',`
`,"                ","{",`
`,"                    ",'"cruisedetail": ',"{",`
`,"                        ",'"adults": 2,',`
`,"                        ",'"airbalcony": 0,',`
`,"                        ",'"airbalconypricecode": "",',`
`,"                        ",'"airinside": 0,',`
`,"                        ",'"airinsidepricecode": "",',`
`,"                        ",'"airoutside": 0,',`
`,"                        ",'"airoutsidepricecode": "",',`
`,"                        ",'"airport": "",',`
`,"                        ",'"airsuite": 0,',`
`,"                        ",'"airsuitepricecode": "",',`
`,"                        ",'"altvoyagecode": "",',`
`,"                        ",'"breakdown": [',`
`,"                            ","{",`
`,"                                ",'"category": "fare",',`
`,"                                ",'"commissionable": 1,',`
`,"                                ",'"currency": "USD",',`
`,"                                ",'"description": "Cruise Fare",',`
`,"                                ",'"itemprice": 562,',`
`,"                                ",'"itempricenovat": 562,',`
`,"                                ",'"quantity": 2,',`
`,"                                ",'"scurrency": "USD",',`
`,"                                ",'"sitemprice": 562,',`
`,"                                ",'"sprice": 1124,',`
`,"                                ",'"totalcost": 1124',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"category": "tax",',`
`,"                                ",'"commissionable": 0,',`
`,"                                ",'"currency": "USD",',`
`,"                                ",'"description": "Taxes & Fees",',`
`,"                                ",'"itemprice": 81.62,',`
`,"                                ",'"itempricenovat": 81.62,',`
`,"                                ",'"quantity": 2,',`
`,"                                ",'"scurrency": "USD",',`
`,"                                ",'"sitemprice": 81.62,',`
`,"                                ",'"sprice": 163.24,',`
`,"                                ",'"totalcost": 163.24',`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"cabin": ',"{",`
`,"                            ",'"bathdescription": "Shower",',`
`,"                            ",'"bedconfig": [],',`
`,"                            ",'"cabingrade": "BL",',`
`,"                            ",'"cabinid": 10571,',`
`,"                            ",'"cabinno": "GUAR",',`
`,"                            ",'"deckname": "To Be Assigned",',`
`,"                            ",'"farecode": "PGO",',`
`,"                            ",'"guaranteed": "Y",',`
`,"                            ",'"holdcabin": ',"{",`
`,"                                ",'"holdtime": "2024-01-25 13:40:53",',`
`,"                                ",'"releasetime": "2024-01-25 13:55:43"',`
`,"                            ","}",",",`
`,"                            ",'"location": "TO BE ASSIGNED",',`
`,"                            ",'"maxguests": 4,',`
`,"                            ",'"minguests": 1,',`
`,"                            ",'"modified": 0,',`
`,"                            ",'"name": "Balcony Stateroom (Guaranteed)",',`
`,"                            ",'"position": "",',`
`,"                            ",'"resultno": "212:PGO:2_0",',`
`,"                            ",'"shipside": ""',`
`,"                        ","}",",",`
`,"                        ",'"children": 0,',`
`,"                        ",'"classificationnames": [],',`
`,"                        ",'"classifications": [],',`
`,"                        ",'"codetocruiseid": 1824281,',`
`,"                        ",'"cruisebalcony": 2644,',`
`,"                        ",'"cruisebalconypricecode": "PGO",',`
`,"                        ",'"cruiseid": 255300,',`
`,"                        ",'"cruiseinside": 1904,',`
`,"                        ",'"cruiseinsidepricecode": "PGO",',`
`,"                        ",'"cruiseoutside": 2340,',`
`,"                        ",'"cruiseoutsidepricecode": "PGO",',`
`,"                        ",'"cruisesuite": 6336,',`
`,"                        ",'"cruisesuitepricecode": "PGO",',`
`,"                        ",'"csi": [',`
`,"                            ","{","}",`
`,"                        ","],",`
`,"                        ",'"dining": ',"{",`
`,"                            ",'"seatings": [',`
`,"                                ","{",`
`,"                                    ",'"code": "2",',`
`,"                                    ",'"description": "Late Dining",',`
`,"                                    ",'"status": "available"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"code": "O",',`
`,"                                    ",'"description": "Your Time 5:30-9:00",',`
`,"                                    ",'"status": "available"',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"smoking": "N",',`
`,"                            ",'"tablesizes": [',`
`,"                                ","0,",`
`,"                                ","2,",`
`,"                                ","4,",`
`,"                                ","6,",`
`,"                                ","8,",`
`,"                                ","10",`
`,"                            ","]",`
`,"                        ","}",",",`
`,"                        ",'"displaycruiseonly": "1",',`
`,"                        ",'"enddate": "2024-02-26",',`
`,"                        ",'"extras": ',"{",`
`,"                            ",'"warnings": [',`
`,"                                ",'"No Cruise Extras were found."',`
`,"                            ","]",`
`,"                        ","}",",",`
`,"                        ",'"grossprice": 1124,',`
`,"                        ",'"hascruiseonly": "Y",',`
`,"                        ",'"hasflights": "N",',`
`,"                        ",'"infants": 0,',`
`,"                        ",'"itinerary": [',`
`,"                            ","{",`
`,"                                ",'"arrivedate": "2024-02-22",',`
`,"                                ",'"arrivetime": "",',`
`,"                                ",'"day": 1,',`
`,"                                ",'"departdate": "2024-02-22",',`
`,"                                ",'"departtime": "15:30",',`
`,"                                ",'"extrainfo": "Dock",',`
`,"                                ",'"itinerarydescription": "Set sail from a historic jewel in the Gulf of Mexico on Carnival cruises out of Galveston, Texas. Perched on the Gulf Coast, Galveston was a major commercial port in the late 1800s and has the restored architecture and proud history to show for it. Galveston’s long seawall stretches from beach to beach and offers gulf views the whole way. Sprinkle in a few museums, amusement parks, attractive beaches and tasty seafood restaurants, and you’ve got a great start to your cruise from Galveston.",',`
`,"                                ",'"itineraryname": "Galveston",',`
`,"                                ",'"latitude": "29.2889",',`
`,"                                ",'"longitude": "-94.8382",',`
`,"                                ",'"shortdescription": "",',`
`,"                                ",'"uniqueportid": 382',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"arrivedate": "2024-02-23",',`
`,"                                ",'"arrivetime": "",',`
`,"                                ",'"day": 2,',`
`,"                                ",'"departdate": "2024-02-23",',`
`,"                                ",'"departtime": "",',`
`,"                                ",'"extrainfo": "Fun At Sea",',`
`,"                                ",'"itineraryname": "Fun Day At Sea"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"arrivedate": "2024-02-24",',`
`,"                                ",'"arrivetime": "09:00",',`
`,"                                ",'"day": 3,',`
`,"                                ",'"departdate": "2024-02-24",',`
`,"                                ",'"departtime": "17:00",',`
`,"                                ",'"extrainfo": "Dock",',`
`,"                                ",'"itinerarydescription": "Cozumel is proof that Mexico can do ‘island flavor’ with the best of the Caribbean. It may not be the biggest island in the sea, but Cozumel offers a huge variety of things to do, see, taste and explore. This island just happens to be perched atop a coral reef, which promises hours of snorkeling or scuba diving fun. Cruises to Cozumel dock at the island’s heart — just minutes from San Miguel’s seafront shops and the white sand beach at Chankanaab National Park. Drift among star corals and sea fans on a Cozumel diving excursion or simply kick back on the beach beneath your own palm palapa as the turquoise waves roll in. With non-stop zip line action, ancient discoveries at the nearby Mayan ruins, or time spent with your toes in the sand, a cruise to Cozumel may just top your best vacations list… before you even get home.",',`
`,"                                ",'"itineraryname": "Cozumel",',`
`,"                                ",'"latitude": "20.423",',`
`,"                                ",'"longitude": "-86.9223",',`
`,"                                ",'"shortdescription": "",',`
`,"                                ",'"uniqueportid": 77',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"arrivedate": "2024-02-25",',`
`,"                                ",'"arrivetime": "",',`
`,"                                ",'"day": 4,',`
`,"                                ",'"departdate": "2024-02-25",',`
`,"                                ",'"departtime": "",',`
`,"                                ",'"extrainfo": "Fun At Sea",',`
`,"                                ",'"itineraryname": "Fun Day At Sea"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"arrivedate": "2024-02-26",',`
`,"                                ",'"arrivetime": "08:00",',`
`,"                                ",'"day": 5,',`
`,"                                ",'"departdate": "2024-02-26",',`
`,"                                ",'"departtime": "",',`
`,"                                ",'"extrainfo": "Dock",',`
`,"                                ",'"itinerarydescription": "Set sail from a historic jewel in the Gulf of Mexico on Carnival cruises out of Galveston, Texas. Perched on the Gulf Coast, Galveston was a major commercial port in the late 1800s and has the restored architecture and proud history to show for it. Galveston’s long seawall stretches from beach to beach and offers gulf views the whole way. Sprinkle in a few museums, amusement parks, attractive beaches and tasty seafood restaurants, and you’ve got a great start to your cruise from Galveston.",',`
`,"                                ",'"itineraryname": "Galveston",',`
`,"                                ",'"latitude": "29.2889",',`
`,"                                ",'"longitude": "-94.8382",',`
`,"                                ",'"shortdescription": "",',`
`,"                                ",'"uniqueportid": 382',`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"name": "Western Caribbean From Galveston, TX",',`
`,"                        ",'"nettprice": 1485.24,',`
`,"                        ",'"nights": 4,',`
`,"                        ",'"nofly": "N",',`
`,"                        ",'"ownerid": "system",',`
`,"                        ",'"perperson": [',`
`,"                            ","{",`
`,"                                ",'"category": "fare",',`
`,"                                ",'"description": "Cruise Fare",',`
`,"                                ",'"prices": [',`
`,"                                    ","{",`
`,"                                        ",'"currency": "USD",',`
`,"                                        ",'"currencysymbol": "$",',`
`,"                                        ",'"guestno": 1,',`
`,"                                        ",'"price": 562,',`
`,"                                        ",'"scurrency": "USD",',`
`,"                                        ",'"sprice": 562',`
`,"                                    ","}",",",`
`,"                                    ","{",`
`,"                                        ",'"currency": "USD",',`
`,"                                        ",'"currencysymbol": "$",',`
`,"                                        ",'"guestno": 2,',`
`,"                                        ",'"price": 562,',`
`,"                                        ",'"scurrency": "USD",',`
`,"                                        ",'"sprice": 562',`
`,"                                    ","}",`
`,"                                ","]",`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"category": "tax",',`
`,"                                ",'"description": "Non-Commissionable Fare",',`
`,"                                ",'"prices": [',`
`,"                                    ","{",`
`,"                                        ",'"currency": "USD",',`
`,"                                        ",'"currencysymbol": "$",',`
`,"                                        ",'"guestno": 1,',`
`,"                                        ",'"price": 99,',`
`,"                                        ",'"scurrency": "USD",',`
`,"                                        ",'"sprice": 99',`
`,"                                    ","}",",",`
`,"                                    ","{",`
`,"                                        ",'"currency": "USD",',`
`,"                                        ",'"currencysymbol": "$",',`
`,"                                        ",'"guestno": 2,',`
`,"                                        ",'"price": 99,',`
`,"                                        ",'"scurrency": "USD",',`
`,"                                        ",'"sprice": 99',`
`,"                                    ","}",`
`,"                                ","]",`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"category": "tax",',`
`,"                                ",'"description": "Taxes & Fees",',`
`,"                                ",'"prices": [',`
`,"                                    ","{",`
`,"                                        ",'"currency": "USD",',`
`,"                                        ",'"currencysymbol": "$",',`
`,"                                        ",'"guestno": 1,',`
`,"                                        ",'"price": 81.62,',`
`,"                                        ",'"scurrency": "USD",',`
`,"                                        ",'"sprice": 81.62',`
`,"                                    ","}",",",`
`,"                                    ","{",`
`,"                                        ",'"currency": "USD",',`
`,"                                        ",'"currencysymbol": "$",',`
`,"                                        ",'"guestno": 2,',`
`,"                                        ",'"price": 81.62,',`
`,"                                        ",'"scurrency": "USD",',`
`,"                                        ",'"sprice": 81.62',`
`,"                                    ","}",`
`,"                                ","]",`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"portnames": [',`
`,"                            ",'"Galveston",',`
`,"                            ",'"Cozumel",',`
`,"                            ",'"Galveston"',`
`,"                        ","],",`
`,"                        ",'"price": 1485.24,',`
`,"                        ",'"pricecode": "PGO",',`
`,"                        ",'"regionname": [',`
`,"                            ",'"Caribbean"',`
`,"                        ","],",`
`,"                        ",'"resultiscruiseonly": "Y",',`
`,"                        ",'"resultno": "212_0.1058090091",',`
`,"                        ",'"resultweight": 0,',`
`,"                        ",'"returndate": "2024-02-26",',`
`,"                        ",'"returnuk": "N",',`
`,"                        ",'"roundtrip": "Y",',`
`,"                        ",'"saildate": "2024-02-22",',`
`,"                        ",'"sailnights": 4,',`
`,"                        ",'"scurrency": "USD",',`
`,"                        ",'"seadays": 2,',`
`,"                        ",'"ship": ',"{",`
`,"                            ",'"code": "BR",',`
`,"                            ",'"id": 1196,',`
`,"                            ",'"name": "Carnival Breeze"',`
`,"                        ","}",",",`
`,"                        ",'"soldout": "0",',`
`,"                        ",'"special": "no",',`
`,"                        ",'"specialservices": [',`
`,"                            ","{",`
`,"                                ",'"code": "2",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "WHEELCHAIR ASSISTANCE",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "3",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "COGNITIVE DISABILITIES",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "8",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "CONCENTRATOR",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "B",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "AUTISM",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "D",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "DIABETIC",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "I",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "BLIND",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "J",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "DEAF",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "O",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "ALLERGIES",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "Q",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "PREGNANT LESS 24 FULL WKS",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "R",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "SHARPS CONTAINER",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "S",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "DIALYSIS",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "W",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "WHEELCHAIR",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "X",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "PREG MORETHAN 24 FULL WKS",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "Z",',`
`,"                                ",'"daterequired": 0,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "OXYGEN",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Medical",',`
`,"                                ",'"typecode": "MED"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "F",',`
`,"                                ",'"daterequired": 1,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "ANNIVERSARY",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Occasion",',`
`,"                                ",'"typecode": "OCC"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "E",',`
`,"                                ",'"daterequired": 1,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "BIRTHDAY",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Occasion",',`
`,"                                ",'"typecode": "OCC"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"code": "H",',`
`,"                                ",'"daterequired": 1,',`
`,"                                ",'"guests": [],',`
`,"                                ",'"minguests": null,',`
`,"                                ",'"name": "HONEYMOON",',`
`,"                                ",'"per": "person",',`
`,"                                ",'"type": "Occasion",',`
`,"                                ",'"typecode": "OCC"',`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"sprice": 1485.24,',`
`,"                        ",'"startdate": "2024-02-22",',`
`,"                        ",'"stoplive": 0,',`
`,"                        ",'"uniqueportnames": [',`
`,"                            ",'"Cozumel",',`
`,"                            ",'"Galveston"',`
`,"                        ","]",`
`,"                    ","}",",",`
`,"                    ",'"enginename": "Carnival",',`
`,"                    ",'"itemkey": "1058091922",',`
`,"                    ",'"optionalextras": [',`
`,"                        ","{",`
`,"                            ",'"code": "SS:GRATS",',`
`,"                            ",'"currency": "USD",',`
`,"                            ",'"description": "Pre-Paid Gratuities",',`
`,"                            ",'"group": "Gratuities",',`
`,"                            ",'"price": 128,',`
`,"                            ",'"resultno": "101",',`
`,"                            ",'"showas": "bool",',`
`,"                            ",'"type": "gratuities"',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"code": "SS:XFIAHI",',`
`,"                            ",'"currency": "USD",',`
`,"                            ",'"description": "Pre Cruise Transfer (IAH)",',`
`,"                            ",'"group": "precruisetransfer",',`
`,"                            ",'"price": 115.98,',`
`,"                            ",'"resultno": "102",',`
`,"                            ",'"showas": "bool",',`
`,"                            ",'"type": "Pre Cruise Transfer"',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"code": "SS:XFHOUI",',`
`,"                            ",'"currency": "USD",',`
`,"                            ",'"description": "Pre Cruise Transfer (HOU)",',`
`,"                            ",'"group": "precruisetransfer",',`
`,"                            ",'"price": 81.98,',`
`,"                            ",'"resultno": "103",',`
`,"                            ",'"showas": "bool",',`
`,"                            ",'"type": "Pre Cruise Transfer"',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"code": "SS:XFIAHO",',`
`,"                            ",'"currency": "USD",',`
`,"                            ",'"description": "Post Cruise Transfer (IAH)",',`
`,"                            ",'"group": "postcruisetransfer",',`
`,"                            ",'"price": 115.98,',`
`,"                            ",'"resultno": "104",',`
`,"                            ",'"showas": "bool",',`
`,"                            ",'"type": "Post Cruise Transfer"',`
`,"                        ","}",",",`
`,"                        ","{",`
`,"                            ",'"code": "SS:XFHOUO",',`
`,"                            ",'"currency": "USD",',`
`,"                            ",'"description": "Post Cruise Transfer (HOU)",',`
`,"                            ",'"group": "postcruisetransfer",',`
`,"                            ",'"price": 81.98,',`
`,"                            ",'"resultno": "105",',`
`,"                            ",'"showas": "bool",',`
`,"                            ",'"type": "Post Cruise Transfer"',`
`,"                        ","}",`
`,"                    ","],",`
`,"                    ",'"paymentoption": "online",',`
`,"                    ",'"price": "1485.24",',`
`,"                    ",'"searchno": 1058090091,',`
`,"                    ",'"searchprice": 1904,',`
`,"                    ",'"selectedextras": [],',`
`,"                    ",'"startdate": "2024-02-22T00:00:00",',`
`,"                    ",'"type": "cruise"',`
`,"                ","}",`
`,"            ","],",`
`,"            ",'"itinerarycode": "H7Z2V6",',`
`,"            ",'"totaldeposit": 1485.24,',`
`,"            ",'"totalprice": 1485.24',`
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
`,"                ",'"time": "0.034569"',`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"total": "3.882735"',`
`,"    ","}",",",`
`,"    ",'"warnings": []',`
`,"}"]})})})})]}),e.jsx("p",{}),e.jsx("p",{children:"From the response, it is required to present to the travelers an screen to select the dining options:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"seating: Each object represents an option"})}),e.jsx("li",{children:e.jsx("p",{children:"smoking: Non-smoking "})}),e.jsx("li",{children:e.jsx("p",{children:"tablesize: the size of the table to sitting in the dining option selected."})})]}),e.jsx("hr",{}),e.jsxs("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-UIComponent:",children:["UI Component:",e.jsx("br",{})]}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-center",alt:"image-20240212-120105.png",width:1446,loading:"lazy",src:"attachments/609976321/616235033.png?width=1446","data-image-src":"attachments/609976321/616235033.png","data-height":6816,"data-width":4267,"data-unresolved-comment-count":0,"data-linked-resource-id":616235033,"data-linked-resource-version":1,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"image-20240212-120105.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":609976321,"data-linked-resource-container-version":12,"data-media-id":"1c8ca76b-3ed1-4ea9-bbda-9c52adebaa35","data-media-type":"file"})}),e.jsx("h4",{id:"FRD-CruiseIntegration-Booking-MVP1-Cruise:Details",children:"Cruise: Details"}),e.jsx("p",{children:"From the response of the endpoint POST: /basketadd.pl - There is all the information to build this view:"}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1442,"data-layout":"default","data-local-id":"b1e82343-e00d-4806-afeb-ab5030199003",className:"confluenceTable",children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"224.0px"}}),e.jsx("col",{style:{width:"736.0px"}}),e.jsx("col",{style:{width:"480.0px"}})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Component"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Path"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Comment"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Ship Image"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["Should come from the static data reference or stored from previous pages."," "]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Title name"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n]."name"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The name of the sailing route."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Departure Port:"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].itinerary[0]."itineraryname": "Galveston"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The itinerary object of Day=1 is the departure "})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Date and time"})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:[e.jsxs("code",{children:['POST:/basketadd.response.result[n].itinerary[0]."departdate": "2024-02-22"'," "]}),"+ ",e.jsx("code",{children:'"departtime": "15:30"'})]})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["it is required to convert the date and the time into the next format:",e.jsx("br",{}),e.jsx("code",{children:"Mon 21 Oct, 2023, 11:00 am"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Arrival Port: "})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].itinerary[0]."itineraryname": "Galveston"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The last point of the itinerary. Must be the last day of the itinerary. Ex, Day 4 for a sailing of 4 days/nights."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Date and time"})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:[e.jsxs("code",{children:['POST:/basketadd.response.result[n].itinerary[0]."departdate": "2024-02-22"'," "]}),"+ ",e.jsx("code",{children:'"departtime": "15:30"'})]})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["it is required to convert the date and the time into the next format:",e.jsx("br",{}),e.jsx("code",{children:"Mon 21 Oct, 2023, 11:00 am"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Price per Person"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:"POST:/basketadd.response.result[n].price"})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Is the total price per person."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Region"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:"POST:/basketadd.response.result[n].regionname"})})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["For specific cases could be more than one region, it is required to display the items in the array."," "]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Trip Lenght"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n]."nights": 4'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"THe total nights of the ship."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"cabin Number"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].cabin[n]."cabinno"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"it is possible to get the legend “GUAR” it means guarantee, it is not assigned yet and will be assigned at the time of boarding. Mostly for the cheapest cabins (interior)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"fare"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["Should return from previous or we need to make an extra call to resolve the rateCode."," "]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"ship"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:"POST:/basketadd.response.result[n].ship.name"})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"stateroom type"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].cabin[n]."name"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})})]})]})]})}),e.jsx("h4",{id:"FRD-CruiseIntegration-Booking-MVP1-Cruise:Pricedetails",children:"Cruise: Price details"}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1442,"data-layout":"default","data-local-id":"4f48fc14-af1e-4b3e-b8e5-3b9926296482",className:"confluenceTable",children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"224.0px"}}),e.jsx("col",{style:{width:"736.0px"}}),e.jsx("col",{style:{width:"480.0px"}})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Component"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Path"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Comment"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Booking Timer"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n]."holdcabin"."releasetime": "2024-01-25 13:55:43"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["The current time vs the release time. (15mins) counter. ",e.jsx("br",{}),e.jsx("strong",{children:"It is not extendable. "})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Title name"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n]."name"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The name of the sailing route."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Departure Port:"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].itinerary[0]."itineraryname": "Galveston"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The itinerary object of Day=1 is the departure "})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Date and time"})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:[e.jsxs("code",{children:['POST:/basketadd.response.result[n].itinerary[0]."departdate": "2024-02-22"'," "]}),"+ ",e.jsx("code",{children:'"departtime": "15:30"'})]})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["it is required to convert the date and the time into the next format:",e.jsx("br",{}),e.jsx("code",{children:"Mon 21 Oct, 2023, 11:00 am"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Arrival Port: "})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].itinerary[0]."itineraryname": "Galveston"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The last point of the itinerary. Must be the last day of the itinerary. Ex, Day 4 for a sailing of 4 days/nights."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Date and time"})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:[e.jsxs("code",{children:['POST:/basketadd.response.result[n].itinerary[0]."departdate": "2024-02-22"'," "]}),"+ ",e.jsx("code",{children:'"departtime": "15:30"'})]})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["it is required to convert the date and the time into the next format:",e.jsx("br",{}),e.jsx("code",{children:"Mon 21 Oct, 2023, 11:00 am"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Price per Person"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:"POST:/basketadd.response.result[n].price"})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Is the total price per person."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Region"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:"POST:/basketadd.response.result[n].regionname"})})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["For specific cases could be more than one region, it is required to display the items in the array."," "]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Trip Lenght"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n]."nights": 4'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"THe total nights of the ship."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"cabin Number"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].cabin[n]."cabinno"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"it is possible to get the legend “GUAR” it means guarantee, it is not assigned yet and will be assigned at the time of boarding. Mostly for the cheapest cabins (interior)."})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"fare"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["Should return from previous or we need to make an extra call to resolve the rateCode."," "]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"ship"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:"POST:/basketadd.response.result[n].ship.name"})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"stateroom type"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/basketadd.response.result[n].cabin[n]."name"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})})]})]})]})}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-Cruise:DiningOptions",children:"Cruise: Dining Options"}),e.jsxs("p",{children:["A required step for the user is select the Dinning option. The information is returned in the ",e.jsx("code",{children:"GET: /basketadd.pl"})," response"]}),e.jsx("p",{children:"Example"}),e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:['"dining": ',"{",`
`,"                            ",'"seatings": [',`
`,"                                ","{",`
`,"                                    ",'"code": "2",',`
`,"                                    ",'"description": "Late Dining",',`
`,"                                    ",'"status": "available"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"code": "O",',`
`,"                                    ",'"description": "Your Time 5:30-9:00",',`
`,"                                    ",'"status": "available"',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"smoking": "N",',`
`,"                            ",'"tablesizes": [',`
`,"                                ","0,",`
`,"                                ","2,",`
`,"                                ","4,",`
`,"                                ","6,",`
`,"                                ","8,",`
`,"                                ","10",`
`,"                            ","]",`
`,"                        ","}"]})})}),e.jsx("p",{}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"The seating obj"}),", is the timing option for dining"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"The Tablesize Ob"}),"j. Is the list of seating people to share the table preference."," "]})})]}),e.jsxs("p",{children:["This option needs to be stored to pass in the ",e.jsx("code",{children:"POST: /book.pl"})," request."]}),e.jsx("h4",{id:"FRD-CruiseIntegration-Booking-MVP1-Cruise:passengerdetails",children:"Cruise: passenger details"}),e.jsxs("p",{children:["The form for each passenger. The first passenger is mandatory to send the contact information as “Main passenger” (only adults). For the rest of the passengers are not mandatory to send the information."," "]}),e.jsx("p",{children:"Display also the form to enter the Travelers personal information"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Title"})}),e.jsx("li",{children:e.jsx("p",{children:"First name"})}),e.jsx("li",{children:e.jsx("p",{children:"Last name"})}),e.jsx("li",{children:e.jsx("p",{children:"age"})}),e.jsx("li",{children:e.jsx("p",{children:"Date of birth"})}),e.jsx("li",{children:e.jsx("p",{children:"Nationality"})}),e.jsxs("li",{children:[e.jsx("p",{children:"Contact information (Main Traveler only)"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"country"})}),e.jsx("li",{children:e.jsx("p",{children:"gender"})}),e.jsx("li",{children:e.jsx("p",{children:"address1"})}),e.jsx("li",{children:e.jsx("p",{children:"city"})}),e.jsx("li",{children:e.jsx("p",{children:"county"})}),e.jsx("li",{children:e.jsx("p",{children:"postcode"})}),e.jsx("li",{children:e.jsx("p",{children:"telephone"})}),e.jsx("li",{children:e.jsx("p",{children:"email"})})]})]}),e.jsxs("li",{children:[e.jsx("p",{children:"payment information (Credit Card)"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Card Type: (Check the payment options)"})}),e.jsx("li",{children:e.jsx("p",{children:"Card Number:"})}),e.jsx("li",{children:e.jsx("p",{children:"expiration month: (Integer 1-12)"})}),e.jsx("li",{children:e.jsx("p",{children:"expiration year: (Integer YYYY)"})}),e.jsx("li",{children:e.jsx("p",{children:"CVS (integer 3-4)"})}),e.jsx("li",{children:e.jsx("p",{children:"name on card"})}),e.jsxs("li",{children:[e.jsx("p",{children:"Billing information"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Title"})}),e.jsx("li",{children:e.jsx("p",{children:"firstname"})}),e.jsx("li",{children:e.jsx("p",{children:"lastname"})}),e.jsx("li",{children:e.jsx("p",{children:"address1"})}),e.jsx("li",{children:e.jsx("p",{children:"address2"})}),e.jsx("li",{children:e.jsx("p",{children:"homecity"})}),e.jsx("li",{children:e.jsx("p",{children:"county"})}),e.jsx("li",{children:e.jsx("p",{children:"country"})}),e.jsx("li",{children:e.jsx("p",{children:"postcode"})})]})]})]})]})]}),e.jsx("p",{}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-BillingInformation.",children:"Billing Information."}),e.jsxs("p",{children:["For the MVP1, it will only accept the Standard credit cards and will send the Payment information in the request of booking since the cruise line merchant will be responsible of process the debit."," "]}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-Extraservices",children:"Extra services"}),e.jsx("p",{children:"TBD for the PoC."}),e.jsx("p",{}),e.jsx("p",{children:e.jsx("strong",{children:"Create booking"})}),e.jsx("p",{children:"After collect the travelers personal information and payment data, it is required to send to vendor the method /book.pl using the itemKey in basket."}),e.jsxs("div",{id:"expander-444006600",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-444006600",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"book.pl - request example"})]}),e.jsx("div",{id:"expander-content-444006600",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location --request POST 'https://fusionapi.traveltek.net/2.1/json/book.pl' \\",`
`,"--header 'requestid: 745b652ck7a92-46c6-b132-4015abb3f026' \\",`
`,"--header 'Content-Type: application/json' \\",`
`,"--header 'Accept: application/json; charset=utf-8' \\",`
`,"--data-raw '","{",`
`,"    ",'"sessionkey": "1D7BD28A-249Dl4EA5-A57F-A8D332E682CB",',`
`,"    ",'"sid": "49572",',`
`,"    ",'"depositbooking": 0,',`
`,"    ",'"contact": ',"{",`
`,"        ",'"address1": "1111 Test St",',`
`,"        ",'"city": "City",',`
`,"        ",'"country": "US",',`
`,"        ",'"county": "OR",',`
`,"        ",'"email": "jasonh@test.com",',`
`,"        ",'"firstname": "jas",',`
`,"        ",'"middlename": "",',`
`,"        ",'"lastname": "har",',`
`,"        ",'"postcode": "97123",',`
`,"        ",'"telephone": "5035557777",',`
`,"        ",'"title": "Mr"',`
`,"    ","}",",",`
`,"    ",'"passengers": ',"{",`
`,"        ",'"1": ',"{",`
`,"            ",'"paxno": "1",',`
`,"            ",'"paxtype": "adult",',`
`,"            ",'"travelling": "",',`
`,"            ",'"title": "Mr",',`
`,"            ",'"firstname": "jas",',`
`,"            ",'"middlename": "",',`
`,"            ",'"lastname": "har",',`
`,"            ",'"address": "1111 Test St",',`
`,"            ",'"city": "City",',`
`,"            ",'"county": "OR",',`
`,"            ",'"postcode": "97123",',`
`,"            ",'"country": "US",',`
`,"            ",'"email": "jasonh@test.com",',`
`,"            ",'"telephone": "5035557777",',`
`,"            ",'"gender": "M",',`
`,"            ",'"dob": "1985-11-15",',`
`,"            ",'"age": "35",',`
`,"            ",'"nationality": "US",',`
`,"            ",'"emergencyname": null,',`
`,"            ",'"emergencyemail": null,',`
`,"            ",'"emergencyphone": null,',`
`,"            ",'"specialservices": []',`
`,"        ","}",",",`
`,"        ",'"2": ',"{",`
`,"            ",'"paxno": "2",',`
`,"            ",'"paxtype": "adult",',`
`,"            ",'"travelling": "",',`
`,"            ",'"title": "Mr",',`
`,"            ",'"firstname": "jas",',`
`,"            ",'"middlename": "",',`
`,"            ",'"lastname": "har",',`
`,"            ",'"address": "1111 Test St",',`
`,"            ",'"city": "City",',`
`,"            ",'"county": "OR",',`
`,"            ",'"postcode": "97123",',`
`,"            ",'"country": "US",',`
`,"            ",'"email": "jasonh@test.com",',`
`,"            ",'"telephone": "5035557777",',`
`,"            ",'"gender": "M",',`
`,"            ",'"dob": "1985-11-15",',`
`,"            ",'"age": "35",',`
`,"            ",'"nationality": "US",',`
`,"            ",'"emergencyname": null,',`
`,"            ",'"emergencyemail": null,',`
`,"            ",'"emergencyphone": null,',`
`,"            ",'"specialservices": []',`
`,"        ","}",`
`,"    ","}",",",`
`,"    ",'"allocation": ',"{",`
`,"        ",'"1060793622": ',"{",`
`,"            ",'"dining": ',"{",`
`,"                ",'"seating": "2",',`
`,"                ",'"tablesize": "0",',`
`,"                ",'"smoking": "N"',`
`,"            ","}",`
`,"        ","}",`
`,"    ","}",`
`,"}","'"]})})})})]}),e.jsx("p",{}),e.jsxs("div",{id:"expander-1371877200",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1371877200",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"book.pl - response"})]}),e.jsx("div",{id:"expander-content-1371877200",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"errors": [],',`
`,"    ",'"meta": ',"{",`
`,"        ",'"criteria": ',"{",`
`,"            ",'"sessionkey": "1D7BD28A-249Dl4EA5-A57F-A8D332E682CB",',`
`,"            ",'"sid": "49572"',`
`,"        ","}",",",`
`,"        ",'"defaultcurrency": ',"{","}",`
`,"    ","}",",",`
`,"    ",'"results": [',`
`,"        ","{",`
`,"            ",'"bookingdetails": ',"{",`
`,"                ",'"address1": "1111 Test St",',`
`,"                ",'"bookingid": 12821997,',`
`,"                ",'"bookingitems": [',`
`,"                    ","{",`
`,"                        ",'"convertedsprice": 1125.24,',`
`,"                        ",'"cruisedetail": ',"{",`
`,"                            ",'"airportcode": "CO",',`
`,"                            ",'"breakdown": [',`
`,"                                ","{",`
`,"                                    ",'"category": "fare",',`
`,"                                    ",'"currency": "USD",',`
`,"                                    ",'"description": "Cruise Fare",',`
`,"                                    ",'"itemprice": 382,',`
`,"                                    ",'"itempricenovat": 382,',`
`,"                                    ",'"quantity": 2,',`
`,"                                    ",'"scurrency": "USD",',`
`,"                                    ",'"sitemprice": 382,',`
`,"                                    ",'"sprice": 764,',`
`,"                                    ",'"totalcost": 764',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"category": "tax",',`
`,"                                    ",'"currency": "USD",',`
`,"                                    ",'"description": "Taxes & Fees",',`
`,"                                    ",'"itemprice": 81.62,',`
`,"                                    ",'"itempricenovat": 81.62,',`
`,"                                    ",'"quantity": 2,',`
`,"                                    ",'"scurrency": "USD",',`
`,"                                    ",'"sitemprice": 81.62,',`
`,"                                    ",'"sprice": 163.24,',`
`,"                                    ",'"totalcost": 163.24',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"cabin": ',"{",`
`,"                                ",'"cabincode": "IS",',`
`,"                                ",'"location": "",',`
`,"                                ",'"name": "Inside Stateroom (Guaranteed)",',`
`,"                                ",'"position": "TO BE ASSIGNED"',`
`,"                            ","}",",",`
`,"                            ",'"cabincode": "IS",',`
`,"                            ",'"cabindesc": "This is an affordable way to cruise without leaving out the comfort or convenience! Great for curling up after a long day of fun.\\r\\n\\r\\n\\r\\nDedicated room steward\\r\\nCarnival Comfort Collection® linens\\r\\nPlenty of closet and drawer space\\r\\nIn-room safe for valuables\\r\\nTelevision\\r\\nStateroom climate control",',`
`,"                            ",'"cabinname": "Inside Stateroom (Guaranteed)",',`
`,"                            ",'"cabinno": "GUAR",',`
`,"                            ",'"cabinposition": "TO BE ASSIGNED",',`
`,"                            ",'"codetocruiseid": 1824282,',`
`,"                            ",'"cruisename": "Western Caribbean From Galveston, TX",',`
`,"                            ",'"deckdescription": "To Be Assigned",',`
`,"                            ",'"deckname": "To Be Assigned",',`
`,"                            ",'"enddate": "2024-03-11",',`
`,"                            ",'"id": 3494289,',`
`,"                            ",'"itinerary": [',`
`,"                                ","{",`
`,"                                    ",'"arrivedate": "2024-03-07",',`
`,"                                    ",'"arrivetime": "00:00:00",',`
`,"                                    ",'"day": 1,',`
`,"                                    ",'"departdate": "2024-03-07",',`
`,"                                    ",'"departtime": "15:30:00",',`
`,"                                    ",'"name": "Galveston"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"arrivedate": "2024-03-08",',`
`,"                                    ",'"arrivetime": "00:00:00",',`
`,"                                    ",'"day": 2,',`
`,"                                    ",'"departdate": "2024-03-08",',`
`,"                                    ",'"departtime": "00:00:00",',`
`,"                                    ",'"name": "Fun Day At Sea"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"arrivedate": "2024-03-09",',`
`,"                                    ",'"arrivetime": "09:00:00",',`
`,"                                    ",'"day": 3,',`
`,"                                    ",'"departdate": "2024-03-09",',`
`,"                                    ",'"departtime": "17:00:00",',`
`,"                                    ",'"name": "Cozumel"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"arrivedate": "2024-03-10",',`
`,"                                    ",'"arrivetime": "00:00:00",',`
`,"                                    ",'"day": 4,',`
`,"                                    ",'"departdate": "2024-03-10",',`
`,"                                    ",'"departtime": "00:00:00",',`
`,"                                    ",'"name": "Fun Day At Sea"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"arrivedate": "2024-03-11",',`
`,"                                    ",'"arrivetime": "08:00:00",',`
`,"                                    ",'"day": 5,',`
`,"                                    ",'"departdate": "2024-03-11",',`
`,"                                    ",'"departtime": "00:00:00",',`
`,"                                    ",'"name": "Galveston"',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"linename": "Carnival Cruise Line",',`
`,"                            ",'"modified": "0",',`
`,"                            ",'"nights": 4,',`
`,"                            ",'"onboardcredit": 0,',`
`,"                            ",'"price": 1125.24,',`
`,"                            ",'"pricecode": "PGO",',`
`,"                            ",'"regionname": [',`
`,"                                ",'"Caribbean"',`
`,"                            ","],",`
`,"                            ",'"reservation": "F9WZ03",',`
`,"                            ",'"returndate": "2024-03-11",',`
`,"                            ",'"saildate": "2024-03-07",',`
`,"                            ",'"sailnights": 4,',`
`,"                            ",'"ship": ',"{",`
`,"                                ",'"id": 1196,',`
`,"                                ",'"name": "Carnival Breeze"',`
`,"                            ","}",",",`
`,"                            ",'"shipimages": [',`
`,"                                ","{",`
`,"                                    ",'"caption": "Carnival Breeze",',`
`,"                                    ",'"default": "Y",',`
`,"                                    ",'"id": 59101,',`
`,"                                    ",'"image": "1595423212.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1595423212.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Suite",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64152,',`
`,"                                    ",'"image": "1608653728.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653728.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653728.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Spa",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64155,',`
`,"                                    ",'"image": "1608653776.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653776.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653776.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Waterworks",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64165,',`
`,"                                    ",'"image": "1608654094.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654094.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654094.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Waterworks-1",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64166,',`
`,"                                    ",'"image": "1608654118.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654118.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654118.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Alchemy Bar 1",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64170,',`
`,"                                    ",'"image": "1608654364.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654364.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654364.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Alchemy Bar 2",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64173,',`
`,"                                    ",'"image": "1608654390.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654390.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654390.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Pool",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 65711,',`
`,"                                    ",'"image": "1610368302.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1610368302.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1610368302.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Alchemy Bar 3",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64176,',`
`,"                                    ",'"image": "1608654406.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654406.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654406.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Serenity 5",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64191,',`
`,"                                    ",'"image": "1608655132.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655132.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655132.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Serenity 4",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64192,',`
`,"                                    ",'"image": "1608655166.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655166.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655166.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Camp Ocean 3",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64204,',`
`,"                                    ",'"image": "1608655412.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655412.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655412.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Seuss At Sea 4",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64207,',`
`,"                                    ",'"image": "1608655759.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655759.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655759.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Seuss At Sea 3",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64208,',`
`,"                                    ",'"image": "1608655906.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655906.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655906.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Seuss At Sea 2",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64209,',`
`,"                                    ",'"image": "1608655923.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655923.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655923.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Lip Sync Battle",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64215,',`
`,"                                    ",'"image": "1608656183.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656183.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656183.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Blue Iguana Bar 4",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64216,',`
`,"                                    ",'"image": "1608656217.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656217.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656217.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Redfrog Pub",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64217,',`
`,"                                    ",'"image": "1608656253.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656253.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656253.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Thrill Theater",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64218,',`
`,"                                    ",'"image": "1608656482.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656482.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656482.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Thrill Theater",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 64219,',`
`,"                                    ",'"image": "1608656506.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656506.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656506.png",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 14",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72564,',`
`,"                                    ",'"image": "1655057864.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057864.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057864.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 7",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72565,',`
`,"                                    ",'"image": "1655057868.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057868.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057868.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 10",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72566,',`
`,"                                    ",'"image": "1655057872.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057872.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057872.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 3",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72567,',`
`,"                                    ",'"image": "1655057875.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057875.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057875.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 2",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72568,',`
`,"                                    ",'"image": "1655057879.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057879.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057879.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 4",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72569,',`
`,"                                    ",'"image": "1655057883.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057883.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057883.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 11",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72570,',`
`,"                                    ",'"image": "1655057886.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057886.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057886.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 5",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72571,',`
`,"                                    ",'"image": "1655057890.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057890.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057890.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 1",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72572,',`
`,"                                    ",'"image": "1655057897.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057897.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057897.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 15",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72573,',`
`,"                                    ",'"image": "1655057901.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057901.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057901.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 12",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72574,',`
`,"                                    ",'"image": "1655057915.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057915.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057915.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 6",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72575,',`
`,"                                    ",'"image": "1655057918.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057918.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057918.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 8",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72576,',`
`,"                                    ",'"image": "1655057923.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057923.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057923.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "Deck 9",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 72577,',`
`,"                                    ",'"image": "1655057927.png",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057927.png",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057927.png",',`
`,"                                    ",'"type": "plan"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "lip",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67775,',`
`,"                                    ",'"image": "1626190096.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190096.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190096.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "live music",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67776,',`
`,"                                    ",'"image": "1626190976.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190976.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190976.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "atrium-1",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67777,',`
`,"                                    ",'"image": "1626191313.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191313.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191313.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "blue-iguana-bar",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67778,',`
`,"                                    ",'"image": "1626191334.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191334.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191334.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "spa-thalassotherapy",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67779,',`
`,"                                    ",'"image": "1626191344.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191344.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191344.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "mini-golf",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67780,',`
`,"                                    ",'"image": "1626191365.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191365.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191365.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "piano-bar",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67781,',`
`,"                                    ",'"image": "1626191378.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191378.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191378.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "pools",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67782,',`
`,"                                    ",'"image": "1626191381.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191381.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191381.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"caption": "skycourse",',`
`,"                                    ",'"default": "N",',`
`,"                                    ",'"id": 67783,',`
`,"                                    ",'"image": "1626191389.jpg",',`
`,"                                    ",'"imageurl": "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191389.jpg",',`
`,"                                    ",'"smallimageurl": "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191389.jpg",',`
`,"                                    ",'"type": "photo"',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"shipname": "Carnival Breeze",',`
`,"                            ",'"specialservices": [],',`
`,"                            ",'"sprice": 1125.24,',`
`,"                            ",'"startdate": "2024-03-07",',`
`,"                            ",'"status": "Booked",',`
`,"                            ",'"tablesize": 0,',`
`,"                            ",'"voyagecode": ""',`
`,"                        ","}",",",`
`,"                        ",'"currency": "USD",',`
`,"                        ",'"enddate": "",',`
`,"                        ",'"itemkey": "1060793622",',`
`,"                        ",'"price": 1125.24,',`
`,"                        ",'"scurrency": "USD",',`
`,"                        ",'"sprice": 1125.24,',`
`,"                        ",'"startdate": "",',`
`,"                        ",'"type": "cruise"',`
`,"                    ","}",`
`,"                ","],",`
`,"                ",'"city": "City",',`
`,"                ",'"country": "US",',`
`,"                ",'"county": "OR",',`
`,"                ",'"creditcard": "0",',`
`,"                ",'"datebookedutc": "2024-02-01T11:45:17Z",',`
`,"                ",'"email": "jasonh@test.com",',`
`,"                ",'"enddate": "2024-03-11",',`
`,"                ",'"firstname": "jas",',`
`,"                ",'"grosstotal": 1125.24,',`
`,"                ",'"id": 12821997,',`
`,"                ",'"language": "en",',`
`,"                ",'"lastname": "har",',`
`,"                ",'"middlename": "",',`
`,"                ",'"outstandingbalance": 1125.24,',`
`,"                ",'"ownerid": "xeni.site.traveltek.net",',`
`,"                ",'"passengers": [',`
`,"                    ","{",`
`,"                        ",'"address": "1111 Test St",',`
`,"                        ",'"age": 35,',`
`,"                        ",'"city": "City",',`
`,"                        ",'"country": "US",',`
`,"                        ",'"dob": "1985-11-15",',`
`,"                        ",'"firstname": "jas",',`
`,"                        ",'"gender": "M",',`
`,"                        ",'"lastname": "har",',`
`,"                        ",'"middlename": "",',`
`,"                        ",'"nationality": "US",',`
`,"                        ",'"paxno": 1,',`
`,"                        ",'"paxtype": "adult",',`
`,"                        ",'"postcode": "97123",',`
`,"                        ",'"title": "Mr"',`
`,"                    ","}",",",`
`,"                    ","{",`
`,"                        ",'"address": "1111 Test St",',`
`,"                        ",'"age": 35,',`
`,"                        ",'"city": "City",',`
`,"                        ",'"country": "US",',`
`,"                        ",'"dob": "1985-11-15",',`
`,"                        ",'"emergencyemail": null,',`
`,"                        ",'"emergencyname": null,',`
`,"                        ",'"emergencyphone": null,',`
`,"                        ",'"firstname": "jas",',`
`,"                        ",'"gender": "M",',`
`,"                        ",'"height": null,',`
`,"                        ",'"insuranceassistancecompany": null,',`
`,"                        ",'"insurancecompany": null,',`
`,"                        ",'"insurancepolicynumber": null,',`
`,"                        ",'"insurancetelnumber": null,',`
`,"                        ",'"lastname": "har",',`
`,"                        ",'"mealoption": null,',`
`,"                        ",'"middlename": "",',`
`,"                        ",'"mobile": "5035557777",',`
`,"                        ",'"nationality": "US",',`
`,"                        ",'"nokaddress1": null,',`
`,"                        ",'"nokaddress2": null,',`
`,"                        ",'"nokaddress3": null,',`
`,"                        ",'"nokaddress4": null,',`
`,"                        ",'"nokname": null,',`
`,"                        ",'"nokphone": null,',`
`,"                        ",'"nokrelationship": null,',`
`,"                        ",'"passport": null,',`
`,"                        ",'"passportauthority": null,',`
`,"                        ",'"passportexpiry": null,',`
`,"                        ",'"passportplaceofissue": null,',`
`,"                        ",'"passportstart": null,',`
`,"                        ",'"paxno": 2,',`
`,"                        ",'"paxtype": "adult",',`
`,"                        ",'"placeofbirth": null,',`
`,"                        ",'"postcode": "97123",',`
`,"                        ",'"redress": null,',`
`,"                        ",'"roomno": null,',`
`,"                        ",'"specialservices": "ARRAY(0x7f4cf02359e8)",',`
`,"                        ",'"telephone": "5035557777",',`
`,"                        ",'"title": "Mr",',`
`,"                        ",'"travelling": "",',`
`,"                        ",'"weight": null',`
`,"                    ","}",`
`,"                ","],",`
`,"                ",'"postcode": "97123",',`
`,"                ",'"returndate": "2024-03-11",',`
`,"                ",'"startdate": "2024-03-07",',`
`,"                ",'"telephone": "5035557777",',`
`,"                ",'"title": "Mr",',`
`,"                ",'"totalhandlingfee": 0,',`
`,"                ",'"totalhandlingfeeplustransaction": 0,',`
`,"                ",'"totalprice": 1125.24,',`
`,"                ",'"totaltransactionamount": 0,',`
`,"                ",'"transactiondateutc": "2024-02-01T11:45:22Z",',`
`,"                ",'"transactions": [],',`
`,"                ",'"website": "xeni.site.traveltek.net"',`
`,"            ","}",",",`
`,"            ",'"bookingid": 12821997,',`
`,"            ",'"status": "Booked"',`
`,"        ","}",`
`,"    ","],",`
`,"    ",'"timing": ',"{",`
`,"        ",'"items": [',`
`,"            ","{",`
`,"                ",'"description": "Initiate Endpoint",',`
`,"                ",'"time": "0.000009"',`
`,"            ","}",",",`
`,"            ","{",`
`,"                ",'"description": "Auth Check Pass",',`
`,"                ",'"time": "0.025726"',`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"total": "6.053791"',`
`,"    ","}",",",`
`,"    ",'"warnings": []',`
`,"}"]})})})})]}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Booking-MVP1-ConfirmationPage",children:"Confirmation Page"}),e.jsxs("p",{children:["Pre-condition: When the user select book now, and completes their information, personal and payment details of a selected cruise item. ",e.jsx("br",{}),"And the backend sent the request to the vendor´s endpoint"," ",e.jsx("code",{children:"POST: /book.pl"}),e.jsx("br",{}),"And received a successful HTTP:200 without any error description on the “Errors” object. ",e.jsx("br",{}),e.jsx("br",{}),"It is required to build a confirmation page accordingly to the design:",e.jsx("br",{})]}),e.jsx("span",{className:"confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size",children:e.jsx("img",{className:"confluence-embedded-image image-center",alt:"image-20240212-135411.png",width:1446,loading:"lazy",src:"attachments/609976321/616464388.png?width=1446","data-image-src":"attachments/609976321/616464388.png","data-height":4442,"data-width":3667,"data-unresolved-comment-count":0,"data-linked-resource-id":616464388,"data-linked-resource-version":1,"data-linked-resource-type":"attachment","data-linked-resource-default-alias":"image-20240212-135411.png","data-base-url":"https://xeni-workspace.atlassian.net/wiki","data-linked-resource-content-type":"image/png","data-linked-resource-container-id":609976321,"data-linked-resource-container-version":12,"data-media-id":"685fe6dc-b19c-46bf-832f-b828197f9cb4","data-media-type":"file"})}),e.jsx("hr",{}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-Matchingcomponents:",children:"Matching components:"}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{"data-table-width":1442,"data-layout":"default","data-local-id":"3c201060-8aba-4364-bdb1-3e1589837271",className:"confluenceTable",children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"364.0px"}}),e.jsx("col",{style:{width:"596.0px"}}),e.jsx("col",{style:{width:"480.0px"}})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Component"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Path"})})}),e.jsx("th",{className:"confluenceTh",children:e.jsx("p",{children:e.jsx("strong",{children:"Comment"})})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Booking ID"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/book.pl.response."reservation": "F9WZ03"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"CruiseDetails"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"It is the same of the previous page. (checkOut page)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Price Details"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"It is the same of the previous page (checkOut Page)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Cabin Details.image"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Dinning seating"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"The time selected by the user in previous page"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:"Itinerary Details"})}),e.jsx("td",{className:"confluenceTd",children:e.jsx("p",{children:e.jsx("code",{children:'POST:/book.pl.response."itinerary"'})})}),e.jsx("td",{className:"confluenceTd",children:e.jsxs("p",{children:["For the PoC it should be build over what we received, then when we got the static data we need to define how to enhance it."," "]})})]})]})]})}),e.jsx("p",{}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Booking-MVP1-ErrorHandling",children:"Error Handling"}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-Addbasketitem",children:"Add basket item"}),e.jsx("p",{children:"Display the process error and return user to select a different item to book. "}),e.jsx("h3",{id:"FRD-CruiseIntegration-Booking-MVP1-Bookingprocess",children:"Booking process"}),e.jsx("h4",{id:"FRD-CruiseIntegration-Booking-MVP1-RemoveItemfromBasket:",children:"Remove Item from Basket:"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Params"}),":"]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"requestId"}),": The authentication accessToken"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"sessionkey"}),": Returned value from cabinGrades."]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("strong",{children:"basketKey"}),": The itemkey returned at time of addBasket."]})})]}),e.jsx("p",{}),e.jsxs("div",{id:"expander-2083921534",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-2083921534",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"request example"})]}),e.jsx("div",{id:"expander-content-2083921534",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location --request GET 'https://fusionapi.traveltek.net/2.1/json/basketremove.pl?requestid=cd35c1e7k5195-4d03-ab3e-5b7171b04868&sessionkey=3B5F9C6A-A3D8m41C4-9DD3-3A06B43E1ECE&basketkey=1059969845' \\",`
`,"--header 'Accept: application/json; charset=utf-8'"]})})})})]}),e.jsx("p",{}),e.jsxs("div",{id:"expander-1727927943",className:"expand-container",children:[e.jsxs("div",{id:"expander-control-1727927943",className:"expand-control",children:[e.jsx("span",{className:"expand-control-icon",children:e.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),e.jsx("span",{className:"expand-control-text",children:"response example"})]}),e.jsx("div",{id:"expander-content-1727927943",className:"expand-content",children:e.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:e.jsx("div",{className:"codeContent panelContent pdl",children:e.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"errors": [],',`
`,"    ",'"meta": ',"{",`
`,"        ",'"criteria": ',"{",`
`,"            ",'"sessionkey": "3B5F9C6A-A3D8m41C4-9DD3-3A06B43E1ECE",',`
`,"            ",'"type": "basket"',`
`,"        ","}",",",`
`,"        ",'"defaultcurrency": ',"{",`
`,"            ",'"code": "USD",',`
`,"            ",'"symbol": "&dollar;"',`
`,"        ","}",",",`
`,"        ",'"rows": 1',`
`,"    ","}",",",`
`,"    ",'"results": [',`
`,"        ","{",`
`,"            ",'"basketitems": [],',`
`,"            ",'"itinerarycode": "MSL54S",',`
`,"            ",'"totalprice": 0',`
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
`,"                ",'"time": "0.032146"',`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"total": "0.155262"',`
`,"    ","}",",",`
`,"    ",'"warnings": []',`
`,"}"]})})})})]}),e.jsx("hr",{}),e.jsx("h2",{id:"FRD-CruiseIntegration-Booking-MVP1-Design",children:"Design"}),e.jsxs("p",{children:[e.jsx("a",{className:"external-link","data-card-appearance":"inline",href:"https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=0-1&mode=design&t=hJzrte09wyPjzkeb-0",rel:"nofollow",children:"https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=0-1&mode=design&t=hJzrte09wyPjzkeb-0"})," ","Cruise"]}),e.jsx("p",{}),e.jsx("p",{children:e.jsx("br",{})}),e.jsx("p",{style:{marginLeft:"60.0px"}})]}),e.jsxs("div",{className:"pageSection group",children:[e.jsx("div",{className:"pageSectionHeader",children:e.jsx("h2",{id:"attachments",className:"pageSectionTitle",children:"Attachments:"})}),e.jsxs("div",{className:"greybox",align:"left",children:[e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976330.png",children:"AvailabilityCruiseFlowDiagram.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976333.png",children:"image-20240111-132409.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976336.png",children:"GeoExpediaLocationsProcess.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976339.png",children:"ExpediaProperyIDs_logic.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976342.drawio",children:"ExpediaProperyIDs_logic.drawio"})," ","(binary/octet-stream)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976345.json",children:"RCI - XML 4.0.postman_collection.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976348.png",children:"RCI_B2B_Flow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976351.png",children:"image-20231205-123425.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976354.png",children:"image-20231205-123414.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976357.xls",children:"XML Super Region Codes.xls"})," ","(application/vnd.ms-excel)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976360.xls",children:"XML Prime Region Codes.xls"})," ","(application/vnd.ms-excel)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976363.json",children:"ExpediaTest.postman_environment.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976366.json",children:"EPS Rapid v3.postman_collection.json"})," ","(application/json)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976369.png",children:"AvailabilityFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976372.png",children:"GetStaticDataFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976375.txt",children:"List of Regions.txt"})," (text/plain)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609976378.png",children:"image-20240111-125313.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/609812532.png",children:"BookingFlow_SeqDiagram.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/610304010.png",children:"CruiseBookingFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/610304001.png",children:"CruiseBookingFlow.png"})," (image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/616235033.png",children:"image-20240212-120105.png"})," ","(image/png)",e.jsx("br",{}),e.jsx("img",{src:"images/icons/bullet_blue.gif",height:8,width:8,alt:""}),e.jsx("a",{href:"attachments/609976321/616464388.png",children:"image-20240212-135411.png"})," ","(image/png)",e.jsx("br",{})]})]})]})," "]}),e.jsx("div",{id:"footer",role:"contentinfo",children:e.jsxs("section",{className:"footer-body",children:[e.jsx("p",{children:"Document generated by Confluence on Jun 24, 2024 05:26"}),e.jsx("div",{id:"footer-logo",children:e.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{s as default};
