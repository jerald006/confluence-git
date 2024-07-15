import React from 'react'

function FOIDInclusion() {
  return (
    <>
      <title>XeniApp : FRD - FOID Inclusion - MVP1</title>
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
                <li>
                  <span>
                    <a href="FOID-inclusion_593100817.html">FOID inclusion</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FRD - FOID Inclusion - MVP1</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Dec 27,
              2023
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206652614 {padding: 0px;}\ndiv.rbtoc1719206652614 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206652614 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206652614">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-FOIDInclusion-MVP1-Functionalobjective">Functional objective</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-FOIDInclusion-MVP1-Context">Context</a>
                      </li>
                      <li>
                        <a href="#FRD-FOIDInclusion-MVP1-Prerequisites">Prerequisites</a>
                      </li>
                      <li>
                        <a href="#FRD-FOIDInclusion-MVP1-MVPScope">MVP Scope</a>
                      </li>
                      <li>
                        <a href="#FRD-FOIDInclusion-MVP1-Functionalflow">Functional flow</a>
                      </li>
                      <li>
                        <a href="#FRD-FOIDInclusion-MVP1-Technicalrequirements">
                          Technical requirements
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-FOIDInclusion-MVP1-Prerequisites.1">Prerequisites</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-FOIDInclusion-MVP1-Design">Design</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="FRD-FOIDInclusion-MVP1-Functionalobjective">Functional objective</h1>
              <p>
                All the reservations created through Flight Product must include the SSR:FOID to
                avoid any issues at the time of ticketing.
              </p>
              <hr />
              <h2 id="FRD-FOIDInclusion-MVP1-Context">Context</h2>
              <p>
                In the Airline industry, every time more Airlines claim the form of identification
                (FOID) of each passenger in the booking at the time of Ticketing. <br />
                We are facing some problems with this rule, since some ticketings failed because of
                it, and solving the problem requires manual intervention, for reservation through
                Sabre and Amadeus GDSs.
              </p>
              <div
                className="panel"
                style={{
                  backgroundColor: '#EAE6FF',
                  borderColor: '#998DD9',
                  borderWidth: 1,
                }}
              >
                <div className="panelContent" style={{ backgroundColor: '#EAE6FF' }}>
                  <p>
                    TravelFusion is not a standard GDS, so they do not claim for FOID. Anyway, the
                    idea is to pass via Thomalex the FOID information for every reservation.
                  </p>
                </div>
              </div>
              <p />
              <hr />
              <h2 id="FRD-FOIDInclusion-MVP1-Prerequisites">Prerequisites</h2>
              <ul>
                <li>
                  <p>Get the National Identification of each passenger in a booking.</p>
                </li>
              </ul>
              <hr />
              <h2 id="FRD-FOIDInclusion-MVP1-MVPScope">MVP Scope</h2>
              <ul>
                <li>
                  <p>Pass the ID Number to the Thomalex endpoint /cart/book</p>
                </li>
                <li>
                  <p>Not pass the ID Type</p>
                </li>
                <li>
                  <p>Not Pass the Nationality code</p>
                </li>
                <li>
                  <p>Applicable for All reservation created in Xeni</p>
                </li>
                <li>
                  <p>
                    Implemented only for GDSs Sabre and Amadeus (TravelFusion not required the FOID
                    inclusion).
                  </p>
                </li>
              </ul>
              <div className="confluence-information-macro confluence-information-macro-information">
                <span className="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>
                    The inclusion of extra information will demand to create new commands in
                    Thomalex to send the ID Type as variable and Nationality. <br />
                    These actions will be face in a further version of the MVP.
                  </p>
                </div>
              </div>
              <hr />
              <h2 id="FRD-FOIDInclusion-MVP1-Functionalflow">Functional flow</h2>
              <div className="table-wrap">
                <table
                  data-table-width={1196}
                  data-layout="default"
                  data-local-id="5bd18828-d36f-41a3-aa2a-6ad8eae71235"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '1196.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Functional Items</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          Add in the passenger detail page components to get the passenger
                          Identification for each as required.
                        </p>
                        <ul>
                          <li>
                            <p>
                              Type of Identification: PP - Passport/ NI - National Identification
                            </p>
                          </li>
                          <li>
                            <p>
                              Identification Id: It is a string that could be only numbers or
                              Numbers and letters.{' '}
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          Split the Passport information and move to a different optional
                          collapsable section right below the Passenger details form.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          The identification ID Number must be passed to Thomalex endpoint:{' '}
                          <a
                            className="external-link"
                            href="https://rest.resvoyage.com/docs/index#!/ShoppingCart/ShoppingCart_Book"
                            rel="nofollow"
                          >
                            POST
                          </a>{' '}
                          <a
                            className="external-link"
                            href="https://rest.resvoyage.com/docs/index#!/ShoppingCart/ShoppingCart_Book"
                            rel="nofollow"
                          >
                            <u>/api/v1/cart/book</u>
                          </a>
                          <u>.</u>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          All the transactions created in Sabre and Amadeus have to hold the FOID at
                          the time of Ticketing.{' '}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          The passenger additional information - Passport, should be required in
                          case of an International itinerary (Arrival point is in a different
                          country of the departure point)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          If the passport is required, the section has to be expanded automatically.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <h2 id="FRD-FOIDInclusion-MVP1-Technicalrequirements">Technical requirements</h2>
              <h3 id="FRD-FOIDInclusion-MVP1-Prerequisites.1">Prerequisites</h3>
              <ul>
                <li>
                  <p>
                    <strong>Provider</strong>: Thomalex
                  </p>
                </li>
              </ul>
              <p />
              <div className="table-wrap">
                <table
                  data-table-width={1290}
                  data-layout="default"
                  data-local-id="89b82340-700d-479b-ae97-20aa502d1e55"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col />
                    <col style={{ width: '531.0px' }} />
                    <col style={{ width: '715.0px' }} />
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
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">1</td>
                      <td className="confluenceTd">
                        <p>
                          Update the Passenger Details form in the UI accordingly to the Designs
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Add the fields:</p>
                        <p>
                          <strong>Title:</strong> Traveler identification.
                        </p>
                        <ul>
                          <li>
                            <p>
                              Nationality : Required. Dropdown to pick the country of nationality.
                            </p>
                          </li>
                          <li>
                            <p>
                              Type of Document: Required. Dropdown list. Select, NationalId,
                              Passport.
                            </p>
                          </li>
                          <li>
                            <p>
                              DocumentID: Required. Accept Numbers and Letters. From 6 to 12 chars
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>Split the Passenger Detail Passport Data and move to a new section</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Create a new section in the landing, collapsable, that holds the passenger
                          Passport for this MVP
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>Collect the data and pass the passenger identification to Thomalex</p>
                      </td>
                      <td className="confluenceTd">
                        <ul>
                          <li>
                            <p>
                              The documentID only should be passed in the property{' '}
                              <code>"Travellers[n].NationalIdentity"</code>
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>Identify type of Trip (Domestic and International)</p>
                      </td>
                      <td className="confluenceTd">
                        <ul>
                          <li>
                            <p>
                              Domestic: The departure and the arrival airport are in the same county
                              in each segment of the itinerary.
                            </p>
                          </li>
                          <li>
                            <p>
                              International: The departure and the arrival airport are in different
                              countries in a segment of the itinerary.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>Make the “Passport” information required.</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          If the passport is required for the destination, then the “Passenger
                          Additional Information” has to be expanded and a message indicating
                          “Passenger Passport is required”.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">6</td>
                      <td className="confluenceTd">
                        <p>Passing Passport Information to Vendor</p>
                      </td>
                      <td className="confluenceTd">
                        <p>The same logic as Today.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="confluence-information-macro confluence-information-macro-note">
                <span className="aui-icon aui-icon-small aui-iconfont-warning confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>
                    <strong>Risks</strong>
                  </p>
                  <ul>
                    <li>
                      <p>We need to build the current commandBuilder in Test into Prod.</p>
                    </li>
                    <li>
                      <p>
                        We need to have the correct commandBuilder for each instance of vendors
                        sites. (AccessFare - Sabre, TravelFusion, Amadeus).
                      </p>
                    </li>
                    <li>
                      <p>
                        We need to coordinate with Thomalex for every need to deploy the chances in
                        CommandBuilder.
                        <br />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <p />
              <p />
              <div id="expander-691158804" className="expand-container">
                <div id="expander-control-691158804" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request example create Booking</span>
                </div>
                <div id="expander-content-691158804" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"sessionId": "{'{'}
                        {'{'}ThomalexSessionId{'}'}
                        {'}'}",{'\n'}
                        {'    '}"Travellers": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"Title": "MR",{'\n'}
                        {'            '}"FirstName": "GERARDO",{'\n'}
                        {'            '}"MiddleName": "",{'\n'}
                        {'            '}"LastName": "NIZETICH",{'\n'}
                        {'            '}"TypeCode": "ADT",{'\n'}
                        {'            '}"Id": "d2de49cb-6d18-4e4e-8c33-623860e9deae",{'\n'}
                        {'            '}"NationalIdentity": "23516364N",{'\n'}
                        {'            '}"MobilePhone": "",{'\n'}
                        {'            '}"MobilePhoneCode": "",{'\n'}
                        {'            '}"DateOfBirthString": "1973-10-30T15:00:00.000Z",{'\n'}
                        {'            '}"Gender": "1",{'\n'}
                        {'            '}"UserRole": "PRNTADMIN",{'\n'}
                        {'            '}"CountryOfNationality": "AR",{'\n'}
                        {'            '}"Email": "gerardo@xeni.com",{'\n'}
                        {'            '}"Phone": "5491154548655"{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"PaymentDetails": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"TravelType": "AIR",{'\n'}
                        {'            '}"CorporateCreditCard": false,{'\n'}
                        {'            '}"PaymentOption": "CallMe"{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"IsPnrModifyRequest": false,{'\n'}
                        {'    '}"IAgreeAgencyTermsAndConditions": true,{'\n'}
                        {'    '}"ShoppingCartId": "{'{'}
                        {'{'}CartSessionId{'}'}
                        {'}'}",{'\n'}
                        {'    '}"BookingOnHold": false{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-2010936799" className="expand-container">
                <div id="expander-control-2010936799" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response example:</span>
                </div>
                <div id="expander-content-2010936799" className="expand-content">
                  <p>The response is not modified. </p>
                </div>
              </div>
              <p />
              <p>
                <br />
              </p>
              <hr />
              <h2 id="FRD-FOIDInclusion-MVP1-Design">Design</h2>
              <p>Draft Idea to discuss</p>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  width={1294}
                  loading="lazy"
                  src="attachments/593395713/598867971.png?width=1294"
                  data-image-src="attachments/593395713/598867971.png"
                  data-height={932}
                  data-width={2133}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={598867971}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="UI_paxDetail_update.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={593395713}
                  data-linked-resource-container-version={6}
                  data-media-id="30098ca5-3c18-406f-8f5a-28c6e6ed51c7"
                  data-media-type="file"
                />
              </span>
              <p />
              <p>
                <strong>Official Design of the components</strong>
              </p>
              <p>
                <strong>MVP1 </strong>-{' '}
                <a
                  className="external-link"
                  data-card-appearance="inline"
                  href="https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&node-id=5138-23052&mode=design&t=w8K00P8ktFBujpPA-0"
                  rel="nofollow"
                >
                  https://www.figma.com/file/xkSoBHUzlo3fywieennr4K/Xeni-Command-Center?type=design&amp;node-id=5138-23052&amp;mode=design&amp;t=w8K00P8ktFBujpPA-0
                </a>{' '}
              </p>
              <div className="confluence-information-macro confluence-information-macro-information">
                <span className="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>
                    The new section of “Passenger Additional Information” is for each passenger, and
                    for this MVP will hold only the Passport information, further we need to include
                    there:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Frequent Flyer:</strong> Up to 3 per passenger and Segment
                        association
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Special Meals: </strong>Each traveler can request special meal for
                        each segment in the itinerary
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Special Services:</strong> Each traveler can request special
                        services per segment like wheel chair, onboard assistance, Baby Crib, etc{' '}
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Travel Documentation</strong>: Apart from passport, the user can
                        enter:
                      </p>
                      <ul>
                        <li>
                          <p>
                            <strong>DOCA</strong>: Residence or Destination Address
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>DOCA</strong>: Redress Number, Known Traveler ID or VISA
                            information for a certain segment.{' '}
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <p />
              <p />
              <p />
              <p />
              <p />
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
                <a href="attachments/593395713/596410511.png">
                  PassengerDetails_Update_Draft.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/593395713/598867971.png">UI_paxDetail_update.png</a>{' '}
                (image/png)
                <br />
              </div>
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

export default FOIDInclusion
