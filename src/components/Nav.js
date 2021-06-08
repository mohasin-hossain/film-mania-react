import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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

export default Nav;
