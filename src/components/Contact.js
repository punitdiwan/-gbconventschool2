import React from "react";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";
const Contact = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Contact Us" }} />

      <div className="heading-con">
        <h2>Contact</h2>

        <iframe
          className="i-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9751065952823!2d77.41499481439894!3d23.280354212487584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c684974dbbbdd%3A0x15328ee713474bbe!2sDussehra%20Maidan%20Chhola!5e0!3m2!1sen!2sus!4v1677493022258!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="cont">
        <p>
          <b>School</b> - G.B. Convent School
        </p>
        <p>
          <b>Address</b>- Shankaracharya Nagar, Bhopal, India, 462010 (M.P.)
        </p>
        <p>
          <b>Phone no.</b>- 8962523839 , 8358836350 , 9424485443
        </p>
        <p>
          <b>Email</b>- bhopal@gmailcom
        </p>
      </div>
    </>
  );
};

export default Contact;
