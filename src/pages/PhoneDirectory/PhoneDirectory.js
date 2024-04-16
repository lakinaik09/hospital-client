import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./PhoneDirectory.scss";
import ReachUs from "../ReachUs/ReachUs";

function PhoneDirectory() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader
        title={"Phone Directory"}
        subtitle={"Phone Directory"}
      />
            <div className="backdel">

      <div className="directory">
        <img
          className="imagedir mb-4"
          src="./img/phonedir.png"
          alt="profilepic"
        ></img>

        <table className="timedir">
          <tr className="heading">
            <th>Others</th>
            <th> </th>
          </tr>
          <tr>
            <td>Toll free number</td>
            <td>24 HRS</td>
          </tr>

          <tr>
            <td> Blood Bank</td>
            <td>10:00 am to 06:00 pm</td>
          </tr>

          <tr>
            <td>Emergency Treatment</td>
            <td>24 HRS</td>
          </tr>
        </table>
      </div>
      <ReachUs/>
      </div>
      <HomeFooter />
    </div>
  );
}

export default PhoneDirectory;
