import React from "react";
import "./Healthinfo.scss";
import { Link } from "react-router-dom";

function Healthinfo() {
  return (
    <div>
      {" "}
     
     
      <div className="Healthinfo">
        <div className="box">
          <h3 className="pntitle">HEALTH INFO</h3>
          <ul className="list">
            <li className="lim">
              <Link to="/health-tips">Health Tips</Link>
            </li>
            <li className="lim">
              <Link to="/events">Events</Link>
            </li>
            <li className="lim">
              <Link to="/event-bulletin">Event Bulletin</Link>
            </li>
            <li className="lim">
              <Link to="/news-head">News Head</Link>
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

export default Healthinfo;
