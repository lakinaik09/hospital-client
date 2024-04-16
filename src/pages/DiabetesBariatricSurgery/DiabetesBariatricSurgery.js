import React from "react";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import "./DiabetesBariatricSurgery.scss"

const DiabetesBariatricSurgery = () => {
  return (
    <div>
      <div>
        <HomeHeader />
        <CommonPageHeader
          title={"DiabetesBariatricSurgery"}
          subtitle={"DiabetesBariatricSurgery"}
        />
        <div className="DiabetesBariatricSurgery">
          <p>
            Genetics, stress and wrong food habits that come with an erratic
            lifestyle, all contribute to a steep rise in diabetes and obesity.
            The Centre for Diabetes and Obesity has a host of facilities to deal
            with these two problems that lead to several other equally harmful
            sub-problems.
          </p>
          <p style={{ fontSize: "17px" }}>Obesity</p>
          <p>
            Obesity results from the excessive accumulation of fat that exceeds
            the body's skeletal and physical standards. According to the United
            States National Institute of Health (NIH), an increase in 20% or
            more above your ideal body weight is the point at which excess
            weight becomes a health risk. Indian bodies and genetics are
            different from their western counterparts. Indians suffer from
            abdominal obesity compared to people in the west whose bodies are
            uniformly obese. Studies say that India will become the global
            diabetes capital by 2050 if the abdominal and lower limb obesity and
            metabolic syndrome are not arrested. For every 10 extra kilograms
            above the stipulated body weight (measured according to height),
            life expectancy of a person reduces by three years.
          </p>

          <h3 style={{ color: "skyblue" }}>
            What is morbid or clinically severe obesity?
          </h3>
          <p>
            Obesity becomes morbid when it reaches the point of significantly
            increasing the risk of one or more obesity-related health conditions
            (also known as co-morbidities). This results either in significant
            physical disability or even death. Morbid obesity is a serious and
            chronic disease, and its symptoms build slowly over an extended
            period of time.
          </p>
          <h3 style={{ color: "skyblue" }}>What are the risks of obesity?</h3>
          <p>
            Obesity is a risk factor for life-threatening diseases, including:
          </p>
          <ul>
            <li>Diabetes</li>
            <li>High Blood Pressure (hypertension)</li>
            <li>Heart Disease</li>
            <li>Obstructive Sleep Apnoea</li>
            <li>Stroke</li>
            <li>Heartburn or Acid Reflux Disease (GERD)</li>
            <li>
              Cancer (in women: endometrial, gallbladder, cervical and uterine;
              in men: colorectal and prostate) Studies show that the risk of
              death from these conditions drops significantly after weight loss.
            </li>
          </ul>

          <p>
            <b>
              In addition, obesity contributes to numerous other medical
              conditions, including:
            </b>
          </p>
          <p>
            Six months after surgery for obesity, patients often find they no
            longer need medications for many of these conditions. Also, many
            women struggling with infertility before surgery find that
            conception is possible after weight loss.
          </p>
          <ul>
            <li>Osteoarthritis and Gout</li>
            <li>Gallbladder Disease and Gallstones</li>
            <li>High-Risk Pregnancy</li>
          </ul>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default DiabetesBariatricSurgery;
