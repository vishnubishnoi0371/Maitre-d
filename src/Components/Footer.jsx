import React from 'react'
import footerimg from '../assets/images/footer-logo.png'


const Footer = () => {
    return (
        <div className='footer-bg position-relative'>
            <div className="container">
                <div className='d-flex flex-column align-items-center justify-content-center pt-80'>
                    <img className='mb-15' src={footerimg} alt="fooeter-img" />
                    <p className='small ff-work fw-normal white-F lh-150 mw_370 text-center mb-35'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-50 pb-35'>
                    <p className='small ff-work fw-semibold lh-150 white-F'>Navigation</p>
                    <p className='small ff-work fw-semibold lh-150 white-F'>Company</p>
                    <p className='small ff-work fw-semibold lh-150 white-F'>Contact</p>

                </div>
            </div>
            <p className='ff-work fw-normal smallv white-F op-7 text-center ftr-line py-15'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
            <span className='ftr-ep-1'></span>
            <span className='ftr-ep-2'></span>
            <span className='ftr-ep-3'></span>
            <span className='ftr-ep-4'></span>
        </div>
    )
}

export default Footer