import React from "react";
import BottomHeader from "./BottomHeader";
import Global from "./Global";
import Header1 from "./Header1";

const Infra = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Infrastructures" }} />
      <div className="infrastructure">
        <p>
          Bhopal Academy Public School has a state-of-the-art infrastructure
          with all the modern facilities. This is commodious complex with
          separate hostels for boys and girls. It has a big playground
          surrounded by beautiful flower beds. The sun peeps through the needles
          of of the school campus adding to the magnificence of the scenic
          beauty of the school. It is the best location in the lap of nature.
        </p>
        <Global
          data={{
            title: "Infrastructure",
            para: "HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.",
          }}
        />
        <Global
          data={{
            title: "Digital Class Rooms",
            para: "HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.",
          }}
        />
        <Global
          data={{
            title: "Library",
            para: "HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.",
          }}
        />
        <Global
          data={{
            title: "Dispensary",
            para: "HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.",
          }}
        />
        <Global
          data={{
            title: "Transport",
            para: "HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.",
          }}
        />
      </div>
    </>
  );
};

export default Infra;
