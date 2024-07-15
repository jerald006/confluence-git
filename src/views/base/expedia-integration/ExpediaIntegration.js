import React from 'react'

function ExpediaIntegration() {
  return (
    <>
      <title>XeniApp : Expedia Integration</title>
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
              <span id="title-text">XeniApp : Expedia Integration</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Jan 10,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206662111 {padding: 0px;}\ndiv.rbtoc1719206662111 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206662111 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206662111">
                <ul className="toc-indentation">
                  <li>
                    <a href="#ExpediaIntegration-Objective">Objective</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#ExpediaIntegration-Priority">Priority</a>
                      </li>
                      <li>
                        <a href="#ExpediaIntegration-ExpediaAPI">Expedia API</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#ExpediaIntegration-APICredentials:">API Credentials:</a>
                          </li>
                          <li>
                            <a href="#ExpediaIntegration-Security:">Security:</a>
                          </li>
                          <li>
                            <a href="#ExpediaIntegration-Postmancollection">Postman collection</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#ExpediaIntegration-ProjectSummary">Project Summary</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#ExpediaIntegration-Phase1">Phase 1</a>
                          </li>
                          <li>
                            <a href="#ExpediaIntegration-Phase2">Phase 2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="ExpediaIntegration-Objective">Objective</h1>
              <p>Direct integration to fetch the hotel content from the vendor. </p>
              <hr />
              <h2 id="ExpediaIntegration-Priority">Priority</h2>
              <p>
                <span className="status-macro aui-lozenge aui-lozenge-error">HIGHEST</span>{' '}
              </p>
              <hr />
              <h2 id="ExpediaIntegration-ExpediaAPI">Expedia API</h2>
              <ul>
                <li>
                  <p>API Integration with EPS Rapid V3 (Expedia API product)</p>
                  <ul>
                    <li>
                      <p>
                        Documentation of Rapid API:{' '}
                        <a
                          className="external-link"
                          data-card-appearance="inline"
                          href="https://developers.expediagroup.com/docs/products/rapid"
                          rel="nofollow"
                        >
                          https://developers.expediagroup.com/docs/products/rapid
                        </a>{' '}
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 id="ExpediaIntegration-APICredentials:">
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
                        <p>apiKey</p>
                      </td>
                      <td className="confluenceTd">
                        <p>7jccsh7fcsa4istr92ua4843b3</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>shared_secret</p>
                      </td>
                      <td className="confluenceTd">
                        <p>dvo7h1kbpl6un</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>partner_point_of_sale</p>
                      </td>
                      <td className="confluenceTd">
                        <p>B2B_EAC_SA_HC_PKG_DIRECT</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>TestingURL</p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          <a className="external-link" href="https://test.ean.com" rel="nofollow">
                            <span className="legacy-color-text-inverse">https://test.ean.com</span>
                          </a>
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>ClientCodeID</p>
                      </td>
                      <td className="confluenceTd">
                        <p>612089</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 id="ExpediaIntegration-Security:">
                <strong>Security:</strong>
              </h3>
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
                    Authorization: EAN APIKey={'{'}
                    {'{'}apiKeyValue{'}'}
                    {'}'},Signature={'{'}
                    {'{'}shared_secret sha512Hash{'}'}
                    {'}'},timestamp={'{'}
                    {'{'}CurrentUnixTimeStamp))
                  </p>
                </div>
              </div>
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    GET
                    https://test.ean.com/v3/properties/availability?checkin=2024-01-12&amp;checkout=2024-01-14&amp;country_code=US&amp;currency=USD&amp;language=en-US&amp;occupancy=1&amp;property_id=11775754&amp;rate_plan_count=1&amp;sales_channel=website&amp;sales_environment=hotel_only:{' '}
                    {'{'}
                    {'\n'}
                    {'  '}"Network": {'{'}
                    {'\n'}
                    {'    '}"addresses": {'{'}
                    {'\n'}
                    {'      '}"local": {'{'}
                    {'\n'}
                    {'        '}"address": "172.17.0.2",{'\n'}
                    {'        '}"family": "IPv4",{'\n'}
                    {'        '}"port": 55972{'\n'}
                    {'      '}
                    {'}'},{'\n'}
                    {'      '}"remote": {'{'}
                    {'\n'}
                    {'        '}"address": "23.48.203.80",{'\n'}
                    {'        '}"family": "IPv4",{'\n'}
                    {'        '}"port": 443{'\n'}
                    {'      '}
                    {'}'}
                    {'\n'}
                    {'    '}
                    {'}'},{'\n'}
                    {'    '}"tls": {'{'}
                    {'\n'}
                    {'      '}"reused": true,{'\n'}
                    {'      '}"authorized": true,{'\n'}
                    {'      '}"authorizationError": null,{'\n'}
                    {'      '}"cipher": {'{'}
                    {'\n'}
                    {'        '}"name": "TLS_AES_256_GCM_SHA384",{'\n'}
                    {'        '}"standardName": "TLS_AES_256_GCM_SHA384",{'\n'}
                    {'        '}"version": "TLSv1.3"{'\n'}
                    {'      '}
                    {'}'},{'\n'}
                    {'      '}"protocol": "TLSv1.3",{'\n'}
                    {'      '}"ephemeralKeyInfo": {'{'}
                    {'\n'}
                    {'        '}"type": "ECDH",{'\n'}
                    {'        '}"name": "X25519",{'\n'}
                    {'        '}"size": 253{'\n'}
                    {'      '}
                    {'}'},{'\n'}
                    {'      '}"peerCertificate": {'{'}
                    {'}'}
                    {'\n'}
                    {'    '}
                    {'}'}
                    {'\n'}
                    {'  '}
                    {'}'},{'\n'}
                    {'  '}"Request Headers": {'{'}
                    {'\n'}
                    {'    '}"authorization": "EAN
                    apikey=7jccsh7fcsa4istr92ua4843b3,signature=58719a3df5552a2daf4324fc568b41c6aaa96b48705bb308c1a6aa8e454143a7d3f17365ef05a57670c18f0c804202d4e0b6ab8a91ed938404c0aa2cfbe34944,timestamp=1702488304",
                    {'\n'}
                    {'    '}"customer-ip": "5.5.5.5",{'\n'}
                    {'    '}"accept": "application/json",{'\n'}
                    {'    '}"accept-encoding": "gzip",{'\n'}
                    {'    '}"user-agent": "EPS Rapid Postman Collection - 2023-07-12",{'\n'}
                    {'    '}"cache-control": "no-cache",{'\n'}
                    {'    '}"postman-token": "b9102281-7b64-4c4d-a778-e83268a72451",
                    {'\n'}
                    {'    '}"host": "test.ean.com",{'\n'}
                    {'    '}"connection": "keep-alive"{'\n'}
                    {'  '}
                    {'}'},{'\n'}
                    {'  '}"Response Headers": {'{'}
                    {'\n'}
                    {'    '}"content-type": "application/json",{'\n'}
                    {'    '}"vary": [{'\n'}
                    {'      '}"Origin",{'\n'}
                    {'      '}"Access-Control-Request-Method",{'\n'}
                    {'      '}"Access-Control-Request-Headers",{'\n'}
                    {'      '}"accept-encoding"{'\n'}
                    {'    '}],{'\n'}
                    {'    '}"room-nights-requested": "2",{'\n'}
                    {'    '}"hotdays-responded": "2",{'\n'}
                    {'    '}"room-nights-responded": "2",{'\n'}
                    {'    '}"hotdays-requested": "2",{'\n'}
                    {'    '}"content-encoding": "gzip",{'\n'}
                    {'    '}"server": "EAN",{'\n'}
                    {'    '}"cache-control": "no-cache, no-store, max-age=0, must-revalidate",{'\n'}
                    {'    '}"pragma": "no-cache",{'\n'}
                    {'    '}"expires": "0",{'\n'}
                    {'    '}"x-content-type-options": "nosniff",{'\n'}
                    {'    '}"strict-transport-security": "max-age=31536000 ; includeSubDomains",
                    {'\n'}
                    {'    '}"x-frame-options": "DENY",{'\n'}
                    {'    '}"x-xss-protection": "0",{'\n'}
                    {'    '}"referrer-policy": "no-referrer",{'\n'}
                    {'    '}"transaction-id": "66f4a646-e90c-435d-b9a7-2635073142a8",{'\n'}
                    {'    '}"region": "us-west-2",{'\n'}
                    {'    '}"rate-limit-day-remaining": "100",{'\n'}
                    {'    '}"rate-limit-day-reset": "1702425600000",{'\n'}
                    {'    '}"rate-limit-reduction-status": "inactive",{'\n'}
                    {'    '}"content-length": "2956",{'\n'}
                    {'    '}"date": "Wed, 13 Dec 2023 17:25:08 GMT",{'\n'}
                    {'    '}"connection": "keep-alive"{'\n'}
                    {'  '}
                    {'}'},{'\n'}
                    {'  '}"Response Body": "[{'{'}
                    \"property_id\":\"11775754\",\"status\":\"available\",\"rooms\":[
                    {'{'}\"id\":\"230410389\",\"room_name\":\"Honeymoon Room
                    (#Test-Only#Partner:Connect)\",\"rates\":[{'{'}
                    \"id\":\"276305852\",\"status\":\"available\",\"available_rooms\":2300,\"refundable\":false,\"member_deal_available\":true,\"sale_scenario\":
                    {'{'}
                    \"package\":false,\"member\":false,\"corporate\":false,\"distribution\":false
                    {'}'},\"merchant_of_record\":\"expedia\",\"amenities\":{'{'}
                    \"1073742857\":{'{'}\"id\":\"1073742857\",\"name\":\"Breakfast for 1\"{'}'}
                    ,\"1073742858\":{'{'}
                    \"id\":\"1073742858\",\"name\":\"Complimentary green fees\"{'}'}
                    ,\"1073742617\":{'{'}\"id\":\"1073742617\",\"name\":\"Disney park tickets\"{'}'}
                    ,\"2202\":{'{'}\"id\":\"2202\",\"name\":\"VIP line access to nightclub(s)\"{'}'}
                    ,\"2199\":{'{'}
                    \"id\":\"2199\",\"name\":\"Welcome gift upon arrival\"{'}'}
                    ,\"2193\":{'{'}\"id\":\"2193\",\"name\":\"Continental breakfast for 2\"{'}'}
                    ,\"2192\":{'{'}\"id\":\"2192\",\"name\":\"Free WiFi\"{'}'}
                    {'}'},\"links\":{'{'}\"payment_options\":{'{'}
                    \"method\":\"GET\",\"href\":\"/v3/properties/11775754/payment-options?token=REhZAQsABAoHQhMHUlNCF1ELUj1DVhdLBQMES1REClxLQg5cRR8WBlIBSxZdCFRpTQxRWVIDBVVQD1YCHwMPAlcbAwADVx1XDgMDSAYCUgMIBgYEAFYECh8IVURWUAdWRDtZVWgTVgBXRgBccWBiJH0vdENSQkoRXA5WRGsVVhdKX19db1xXWQReXgYMWQAGFAUKBlIVVQ9RVExTV1ZQH1YDBlcEVAYFUwAGURJQQUEVX1wHEGkLEwwBTFAfAB0MFUQHRBdfVlY-XV0OVQcHDQwDBAEVAVdRUhkEBgNXSAoBBwZJXVYBV1JZAlUBUlcCHkdXEUVQUV5GB0UMAhoVUAoUEkcWQkUPXgNDOVtJAEcARQhWAmhbV1NXCV4vcmoneCR5NxJVVQxQE1lNUQFsRAhcVgpWVQELSwdUFAAKMQUBQQt1UFYVAyIAXRYAVg1QUAdRWFBpFFBXEVdMEB1vAldVB19ta0UDVkRaAglUFFIKBAUOWAxbUVVUVhoHU08DAh5ABERBWlZFOxEQW1BZCV06XAYND1MJUFYAH1ZBEUoDXwVKCGw3JxIHUQFXDVxDTVgHVFYBTlEAFFMAFBVDQkRaXlZEbFlRClAAQ3dcBFVTQkBYCVdVBQhUAQcFCFc=\"
                    {'}'}
                    {'}'},\"bed_groups\":{'{'}\"37563\":{'{'}
                    \"id\":\"37563\",\"description\":\"4 King Beds\",\"links\":{'{'}
                    \"price_check\":{'{'}
                    \"method\":\"GET\",\"href\":\"/v3/properties/11775754/rooms/230410389/rates/276305852?token=F~OjogZBwwUV0aMTJQNmNjXzJXBVAEFFIIS1cLez8GUwpSHFYCGAhQKTcxaiBmQgBQAQENXFQATgUCDlIZBlEGUxlXVAMFHlMDA1BWBFAFB1cPBm8RVQVXBgxWVgIYCAIKVkkCUQYCHlpcUVBMDAsDVwgHVAEEAF8EUWUFBwRQA11LMgUDCQVJZQeyZ2ME8zE2ClYMB1GiYDNVFSpbWgFDcFBRQcdnGjlPFxVIFlERDhAqWV8FIFMGQR0WEQxLUBEDEXwLWQMUFRoQQVhdQA9BQBsKVkhlgzJhBgD6ZTYNSwJUgjNljWQ0kWI56zM19TNioDY5xDUynmEQUAMDUlZQDFNJUQ1TURhXBFNVS1YABAJMA1cLUAcBCwYGVwJahTp6AlUFUBkDAk8EUmwIA18BBVsBCxlQUgoNVAJRAARj3zY0EgvF33aj\"
                    {'}'}
                    {'}'},\"configuration\":[{'{'}
                    \"type\":\"KingBed\",\"size\":\"King\",\"quantity\":4{'}'}]{'}'}
                    {'}'},\"cancel_penalties\":[{'{'}
                    \"start\":\"2023-12-12T09:25:08.465-08:00\",\"end\":\"2024-01-12T10:00:00.000-08:00\",\"percent\":\"100%\",\"currency\":\"USD\"
                    {'}'}],\"occupancy_pricing\":{'{'}\"1\":{'{'}\"nightly\":[[{'{'}
                    \"type\":\"tax_and_service_fee\",\"value\":\"0.18\",\"currency\":\"USD\"
                    {'}'},{'{'}
                    \"type\":\"base_rate\",\"value\":\"4.25\",\"currency\":\"USD\"
                    {'}'}],[{'{'}
                    \"type\":\"tax_and_service_fee\",\"value\":\"0.18\",\"currency\":\"USD\"
                    {'}'},{'{'}
                    \"type\":\"base_rate\",\"value\":\"4.27\",\"currency\":\"USD\"
                    {'}'}]],\"stay\":[{'{'}
                    \"type\":\"tax_and_service_fee\",\"value\":\"0.06\",\"currency\":\"USD\"
                    {'}'},{'{'}
                    \"type\":\"property_fee\",\"value\":\"0.17\",\"currency\":\"USD\"
                    {'}'}],\"fees\":{'{'}\"mandatory_fee\":{'{'}
                    \"request_currency\":{'{'}
                    \"value\":\"0.01\",\"currency\":\"USD\"{'}'}
                    ,\"billable_currency\":{'{'}
                    \"value\":\"0.33\",\"currency\":\"THB\"{'}'}
                    {'}'},\"resort_fee\":{'{'}\"request_currency\":{'{'}
                    \"value\":\"0.98\",\"currency\":\"USD\"{'}'}
                    ,\"billable_currency\":{'{'}
                    \"value\":\"35.00\",\"currency\":\"THB\"{'}'}
                    {'}'}
                    {'}'},\"totals\":{'{'}\"strikethrough\":{'{'}
                    \"request_currency\":{'{'}
                    \"value\":\"9.36\",\"currency\":\"USD\"{'}'}
                    ,\"billable_currency\":{'{'}
                    \"value\":\"9.36\",\"currency\":\"USD\"{'}'}
                    {'}'},\"exclusive\":{'{'}\"request_currency\":{'{'}
                    \"value\":\"8.52\",\"currency\":\"USD\"{'}'}
                    ,\"billable_currency\":{'{'}
                    \"value\":\"8.52\",\"currency\":\"USD\"{'}'}
                    {'}'},\"inclusive\":{'{'}\"request_currency\":{'{'}
                    \"value\":\"9.11\",\"currency\":\"USD\"{'}'}
                    ,\"billable_currency\":{'{'}
                    \"value\":\"9.11\",\"currency\":\"USD\"{'}'}
                    {'}'},\"inclusive_strikethrough\":{'{'}\"request_currency\":
                    {'{'}\"value\":\"9.74\",\"currency\":\"USD\"{'}'}
                    ,\"billable_currency\":{'{'}
                    \"value\":\"9.74\",\"currency\":\"USD\"{'}'}
                    {'}'},\"property_fees\":{'{'}\"request_currency\":{'{'}
                    \"value\":\"0.99\",\"currency\":\"USD\"{'}'}
                    ,\"billable_currency\":{'{'}
                    \"value\":\"35.33\",\"currency\":\"THB\"{'}'}
                    {'}'}
                    {'}'}
                    {'}'}
                    {'}'},\"promotions\":{'{'}\"deal\":{'{'}
                    \"id\":\"409103524\",\"description\":\"Book early and save 9%\"
                    {'}'},\"value_adds\":{'{'}\"301303\":{'{'}
                    \"id\":\"301303\",\"description\":\"Free mini bar per
                    day\",\"category\":\"food_and_beverage\",\"offer_type\":\"free\",\"frequency\":\"per_day\"
                    {'}'},\"301304\":{'{'}\"id\":\"301304\",\"description\":\"10% roundtrip airport
                    transfer discount for 3 (on
                    request)\",\"category\":\"service\",\"offer_type\":\"discount\",\"frequency\":\"per_stay\",\"person_count\":3
                    {'}'},\"301305\":{'{'}\"id\":\"301305\",\"description\":\"1 Free tour for 2 per
                    stay\",\"category\":\"activity\",\"offer_type\":\"free\",\"frequency\":\"per_stay\",\"person_count\":2
                    {'}'}
                    {'}'}
                    {'}'}
                    {'}'}]{'}'}],\"links\":{'{'}\"additional_rates\":{'{'}
                    \"method\":\"GET\",\"href\":\"/v3/properties/11775754/availability?token=REhZAQsABAoHQhIKW0ZADFYCahJRTQoENTJ4d3F1L3codEBBUF8BEUYNVwNrFVxDSwZQWRZUEwhVFBFcXRYQQFFQUkFEWl5SaBZdAQkCV1AMUAMBAkkACwkGHQIGDQIVUl1XBBpTBVANBFNSBQwAAAFARgxFUmYRShNWC0AUUgBQQllcXlRfO1VKCRVHBEIVVgJaRBJZD1sYCFAUVxMQRlpYVxc5RgdHRgheCGtaUA9SVgkGWg5SVhxQUVIBGAcOA1ZPVgcGChUCAg0BVgdRCF9RVQIeQlIPUUdvB1pVC10ADg8TAAdDCBddRUJRFkIKV1pnDVMOVQIGUgBWAANLCAFWUhlXUAQAGl9VAwAUXQZQB1BZBFMDD1FTQwYaVFQRQwxYDQkUXANbBk1YUwAOVQ8cZmRCF1JMA2kJSUVQCloLQktbFxFTVV5CBEhdBRkWClwWRxdSRlZnFFVZDDtTDk1fFl8KDVNARFVfA0c7V18UCBQKXw8DDRFbClhDBw5tX1ZcHBBSUV1SFgAWUVJvEVEIUF8CCVAKS1cLFAQHNwlRFFVyBwxBUHVUAUoAUQoDC1ECXVFvRQdYVRZRQFsQUVtDWUdESm9WWAZRWGFnR1NZQVxRCVRDUVEAU11cVlsKAFYCHgdQHlIKEhQARkxcBEs5RRdeUVAJVjxaUglQAlQPBgkVU0BBFlJWBRsJNGN3HwxYQwldFVEPUj5RXAcNXFBZD1VAVgpRVgpeE0AOBgJTBBxSUxtTVxd3CgBSXkBMXgpQAVwECw5SAAAH\"
                    {'}'},\"recommendations\":{'{'}
                    \"method\":\"GET\",\"href\":\"/v3/properties/availability?token=REhZAQsABAoHQhIKW0ZADFYCahJRTQoENTJ4d3F1L3codEBBUF8BEUYNVwNrFVxDSwZQWRZUEwhVFBFcXRYQQFFQUkFEWl5SaBZdAQkCV1AMUAMBAkkACwkGHQIGDQIVUl1XBBpTBVANBFNSBQwAAAFARgxFUmYRShNWC0AUUgBQQllcXlRfO1VKCRVHBEIVVgJaRBJZD1sYCFAUVxMQRlpYVxc5RgdHRgheCGtaUA9SVgkGWg5SVhxQUVIBGAcOA1ZPVgcGChUCAg0BVgdRCF9RVQIeQlIPUUdvB1pVC10ADg8TAAdDCBddRUJRFkIKV1pnDVMOVQIGUgBWAANLCAFWUhlXUAQAGl9VAwAUXQZQB1BZBFMDD1FTQw8DWV8RUQJSXlFcHTdmR0pYQABsXxFFWlgKWBVLCUMUWlQEF1VGDVwZEQtfQEVCBExRPkQJA105AgpGXEcFVR9LAwhVEmdUDBRRSgwIWlFdEgkMXUUHDTkKXw4fRQIDDFJFAxZXVGdEDFtQCQEHVlJPBQQdVAsxBFUVCiMLU0MKeAUMTQxRCFMBAQ5dVm5CXw1YElZEBENWCxFbFxNIZgFbVgMLZ2cQUlJGWlQIB0RXDVFXCl9WDAcFBlBIAghIAQQTSAdKRApTQWgRQQxeXQgEa1FWXA9XBVMBDh8GRhFBU1oFSllsZXQVXVRBD1JMDwxTPlNbWA9XVA4FUR4CXQRRXwkWRggHAldSGFIFGFAFQEZWUlcTVV8BB2kSEV5EBxdFTGxQVwpTBlMBDA9UAB9wXANWUkpFDwgJBAtXBgQGVgAF\"
                    {'}'}
                    {'}'},\"score\":0{'}'}]"{'\n'}
                    {'}'}
                    {'\n'}
                  </pre>
                </div>
              </div>
              <p />
              <h3 id="ExpediaIntegration-Postmancollection">Postman collection</h3>
              <p className="media-group">
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/594935911/595525710.json"
                    data-nice-type="null"
                    data-file-src="/wiki/download/attachments/594935911/EPS%20Rapid%20v3.postman_collection.json?version=1&modificationDate=1702554737196&cacheVersion=1&api=v2"
                    data-linked-resource-id={595525710}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={594935911}
                    data-linked-resource-default-alias="EPS Rapid v3.postman_collection.json"
                    data-mime-type="application/json"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="fb398d18-7ebf-4891-9b7d-c8f4f1fba4be"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/594935911/595525710" height={250} />
                  </a>
                </span>
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/594935911/595492899.json"
                    data-nice-type="null"
                    data-file-src="/wiki/download/attachments/594935911/ExpediaTest.postman_environment.json?version=1&modificationDate=1702554746357&cacheVersion=1&api=v2"
                    data-linked-resource-id={595492899}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={594935911}
                    data-linked-resource-default-alias="ExpediaTest.postman_environment.json"
                    data-mime-type="application/json"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="86e18afd-31e0-46aa-b6ca-485908c954e6"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/594935911/595492899" height={250} />
                  </a>
                </span>
              </p>
              <hr />
              <h2 id="ExpediaIntegration-ProjectSummary">Project Summary</h2>
              <h3 id="ExpediaIntegration-Phase1">Phase 1</h3>
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
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5135"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5135"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5135
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5163"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5163"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5163
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5166"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5166"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5166
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5168"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5168"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5168
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5173"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5173"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5173
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5190"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5190"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5190
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                    </tr>
                  </tbody>
                </table>
              </div>
              <p />
              <h3 id="ExpediaIntegration-Phase2">Phase 2</h3>
              <div className="table-wrap">
                <table
                  data-table-width={1288}
                  data-layout="default"
                  data-local-id="dc8124ba-7e7a-4ffb-93dc-2982f73af74a"
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
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5135"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5135"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5135
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5268"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5268"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5268
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>
                          <span
                            className="confluence-jim-macro jira-issue"
                            data-jira-key="X3UI-5279"
                            data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_594935911_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                          >
                            <a
                              href="https://xeni-workspace.atlassian.net/browse/X3UI-5279"
                              className="jira-issue-key"
                            >
                              <span className="aui-icon aui-icon-wait issue-placeholder" />
                              X3UI-5279
                            </a>
                            -<span className="summary">Getting issue details...</span>
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
                  <input type="hidden" name="treePageId" defaultValue={594935911} />
                  <input type="hidden" name="noRoot" defaultValue="false" />
                  <input type="hidden" name="rootPageId" defaultValue={594935911} />
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
                    <input type="hidden" name="ancestorId" defaultValue={594935911} />
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
                <a href="attachments/594935911/595525710.json">
                  EPS Rapid v3.postman_collection.json
                </a>{' '}
                (application/json)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/594935911/595492899.json">
                  ExpediaTest.postman_environment.json
                </a>{' '}
                (application/json)
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

export default ExpediaIntegration
