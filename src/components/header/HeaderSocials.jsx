import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/krishanmaan" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/krishanmaan" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://x.com/Krishanmaan_" target="_blank" rel='noreferrer'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials