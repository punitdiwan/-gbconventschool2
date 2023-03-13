import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";
import { useQuery } from "graphql-hooks";
import * as constants from "../constants";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const { data } = useQuery(constants.Blog);
  const { data: Blogdata } = useQuery(constants.Blog_right);

  //console.log(Blogdata?.Blog_right[0]?.right_img, "Blog-daaataaaaa");


  
  //console.log("data", data)
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Blogs" }} />
      <div className="blogs-main">
        <div className="blogs1">
          {data?.Blogs.map((item) => (
            <div className="blog" key={item.id}>
              <img
                src={`http://0.0.0.0:8055/assets/${item.blog_image?.id}`}
                alt=""
              />
              <h3>{item.blog_heading}</h3>
              <h5>{item.blog_para}</h5>
              <p>
                <FaCalendarAlt /> last Updated : {item.Blog_date}
              </p>
              {/* <a href="/blogcontent">continue reading...</a> */}
              <NavLink to={`/blogcontent/${item.id}`}>
                continue reading...
              </NavLink>
            </div>
          ))}

          {/* <div className="blog">
            <img
              src={`http://0.0.0.0:8055/assets/${data?.Blogs[1]?.blog_image?.id}`}
              alt=""
            />
            <h3>{data?.Blogs[1]?.blog_heading}</h3>
            <h5>{data?.Blogs[1]?.blog_para}</h5>
            <p>
              <FaCalendarAlt /> last Updated : {data?.Blogs[1]?.Blog_date}
            </p>
            <a href="/blogcontent">continue reading...</a>
          </div> */}
        </div>

        <div className="blogs2">
          {Blogdata?.Blog_right.map((item) => (
            <div className="blogright" key={item.id}>
              <img
                src={`http://0.0.0.0:8055/assets/${item.right_img?.id}`}
                alt=""
              />
              <NavLink to={`/blogright${item.id}`}>{item.right_title}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
