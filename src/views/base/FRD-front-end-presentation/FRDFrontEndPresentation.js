import React from 'react'

function FRDFrontEndPresentation() {
  return (
    <>
      <title>XeniApp : FRD - Front-end presentation</title>
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
                <li>
                  <span>
                    <a href="FRD---Cruise-Integration---Shopping---MVP1_603619329.html">
                      FRD - Cruise Integration - Shopping - MVP1
                    </a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FRD - Front-end presentation</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Feb 20,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <hr />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206738596 {padding: 0px;}\ndiv.rbtoc1719206738596 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206738596 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206738596">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-Front-endpresentation-SearchWidget">Search Widget</a>
                  </li>
                  <li>
                    <a href="#FRD-Front-endpresentation-VendorAvailabilityRequest">
                      Vendor Availability Request
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-Front-endpresentation-WidgettoRequest">Widget to Request</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-Front-endpresentation-BasicRequestExample">
                              Basic Request Example
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#FRD-Front-endpresentation-ProposalSolution">Proposal Solution</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-Front-endpresentation-XeniAPI:GET:cruise/availability">
                          Xeni API: GET: cruise/availability
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-Front-endpresentation-XeniAPI:GET:/cruise/availability">
                              Xeni API: GET: /cruise/availability
                            </a>
                          </li>
                          <li>
                            <a href="#FRD-Front-endpresentation-DataMapping">Data Mapping</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#FRD-Front-endpresentation-UIPresentationcomponents">
                      UI Presentation components
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-Front-endpresentation-ProposalavailabilityFlow:">
                          Proposal availability Flow:
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#FRD-Front-endpresentation-MatchingComponentsXeniAPIdesign">
                      Matching Components Xeni API design
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-Front-endpresentation-CruiseCard:(1stView)">
                          Cruise Card: (1st View)
                        </a>
                      </li>
                      <li>
                        <a href="#FRD-Front-endpresentation-SelectedCruiseview:">
                          Selected Cruise view:
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-Front-endpresentation-TabOverview">Tab Overview</a>
                            <ul className="toc-indentation">
                              <li>
                                <a href="#FRD-Front-endpresentation-Cruiseinfo">Cruise info</a>
                              </li>
                              <li>
                                <a href="#FRD-Front-endpresentation-Cabindescription">
                                  Cabin description
                                </a>
                              </li>
                              <li>
                                <a href="#FRD-Front-endpresentation-CategorySelection">
                                  Category Selection
                                </a>
                              </li>
                              <li>
                                <a href="#FRD-Front-endpresentation-Selectpreferredavailableoffer">
                                  Select preferred available offer
                                </a>
                              </li>
                              <li>
                                <a href="#FRD-Front-endpresentation-DeckOptions(Nicetohave)">
                                  Deck Options (Nice to have)
                                </a>
                              </li>
                              <li>
                                <a href="#FRD-Front-endpresentation-CabinoptionforCategory">
                                  Cabin option for Category
                                </a>
                              </li>
                              <li>
                                <a href="#FRD-Front-endpresentation-TabItinerary">Tab Itinerary</a>
                              </li>
                              <li>
                                <a href="#FRD-Front-endpresentation-TAB-Amenities">
                                  TAB - Amenities
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="FRD-Front-endpresentation-SearchWidget">
                <strong>Search Widget</strong>
              </h1>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240111-132409.png"
                  width={910}
                  loading="lazy"
                  src="attachments/603717650/618790918.png?width=910"
                  data-image-src="attachments/603717650/618790918.png"
                  data-height={210}
                  data-width={910}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={618790918}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240111-132409.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="45921e25-fe74-41ae-962d-ea5d30988fbb"
                  data-media-type="file"
                />
              </span>
              <p>
                <strong>Widget components</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Select Region</strong>: Displays the list of Regions according to the
                    regions file from provider.{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>When</strong>: User can select my desired departure date and month
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Duration</strong>: User could select an duration option like: (Display
                    the name and return the value)
                  </p>
                  <ul>
                    <li>
                      <p>1 for 1-4 nights, </p>
                    </li>
                    <li>
                      <p>2 for 5-10, </p>
                    </li>
                    <li>
                      <p>3 for 11-16, </p>
                    </li>
                    <li>
                      <p>4 for 17-31, </p>
                    </li>
                    <li>
                      <p>5 for 32+</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Cruise Type</strong>: Displays the list of enabled cruises for Xeni from
                    static Data.{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Passengers</strong>: User can select the quantity and type of passengers
                    as follow:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <em>
                          <strong>Adults</strong>: From 17 Yrs to end (Default value 2)
                        </em>
                      </p>
                    </li>
                    <li>
                      <p>
                        <em>
                          <strong>Children</strong>: From 2yrs to 17yrs (Default value: 0)
                        </em>
                      </p>
                    </li>
                    <li>
                      <p>
                        <em>
                          <strong>Infants</strong>: 0-2yrs (Default value: 0)
                        </em>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="confluence-information-macro confluence-information-macro-information">
                <span className="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>Non of the fields are required but</p>
                </div>
              </div>
              <p />
              <hr />
              <h1 id="FRD-Front-endpresentation-VendorAvailabilityRequest">
                Vendor Availability Request
              </h1>
              <h2 id="FRD-Front-endpresentation-WidgettoRequest">
                <strong>Widget to Request</strong>
              </h2>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="availabilityRequestMatch.png"
                  width={848}
                  loading="lazy"
                  src="attachments/603717650/604241931.png?width=848"
                  data-image-src="attachments/603717650/604241931.png"
                  data-height={541}
                  data-width={848}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={604241931}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="availabilityRequestMatch.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="f084a725-1df9-458d-b92d-a06267973ef9"
                  data-media-type="file"
                />
              </span>
              <p />
              <h3 id="FRD-Front-endpresentation-BasicRequestExample">Basic Request Example</h3>
              <div id="expander-1469098637" className="expand-container">
                <div id="expander-control-1469098637" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    GET: https://fusionapi.traveltek.net/2.1/json/cruiseresults.pl
                  </span>
                </div>
                <div id="expander-content-1469098637" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'  '}curl --location
                        'https://fusionapi.traveltek.net/2.1/json/cruiseresults.pl?requestid=97218e52p17f8-4e4c-b05f-c0c3a368bac9&amp;adults=2&amp;currency=USD&amp;startdate=2024-02-01&amp;enddate=2024-02-28&amp;language=en&amp;regionid=2&amp;sid=49572&amp;site=xeni.site.traveltek.net&amp;spreadnights=1'
                        \{'\n'}--header 'Accept: application/json; charset=utf-8'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <p>
                The response will return a list of cruise offers available for the date range
                (startDate and endDate)
              </p>
              <div id="expander-730577322" className="expand-container">
                <div id="expander-control-730577322" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Example Response</span>
                </div>
                <div id="expander-content-730577322" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'            '}"line": {'{'}
                        {'\n'}
                        {'                '}"logout":
                        "https://static.traveltek.net/cruisepics/logos/carnival.gif",
                        {'\n'}
                        {'                '}"id": 8,{'\n'}
                        {'                '}"name": "Carnival Cruise Line",{'\n'}
                        {'                '}"engine": "Carnival"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"seadays": 2,{'\n'}
                        {'            '}"resultno": "302_641.0",{'\n'}
                        {'            '}"hascruiseonly": "Y",{'\n'}
                        {'            '}"hasflights": "N",{'\n'}
                        {'            '}"cruiseid": 255300,{'\n'}
                        {'            '}"airoutsidepricecode": "",{'\n'}
                        {'            '}"airsuitepricecode": "",{'\n'}
                        {'            '}"saildate": "2024-02-22",{'\n'}
                        {'            '}"airoutside": "0.00",{'\n'}
                        {'            '}"roundtrip": "Y",{'\n'}
                        {'            '}"returnuk": "N",{'\n'}
                        {'            '}"soldout": "0",{'\n'}
                        {'            '}"portnames": [{'\n'}
                        {'                '}"Galveston",{'\n'}
                        {'                '}"Cozumel",{'\n'}
                        {'                '}"Galveston"{'\n'}
                        {'            '}],{'\n'}
                        {'            '}"displaycruiseonly": true,{'\n'}
                        {'            '}"stoplive": 0,{'\n'}
                        {'            '}"shipname": "Carnival Breeze",{'\n'}
                        {'            '}"cruisebalconypricecode": "PGO",{'\n'}
                        {'            '}"linename": "Carnival Cruise Line",{'\n'}
                        {'            '}"airinsidepricecode": "",{'\n'}
                        {'            '}"airbalconypricecode": "",{'\n'}
                        {'            '}"codetocruiseid": 1824281,{'\n'}
                        {'            '}"endport": "Galveston",{'\n'}
                        {'            '}"classifications": [],{'\n'}
                        {'            '}"altvoyagecode": "",{'\n'}
                        {'            '}"cruisesuitepricecode": "PGO",{'\n'}
                        {'            '}"airinside": "0.00",{'\n'}
                        {'            '}"heroimg": {'{'}
                        {'}'},{'\n'}
                        {'            '}"classificationnames": [],{'\n'}
                        {'            '}"csiairportlist": [],{'\n'}
                        {'            '}"cruisebalcony": "2464.00",{'\n'}
                        {'            '}"nights": 4,{'\n'}
                        {'            '}"sourcelive": 1,{'\n'}
                        {'            '}"special": "no",{'\n'}
                        {'            '}"name": "Western Caribbean From Galveston, TX",{'\n'}
                        {'            '}"voyagecode": "",{'\n'}
                        {'            '}"nofly": "N",{'\n'}
                        {'            '}"cruiseoutsidepricecode": "PGO",{'\n'}
                        {'            '}"regionname": [{'\n'}
                        {'                '}"Caribbean"{'\n'}
                        {'            '}],{'\n'}
                        {'            '}"returndate": "2024-02-26",{'\n'}
                        {'            '}"startdate": "2024-02-22",{'\n'}
                        {'            '}"type": "cruise",{'\n'}
                        {'            '}"enddate": "2024-02-26",{'\n'}
                        {'            '}"cruisesuite": "5428.00",{'\n'}
                        {'            '}"uniqueportnames": [{'\n'}
                        {'                '}"Galveston",{'\n'}
                        {'                '}"Cozumel"{'\n'}
                        {'            '}],{'\n'}
                        {'            '}"airsuite": "0.00",{'\n'}
                        {'            '}"startport": "Galveston",{'\n'}
                        {'            '}"cruiseinsidepricecode": "PGO",{'\n'}
                        {'            '}"price": "1888.00",{'\n'}
                        {'            '}"airbalcony": "0.00",{'\n'}
                        {'            '}"resultiscruiseonly": "Y",{'\n'}
                        {'            '}"cruiseoutside": "2428.00",{'\n'}
                        {'            '}"cruiseinside": "1888.00",{'\n'}
                        {'            '}"sailnights": 4,{'\n'}
                        {'            '}"resultweight": 0,{'\n'}
                        {'            '}"ownerid": "system",{'\n'}
                        {'            '}"ship": {'{'}
                        {'\n'}
                        {'                '}"imagecaption": "Carnival Breeze",{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1595423212.png",
                        {'\n'}
                        {'                '}"id": 1196,{'\n'}
                        {'                '}"name": "Carnival Breeze",{'\n'}
                        {'                '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"shiprating": 5,{'\n'}
                        {'            '}"airport": ""{'\n'}
                        {'        '}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <p>
                Based on the response, per cruise available, it is required to get the cabin rate
                codes, and the specific details of ship offered (Static data:{' '}
                <a
                  href="Cache-cruise-Ship-data._607485953.html"
                  data-linked-resource-id={607485953}
                  data-linked-resource-version={5}
                  data-linked-resource-type="page"
                >
                  Cache cruise Ship data.
                </a>{' '}
                )
              </p>
              <p />
              <hr />
              <h1 id="FRD-Front-endpresentation-ProposalSolution">Proposal Solution </h1>
              <p>
                In order to get the entire data required to hydrate the visual components for
                consumer to expose the offer per each cruise offer, the proposal flow contemplate:
              </p>
              <h2 id="FRD-Front-endpresentation-XeniAPI:GET:cruise/availability">
                Xeni API: GET: cruise/availability
              </h2>
              <p>Create an internal API to get the cruise available content to display:</p>
              <p>
                This method will required to orchestrate the vendor endpoint{' '}
                <code>GET: /cruisesearch.pl</code> and the internal API{' '}
                <code>GET: /cruise/shipinformation</code> to generate the content in a single call
                to fulfill the UI.{' '}
              </p>
              <p>
                <strong>Proposal Flow:</strong>
              </p>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  alt="XeniOrchestrationCruiseAvailability.png"
                  width={1446}
                  loading="lazy"
                  src="attachments/603717650/606437408.png?width=1446"
                  data-image-src="attachments/603717650/606437408.png"
                  data-height={1389}
                  data-width={1509}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={606437408}
                  data-linked-resource-version={6}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="XeniOrchestrationCruiseAvailability.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="ad1d2e19-6280-486f-9a7d-ae4a5fd0c687"
                  data-media-type="file"
                />
              </span>
              <p>
                <strong>Examples</strong>
              </p>
              <div id="expander-531214460" className="expand-container">
                <div id="expander-control-531214460" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET: /cruisecabin request</span>
                </div>
                <div id="expander-content-531214460" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location
                        'https://fusionapi.traveltek.net/2.1/json/cruisecabins.pl?requestid=5b4b6999j069b-4132-9c34-81bdcc80c7dc&amp;sessionkey=6851FBAA-154Ak44EF-BC2B-3600AFA66944&amp;adults=2&amp;codetocruiseid=1824281&amp;getcruisecontent=1&amp;gradeno=212%3APGO%3A2&amp;language=en&amp;resultno=212_0.1058044278&amp;sid=49572&amp;site=xeni.site.traveltek.net&amp;resultkey=default&amp;ratecode=PGO'
                        \{'\n'}--header 'Accept: application/json; charset=utf-8'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-823997720" className="expand-container">
                <div id="expander-control-823997720" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET: /cruisecabinResponse </span>
                </div>
                <div id="expander-content-823997720" className="expand-content">
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
                        {'            '}"codetocruiseid": 1824281,{'\n'}
                        {'            '}"gradeno": "212:PGO:2",{'\n'}
                        {'            '}"language": "en",{'\n'}
                        {'            '}"ratecode": "PGO",{'\n'}
                        {'            '}"resultno": "212_0.1058044278",{'\n'}
                        {'            '}"sessionkey": "6851FBAA-154Ak44EF-BC2B-3600AFA66944",{'\n'}
                        {'            '}"shipid": 1196,{'\n'}
                        {'            '}"showalldecks": 0,{'\n'}
                        {'            '}"sid": "49572",{'\n'}
                        {'            '}"site": "xeni.site.traveltek.net"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"decklegend": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Twin Bed and Single Sofa Bed",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314363.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and Single
                        Sofa Bed",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314429.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and 2 Upper
                        Pullmans",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314467.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King), Single Sofa
                        Bed and 1 Upper Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314472.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and 1 Upper
                        Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314488.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and Double
                        Sofa Bed",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314504.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King), Single Sofa
                        Bed and 2 Upper Pullmans. Beds do not convert to King when both Upper
                        Pullmans in use",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314573.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Connecting staterooms (ideal for families
                        and groups of friends)",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314618.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Twin Beds do not convert to a King Bed.",
                        {'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314632.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Stateroom with 2 Porthole Windows",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314638.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Unisex Wheelchair Accessible Restroom",
                        {'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314673.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Accessible Routes including Ramps",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314675.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Modified Staterooms, Restrooms, Elevators,
                        Lifts and other Accessible Areas",
                        {'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314704.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "All Accommodations are Non-Smoking",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314736.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds conver to King 1 Lower Pullman
                        and 1 Upper Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404377840.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds conver to King Double Sofabed
                        and 1 Lower Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404377880.png"
                        {'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"decks": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"deckcode": "Main",{'\n'}
                        {'                '}"deckid": 4024,{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057879.png",
                        {'\n'}
                        {'                '}"name": "Deck 2 Main"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"deckcode": "Main",{'\n'}
                        {'                '}"deckid": 4024,{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057879.png",
                        {'\n'}
                        {'                '}"name": "Deck 2 Main"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"defaultcurrency": {'{'}
                        {'\n'}
                        {'            '}"code": "USD",{'\n'}
                        {'            '}"symbol": "&amp;dollar;"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"rows": 2{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"results": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"bathdescription": "Shower",{'\n'}
                        {'            '}"bedcode": "UL",{'\n'}
                        {'            '}"bedconfig": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "LT",{'\n'}
                        {'                    '}"description": "LOWER TWIN BED"
                        {'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"beddescription": "Upper And Lower Berth",
                        {'\n'}
                        {'            '}"cabingrade": "1A",{'\n'}
                        {'            '}"cabinid": 39692,{'\n'}
                        {'            '}"cabinno": "11268",{'\n'}
                        {'            '}"deckcode": "Panorama",{'\n'}
                        {'            '}"deckid": "4024",{'\n'}
                        {'            '}"deckname": "Deck 11 Panorama",{'\n'}
                        {'            '}"farecode": "PGO",{'\n'}
                        {'            '}"guaranteed": "N",{'\n'}
                        {'            '}"location": "INSIDE/MIDSHIP",{'\n'}
                        {'            '}"maxguests": 2,{'\n'}
                        {'            '}"minguests": 1,{'\n'}
                        {'            '}"modified": 1,{'\n'}
                        {'            '}"position": "",{'\n'}
                        {'            '}"resultno": "212:PGO:2_0",{'\n'}
                        {'            '}"shipside": ""{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"bathdescription": "Shower",{'\n'}
                        {'            '}"bedcode": "UL",{'\n'}
                        {'            '}"bedconfig": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "LT",{'\n'}
                        {'                    '}"description": "LOWER TWIN BED"
                        {'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"beddescription": "Upper And Lower Berth",
                        {'\n'}
                        {'            '}"cabingrade": "1A",{'\n'}
                        {'            '}"cabinid": 39692,{'\n'}
                        {'            '}"cabinno": "11269",{'\n'}
                        {'            '}"deckcode": "Panorama",{'\n'}
                        {'            '}"deckid": "4024",{'\n'}
                        {'            '}"deckname": "Deck 11 Panorama",{'\n'}
                        {'            '}"farecode": "PGO",{'\n'}
                        {'            '}"guaranteed": "N",{'\n'}
                        {'            '}"location": "INSIDE/MIDSHIP",{'\n'}
                        {'            '}"maxguests": 2,{'\n'}
                        {'            '}"minguests": 1,{'\n'}
                        {'            '}"modified": 1,{'\n'}
                        {'            '}"position": "",{'\n'}
                        {'            '}"resultno": "212:PGO:2_1",{'\n'}
                        {'            '}"shipside": "",{'\n'}
                        {'            '}"x1": 308,{'\n'}
                        {'            '}"x2": 342,{'\n'}
                        {'            '}"y1": 958,{'\n'}
                        {'            '}"y2": 1029{'\n'}
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
                        {'                '}"time": "0.029009"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Start CruiseCabins",
                        {'\n'}
                        {'                '}"time": "0.000079"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Retrieved Deck Data.",
                        {'\n'}
                        {'                '}"time": "1.411674"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Sending Request To Supplier",{'\n'}
                        {'                '}"time": "0.000034"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Received Supplier Response",{'\n'}
                        {'                '}"time": "2.455128"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Building Response",
                        {'\n'}
                        {'                '}"time": "0.000025"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Returning Response",
                        {'\n'}
                        {'                '}"time": "0.000250"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"total": "3.896848"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"warnings": []{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <h3 id="FRD-Front-endpresentation-XeniAPI:GET:/cruise/availability">
                Xeni API: GET: /cruise/availability
              </h3>
              <div id="expander-1277703987" className="expand-container">
                <div id="expander-control-1277703987" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request example</span>
                </div>
                <div id="expander-content-1277703987" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'  '}"correlationId": "unique identifier associated with user SessionId for
                        Tracing purposes",{'\n'}
                        {'  '}"language":"The language of the user settings",{'\n'}
                        {'  '}"currency":"the currency code of the user settings",
                        {'\n'}
                        {'  '}"location": "RegionID for Search",{'\n'}
                        {'  '}"startDate": "Date selected by User",{'\n'}
                        {'  '}"endDate": "End date should be calculated from startDate + n less than
                        30days",{'\n'}
                        {'  '}"travelers": {'{'}
                        {'\n'}
                        {'    '}"adults": "quantity of adults",{'\n'}
                        {'    '}"children": "quantity of children from 2-17",{'\n'}
                        {'    '}"infants": "quantity of INF from 0-1"{'\n'}
                        {'  '}
                        {'}'},{'\n'}
                        {'  '}"travelerPreferences": {'{'}
                        {'\n'}
                        {'    '}"preferredCruiseLines": [{'\n'}
                        {'      '}"cruiselineid,Value from static data cruise list"
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"duration": "ENUM [1 for 1-4 nights, 2 for 5-10, 3 for 11-16, 4 for
                        17-31, and 5 for 32+]"{'\n'}
                        {'  '}
                        {'}'}
                        {'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-859959685" className="expand-container">
                <div id="expander-control-859959685" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response model example</span>
                </div>
                <div id="expander-content-859959685" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}"data":[{'\n'}
                        {'    '}
                        {'{'}
                        {'\n'}
                        {'        '}"sessionkey": "6E934C0E-4E77o453A-8110-66277F741C81",{'\n'}
                        {'        '}"resultno": "302_685.0",{'\n'}
                        {'        '}"codetocruiseid": 1824281,{'\n'}
                        {'        '}"returndate": "2024-02-26",{'\n'}
                        {'        '}"startdate": "2024-02-22",{'\n'}
                        {'        '}"sailnights": 4,{'\n'}
                        {'        '}"sailName": "Western Caribbean From Galveston, TX",{'\n'}
                        {'        '}"cruiseLine": {'{'}
                        {'\n'}
                        {'            '}"engine": "Carnival",{'\n'}
                        {'            '}"name": "Carnival Cruise Line",{'\n'}
                        {'            '}"id": 8,{'\n'}
                        {'            '}"logourl":
                        "https://static.traveltek.net/cruisepics/logos/carnival.gif"
                        {'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"shipInformation": {'{'}
                        {'\n'}
                        {'            '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",
                        {'\n'}
                        {'            '}"imagecaption": "Carnival Breeze",{'\n'}
                        {'            '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1595423212.png",
                        {'\n'}
                        {'            '}"id": 1196,{'\n'}
                        {'            '}"name": "Carnival Breeze",{'\n'}
                        {'            '}"code": "BR",{'\n'}
                        {'            '}"starrating": 5,{'\n'}
                        {'            '}"occupancy": 3690,{'\n'}
                        {'            '}"tonnage": 130000,{'\n'}
                        {'            '}"totalcabins": 1845,{'\n'}
                        {'            '}"totalcrew": 1386,{'\n'}
                        {'            '}"shortdescription": "On Carnival Breeze, fun-fan faves like
                        SportSquare, and mouth-watering dining spots like Cucina del Capitano, are
                        just the beginning of how this ship keeps the fun blazing.\r\n\r\nSpeaking
                        of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or
                        south-of-the-border taco goodness at BlueIguana Cantina. There’s always
                        family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the
                        Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint —
                        roadside-burger-shack style — featuring hot-off-the-grill burgers designed
                        by celebrity chef Guy Fieri!\r\n\r\nThere are many fish in the sea, and
                        Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked
                        exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And
                        to go just a little less refined, stop by Pizza Pirate for a hot slice, the
                        Carnival Deli for a true classic, or Guy’s Pig &amp; Anchor Bar-B-Que
                        Smokehouse to get a little messy with some signature — you guessed it — Guy
                        Fieri BBQ. On this ship, you just can’t get enough Guy!\r\n\r\nCarnival
                        Breeze has the whole family covered — with water, that is — with a
                        320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids
                        there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And
                        for the bigger people, there’s time to be spent doing blissfully nothing at
                        Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of
                        course.\r\n\r\nKeep the fun going once the sun’s done for the day — have a
                        truly moving experience at the multi-dimensional Thrill Theater, get your
                        lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist
                        Productions… or if you prefer to do your dancing on a dance floor, check out
                        Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail
                        concoctions made with ingredients a little less ordinary and flavors a lot
                        more interesting.\r\n\r\nIf you notice a bit of the outdoors inside, don’t
                        adjust your view. Carnival Breeze’s staterooms — and many of the public
                        spaces around the ship — feature a scintillating tropical décor and
                        contemporary furnishings that’ll transport you straight to warm Caribbean
                        bliss.",{'\n'}
                        {'            '}"portnames": [{'\n'}
                        {'                '}"Galveston",{'\n'}
                        {'                '}"Cozumel",{'\n'}
                        {'                '}"Galveston"{'\n'}
                        {'            '}],{'\n'}
                        {'            '}"displayPrices": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"lowestPrice": "results[n].price"
                        {'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cruiseoutside": "2428.00",{'\n'}
                        {'                    '}"cruiseoutsidepricecode": "PGO"
                        {'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cruiseinside": "1816.00",{'\n'}
                        {'                    '}"cruiseinsidepricecode": "PGO"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cruisebalcony": "2464.00",{'\n'}
                        {'                    '}"cruiseoutsidepricecode": "PGO"
                        {'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cruisesuite": "5428.00",{'\n'}
                        {'                    '}"cruisesuitepricecode": "PGO"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"decks": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 1",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4023,{'\n'}
                        {'                    '}"imageid": 72572,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057897.png",
                        {'\n'}
                        {'                    '}"name": "Deck 1 Riviera"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 2",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4024,{'\n'}
                        {'                    '}"imageid": 72568,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057879.png",
                        {'\n'}
                        {'                    '}"name": "Deck 2 Main"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 3",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4025,{'\n'}
                        {'                    '}"imageid": 72567,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057875.png",
                        {'\n'}
                        {'                    '}"name": "Deck 3 Lobby"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 4",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4026,{'\n'}
                        {'                    '}"imageid": 72569,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057883.png",
                        {'\n'}
                        {'                    '}"name": "Deck 4 Mezzanine"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 5",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4027,{'\n'}
                        {'                    '}"imageid": 72571,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057890.png",
                        {'\n'}
                        {'                    '}"name": "Deck 5 Promenade"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 6",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4028,{'\n'}
                        {'                    '}"imageid": 72575,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057918.png",
                        {'\n'}
                        {'                    '}"name": "Deck 6 Upper"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 7",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4029,{'\n'}
                        {'                    '}"imageid": 72565,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057868.png",
                        {'\n'}
                        {'                    '}"name": "Deck 7 Empress"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 8",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4030,{'\n'}
                        {'                    '}"imageid": 72576,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057923.png",
                        {'\n'}
                        {'                    '}"name": "Deck 8 Verandah"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 9",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4031,{'\n'}
                        {'                    '}"imageid": 72577,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057927.png",
                        {'\n'}
                        {'                    '}"name": "Deck 9 Vista"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 10",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4032,{'\n'}
                        {'                    '}"imageid": 72566,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057872.png",
                        {'\n'}
                        {'                    '}"name": "Deck 10 Lido"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 11",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4033,{'\n'}
                        {'                    '}"imageid": 72570,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057886.png",
                        {'\n'}
                        {'                    '}"name": "Deck 11 Panorama"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 12",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4034,{'\n'}
                        {'                    '}"imageid": 72574,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057915.png",
                        {'\n'}
                        {'                    '}"name": "Deck 12 Spa"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 14",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4035,{'\n'}
                        {'                    '}"imageid": 72564,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057864.png",
                        {'\n'}
                        {'                    '}"name": "Deck 14"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 15",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4036,{'\n'}
                        {'                    '}"imageid": 72573,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057901.png",
                        {'\n'}
                        {'                    '}"name": "Deck 15 Serenity"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"description": "On Carnival Breeze, fun-fan faves like
                        SportSquare, and mouth-watering dining spots like Cucina del Capitano, are
                        just the beginning of how this ship keeps the fun blazing.\r\n\r\nSpeaking
                        of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or
                        south-of-the-border taco goodness at BlueIguana Cantina. There’s always
                        family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the
                        Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint —
                        roadside-burger-shack style — featuring hot-off-the-grill burgers designed
                        by celebrity chef Guy Fieri!\r\n\r\nThere are many fish in the sea, and
                        Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked
                        exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And
                        to go just a little less refined, stop by Pizza Pirate for a hot slice, the
                        Carnival Deli for a true classic, or Guy’s Pig &amp; Anchor Bar-B-Que
                        Smokehouse to get a little messy with some signature — you guessed it — Guy
                        Fieri BBQ. On this ship, you just can’t get enough Guy!\r\n\r\nCarnival
                        Breeze has the whole family covered — with water, that is — with a
                        320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids
                        there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And
                        for the bigger people, there’s time to be spent doing blissfully nothing at
                        Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of
                        course.\r\n\r\nKeep the fun going once the sun’s done for the day — have a
                        truly moving experience at the multi-dimensional Thrill Theater, get your
                        lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist
                        Productions… or if you prefer to do your dancing on a dance floor, check out
                        Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail
                        concoctions made with ingredients a little less ordinary and flavors a lot
                        more interesting.\r\n\r\nIf you notice a bit of the outdoors inside, don’t
                        adjust your view. Carnival Breeze’s staterooms — and many of the public
                        spaces around the ship — feature a scintillating tropical décor and
                        contemporary furnishings that’ll transport you straight to warm Caribbean
                        bliss.",{'\n'}
                        {'            '}"cabintypes": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "1A",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "E7D994",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Twin bed and one upper pullman. Desk
                        and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.\r\n",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1631711074.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Upper/Lower",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1631711074.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4A",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "00AD86",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606848.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606848.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4B",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "FCDEEB",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606970.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606970.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4C",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "FBA61C",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606975.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606975.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4D",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "DF93A3",{'\n'}
                        {'                    '}"deckid": 4028,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606980.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606980.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4E",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "C4DF9C",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606985.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606985.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4F",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "B4DFF4",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606989.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606989.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4G",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "EBD201",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606995.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606995.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4H",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "9AD3B7",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607000.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607000.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4J",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "B44A6F",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Picture window facing public
                        observation deck.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607065.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom (Obstructed Views)",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607065.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4S",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "74A534",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. Ample closet
                        space.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa reservations,
                        free fitness classes, unlimited access to the thermal suites, exclusive
                        discounts on treatments during port days and more.\r\n\r\nUnique welcome
                        ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal Suites and
                        Thalassotherapy Pool\r\nComplimentary scrub kit to use in our Thermal
                        Suites\r\nTwo complimentary fitness classes (per guest)\r\nComplimentary
                        body composition analysis\r\nExclusive discounts on treatments during port
                        days\r\nCloud 9 Spa bathrobes and slippers\r\nUpgraded Elemis in-stateroom
                        toiletries\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607502.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Interior",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607502.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6A",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "F15923",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets. Picture
                        window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607299.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean View Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607299.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6L",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "F9A980",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower plus separate washroom with sink and junior tub. 3 closets. Picture
                        window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607342.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607342.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6M",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "E7B220",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower plus separate washroom with sink and junior tub. 3
                        closets. Picture window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607347.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607347.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6N",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "A75E4A",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), two
                        upper pullmans and single sofa bed. Privacy curtain. Sofa and coffee table.
                        Desk and seat. Full bathroom with shower plus separate washroom with sink
                        and junior tub. 3 closets. Picture window.\r\n\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607355.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607355.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6S",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "7CADBA",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. Ample closet space. Picture window facing public observation
                        deck.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa reservations,
                        free fitness classes, unlimited access to the thermal suites, exclusive
                        discounts on treatments during port days and more.\r\n\r\nAmbulatory
                        Accessible Stateroom: This stateroom is designed for use by guests with
                        mobility limitations, who do not require the regular use of a wheelchair,
                        scooter or other similar assistive devices. For example, it is ideal for
                        guests who only use an assistive device (like a cane or walker) for
                        traversing longer distances, and who may benefit from certain accessible
                        features like grab bars, to assist with balance.\r\n\r\nUnique welcome
                        ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal Suites and
                        Thalassotherapy Pool\r\nComplimentary scrub kit to use in our Thermal
                        Suites\r\nTwo complimentary fitness classes (per guest)\r\nComplimentary
                        body composition analysis\r\nExclusive discounts on treatments during port
                        days\r\nCloud 9 Spa bathrobes and slippers\r\nUpgraded Elemis in-stateroom
                        toiletries\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607470.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Spa Ocean View Stateroom (Obstructed
                        View)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607470.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "7C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "C7B2D6",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private cove balcony with patio chairs
                        and table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival
                        Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and
                        drawer space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607514.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cove Balcony Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607514.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8A",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "BD55A0",{'\n'}
                        {'                    '}"deckid": 4028,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462280.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462280.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8B",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "FFD88F",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Desk and seat. Sofa and coffee table. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462281.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462281.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "F27180",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private balcony with patio chairs and table.\r\n\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462286.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462286.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8D",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "99B463",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011796.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011796.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8E",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "DCD3D0",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011803.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011803.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8F",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "B07588",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1606901923.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1606901923.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8G",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "ED1D30",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462347.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462347.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8M",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "A7A2A9",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private aft-facing extended balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607705.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Aft View Extended Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607705.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8N",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "C47C1E",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private aft-facing extended balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607727.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Aft View Extended Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607727.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8P",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "4E88C6",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. Ample closet space. Private balcony with patio
                        chairs and table.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa
                        reservations, free fitness classes, unlimited access to the thermal suites,
                        exclusive discounts on treatments during port days and more.\r\n\r\nUnique
                        welcome ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal
                        Suites and Thalassotherapy Pool\r\nComplimentary scrub kit to use in our
                        Thermal Suites\r\nTwo complimentary fitness classes (per
                        guest)\r\nComplimentary body composition analysis\r\nExclusive discounts on
                        treatments during port days\r\nCloud 9 Spa bathrobes and
                        slippers\r\nUpgraded Elemis in-stateroom toiletries\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013087.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Balcony",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013087.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8S",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "CCE3F1",{'\n'}
                        {'                    '}"deckid": 4034,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. Ample closet space. Private balcony with patio chairs and
                        table.\r\n\r\nUnique welcome ritual.\r\nPriority spa
                        reservations.\r\nUnlimited use of Thermal Suites and Hydrotherapy
                        Pool.\r\nComplimentary scrub kit to use in our Thermal Suites.\r\nTwo
                        complimentary fitness classes (per guest).\r\nComplimentary body composition
                        analysis.\r\nExclusive discounts on treatments during port days.\r\nCloud 9
                        Spa bathrobes and slippers.\r\nUpgraded Elemis in-stateroom
                        toiletries.\r\nDedicated room steward.\r\nSoft, cozy linens (Carnival
                        Comfort Collection).\r\nIn-room safe for valuables.\r\nPlenty of closet and
                        drawer space.\r\nTelevision.\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013332.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Spa Balcony Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013332.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "9C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "EC037C",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private wraparound balcony with patio chairs and table.\r\n\r\nDedicated
                        room steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room
                        safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607775.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Premium Vista Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607775.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "BL",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "Balcony staterooms were designed for
                        maximum sea breeze and the most stunning views, so look to a balcony if
                        you're looking to cruise aboard Carnival Breeze. Any time you're in your
                        room, you're just steps away from your own personal outdoor oasis, featuring
                        the sort of sea view you can also feel.\r\n\r\n\r\n\r\nDedicated room
                        steward\r\nCarnival Comfort Collection® linens\r\nPlenty of closet and
                        drawer space\r\nIn-room safe for valuables\r\nTelevision\r\nStateroom
                        climate control\r\n",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880487.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880487.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "GS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "DE761B",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/bidet/double sinks. Walk-in dressing area with vanity
                        table, seat and ample closet space. Private large balcony with patio chairs
                        and table.\r\n\r\nPriority check-in and boarding\r\nPriority dinner
                        reservations for select specialty restaurants\r\nPriority main dining room
                        time assignment (Early, Late or Your Time Dining)\r\nPriority debarkation at
                        all ports\r\nTwo large bottles of water\r\nPillow-top
                        mattresses\r\nBathrobes\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607836.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Grand Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607836.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "IS",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "This is an affordable way to cruise
                        without leaving out the comfort or convenience! Great for curling up after a
                        long day of fun.\r\n\r\n\r\nDedicated room steward\r\nCarnival Comfort
                        Collection® linens\r\nPlenty of closet and drawer space\r\nIn-room safe for
                        valuables\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358611.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Inside Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358611.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "JS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "697921",{'\n'}
                        {'                    '}"deckid": 4031,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa, armchair and coffee table. Desk and seat. Full
                        bathroom with shower/whirlpool tub/double sinks. 2 large closets. Walk-in
                        dressing area with ample closet space. Private standard-size balcony with
                        obstructed view; patio chairs and table.\r\n\r\nPriority check-in and
                        boarding\r\nPriority dinner reservations for select specialty
                        restaurants\r\nPriority main dining room time assignment (Early, Late or
                        Your Time Dining)\r\nPriority debarkation at all ports\r\nTwo large bottles
                        of water\r\nPillow-top mattresses\r\nBathrobes\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608098.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Junior Suite(Obstructed View)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608098.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "OS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "00B1D2",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet
                        space. Private large balcony with patio chairs and table.\r\n\r\nPriority
                        check-in and boarding\r\nPriority dinner reservations for select specialty
                        restaurants\r\nPriority main dining room time assignment (Early, Late or
                        Your Time Dining)\r\nPriority debarkation at all ports\r\nTwo large bottles
                        of water\r\nPillow-top mattresses\r\nBathrobes\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608104.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608104.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "OV",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "A picture window gives you views of
                        scenery you won’t find anywhere on land, all from the comfort of your
                        stateroom.\r\n\r\nDedicated room steward\r\nCarnival Comfort Collection®
                        linens\r\nPlenty of closet and drawer space\r\nIn-room safe for
                        valuables\r\nTelevision\r\nStateroom climate control",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880549.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean View Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880549.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "PT",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "CFA8A5",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Two porthole windows.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608114.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Porthole",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608114.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "SS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "00AAAD",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet
                        space. Private large balcony with patio chairs and table.\r\n\r\nExclusive
                        Cloud 9 Spa amenities: Priority spa reservations, free fitness classes,
                        unlimited access to the thermal suites, exclusive discounts on treatments
                        during port days and more.\r\nNote: Exclusive amenities apply to 1st and 2nd
                        guests only; 3rd and 4th guests are not entitled to the exclusive
                        amenities.\r\n\r\nUnique welcome ritual.\r\nPriority spa
                        reservations.\r\nUnlimited use of Thermal Suites and Hydrotherapy
                        Pool.\r\nComplimentary scrub kit to use in our Thermal Suites.\r\nTwo
                        complimentary fitness classes (per guest).\r\nComplimentary body composition
                        analysis.\r\nExclusive discounts on treatments during port days.\r\nCloud 9
                        Spa bathrobes and slippers.\r\nUpgraded Elemis in-stateroom
                        toiletries.\r\nPriority check-in and boarding.\r\nPriority dinner
                        reservations for select specialty restaurants.\r\nPriority main dining room
                        time assignment (Early, Late or Your Time Dining).\r\nPriority debarkation
                        at all ports.\r\nTwo large bottles of water.\r\nPillow-top
                        mattresses.\r\nDedicated room steward.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608124.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608124.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "ST",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "Get all the comforts of home and
                        then some, with absolutely none of the hassles. Since your suite gives you
                        VIP status, you’re the priority when it comes to getting on and off the
                        ship. Plus, you’ll receive a ton of exclusive amenities making this the
                        ultimate way to cruise. Get comfy… stretch out, put your feet up, or just
                        spend time on your balcony — you’ve got one of our most spacious rooms.",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358917.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Suite - Guaranteed",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358917.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"facilities": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Recreational",{'\n'}
                        {'                    '}"categoryid": "5",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1662",{'\n'}
                        {'                            '}"facilitytypeid": "1662",
                        {'\n'}
                        {'                            '}"name": "Aft Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "455",{'\n'}
                        {'                            '}"facilitytypeid": "455",
                        {'\n'}
                        {'                            '}"name": "Camp Carnival",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "64",{'\n'}
                        {'                            '}"facilitytypeid": "64",
                        {'\n'}
                        {'                            '}"name": "Library",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1633",{'\n'}
                        {'                            '}"facilitytypeid": "1633",
                        {'\n'}
                        {'                            '}"name": "Lido Marketplace",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "141",{'\n'}
                        {'                            '}"facilitytypeid": "141",
                        {'\n'}
                        {'                            '}"name": "Nightclub",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1187",{'\n'}
                        {'                            '}"facilitytypeid": "1187",
                        {'\n'}
                        {'                            '}"name": "Tides Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Entertainment",{'\n'}
                        {'                    '}"categoryid": "2",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1666",{'\n'}
                        {'                            '}"facilitytypeid": "1666",
                        {'\n'}
                        {'                            '}"name": "Camp Ocean",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1311",{'\n'}
                        {'                            '}"facilitytypeid": "1311",
                        {'\n'}
                        {'                            '}"name": "Casino",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1634",{'\n'}
                        {'                            '}"facilitytypeid": "1634",
                        {'\n'}
                        {'                            '}"name": "Cherry on Top",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "165",{'\n'}
                        {'                            '}"facilitytypeid": "165",
                        {'\n'}
                        {'                            '}"name": "Children's Club",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "443",{'\n'}
                        {'                            '}"facilitytypeid": "443",
                        {'\n'}
                        {'                            '}"name": "Dance Club",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "157",{'\n'}
                        {'                            '}"facilitytypeid": "157",
                        {'\n'}
                        {'                            '}"name": "Dance Floor",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "449",{'\n'}
                        {'                            '}"facilitytypeid": "449",
                        {'\n'}
                        {'                            '}"name": "Gaming Club Casino",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "946",{'\n'}
                        {'                            '}"facilitytypeid": "946",
                        {'\n'}
                        {'                            '}"name": "Night Club",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1635",{'\n'}
                        {'                            '}"facilitytypeid": "1635",
                        {'\n'}
                        {'                            '}"name": "Ocean{'  '}Plaza",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1668",{'\n'}
                        {'                            '}"facilitytypeid": "1668",
                        {'\n'}
                        {'                            '}"name": "Ovation Theater",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1276",{'\n'}
                        {'                            '}"facilitytypeid": "1276",
                        {'\n'}
                        {'                            '}"name": "Royal Theater",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "459",{'\n'}
                        {'                            '}"facilitytypeid": "459",
                        {'\n'}
                        {'                            '}"name": "Seaside Theatre",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "149",{'\n'}
                        {'                            '}"facilitytypeid": "149",
                        {'\n'}
                        {'                            '}"name": "Theatre",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Fitness",{'\n'}
                        {'                    '}"categoryid": "4",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "218",{'\n'}
                        {'                            '}"facilitytypeid": "218",
                        {'\n'}
                        {'                            '}"name": "Fitness Center",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "148",{'\n'}
                        {'                            '}"facilitytypeid": "148",
                        {'\n'}
                        {'                            '}"name": "Gym",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "177",{'\n'}
                        {'                            '}"facilitytypeid": "177",
                        {'\n'}
                        {'                            '}"name": "Jogging Track",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1063",{'\n'}
                        {'                            '}"facilitytypeid": "1063",
                        {'\n'}
                        {'                            '}"name": "Wellness Centre",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Technology",{'\n'}
                        {'                    '}"categoryid": "6",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "3",{'\n'}
                        {'                            '}"facilitytypeid": "3",{'\n'}
                        {'                            '}"name": "Internet Cafe",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "178",{'\n'}
                        {'                            '}"facilitytypeid": "178",
                        {'\n'}
                        {'                            '}"name": "Satelite Telephone",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "189",{'\n'}
                        {'                            '}"facilitytypeid": "189",
                        {'\n'}
                        {'                            '}"name": "Satelite TV in Cabins",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Other",{'\n'}
                        {'                    '}"categoryid": "7",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1188",{'\n'}
                        {'                            '}"facilitytypeid": "1188",
                        {'\n'}
                        {'                            '}"name": "BlueIguana Cantina",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1182",{'\n'}
                        {'                            '}"facilitytypeid": "1182",
                        {'\n'}
                        {'                            '}"name": "Bonsai Sushi",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1441",{'\n'}
                        {'                            '}"facilitytypeid": "1441",
                        {'\n'}
                        {'                            '}"name": "Limelight Lounge",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "211",{'\n'}
                        {'                            '}"facilitytypeid": "211",
                        {'\n'}
                        {'                            '}"name": "Shops",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1440",{'\n'}
                        {'                            '}"facilitytypeid": "1440",
                        {'\n'}
                        {'                            '}"name": "The Fun Shops",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Relaxation",{'\n'}
                        {'                    '}"categoryid": "3",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1632",{'\n'}
                        {'                            '}"facilitytypeid": "1632",
                        {'\n'}
                        {'                            '}"name": "Beach Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1437",{'\n'}
                        {'                            '}"facilitytypeid": "1437",
                        {'\n'}
                        {'                            '}"name": "Cloud 9 Spa",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "188",{'\n'}
                        {'                            '}"facilitytypeid": "188",
                        {'\n'}
                        {'                            '}"name": "Sauna",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1",{'\n'}
                        {'                            '}"facilitytypeid": "1",{'\n'}
                        {'                            '}"name": "Spa",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "53",{'\n'}
                        {'                            '}"facilitytypeid": "53",
                        {'\n'}
                        {'                            '}"name": "Steam Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "462",{'\n'}
                        {'                            '}"facilitytypeid": "462",
                        {'\n'}
                        {'                            '}"name": "Thalassotherapy Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Food and Drink",{'\n'}
                        {'                    '}"categoryid": "1",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "136",{'\n'}
                        {'                            '}"facilitytypeid": "136",
                        {'\n'}
                        {'                            '}"name": "24-hour Room Service",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1181",{'\n'}
                        {'                            '}"facilitytypeid": "1181",
                        {'\n'}
                        {'                            '}"name": "Alchemy Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "237",{'\n'}
                        {'                            '}"facilitytypeid": "237",
                        {'\n'}
                        {'                            '}"name": "Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "267",{'\n'}
                        {'                            '}"facilitytypeid": "267",
                        {'\n'}
                        {'                            '}"name": "BBQ",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "589",{'\n'}
                        {'                            '}"facilitytypeid": "589",
                        {'\n'}
                        {'                            '}"name": "Bimini Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1185",{'\n'}
                        {'                            '}"facilitytypeid": "1185",
                        {'\n'}
                        {'                            '}"name": "BlueIguana Tequila Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1190",{'\n'}
                        {'                            '}"facilitytypeid": "1190",
                        {'\n'}
                        {'                            '}"name": "Carnival WaterWorks",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1629",{'\n'}
                        {'                            '}"facilitytypeid": "1629",
                        {'\n'}
                        {'                            '}"name": "Cucina del Capitano",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "194",{'\n'}
                        {'                            '}"facilitytypeid": "194",
                        {'\n'}
                        {'                            '}"name": "Dining Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1649",{'\n'}
                        {'                            '}"facilitytypeid": "1649",
                        {'\n'}
                        {'                            '}"name": "Fahrenheit 555 Steakhouse",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "674",{'\n'}
                        {'                            '}"facilitytypeid": "674",
                        {'\n'}
                        {'                            '}"name": "Lanai Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "753",{'\n'}
                        {'                            '}"facilitytypeid": "753",
                        {'\n'}
                        {'                            '}"name": "Lobby Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "196",{'\n'}
                        {'                            '}"facilitytypeid": "196",
                        {'\n'}
                        {'                            '}"name": "Piano Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "90",{'\n'}
                        {'                            '}"facilitytypeid": "90",
                        {'\n'}
                        {'                            '}"name": "Pizzeria",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1184",{'\n'}
                        {'                            '}"facilitytypeid": "1184",
                        {'\n'}
                        {'                            '}"name": "RedFrog Pub",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1186",{'\n'}
                        {'                            '}"facilitytypeid": "1186",
                        {'\n'}
                        {'                            '}"name": "RedFrog Rum Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "398",{'\n'}
                        {'                            '}"facilitytypeid": "398",
                        {'\n'}
                        {'                            '}"name": "Rising Tide Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1669",{'\n'}
                        {'                            '}"facilitytypeid": "1669",
                        {'\n'}
                        {'                            '}"name": "Sapphire Dining Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "115",{'\n'}
                        {'                            '}"facilitytypeid": "115",
                        {'\n'}
                        {'                            '}"name": "Sports Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1191",{'\n'}
                        {'                            '}"facilitytypeid": "1191",
                        {'\n'}
                        {'                            '}"name": "Sports Square",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "598",{'\n'}
                        {'                            '}"facilitytypeid": "598",
                        {'\n'}
                        {'                            '}"name": "Tequila/Tapas Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1003",{'\n'}
                        {'                            '}"facilitytypeid": "1003",
                        {'\n'}
                        {'                            '}"name": "The Atrium",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"images": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Carnival Breeze",{'\n'}
                        {'                    '}"default": "Y",{'\n'}
                        {'                    '}"id": "59101",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1595423212.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1595423212.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Suite",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64152",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653728.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608653728.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653728.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Spa",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64155",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653776.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608653776.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653776.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Waterworks",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64165",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654094.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654094.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654094.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Waterworks-1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64166",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654118.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654118.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654118.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64170",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654364.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654364.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654364.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 2",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64173",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654390.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654390.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654390.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Pool",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "65711",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1610368302.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1610368302.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1610368302.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64176",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654406.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654406.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654406.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Serenity 5",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64191",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655132.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655132.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655132.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Serenity 4",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64192",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655166.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655166.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655166.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Camp Ocean 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64204",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655412.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655412.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655412.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 4",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64207",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655759.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655759.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655759.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64208",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655906.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655906.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655906.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 2",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64209",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655923.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655923.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655923.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Lip Sync Battle",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64215",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656183.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656183.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656183.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Blue Iguana Bar 4",
                        {'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64216",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656217.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656217.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656217.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Redfrog Pub",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64217",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656253.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656253.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656253.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Thrill Theater",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64218",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656482.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656482.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656482.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Thrill Theater",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64219",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656506.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656506.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656506.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "lip",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67775",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190096.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626190096.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190096.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "live music",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67776",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190976.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626190976.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190976.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "atrium-1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67777",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191313.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191313.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191313.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "blue-iguana-bar",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67778",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191334.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191334.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191334.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "spa-thalassotherapy",
                        {'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67779",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191344.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191344.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191344.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "mini-golf",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67780",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191365.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191365.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191365.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "piano-bar",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67781",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191378.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191378.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191378.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "pools",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67782",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191381.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191381.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191381.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "skycourse",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67783",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191389.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191389.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191389.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}
                        {'}'}
                        {'\n'}],{'\n'}"meta":{'{'}
                        {'\n'}
                        {'    '}"count":"Quantity of results",{'\n'}
                        {'    '}"timing":"elaspsed time processed since requests to response",{'\n'}
                        {'    '}"correlationId":"Track id for each session that consume the api
                        service."{'\n'}
                        {'}'}
                        {'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <h3 id="FRD-Front-endpresentation-DataMapping">Data Mapping</h3>
              <p>
                <strong>Request</strong>
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1442}
                  data-layout="default"
                  data-local-id="86e0fb06-bc3d-47f8-ad18-62c9b02231b5"
                  className="confluenceTable"
                >
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Xeni call</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Fusion Travel: GET /cruisesearch.pl (Param)</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>language</p>
                      </td>
                      <td className="confluenceTd">
                        <p>language</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>currency</p>
                      </td>
                      <td className="confluenceTd">
                        <p>currency</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>location</p>
                      </td>
                      <td className="confluenceTd">
                        <p>regionId</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          User select the value of the region and return the regionId to the method.
                          (Ref: TravelTek regions static data)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>startDate</p>
                      </td>
                      <td className="confluenceTd">
                        <p>startdate</p>
                      </td>
                      <td className="confluenceTd">
                        <p>User select “When” and populate the date</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>endDate</p>
                      </td>
                      <td className="confluenceTd">
                        <p>enddate</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Based on Xeni logic to calculate startDate + 30</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>travelers.adult</p>
                      </td>
                      <td className="confluenceTd">
                        <p>adult</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Quantity of Adults</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>travelers.children</p>
                      </td>
                      <td className="confluenceTd">
                        <p>children</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Quantity of Children</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>travelers.infants</p>
                      </td>
                      <td className="confluenceTd">
                        <p>infants</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Quantity of Infants</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>travelerPreferences.preferredCruiseLine</p>
                      </td>
                      <td className="confluenceTd">
                        <p>lineId</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Optional - Specific cruise line to search</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>travelerPreferences.duration</p>
                      </td>
                      <td className="confluenceTd">
                        <p>spreadnights</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Value that represent the preference sail nights. </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <p>
                <strong>Response</strong>
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1434}
                  data-layout="default"
                  data-local-id="9be052c6-23f6-4f54-9ccd-28626ca82b9c"
                  className="confluenceTable"
                >
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <code>Xeni Method</code>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Data Source</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p>
                          <code>GET: /cruise/availability (This name is just for example)</code>
                        </p>
                      </td>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p>
                          <strong>GET: /cruisesearch.pl</strong>
                        </p>
                      </td>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p />
                      </td>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>"codetocruiseid": 1824281</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].codetocruiseid</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>startdate</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].startdate</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>returndate</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].returndate</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>sailnights</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].sailnights</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shiprating</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].shiprating</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>sailName</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].name</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>cruiseLine</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <strong>GET: /cruise/shipInformation</strong>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>/cruise/shipInformation.cruiseLine</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The object line is the content expected in cruiseLine</p>
                      </td>
                    </tr>
                    <tr>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p>
                          <code>shipInformation</code>
                        </p>
                      </td>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p />
                      </td>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p>Object</p>
                      </td>
                      <td data-highlight-colour="#ffffff" className="confluenceTd">
                        <p>
                          Hold the entire information of the ship and the data to resolve in UI per
                          each available option
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipInformation.portnames</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].portnames</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>the same array</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipInformation.caption</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <strong>GET: /cruise/shipInformation</strong>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>/cruise/shipInformation.images.caption</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The name of the cruise in the property determine the image to get. </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipInformation.imageUrl</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>/cruise/shipInformation.images.imageUrl</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The image related to the caption value name.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.smallurl</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.id</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.name</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.code</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.starrating</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.occupancy</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.tonnage</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.totalcabins</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.totalcrew</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.shortdescription</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
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
                        <p>
                          <code>shipinformation.displayPrices</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          This is an Obj created to hold the prices to display as first view split
                          in <br />
                          lowest price for the cruise and the different price options for grades
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].lowest</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>results[n].price</p>
                      </td>
                      <td className="confluenceTd">
                        <p>the Lowest available price for the cruise</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruiseoutside</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          results{'{'}n{'}'}.<code>cruiseoutside</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The price of a grade.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruiseoutsidePriceCode</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          results[n].<code>cruiseoutsidePriceCode</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruiseinside</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>results[n].cruiseinside</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The price of inside grade, normally the cheapeast</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruiseinsidePriceCode</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          results[n].<code>cruiseinsidepricecode</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The ratecode priced.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruisebalcony</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          results[n].<code>cruisebalcony</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The price for Balcony Grade</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruisebalconyPriceCode</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>results[n].cruisebalconypricecode</p>
                      </td>
                      <td className="confluenceTd">
                        <p>The rate code priced.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruisesuite</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>results[n].cruisesuite</p>
                      </td>
                      <td className="confluenceTd">
                        <p>The rate for suites, normally the highest.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.displayPrices[n].cruisesuitePriceCode</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>results[n].cruisesuitepricecode</p>
                      </td>
                      <td className="confluenceTd">
                        <p>The rate code priced.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.decks</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>The entire decks obj</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinfromation.cabinTypes</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Only 1 cabin per grade offer in displayPrice obj</p>
                        <ul>
                          <li>
                            <p>Cruiseoutside</p>
                          </li>
                          <li>
                            <p>CruiseInside</p>
                          </li>
                          <li>
                            <p>Cruisebalcony</p>
                          </li>
                          <li>
                            <p>Cruisesuite</p>
                          </li>
                        </ul>
                        <p>
                          This object is just a presentation. The real cabin offers will return in
                          the next method to call /cruisecabingrades.pl
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>shipinformation.facilities</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>The same obj. Describe the list of facilities in the ship.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>ship.information.images</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          THe entire obj. Decribe each image to display more visual info to the
                          traveler.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>meta</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Response control </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>meta.count</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Quantitty of offers included. Each ship object</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>meta.timing</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Elapsed time between request and response in seconds</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <code>correlationId</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Unique identifier associated with the user session.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Response:</strong>
                <br />
              </p>
              <div className="confluence-information-macro confluence-information-macro-information">
                <span className="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>
                    The match correspond to 1 available cruise object based on the response of{' '}
                    <code>cruiseresults.pl </code>endpoint and the orchestration of a single{' '}
                    <code>cruisetocode</code>of the <code>cabingrades.pl</code> endpoint.
                  </p>
                </div>
              </div>
              <hr />
              <h1 id="FRD-Front-endpresentation-UIPresentationcomponents">
                UI Presentation components
              </h1>
              <p>
                According with the data and flow data of this analysis. It is highly recommended to
                change the presentation to the consumer:
              </p>
              <h2 id="FRD-Front-endpresentation-ProposalavailabilityFlow:">
                Proposal availability Flow:
              </h2>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  alt="CruisePresentationProposal.png"
                  width={1357}
                  loading="lazy"
                  src="attachments/603717650/609812501.png?width=1357"
                  data-image-src="attachments/603717650/609812501.png"
                  data-height={2302}
                  data-width={1357}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={609812501}
                  data-linked-resource-version={3}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="CruisePresentationProposal.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="7181ccb8-ee50-494a-b1b5-96cd9f9ea8c1"
                  data-media-type="file"
                />
              </span>
              <hr />
              <h1 id="FRD-Front-endpresentation-MatchingComponentsXeniAPIdesign">
                Matching Components Xeni API design
              </h1>
              <h2 id="FRD-Front-endpresentation-CruiseCard:(1stView)">Cruise Card: (1st View)</h2>
              <p>
                The cruise card is the first display of the Cruises offer for the entered
                parameters:
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240205-141356.png"
                  width={973}
                  loading="lazy"
                  src="attachments/603717650/613384195.png?width=973"
                  data-image-src="attachments/603717650/613384195.png"
                  data-height={150}
                  data-width={663}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={613384195}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240205-141356.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="3cfb4a8d-cd12-4926-af93-c6abd9461002"
                  data-media-type="file"
                />
              </span>
              <div className="table-wrap">
                <table
                  data-table-width={1442}
                  data-layout="default"
                  data-local-id="32293826-ed4a-4843-8cb3-7b6b95aa8285"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '243.0px' }} />
                    <col style={{ width: '590.0px' }} />
                    <col style={{ width: '607.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component Nbr</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>1</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisesearch.results[n].ship.smallimageurl</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>2</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisesearch.results[n].name</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>3</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          ship: <code>GET:/cruisesearch.results[n].ship.name</code>
                        </p>
                        <p>
                          embark: <code>GET:/cruisesearch.results[n].startdate</code>
                        </p>
                        <p>
                          From/To:
                          <code>GET:/cruisesearch.results[n].portnames</code>
                        </p>
                        <p>
                          Ports of call: <code>GET:/cruisesearch.results[n].portnames</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                        <p />
                        <ul>
                          <li>
                            <p>We need to display from portname, 1st item and last item.</p>
                          </li>
                        </ul>
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>4</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>/cruise/availabilityRS.shipinformation.shortdescription</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>This should come from static data. GET: /cruiseshipdetails + shipid</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>5</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET;/cruisesearch/results[n]. price</code> + Agency Markup
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The lowest available price offered.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>6</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisesearch/results[n]. price</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The real price for the cruise from the vendor including the xeni Markup
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>7</p>
                      </td>
                      <td className="confluenceTd">
                        <p>CommandCenter Agency Markup </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                View Details button: Send the request to vendor´s endpoint{' '}
                <code>GET:/cruisecabingrade.pl</code>
              </p>
              <hr />
              <h2 id="FRD-Front-endpresentation-SelectedCruiseview:">Selected Cruise view:</h2>
              <h3 id="FRD-Front-endpresentation-TabOverview">Tab Overview</h3>
              <h4 id="FRD-Front-endpresentation-Cruiseinfo">Cruise info</h4>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240205-144204.png"
                  width={1061}
                  loading="lazy"
                  src="attachments/603717650/613384206.png?width=1061"
                  data-image-src="attachments/603717650/613384206.png"
                  data-height={576}
                  data-width={1061}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={613384206}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240205-144204.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="f57b837f-9c44-4347-a0cf-47e07481f6f1"
                  data-media-type="file"
                />
              </span>
              <div className="table-wrap">
                <table
                  data-table-width={1438}
                  data-layout="default"
                  data-local-id="35ca61cf-cb12-4d44-9034-74cbeeb9ab7d"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '162.0px' }} />
                    <col style={{ width: '829.0px' }} />
                    <col style={{ width: '447.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component Nbr</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>1</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Overview Tab</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Default view: Overview</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>2</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          it is the same data from cruise card with different layout. <br />
                          <code>GET: /cruisesearch.results[n].name</code>
                          <br />
                          <code>GET: /cruisesearch.results[n]</code>.ship.name
                          <br />
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          This instance is a direct consumption of the vendor´s method, without
                          static data. It is required to add to each instance the next information:
                        </p>
                        <ul>
                          <li>
                            <p>ShipId</p>
                          </li>
                          <li>
                            <p>LineId</p>
                          </li>
                          <li>
                            <p>codeToCruise</p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>4</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <strong>Interior</strong>:{' '}
                          <code>GET: /cruisesearch.results[n].cruiseinside: "2832.00"</code> +{' '}
                          <code>cruiseinsidepricecode": "PGO"</code>
                          <br />
                          <strong>Outside View</strong>:{' '}
                          <code>GET: /cruisesearch.results[n]."cruiseoutside": "3060.00"</code> +{' '}
                          <code>"cruiseoutsidepricecode": "PGO"</code>
                          <br />
                          <strong>Balcony View</strong>:{' '}
                          <code>GET: /cruisesearch.results[n]."cruisebalcony": "4304.00"</code> +{' '}
                          <code>"cruisebalconypricecode": "PGO"</code>
                          <br />
                          <strong>Suite</strong>:{' '}
                          <code>GET: /cruisesearch.results[n]."cruisesuite": "6352.00"</code> +{' '}
                          <code>"cruisesuitepricecode": "PGO"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The grades category names should be order from cheapest to highest, and
                          being dynamically based on the names of the result Key.
                          <br />
                          The priceCode refer to the cheapest fare of each grade.{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>5</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Default selected: Interior (Lowest) </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Cabin Description</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>5</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Cabin Descriptions:
                          <br />
                          Pre-Condition: Based on a Grade selection:
                          <br />
                          Interior, Outside view, Balcony or Suite. <br />
                          We need to filter each cabin by type of grade:
                          <br />
                          GET: /cruisecabingrades.pl example response
                          <br />
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <br />
                          Group the cabins results by <code>Codetype</code>
                          <br />
                          sub-group: by <code>deckId</code>.
                        </p>
                        <p>General Store in memory for all option:</p>
                        <ul>
                          <li>
                            <p>
                              <code>"codetocruiseid": 1819370</code>
                            </p>
                          </li>
                          <li>
                            <p>
                              <code>"resultkey": "default"</code>
                            </p>
                          </li>
                          <li>
                            <p>
                              <code>"resultno": "212_0.1062302452"</code>
                            </p>
                          </li>
                          <li>
                            <p>
                              <code>"sessionkey": "6BCCE11D-7193r4824-9A6D-D8C91EBC2AA0"</code>
                            </p>
                          </li>
                        </ul>
                        <p />
                        <p>
                          <strong>Display:</strong>
                        </p>
                        <ul>
                          <li>
                            <p>Image of the cabin</p>
                          </li>
                          <li>
                            <p>Description of the cabin</p>
                          </li>
                        </ul>
                        <p>
                          <strong>Prices To display</strong>
                        </p>
                        <ul>
                          <li>
                            <p>
                              Obj: <code>gridpricing</code>{' '}
                            </p>
                          </li>
                          <li>
                            <p>Filter: “Available” (Detach all options “available”:”N”,)</p>
                          </li>
                          <li>
                            <p>
                              Display: <code>currency </code>+ <code>price</code>
                            </p>
                          </li>
                          <li>
                            <p>
                              Store: gradeno Key
                              <br />
                              <br />
                              Each price has the resultno key, which is a required key to book.
                              <br />
                              <br />
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 id="FRD-Front-endpresentation-Cabindescription">
                <strong>Cabin description</strong>
              </h4>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240206-104354.png"
                  width={881}
                  loading="lazy"
                  src="attachments/603717650/613974021.png?width=881"
                  data-image-src="attachments/603717650/613974021.png"
                  data-height={124}
                  data-width={881}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={613974021}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240206-104354.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="cc30e5b7-1d76-4767-96a6-ec305f65ca2e"
                  data-media-type="file"
                />
              </span>
              <p>
                The reference description of cabins based on the selected category, should come from
                Static data.{' '}
              </p>
              <p />
              <h4 id="FRD-Front-endpresentation-CategorySelection">Category Selection </h4>
              <p>
                Based on the selected grade, The user will see the lowest available cabin category
                description to select. <br />
                Once the user select the cabin category of preference, in the backend, the app will
                send a request to <code>GET:/cruisecabingrades.pl</code> to obtain the list of cabin
                option and the decks definition to display in the below section.
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240220-125559.png"
                  width={1041}
                  loading="lazy"
                  src="attachments/603717650/620822575.png?width=1041"
                  data-image-src="attachments/603717650/620822575.png"
                  data-height={330}
                  data-width={899}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={620822575}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240220-125559.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="5f3601ab-bb52-480c-aa01-52803da943fc"
                  data-media-type="file"
                />
              </span>
              <p></p>
              <p />
              <p>
                This view is build based on the response of the endpoint{' '}
                <code>GET:/cruisecabingrades.pl</code> - Depending on the Grade selected, (Interior
                (inside), Outside (Ocean View), Balcony, suites) from this response it is required
                to display only the options that match with: the property{' '}
                <code>"codtype": "suite"</code>
              </p>
              <p>
                <strong>Matching data</strong>
              </p>
              <div
                className="panel"
                style={{
                  backgroundColor: '#EAE6FF',
                  borderColor: '#998DD9',
                  borderWidth: 1,
                }}
              >
                <div className="panelContent" style={{ backgroundColor: '#EAE6FF' }}>
                  <p>
                    For PoC development to keep as simple as possible, we only take care of the
                    following components:
                  </p>
                </div>
              </div>
              <p>
                <strong>Cabin Category Card</strong>
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1438}
                  data-layout="default"
                  data-local-id="30510e4d-bf0e-4a7a-8676-265b628eccce"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '162.0px' }} />
                    <col style={{ width: '829.0px' }} />
                    <col style={{ width: '447.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component </strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Name</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            GET:/cruisecabingrades.pl.response.result[n]."name": "Club Balcony
                            Suite"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The items should be the matching the selected category (Suite) with the
                          codType property. Order from lowest to hightest
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Description</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabingrades.pl.response.result[n].description</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Thumbnail</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabingrades.pl.response.result[n]</code>.
                          <code>"smallimageurl"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Price</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabingrades.pl.response.result[n]."price": 3755.62</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 id="FRD-Front-endpresentation-Selectpreferredavailableoffer">
                <strong>Select preferred available offer</strong>
              </h4>
              <p>
                When the user clicks on <strong>select cabin</strong> button, Then the available
                price codes and bundle services expand below the selected instance:
                <br />
                Each available instance in the <code>gridpricing</code> obj should be expose in a
                grid price for user to select.
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240209-124618.png"
                  width={1049}
                  loading="lazy"
                  src="attachments/603717650/615940140.png?width=1049"
                  data-image-src="attachments/603717650/615940140.png"
                  data-height={251}
                  data-width={907}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={615940140}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240209-124618.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="f77dc299-b53c-4620-848a-390cc2f04520"
                  data-media-type="file"
                />
              </span>
              <p />
              <div id="expander-2013984775" className="expand-container">
                <div id="expander-control-2013984775" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">gridpricing &amp; ratecodes obj</span>
                </div>
                <div id="expander-content-2013984775" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {' '}
                        "gridpricing": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"available": "Y",{'\n'}
                        {'                    '}"fare": 182.46,{'\n'}
                        {'                    '}"fees": 0,{'\n'}
                        {'                    '}"gradeno": "212:KGO:0",{'\n'}
                        {'                    '}"gratuity": 0,{'\n'}
                        {'                    '}"price": 536,{'\n'}
                        {'                    '}"ratecode": "KGO",{'\n'}
                        {'                    '}"taxes": 0{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"available": "Y",{'\n'}
                        {'                    '}"fare": 246.46,{'\n'}
                        {'                    '}"gradeno": "212:KSV:0",{'\n'}
                        {'                    '}"price": 600,{'\n'}
                        {'                    '}"ratecode": "KSV",{'\n'}
                        {'                    '}"taxes": 0{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"available": "N",{'\n'}
                        {'                    '}"ratecode": "QCP"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"available": "N",{'\n'}
                        {'                    '}"ratecode": "QS5"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"available": "N",{'\n'}
                        {'                    '}"ratecode": "KM1"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"available": "N",{'\n'}
                        {'                    '}"ratecode": "KNS"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]{'\n'}
                        ====================================================================================================================================================
                        {'\n'}"ratecodes": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "QCP",{'\n'}
                        {'                    '}"faretype": "gross",{'\n'}
                        {'                    '}"military": 0,{'\n'}
                        {'                    '}"name": "CHOICE PLUS valid from 09/02/2024 to
                        29/02/2024",{'\n'}
                        {'                    '}"nett": 0,{'\n'}
                        {'                    '}"nonrefundable": 0,{'\n'}
                        {'                    '}"pastpassenger": 0,{'\n'}
                        {'                    '}"rateend": "2024-02-29",{'\n'}
                        {'                    '}"ratestart": "2024-02-09",{'\n'}
                        {'                    '}"senior": 0{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "QS5",{'\n'}
                        {'                    '}"faretype": "gross",{'\n'}
                        {'                    '}"military": 0,{'\n'}
                        {'                    '}"name": "SUN&amp;#39;S OUT - FUN&amp;#39;S OUT valid
                        from 09/02/2024 to 21/02/2024",
                        {'\n'}
                        {'                    '}"nett": 0,{'\n'}
                        {'                    '}"nonrefundable": 0,{'\n'}
                        {'                    '}"pastpassenger": 0,{'\n'}
                        {'                    '}"rateend": "2024-02-21",{'\n'}
                        {'                    '}"ratestart": "2024-02-09",{'\n'}
                        {'                    '}"senior": 0{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "KM1",{'\n'}
                        {'                    '}"faretype": "gross",{'\n'}
                        {'                    '}"military": 1,{'\n'}
                        {'                    '}"name": "MILITARY RATES valid from 09/02/2024 to
                        30/06/2026",{'\n'}
                        {'                    '}"nett": 0,{'\n'}
                        {'                    '}"nonrefundable": 0,{'\n'}
                        {'                    '}"pastpassenger": 0,{'\n'}
                        {'                    '}"rateend": "2026-06-30",{'\n'}
                        {'                    '}"ratestart": "2024-02-09",{'\n'}
                        {'                    '}"senior": 0{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "KNS",{'\n'}
                        {'                    '}"faretype": "gross",{'\n'}
                        {'                    '}"military": 0,{'\n'}
                        {'                    '}"name": "FUN SELECT valid from 09/02/2024 to
                        31/12/2029",{'\n'}
                        {'                    '}"nett": 0,{'\n'}
                        {'                    '}"nonrefundable": 0,{'\n'}
                        {'                    '}"pastpassenger": 0,{'\n'}
                        {'                    '}"rateend": "2029-12-31",{'\n'}
                        {'                    '}"ratestart": "2024-02-09",{'\n'}
                        {'                    '}"senior": 0{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "KSV",{'\n'}
                        {'                    '}"faretype": "gross",{'\n'}
                        {'                    '}"military": 0,{'\n'}
                        {'                    '}"name": "SUPER SAVER valid from 09/02/2024 to
                        31/12/2029",{'\n'}
                        {'                    '}"nett": 0,{'\n'}
                        {'                    '}"nonrefundable": 0,{'\n'}
                        {'                    '}"pastpassenger": 0,{'\n'}
                        {'                    '}"rateend": "2029-12-31",{'\n'}
                        {'                    '}"ratestart": "2024-02-09",{'\n'}
                        {'                    '}"senior": 0{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"code": "KGO",{'\n'}
                        {'                    '}"faretype": "gross",{'\n'}
                        {'                    '}"military": 0,{'\n'}
                        {'                    '}"name": "INTERLINE PROGRAM valid from 09/02/2024 to
                        31/12/2029",{'\n'}
                        {'                    '}"nett": 0,{'\n'}
                        {'                    '}"nonrefundable": 0,{'\n'}
                        {'                    '}"pastpassenger": 0,{'\n'}
                        {'                    '}"rateend": "2029-12-31",{'\n'}
                        {'                    '}"ratestart": "2024-02-09",{'\n'}
                        {'                    '}"senior": 0{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-wrap">
                <table
                  data-table-width={1438}
                  data-layout="default"
                  data-local-id="51e8a258-a24e-456a-a1fd-d07d804acac5"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '162.0px' }} />
                    <col style={{ width: '829.0px' }} />
                    <col style={{ width: '447.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component </strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Bundle Name</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            GET:/cruisecabingrades.pl.response.meta.ratecodes[n]."name": "Dining
                            Package &amp;amp; Internet"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Match the available price grid code, with the rate code obj and pick the
                          name.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Price Option</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            GET:/cruisecabingrades.pl.response.result[n].gridpricing[n]."price":
                            3919.67
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>It is required to use in the GET:/cruisecabin.pl method to store:</p>
                        <ul>
                          <li>
                            <p>
                              <code>"gradeno": "193:UKPSC:12"</code>
                            </p>
                          </li>
                          <li>
                            <p>
                              <code>"fare": 3165</code>
                            </p>
                          </li>
                          <li>
                            <p>
                              <code>"fees": 0</code>
                            </p>
                          </li>
                          <li>
                            <p>
                              <code>"gratuity": 280</code>
                            </p>
                          </li>
                          <li>
                            <div className="code panel pdl" style={{ borderWidth: 1 }}>
                              <div className="codeContent panelContent pdl">
                                <pre
                                  className="syntaxhighlighter-pre"
                                  data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                                  data-theme="Confluence"
                                >
                                  "ratecode": "UKPSC",{'\n'} "taxes": 394
                                </pre>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Fare Conditions</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Non-Refundable: <br />
                          Gratuity:
                          <br />
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 id="FRD-Front-endpresentation-DeckOptions(Nicetohave)">
                {' '}
                Deck Options (Nice to have)
              </h4>
              <p>
                <strong>Pre-condition:</strong> User has selected the preferred price offer for a
                certain category.
                <br />
                When the user selects the preferred cabin price code in the backend it is required
                to send a request to the endpoint: <code>GET:/cruisecabingrades.pl</code>
              </p>
              <p>Payload Examples:</p>
              <div id="expander-703698184" className="expand-container">
                <div id="expander-control-703698184" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET: /cruisecabin.pl - request</span>
                </div>
                <div id="expander-content-703698184" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1752180589" className="expand-container">
                <div id="expander-control-1752180589" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET: /cruisecabingrades.pl - response</span>
                </div>
                <div id="expander-content-1752180589" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-left"
                    alt="image-20240206-124820.png"
                    width={880}
                    loading="lazy"
                    src="attachments/603717650/614006826.png?width=880"
                    data-image-src="attachments/603717650/614006826.png"
                    data-height={186}
                    data-width={880}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={614006826}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20240206-124820.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={603717650}
                    data-linked-resource-container-version={40}
                    data-media-id="7256b486-7626-4758-9a59-812bb38de182"
                    data-media-type="file"
                  />
                </span>
              </p>
              <p>
                The decks map of the ship, is build based on the Object returned in the response of
                the endpoint <code>GET: /cruiseshipdetails.pl</code> (static data).
                <br />
                Each deck should be used as filter of the cabins offers based on the{' '}
                <code>deckid </code>property
              </p>
              <div id="expander-975739922" className="expand-container">
                <div id="expander-control-975739922" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Deck object example</span>
                </div>
                <div id="expander-content-975739922" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        "decks": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Atlantic Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1030,{'\n'}
                        {'                    '}"imageid": 72540,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847577.png",
                        {'\n'}
                        {'                    '}"name": "ATLANTIC"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Empress Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1031,{'\n'}
                        {'                    '}"imageid": 72541,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847583.png",
                        {'\n'}
                        {'                    '}"name": "EMPRESS"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Lido Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1032,{'\n'}
                        {'                    '}"imageid": 72544,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847604.png",
                        {'\n'}
                        {'                    '}"name": "LIDO"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Lobby Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1033,{'\n'}
                        {'                    '}"imageid": 72545,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847613.png",
                        {'\n'}
                        {'                    '}"name": "LOBBY"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Main Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1034,{'\n'}
                        {'                    '}"imageid": 72546,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847619.png",
                        {'\n'}
                        {'                    '}"name": "MAIN"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Panorama Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1035,{'\n'}
                        {'                    '}"imageid": 72547,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847629.png",
                        {'\n'}
                        {'                    '}"name": "PANORAMA"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Promenade Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1036,{'\n'}
                        {'                    '}"imageid": 72548,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847634.png",
                        {'\n'}
                        {'                    '}"name": "PROMENADE"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Riviera Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1037,{'\n'}
                        {'                    '}"imageid": 72549,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847644.png",
                        {'\n'}
                        {'                    '}"name": "RIVIERA"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Sky Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1038,{'\n'}
                        {'                    '}"imageid": 72550,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847650.png",
                        {'\n'}
                        {'                    '}"name": "SKY"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Upper Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1041,{'\n'}
                        {'                    '}"imageid": 72551,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847657.png",
                        {'\n'}
                        {'                    '}"name": "UPPER"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Verandah Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 1042,{'\n'}
                        {'                    '}"imageid": 72552,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847662.png",
                        {'\n'}
                        {'                    '}"name": "VERANDAH"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Forward Spa Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 2608,{'\n'}
                        {'                    '}"imageid": 72542,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847590.png",
                        {'\n'}
                        {'                    '}"name": "SPA"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Forward Sun Deck",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 2609,{'\n'}
                        {'                    '}"imageid": 72543,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654847596.png",
                        {'\n'}
                        {'                    '}"name": "SUN"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-wrap">
                <table
                  data-table-width={1438}
                  data-layout="default"
                  data-local-id="7c144e17-c021-4f21-8678-ba030ed12e47"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '162.0px' }} />
                    <col style={{ width: '829.0px' }} />
                    <col style={{ width: '447.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component </strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>1</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Deck Number: </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Default view: Overview</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
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
                        <p />
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
                        <p />
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
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 id="FRD-Front-endpresentation-CabinoptionforCategory">
                <strong>Cabin option for Category</strong>
              </h4>
              <p>
                The cabin offers comes from the response of the endpoint{' '}
                <code>GET: /cruisecabin.pl</code>{' '}
              </p>
              <div id="expander-1140609303" className="expand-container">
                <div id="expander-control-1140609303" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET:/cruisecabin.pl - Request</span>
                </div>
                <div id="expander-content-1140609303" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --request GET
                        'https://fusionapi.traveltek.net/2.1/json/cruisecabins.pl?requestid=f1a5d648je694-4e2b-b3b1-f28e4a212e9d&amp;sessionkey=4569B99F-07A2k4526-8C6D-D827B634873B&amp;adults=2&amp;codetocruiseid=1920302&amp;getcruisecontent=1&amp;gradeno=212%3AKGO%3A6&amp;language=en&amp;resultno=212_0.1064581274&amp;showalldecks=1&amp;sid=49572&amp;site=xeni.site.traveltek.net&amp;resultkey=default&amp;ratecode=KGO'
                        \{'\n'}--header 'Accept: application/json; charset=utf-8'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1550887369" className="expand-container">
                <div id="expander-control-1550887369" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET:/cruisecabin.pl - Response</span>
                </div>
                <div id="expander-content-1550887369" className="expand-content">
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
                        {'            '}"codetocruiseid": 1920302,{'\n'}
                        {'            '}"gradeno": "212:KGO:6",{'\n'}
                        {'            '}"language": "en",{'\n'}
                        {'            '}"ratecode": "KGO",{'\n'}
                        {'            '}"resultno": "212_0.1064581274",{'\n'}
                        {'            '}"sessionkey": "4569B99F-07A2k4526-8C6D-D827B634873B",{'\n'}
                        {'            '}"shipid": 409,{'\n'}
                        {'            '}"showalldecks": 1,{'\n'}
                        {'            '}"sid": "49572",{'\n'}
                        {'            '}"site": "xeni.site.traveltek.net"{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"decklegend": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Twin Bed and Single Sofa Bed",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314363.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and Single
                        Sofa Bed",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314429.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and 2 Upper
                        Pullmans",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314467.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King), Single Sofa
                        Bed and 1 Upper Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314472.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and 1 Upper
                        Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314488.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King) and Double
                        Sofa Bed",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314504.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds (convert to King), Single Sofa
                        Bed and 2 Upper Pullmans. Beds do not convert to King when both Upper
                        Pullmans in use",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314573.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Connecting staterooms (ideal for families
                        and groups of friends)",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314618.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Twin Beds do not convert to a King Bed.",
                        {'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314632.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Stateroom with 2 Porthole Windows",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314638.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Unisex Wheelchair Accessible Restroom",
                        {'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314673.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Accessible Routes including Ramps",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314675.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "Modified Staterooms, Restrooms, Elevators,
                        Lifts and other Accessible Areas",
                        {'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314704.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "All Accommodations are Non-Smoking",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404314736.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds conver to King 1 Lower Pullman
                        and 1 Upper Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404377840.png"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"attribute": "2 Twin Beds conver to King Double Sofabed
                        and 1 Lower Pullman",{'\n'}
                        {'                '}"logo":
                        "https://static.traveltek.net/cruisepics/logos/attributes/1404377880.png"
                        {'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"decks": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Riviera Deck 1",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1528,{'\n'}
                        {'                '}"imageid": 72327,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462469.png",
                        {'\n'}
                        {'                '}"name": "Deck 1 Riviera"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Main Deck 2",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1527,{'\n'}
                        {'                '}"imageid": 72328,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462479.png",
                        {'\n'}
                        {'                '}"name": "Deck 2"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Lobby Deck 3",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1526,{'\n'}
                        {'                '}"imageid": 72329,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462485.png",
                        {'\n'}
                        {'                '}"name": "Deck 3 Lobby"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Atlantic Deck 4",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1525,{'\n'}
                        {'                '}"imageid": 72330,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462490.png",
                        {'\n'}
                        {'                '}"name": "Deck 4 Atlantic"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Promenade Deck 5",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1524,{'\n'}
                        {'                '}"imageid": 72331,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462508.png",
                        {'\n'}
                        {'                '}"name": "Deck 5 Promenade"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Upper Deck 6",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1523,{'\n'}
                        {'                '}"imageid": 72332,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462511.png",
                        {'\n'}
                        {'                '}"name": "Deck 6 Upper"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Empress Deck 7",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1522,{'\n'}
                        {'                '}"imageid": 72333,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462517.png",
                        {'\n'}
                        {'                '}"name": "Deck 7 Empress"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Verandah Deck 8",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1521,{'\n'}
                        {'                '}"imageid": 72334,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462530.png",
                        {'\n'}
                        {'                '}"name": "Deck 8 Verandah"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Lido Deck 9",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1520,{'\n'}
                        {'                '}"imageid": 72335,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462533.png",
                        {'\n'}
                        {'                '}"name": "Deck 9 Lido"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Panorama Deck 10",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1519,{'\n'}
                        {'                '}"imageid": 72336,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462539.png",
                        {'\n'}
                        {'                '}"name": "Deck 10 Panorama"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Spa Deck 11",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1518,{'\n'}
                        {'                '}"imageid": 72337,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462544.png",
                        {'\n'}
                        {'                '}"name": "Deck 11 Spa"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Forward Sun Deck 12",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 13359,{'\n'}
                        {'                '}"imageid": 72340,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462674.png",
                        {'\n'}
                        {'                '}"name": "Deck 12 Forward"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Aft Sun Deck 12",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1517,{'\n'}
                        {'                '}"imageid": 72338,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462612.png",
                        {'\n'}
                        {'                '}"name": "Deck 12 Sun"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"caption": "Sky Deck 14",{'\n'}
                        {'                '}"description": "",{'\n'}
                        {'                '}"id": 1516,{'\n'}
                        {'                '}"imageid": 72339,{'\n'}
                        {'                '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1654462617.png",
                        {'\n'}
                        {'                '}"name": "Deck 14 Sky"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
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
                        {'            '}"bathdescription": "Shower",{'\n'}
                        {'            '}"cabingrade": "IS",{'\n'}
                        {'            '}"cabinid": 7641,{'\n'}
                        {'            '}"cabinno": "GUAR",{'\n'}
                        {'            '}"farecode": "KGO",{'\n'}
                        {'            '}"guaranteed": "Y",{'\n'}
                        {'            '}"location": "TO BE ASSIGNED",{'\n'}
                        {'            '}"minguests": 1,{'\n'}
                        {'            '}"resultno": "212:KGO:6_0"{'\n'}
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
                        {'                '}"time": "0.000012"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Auth Check Pass",{'\n'}
                        {'                '}"time": "0.029933"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Start CruiseCabins",
                        {'\n'}
                        {'                '}"time": "0.000070"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Retrieved Deck Data.",
                        {'\n'}
                        {'                '}"time": "1.178287"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Sending Request To Supplier",{'\n'}
                        {'                '}"time": "0.000017"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Received Supplier Response",{'\n'}
                        {'                '}"time": "1.612421"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Building Response",
                        {'\n'}
                        {'                '}"time": "0.000019"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Returning Response",
                        {'\n'}
                        {'                '}"time": "0.000134"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"total": "2.821466"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"warnings": []{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <strong>Design</strong>
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240206-130449.png"
                  width={890}
                  loading="lazy"
                  src="attachments/603717650/614072392.png?width=890"
                  data-image-src="attachments/603717650/614072392.png"
                  data-height={513}
                  data-width={890}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={614072392}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240206-130449.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="f84184a5-4ec0-448b-a606-0e801a923d8f"
                  data-media-type="file"
                />
              </span>
              <p>
                Each cabin offer has to build with the content of “results” array, based on the
                available price as follow:
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1442}
                  data-layout="default"
                  data-local-id="956ae063-f803-4f27-b9b8-4581a46c1216"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '163.0px' }} />
                    <col style={{ width: '956.0px' }} />
                    <col style={{ width: '323.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component </strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Path</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Image</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            GET:/cruisecabingrades.results[n]."imageurl":
                            https://static.traveltek.net/cruisepics/local_cabinimages_large/1631713486.png"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The reference images should come from static data based on the cabinId.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Name</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            GET:/cruisecabingrades.results[n]."name": "Interior Upper/Lower"
                          </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The room selected</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Deck</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabin.results[n].""deckname": "Deck 7 Empress"</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Bathroom</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabin.pl.results[n].bathdescription</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Description</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabin.results[n].</code>
                        </p>
                        <div className="code panel pdl" style={{ borderWidth: 1 }}>
                          <div className="codeContent panelContent pdl">
                            <pre
                              className="syntaxhighlighter-pre"
                              data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                              data-theme="Confluence"
                            >
                              "bedconfig": [{'\n'}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; {'{'}
                              {'\n'}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; "code": "CT",{'\n'}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; "description": "CONVERTIBLE TWINS/KING"
                              {'\n'}
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {'}'}
                              {'\n'}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ],
                              {'\n'}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "beddescription":
                              "Convertible Twin/King",
                            </pre>
                          </div>
                        </div>
                      </td>
                      <td className="confluenceTd">
                        <p>To describe the services in the cabin we need to add two properties</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Number</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabin.results[n]</code>.<code>"cabinno": "7268</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Cabin Price</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>GET:/cruisecabingrade.results[n].gridprices.price</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The price selected for the rate code in the previous step, </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <h4 id="FRD-Front-endpresentation-TabItinerary">Tab Itinerary</h4>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240118-105528.png"
                  width={1072}
                  loading="lazy"
                  src="attachments/603717650/606830596.png?width=1072"
                  data-image-src="attachments/603717650/606830596.png"
                  data-height={579}
                  data-width={1072}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={606830596}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240118-105528.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="f837e422-c926-49e0-8191-ef22f121d537"
                  data-media-type="file"
                />
              </span>
              <p />
              <h4 id="FRD-Front-endpresentation-TAB-Amenities">TAB - Amenities</h4>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240206-103821.png"
                  width={903}
                  loading="lazy"
                  src="attachments/603717650/613908500.png?width=903"
                  data-image-src="attachments/603717650/613908500.png"
                  data-height={437}
                  data-width={903}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={613908500}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240206-103821.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603717650}
                  data-linked-resource-container-version={40}
                  data-media-id="1c859a9d-ec20-46a7-8a0c-b88be56c0926"
                  data-media-type="file"
                />
              </span>
              <p></p>
            </div>
            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>
              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/603684884.png">
                  AvailabilityCruiseFlowDiagram.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/604241931.png">availabilityRequestMatch.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/605192200.png">image-20240115-111031.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606437420.png">
                  XeniOrchestrationCruiseAvailability.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606404669.png">
                  XeniOrchestrationCruiseAvailability.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/608075806.png">
                  XeniOrchestrationCruiseAvailability.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606896129.png">image-20240118-105243.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606765061.png">image-20240118-105438.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606830596.png">image-20240118-105528.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606765068.png">image-20240118-105612.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606765079.png">image-20240118-110648.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/608206899.png">
                  XeniOrchestrationCruiseAvailability.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/609222666.png">
                  XeniOrchestrationCruiseAvailability.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/606437408.png">
                  XeniOrchestrationCruiseAvailability.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/609583122.png">
                  CruisePresentationProposal.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/610861058.png">
                  CruisePresentationProposal.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/609812501.png">
                  CruisePresentationProposal.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/613384195.png">image-20240205-141356.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/613384206.png">image-20240205-144204.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/613908500.png">image-20240206-103821.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/613974021.png">image-20240206-104354.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/614137904.png">image-20240206-124441.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/614006826.png">image-20240206-124820.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/614072392.png">image-20240206-130449.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/615251983.png">image-20240207-170521.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/615645187.png">image-20240208-102747.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/615940140.png">image-20240209-124618.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/618790918.png">image-20240111-132409.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/620888095.png">image-20240220-125534.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603717650/620822575.png">image-20240220-125559.png</a>{' '}
                (image/png)
                <br />
              </div>
            </div>
          </div>{' '}
        </div>
        <div id="footer" role="contentinfo">
          <section className="footer-body">
            <p>Document generated by Confluence on Jun 24, 2024 05:25</p>
            <div id="footer-logo">
              <a href="http://www.atlassian.com/">Atlassian</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default FRDFrontEndPresentation
