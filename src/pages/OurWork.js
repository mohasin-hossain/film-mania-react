import React from "react";
import styled from "styled-components";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small22.png";
import goodtimes from "../img/goodtimes-small22.png";
// Router
import { Link } from "react-router-dom";
// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imgAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animate";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={imgAnimation} src={athlete} alt="Athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} animate={controls} variants={fade} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="Racer" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        animate={controls2}
        variants={fade}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 1rem 5rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
    font-size: 2.2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 5rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 2rem;
    border-radius: 1rem;
  }

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
