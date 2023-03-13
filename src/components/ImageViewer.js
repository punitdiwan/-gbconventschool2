//import React from 'react'
import React, { useState, useCallback } from "react";
//import ImageViewer from "react-simple-image-viewer";
import { useQuery } from "graphql-hooks";
import * as constants from "../constants";


const View = () => {
  const { data } = useQuery(constants.Gallery);

 // console.log(data?.Gallery[0]?.gallery_image, "Gallery-daaataaaaa");



  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  // const images = [
  //   "./img1/g1.jpg",
  //   "./img1/g2.jpg",
  //   "./img1/g3.jpg",
  //   "./img1/g4.jpg",
  //   "./img1/g5.jpg",
  //   "./img1/g6.jpg",
  //   "./img1/g7.jpg",
  //   "./img1/g8.jpg",
  //     './images/g9.jpeg',
  //     './images/g10.jpeg',
  //     './images/g11.jpeg',
  //     './images/g12.jpeg',
  //     './images/g13.jpeg',
  //     './images/g14.jpeg',
  //     './images/g15.jpeg',
  //     './images/g16.jpeg',
  // ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  // const closeImageViewer = () => {
  //   setCurrentImage(0);
  //   setIsViewerOpen(false);
  // };
  return (
    <>
      <div className="image-new">
        {data?.Gallery[0]?.gallery_images.map((item, index) => (
         
          <img
           // src={src}
           src={`http://0.0.0.0:8055/assets/${item?.directus_files_id?.id}`}
            onClick={() => openImageViewer(index)}
            width="250"
            height="250"
            key={index}
            alt=""
          />
          
        ))}
        {/* {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )} */}
      </div>
    </>
  );
};

export default View;
