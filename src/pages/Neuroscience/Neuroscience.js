import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";

const Neuroscience = () => {
  return (
    <div>
      <HomeHeader />
      <CommonPageHeader title={"Neuroscience"} subtitle={"Neuroscience"} />

      <div
        className="Neuroscience"
        style={{ padding: "30px 120px", marginBottom: "100px" }}
      >
        <p>
          The centre provides cutting-edge care in neurology, neurosurgery and
          interventional neuroradiology. The range of care provided includes
          management of
        </p>

        <div>
          <ul>
            <li>Alzheimer's Disease</li>
            <li>Brain Tumours</li>
            <li>Craniovertebral Junction Abnormalities</li>
            <li>DBS Surgery</li>
            <li>Epilepsy</li>
            <li>Head Injury</li>
            <li>Pituitary Tumours</li>
            <li>Cerebral Aneurysm and AVM</li>
            <li>Subarachnoid Hemorrhage</li>
            <li>Paediatric Brain Tumours & Hydrocephalus</li>
          </ul>
          <ul>
            <li>Normal Pressure Hydrocephalus</li>
            <li>Minimally-Invasive Spine Surgery</li>
            <li>Neuro Modulation Programme</li>
            <li>Spine Tumours</li>
            <li>Spinal Dysraphism</li>
            <li>Parkinson's Disease</li>
            <li>Trigeminal Neuralgia</li>
            <li>Wilson Disease</li>
            <li>Stereotactic Radiosurgery for Brain Tumours</li>
          </ul>
        </div>

        <div>
          <h4>Technology</h4>
          <ul>
            <li>
              With 128 channel Intraoperative EEG, complex Epilepsy and Deep
              Brain Stimulation (DBS) Surgeries for movement disorders, such as
              Parkinson's disease are regularly performed in our centre with
              outstanding outcomes
            </li>
            <li>
              The Interventional Neuroradiology division performs the maximum
              number of neurointerventions in a single centre including acute
              stroke thrombolysis, cict extraction in acute stroke using the
              PENUMBRA device, aneurysm coiling, IMMRIS etc
            </li>
          </ul>
          
        </div>

        <div>
          <h4>Talent</h4>
          <ul>
            <li>Neurologists</li>
            <li>Neurosurgeons</li>
            <li>Neurophysiologist</li>
            <li>Epileptologist</li>
            <li>Interventional Neuro Radiologist.</li>
          </ul>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Neuroscience;
