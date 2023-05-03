import React from 'react'
import './Footer.css'
import { BsBoxArrowUp } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <a href="#" className='footer__logo'><BsBoxArrowUp /></a> */}

      <div className="footer__copyright">
        <small>
          &copy; Praddyota Hayaran All rights reserved
        </small>
      </div>

      <div className="footer__social-links">
        <span><a href="https://www.linkedin.com/in/praddyota-hayaran-245543201/"><FaLinkedinIn /></a></span>
        <span><a href="https://github.com/praddyotahayaran"><AiFillGithub /></a></span>
        {/* <span><a href=""></a></span> */}
      </div>
    </footer >
  )
}

export default Footer