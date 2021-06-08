import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animate";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us a Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2 variants={titleAnimation}>Send us an Email</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2 variants={titleAnimation}>Social Media</h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 3rem 5rem;
  min-height: 90vh;
  color: #353535;
  h2 {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 800px) {
    padding: 2rem 3rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

const Title = styled(motion.div)`
  margin-bottom: 2rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
const Circle = styled.div`
  height: 2rem;
  width: 2rem;
  background: #353535;
  border-radius: 50%;
`;

export default ContactUs;
