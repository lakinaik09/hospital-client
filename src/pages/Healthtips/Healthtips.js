import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
//import "./Healthtips.scss";
import { Col, Container, Row } from "react-bootstrap";

function Healthtips() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"Healthtips"} subtitle={"Healthtips"} />
      <Container className="healthtips  my-5 ">
        <Row>
          <Col>
            <div className="tipscard">
              <img
                className="tipscard-image img-fluid"
                src="./img/brussels.jpg"
                alt="profilepic"
              ></img>
              <h3 className="tipscard-title">Healthy Brussels Sprouts</h3>
              <h4 className="tipscard-text">
                Brussels sprouts are nutrient powerhouses, providing a range of
                vitamins, minerals, antioxidants, and a little bonus plant
                protein, according to MedlinePlus...
              </h4>
            </div>
          </Col>
          <Col>
            <div className="tipscard">
              <img
                className="tipscard-image img-fluid"
                src="./img/scoliosis2.jpg"
                alt="profilepic"
              ></img>
              <h3 className="tipscard-title"> Symptoms of Scoliosis</h3>
              <h4 className="tipscard-text">
                Scoliosis is a condition in which the spine begins to take a
                curve sideways, it may also be a C or S-shaped curve. Scoliosis
                can affect a person at any age but it becomes difficult...
              </h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="tipscard">
              <img
                className="tipscard-image img-fluid"
                src="./img/skindry.jpg"
                alt="profilepic"
              ></img>
              <h3 className="tipscard-title">How to prevent day skin in summer?</h3>
              <h4 className="tipscard-text">
                A very common skin condition yet not well understood by the
                general public.The most common cause of dryness...
              </h4>
            </div>
          </Col>
          <Col>
            <div className="tipscard">
              <img
                className="tipscard-image img-fluid"
                src="./img/laryngitis.jpg"
                alt="profilepic"
              ></img>
              <h3 className="tipscard-title">
                How to relieve laryngitis symptoms?
              </h3>
              <h4 className="tipscard-text">
                Laryngitis is inflammation of the voice box (larynx). This organ
                sits in your upper neck just past the back of your throat...
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
      <HomeFooter />
    </div>
  );
}

export default Healthtips;
