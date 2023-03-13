import React from "react";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";

const Management = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Chairman Message" }} />

      <div className="management">
        <div className="manage_left">
          <img src="./img1/chairman.jpg" alt="" />
        </div>
        <div className="manage_right">
          <h4>Chairman Message</h4>
          <p>
            My Dear Students, I welcome you to this new academic session of
            profound hopes and aspirations with the prayerful best wishes for a
            prospectful and enriching start at GB Convent Higher Secondary
            School. Quality is a habit, commitment and hard work a virtue, here.
            Twenty Three years of enlightening lives was a journey through
            creativity, innovation and empowerment in every realm of
            multifarious and multi dimensional activities through a host of
            committees, clubs and cells to ensure the quality deliverance. With
            the solemn desire to promote quality education, we dedicate GB
            Convent Higher Secondary School to the Nation. It was the vision and
            will, which led us to success and is continuing to lead us. It was
            the unflinching quest for excellence that took us to new heights.
            The dedication and commitment to quality made us unique. We are
            indeed grateful to all of you for your kind support which has served
            as a source of inspiration and encouragement for us to strive for
            excellence. People of Bhopal no doubt have an institution which
            could fulfill their demands of quality education. My objective to
            start GB Convent Higher Secondary School was to make education
            available to all who are desirous of getting it. We also visualize
            that social transformation can be brought about through the medium
            of dynamic institution. The Strength of this institute lies in the
            relationship amongst the juniors, seniors, performers and parents.
            We have always tried to provide better services and facilities
            through improved infrasrructurc and better education by
            incorporating innovative methods. The knowledge made accessible
            through the latest technology aids of education. We bring to them
            today's world and they create their world of tomorrow. With Best
            Wishes,
          </p>
        </div>
      </div>
    </>
  );
};

export default Management;
