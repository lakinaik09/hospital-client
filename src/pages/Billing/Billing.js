import React from "react";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeFooter from "../Home/Home/HomeFooter/HomeFooter";
import Accordion from 'react-bootstrap/Accordion';
import PntVisComp from "../PntVisComp/PntVisComp";


import "./Billing.scss";

function Billing() {
  return (
    <div>
      {" "}
      <HomeHeader />
      <CommonPageHeader title={"FAQs"} subtitle={"FAQs"} />
      {/* <div className="Bill">
         <h3 className="title">Frequency Asked Questions</h3>
        <b className="question">What is the mode of payment?</b>
        <p className="ans">
          We will bill services you receive based on our tariffs. An itemised
          statement of your account will be made available to you on request
          (this is not applicable for packages). You will be given interim bills
          and are requested to replenish the advance amount periodically. Your
          bill can be settled with cash, pay orders, Demand Drafts, Debit/Credit
          Cards (Visa or MasterCard). The hospital does not accept cheques
          except for the planned admission where the cheque can be cleared
          before the admission.
        </p>
        <b className="question">What financial arrangements should be made prior to admission?</b>
        <p className="ans">
          Financial arrangements for your medical care at our hospital must be
          made prior to or at the time of admission either through Insurance,
          Corporate Tie-up or Advance Deposit.
        </p>
      </div> */}




<div className="backdel">
<div className="Bill">
<h3 className="title mb-3">Frequency Asked Questions</h3>

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">

        <Accordion.Header>What is the mode of payment?</Accordion.Header>
        <Accordion.Body>
        We will bill services you receive based on our tariffs. An itemised
 statement of your account will be made available to you on request
 (this is not applicable for packages). You will be given interim bills
 and are requested to replenish the advance amount periodically. Your
 bill can be settled with cash, pay orders, Demand Drafts, Debit/Credit
 Cards (Visa or MasterCard). The hospital does not accept cheques
 except for the planned admission where the cheque can be cleared
 before the admission.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What financial arrangements should be made prior to admission?</Accordion.Header>
        <Accordion.Body>
        Financial arrangements for your medical care at our hospital must be
 made prior to or at the time of admission either through Insurance,
 Corporate Tie-up or Advance Deposit.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>

 <PntVisComp/>
 </div>

      <HomeFooter />
    </div>
  );
}

export default Billing;
