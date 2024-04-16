import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./MakeAnAppointment.scss";
import PntVisComp from "../PntVisComp/PntVisComp";



function MakeAnAppointment() {
  return (
    <div>   <HomeHeader />
    <CommonPageHeader title={"Make an Appointment"} subtitle={"Make an Appointment"} />
    <div className="backdel">

    <div className="make-an-appointment">
     <form method="Post" className="form-container">
          <label htmlFor="pname">Patient Name</label>
          <input type="text" id="pname" name="patientname" placeholder="Patient Name"/>

          <label htmlFor="date&time">Date & Time </label>
          <input type="datetime-local" id="date&time" name="date&time" placeholder="Date & Time"/>

          <label htmlFor="gender">Gender</label>
          <select id="select" name="gender" placeholder="Gender">
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="others">Others</option>
          </select>

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="mobile" pattern="[0-9]{10}" required/>   

           <label htmlFor="email">Email Id</label>
          <input type="email" id="email" name="email" placeholder="Email"/>

          <label htmlFor="seldoctor">Select Doctor</label>
          <select id="select" name="seldoctor" placeholder="Select Doctor">
               <option value="1">DR. GARGI</option>
               <option value="2">DR. GARGI</option>
               <option value="3">DR. GARGI</option>
               <option value="oth4ers">DR. GARGI</option>
          </select> 

          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" placeholder="dd-mm-yy"/>

          <label htmlFor="gname">Gurdian Name</label>
          <input type="text" id="gname" name="gname" placeholder="Gurdian Name"/>

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="City"/>

          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" placeholder="State"/>
          
          <label htmlFor="zipcode">Zipcode</label>
          <input type="text" id="zipcode" name="zipcode" placeholder="Zipcode"/>
         

          <input type="submit" value="Submit"/>
     </form>


  
     </div>
 <PntVisComp/> 
      

    </div>
    <HomeFooter/>
</div>
  );
};

export default MakeAnAppointment;


