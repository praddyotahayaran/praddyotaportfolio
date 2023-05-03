import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/praddyota-hayaran-245543201/" target='_blank'>
            <AiFillLinkedin />
        </a>
        <a href="https://github.com/praddyotahayaran" target='_blank'>
            <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/praddyota-hayaran-245543201/" target='_blank'></a>
    </div>
  )
}

export default HeaderSocials