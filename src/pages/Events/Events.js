import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import Healthinfo from "../Healthinfo/Healthinfo";

import {Container, Row, Tabs, Tab} from 'react-bootstrap';

import "./Events.scss";

function Events() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"Events"} subtitle={"Events"} />
      <div className="backdel">

       <Container className="Events py-4 "> 
       <Row className="justify-content-center">

      <Tabs justify variant="pills" defaultActiveKey="2023" className="mb-1 p-0 " style={{backgroundColor:"#E0E0E0"}}>
      

        <Tab eventKey="2024" title="2024">
          2024</Tab>
          <Tab eventKey="2023" title="2023">
          2023
          <div border="light" className="p-2">
          <img 
        className="card-image w-25 mt-4 b-4 "  
        src="./img/healthday.jpeg"
      alt="profilepic"/>
      </div>
  
            </Tab>
  
  <Tab eventKey="2022" title="2022">
  2022</Tab>
  <Tab eventKey="2021" title="2021">
  2021</Tab>
  <Tab eventKey="2020" title="2020">
  2020</Tab>
  <Tab eventKey="2019" title="2019">
  2019</Tab>

</Tabs>
</Row>
</Container>
<Healthinfo/>
</div>
      <HomeFooter />
    </div>
  );
}

export default Events;

