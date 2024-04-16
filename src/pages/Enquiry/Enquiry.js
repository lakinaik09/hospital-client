import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./Enquiry.scss";

function Enquiry() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"Enquiry"} subtitle={"Enquiry"} />
      <div className="Enquiry">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4647943816935!2d85.88943097500784!3d20.197997881251506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a1831ffa8845%3A0x9cf41e826f5652ff!2sSai%20Saburi%20Hospitals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1713180319628!5m2!1sen!2sin"
            width="100%"
            height="100%"
            
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="title">
          <h3>Have a Question?Get In Touch</h3>
          <p>
            Have a question? Want to book an Appointment for yourself or for
            your children? Give us a call or send an Email to connect Sai
            Saburi.
          </p>
        </div>

        <form className="detail-container">
          <label htmlFor="pname"> </label>
          <input
            type="text"
            id="pname"
            name="patientname"
            placeholder="Enter your Name"
          />
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            required
          />
          <label htmlFor="email"> </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" Enter your Email"
          />
          <label htmlFor="city"></label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your City"
          />
          <label htmlFor="state"></label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your State"
          />
          <label htmlFor="country"></label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter your Country"
          />
          <textarea className="message-input" placeholder="Type your message here..." required></textarea>
           <input type="submit" value="Submit"/>

        </form>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Enquiry;
