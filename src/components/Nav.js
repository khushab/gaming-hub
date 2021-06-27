import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/gh1.png";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Gaming Hub</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  paddding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  @media screen and (max-width: 900px) {
    input {
      width: 50%;
      padding: 0.3rem;
      font-size: 0.8rem;
    }
    button {
      font-size: 0.8rem;
      padding: 0.3rem 1rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 5rem;
  }
`;
