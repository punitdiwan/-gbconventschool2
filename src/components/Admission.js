import React from "react";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";
import  Accordion  from "../components/Accordion";

const Admission = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Admission Processure" }} />

      <div className="addmision">
        <h4>
          {" "}
          <b>Important message to Prospective Parents/ Students</b>
        </h4>
        <div className="section1">
          <p>
            <b>Dear Prospective Parents / Students,</b>
          </p>
          <br />
          <p style={{ fontSize: "14px" }}>
            Due to Covid-19 Pandemic, the country was under a complete lockdown
            since 22nd March, 2020 . Though the lockdown has been partially
            eased at some zones, the travel restrictions, social stancing and
            other protective measures are likely to stay for a long time. These
            measures are necessary in order to curb the spread of Corona virus
            infection. However, it has created hurdles for prospective parents
            to visit the school for consultation of their queries related to
            admission, such as procedure, Fees, Hostel, etc. Therefore, to
            address the queries of prospective parents / students, the Admission
            Team is facilitating two modes of communication as given below:
          </p>
          <p style={{ paddingLeft: "14px", fontSize: "14px" }}>
            <b> Through Telephone :</b> The parents / students can call the
            admission team on the following numbers between 9AM to 6PM on all
            week days. 99999999, 111111111
          </p>
          <p style={{ paddingLeft: "14px", fontSize: "14px" }}>
            <b>Through Online Meeting :</b> Online one to one interactive
            meeting will be scheduled for prospective parents / students with
            Admission Team Members using various online meeting platforms such
            as Zoom, Microsoft Teams, what’s app etc. The details of these
            online sessions will be notified to parents who have made request
            for online meeting. 99999999, 111111111
          </p>
        </div>

        <div className="section2">
          <div className="section">
            <h3>Registration / Admission open for Session 2022-23</h3>
            <p>Read Admission Procedure & Documentation for Admission carefully</p>
          </div>
          <div className="section">
            <h3 className="reg">Registration Form</h3>
            <a href="">DOWNLOAD</a>
          </div>
        </div>

        {/* <Accordion /> */}
      </div>
      
    </>
  );
};

export default Admission;
