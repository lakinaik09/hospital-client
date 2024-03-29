import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../../../components/Shared/Sidebar/Sidebar";
import useGlobalContext from "../../../../hooks/useGlobalContext";

const HomeHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();
  return (
    <>
      <header>
        <div className="top-bar d-none d-md-block">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1 m-0">
                <div className="header-info text-start">
                  <span>
                    <i className="fas fa-phone"></i> +1 800 833 9780
                  </span>
                  <span>
                    <i className="fas fa-envelope"></i> info@example.com
                  </span>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-4">
                <div className="header-top-right-btn f-right">
                  <Link to="/contact" className="primary_btn">
                    Make Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"
          }
        >
          <div className="container menu_wrapper">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                <div className="logo logo-circle pos-rel">
                  <Link to="/">
                    <img
                      className=""
                      src="https://saisaburihospitalbalakati.com/images/logo-grey.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-6 col-6">
                <div className="header-right f-right">
                  <div className="header-lang f-right pos-rel d-none d-lg-block">
                    {/* <Link to={'/'} className="login-btn">Login</Link> */}
                    {/* <div className="lang-icon">
                                 <img src="img/icon/lang.png" alt=""/>
                                    <span>EN<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 <li><a href="#">USA</a></li>
                                 <li><a href="#">UK</a></li>
                                 <li><a href="#">CA</a></li>
                                 <li><a href="#">AU</a></li>
                              </ul> */}
                  </div>
                  {/* <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div> */}
                </div>
                <div className="header__menu f-right">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/departments">Department & Services+</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/trauma-care">
                              Trauma Care (Emergency)
                            </Link>
                          </li>
                          <li>
                            <Link to="/critical-care">Critical Care</Link>
                          </li>
                          <li>
                            <Link to="/paediatrics-neonatology">
                              Paediatrics & Neonatology
                            </Link>
                          </li>
                          <li>
                            <Link to="/medicine-rehabilitation">
                              Medicine & Rehabilitation
                            </Link>
                          </li>
                          <li>
                            <Link to="/neuroscience">Neuroscience</Link>
                          </li>
                          <li>
                            <Link to="/bone-joint">Bone & Joint</Link>
                          </li>
                          <li>
                            <Link to="/diabetes-bariatrics-surgery">
                              Diabetes & Bariatrics Surgery
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/doctors">Patient & Visitor +</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/find-a-doctor">Find a doctor</Link>
                          </li>
                          <li>
                            <Link to="/make-an-appointment">
                              Make an Appointment
                            </Link>
                          </li>
                          <li>
                            <Link to="/billing">Billing</Link>
                          </li>
                          <li>
                            <Link to="/testimonials">Testimonials</Link>
                          </li>
                          <li>
                            <Link to="/patient-guide-visitors">
                              Patient Guide & Visitors
                            </Link>
                          </li>
                          <li>
                            <Link to="/online-reports-portal">
                              Online Reports Portal
                            </Link>
                          </li>
                          <li>
                            <Link to="/timings">Timings</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/health-info">Health Info +</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/health-tips">Health Tips</Link>
                          </li>
                          <li>
                            <Link to="/events">Events</Link>
                          </li>
                          <li>
                            <Link to="/event-bulletin">Event Bulletin</Link>
                          </li>
                          <li>
                            <Link to="/news-head">News Head</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/doctors-profile">Doctors' Profile</Link>
                      </li>
                      <li>
                        <a href="#">Reach Us +</a>
                        <ul className="submenu">
                          <li>
                            <Link to="/phone-directory">Phone Directory</Link>
                          </li>
                          <li>
                            <Link to="/enquiry">Enquiry</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <button className="btn-primary px-3 py-1 rounded">
                          Login
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="side-menu-icon d-lg-none text-end">
                  <button
                    onClick={handleShow}
                    className="side-toggle border-0 bg-transparent"
                  >
                    <i className="fas fa-bars"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeHeader;
