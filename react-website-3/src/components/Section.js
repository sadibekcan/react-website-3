import React from 'react'
import './styles/Section.css'
import man from './assets/man.png'

const Section = () => {
  return (
    <section className='main-section'>
        <div className='container'>
            <div className='texts'>
                <h1>Hello My Name İs</h1>
                <h1 className='h1-big'>Sadi Bekcan</h1>
                <p>Proffessional front-end React.js Developer with 5 years of experience and 3 years in the same position</p>
                <button className='text-button'>My Work</button>
            </div>

            <div className='image'>
                <img src={man} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Section