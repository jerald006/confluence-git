import React from 'react'

function AirShopping() {
  return (
    <>
  <title>XeniApp : Air Shopping</title>
  <link rel="stylesheet" href="styles/site.css" type="text/css" />
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <div id="page">
    <div id="main" className="aui-page-panel">
      <div id="main-header">
        <div id="breadcrumb-section">
          <ol id="breadcrumbs">
            <li className="first">
              <span>
                <a href="index.html">XeniApp</a>
              </span>
            </li>
            <li>
              <span>
                <a href="XeniApp_542179373.html">XeniApp</a>
              </span>
            </li>
            <li>
              <span>
                <a href="Projects_583761921.html">Projects</a>
              </span>
            </li>
            <li>
              <span>
                <a href="Xeni-API_600932391.html">Xeni API</a>
              </span>
            </li>
            <li>
              <span>
                <a href="Flights-API_636911637.html">Flights API</a>
              </span>
            </li>
          </ol>
        </div>
        <h1 id="title-heading" className="pagetitle">
          <span id="title-text">XeniApp : Air Shopping</span>
        </h1>
      </div>
      <div id="content" className="view">
        <div className="page-metadata">
          Created by <span className="author"> Gerardo Nizetich</span>, last
          modified on May 23, 2024
        </div>
        <div id="main-content" className="wiki-content group">
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "/*<![CDATA[*/\ndiv.rbtoc1719206698557 {padding: 0px;}\ndiv.rbtoc1719206698557 ul {list-style: none;margin-left: 0px;}\ndiv.rbtoc1719206698557 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/"
            }}
          />
          <div className="toc-macro rbtoc1719206698557">
            <ul className="toc-indentation">
              <li>
                <a href="#AirShopping-Introduction">Introduction</a>
                <ul className="toc-indentation">
                  <li>
                    <a href="#AirShopping-Servicestructure">
                      Service structure
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#AirShopping-Requeststructure">
                          Request structure
                        </a>
                      </li>
                      <li>
                        <a href="#AirShopping-Response">Response</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr />
          <h1 id="AirShopping-Introduction">Introduction</h1>
          <p>
            The current API proposal is based on the IATA data model, with some
            extra components of the NDC structure and adapted to the vendors'
            Data.
          </p>
          <p>
            The introduction of the offer-management concept is the key for
            handle the shopping cart of different services, having internal
            identification Keys to resolve the search and invoke the services to
            book. <br />
            <br />
            Many of the Vendors in the market do not offer a set flight API
            standard (Each vendor offers their structure). The idea of this
            proposal is to cover the data required to hydrate our UI and commit
            to the process of the Airline Industry concepts by a most
            standardize API, to expose a single service structure based on the
            basic concepts of the industry.{" "}
          </p>
          <hr />
          <h2 id="AirShopping-Servicestructure">Service structure</h2>
          <p>
            Refer to the process of search flights based on certain parameters
            to get the list of possible itineraries with the associated prices,
            ancillaries and ticketing conditions.{" "}
          </p>
          <div
            className="panel"
            style={{
              backgroundColor: "#EAE6FF",
              borderColor: "#998DD9",
              borderWidth: 1
            }}
          >
            <div
              className="panelContent"
              style={{ backgroundColor: "#EAE6FF" }}
            >
              <p>
                Many Airlines in the Market offers the Fare families per Cabin
                service, but not all the Airlines and CRSs support them. The
                model should support both.
              </p>
            </div>
          </div>
          <p />
          <h3 id="AirShopping-Requeststructure">Request structure</h3>
          <div id="expander-1250864262" className="expand-container">
            <div id="expander-control-1250864262" className="expand-control">
              <span className="expand-control-icon">
                <img
                  style={{ verticalAlign: "middle" }}
                  className="expand-control-image"
                  src="images/icons/grey_arrow_down.png"
                />
              </span>
              <span className="expand-control-text">
                Click here to expand...
              </span>
            </div>
            <div id="expander-content-1250864262" className="expand-content">
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    {"{"}
                    {"\n"}
                    {"  "}"sellerInformation": {"{"}
                    {"\n"}
                    {"    "}"pointOfSale": "US",{"\n"}
                    {"    "}"party": {"{"}
                    {"\n"}
                    {"      "}"sender": {"{"}
                    {"\n"}
                    {"        "}"TravelAgency": {"{"}
                    {"\n"}
                    {"          "}"agencyID": "09800asdfa098",{"\n"}
                    {"          "}"iataNumber": "55-000000-1"{"\n"}
                    {"        "}
                    {"}"}
                    {"\n"}
                    {"      "}
                    {"}"}
                    {"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"  "}
                    {"}"},{"\n"}
                    {"  "}"converationId":
                    "550e8400-e29b-41d4-a716-446655440000",{"\n"}
                    {"  "}"originDestinationCriteria": [{"\n"}
                    {"    "}
                    {"{"}
                    {"\n"}
                    {"      "}"originDestinationId": "OD1",{"\n"}
                    {"      "}"originLocation": {"{"}
                    {"\n"}
                    {"        "}"locationCode": "MIA"{"\n"}
                    {"      "}
                    {"}"},{"\n"}
                    {"      "}"destinationLocation": {"{"}
                    {"\n"}
                    {"        "}"locationCode": "MIA"{"\n"}
                    {"      "}
                    {"}"},{"\n"}
                    {"      "}"departureDate": "2023-12-20"{"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"  "}],{"\n"}
                    {"  "}"passengerList": [{"\n"}
                    {"    "}
                    {"{"}
                    {"\n"}
                    {"      "}"code": "ADT",{"\n"}
                    {"      "}"quantity": 0{"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"  "}],{"\n"}
                    {"  "}"flightPreferences": {"{"}
                    {"\n"}
                    {"    "}"tripType": "OneWay",{"\n"}
                    {"    "}"carrierPreferences": [{"\n"}
                    {"      "}
                    {"{"}
                    {"\n"}
                    {"        "}"originDestinationRefId": "OD1",{"\n"}
                    {"        "}"preferredCarrierList": [{"\n"}
                    {"          "}[{"\n"}
                    {"            "}"AA",{"\n"}
                    {"            "}"UA",{"\n"}
                    {"            "}"B6"{"\n"}
                    {"          "}]{"\n"}
                    {"        "}],{"\n"}
                    {"        "}"excludeCarriers": [{"\n"}
                    {"          "}[{"\n"}
                    {"            "}"F9",{"\n"}
                    {"            "}"CO",{"\n"}
                    {"            "}"DL"{"\n"}
                    {"          "}]{"\n"}
                    {"        "}]{"\n"}
                    {"      "}
                    {"}"}
                    {"\n"}
                    {"    "}],{"\n"}
                    {"    "}"maxStopsQuantity": 0,{"\n"}
                    {"    "}"cabinPreferences": "All"{"\n"}
                    {"  "}
                    {"}"},{"\n"}
                    {"  "}"pricingParameters": {"{"}
                    {"\n"}
                    {"    "}"currency": "USD",{"\n"}
                    {"    "}"fareType": "public",{"\n"}
                    {"    "}"fareDiscounts": {"{"}
                    {"\n"}
                    {"      "}"bulkFare": "BT12341",{"\n"}
                    {"      "}"InclusiveTour": "IT125844",{"\n"}
                    {"      "}"corporateAccountCode": {"{"}
                    {"\n"}
                    {"        "}"carrierCode": "LA",{"\n"}
                    {"        "}"discountCode": "AD10"{"\n"}
                    {"      "}
                    {"}"}
                    {"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"  "}
                    {"}"}
                    {"\n"}
                    {"}"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <h3 id="AirShopping-Response">Response</h3>
          <div id="expander-1545856928" className="expand-container">
            <div id="expander-control-1545856928" className="expand-control">
              <span className="expand-control-icon">
                <img
                  style={{ verticalAlign: "middle" }}
                  className="expand-control-image"
                  src="images/icons/grey_arrow_down.png"
                />
              </span>
              <span className="expand-control-text">
                Click here to expand...
              </span>
            </div>
            <div id="expander-content-1545856928" className="expand-content">
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    {"{"}
                    {"\n"}
                    {"  "}"success": true,{"\n"}
                    {"  "}"errors": [{"\n"}
                    {"    "}
                    {"{"}
                    {"\n"}
                    {"      "}"code": "string",{"\n"}
                    {"      "}"message": "string"{"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"  "}],{"\n"}
                    {"  "}"warnings": [{"\n"}
                    {"    "}
                    {"{"}
                    {"\n"}
                    {"      "}"code": "string",{"\n"}
                    {"      "}"message": "string"{"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"  "}],{"\n"}
                    {"  "}"data": {"{"}
                    {"\n"}
                    {"    "}"shoppingId": "SHP_[UUID]",{"\n"}
                    {"    "}"originDestinationOptions": [{"\n"}
                    {"      "}
                    {"{"}
                    {"\n"}
                    {"        "}"originDestinationId": "OD1",{"\n"}
                    {"        "}"flights": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"originDestinationRefId": "OD1",{"\n"}
                    {"            "}"flightId": "string",{"\n"}
                    {"            "}"airlineName": "American Airlines",{"\n"}
                    {"            "}"airlineCode": "AA",{"\n"}
                    {"            "}"airlineLogo": "string",{"\n"}
                    {"            "}"number": 450,{"\n"}
                    {"            "}"departureAirport": "JFK",{"\n"}
                    {"            "}"departureAirportName": "string",{"\n"}
                    {"            "}"departureDateTime": "2024-01-18T22:00:00",
                    {"\n"}
                    {"            "}"arrivalAirport": "BOS",{"\n"}
                    {"            "}"arrivalAirportName": "string",{"\n"}
                    {"            "}"arrivalDateTime": "2024-01-10T09:00:00",
                    {"\n"}
                    {"            "}"flightDuration": "10:23:00",{"\n"}
                    {"            "}"stops": [{"\n"}
                    {"              "}
                    {"{"}
                    {"\n"}
                    {"                "}"airportCode": "string",{"\n"}
                    {"                "}"arrivalDate": "2024-01-10",{"\n"}
                    {"                "}"stopDuration": "00:45:00"{"\n"}
                    {"              "}
                    {"}"}
                    {"\n"}
                    {"            "}],{"\n"}
                    {"            "}"marketingCarrierInformation": {"{"}
                    {"\n"}
                    {"              "}"marketingFlightNumber": "990",{"\n"}
                    {"              "}"marketingCarrierCode": "AA",{"\n"}
                    {"              "}"marketingCarrierName": "American
                    Airlines"{"\n"}
                    {"            "}
                    {"}"},{"\n"}
                    {"            "}"operatingCarrierInformation": {"{"}
                    {"\n"}
                    {"              "}"operatingFlightNumber": "990",{"\n"}
                    {"              "}"operatingCarrierCode": "LA",{"\n"}
                    {"              "}"operatingCarrierName": "LATAM Airlines",
                    {"\n"}
                    {"              "}"operatingCarrierLogo": "string"{"\n"}
                    {"            "}
                    {"}"},{"\n"}
                    {"            "}"aircraft": "string"{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}]{"\n"}
                    {"      "}
                    {"}"}
                    {"\n"}
                    {"    "}],{"\n"}
                    {"    "}"journeys": [{"\n"}
                    {"      "}
                    {"{"}
                    {"\n"}
                    {"        "}"journeyId": "[JR_[UUID]",{"\n"}
                    {"        "}"PriceReferenceId": "[VendorID]_[FareID]",{"\n"}
                    {"        "}"segments": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"originDestinationRefId": "OD1",{"\n"}
                    {"            "}"flightIds": [{"\n"}
                    {"              "}[{"\n"}
                    {"                "}"LA450",{"\n"}
                    {"                "}"LA452"{"\n"}
                    {"              "}]{"\n"}
                    {"            "}]{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}],{"\n"}
                    {"        "}"bookingInstructions": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"originDestinationId": "OD1",{"\n"}
                    {"            "}"flightId": "AA901",{"\n"}
                    {"            "}"RBD": "M",{"\n"}
                    {"            "}"posting": 9{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}]{"\n"}
                    {"      "}
                    {"}"}
                    {"\n"}
                    {"    "}],{"\n"}
                    {"    "}"pricedItinerariesReference": [{"\n"}
                    {"      "}
                    {"{"}
                    {"\n"}
                    {"        "}"priceId": "[UUID =[Vendor FareID]",{"\n"}
                    {"        "}"totalPrice": "244.80",{"\n"}
                    {"        "}"basePrice": "110",{"\n"}
                    {"        "}"pricePerOrigindestination": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"originDestinationId": "OD1",{"\n"}
                    {"            "}"averageBasePrice": "55",{"\n"}
                    {"            "}"averageTaxPrice": "67.40",{"\n"}
                    {"            "}"averageMarkupPrice": "7.50"{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}],{"\n"}
                    {"        "}"tax": "134.80",{"\n"}
                    {"        "}"markup": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"type": "percentage",{"\n"}
                    {"            "}"rate": 10{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}],{"\n"}
                    {"        "}"serviceFee": "10.00",{"\n"}
                    {"        "}"discounts": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"type": "Corporate",{"\n"}
                    {"            "}"rate": 10,{"\n"}
                    {"            "}"code": "string"{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}],{"\n"}
                    {"        "}"currencyCode": "string",{"\n"}
                    {"        "}"baggages": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"originDestinationRefId": "OD1",{"\n"}
                    {"            "}"flightId": "LA450",{"\n"}
                    {"            "}"FreeQuantity": 1,{"\n"}
                    {"            "}"passengerTypeCode": "string",{"\n"}
                    {"            "}"bagAllowanceType": "piece",{"\n"}
                    {"            "}"BagAllowanceUnit": "K"{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}],{"\n"}
                    {"        "}"FareBasisCodes": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"originDestinationRefId": "OD1",{"\n"}
                    {"            "}"flightId": "LA450",{"\n"}
                    {"            "}"fareBasisCode": "string"{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}],{"\n"}
                    {"        "}"ptcBreakdown": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"passengerType": [{"\n"}
                    {"              "}"ADT"{"\n"}
                    {"            "}],{"\n"}
                    {"            "}"currencyCode": "USD",{"\n"}
                    {"            "}"quantity": 1,{"\n"}
                    {"            "}"totalPrice": {"{"}
                    {"\n"}
                    {"              "}"currencyCode": "USD",{"\n"}
                    {"              "}"amount": 120{"\n"}
                    {"            "}
                    {"}"},{"\n"}
                    {"            "}"baseFare": {"{"}
                    {"\n"}
                    {"              "}"currencyCode": "USD",{"\n"}
                    {"              "}"amount": 120{"\n"}
                    {"            "}
                    {"}"},{"\n"}
                    {"            "}"equivalentFare": {"{"}
                    {"\n"}
                    {"              "}"currencyCode": "USD",{"\n"}
                    {"              "}"amount": 120{"\n"}
                    {"            "}
                    {"}"},{"\n"}
                    {"            "}"taxDetails": [{"\n"}
                    {"              "}
                    {"{"}
                    {"\n"}
                    {"                "}"taxCode": "YQ",{"\n"}
                    {"                "}"currencyCode": "USD",{"\n"}
                    {"                "}"amount": 120{"\n"}
                    {"              "}
                    {"}"}
                    {"\n"}
                    {"            "}],{"\n"}
                    {"            "}"fareConstruction": "EZE Q20 SCL 120 EZE Q20
                    120 END NUC 280",{"\n"}
                    {"            "}"avgPricePerOriginDestination": [{"\n"}
                    {"              "}
                    {"{"}
                    {"\n"}
                    {"                "}"originDestinationRefId": "string",
                    {"\n"}
                    {"                "}"averageBasePrice": "string",{"\n"}
                    {"                "}"averageTaxPrice": "string"{"\n"}
                    {"              "}
                    {"}"}
                    {"\n"}
                    {"            "}],{"\n"}
                    {"            "}"fareType": "Published",{"\n"}
                    {"            "}"provider": "Sabre",{"\n"}
                    {"            "}"officeId": "string",{"\n"}
                    {"            "}"vendor": "access fare"{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}],{"\n"}
                    {"        "}"fareFamilyId": "ECONOMY_LIGHT"{"\n"}
                    {"      "}
                    {"}"}
                    {"\n"}
                    {"    "}],{"\n"}
                    {"    "}"fareFamilies": [{"\n"}
                    {"      "}
                    {"{"}
                    {"\n"}
                    {"        "}"fareFamilyId": "ECONOMY_LIGHT_09809",{"\n"}
                    {"        "}"name": "Economy Light",{"\n"}
                    {"        "}"owner": "LAt",{"\n"}
                    {"        "}"FareFamilyInfos": [{"\n"}
                    {"          "}
                    {"{"}
                    {"\n"}
                    {"            "}"code": "O50",{"\n"}
                    {"            "}"name": "CHOICE OF STANDARD SEAT",{"\n"}
                    {"            "}"group": "SEATS",{"\n"}
                    {"            "}"subgroup": "Premium",{"\n"}
                    {"            "}"RFIC": "Group Bundle Code",{"\n"}
                    {"            "}"type": "included"{"\n"}
                    {"          "}
                    {"}"}
                    {"\n"}
                    {"        "}]{"\n"}
                    {"      "}
                    {"}"}
                    {"\n"}
                    {"    "}],{"\n"}
                    {"    "}"cheapFlight": {"{"}
                    {"\n"}
                    {"      "}"journeyReferenceId": [{"\n"}
                    {"        "}"LA450LA452_LA450"{"\n"}
                    {"      "}]{"\n"}
                    {"    "}
                    {"}"},{"\n"}
                    {"    "}"bestFlight": {"{"}
                    {"\n"}
                    {"      "}"journeyReferenceId": [{"\n"}
                    {"        "}"LA450LA452_LA450"{"\n"}
                    {"      "}]{"\n"}
                    {"    "}
                    {"}"},{"\n"}
                    {"    "}"quickFlight": {"{"}
                    {"\n"}
                    {"      "}"journeyReferenceId": [{"\n"}
                    {"        "}"LA450LA452_LA450"{"\n"}
                    {"      "}]{"\n"}
                    {"    "}
                    {"}"}
                    {"\n"}
                    {"  "}
                    {"}"}
                    {"\n"}
                    {"}"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>{" "}
    </div>
    <div id="footer" role="contentinfo">
      <section className="footer-body">
        <p>Document generated by Confluence on Jun 24, 2024 05:24</p>
        <div id="footer-logo">
          <a href="http://www.atlassian.com/">Atlassian</a>
        </div>
      </section>
    </div>
  </div>
</>

  )
}

export default AirShopping