import React from 'react'

function BRDSplitPayment() {
  return (
    <>
      <title>XeniApp : BRD - Split payments - 2023-11-15</title>
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
                    <a href="Split-payment_585728003.html">Split payment</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : BRD - Split payments - 2023-11-15</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span> on Nov 15, 2023
            </div>
            <div id="main-content" className="wiki-content group">
              <div className="contentLayout2">
                <div className="columnLayout fixed-width" data-layout="fixed-width">
                  <div className="cell normal" data-type="normal">
                    <div className="innerCell">
                      <div className="error">Error rendering macro 'toc' : null</div>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="columnLayout two-left-sidebar" data-layout="two-left-sidebar">
                  <div className="cell aside" data-type="aside">
                    <div className="innerCell">
                      <h2 id="BRD-Splitpayments-2023-11-15-Author">Author</h2>
                      <p>
                        <a
                          className="confluence-userlink user-mention"
                          data-account-id="712020:af48e1a2-707e-4342-9a39-998de0ec4b11"
                          href="https://xeni-workspace.atlassian.net/wiki/people/712020:af48e1a2-707e-4342-9a39-998de0ec4b11?ref=confluence"
                          target="_blank"
                          data-linked-resource-id={579633153}
                          data-linked-resource-version={1}
                          data-linked-resource-type="userinfo"
                          data-base-url="https://xeni-workspace.atlassian.net/wiki"
                        >
                          Gerardo Nizetich
                        </a>{' '}
                      </p>
                    </div>
                  </div>
                  <div className="cell normal" data-type="normal">
                    <div className="innerCell">
                      <h3 id="BRD-Splitpayments-2023-11-15-DocumentversionChanges">
                        Document version Changes{' '}
                      </h3>
                      <div className="table-wrap">
                        <table
                          data-table-width={760}
                          data-layout="default"
                          data-local-id="9fe0c377-5bb2-4aad-982d-34e3458c6e22"
                          className="confluenceTable"
                        >
                          <colgroup>
                            <col style={{ width: '56.0px' }} />
                            <col style={{ width: '63.0px' }} />
                            <col style={{ width: '119.0px' }} />
                            <col style={{ width: '252.0px' }} />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th className="confluenceTh">
                                <p>
                                  <strong>Version</strong>
                                </p>
                              </th>
                              <th className="confluenceTh">
                                <p>
                                  <strong>Date</strong>
                                </p>
                              </th>
                              <th className="confluenceTh">
                                <p>
                                  <strong>Author</strong>
                                </p>
                              </th>
                              <th className="confluenceTh">
                                <p>
                                  <strong>Change description</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="confluenceTd">
                                <p>1.0</p>
                              </td>
                              <td className="confluenceTd">
                                <p>2023-11-15</p>
                              </td>
                              <td className="confluenceTd">
                                <p>
                                  <a
                                    className="confluence-userlink user-mention"
                                    data-account-id="712020:af48e1a2-707e-4342-9a39-998de0ec4b11"
                                    href="https://xeni-workspace.atlassian.net/wiki/people/712020:af48e1a2-707e-4342-9a39-998de0ec4b11?ref=confluence"
                                    target="_blank"
                                    data-linked-resource-id={579633153}
                                    data-linked-resource-version={1}
                                    data-linked-resource-type="userinfo"
                                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                                  >
                                    Gerardo Nizetich
                                  </a>{' '}
                                </p>
                              </td>
                              <td className="confluenceTd">
                                <p>Original </p>
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
                              <td className="confluenceTd">
                                <p />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columnLayout fixed-width" data-layout="fixed-width">
                  <div className="cell normal" data-type="normal">
                    <div className="innerCell">
                      <hr />
                      <h1 id="BRD-Splitpayments-2023-11-15-Introduction">Introduction</h1>
                      <p>
                        When a user selects the flight itinerary and other services that completes
                        his booking and pays for it, it is highly recommended to reduce the cost of
                        transactions to split the payment in 2 different merchant id.{' '}
                      </p>
                      <p>
                        All the flight services must go to the validating carrier merchant ID and
                        the rest of the services should go to Xeni´s merchant ID.
                      </p>
                      <h2 id="BRD-Splitpayments-2023-11-15-Purpose">Purpose</h2>
                      <p>
                        The purpose of this feature is to enhance the cost of the service fee that
                        Xeni holds for every transaction and reduce the cost of the air services to
                        our consumers
                      </p>
                      <h2 id="BRD-Splitpayments-2023-11-15-Scope">Scope</h2>
                      <p>This feature will directly impact in the air costs</p>
                      <p>
                        This feature will impact in the backend and the DB schema, it is required to
                        add the logic to:
                      </p>
                      <ul>
                        <li>
                          <p>Identify the type of service in advance.</p>
                        </li>
                        <li>
                          <p>
                            Split the flight service type and send the right form of payment to the
                            Orchestrator to handle the payments approval through the Validating
                            Carrier Merchant ID.
                          </p>
                        </li>
                        <li>
                          <p>Send all the non-air services related to the Xeni´s merchant ID.</p>
                        </li>
                        <li>
                          <p>
                            Generate the right tracking plan to control and have the data of every
                            transaction for conciliation purposes.
                          </p>
                        </li>
                      </ul>
                      <hr />
                      <h2 id="BRD-Splitpayments-2023-11-15-FunctionalRequirement">
                        Functional Requirement
                      </h2>
                      <p>
                        <strong>Use case</strong>
                      </p>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="f42d040e-160e-47dd-bf76-713a04387103"
                          className="confluenceTable"
                        >
                          <colgroup>
                            <col />
                            <col style={{ width: '1148.0px' }} />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th className="numberingColumn confluenceTh" />
                              <th className="confluenceTh">
                                <p>
                                  <strong>Consumer gets the seat map details</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>User login in the App</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>
                                  User search for a Flight (ex: BOS - MIA - 05NOV | MIA - BOS 09NOV)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>User gets the list of itinerary offers</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>User selects an itinerary in lowest available fare</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>User selects Book Now</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">6</td>
                              <td className="confluenceTd">
                                <p>User completes the Personal Information.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">7</td>
                              <td className="confluenceTd">
                                <p>User completes the Form of Payment.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">8</td>
                              <td className="confluenceTd">
                                <p>User adds extra services (ex: Trip Add)</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">9</td>
                              <td className="confluenceTd">
                                <p>At time of process the payments:</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">10</td>
                              <td className="confluenceTd">
                                <p>
                                  In backend- Send the request to Orchestrator to issue the tickets
                                  and include the form of payment.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">11</td>
                              <td className="confluenceTd">
                                <p>
                                  Orchestration will send the information to the vendor who is the
                                  responsible to get the approval and issue the ticket against the
                                  validating carrier. (Merchant ID)
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">12</td>
                              <td className="confluenceTd">
                                <p>
                                  In Backend - All the services non-flight related as Xeni´s Fee,
                                  Agency Markup, TripAdd services, Hotels, Rental Car, Activities
                                  must be address through Xeni´s merchant Id
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">13</td>
                              <td className="confluenceTd">
                                <p>
                                  User will recognize in his Form of Payment summary 2 debits:
                                  <br />
                                  Airline - For the tickets, Airline Ancillaries, Paid Seats, etc.
                                  <br />
                                  Xeni - Rest of the services
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h3 id="BRD-Splitpayments-2023-11-15-Context">Context</h3>
                      <p>
                        Every time a user pay for a ticket, it must be address to the right Merchant
                        ID.
                      </p>
                      <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                        <img
                          className="confluence-embedded-image image-left"
                          width={851}
                          loading="lazy"
                          src="attachments/585957377/585728025.png?width=851"
                          data-image-src="attachments/585957377/585728025.png"
                          data-height={541}
                          data-width={851}
                          data-unresolved-comment-count={0}
                          data-linked-resource-id={585728025}
                          data-linked-resource-version={1}
                          data-linked-resource-type="attachment"
                          data-linked-resource-default-alias="plit payment flow.png"
                          data-base-url="https://xeni-workspace.atlassian.net/wiki"
                          data-linked-resource-content-type="image/png"
                          data-linked-resource-container-id={585957377}
                          data-linked-resource-container-version={1}
                          data-media-id="d741c05c-6368-4f64-837a-fa6a86d5d47d"
                          data-media-type="file"
                        />
                      </span>
                      <p />
                      <p>
                        <strong>Cost draft Analysis:</strong>
                      </p>
                      <p>
                        <a
                          className="external-link"
                          data-card-appearance="inline"
                          href="https://docs.google.com/spreadsheets/d/1WfLzTvGXO-TC8kWY4nsitRFEwXTb-K4ZHoPi1-BssJI/edit#gid=0"
                          rel="nofollow"
                        >
                          https://docs.google.com/spreadsheets/d/1WfLzTvGXO-TC8kWY4nsitRFEwXTb-K4ZHoPi1-BssJI/edit#gid=0
                        </a>{' '}
                      </p>
                      <h3 id="BRD-Splitpayments-2023-11-15-UserRequirement">User Requirement</h3>
                      <blockquote>
                        <p>
                          Pre condition of the user, Business context for the feature, expected
                          result
                        </p>
                      </blockquote>
                      <p>Any type of user</p>
                      <hr />
                      <h2 id="BRD-Splitpayments-2023-11-15-FunctionalGoals">Functional Goals</h2>
                      <blockquote>
                        <p>Description of the business impact</p>
                      </blockquote>
                      <p>
                        Adding the capability of split payment to the flight product will reduce our
                        costs. This feature is part of large strategy of refreshing the all flights
                        product to revert the user experience. make it more attractive and
                        functional.{' '}
                      </p>
                      <p>The idea of this strategy has 2 major points:</p>
                      <p>
                        1 - Reduce the direct costs of the product to external and internal
                        consumers.
                      </p>
                      <p>
                        2 - Make the Flights product more attractive and competitive for customers.
                      </p>
                      <p>3 - Increase the use of the flight product from our customers.</p>
                      <p />
                      <h3 id="BRD-Splitpayments-2023-11-15-ConstrainsandRisks">
                        Constrains and Risks
                      </h3>
                      <ul>
                        <li>
                          <p>
                            The capability of process payment through the validating carrier
                            merchant ID is part of the functionalities of the vendors. All our
                            vendors should have it.{' '}
                          </p>
                        </li>
                        <li>
                          <p>
                            The orchestrator must be the responsible to pass the correct information
                            to the vendor and return the proper status of the transaction at the
                            time of request the issue of the air services (Tickets, Ancillaries,
                            etc)
                          </p>
                        </li>
                        <li>
                          <p>
                            It is required to certify the transaction capability with each of Xeni´s
                            vendors. (Consolid, TravelFusion, Skybird, AccessFare, etc.)
                          </p>
                        </li>
                        <li>
                          <p>
                            It is required to certify with the Orchestrator (Thomalex) the
                            capability to handle the Order Purchase with the vendor and responses
                            handling.
                          </p>
                        </li>
                      </ul>
                      <h3 id="BRD-Splitpayments-2023-11-15-Measuresuccess">Measure success</h3>
                      <blockquote>
                        <p>
                          Any action that be useful to measure the success of the feature, Metrics
                          to track behavior, measure productivity, customer surveys, etc
                        </p>
                      </blockquote>
                      <ul>
                        <li>
                          <p>How many Ticketing request sent.</p>
                        </li>
                        <li>
                          <p>Ticketing error vs Ticketing success</p>
                        </li>
                        <li>
                          <p>How many ticketing error are based on Payment error.</p>
                        </li>
                        <li>
                          <p>EMDs error vs EMDs success</p>
                        </li>
                        <li>
                          <p>How many EMDs error are based on payment error. </p>
                        </li>
                      </ul>
                      <h2 id="BRD-Splitpayments-2023-11-15-DefinitionofReadiness">
                        Definition of Readiness
                      </h2>
                      <blockquote>
                        <p>Describe the process to define the feature as ready for Production. </p>
                        <p>Success Use cases</p>
                        <p>Min. factible functionality to deliver</p>
                        <p>MVPs acceptables</p>
                      </blockquote>
                      <ul>
                        <li>
                          <p>
                            <strong>MVP1:</strong>
                          </p>
                          <ul>
                            <li>
                              <p>Identify Service Type</p>
                            </li>
                            <li>
                              <p>
                                Split the cost of Flights-direct services vs non-flight services
                              </p>
                            </li>
                            <li>
                              <p>
                                Send the Flights-services with Payment details to the Orchestrator
                                to request the Order purchase.
                              </p>
                              <ul>
                                <li>
                                  <p>Track the success case.</p>
                                </li>
                                <li>
                                  <p>Track the error case.</p>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <p>
                                Send the non-flight services to the Payment Gateway with the Xeni´s
                                merchant ID.
                              </p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>
              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/585957377/585728025.png">plit payment flow.png</a> (image/png)
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

export default BRDSplitPayment
