import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Popup = () => {
  const [pop, setpop] = useState(true);
  return (
    <>
      {pop ? (
        <div className="pop">
          <div className="popup">
            <button onClick={() => setpop(!pop)}>
              <FaTimes />
            </button>
            <h6
              style={{ color: "#b02c2b", fontWeight: "400", fontSize: "15px" }}
            >
              CLICK HERE FOR ADMISSION TO CLASSES I TO IX
            </h6>
            <img src="./img/car.jpg" alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Popup;
