import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'

function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Victor Buriticá</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.instagram.com/torvic_ofi/" target="_blank"><FiInstagram/></a>
        <a href="https://wa.link/qems6z" target="_blank"><IoLogoWhatsapp/></a>
        <a href="https://www.linkedin.com/in/victor-buritic%C3%A1/" target="_blank"><FaLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Victor Buriticá. Free to use.</small>
      </div>
    </footer>
  )
}

export default footer