import React from "react";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <>
      <div className="footer1">
        <div className="f1" data-aos="flip-right" data-aos-duration="3000">
          <div className="fleft">
            <img src="./img1/logo.png" alt="" />
          </div>
          <div className="fright">
            <h4 style={{ marginBottom: "20px" }}>G.B. CONVENT SCHOOL </h4>
            <div className="fx">
              <FaMapMarkerAlt
                style={{
                  color: "#b02c2b",
                  marginRight: "1.5rem",
                  fontSize: "1.5rem",
                }}
              />
              <p style={{ marginBottom: "20px", fontWeight: "500" }}>
                Shankaracharya Nagar, Bhopal, India, 462010  (M.P.)
              </p>
            </div>

            <div className="fy">
              <BsTelephoneFill className="tele" />
              <p style={{ marginBottom: "20px", fontWeight: "500" }}>
                07552738113, 8120490056, 8435612319
              </p>
            </div>
            <div className="fz">
              <a href="https://www.facebook.com/profile.php?id=100063791054216&sk=photos" target="_blank">
                <RiFacebookFill
                  style={{
                    fontSize: "2rem",
                    border: "2px solid black",
                    borderRadius: "50%",
                    padding: "5px",
                    margin: "10px",
                  }}
                />
              </a>
              <a href="">
                <RiTwitterFill
                  style={{
                    fontSize: "2rem",
                    border: "2px solid black",
                    borderRadius: "50%",
                    padding: "5px",
                    margin: "10px",
                  }}
                />
              </a>
              <a href="">
                <RiInstagramFill
                  style={{
                    fontSize: "2rem",
                    border: "2px solid black",
                    borderRadius: "50%",
                    padding: "5px",
                    margin: "10px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="f2" data-aos="flip-right" data-aos-duration="3000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9751065952823!2d77.41499481439894!3d23.280354212487584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c684974dbbbdd%3A0x15328ee713474bbe!2sDussehra%20Maidan%20Chhola!5e0!3m2!1sen!2sus!4v1677493022258!5m2!1sen!2sus"
            style={{ width: "100%", height: "80%", border: "0" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer2">
        <div className="fa">
          <a href="/gallery">GALLERY</a>
          <a href="/infra">SCHOOL INFORMATION</a>
          <a href="/digital">DIGITAL CLASS ROOMS</a>
          <a href="/transport">TRANSPORT</a>
          <a href="/library">Library</a>
        </div>
        <div className="fa">
          <a href="/updates">NEWS</a>
          <a href="/principal">PRINCIPAL'S DESK</a>
          <a href="/director">DIRECTOR'S DESK</a>
          <a href="/chairman">CHAIRMAN'S DESK</a>
          {/* <a href="">SCHOLAR BADGE WINNERS 2018-2019</a> */}
          {/* <a href="">VISION & MISSION</a> */}
          {/* <a href="">SCHOOL ACCREDIATION</a> */}
          <a href="">INFRASTRUCTURE</a>
        </div>
        <div className="fa">
          <a href="/gallery">ACHIEVES</a>
          <a href="/admission">ADMISSION</a>
          <a href="/gallery">AWARDS & RECOGINTION</a>
          {/* <a href="">CIRCULARS</a> */}
          <a href="/updates">EVENTS</a>
          {/* <a href="">TREDE MARK-DONBOSCO</a> */}
        </div>
        <div className="fa">
          <a href="/admission">ACADEMICS</a>
          <a href="/updates">LATEST UPDATES</a>
          <a href="/contact">CONTACTS</a>
          <a href="/blog">BLOGS</a>
          <a href="/infra">FACILITES</a>
        </div>
        {/* <div className="fa fb">
          <p>
            <b>Copyright © 2023</b>
            <h6 style={{ fontSize: "13px" }}>
              All Rights Reserved - <a href="gbconventschool.com" target="_blank" style={{textDecoration:"none",color:"black"}}>www.gbconventschool.com</a>
            </h6>
          </p>
        </div> */}
      </div>
      <div className="policy" id="footer-policy">
        <div className="policy-row">
          <div className="policy-col">
            <p>Copyright © www.gbconventschool</p>
          </div>
          <div className="policy-col">
            <p>
              Design with <span style={{ color: "rgb(176, 44, 43)" }}><FaHeart /> </span> 
               by <a href="https://maitretech.com/">maitretech.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
