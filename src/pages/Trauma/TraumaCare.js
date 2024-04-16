import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
// import "./TraumaCare.scss"

const TraumaCare = () => {
  return (
    <div>
      <HomeHeader />
      <CommonPageHeader title={"Trauma Care"} subtitle={"Trauma Care"} />
      <div className="trauma-care-content">
        <h3>We Offer 24/7 Healthcare Service:</h3>
        <ul>
          <li>
            A comprehensive Accident & Emergency Department (A&E) for patient
            care supported by a well-coordinated road evacuation service that is
            easily accessible through a dedicated entrance, and has a ramp to
            facilitate the transfer of patients on stretchers and wheelchairs.
          </li>
       

          <li>
            Designed as a state-of-the-art Level-1 Trauma Centre, the unit has:
          </li>
          <ul>
            <li>
              A large treatment room with two operative tables, lights, and
              anesthesia machines.
            </li>
            <li>A plaster room and an isolation room.</li>
            <li>
              Cardiac Monitors, Ventilators, and Portable X-ray, Sonography & 2D
              Echo machines.
            </li>
            <li>
              Two dedicated elevators for immediate transfer of patients to the
              operating rooms and Intensive Care Units.
            </li>
            <li>
              A Pneumatic Tube system for speedy transport of laboratory
              samples.
            </li>
        </ul>

          <li>
            The unit is supported by trained doctors around the clock,
            cutting-edge technology, and ambulance services with critical
            life-saving equipment manned by trained medical and paramedical
            staff. Our ambulances have the ability to transport critically ill
            patients in need of life support.
          </li>

          <li>
            We boast the fastest response time in accidents, heart attacks, and
            paralytic strokes.
          </li>

          <li>
            A rooftop helipad is planned, and when commissioned, will allow air
            ambulances to ferry patients to the hospital, saving many lives.
          </li>
        </ul>
      </div>
      <HomeFooter/>
    </div>
  );
};

export default TraumaCare;
