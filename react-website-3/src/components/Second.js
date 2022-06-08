import React from 'react'
import './styles/Second.css'
import project from './assets/project.jpg'

const Second = () => {
  return (
    <section className='section-2'>
      <h1 className='about-me'>About Me</h1>

      <div className='container-2'>
        <div className='image-cont'>
          <img src={project} alt='' />
        </div>
        <div className='text-2'>
          <p>Front-End Developer</p>
          <p>React js & Node.js Developer</p>
          <p>UI & UX Designer</p>
          <p>MERN Stack Developer</p>
          <p>Worked for Google,Facebook,Amazon</p>
          <p>5 years Developer Experience</p>
          <p>Good Management ,Communication</p>
        </div>
      </div>
    </section>
  )
}

export default Second