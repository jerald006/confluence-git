import React from 'react'

function CruisesMeetingNotes() {
  return (
    <>
      <title>XeniApp : 2024-04-08 - Cruise Static Data - What we need? - Meeting Notes</title>
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
                <li>
                  <span>
                    <a href="FRD---Cruise-Integration---Get-content---Static-data-to-cache---MVP1_602341378.html">
                      FRD - Cruise Integration - Get content - Static data to cache - MVP1
                    </a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">
                XeniApp : 2024-04-08 - Cruise Static Data - What we need? - Meeting Notes
              </span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Apr 08,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <h1 id="id-2024-04-08-CruiseStaticData-Whatweneed?-MeetingNotes-Team">Team</h1>
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
              </p>
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
              <h2 id="id-2024-04-08-CruiseStaticData-Whatweneed?-MeetingNotes-TOPICS">TOPICS</h2>
              <ol start={1}>
                <li>
                  <p>
                    Get the Ship content to display the right images and Information (
                    <code>/cruiseshipdetails.pl</code>).
                  </p>
                </li>
                <li>
                  <p>Create a Cruise Line Profile?</p>
                  <ol start={1}>
                    <li>
                      <p>Define the Type of passenger by Sailing (When Adults, Children, Infant)</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>Create an API to get the static Data based on each ShipID.</p>
                </li>
                <li>
                  <p>Cache Rotation policy?.</p>
                </li>
                <li>
                  <p>
                    Have a source to get the representative images of ports on an itinerary (Vendors
                    do not support).
                  </p>
                </li>
                <li>
                  <p>
                    Create the Map of the itinerary based on the coordinates received. (This has to
                    be stored for each ship/sailing) (Google API to draw the map).
                  </p>
                </li>
              </ol>
              <p />
              <h1 id="id-2024-04-08-CruiseStaticData-Whatweneed?-MeetingNotes-Constrains">
                Constrains
              </h1>
              <ul>
                <li>
                  <p>How to use the Cruise line profile if the users make a default search?</p>
                </li>
                <li>
                  <p>How to adjust the ages at the time the user selected an offer</p>
                </li>
              </ul>
              <p />
              <h1 id="id-2024-04-08-CruiseStaticData-Whatweneed?-MeetingNotes-Discussion">
                Discussion
              </h1>
              <div className="table-wrap">
                <table
                  data-table-width={984}
                  data-layout="default"
                  data-local-id="7066d983-0a4c-411b-9208-c05e7f6d36de"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '131.0px' }} />
                    <col style={{ width: '853.0px' }} />
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
                          <strong>Notes</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
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
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h1 id="id-2024-04-08-CruiseStaticData-Whatweneed?-MeetingNotes-Actionplan">
                Action plan
              </h1>
              <ul className="inline-task-list" data-inline-tasks-content-id={643301379}>
                <li data-inline-task-id={1}>
                  <span className="placeholder-inline-tasks">
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
                    : Create a Draft map of what APIs we will need to hydrate what section in
                    Cruises
                  </span>
                </li>
                <li data-inline-task-id={3}>
                  <span className="placeholder-inline-tasks">
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
                    &amp;{' '}
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
                    Will coordinate twice a week at 09:00 EDT Time for 15mins to define the best
                    solution for each piece of functionality
                  </span>
                </li>
                <li data-inline-task-id={4}>
                  <span className="placeholder-inline-tasks">
                    We need to find out the best source for the Hero images of ports per cruise
                    itinerary and store them.{' '}
                  </span>
                </li>
              </ul>
              <h1 id="id-2024-04-08-CruiseStaticData-Whatweneed?-MeetingNotes-Definitions">
                <br />
                <br />
                Definitions
              </h1>
              <ul className="inline-task-list" data-inline-tasks-content-id={643301379}>
                <li data-inline-task-id={2}>
                  <span>&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>{' '}
        </div>
        <div id="footer" role="contentinfo">
          <section className="footer-body">
            <p>Document generated by Confluence on Jun 24, 2024 05:25</p>
            <div id="footer-logo">
              <a href="http://www.atlassian.com/">Atlassian</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default CruisesMeetingNotes
