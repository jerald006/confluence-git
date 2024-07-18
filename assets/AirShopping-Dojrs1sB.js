import{j as n}from"./index-DR-7AHGB.js";function r(){return n.jsxs(n.Fragment,{children:[n.jsx("title",{children:"XeniApp : Air Shopping"}),n.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),n.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),n.jsxs("div",{id:"page",children:[n.jsxs("div",{id:"main",className:"aui-page-panel",children:[n.jsxs("div",{id:"main-header",children:[n.jsx("div",{id:"breadcrumb-section",children:n.jsxs("ol",{id:"breadcrumbs",children:[n.jsx("li",{className:"first",children:n.jsx("span",{children:n.jsx("a",{href:"index.html",children:"XeniApp"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"Xeni-API_600932391.html",children:"Xeni API"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"Flights-API_636911637.html",children:"Flights API"})})})]})}),n.jsx("h1",{id:"title-heading",className:"pagetitle",children:n.jsx("span",{id:"title-text",children:"XeniApp : Air Shopping"})})]}),n.jsxs("div",{id:"content",className:"view",children:[n.jsxs("div",{className:"page-metadata",children:["Created by ",n.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on May 23, 2024"]}),n.jsxs("div",{id:"main-content",className:"wiki-content group",children:[n.jsx("style",{type:"text/css",dangerouslySetInnerHTML:{__html:`/*<![CDATA[*/
div.rbtoc1719206698557 {padding: 0px;}
div.rbtoc1719206698557 ul {list-style: none;margin-left: 0px;}
div.rbtoc1719206698557 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/`}}),n.jsx("div",{className:"toc-macro rbtoc1719206698557",children:n.jsx("ul",{className:"toc-indentation",children:n.jsxs("li",{children:[n.jsx("a",{href:"#AirShopping-Introduction",children:"Introduction"}),n.jsx("ul",{className:"toc-indentation",children:n.jsxs("li",{children:[n.jsx("a",{href:"#AirShopping-Servicestructure",children:"Service structure"}),n.jsxs("ul",{className:"toc-indentation",children:[n.jsx("li",{children:n.jsx("a",{href:"#AirShopping-Requeststructure",children:"Request structure"})}),n.jsx("li",{children:n.jsx("a",{href:"#AirShopping-Response",children:"Response"})})]})]})})]})})}),n.jsx("hr",{}),n.jsx("h1",{id:"AirShopping-Introduction",children:"Introduction"}),n.jsx("p",{children:"The current API proposal is based on the IATA data model, with some extra components of the NDC structure and adapted to the vendors' Data."}),n.jsxs("p",{children:["The introduction of the offer-management concept is the key for handle the shopping cart of different services, having internal identification Keys to resolve the search and invoke the services to book. ",n.jsx("br",{}),n.jsx("br",{}),"Many of the Vendors in the market do not offer a set flight API standard (Each vendor offers their structure). The idea of this proposal is to cover the data required to hydrate our UI and commit to the process of the Airline Industry concepts by a most standardize API, to expose a single service structure based on the basic concepts of the industry."," "]}),n.jsx("hr",{}),n.jsx("h2",{id:"AirShopping-Servicestructure",children:"Service structure"}),n.jsxs("p",{children:["Refer to the process of search flights based on certain parameters to get the list of possible itineraries with the associated prices, ancillaries and ticketing conditions."," "]}),n.jsx("div",{className:"panel",style:{backgroundColor:"#EAE6FF",borderColor:"#998DD9",borderWidth:1},children:n.jsx("div",{className:"panelContent",style:{backgroundColor:"#EAE6FF"},children:n.jsx("p",{children:"Many Airlines in the Market offers the Fare families per Cabin service, but not all the Airlines and CRSs support them. The model should support both."})})}),n.jsx("p",{}),n.jsx("h3",{id:"AirShopping-Requeststructure",children:"Request structure"}),n.jsxs("div",{id:"expander-1250864262",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-1250864262",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Click here to expand..."})]}),n.jsx("div",{id:"expander-content-1250864262",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"  ",'"sellerInformation": ',"{",`
`,"    ",'"pointOfSale": "US",',`
`,"    ",'"party": ',"{",`
`,"      ",'"sender": ',"{",`
`,"        ",'"TravelAgency": ',"{",`
`,"          ",'"agencyID": "09800asdfa098",',`
`,"          ",'"iataNumber": "55-000000-1"',`
`,"        ","}",`
`,"      ","}",`
`,"    ","}",`
`,"  ","}",",",`
`,"  ",'"converationId": "550e8400-e29b-41d4-a716-446655440000",',`
`,"  ",'"originDestinationCriteria": [',`
`,"    ","{",`
`,"      ",'"originDestinationId": "OD1",',`
`,"      ",'"originLocation": ',"{",`
`,"        ",'"locationCode": "MIA"',`
`,"      ","}",",",`
`,"      ",'"destinationLocation": ',"{",`
`,"        ",'"locationCode": "MIA"',`
`,"      ","}",",",`
`,"      ",'"departureDate": "2023-12-20"',`
`,"    ","}",`
`,"  ","],",`
`,"  ",'"passengerList": [',`
`,"    ","{",`
`,"      ",'"code": "ADT",',`
`,"      ",'"quantity": 0',`
`,"    ","}",`
`,"  ","],",`
`,"  ",'"flightPreferences": ',"{",`
`,"    ",'"tripType": "OneWay",',`
`,"    ",'"carrierPreferences": [',`
`,"      ","{",`
`,"        ",'"originDestinationRefId": "OD1",',`
`,"        ",'"preferredCarrierList": [',`
`,"          ","[",`
`,"            ",'"AA",',`
`,"            ",'"UA",',`
`,"            ",'"B6"',`
`,"          ","]",`
`,"        ","],",`
`,"        ",'"excludeCarriers": [',`
`,"          ","[",`
`,"            ",'"F9",',`
`,"            ",'"CO",',`
`,"            ",'"DL"',`
`,"          ","]",`
`,"        ","]",`
`,"      ","}",`
`,"    ","],",`
`,"    ",'"maxStopsQuantity": 0,',`
`,"    ",'"cabinPreferences": "All"',`
`,"  ","}",",",`
`,"  ",'"pricingParameters": ',"{",`
`,"    ",'"currency": "USD",',`
`,"    ",'"fareType": "public",',`
`,"    ",'"fareDiscounts": ',"{",`
`,"      ",'"bulkFare": "BT12341",',`
`,"      ",'"InclusiveTour": "IT125844",',`
`,"      ",'"corporateAccountCode": ',"{",`
`,"        ",'"carrierCode": "LA",',`
`,"        ",'"discountCode": "AD10"',`
`,"      ","}",`
`,"    ","}",`
`,"  ","}",`
`,"}"]})})})})]}),n.jsx("h3",{id:"AirShopping-Response",children:"Response"}),n.jsxs("div",{id:"expander-1545856928",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-1545856928",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Click here to expand..."})]}),n.jsx("div",{id:"expander-content-1545856928",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"  ",'"success": true,',`
`,"  ",'"errors": [',`
`,"    ","{",`
`,"      ",'"code": "string",',`
`,"      ",'"message": "string"',`
`,"    ","}",`
`,"  ","],",`
`,"  ",'"warnings": [',`
`,"    ","{",`
`,"      ",'"code": "string",',`
`,"      ",'"message": "string"',`
`,"    ","}",`
`,"  ","],",`
`,"  ",'"data": ',"{",`
`,"    ",'"shoppingId": "SHP_[UUID]",',`
`,"    ",'"originDestinationOptions": [',`
`,"      ","{",`
`,"        ",'"originDestinationId": "OD1",',`
`,"        ",'"flights": [',`
`,"          ","{",`
`,"            ",'"originDestinationRefId": "OD1",',`
`,"            ",'"flightId": "string",',`
`,"            ",'"airlineName": "American Airlines",',`
`,"            ",'"airlineCode": "AA",',`
`,"            ",'"airlineLogo": "string",',`
`,"            ",'"number": 450,',`
`,"            ",'"departureAirport": "JFK",',`
`,"            ",'"departureAirportName": "string",',`
`,"            ",'"departureDateTime": "2024-01-18T22:00:00",',`
`,"            ",'"arrivalAirport": "BOS",',`
`,"            ",'"arrivalAirportName": "string",',`
`,"            ",'"arrivalDateTime": "2024-01-10T09:00:00",',`
`,"            ",'"flightDuration": "10:23:00",',`
`,"            ",'"stops": [',`
`,"              ","{",`
`,"                ",'"airportCode": "string",',`
`,"                ",'"arrivalDate": "2024-01-10",',`
`,"                ",'"stopDuration": "00:45:00"',`
`,"              ","}",`
`,"            ","],",`
`,"            ",'"marketingCarrierInformation": ',"{",`
`,"              ",'"marketingFlightNumber": "990",',`
`,"              ",'"marketingCarrierCode": "AA",',`
`,"              ",'"marketingCarrierName": "American Airlines"',`
`,"            ","}",",",`
`,"            ",'"operatingCarrierInformation": ',"{",`
`,"              ",'"operatingFlightNumber": "990",',`
`,"              ",'"operatingCarrierCode": "LA",',`
`,"              ",'"operatingCarrierName": "LATAM Airlines",',`
`,"              ",'"operatingCarrierLogo": "string"',`
`,"            ","}",",",`
`,"            ",'"aircraft": "string"',`
`,"          ","}",`
`,"        ","]",`
`,"      ","}",`
`,"    ","],",`
`,"    ",'"journeys": [',`
`,"      ","{",`
`,"        ",'"journeyId": "[JR_[UUID]",',`
`,"        ",'"PriceReferenceId": "[VendorID]_[FareID]",',`
`,"        ",'"segments": [',`
`,"          ","{",`
`,"            ",'"originDestinationRefId": "OD1",',`
`,"            ",'"flightIds": [',`
`,"              ","[",`
`,"                ",'"LA450",',`
`,"                ",'"LA452"',`
`,"              ","]",`
`,"            ","]",`
`,"          ","}",`
`,"        ","],",`
`,"        ",'"bookingInstructions": [',`
`,"          ","{",`
`,"            ",'"originDestinationId": "OD1",',`
`,"            ",'"flightId": "AA901",',`
`,"            ",'"RBD": "M",',`
`,"            ",'"posting": 9',`
`,"          ","}",`
`,"        ","]",`
`,"      ","}",`
`,"    ","],",`
`,"    ",'"pricedItinerariesReference": [',`
`,"      ","{",`
`,"        ",'"priceId": "[UUID =[Vendor FareID]",',`
`,"        ",'"totalPrice": "244.80",',`
`,"        ",'"basePrice": "110",',`
`,"        ",'"pricePerOrigindestination": [',`
`,"          ","{",`
`,"            ",'"originDestinationId": "OD1",',`
`,"            ",'"averageBasePrice": "55",',`
`,"            ",'"averageTaxPrice": "67.40",',`
`,"            ",'"averageMarkupPrice": "7.50"',`
`,"          ","}",`
`,"        ","],",`
`,"        ",'"tax": "134.80",',`
`,"        ",'"markup": [',`
`,"          ","{",`
`,"            ",'"type": "percentage",',`
`,"            ",'"rate": 10',`
`,"          ","}",`
`,"        ","],",`
`,"        ",'"serviceFee": "10.00",',`
`,"        ",'"discounts": [',`
`,"          ","{",`
`,"            ",'"type": "Corporate",',`
`,"            ",'"rate": 10,',`
`,"            ",'"code": "string"',`
`,"          ","}",`
`,"        ","],",`
`,"        ",'"currencyCode": "string",',`
`,"        ",'"baggages": [',`
`,"          ","{",`
`,"            ",'"originDestinationRefId": "OD1",',`
`,"            ",'"flightId": "LA450",',`
`,"            ",'"FreeQuantity": 1,',`
`,"            ",'"passengerTypeCode": "string",',`
`,"            ",'"bagAllowanceType": "piece",',`
`,"            ",'"BagAllowanceUnit": "K"',`
`,"          ","}",`
`,"        ","],",`
`,"        ",'"FareBasisCodes": [',`
`,"          ","{",`
`,"            ",'"originDestinationRefId": "OD1",',`
`,"            ",'"flightId": "LA450",',`
`,"            ",'"fareBasisCode": "string"',`
`,"          ","}",`
`,"        ","],",`
`,"        ",'"ptcBreakdown": [',`
`,"          ","{",`
`,"            ",'"passengerType": [',`
`,"              ",'"ADT"',`
`,"            ","],",`
`,"            ",'"currencyCode": "USD",',`
`,"            ",'"quantity": 1,',`
`,"            ",'"totalPrice": ',"{",`
`,"              ",'"currencyCode": "USD",',`
`,"              ",'"amount": 120',`
`,"            ","}",",",`
`,"            ",'"baseFare": ',"{",`
`,"              ",'"currencyCode": "USD",',`
`,"              ",'"amount": 120',`
`,"            ","}",",",`
`,"            ",'"equivalentFare": ',"{",`
`,"              ",'"currencyCode": "USD",',`
`,"              ",'"amount": 120',`
`,"            ","}",",",`
`,"            ",'"taxDetails": [',`
`,"              ","{",`
`,"                ",'"taxCode": "YQ",',`
`,"                ",'"currencyCode": "USD",',`
`,"                ",'"amount": 120',`
`,"              ","}",`
`,"            ","],",`
`,"            ",'"fareConstruction": "EZE Q20 SCL 120 EZE Q20 120 END NUC 280",',`
`,"            ",'"avgPricePerOriginDestination": [',`
`,"              ","{",`
`,"                ",'"originDestinationRefId": "string",',`
`,"                ",'"averageBasePrice": "string",',`
`,"                ",'"averageTaxPrice": "string"',`
`,"              ","}",`
`,"            ","],",`
`,"            ",'"fareType": "Published",',`
`,"            ",'"provider": "Sabre",',`
`,"            ",'"officeId": "string",',`
`,"            ",'"vendor": "access fare"',`
`,"          ","}",`
`,"        ","],",`
`,"        ",'"fareFamilyId": "ECONOMY_LIGHT"',`
`,"      ","}",`
`,"    ","],",`
`,"    ",'"fareFamilies": [',`
`,"      ","{",`
`,"        ",'"fareFamilyId": "ECONOMY_LIGHT_09809",',`
`,"        ",'"name": "Economy Light",',`
`,"        ",'"owner": "LAt",',`
`,"        ",'"FareFamilyInfos": [',`
`,"          ","{",`
`,"            ",'"code": "O50",',`
`,"            ",'"name": "CHOICE OF STANDARD SEAT",',`
`,"            ",'"group": "SEATS",',`
`,"            ",'"subgroup": "Premium",',`
`,"            ",'"RFIC": "Group Bundle Code",',`
`,"            ",'"type": "included"',`
`,"          ","}",`
`,"        ","]",`
`,"      ","}",`
`,"    ","],",`
`,"    ",'"cheapFlight": ',"{",`
`,"      ",'"journeyReferenceId": [',`
`,"        ",'"LA450LA452_LA450"',`
`,"      ","]",`
`,"    ","}",",",`
`,"    ",'"bestFlight": ',"{",`
`,"      ",'"journeyReferenceId": [',`
`,"        ",'"LA450LA452_LA450"',`
`,"      ","]",`
`,"    ","}",",",`
`,"    ",'"quickFlight": ',"{",`
`,"      ",'"journeyReferenceId": [',`
`,"        ",'"LA450LA452_LA450"',`
`,"      ","]",`
`,"    ","}",`
`,"  ","}",`
`,"}"]})})})})]}),n.jsx("hr",{})]})]})," "]}),n.jsx("div",{id:"footer",role:"contentinfo",children:n.jsxs("section",{className:"footer-body",children:[n.jsx("p",{children:"Document generated by Confluence on Jun 24, 2024 05:24"}),n.jsx("div",{id:"footer-logo",children:n.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{r as default};
