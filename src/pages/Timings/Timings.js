import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./Timing.scss";
import PntVisComp from "../PntVisComp/PntVisComp";

function Timing() {
     return (
          <div>
               {" "}
               <HomeHeader />
               <CommonPageHeader title={"Timing"} subtitle={"Timing"} />
               <div className="backdel">
               <div className="timing">
                    <table className="timetable">
                         <tr>
                              <th>Department</th>
                              <th>Timings</th>
                         </tr>

                         <tr>
                              <td>Stress Test</td>
                              <td>09:00 AM to 08:00 PM</td>
                         </tr>

                         <tr>
                              <td>Physical Medicine & Rehabilitation </td>
                              <td>08:00 AM to 04:00 PM</td>
                         </tr>
                    </table>
                    <br />
                    <div className="title mt-5"><h3>All In Patient areas except ICUs</h3></div>
                    <div className="flex-container">
                         <img
                              className="card-image"
                              src="./img/doctor.png"
                              alt="profilepic" height={100}
                         ></img>
                         <div>
                         <h4>05:00 PM To 07:00 PM</h4>
                         <p>Everyday</p>
                         </div>

                    </div>

                    <div className="title mt-5"><h3> Visiting Hours For ICU'S</h3></div>
                    <div className="d-flex gap-3">
                    <div className="flex-container">
                         <img
                              className="card-image"
                              src="./img/doctor.png"
                              alt="profilepic" height={100}
                         ></img>
                         <div>
                         <h4>11:00 AM To 01:00 PM</h4>
                         <p>All Days</p>
                         </div>

                    </div>

                    <div className="flex-container">
                         <img
                              className="card-image"
                              src="./img/doctor.png"
                              alt="profilepic" height={100}
                         ></img>
                         <div>
                         <h4>05:00 PM To 07:00 PM</h4>
                         <p>All Days</p>
                         </div>
                    </div>
                    </div >
                    <div className="mt-5">
                    <b>Children are not allowed as visitors in the hospital.</b><br></br>
                    <b>All patient visitors will be allowed access to In Patient floors only when carrying valid visitor passes.</b>
                    </div>        
               </div>
               <PntVisComp/>
               </div>
               <HomeFooter />
          </div>
     );
}

export default Timing;
