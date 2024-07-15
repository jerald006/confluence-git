import React from 'react'

function SignUpLoginScenarios() {
  return (
    <>
      <title>XeniApp : Sign up and login scenarios (Testing cases)</title>
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
                    <a href="Delray-integration_580714509.html">Delray integration</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : Sign up and login scenarios (Testing cases)</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Jan 03,
              2024
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1719206661296 {padding: 0px;}\ndiv.rbtoc1719206661296 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1719206661296 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1719206661296">
                <ul className="toc-indentation">
                  <li>
                    <a href="#Signupandloginscenarios(Testingcases)-Case1:RegisteredDealrayusers(Firsttime)">
                      Case 1: Registered Dealray users (First time)
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Pre-condition">
                          Pre-condition
                        </a>
                      </li>
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Stepstoreproduce">
                          Steps to reproduce
                        </a>
                      </li>
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Ticket">Ticket</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Signupandloginscenarios(Testingcases)-Case2:RegisteredNon-Dealrayusers(Firsttime)">
                      Case 2: Registered Non-Dealray users (First time)
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Pre-condition.1">
                          Pre-condition
                        </a>
                      </li>
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Stepstoreproduce.1">
                          Steps to reproduce
                        </a>
                      </li>
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Ticket.1">Ticket</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#Signupandloginscenarios(Testingcases)-Case3:OldRegisteredaccount-ClaimDealrayaccount.">
                      Case 3: Old Registered account - Claim Dealray account.
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Pre-condition.2">
                          Pre-condition
                        </a>
                      </li>
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Stepstoreproduce.2">
                          Steps to reproduce
                        </a>
                      </li>
                      <li>
                        <a href="#Signupandloginscenarios(Testingcases)-Ticket.2">Ticket</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="Signupandloginscenarios(Testingcases)-Case1:RegisteredDealrayusers(Firsttime)">
                Case 1: Registered Dealray users (First time)
              </h1>
              <h2 id="Signupandloginscenarios(Testingcases)-Pre-condition">Pre-condition</h2>
              <p>
                The have in xeni Dealray user DB, the email address of a user:
                <br />
                We sent to the user a Marketing E-mail - “Dealray is Back”
              </p>
              <p />
              <h2 id="Signupandloginscenarios(Testingcases)-Stepstoreproduce">
                Steps to reproduce
              </h2>
              <p />
              <div className="table-wrap">
                <table
                  data-table-width={1058}
                  data-layout="default"
                  data-local-id="def8d965-b798-4b45-ab38-80fdc3b44b2b"
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
                          <strong>Actor: Dealray user registered</strong>
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
                          I received in my registered Dealray email inbox an email title “Dealray is
                          Back”
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The email is sent as part of the release in the production environment of
                          the Dealray website
                          <br />
                          <br />
                          <strong>
                            I am assuming this is also not in prod DB and case 1 and case 2 would be
                            same
                          </strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>I see in the e-mail body a link to dealray.com</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>
                          I click on the link and redirect me to the{' '}
                          <a className="external-link" href="http://Dealray.com" rel="nofollow">
                            Dealray.com
                          </a>{' '}
                          website
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>
                          I see the list of 4 Options by type of service that shows in “Las Vegas”
                          default site
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>I see the % of discounts but don´t see the prices of each option</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">6</td>
                      <td className="confluenceTd">
                        <p>User click on reveal price</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">7</td>
                      <td className="confluenceTd">
                        <p>I see the login modal open</p>
                      </td>
                      <td className="confluenceTd">
                        <p>login popup will open with any email populate and password</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">8</td>
                      <td className="confluenceTd">
                        <p>
                          user enter the credential and get an message and we asked to check their
                          email
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>
                          The email enter by the user should be the same registered in our DB as
                          Dealray registered user.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">9</td>
                      <td className="confluenceTd">
                        <p>I check my inbox email and see the email that holds a link</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">10</td>
                      <td className="confluenceTd">
                        <p>I click on the link </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">11</td>
                      <td className="confluenceTd">
                        <p>I´m redirect to wordpress from to claim dealray account.</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">12</td>
                      <td className="confluenceTd">
                        <p>My email address is pre-populate and disabled</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Cannot edit</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">13</td>
                      <td className="confluenceTd">
                        <p>I complete further personal details</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">14</td>
                      <td className="confluenceTd">
                        <p>I click on claim now </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">15</td>
                      <td className="confluenceTd">
                        <p>I logged in into the website </p>
                      </td>
                      <td className="confluenceTd">
                        <p>then user will go to login page and enter the credential</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">16</td>
                      <td className="confluenceTd">
                        <p>I could see the prices </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">17</td>
                      <td className="confluenceTd">
                        <p>I could search any destination and enter the date to search</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 id="Signupandloginscenarios(Testingcases)-Ticket">Ticket</h2>
              <p>
                <span
                  className="confluence-jim-macro jira-issue"
                  data-jira-key="X3UI-5232"
                  data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_600965168_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                >
                  <a
                    href="https://xeni-workspace.atlassian.net/browse/X3UI-5232"
                    className="jira-issue-key"
                  >
                    <span className="aui-icon aui-icon-wait issue-placeholder" />
                    X3UI-5232
                  </a>
                  -<span className="summary">Getting issue details...</span>
                  <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                    STATUS
                  </span>
                </span>
              </p>
              <hr />
              <h1 id="Signupandloginscenarios(Testingcases)-Case2:RegisteredNon-Dealrayusers(Firsttime)">
                Case 2: Registered Non-Dealray users (First time)
              </h1>
              <h2 id="Signupandloginscenarios(Testingcases)-Pre-condition.1">Pre-condition</h2>
              <ul>
                <li>
                  <p>User is not registered in Dealray users DB</p>
                </li>
                <li>
                  <p>User is not part of Dealray.</p>
                </li>
                <li>
                  <p>
                    Browse the{' '}
                    <a className="external-link" href="http://dealray.com" rel="nofollow">
                      dealray.com
                    </a>{' '}
                    and create an account.
                  </p>
                </li>
              </ul>
              <p />
              <h2 id="Signupandloginscenarios(Testingcases)-Stepstoreproduce.1">
                Steps to reproduce
              </h2>
              <div className="table-wrap">
                <table
                  data-table-width={1058}
                  data-layout="default"
                  data-local-id="787e21cd-c64d-4969-8702-af1b95abd212"
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
                          <strong>Actor: Dealray non-registered User</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong> Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">1</td>
                      <td className="confluenceTd">
                        <p>
                          I browse to{' '}
                          <a className="external-link" href="http://dealray.com" rel="nofollow">
                            dealray.com
                          </a>{' '}
                          website
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p>User email is not registered in users DB</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>
                          I see the list of 4 Options by type of service that shows in “Las Vegas”
                          default site
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>I see a “Reveal price” at the bottom of each offer card</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>I click on “Reveal Price” and the signup form is prompt.</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>I complete my Data:</p>
                        <ul>
                          <li>
                            <p>Name</p>
                          </li>
                          <li>
                            <p>Email address</p>
                          </li>
                          <li>
                            <p>Password</p>
                          </li>
                        </ul>
                        <p>And I click on Sign now</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">6</td>
                      <td className="confluenceTd">
                        <p>
                          I see a prompt message to check my registered email inbox to verify my
                          account.
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">7</td>
                      <td className="confluenceTd">
                        <p>
                          I check my registered email inbox and see an email for Dealray website
                          that contain a link.
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">8</td>
                      <td className="confluenceTd">
                        <p>I click the link and Verified my account.</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">9</td>
                      <td className="confluenceTd">
                        <p>
                          And redirect me to the{' '}
                          <a className="external-link" href="http://Dealray.com" rel="nofollow">
                            Dealray.com
                          </a>{' '}
                          website automatically logged in
                        </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">10</td>
                      <td className="confluenceTd">
                        <p>I see the prices</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">11</td>
                      <td className="confluenceTd">
                        <p>I could search any destination and enter dates to search.</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 id="Signupandloginscenarios(Testingcases)-Ticket.1">Ticket</h2>
              <p>
                <span
                  className="confluence-jim-macro jira-issue"
                  data-jira-key="X3UI-5235"
                  data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_600965168_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                >
                  <a
                    href="https://xeni-workspace.atlassian.net/browse/X3UI-5235"
                    className="jira-issue-key"
                  >
                    <span className="aui-icon aui-icon-wait issue-placeholder" />
                    X3UI-5235
                  </a>
                  -<span className="summary">Getting issue details...</span>
                  <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                    STATUS
                  </span>
                </span>
              </p>
              <p />
              <hr />
              <h1 id="Signupandloginscenarios(Testingcases)-Case3:OldRegisteredaccount-ClaimDealrayaccount.">
                Case 3: Old Registered account - Claim Dealray account.{' '}
              </h1>
              <h2 id="Signupandloginscenarios(Testingcases)-Pre-condition.2">Pre-condition</h2>
              <ul>
                <li>
                  <p>User already complete the signup flow</p>
                </li>
                <li>
                  <p>user already registered in users DB</p>
                </li>
                <li>
                  <p>User already set a password </p>
                </li>
                <li>
                  <p>User forgot the password</p>
                </li>
              </ul>
              <h2 id="Signupandloginscenarios(Testingcases)-Stepstoreproduce.2">
                Steps to reproduce
              </h2>
              <div className="table-wrap">
                <table
                  data-table-width={1058}
                  data-layout="default"
                  data-local-id="6a459c11-1707-45d1-a04c-36dc7f2cf4af"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col />
                    <col style={{ width: '367.0px' }} />
                    <col style={{ width: '649.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="numberingColumn confluenceTh" />
                      <th className="confluenceTh">
                        <p>
                          <strong>Actor: Dealray user forgot password</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong> Comments</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">1</td>
                      <td className="confluenceTd">
                        <p>Registered user in Dealray, clicks on Login</p>
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">2</td>
                      <td className="confluenceTd">
                        <p>I´ve already registered my credentials</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">3</td>
                      <td className="confluenceTd">
                        <p>I click on forgot password</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">4</td>
                      <td className="confluenceTd">
                        <p>I received an email in my inbox registered email with a Link</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">5</td>
                      <td className="confluenceTd">
                        <p>I click on the link</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">6</td>
                      <td className="confluenceTd">
                        <p>I´m redirect to wordpress from to claim dealray account.</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">7</td>
                      <td className="confluenceTd">
                        <p>My email address is pre-populate and disabled</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Cannot edit</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">8</td>
                      <td className="confluenceTd">
                        <p>I complete further personal details</p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">9</td>
                      <td className="confluenceTd">
                        <p>I click on claim now </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">10</td>
                      <td className="confluenceTd">
                        <p>I logged in into the website </p>
                      </td>
                      <td className="confluenceTd">
                        <p>then user will go to login page and enter the credential</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="numberingColumn confluenceTd">11</td>
                      <td className="confluenceTd">
                        <p>I could see the prices </p>
                      </td>
                      <td className="confluenceTd">
                        <p />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="confluence-information-macro confluence-information-macro-information">
                <span className="aui-icon aui-icon-small aui-iconfont-info confluence-information-macro-icon" />
                <div className="confluence-information-macro-body">
                  <p>
                    We need to check this with{' '}
                    <a
                      className="confluence-userlink user-mention"
                      data-account-id="5f97a08244658b007112ee94"
                      href="https://xeni-workspace.atlassian.net/wiki/people/5f97a08244658b007112ee94?ref=confluence"
                      target="_blank"
                      data-linked-resource-id={440762370}
                      data-linked-resource-version={1}
                      data-linked-resource-type="userinfo"
                      data-base-url="https://xeni-workspace.atlassian.net/wiki"
                    >
                      Ayush Kumar
                    </a>{' '}
                  </p>
                </div>
              </div>
              <p />
              <h2 id="Signupandloginscenarios(Testingcases)-Ticket.2">Ticket</h2>
              <p>
                <span
                  className="confluence-jim-macro jira-issue"
                  data-jira-key="X3UI-5237"
                  data-client-id="SINGLE_8968e683-7da6-3d4d-98b5-efbfaaa08dc6_600965168_712020:df23df85-661c-4b40-8eba-ce5cc3f7b31e"
                >
                  <a
                    href="https://xeni-workspace.atlassian.net/browse/X3UI-5237"
                    className="jira-issue-key"
                  >
                    <span className="aui-icon aui-icon-wait issue-placeholder" />
                    X3UI-5237
                  </a>
                  -<span className="summary">Getting issue details...</span>
                  <span className="aui-lozenge aui-lozenge-subtle aui-lozenge-default issue-placeholder">
                    STATUS
                  </span>
                </span>
              </p>
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
                <a href="attachments/600965168/600834153.png">image-20240102-153753.png</a>{' '}
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

export default SignUpLoginScenarios
