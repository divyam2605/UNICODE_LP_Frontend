import React from 'react'
import '../styles/Home.css'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Heyy Divyam here!</h2>
        <div className='prompt'>
            <p>I'm an aspiring software developer with a passion for learning and creating!</p>
            <EmailIcon />
            <GithubIcon />
            <LinkedInIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>
            My Skills
        </h1>
        <ol>
            <li className='items'>
                <h3>
                    Backend Programming - Django
                </h3>
            </li>
            <li className='items'>
                <h3>
                    Frontend Programming - React
                </h3>
            </li>
            <li>
                <h2>Languages</h2>
                <span>Python, Java, JavaScript, C</span>
            </li>
        </ol>
      </div>
      <div className='skills'></div>
    </div>
  )
}

export default Home
