import React from 'react'

function MiscellaneousEndPoints() {
  return (
    <>
      <title>XeniApp : Miscellaneous endpoints</title>
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
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : Miscellaneous endpoints</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Jul 09,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <hr />
              <h1 id="Miscellaneousendpoints-Overview">Overview</h1>
              <p>
                The objective of these endpoints is to transfer the Static data for users to resolve
                queries related to:
              </p>
              <ul>
                <li>
                  <p>Airports data</p>
                </li>
                <li>
                  <p>Carriers</p>
                </li>
                <li>
                  <p>Aircrafts</p>
                </li>
              </ul>
              <p>Also, the idea is to offer rich content to hydrate UI with reference images.</p>
              <hr />
              <h2 id="Miscellaneousendpoints-BusinessObjective:">Business Objective:</h2>
              <p>
                The idea from XENI is to get independence of the static data content avoiding any
                dependency from vendor content and have a single source to keep the GUI standardize
                alongside the vendor who provide the dynamic data.{' '}
              </p>
              <hr />
              <h2 id="Miscellaneousendpoints-FunctionalRequirements">Functional Requirements</h2>
              <p />
              <h3 id="Miscellaneousendpoints-BasicData">Basic Data</h3>
              <ul>
                <li>
                  <p>Store the list of IATA Airport codes.</p>
                  <ul>
                    <li>
                      <p>Airport Names</p>
                    </li>
                    <li>
                      <p>Associated City</p>
                    </li>
                    <li>
                      <p>Geo Location (lon/lat)</p>
                    </li>
                    <li>
                      <p>Associated State/Province</p>
                    </li>
                    <li>
                      <p>Country code.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Store the list of IATA carrier codes</p>
                  <ul>
                    <li>
                      <p>Carrier Code</p>
                    </li>
                    <li>
                      <p>Carrier Name</p>
                    </li>
                    <li>
                      <p>Carrier Logo</p>
                    </li>
                    <li>
                      <p>IATA Designator number</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p />
                </li>
                <li>
                  <p>Store the list of City Codes (non-airport) &amp; geo Location (lon/lat)</p>
                  <ul>
                    <li>
                      <p>IATA City code (ex: NYC)</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Store the list of Aircraft codes (ICAO/Aircrafts)</p>
                  <ul>
                    <li>
                      <p>Aircraft code</p>
                    </li>
                    <li>
                      <p>Aircraft Name</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 id="Miscellaneousendpoints-Rich-content">Rich-content</h3>
              <ul>
                <li>
                  <p>Airports</p>
                  <ul>
                    <li>
                      <p>Reference Images</p>
                    </li>
                    <li>
                      <p>Airport Map</p>
                    </li>
                    <li>
                      <p>Offer Services</p>
                      <ul>
                        <li>
                          <p>Lounge rooms</p>
                        </li>
                        <li>
                          <p>Parking</p>
                        </li>
                        <li>
                          <p>Shuttle</p>
                        </li>
                        <li>
                          <p>Distances</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Destinations:</p>
                  <ul>
                    <li>
                      <p>Reference Images</p>
                    </li>
                    <li>
                      <p>Reference points of interest</p>
                    </li>
                    <li>
                      <p>Distances</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Carriers</p>
                  <ul>
                    <li>
                      <p>Representative images</p>
                      <ul>
                        <li>
                          <p>Aircrafts</p>
                        </li>
                        <li>
                          <p>Seats by Cabin</p>
                        </li>
                        <li>
                          <p>Extra services</p>
                        </li>
                        <li>
                          <p>Rich logos</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
              <h2 id="Miscellaneousendpoints-Endpoints">Endpoints </h2>
              <ul>
                <li>
                  <p>
                    <strong>/Location/decode: </strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Decode</strong>: Given a type of code =&gt; Return the associating
                        data
                      </p>
                      <ul>
                        <li>
                          <p>
                            <strong>by CityCode</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>byCountryCode</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>All</strong>: Return the entire list of cities in DB:
                            (Pagination?)
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>/airports/getAirports:</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>airportCode:</strong> return the data associated
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>all</strong>: Return the list of IATA airports in system
                        (pagination?)
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>/flights/carrier:</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>carrier Code</strong>: Return the data including Logo
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>all</strong>: Return the entire list of Carriers data.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Get meals</strong>
                  </p>
                  <ul>
                    <li>
                      <p>Given a Meal code return the value of the meal. </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <p></p>
            </div>
          </div>{' '}
        </div>
        <div id="footer" role="contentinfo">
          <section className="footer-body">
            <p>Document generated by Confluence on Jul 10, 2024 07:50</p>
            <div id="footer-logo">
              <a href="http://www.atlassian.com/">Atlassian</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default MiscellaneousEndPoints
