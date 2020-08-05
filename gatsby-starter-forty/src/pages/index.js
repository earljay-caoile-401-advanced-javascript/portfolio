import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

function HomeIndex() {
  return (
    <Layout>
      <Helmet
        title="Earl Jay Caoile - Software Developer"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      ></Helmet>

      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article style={{ backgroundImage: `url(${pic01})` }}>
            <header className="major">
              <h3>Operation Code</h3>
              <p>Deploying the Future</p>
            </header>
            <Link to="/portfolio#op-code" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${pic02})` }}>
            <header className="major">
              <h3>Street Youth Ministries</h3>
              <p>Connecting, Partnering, and Affirming Seattle's Youth</p>
            </header>
            <Link to="/portfolio#sym" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${pic03})` }}>
            <header className="major">
              <h3>Rank Up</h3>
              <p>
                Finding Opportunities for Transitioning Veterans and Spouses
              </p>
            </header>
            <Link to="/portfolio#rank-up" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${pic04})` }}>
            <header className="major">
              <h3>Dat Online Store</h3>
              <p>Showcasing React with Redux and Material UI</p>
            </header>
            <Link to="/portfolio#dat-store" className="link primary"></Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>My Purpose</h2>
            </header>
            <p>
              Software development allows people to dream. Whether it's at a
              large company, a small one, or even your business, there are so
              many ways to make a large impact on the world. As a son of
              immigrants who came up with from humble upbringings, I would like
              to make the most of the opportunities given by being in the tech
              industry.
            </p>
            <ul className="actions">
              <li>
                <Link to="/portfolio" className="button next">
                  See Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
