import React from 'react';
import { Link } from 'react-router-dom';

const HomeAboutArea = () => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5 about_left">
                     <div className="medical-icon-brand-2">
                        <img src="img/about/medical-brand-icon-border.png" alt=""/>
                     </div>
                     <div className="about-left-side pos-rel mb-30">
                        <div className="about-front-img">
                           <img src="https://saisaburihospitalbalakati.com/images/operation-img11.jpg" alt=""/>
                        </div>
                        <div className="about-shape">
                           <img src="img/about/about-shape.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>WELCOME TO SAI SABURI HOSPITAL</h5>
                           <h1>Our Departments</h1>
                        </div>
                        <div className="about-text">
                           <p>Our hospital departments work together to provide comprehensive medical care to patients with a wide range of health conditions and needs.</p>
                           
                        </div>
                        <div className="about-author d-flex align-items-center">
                           <Link to={'/'}  className='btn-primary px-3 py-2 rounded'>View All</Link>
                           {/* <div className="author-ava">
                              <img src="https://img.freepik.com/free-photo/smiling-young-doctor-hospital-hall_23-2148351999.jpg?t=st=1710141247~exp=1710144847~hmac=856a4391b3b2a2a7fc16480cdbec385084424e6c2187cebcf628d3538e7b1aea&w=360" alt=""/>
                           </div>
                           <div className="author-desination">
                              <h4>Rosalina D. Williamson</h4>
                              <h6>founder</h6>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAboutArea;