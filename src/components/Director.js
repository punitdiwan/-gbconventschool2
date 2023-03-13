import React from "react";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";
const Director = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Director Message" }} />

      <div className="director">
        <div className="dir_img">
          <img src="./img1/director.jpg" alt="" />
        </div>
        <div className="dir_msg">
          <h4>Director Message</h4>
          <p>
            GB Convent Higher Secondary School is an ambitious effort at setting
            up and educational paradigm, both to meet the aspirations of
            students and to offer to teachers a rich and commensurate
            transactional enviornment to cater to it. GB Convent Higher
            Secondary School would be a synonymity of hi-tech education where a
            child acquires the basic facets of knowledge and lays the foundation
            for discipline with profound ecstasy and boundless joy. Our
            institution aims at nurturing the multifaceted personality of the
            child with the help of modern and sophisticated educational aids. We
            aim at working on each and every child to ensure that they become a
            proud part of the national mainstream. Mannernism and etiquettes
            hold a prominent and primary position to create a commendable
            environment . The greatest strength of GB Convent is the high
            quality programmes and transparency in its system. We are fortunate
            to have a school community which includes talented teachers and
            supportive parents who work together to make GB Convent , an ideal
            place for our motivated students to learn and grow. Our
            state-of-the-art infrastructure, coupled with highly qualified and
            well-trained teachers, ensures that the students at GB Convent
            should be able to gain an enriching experience. Furthermore, it has
            been one of my quests in life to make high quality education
            available; accessible through the latest educational technology. The
            mission of the school is to develop responsible global citizens and
            leaders through academic excellence, We will be the foundation for a
            new generation of leaders and innovators, who will continue to pave
            the way for a better and brighter future for our world.
          </p>
        </div>
      </div>
    </>
  );
};

export default Director;
