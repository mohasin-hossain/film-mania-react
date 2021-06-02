import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle>
        <div className="question">
          <h3>How Do I Start?</h3>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vel.
            </p>
            <div className="faq-line"></div>
          </div>
        </div>
      </Toggle>
      <div className="question">
        <h3>Daily Schedule</h3>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vel.
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
      <div className="question">
        <h3>Different Payment Methods</h3>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vel.
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
      <div className="question">
        <h3>What products do you offer?</h3>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, vel.
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
