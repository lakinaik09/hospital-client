import React from 'react';
import { Link } from 'react-router-dom';

const ServicesTwoSingleItem = ({image,title, link}) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="service-box-3 mb-30 text-center">
                    <div className="service-thumb">
                        <Link to="/servicesDetails">
                            <img src={`img/blog/news-thumb-${image}.jpg`} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div className="service-content-box">
                        <div className="service-content">
                            <h3><Link to={`/${link}`}>{title}</Link></h3>
                            {/* <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo.</p> */}
                        </div>
                        <Link to={`/${link}`} className="service-link">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesTwoSingleItem;