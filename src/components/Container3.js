import React from "react";

const Container3 = () => {
  return (
    <>
      <div className="heading3">
        <h4>GALLERY</h4>
      </div>
      <div className="container3" data-aos="flip-right" data-aos-duration="2000">
        <div className="container3_left">
          <a href="">DOWNLOADS</a>
          <a href="">SUGGESTIONS</a>
          <a href="">DON BOSCO ALUMNI</a>
          <a href="">VISION & MISSION</a>
        </div>
        <div className="container3_right">
          <div className="imgleft">
            <img src="./img/g1.jpg" alt="" />
            <img src="./img/g2.jpg" alt="" />
          </div>
          <div className="imgright">
            <img src="./img/g3.jpg" alt="" />
            <img src="./img/g4.jpg" alt="" />
          </div>
        </div>
      </div>
      <a
        href=""
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
    </>
  );
};

export default Container3;
