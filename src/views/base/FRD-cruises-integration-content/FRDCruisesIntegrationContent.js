import React from 'react'

function FRDCruisesIntegrationContent() {
  return (
    <>
      <title>XeniApp : FRD - Cruise Integration - Get content - Static data to cache - MVP1</title>
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
              <span id="title-text">
                XeniApp : FRD - Cruise Integration - Get content - Static data to cache - MVP1
              </span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Apr 12,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <h1 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Functionalobjective">
                Functional objective
              </h1>
              <p>
                Get the data from TravelTek to pre-set the search widget options and the data to use
                in the availability search to offer.
              </p>
              <p />
              <h2 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Context">Context</h2>
              <p>
                Based on the idea to create a new business line in the XENI App to offer cruise
                content to the consumer, it is required to get the base data to pre-set the widget
                with the following data:
              </p>
              <ul>
                <li>
                  <p>Location to search</p>
                </li>
                <li>
                  <p>Preferred Line (Optional)</p>
                </li>
                <li>
                  <p>Ship static data.</p>
                </li>
              </ul>
              <h2 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-ProposalSolution">
                Proposal Solution
              </h2>
              <ol start={1}>
                <li>
                  <p>Cache the list of regions (Name, Id) (Attached)</p>
                </li>
                <li>
                  <p>Get the list of Cruise lines and cache</p>
                </li>
                <li>
                  <p>Create an update logic for Static data of each ship of a cruise Line.</p>
                </li>
                <li>
                  <p>Create the Super Admin controls:</p>
                  <ol start={1}>
                    <li>
                      <p>General Markup for Cruise product.</p>
                    </li>
                    <li>
                      <p>Toggle to enable cruise product to agencies</p>
                    </li>
                    <li>
                      <p>Enable Command Center for Agency Owners</p>
                    </li>
                    <li>
                      <p>Create the Markup for Agencies</p>
                    </li>
                  </ol>
                </li>
              </ol>
              <h2 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Proposalflow">
                Proposal flow
              </h2>
              <p>
                <strong>Step 1: Get Static Data</strong>
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  alt="GetStaticDataFlow.png"
                  width={801}
                  loading="lazy"
                  src="attachments/602341378/602734692.png?width=801"
                  data-image-src="attachments/602341378/602734692.png"
                  data-height={419}
                  data-width={801}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={602734692}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="GetStaticDataFlow.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={602341378}
                  data-linked-resource-container-version={6}
                  data-media-id="b4c9002e-224a-487f-8bb5-1221f75f4ecd"
                  data-media-type="file"
                />
              </span>
              <p />
              <hr />
              <h2 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-FunctionalRequirements">
                Functional Requirements
              </h2>
              <h3 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-GetstaticData">
                Get static Data
              </h3>
              <p />
              <div className="table-wrap">
                <table
                  data-table-width={1290}
                  data-layout="default"
                  data-local-id="4b3bd7b2-f4a5-45a6-af7f-3b2b564633c1"
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
                        <p>Store the Cruise regions code</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Document sent it by Vendor</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>Get the list of Cruise lines</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <a
                            className="external-link"
                            href="https://fusionapi.traveltek.net/0.9/interface.pl"
                            rel="nofollow"
                          >
                            <span className="legacy-color-text-inverse">
                              https://fusionapi.traveltek.net/0.9/interface.pl
                            </span>
                          </a>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <div className="code panel pdl" style={{ borderWidth: 1 }}>
                          <div className="codeContent panelContent pdl">
                            <pre
                              className="syntaxhighlighter-pre"
                              data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                              data-theme="Confluence"
                            >
                              curl --location 'https://fusionapi.traveltek.net/0.9/interface.pl' \
                              {'\n'}--header 'Content-Type: application/x-www-form-urlencoded' \
                              {'\n'}
                              --data-urlencode 'xml=&lt;?xml
                              version="1.0"?&gt;&lt;request&gt;&lt;auth username="xeni"
                              password="xs81ds54" /&gt;&lt;method action="getcruiselines"
                              sitename="xeni.site.traveltek.net" /&gt;&lt;/request&gt;'
                            </pre>
                          </div>
                        </div>
                      </td>
                      <td className="confluenceTd">
                        <p>XML Content</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>Cache the list of cruise lines </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Store the info to expose in the proper UI component</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>Get the list of Ships</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Each cruiseLine ID.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>Get the ShipDetails</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>https://fusionapi.traveltek.net/2.1/json/cruiseshipdetails.pl</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <code>
                            requestid=&gt;{'{'}
                            {'{'}sessionId{'}'}
                            {'}'}
                          </code>
                        </p>
                        <p>
                          <code>language=&gt; Default "en"</code>
                        </p>
                        <p>
                          <code>shipid=ship list from cruiseLine.</code>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">6</td>
                      <td className="confluenceTd">
                        <p>Update cache logic</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Generate the logic to search the list of cruise providers enable for Xeni
                          every N time.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">7</td>
                      <td className="confluenceTd">
                        <p>Create XENI API Endpoints</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>To fetch the static data to hydrate UI.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>XENI APP</strong> (Administration)
              </p>
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
                          <strong>Section</strong>
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
                      <td data-highlight-colour="#b3d4ff" className="confluenceTd">
                        <p>
                          <strong>Super Admin User</strong>
                        </p>
                      </td>
                      <td data-highlight-colour="#b3d4ff" className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>Create the Cruise section in the Dashboard</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Only Super Admin can access this section for setup the cruise product.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>Create the activity Report</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          In the same way of the other services, it is required to create an
                          activity report by agency and dd details of the transaction
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>Markup Cruise product</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Super Admin can set a Markup by percentage or flat amount for each cruise
                          transaction
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>Create a toggle to enable the Cruise product by Tenant.</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The super admin is the responsible to allow the consumer tenant to display
                          the Cruise Tab.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <hr />
              <h2 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Technicalrequirements">
                Technical requirements
              </h2>
              <div className="table-wrap">
                <table
                  data-table-width={1290}
                  data-layout="default"
                  data-local-id="fcc4ad91-7075-4a8e-8631-d79f0652ec46"
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
                          <strong>Description</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">1</td>
                      <td className="confluenceTd">
                        <p>SuperAdmin - Generate a Toggle to enable Cruise section in Xeni APP</p>
                      </td>
                      <td className="confluenceTd">
                        <ul>
                          <li>
                            <p>Enable for Agencies the Cruise Tab in the Front End</p>
                          </li>
                          <li>
                            <p>
                              Enable for Agencies Dashboard the Cruise Section (Agency Owners and
                              Administrators)
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>Agency Owner/ Agency administrator</p>
                      </td>
                      <td className="confluenceTd">
                        <ul>
                          <li>
                            <p>
                              Generate in the command center the section for these type of users to
                              see
                            </p>
                          </li>
                          <li>
                            <p>Add the activity report: (Like the other services)</p>
                            <ul>
                              <li>
                                <p>bookings</p>
                              </li>
                              <li>
                                <p>Status</p>
                              </li>
                              <li>
                                <p>Details</p>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <p>Markup:</p>
                            <ul>
                              <li>
                                <p>Allow agency to set a Markup for cruise service</p>
                                <ul>
                                  <li>
                                    <p>
                                      Percentage: Will use the base amount of the retail price + %
                                      of markup
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Flat amount: Will add a flat amount to the top of the retail
                                      price with the agency description
                                    </p>
                                  </li>
                                  <li>
                                    <p>Applicable: By passenger or by Booking.</p>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <br />
              </p>
              <div id="expander-608004864" className="expand-container">
                <div id="expander-control-608004864" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request Example: Cruise lines - </span>
                </div>
                <div id="expander-content-608004864" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location 'https://fusionapi.traveltek.net/0.9/interface.pl' \{'\n'}
                        --header 'Content-Type: application/x-www-form-urlencoded' \{'\n'}
                        --data-urlencode 'xml=&lt;?xml version="1.0"?&gt;&lt;request&gt;&lt;auth
                        username="xeni" password="xs81ds54" /&gt;&lt;method action="getcruiselines"
                        sitename="xeni.site.traveltek.net" /&gt;&lt;/request&gt;'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-821956590" className="expand-container">
                <div id="expander-control-821956590" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    Response example: Cruise lines enabled for XENI
                  </span>
                </div>
                <div id="expander-content-821956590" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        &lt;?xml version="1.0"?&gt;{'\n'}&lt;response method="getcruiselines"
                        success="Y"&gt;{'\n'}
                        {'    '}&lt;errors&gt;{'\n'}
                        {'  '}&lt;/errors&gt;{'\n'}
                        {'    '}&lt;request&gt;{'\n'}
                        {'        '}&lt;auth password="xs81ds54" username="xeni" /&gt;{'\n'}
                        {'        '}&lt;method action="getcruiselines"
                        sitename="xeni.site.traveltek.net" /&gt;{'\n'}
                        {'    '}&lt;/request&gt;{'\n'}
                        {'    '}&lt;results&gt;{'\n'}
                        {'        '}&lt;line id="427"
                        logourl="https://static.traveltek.net/cruisepics/logos/arosalogo1_resized.png"
                        name="A-ROSA"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/arosalogo1_resized.png"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="5528" name="A-ROSA ALEA" /&gt;{'\n'}
                        {'                '}&lt;ship id="5391" name="A-ROSA ALVA" /&gt;{'\n'}
                        {'                '}&lt;ship id="2846" name="A-ROSA AQUA" /&gt;{'\n'}
                        {'                '}&lt;ship id="5532" name="A-ROSA CLEA" /&gt;{'\n'}
                        {'                '}&lt;ship id="2851" name="A-ROSA DONNA" /&gt;{'\n'}
                        {'                '}&lt;ship id="2856" name="A-ROSA FLORA" /&gt;{'\n'}
                        {'                '}&lt;ship id="4841" name="A-ROSA SENA" /&gt;{'\n'}
                        {'                '}&lt;ship id="2849" name="A-ROSA SILVA" /&gt;{'\n'}
                        {'                '}&lt;ship id="2855" name="A-ROSA STELLA" /&gt;{'\n'}
                        {'                '}&lt;ship id="2847" name="A-ROSA VIVA" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="63"
                        logourl="https://static.traveltek.net/cruisepics/logos/amawaterways.gif"
                        name="AmaWaterways"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/amawaterways.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="1910" name="AmaBella" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="408" name="AmaCello" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="1058" name="AmaCerto" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="5733" name="AmaDahlia" /&gt;{'\n'}
                        {'                '}&lt;ship id="407" name="AmaDante" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3016" name="AmaDara" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="454" name="AmaDolce" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="4710" name="AmaDouro" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3889" name="AmaKristina" /&gt;{'\n'}
                        {'                '}&lt;ship id="4379" name="AmaLea" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6515" name="AmaLilia" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="5459" name="AmaLucia" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="455" name="AmaLyra" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6548" name="AmaMagdalena" /&gt;{'\n'}
                        {'                '}&lt;ship id="4793" name="AmaMagna" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6549" name="AmaMelodia" /&gt;{'\n'}
                        {'                '}&lt;ship id="4709" name="AmaMora" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="1907" name="AmaPrima" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="2302" name="AmaReina" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="2679" name="AmaSerena" /&gt;{'\n'}
                        {'                '}&lt;ship id="5213" name="AmaSiena" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6670" name="AmaSintra" /&gt;{'\n'}
                        {'                '}&lt;ship id="2282" name="AmaSonata" /&gt;{'\n'}
                        {'                '}&lt;ship id="3536" name="AmaStella" /&gt;{'\n'}
                        {'                '}&lt;ship id="4798" name="AmaVenita" /&gt;{'\n'}
                        {'                '}&lt;ship id="1906" name="AmaVerde" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="1908" name="AmaVida" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3531" name="AmaViola" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="1909" name="Zambezi Queen" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="848"
                        logourl="https://static.traveltek.net/cruisepics/logos/Ambassador1_resized.gif"
                        name="Ambassador Cruise Line"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/Ambassador1_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="6434" name="Ambience" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6454" name="Ambition" /&gt;
                        {'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="66"
                        logourl="https://static.traveltek.net/cruisepics/logos/azamara.gif"
                        name="Azamara"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/azamara.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="414" name="Azamara Journey" /&gt;{'\n'}
                        {'                '}&lt;ship id="6399" name="Azamara Onward" /&gt;{'\n'}
                        {'                '}&lt;ship id="4678" name="Azamara Pursuit" /&gt;{'\n'}
                        {'                '}&lt;ship id="415" name="Azamara Quest" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="121"
                        logourl="https://static.traveltek.net/cruisepics/logos/bluelagooncruises.gif"
                        name="Blue Lagoon Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/bluelagooncruises.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="779" name="MV Fiji Princess" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="8"
                        logourl="https://static.traveltek.net/cruisepics/logos/carnival.gif"
                        name="Carnival Cruise Line"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/carnival.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="1196" name="Carnival Breeze" /&gt;{'\n'}
                        {'                '}&lt;ship id="6076" name="Carnival Celebration" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="34" name="Carnival Conquest" /&gt;{'\n'}
                        {'                '}&lt;ship id="466" name="Carnival Dream" /&gt;{'\n'}
                        {'                '}&lt;ship id="31" name="Carnival Elation" /&gt;{'\n'}
                        {'                '}&lt;ship id="6551" name="Carnival Firenze" /&gt;{'\n'}
                        {'                '}&lt;ship id="364" name="Carnival Freedom" /&gt;{'\n'}
                        {'                '}&lt;ship id="39" name="Carnival Glory" /&gt;{'\n'}
                        {'                '}&lt;ship id="4437" name="Carnival Horizon" /&gt;{'\n'}
                        {'                '}&lt;ship id="6450" name="Carnival Jubilee" /&gt;{'\n'}
                        {'                '}&lt;ship id="28" name="Carnival Legend" /&gt;{'\n'}
                        {'                '}&lt;ship id="246" name="Carnival Liberty" /&gt;{'\n'}
                        {'                '}&lt;ship id="6466" name="Carnival Luminosa" /&gt;{'\n'}
                        {'                '}&lt;ship id="556" name="Carnival Magic" /&gt;{'\n'}
                        {'                '}&lt;ship id="27" name="Carnival Miracle" /&gt;{'\n'}
                        {'                '}&lt;ship id="4778" name="Carnival Panorama" /&gt;{'\n'}
                        {'                '}&lt;ship id="21" name="Carnival Paradise" /&gt;{'\n'}
                        {'                '}&lt;ship id="26" name="Carnival Pride" /&gt;{'\n'}
                        {'                '}&lt;ship id="4962" name="Carnival Radiance" /&gt;{'\n'}
                        {'                '}&lt;ship id="4982" name="Carnival Spirit" /&gt;{'\n'}
                        {'                '}&lt;ship id="409" name="Carnival Splendor" /&gt;{'\n'}
                        {'                '}&lt;ship id="4887" name="Carnival Sunrise" /&gt;{'\n'}
                        {'                '}&lt;ship id="1895" name="Carnival Sunshine" /&gt;{'\n'}
                        {'                '}&lt;ship id="245" name="Carnival Valor" /&gt;{'\n'}
                        {'                '}&lt;ship id="6519" name="Carnival Venezia" /&gt;{'\n'}
                        {'                '}&lt;ship id="3527" name="Carnival Vista" /&gt;{'\n'}
                        {'                '}&lt;ship id="5149" name="Mardi Gras" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="3"
                        logourl="https://static.traveltek.net/cruisepics/logos/celebritynew_resized.gif"
                        name="Celebrity Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/celebritynew_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="4985" name="Celebrity Apex" /&gt;{'\n'}
                        {'                '}&lt;ship id="6448" name="Celebrity Ascent" /&gt;{'\n'}
                        {'                '}&lt;ship id="7" name="Celebrity Beyond" /&gt;{'\n'}
                        {'                '}&lt;ship id="8" name="Celebrity Constellation" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="476" name="Celebrity Eclipse" /&gt;{'\n'}
                        {'                '}&lt;ship id="4445" name="Celebrity Edge" /&gt;{'\n'}
                        {'                '}&lt;ship id="442" name="Celebrity Equinox" /&gt;{'\n'}
                        {'                '}&lt;ship id="4695" name="Celebrity Flora" /&gt;{'\n'}
                        {'                '}&lt;ship id="13" name="Celebrity Infinity" /&gt;{'\n'}
                        {'                '}&lt;ship id="6" name="Celebrity Millennium" /&gt;{'\n'}
                        {'                '}&lt;ship id="1049" name="Celebrity Reflection" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="552" name="Celebrity Silhouette" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="427" name="Celebrity Solstice" /&gt;{'\n'}
                        {'                '}&lt;ship id="12" name="Celebrity Summit" /&gt;{'\n'}
                        {'                '}&lt;ship id="9" name="Celebrity Xcel" /&gt;{'\n'}
                        {'                '}&lt;ship id="205" name="Celebrity Xpedition" /&gt;{'\n'}
                        {'                '}&lt;ship id="4083" name="Celebrity Xploration" /&gt;
                        {'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="495"
                        logourl="https://static.traveltek.net/cruisepics/logos/celestyalnewlogo_resized_resized_resized.png"
                        name="Celestyal Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/celestyalnewlogo_resized_resized_resized.png"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="3497" name="Celestyal Crystal" /&gt;{'\n'}
                        {'                '}&lt;ship id="6791" name="Celestyal Discovery" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6550" name="Celestyal Journey" /&gt;{'\n'}
                        {'                '}&lt;ship id="3498" name="Celestyal Olympia" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="9"
                        logourl="https://static.traveltek.net/cruisepics/logos/costanew_resized.gif"
                        name="Costa Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/costanew_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="475" name="Costa Deliziosa" /&gt;{'\n'}
                        {'                '}&lt;ship id="2309" name="Costa Diadema" /&gt;{'\n'}
                        {'                '}&lt;ship id="1056" name="Costa Fascinosa" /&gt;{'\n'}
                        {'                '}&lt;ship id="563" name="Costa Favolosa" /&gt;{'\n'}
                        {'                '}&lt;ship id="5261" name="Costa Firenze" /&gt;{'\n'}
                        {'                '}&lt;ship id="52" name="Costa Fortuna" /&gt;{'\n'}
                        {'                '}&lt;ship id="439" name="Costa Pacifica" /&gt;{'\n'}
                        {'                '}&lt;ship id="365" name="Costa Serena" /&gt;{'\n'}
                        {'                '}&lt;ship id="4689" name="Costa Smeralda" /&gt;{'\n'}
                        {'                '}&lt;ship id="5507" name="Costa Toscana" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="5"
                        logourl="https://static.traveltek.net/cruisepics/logos/cunard.gif"
                        name="Cunard"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/cunard.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="6456" name="Queen Anne" /&gt;{'\n'}
                        {'                '}&lt;ship id="472" name="Queen Elizabeth" /&gt;{'\n'}
                        {'                '}&lt;ship id="56" name="Queen Mary 2" /&gt;{'\n'}
                        {'                '}&lt;ship id="57" name="Queen Victoria" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="73"
                        logourl="https://static.traveltek.net/cruisepics/logos/disneylogo_resized.gif"
                        name="Disney Cruise Line"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/disneylogo_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="569" name="Disney Dream" /&gt;{'\n'}
                        {'                '}&lt;ship id="743" name="Disney Fantasy" /&gt;{'\n'}
                        {'                '}&lt;ship id="465" name="Disney Magic" /&gt;{'\n'}
                        {'                '}&lt;ship id="6075" name="Disney Treasure" /&gt;{'\n'}
                        {'                '}&lt;ship id="6074" name="Disney Wish" /&gt;{'\n'}
                        {'                '}&lt;ship id="464" name="Disney Wonder" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="849"
                        logourl="https://static.traveltek.net/cruisepics/logos/explora_resized.gif"
                        name="Explora Journeys"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/explora_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="6436" name="EXPLORA I" /&gt;{'\n'}
                        {'                '}&lt;ship id="6530" name="EXPLORA II" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="13"
                        logourl="https://static.traveltek.net/cruisepics/logos/fredolsen.gif"
                        name="Fred Olsen Cruise Lines"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/fredolsen.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="376" name="Balmoral" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="5798" name="Bolette" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="67" name="Borealis" /&gt;
                        {'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="15"
                        logourl="https://static.traveltek.net/cruisepics/logos/HAL_Logo1_resized.jpg"
                        name="Holland America Line"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/HAL_Logo1_resized.jpg"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="399" name="Eurodam" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3496" name="Koningsdam" /&gt;{'\n'}
                        {'                '}&lt;ship id="515" name="Nieuw Amsterdam" /&gt;{'\n'}
                        {'                '}&lt;ship id="4517" name="Nieuw Statendam" /&gt;{'\n'}
                        {'                '}&lt;ship id="81" name="Noordam" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="80" name="Oosterdam" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="83" name="Rotterdam" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="75" name="Volendam" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="72" name="Westerdam" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="74" name="Zaandam" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="84" name="Zuiderdam" /&gt;
                        {'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="31"
                        logourl="https://static.traveltek.net/cruisepics/logos/hurti_coastal_2023_resized.gif"
                        name="Hurtigruten"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/hurti_coastal_2023_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="199" name="MS Kong Harald" /&gt;{'\n'}
                        {'                '}&lt;ship id="196" name="MS Nordkapp" /&gt;{'\n'}
                        {'                '}&lt;ship id="197" name="MS Nordlys" /&gt;{'\n'}
                        {'                '}&lt;ship id="194" name="MS Nordnorge" /&gt;{'\n'}
                        {'                '}&lt;ship id="195" name="MS Polarlys" /&gt;{'\n'}
                        {'                '}&lt;ship id="198" name="MS Richard With" /&gt;{'\n'}
                        {'                '}&lt;ship id="192" name="MS Trollfjord" /&gt;{'\n'}
                        {'                '}&lt;ship id="200" name="MS Vesterålen" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="702"
                        logourl="https://static.traveltek.net/cruisepics/logos/margaritaville_resized.gif"
                        name="Margaritaville at Sea"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/margaritaville_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="4862" name="Margaritaville at Sea Paradise"
                        /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="16"
                        logourl="https://static.traveltek.net/cruisepics/logos/msccruise.gif"
                        name="MSC Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/msccruise.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="185" name="MSC Armonia" /&gt;{'\n'}
                        {'                '}&lt;ship id="4511" name="MSC Bellissima" /&gt;{'\n'}
                        {'                '}&lt;ship id="1195" name="MSC Divina" /&gt;{'\n'}
                        {'                '}&lt;ship id="6457" name="MSC Euribia" /&gt;{'\n'}
                        {'                '}&lt;ship id="458" name="MSC Fantasia" /&gt;{'\n'}
                        {'                '}&lt;ship id="4777" name="MSC Grandiosa" /&gt;{'\n'}
                        {'                '}&lt;ship id="89" name="MSC Lirica" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="463" name="MSC Magnifica" /&gt;{'\n'}
                        {'                '}&lt;ship id="3626" name="MSC Meraviglia" /&gt;{'\n'}
                        {'                '}&lt;ship id="326" name="MSC Musica" /&gt;{'\n'}
                        {'                '}&lt;ship id="86" name="MSC Opera" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="379" name="MSC Orchestra" /&gt;{'\n'}
                        {'                '}&lt;ship id="428" name="MSC Poesia" /&gt;{'\n'}
                        {'                '}&lt;ship id="1985" name="MSC Preziosa" /&gt;{'\n'}
                        {'                '}&lt;ship id="6441" name="MSC Seascape" /&gt;{'\n'}
                        {'                '}&lt;ship id="5299" name="MSC Seashore" /&gt;{'\n'}
                        {'                '}&lt;ship id="3707" name="MSC Seaside" /&gt;{'\n'}
                        {'                '}&lt;ship id="4104" name="MSC Seaview" /&gt;{'\n'}
                        {'                '}&lt;ship id="244" name="MSC Sinfonia" /&gt;{'\n'}
                        {'                '}&lt;ship id="462" name="MSC Splendida" /&gt;{'\n'}
                        {'                '}&lt;ship id="4978" name="MSC Virtuosa" /&gt;{'\n'}
                        {'                '}&lt;ship id="6514" name="MSC World America" /&gt;{'\n'}
                        {'                '}&lt;ship id="6427" name="MSC World Europa" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="17"
                        logourl="https://static.traveltek.net/cruisepics/logos/ncl.gif"
                        name="Norwegian Cruise Line"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/ncl.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="6676" name="Norwegian Aqua" /&gt;{'\n'}
                        {'                '}&lt;ship id="4362" name="Norwegian Bliss" /&gt;{'\n'}
                        {'                '}&lt;ship id="1368" name="Norwegian Breakaway" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="94" name="Norwegian Dawn" /&gt;{'\n'}
                        {'                '}&lt;ship id="4788" name="Norwegian Encore" /&gt;{'\n'}
                        {'                '}&lt;ship id="478" name="Norwegian Epic" /&gt;{'\n'}
                        {'                '}&lt;ship id="2716" name="Norwegian Escape" /&gt;{'\n'}
                        {'                '}&lt;ship id="371" name="Norwegian Gem" /&gt;{'\n'}
                        {'                '}&lt;ship id="2161" name="Norwegian Getaway" /&gt;{'\n'}
                        {'                '}&lt;ship id="410" name="Norwegian Jade" /&gt;{'\n'}
                        {'                '}&lt;ship id="248" name="Norwegian Jewel" /&gt;{'\n'}
                        {'                '}&lt;ship id="4294" name="Norwegian Joy" /&gt;{'\n'}
                        {'                '}&lt;ship id="368" name="Norwegian Pearl" /&gt;{'\n'}
                        {'                '}&lt;ship id="6423" name="Norwegian Prima" /&gt;{'\n'}
                        {'                '}&lt;ship id="98" name="Norwegian Sky" /&gt;{'\n'}
                        {'                '}&lt;ship id="268" name="Norwegian Spirit" /&gt;{'\n'}
                        {'                '}&lt;ship id="99" name="Norwegian Star" /&gt;{'\n'}
                        {'                '}&lt;ship id="100" name="Norwegian Sun" /&gt;{'\n'}
                        {'                '}&lt;ship id="6449" name="Norwegian Viva" /&gt;{'\n'}
                        {'                '}&lt;ship id="103" name="Pride of America" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="48"
                        logourl="https://static.traveltek.net/cruisepics/logos/oceania_new_logo__resized.gif"
                        name="Oceania Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/oceania_new_logo__resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="6542" name="Allura" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="261" name="Insignia" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="555" name="Marina" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="260" name="Nautica" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="259" name="Regatta" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="1172" name="Riviera" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3583" name="Sirena" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6393" name="Vista" /&gt;
                        {'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="1"
                        logourl="https://static.traveltek.net/cruisepics/logos/poc1_resized.gif"
                        name="P&amp;amp;O Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/poc1_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="180" name="Arcadia" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6392" name="Arvia" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3" name="Aurora" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="471" name="Azura" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="2649" name="Britannia" /&gt;{'\n'}
                        {'                '}&lt;ship id="4905" name="Iona" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="396" name="Ventura" /&gt;
                        {'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="20"
                        logourl="https://static.traveltek.net/cruisepics/logos/princessslogonew.png"
                        name="Princess Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/princessslogonew.png"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="117" name="Caribbean Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="121" name="Coral Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="269" name="Crown Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="119" name="Diamond Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="5427" name="Discovery Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="367" name="Emerald Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="4964" name="Enchanted Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="110" name="Grand Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="116" name="Island Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="3788" name="Majestic Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="109" name="Regal Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="115" name="Royal Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="416" name="Ruby Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="114" name="Sapphire Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="4711" name="Sky Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="6662" name="Star Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="112" name="Sun Princess" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="21"
                        logourl="https://static.traveltek.net/cruisepics/logos/regentsevenseas.gif"
                        name="Regent Seven Seas Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/regentsevenseas.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="2678" name="Seven Seas Explorer" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="128" name="Seven Seas Grandeur" /&gt;{'\n'}
                        {'                '}&lt;ship id="125" name="Seven Seas Mariner" /&gt;{'\n'}
                        {'                '}&lt;ship id="123" name="Seven Seas Navigator" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="4697" name="Seven Seas Splendor" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="124" name="Seven Seas Voyager" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="22"
                        logourl="https://static.traveltek.net/cruisepics/logos/rci.gif" name="Royal
                        Caribbean International"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/rci.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="140" name="Adventure Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="481" name="Allure Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="2708" name="Anthem Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="147" name="Brilliance Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="146" name="Enchantment Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="136" name="Explorer Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="270" name="Freedom Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="144" name="Grandeur Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3597" name="Harmony Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6460" name="Icon Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="393" name="Independence Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="145" name="Jewel Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="369" name="Liberty Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="141" name="Mariner Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="130" name="Navigator Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="457" name="Oasis Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="5379" name="Odyssey Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="3605" name="Ovation Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="2472" name="Quantum Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="138" name="Radiance Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="137" name="Rhapsody Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="135" name="Serenade Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="4816" name="Spectrum Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6677" name="Star Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="4439" name="Symphony Of The Seas" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="6512" name="Utopia Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="132" name="Vision Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="131" name="Voyager Of The Seas" /&gt;{'\n'}
                        {'                '}&lt;ship id="5457" name="Wonder Of The Seas" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="24"
                        logourl="https://static.traveltek.net/cruisepics/logos/seabourn.gif"
                        name="Seabourn"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/seabourn.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="3534" name="Seabourn Encore" /&gt;{'\n'}
                        {'                '}&lt;ship id="429" name="Seabourn Odyssey" /&gt;{'\n'}
                        {'                '}&lt;ship id="4388" name="Seabourn Ovation" /&gt;{'\n'}
                        {'                '}&lt;ship id="6446" name="Seabourn Pursuit" /&gt;{'\n'}
                        {'                '}&lt;ship id="564" name="Seabourn Quest" /&gt;{'\n'}
                        {'                '}&lt;ship id="473" name="Seabourn Sojourn" /&gt;{'\n'}
                        {'                '}&lt;ship id="5267" name="Seabourn Venture" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="670"
                        logourl="https://static.traveltek.net/cruisepics/logos/Ulogo_resized.gif"
                        name="U by Uniworld"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/Ulogo_resized.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="4506" name="THE A" /&gt;
                        {'\n'}
                        {'                '}&lt;ship id="4505" name="THE B" /&gt;
                        {'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="84"
                        logourl="https://static.traveltek.net/cruisepics/logos/uniworld_new_resized.png"
                        name="Uniworld River Cruises"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/uniworld_new_resized.png"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="5490" name="Aria Amazon" /&gt;{'\n'}
                        {'                '}&lt;ship id="3400" name="Ganges Voyager II" /&gt;{'\n'}
                        {'                '}&lt;ship id="5168" name="Mekong Jewel" /&gt;{'\n'}
                        {'                '}&lt;ship id="586" name="River Duchess" /&gt;{'\n'}
                        {'                '}&lt;ship id="587" name="River Empress" /&gt;{'\n'}
                        {'                '}&lt;ship id="588" name="River Princess" /&gt;{'\n'}
                        {'                '}&lt;ship id="589" name="River Queen" /&gt;{'\n'}
                        {'                '}&lt;ship id="594" name="River Tosca" /&gt;{'\n'}
                        {'                '}&lt;ship id="648" name="River Victoria" /&gt;{'\n'}
                        {'                '}&lt;ship id="646" name="S.S. Antoinette" /&gt;{'\n'}
                        {'                '}&lt;ship id="592" name="S.S. Beatrice" /&gt;{'\n'}
                        {'                '}&lt;ship id="4907" name="S.S. Bon Voyage" /&gt;{'\n'}
                        {'                '}&lt;ship id="2312" name="S.S. Catherine" /&gt;{'\n'}
                        {'                '}&lt;ship id="6679" name="S.S. Elisabeth" /&gt;{'\n'}
                        {'                '}&lt;ship id="4019" name="S.S. Joie de Vivre" /&gt;{'\n'}
                        {'                '}&lt;ship id="5166" name="S.S. La Venezia" /&gt;{'\n'}
                        {'                '}&lt;ship id="2833" name="S.S. Maria Theresa" /&gt;{'\n'}
                        {'                '}&lt;ship id="5167" name="S.S. São Gabriel" /&gt;{'\n'}
                        {'                '}&lt;ship id="5165" name="S.S. Sphinx" /&gt;{'\n'}
                        {'                '}&lt;ship id="6678" name="S.S. Victoria" /&gt;{'\n'}
                        {'                '}&lt;ship id="4795" name="Sanctuary Yangzi Explorer"
                        /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'        '}&lt;line id="734"
                        logourl="https://static.traveltek.net/cruisepics/logos/virginvoyages.gif"
                        name="Virgin Voyages"
                        smalllogourl="https://static.traveltek.net/cruisepics/logos_small/virginvoyages.gif"&gt;
                        {'\n'}
                        {'            '}&lt;ships&gt;{'\n'}
                        {'                '}&lt;ship id="6461" name="Brilliant Lady" /&gt;{'\n'}
                        {'                '}&lt;ship id="6389" name="Resilient Lady" /&gt;{'\n'}
                        {'                '}&lt;ship id="5150" name="Scarlet Lady" /&gt;{'\n'}
                        {'                '}&lt;ship id="5500" name="Valiant Lady" /&gt;{'\n'}
                        {'            '}&lt;/ships&gt;{'\n'}
                        {'        '}&lt;/line&gt;{'\n'}
                        {'    '}&lt;/results&gt;{'\n'}&lt;/response&gt;
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <hr />
              <h2 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Design">Design</h2>
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
              <hr />
              <h2 id="FRD-CruiseIntegration-Getcontent-Staticdatatocache-MVP1-Documentation">
                Documentation
              </h2>
              <p>
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/602341378/603455507.txt"
                    data-nice-type="Text File"
                    data-file-src="/wiki/download/attachments/602341378/List%20of%20Regions.txt?version=1&modificationDate=1704976656289&cacheVersion=1&api=v2"
                    data-linked-resource-id={603455507}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={602341378}
                    data-linked-resource-default-alias="List of Regions.txt"
                    data-mime-type="text/plain"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="3f515b0b-bb09-4c97-969b-6bd991e9d63d"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/602341378/603455507" height={250} />
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
                <a href="attachments/602341378/602341386.png">
                  GeoExpediaLocationsProcess.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341389.png">ExpediaProperyIDs_logic.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341392.drawio">
                  ExpediaProperyIDs_logic.drawio
                </a>{' '}
                (binary/octet-stream)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341395.json">
                  RCI - XML 4.0.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341398.png">RCI_B2B_Flow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341401.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341404.png">image-20231205-123414.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341407.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341410.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341413.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341416.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602341419.png">AvailabilityFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/602734692.png">GetStaticDataFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/603455507.txt">List of Regions.txt</a> (text/plain)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/602341378/603455517.png">image-20240111-125313.png</a>{' '}
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

export default FRDCruisesIntegrationContent
