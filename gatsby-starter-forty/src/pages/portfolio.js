import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import opCodePic from '../assets/images/op-code.jpg'
import symPic from '../assets/images/sym.jpg'
import rankupPic from '../assets/images/rankup.jpg'
import datStorePic from '../assets/images/dat-store.jpg'

const Portfolio = props => (
  <Layout>
    <Helmet>
      <title>Projects - Earl Jay's Portfolio</title>
      <meta name="description" content="Projects Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Contributing to Hackathons and Current Open Source Projects</h2>
          </header>
          <p>
            As a software developer, I believe that participating in hackathons
            and other open source projects is one way of giving back to the
            community. Often, nonprofit organizations do not have the resource
            to hire dedicted developers, and some of these organizations also
            use hackathons to ask for help.
          </p>
          <p>
            Hackathons also foster growth through competition and provide
            opportunities for networking. My very first hackathon competition
            was with VetHacks in 2018, and my group happened to win the
            competition as a bonus. Even to this day, I'm still friends with
            some of the participants.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={opCodePic} alt="operation code" />
          </Link>
          <div className="content" id="op-code">
            <div className="inner">
              <header className="major">
                <h3>Operation Code</h3>
              </header>
              <div>
                <i>Deploy the future!</i>
                <br />
                <p>
                  We're the largest community of military veterans, service
                  members, and spouses committed to becoming software developers
                  with the help of mentors, scholarships, and our tech partners.
                </p>
              </div>
              <ul className="actions">
                <li>
                  <a href="https://operationcode.org/" className="button">
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/OperationCode/Start_here"
                    className="button"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={symPic} alt="street youth ministries" />
          </Link>
          <div className="content" id="sym">
            <div className="inner">
              <header className="major">
                <h3>Street Youth Ministries</h3>
              </header>
              <div>
                <i>Connecting, Partnering, and Affirming Seattle's Youth</i>
                <br />
                <p>
                  Street Youth Ministries (SYM) is a non-profit, faith-based
                  organization serving homeless and at-risk youth ages 13-26 in
                  the Seattle area.
                </p>
              </div>
              <ul className="actions">
                <li>
                  <a
                    href="http://www.streetyouthministries.org/"
                    className="button"
                  >
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={rankupPic} alt="rank up" />
          </Link>
          <div className="content" id="rank-up">
            <div className="inner">
              <header className="major">
                <h3>Rank Up</h3>
              </header>
              <p>
                This web application was created as part of the VetHacks October
                2018 hackathon event. It provides an opportunity for military
                veterans and spouses to more easily find job opportunities when
                moving to a new location through a web application that utilizes
                machine learning.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/VetSpouseJobs/FrontEnd"
                    className="button"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={datStorePic} alt="street youth ministries" />
          </Link>
          <div className="content" id="dat-store">
            <div className="inner">
              <header className="major">
                <h3>Dat Online Store</h3>
              </header>
              <div>
                <p>
                  Although this is simply a lab assignment, it highlights my
                  culminative knowledge of React, Redux, Redux Toolkit, and
                  Material UI.
                </p>
              </div>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/earljay-caoile-401-advanced-javascript/redux-ecommerce"
                    className="button"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://nifty-goodall-fcbfde.netlify.app/"
                    className="button"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Portfolio
