import React from "react";
import { AiOutlineRightCircle } from "react-icons/ai";
import { useQuery } from "graphql-hooks";
import * as constants from "../constants";

const Container1 = () => {
  const { data } = useQuery(constants.About);
  
  // console.log(data?.About[0].About_heading, "Slider-daaataaaaa")


  return (
    <>
      <div className="container1">
        <div
          className="contain1left"
          data-aos="flip-right"
          data-aos-duration="3000"
        >
          <h3>
            {data?.About[0].About_heading}
            {/* G.B. CONVENT SCHOOL */}
             </h3>
          <p>
            {data?.About[0].About_para}
            {/* The GB Convent Higher Sec. School prepares students to understand,
            contribute and to succeed in a rapidly changing society, and thus
            make the world a better and more just place. We will ensure that our
            students both the skills a sound liberal arts education provides,
            and the competencies essential for success and leadership in the
            emerging creative economy. We believe that children’s minds in their
            formative years are like mud and need to be provided the right
            environment to flourish. The three important pillars in a young
            child’s life at this stage are the father, mother and the teachers.
            A child is learning largely from his/her immediate environment, an
            environment they feel safe and secure in. Our school provides
            exactly this – an environment where your child can be his/her own
            person, feels at home, is safe and secure and has enough avenues to
            explore. */}
          </p>
          {/* <div className="read">
            <a href="">
              Read More
              <span>
                <AiOutlineRightCircle />
              </span>
            </a>
          </div> */}
        </div>

        <div
          className="contain1right"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <img src="./img1/logo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Container1;
