import React from 'react'

function ExpediaIntegrationAvailability() {
  return (
    <>
      <title>XeniApp : FRD - Expedia Integration - Availability - MVP1</title>
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
              <span id="title-text">XeniApp : FRD - Expedia Integration - Availability - MVP1</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Jan 16,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206674053 {padding: 0px;}\ndiv.rbtoc1719206674053 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206674053 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206674053">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-ExpediaIntegration-Availability-MVP1-Functionalobjective">
                      Functional objective
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-OptionsAnalysis.">
                          Options Analysis.
                        </a>
                      </li>
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-Prerequisites">
                          Prerequisites
                        </a>
                      </li>
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-ProposalFlow">
                          Proposal Flow
                        </a>
                      </li>
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-XeniAPI">Xeni API</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-ExpediaIntegration-Availability-MVP1-AvailabilityResponseExample">
                              Availability Response Example
                            </a>
                          </li>
                          <li>
                            <a href="#FRD-ExpediaIntegration-Availability-MVP1-HotelDetails">
                              Hotel Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-FunctionalRequirements">
                          Functional Requirements
                        </a>
                      </li>
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-Technicalrequirements">
                          Technical requirements
                        </a>
                      </li>
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-Design">Design</a>
                      </li>
                      <li>
                        <a href="#FRD-ExpediaIntegration-Availability-MVP1-Documentation">
                          Documentation
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="FRD-ExpediaIntegration-Availability-MVP1-Functionalobjective">
                Functional objective
              </h1>
              <p>Offer to Xeni´s consumers more hotel content based on Expedia integration.</p>
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-OptionsAnalysis.">
                Options Analysis.
              </h2>
              <ul>
                <li>
                  <p>Direct Connection with Current Hotel API</p>
                </li>
                <li>
                  <p>Direct Connection with a Wrapper to a New API to explode in future.</p>
                </li>
              </ul>
              <hr />
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-Prerequisites">Prerequisites</h2>
              <ul>
                <li>
                  <p>Expedia API connectivity</p>
                </li>
                <li>
                  <p>List of Expedia PropertyIDs.</p>
                </li>
              </ul>
              <hr />
              <p />
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-ProposalFlow">Proposal Flow</h2>
              <span className="confluence-embedded-file-wrapper image-center-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-center"
                  width={1294}
                  loading="lazy"
                  src="/src/attachments/595132418/594968695.png?width=1294"
                  data-image-src="attachments/595132418/594968695.png"
                  data-height={516}
                  data-width={1636}
                  data-unresolved-comment-count={0}
                  data-linked-resource-id={594968695}
                  data-linked-resource-version={3}
                  data-linked-resource-type="attachment"
                  data-linked-resource-default-alias="AvailabilityFlow.png"
                  data-base-url="https://xeni-workspace.atlassian.net/wiki"
                  data-linked-resource-content-type="image/png"
                  data-linked-resource-container-id={595132418}
                  data-linked-resource-container-version={11}
                  data-media-id="beb73c04-f658-4815-8718-c83436a05c3b"
                  data-media-type="file"
                />
              </span>
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-XeniAPI">Xeni API</h2>
              <h3 id="FRD-ExpediaIntegration-Availability-MVP1-AvailabilityResponseExample">
                Availability Response Example
              </h3>
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  />
                </div>
              </div>
              <p />
              <p />
              <h3 id="FRD-ExpediaIntegration-Availability-MVP1-HotelDetails">
                <strong>Hotel Details</strong>
              </h3>
              <p>
                <strong>Request</strong>
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
                  <p>Expedia Integration must be identified with a new Hotel vendor ID. </p>
                </div>
              </div>
              <p />
              <hr />
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-FunctionalRequirements">
                Functional Requirements
              </h2>
              <div className="table-wrap">
                <table
                  data-table-width={1244}
                  data-layout="default"
                  data-local-id="6e911ce1-f96e-490f-ba82-e90a19255f16"
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
                          <strong>Requirement</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">1</td>
                      <td className="confluenceTd">
                        <p>Get Expedia availability</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>
                          Create RPC to match the HotelSearch to the expedia endpoint:{' '}
                          <code>/v3/properties/availability</code>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>
                          Crete the RPC to Match the Expedia Content + Availability response with
                          Xeni HotelSearch response.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>Hotel Detail, UI Hydration</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>Built the Hotel Cards and Hotel Detail offer.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-Technicalrequirements">
                Technical requirements
              </h2>
              <p>
                <br />
              </p>
              <div id="expander-2077616106" className="expand-container">
                <div id="expander-control-2077616106" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    Request example: /v3/properties/availability
                  </span>
                </div>
                <div id="expander-content-2077616106" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location --globoff
                        'https://test.ean.com/v3/properties/availability?checkin=
                        {'{'}
                        {'{'}checkin{'}'}
                        {'}'}&amp;checkout={'{'}
                        {'{'}checkout{'}'}
                        {'}'}
                        &amp;country_code=US&amp;currency=USD&amp;language=en-US&amp;occupancy=2-9%2C4&amp;property_id=100118572&amp;rate_plan_count=1&amp;sales_channel=website&amp;sales_environment=hotel_only&amp;property_id=1000446'
                        \{'\n'}--header 'Authorization;' \{'\n'}--header 'Customer-Ip: 5.5.5.5' \
                        {'\n'}--header 'Accept: application/json' \{'\n'}--header 'Accept-Encoding:
                        gzip'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-964683567" className="expand-container">
                <div id="expander-control-964683567" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">
                    Response example: /v3/properties/availability
                  </span>
                </div>
                <div id="expander-content-964683567" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        [{'\n'}
                        {'    '}
                        {'{'}
                        {'\n'}
                        {'        '}"property_id": "1000446",{'\n'}
                        {'        '}"status": "available",{'\n'}
                        {'        '}"rooms": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"id": "322049337",{'\n'}
                        {'                '}"room_name": "Standard Room, 2 Queen Beds, Non Smoking,
                        Refrigerator &amp; Microwave",{'\n'}
                        {'                '}"rates": [{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"id": "390240841",{'\n'}
                        {'                        '}"status": "available",{'\n'}
                        {'                        '}"available_rooms": 20,{'\n'}
                        {'                        '}"refundable": false,{'\n'}
                        {'                        '}"member_deal_available": false,
                        {'\n'}
                        {'                        '}"sale_scenario": {'{'}
                        {'\n'}
                        {'                            '}"package": false,{'\n'}
                        {'                            '}"member": false,{'\n'}
                        {'                            '}"corporate": false,{'\n'}
                        {'                            '}"distribution": false{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"merchant_of_record": "expedia",
                        {'\n'}
                        {'                        '}"amenities": {'{'}
                        {'\n'}
                        {'                            '}"1073742786": {'{'}
                        {'\n'}
                        {'                                '}"id": "1073742786",
                        {'\n'}
                        {'                                '}"name": "Free breakfast"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}"2109": {'{'}
                        {'\n'}
                        {'                                '}"id": "2109",{'\n'}
                        {'                                '}"name": "Free self parking"{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}"2192": {'{'}
                        {'\n'}
                        {'                                '}"id": "2192",{'\n'}
                        {'                                '}"name": "Free WiFi"
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"links": {'{'}
                        {'\n'}
                        {'                            '}"payment_options": {'{'}
                        {'\n'}
                        {'                                '}"method": "GET",{'\n'}
                        {'                                '}"href":
                        "/v3/properties/1000446/payment-options?token=REhZAQsABAoHQhMHUlNCF1ELUj1DVhdLBQMES1REClxLQg5cRR8WBlIBSxZdCFRpTQxRWV1TVVcHDAcDH1UBC1IbAwMFUB0NBQcCSAQHBA8LCFMDVldQVh8IVURWUAdWRDtZVWgTVgBXRgBccWBiJH0vdENSQkoRXA5WRGsVVhdKX19db1xXWVMOAlcFAglVFFkABAAVVQ5SB0xQBFQGHwwBAFxQUVUEA1cCURJQQUEVX1wHEGkLEwwBTFAfAB0MFUQHRBdfVlY-XV0OBVBQXF8JWlEVVQJUURkEB1ZWSAsEUQdJV1YGVAIMUFIMUlQAHkdXEUVQUV5GB0UMAhoVUAoUEkcWQkUPXgNDOVtJAEcARQhWAmhbV1NXCV4vcmoneCR5NxJVVQxQE1lNUQFsRAhcVgpWVQELSwdUFAABMQUHQQt1UlcVAyIFVBYNWARVVQdXUlVpFFBXEVdMEB1vAldVB19ta0UDVkRaAglUFFIKBAUOWAxbUVVUVhoHU08DBx5ABERBWlZFOxEQW1BZCV06XAYND1MJUFYAH1ZBEUoDXwVKCGw3JxIHUQFXDVxDTVgHVFYBTlEAFFMNFBVDQkRaXlZEbFlRClAAQ3dcBFVTQkBYCVZdAgFVCAANAV8="
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"bed_groups": {'{'}
                        {'\n'}
                        {'                            '}"37340": {'{'}
                        {'\n'}
                        {'                                '}"id": "37340",{'\n'}
                        {'                                '}"description": "2 Queen Beds",{'\n'}
                        {'                                '}"links": {'{'}
                        {'\n'}
                        {'                                    '}"price_check": {'{'}
                        {'\n'}
                        {'                                        '}"method": "GET",
                        {'\n'}
                        {'                                        '}"href":
                        "/v3/properties/1000446/rooms/322049337/rates/390240841?token=F~Oj46Zz8xJDEdYQQMGWNjVzowZlg6C1ILUksJCBgFVHpsA1YBARRUUhlVAC43M2Bya0FRUgAAUgIIX08MC1NUHwAABAEbUQAHUk8NUQYNV1IPAQMDB1M_FghTVVNTAV5cHQAHBFJMBwBcVklZVQsHTAtVA1BQAwoGC1RWVVZgBVUJAAAKQjEGVA4IHGME6zEyCfM4NFEPUgxRr2A-BkYyR1BQXEUkUAZHl2AAPU8RQEsRVRNYQGcXBlRaIABVFx8bQF4YUkYMG2kUUVxdFkoXSExRDEFRRUpBDgZNOYA1ZwFRqDNiVlYIT1UIgzA1jTBnyDU57DUypGE1_jdkxjVnkmdADVJVBANWUlEcVQMAAxhVAVJbSA8EXQEfVVAHDgtdVlNVUAFWgmArUwgLB0gCAkwAC2NVVAkIUgxTCB8AXAQGUwwFUVNqimEyEwvNctxZ"
                        {'\n'}
                        {'                                    '}
                        {'}'}
                        {'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"configuration": [{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}"type": "QueenBed",{'\n'}
                        {'                                        '}"size": "Queen",
                        {'\n'}
                        {'                                        '}"quantity": 2{'\n'}
                        {'                                    '}
                        {'}'}
                        {'\n'}
                        {'                                '}]{'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}"cancel_penalties": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"start":
                        "2023-01-17T16:00:00.000-05:00",{'\n'}
                        {'                                '}"end": "2024-01-17T17:00:00.000-05:00",
                        {'\n'}
                        {'                                '}"percent": "100%",{'\n'}
                        {'                                '}"currency": "USD"{'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"occupancy_pricing": {'{'}
                        {'\n'}
                        {'                            '}"2-9,4": {'{'}
                        {'\n'}
                        {'                                '}"nightly": [{'\n'}
                        {'                                    '}[{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}"type":
                        "tax_and_service_fee",{'\n'}
                        {'                                            '}"value": "24.81",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}"type": "base_rate",{'\n'}
                        {'                                            '}"value": "144.49",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}[{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}"type":
                        "tax_and_service_fee",{'\n'}
                        {'                                            '}"value": "24.81",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}"type": "base_rate",{'\n'}
                        {'                                            '}"value": "144.49",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}]{'\n'}
                        {'                                '}],{'\n'}
                        {'                                '}"totals": {'{'}
                        {'\n'}
                        {'                                    '}"exclusive": {'{'}
                        {'\n'}
                        {'                                        '}
                        "billable_currency": {'{'}
                        {'\n'}
                        {'                                            '}"value": "288.98",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        "request_currency": {'{'}
                        {'\n'}
                        {'                                            '}"value": "288.98",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}"inclusive": {'{'}
                        {'\n'}
                        {'                                        '}
                        "billable_currency": {'{'}
                        {'\n'}
                        {'                                            '}"value": "338.60",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        "request_currency": {'{'}
                        {'\n'}
                        {'                                            '}"value": "338.60",{'\n'}
                        {'                                            '}"currency": "USD"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}
                        {'}'}
                        {'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}
                        {'}'}
                        {'\n'}
                        {'                '}]{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"links": {'{'}
                        {'\n'}
                        {'            '}"additional_rates": {'{'}
                        {'\n'}
                        {'                '}"method": "GET",{'\n'}
                        {'                '}"href":
                        "/v3/properties/1000446/availability?token=REhZAQsABAoHQhIKW0ZADFYCahJRTQoENTJ4d3F1L3codEBBUF8BEUYNVwNrFVxDSwZQWRZUEwhVFBFcXRYQQFFQUkFEWl5SaBZdAQkNBwAOBwBQA0lWBQADHQIFCwUVCFZTBRpRAAYBB10HAloBVF1ARgxFUmYRShNWC0AUUgBQQllcXlRfO1VKCRVHBEIVVgJaRBJZD1sYCFMfDUNRcQETURAVQQ1ZUBNuFVFAR1sOXm4LBgsGVVUBUwYIUx4BCgIAGlAACgpMVgkBUUsMDQsJVFEPAQVVBwMWF1NYAEA6AVoFCwtVDV5PBlNHDEUGHkddF0RaWw1rD1FYVwEDXQNdDFBOVgRUUksFBVBbSA0AAlQVVwQADVYGVgBaAF0HFgBPAFhHQwtaDwUfWARdVxRQVFJZAF0VM2VAS1BNAGtZFExdDQ0NFhBfEEpXBAkXA0MPBUhAWlxIQktZFgFvEVRQDD1bVxYIQwkBUwRCQVAOBBU6VAwQChcJDFpSDBYPWFdEAFpqW11bHUcFUVhVF1kRUAZvTQtUA1sLCQcHTglUHFcLYQhVRgclCVARVXIDCEsMXVQFVFUAClJuFABfXkBTRQ4QUF9AWRZGHGtXDlJdDGBmEgEEQlABDQYTWw5dUw9fXQpTA1EMGVRQGQkFR0kHRxFfUks6QxFcUF0KVjtQUg0FAQUFVA4eBRdGE1VdWhgEZDF8R1UARwpXQA8NVWpWWgQIWwdYCFEXBVxWV1kORUVfUAZQVxwEU0gADBV6W1IBXBdDVAVQBgoGAlAECgAJ"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"recommendations": {'{'}
                        {'\n'}
                        {'                '}"method": "GET",{'\n'}
                        {'                '}"href":
                        "/v3/properties/availability?token=REhZAQsABAoHQhIKW0ZADFYCahJRTQoENTJ4d3F1L3codEBBUF8BEUYNVwNrFVxDSwZQWRZUEwhVFBFcXRYQQFFQUkFEWl5SaBZdAQkNBwAOBwBQA0lWBQADHQIFCwUVCFZTBRpRAAYBB10HAloBVF1ARgxFUmYRShNWC0AUUgBQQllcXlRfO1VKCRVHBEIVVgJaRBJZD1sYCFMfDUNRcQETURAVQQ1ZUBNuFVFAR1sOXm4LBgsGVVUBUwYIUx4BCgIAGlAACgpMVgkBUUsMDQsJVFEPAQVVBwMWF1NYAEA6AVoFCwtVDV5PBlNHDEUGHkddF0RaWw1rD1FYVwEDXQNdDFBOVgRUUksFBVBbSA0AAlQVVwQADVYGVgBaAF0HFglWDVNHUQVQXF1XGTBgFhNQR1I7CkNMD1kIBBdKCkFEB10JEAJAWQcdFlBbERIXA0cDPhVfU11nB1ZNDBANUB5CAw5dSzwDWUJaFFsKX1QMFVsNXhYDDzoJDFtORAVXXl1CBEJQUGxDDQwHCQQAVwtIBFAdCFptV1ccCnQEVx1VcFMCGwBdUwRTDVUHVmkQXwxZEAFHXkdSVhdaRhRPbVdZU1YLZmMTUgNEDFAJURBbWVBWXw0LDwtVAgIYCFcVAVMQQ1YTRw1dRjsRRldUCFUDagxVCg9UA1UDDxIFRhZLU15QSQhmN3MeCwNGClVHUA9ebgFQAFYPUA0PBEAAWlBWWQoTQV8GBVMFSwQCGQNYFkMHBFMQBl9XBzpBR1xJVkUWTjtfXQVQBAkDAFIDH3pYB1ZTQkYOCQYEVQsEXAJSVgc="
                        {'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"score": 240{'\n'}
                        {'    '}
                        {'}'}
                        {'\n'}]
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <hr />
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-Design">Design</h2>
              <p />
              <p />
              <p />
              <p />
              <hr />
              <h2 id="FRD-ExpediaIntegration-Availability-MVP1-Documentation">Documentation</h2>
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
                <a href="/src/attachments/595132418/595132425.json">
                  RCI - XML 4.0.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/595132428.png">RCI_B2B_Flow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/595132431.png">image-20231205-123425.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/595132434.png">image-20231205-123414.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/595132437.xls">XML Super Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/595132440.xls">XML Prime Region Codes.xls</a>{' '}
                (application/vnd.ms-excel)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/594935966.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/594968679.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/594804824.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/594804839.png">AvailabilityFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/595197991.png">AvailabilityFlow.png</a> (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="/src/attachments/595132418/594968695.png">AvailabilityFlow.png</a> (image/png)
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

export default ExpediaIntegrationAvailability
