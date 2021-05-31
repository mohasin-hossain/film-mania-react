import React from "react";
import styled from "styled-components";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="Athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="Racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
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
