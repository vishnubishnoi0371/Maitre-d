import React from 'react'
import Moduleimg from '../assets/images/modules-img.png'


const Modules = () => {
    return (
        <div id='Modules'>
            <div className="container">
                <div className='d-flex align-items-center justify-content-center gap-15'>
                    <p className='small1 fw-semibold ff-work pb-10 linear-gradient pt-50'>Modules</p>
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
                <h2 class="ff-work medium1 fw-7 color-black text-center mb-60">Why Choose <span class="linear-gradient"> Maître
                    D?</span>
                </h2>
                <div className="row align-items-center justify-content-center mb-md-110 mb-40">
                    <div className="col-md-6 col-12 d-flex justify-content-center">
                        <div>
                            <img className='mw-440 w-100' src={Moduleimg} alt="sec-1-img" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className='small3 fw-l black-0 ff-work pb-15'>Manage Your <span className='linear-gradient'> Customer Queues</span></p>
                        <p className='small1 fw-normal black-0 ff-work op-7 lh-150 mb-md-30 mb-14 mw_470'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                        <p className='small1 fw-normal black-0 ff-work op-7 lh-150 mb-md-30 mb-14 mw_470'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                        <button className='small2 fw-l ff-work white-F orange-btn '>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modules