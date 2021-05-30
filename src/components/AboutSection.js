import React from "react";
// Importing Icons/Images
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> comes
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have proffessionals with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
