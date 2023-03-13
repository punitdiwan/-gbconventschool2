import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

const BottomHeader = ({ data }) => {
  // console.log("data from bootm header", data);
  return (
    <>
      <div className="main">
        <p>
          HOME <RxChevronRight /> <b>{data.name}</b>
        </p>
        <form action="" className="form">
          <span>
            <FaSearch />
          </span>

          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="input"
          />
        </form>
      </div>
    </>
  );
};

export default BottomHeader;
