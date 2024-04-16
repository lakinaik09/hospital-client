import React from "react";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg pt-115 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-8">
               
                  <div className="emmergency-call fix">
                    <div className="emmergency-call-icon f-left">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="emmergency-call-text f-left">
                      <h5>Emergency number</h5>
                      <span>+91 9438782020</span>
                    </div>
                  </div>
                  <div className="footer-logo mb-35">
                    <Link to="/">
                      <img
                        src="https://saisaburihospitalbalakati.com/images/logo-grey.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="footer-contact-content mb-25">
                    <p>
                      Saisaburi Hospital is a state-of-the-art healthcare
                      hospital that is committed to providing high-quality
                      medical care to patients. Located in a convenient and
                      accessible area, the hospital is equipped with the latest
                      medical equipment and technology, and staffed by highly
                      trained and experienced medical professionals.
                    </p>
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li>
                        <i className="far fa-envelope"></i>
                        saihealthsciencecollege@gmail.com
                      </li>
                      <li>
                        <i className="far fa-flag"></i>Panchayat Road, Puran
                        padhan, Balakati, Pin-752100
                      </li>
                    </ul>
                  </div>
                
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                <div className="footer-widget mb-30">
                  <div className="footer-title">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/departments">Departments & Services</Link>
                      </li>
                      <li>
                        <Link to="/patients">Patients & Visitor</Link>
                      </li>
                      <li>
                        <Link to="/doctors">Doctors Profile</Link>
                      </li>
                      <li>
                        <Link to="/health-info">Health Information</Link>
                      </li>
                      <li>
                        <Link to="/enquiry">Enquiry</Link>
                      </li>
                      <li>
                        <Link to="/phone-directory">Phone Directory</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                <div className="footer-widget mb-30">
                  <div className="footer-title">
                    <h3>Usefull Links</h3>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link to="/faqs">FAQS</Link>
                      </li>
                      <li>
                        <Link to="/site-map"> Site Map</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright text-center">
                  <p className="white-color">Copyright by@ BasicTheme - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
