import React from 'react'

function FOIDInclusions() {
  return (
    <>
      <title>XeniApp : FOID inclusion</title>
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
                    <a href="Passenger-Additional-Information._585728037.html">
                      Passenger Additional Information.
                    </a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FOID inclusion</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Dec 27,
              2023
            </div>
            <div id="main-content" className="wiki-content group">
              <hr />
              <h1 id="FOIDinclusion-Objective">Objective</h1>
              <p>
                All the reservations created through the Xeni platform must include the FOID
                information to avoid issues at the time of ticketing.
              </p>
              <h2 id="FOIDinclusion-Context">Context</h2>
              <p>
                We are facing some issues at the time of ticketing a reservation due to FOID
                missing. There are many airlines, that claim to have the FORM OF IDENTIFICATION of
                the passenger in PNR, previous to ticketing. <br />
                This situation is common to happen on the GDSs reservations. Thomalex is not
                generating the FOID automatically, but after some conversation with their support
                team, they created in the testing environment the right commandBuilder to catch the
                data and create the SSR FOID for Amadeus and Sabre.{' '}
              </p>
              <hr />
              <h2 id="FOIDinclusion-ProjectSummary">Project Summary</h2>
              <h3 id="FOIDinclusion-MVP1">MVP1</h3>
              <div className="table-wrap">
                <table
                  data-table-width={1288}
                  data-layout="default"
                  data-local-id="c54dd706-11b1-4345-bda3-f72b7da97463"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '277.0px' }} />
                    <col style={{ width: '202.0px' }} />
                    <col style={{ width: '148.0px' }} />
                    <col style={{ width: '203.0px' }} />
                    <col style={{ width: '176.0px' }} />
                    <col style={{ width: '282.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Epic</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Tickets</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>ETL</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Risks</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Next Milestone</strong>
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
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue resolved"
                            data-jira-key="X3UI-5132"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5132"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/images/icons/issuetypes/epic.svg"
                              />
                              X3UI-5132
                            </a>
                            -<span className="summary">[Flights] - FOID Inclusion</span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-success jira-macro-single-issue-export-pdf">
                              Done
                            </span>
                          </span>
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
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue resolved"
                            data-jira-key="X3UI-5137"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5137"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5137
                            </a>
                            -
                            <span className="summary">
                              [Flights] - FOID Inclusion - Update the Passenger Detail Form
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-success jira-macro-single-issue-export-pdf">
                              Done
                            </span>
                          </span>
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
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue resolved"
                            data-jira-key="X3UI-5141"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5141"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5141
                            </a>
                            -
                            <span className="summary">
                              [Flights] - Foid Inclusion - Add a new separate section for Passenger
                              Additional Information
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-success jira-macro-single-issue-export-pdf">
                              Done
                            </span>
                          </span>
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
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue resolved"
                            data-jira-key="X3UI-5142"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5142"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5142
                            </a>
                            -
                            <span className="summary">
                              [Flights] - FOID inclusion - Send the passenger identification data to
                              Thomalex
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-success jira-macro-single-issue-export-pdf">
                              Done
                            </span>
                          </span>
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
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue resolved"
                            data-jira-key="X3UI-5145"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5145"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5145
                            </a>
                            -
                            <span className="summary">
                              [Flights] - Foid Inclusion - Send Passport Information
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-success jira-macro-single-issue-export-pdf">
                              Done
                            </span>
                          </span>
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
                      <td className="confluenceTd">
                        <p />
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
                  <input type="hidden" name="treePageId" defaultValue={593100817} />
                  <input type="hidden" name="noRoot" defaultValue="false" />
                  <input type="hidden" name="rootPageId" defaultValue={593100817} />
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
                    <input type="hidden" name="ancestorId" defaultValue={593100817} />
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

export default FOIDInclusions
