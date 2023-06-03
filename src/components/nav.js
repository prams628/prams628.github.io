import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import styled from "styled-components";

const navLinks = [
  {
    "name": "About Me",
    "url": "/"
  },
  {
    "name": "Education",
    "url": "/education"
  },
  {
    "name": "Experience",
    "url": "/experience"
  },
  {
    "name": "Projects",
    "url": "/projects"
  }
]

const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  align-items: right;
  /* Third Nav */
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


class NavBar extends Component {

  render() {
    return (
      <>
      <Nav>
        <Bars />

        <NavMenu>
          { navLinks &&
            navLinks.map(({ url, name }, i) => (
              <NavLink to={url} key={name}>
                {name}
              </NavLink>
            ))
          }
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
    )
  }
}

export default NavBar;