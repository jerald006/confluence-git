import React from 'react'

function PassengerAdditionalInformation() {
  return (
    <>
      <title>XeniApp : Passenger Additional Information.</title>
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
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : Passenger Additional Information.</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Dec 27,
              2023
            </div>
            <div id="main-content" className="wiki-content group">
              <hr />
              <h1 id="PassengerAdditionalInformation.-Objective">Objective</h1>
              <ul>
                <li>
                  <p>Collect the Travel documentation</p>
                  <ul>
                    <li>
                      <p>DOCS</p>
                    </li>
                    <li>
                      <p>DOCO</p>
                    </li>
                    <li>
                      <p>DOCA</p>
                    </li>
                    <li>
                      <p>FOID</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Collect the Passenger Frequent Flyer</p>
                </li>
                <li>
                  <p>Collect the Information and Apply to TSA. (SecureFlight)</p>
                </li>
              </ul>
              <hr />
              <h2 id="PassengerAdditionalInformation.-Context">Context</h2>
              <p>
                The travel documentation is related to the required documentation that an itinerary
                claims for travelers to board a flight.{' '}
              </p>
              <p>It is a standard of the industry and is based on:</p>
              <ul>
                <li>
                  <p>Origin</p>
                </li>
                <li>
                  <p>Destination</p>
                </li>
                <li>
                  <p>Passenger Nationality</p>
                </li>
              </ul>
              <p>
                The standard SSRs (special service request) to enter the information into a booking
                (PNR) must be available in the booking flow as an optional section named advance
                passenger information.
              </p>
              <p />
              <p>
                The Frequent Traveler, is an important information to collect for each participant
                carrier in the itinerary since it will be direct associated with Seat Map and
                Ancillaries.
              </p>
              <p />
              <p>
                FOID
                <br />
                It is an standard industry data that every day is more requested by the carrier
                prior to issue the tickets.{' '}
              </p>
              <p />
              <p>Secure Flight (TSA)</p>
              <p>
                It is something that we need to make a research about the implementation of the
                Travel Documentation for specific citizenships based on Destination.{' '}
              </p>
              <hr />
              <p></p>
              <div className="plugin_pagetree">
                <ul className="plugin_pagetree_children_list plugin_pagetree_children_list_noleftspace">
                  <div className="plugin_pagetree_children"></div>
                </ul>
                <fieldset className="hidden">
                  <input type="hidden" name="treeId" defaultValue="" />
                  <input
                    type="hidden"
                    name="treeRequestId"
                    defaultValue="/wiki/plugins/pagetree/naturalchildren.action?decorator=none&excerpt=false&sort=position&reverse=false&disableLinks=false&expandCurrent=false"
                  />
                  <input type="hidden" name="treePageId" defaultValue={585728037} />
                  <input type="hidden" name="noRoot" defaultValue="false" />
                  <input type="hidden" name="rootPageId" defaultValue={585728037} />
                  <input type="hidden" name="rootPage" defaultValue="" />
                  <input type="hidden" name="startDepth" defaultValue={1} />
                  <input type="hidden" name="spaceKey" defaultValue="XENIAPP" />
                  <input type="hidden" name="i18n-pagetree.loading" defaultValue="Loading..." />
                  <input
                    type="hidden"
                    name="i18n-pagetree.error.permission"
                    defaultValue="Unable to load page tree. It seems that you do not have permission to view the root page."
                  />
                  <input
                    type="hidden"
                    name="i18n-pagetree.eeror.general"
                    defaultValue="There was a problem retrieving the page tree. Please check the server log file for more information."
                  />
                  <input type="hidden" name="loginUrl" defaultValue="" />
                  <input type="hidden" name="mobile" defaultValue="false" />
                  <fieldset className="hidden">
                    <input type="hidden" name="ancestorId" defaultValue={585728037} />
                  </fieldset>
                </fieldset>
              </div>
              <p />
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

export default PassengerAdditionalInformation
