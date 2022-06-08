import React from 'react'
import './styles/Testimonials.css'
import t1 from './assets/t1.jpg'
import t2 from './assets/t2.jpg'
import t3 from './assets/t3.jpg'

const Testimonials = () => {
  return (
    <section className='testi'>
        <h1>Testimonials</h1>

        <div className='cart-container'>
            <div className='cart'>
                <img src={t1} alt='' />
                <p>Larry H</p>
                <h5>Lorem ipsum , dolor sit amet egjfajfafaljn kgfpajfj jgpjfgj jpgfjaslfjhb pjgjpfpo jksepgjpjgp pjgpjsgpj</h5>
            </div>

            <div className='cart'>
                <img src={t2} alt='' />
                <p>Larry H</p>
                <h5>Lorem ipsum , dolor sit amet egjfajfafaljn kgfpajfj jgpjfgj jpgfjaslfjhb pjgjpfpo jksepgjpjgp pjgpjsgpj</h5>
            </div>

            <div className='cart'>
                <img src={t3} alt='' />
                <p>Larry H</p>
                <h5>Lorem ipsum , dolor sit amet egjfajfafaljn kgfpajfj jgpjfgj jpgfjaslfjhb pjgjpfpo jksepgjpjgp pjgpjsgpj</h5>
            </div>
        </div>
    </section>
  )
}

export default Testimonials