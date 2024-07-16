import React from 'react'

function HyperguestIntegrationGetHotelList() {
  return (
    <>
      <title>XeniApp : FRD - HyperGuest Integration - Get Hotels List - property IDs - MVP1</title>
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
                <li>
                  <span>
                    <a href="HyperGuest-Integration_600309761.html">HyperGuest Integration</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">
                XeniApp : FRD - HyperGuest Integration - Get Hotels List - property IDs - MVP1
              </span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Dec 29,
              2023
            </div>
            <div id="main-content" className="wiki-content group">
              <h1 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-Functionalobjective">
                Functional objective
              </h1>
              <p>
                Get the list of property IDs from HyperGuest and store them in DB to resolve the
                availability search faster based on Locations.{' '}
              </p>
              <p />
              <h2 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-Context">Context</h2>
              <p>
                The availability method of HyperGuest requires a list of <code>HotelIds</code> to
                then, get the availability and price of each property. <br />
                Based on it, as the information data from HyperGuest is Static, it is required to{' '}
              </p>
              <ul>
                <li>
                  <p>Get the list of hotel content</p>
                </li>
                <li>
                  <p>Match location (Country/City) with Hotel Property IDs.</p>
                </li>
                <li>
                  <p>
                    Make the data available to Query based on location and get the list of Property
                    IDs.
                  </p>
                </li>
              </ul>
              <h2 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-ProposalSolution">
                Proposal Solution
              </h2>
              <ol start={1}>
                <li>
                  <p>Create a Cron to fetch the Hotel list </p>
                </li>
                <li>
                  <p>From response Payload get the country and City location. </p>
                </li>
                <li>
                  <p>Match the list of Properties to the combined country + City..</p>
                </li>
                <li>
                  <p>Generate an Update logic periodically to keep the content up to date. </p>
                </li>
              </ol>
              <h2 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-Proposalflow">
                Proposal flow
              </h2>
              <p>
                <strong>Step 1: Get Hotel list </strong>
              </p>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  alt="HyperGyest_HotelList.png"
                  width={1108}
                  loading="lazy"
                  src="attachments/600473601/600244260.png?width=1108"
                  data-image-src="attachments/600473601/600244260.png"
                  data-height={737}
                  data-width={1815}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={600244260}
                  data-linked-resource-version={2}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="HyperGyest_HotelList.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={600473601}
                  data-linked-resource-container-version={2}
                  data-media-id="4297abb8-4cbd-42ee-866f-b3b491db10bd"
                  data-media-type="file"
                />
              </span>
              <p />
              <hr />
              <h2 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-FunctionalRequirements">
                Functional Requirements
              </h2>
              <div className="table-wrap">
                <table
                  data-table-width={1290}
                  data-layout="default"
                  data-local-id="3b9f422a-bf6d-4bf1-850d-5f9c3a2244ed"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="numberingColumn confluenceTh" />
                      <th className="confluenceTh">
                        <p>
                          <strong>Action</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Endpoint</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Params</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">1</td>
                      <td className="confluenceTd">
                        <p>Create a Cron Job to Fetch the Hotels List</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>https://hg-static.hyperguest.com/hotels.json</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>header</code>: <code>Authorization: Bearer </code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>The response size is about 5.91MB</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>Identify the Country</p>
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
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>Identify the CityId </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>The data in on response payload</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>Store the HotelId and property description based on country+city</p>
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
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>Create an API to query the data of the storage: </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>city + countryCode</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          This API will be used to get the list of PropertyIds to orchestrate later
                          the search availability and prices. Reuse the same API created to fetch
                          the Expedia content.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <h2 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-Technicalrequirements">
                Technical requirements
              </h2>
              <p>
                <br />
              </p>
              <p />
              <div id="expander-2033155307" className="expand-container">
                <div id="expander-control-2033155307" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request example: GET:/hotels.json</span>
                </div>
                <div id="expander-content-2033155307" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location 'https://hg-static.hyperguest.com/hotels.json' \{'\n'}
                        --header 'Authorization: Bearer c381e37d17a1447cad7b9d9bb39bc302'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-191787216" className="expand-container">
                <div id="expander-control-191787216" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response example: hotels.json</span>
                </div>
                <div id="expander-content-191787216" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        "Retuns 5.91MB"{'\n'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p className="media-group">
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/600473601/600211526.json"
                    data-nice-type="null"
                    data-file-src="/wiki/download/attachments/600473601/HotelListResponse.json?version=1&modificationDate=1703869664611&cacheVersion=1&api=v2"
                    data-linked-resource-id={600211526}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={600473601}
                    data-linked-resource-default-alias="HotelListResponse.json"
                    data-mime-type="application/json"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="0c80aab4-80d7-43c3-af4b-62887940a109"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/600473601/600211526" height={250} />
                  </a>
                </span>
              </p>
              <hr />
              <h2 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-Design">Design</h2>
              <p />
              <p />
              <p />
              <p />
              <hr />
              <h2 id="FRD-HyperGuestIntegration-GetHotelsList-propertyIDs-MVP1-Documentation">
                Documentation
              </h2>
              <p>
                <br />
              </p>
              <p style={{ marginLeft: '60.0px' }} />
            </div>
            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>
              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473609.png">
                  GeoExpediaLocationsProcess.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473612.png">ExpediaProperyIDs_logic.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473615.drawio">
                  ExpediaProperyIDs_logic.drawio
                </a>{' '}
                (binary/octet-stream)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473618.json">
                  RCI - XML 4.0.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473621.png">RCI_B2B_Flow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473624.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473627.png">image-20231205-123414.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473630.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473633.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473636.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473639.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600473642.png">AvailabilityFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600211496.png">HyperGyest_HotelList.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600244260.png">HyperGyest_HotelList.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600473601/600211526.json">HotelListResponse.json</a>{' '}
                (application/json)
                <br />
              </div>
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

export default HyperguestIntegrationGetHotelList
