import React from 'react'

function ExpediaMeetingPhase() {
  return (
    <>
      <title>XeniApp : 2024-01-02 - Expedia Integration - Phase I - Meeting Notes</title>
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
                    <a href="Expedia-Integration_594935911.html">Expedia Integration</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a href="Expedia-Meeting-Notes_599719940.html">Expedia Meeting Notes</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">
                XeniApp : 2024-01-02 - Expedia Integration - Phase I - Meeting Notes
              </span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Jan 03,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <h2 id="id-2024-01-02-ExpediaIntegration-PhaseI-MeetingNotes-Date">Date</h2>
              <p>
                <time dateTime="2024-01-02" className="date-past">
                  02 Jan 2024
                </time>
              </p>
              <h2 id="id-2024-01-02-ExpediaIntegration-PhaseI-MeetingNotes-Participants">
                Participants
              </h2>
              <ul>
                <li>
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
                </li>
                <li>
                  <p>
                    <a
                      className="confluence-userlink user-mention"
                      data-account-id="63bc5b4a04b5f5c7b5ecee8b"
                      href="https://xeni-workspace.atlassian.net/wiki/people/63bc5b4a04b5f5c7b5ecee8b?ref=confluence"
                      target="_blank"
                      data-linked-resource-id={559972387}
                      data-linked-resource-version={1}
                      data-linked-resource-type="userinfo"
                      data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    >
                      Rajesh
                    </a>{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="confluence-userlink user-mention"
                      data-account-id="63bdf2af94d18cbf67729866"
                      href="https://xeni-workspace.atlassian.net/wiki/people/63bdf2af94d18cbf67729866?ref=confluence"
                      target="_blank"
                      data-linked-resource-id={549289985}
                      data-linked-resource-version={1}
                      data-linked-resource-type="userinfo"
                      data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    >
                      Jean Philippe Creedon
                    </a>{' '}
                    (Optional)
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="confluence-userlink user-mention"
                      data-account-id="5f97a08244658b007112ee94"
                      href="https://xeni-workspace.atlassian.net/wiki/people/5f97a08244658b007112ee94?ref=confluence"
                      target="_blank"
                      data-linked-resource-id={440762370}
                      data-linked-resource-version={1}
                      data-linked-resource-type="userinfo"
                      data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    >
                      Ayush Kumar
                    </a>{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="confluence-userlink user-mention"
                      data-account-id="712020:aaed7cb2-a8b5-484b-a6b6-86ebae4c89eb"
                      href="https://xeni-workspace.atlassian.net/wiki/people/712020:aaed7cb2-a8b5-484b-a6b6-86ebae4c89eb?ref=confluence"
                      target="_blank"
                      data-linked-resource-id={589660163}
                      data-linked-resource-version={1}
                      data-linked-resource-type="userinfo"
                      data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    >
                      Himanshu Rupavatiya
                    </a>{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      className="confluence-userlink user-mention"
                      data-account-id="63c199a8c52a63dcda83a701"
                      href="https://xeni-workspace.atlassian.net/wiki/people/63c199a8c52a63dcda83a701?ref=confluence"
                      target="_blank"
                      data-linked-resource-id={553091077}
                      data-linked-resource-version={1}
                      data-linked-resource-type="userinfo"
                      data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    >
                      Sarika
                    </a>{' '}
                  </p>
                </li>
              </ul>
              <h2 id="id-2024-01-02-ExpediaIntegration-PhaseI-MeetingNotes-Goals">Goals</h2>
              <ol start={1}>
                <li>
                  <p>
                    <strong>Analysis of Phase 1 Tickets</strong>
                  </p>
                  <ol start={1}>
                    <li>
                      <p>Refine the list of tickets</p>
                    </li>
                    <li>
                      <p>Refine the Scope of the project Phase 1 and what´s the next</p>
                    </li>
                  </ol>
                </li>
              </ol>
              <h2 id="id-2024-01-02-ExpediaIntegration-PhaseI-MeetingNotes-Discussiontopics">
                Discussion topics
              </h2>
              <div className="table-wrap">
                <table
                  data-table-width={1352}
                  data-layout="default"
                  data-local-id="c54dd706-11b1-4345-bda3-f72b7da97463"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '161.0px' }} />
                    <col style={{ width: '265.0px' }} />
                    <col style={{ width: '191.0px' }} />
                    <col style={{ width: '174.0px' }} />
                    <col style={{ width: '247.0px' }} />
                    <col style={{ width: '314.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Item</strong>
                        </p>
                      </th>
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
                          <strong>Status</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Risks identified</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={6} className="confluenceTd">
                        <p>1</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5135"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5135"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/images/icons/issuetypes/epic.svg"
                              />
                              X3UI-5135
                            </a>
                            -<span className="summary">Expedia direct Integration</span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-complete jira-macro-single-issue-export-pdf">
                              Backlog
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
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5163"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5163"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5163
                            </a>
                            -
                            <span className="summary">
                              [Expedia] - GetContent - Get the Expedia geo data.
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-complete jira-macro-single-issue-export-pdf">
                              TO DO
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
                        <p>Full content per Run and update the data bulk.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5166"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5166"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5166
                            </a>
                            -
                            <span className="summary">
                              [Expedia] - GetContent -Get the properties detail data.
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-complete jira-macro-single-issue-export-pdf">
                              TO DO
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
                        <p>Ok</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5168"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5168"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5168
                            </a>
                            -
                            <span className="summary">
                              [Expedia] - GetContent - Update Expedia Content ** REJECTED **
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-complete jira-macro-single-issue-export-pdf">
                              Backlog
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
                        <p>Not needed. Reject the US</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>S</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5173"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5173"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5173
                            </a>
                            -
                            <span className="summary">
                              [Expedia] - GetContent - Create an internal API to fetch the list of
                              Expedia Properties
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-complete jira-macro-single-issue-export-pdf">
                              TO DO
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
                        <p>api, we should maybe breakdown in small stories as well</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5190"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5190"
                              className="jira-issue-key"
                            >
                              <img
                                className="icon"
                                src="https://xeni-workspace.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium"
                              />
                              X3UI-5190
                            </a>
                            -
                            <span className="summary">
                              [Expedia] - SuperAdmin - Create a Toggle to enable Expedia as unique
                              provider
                            </span>
                            <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-complete jira-macro-single-issue-export-pdf">
                              TO DO
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
                        <p>Ok.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 id="id-2024-01-02-ExpediaIntegration-PhaseI-MeetingNotes-Actionitems">
                Action items
              </h2>
              <p />
              <h2 id="id-2024-01-02-ExpediaIntegration-PhaseI-MeetingNotes-Decisions">Decisions</h2>
              <p />
              <ul className="decision-list">
                <p />
                <h2 id="id-2024-01-02-ExpediaIntegration-PhaseI-MeetingNotes-Recording">
                  Recording
                </h2>
                <p>
                  <a
                    className="external-link"
                    data-card-appearance="inline"
                    href="https://us02web.zoom.us/rec/component-page?action=viewdetailpage&sharelevel=meeting&useWhichPasswd=meeting&clusterId=us02&componentName=need-password&meetingId=n79tN8MW8JWDyoOYr4m8tWXHcx17BglKAtk6VdMgy9-aSdPBGzn6FDmujZ4zngXE.RWFnO-ONGKW1h7q2&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FiqW2p_zh-F5FQIObnnGqqtDX3_zzexFWaXF1aWmLzymeiFjGAsGZrVH6nZfVvoqq.hPPjAOObhcgW_EPr%3Fiet%3Dn4PTKmGtxgbrGy8f9RapP4urSyXpUALZPB7DFYQibKo.AG.2bwBQWh5J7wyHCQXwJscnhBjBH6L_1m3XoYMuanJaSCUoyA_-fnMGRI81fhl0exF4BNTk6YXGjHRxpIQFTbt2KAvKtHO06QnDNjZCD5rJL6m2xREkfbBTg.TfCofc5eHewqFovb_l_pnQ.c3qWUe4KQuAvdsdC"
                    rel="nofollow"
                  >
                    https://us02web.zoom.us/rec/component-page?action=viewdetailpage&amp;sharelevel=meeting&amp;useWhichPasswd=meeting&amp;clusterId=us02&amp;componentName=need-password&amp;meetingId=n79tN8MW8JWDyoOYr4m8tWXHcx17BglKAtk6VdMgy9-aSdPBGzn6FDmujZ4zngXE.RWFnO-ONGKW1h7q2&amp;originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FiqW2p_zh-F5FQIObnnGqqtDX3_zzexFWaXF1aWmLzymeiFjGAsGZrVH6nZfVvoqq.hPPjAOObhcgW_EPr%3Fiet%3Dn4PTKmGtxgbrGy8f9RapP4urSyXpUALZPB7DFYQibKo.AG.2bwBQWh5J7wyHCQXwJscnhBjBH6L_1m3XoYMuanJaSCUoyA_-fnMGRI81fhl0exF4BNTk6YXGjHRxpIQFTbt2KAvKtHO06QnDNjZCD5rJL6m2xREkfbBTg.TfCofc5eHewqFovb_l_pnQ.c3qWUe4KQuAvdsdC
                  </a>{' '}
                </p>
                <p>
                  <strong>pass</strong>; E8Y=A6B7
                </p>
                <p></p>
              </ul>
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

export default ExpediaMeetingPhase
