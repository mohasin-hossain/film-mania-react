import React from "react";
// Importing Icons/Images
import home1 from "../img/home1.png";
// Importing Styled components
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> comes
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have proffessionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="Guy with a camera" />
      </Image>
    </About>
  );
};

// Styled components

export default AboutSection;
