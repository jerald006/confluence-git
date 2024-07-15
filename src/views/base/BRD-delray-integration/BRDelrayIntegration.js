import React from 'react'

function BRDelrayIntegration() {
  return (
    <>
      <title>XeniApp : BRD - Delray integration - 2023-12-05</title>
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
                    <a href="Delray-integration_580714509.html">Delray integration</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : BRD - Delray integration - 2023-12-05</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Dec 06,
              2023
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
                      <h2 id="BRD-Delrayintegration-2023-12-05-Author">Author</h2>
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
                      <h3 id="BRD-Delrayintegration-2023-12-05-DocumentversionChanges">
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
                            <col style={{ width: '88.0px' }} />
                            <col style={{ width: '114.0px' }} />
                            <col style={{ width: '207.0px' }} />
                            <col style={{ width: '437.0px' }} />
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
                                <p>2023-12-05</p>
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
                                <p>Original scope was created out of this process. </p>
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
                      <h1 id="BRD-Delrayintegration-2023-12-05-Introduction">Introduction</h1>
                      <p>
                        Integrate the Delray website, which holds near of 40K users and offers deals
                        for certain products like Hotels, Cars, and Activities. <br />
                        We need to import the current list of Delray users (only email addresses) to
                        identify them and get the proper credentials.{' '}
                      </p>
                      <h2 id="BRD-Delrayintegration-2023-12-05-Purpose">Purpose</h2>
                      <p>
                        Integrate the content of Xeni products into the Delray website applying a
                        deal discount over it and increasing the transaction volume based on the 40K
                        registered users in Delray.{' '}
                      </p>
                      <h2 id="BRD-Delrayintegration-2023-12-05-Scope">Scope</h2>
                      <ul>
                        <li>
                          <p>
                            <strong>Users:</strong>
                          </p>
                          <ul>
                            <li>
                              <p>
                                Registered users: Those who are already registered on the DELRAY
                                website and Xeni gets the list of user emails.{' '}
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    Create a logic to complete the signup and log in the user
                                    automatically into Delray.com
                                  </p>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <p>
                                Unregistered users: New users who want to subscribe to Delray.com.
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    Create logic to sign up the user and create a verification email
                                    to login into Delray.com
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>
                            <strong>Content:</strong>
                          </p>
                          <ul>
                            <li>
                              <p>Create an API to fetch the content from different products:</p>
                              <ul>
                                <li>
                                  <p>Hotels</p>
                                </li>
                                <li>
                                  <p>Cars</p>
                                </li>
                                <li>
                                  <p>Activities</p>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <p>Create a Cron that supplies the content</p>
                            </li>
                            <li>
                              <p>Create logic to display prices only to the subscribers</p>
                            </li>
                            <li>
                              <p>
                                The default view of the website is for a fixed location: Las Vegas
                              </p>
                            </li>
                            <li>
                              <p>Users can select Location to search for deals and offers.</p>
                            </li>
                            <li>
                              <p>
                                Users can select the Date or date range for certain types of product
                              </p>
                            </li>
                            <li>
                              <p>Generate paginations for large content options.</p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>
                            <strong>Display</strong>
                          </p>
                          <ul>
                            <li>
                              <p>Display a section for the type of product:</p>
                              <ul>
                                <li>
                                  <p>
                                    Hotels - On Top - 4 Instances per view based on the location.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    Activities - Second section - 4 Instances per view based on the
                                    location.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    Cars - Third section - 4 Instances for Economy cars per view
                                    based on the location selected.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    Flights - Offer a banner to select flights and redirect the
                                    users to the Xeni search flights widget.
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>
                            <strong>Backend</strong>
                          </p>
                          <ul>
                            <li>
                              <p>Generate APIs to fetch the content of each type of service</p>
                            </li>
                            <li>
                              <p>
                                Generate logic to SSO Delray users as trusted users to different
                                book pages (Hotel, Activities, and cars)
                              </p>
                            </li>
                            <li>
                              <p>
                                Generate logic to SSO Delray user as a trusted user to search
                                flights in the Xeni platform.
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>
                            <strong>Design</strong>:
                          </p>
                          <ul>
                            <li>
                              <p>
                                <a
                                  className="external-link"
                                  data-card-appearance="inline"
                                  href="https://www.figma.com/file/t0Cbll5LcmlKUkZMsHmvEj/Dealray-Website?type=design&node-id=0-1&mode=design&t=pgX05YgWy3bTrwtX-0"
                                  rel="nofollow"
                                >
                                  https://www.figma.com/file/t0Cbll5LcmlKUkZMsHmvEj/Dealray-Website?type=design&amp;node-id=0-1&amp;mode=design&amp;t=pgX05YgWy3bTrwtX-0
                                </a>{' '}
                              </p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <hr />
                      <h2 id="BRD-Delrayintegration-2023-12-05-FunctionalRequirement">
                        Functional Requirement
                      </h2>
                      <p>
                        <strong>use case 1: </strong>
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
                                  <strong>Non-registered Delray user</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>User visit Delray.com</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>User can see the content without prices</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>
                                  User clicks location or reveal price button of an option -
                                  Redirect to Signup{' '}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>User enters:</p>
                                <ul>
                                  <li>
                                    <p>First name</p>
                                  </li>
                                  <li>
                                    <p>Last name</p>
                                  </li>
                                  <li>
                                    <p>email</p>
                                  </li>
                                  <li>
                                    <p>generate a password</p>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>
                                  Entered email address is verified - User does not exist in user DB
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">6</td>
                              <td className="confluenceTd">
                                <p>
                                  User received a verification email in the registered email inboxes
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">7</td>
                              <td className="confluenceTd">
                                <p>User clicks on the link and the user is verified user-user</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">8</td>
                              <td className="confluenceTd">
                                <p>
                                  User navigates to{' '}
                                  <a
                                    className="external-link"
                                    href="http://Delray.com"
                                    rel="nofollow"
                                  >
                                    Delray.com
                                  </a>
                                  , clicks on Login, and enters his credentials user
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">9</td>
                              <td className="confluenceTd">
                                <p>
                                  User successfully login into the{' '}
                                  <a
                                    className="external-link"
                                    href="http://Delray.com"
                                    rel="nofollow"
                                  >
                                    Delray.com
                                  </a>{' '}
                                  and see the prices and offers for LAs Vegas as default viewers
                                  user
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">10</td>
                              <td className="confluenceTd">
                                <p>
                                  User can select a different location and enter Dates to search
                                  deals content.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        <strong>user case 2: </strong>
                      </p>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="05a09d5a-ff77-4664-8b17-93cf9805452c"
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
                                  <strong>Registered Delray users</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>User received an email to welcome them back to Delray</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>
                                  User click on the link and is redirected to the Delray website.{' '}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>
                                  Users can see hotels, activities, and car deals without prices.{' '}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>
                                  Users can see the button revealing the price that redirects them
                                  to the sign-up form.{' '}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>The user completes the name, the email and the password</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">6</td>
                              <td className="confluenceTd">
                                <p>
                                  The backend verifies if the email exists in DB and it exists.{' '}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">7</td>
                              <td className="confluenceTd">
                                <p>The backend updates the User instance information in DB. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">8</td>
                              <td className="confluenceTd">
                                <p>The user is automatically logged in to the Delray website. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">9</td>
                              <td className="confluenceTd">
                                <p>
                                  Users can see the prices and deals for each instance of service
                                  offered. (Hotels, Cars, Activities) in the default location.{' '}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        <strong>use case 3: </strong>
                      </p>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="6d68d8be-2562-465f-a144-bb344e9f1ce5"
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
                                  <strong>Reset user password</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>The user is already registered in Delray. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>The user forgot his password. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>The user clicks on Login “Forgot my password”.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>
                                  The system returns the sign-up form with the user data
                                  pre-populated except for the Password the user-user
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>user enter his new password and the DB is updated user</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">6</td>
                              <td className="confluenceTd">
                                <p>
                                  User can login into the{' '}
                                  <a
                                    className="external-link"
                                    href="http://delray.com"
                                    rel="nofollow"
                                  >
                                    delray.com
                                  </a>{' '}
                                  website using the new password.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        <strong>Use case 4:</strong>
                      </p>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="10b96392-68d8-4a31-9fa6-8ff43ba32878"
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
                                  <strong>User search by location</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>The user is already registered in Delray. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>The user searches for a specific Location. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>The backend will search by API to fetch:</p>
                                <ul>
                                  <li>
                                    <p>
                                      List of hotels according to the location entered by the user.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      List of activities according to the location entered by the
                                      user.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      List of cars according to the location entered by the user.
                                    </p>
                                  </li>
                                </ul>
                                <p>
                                  Display up to 4 instance offers by service and in case have more,
                                  display arrows as pagination.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        <strong>Use case 5:</strong>{' '}
                      </p>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="f17b240d-9de5-4c6a-909d-5563a4747a8c"
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
                                  <strong>User search by location and Date</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>The user is already registered in Delray. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>The user searches for a specific Location. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>The user enters a date or date range</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>The backend will search by API to fetch:</p>
                                <ul>
                                  <li>
                                    <p>
                                      List of hotels according to the location and the date entered
                                      by the user.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      List of activities according to the location and the date
                                      entered by the user.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      List of cars according to the location and the date entered by
                                      the user.
                                    </p>
                                  </li>
                                </ul>
                                <p>
                                  Display up to 4 instance offers by service and in case have more,
                                  display arrows as pagination.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        <strong>Use case 6:</strong>{' '}
                      </p>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="cb08871d-978c-4a67-8a42-4faffc6949ce"
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
                                  <strong>User search for a flight</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>The user is already registered in Delray. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>The user clicks on the Flight Banner. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>The user is SSO on Xeni´s platform as a B2C user. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>The user is redirected to Xeni´s flight widget. </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>The user follows the Flight booking process. </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h3 id="BRD-Delrayintegration-2023-12-05-Context">Context</h3>
                      <p>
                        Adding Delray users DB allows Xeni to increase the volume of searches, and
                        sales.
                      </p>
                      <h3 id="BRD-Delrayintegration-2023-12-05-UserRequirement">
                        User Requirement
                      </h3>
                      <blockquote>
                        <p>
                          Pre-condition of the user, Business context for the feature, expected
                          result
                        </p>
                      </blockquote>
                      <p>
                        The DELRAY user must subscribe to the Delray website as a user and become a
                        trusted user for Xeni.{' '}
                      </p>
                      <hr />
                      <h2 id="BRD-Delrayintegration-2023-12-05-FunctionalGoals">
                        Functional Goals
                      </h2>
                      <blockquote>
                        <p>Description of the business impact</p>
                      </blockquote>
                      <ul>
                        <li>
                          <p>Sign-up users</p>
                          <ul>
                            <li>
                              <p>
                                Delray registered user is not required to verify his account. Only
                                complete the information requested.
                              </p>
                            </li>
                            <li>
                              <p>
                                Delray non-registered user, needs to sign up and verify his email
                                address to activate his account.{' '}
                              </p>
                            </li>
                            <li>
                              <p>
                                All the Delray registered users must have the status inactive until
                                they complete the information and create a password.{' '}
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    When the user clicks on the Sign Now button, the backend updates
                                    the info of the user in DB sets the user as active, and logs the
                                    user automatically to the Delray website.
                                  </p>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <p>All Delray´s non-registered users must complete the sign-up.</p>
                              <ul>
                                <li>
                                  <p>
                                    The backend will send an email to the registered inbox email
                                    with an activation link.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    When the user clicks on the link, the backend will update the
                                    user status in DB to Active
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    The user will be redirected to the Delray website and log in.
                                  </p>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <p>User can Reset password - Forgot password flow.</p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>
                            The default content display when a user visits the Delray website in Las
                            Vegas
                          </p>
                          <ul>
                            <li>
                              <p>The Offers do not display the prices</p>
                            </li>
                            <li>
                              <p>The user sees a button to reveal the price.</p>
                            </li>
                            <li>
                              <p>The button drives the user to the Login Page.</p>
                            </li>
                            <li>
                              <p>Users logged in can see prices and discounts.</p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>When a user selects the book option:</p>
                          <ul>
                            <li>
                              <p>
                                The user is automatically redirected to the booking page of Xeni
                              </p>
                            </li>
                            <li>
                              <p>The user is automatically SSO as a B2C user</p>
                            </li>
                            <li>
                              <p>
                                The user can complete the booking flow of each service as a normal
                                B2C user of Xeni
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>When the user searches for a flight:</p>
                          <ul>
                            <li>
                              <p>The user is SSO in Xeni as a B2C user</p>
                            </li>
                            <li>
                              <p>The user is redirected to the Flight Search page</p>
                            </li>
                            <li>
                              <p>The user completes the flow as a normal B2C user of Xeni.</p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <h3 id="BRD-Delrayintegration-2023-12-05-Measuresuccess">Measure success</h3>
                      <blockquote>
                        <p>
                          Any action that is useful to measure the success of the feature, Metrics
                          to track behavior, measure productivity, customer surveys, etc
                        </p>
                      </blockquote>
                      <ul>
                        <li>
                          <p>
                            # Registered Users in Delray complete their sign-up on the Delray
                            website.
                          </p>
                        </li>
                        <li>
                          <p>
                            # Non-registered users of Delray completed the Sign-up Delray website.
                          </p>
                        </li>
                        <li>
                          <p># Of searches vs the number of books from Delray users.</p>
                        </li>
                        <li>
                          <p># Top locations searched on the Delray website</p>
                        </li>
                        <li>
                          <p># of users from Delray redirect to Xeni Flights.</p>
                        </li>
                      </ul>
                      <p>
                        <strong>Monitors</strong>
                      </p>
                      <p>
                        % CPU Usage
                        <br />% Memory
                        <br />% Time frame of RCI API to reply
                        <br />% Avg Time to Complete a Transaction
                        <br />% Avg Success vs Errors from Delray integration.
                      </p>
                      <h2 id="BRD-Delrayintegration-2023-12-05-DefinitionofReadiness">
                        Definition of Readiness
                      </h2>
                      <blockquote>
                        <p>Describe the process to define the feature as ready for Production. </p>
                        <p>Success Use cases</p>
                        <p>Min. factible functionality to deliver</p>
                        <p>MVPs acceptable</p>
                      </blockquote>
                      <p>
                        <strong>MVP1:</strong>
                      </p>
                      <ul>
                        <li>
                          <p>Signup users</p>
                          <ul>
                            <li>
                              <p>Delray registered users</p>
                            </li>
                            <li>
                              <p>Delray non-registered users</p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>Cron to fetch hotel, activities, and car content</p>
                          <ul>
                            <li>
                              <p>Default Location: Las Vegas</p>
                            </li>
                            <li>
                              <p>Params:</p>
                              <ul>
                                <li>
                                  <p>Search by Location</p>
                                </li>
                                <li>
                                  <p>Search by StartDate - EndDate</p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>APIs to fetch the data from the Delray website. </p>
                        </li>
                        <li>
                          <p>SSO Delray users into the Booking pages for each type of service</p>
                          <ul>
                            <li>
                              <p>Hotel Booking</p>
                            </li>
                            <li>
                              <p>Car Booking</p>
                            </li>
                            <li>
                              <p>Activities Booking</p>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p>SSO Delray user as B2C Xeni user to Search flights.</p>
                        </li>
                      </ul>
                      <h2 id="BRD-Delrayintegration-2023-12-05-ImportantDocumentation">
                        Important Documentation
                      </h2>
                      <blockquote>
                        <p>Provider Guides, Design Sketches, Recordings, etc</p>
                      </blockquote>
                      <h2 id="BRD-Delrayintegration-2023-12-05-Recordings">Recordings</h2>
                      <p />
                      <p />
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
                <a href="attachments/592019457/592019465.docx">
                  XML 4.0 for Wholesalers V1.13.docx
                </a>{' '}
                (application/vnd.openxmlformats-officedocument.wordprocessingml.document)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/592019457/592019468.docx">
                  Resort Information Syndication Data Specification-v 2.2.docx
                </a>{' '}
                (application/vnd.openxmlformats-officedocument.wordprocessingml.document)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/592019457/592019471.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/592019457/592019474.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
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

export default BRDelrayIntegration
