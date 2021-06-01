import React from "react";
// Importing Icons/Images
import home1 from "../img/home1.png";
// Importing Styled components
import { About, Description, Hide, Image } from "../styles";
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> comes
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
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

export default AboutSection;
