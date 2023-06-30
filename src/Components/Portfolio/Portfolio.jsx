import React from 'react'
import './Portfolio.css'
import port1 from '../../Assets/port1.png'
import port2 from '../../Assets/Port2.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={port1} alt="" />
          </div>
          <h3>Youtube Clone 2.0</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/praddyotahayaran/youtubeclone" target='_blank' className='btn'>Code</a>
            <a href="https://new-9ec26.web.app/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={port2} alt="" />
          </div>
          <h3>Crypto Dashboard</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/praddyotahayaran/cryptodash" target='_blank' className='btn'>Code</a>
            <a href="https://praddyotahayaran.github.io/cryptodash/#/" target='_blank' className='btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio