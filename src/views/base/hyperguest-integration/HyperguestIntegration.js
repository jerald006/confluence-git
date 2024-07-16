import React from 'react'

function HyperguestIntegration() {
  return (
    <>
      <title>XeniApp : HyperGuest Integration</title>
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
              <span id="title-text">XeniApp : HyperGuest Integration</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified by{' '}
              <span className="editor"> Jean Philippe Creedon</span> on Jan 03, 2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206801298 {padding: 0px;}\ndiv.rbtoc1719206801298 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206801298 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206801298">
                <ul className="toc-indentation">
                  <li>
                    <a href="#HyperGuestIntegration-Objective">Objective</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#HyperGuestIntegration-Priority">Priority</a>
                      </li>
                      <li>
                        <a href="#HyperGuestIntegration-HyperGuestAPI">HyperGuest API</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#HyperGuestIntegration-APICredentials:">API Credentials:</a>
                          </li>
                          <li>
                            <a href="#HyperGuestIntegration-Security:">Security:</a>
                          </li>
                          <li>
                            <a href="#HyperGuestIntegration-Postmancollection">
                              Postman collection
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#HyperGuestIntegration-ProjectSummary">Project Summary</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="HyperGuestIntegration-Objective">Objective</h1>
              <p>Direct integration to fetch the hotel content from the hotel vendor. </p>
              <hr />
              <h2 id="HyperGuestIntegration-Priority">Priority</h2>
              <p>
                <span className="status-macro aui-lozenge aui-lozenge-current">MEDIUM</span>{' '}
              </p>
              <hr />
              <h2 id="HyperGuestIntegration-HyperGuestAPI">HyperGuest API</h2>
              <ul>
                <li>
                  <p>API Integration with HyperGuest</p>
                  <ul>
                    <li>
                      <p>
                        Documentation of Rapid API:{' '}
                        <a
                          className="external-link"
                          href="https://v2.api-docs.hyperguest.io/docs/getting-started"
                          rel="nofollow"
                        >
                          https://v2.api-docs.hyperguest.io/docs/getting-started
                        </a>
                      </p>
                      <ul>
                        <li>
                          <p>user: developer</p>
                        </li>
                        <li>
                          <p>PSW: HyperDocs</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 id="HyperGuestIntegration-APICredentials:">
                <strong>API Credentials:</strong>
              </h3>
              <div className="table-wrap">
                <table
                  data-table-width={1176}
                  data-layout="default"
                  data-local-id="089fbb79-096b-427d-a991-dbe5051ae377"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '171.0px' }} />
                    <col style={{ width: '381.0px' }} />
                    <col style={{ width: '624.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Key</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Value</strong>
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
                        <p>apiToken</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>c381e37d17a1447cad7b9d9bb39bc302</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Authorization Token</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>endPoint</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <a
                            className="external-link"
                            href="https://search-api.hyperguest.io/2.0/"
                            rel="nofollow"
                          >
                            https://search-api.hyperguest.io/2.0/
                          </a>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Search Availability</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>endPoint</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <a
                            className="external-link"
                            href="https://book-api.hyperguest.io/2.0/"
                            rel="nofollow"
                          >
                            https://book-api.hyperguest.io/2.0/
                          </a>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Create and manage bookings</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>endPoint</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <a
                            className="external-link"
                            href="https://hg-static.hyperguest.com/"
                            rel="nofollow"
                          >
                            https://hg-static.hyperguest.com/
                          </a>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Get HyperGuest Hotels list.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 id="HyperGuestIntegration-Security:">
                <strong>Security:</strong>
              </h3>
              <p>
                <code>Authorization: Bearer [token]</code>
              </p>
              <p>c381e37d17a1447cad7b9d9bb39bc302</p>
              <h3 id="HyperGuestIntegration-Postmancollection">Postman collection</h3>
              <hr />
              <h2 id="HyperGuestIntegration-ProjectSummary">Project Summary</h2>
              <div className="table-wrap">
                <table
                  data-table-width={1288}
                  data-layout="default"
                  data-local-id="c54dd706-11b1-4345-bda3-f72b7da97463"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '248.0px' }} />
                    <col style={{ width: '179.0px' }} />
                    <col style={{ width: '163.0px' }} />
                    <col style={{ width: '240.0px' }} />
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
                      <td rowSpan={6} className="confluenceTd">
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
                  <input type="hidden" name="treePageId" defaultValue={600309761} />
                  <input type="hidden" name="noRoot" defaultValue="false" />
                  <input type="hidden" name="rootPageId" defaultValue={600309761} />
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
                    <input type="hidden" name="ancestorId" defaultValue={600309761} />
                  </fieldset>
                </fieldset>
              </div>
              <p />
            </div>
            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>
              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600309761/600309771.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/600309761/600309774.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
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

export default HyperguestIntegration
