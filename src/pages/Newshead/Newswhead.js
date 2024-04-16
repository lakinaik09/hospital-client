import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import "./Newshead.scss";

function Newshead() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"Newshead"} subtitle={"Newshead"} />
      <div className="newshead">

          <h1>COMMING SOON</h1>











      
      
      </div>
      <HomeFooter />
    </div>
  );
}

export default Newshead;
