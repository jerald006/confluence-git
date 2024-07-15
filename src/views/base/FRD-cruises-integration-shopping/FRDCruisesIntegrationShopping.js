import React from 'react'

function FRDCruisesIntegrationShopping() {
  return (
    <>
      <title>XeniApp : FRD - Cruise Integration - Shopping - MVP1</title>
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
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FRD - Cruise Integration - Shopping - MVP1</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Feb 02,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <h1 id="FRD-CruiseIntegration-Shopping-MVP1-Functionalobjective">
                Functional objective
              </h1>
              <p>
                You can get the cruise availability options based on parameters entered in the
                Search Widget.
              </p>
              <p />
              <h2 id="FRD-CruiseIntegration-Shopping-MVP1-Context">Context</h2>
              <p>
                Given the different search parameters offered in the cruise widget, it is required
                to resolve it and display the cruise available.
              </p>
              <p>Search Widget</p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="image-20240111-132409.png"
                  width={910}
                  loading="lazy"
                  src="attachments/603619329/603422760.png?width=910"
                  data-image-src="attachments/603619329/603422760.png"
                  data-height={210}
                  data-width={910}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={603422760}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240111-132409.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603619329}
                  data-linked-resource-container-version={4}
                  data-media-id="a86affc2-518b-4a90-81fc-880e4d640409"
                  data-media-type="file"
                />
              </span>
              <p />
              <h2 id="FRD-CruiseIntegration-Shopping-MVP1-ProposalSolution">Proposal Solution</h2>
              <ol start={1}>
                <li>
                  <p>Modify the designs accordingly to the business logic of the vendor</p>
                </li>
                <li>
                  <p>Get the search parameters and send the proper request to the vendor</p>
                </li>
                <li>
                  <p>Process the response</p>
                  <ol start={1}>
                    <li>
                      <p>Success: Display the priced option in UI</p>
                    </li>
                    <li>
                      <p>
                        Error: Display the error accordingly to drive the user to a success request.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
              <h2 id="FRD-CruiseIntegration-Shopping-MVP1-Proposalflow">Proposal flow</h2>
              <p>
                <strong>Step 1: Get availability</strong>
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="AvailabilityCruiseFlowDiagram.png"
                  width={781}
                  loading="lazy"
                  src="attachments/603619329/603422767.png?width=781"
                  data-image-src="attachments/603619329/603422767.png"
                  data-height={581}
                  data-width={781}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={603422767}
                  data-linked-resource-version={2}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="AvailabilityCruiseFlowDiagram.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={603619329}
                  data-linked-resource-container-version={4}
                  data-media-id="91712011-6036-4598-b659-e84188ae201d"
                  data-media-type="file"
                />
              </span>
              <p />
              <hr />
              <h2 id="FRD-CruiseIntegration-Shopping-MVP1-FunctionalRequirements">
                Functional Requirements
              </h2>
              <p>
                We need to split the requirements into different use cases based on the variability
                of the search parameters.{' '}
              </p>
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
                  <input type="hidden" name="treePageId" defaultValue={603619329} />
                  <input type="hidden" name="noRoot" defaultValue="false" />
                  <input type="hidden" name="rootPageId" defaultValue={603619329} />
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
                    <input type="hidden" name="ancestorId" defaultValue={603619329} />
                  </fieldset>
                </fieldset>
              </div>
              <p />
              <p />
              <p />
              <p />
              <hr />
              <h2 id="FRD-CruiseIntegration-Shopping-MVP1-Design">Design</h2>
              <p>
                <a
                  className="external-link"
                  data-card-appearance="inline"
                  href="https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=0-1&mode=design&t=hJzrte09wyPjzkeb-0"
                  rel="nofollow"
                >
                  https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&amp;node-id=0-1&amp;mode=design&amp;t=hJzrte09wyPjzkeb-0
                </a>{' '}
                Cruise
              </p>
              <p />
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
                <a href="attachments/603619329/603619338.png">image-20240111-125313.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619341.txt">List of Regions.txt</a> (text/plain)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619344.png">GetStaticDataFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619347.png">AvailabilityFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619350.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619353.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619356.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619359.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619362.png">image-20231205-123414.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619365.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619368.png">RCI_B2B_Flow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619371.json">
                  RCI - XML 4.0.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619374.drawio">
                  ExpediaProperyIDs_logic.drawio
                </a>{' '}
                (binary/octet-stream)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619377.png">ExpediaProperyIDs_logic.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603619380.png">
                  GeoExpediaLocationsProcess.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603422760.png">image-20240111-132409.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603717671.png">
                  AvailabilityCruiseFlowDiagram.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/603619329/603422767.png">
                  AvailabilityCruiseFlowDiagram.png
                </a>{' '}
                (image/png)
                <br />
              </div>
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

export default FRDCruisesIntegrationShopping
