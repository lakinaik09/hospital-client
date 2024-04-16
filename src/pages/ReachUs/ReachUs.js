import React from "react";
import "./ReachUs.scss";
import { Link } from "react-router-dom";

function ReachUs() {
  return (
    <div>
      {" "}
     
     
      <div className="ReachUs">
        <div className="box">
          <h3 className="pntitle">Contact</h3>
          <ul className="list">
            <li className="lim">
              <Link to="/phone-directory">Phone Directory</Link>
            </li>
            <li className="lim">
              <Link to="/enquiry">Enquires</Link>
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

export default ReachUs;
