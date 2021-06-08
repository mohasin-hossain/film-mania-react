import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          FilmMania
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "55%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 5rem;
    position: relative;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 1rem 0 0 0;

    #logo {
      font-size: 2.5rem;
    }

    h1 {
      margin-bottom: 1rem;
    }

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      background-color: #353535;

      li {
        padding: 0;
        a {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

const Line = styled(motion.div)`
  position: absolute;
  width: 0%;
  height: 0.3rem;
  background: #23d997;
  left: 50%;
  bottom: -80%;
  border-radius: 1rem;

  @media only screen and (max-width: 800px) {
    left: 20%;
  }
`;

export default Nav;
