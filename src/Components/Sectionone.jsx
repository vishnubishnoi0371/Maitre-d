import React from 'react'
import sec1img from '../assets/images/sec-1-img.png'

const Sectionone = () => {
  return (
    <div id='Home' className='container'>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <div>
            <img className='mw-440 w-100' src={sec1img} alt="sec-1-img" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className='d-flex align-items-center gap-15'>
            <p className='small1 fw-semibold ff-work pb-10 linear-gradient pt-50'>About US</p>
            <a href="#" className='mt-30'><svg width="44" height="1" viewBox="0 0 44 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="44" y2="0.5" stroke="black" />
              <line y1="0.5" x2="44" y2="0.5" stroke="url(#paint0_linear_19268_2038)" />
              <defs>
                <linearGradient id="paint0_linear_19268_2038" x1="6.67021" y1="1" x2="7.99292" y2="7.77879" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FD9B2B" />
                  <stop offset="1" stop-color="#F14F09" />
                </linearGradient>
              </defs>
            </svg>
            </a>

          </div>
          <p className='medium1 black-0 ff-work fw-l pb-15'>What is <span className='linear-gradient'> Maître D?</span></p>
          <p className='small1 fw-normal black-0 ff-work op-7 mw_430 lh-168'>Maître D is a full service solution, designed specifically for salons and barbershops. Our approach is modular, which means you only pay for the functionality that you need. Each module is completely integrated into the solution, so your entire business always remains syncronized. Maître D allows you to see everything within your business, from one location. </p>
        </div>
      </div>
    </div>
  )
}

export default Sectionone