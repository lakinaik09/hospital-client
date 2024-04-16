import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./Testimonials.scss";
import PntVisComp from "../PntVisComp/PntVisComp";

function Testimonials() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"Testimonials"} subtitle={"Testimonials"} />
      <div className="backdel">

      <div className="testimonial">
      <div className="section-grid">
       <div className="card">
        <h3 className="doccard-title">Ashima Kothari</h3>
        <h4 className="doccard-text">
          I was suffering from a chronic illness for years, and it was affecting
          my quality of life. But thanks to the dedicated and skilled medical
          professionals who treated me, I was able to overcome my illness and
          regain my health.
        </h4>
      </div>
      <div className="card">
       
        <h3 className="doccard-title">Ashima Kothari</h3>
        <h4 className="doccard-text">
          I was suffering from a chronic illness for years, and it was affecting
          my quality of life. But thanks to the dedicated and skilled medical
          professionals who treated me, I was able to overcome my illness and
          regain my health.
        </h4>
      </div>
      <div className="card">
        <h3 className="doccard-title">Ashima Kothari</h3>
        <h4 className="doccard-text">
          I was suffering from a chronic illness for years, and it was affecting
          my quality of life. But thanks to the dedicated and skilled medical
          professionals who treated me, I was able to overcome my illness and
          regain my health.
        </h4>
      </div>
      </div>
      </div>
 <PntVisComp/>
 </div>

      <HomeFooter />
    </div>
  );
}

export default Testimonials;
