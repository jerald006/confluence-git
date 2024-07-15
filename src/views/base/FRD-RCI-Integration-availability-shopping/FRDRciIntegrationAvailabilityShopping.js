import React from 'react'

function FRDRciIntegrationAvailabilityShopping() {
  return (
    <>
      <title>XeniApp : FRD - RCI Integration - MVP1 - Availability and Shopping</title>
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
                    <a href="Hot-Deals_617873414.html">Hot Deals</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a href="RCI---Integration_590348295.html">RCI - Integration</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">
                XeniApp : FRD - RCI Integration - MVP1 - Availability and Shopping
              </span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Feb 27,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206797421 {padding: 0px;}\ndiv.rbtoc1719206797421 ul {list-style: none;margin-left: 0px;}\ndiv.rbtoc1719206797421 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206797421">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-FunctionalObjective">
                      Functional Objective
                    </a>
                  </li>
                  <li>
                    <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-FunctionalRequirement">
                      Functional Requirement
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-AvailabilityandShoppingRequest">
                          Availability and Shopping Request
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-Matchingcomponent">
                              Matching component
                            </a>
                          </li>
                          <li>
                            <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-Responsehandler:">
                              Response handler:
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-UIPresentation">
                          UI Presentation
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-B2B">B2B</a>
                            <ul className="toc-indentation">
                              <li>
                                <a href="#FRD-RCIIntegration-MVP1-AvailabilityandShopping-AccommodationCardpresentation">
                                  Accommodation Card presentation
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
              <p />
              <hr />
              <h1 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-FunctionalObjective">
                Functional Objective
              </h1>
              <p>
                Based on search parameters entered by Users, it is required to get the availability
                content from RCI API, expose the results in UI for users to select. Adapt the view
                according to the type of consumer (B2B/B2C).
                <br />
                Display the images and details of each offer.
              </p>
              <hr />
              <h1 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-FunctionalRequirement">
                Functional Requirement
              </h1>
              <h2 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-AvailabilityandShoppingRequest">
                Availability and Shopping Request
              </h2>
              <p>
                The 1st call to vendor is the Availability of properties based on the parms entered
                by consumer, the method will return the list of available properties and Units with
                the price.{' '}
              </p>
              <h3 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-Matchingcomponent">
                Matching component
              </h3>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="AvailabilityMatch.png"
                  width={811}
                  loading="lazy"
                  src="attachments/617676817/621805573.png?width=811"
                  data-image-src="attachments/617676817/621805573.png"
                  data-height={437}
                  data-width={811}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={621805573}
                  data-linked-resource-version={2}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="AvailabilityMatch.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={617676817}
                  data-linked-resource-container-version={8}
                  data-media-id="375befbf-95a0-4a1d-9bb3-e08e4e66d7c3"
                  data-media-type="file"
                />
              </span>
              <hr />
              <p />
              <div id="expander-730825604" className="expand-container">
                <div id="expander-control-730825604" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request example: Get Availability</span>
                </div>
                <div id="expander-content-730825604" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --request POST
                        'https://testb2bb.rci.com/variableduration/gateway' \{'\n'}
                        --header 'Content-Type: application/xml' \{'\n'}--header 'Cookie:
                        AWSALB=UPMWAzCmypDRtNmqPRwbDrTifn3pwKycZI8CIb+Oej57iagn8rWlEbYN2Jm/NeUefeAdmp3lW/GikHk68alGDA14zqeDWIBwy8fWn1FoS7ofZH1N9g0dA3y9ErvF;
                        AWSALBCORS=UPMWAzCmypDRtNmqPRwbDrTifn3pwKycZI8CIb+Oej57iagn8rWlEbYN2Jm/NeUefeAdmp3lW/GikHk68alGDA14zqeDWIBwy8fWn1FoS7ofZH1N9g0dA3y9ErvF'
                        \{'\n'}--data '&lt;requestEnvelope&gt;{'\n'}
                        {'    '}&lt;requestHeader&gt;{'\n'}
                        {'        '}&lt;controlData&gt;{'\n'}
                        {'            '}
                        &lt;clientName&gt;XMLBusinessPartnerChannel&lt;/clientName&gt;
                        {'\n'}
                        {'            '}&lt;userID&gt;xmlweeksonly&lt;/userID&gt;
                        {'\n'}
                        {'            '}
                        &lt;password&gt;xmlweeksonly&lt;/password&gt;{'\n'}
                        {'        '}&lt;/controlData&gt;{'\n'}
                        {'        '}&lt;processData&gt;{'\n'}
                        {'            '}
                        &lt;operationName&gt;quickSearch&lt;/operationName&gt;{'\n'}
                        {'        '}&lt;/processData&gt;{'\n'}
                        {'    '}&lt;/requestHeader&gt;{'\n'}
                        {'    '}&lt;SearchRequest&gt;{'\n'}
                        {'        '}&lt;startDate&gt;05/01/2024&lt;/startDate&gt;
                        {'\n'}
                        {'        '}&lt;endDate&gt;06/30/2024&lt;/endDate&gt;{'\n'}
                        {'        '}&lt;lengthOfStay&gt;7&lt;/lengthOfStay&gt;{'\n'}
                        {'        '}&lt;minUnitSize&gt;H&lt;/minUnitSize&gt;{'\n'}
                        {'        '}&lt;regionCode&gt;COLN&lt;/regionCode&gt;{'\n'}
                        {'    '}&lt;/SearchRequest&gt;{'\n'}
                        &lt;/requestEnvelope&gt;'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-1138355932" className="expand-container">
                <div id="expander-control-1138355932" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response example: AvailabilityRS</span>
                </div>
                <div id="expander-content-1138355932" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        &lt;?xml version="1.0" encoding="UTF-8"?&gt;{'\n'}
                        &lt;responseEnvelope&gt;{'\n'}
                        {'    '}&lt;responseHeader&gt;{'\n'}
                        {'        '}&lt;statusData&gt;{'\n'}
                        {'            '}
                        &lt;completionCode&gt;0&lt;/completionCode&gt;{'\n'}
                        {'            '}&lt;completionMessage&gt;Request Completed
                        Successfully.&lt;/completionMessage&gt;{'\n'}
                        {'        '}&lt;/statusData&gt;{'\n'}
                        {'    '}&lt;/responseHeader&gt;{'\n'}
                        {'    '}&lt;SearchResponse&gt;{'\n'}
                        {'        '}&lt;sessionToken&gt;{'\n'}
                        {'            '}
                        &lt;sessionId&gt;4173499801&lt;/sessionId&gt;{'\n'}
                        {'        '}&lt;/sessionToken&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RT61&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Highline Vail, A DoubleTree
                        Hotel&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYVCjw8Ns799eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbrt5pAmQHep+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlY/4v4y8A4fE+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbKIlShbeagGeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZCxnezdbiLdeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZF8nRio88ljuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaz8oQOKFsdhuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYdefMip4cS1OC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYHfetWoVNNCeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLla8xzoLWGWAB+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYzxgn/8PEhseC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYAhPW4hOsjl+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZzVdL9DS95ouC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbUSXOf8Zd3NOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlY0ePzBT5tQKOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZCWcTyuNGCSOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbEbcgQSa3EX+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaXkhExKfQCw+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbbgt1/DCI88eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZiN/x5ch2W7+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLla52lj7HzAqYuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlb9dl4x55jOJOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZhICitx4HmcOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZVgTVN6slHyuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlavibT1djTDGOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZZq1No70IQ8uC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaLgWciy6WSv+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYeb1x1VeOtlOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbuEUYMpiyG7+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZiMzxpq0ALwOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaje5hTiE+3lOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLla3UHUYwTT7buC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbFmx0MoBOTb+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZQeZcZsY2tfuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYHt+kznYSUwuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZNpzIkdI+X/eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZ1n2O4/CPsi+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaaXmyNwxDV8uC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZBQs5ofoOLkOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYM4ZIJmcppX+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZXrriX8F7OyeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYzUKyEASai/eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZpBIDjAX1eUeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbXzjTE5+sHSeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaUerS/Ebyt6+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaLxYyQr8aNnOC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbHJ9uY+5Z5EeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYIErLE2z6aouC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZMRnx0SJoKo+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZBS68C14Kn3uC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbchcKeJJ53PeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbUsJt8ldX4C+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZ3o/EGJswOZeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaQmCIPys/zN+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZ4RGSUiHUgIuC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlasXEZcEM9mS+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYvUH96m5n+eOC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaMEk+7ft/b5uC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZetkkTL/cH7eC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYoKnnZ0CgRX+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbytzh1bR2speC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RT61&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Highline Vail, A DoubleTree
                        Hotel&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYVCjw8Ns799Xb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbrt5pAmQHep3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlY/4v4y8A4fE3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbKIlShbeagGXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZCxnezdbiLdXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZF8nRio88ljnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaz8oQOKFsdhnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYdefMip4cS1Hb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYHfetWoVNNCXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLla8xzoLWGWAB3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYzxgn/8PEhsXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYAhPW4hOsjl3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZzVdL9DS95onb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbUSXOf8Zd3NHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlY0ePzBT5tQKHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZCWcTyuNGCSHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbEbcgQSa3EX3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaXkhExKfQCw3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbbgt1/DCI88Xb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZiN/x5ch2W73b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLla52lj7HzAqYnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlb9dl4x55jOJHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZhICitx4HmcHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZVgTVN6slHynb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlavibT1djTDGHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZZq1No70IQ8nb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaLgWciy6WSv3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYeb1x1VeOtlHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbuEUYMpiyG73b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZiMzxpq0ALwHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaje5hTiE+3lHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLla3UHUYwTT7bnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbFmx0MoBOTb3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZQeZcZsY2tfnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYHt+kznYSUwnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZNpzIkdI+X/Xb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZ1n2O4/CPsi3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaaXmyNwxDV8nb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZBQs5ofoOLkHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYM4ZIJmcppX3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZXrriX8F7OyXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYzUKyEASai/Xb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZpBIDjAX1eUXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbXzjTE5+sHSXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaUerS/Ebyt63b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaLxYyQr8aNnHb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbHJ9uY+5Z5EXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYIErLE2z6aonb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZMRnx0SJoKo3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZBS68C14Kn3nb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbchcKeJJ53PXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbUsJt8ldX4C3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZ3o/EGJswOZXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaQmCIPys/zN3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZ4RGSUiHUgInb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlasXEZcEM9mS3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYvUH96m5n+eHb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlaMEk+7ft/b5nb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlZetkkTL/cH7Xb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlYoKnnZ0CgRX3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;B9RiOIvrLlbytzh1bR2spXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RT63&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Highline Vail, A DoubleTree Hotel{'  '}- 5
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYVCjw8Ns799eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbrt5pAmQHep+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHY/4v4y8A4fE+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbKIlShbeagGeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZCxnezdbiLdeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZF8nRio88ljuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaz8oQOKFsdhuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYdefMip4cS1OC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYHfetWoVNNCeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHa8xzoLWGWAB+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYzxgn/8PEhseC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYAhPW4hOsjl+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZzVdL9DS95ouC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbUSXOf8Zd3NOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHY0ePzBT5tQKOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZCWcTyuNGCSOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbEbcgQSa3EX+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaXkhExKfQCw+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbbgt1/DCI88eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZiN/x5ch2W7+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHa52lj7HzAqYuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHb9dl4x55jOJOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZhICitx4HmcOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZVgTVN6slHyuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHavibT1djTDGOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZZq1No70IQ8uC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaLgWciy6WSv+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYeb1x1VeOtlOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbuEUYMpiyG7+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZiMzxpq0ALwOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaje5hTiE+3lOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHa3UHUYwTT7buC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbFmx0MoBOTb+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZQeZcZsY2tfuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYHt+kznYSUwuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZNpzIkdI+X/eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZ1n2O4/CPsi+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaaXmyNwxDV8uC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZBQs5ofoOLkOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYM4ZIJmcppX+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZXrriX8F7OyeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYzUKyEASai/eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZpBIDjAX1eUeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbXzjTE5+sHSeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RT63&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Highline Vail, A DoubleTree Hotel{'  '}- 5
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYVCjw8Ns799Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbrt5pAmQHep3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHY/4v4y8A4fE3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbKIlShbeagGXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZCxnezdbiLdXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZF8nRio88ljnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaz8oQOKFsdhnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYdefMip4cS1Hb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYHfetWoVNNCXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHa8xzoLWGWAB3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYzxgn/8PEhsXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYAhPW4hOsjl3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZzVdL9DS95onb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbUSXOf8Zd3NHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHY0ePzBT5tQKHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZCWcTyuNGCSHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbEbcgQSa3EX3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaXkhExKfQCw3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbbgt1/DCI88Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZiN/x5ch2W73b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHa52lj7HzAqYnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHb9dl4x55jOJHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZhICitx4HmcHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZVgTVN6slHynb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHavibT1djTDGHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZZq1No70IQ8nb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaLgWciy6WSv3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYeb1x1VeOtlHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbuEUYMpiyG73b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZiMzxpq0ALwHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaje5hTiE+3lHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHa3UHUYwTT7bnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbFmx0MoBOTb3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZQeZcZsY2tfnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYHt+kznYSUwnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZNpzIkdI+X/Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZ1n2O4/CPsi3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHaaXmyNwxDV8nb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZBQs5ofoOLkHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYM4ZIJmcppX3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZXrriX8F7OyXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHYzUKyEASai/Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHZpBIDjAX1eUXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;DcoLr9cWxHbXzjTE5+sHSXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RQ02&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Tivoli Lodge&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxF3o/EGJswOZeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxGQmCIPys/zN+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxF4RGSUiHUgIuC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxGsXEZcEM9mS+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxEvUH96m5n+eOC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxGMEk+7ft/b5uC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxFetkkTL/cH7eC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxEoKnnZ0CgRX+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxHytzh1bR2speC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RQ02&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Tivoli Lodge&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxHUsJt8ldX4C3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxF3o/EGJswOZXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxGQmCIPys/zN3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxF4RGSUiHUgInb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxGsXEZcEM9mS3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxEvUH96m5n+eHb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxGMEk+7ft/b5nb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxFetkkTL/cH7Xb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxEoKnnZ0CgRX3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MasWfu2EVxHytzh1bR2spXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RQ03&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Tivoli Lodge- 3 Nights&lt;/resortName&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAo/4v4y8A4fE+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArKIlShbeagGeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApCxnezdbiLdeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApF8nRio88ljuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAqz8oQOKFsdhuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAodefMip4cS1OC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoHfetWoVNNCeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAq8xzoLWGWAB+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAozxgn/8PEhseC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoAhPW4hOsjl+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApzVdL9DS95ouC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArUSXOf8Zd3NOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAo0ePzBT5tQKOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApCWcTyuNGCSOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RQ03&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Tivoli Lodge- 3 Nights&lt;/resortName&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAo/4v4y8A4fE3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArKIlShbeagGXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApCxnezdbiLdXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApF8nRio88ljnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAqz8oQOKFsdhnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAodefMip4cS1Hb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoHfetWoVNNCXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAq8xzoLWGWAB3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAozxgn/8PEhsXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoAhPW4hOsjl3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApzVdL9DS95onb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArUSXOf8Zd3NHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAo0ePzBT5tQKHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApCWcTyuNGCSHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArEbcgQSa3EX3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAqXkhExKfQCw3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArbgt1/DCI88Xb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApiN/x5ch2W73b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAq52lj7HzAqYnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAr9dl4x55jOJHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAphICitx4HmcHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApVgTVN6slHynb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAqvibT1djTDGHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApZq1No70IQ8nb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAqLgWciy6WSv3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoeb1x1VeOtlHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAq3UHUYwTT7bnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArFmx0MoBOTb3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApQeZcZsY2tfnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoHt+kznYSUwnb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApNpzIkdI+X/Xb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAp1n2O4/CPsi3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAqaXmyNwxDV8nb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApBQs5ofoOLkHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoM4ZIJmcppX3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApXrriX8F7OyXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAqLxYyQr8aNnHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArHJ9uY+5Z5EXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwAoIErLE2z6aonb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApMRnx0SJoKo3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwApBS68C14Kn3nb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;uCcVG2JrwArchcKeJJ53PXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RQ04&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Tivoli Lodge - 5 Nights&lt;/resortName&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0/4v4y8A4fE+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3KIlShbeagGeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1CxnezdbiLdeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1F8nRio88ljuC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2z8oQOKFsdhuC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0defMip4cS1OC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0HfetWoVNNCeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju28xzoLWGWAB+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0zxgn/8PEhseC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0AhPW4hOsjl+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1zVdL9DS95ouC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3USXOf8Zd3NOC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju00ePzBT5tQKOC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1CWcTyuNGCSOC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3bgt1/DCI88eC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1Zq1No70IQ8uC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3Fmx0MoBOTb+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0M4ZIJmcppX+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju13o/EGJswOZeC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2QmCIPys/zN+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju14RGSUiHUgIuC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2sXEZcEM9mS+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0vUH96m5n+eOC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2MEk+7ft/b5uC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1etkkTL/cH7eC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0oKnnZ0CgRX+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3ytzh1bR2speC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RQ04&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Tivoli Lodge - 5 Nights&lt;/resortName&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0/4v4y8A4fE3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3KIlShbeagGXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1CxnezdbiLdXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1F8nRio88ljnb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2z8oQOKFsdhnb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0defMip4cS1Hb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0HfetWoVNNCXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju28xzoLWGWAB3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0zxgn/8PEhsXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0AhPW4hOsjl3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1zVdL9DS95onb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3USXOf8Zd3NHb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju00ePzBT5tQKHb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1CWcTyuNGCSHb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3bgt1/DCI88Xb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1Zq1No70IQ8nb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3Fmx0MoBOTb3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3HJ9uY+5Z5EXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0IErLE2z6aonb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1MRnx0SJoKo3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1BS68C14Kn3nb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3chcKeJJ53PXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'   '}
                        {'         '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3UsJt8ldX4C3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju13o/EGJswOZXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2QmCIPys/zN3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju14RGSUiHUgInb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2sXEZcEM9mS3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0vUH96m5n+eHb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju2MEk+7ft/b5nb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju1etkkTL/cH7Xb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju0oKnnZ0CgRX3b24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;QR3zgKX3Ju3ytzh1bR2spXb24NBRnnB4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;1869&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Village Square At Copper Mountain
                        Resort&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;XnmJufDYNe0/4v4y8A4fE+C98qkAJ5q4oKdTLqxT0F+bOOd+R8xBhWfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;375.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;1&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;1869&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Village Square At Copper Mountain
                        Resort&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;XnmJufDYNe0/4v4y8A4fE3b24NBRnnB4oKdTLqxT0F+bOOd+R8xBhWfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;375.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;1&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RY37&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Elevation Hotel and Spa - 5
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYVCjw8Ns799eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbrt5pAmQHep+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNY/4v4y8A4fE+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbKIlShbeagGeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZCxnezdbiLdeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZF8nRio88ljuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaz8oQOKFsdhuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYdefMip4cS1OC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYHfetWoVNNCeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNa8xzoLWGWAB+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYzxgn/8PEhseC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYAhPW4hOsjl+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZzVdL9DS95ouC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbUSXOf8Zd3NOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNY0ePzBT5tQKOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZCWcTyuNGCSOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbEbcgQSa3EX+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaXkhExKfQCw+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbbgt1/DCI88eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZiN/x5ch2W7+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNa52lj7HzAqYuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNb9dl4x55jOJOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZhICitx4HmcOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZVgTVN6slHyuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNavibT1djTDGOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZZq1No70IQ8uC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaLgWciy6WSv+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYeb1x1VeOtlOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbuEUYMpiyG7+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZiMzxpq0ALwOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaje5hTiE+3lOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNa3UHUYwTT7buC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbFmx0MoBOTb+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZQeZcZsY2tfuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYHt+kznYSUwuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZNpzIkdI+X/eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZ1n2O4/CPsi+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaaXmyNwxDV8uC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZBQs5ofoOLkOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYM4ZIJmcppX+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZXrriX8F7OyeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYzUKyEASai/eC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZpBIDjAX1eUeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbXzjTE5+sHSeC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RY37&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Elevation Hotel and Spa - 5
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYVCjw8Ns799Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbrt5pAmQHep3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNY/4v4y8A4fE3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbKIlShbeagGXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZCxnezdbiLdXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZF8nRio88ljnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaz8oQOKFsdhnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYdefMip4cS1Hb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYHfetWoVNNCXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNa8xzoLWGWAB3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYzxgn/8PEhsXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYAhPW4hOsjl3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZzVdL9DS95onb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbUSXOf8Zd3NHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNY0ePzBT5tQKHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZCWcTyuNGCSHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbEbcgQSa3EX3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaXkhExKfQCw3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbbgt1/DCI88Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZiN/x5ch2W73b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNa52lj7HzAqYnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNb9dl4x55jOJHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZhICitx4HmcHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZVgTVN6slHynb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNavibT1djTDGHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZZq1No70IQ8nb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaLgWciy6WSv3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYeb1x1VeOtlHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbuEUYMpiyG73b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZiMzxpq0ALwHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaje5hTiE+3lHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNa3UHUYwTT7bnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbFmx0MoBOTb3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZQeZcZsY2tfnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYHt+kznYSUwnb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZNpzIkdI+X/Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZ1n2O4/CPsi3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNaaXmyNwxDV8nb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZBQs5ofoOLkHb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYM4ZIJmcppX3b24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZXrriX8F7OyXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNYzUKyEASai/Xb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNZpBIDjAX1eUXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;LIZHIHAlxNbXzjTE5+sHSXb24NBRnnB4oKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;1225&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Swan Mountain Resort&lt;/resortName&gt;
                        {'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;1&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;roHRRdmp0xRACPAViWEUUxK7RURBFezeoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;1&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RE00&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Run Resort&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;0&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Mini Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFZqpilIh2Xu8UaX74EB7CuKoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFZEKgJkHjIljkaX74EB7CuKoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFYZeneqqUgeoEaX74EB7CuKoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFYvtT1T1qugWkaX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFaTD20aQSPphUaX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFa+9k9LY2FEQ0aX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFZPIVoD22CeL0aX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFa5bsLmN6Cuo0aX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;YFqjz3T3UFYHXYHH1DMwIEaX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;2199&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Run Resort&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;0&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Mini Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkBqpilIh2Xu8UaX74EB7CuKoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkBEKgJkHjIljkaX74EB7CuKoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAZeneqqUgeoEaX74EB7CuKoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAvtT1T1qugWkaX74EB7CuKoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCTD20aQSPphUaX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkC+9k9LY2FEQ0aX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkBPIVoD22CeL0aX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkC5bsLmN6Cuo0aX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAHXYHH1DMwIEaX74EB7CuKoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;2199&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Run Resort&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCNnqvHytCGYCUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCpdNciff3cxiUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkA1yr3WH8SDgCUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkBpp3YpGzt6hCUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCKWVJ4VLjprSUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkDd5rFdO7OJNiUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkBEVICbcbNcUCUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAkqv08qzNQrCUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCFt8iXqk6+EiUAROOhrW8HoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;2199&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Run Resort&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;1&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkClGR6B1I1a0hK7RURBFezeoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAMUMK1RH89+hK7RURBFezeoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAhb8oNAbLfaxK7RURBFezeoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAQSFnJ7Md/rhK7RURBFezeoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkDaeQQx4xGgYxK7RURBFezeoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkB6o2QOVSRDERK7RURBFezeoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAqF4wU0PrJpBK7RURBFezeoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkD4pA5ChzvsNhK7RURBFezeoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkAXgS9UtIZ0bhK7RURBFezeoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;2199&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Run Resort&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkA/4v4y8A4fE+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkC8xzoLWGWAB+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkDEbcgQSa3EX+C98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkBVgTVN6slHyuC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/31/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCje5hTiE+3lOC98qkAJ5q4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCaXmyNwxDV8uC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkCUerS/Ebyt6+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkDUsJt8ldX4C+C98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;vzBGV12PBkBetkkTL/cH7eC98qkAJ5q4oKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;A000&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;WorldMark Granby-Rocky Mountain
                        Preserve&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MrJWoKf2x/GNnqvHytCGYCUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MrJWoKf2x/GpdNciff3cxiUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MrJWoKf2x/E1yr3WH8SDgCUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;A869&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Club Wyndham Steamboat
                        Springs&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;x9l2UfRZzmKNnqvHytCGYCUAROOhrW8HoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;x9l2UfRZzmKpdNciff3cxiUAROOhrW8HoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;x9l2UfRZzmI1yr3WH8SDgCUAROOhrW8HoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;A869&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Club Wyndham Steamboat
                        Springs&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;6&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;x9l2UfRZzmK0HhF3Xk4+NpaXjS9jFKEBoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;x9l2UfRZzmK3k89bk7xh+JaXjS9jFKEBoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;x9l2UfRZzmLwWunka6yF05aXjS9jFKEBoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;7730&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;WorldMark Estes Park&lt;/resortName&gt;
                        {'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/20HhF3Xk4+NiUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/3wWunka6yF0yUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;1&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;7730&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;WorldMark Estes Park&lt;/resortName&gt;
                        {'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;0&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Partial Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/3iv0ocnHUjsKArTunvjFRJoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/1sMkbZku54O6ArTunvjFRJoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/2zhovd0Ug2NaArTunvjFRJoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/3UQkOWvrIEs6ArTunvjFRJoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/175ZNwulBFbqArTunvjFRJoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;7730&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;WorldMark Estes Park&lt;/resortName&gt;
                        {'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;3&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Partial Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;8&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;6&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/2fvnxVqKV8ep6FR1DNi4NvoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;6IJAmS8Pr/2BHnBdHHEee56FR1DNi4NvoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;1&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RR05&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Village Condominiums - 3
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhL7rkUf5oWPeyUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhLYbqOeXkub5CUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhKeTBNRe8/qciUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhKQKxNOIotNSCUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhKuHET3T6OV/iUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhKFt8iXqk6+EiUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhLkN0yA4udewyUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhKSJjjQ65mQfiUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RR05&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Village Condominiums - 3
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;1&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhJGvnFWFu/UtZVKUJukNdi6oKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhLpW6xV7Dam1pVKUJukNdi6oKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhKftPQpCu4dqJVKUJukNdi6oKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhLqQ7VV5bVxGpVKUJukNdi6oKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;hoZBX7niYhKUTdvSfIzx+JVKUJukNdi6oKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;3642&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Legacy Vacation Resort Steamboat
                        Suites&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;1&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;JZg2owtlPWlUojLdMUDlSRK7RURBFezeoKdTLqxT0F+bOOd+R8xBhWfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;375.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;1&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RR06&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Village Condominiums - 5
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;1&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE2lGR6B1I1a0pVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0BTAUm/Wj1qZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE2U8ie5ZqAsiZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE2NL/TE+zUYgpVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0lfmt+T8tADZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0JjDoHJbuMg5VKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0BYAccU9dwnpVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0MUMK1RH89+pVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE1UojLdMUDlSZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE3kHDsIvbpv4JVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE1tNew0PEclhZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0qhNWdLwqDjJVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0IHGqKoowIb5VKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE3kVb079Z5P/ZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0Na9I8zGkMmZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE20IYhYS1sMGJVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE1Ne+QxwOd4B5VKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE3aeQQx4xGgY5VKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0TiZxgs7tcmZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE2sIiSjwlhIyJVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/02/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0EfYiNR5WMXZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE31okynB1grUpVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/04/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/09/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE2hoBgvhLX3gZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/05/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE0bxAemjpaq95VKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/06/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/11/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE16o2QOVSRDEZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE1ACPAViWEUU5VKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE3H4SKWBy3ssJVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/09/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/14/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE3IiqoqzAM29pVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE2BRcTLl2VycJVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/11/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/16/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE3SG9wS2BmmpZVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/12/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;ltWv7p2fCE3xulZapWljGpVKUJukNdi6oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/13/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RR08&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Lion’s Gate Pines Lodge - 3
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4SpdNciff3cxiUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4Q1yr3WH8SDgCUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4SKWVJ4VLjprSUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4REVICbcbNcUCUAROOhrW8HoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4SFt8iXqk6+EiUAROOhrW8HoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RR08&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Lion’s Gate Pines Lodge - 3
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;3&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;8&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;6&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4REV2zUfh4IlJpUGjG2JsRuoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4Qf92EFHjcYgppUGjG2JsRuoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/13/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4QE+UP+USC8T5pUGjG2JsRuoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4TKhKul+Y74zZpUGjG2JsRuoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4S4JVLrzRLonZpUGjG2JsRuoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/10/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4R9MYoF6p+qIJpUGjG2JsRuoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;qITmxPeFa4R/aS/1RjVw4ppUGjG2JsRuoKdTLqxT0F8kqtHKrFVzBGfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;650.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RR09&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Lion’s Gate Pines Lodge
                        {'  '}- 5 Nights&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;2&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;6&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;PDeXlup9PMSNnqvHytCGYCUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/03/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;PDeXlup9PMSpdNciff3cxiUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/10/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;PDeXlup9PMQ1yr3WH8SDgCUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;05/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;PDeXlup9PMSKWVJ4VLjprSUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;05/31/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;PDeXlup9PMTd5rFdO7OJNiUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/07/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/12/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;PDeXlup9PMREVICbcbNcUCUAROOhrW8HoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RY36&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Elevation Hotel and Spa - 3
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBedrooms&gt;-1&lt;/nbrOfBedrooms&gt;{'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType/&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+UerS/Ebyt63b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+LxYyQr8aNnHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB/HJ9uY+5Z5EXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8IErLE2z6aonb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB9MRnx0SJoKo3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB9BS68C14Kn3nb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB/chcKeJJ53PXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB/UsJt8ldX4C3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB93o/EGJswOZXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+QmCIPys/zN3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB94RGSUiHUgInb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+sXEZcEM9mS3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8vUH96m5n+eHb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+MEk+7ft/b5nb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB9etkkTL/cH7Xb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8oKnnZ0CgRX3b24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB/ytzh1bR2spXb24NBRnnB4oKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RY36&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Elevation Hotel and Spa - 3
                        Nights&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;0&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;2&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;2&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB9PIVoD22CeL5mnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/14/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/17/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+zhovd0Ug2NZmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/18/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB/nUf96081UEpmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/16/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/19/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB9oMrW5j9JU8pmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/17/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/20/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB/75q4nVrthXJmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/18/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/21/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8/Cp7OH2wO95mnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/19/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8ldvv2ppHQFJmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/20/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/23/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+5bsLmN6Cuo5mnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/21/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/24/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB/UQkOWvrIEs5mnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/25/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8gaTHy3eH5U5mnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/23/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/26/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB94WsYsaJNaAZmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/24/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/27/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8GI4xrTpxGMJmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/28/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+l6OsF1FeXgZmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB+xS45yzOJZ1ZmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/30/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8HXYHH1DMwIJmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/01/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB975ZNwulBFbpmnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;aCnWFY0rjB8X7W9YZFaG+5mnvC/0rEUkoKdTLqxT0F8cGeGqCtMq8mfdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;500.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;0867&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;The Christie Lodge&lt;/resortName&gt;
                        {'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;1&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Partial Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;4&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;4&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;fA+ChvH5QBYTiZxgs7tcmdcXjZqLxTBAoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/01/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/08/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;fA+ChvH5QBZACPAViWEUU9cXjZqLxTBAoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/08/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/15/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;fA+ChvH5QBZ2KNM5t5QGodcXjZqLxTBAoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/15/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/22/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;fA+ChvH5QBaHD/81ak5pKdcXjZqLxTBAoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/22/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;06/29/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;fA+ChvH5QBaXmItT0eE1h9cXjZqLxTBAoKdTLqxT0F9iuZHmNUo5U2fdZWaTXHZl&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;850.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'        '}&lt;accommodationItem&gt;{'\n'}
                        {'            '}&lt;resortId&gt;RR04&lt;/resortId&gt;{'\n'}
                        {'            '}&lt;resortName&gt;Beaver Village
                        Condominiums&lt;/resortName&gt;{'\n'}
                        {'            '}&lt;nbrOfBedrooms&gt;3&lt;/nbrOfBedrooms&gt;
                        {'\n'}
                        {'            '}
                        &lt;nbrOfBathrooms&gt;0.0&lt;/nbrOfBathrooms&gt;{'\n'}
                        {'            '}&lt;kitchenType&gt;Full Kitchen&lt;/kitchenType&gt;{'\n'}
                        {'            '}&lt;maxOccupancy&gt;8&lt;/maxOccupancy&gt;
                        {'\n'}
                        {'            '}
                        &lt;privacyOccupancy&gt;6&lt;/privacyOccupancy&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MuSwME6sbel25AXXZB1XnJpUGjG2JsRuoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/25/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/02/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MuSwME6sbemDg8+c5tFrOZpUGjG2JsRuoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/26/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/03/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MuSwME6sbenVQ/Egdq34BppUGjG2JsRuoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/27/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/04/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MuSwME6sbel/aS/1RjVw4ppUGjG2JsRuoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/28/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/05/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MuSwME6sben14DF0AWB07JpUGjG2JsRuoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/29/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/06/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'            '}&lt;availabilityInfo&gt;{'\n'}
                        {'                '}&lt;systemId&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryType&gt;1&lt;/inventoryType&gt;{'\n'}
                        {'                    '}
                        &lt;inventoryId&gt;MuSwME6sbellaletfVTrr5pUGjG2JsRuoKdTLqxT0F/J/2iJkfuO8QCE47kv/73W&lt;/inventoryId&gt;
                        {'\n'}
                        {'                '}&lt;/systemId&gt;{'\n'}
                        {'                '}
                        &lt;checkInDate&gt;06/30/2024&lt;/checkInDate&gt;{'\n'}
                        {'                '}
                        &lt;checkOutDate&gt;07/07/2024&lt;/checkOutDate&gt;{'\n'}
                        {'                '}&lt;unitCost&gt;{'\n'}
                        {'                    '}&lt;value&gt;1200.00&lt;/value&gt;
                        {'\n'}
                        {'                    '}&lt;currency&gt;USD&lt;/currency&gt;
                        {'\n'}
                        {'                '}&lt;/unitCost&gt;{'\n'}
                        {'                '}&lt;unitCount&gt;2&lt;/unitCount&gt;
                        {'\n'}
                        {'            '}&lt;/availabilityInfo&gt;{'\n'}
                        {'        '}&lt;/accommodationItem&gt;{'\n'}
                        {'    '}&lt;/SearchResponse&gt;{'\n'}
                        &lt;/responseEnvelope&gt;
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <h3 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-Responsehandler:">
                Response handler:
              </h3>
              <p>
                <strong>Success </strong>= &gt;{' '}
                <code>responseHeader.StatusData.completionCode = 0</code>
              </p>
              <p>
                <strong>SessionKey </strong>= &gt;{' '}
                <code>responseEnvelope=&gt;SearchResponse.sessionToken.sessionId</code>
              </p>
              <p>
                <strong>Available Unit </strong>=&gt;{' '}
                <code>responseEnvelope=&gt;SearchResponse.accommodationItem</code>
              </p>
              <hr />
              <h2 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-UIPresentation">
                UI Presentation
              </h2>
              <p>The presentation will be different for Type of consumer:</p>
              <h3 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-B2B">B2B</h3>
              <p>
                The consumers to Travel Agencies have the option to put the reservation on Hold.{' '}
              </p>
              <h4 id="FRD-RCIIntegration-MVP1-AvailabilityandShopping-AccommodationCardpresentation">
                Accommodation Card presentation
              </h4>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240222-115310.png"
                  width={409}
                  loading="lazy"
                  src="attachments/617676817/621805602.png?width=409"
                  data-image-src="attachments/617676817/621805602.png"
                  data-height={500}
                  data-width={409}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={621805602}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240222-115310.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={617676817}
                  data-linked-resource-container-version={8}
                  data-media-id="00d23e05-d2a2-4091-b197-390e12fc9ab2"
                  data-media-type="file"
                />
              </span>
              <p>
                <strong>Matching Components</strong>
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1396}
                  data-layout="default"
                  data-local-id="9088f5f6-aab0-43aa-815a-a3927dfee596"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '220.0px' }} />
                    <col style={{ width: '708.0px' }} />
                    <col style={{ width: '464.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Item </strong>
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
                        <p>Image</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          It could extract from RCI FTP
                          <br />
                          Or identify the property and get the content from Expedia. <br />
                          (it will required a match effort)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Location</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Get the location information from an API</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Property Name</p>
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
              <p>
                <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-left"
                    width={373}
                    loading="lazy"
                    src="attachments/617676817/617840699.png?width=373"
                    data-image-src="attachments/617676817/617840699.png"
                    data-height={237}
                    data-width={373}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={617840699}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20231205-123425.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={617676817}
                    data-linked-resource-container-version={8}
                    data-media-id="f80b5ea6-a8d3-4fa3-b60d-6d0425da527e"
                    data-media-type="file"
                  />
                </span>
              </p>
            </div>
            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>
              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/617676817/617840699.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/617676817/621838341.png">AvailabilityMatch.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/617676817/621805573.png">AvailabilityMatch.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/617676817/621805602.png">image-20240222-115310.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/617676817/623706157.png">image-20240227-152236.png</a>{' '}
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

export default FRDRciIntegrationAvailabilityShopping
