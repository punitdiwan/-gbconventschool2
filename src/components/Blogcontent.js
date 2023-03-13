import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";
import { useQuery } from "graphql-hooks";
import * as constants from "../constants";
import { useParams } from "react-router-dom";
import gql from "graphql-tag";

const Blogcontent = () => {
  const params = useParams();

  //console.log("param", params);
  let id = params.id;
  console.log("id", id);

  // const DATA = `query fetchBlog(${id}: ID!) {
  //   Blogs_by_id(id:${id}){
  //     id
  //     Blog_date
  //   }
  // }
  //   `;

  const DATA = `
  query{
    Blogs_by_id(id:${id}){
      Blog_date
      blog_para
      blog_heading
      Blog_description
      blog_image{
        id
      }
    }
    }
      
`;

  const { data } = useQuery(DATA, id);

  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Blogs" }} />
      <div className="blogcontent">
        <div className="blog">
          <img
            src={`http://0.0.0.0:8055/assets/${data?.Blogs_by_id?.blog_image?.id}`}
            alt=""
          />
          <h3>{data?.Blogs_by_id?.blog_heading}</h3>
          <p>
            <FaCalendarAlt /> last Updated : {data?.Blogs_by_id?.blog_date}
          </p>
          <p>{data?.Blogs_by_id?.Blog_description}</p>
        </div>
      </div>
    </>
  );
};

export default Blogcontent;
