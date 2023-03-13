import React from "react";
import ImageViewer from "./ImageViewer"; 

const Container4 = () => {
  return (
    <>
      <div className="container4" data-aos="fade-up" data-aos-duration="2000">
        <h4>Gallery</h4>
        <ImageViewer/>
        <a
        href="/gallery"
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#b02c2b",
          textDecoration: "none",
          fontSize: "1.2rem",
        }}
      >
        VIEW MORE
      </a>
        {/* <div className="contain_4">
       
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/e1.jpg" alt="" />
              <span>School Activities</span>
            </a>
          </div>
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/careers.jpg" alt="" />
              <span>DBA Careers</span>
            </a>
          </div>
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/e3.jpeg" alt="" />
              <span>CBSE School Toppers</span>
            </a>
          </div>
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/e4.jpg" alt="" />
              <span>Follow Alaknanda</span>
            </a>
          </div>
        </div> */}
        {/* <div className="contain_4">
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/e5.jpg" alt="" />
              <span>Sports & Games</span>
            </a>
          </div>
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/e6.jpg" alt="" />
              <span>Salesian Cooperators</span>
            </a>
          </div>
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/e7.jpg" alt="" />
              <span>Messages & Comments</span>
            </a>
          </div>
          <div className="contain">
            <a href="">
              {" "}
              <img src="./img/e8.jpg" alt="" />
              <span>Health and Physical Education</span>
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Container4;
