import React from 'react'

function RCIIntegration() {
  return (
    <>
      <title>XeniApp : RCI - Integration</title>
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
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : RCI - Integration</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Feb 14,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <hr />
              <h1 id="RCI-Integration-Functionalobjective">Functional objective</h1>
              <p>
                Offer to Xeni´s consumers a section to get HOT DEALS for Resorts accommodation,
                integrating content from RCI provider XML API and apply logic for Type of Consumer:
              </p>
              <ul>
                <li>
                  <p>B2B</p>
                </li>
                <li>
                  <p>B2C</p>
                </li>
              </ul>
              <hr />
              <h2 id="RCI-Integration-FunctionalRequirements">Functional Requirements</h2>
              <div className="table-wrap">
                <table
                  data-table-width={1392}
                  data-layout="default"
                  data-local-id="5bd18828-d36f-41a3-aa2a-6ad8eae71235"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '240.0px' }} />
                    <col style={{ width: '1152.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Actor</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Action</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={4} className="confluenceTd">
                        <p>
                          <strong>Super-admin</strong>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Create an Specific section to manage Hot Deals conditions</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Set Markup for Hot deals by Percentage or Flat price</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Hold booking period (Less than 24hs from RCI Time limit.) </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          Separate tab for activity reports (ClientId, BookingID, Merchant Fee,
                          Revenue, PropertyId, Property Name, Country, Region)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan={10} className="confluenceTd">
                        <p>
                          <strong>B2B User (Travel Agency)</strong>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Generate a New Section in XeniApp to Hold the RCI Deals</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Search logic : Country + Region</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Display the list of Properties returned from RCI XML Api</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          Get the list of Images per Property from an API with better content than
                          RCI FTP.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Allow to Hold a Reservation of a Unit</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Create the Form to get the traveler information Detail:</p>
                        <ul>
                          <li>
                            <p>
                              Names, Last Names, Nationality, Date Of Birth, Identification, Contact
                              Email, Contact Phone Number, Contact Mobile Number
                            </p>
                          </li>
                          <li>
                            <p>Payment Details</p>
                            <ul>
                              <li>
                                <p>Type of Payment</p>
                              </li>
                              <li>
                                <p>Payment Detail information</p>
                              </li>
                              <li>
                                <p>Invoice Address</p>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Store in DB the information of the hold booking.</p>
                        <ul>
                          <li>
                            <p>CustomerId</p>
                          </li>
                          <li>
                            <p>UserId (Associated to the customer)</p>
                          </li>
                          <li>
                            <p>RCI booking confirmation Number</p>
                          </li>
                          <li>
                            <p>PaymentDetails</p>
                          </li>
                          <li>
                            <p>Passenger Information</p>
                          </li>
                          <li>
                            <p>Booking Created Time</p>
                          </li>
                          <li>
                            <p>
                              Booking Expiration Time (According with the SuperAdmin Logic for Hold
                              bookings)
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Generate a new section in command Center “ Hot Deals”</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>List of Bookings on Hold by Customer:</p>
                        <ul>
                          <li>
                            <p>BookingId</p>
                          </li>
                          <li>
                            <p>CreatedBy: UserId</p>
                          </li>
                          <li>
                            <p>Expiration Time</p>
                          </li>
                          <li>
                            <p>Add button to Checkout - To process the payment.</p>
                          </li>
                          <li>
                            <p>
                              Status of the booking (OnHold, Expired, Confirmed (Payment processed),
                              Pending (Payment in Process).
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          Create a Notification Reminder process to advise reservation owner (Travel
                          Agent who created) to advise the reservation is near to expire 3 hours
                          before expiration date.
                          <br />
                          Send an email to Agent/Customer registered Email.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <strong>B2C ( Traveler consumer)</strong>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Display the new section HOT Deals</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Allow consumer to search by Country + Region</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Allow consumer only to book and confirm (Not able to hold the reservation)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The same passenger detail form that Travel Agents, they must enter the
                          payment details.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Booking Confirmation email to the registered Email address by the
                          traveler.{' '}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <p />
              <h2 id="RCI-Integration-APIIntegration">API Integration</h2>
              <p>The API RCI offers to integrate is an XML REST API. </p>
              <p />
              <h2 id="RCI-Integration-Credentials">Credentials</h2>
              <h3 id="RCI-Integration-XML">XML</h3>
              <div className="table-wrap">
                <table
                  data-table-width={1344}
                  data-layout="default"
                  data-local-id="d3e3301f-3657-4a13-9fee-5a3056bd825a"
                  className="confluenceTable"
                >
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Environment</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>URLS</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>User</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Password</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <strong>TEST</strong>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <ul>
                          <li>
                            <p>
                              <a
                                className="external-link"
                                href="https://testb2ba.rci.com/variableduration/gateway"
                                rel="nofollow"
                              >
                                <span className="legacy-color-text-inverse">
                                  https://testb2ba.rci.com/variableduration/gateway
                                </span>
                              </a>
                            </p>
                          </li>
                          <li>
                            <p>
                              <a
                                className="external-link"
                                href="https://testb2bb.rci.com/variableduration/gateway"
                                rel="nofollow"
                              >
                                https://testb2bb.rci.com/variableduration/gateway
                              </a>
                            </p>
                          </li>
                        </ul>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>xmlweeksonly</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>xmlweeksonly</code>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Production</p>
                      </td>
                      <td className="confluenceTd">
                        <p>TBD</p>
                      </td>
                      <td className="confluenceTd">
                        <p>TBD</p>
                      </td>
                      <td className="confluenceTd">
                        <p>TBD</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 id="RCI-Integration-IMAGES">IMAGES</h3>
              <p>
                The vendor offers an SFTP to cache the reference images for resorts and units. It
                must require the declaration of the access IP address and credentials.
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1344}
                  data-layout="default"
                  data-local-id="eb349c2d-df2c-4b4c-a572-333f5613a7d2"
                  className="confluenceTable"
                >
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Environment</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>URLS</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>User</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Password</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <strong>TEST</strong>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>TBD</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>TBD</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>TBD</code>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Production</p>
                      </td>
                      <td className="confluenceTd">
                        <p>TBD</p>
                      </td>
                      <td className="confluenceTd">
                        <p>TBD</p>
                      </td>
                      <td className="confluenceTd">
                        <p>TBD</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <hr />
              <p />
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
                  <input type="hidden" name="treePageId" defaultValue={590348295} />
                  <input type="hidden" name="noRoot" defaultValue="false" />
                  <input type="hidden" name="rootPageId" defaultValue={590348295} />
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
                    <input type="hidden" name="ancestorId" defaultValue={590348295} />
                  </fieldset>
                </fieldset>
              </div>
              <p />
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

export default RCIIntegration
