import React from "react";
import "./PntVisComp.scss";
import { Link } from "react-router-dom";

function PntVisComp() {
  return (
    <div>
      {" "}
     
     
      <div className="PntVisComp">
        <div className="box">
          <h3 className="pntitle">PATIENT AND VISITORS</h3>
          <ul className="list">
            <li className="lim">
              <Link to="/find-a-doctor">Find a doctor</Link>
            </li>
            <li className="lim">
              <Link to="/make-an-appointment">Make an Appointment</Link>
            </li>
            <li className="lim">
              <Link to="/billing">Billing</Link>
            </li>
            <li className="lim">
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li className="lim">
              <Link to="/patient-guide-visitors">Patient Guide & Visitors</Link>
            </li>
            <li className="lim">
              <Link to="/online-reports-portal">Online Report Portal</Link>
            </li>
            <li className="lim">
              <Link to="/timings">Timings</Link>
            </li>
          </ul>
        </div>
        <div className="btndoc">
        <Link to="/find-a-doctor" className="view-doctor">
           View Doctor
        </Link>
        </div>
      </div>
     
    </div>
  );
}

export default PntVisComp;
