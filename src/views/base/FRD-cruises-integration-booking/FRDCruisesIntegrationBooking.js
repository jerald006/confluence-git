import React from 'react'

function FRDCruisesIntegrationBooking() {
  return (
    <>
      <title>XeniApp : FRD - Cruise Integration -Booking - MVP1</title>
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
                    <a href="Cruises-Integration_601980932.html">Cruises Integration</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FRD - Cruise Integration -Booking - MVP1</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Feb 12,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206766274 {padding: 0px;}\ndiv.rbtoc1719206766274 ul {list-style: none;margin-left: 0px;}\ndiv.rbtoc1719206766274 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206766274">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-CruiseIntegration-Booking-MVP1-Functionalobjective">
                      Functional objective
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-CruiseIntegration-Booking-MVP1-Context">Context</a>
                      </li>
                      <li>
                        <a href="#FRD-CruiseIntegration-Booking-MVP1-ProposalSolution">
                          Proposal Solution
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-Cruisebookingflow">
                              Cruise booking flow
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-CruiseIntegration-Booking-MVP1-FunctionalDescription">
                          Functional Description
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-Additemtovendorbasket">
                              Add item to vendor basket
                            </a>
                          </li>
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-UIComponent:">
                              UI Component:
                            </a>
                            <ul className="toc-indentation">
                              <li>
                                <a href="#FRD-CruiseIntegration-Booking-MVP1-Cruise:Details">
                                  Cruise: Details
                                </a>
                              </li>
                              <li>
                                <a href="#FRD-CruiseIntegration-Booking-MVP1-Cruise:Pricedetails">
                                  Cruise: Price details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-Cruise:DiningOptions">
                              Cruise: Dining Options
                            </a>
                            <ul className="toc-indentation">
                              <li>
                                <a href="#FRD-CruiseIntegration-Booking-MVP1-Cruise:passengerdetails">
                                  Cruise: passenger details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-BillingInformation.">
                              Billing Information.
                            </a>
                          </li>
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-Extraservices">
                              Extra services
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-CruiseIntegration-Booking-MVP1-ConfirmationPage">
                          Confirmation Page
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-Matchingcomponents:">
                              Matching components:
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-CruiseIntegration-Booking-MVP1-ErrorHandling">
                          Error Handling
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-Addbasketitem">
                              Add basket item
                            </a>
                          </li>
                          <li>
                            <a href="#FRD-CruiseIntegration-Booking-MVP1-Bookingprocess">
                              Booking process
                            </a>
                            <ul className="toc-indentation">
                              <li>
                                <a href="#FRD-CruiseIntegration-Booking-MVP1-RemoveItemfromBasket:">
                                  Remove Item from Basket:
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-CruiseIntegration-Booking-MVP1-Design">Design</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h1 id="FRD-CruiseIntegration-Booking-MVP1-Functionalobjective">
                Functional objective
              </h1>
              <p>
                Once the user selects the grade type and the selected cabin, it is required to
                process the booking and payment of the item. For this purpose, the flow should be:
              </p>
              <ul>
                <li>
                  <p>
                    BasketAdd - The selected identified item should be added to the vendor´s basket
                  </p>
                </li>
                <li>
                  <p>Expose a screen for travelers to select the dining details</p>
                </li>
                <li>
                  <p>Present to the travelers the personal information form to enter details</p>
                </li>
                <li>
                  <p>create the booking on the vendor side with the payment details. (/book.pl)</p>
                </li>
                <li>
                  <p>Process the agency markup debit (Xeni payment gateway).</p>
                </li>
                <li>
                  <p>Present to the traveler the final screen of the booked detailed item.</p>
                </li>
                <li>
                  <p>Booking receipt.</p>
                </li>
              </ul>
              <h2 id="FRD-CruiseIntegration-Booking-MVP1-Context">Context</h2>
              <p>The user has already selected the cruise item to consume.</p>
              <h2 id="FRD-CruiseIntegration-Booking-MVP1-ProposalSolution">Proposal Solution</h2>
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-Cruisebookingflow">
                <strong>Cruise booking flow</strong>
              </h3>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="CruiseBookingFlow.png"
                  width={867}
                  loading="lazy"
                  src="attachments/609976321/610304001.png?width=867"
                  data-image-src="attachments/609976321/610304001.png"
                  data-height={1112}
                  data-width={867}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={610304001}
                  data-linked-resource-version={2}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="CruiseBookingFlow.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={609976321}
                  data-linked-resource-container-version={12}
                  data-media-id="5a24846b-b4d1-4e62-8021-2fef1ad31f3a"
                  data-media-type="file"
                />
              </span>
              <p />
              <hr />
              <h2 id="FRD-CruiseIntegration-Booking-MVP1-FunctionalDescription">
                Functional Description
              </h2>
              <p />
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-Additemtovendorbasket">
                Add item to vendor basket
              </h3>
              <p>
                The vendor offer an endpoint to add a selected item into the basket with a 14
                minutes on Hold (No Deposit, no guarantee) in order to process the payment and
                confirm the booking.
              </p>
              <div id="expander-77166805" className="expand-container">
                <div id="expander-control-77166805" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">POST: /basketadd.pl</span>
                </div>
                <div id="expander-content-77166805" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location
                        'https://fusionapi.traveltek.net/2.1/json/basketadd.pl?requestid=10147191me09e-48c2-90c8-20322bbf185f&amp;sessionkey=C9F4FF82-6A90n42C1-8206-F0CF4E9790E1&amp;resultkey=null&amp;type=cruise&amp;resultno=212_0.1058090091&amp;gradeno=212%3APGO%3A2&amp;cabinresult=212%3APGO%3A2_0&amp;ratecode=PGO&amp;site=xeni.site.traveltek.net&amp;currency=USD&amp;sid=49572'
                        \{'\n'}--header 'Accept: application/json; charset=utf-8'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <p>
                <strong>Params:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <code>requestid</code>: Authorization accessToken
                  </p>
                </li>
                <li>
                  <p>
                    <code>sessionkey</code>: The session key started by consumer, returned in the
                    response body of /cruisecabin.pl
                  </p>
                </li>
                <li>
                  <p>
                    <code>resultkey</code>: Value returned from /cruisecabingrades.pl
                  </p>
                </li>
                <li>
                  <p>
                    <code>type</code>: always "cruise"
                  </p>
                </li>
                <li>
                  <p>
                    <code>resultno</code>: Returned in the response of /cruisecabin.pl
                  </p>
                </li>
                <li>
                  <p>
                    <code>gradeno</code>: The selected grade number returned on the /cruisecabin.pl
                    as Criteria.
                  </p>
                </li>
                <li>
                  <p>
                    <code>cabinresult</code>: Returned in the selected option from /cruisecabin.pl
                  </p>
                </li>
                <li>
                  <p>
                    <code>ratecode</code>: Returned from the selected option of /cruisecabin.pl
                  </p>
                </li>
                <li>
                  <p>
                    <code>site</code>: From vault - The Xeni site in the vendor
                  </p>
                </li>
                <li>
                  <p>
                    <code>SID</code>: From vault - The SiteId of XENI in the vendor config.
                  </p>
                </li>
                <li>
                  <p>
                    <code>currency</code>: The display preferred currency
                  </p>
                </li>
              </ul>
              <hr />
              <p>
                The body of the response contains the data to process the booking:
                <br />
              </p>
              <div id="expander-1707801357" className="expand-container">
                <div id="expander-control-1707801357" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response</span>
                </div>
                <div id="expander-content-1707801357" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"errors": [],{'\n'}
                        {'    '}"meta": {'{'}
                        {'\n'}
                        {'        '}"criteria": {'{'}
                        {'\n'}
                        {'            '}"adults": "2",{'\n'}
                        {'            '}"children": "0",{'\n'}
                        {'            '}"clientcode": "XEN",{'\n'}
                        {'            '}"codetocruiseid": 1824281,{'\n'}
                        {'            '}"enddate": "2024-02-26",{'\n'}
                        {'            '}"infants": "0",{'\n'}
                        {'            '}"paxquerystring": "children=0&amp;adults=2&amp;infants=0",
                        {'\n'}
                        {'            '}"paxtotal": 2,{'\n'}
                        {'            '}"searchno": 1058090091,{'\n'}
                        {'            '}"sessionkey": "C9F4FF82-6A90n42C1-8206-F0CF4E9790E1",{'\n'}
                        {'            '}"sid": "49572",{'\n'}
                        {'            '}"startdate": "2024-02-22",{'\n'}
                        {'            '}"type": "basket"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"defaultcurrency": {'{'}
                        {'\n'}
                        {'            '}"code": "USD",{'\n'}
                        {'            '}"symbol": "&amp;dollar;"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"rows": 1{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"results": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"basketitems": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cruisedetail": {'{'}
                        {'\n'}
                        {'                        '}"adults": 2,{'\n'}
                        {'                        '}"airbalcony": 0,{'\n'}
                        {'                        '}"airbalconypricecode": "",{'\n'}
                        {'                        '}"airinside": 0,{'\n'}
                        {'                        '}"airinsidepricecode": "",{'\n'}
                        {'                        '}"airoutside": 0,{'\n'}
                        {'                        '}"airoutsidepricecode": "",{'\n'}
                        {'                        '}"airport": "",{'\n'}
                        {'                        '}"airsuite": 0,{'\n'}
                        {'                        '}"airsuitepricecode": "",{'\n'}
                        {'                        '}"altvoyagecode": "",{'\n'}
                        {'                        '}"breakdown": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"category": "fare",
                        {'\n'}
                        {'                                '}"commissionable": 1,
                        {'\n'}
                        {'                                '}"currency": "USD",{'\n'}
                        {'                                '}"description": "Cruise Fare",{'\n'}
                        {'                                '}"itemprice": 562,{'\n'}
                        {'                                '}"itempricenovat": 562,
                        {'\n'}
                        {'                                '}"quantity": 2,{'\n'}
                        {'                                '}"scurrency": "USD",
                        {'\n'}
                        {'                                '}"sitemprice": 562,{'\n'}
                        {'                                '}"sprice": 1124,{'\n'}
                        {'                                '}"totalcost": 1124{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"category": "tax",{'\n'}
                        {'                                '}"commissionable": 0,
                        {'\n'}
                        {'                                '}"currency": "USD",{'\n'}
                        {'                                '}"description": "Taxes &amp; Fees",{'\n'}
                        {'                                '}"itemprice": 81.62,
                        {'\n'}
                        {'                                '}"itempricenovat": 81.62,
                        {'\n'}
                        {'                                '}"quantity": 2,{'\n'}
                        {'                                '}"scurrency": "USD",
                        {'\n'}
                        {'                                '}"sitemprice": 81.62,
                        {'\n'}
                        {'                                '}"sprice": 163.24,{'\n'}
                        {'                                '}"totalcost": 163.24
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"cabin": {'{'}
                        {'\n'}
                        {'                            '}"bathdescription": "Shower",
                        {'\n'}
                        {'                            '}"bedconfig": [],{'\n'}
                        {'                            '}"cabingrade": "BL",{'\n'}
                        {'                            '}"cabinid": 10571,{'\n'}
                        {'                            '}"cabinno": "GUAR",{'\n'}
                        {'                            '}"deckname": "To Be Assigned",{'\n'}
                        {'                            '}"farecode": "PGO",{'\n'}
                        {'                            '}"guaranteed": "Y",{'\n'}
                        {'                            '}"holdcabin": {'{'}
                        {'\n'}
                        {'                                '}"holdtime": "2024-01-25 13:40:53",{'\n'}
                        {'                                '}"releasetime": "2024-01-25 13:55:43"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}"location": "TO BE ASSIGNED",{'\n'}
                        {'                            '}"maxguests": 4,{'\n'}
                        {'                            '}"minguests": 1,{'\n'}
                        {'                            '}"modified": 0,{'\n'}
                        {'                            '}"name": "Balcony Stateroom (Guaranteed)",
                        {'\n'}
                        {'                            '}"position": "",{'\n'}
                        {'                            '}"resultno": "212:PGO:2_0",
                        {'\n'}
                        {'                            '}"shipside": ""{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"children": 0,{'\n'}
                        {'                        '}"classificationnames": [],{'\n'}
                        {'                        '}"classifications": [],{'\n'}
                        {'                        '}"codetocruiseid": 1824281,{'\n'}
                        {'                        '}"cruisebalcony": 2644,{'\n'}
                        {'                        '}"cruisebalconypricecode": "PGO",
                        {'\n'}
                        {'                        '}"cruiseid": 255300,{'\n'}
                        {'                        '}"cruiseinside": 1904,{'\n'}
                        {'                        '}"cruiseinsidepricecode": "PGO",
                        {'\n'}
                        {'                        '}"cruiseoutside": 2340,{'\n'}
                        {'                        '}"cruiseoutsidepricecode": "PGO",
                        {'\n'}
                        {'                        '}"cruisesuite": 6336,{'\n'}
                        {'                        '}"cruisesuitepricecode": "PGO",
                        {'\n'}
                        {'                        '}"csi": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"dining": {'{'}
                        {'\n'}
                        {'                            '}"seatings": [{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"code": "2",{'\n'}
                        {'                                    '}"description": "Late Dining",{'\n'}
                        {'                                    '}"status": "available"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"code": "O",{'\n'}
                        {'                                    '}"description": "Your Time
                        5:30-9:00",{'\n'}
                        {'                                    '}"status": "available"{'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"smoking": "N",{'\n'}
                        {'                            '}"tablesizes": [{'\n'}
                        {'                                '}0,{'\n'}
                        {'                                '}2,{'\n'}
                        {'                                '}4,{'\n'}
                        {'                                '}6,{'\n'}
                        {'                                '}8,{'\n'}
                        {'                                '}10{'\n'}
                        {'                            '}]{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"displaycruiseonly": "1",{'\n'}
                        {'                        '}"enddate": "2024-02-26",{'\n'}
                        {'                        '}"extras": {'{'}
                        {'\n'}
                        {'                            '}"warnings": [{'\n'}
                        {'                                '}"No Cruise Extras were found."{'\n'}
                        {'                            '}]{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"grossprice": 1124,{'\n'}
                        {'                        '}"hascruiseonly": "Y",{'\n'}
                        {'                        '}"hasflights": "N",{'\n'}
                        {'                        '}"infants": 0,{'\n'}
                        {'                        '}"itinerary": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"arrivedate": "2024-02-22",{'\n'}
                        {'                                '}"arrivetime": "",{'\n'}
                        {'                                '}"day": 1,{'\n'}
                        {'                                '}"departdate": "2024-02-22",{'\n'}
                        {'                                '}"departtime": "15:30",
                        {'\n'}
                        {'                                '}"extrainfo": "Dock",
                        {'\n'}
                        {'                                '}"itinerarydescription": "Set sail from a
                        historic jewel in the Gulf of Mexico on Carnival cruises out of Galveston,
                        Texas. Perched on the Gulf Coast, Galveston was a major commercial port in
                        the late 1800s and has the restored architecture and proud history to show
                        for it. Galveston’s long seawall stretches from beach to beach and offers
                        gulf views the whole way. Sprinkle in a few museums, amusement parks,
                        attractive beaches and tasty seafood restaurants, and you’ve got a great
                        start to your cruise from Galveston.",{'\n'}
                        {'                                '}"itineraryname": "Galveston",{'\n'}
                        {'                                '}"latitude": "29.2889",
                        {'\n'}
                        {'                                '}"longitude": "-94.8382",
                        {'\n'}
                        {'                                '}"shortdescription": "",
                        {'\n'}
                        {'                                '}"uniqueportid": 382
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"arrivedate": "2024-02-23",{'\n'}
                        {'                                '}"arrivetime": "",{'\n'}
                        {'                                '}"day": 2,{'\n'}
                        {'                                '}"departdate": "2024-02-23",{'\n'}
                        {'                                '}"departtime": "",{'\n'}
                        {'                                '}"extrainfo": "Fun At Sea",{'\n'}
                        {'                                '}"itineraryname": "Fun Day At Sea"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"arrivedate": "2024-02-24",{'\n'}
                        {'                                '}"arrivetime": "09:00",
                        {'\n'}
                        {'                                '}"day": 3,{'\n'}
                        {'                                '}"departdate": "2024-02-24",{'\n'}
                        {'                                '}"departtime": "17:00",
                        {'\n'}
                        {'                                '}"extrainfo": "Dock",
                        {'\n'}
                        {'                                '}"itinerarydescription": "Cozumel is
                        proof that Mexico can do ‘island flavor’ with the best of the Caribbean. It
                        may not be the biggest island in the sea, but Cozumel offers a huge variety
                        of things to do, see, taste and explore. This island just happens to be
                        perched atop a coral reef, which promises hours of snorkeling or scuba
                        diving fun. Cruises to Cozumel dock at the island’s heart — just minutes
                        from San Miguel’s seafront shops and the white sand beach at Chankanaab
                        National Park. Drift among star corals and sea fans on a Cozumel diving
                        excursion or simply kick back on the beach beneath your own palm palapa as
                        the turquoise waves roll in. With non-stop zip line action, ancient
                        discoveries at the nearby Mayan ruins, or time spent with your toes in the
                        sand, a cruise to Cozumel may just top your best vacations list… before you
                        even get home.",{'\n'}
                        {'                                '}"itineraryname": "Cozumel",{'\n'}
                        {'                                '}"latitude": "20.423",
                        {'\n'}
                        {'                                '}"longitude": "-86.9223",
                        {'\n'}
                        {'                                '}"shortdescription": "",
                        {'\n'}
                        {'                                '}"uniqueportid": 77{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"arrivedate": "2024-02-25",{'\n'}
                        {'                                '}"arrivetime": "",{'\n'}
                        {'                                '}"day": 4,{'\n'}
                        {'                                '}"departdate": "2024-02-25",{'\n'}
                        {'                                '}"departtime": "",{'\n'}
                        {'                                '}"extrainfo": "Fun At Sea",{'\n'}
                        {'                                '}"itineraryname": "Fun Day At Sea"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"arrivedate": "2024-02-26",{'\n'}
                        {'                                '}"arrivetime": "08:00",
                        {'\n'}
                        {'                                '}"day": 5,{'\n'}
                        {'                                '}"departdate": "2024-02-26",{'\n'}
                        {'                                '}"departtime": "",{'\n'}
                        {'                                '}"extrainfo": "Dock",
                        {'\n'}
                        {'                                '}"itinerarydescription": "Set sail from a
                        historic jewel in the Gulf of Mexico on Carnival cruises out of Galveston,
                        Texas. Perched on the Gulf Coast, Galveston was a major commercial port in
                        the late 1800s and has the restored architecture and proud history to show
                        for it. Galveston’s long seawall stretches from beach to beach and offers
                        gulf views the whole way. Sprinkle in a few museums, amusement parks,
                        attractive beaches and tasty seafood restaurants, and you’ve got a great
                        start to your cruise from Galveston.",{'\n'}
                        {'                                '}"itineraryname": "Galveston",{'\n'}
                        {'                                '}"latitude": "29.2889",
                        {'\n'}
                        {'                                '}"longitude": "-94.8382",
                        {'\n'}
                        {'                                '}"shortdescription": "",
                        {'\n'}
                        {'                                '}"uniqueportid": 382
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"name": "Western Caribbean From Galveston, TX",
                        {'\n'}
                        {'                        '}"nettprice": 1485.24,{'\n'}
                        {'                        '}"nights": 4,{'\n'}
                        {'                        '}"nofly": "N",{'\n'}
                        {'                        '}"ownerid": "system",{'\n'}
                        {'                        '}"perperson": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"category": "fare",
                        {'\n'}
                        {'                                '}"description": "Cruise Fare",{'\n'}
                        {'                                '}"prices": [{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}"currency": "USD",{'\n'}
                        {'                                        '}
                        "currencysymbol": "$",{'\n'}
                        {'                                        '}"guestno": 1,
                        {'\n'}
                        {'                                        '}"price": 562,
                        {'\n'}
                        {'                                        '}"scurrency": "USD",{'\n'}
                        {'                                        '}"sprice": 562
                        {'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}"currency": "USD",{'\n'}
                        {'                                        '}
                        "currencysymbol": "$",{'\n'}
                        {'                                        '}"guestno": 2,
                        {'\n'}
                        {'                                        '}"price": 562,
                        {'\n'}
                        {'                                        '}"scurrency": "USD",{'\n'}
                        {'                                        '}"sprice": 562
                        {'\n'}
                        {'                                    '}
                        {'}'}
                        {'\n'}
                        {'                                '}]{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"category": "tax",{'\n'}
                        {'                                '}"description": "Non-Commissionable
                        Fare",{'\n'}
                        {'                                '}"prices": [{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}"currency": "USD",{'\n'}
                        {'                                        '}
                        "currencysymbol": "$",{'\n'}
                        {'                                        '}"guestno": 1,
                        {'\n'}
                        {'                                        '}"price": 99,
                        {'\n'}
                        {'                                        '}"scurrency": "USD",{'\n'}
                        {'                                        '}"sprice": 99
                        {'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}"currency": "USD",{'\n'}
                        {'                                        '}
                        "currencysymbol": "$",{'\n'}
                        {'                                        '}"guestno": 2,
                        {'\n'}
                        {'                                        '}"price": 99,
                        {'\n'}
                        {'                                        '}"scurrency": "USD",{'\n'}
                        {'                                        '}"sprice": 99
                        {'\n'}
                        {'                                    '}
                        {'}'}
                        {'\n'}
                        {'                                '}]{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"category": "tax",{'\n'}
                        {'                                '}"description": "Taxes &amp; Fees",{'\n'}
                        {'                                '}"prices": [{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}"currency": "USD",{'\n'}
                        {'                                        '}
                        "currencysymbol": "$",{'\n'}
                        {'                                        '}"guestno": 1,
                        {'\n'}
                        {'                                        '}"price": 81.62,
                        {'\n'}
                        {'                                        '}"scurrency": "USD",{'\n'}
                        {'                                        '}"sprice": 81.62
                        {'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}"currency": "USD",{'\n'}
                        {'                                        '}
                        "currencysymbol": "$",{'\n'}
                        {'                                        '}"guestno": 2,
                        {'\n'}
                        {'                                        '}"price": 81.62,
                        {'\n'}
                        {'                                        '}"scurrency": "USD",{'\n'}
                        {'                                        '}"sprice": 81.62
                        {'\n'}
                        {'                                    '}
                        {'}'}
                        {'\n'}
                        {'                                '}]{'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"portnames": [{'\n'}
                        {'                            '}"Galveston",{'\n'}
                        {'                            '}"Cozumel",{'\n'}
                        {'                            '}"Galveston"{'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"price": 1485.24,{'\n'}
                        {'                        '}"pricecode": "PGO",{'\n'}
                        {'                        '}"regionname": [{'\n'}
                        {'                            '}"Caribbean"{'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"resultiscruiseonly": "Y",{'\n'}
                        {'                        '}"resultno": "212_0.1058090091",
                        {'\n'}
                        {'                        '}"resultweight": 0,{'\n'}
                        {'                        '}"returndate": "2024-02-26",
                        {'\n'}
                        {'                        '}"returnuk": "N",{'\n'}
                        {'                        '}"roundtrip": "Y",{'\n'}
                        {'                        '}"saildate": "2024-02-22",{'\n'}
                        {'                        '}"sailnights": 4,{'\n'}
                        {'                        '}"scurrency": "USD",{'\n'}
                        {'                        '}"seadays": 2,{'\n'}
                        {'                        '}"ship": {'{'}
                        {'\n'}
                        {'                            '}"code": "BR",{'\n'}
                        {'                            '}"id": 1196,{'\n'}
                        {'                            '}"name": "Carnival Breeze"
                        {'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"soldout": "0",{'\n'}
                        {'                        '}"special": "no",{'\n'}
                        {'                        '}"specialservices": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "2",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "WHEELCHAIR ASSISTANCE",{'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "3",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "COGNITIVE DISABILITIES",{'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "8",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "CONCENTRATOR",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "B",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "AUTISM",{'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "D",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "DIABETIC",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "I",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "BLIND",{'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "J",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "DEAF",{'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "O",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "ALLERGIES",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "Q",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "PREGNANT LESS 24 FULL WKS",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "R",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "SHARPS CONTAINER",{'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "S",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "DIALYSIS",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "W",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "WHEELCHAIR",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "X",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "PREG MORETHAN 24 FULL WKS",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "Z",{'\n'}
                        {'                                '}"daterequired": 0,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "OXYGEN",{'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Medical",{'\n'}
                        {'                                '}"typecode": "MED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "F",{'\n'}
                        {'                                '}"daterequired": 1,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "ANNIVERSARY",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Occasion",
                        {'\n'}
                        {'                                '}"typecode": "OCC"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "E",{'\n'}
                        {'                                '}"daterequired": 1,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "BIRTHDAY",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Occasion",
                        {'\n'}
                        {'                                '}"typecode": "OCC"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"code": "H",{'\n'}
                        {'                                '}"daterequired": 1,{'\n'}
                        {'                                '}"guests": [],{'\n'}
                        {'                                '}"minguests": null,{'\n'}
                        {'                                '}"name": "HONEYMOON",
                        {'\n'}
                        {'                                '}"per": "person",{'\n'}
                        {'                                '}"type": "Occasion",
                        {'\n'}
                        {'                                '}"typecode": "OCC"{'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"sprice": 1485.24,{'\n'}
                        {'                        '}"startdate": "2024-02-22",{'\n'}
                        {'                        '}"stoplive": 0,{'\n'}
                        {'                        '}"uniqueportnames": [{'\n'}
                        {'                            '}"Cozumel",{'\n'}
                        {'                            '}"Galveston"{'\n'}
                        {'                        '}]{'\n'}
                        {'                    '}
                        {'}'},{'\n'}
                        {'                    '}"enginename": "Carnival",{'\n'}
                        {'                    '}"itemkey": "1058091922",{'\n'}
                        {'                    '}"optionalextras": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"code": "SS:GRATS",{'\n'}
                        {'                            '}"currency": "USD",{'\n'}
                        {'                            '}"description": "Pre-Paid Gratuities",{'\n'}
                        {'                            '}"group": "Gratuities",{'\n'}
                        {'                            '}"price": 128,{'\n'}
                        {'                            '}"resultno": "101",{'\n'}
                        {'                            '}"showas": "bool",{'\n'}
                        {'                            '}"type": "gratuities"{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"code": "SS:XFIAHI",{'\n'}
                        {'                            '}"currency": "USD",{'\n'}
                        {'                            '}"description": "Pre Cruise Transfer (IAH)",
                        {'\n'}
                        {'                            '}"group": "precruisetransfer",{'\n'}
                        {'                            '}"price": 115.98,{'\n'}
                        {'                            '}"resultno": "102",{'\n'}
                        {'                            '}"showas": "bool",{'\n'}
                        {'                            '}"type": "Pre Cruise Transfer"{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"code": "SS:XFHOUI",{'\n'}
                        {'                            '}"currency": "USD",{'\n'}
                        {'                            '}"description": "Pre Cruise Transfer (HOU)",
                        {'\n'}
                        {'                            '}"group": "precruisetransfer",{'\n'}
                        {'                            '}"price": 81.98,{'\n'}
                        {'                            '}"resultno": "103",{'\n'}
                        {'                            '}"showas": "bool",{'\n'}
                        {'                            '}"type": "Pre Cruise Transfer"{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"code": "SS:XFIAHO",{'\n'}
                        {'                            '}"currency": "USD",{'\n'}
                        {'                            '}"description": "Post Cruise Transfer (IAH)",
                        {'\n'}
                        {'                            '}"group": "postcruisetransfer",{'\n'}
                        {'                            '}"price": 115.98,{'\n'}
                        {'                            '}"resultno": "104",{'\n'}
                        {'                            '}"showas": "bool",{'\n'}
                        {'                            '}"type": "Post Cruise Transfer"{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"code": "SS:XFHOUO",{'\n'}
                        {'                            '}"currency": "USD",{'\n'}
                        {'                            '}"description": "Post Cruise Transfer (HOU)",
                        {'\n'}
                        {'                            '}"group": "postcruisetransfer",{'\n'}
                        {'                            '}"price": 81.98,{'\n'}
                        {'                            '}"resultno": "105",{'\n'}
                        {'                            '}"showas": "bool",{'\n'}
                        {'                            '}"type": "Post Cruise Transfer"{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}],{'\n'}
                        {'                    '}"paymentoption": "online",{'\n'}
                        {'                    '}"price": "1485.24",{'\n'}
                        {'                    '}"searchno": 1058090091,{'\n'}
                        {'                    '}"searchprice": 1904,{'\n'}
                        {'                    '}"selectedextras": [],{'\n'}
                        {'                    '}"startdate": "2024-02-22T00:00:00",
                        {'\n'}
                        {'                    '}"type": "cruise"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"itinerarycode": "H7Z2V6",{'\n'}
                        {'            '}"totaldeposit": 1485.24,{'\n'}
                        {'            '}"totalprice": 1485.24{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"timing": {'{'}
                        {'\n'}
                        {'        '}"items": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Initiate Endpoint",
                        {'\n'}
                        {'                '}"time": "0.000010"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Auth Check Pass",{'\n'}
                        {'                '}"time": "0.034569"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"total": "3.882735"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"warnings": []{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <p>
                From the response, it is required to present to the travelers an screen to select
                the dining options:
              </p>
              <ul>
                <li>
                  <p>seating: Each object represents an option</p>
                </li>
                <li>
                  <p>smoking: Non-smoking </p>
                </li>
                <li>
                  <p>tablesize: the size of the table to sitting in the dining option selected.</p>
                </li>
              </ul>
              <hr />
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-UIComponent:">
                UI Component:
                <br />
              </h3>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  alt="image-20240212-120105.png"
                  width={1446}
                  loading="lazy"
                  src="attachments/609976321/616235033.png?width=1446"
                  data-image-src="attachments/609976321/616235033.png"
                  data-height={6816}
                  data-width={4267}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={616235033}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240212-120105.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={609976321}
                  data-linked-resource-container-version={12}
                  data-media-id="1c8ca76b-3ed1-4ea9-bbda-9c52adebaa35"
                  data-media-type="file"
                />
              </span>
              <h4 id="FRD-CruiseIntegration-Booking-MVP1-Cruise:Details">Cruise: Details</h4>
              <p>
                From the response of the endpoint POST: /basketadd.pl - There is all the information
                to build this view:
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1442}
                  data-layout="default"
                  data-local-id="b1e82343-e00d-4806-afeb-ab5030199003"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '224.0px' }} />
                    <col style={{ width: '736.0px' }} />
                    <col style={{ width: '480.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comment</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Ship Image</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Should come from the static data reference or stored from previous pages.{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Title name</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n]."name"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The name of the sailing route.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Departure Port:</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."itineraryname":
                            "Galveston"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The itinerary object of Day=1 is the departure </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Date and time</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."departdate":
                            "2024-02-22"{' '}
                          </code>
                          + <code>"departtime": "15:30"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          it is required to convert the date and the time into the next format:
                          <br />
                          <code>Mon 21 Oct, 2023, 11:00 am</code>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Arrival Port: </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."itineraryname":
                            "Galveston"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The last point of the itinerary. Must be the last day of the itinerary.
                          Ex, Day 4 for a sailing of 4 days/nights.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Date and time</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."departdate":
                            "2024-02-22"{' '}
                          </code>
                          + <code>"departtime": "15:30"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          it is required to convert the date and the time into the next format:
                          <br />
                          <code>Mon 21 Oct, 2023, 11:00 am</code>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Price per Person</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].price</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Is the total price per person.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Region</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].regionname</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          For specific cases could be more than one region, it is required to
                          display the items in the array.{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Trip Lenght</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n]."nights": 4</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>THe total nights of the ship.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>cabin Number</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].cabin[n]."cabinno"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          it is possible to get the legend “GUAR” it means guarantee, it is not
                          assigned yet and will be assigned at the time of boarding. Mostly for the
                          cheapest cabins (interior).
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>fare</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Should return from previous or we need to make an extra call to resolve
                          the rateCode.{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>ship</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].ship.name</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>stateroom type</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].cabin[n]."name"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 id="FRD-CruiseIntegration-Booking-MVP1-Cruise:Pricedetails">
                Cruise: Price details
              </h4>
              <div className="table-wrap">
                <table
                  data-table-width={1442}
                  data-layout="default"
                  data-local-id="4f48fc14-af1e-4b3e-b8e5-3b9926296482"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '224.0px' }} />
                    <col style={{ width: '736.0px' }} />
                    <col style={{ width: '480.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comment</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Booking Timer</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n]."holdcabin"."releasetime":
                            "2024-01-25 13:55:43"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The current time vs the release time. (15mins) counter. <br />
                          <strong>It is not extendable. </strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Title name</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n]."name"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The name of the sailing route.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Departure Port:</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."itineraryname":
                            "Galveston"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The itinerary object of Day=1 is the departure </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Date and time</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."departdate":
                            "2024-02-22"{' '}
                          </code>
                          + <code>"departtime": "15:30"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          it is required to convert the date and the time into the next format:
                          <br />
                          <code>Mon 21 Oct, 2023, 11:00 am</code>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Arrival Port: </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."itineraryname":
                            "Galveston"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The last point of the itinerary. Must be the last day of the itinerary.
                          Ex, Day 4 for a sailing of 4 days/nights.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Date and time</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            POST:/basketadd.response.result[n].itinerary[0]."departdate":
                            "2024-02-22"{' '}
                          </code>
                          + <code>"departtime": "15:30"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          it is required to convert the date and the time into the next format:
                          <br />
                          <code>Mon 21 Oct, 2023, 11:00 am</code>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Price per Person</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].price</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Is the total price per person.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Region</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].regionname</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          For specific cases could be more than one region, it is required to
                          display the items in the array.{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Trip Lenght</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n]."nights": 4</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>THe total nights of the ship.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>cabin Number</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].cabin[n]."cabinno"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          it is possible to get the legend “GUAR” it means guarantee, it is not
                          assigned yet and will be assigned at the time of boarding. Mostly for the
                          cheapest cabins (interior).
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>fare</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Should return from previous or we need to make an extra call to resolve
                          the rateCode.{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>ship</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].ship.name</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>stateroom type</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/basketadd.response.result[n].cabin[n]."name"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-Cruise:DiningOptions">
                Cruise: Dining Options
              </h3>
              <p>
                A required step for the user is select the Dinning option. The information is
                returned in the <code>GET: /basketadd.pl</code> response
              </p>
              <p>Example</p>
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    "dining": {'{'}
                    {'\n'}
                    {'                            '}"seatings": [{'\n'}
                    {'                                '}
                    {'{'}
                    {'\n'}
                    {'                                    '}"code": "2",{'\n'}
                    {'                                    '}"description": "Late Dining",{'\n'}
                    {'                                    '}"status": "available"
                    {'\n'}
                    {'                                '}
                    {'}'},{'\n'}
                    {'                                '}
                    {'{'}
                    {'\n'}
                    {'                                    '}"code": "O",{'\n'}
                    {'                                    '}"description": "Your Time 5:30-9:00",
                    {'\n'}
                    {'                                    '}"status": "available"
                    {'\n'}
                    {'                                '}
                    {'}'}
                    {'\n'}
                    {'                            '}],{'\n'}
                    {'                            '}"smoking": "N",{'\n'}
                    {'                            '}"tablesizes": [{'\n'}
                    {'                                '}0,{'\n'}
                    {'                                '}2,{'\n'}
                    {'                                '}4,{'\n'}
                    {'                                '}6,{'\n'}
                    {'                                '}8,{'\n'}
                    {'                                '}10{'\n'}
                    {'                            '}]{'\n'}
                    {'                        '}
                    {'}'}
                  </pre>
                </div>
              </div>
              <p />
              <ul>
                <li>
                  <p>
                    <strong>The seating obj</strong>, is the timing option for dining
                  </p>
                </li>
                <li>
                  <p>
                    <strong>The Tablesize Ob</strong>j. Is the list of seating people to share the
                    table preference.{' '}
                  </p>
                </li>
              </ul>
              <p>
                This option needs to be stored to pass in the <code>POST: /book.pl</code> request.
              </p>
              <h4 id="FRD-CruiseIntegration-Booking-MVP1-Cruise:passengerdetails">
                Cruise: passenger details
              </h4>
              <p>
                The form for each passenger. The first passenger is mandatory to send the contact
                information as “Main passenger” (only adults). For the rest of the passengers are
                not mandatory to send the information.{' '}
              </p>
              <p>Display also the form to enter the Travelers personal information</p>
              <ul>
                <li>
                  <p>Title</p>
                </li>
                <li>
                  <p>First name</p>
                </li>
                <li>
                  <p>Last name</p>
                </li>
                <li>
                  <p>age</p>
                </li>
                <li>
                  <p>Date of birth</p>
                </li>
                <li>
                  <p>Nationality</p>
                </li>
                <li>
                  <p>Contact information (Main Traveler only)</p>
                  <ul>
                    <li>
                      <p>country</p>
                    </li>
                    <li>
                      <p>gender</p>
                    </li>
                    <li>
                      <p>address1</p>
                    </li>
                    <li>
                      <p>city</p>
                    </li>
                    <li>
                      <p>county</p>
                    </li>
                    <li>
                      <p>postcode</p>
                    </li>
                    <li>
                      <p>telephone</p>
                    </li>
                    <li>
                      <p>email</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>payment information (Credit Card)</p>
                  <ul>
                    <li>
                      <p>Card Type: (Check the payment options)</p>
                    </li>
                    <li>
                      <p>Card Number:</p>
                    </li>
                    <li>
                      <p>expiration month: (Integer 1-12)</p>
                    </li>
                    <li>
                      <p>expiration year: (Integer YYYY)</p>
                    </li>
                    <li>
                      <p>CVS (integer 3-4)</p>
                    </li>
                    <li>
                      <p>name on card</p>
                    </li>
                    <li>
                      <p>Billing information</p>
                      <ul>
                        <li>
                          <p>Title</p>
                        </li>
                        <li>
                          <p>firstname</p>
                        </li>
                        <li>
                          <p>lastname</p>
                        </li>
                        <li>
                          <p>address1</p>
                        </li>
                        <li>
                          <p>address2</p>
                        </li>
                        <li>
                          <p>homecity</p>
                        </li>
                        <li>
                          <p>county</p>
                        </li>
                        <li>
                          <p>country</p>
                        </li>
                        <li>
                          <p>postcode</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p />
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-BillingInformation.">
                Billing Information.
              </h3>
              <p>
                For the MVP1, it will only accept the Standard credit cards and will send the
                Payment information in the request of booking since the cruise line merchant will be
                responsible of process the debit.{' '}
              </p>
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-Extraservices">Extra services</h3>
              <p>TBD for the PoC.</p>
              <p />
              <p>
                <strong>Create booking</strong>
              </p>
              <p>
                After collect the travelers personal information and payment data, it is required to
                send to vendor the method /book.pl using the itemKey in basket.
              </p>
              <div id="expander-444006600" className="expand-container">
                <div id="expander-control-444006600" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">book.pl - request example</span>
                </div>
                <div id="expander-content-444006600" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --request POST
                        'https://fusionapi.traveltek.net/2.1/json/book.pl' \{'\n'}
                        --header 'requestid: 745b652ck7a92-46c6-b132-4015abb3f026' \{'\n'}--header
                        'Content-Type: application/json' \{'\n'}
                        --header 'Accept: application/json; charset=utf-8' \{'\n'}
                        --data-raw '{'{'}
                        {'\n'}
                        {'    '}"sessionkey": "1D7BD28A-249Dl4EA5-A57F-A8D332E682CB",{'\n'}
                        {'    '}"sid": "49572",{'\n'}
                        {'    '}"depositbooking": 0,{'\n'}
                        {'    '}"contact": {'{'}
                        {'\n'}
                        {'        '}"address1": "1111 Test St",{'\n'}
                        {'        '}"city": "City",{'\n'}
                        {'        '}"country": "US",{'\n'}
                        {'        '}"county": "OR",{'\n'}
                        {'        '}"email": "jasonh@test.com",{'\n'}
                        {'        '}"firstname": "jas",{'\n'}
                        {'        '}"middlename": "",{'\n'}
                        {'        '}"lastname": "har",{'\n'}
                        {'        '}"postcode": "97123",{'\n'}
                        {'        '}"telephone": "5035557777",{'\n'}
                        {'        '}"title": "Mr"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"passengers": {'{'}
                        {'\n'}
                        {'        '}"1": {'{'}
                        {'\n'}
                        {'            '}"paxno": "1",{'\n'}
                        {'            '}"paxtype": "adult",{'\n'}
                        {'            '}"travelling": "",{'\n'}
                        {'            '}"title": "Mr",{'\n'}
                        {'            '}"firstname": "jas",{'\n'}
                        {'            '}"middlename": "",{'\n'}
                        {'            '}"lastname": "har",{'\n'}
                        {'            '}"address": "1111 Test St",{'\n'}
                        {'            '}"city": "City",{'\n'}
                        {'            '}"county": "OR",{'\n'}
                        {'            '}"postcode": "97123",{'\n'}
                        {'            '}"country": "US",{'\n'}
                        {'            '}"email": "jasonh@test.com",{'\n'}
                        {'            '}"telephone": "5035557777",{'\n'}
                        {'            '}"gender": "M",{'\n'}
                        {'            '}"dob": "1985-11-15",{'\n'}
                        {'            '}"age": "35",{'\n'}
                        {'            '}"nationality": "US",{'\n'}
                        {'            '}"emergencyname": null,{'\n'}
                        {'            '}"emergencyemail": null,{'\n'}
                        {'            '}"emergencyphone": null,{'\n'}
                        {'            '}"specialservices": []{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"2": {'{'}
                        {'\n'}
                        {'            '}"paxno": "2",{'\n'}
                        {'            '}"paxtype": "adult",{'\n'}
                        {'            '}"travelling": "",{'\n'}
                        {'            '}"title": "Mr",{'\n'}
                        {'            '}"firstname": "jas",{'\n'}
                        {'            '}"middlename": "",{'\n'}
                        {'            '}"lastname": "har",{'\n'}
                        {'            '}"address": "1111 Test St",{'\n'}
                        {'            '}"city": "City",{'\n'}
                        {'            '}"county": "OR",{'\n'}
                        {'            '}"postcode": "97123",{'\n'}
                        {'            '}"country": "US",{'\n'}
                        {'            '}"email": "jasonh@test.com",{'\n'}
                        {'            '}"telephone": "5035557777",{'\n'}
                        {'            '}"gender": "M",{'\n'}
                        {'            '}"dob": "1985-11-15",{'\n'}
                        {'            '}"age": "35",{'\n'}
                        {'            '}"nationality": "US",{'\n'}
                        {'            '}"emergencyname": null,{'\n'}
                        {'            '}"emergencyemail": null,{'\n'}
                        {'            '}"emergencyphone": null,{'\n'}
                        {'            '}"specialservices": []{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"allocation": {'{'}
                        {'\n'}
                        {'        '}"1060793622": {'{'}
                        {'\n'}
                        {'            '}"dining": {'{'}
                        {'\n'}
                        {'                '}"seating": "2",{'\n'}
                        {'                '}"tablesize": "0",{'\n'}
                        {'                '}"smoking": "N"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}
                        {'}'}
                        {'\n'}
                        {'}'}'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-1371877200" className="expand-container">
                <div id="expander-control-1371877200" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">book.pl - response</span>
                </div>
                <div id="expander-content-1371877200" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"errors": [],{'\n'}
                        {'    '}"meta": {'{'}
                        {'\n'}
                        {'        '}"criteria": {'{'}
                        {'\n'}
                        {'            '}"sessionkey": "1D7BD28A-249Dl4EA5-A57F-A8D332E682CB",{'\n'}
                        {'            '}"sid": "49572"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"defaultcurrency": {'{'}
                        {'}'}
                        {'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"results": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"bookingdetails": {'{'}
                        {'\n'}
                        {'                '}"address1": "1111 Test St",{'\n'}
                        {'                '}"bookingid": 12821997,{'\n'}
                        {'                '}"bookingitems": [{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"convertedsprice": 1125.24,
                        {'\n'}
                        {'                        '}"cruisedetail": {'{'}
                        {'\n'}
                        {'                            '}"airportcode": "CO",{'\n'}
                        {'                            '}"breakdown": [{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"category": "fare",
                        {'\n'}
                        {'                                    '}"currency": "USD",
                        {'\n'}
                        {'                                    '}"description": "Cruise Fare",{'\n'}
                        {'                                    '}"itemprice": 382,
                        {'\n'}
                        {'                                    '}"itempricenovat": 382,{'\n'}
                        {'                                    '}"quantity": 2,{'\n'}
                        {'                                    '}"scurrency": "USD",
                        {'\n'}
                        {'                                    '}"sitemprice": 382,
                        {'\n'}
                        {'                                    '}"sprice": 764,{'\n'}
                        {'                                    '}"totalcost": 764
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"category": "tax",
                        {'\n'}
                        {'                                    '}"currency": "USD",
                        {'\n'}
                        {'                                    '}"description": "Taxes &amp; Fees",
                        {'\n'}
                        {'                                    '}"itemprice": 81.62,
                        {'\n'}
                        {'                                    '}"itempricenovat": 81.62,{'\n'}
                        {'                                    '}"quantity": 2,{'\n'}
                        {'                                    '}"scurrency": "USD",
                        {'\n'}
                        {'                                    '}"sitemprice": 81.62,
                        {'\n'}
                        {'                                    '}"sprice": 163.24,
                        {'\n'}
                        {'                                    '}"totalcost": 163.24
                        {'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"cabin": {'{'}
                        {'\n'}
                        {'                                '}"cabincode": "IS",{'\n'}
                        {'                                '}"location": "",{'\n'}
                        {'                                '}"name": "Inside Stateroom (Guaranteed)",
                        {'\n'}
                        {'                                '}"position": "TO BE ASSIGNED"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}"cabincode": "IS",{'\n'}
                        {'                            '}"cabindesc": "This is an affordable way to
                        cruise without leaving out the comfort or convenience! Great for curling up
                        after a long day of fun.\r\n\r\n\r\nDedicated room steward\r\nCarnival
                        Comfort Collection® linens\r\nPlenty of closet and drawer space\r\nIn-room
                        safe for valuables\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                            '}"cabinname": "Inside Stateroom
                        (Guaranteed)",{'\n'}
                        {'                            '}"cabinno": "GUAR",{'\n'}
                        {'                            '}"cabinposition": "TO BE ASSIGNED",{'\n'}
                        {'                            '}"codetocruiseid": 1824282,
                        {'\n'}
                        {'                            '}"cruisename": "Western Caribbean From
                        Galveston, TX",{'\n'}
                        {'                            '}"deckdescription": "To Be Assigned",{'\n'}
                        {'                            '}"deckname": "To Be Assigned",{'\n'}
                        {'                            '}"enddate": "2024-03-11",
                        {'\n'}
                        {'                            '}"id": 3494289,{'\n'}
                        {'                            '}"itinerary": [{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"arrivedate": "2024-03-07",{'\n'}
                        {'                                    '}"arrivetime": "00:00:00",{'\n'}
                        {'                                    '}"day": 1,{'\n'}
                        {'                                    '}"departdate": "2024-03-07",{'\n'}
                        {'                                    '}"departtime": "15:30:00",{'\n'}
                        {'                                    '}"name": "Galveston"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"arrivedate": "2024-03-08",{'\n'}
                        {'                                    '}"arrivetime": "00:00:00",{'\n'}
                        {'                                    '}"day": 2,{'\n'}
                        {'                                    '}"departdate": "2024-03-08",{'\n'}
                        {'                                    '}"departtime": "00:00:00",{'\n'}
                        {'                                    '}"name": "Fun Day At Sea"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"arrivedate": "2024-03-09",{'\n'}
                        {'                                    '}"arrivetime": "09:00:00",{'\n'}
                        {'                                    '}"day": 3,{'\n'}
                        {'                                    '}"departdate": "2024-03-09",{'\n'}
                        {'                                    '}"departtime": "17:00:00",{'\n'}
                        {'                                    '}"name": "Cozumel"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"arrivedate": "2024-03-10",{'\n'}
                        {'                                    '}"arrivetime": "00:00:00",{'\n'}
                        {'                                    '}"day": 4,{'\n'}
                        {'                                    '}"departdate": "2024-03-10",{'\n'}
                        {'                                    '}"departtime": "00:00:00",{'\n'}
                        {'                                    '}"name": "Fun Day At Sea"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"arrivedate": "2024-03-11",{'\n'}
                        {'                                    '}"arrivetime": "08:00:00",{'\n'}
                        {'                                    '}"day": 5,{'\n'}
                        {'                                    '}"departdate": "2024-03-11",{'\n'}
                        {'                                    '}"departtime": "00:00:00",{'\n'}
                        {'                                    '}"name": "Galveston"
                        {'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"linename": "Carnival Cruise Line",{'\n'}
                        {'                            '}"modified": "0",{'\n'}
                        {'                            '}"nights": 4,{'\n'}
                        {'                            '}"onboardcredit": 0,{'\n'}
                        {'                            '}"price": 1125.24,{'\n'}
                        {'                            '}"pricecode": "PGO",{'\n'}
                        {'                            '}"regionname": [{'\n'}
                        {'                                '}"Caribbean"{'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"reservation": "F9WZ03",
                        {'\n'}
                        {'                            '}"returndate": "2024-03-11",
                        {'\n'}
                        {'                            '}"saildate": "2024-03-07",
                        {'\n'}
                        {'                            '}"sailnights": 4,{'\n'}
                        {'                            '}"ship": {'{'}
                        {'\n'}
                        {'                                '}"id": 1196,{'\n'}
                        {'                                '}"name": "Carnival Breeze"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}"shipimages": [{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Carnival Breeze",{'\n'}
                        {'                                    '}"default": "Y",
                        {'\n'}
                        {'                                    '}"id": 59101,{'\n'}
                        {'                                    '}"image": "1595423212.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1595423212.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Suite",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64152,{'\n'}
                        {'                                    '}"image": "1608653728.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653728.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653728.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Spa",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64155,{'\n'}
                        {'                                    '}"image": "1608653776.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653776.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653776.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Waterworks",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64165,{'\n'}
                        {'                                    '}"image": "1608654094.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654094.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654094.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Waterworks-1",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64166,{'\n'}
                        {'                                    '}"image": "1608654118.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654118.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654118.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Alchemy Bar 1",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64170,{'\n'}
                        {'                                    '}"image": "1608654364.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654364.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654364.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Alchemy Bar 2",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64173,{'\n'}
                        {'                                    '}"image": "1608654390.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654390.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654390.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Pool",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 65711,{'\n'}
                        {'                                    '}"image": "1610368302.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1610368302.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1610368302.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Alchemy Bar 3",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64176,{'\n'}
                        {'                                    '}"image": "1608654406.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654406.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654406.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Serenity 5",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64191,{'\n'}
                        {'                                    '}"image": "1608655132.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655132.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655132.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Serenity 4",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64192,{'\n'}
                        {'                                    '}"image": "1608655166.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655166.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655166.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Camp Ocean 3",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64204,{'\n'}
                        {'                                    '}"image": "1608655412.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655412.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655412.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Seuss At Sea 4",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64207,{'\n'}
                        {'                                    '}"image": "1608655759.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655759.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655759.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Seuss At Sea 3",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64208,{'\n'}
                        {'                                    '}"image": "1608655906.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655906.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655906.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Seuss At Sea 2",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64209,{'\n'}
                        {'                                    '}"image": "1608655923.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655923.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655923.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Lip Sync Battle",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64215,{'\n'}
                        {'                                    '}"image": "1608656183.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656183.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656183.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Blue Iguana Bar 4",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64216,{'\n'}
                        {'                                    '}"image": "1608656217.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656217.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656217.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Redfrog Pub",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64217,{'\n'}
                        {'                                    '}"image": "1608656253.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656253.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656253.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Thrill Theater",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64218,{'\n'}
                        {'                                    '}"image": "1608656482.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656482.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656482.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Thrill Theater",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 64219,{'\n'}
                        {'                                    '}"image": "1608656506.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656506.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656506.png",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 14",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72564,{'\n'}
                        {'                                    '}"image": "1655057864.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057864.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057864.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 7",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72565,{'\n'}
                        {'                                    '}"image": "1655057868.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057868.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057868.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 10",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72566,{'\n'}
                        {'                                    '}"image": "1655057872.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057872.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057872.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 3",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72567,{'\n'}
                        {'                                    '}"image": "1655057875.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057875.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057875.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 2",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72568,{'\n'}
                        {'                                    '}"image": "1655057879.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057879.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057879.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 4",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72569,{'\n'}
                        {'                                    '}"image": "1655057883.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057883.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057883.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 11",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72570,{'\n'}
                        {'                                    '}"image": "1655057886.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057886.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057886.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 5",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72571,{'\n'}
                        {'                                    '}"image": "1655057890.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057890.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057890.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 1",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72572,{'\n'}
                        {'                                    '}"image": "1655057897.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057897.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057897.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 15",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72573,{'\n'}
                        {'                                    '}"image": "1655057901.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057901.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057901.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 12",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72574,{'\n'}
                        {'                                    '}"image": "1655057915.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057915.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057915.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 6",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72575,{'\n'}
                        {'                                    '}"image": "1655057918.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057918.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057918.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 8",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72576,{'\n'}
                        {'                                    '}"image": "1655057923.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057923.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057923.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "Deck 9",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 72577,{'\n'}
                        {'                                    '}"image": "1655057927.png",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1655057927.png",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1655057927.png",
                        {'\n'}
                        {'                                    '}"type": "plan"{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "lip",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67775,{'\n'}
                        {'                                    '}"image": "1626190096.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190096.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190096.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "live music",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67776,{'\n'}
                        {'                                    '}"image": "1626190976.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190976.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190976.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "atrium-1",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67777,{'\n'}
                        {'                                    '}"image": "1626191313.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191313.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191313.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "blue-iguana-bar",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67778,{'\n'}
                        {'                                    '}"image": "1626191334.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191334.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191334.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "spa-thalassotherapy",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67779,{'\n'}
                        {'                                    '}"image": "1626191344.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191344.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191344.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "mini-golf",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67780,{'\n'}
                        {'                                    '}"image": "1626191365.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191365.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191365.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "piano-bar",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67781,{'\n'}
                        {'                                    '}"image": "1626191378.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191378.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191378.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "pools",
                        {'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67782,{'\n'}
                        {'                                    '}"image": "1626191381.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191381.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191381.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"caption": "skycourse",{'\n'}
                        {'                                    '}"default": "N",
                        {'\n'}
                        {'                                    '}"id": 67783,{'\n'}
                        {'                                    '}"image": "1626191389.jpg",{'\n'}
                        {'                                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191389.jpg",
                        {'\n'}
                        {'                                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191389.jpg",
                        {'\n'}
                        {'                                    '}"type": "photo"
                        {'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"shipname": "Carnival Breeze",{'\n'}
                        {'                            '}"specialservices": [],{'\n'}
                        {'                            '}"sprice": 1125.24,{'\n'}
                        {'                            '}"startdate": "2024-03-07",
                        {'\n'}
                        {'                            '}"status": "Booked",{'\n'}
                        {'                            '}"tablesize": 0,{'\n'}
                        {'                            '}"voyagecode": ""{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"currency": "USD",{'\n'}
                        {'                        '}"enddate": "",{'\n'}
                        {'                        '}"itemkey": "1060793622",{'\n'}
                        {'                        '}"price": 1125.24,{'\n'}
                        {'                        '}"scurrency": "USD",{'\n'}
                        {'                        '}"sprice": 1125.24,{'\n'}
                        {'                        '}"startdate": "",{'\n'}
                        {'                        '}"type": "cruise"{'\n'}
                        {'                    '}
                        {'}'}
                        {'\n'}
                        {'                '}],{'\n'}
                        {'                '}"city": "City",{'\n'}
                        {'                '}"country": "US",{'\n'}
                        {'                '}"county": "OR",{'\n'}
                        {'                '}"creditcard": "0",{'\n'}
                        {'                '}"datebookedutc": "2024-02-01T11:45:17Z",
                        {'\n'}
                        {'                '}"email": "jasonh@test.com",{'\n'}
                        {'                '}"enddate": "2024-03-11",{'\n'}
                        {'                '}"firstname": "jas",{'\n'}
                        {'                '}"grosstotal": 1125.24,{'\n'}
                        {'                '}"id": 12821997,{'\n'}
                        {'                '}"language": "en",{'\n'}
                        {'                '}"lastname": "har",{'\n'}
                        {'                '}"middlename": "",{'\n'}
                        {'                '}"outstandingbalance": 1125.24,{'\n'}
                        {'                '}"ownerid": "xeni.site.traveltek.net",
                        {'\n'}
                        {'                '}"passengers": [{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"address": "1111 Test St",{'\n'}
                        {'                        '}"age": 35,{'\n'}
                        {'                        '}"city": "City",{'\n'}
                        {'                        '}"country": "US",{'\n'}
                        {'                        '}"dob": "1985-11-15",{'\n'}
                        {'                        '}"firstname": "jas",{'\n'}
                        {'                        '}"gender": "M",{'\n'}
                        {'                        '}"lastname": "har",{'\n'}
                        {'                        '}"middlename": "",{'\n'}
                        {'                        '}"nationality": "US",{'\n'}
                        {'                        '}"paxno": 1,{'\n'}
                        {'                        '}"paxtype": "adult",{'\n'}
                        {'                        '}"postcode": "97123",{'\n'}
                        {'                        '}"title": "Mr"{'\n'}
                        {'                    '}
                        {'}'},{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"address": "1111 Test St",{'\n'}
                        {'                        '}"age": 35,{'\n'}
                        {'                        '}"city": "City",{'\n'}
                        {'                        '}"country": "US",{'\n'}
                        {'                        '}"dob": "1985-11-15",{'\n'}
                        {'                        '}"emergencyemail": null,{'\n'}
                        {'                        '}"emergencyname": null,{'\n'}
                        {'                        '}"emergencyphone": null,{'\n'}
                        {'                        '}"firstname": "jas",{'\n'}
                        {'                        '}"gender": "M",{'\n'}
                        {'                        '}"height": null,{'\n'}
                        {'                        '}"insuranceassistancecompany": null,{'\n'}
                        {'                        '}"insurancecompany": null,{'\n'}
                        {'                        '}"insurancepolicynumber": null,
                        {'\n'}
                        {'                        '}"insurancetelnumber": null,
                        {'\n'}
                        {'                        '}"lastname": "har",{'\n'}
                        {'                        '}"mealoption": null,{'\n'}
                        {'                        '}"middlename": "",{'\n'}
                        {'                        '}"mobile": "5035557777",{'\n'}
                        {'                        '}"nationality": "US",{'\n'}
                        {'                        '}"nokaddress1": null,{'\n'}
                        {'                        '}"nokaddress2": null,{'\n'}
                        {'                        '}"nokaddress3": null,{'\n'}
                        {'                        '}"nokaddress4": null,{'\n'}
                        {'                        '}"nokname": null,{'\n'}
                        {'                        '}"nokphone": null,{'\n'}
                        {'                        '}"nokrelationship": null,{'\n'}
                        {'                        '}"passport": null,{'\n'}
                        {'                        '}"passportauthority": null,{'\n'}
                        {'                        '}"passportexpiry": null,{'\n'}
                        {'                        '}"passportplaceofissue": null,
                        {'\n'}
                        {'                        '}"passportstart": null,{'\n'}
                        {'                        '}"paxno": 2,{'\n'}
                        {'                        '}"paxtype": "adult",{'\n'}
                        {'                        '}"placeofbirth": null,{'\n'}
                        {'                        '}"postcode": "97123",{'\n'}
                        {'                        '}"redress": null,{'\n'}
                        {'                        '}"roomno": null,{'\n'}
                        {'                        '}"specialservices": "ARRAY(0x7f4cf02359e8)",
                        {'\n'}
                        {'                        '}"telephone": "5035557777",{'\n'}
                        {'                        '}"title": "Mr",{'\n'}
                        {'                        '}"travelling": "",{'\n'}
                        {'                        '}"weight": null{'\n'}
                        {'                    '}
                        {'}'}
                        {'\n'}
                        {'                '}],{'\n'}
                        {'                '}"postcode": "97123",{'\n'}
                        {'                '}"returndate": "2024-03-11",{'\n'}
                        {'                '}"startdate": "2024-03-07",{'\n'}
                        {'                '}"telephone": "5035557777",{'\n'}
                        {'                '}"title": "Mr",{'\n'}
                        {'                '}"totalhandlingfee": 0,{'\n'}
                        {'                '}"totalhandlingfeeplustransaction": 0,
                        {'\n'}
                        {'                '}"totalprice": 1125.24,{'\n'}
                        {'                '}"totaltransactionamount": 0,{'\n'}
                        {'                '}"transactiondateutc": "2024-02-01T11:45:22Z",{'\n'}
                        {'                '}"transactions": [],{'\n'}
                        {'                '}"website": "xeni.site.traveltek.net"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"bookingid": 12821997,{'\n'}
                        {'            '}"status": "Booked"{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"timing": {'{'}
                        {'\n'}
                        {'        '}"items": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Initiate Endpoint",
                        {'\n'}
                        {'                '}"time": "0.000009"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Auth Check Pass",{'\n'}
                        {'                '}"time": "0.025726"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"total": "6.053791"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"warnings": []{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h2 id="FRD-CruiseIntegration-Booking-MVP1-ConfirmationPage">Confirmation Page</h2>
              <p>
                Pre-condition: When the user select book now, and completes their information,
                personal and payment details of a selected cruise item. <br />
                And the backend sent the request to the vendor´s endpoint{' '}
                <code>POST: /book.pl</code>
                <br />
                And received a successful HTTP:200 without any error description on the “Errors”
                object. <br />
                <br />
                It is required to build a confirmation page accordingly to the design:
                <br />
              </p>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  alt="image-20240212-135411.png"
                  width={1446}
                  loading="lazy"
                  src="attachments/609976321/616464388.png?width=1446"
                  data-image-src="attachments/609976321/616464388.png"
                  data-height={4442}
                  data-width={3667}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={616464388}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240212-135411.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={609976321}
                  data-linked-resource-container-version={12}
                  data-media-id="685fe6dc-b19c-46bf-832f-b828197f9cb4"
                  data-media-type="file"
                />
              </span>
              <hr />
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-Matchingcomponents:">
                Matching components:
              </h3>
              <div className="table-wrap">
                <table
                  data-table-width={1442}
                  data-layout="default"
                  data-local-id="3c201060-8aba-4364-bdb1-3e1589837271"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '364.0px' }} />
                    <col style={{ width: '596.0px' }} />
                    <col style={{ width: '480.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comment</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Booking ID</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/book.pl.response."reservation": "F9WZ03"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>CruiseDetails</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>It is the same of the previous page. (checkOut page)</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Price Details</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>It is the same of the previous page (checkOut Page)</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Details.image</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Dinning seating</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>The time selected by the user in previous page</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Itinerary Details</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>POST:/book.pl.response."itinerary"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          For the PoC it should be build over what we received, then when we got the
                          static data we need to define how to enhance it.{' '}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <hr />
              <h2 id="FRD-CruiseIntegration-Booking-MVP1-ErrorHandling">Error Handling</h2>
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-Addbasketitem">Add basket item</h3>
              <p>Display the process error and return user to select a different item to book. </p>
              <h3 id="FRD-CruiseIntegration-Booking-MVP1-Bookingprocess">Booking process</h3>
              <h4 id="FRD-CruiseIntegration-Booking-MVP1-RemoveItemfromBasket:">
                Remove Item from Basket:
              </h4>
              <p>
                <strong>Params</strong>:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>requestId</strong>: The authentication accessToken
                  </p>
                </li>
                <li>
                  <p>
                    <strong>sessionkey</strong>: Returned value from cabinGrades.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>basketKey</strong>: The itemkey returned at time of addBasket.
                  </p>
                </li>
              </ul>
              <p />
              <div id="expander-2083921534" className="expand-container">
                <div id="expander-control-2083921534" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">request example</span>
                </div>
                <div id="expander-content-2083921534" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --request GET
                        'https://fusionapi.traveltek.net/2.1/json/basketremove.pl?requestid=cd35c1e7k5195-4d03-ab3e-5b7171b04868&amp;sessionkey=3B5F9C6A-A3D8m41C4-9DD3-3A06B43E1ECE&amp;basketkey=1059969845'
                        \{'\n'}--header 'Accept: application/json; charset=utf-8'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-1727927943" className="expand-container">
                <div id="expander-control-1727927943" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">response example</span>
                </div>
                <div id="expander-content-1727927943" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"errors": [],{'\n'}
                        {'    '}"meta": {'{'}
                        {'\n'}
                        {'        '}"criteria": {'{'}
                        {'\n'}
                        {'            '}"sessionkey": "3B5F9C6A-A3D8m41C4-9DD3-3A06B43E1ECE",{'\n'}
                        {'            '}"type": "basket"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"defaultcurrency": {'{'}
                        {'\n'}
                        {'            '}"code": "USD",{'\n'}
                        {'            '}"symbol": "&amp;dollar;"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"rows": 1{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"results": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"basketitems": [],{'\n'}
                        {'            '}"itinerarycode": "MSL54S",{'\n'}
                        {'            '}"totalprice": 0{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"timing": {'{'}
                        {'\n'}
                        {'        '}"items": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Initiate Endpoint",
                        {'\n'}
                        {'                '}"time": "0.000010"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Auth Check Pass",{'\n'}
                        {'                '}"time": "0.032146"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"total": "0.155262"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"warnings": []{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h2 id="FRD-CruiseIntegration-Booking-MVP1-Design">Design</h2>
              <p>
                <a
                  className="external-link"
                  data-card-appearance="inline"
                  href="https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=0-1&mode=design&t=hJzrte09wyPjzkeb-0"
                  rel="nofollow"
                >
                  https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&amp;node-id=0-1&amp;mode=design&amp;t=hJzrte09wyPjzkeb-0
                </a>{' '}
                Cruise
              </p>
              <p />
              <p>
                <br />
              </p>
              <p style={{ marginLeft: '60.0px' }} />
            </div>
            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>
              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976330.png">
                  AvailabilityCruiseFlowDiagram.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976333.png">image-20240111-132409.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976336.png">
                  GeoExpediaLocationsProcess.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976339.png">ExpediaProperyIDs_logic.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976342.drawio">
                  ExpediaProperyIDs_logic.drawio
                </a>{' '}
                (binary/octet-stream)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976345.json">
                  RCI - XML 4.0.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976348.png">RCI_B2B_Flow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976351.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976354.png">image-20231205-123414.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976357.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976360.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976363.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976366.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976369.png">AvailabilityFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976372.png">GetStaticDataFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976375.txt">List of Regions.txt</a> (text/plain)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609976378.png">image-20240111-125313.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/609812532.png">BookingFlow_SeqDiagram.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/610304010.png">CruiseBookingFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/610304001.png">CruiseBookingFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/616235033.png">image-20240212-120105.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/609976321/616464388.png">image-20240212-135411.png</a>{' '}
                (image/png)
                <br />
              </div>
            </div>
          </div>{' '}
        </div>
        <div id="footer" role="contentinfo">
          <section className="footer-body">
            <p>Document generated by Confluence on Jun 24, 2024 05:26</p>
            <div id="footer-logo">
              <a href="http://www.atlassian.com/">Atlassian</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default FRDCruisesIntegrationBooking
