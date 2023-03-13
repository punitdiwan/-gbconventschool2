import React from "react";
import Carousel from "../components/Carousel";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container4 from "./Container4";
import Container6 from "./Container6";
import Header from "./Header";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Container1 />

      <Container2 />
      {/* <Container3 /> */}
      <Container4 />
      {/* <Container5 /> */}
      <Container6 />
      <ScrollToTop/>
    </>
  );
};

export default Home;
