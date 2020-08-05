import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

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
            <Link to="/portfolio" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${pic03})` }}>
            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link to="/portfolio" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${pic04})` }}>
            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link to="/portfolio" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${pic05})` }}>
            <header className="major">
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link to="/portfolio" className="link primary"></Link>
          </article>
          <article style={{ backgroundImage: `url(${pic06})` }}>
            <header className="major">
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link to="/portfolio" className="link primary"></Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul className="actions">
              <li>
                <Link to="/portfolio" className="button next">
                  Get Started
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