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
import { pageAnimation } from "../animate";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff"}}
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="Racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
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

const Movie = styled.div`
  padding-bottom: 5rem;

  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 2rem;
  }

  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default OurWork;
