import React from 'react'

function FRDRciIntegrationStaticData() {
  return (
    <>
      <title>XeniApp : FRD - RCI Integration - MVP1 - Static Data</title>
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
                    <a href="RCI---Integration_590348295.html">RCI - Integration</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FRD - RCI Integration - MVP1 - Static Data</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Feb 27,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206787894 {padding: 0px;}\ndiv.rbtoc1719206787894 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206787894 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206787894">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-RCIIntegration-MVP1-StaticData-Staticgeographicaldata:">
                      Static geographical data:
                    </a>
                  </li>
                  <li>
                    <a href="#FRD-RCIIntegration-MVP1-StaticData-ResortscontentCache">
                      Resorts content Cache
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-RCIIntegration-MVP1-StaticData-GetcontentFlow">
                          Get content Flow
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#FRD-RCIIntegration-MVP1-StaticData-Imagescontent">Images content</a>
                  </li>
                  <li>
                    <a href="#FRD-RCIIntegration-MVP1-StaticData-Design">Design</a>
                  </li>
                  <li>
                    <a href="#FRD-RCIIntegration-MVP1-StaticData-Documentation">Documentation</a>
                  </li>
                </ul>
              </div>
              <hr />
              <h2 id="FRD-RCIIntegration-MVP1-StaticData-Staticgeographicaldata:">
                Static geographical data:
              </h2>
              <ul>
                <li>
                  <p>Get from RCI the following:</p>
                  <ul>
                    <li>
                      <p>List of Countries where RCI has a presence</p>
                    </li>
                    <li>
                      <p>List of Regions per Country</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>To get this information they provide:</p>
              <p className="media-group">
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/591527937/591331337.xls"
                    data-nice-type="Microsoft Excel Spreadsheet"
                    data-file-src="/wiki/download/attachments/591527937/XML%20Prime%20Region%20Codes.xls?version=1&modificationDate=1701454139044&cacheVersion=1&api=v2"
                    data-linked-resource-id={591331337}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={591527937}
                    data-linked-resource-default-alias="XML Prime Region Codes.xls"
                    data-mime-type="application/vnd.ms-excel"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="6b7f853e-0069-40fc-a9c2-dda1733f6860"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/591527937/591331337" height={250} />
                  </a>
                </span>
              </p>
              <p className="media-group">
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/591527937/591298570.xls"
                    data-nice-type="Microsoft Excel Spreadsheet"
                    data-file-src="/wiki/download/attachments/591527937/XML%20Super%20Region%20Codes.xls?version=2&modificationDate=1701454154994&cacheVersion=1&api=v2"
                    data-linked-resource-id={591298570}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={591527937}
                    data-linked-resource-default-alias="XML Super Region Codes.xls"
                    data-mime-type="application/vnd.ms-excel"
                    data-has-thumbnail="true"
                    data-linked-resource-version={2}
                    data-media-id="8cdf2e19-75e1-400c-8be6-704b9a1b1648"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/591527937/591298570" height={250} />
                  </a>
                </span>
              </p>
              <p />
              <hr />
              <h2 id="FRD-RCIIntegration-MVP1-StaticData-ResortscontentCache">
                Resorts content Cache
              </h2>
              <p>
                RCI offers a list of super Regions with the objective to Cache the Resorts content.
                The best practices proposal from the vendor are:
              </p>
              <h3 id="FRD-RCIIntegration-MVP1-StaticData-GetcontentFlow">Get content Flow</h3>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="GetResortsContent.png"
                  width={714}
                  loading="lazy"
                  src="attachments/591527937/623968262.png?width=714"
                  data-image-src="attachments/591527937/623968262.png"
                  data-height={568}
                  data-width={714}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={623968262}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="GetResortsContent.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={591527937}
                  data-linked-resource-container-version={9}
                  data-media-id="49b24e44-d1d7-4171-80dd-51a6c12b36fe"
                  data-media-type="file"
                />
              </span>
              <p />
              <div id="expander-1133507032" className="expand-container">
                <div id="expander-control-1133507032" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    /searchAvailability - quickSearch - RQ x 10 Weeks
                  </span>
                </div>
                <div id="expander-content-1133507032" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --request POST
                        'https://testb2bb.rci.com/variableduration/gateway' \{'\n'}
                        --header 'Content-Type: application/xml' \{'\n'}--header 'Cookie:
                        AWSALB=yVGFVVLtqRGZHNSFbwcUx9F+leOPsDAP3BTgtYxDVsRWwGW8oI0biX4DI7hQxZornXH3HiAc4D4pOX5BBTo77ZIvIHc1M6qZkAp1Fqetuh94m/+Yh8Qe5p4BcPi8;
                        AWSALBCORS=yVGFVVLtqRGZHNSFbwcUx9F+leOPsDAP3BTgtYxDVsRWwGW8oI0biX4DI7hQxZornXH3HiAc4D4pOX5BBTo77ZIvIHc1M6qZkAp1Fqetuh94m/+Yh8Qe5p4BcPi8'
                        \{'\n'}--data '&lt;requestEnvelope&gt;{'\n'}
                        {'    '}&lt;requestHeader&gt;{'\n'}
                        {'        '}&lt;controlData&gt;{'\n'}
                        {'            '}
                        &lt;clientName&gt;XMLBusinessPartnerChannel&lt;/clientName&gt;
                        {'\n'}
                        {'            '}&lt;userID&gt;xmlweeksonly&lt;/userID&gt;
                        {'\n'}
                        {'            '}
                        &lt;password&gt;xmlweeksonly&lt;/password&gt;{'\n'}
                        {'        '}&lt;/controlData&gt;{'\n'}
                        {'        '}&lt;processData&gt;{'\n'}
                        {'            '}
                        &lt;operationName&gt;quickSearch&lt;/operationName&gt;{'\n'}
                        {'        '}&lt;/processData&gt;{'\n'}
                        {'    '}&lt;/requestHeader&gt;{'\n'}
                        {'    '}&lt;SearchRequest&gt;{'\n'}
                        {'        '}&lt;startDate&gt;05/01/2024&lt;/startDate&gt;
                        {'\n'}
                        {'        '}&lt;endDate&gt;06/01/2024&lt;/endDate&gt;{'\n'}
                        {'        '}&lt;lengthOfStay&gt;7&lt;/lengthOfStay&gt;{'\n'}
                        {'        '}&lt;minUnitSize&gt;H&lt;/minUnitSize&gt;{'\n'}
                        {'        '}&lt;regionCode&gt;RFL2&lt;/regionCode&gt;{'\n'}
                        {'        '}&lt;currency&gt;USD&lt;/currency&gt;{'\n'}
                        {'    '}&lt;/SearchRequest&gt;{'\n'}
                        &lt;/requestEnvelope&gt;'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1083701297" className="expand-container">
                <div id="expander-control-1083701297" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    /searchAvailability - quicksearch - RS
                  </span>
                </div>
                <div id="expander-content-1083701297" className="expand-content">
                  <p className="media-group">
                    <span className="confluence-embedded-file-wrapper">
                      <a
                        className="confluence-embedded-file"
                        href="attachments/591527937/623673375.txt"
                        data-nice-type="Text File"
                        data-file-src="/wiki/download/attachments/591527937/searchAvailabilityRS_10W.txt?version=1&modificationDate=1709039406625&cacheVersion=1&api=v2"
                        data-linked-resource-id={623673375}
                        data-linked-resource-type="attachment"
                        data-linked-resource-container-id={591527937}
                        data-linked-resource-default-alias="searchAvailabilityRS_10W.txt"
                        data-mime-type="text/plain"
                        data-has-thumbnail="true"
                        data-linked-resource-version={1}
                        data-media-id="6fe4cfc0-5c33-46da-ab01-61922c3d343a"
                        data-media-type="file"
                      >
                        <img src="attachments/thumbnails/591527937/623673375" height={250} />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <p>
                <strong>Requests logic:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    Each Super Region code will return the list of properties that offer availabilty
                  </p>
                </li>
                <li>
                  <p>
                    For each Super region will be 2 mainly request based on the{' '}
                    <code>minUnitSize</code> value (H-hotel; S-Studio)
                  </p>
                </li>
                <li>
                  <p>
                    For each type of properties request, it is required to get the complete list of
                    availability offer following:
                  </p>
                  <ul>
                    <li>
                      <p>(CurrentDate + 1) + 10 Weeks </p>
                    </li>
                    <li>
                      <p>From first call =&gt; (endDate + 1) + 10 weeks</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Fetch and store the following information:</p>
                  <ul>
                    <li>
                      <p>resortId</p>
                    </li>
                    <li>
                      <p>resortName</p>
                    </li>
                    <li>
                      <p>AvailabilityInfo</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Update Logic</p>
                  <ul>
                    <li>
                      <p>
                        It is required to complete the process to get the data and replace 2 times
                        per day (MVP)
                      </p>
                    </li>
                    <li>
                      <p>It is required:</p>
                      <ul>
                        <li>
                          <p>24 regions</p>
                        </li>
                        <li>
                          <p>
                            6 RQ per region to get the total inventory based on 10 weeks search each
                          </p>
                        </li>
                        <li>
                          <p>Total 144 request to complete the inventory list.</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p />
              <h2 id="FRD-RCIIntegration-MVP1-StaticData-Imagescontent">Images content</h2>
              <div className="confluence-information-macro confluence-information-macro-information">
                <span className="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>
                    The quality of the images offer by RCI are not the best. We need to implement a
                    plan b using expedia content but, we need as well to have this option for those
                    properties who don´t match with expedia.{' '}
                  </p>
                </div>
              </div>
              <p />
              <ul>
                <li>
                  <p>Generate a Cache logic to hold the RCI images content associated to:</p>
                  <ul>
                    <li>
                      <p>Region</p>
                    </li>
                    <li>
                      <p>Property ID</p>
                    </li>
                    <li>
                      <p>Image category</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Connect to RCI SFTP to get the list of images per a time frame to refresh the
                    cache.
                  </p>
                  <ul>
                    <li>
                      <p>User</p>
                    </li>
                    <li>
                      <p>Password</p>
                    </li>
                    <li>
                      <p>
                        IP Address: It is required to declare the IP address that will connect with
                        the SFTP.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <p />
              <hr />
              <h2 id="FRD-RCIIntegration-MVP1-StaticData-Design">Design</h2>
              <p />
              <p>
                <strong>Widget components:</strong>
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240214-125653.png"
                  width={896}
                  loading="lazy"
                  src="attachments/591527937/617676871.png?width=896"
                  data-image-src="attachments/591527937/617676871.png"
                  data-height={133}
                  data-width={896}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={617676871}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240214-125653.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={591527937}
                  data-linked-resource-container-version={9}
                  data-media-id="85ee2c6d-7c4b-48cd-8488-19f1f68d3f93"
                  data-media-type="file"
                />
              </span>
              <p>
                <strong>Select region</strong>
              </p>
              <p>
                <strong>Matching Data</strong>
              </p>
              <div className="table-wrap">
                <table
                  data-table-width={1442}
                  data-layout="default"
                  data-local-id="72305707-44fb-4385-8e38-a8c09e1ddd61"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '281.0px' }} />
                    <col style={{ width: '679.0px' }} />
                    <col style={{ width: '480.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Component</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Data Source</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Comment</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Regions List</p>
                      </td>
                      <td className="confluenceTd">
                        <p>File: XML - Primer regions</p>
                      </td>
                      <td className="confluenceTd">
                        <p>This is an static data obtain from RCI.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Regions selection</p>
                      </td>
                      <td className="confluenceTd">
                        <p>List the region name, return the region code. </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <p>
                <strong>Travel Month:</strong>
              </p>
              <p>RCI allows searching 330 day in advance. </p>
              <p>The default value is the current Month (CurrentDate), and display the next </p>
              <p />
              <p />
              <p />
              <p />
              <p />
              <p />
              <hr />
              <h2 id="FRD-RCIIntegration-MVP1-StaticData-Documentation">Documentation</h2>
              <p>(Draft) - Postman Collection (not complet yet)</p>
              <p>
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/591527937/594804767.json"
                    data-nice-type="null"
                    data-file-src="/wiki/download/attachments/591527937/RCI%20-%20XML%204.0.postman_collection.json?version=1&modificationDate=1702388496763&cacheVersion=1&api=v2"
                    data-linked-resource-id={594804767}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={591527937}
                    data-linked-resource-default-alias="RCI - XML 4.0.postman_collection.json"
                    data-mime-type="application/json"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="d05230ad-d40a-49f2-a8ad-7f8fbed3911b"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/591527937/594804767" height={250} />
                  </a>
                </span>{' '}
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
                <a href="attachments/591527937/591331343.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/591331337.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/591298570.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/591954144.png">image-20231205-123414.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/591954151.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/594804744.png">RCI_B2B_Flow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/594804767.json">
                  RCI - XML 4.0.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/617676871.png">image-20240214-125653.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/617676879.png">image-20240214-125759.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/623968262.png">GetResortsContent.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/591527937/623673375.txt">searchAvailabilityRS_10W.txt</a>{' '}
                (text/plain)
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

export default FRDRciIntegrationStaticData
