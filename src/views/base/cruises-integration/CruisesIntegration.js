import React from 'react'

function CruisesIntegration() {
  return (
    <>
  <title>XeniApp : Cruises Integration</title>
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
          <span id="title-text">XeniApp : Cruises Integration</span>
        </h1>
      </div>
      <div id="content" className="view">
        <div className="page-metadata">
          Created by <span className="author"> Gerardo Nizetich</span>, last
          modified on May 29, 2024
        </div>
        <div id="main-content" className="wiki-content group">
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "/*<![CDATA[*/\ndiv.rbtoc1719206698641 {padding: 0px;}\ndiv.rbtoc1719206698641 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206698641 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/"
            }}
          />
          <div className="toc-macro rbtoc1719206698641">
            <ul className="toc-indentation">
              <li>
                <a href="#CruisesIntegration-Objective">Objective</a>
                <ul className="toc-indentation">
                  <li>
                    <a href="#CruisesIntegration-APIDetails">API Details</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#CruisesIntegration-Authentication">
                          Authentication
                        </a>
                      </li>
                      <li>
                        <a href="#CruisesIntegration-Security">Security</a>
                      </li>
                      <li>
                        <a href="#CruisesIntegration-PostmanCollection&Documentation">
                          Postman Collection &amp; Documentation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#CruisesIntegration-ProjectSummary">
                      Project Summary
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#CruisesIntegration-Phase1:PoCtransactionFlow">
                          Phase 1: PoC transaction Flow
                        </a>
                      </li>
                      <li>
                        <a href="#CruisesIntegration-Phase2:StaticData">
                          Phase 2: Static Data
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr />
          <h1 id="CruisesIntegration-Objective">Objective</h1>
          <p>Cruise is a new line of business in the Xeni App. </p>
          <p>
            There´s one supplier that offers an API to integrate the content to
            let users search, book, and manage a reservation.
          </p>
          <hr />
          <h2 id="CruisesIntegration-APIDetails">API Details</h2>
          <p>
            <strong>Vendor</strong>: TravelTek
          </p>
          <p>
            <strong>Documentation: </strong>
            <a
              className="external-link"
              data-card-appearance="inline"
              href="https://app.swaggerhub.com/apis/Traveltek/API/2.1"
              rel="nofollow"
            >
              https://app.swaggerhub.com/apis/Traveltek/API/2.1
            </a>{" "}
          </p>
          <div className="table-wrap">
            <table
              data-table-width={1442}
              data-layout="default"
              data-local-id="38cccc85-e02f-4127-9506-bac40d711089"
              className="confluenceTable"
            >
              <colgroup>
                <col style={{ width: "222.0px" }} />
                <col style={{ width: "412.0px" }} />
                <col style={{ width: "805.0px" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th className="confluenceTh">
                    <p>
                      <strong>Environment</strong>
                    </p>
                  </th>
                  <th className="confluenceTh">
                    <p>
                      <strong>Item</strong>
                    </p>
                  </th>
                  <th className="confluenceTh">
                    <p>
                      <strong>Value</strong>
                    </p>
                  </th>
                </tr>
                <tr>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p>Production</p>
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>userName</p>
                  </td>
                  <td className="confluenceTd">
                    <p>xeni</p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>Password</p>
                  </td>
                  <td className="confluenceTd">
                    <p>xs81ds54</p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>siteName</p>
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <a
                        className="external-link"
                        href="http://xeni.site.traveltek.net/"
                        rel="nofollow"
                      >
                        xeni.site.traveltek.net
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>SID</p>
                  </td>
                  <td className="confluenceTd">
                    <p>49571</p>
                  </td>
                </tr>
                <tr>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p>Testing</p>
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>userName</p>
                  </td>
                  <td className="confluenceTd">
                    <p>xeni</p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>Password</p>
                  </td>
                  <td className="confluenceTd">
                    <p>xs81ds54</p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>siteName</p>
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <a
                        className="external-link"
                        href="http://xeni.site.traveltek.net/"
                        rel="nofollow"
                      >
                        xeni.site.traveltek.net
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>SID</p>
                  </td>
                  <td className="confluenceTd">
                    <p>49572</p>
                  </td>
                </tr>
                <tr>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p>FTP</p>
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>Username</p>
                  </td>
                  <td className="confluenceTd">
                    <p>xeni</p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>password</p>
                  </td>
                  <td className="confluenceTd">
                    <p>Y(t~m9V_^BER</p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>host</p>
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <a
                        className="external-link"
                        href="http://travelshopftp.traveltek.net/"
                        rel="nofollow"
                      >
                        travelshopftp.traveltek.net
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p>Web admin site</p>
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                  <td data-highlight-colour="#f4f5f7" className="confluenceTd">
                    <p />
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>URL</p>
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <a
                        className="external-link"
                        href="http://xeni.site.traveltek.net/extranet"
                        rel="nofollow"
                      >
                        xeni.site.traveltek.net/extranet
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>user</p>
                  </td>
                  <td className="confluenceTd">
                    <p>gerardo</p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>password</p>
                  </td>
                  <td className="confluenceTd">
                    <p>naty@1980</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>FTP Access</p>
          <div className="table-wrap">
            <table
              data-table-width={1420}
              data-layout="default"
              data-local-id="b0ef28d5-32db-4a0c-914e-db921e4ff667"
              className="confluenceTable"
            >
              <colgroup>
                <col style={{ width: "333.0px" }} />
                <col style={{ width: "1085.0px" }} />
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
                      <strong>Value</strong>
                    </p>
                  </th>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <strong> Host: </strong>
                    </p>
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <a
                        className="external-link"
                        href="http://travelshopftp.traveltek.net/"
                        rel="nofollow"
                      >
                        travelshopftp.traveltek.net
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <strong>FTP Username:</strong>
                    </p>
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <code>xeni</code>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <strong>FTP Password:</strong>
                    </p>
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <code>Y(t~m9V_^BER</code>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p />
          <h3 id="CruisesIntegration-Authentication">Authentication</h3>
          <p />
          <div id="expander-1585101077" className="expand-container">
            <div id="expander-control-1585101077" className="expand-control">
              <span className="expand-control-icon">
                <img
                  style={{ verticalAlign: "middle" }}
                  className="expand-control-image"
                  src="images/icons/grey_arrow_down.png"
                />
              </span>
              <span className="expand-control-text">Token Request</span>
            </div>
            <div id="expander-content-1585101077" className="expand-content">
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    curl --location
                    'https://fusionapi.traveltek.net/2.1/json/token.pl' \{"\n"}
                    --header 'Content-Type: application/x-www-form-urlencoded' \
                    {"\n"}--header 'Accept: application/json; charset=utf-8' \
                    {"\n"}--header 'Authorization: Basic eGVuaTp4czgxZHM1NA==' \
                    {"\n"}--data-urlencode 'scope=portal' \{"\n"}
                    --data-urlencode 'grant_type=client_credentials'
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <p />
          <div id="expander-575270946" className="expand-container">
            <div id="expander-control-575270946" className="expand-control">
              <span className="expand-control-icon">
                <img
                  style={{ verticalAlign: "middle" }}
                  className="expand-control-image"
                  src="images/icons/grey_arrow_down.png"
                />
              </span>
              <span className="expand-control-text">Token Response</span>
            </div>
            <div id="expander-content-575270946" className="expand-content">
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    {"{"}
                    "expires_in":"7200","token_type":"bearer","access_token":"a58febc7k3c69-4324-875b-0571fb45a51b"
                    {"}"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <p />
          <h3 id="CruisesIntegration-Security">Security</h3>
          <p>
            <code>Authorization: Bearer [token]</code>
          </p>
          <p />
          <h3 id="CruisesIntegration-PostmanCollection&Documentation">
            Postman Collection &amp; Documentation
          </h3>
          <p />
          <p className="media-group">
            <span className="confluence-embedded-file-wrapper">
              <a
                className="confluence-embedded-file"
                href="attachments/601980932/601882638.json"
                data-nice-type="null"
                data-file-src="/wiki/download/attachments/601980932/Fusion%20API.postman_collection.json?version=1&modificationDate=1704366539461&cacheVersion=1&api=v2"
                data-linked-resource-id={601882638}
                data-linked-resource-type="attachment"
                data-linked-resource-container-id={601980932}
                data-linked-resource-default-alias="Fusion API.postman_collection.json"
                data-mime-type="application/json"
                data-has-thumbnail="true"
                data-linked-resource-version={1}
                data-media-id="85705472-ae6a-4cb5-b7ce-6b1a1d89824c"
                data-media-type="file"
              >
                <img
                  src="attachments/thumbnails/601980932/601882638"
                  height={250}
                />
              </a>
            </span>
          </p>
          <p> </p>
          <p className="media-group">
            <span className="confluence-embedded-file-wrapper">
              <a
                className="confluence-embedded-file"
                href="attachments/601980932/602734649.txt"
                data-nice-type="Text File"
                data-file-src="/wiki/download/attachments/601980932/List%20of%20Regions.txt?version=1&modificationDate=1704722267531&cacheVersion=1&api=v2"
                data-linked-resource-id={602734649}
                data-linked-resource-type="attachment"
                data-linked-resource-container-id={601980932}
                data-linked-resource-default-alias="List of Regions.txt"
                data-mime-type="text/plain"
                data-has-thumbnail="true"
                data-linked-resource-version={1}
                data-media-id="eb420f7d-f8f7-453c-b24f-ff199eba30ba"
                data-media-type="file"
              >
                <img
                  src="attachments/thumbnails/601980932/602734649"
                  height={250}
                />
              </a>
            </span>
          </p>
          <p />
          <h2 id="CruisesIntegration-ProjectSummary">Project Summary</h2>
          <h3 id="CruisesIntegration-Phase1:PoCtransactionFlow">
            Phase 1: PoC transaction Flow
          </h3>
          <div className="table-wrap">
            <table
              data-table-width={1288}
              data-layout="default"
              data-local-id="c54dd706-11b1-4345-bda3-f72b7da97463"
              className="confluenceTable"
            >
              <colgroup>
                <col style={{ width: "248.0px" }} />
                <col style={{ width: "179.0px" }} />
                <col style={{ width: "163.0px" }} />
                <col style={{ width: "240.0px" }} />
                <col style={{ width: "176.0px" }} />
                <col style={{ width: "282.0px" }} />
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
                      <strong>ETL DEV</strong>
                    </p>
                  </th>
                  <th className="confluenceTh">
                    <p>
                      <strong>ETL QA</strong>
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
                  <td rowSpan={6} className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5559"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5559"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5559
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                  <td rowSpan={11} className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p />
                  </td>
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5631"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5631"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5631
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-4753"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-4753"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-4753
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5606"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5606"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5606
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5608"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5608"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5608
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5630"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5630"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5630
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5609"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5609"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5609
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5613"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5613"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5613
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5615"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5615"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5615
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-4779"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-4779"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-4779
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
                <tr>
                  <td className="confluenceTd">
                    <p />
                  </td>
                  <td className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-4780"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-4780"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-4780
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
                </tr>
              </tbody>
            </table>
          </div>
          <p />
          <h3 id="CruisesIntegration-Phase2:StaticData">
            Phase 2: Static Data
          </h3>
          <div className="table-wrap">
            <table
              data-table-width={1288}
              data-layout="default"
              data-local-id="dc8124ba-7e7a-4ffb-93dc-2982f73af74a"
              className="confluenceTable"
            >
              <colgroup>
                <col style={{ width: "248.0px" }} />
                <col style={{ width: "179.0px" }} />
                <col style={{ width: "163.0px" }} />
                <col style={{ width: "240.0px" }} />
                <col style={{ width: "176.0px" }} />
                <col style={{ width: "282.0px" }} />
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
                      <strong>ETL DEV</strong>
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
                  <td rowSpan={19} className="confluenceTd">
                    <p>
                      <span
                        className="confluence-jim-macro jira-issue"
                        data-jira-key="X3UI-5394"
                        data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_601980932_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                      >
                        <a
                          href="https://xeni-workspace.atlassian.net/browse/X3UI-5394"
                          className="jira-issue-key"
                        >
                          <span className="aui-icon aui-icon-wait issue-placeholder" />
                          X3UI-5394
                        </a>
                        -
                        <span className="summary">
                          Getting issue details...
                        </span>
                        <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                          STATUS
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
              <input type="hidden" name="treePageId" defaultValue={601980932} />
              <input type="hidden" name="noRoot" defaultValue="false" />
              <input type="hidden" name="rootPageId" defaultValue={601980932} />
              <input type="hidden" name="rootPage" defaultValue="" />
              <input type="hidden" name="startDepth" defaultValue={1} />
              <input type="hidden" name="spaceKey" defaultValue="XENIAPP" />
              <input
                type="hidden"
                name="i18n-pagetree.loading"
                defaultValue="Loading..."
              />
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
                <input
                  type="hidden"
                  name="ancestorId"
                  defaultValue={601980932}
                />
              </fieldset>
            </fieldset>
          </div>
          <p />
          <p></p>
        </div>
        <div className="pageSection group">
          <div className="pageSectionHeader">
            <h2 id="attachments" className="pageSectionTitle">
              Attachments:
            </h2>
          </div>
          <div className="greybox" align="left">
            <img
              src="images/icons/bullet_blue.gif"
              height={8}
              width={8}
              alt=""
            />
            <a href="attachments/601980932/601882638.json">
              Fusion API.postman_collection.json
            </a>{" "}
            (application/json)
            <br />
            <img
              src="images/icons/bullet_blue.gif"
              height={8}
              width={8}
              alt=""
            />
            <a href="attachments/601980932/602734649.txt">
              List of Regions.txt
            </a>{" "}
            (text/plain)
            <br />
          </div>
        </div>
      </div>{" "}
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

export default CruisesIntegration