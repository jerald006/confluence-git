import React from 'react'

function ExpediaIntegrationBooking() {
  return (
    <>
      <title>XeniApp : FRD - Expedia Integration - Booking - MVP1</title>
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
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FRD - Expedia Integration - Booking - MVP1</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Dec 21,
              2023
            </div>
            <div id="main-content" className="wiki-content group">
              <h1 id="FRD-ExpediaIntegration-Booking-MVP1-Functionalobjective">
                Functional objective
              </h1>
              <p>Once we offer the Expedia content and the user wants to book this content. </p>
              <p />
              <h2 id="FRD-ExpediaIntegration-Booking-MVP1-Context">Context</h2>
              <p>
                Given the user completes his search
                <br />
                And the Expedia content is already integrated into the hotel Marketplace
              </p>
              <p>
                When: The user selects to book an option
                <br />
                And the option source is from Expedia integration.
              </p>
              <hr />
              <h2 id="FRD-ExpediaIntegration-Booking-MVP1-ProposalSolution">Proposal Solution</h2>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  width={1133}
                  loading="lazy"
                  src="/src/attachments/596934657/598048807.png?width=1133"
                  data-image-src="attachments/596934657/598048807.png"
                  data-height={1122}
                  data-width={1133}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={598048807}
                  data-linked-resource-version={1}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="ExpediaBkgFlow_Proposal.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={596934657}
                  data-linked-resource-container-version={5}
                  data-media-id="237447d7-1915-4a81-b8c0-4dcbead38fa7"
                  data-media-type="file"
                />
              </span>
              <hr />
              <p />
              <div className="confluence-information-macro confluence-information-macro-information">
                <span className="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>Expedia allows users to create reservations on hold : </p>
                  <p>
                    <a
                      className="external-link"
                      href="https://developers.expediagroup.com/docs/products/rapid/lodging/booking/hold-resume#example-retrieval-response-for-an-on-hold-booking-that-has-been-cancelled/timed-out"
                      rel="nofollow"
                    >
                      https://developers.expediagroup.com/docs/products/rapid/lodging/booking/hold-resume#example-retrieval-response-for-an-on-hold-booking-that-has-been-cancelled/timed-out
                    </a>{' '}
                  </p>
                  <p>
                    The idea is to create the booking for a short period in hold, until the payment
                    process is resolved. <br />
                    This could allow us 2 opportunities:
                  </p>
                  <p>1 - Search for best prices</p>
                  <p>2 - Cancel a booking on hold without penalties. </p>
                </div>
              </div>
              <hr />
              <h2 id="FRD-ExpediaIntegration-Booking-MVP1-FunctionalRequirements">
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
                          <strong>Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">1</td>
                      <td className="confluenceTd">
                        <p>Collect the data of the selected option (bookToken)</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>Make a request to Rapid API - /itinerary (create)</p>
                      </td>
                      <td className="confluenceTd">
                        <p>hold property on True.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>
                          Store the itineraryId, resumeLink, resumeLink (to confirm the booking),
                          cancelLink
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Booking Created Response.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>Retrieve the booking with the proper ResumeLink</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>Send request to payment gateways</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">6</td>
                      <td className="confluenceTd">
                        <p>Payment response success</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Logic of confirm booking</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">7</td>
                      <td className="confluenceTd">
                        <p>Send the request using the resumeLink of the booking</p>
                      </td>
                      <td className="confluenceTd">
                        <p>It will reply Http:204 as success</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">8</td>
                      <td className="confluenceTd">
                        <p>
                          If https:204 - Send request to retrieve the reservation to get the
                          confirmation
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">9</td>
                      <td className="confluenceTd">
                        <p>If response is different, create the error handling response</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">10</td>
                      <td className="confluenceTd">
                        <p>Payment NOT success</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Expose error to user</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">11</td>
                      <td className="confluenceTd">
                        <p>
                          Send request to Rapid APi to Cancel hold booking and release the inventory
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>Return the user to Hotel search page. </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">12</td>
                      <td className="confluenceTd">
                        <p>Create metric to track activity over Expedia Transactions</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">13</td>
                      <td className="confluenceTd">
                        <p>Create logs to catch source of issues</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">14</td>
                      <td className="confluenceTd">
                        <p>Performance monitor to track RapidAPI performance.</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <h2 id="FRD-ExpediaIntegration-Booking-MVP1-Technicalrequirements">
                Technical requirements
              </h2>
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
                    The big challenge is to implement this flow in the UI accordingly to the current
                    customer experience.
                  </p>
                </div>
              </div>
              <h3 id="FRD-ExpediaIntegration-Booking-MVP1-CreatereservationonHold">
                <br />
                Create reservation on Hold
              </h3>
              <div id="expander-484538252" className="expand-container">
                <div id="expander-control-484538252" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    Request example: Create reservation on Hold
                  </span>
                </div>
                <div id="expander-content-484538252" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location 'https://test.ean.com/v3/itineraries?token=
                        {'{'}
                        {'{'}book_token{'}'}
                        {'}'}' \{'\n'}--header 'Authorization;' \{'\n'}--header 'Customer-Ip:
                        5.5.5.5' \{'\n'}--header 'Accept: application/json' \{'\n'}--header
                        'Accept-Encoding: gzip' \{'\n'}--header 'Content-Type: application/json' \
                        {'\n'}
                        --header 'Test: standard' \{'\n'}--header 'Cookie:
                        ak_bmsc=592EAB8970A78A3003BE897681F16C64~000000000000000000000000000000~YAAQXk5OaMgOEW6MAQAA+b+LhxbMUnKexEFebPv25Gf7ZOqppDAQBNhKoVj9oYbRefD1DL0PenASgpYAMzBUp5MXEfI7mmtrE1AanJm2LujrlN5KyEa5u839Lb43OaE6JndicWZulG67fSn2dAzsJRgK2qxtLi1BRSqo8UECls5z1ON0JfqSCyba7jChg5bUftKjEbkJWq6aAVnlcCpVDlBb6Qf/N0AczFEHaaD8kcJNbjOCLEXYfoJYF1t47DSakUQvt5k7Ak3zUMI7J6AMFr2DLYXJZKQCXMipdADVtQzG3rAax1ia7laauiseDp1xn7+gVEojqBLYzYzLVXjDDeC7St1Qhnx3jUyCTvzz131jm2yX50JODw==;
                        bm_sv=7A75BDA803B516BACBE07874699FB6B0~YAAQXk5OaKNcEW6MAQAAbICNhxbtPJ94NkA9+pRka0xbznupjbSRo7IFHtC4xmipGgkHIolmScVRtSCOgcZtftvjcf7YN4GCxF2VpLpAzCc67BKUek57C4FXtuz/l8STds+0GSp2h/xPZ5dPuZ8xqo1Dq13bkZBSuc+a3aCC9v0iVw2zauxBCk2vst6rdg+7ar7JqmcmhS+pRyz7CqtRpkfl86Brf6TjEtvVo5BhkklHDEJbajnDLLUQfuQ6~1'
                        \{'\n'}--data-raw '{'{'}
                        {'\n'}
                        {'    '}"affiliate_reference_id": "RAPID_POSTMAN_1703081243",{'\n'}
                        {'    '}"hold": true,{'\n'}
                        {'    '}"email": "john@example.com",{'\n'}
                        {'    '}"phone": {'{'}
                        {'\n'}
                        {'        '}"country_code": "1",{'\n'}
                        {'        '}"area_code": "487",{'\n'}
                        {'        '}"number": "5550077"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"rooms": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"given_name": "John",{'\n'}
                        {'            '}"family_name": "Smith",{'\n'}
                        {'            '}"smoking": false,{'\n'}
                        {'            '}"special_request": "Top floor or away from street please"
                        {'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"payments": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"type": "customer_card",{'\n'}
                        {'            '}"number": "4111111111111111",{'\n'}
                        {'            '}"security_code": "123",{'\n'}
                        {'            '}"expiration_month": "08",{'\n'}
                        {'            '}"expiration_year": "2025",{'\n'}
                        {'            '}"billing_contact": {'{'}
                        {'\n'}
                        {'                '}"given_name": "John",{'\n'}
                        {'                '}"family_name": "Smith",{'\n'}
                        {'                '}"address": {'{'}
                        {'\n'}
                        {'                    '}"line_1": "555 1st St",{'\n'}
                        {'                    '}"line_2": "10th Floor",{'\n'}
                        {'                    '}"line_3": "Unit 12",{'\n'}
                        {'                    '}"city": "Seattle",{'\n'}
                        {'                    '}"state_province_code": "WA",{'\n'}
                        {'                    '}"postal_code": "98121",{'\n'}
                        {'                    '}"country_code": "US"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"enrollment_date": "2018-09-15"{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"affiliate_metadata": "data_point_1:123|data_point2:This is data.",
                        {'\n'}
                        {'    '}"tax_registration_number": "12345678910",{'\n'}
                        {'    '}"traveler_handling_instructions": "Please use the card provided for
                        payment. Avoid cancelation as this is for a corporate traveler. Contact
                        traveler if any issues."{'\n'}
                        {'}'}'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-2106655432" className="expand-container">
                <div id="expander-control-2106655432" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response example:</span>
                </div>
                <div id="expander-content-2106655432" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"itinerary_id": "7704618805125",{'\n'}
                        {'    '}"links": {'{'}
                        {'\n'}
                        {'        '}"retrieve": {'{'}
                        {'\n'}
                        {'            '}"method": "GET",{'\n'}
                        {'            '}"href":
                        "/v3/itineraries/7704618805125?token=QldfCGlcUA4EVlNTBgIDVQlDRwdWXBBLDwheZkFdBwVXUlZRBFhWUhkFXAUESwcGXVYYBlFRVkwFW1JQAgAEBgZSBgAQXlVHVApVC0BrDlBnQ1BWWxYBD3w9YHNxcSceQBZfUFI-UAtZWgMEUAVUAFUVUENDVk0AbApXCwdfA1AOBQEEARNADUNdORZNEVUOTRNYVQtMCFcPVA1tVhQMRUZQQEMJVgFBRQBfBU0OBR9QABcSA08PBl9AEVgUAHEcBHVHBVZGWEEMUVdHaw9RHAsCRwZ5FAFRcHICUQIBIXZIUXRWIEgEV1J6TggBUQlOCAx8UwcKAFIAU3BUQwVUHVcnEQZRQlQaWgNfEmtPAEcIVwhbBENfV1kXV1FHBHlBBycSUQZbVEcHUx0KdUABAlUEBVNSUQRcSwQHCwcUUVYPAhUMWloAHVUIVltVUgcGWwZUAEABABYKJxwKUBBJEV0UUFAdCyJDBQZwMGJBAANHViJAAyFDUVcWA05aBwxGb0xJFVMQBgESVyBHBgRzEEsRWg9VSyFYFAIcCwcRUXtDA1RbVmYUEVEJUBFZQwEEHFZ0AgVZEAQUCyERAFRTXEZZW19bVl5BaAZVEVERUwQdAnQQBlZXAghdHQYMFVcNFVYEFgUiFlEKVg0NWFFcBmYFWgtFVloRFlEBEwcnFlN7EwIBV1xFAVlnCANZBBUBC0QKcEcKU3IOXQ8XBlRGAHYQAFcAVA9dWRhuCFVeURdTAhRRIxNQUWJZCxFZEAELFgUhElYEWFwFRlxAR0MHCxwDIxAPcxZRBlhZCldrVBZXUBdXJEACU1YNVhoFFkVIa0AdVgUWBiARVAcJD1kDZ1dBBgZGAXRGBVQAVkBRTnMNXg5KQAUEHQVxQFFQW1EKVToERgYAFVF0RAoLYQtaREoAARJWVxYKJRNUC1JQEU0TVgoRUSIVAlFjAFlAFVgARwFURFdwFwEKF01ZFgFvEUpeFAtWWwY5VFtXAxFWABRRIENXAzUnRldURwV0R1AAQFdDEVdZa1BYAARHBgQVVnlAB1AJAVMLV0MLCxAGIB1UAwVcQFcQEU07WgtQAxYEC0AGJUEHUTRiHFAGF1FyFwZ1EgEEQ1haWQcRVwYRUncdBncQBlYGXUwLRERMZwVXVAETAQVEACIdBlZQEQoARAslEFcDVksAUjxQWVADFlYLEwNyFQcBUA8PQ1AGRAJwHFMLXxdVA10TEFMAEVUiFwcHB1BTBVIDAkQDVBEEcBdWdBRVJhNXJxdZAxdaUEdQXVA9UQFTH1QAWl5GVQFQBFxeT2BrF0AMQUZTAQ9GBEMMBh8UFwxTBE5bC1RXDhcRWUBdO0NKRAYJNWEkKHMnaiFCWlEXbUcCQwNCW1JYCUYEFwRZFV5SBQcUBgsHVFMNXlgFUwYGHVIETAkBEhVSQhVfVkU7FUFXAF8KXG5QAQkAVQgCUloWXQZdB11GXFIEDkADRwZGQEFdClpBXzFjJR5cAxBTXRcPWVNsBVwFXF8HDVtVFwEOBgYNDUJDX1ACAgwdVQcYBgMRAQwDXVoND1cNW0cECQdBBwtJVVAaAFcLFwRWUWYNBwlXDlcGVxVCSQxRWVEFWlEXSgpbQhZfXFNpR1JCWw1mYyN6IXV4Lnh9F1dZWwcObVQAXVRQSjlXXghPbFMEUg9LCQIAWEtXR1gLWhBfQwRWBlsdBwVAQQFfU0JBWVtUO0RXExBXBA1BWBFQVU9IE1ECUExRXAMAWRNWRxYSWg9RRz5CA0dAXV0Pb1gGX1BTAgQHUFdSGFFfVVVPAwYDDxVYBAhWGVAFXFtRUgVaVQtRVRJDAUFHDFwLPVsAWFEFAgYIBwEDSFRWCAcVUAJWA04MXgADSwNUAFZXUAdVC1FTDkBBFFtJAEcVSD5RAQoHCAcCUVdUEV8BXgBFAkBXVD1BCFVcCVcDAlIcAgVJVwJsVwdDCnAJUREFJQ0MTFIABFAFVQgDWG5DAVwTDxFBS2xbC11dXzFjR1pUBj1cXRAFRV1DEl0LXAxTSi0MXwVNIQACRFVSBj1RX1ZWDFFARlJDDQ4MCRMFJx1Sd0cCCxZAFgMcCwcRUHlDA1R4XFcDIVEAHFYGQwF1HFcHFw1PBkQDC0cHc0MEAH9fWVQTAQIQBSERVwZFFFdWRVxBTUFXABxWcQcQDyIdBSAQW1Q-QxFdWQ0UWQVUAFUVUENCQkkVXwpWRGsPV1kLAhZwWFBQD0RNC18FVQQDAFUNCVAI"
                        {'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"resume": {'{'}
                        {'\n'}
                        {'            '}"method": "PUT",{'\n'}
                        {'            '}"href":
                        "/v3/itineraries/7704618805125?token=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"
                        {'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"cancel": {'{'}
                        {'\n'}
                        {'            '}"method": "DELETE",{'\n'}
                        {'            '}"href":
                        "/v3/itineraries/7704618805125?token=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"
                        {'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}
                        {'}'}
                        {'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <h3 id="FRD-ExpediaIntegration-Booking-MVP1-RetrievereservationonHold">
                Retrieve reservation on Hold
              </h3>
              <div id="expander-2071440963" className="expand-container">
                <div id="expander-control-2071440963" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request example: Retrieve Itinerary</span>
                </div>
                <div id="expander-content-2071440963" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location 'https://test.ean.com/v3/itineraries/7704618805125?token=
                        {'{'}
                        {'{'}retrieve_token{'}'}
                        {'}'}' \{'\n'}--header 'Authorization;' \{'\n'}--header 'Customer-Ip:
                        5.5.5.5' \{'\n'}--header 'Accept: application/json' \{'\n'}--header
                        'Accept-Encoding: gzip' \{'\n'}--header 'Test: standard' \{'\n'}--header
                        'Cookie:
                        ak_bmsc=592EAB8970A78A3003BE897681F16C64~000000000000000000000000000000~YAAQXk5OaMgOEW6MAQAA+b+LhxbMUnKexEFebPv25Gf7ZOqppDAQBNhKoVj9oYbRefD1DL0PenASgpYAMzBUp5MXEfI7mmtrE1AanJm2LujrlN5KyEa5u839Lb43OaE6JndicWZulG67fSn2dAzsJRgK2qxtLi1BRSqo8UECls5z1ON0JfqSCyba7jChg5bUftKjEbkJWq6aAVnlcCpVDlBb6Qf/N0AczFEHaaD8kcJNbjOCLEXYfoJYF1t47DSakUQvt5k7Ak3zUMI7J6AMFr2DLYXJZKQCXMipdADVtQzG3rAax1ia7laauiseDp1xn7+gVEojqBLYzYzLVXjDDeC7St1Qhnx3jUyCTvzz131jm2yX50JODw==;
                        bm_sv=7A75BDA803B516BACBE07874699FB6B0~YAAQZE5OaLvKb2KMAQAAf4uOhxa41li9wvnrGcNMlvHT8kYD38uZJHp5T3Q/HkLaFDe7L0HqAostqLGh56mDXOTTNIPxNUmNyoVRWEJ6K47VDSfn9Gm7RiIXMAE/7eBvmYH1SXVS+p9QK5LGnkKtECf60z95yLfufpxTA6dpOyeTJLEA7RN5/tjdu9bPGhEfXYq6Zs+7bzgBHD5HMUiDXMFaIuo7UXaOr9z7WQv0bNXNpywcLeCwKlpkWJ2X~1'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1207666907" className="expand-container">
                <div id="expander-control-1207666907" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="/src/images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response Example: </span>
                </div>
                <div id="expander-content-1207666907" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"itinerary_id": "7213628455485",{'\n'}
                        {'    '}"creation_date_time": "2023-12-20T14:07:26.681Z",
                        {'\n'}
                        {'    '}"links": {'{'}
                        {'\n'}
                        {'        '}"resume": {'{'}
                        {'\n'}
                        {'            '}"method": "PUT",{'\n'}
                        {'            '}"href":
                        "/v3/itineraries/7213628455485?token=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"
                        {'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"cancel": {'{'}
                        {'\n'}
                        {'            '}"method": "DELETE",{'\n'}
                        {'            '}"href":
                        "/v3/itineraries/7213628455485?token=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"
                        {'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}
                        {'}'}
                        {'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <h3 id="FRD-ExpediaIntegration-Booking-MVP1-ConfirmreservationonHold">
                Confirm reservation on Hold
              </h3>
              <div id="expander-2091026732" className="expand-container">
                <div id="expander-control-2091026732" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    Request Example: Resume (Confirm Reservation)
                  </span>
                </div>
                <div id="expander-content-2091026732" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --request PUT
                        'https://test.ean.com/v3/itineraries/7704618805125?token=
                        {'{'}
                        {'{'}resume_token{'}'}
                        {'}'}' \{'\n'}--header 'Authorization;' \{'\n'}--header 'Customer-Ip:
                        5.5.5.5' \{'\n'}--header 'Accept: application/json' \{'\n'}--header
                        'Accept-Encoding: gzip' \{'\n'}--header 'Test: standard' \{'\n'}--header
                        'Cookie:
                        ak_bmsc=592EAB8970A78A3003BE897681F16C64~000000000000000000000000000000~YAAQXk5OaMgOEW6MAQAA+b+LhxbMUnKexEFebPv25Gf7ZOqppDAQBNhKoVj9oYbRefD1DL0PenASgpYAMzBUp5MXEfI7mmtrE1AanJm2LujrlN5KyEa5u839Lb43OaE6JndicWZulG67fSn2dAzsJRgK2qxtLi1BRSqo8UECls5z1ON0JfqSCyba7jChg5bUftKjEbkJWq6aAVnlcCpVDlBb6Qf/N0AczFEHaaD8kcJNbjOCLEXYfoJYF1t47DSakUQvt5k7Ak3zUMI7J6AMFr2DLYXJZKQCXMipdADVtQzG3rAax1ia7laauiseDp1xn7+gVEojqBLYzYzLVXjDDeC7St1Qhnx3jUyCTvzz131jm2yX50JODw==;
                        bm_sv=7A75BDA803B516BACBE07874699FB6B0~YAAQZE5OaLvKb2KMAQAAf4uOhxa41li9wvnrGcNMlvHT8kYD38uZJHp5T3Q/HkLaFDe7L0HqAostqLGh56mDXOTTNIPxNUmNyoVRWEJ6K47VDSfn9Gm7RiIXMAE/7eBvmYH1SXVS+p9QK5LGnkKtECf60z95yLfufpxTA6dpOyeTJLEA7RN5/tjdu9bPGhEfXYq6Zs+7bzgBHD5HMUiDXMFaIuo7UXaOr9z7WQv0bNXNpywcLeCwKlpkWJ2X~1'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-639763493" className="expand-container">
                <div id="expander-control-639763493" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response example</span>
                </div>
                <div id="expander-content-639763493" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        HTTP:204{'\n'}
                        {'\n'}No Content.
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <h3 id="FRD-ExpediaIntegration-Booking-MVP1-CancelreservationonHold">
                Cancel reservation on Hold
              </h3>
              <div id="expander-833897537" className="expand-container">
                <div id="expander-control-833897537" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="/src/images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request Example: Cancel Itinerary </span>
                </div>
                <div id="expander-content-833897537" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --request DEL 'https://test.ean.com/v3/itineraries/{'{'}
                        {'{'}itineraryId{'}'}
                        {'}'}?token={'{'}
                        {'{'}cancel_token{'}'}
                        {'}'}' \{'\n'}--header 'Authorization;' \{'\n'}--header 'Customer-Ip:
                        5.5.5.5' \{'\n'}--header 'Accept: application/json' \{'\n'}--header
                        'Accept-Encoding: gzip' \{'\n'}--header 'Test: standard' \{'\n'}--header
                        'Cookie:
                        ak_bmsc=592EAB8970A78A3003BE897681F16C64~000000000000000000000000000000~YAAQXk5OaMgOEW6MAQAA+b+LhxbMUnKexEFebPv25Gf7ZOqppDAQBNhKoVj9oYbRefD1DL0PenASgpYAMzBUp5MXEfI7mmtrE1AanJm2LujrlN5KyEa5u839Lb43OaE6JndicWZulG67fSn2dAzsJRgK2qxtLi1BRSqo8UECls5z1ON0JfqSCyba7jChg5bUftKjEbkJWq6aAVnlcCpVDlBb6Qf/N0AczFEHaaD8kcJNbjOCLEXYfoJYF1t47DSakUQvt5k7Ak3zUMI7J6AMFr2DLYXJZKQCXMipdADVtQzG3rAax1ia7laauiseDp1xn7+gVEojqBLYzYzLVXjDDeC7St1Qhnx3jUyCTvzz131jm2yX50JODw==;
                        bm_sv=7A75BDA803B516BACBE07874699FB6B0~YAAQZE5OaLvKb2KMAQAAf4uOhxa41li9wvnrGcNMlvHT8kYD38uZJHp5T3Q/HkLaFDe7L0HqAostqLGh56mDXOTTNIPxNUmNyoVRWEJ6K47VDSfn9Gm7RiIXMAE/7eBvmYH1SXVS+p9QK5LGnkKtECf60z95yLfufpxTA6dpOyeTJLEA7RN5/tjdu9bPGhEfXYq6Zs+7bzgBHD5HMUiDXMFaIuo7UXaOr9z7WQv0bNXNpywcLeCwKlpkWJ2X~1'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-122510845" className="expand-container">
                <div id="expander-control-122510845" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response example: </span>
                </div>
                <div id="expander-content-122510845" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        http: 204{'\n'}
                        {'\n'}No content
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h2 id="FRD-ExpediaIntegration-Booking-MVP1-Design">Design</h2>
              <p />
              <p />
              <p />
              <p />
              <hr />
              <h2 id="FRD-ExpediaIntegration-Booking-MVP1-Documentation">Documentation</h2>
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
                <a href="attachments/596934657/596934664.png">ExpediaProperyIDs_logic.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934667.drawio">
                  ExpediaProperyIDs_logic.drawio
                </a>{' '}
                (binary/octet-stream)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934670.json">
                  RCI - XML 4.0.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934673.png">RCI_B2B_Flow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934676.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934679.png">image-20231205-123414.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934682.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934685.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934688.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934691.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/596934694.png">AvailabilityFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/596934657/598048807.png">ExpediaBkgFlow_Proposal.png</a>{' '}
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

export default ExpediaIntegrationBooking
