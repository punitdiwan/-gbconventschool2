import React from "react";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";
import ImageViewer from "./ImageViewer";

const Gallery = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{name:"Gallery"}}/>
      <ImageViewer/>
    </>
  );
};

export default Gallery;
