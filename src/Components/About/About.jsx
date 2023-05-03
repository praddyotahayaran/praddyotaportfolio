import React from 'react'
import './About.css'
import Me from '../../Assets/me-about.jpg'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <AiOutlineUser className="about__icon" />
              <h5>Name</h5>
              <small>Praddyota Hayaran</small>
            </article>

            <article className="about__card">
              <BiBookBookmark className="about__icon" />
              <h5>Education</h5>
              <small>Computer Application</small>
            </article>

            <article className="about__card">
              <HiMail className="about__icon" />
              <h5>Email</h5>
              <small>ln18bca11016@gmail.com</small>
            </article>
          </div>

            <p>I am a creative developer and I am excited about creating stunning websites. My expertise lies in translating designs into fully functional websites, while utilizing my development skills to enhance and customize their features. My goal is to craft visually appealing, user-friendly websites that provide a seamless browsing experience.</p>

            {/* <a href="#contact" className='btn btn-primary'>Contact</a> */}
        </div>
      </div>
    </section>
  )
}

export default About