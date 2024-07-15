import React from 'react'

function BRDUserSessionControl() {
  return (
    <>
      <title>XeniApp : BRD - Users session Control</title>
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
                    <a href="Users-Session-Control_591298781.html">Users Session Control</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : BRD - Users session Control</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span> on Dec 04, 2023
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
                      <h2 id="BRD-UserssessionControl-Author">Author</h2>
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
                      <h3 id="BRD-UserssessionControl-DocumentversionChanges">
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
                            <col style={{ width: '51.0px' }} />
                            <col style={{ width: '66.0px' }} />
                            <col style={{ width: '120.0px' }} />
                            <col style={{ width: '253.0px' }} />
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
                                <p>2023-12-04</p>
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
                      <h1 id="BRD-UserssessionControl-Introduction">Introduction</h1>
                      <p>
                        Based on{' '}
                        <a
                          className="external-link"
                          data-card-appearance="inline"
                          href="https://xenisworkspace.slack.com/archives/C02T6F1G17T/p1701530330387469"
                          rel="nofollow"
                        >
                          https://xenisworkspace.slack.com/archives/C02T6F1G17T/p1701530330387469
                        </a>{' '}
                      </p>
                      <p>
                        We need to control the active/inactive users in the platform. <br />
                        One of the proposal is to enable 2FA but there are some other use cases to
                        do.{' '}
                      </p>
                      <p>
                        In the Travel industry, there are several different SSRs (Special Service
                        Requirements) to enter the Travel Docs:
                      </p>
                      <hr />
                      <h2 id="BRD-UserssessionControl-Purpose">Purpose</h2>
                      <p>
                        The intention is to keep the right users active based on their activity in
                        the platform, Inactive those users that not log-in into the platform for an
                        N period of time and generate a logic to reactivate their users.{' '}
                      </p>
                      <p>Clean the Users DB from those inactive users after N months.</p>
                      <h2 id="BRD-UserssessionControl-Scope">Scope</h2>
                      <p>
                        This feature will impact direct to the consumers of the application, Travel
                        agents as well as final consumers.{' '}
                      </p>
                      <ul>
                        <li>
                          <p>Active users: Users have activity in a daily based.</p>
                        </li>
                        <li>
                          <p>
                            Inactive users: Users haven´t log-in into the platform for a period of
                            time.
                          </p>
                        </li>
                        <li>
                          <p>
                            Inactive session: Active users that have an active session with no
                            activity for a period of time. (GDS examples).
                          </p>
                        </li>
                        <li>
                          <p>Clean rotation: Inactive Users for a period of months.</p>
                        </li>
                      </ul>
                      <hr />
                      <h2 id="BRD-UserssessionControl-FunctionalRequirement">
                        Functional Requirement
                      </h2>
                      <p>
                        <strong>Use case: </strong>
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
                                  <strong>Active user with an Inactive Session.</strong>
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
                                <p>User create a session associated to his Log-in.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>Session inactive for a period of minutes.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>Log off user and kill the session.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>
                                  Prompt a message to user to has been logged off for X minutes,
                                  Please login again!
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">6</td>
                              <td className="confluenceTd">
                                <p>User Log in again and create a new session.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">7</td>
                              <td className="confluenceTd">
                                <p>
                                  Travel Agent needs to enter more Passenger Travel Documentation
                                  information
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="3f87da24-840a-4000-b3ce-da53ee20780e"
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
                                  <strong>Set user as Inactive</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>User does not login in the App for a period of time</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>User has not session or activity associated in the platform</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>User Login is set as “Inactive”.</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>
                                  IF the user tries to Login , received a prompt to message to
                                  reactivate his user.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>
                                  Display Sign-Up form with user pre-populated information, except
                                  for Password.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">6</td>
                              <td className="confluenceTd">
                                <p>
                                  User creates a new password and send an email to reactivate the
                                  account and verify the email address.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">7</td>
                              <td className="confluenceTd">
                                <p>
                                  User clicks on the link and automatically set user status as
                                  “Active”.
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">8</td>
                              <td className="confluenceTd">
                                <p>
                                  The user is redirect to Xeni platform automatically Logged In.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-wrap">
                        <table
                          data-table-width={1190}
                          data-layout="default"
                          data-local-id="fd15eb91-71ba-4e1c-b95a-6f947d66e3a3"
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
                                  <strong>Hard delete of inactive users from Users table</strong>
                                </p>
                              </th>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">1</td>
                              <td className="confluenceTd">
                                <p>Inactive User for a Period of time</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">2</td>
                              <td className="confluenceTd">
                                <p>Cron job review the status of inactive users</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">3</td>
                              <td className="confluenceTd">
                                <p>Calculate the Inactive DateTime and Compare with current Date</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">4</td>
                              <td className="confluenceTd">
                                <p>If Inactive status is more than 6 Months, </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="numberingColumn confluenceTd">5</td>
                              <td className="confluenceTd">
                                <p>Delete the user from the platform. </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h3 id="BRD-UserssessionControl-Context">Context</h3>
                      <p />
                      <h3 id="BRD-UserssessionControl-ConstraintandRisk">Constraint and Risk</h3>
                      <p />
                      <h3 id="BRD-UserssessionControl-UserRequirement">User Requirement</h3>
                      <blockquote>
                        <p>
                          Pre condition of the user, Business context for the feature, expected
                          result
                        </p>
                      </blockquote>
                      <p>Any type of user.</p>
                      <hr />
                      <h2 id="BRD-UserssessionControl-FunctionalGoals">Functional Goals</h2>
                      <blockquote>
                        <p>Description of the business impact</p>
                      </blockquote>
                      <p />
                      <h3 id="BRD-UserssessionControl-Measuresuccess">Measure success</h3>
                      <blockquote>
                        <p>
                          Any action that be useful to measure the success of the feature, Metrics
                          to track behavior, measure productivity, customer surveys, etc
                        </p>
                      </blockquote>
                      <h2 id="BRD-UserssessionControl-DefinitionofReadiness">
                        Definition of Readiness
                      </h2>
                      <blockquote>
                        <p>Describe the process to define the feature as ready for Production. </p>
                        <p>Success Use cases</p>
                        <p>Min. factible functionality to deliver</p>
                        <p>MVPs acceptables</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
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

export default BRDUserSessionControl
