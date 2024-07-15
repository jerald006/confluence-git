import React from 'react'

function CacheCruisesShipData() {
  return (
    <>
      <title>XeniApp : Cache cruise Ship data.</title>
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
              <span id="title-text">XeniApp : Cache cruise Ship data.</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Apr 12,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <hr />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206711268 {padding: 0px;}\ndiv.rbtoc1719206711268 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206711268 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206711268">
                <ul className="toc-indentation">
                  <li>
                    <a href="#CachecruiseShipdata.-Context">Context</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#CachecruiseShipdata.-Authentication">Authentication</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#CachecruiseShipdata.-Requestexample">Request example</a>
                          </li>
                          <li>
                            <a href="#CachecruiseShipdata.-ResponseExample">Response Example</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#CachecruiseShipdata.-CacheJob.">Cache Job.</a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#CachecruiseShipdata.-OrchestrationLogic">
                              Orchestration Logic
                            </a>
                            <ul className="toc-indentation">
                              <li>
                                <a href="#CachecruiseShipdata.-Step1:Startpoint-Datacachefromhttps://fusionapi.traveltek.net/0.9/interface.pl">
                                  Step 1: Start point - Data cache from
                                  https://fusionapi.traveltek.net/0.9/interface.pl
                                </a>
                              </li>
                              <li>
                                <a href="#CachecruiseShipdata.-Step2:GetauthorizationFusionAPI">
                                  Step 2: Get authorization Fusion API
                                </a>
                              </li>
                              <li>
                                <a href="#CachecruiseShipdata.-Step3:GetShipDetails">
                                  Step 3: Get Ship Details
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#CachecruiseShipdata.-StoreData">Store Data</a>
                      </li>
                      <li>
                        <a href="#CachecruiseShipdata.-XeniAPI-Cruise">Xeni API - Cruise</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <p />
              <hr />
              <h1 id="CachecruiseShipdata.-Context">Context</h1>
              <p>
                To improve performance, cache the static data per each ship of the enabled cruise
                line for Xeni.
              </p>
              <hr />
              <h2 id="CachecruiseShipdata.-Authentication">Authentication</h2>
              <p>
                The first step to consume the FusionAPI of TravelTek vendor is to get the{' '}
                <code>accessToken</code> based on Xeni credentials:{' '}
                <a
                  href="Cruises-Integration_601980932.html"
                  data-linked-resource-id={601980932}
                  data-linked-resource-version={11}
                  data-linked-resource-type="page"
                >
                  Cruises Integration
                </a>{' '}
                (API Details)
              </p>
              <h3 id="CachecruiseShipdata.-Requestexample">Request example</h3>
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    curl --location 'https://fusionapi.traveltek.net/2.1/json/token.pl' \{'\n'}
                    --header 'Content-Type: application/x-www-form-urlencoded' \{'\n'}--header
                    'Accept: application/json; charset=utf-8' \{'\n'}
                    --header 'Authorization: Basic eGVuaTp4czgxZHM1NA==' \{'\n'}
                    --data-urlencode 'scope=portal' \{'\n'}--data-urlencode
                    'grant_type=client_credentials'
                  </pre>
                </div>
              </div>
              <p />
              <h3 id="CachecruiseShipdata.-ResponseExample">Response Example</h3>
              <div className="code panel pdl" style={{ borderWidth: 1 }}>
                <div className="codeContent panelContent pdl">
                  <pre
                    className="syntaxhighlighter-pre"
                    data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                    data-theme="Confluence"
                  >
                    {'{'}
                    {'\n'}
                    {'    '}"expires_in": "7200",{'\n'}
                    {'    '}"access_token": "97218e52p17f8-4e4c-b05f-c0c3a368bac9",
                    {'\n'}
                    {'    '}"token_type": "bearer"{'\n'}
                    {'}'}
                  </pre>
                </div>
              </div>
              <p />
              <p>
                <strong>access_token</strong>: It is required to pass to the session payloads as the
                value of the param <code>requestid</code>
              </p>
              <p>
                <strong>expired_at</strong>: The time of access_token live. Expressed in Seconds.
                Based on this it is required to create a logic of access_token refresh and control
                the user session as well.
              </p>
              <hr />
              <h2 id="CachecruiseShipdata.-CacheJob.">Cache Job.</h2>
              <p>
                Based on the static data of each Cruise line enable for Xeni, it contains each
                shipId by Cruise line. <br />
                To get the static data, it is required to iterate the /cruiseshipdetails.pl method.
              </p>
              <h3 id="CachecruiseShipdata.-OrchestrationLogic">Orchestration Logic</h3>
              <h4 id="CachecruiseShipdata.-Step1:Startpoint-Datacachefromhttps://fusionapi.traveltek.net/0.9/interface.pl">
                Step 1: Start point - Data cache from{' '}
                <a
                  className="external-link"
                  href="https://fusionapi.traveltek.net/0.9/interface.pl"
                  rel="nofollow"
                >
                  <span className="legacy-color-text-inverse">
                    https://fusionapi.traveltek.net/0.9/interface.pl
                  </span>
                </a>
              </h4>
              <div id="expander-1012341850" className="expand-container">
                <div id="expander-control-1012341850" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Static: Carnival Cruise line - Ships</span>
                </div>
                <div id="expander-content-1012341850" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {' '}
                        &lt;line id="8"
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
                        {'        '}&lt;/line&gt;
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <h4 id="CachecruiseShipdata.-Step2:GetauthorizationFusionAPI">
                Step 2: Get authorization Fusion API
              </h4>
              <div id="expander-2006281527" className="expand-container">
                <div id="expander-control-2006281527" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Get Token Request</span>
                </div>
                <div id="expander-content-2006281527" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location 'https://fusionapi.traveltek.net/2.1/json/token.pl' \{'\n'}
                        --header 'Content-Type: application/x-www-form-urlencoded' \{'\n'}--header
                        'Accept: application/json; charset=utf-8' \{'\n'}--header 'Authorization:
                        Basic eGVuaTp4czgxZHM1NA==' \{'\n'}--data-urlencode 'scope=portal' \{'\n'}
                        --data-urlencode 'grant_type=client_credentials'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-1932417372" className="expand-container">
                <div id="expander-control-1932417372" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Get Token Response</span>
                </div>
                <div id="expander-content-1932417372" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        "access_token":"87cb132epaf04-4f66-963c-d96fe398b90a","token_type":"bearer","expires_in":"7200"
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <h4 id="CachecruiseShipdata.-Step3:GetShipDetails">Step 3: Get Ship Details</h4>
              <p>
                <strong>Params:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <code>requestId</code>: AccessToken
                  </p>
                </li>
                <li>
                  <p>
                    <code>language</code>: Default 'en'
                  </p>
                </li>
                <li>
                  <p>
                    <code>shipid</code>: shipid from &lt;Ships&gt;&lt;ship&gt; id
                  </p>
                </li>
              </ul>
              <p />
              <div id="expander-121972016" className="expand-container">
                <div id="expander-control-121972016" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET: /cruiseshipdetails.pl Request</span>
                </div>
                <div id="expander-content-121972016" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location
                        'https://fusionapi.traveltek.net/2.1/json/cruiseshipdetails.pl?requestid=87cb132epaf04-4f66-963c-d96fe398b90a&amp;language=en&amp;shipid=1196'
                        \{'\n'}--header 'Accept: application/json; charset=utf-8'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1438016974" className="expand-container">
                <div id="expander-control-1438016974" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">GET: /cruiseshipdetails.pl Response</span>
                </div>
                <div id="expander-content-1438016974" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"errors": [],{'\n'}
                        {'    '}"meta": {'{'}
                        {'\n'}
                        {'        '}"criteria": {'{'}
                        {'\n'}
                        {'            '}"codetocruiseid": 0,{'\n'}
                        {'            '}"paxquerystring": "",{'\n'}
                        {'            '}"paxtotal": 0,{'\n'}
                        {'            '}"ratecodedetails": [],{'\n'}
                        {'            '}"ratecodes": []{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"defaultcurrency": {'{'}
                        {'}'},{'\n'}
                        {'        '}"rows": 1{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"results": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"adultsonly": "N",{'\n'}
                        {'            '}"atolnumber": "",{'\n'}
                        {'            '}"cabintypes": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "1A",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "E7D994",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Twin bed and one upper pullman. Desk
                        and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.\r\n",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1631711074.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Upper/Lower",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1631711074.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4A",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "00AD86",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606848.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606848.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4B",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "FCDEEB",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606970.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606970.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4C",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "FBA61C",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606975.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606975.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4D",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "DF93A3",{'\n'}
                        {'                    '}"deckid": 4028,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606980.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606980.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4E",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "C4DF9C",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606985.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606985.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4F",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "B4DFF4",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606989.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606989.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4G",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "EBD201",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606995.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606995.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4H",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "9AD3B7",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607000.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607000.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4J",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "B44A6F",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Picture window facing public
                        observation deck.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607065.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom (Obstructed Views)",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607065.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4S",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "74A534",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. Ample closet
                        space.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa reservations,
                        free fitness classes, unlimited access to the thermal suites, exclusive
                        discounts on treatments during port days and more.\r\n\r\nUnique welcome
                        ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal Suites and
                        Thalassotherapy Pool\r\nComplimentary scrub kit to use in our Thermal
                        Suites\r\nTwo complimentary fitness classes (per guest)\r\nComplimentary
                        body composition analysis\r\nExclusive discounts on treatments during port
                        days\r\nCloud 9 Spa bathrobes and slippers\r\nUpgraded Elemis in-stateroom
                        toiletries\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607502.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Interior",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607502.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6A",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "F15923",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets. Picture
                        window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607299.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean View Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607299.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6L",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "F9A980",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower plus separate washroom with sink and junior tub. 3 closets. Picture
                        window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607342.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607342.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6M",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "E7B220",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower plus separate washroom with sink and junior tub. 3
                        closets. Picture window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607347.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607347.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6N",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "A75E4A",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), two
                        upper pullmans and single sofa bed. Privacy curtain. Sofa and coffee table.
                        Desk and seat. Full bathroom with shower plus separate washroom with sink
                        and junior tub. 3 closets. Picture window.\r\n\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607355.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607355.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6S",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "7CADBA",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. Ample closet space. Picture window facing public observation
                        deck.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa reservations,
                        free fitness classes, unlimited access to the thermal suites, exclusive
                        discounts on treatments during port days and more.\r\n\r\nAmbulatory
                        Accessible Stateroom: This stateroom is designed for use by guests with
                        mobility limitations, who do not require the regular use of a wheelchair,
                        scooter or other similar assistive devices. For example, it is ideal for
                        guests who only use an assistive device (like a cane or walker) for
                        traversing longer distances, and who may benefit from certain accessible
                        features like grab bars, to assist with balance.\r\n\r\nUnique welcome
                        ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal Suites and
                        Thalassotherapy Pool\r\nComplimentary scrub kit to use in our Thermal
                        Suites\r\nTwo complimentary fitness classes (per guest)\r\nComplimentary
                        body composition analysis\r\nExclusive discounts on treatments during port
                        days\r\nCloud 9 Spa bathrobes and slippers\r\nUpgraded Elemis in-stateroom
                        toiletries\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607470.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Spa Ocean View Stateroom (Obstructed
                        View)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607470.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "7C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "C7B2D6",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private cove balcony with patio chairs
                        and table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival
                        Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and
                        drawer space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607514.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cove Balcony Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607514.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8A",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "BD55A0",{'\n'}
                        {'                    '}"deckid": 4028,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462280.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462280.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8B",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "FFD88F",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Desk and seat. Sofa and coffee table. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462281.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462281.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "F27180",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private balcony with patio chairs and table.\r\n\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462286.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462286.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8D",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "99B463",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011796.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011796.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8E",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "DCD3D0",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011803.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011803.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8F",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "B07588",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1606901923.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1606901923.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8G",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "ED1D30",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462347.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462347.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8M",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "A7A2A9",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private aft-facing extended balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607705.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Aft View Extended Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607705.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8N",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "C47C1E",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private aft-facing extended balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607727.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Aft View Extended Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607727.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8P",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "4E88C6",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. Ample closet space. Private balcony with patio
                        chairs and table.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa
                        reservations, free fitness classes, unlimited access to the thermal suites,
                        exclusive discounts on treatments during port days and more.\r\n\r\nUnique
                        welcome ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal
                        Suites and Thalassotherapy Pool\r\nComplimentary scrub kit to use in our
                        Thermal Suites\r\nTwo complimentary fitness classes (per
                        guest)\r\nComplimentary body composition analysis\r\nExclusive discounts on
                        treatments during port days\r\nCloud 9 Spa bathrobes and
                        slippers\r\nUpgraded Elemis in-stateroom toiletries\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013087.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Balcony",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013087.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8S",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "CCE3F1",{'\n'}
                        {'                    '}"deckid": 4034,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. Ample closet space. Private balcony with patio chairs and
                        table.\r\n\r\nUnique welcome ritual.\r\nPriority spa
                        reservations.\r\nUnlimited use of Thermal Suites and Hydrotherapy
                        Pool.\r\nComplimentary scrub kit to use in our Thermal Suites.\r\nTwo
                        complimentary fitness classes (per guest).\r\nComplimentary body composition
                        analysis.\r\nExclusive discounts on treatments during port days.\r\nCloud 9
                        Spa bathrobes and slippers.\r\nUpgraded Elemis in-stateroom
                        toiletries.\r\nDedicated room steward.\r\nSoft, cozy linens (Carnival
                        Comfort Collection).\r\nIn-room safe for valuables.\r\nPlenty of closet and
                        drawer space.\r\nTelevision.\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013332.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Spa Balcony Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013332.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "9C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "EC037C",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private wraparound balcony with patio chairs and table.\r\n\r\nDedicated
                        room steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room
                        safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607775.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Premium Vista Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607775.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "BL",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "Balcony staterooms were designed for
                        maximum sea breeze and the most stunning views, so look to a balcony if
                        you're looking to cruise aboard Carnival Breeze. Any time you're in your
                        room, you're just steps away from your own personal outdoor oasis, featuring
                        the sort of sea view you can also feel.\r\n\r\n\r\n\r\nDedicated room
                        steward\r\nCarnival Comfort Collection® linens\r\nPlenty of closet and
                        drawer space\r\nIn-room safe for valuables\r\nTelevision\r\nStateroom
                        climate control\r\n",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880487.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880487.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "GS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "DE761B",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/bidet/double sinks. Walk-in dressing area with vanity
                        table, seat and ample closet space. Private large balcony with patio chairs
                        and table.\r\n\r\nPriority check-in and boarding\r\nPriority dinner
                        reservations for select specialty restaurants\r\nPriority main dining room
                        time assignment (Early, Late or Your Time Dining)\r\nPriority debarkation at
                        all ports\r\nTwo large bottles of water\r\nPillow-top
                        mattresses\r\nBathrobes\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607836.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Grand Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607836.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "IS",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "This is an affordable way to cruise
                        without leaving out the comfort or convenience! Great for curling up after a
                        long day of fun.\r\n\r\n\r\nDedicated room steward\r\nCarnival Comfort
                        Collection® linens\r\nPlenty of closet and drawer space\r\nIn-room safe for
                        valuables\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358611.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Inside Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358611.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "JS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "697921",{'\n'}
                        {'                    '}"deckid": 4031,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa, armchair and coffee table. Desk and seat. Full
                        bathroom with shower/whirlpool tub/double sinks. 2 large closets. Walk-in
                        dressing area with ample closet space. Private standard-size balcony with
                        obstructed view; patio chairs and table.\r\n\r\nPriority check-in and
                        boarding\r\nPriority dinner reservations for select specialty
                        restaurants\r\nPriority main dining room time assignment (Early, Late or
                        Your Time Dining)\r\nPriority debarkation at all ports\r\nTwo large bottles
                        of water\r\nPillow-top mattresses\r\nBathrobes\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608098.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Junior Suite(Obstructed View)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608098.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "OS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "00B1D2",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet
                        space. Private large balcony with patio chairs and table.\r\n\r\nPriority
                        check-in and boarding\r\nPriority dinner reservations for select specialty
                        restaurants\r\nPriority main dining room time assignment (Early, Late or
                        Your Time Dining)\r\nPriority debarkation at all ports\r\nTwo large bottles
                        of water\r\nPillow-top mattresses\r\nBathrobes\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608104.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608104.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "OV",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "A picture window gives you views of
                        scenery you won’t find anywhere on land, all from the comfort of your
                        stateroom.\r\n\r\nDedicated room steward\r\nCarnival Comfort Collection®
                        linens\r\nPlenty of closet and drawer space\r\nIn-room safe for
                        valuables\r\nTelevision\r\nStateroom climate control",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880549.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean View Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880549.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "PT",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "CFA8A5",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Two porthole windows.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608114.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Porthole",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608114.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "SS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "00AAAD",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet
                        space. Private large balcony with patio chairs and table.\r\n\r\nExclusive
                        Cloud 9 Spa amenities: Priority spa reservations, free fitness classes,
                        unlimited access to the thermal suites, exclusive discounts on treatments
                        during port days and more.\r\nNote: Exclusive amenities apply to 1st and 2nd
                        guests only; 3rd and 4th guests are not entitled to the exclusive
                        amenities.\r\n\r\nUnique welcome ritual.\r\nPriority spa
                        reservations.\r\nUnlimited use of Thermal Suites and Hydrotherapy
                        Pool.\r\nComplimentary scrub kit to use in our Thermal Suites.\r\nTwo
                        complimentary fitness classes (per guest).\r\nComplimentary body composition
                        analysis.\r\nExclusive discounts on treatments during port days.\r\nCloud 9
                        Spa bathrobes and slippers.\r\nUpgraded Elemis in-stateroom
                        toiletries.\r\nPriority check-in and boarding.\r\nPriority dinner
                        reservations for select specialty restaurants.\r\nPriority main dining room
                        time assignment (Early, Late or Your Time Dining).\r\nPriority debarkation
                        at all ports.\r\nTwo large bottles of water.\r\nPillow-top
                        mattresses.\r\nDedicated room steward.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608124.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608124.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "ST",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "Get all the comforts of home and
                        then some, with absolutely none of the hassles. Since your suite gives you
                        VIP status, you’re the priority when it comes to getting on and off the
                        ship. Plus, you’ll receive a ton of exclusive amenities making this the
                        ultimate way to cruise. Get comfy… stretch out, put your feet up, or just
                        spend time on your balcony — you’ve got one of our most spacious rooms.",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358917.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Suite - Guaranteed",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358917.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"code": "BR",{'\n'}
                        {'            '}"cruiseline": "Carnival Cruise Line",{'\n'}
                        {'            '}"decks": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 1",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4023,{'\n'}
                        {'                    '}"imageid": 72572,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057897.png",
                        {'\n'}
                        {'                    '}"name": "Deck 1 Riviera"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 2",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4024,{'\n'}
                        {'                    '}"imageid": 72568,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057879.png",
                        {'\n'}
                        {'                    '}"name": "Deck 2 Main"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 3",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4025,{'\n'}
                        {'                    '}"imageid": 72567,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057875.png",
                        {'\n'}
                        {'                    '}"name": "Deck 3 Lobby"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 4",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4026,{'\n'}
                        {'                    '}"imageid": 72569,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057883.png",
                        {'\n'}
                        {'                    '}"name": "Deck 4 Mezzanine"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 5",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4027,{'\n'}
                        {'                    '}"imageid": 72571,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057890.png",
                        {'\n'}
                        {'                    '}"name": "Deck 5 Promenade"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 6",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4028,{'\n'}
                        {'                    '}"imageid": 72575,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057918.png",
                        {'\n'}
                        {'                    '}"name": "Deck 6 Upper"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 7",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4029,{'\n'}
                        {'                    '}"imageid": 72565,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057868.png",
                        {'\n'}
                        {'                    '}"name": "Deck 7 Empress"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 8",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4030,{'\n'}
                        {'                    '}"imageid": 72576,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057923.png",
                        {'\n'}
                        {'                    '}"name": "Deck 8 Verandah"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 9",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4031,{'\n'}
                        {'                    '}"imageid": 72577,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057927.png",
                        {'\n'}
                        {'                    '}"name": "Deck 9 Vista"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 10",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4032,{'\n'}
                        {'                    '}"imageid": 72566,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057872.png",
                        {'\n'}
                        {'                    '}"name": "Deck 10 Lido"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 11",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4033,{'\n'}
                        {'                    '}"imageid": 72570,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057886.png",
                        {'\n'}
                        {'                    '}"name": "Deck 11 Panorama"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 12",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4034,{'\n'}
                        {'                    '}"imageid": 72574,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057915.png",
                        {'\n'}
                        {'                    '}"name": "Deck 12 Spa"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 14",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4035,{'\n'}
                        {'                    '}"imageid": 72564,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057864.png",
                        {'\n'}
                        {'                    '}"name": "Deck 14"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 15",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4036,{'\n'}
                        {'                    '}"imageid": 72573,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057901.png",
                        {'\n'}
                        {'                    '}"name": "Deck 15 Serenity"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"description": "On Carnival Breeze, fun-fan faves like
                        SportSquare, and mouth-watering dining spots like Cucina del Capitano, are
                        just the beginning of how this ship keeps the fun blazing.\r\n\r\nSpeaking
                        of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or
                        south-of-the-border taco goodness at BlueIguana Cantina. There’s always
                        family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the
                        Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint —
                        roadside-burger-shack style — featuring hot-off-the-grill burgers designed
                        by celebrity chef Guy Fieri!\r\n\r\nThere are many fish in the sea, and
                        Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked
                        exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And
                        to go just a little less refined, stop by Pizza Pirate for a hot slice, the
                        Carnival Deli for a true classic, or Guy’s Pig &amp; Anchor Bar-B-Que
                        Smokehouse to get a little messy with some signature — you guessed it — Guy
                        Fieri BBQ. On this ship, you just can’t get enough Guy!\r\n\r\nCarnival
                        Breeze has the whole family covered — with water, that is — with a
                        320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids
                        there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And
                        for the bigger people, there’s time to be spent doing blissfully nothing at
                        Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of
                        course.\r\n\r\nKeep the fun going once the sun’s done for the day — have a
                        truly moving experience at the multi-dimensional Thrill Theater, get your
                        lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist
                        Productions… or if you prefer to do your dancing on a dance floor, check out
                        Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail
                        concoctions made with ingredients a little less ordinary and flavors a lot
                        more interesting.\r\n\r\nIf you notice a bit of the outdoors inside, don’t
                        adjust your view. Carnival Breeze’s staterooms — and many of the public
                        spaces around the ship — feature a scintillating tropical décor and
                        contemporary furnishings that’ll transport you straight to warm Caribbean
                        bliss.",{'\n'}
                        {'            '}"descriptions": [],{'\n'}
                        {'            '}"facilities": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Food and Drink",{'\n'}
                        {'                    '}"categoryid": "1",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "136",{'\n'}
                        {'                            '}"facilitytypeid": "136",
                        {'\n'}
                        {'                            '}"name": "24-hour Room Service",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1181",{'\n'}
                        {'                            '}"facilitytypeid": "1181",
                        {'\n'}
                        {'                            '}"name": "Alchemy Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "237",{'\n'}
                        {'                            '}"facilitytypeid": "237",
                        {'\n'}
                        {'                            '}"name": "Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "267",{'\n'}
                        {'                            '}"facilitytypeid": "267",
                        {'\n'}
                        {'                            '}"name": "BBQ",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "589",{'\n'}
                        {'                            '}"facilitytypeid": "589",
                        {'\n'}
                        {'                            '}"name": "Bimini Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1185",{'\n'}
                        {'                            '}"facilitytypeid": "1185",
                        {'\n'}
                        {'                            '}"name": "BlueIguana Tequila Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1190",{'\n'}
                        {'                            '}"facilitytypeid": "1190",
                        {'\n'}
                        {'                            '}"name": "Carnival WaterWorks",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1629",{'\n'}
                        {'                            '}"facilitytypeid": "1629",
                        {'\n'}
                        {'                            '}"name": "Cucina del Capitano",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "194",{'\n'}
                        {'                            '}"facilitytypeid": "194",
                        {'\n'}
                        {'                            '}"name": "Dining Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1649",{'\n'}
                        {'                            '}"facilitytypeid": "1649",
                        {'\n'}
                        {'                            '}"name": "Fahrenheit 555 Steakhouse",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "674",{'\n'}
                        {'                            '}"facilitytypeid": "674",
                        {'\n'}
                        {'                            '}"name": "Lanai Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "753",{'\n'}
                        {'                            '}"facilitytypeid": "753",
                        {'\n'}
                        {'                            '}"name": "Lobby Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "196",{'\n'}
                        {'                            '}"facilitytypeid": "196",
                        {'\n'}
                        {'                            '}"name": "Piano Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "90",{'\n'}
                        {'                            '}"facilitytypeid": "90",
                        {'\n'}
                        {'                            '}"name": "Pizzeria",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1184",{'\n'}
                        {'                            '}"facilitytypeid": "1184",
                        {'\n'}
                        {'                            '}"name": "RedFrog Pub",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1186",{'\n'}
                        {'                            '}"facilitytypeid": "1186",
                        {'\n'}
                        {'                            '}"name": "RedFrog Rum Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "398",{'\n'}
                        {'                            '}"facilitytypeid": "398",
                        {'\n'}
                        {'                            '}"name": "Rising Tide Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1669",{'\n'}
                        {'                            '}"facilitytypeid": "1669",
                        {'\n'}
                        {'                            '}"name": "Sapphire Dining Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "115",{'\n'}
                        {'                            '}"facilitytypeid": "115",
                        {'\n'}
                        {'                            '}"name": "Sports Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1191",{'\n'}
                        {'                            '}"facilitytypeid": "1191",
                        {'\n'}
                        {'                            '}"name": "Sports Square",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "598",{'\n'}
                        {'                            '}"facilitytypeid": "598",
                        {'\n'}
                        {'                            '}"name": "Tequila/Tapas Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1003",{'\n'}
                        {'                            '}"facilitytypeid": "1003",
                        {'\n'}
                        {'                            '}"name": "The Atrium",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Fitness",{'\n'}
                        {'                    '}"categoryid": "4",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "218",{'\n'}
                        {'                            '}"facilitytypeid": "218",
                        {'\n'}
                        {'                            '}"name": "Fitness Center",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "148",{'\n'}
                        {'                            '}"facilitytypeid": "148",
                        {'\n'}
                        {'                            '}"name": "Gym",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "177",{'\n'}
                        {'                            '}"facilitytypeid": "177",
                        {'\n'}
                        {'                            '}"name": "Jogging Track",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1063",{'\n'}
                        {'                            '}"facilitytypeid": "1063",
                        {'\n'}
                        {'                            '}"name": "Wellness Centre",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Other",{'\n'}
                        {'                    '}"categoryid": "7",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1188",{'\n'}
                        {'                            '}"facilitytypeid": "1188",
                        {'\n'}
                        {'                            '}"name": "BlueIguana Cantina",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1182",{'\n'}
                        {'                            '}"facilitytypeid": "1182",
                        {'\n'}
                        {'                            '}"name": "Bonsai Sushi",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1441",{'\n'}
                        {'                            '}"facilitytypeid": "1441",
                        {'\n'}
                        {'                            '}"name": "Limelight Lounge",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "211",{'\n'}
                        {'                            '}"facilitytypeid": "211",
                        {'\n'}
                        {'                            '}"name": "Shops",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1440",{'\n'}
                        {'                            '}"facilitytypeid": "1440",
                        {'\n'}
                        {'                            '}"name": "The Fun Shops",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Relaxation",{'\n'}
                        {'                    '}"categoryid": "3",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1632",{'\n'}
                        {'                            '}"facilitytypeid": "1632",
                        {'\n'}
                        {'                            '}"name": "Beach Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1437",{'\n'}
                        {'                            '}"facilitytypeid": "1437",
                        {'\n'}
                        {'                            '}"name": "Cloud 9 Spa",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "188",{'\n'}
                        {'                            '}"facilitytypeid": "188",
                        {'\n'}
                        {'                            '}"name": "Sauna",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1",{'\n'}
                        {'                            '}"facilitytypeid": "1",{'\n'}
                        {'                            '}"name": "Spa",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "53",{'\n'}
                        {'                            '}"facilitytypeid": "53",
                        {'\n'}
                        {'                            '}"name": "Steam Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "462",{'\n'}
                        {'                            '}"facilitytypeid": "462",
                        {'\n'}
                        {'                            '}"name": "Thalassotherapy Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Technology",{'\n'}
                        {'                    '}"categoryid": "6",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "3",{'\n'}
                        {'                            '}"facilitytypeid": "3",{'\n'}
                        {'                            '}"name": "Internet Cafe",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "178",{'\n'}
                        {'                            '}"facilitytypeid": "178",
                        {'\n'}
                        {'                            '}"name": "Satelite Telephone",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "189",{'\n'}
                        {'                            '}"facilitytypeid": "189",
                        {'\n'}
                        {'                            '}"name": "Satelite TV in Cabins",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Recreational",{'\n'}
                        {'                    '}"categoryid": "5",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1662",{'\n'}
                        {'                            '}"facilitytypeid": "1662",
                        {'\n'}
                        {'                            '}"name": "Aft Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "455",{'\n'}
                        {'                            '}"facilitytypeid": "455",
                        {'\n'}
                        {'                            '}"name": "Camp Carnival",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "64",{'\n'}
                        {'                            '}"facilitytypeid": "64",
                        {'\n'}
                        {'                            '}"name": "Library",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1633",{'\n'}
                        {'                            '}"facilitytypeid": "1633",
                        {'\n'}
                        {'                            '}"name": "Lido Marketplace",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "141",{'\n'}
                        {'                            '}"facilitytypeid": "141",
                        {'\n'}
                        {'                            '}"name": "Nightclub",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1187",{'\n'}
                        {'       '}
                        {'                     '}"facilitytypeid": "1187",{'\n'}
                        {'                            '}"name": "Tides Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Entertainment",{'\n'}
                        {'                    '}"categoryid": "2",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1666",{'\n'}
                        {'                            '}"facilitytypeid": "1666",
                        {'\n'}
                        {'                            '}"name": "Camp Ocean",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1311",{'\n'}
                        {'                            '}"facilitytypeid": "1311",
                        {'\n'}
                        {'                            '}"name": "Casino",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1634",{'\n'}
                        {'                            '}"facilitytypeid": "1634",
                        {'\n'}
                        {'                            '}"name": "Cherry on Top",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "165",{'\n'}
                        {'                            '}"facilitytypeid": "165",
                        {'\n'}
                        {'                            '}"name": "Children's Club",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "443",{'\n'}
                        {'                            '}"facilitytypeid": "443",
                        {'\n'}
                        {'                            '}"name": "Dance Club",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "157",{'\n'}
                        {'                            '}"facilitytypeid": "157",
                        {'\n'}
                        {'                            '}"name": "Dance Floor",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "449",{'\n'}
                        {'                            '}"facilitytypeid": "449",
                        {'\n'}
                        {'                            '}"name": "Gaming Club Casino",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "946",{'\n'}
                        {'                            '}"facilitytypeid": "946",
                        {'\n'}
                        {'                            '}"name": "Night Club",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1635",{'\n'}
                        {'                            '}"facilitytypeid": "1635",
                        {'\n'}
                        {'                            '}"name": "Ocean{'  '}Plaza",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1668",{'\n'}
                        {'                            '}"facilitytypeid": "1668",
                        {'\n'}
                        {'                            '}"name": "Ovation Theater",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1276",{'\n'}
                        {'                            '}"facilitytypeid": "1276",
                        {'\n'}
                        {'                            '}"name": "Royal Theater",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "459",{'\n'}
                        {'                            '}"facilitytypeid": "459",
                        {'\n'}
                        {'                            '}"name": "Seaside Theatre",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "149",{'\n'}
                        {'                            '}"facilitytypeid": "149",
                        {'\n'}
                        {'                            '}"name": "Theatre",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"hidden": "N",{'\n'}
                        {'            '}"id": 1196,{'\n'}
                        {'            '}"images": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Carnival Breeze",{'\n'}
                        {'                    '}"default": "Y",{'\n'}
                        {'                    '}"id": "59101",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1595423212.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1595423212.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Suite",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64152",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653728.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608653728.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653728.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Spa",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64155",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653776.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608653776.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653776.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Waterworks",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64165",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654094.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654094.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654094.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Waterworks-1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64166",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654118.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654118.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654118.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64170",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654364.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654364.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654364.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 2",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64173",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654390.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654390.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654390.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Pool",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "65711",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1610368302.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1610368302.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1610368302.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64176",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654406.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654406.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654406.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Serenity 5",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64191",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655132.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655132.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655132.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Serenity 4",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64192",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655166.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655166.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655166.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Camp Ocean 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64204",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655412.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655412.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655412.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 4",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64207",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655759.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655759.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655759.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64208",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655906.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655906.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655906.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 2",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64209",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655923.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655923.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655923.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Lip Sync Battle",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64215",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656183.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656183.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656183.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Blue Iguana Bar 4",
                        {'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64216",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656217.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656217.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656217.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Redfrog Pub",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64217",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656253.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656253.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656253.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Thrill Theater",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64218",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656482.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656482.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656482.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Thrill Theater",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64219",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656506.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656506.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656506.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "lip",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67775",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190096.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626190096.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190096.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "live music",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67776",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190976.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626190976.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190976.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "atrium-1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67777",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191313.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191313.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191313.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "blue-iguana-bar",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67778",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191334.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191334.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191334.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "spa-thalassotherapy",
                        {'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67779",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191344.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191344.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191344.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "mini-golf",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67780",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191365.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191365.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191365.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "piano-bar",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67781",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191378.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191378.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191378.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "pools",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67782",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191381.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191381.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191381.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "skycourse",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67783",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191389.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191389.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191389.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"launched": "2011-09-16",{'\n'}
                        {'            '}"length": 1004,{'\n'}
                        {'            '}"lineid": 8,{'\n'}
                        {'            '}"name": "Carnival Breeze",{'\n'}
                        {'            '}"niceurl": "carnival-cruise-lines/carnival-breeze",{'\n'}
                        {'            '}"occupancy": 3690,{'\n'}
                        {'            '}"rating": 5,{'\n'}
                        {'            '}"shortdescription": "On Carnival Breeze, fun-fan faves like
                        SportSquare, and mouth-watering dining spots like Cucina del Capitano, are
                        just the beginning of how this ship keeps the fun blazing.\r\n\r\nSpeaking
                        of blazing, enjoy the island atmosphere of the very cool RedFrog Rum Bar, or
                        south-of-the-border taco goodness at BlueIguana Cantina. There’s always
                        family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the
                        Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint —
                        roadside-burger-shack style — featuring hot-off-the-grill burgers designed
                        by celebrity chef Guy Fieri!\r\n\r\nThere are many fish in the sea, and
                        Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked
                        exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And
                        to go just a little less refined, stop by Pizza Pirate for a hot slice, the
                        Carnival Deli for a true classic, or Guy’s Pig &amp; Anchor Bar-B-Que
                        Smokehouse to get a little messy with some signature — you guessed it — Guy
                        Fieri BBQ. On this ship, you just can’t get enough Guy!\r\n\r\nCarnival
                        Breeze has the whole family covered — with water, that is — with a
                        320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids
                        there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And
                        for the bigger people, there’s time to be spent doing blissfully nothing at
                        Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of
                        course.\r\n\r\nKeep the fun going once the sun’s done for the day — have a
                        truly moving experience at the multi-dimensional Thrill Theater, get your
                        lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist
                        Productions… or if you prefer to do your dancing on a dance floor, check out
                        Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail
                        concoctions made with ingredients a little less ordinary and flavors a lot
                        more interesting.\r\n\r\nIf you notice a bit of the outdoors inside, don’t
                        adjust your view. Carnival Breeze’s staterooms — and many of the public
                        spaces around the ship — feature a scintillating tropical décor and
                        contemporary furnishings that’ll transport you straight to warm Caribbean
                        bliss.",{'\n'}
                        {'            '}"starrating": 5,{'\n'}
                        {'            '}"tonnage": 130000,{'\n'}
                        {'            '}"totalcabins": 1845,{'\n'}
                        {'            '}"totalcrew": 1386{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"timing": {'{'}
                        {'\n'}
                        {'        '}"items": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Initiate Endpoint",
                        {'\n'}
                        {'                '}"time": "0.000010"{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"description": "Auth Check Pass",{'\n'}
                        {'                '}"time": "0.021485"{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"total": "0.839460"{'\n'}
                        {'    '}
                        {'}'},{'\n'}
                        {'    '}"warnings": []{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <hr />
              <h2 id="CachecruiseShipdata.-StoreData">Store Data</h2>
              <p>
                In order to get the entire data required to hydrate the visual components for
                consumer to expose the offer per each cruise offer, the proposal flow contemplate:
              </p>
              <p>
                <strong>cabins: (object)</strong>
              </p>
              <div id="expander-1662626815" className="expand-container">
                <div id="expander-control-1662626815" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">cabins</span>
                </div>
                <div id="expander-content-1662626815" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        "cabintypes": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "1A",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "E7D994",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Twin bed and one upper pullman. Desk
                        and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.\r\n",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1631711074.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Upper/Lower",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1631711074.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4A",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "00AD86",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606848.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606848.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4B",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "FCDEEB",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606970.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606970.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4C",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "FBA61C",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606975.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606975.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4D",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "DF93A3",{'\n'}
                        {'                    '}"deckid": 4028,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606980.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606980.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4E",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "C4DF9C",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606985.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606985.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4F",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "B4DFF4",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606989.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606989.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4G",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "EBD201",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600606995.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600606995.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4H",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "9AD3B7",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets.\r\n\r\nDedicated room
                        steward.\r\nSoft, cozy linens (Carnival Comfort Collection).\r\nIn-room safe
                        for valuables.\r\nPlenty of closet and drawer
                        space.\r\nTelevision.\r\nStateroom climate control.\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607000.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607000.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4J",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "B44A6F",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Picture window facing public
                        observation deck.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607065.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Interior Stateroom (Obstructed Views)",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607065.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "4S",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "74A534",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. Ample closet
                        space.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa reservations,
                        free fitness classes, unlimited access to the thermal suites, exclusive
                        discounts on treatments during port days and more.\r\n\r\nUnique welcome
                        ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal Suites and
                        Thalassotherapy Pool\r\nComplimentary scrub kit to use in our Thermal
                        Suites\r\nTwo complimentary fitness classes (per guest)\r\nComplimentary
                        body composition analysis\r\nExclusive discounts on treatments during port
                        days\r\nCloud 9 Spa bathrobes and slippers\r\nUpgraded Elemis in-stateroom
                        toiletries\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607502.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Interior",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607502.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6A",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "F15923",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Desk and seat. Full bathroom with shower. 3 closets. Picture
                        window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607299.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean View Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607299.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6L",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "F9A980",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower plus separate washroom with sink and junior tub. 3 closets. Picture
                        window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607342.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607342.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6M",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "E7B220",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower plus separate washroom with sink and junior tub. 3
                        closets. Picture window.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607347.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607347.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6N",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "A75E4A",{'\n'}
                        {'                    '}"deckid": 4023,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), two
                        upper pullmans and single sofa bed. Privacy curtain. Sofa and coffee table.
                        Desk and seat. Full bathroom with shower plus separate washroom with sink
                        and junior tub. 3 closets. Picture window.\r\n\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607355.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Deluxe Ocean View Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607355.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "6S",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "7CADBA",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. Ample closet space. Picture window facing public observation
                        deck.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa reservations,
                        free fitness classes, unlimited access to the thermal suites, exclusive
                        discounts on treatments during port days and more.\r\n\r\nAmbulatory
                        Accessible Stateroom: This stateroom is designed for use by guests with
                        mobility limitations, who do not require the regular use of a wheelchair,
                        scooter or other similar assistive devices. For example, it is ideal for
                        guests who only use an assistive device (like a cane or walker) for
                        traversing longer distances, and who may benefit from certain accessible
                        features like grab bars, to assist with balance.\r\n\r\nUnique welcome
                        ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal Suites and
                        Thalassotherapy Pool\r\nComplimentary scrub kit to use in our Thermal
                        Suites\r\nTwo complimentary fitness classes (per guest)\r\nComplimentary
                        body composition analysis\r\nExclusive discounts on treatments during port
                        days\r\nCloud 9 Spa bathrobes and slippers\r\nUpgraded Elemis in-stateroom
                        toiletries\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607470.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Spa Ocean View Stateroom (Obstructed
                        View)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607470.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "7C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "C7B2D6",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private cove balcony with patio chairs
                        and table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival
                        Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and
                        drawer space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon
                        request.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607514.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cove Balcony Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607514.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8A",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "BD55A0",{'\n'}
                        {'                    '}"deckid": 4028,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462280.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462280.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8B",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "FFD88F",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Desk and seat. Sofa and coffee table. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462281.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462281.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "F27180",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private balcony with patio chairs and table.\r\n\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462286.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462286.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8D",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "99B463",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011796.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011796.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8E",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "DCD3D0",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666011803.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666011803.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8F",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "B07588",{'\n'}
                        {'                    '}"deckid": 4032,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1606901923.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1606901923.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8G",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "ED1D30",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. 3 closets. Private balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1598462347.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1598462347.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8M",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "A7A2A9",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private aft-facing extended balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607705.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Aft View Extended Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607705.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8N",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "C47C1E",{'\n'}
                        {'                    '}"deckid": 4030,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private aft-facing extended balcony with patio chairs and
                        table.\r\n\r\nDedicated room steward\r\nSoft, cozy linens (Carnival Comfort
                        Collection)\r\nIn-room safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607727.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Aft View Extended Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607727.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8P",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "4E88C6",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king), one
                        upper pullman and single sofa bed. Sofa and coffee table. Desk and seat.
                        Full bathroom with shower. Ample closet space. Private balcony with patio
                        chairs and table.\r\n\r\nExclusive Cloud 9 Spa amenities: Priority spa
                        reservations, free fitness classes, unlimited access to the thermal suites,
                        exclusive discounts on treatments during port days and more.\r\n\r\nUnique
                        welcome ritual\r\nPriority spa reservations\r\nUnlimited use of Thermal
                        Suites and Thalassotherapy Pool\r\nComplimentary scrub kit to use in our
                        Thermal Suites\r\nTwo complimentary fitness classes (per
                        guest)\r\nComplimentary body composition analysis\r\nExclusive discounts on
                        treatments during port days\r\nCloud 9 Spa bathrobes and
                        slippers\r\nUpgraded Elemis in-stateroom toiletries\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013087.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Balcony",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013087.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "8S",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "CCE3F1",{'\n'}
                        {'                    '}"deckid": 4034,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower. Ample closet space. Private balcony with patio chairs and
                        table.\r\n\r\nUnique welcome ritual.\r\nPriority spa
                        reservations.\r\nUnlimited use of Thermal Suites and Hydrotherapy
                        Pool.\r\nComplimentary scrub kit to use in our Thermal Suites.\r\nTwo
                        complimentary fitness classes (per guest).\r\nComplimentary body composition
                        analysis.\r\nExclusive discounts on treatments during port days.\r\nCloud 9
                        Spa bathrobes and slippers.\r\nUpgraded Elemis in-stateroom
                        toiletries.\r\nDedicated room steward.\r\nSoft, cozy linens (Carnival
                        Comfort Collection).\r\nIn-room safe for valuables.\r\nPlenty of closet and
                        drawer space.\r\nTelevision.\r\nStateroom climate control.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1666013332.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Spa Balcony Stateroom",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1666013332.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "9C",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "EC037C",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Private wraparound balcony with patio chairs and table.\r\n\r\nDedicated
                        room steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room
                        safe for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control\r\nBathrobes upon request",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607775.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Premium Vista Balcony",
                        {'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607775.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "BL",{'\n'}
                        {'                    '}"cabintype": "balcony",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "Balcony staterooms were designed for
                        maximum sea breeze and the most stunning views, so look to a balcony if
                        you're looking to cruise aboard Carnival Breeze. Any time you're in your
                        room, you're just steps away from your own personal outdoor oasis, featuring
                        the sort of sea view you can also feel.\r\n\r\n\r\n\r\nDedicated room
                        steward\r\nCarnival Comfort Collection® linens\r\nPlenty of closet and
                        drawer space\r\nIn-room safe for valuables\r\nTelevision\r\nStateroom
                        climate control\r\n",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880487.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Balcony Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880487.png",
                        {'\n'}
                        {'                    '}"sortweight": 40{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "GS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "DE761B",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/bidet/double sinks. Walk-in dressing area with vanity
                        table, seat and ample closet space. Private large balcony with patio chairs
                        and table.\r\n\r\nPriority check-in and boarding\r\nPriority dinner
                        reservations for select specialty restaurants\r\nPriority main dining room
                        time assignment (Early, Late or Your Time Dining)\r\nPriority debarkation at
                        all ports\r\nTwo large bottles of water\r\nPillow-top
                        mattresses\r\nBathrobes\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600607836.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Grand Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600607836.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "IS",{'\n'}
                        {'                    '}"cabintype": "inside",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "This is an affordable way to cruise
                        without leaving out the comfort or convenience! Great for curling up after a
                        long day of fun.\r\n\r\n\r\nDedicated room steward\r\nCarnival Comfort
                        Collection® linens\r\nPlenty of closet and drawer space\r\nIn-room safe for
                        valuables\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358611.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Inside Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358611.png",
                        {'\n'}
                        {'                    '}"sortweight": 10{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "JS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "697921",{'\n'}
                        {'                    '}"deckid": 4031,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa, armchair and coffee table. Desk and seat. Full
                        bathroom with shower/whirlpool tub/double sinks. 2 large closets. Walk-in
                        dressing area with ample closet space. Private standard-size balcony with
                        obstructed view; patio chairs and table.\r\n\r\nPriority check-in and
                        boarding\r\nPriority dinner reservations for select specialty
                        restaurants\r\nPriority main dining room time assignment (Early, Late or
                        Your Time Dining)\r\nPriority debarkation at all ports\r\nTwo large bottles
                        of water\r\nPillow-top mattresses\r\nBathrobes\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608098.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Junior Suite(Obstructed View)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608098.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "OS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "00B1D2",{'\n'}
                        {'                    '}"deckid": 4029,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet
                        space. Private large balcony with patio chairs and table.\r\n\r\nPriority
                        check-in and boarding\r\nPriority dinner reservations for select specialty
                        restaurants\r\nPriority main dining room time assignment (Early, Late or
                        Your Time Dining)\r\nPriority debarkation at all ports\r\nTwo large bottles
                        of water\r\nPillow-top mattresses\r\nBathrobes\r\nDedicated room
                        steward\r\nSoft, cozy linens (Carnival Comfort Collection)\r\nIn-room safe
                        for valuables\r\nPlenty of closet and drawer
                        space\r\nTelevision\r\nStateroom climate control",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608104.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608104.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "OV",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "A picture window gives you views of
                        scenery you won’t find anywhere on land, all from the comfort of your
                        stateroom.\r\n\r\nDedicated room steward\r\nCarnival Comfort Collection®
                        linens\r\nPlenty of closet and drawer space\r\nIn-room safe for
                        valuables\r\nTelevision\r\nStateroom climate control",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1614880549.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Ocean View Stateroom (Guaranteed)",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1614880549.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "PT",{'\n'}
                        {'                    '}"cabintype": "outside",{'\n'}
                        {'                    '}"colourcode": "CFA8A5",{'\n'}
                        {'                    '}"deckid": 4024,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king).
                        Sofa and coffee table. Desk and seat. Full bathroom with shower. 3 closets.
                        Two porthole windows.\r\n\r\nDedicated room steward\r\nSoft, cozy linens
                        (Carnival Comfort Collection)\r\nIn-room safe for valuables\r\nPlenty of
                        closet and drawer space\r\nTelevision\r\nStateroom climate
                        control\r\nBathrobes upon request",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608114.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Porthole",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608114.png",
                        {'\n'}
                        {'                    '}"sortweight": 30{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "SS",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "00AAAD",{'\n'}
                        {'                    '}"deckid": 4033,{'\n'}
                        {'                    '}"description": "Two twin beds (convert to king) and
                        single sofa bed. Sofa and coffee table. Desk and seat. Full bathroom with
                        shower/whirlpool tub/double sinks. Walk-in dressing area with ample closet
                        space. Private large balcony with patio chairs and table.\r\n\r\nExclusive
                        Cloud 9 Spa amenities: Priority spa reservations, free fitness classes,
                        unlimited access to the thermal suites, exclusive discounts on treatments
                        during port days and more.\r\nNote: Exclusive amenities apply to 1st and 2nd
                        guests only; 3rd and 4th guests are not entitled to the exclusive
                        amenities.\r\n\r\nUnique welcome ritual.\r\nPriority spa
                        reservations.\r\nUnlimited use of Thermal Suites and Hydrotherapy
                        Pool.\r\nComplimentary scrub kit to use in our Thermal Suites.\r\nTwo
                        complimentary fitness classes (per guest).\r\nComplimentary body composition
                        analysis.\r\nExclusive discounts on treatments during port days.\r\nCloud 9
                        Spa bathrobes and slippers.\r\nUpgraded Elemis in-stateroom
                        toiletries.\r\nPriority check-in and boarding.\r\nPriority dinner
                        reservations for select specialty restaurants.\r\nPriority main dining room
                        time assignment (Early, Late or Your Time Dining).\r\nPriority debarkation
                        at all ports.\r\nTwo large bottles of water.\r\nPillow-top
                        mattresses.\r\nDedicated room steward.",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1600608124.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Cloud 9 Spa Suite",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1600608124.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"cabincode": "ST",{'\n'}
                        {'                    '}"cabintype": "suite",{'\n'}
                        {'                    '}"colourcode": "",{'\n'}
                        {'                    '}"description": "Get all the comforts of home and
                        then some, with absolutely none of the hassles. Since your suite gives you
                        VIP status, you’re the priority when it comes to getting on and off the
                        ship. Plus, you’ll receive a ton of exclusive amenities making this the
                        ultimate way to cruise. Get comfy… stretch out, put your feet up, or just
                        spend time on your balcony — you’ve got one of our most spacious rooms.",
                        {'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_large/1603358917.png",
                        {'\n'}
                        {'                    '}"isdefault": "N",{'\n'}
                        {'                    '}"name": "Suite - Guaranteed",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_cabinimages_small/1603358917.png",
                        {'\n'}
                        {'                    '}"sortweight": 100{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1938360073" className="expand-container">
                <div id="expander-control-1938360073" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">decks: (object)</span>
                </div>
                <div id="expander-content-1938360073" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'  '}"decks": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 1",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4023,{'\n'}
                        {'                    '}"imageid": 72572,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057897.png",
                        {'\n'}
                        {'                    '}"name": "Deck 1 Riviera"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 2",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4024,{'\n'}
                        {'                    '}"imageid": 72568,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057879.png",
                        {'\n'}
                        {'                    '}"name": "Deck 2 Main"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 3",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4025,{'\n'}
                        {'                    '}"imageid": 72567,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057875.png",
                        {'\n'}
                        {'                    '}"name": "Deck 3 Lobby"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 4",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4026,{'\n'}
                        {'                    '}"imageid": 72569,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057883.png",
                        {'\n'}
                        {'                    '}"name": "Deck 4 Mezzanine"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 5",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4027,{'\n'}
                        {'                    '}"imageid": 72571,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057890.png",
                        {'\n'}
                        {'                    '}"name": "Deck 5 Promenade"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 6",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4028,{'\n'}
                        {'                    '}"imageid": 72575,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057918.png",
                        {'\n'}
                        {'                    '}"name": "Deck 6 Upper"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 7",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4029,{'\n'}
                        {'                    '}"imageid": 72565,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057868.png",
                        {'\n'}
                        {'                    '}"name": "Deck 7 Empress"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 8",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4030,{'\n'}
                        {'                    '}"imageid": 72576,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057923.png",
                        {'\n'}
                        {'                    '}"name": "Deck 8 Verandah"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 9",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4031,{'\n'}
                        {'                    '}"imageid": 72577,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057927.png",
                        {'\n'}
                        {'                    '}"name": "Deck 9 Vista"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 10",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4032,{'\n'}
                        {'                    '}"imageid": 72566,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057872.png",
                        {'\n'}
                        {'                    '}"name": "Deck 10 Lido"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 11",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4033,{'\n'}
                        {'                    '}"imageid": 72570,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057886.png",
                        {'\n'}
                        {'                    '}"name": "Deck 11 Panorama"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 12",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4034,{'\n'}
                        {'                    '}"imageid": 72574,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057915.png",
                        {'\n'}
                        {'                    '}"name": "Deck 12 Spa"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 14",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4035,{'\n'}
                        {'                    '}"imageid": 72564,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057864.png",
                        {'\n'}
                        {'                    '}"name": "Deck 14"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Deck 15",{'\n'}
                        {'                    '}"description": "",{'\n'}
                        {'                    '}"id": 4036,{'\n'}
                        {'                    '}"imageid": 72573,{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1655057901.png",
                        {'\n'}
                        {'                    '}"name": "Deck 15 Serenity"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1344348904" className="expand-container">
                <div id="expander-control-1344348904" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">description: (string)</span>
                </div>
                <div id="expander-content-1344348904" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        "description": "On Carnival Breeze, fun-fan faves like SportSquare, and
                        mouth-watering dining spots like Cucina del Capitano, are just the beginning
                        of how this ship keeps the fun blazing.\r\n\r\nSpeaking of blazing, enjoy
                        the island atmosphere of the very cool RedFrog Rum Bar, or
                        south-of-the-border taco goodness at BlueIguana Cantina. There’s always
                        family fun in the air at Hasbro, The Game Show and ha-ha hilarity at the
                        Punchliner Comedy Club. Don’t forget the ambiance of Guy's Burger Joint —
                        roadside-burger-shack style — featuring hot-off-the-grill burgers designed
                        by celebrity chef Guy Fieri!\r\n\r\nThere are many fish in the sea, and
                        Bonsai Sushi proves it. The steakhouse prides itself on premium cuts, cooked
                        exactly the way you like ‘em… plus gourmet appetizers and wine pairings. And
                        to go just a little less refined, stop by Pizza Pirate for a hot slice, the
                        Carnival Deli for a true classic, or Guy’s Pig &amp; Anchor Bar-B-Que
                        Smokehouse to get a little messy with some signature — you guessed it — Guy
                        Fieri BBQ. On this ship, you just can’t get enough Guy!\r\n\r\nCarnival
                        Breeze has the whole family covered — with water, that is — with a
                        320-foot-long Twister Waterslide at Carnival WaterWorks. Just for the kids
                        there’s supervised youth programs Camp Ocean, Circle “C” and Club O2. And
                        for the bigger people, there’s time to be spent doing blissfully nothing at
                        Serenity Adult Only Retreat… after pampering yourself at Cloud 9 Spa, of
                        course.\r\n\r\nKeep the fun going once the sun’s done for the day — have a
                        truly moving experience at the multi-dimensional Thrill Theater, get your
                        lips movin’ up on stage at Lip Sync Battle, dance in your seat at Playlist
                        Productions… or if you prefer to do your dancing on a dance floor, check out
                        Liquid Nightclub. Speaking of liquid, Alchemy Bar serves up cocktail
                        concoctions made with ingredients a little less ordinary and flavors a lot
                        more interesting.\r\n\r\nIf you notice a bit of the outdoors inside, don’t
                        adjust your view. Carnival Breeze’s staterooms — and many of the public
                        spaces around the ship — feature a scintillating tropical décor and
                        contemporary furnishings that’ll transport you straight to warm Caribbean
                        bliss."
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1542198829" className="expand-container">
                <div id="expander-control-1542198829" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">facilities (object)</span>
                </div>
                <div id="expander-content-1542198829" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'  '}"facilities": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Food and Drink",{'\n'}
                        {'                    '}"categoryid": "1",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "136",{'\n'}
                        {'                            '}"facilitytypeid": "136",
                        {'\n'}
                        {'                            '}"name": "24-hour Room Service",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1181",{'\n'}
                        {'                            '}"facilitytypeid": "1181",
                        {'\n'}
                        {'                            '}"name": "Alchemy Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "237",{'\n'}
                        {'                            '}"facilitytypeid": "237",
                        {'\n'}
                        {'                            '}"name": "Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "267",{'\n'}
                        {'                            '}"facilitytypeid": "267",
                        {'\n'}
                        {'                            '}"name": "BBQ",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "589",{'\n'}
                        {'                            '}"facilitytypeid": "589",
                        {'\n'}
                        {'                            '}"name": "Bimini Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1185",{'\n'}
                        {'                            '}"facilitytypeid": "1185",
                        {'\n'}
                        {'                            '}"name": "BlueIguana Tequila Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1190",{'\n'}
                        {'                            '}"facilitytypeid": "1190",
                        {'\n'}
                        {'                            '}"name": "Carnival WaterWorks",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1629",{'\n'}
                        {'                            '}"facilitytypeid": "1629",
                        {'\n'}
                        {'                            '}"name": "Cucina del Capitano",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "194",{'\n'}
                        {'                            '}"facilitytypeid": "194",
                        {'\n'}
                        {'                            '}"name": "Dining Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1649",{'\n'}
                        {'                            '}"facilitytypeid": "1649",
                        {'\n'}
                        {'                            '}"name": "Fahrenheit 555 Steakhouse",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "674",{'\n'}
                        {'                            '}"facilitytypeid": "674",
                        {'\n'}
                        {'                            '}"name": "Lanai Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "753",{'\n'}
                        {'                            '}"facilitytypeid": "753",
                        {'\n'}
                        {'                            '}"name": "Lobby Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "196",{'\n'}
                        {'                            '}"facilitytypeid": "196",
                        {'\n'}
                        {'                            '}"name": "Piano Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "90",{'\n'}
                        {'                            '}"facilitytypeid": "90",
                        {'\n'}
                        {'                            '}"name": "Pizzeria",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1184",{'\n'}
                        {'                            '}"facilitytypeid": "1184",
                        {'\n'}
                        {'                            '}"name": "RedFrog Pub",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1186",{'\n'}
                        {'                            '}"facilitytypeid": "1186",
                        {'\n'}
                        {'                            '}"name": "RedFrog Rum Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "398",{'\n'}
                        {'                            '}"facilitytypeid": "398",
                        {'\n'}
                        {'                            '}"name": "Rising Tide Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1669",{'\n'}
                        {'                            '}"facilitytypeid": "1669",
                        {'\n'}
                        {'                            '}"name": "Sapphire Dining Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "115",{'\n'}
                        {'                            '}"facilitytypeid": "115",
                        {'\n'}
                        {'                            '}"name": "Sports Bar",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1191",{'\n'}
                        {'                            '}"facilitytypeid": "1191",
                        {'\n'}
                        {'                            '}"name": "Sports Square",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "598",{'\n'}
                        {'                            '}"facilitytypeid": "598",
                        {'\n'}
                        {'                            '}"name": "Tequila/Tapas Bar",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "1",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1003",{'\n'}
                        {'                            '}"facilitytypeid": "1003",
                        {'\n'}
                        {'                            '}"name": "The Atrium",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Fitness",{'\n'}
                        {'                    '}"categoryid": "4",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "218",{'\n'}
                        {'                            '}"facilitytypeid": "218",
                        {'\n'}
                        {'                            '}"name": "Fitness Center",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "148",{'\n'}
                        {'                            '}"facilitytypeid": "148",
                        {'\n'}
                        {'                            '}"name": "Gym",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "177",{'\n'}
                        {'                            '}"facilitytypeid": "177",
                        {'\n'}
                        {'                            '}"name": "Jogging Track",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "4",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1063",{'\n'}
                        {'                            '}"facilitytypeid": "1063",
                        {'\n'}
                        {'                            '}"name": "Wellness Centre",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Other",{'\n'}
                        {'                    '}"categoryid": "7",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1188",{'\n'}
                        {'                            '}"facilitytypeid": "1188",
                        {'\n'}
                        {'                            '}"name": "BlueIguana Cantina",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1182",{'\n'}
                        {'                            '}"facilitytypeid": "1182",
                        {'\n'}
                        {'                            '}"name": "Bonsai Sushi",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1441",{'\n'}
                        {'                            '}"facilitytypeid": "1441",
                        {'\n'}
                        {'                            '}"name": "Limelight Lounge",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "211",{'\n'}
                        {'                            '}"facilitytypeid": "211",
                        {'\n'}
                        {'                            '}"name": "Shops",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "7",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1440",{'\n'}
                        {'                            '}"facilitytypeid": "1440",
                        {'\n'}
                        {'                            '}"name": "The Fun Shops",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Relaxation",{'\n'}
                        {'                    '}"categoryid": "3",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1632",{'\n'}
                        {'                            '}"facilitytypeid": "1632",
                        {'\n'}
                        {'                            '}"name": "Beach Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1437",{'\n'}
                        {'                            '}"facilitytypeid": "1437",
                        {'\n'}
                        {'                            '}"name": "Cloud 9 Spa",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "188",{'\n'}
                        {'                            '}"facilitytypeid": "188",
                        {'\n'}
                        {'                            '}"name": "Sauna",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1",{'\n'}
                        {'                            '}"facilitytypeid": "1",{'\n'}
                        {'                            '}"name": "Spa",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "53",{'\n'}
                        {'                            '}"facilitytypeid": "53",
                        {'\n'}
                        {'                            '}"name": "Steam Room",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "3",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "462",{'\n'}
                        {'                            '}"facilitytypeid": "462",
                        {'\n'}
                        {'                            '}"name": "Thalassotherapy Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Technology",{'\n'}
                        {'                    '}"categoryid": "6",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "3",{'\n'}
                        {'                            '}"facilitytypeid": "3",{'\n'}
                        {'                            '}"name": "Internet Cafe",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "178",{'\n'}
                        {'                            '}"facilitytypeid": "178",
                        {'\n'}
                        {'                            '}"name": "Satelite Telephone",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "6",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "189",{'\n'}
                        {'                            '}"facilitytypeid": "189",
                        {'\n'}
                        {'                            '}"name": "Satelite TV in Cabins",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Recreational",{'\n'}
                        {'                    '}"categoryid": "5",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1662",{'\n'}
                        {'                            '}"facilitytypeid": "1662",
                        {'\n'}
                        {'                            '}"name": "Aft Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "455",{'\n'}
                        {'                            '}"facilitytypeid": "455",
                        {'\n'}
                        {'                            '}"name": "Camp Carnival",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "64",{'\n'}
                        {'                            '}"facilitytypeid": "64",
                        {'\n'}
                        {'                            '}"name": "Library",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1633",{'\n'}
                        {'                            '}"facilitytypeid": "1633",
                        {'\n'}
                        {'                            '}"name": "Lido Marketplace",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "141",{'\n'}
                        {'                            '}"facilitytypeid": "141",
                        {'\n'}
                        {'                            '}"name": "Nightclub",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "5",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1187",{'\n'}
                        {'                            '}"facilitytypeid": "1187",
                        {'\n'}
                        {'                            '}"name": "Tides Pool",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"category": "Entertainment",{'\n'}
                        {'                    '}"categoryid": "2",{'\n'}
                        {'                    '}"item": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1666",{'\n'}
                        {'                            '}"facilitytypeid": "1666",
                        {'\n'}
                        {'                            '}"name": "Camp Ocean",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1311",{'\n'}
                        {'                            '}"facilitytypeid": "1311",
                        {'\n'}
                        {'                            '}"name": "Casino",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1634",{'\n'}
                        {'                            '}"facilitytypeid": "1634",
                        {'\n'}
                        {'                            '}"name": "Cherry on Top",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "165",{'\n'}
                        {'                            '}"facilitytypeid": "165",
                        {'\n'}
                        {'                            '}"name": "Children's Club",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "443",{'\n'}
                        {'                            '}"facilitytypeid": "443",
                        {'\n'}
                        {'                            '}"name": "Dance Club",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "157",{'\n'}
                        {'                            '}"facilitytypeid": "157",
                        {'\n'}
                        {'                            '}"name": "Dance Floor",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "449",{'\n'}
                        {'                            '}"facilitytypeid": "449",
                        {'\n'}
                        {'                            '}"name": "Gaming Club Casino",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "946",{'\n'}
                        {'                            '}"facilitytypeid": "946",
                        {'\n'}
                        {'                            '}"name": "Night Club",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1635",{'\n'}
                        {'                            '}"facilitytypeid": "1635",
                        {'\n'}
                        {'                            '}"name": "Ocean{'  '}Plaza",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1668",{'\n'}
                        {'                            '}"facilitytypeid": "1668",
                        {'\n'}
                        {'                            '}"name": "Ovation Theater",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "1276",{'\n'}
                        {'                            '}"facilitytypeid": "1276",
                        {'\n'}
                        {'                            '}"name": "Royal Theater",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "459",{'\n'}
                        {'                            '}"facilitytypeid": "459",
                        {'\n'}
                        {'                            '}"name": "Seaside Theatre",
                        {'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'},{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"categoryid": "2",{'\n'}
                        {'                            '}"description": null,{'\n'}
                        {'                            '}"facilityid": "149",{'\n'}
                        {'                            '}"facilitytypeid": "149",
                        {'\n'}
                        {'                            '}"name": "Theatre",{'\n'}
                        {'                            '}"quantity": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}]{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-1001793128" className="expand-container">
                <div id="expander-control-1001793128" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">images by type (Object)</span>
                </div>
                <div id="expander-content-1001793128" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        "images": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Carnival Breeze",{'\n'}
                        {'                    '}"default": "Y",{'\n'}
                        {'                    '}"id": "59101",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1595423212.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1595423212.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1595423212.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Suite",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64152",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653728.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608653728.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653728.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Spa",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64155",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608653776.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608653776.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608653776.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Waterworks",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64165",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654094.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654094.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654094.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Waterworks-1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64166",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654118.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654118.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654118.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64170",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654364.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654364.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654364.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 2",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64173",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654390.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654390.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654390.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Pool",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "65711",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1610368302.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1610368302.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1610368302.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Alchemy Bar 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64176",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608654406.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608654406.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608654406.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Serenity 5",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64191",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655132.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655132.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655132.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Serenity 4",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64192",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655166.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655166.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655166.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Camp Ocean 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64204",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655412.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655412.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655412.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 4",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64207",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655759.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655759.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655759.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 3",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64208",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655906.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655906.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655906.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Seuss At Sea 2",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64209",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608655923.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608655923.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608655923.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Lip Sync Battle",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64215",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656183.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656183.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656183.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Blue Iguana Bar 4",
                        {'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64216",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656217.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656217.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656217.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Redfrog Pub",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64217",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656253.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656253.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656253.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Thrill Theater",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64218",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656482.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656482.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656482.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "Thrill Theater",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "64219",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1608656506.png",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1608656506.png",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1608656506.png",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "lip",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67775",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190096.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626190096.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190096.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "live music",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67776",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626190976.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626190976.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626190976.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "atrium-1",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67777",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191313.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191313.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191313.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "blue-iguana-bar",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67778",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191334.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191334.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191334.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "spa-thalassotherapy",
                        {'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67779",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191344.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191344.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191344.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "mini-golf",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67780",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191365.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191365.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191365.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "piano-bar",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67781",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191378.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191378.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191378.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "pools",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67782",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191381.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191381.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191381.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"caption": "skycourse",{'\n'}
                        {'                    '}"default": "N",{'\n'}
                        {'                    '}"id": "67783",{'\n'}
                        {'                    '}"imageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_large/1626191389.jpg",
                        {'\n'}
                        {'                    '}"originalimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages/1626191389.jpg",
                        {'\n'}
                        {'                    '}"ownerid": "system",{'\n'}
                        {'                    '}"smallimageurl":
                        "https://static.traveltek.net/cruisepics/local_shipimages_small/1626191389.jpg",
                        {'\n'}
                        {'                    '}"type": "photo"{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}]
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <div id="expander-873941644" className="expand-container">
                <div id="expander-control-873941644" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">General Ship Information:</span>
                </div>
                <div id="expander-content-873941644" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        "launched": "2011-09-16",{'\n'}"length": 1004,{'\n'}
                        "occupancy": 3690,{'\n'}"shortdescription": "On Carnival Breeze, fun-fan
                        faves like SportSquare, and mouth-watering dining spots like Cucina del
                        Capitano, are just the beginning of how this ship keeps the fun
                        blazing.\r\n\r\nSpeaking of blazing, enjoy the island atmosphere of the very
                        cool RedFrog Rum Bar, or south-of-the-border taco goodness at BlueIguana
                        Cantina. There’s always family fun in the air at Hasbro, The Game Show and
                        ha-ha hilarity at the Punchliner Comedy Club. Don’t forget the ambiance of
                        Guy's Burger Joint — roadside-burger-shack style — featuring
                        hot-off-the-grill burgers designed by celebrity chef Guy Fieri!\r\n\r\nThere
                        are many fish in the sea, and Bonsai Sushi proves it. The steakhouse prides
                        itself on premium cuts, cooked exactly the way you like ‘em… plus gourmet
                        appetizers and wine pairings. And to go just a little less refined, stop by
                        Pizza Pirate for a hot slice, the Carnival Deli for a true classic, or Guy’s
                        Pig &amp; Anchor Bar-B-Que Smokehouse to get a little messy with some
                        signature — you guessed it — Guy Fieri BBQ. On this ship, you just can’t get
                        enough Guy!\r\n\r\nCarnival Breeze has the whole family covered — with
                        water, that is — with a 320-foot-long Twister Waterslide at Carnival
                        WaterWorks. Just for the kids there’s supervised youth programs Camp Ocean,
                        Circle “C” and Club O2. And for the bigger people, there’s time to be spent
                        doing blissfully nothing at Serenity Adult Only Retreat… after pampering
                        yourself at Cloud 9 Spa, of course.\r\n\r\nKeep the fun going once the sun’s
                        done for the day — have a truly moving experience at the multi-dimensional
                        Thrill Theater, get your lips movin’ up on stage at Lip Sync Battle, dance
                        in your seat at Playlist Productions… or if you prefer to do your dancing on
                        a dance floor, check out Liquid Nightclub. Speaking of liquid, Alchemy Bar
                        serves up cocktail concoctions made with ingredients a little less ordinary
                        and flavors a lot more interesting.\r\n\r\nIf you notice a bit of the
                        outdoors inside, don’t adjust your view. Carnival Breeze’s staterooms — and
                        many of the public spaces around the ship — feature a scintillating tropical
                        décor and contemporary furnishings that’ll transport you straight to warm
                        Caribbean bliss.",{'\n'}"starrating": 5,{'\n'}
                        "tonnage": 130000,{'\n'}"totalcabins": 1845,{'\n'}
                        "totalcrew": 1386
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <hr />
              <h2 id="CachecruiseShipdata.-XeniAPI-Cruise">Xeni API - Cruise</h2>
              <p className="media-group">
                <span className="confluence-embedded-file-wrapper">
                  <a
                    className="confluence-embedded-file"
                    href="attachments/607485953/645922839.json"
                    data-nice-type="null"
                    data-file-src="/wiki/download/attachments/607485953/xeniAPI_Cruises.json?version=1&modificationDate=1712935526148&cacheVersion=1&api=v2"
                    data-linked-resource-id={645922839}
                    data-linked-resource-type="attachment"
                    data-linked-resource-container-id={607485953}
                    data-linked-resource-default-alias="xeniAPI_Cruises.json"
                    data-mime-type="application/json"
                    data-has-thumbnail="true"
                    data-linked-resource-version={1}
                    data-media-id="64beca43-d1b4-4764-9b7c-da1a7f59f278"
                    data-media-type="file"
                  >
                    <img src="attachments/thumbnails/607485953/645922839" height={250} />
                  </a>
                </span>
              </p>
              <p />
              <p />
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
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485961.png">image-20240118-110648.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485964.png">image-20240118-105612.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485967.png">image-20240118-105528.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485970.png">image-20240118-105438.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485973.png">image-20240118-105243.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485976.png">
                  XeniOrchestrationCruiseAvailability.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485979.png">image-20240115-111031.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485982.png">availabilityRequestMatch.png</a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/607485985.png">
                  AvailabilityCruiseFlowDiagram.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height={8} width={8} alt="" />
                <a href="attachments/607485953/645922839.json">xeniAPI_Cruises.json</a>{' '}
                (application/json)
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

export default CacheCruisesShipData
