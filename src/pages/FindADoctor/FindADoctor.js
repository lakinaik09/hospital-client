import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./FindADoctor.scss";
import PntVisComp from "../PntVisComp/PntVisComp";


function FindADoctor() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"Find a Doctor"} subtitle={"Find a Doctor"} />
      <div className="backdel">
      <div className="findadoc">

      <div className="card">
        <h4>Meet the Doctors</h4>
        <img
          className="card-image"
          src="./img/doctor.png"
          alt="profilepic"
        ></img>
        <h4 className="card-title">DR. MANMATHNATH</h4>
        <h5 className="card-text">
          <span>Qualification:</span>BPT, MPT( ORTHO)
          <span>Department:</span>ORTHOPEDIC
          <span>Specialization:</span>ORTHO
        </h5>
      </div>
      </div>
      <PntVisComp/>
      </div>

      <HomeFooter />
    </div>
  );
}

export default FindADoctor;
