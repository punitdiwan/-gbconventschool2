import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className="wrapper">
        {/* <h2>The Visit FAQs</h2> */}
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" onClick={() => toggle(i)}>
              <div className="title">
                <h6>{item.title}</h6>
                <span>
                  {selected === i ? <FaMinusCircle /> : <FaPlusCircle />}
                </span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const data = [
  {
    title: "Admission Procedure",
    answer:
      "0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: " Registration Form",
    answer:
      "0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: " Guidelines for Admission",
    answer:
      "0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 0Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  //   {
  //     title:
  //       "What active acne treatments are available thru DR. Kumar Skin and Laser Clinic ",
  //     answer:
  //       "This is a Specialist Nurse led clinic for patients who suffer from mild to moderate acne, who often will benefit from advice on correct skin care and products. As part of our initial assessment we provide each patient with a complimentary chemical peel.",
  //   },
  //   {
  //     title: "What can be done in Acne Scarring ",
  //     answer:
  //       "Treating acne is very important, as effective and early treatment can reduce, prevent or even reverse acne scars.If you have acne and mild to moderate acne scars, our specialist laser nurses’ maybe the ideal first step in organising a scar revision plan.",
  //   },
  //   {
  //     title: "What can be done in Acne Scarring ",
  //     answer:
  //       "Treating acne is very important, as effective and early treatment can reduce, prevent or even reverse acne scars.If you have acne and mild to moderate acne scars, our specialist laser nurses’ maybe the ideal first step in organising a scar revision plan.",
  //   },
];

export default Accordion;
