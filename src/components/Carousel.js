import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "graphql-hooks";
import * as constants from "../constants";

function CarouselFadeExample() {
  const { data } = useQuery(constants.slider);
  // console.log(
  //   data?.slider[0].slider_images[0]?.directus_files_id?.id,
  //   "Slider-daaataaaaa"
  // );

  return (
    <Carousel fade className="carousels">
      <Carousel.Item className="carousel1">
        <img
          className="d-block w-100"
          src={`http://0.0.0.0:8055/assets/${data?.slider[0].slider_images[1]?.directus_files_id?.id}`}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel1">
        <img
          className="d-block w-100 "
          src={`http://0.0.0.0:8055/assets/${data?.slider[0].slider_images[0]?.directus_files_id?.id}`}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className="carousel1">
        <img
          className="d-block w-100"
          src={`http://0.0.0.0:8055/assets/${data?.slider[0].slider_images[2]?.directus_files_id?.id}`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
