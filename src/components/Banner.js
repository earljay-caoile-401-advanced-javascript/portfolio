import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is Earl Jay</h1>
      </header>
      <div className="content">
        <p>I'm a software developer.</p>
        <ul className="actions">
          <li>
            <a
              href="https://docs.google.com/document/d/1IJcVRf-8U82K6Wv3EtOznEau34jbHgXlB-VilChfAyk/edit?usp=sharing"
              className="button"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#one" className="button next scrolly">
              See Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
