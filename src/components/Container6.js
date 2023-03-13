import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useQuery } from "graphql-hooks";
import * as constants from "../constants";

const Container6 = () => {
  const { data } = useQuery(constants.Topper);
  const { data: NoticeData } = useQuery(constants.Notice);

  //console.log(data?.Topper[0].Topper_name, "Topper_name");

  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="container6">
        <div className="contain6">
          <div className="card6" data-aos="flip-right" data-aos-duration="3000">
            <p>SCHOOL TOPPER</p>
            <img
              src={`http://0.0.0.0:8055/assets/${data?.Topper[0]?.Topper_image?.id}`}
              alt=""
            />
            <h5>
              {/* NAVITA */}
              {data?.Topper[0].Topper_name}
              </h5>
          </div>
          <div className="card6" data-aos="flip-right" data-aos-duration="3000">
            <p>SCHOOL CALENDER</p>
            <div className="calender">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="card6" data-aos="flip-right" data-aos-duration="3000">
            <p>NOTICE</p>
            <div className="item event">
              <marquee
                direction="up"
                scrollamount="4"
                behaviour="up"
                width="100%"
                height="305px"
              >
                <div className="box-1">
                <h4>{NoticeData?.Notice[0].Notice1_Date}</h4>
                  <p>{NoticeData?.Notice[0].Notice1_Data}</p>
                </div>
                <div className="box-1">
                <h4>{NoticeData?.Notice[0].Notice2_Date}</h4>
                  <p>{NoticeData?.Notice[0].Notice2_data}</p>
                </div>
                <div className="box-1">
                <h4>{NoticeData?.Notice[0].Notice3_Date}</h4>
                  <p>{NoticeData?.Notice[0].Notice3_Data}</p>
                </div>
                <div className="box-1">
                <h4>{NoticeData?.Notice[0].Notice4_Date}</h4>
                  <p>{NoticeData?.Notice[0].Notice4_Data}</p>
                </div>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container6;
