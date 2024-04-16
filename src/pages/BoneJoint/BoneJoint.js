import React from "react";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import "./BoneJoint.scss"

const BoneJoint = () => {
  return (
    <div>
      <div>
        <HomeHeader />
        <CommonPageHeader title={"BoneJoint"} subtitle={"BoneJoint"} />
        <div className="bonejoint">
          <p style={{ fontSize: "17px" }}>
            We have successfully performed over 1668+ Joint Replacement
            Surgeries, 4753+ Arthroscopic Surgeries and 1864+ Spine Surgeries
          </p>

          <h3 style={{ color: "skyblue" }}>Technology</h3>

          <ul>
            <li>
              The centre has dedicated Paediatric ICUs (PICU) and Neonatal ICUS
              (NICU) to provide special care to entically ill children and
              newborns. The centre is equipped with High Frequency Jet
              Ventilation (HFJV) for children with complex lung problems and
              Neonatal Transport Incubator to transfer critically ill babies to
              the hospital
            </li>
          </ul>

          <h3 style={{ color: "skyblue" }}>Services offered</h3>
          <p>
            The centre offers the most comprehensive treatment for disorders of
            the musculoskeletal system. The centre specialises in the use of
            orthobiologics like
          </p>
          <ul>
            <li>
              Autologous chondrocytes for articular (joint) cartilage repair
            </li>
            <li>
              Autologous osteoblasts and stem cells for bone repair in avascular
              necrosis
            </li>
            <li>Platelet Rich Plasma (PRP) for musculotendinous problems</li>
          </ul>
          <h3 style={{ color: "skyblue" }}>Technology</h3>
          <p>
            The Centre has dedicated operation theatres supported by
            Computer-Aided Navigation Systems for Joint Replacement &
            Arthroscopic Surgery that provide accuracy and in turn superior
            long-term results. Our Physical Medicine and Rehabilitation
            Programme supports this centre and ensures that all our patients get
            back home faster and with greater independence.
          </p>
          <h3 style={{ color: "skyblue" }}>Talent</h3>

          <p> The centre offers extensive expertise in</p>
          <ul>
            <li>Trauma</li>
            <li>Spine Surgery</li>
            <li>Rheumatology</li>
            <li>Paediatric Orthopaedics</li>
            <li>Arthroscopic Surgery</li>
            <li>Sports Orthopaedics</li>
            <li>Joint Replacement</li>
          </ul>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default BoneJoint;
