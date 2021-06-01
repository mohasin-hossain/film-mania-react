import React from "react";
// Importing Icons/Images
import home1 from "../img/home1.png";
// Importing Styled components
import { About, Description, Hide, Image } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, imgAnimation, fade } from "../animate";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> comes
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have proffessionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image className="image">
        <motion.img
          variants={imgAnimation}
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
