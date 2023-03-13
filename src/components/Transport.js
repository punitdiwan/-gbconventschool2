import React from "react";
import BottomHeader from "./BottomHeader";
import Global from "./Global";
import Header1 from "./Header1";

const Transport = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "Transport" }} />
      <Global
        data={{
          title: "Transport",
          para: "The school has a well – maintained medical Aid room where children needing medical care are treated. Students are given a proper medical check up at regular intervals and a health record is maintained for each child. A qualified medical physician visits the premises every morning and evening moreover is always available on call. Two nurses are always available in the Medical – Aid room however as and when advised by the school physician students are sent under an escort to renowned hospitals or Distt. Hospital at Hamirpur for further medical check-up.",
        }}
      />
    </>
  );
};

export default Transport;
