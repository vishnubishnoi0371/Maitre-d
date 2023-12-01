import React from 'react'
import Pricingimg from '../assets/images/pricing-img-1.png'

const Contactus = () => {
    return (
        <div id='Contact'>
            <div className="container">
                <div className="row align-items-center justify-content-center mb-md-110 mb-40">
                    <div className="col-md-6 col-12">
                        <div className='d-flex align-items-center gap-15'>
                            <p className='small1 fw-semibold ff-work pb-10 linear-gradient pt-50'>Contact US</p>
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
                        <p className='ff-work fw-l medium1 black-0 mb-75 mb-sm-30'>Get in touch!</p>
                        <div className='d-flex align-items-center gap-30 mb-md-30 mb-14'>
                            <input type="text" placeholder='Full Name' className='border-outline-none pb-15' />
                            <input type="text" placeholder='Email address' className='border-outline-none pb-15' />
                        </div>
                        <input className='w-100 border-outline-none pb-15 mb-md-30 mb-14' type="text" placeholder='Company Name ' />
                        <textarea className='w-100 border-outline-none resize_none pb-15' name="id" placeholder="Message"></textarea>
                        <button className='small2 fw-l ff-work white-F orange-btn mt-30'>Submit</button>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className='w-100' src={Pricingimg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contactus


