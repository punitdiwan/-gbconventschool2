import React from "react";
import Header1 from "./Header1";
import BottomHeader from "./BottomHeader";

const About = () => {
  return (
    <>
      <Header1 />
      <BottomHeader data={{ name: "About Us" }} />

      <div className="aboutus">
        <div className="about_left">
          <img src="" alt="" />
        </div>
        <div className="about_mid">
          <h5>About Us</h5>
          <p>
            Shri Ram Higher Secondary School, Satyagyan Colony, Chhola Dusshera
            Maidan, Vidisha Road , Bhopal is a Higher secondary school for both
            girls and boys managed by Shri Ram Higher Secondary School group.
            Rose Mary Group was established in 1978 and run by &nbsp;
            <b>Mr Devendra Singh Ji</b>. Our institution is recogniged by the
            Madhya Pradesh Board of education.
          </p>
          <p>
            The aim of the school is to give its students a sound moral
            education while devoting special attention to their spiritual,
            intellectual, social and physical development. Our educational
            institutions are open to students of all religions. We are strongly
            committed to the cause of justice, therefore we offer educational
            opportunities also to the weaker section of society. We see each
            student as a unique and precious gift to her family and society, a
            person created by God to know and love Him and to work for Him by
            making this world a better place to live in. Parents are the first
            and most important educators to their children. School education can
            only be built on the foundation laid by the family.
          </p>
          <p>SPECIAL EFFORT ARE MADE AT Shri Ram Higher Secondary School </p>
          <p>
            To help students to become mature, reliable people of character.
          </p>
          <p>To be clear and firm on principles and courageous in action.</p>
          <p>To value and use their freedom judiciously.</p>
          <p>Strive after excellence in every field.</p>
          <p>
            To be unselfish in the service of their fellow human beings and
            appreciate all religions.
          </p>
        </div>
        <div className="about_right">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
