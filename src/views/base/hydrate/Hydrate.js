import React from 'react'

function Hydrate() {
  return (
    <>
      <title>XeniApp : What to Hydrate</title>
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
              <span id="title-text">XeniApp : What to Hydrate</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Apr 11,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206722342 {padding: 0px;}\ndiv.rbtoc1719206722342 ul {list-style: none;margin-left: 0px;}\ndiv.rbtoc1719206722342 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206722342">
                <ul className="toc-indentation">
                  <li>
                    <a href="#WhattoHydrate-CruiseFlowsections">Cruise Flow sections</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#WhattoHydrate-Widget">Widget</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#WhattoHydrate-SelectRegion:">Select Region:</a>
                          </li>
                          <li>
                            <a href="#WhattoHydrate-CruiseLine">Cruise Line</a>
                          </li>
                          <li>
                            <a href="#WhattoHydrate-PassengerTypes">Passenger Types</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#WhattoHydrate-CruiseDetailspage">Cruise Details page</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#WhattoHydrate-ItineraryTab">Itinerary Tab</a>
                          </li>
                          <li>
                            <a href="#WhattoHydrate-Amenities/FacilitiesTAB">
                              Amenities/Facilities TAB
                            </a>
                          </li>
                          <li>
                            <a href="#WhattoHydrate-Gallery">Gallery</a>
                          </li>
                          <li>
                            <a href="#WhattoHydrate-Rooms">Rooms</a>
                          </li>
                          <li>
                            <a href="#WhattoHydrate-DecksPlan">Decks Plan</a>
                          </li>
                          <li>
                            <a href="#WhattoHydrate-Categoryselected">Category selected</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <p />
              <h1 id="WhattoHydrate-CruiseFlowsections">Cruise Flow sections</h1>
              <h2 id="WhattoHydrate-Widget">Widget</h2>
              <p>
                <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-center"
                    alt="image-20240411-124833.png"
                    width={1085}
                    loading="lazy"
                    src="attachments/643432469/645103618.png?width=1085"
                    data-image-src="attachments/643432469/645103618.png"
                    data-height={116}
                    data-width={1280}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={645103618}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20240411-124833.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={643432469}
                    data-linked-resource-container-version={2}
                    data-media-id="27421c3c-7c5a-493c-a97c-4e8f3f5b879c"
                    data-media-type="file"
                  />
                </span>
              </p>
              <p />
              <h3 id="WhattoHydrate-SelectRegion:">Select Region:</h3>
              <p>The data comes from a flat file that we already implemented.</p>
              <div id="expander-772512917" className="expand-container">
                <div id="expander-control-772512917" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">/xeni/cruises/regions_draft_request</span>
                </div>
                <div id="expander-content-772512917" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1686074403" className="expand-container">
                <div id="expander-control-1686074403" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">/xeni/cruises/regions_draft_response</span>
                </div>
                <div id="expander-content-1686074403" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <h3 id="WhattoHydrate-CruiseLine">Cruise Line</h3>
              <p>
                In PoC we named this field as “Cruise Type” and should be rename as Cruise Line. The
                method from the vendor is an Static XML.
              </p>
              <div id="expander-982474516" className="expand-container">
                <div id="expander-control-982474516" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">/xeni/cruise/lines_draft_request</span>
                </div>
                <div id="expander-content-982474516" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-876270172" className="expand-container">
                <div id="expander-control-876270172" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">/xeni/cruise/lines_draft_response</span>
                </div>
                <div id="expander-content-876270172" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <h3 id="WhattoHydrate-PassengerTypes">Passenger Types</h3>
              <p>
                Based on the vendor’s explanation, every cruise line should have their own passenger
                type policy and in some occasions they have different passenger types based on a
                Sailing.{' '}
              </p>
              <p>
                We need to get this information at the time of sign an agreement with a cruise line
                and create a cruise line Profile to get the details of what is consider as{' '}
              </p>
              <p>ADULTS</p>
              <p>CHILDREN</p>
              <p>INFANT</p>
              <p>per cruise line and make it dynamically. </p>
              <p>
                The constraint here is what happen when the user makes a default search without
                selecting a cruise line.{' '}
              </p>
              <p />
              <h2 id="WhattoHydrate-CruiseDetailspage">Cruise Details page</h2>
              <p>
                <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-center"
                    alt="image-20240411-125031.png"
                    width={1085}
                    loading="lazy"
                    src="attachments/643432469/645169155.png?width=1085"
                    data-image-src="attachments/643432469/645169155.png"
                    data-height={583}
                    data-width={1327}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={645169155}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20240411-125031.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={643432469}
                    data-linked-resource-container-version={2}
                    data-media-id="f22ac7e4-072e-4374-bd13-724c8be0cf2f"
                    data-media-type="file"
                  />
                </span>
              </p>
              <p>
                The small pictures beside the Cruise Image, should be representative images of the
                interior of the ship.{' '}
              </p>
              <p />
              <h3 id="WhattoHydrate-ItineraryTab">Itinerary Tab</h3>
              <p>
                The itinerary tab of each ship is returned from <code>/cruisecabingrades.pl</code>,
                the sailing of a ship is not normally changed, so we can store in cache the
                itinerary associated to a ship after the first response.
              </p>
              <h3 id="WhattoHydrate-Amenities/FacilitiesTAB">Amenities/Facilities TAB</h3>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  alt="image-20240411-125149.png"
                  width={1085}
                  loading="lazy"
                  src="attachments/643432469/645201923.png?width=1085"
                  data-image-src="attachments/643432469/645201923.png"
                  data-height={581}
                  data-width={1323}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={645201923}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="image-20240411-125149.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={643432469}
                  data-linked-resource-container-version={2}
                  data-media-id="fa85834e-d13c-424b-8f56-25c507ad1175"
                  data-media-type="file"
                />
              </span>
              <p />
              <p />
              <div id="expander-111196086" className="expand-container">
                <div id="expander-control-111196086" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">/xeni/cruise/shipDetails</span>
                </div>
                <div id="expander-content-111196086" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-825947987" className="expand-container">
                <div id="expander-control-825947987" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    /xeni/cruise/shipDetails_draft_response
                  </span>
                </div>
                <div id="expander-content-825947987" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 id="WhattoHydrate-Gallery">Gallery</h3>
              <p>
                <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-center"
                    alt="image-20240411-125426.png"
                    width={1085}
                    loading="lazy"
                    src="attachments/643432469/645103632.png?width=1085"
                    data-image-src="attachments/643432469/645103632.png"
                    data-height={584}
                    data-width={1332}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={645103632}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20240411-125426.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={643432469}
                    data-linked-resource-container-version={2}
                    data-media-id="a4ecb291-34c4-42c7-807e-88956c49f46f"
                    data-media-type="file"
                  />
                </span>
              </p>
              <p />
              <p>
                We need to store and get the images by categories so we need to fetch the images by
                type of categories by caption.
              </p>
              <ul>
                <li>
                  <p>ship</p>
                </li>
                <li>
                  <p>Interior</p>
                </li>
                <li>
                  <p>Enterteinment</p>
                </li>
                <li>
                  <p>Bar</p>
                </li>
                <li>
                  <p>Lounge</p>
                </li>
                <li>
                  <p>Pools, etc</p>
                </li>
                <li>
                  <p>Technology</p>
                </li>
              </ul>
              <p>Cabin types representative images and short-description</p>
              <div id="expander-870973915" className="expand-container">
                <div id="expander-control-870973915" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">/xeni/cruise/shipdetails_response</span>
                </div>
                <div id="expander-content-870973915" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <h3 id="WhattoHydrate-Rooms">Rooms</h3>
              <p>
                <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-center"
                    alt="image-20240411-125507.png"
                    width={1085}
                    loading="lazy"
                    src="attachments/643432469/645234692.png?width=1085"
                    data-image-src="attachments/643432469/645234692.png"
                    data-height={594}
                    data-width={1331}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={645234692}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20240411-125507.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={643432469}
                    data-linked-resource-container-version={2}
                    data-media-id="d45f3b4c-4bf9-4e95-b681-704934d18559"
                    data-media-type="file"
                  />
                </span>
              </p>
              <p>Display different reference images by cabin type:</p>
              <p>Interior (inside)</p>
              <p>Ouside</p>
              <p>Balcony</p>
              <p>Suites</p>
              <h3 id="WhattoHydrate-DecksPlan">Decks Plan</h3>
              <p>
                <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-center"
                    alt="image-20240411-125632.png"
                    width={1085}
                    loading="lazy"
                    src="attachments/643432469/645169164.png?width=1085"
                    data-image-src="attachments/643432469/645169164.png"
                    data-height={588}
                    data-width={1337}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={645169164}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20240411-125632.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={643432469}
                    data-linked-resource-container-version={2}
                    data-media-id="fe6b9128-a6e4-4f2b-9f37-711860261e41"
                    data-media-type="file"
                  />
                </span>
              </p>
              <p>Display the map of each Deck on a ship. </p>
              <p />
              <h3 id="WhattoHydrate-Categoryselected">Category selected</h3>
              <p>
                <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                  <img
                    className="confluence-embedded-image image-center"
                    alt="image-20240411-125721.png"
                    width={1085}
                    loading="lazy"
                    src="attachments/643432469/645169170.png?width=1085"
                    data-image-src="attachments/643432469/645169170.png"
                    data-height={374}
                    data-width={1328}
                    data-unresolved-comment-count={0}
                    data-linked-resource-id={645169170}
                    data-linked-resource-version={1}
                    data-linked-resource-type="attachment"
                    data-linked-resource-default-alias="image-20240411-125721.png"
                    data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    data-linked-resource-content-type="image/png"
                    data-linked-resource-container-id={643432469}
                    data-linked-resource-container-version={2}
                    data-media-id="dd9592eb-90a0-4d1d-87f4-b79d3ef8a5cd"
                    data-media-type="file"
                  />
                </span>
              </p>
              <p>
                Display a reference image of the cabins offer by the category selected with the
                description
              </p>
            </div>
            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>
              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/643432469/645103618.png">image-20240411-124833.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/643432469/645169155.png">image-20240411-125031.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/643432469/645201923.png">image-20240411-125149.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/643432469/645103632.png">image-20240411-125426.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/643432469/645234692.png">image-20240411-125507.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/643432469/645169164.png">image-20240411-125632.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/643432469/645169170.png">image-20240411-125721.png</a>{' '}
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

export default Hydrate
