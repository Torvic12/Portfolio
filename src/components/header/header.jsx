import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocials from './HeaderSocials'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi Nice to meet u, I'm</h5>
        <h1>Victor Buriticá</h1>
        <h5 className="text-light">Full Stack Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact"  className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header