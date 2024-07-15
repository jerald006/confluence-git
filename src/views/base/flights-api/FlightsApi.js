import React from 'react'

function FlightsApi() {
  return (
    <>
      <title>XeniApp : Flights API</title>
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
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : Flights API</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Jun 12,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206695085 {padding: 0px;}\ndiv.rbtoc1719206695085 ul {list-style: none;margin-left: 0px;}\ndiv.rbtoc1719206695085 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206695085">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FlightsAPI-Purpose">Purpose</a>
                  </li>
                  <li>
                    <a href="#FlightsAPI-Conceptsintroduction">Concepts introduction</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FlightsAPI-Offer-Management">Offer-Management</a>
                      </li>
                      <li>
                        <a href="#FlightsAPI-Order-management">Order-management</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FlightsAPI-Concept">Concept</a>
                          </li>
                          <li>
                            <a href="#FlightsAPI-Flightcomponents:">Flight components:</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FlightsAPI-APIDefinition">API Definition</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="FlightsAPI-Purpose">Purpose</h1>
              <p>Offer a list of endpoints to support the Flight transactions:</p>
              <ul>
                <li>
                  <p>
                    <strong>Shopping</strong> (Offer-management)
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Bookings </strong>(Order-management)
                  </p>
                </li>
              </ul>
              <p>
                It is required to create the structure of the endpoints according to the industry
                standards accomplish the AIDM bases of IATA.{' '}
              </p>
              <hr />
              <h1 id="FlightsAPI-Conceptsintroduction">Concepts introduction</h1>
              <p />
              <hr />
              <h2 id="FlightsAPI-Offer-Management">Offer-Management</h2>
              <p>
                It refers the to the search offer criteria and the management of the offer to expose
                to consumers
                <br />
                The main service associated to the offer-management is the Shopping
              </p>
              <hr />
              <h2 id="FlightsAPI-Order-management">Order-management</h2>
              <h3 id="FlightsAPI-Concept">Concept</h3>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  alt="OrderDiagram.png"
                  width={1022}
                  loading="lazy"
                  src="attachments/636911637/660078599.png?width=1022"
                  data-image-src="attachments/636911637/660078599.png"
                  data-height={1414}
                  data-width={1316}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={660078599}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="OrderDiagram.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={636911637}
                  data-linked-resource-container-version={5}
                  data-media-id="8ec7d76e-0871-4d8c-b6cc-299eede13e59"
                  data-media-type="file"
                />
              </span>
              <p>
                An order refers to a single or group of services booked for a traveler under s
                single identification instance. Internally and order is a container instance for a
                single or group of traveler that hold different services inside, it is a concept
                related to Cart of services:
              </p>
              <h3 id="FlightsAPI-Flightcomponents:">Flight components:</h3>
              <p>
                The legacy concept of Travel industry is the PNR (Passenger Name record)
                <br />
                In the case of an Order management the PNR is part of the entire Order, the flights
                component have their own identification Booking Reference or Booking Code, to
                identify the portion of the Order.
              </p>
              <p>
                In today´s operation of travel industry, the components of an order could become
                from different vendors (Actors), inside the Flight components, the entire itinerary
                can hold different flight segments from different vendors as NDC explained in their
                model. <br />
                For XENI purposes, this concept will be the end of the roadmap, but in the first
                approach to the distribution and booking order concept, the flight component booked
                will hold the services from an specific vendor.{' '}
              </p>
              <hr />
              <h2 id="FlightsAPI-APIDefinition">API Definition</h2>
              <p>YAML</p>
              <p className="media-group">
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/636911637/669155590.yaml"
                    data-nice-type="null"
                    data-file-src="/wiki/download/attachments/636911637/XENIAPI_Flights.yaml?version=1&modificationDate=1718201835050&cacheVersion=1&api=v2"
                    data-linked-resource-id={669155590}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={636911637}
                    data-linked-resource-default-alias="XENIAPI_Flights.yaml"
                    data-mime-type="binary/octet-stream"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="17d6724e-bf31-449c-825a-9f2c1bfe9604"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/636911637/669155590" height={250} />
                  </a>
                </span>
              </p>
              <p>JSON</p>
              <p className="media-group">
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/636911637/669155596.json"
                    data-nice-type="null"
                    data-file-src="/wiki/download/attachments/636911637/XenAPI_Flights.json?version=1&modificationDate=1718201848949&cacheVersion=1&api=v2"
                    data-linked-resource-id={669155596}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={636911637}
                    data-linked-resource-default-alias="XenAPI_Flights.json"
                    data-mime-type="application/json"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="2b87a2c6-cf93-4fef-8781-71b11a67ded0"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/636911637/669155596" height={250} />
                  </a>
                </span>
              </p>
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
                <a href="attachments/636911637/637206551.json">
                  XeniAPI_Draft_1_v20240301.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/636911637/660078599.png">OrderDiagram.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/636911637/669155590.yaml">XENIAPI_Flights.yaml</a>{' '}
                (binary/octet-stream)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/636911637/669155596.json">XenAPI_Flights.json</a>{' '}
                (application/json)
                <br />
              </div>
            </div>
          </div>{' '}
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

export default FlightsApi
