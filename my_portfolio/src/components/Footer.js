import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://www.instagram.com/divyam2605/"><InstagramIcon /></a>
        <a href="https://www.facebook.com/divyam.dedhia"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/divyam-dedhia/"><LinkedInIcon /></a>
      </div>
      <p> &copy; divyam2605@gmail.com </p>
    </div>
  )
}

export default Footer
