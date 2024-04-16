import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./PatientGuide.scss";
import PntVisComp from "../PntVisComp/PntVisComp";


function PatientGuide() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"Patient Guide"} subtitle={"Patient Guide"} />
      <div className="backdel">

      <div className="patientguide">
        <h3 className="titlee">Appointments</h3>
        <p>For appointments, please contact us on (+91) 9438782020.</p>

        <h3 className="titlee">Accidents and Emergency</h3>
        <p>
          Our emergency department works around the clock. In case of any
          emergency, contact the casualty medical officer on (+91) 9438782020.
        </p>

        <h3 className="titlee">Ambulance Services</h3>
        <p>
          We have three fully equipped ambulances available for transporting
          patients to and from the hospital. For availing this service, please
          contact us on (+91) 9438782020. Toll Free Number 1800 0000 0000
        </p>
      </div>
 <PntVisComp/>
 </div>

      <HomeFooter />
    </div>
  );
}

export default PatientGuide;
