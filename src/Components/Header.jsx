import React from 'react'
const Header = () => {
    return (
        <div>
            <header className='bg-img'>
                <nav className="bg-clr ">
                    <div className="container ">
                        <div className="d-flex align-items-center justify-space-between pt-25">
                            <div className='d-flex align-items-center gap-12'>
                                <a href=""><svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.6133 7.40008V4.93341H37V38.9734H0.493333L0 4.93341H8.38667V7.40008H4.44L18.7467 27.1334L33.0533 7.40008H28.6133Z" fill="black" />
                                    <path d="M25.1604 0L18.7471 5.92L25.1604 11.84V0Z" fill="black" />
                                    <path d="M11.8396 0L18.2529 5.92L11.8396 11.84V0Z" fill="black" />
                                    <circle cx="18.2534" cy="12.8267" r="1.48" fill="black" />
                                    <circle cx="18.2534" cy="18.7467" r="1.48" fill="black" />
                                </svg>
                                </a>
                                <p className='small3 fw-normal ff-work black-0'>maître d</p>
                            </div>
                            <label for="menuIcon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type="checkbox" id="menuIcon" hidden />
                            <ul class="nav-flip d-flex align-items-center  gap-md-46 gap-25"
                                Id="nav">
                                <li className="nav-botm text-center"><a href="#Home"
                                    className="small1 ff-work fw-normal black-0  ">Home</a>
                                </li>
                                <li className="nav-botm text-center"><a href="#Modules"
                                    className="small1 ff-work fw-normal black-0  ">Modules
                                </a>
                                </li>
                                <li className="nav-botm text-center"><a href="#Pricing"
                                    className="small1 ff-work fw-normal black-0  ">Pricing</a>
                                </li>
                                <li className="nav-botm text-center"><a href="#Features"
                                    className="small1 ff-work fw-normal black-0  ">Features</a>
                                </li>
                                <li className="nav-botm text-center"><a href="#Contact"
                                    className="small1 ff-work fw-normal black-0  ">Contact us</a>
                                </li>
                                <a href="#" className='d-flex align-items-center justify-content-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.70898 16.4198C10.484 16.4194 12.2078 15.8252 13.606 14.7318L18.002 19.1278L19.416 17.7138L15.02 13.3178C16.114 11.9195 16.7086 10.1952 16.709 8.4198C16.709 4.0088 13.12 0.4198 8.70898 0.4198C4.29798 0.4198 0.708984 4.0088 0.708984 8.4198C0.708984 12.8308 4.29798 16.4198 8.70898 16.4198ZM8.70898 2.4198C12.018 2.4198 14.709 5.1108 14.709 8.4198C14.709 11.7288 12.018 14.4198 8.70898 14.4198C5.39998 14.4198 2.70898 11.7288 2.70898 8.4198C2.70898 5.1108 5.39998 2.4198 8.70898 2.4198Z" fill="black" />
                                </svg>
                                </a>


                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='mt-md-110 mt-40 position-relative z_1'>
                    <a href="#" className='head-elp '><svg width="96" height="95" viewBox="0 0 96 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6928 8.63619C25.1126 8.78495 24.8432 8.77556 24.6889 8.90802C12.3651 19.3483 5.09537 32.4648 4.11503 48.7437C3.89581 52.8853 4.66581 57.0195 6.3613 60.8044C8.04478 64.8037 10.9792 68.1495 14.7247 70.3404C18.4702 72.5312 22.825 73.4489 27.1361 72.956C31.7859 72.4687 36.1657 71.2681 39.8032 68.0616C39.7704 65.8552 39.5972 63.6794 39.7343 61.5293C39.779 59.8843 40.1816 58.2689 40.914 56.7953C41.6463 55.3218 42.691 54.0254 43.9751 52.9965C46.0032 51.3628 48.2329 50.9587 49.6481 52.0277C50.447 52.6079 51.0268 53.4407 51.2939 54.3913C51.5609 55.3419 51.4995 56.3547 51.1197 57.2661C50.1528 59.8652 48.9468 62.3689 47.5172 64.7451C46.5155 66.2391 45.402 67.6549 44.1863 68.9805C46.8212 77.1583 55.3663 79.4685 64.3662 74.3798C64.4861 73.1509 64.5366 71.8262 64.7609 70.5343C65.5675 65.8864 67.7179 62.0591 71.9701 59.7543C73.5665 58.8955 75.4092 58.3713 77.1305 59.6732C78.4565 60.6649 78.7975 62.7902 77.9287 65.0527C76.545 68.6548 74.0323 71.4395 71.1925 73.9565C70.2031 74.8305 69.173 75.6424 68.1801 76.4482C71.8102 89.2462 85.0098 96.5559 95.6773 89.4563C95.7283 90.4199 95.9683 91.2301 95.7311 91.7435C95.3181 92.337 94.7201 92.7769 94.0306 92.9944C87.9261 95.205 81.9197 95.4479 76.29 91.6416C72.1677 88.8025 68.8105 84.989 66.5171 80.54C66.1748 79.8997 65.8275 79.2755 65.4417 78.65C65.3885 78.5592 65.252 78.5204 64.9521 78.3247C64.3209 78.4894 63.4774 78.6661 62.7156 78.9212C53.0004 82.122 47.3346 80.2885 41.1571 71.7428L38.4256 73.1475C33.1737 76.0315 27.1128 77.0903 21.1941 76.1578C11.1968 74.6062 3.74558 67.4404 1.44355 57.2793C0.210433 51.8174 0.190192 46.1516 1.38423 40.6811C4.25315 27.2839 10.7011 16.0625 21.6601 7.61396C22.2299 7.16843 22.7985 6.71544 23.3584 6.25623C23.4393 6.18939 23.4459 6.04289 23.6547 5.49587C21.0465 5.31909 18.6771 5.94501 16.3167 6.43934C13.9564 6.93368 11.684 7.49776 9.17694 8.07739C9.07618 7.34854 9.21793 6.60677 9.58036 5.96644C9.94279 5.32611 10.5058 4.82276 11.1825 4.53397C12.5218 3.72608 13.9644 3.10327 15.4709 2.68252C19.5082 1.86717 23.5715 1.11646 27.6638 0.682436C30.9176 0.362972 32.0894 1.95401 31.0714 4.79968C28.9038 10.8392 26.699 16.8695 24.4569 22.8906C24.0011 23.9152 23.4819 24.9103 22.9022 25.8702C21.2197 24.4778 21.6501 23.1826 21.9773 21.958C23.1977 17.6403 24.4032 13.325 25.6928 8.63619ZM75.2005 62.2781C70.1854 63.8049 67.4975 67.621 68.0692 72.2723C71.1445 69.4182 74.1049 66.8432 75.2005 62.2781ZM48.1249 54.8261C43.8853 56.5548 42.3198 59.8883 43.5214 64.3674C45.9622 61.5638 48.0785 58.8824 48.1249 54.8261Z" fill="black" />
                    </svg>
                    </a>
                    <p className='large1 fw-xl black-0 ff-work text-center mw_790  mx-auto mb-60'>Maitre D – Store Management for Barbers</p>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button className='small2 fw-l ff-work white-F orange-btn '>Buy Now</button>
                    </div>
                </div>
            </header>
        </div >
    )
}
export default Header