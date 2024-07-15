import React from 'react'

function CruiseData() {
  return (
    <>
      <title>XeniApp : XENI API: Cruise data.</title>
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
              <span id="title-text">XeniApp : XENI API: Cruise data.</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Feb 15,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <hr />
              <h1 id="XENIAPI:Cruisedata.-Functionalproposal">Functional proposal</h1>
              <p>
                Offer from XENI API a set of endpoints to get the Cruise data for hydrate UI and in
                the future to expose to our consumers. <br />
                <br />
              </p>
              <h2 id="XENIAPI:Cruisedata.-Scope">Scope</h2>
              <p>
                Based on the idea to get the static data from Vendor´s API here:{' '}
                <a
                  href="Cache-cruise-Ship-data._607485953.html"
                  data-linked-resource-id={607485953}
                  data-linked-resource-version={5}
                  data-linked-resource-type="page"
                >
                  Cache cruise Ship data.
                </a>{' '}
                plus, more content when we start working with this product like for example:
                <br />
                Itineraries
                <br />
                Cabin Categories
                <br />
                Images
                <br />
                Sailing dates offers (This is new and it is related to other endpoints in the API).
              </p>
              <p>
                Then create API endpoints in XENI to consume the static data and reduce the number
                of requests to the vendor, standardize the process, and only take care of the
                dynamic data.{' '}
              </p>
              <p>
                The risk is to generate much consumption of vendor endpoint at the beginning of the
                process to store the data and reach the limits and quota, but, then it will be
                drastic reduce.
              </p>
              <p />
              <h2 id="XENIAPI:Cruisedata.-Whatdatawecancapture">What data we can capture </h2>
              <p>
                Staring for the itineraries of a selected offer in the UI. <br />
                The method that will return the itinerary details take over 12s to resolve. This
                will affect our performance for Xeni consumers and it is not related to our product
                directly. <br />
              </p>
              <ul>
                <li>
                  <p>
                    I propose to cache and assign an Id to each itinerary of a Ship, (Compares the
                    Portnames object with the Itinerary points stored to resolve in the first search
                    the itinerary of the selected ship.)
                  </p>
                </li>
                <li>
                  <p>
                    Store the Reference cabin Category for Ships based on Grade. (Using the static
                    data for images).
                  </p>
                </li>
                <li>
                  <p>Decks and decks plan by shipId</p>
                </li>
                <li>
                  <p>
                    Store maps for Reference port points. <br />
                  </p>
                </li>
              </ul>
              <hr />
              <h2 id="XENIAPI:Cruisedata.-SuggestedAPIS">Suggested APIS</h2>
              <h3 id="XENIAPI:Cruisedata.-GetShipinformation">
                <br />
                Get Ship information
              </h3>
              <p />
              <p>
                <strong>Method</strong>: GET
                <br />
                <strong>Segment</strong>: /cruise
                <br />
                <strong>Endpoint</strong>: /information
              </p>
              <p />
              <p>
                <strong>Functionality</strong>: Get the general cruise information based on cruiseID
                + shipID.
              </p>
              <p>Draft payload</p>
              <div id="expander-869428756" className="expand-container">
                <div id="expander-control-869428756" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET:/cruise/information - request</span>
                </div>
                <div id="expander-content-869428756" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'  '}"correlationId": "A unique identifier Id for transaction associated to
                        sessionId",{'\n'}
                        {'  '}"cruiseLineId":"Id of the CruiseLine from Selected item in UI",{'\n'}
                        {'  '}"shipId":"ShipId selected from User"{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-883965666" className="expand-container">
                <div id="expander-control-883965666" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET:/cruise/information - response</span>
                </div>
                <div id="expander-content-883965666" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'  '}"correlationId": "A unique identifier Id for transaction associated to
                        sessionId",{'\n'}
                        {'  '}"cruiseline": {'{'}
                        {'\n'}
                        {'    '}"cruiseLineId": "",{'\n'}
                        {'    '}"name": "",{'\n'}
                        {'    '}"code": "",{'\n'}
                        {'    '}"images": {'{'}
                        {'}'}
                        {'\n'}
                        {'  '}
                        {'}'},{'\n'}
                        {'  '}"shipInformation": {'{'}
                        {'\n'}
                        {'    '}"Id": "",{'\n'}
                        {'    '}"Name": "",{'\n'}
                        {'    '}"Images": {'{'}
                        {'}'},{'\n'}
                        {'    '}"tonage": "",{'\n'}
                        {'    '}"crew": "",{'\n'}
                        {'    '}"totalCapacity": "",{'\n'}
                        {'    '}"totalPassengers": ""{'\n'}
                        {'  '}
                        {'}'},{'\n'}
                        {'  '}"decks": {'{'}
                        {'}'},{'\n'}
                        {'  '}"cabins": {'{'}
                        {'}'},{'\n'}
                        {'  '}"facilities": [],{'\n'}
                        {'  '}"images":[]{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h3 id="XENIAPI:Cruisedata.-GetShipDecks">Get Ship Decks</h3>
              <p />
              <hr />
              <h3 id="XENIAPI:Cruisedata.-GetShipimages">Get Ship images</h3>
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

export default CruiseData
