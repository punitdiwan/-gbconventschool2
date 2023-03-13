import React from "react";
import BottomHeader from "./BottomHeader";
import Header1 from "./Header1";
import { useQuery } from "graphql-hooks";
import * as constants from "../constants";

const Blogright = () => {
  const { data } = useQuery(constants.Blogright);

  //console.log(data?.Blog_right[0]?.right_img?.id, "blogdata");

  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Blogs" }} />
      <div className="blogcontent">
        <div className="blog">
          <img
            src={`http://0.0.0.0:8055/assets/${data?.Blog_right[0]?.right_img?.id}`}
            alt=""
          />
          <h3>{data?.Blog_right[0]?.right_title}</h3>
          <p>{data?.Blog_right[0]?.right_description}</p>
        </div>
      </div>
    </>
  );
};

export default Blogright;
